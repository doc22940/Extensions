/// <reference path="./deformation/shapeKeyBased/VertexDeformation.ts"/>
/// <reference path="./deformation/shapeKeyBased/ShapeKeyGroup.ts"/>

/// <reference path="./deformation/skeletonBased/Pose.ts"/>
/// <reference path="./deformation/skeletonBased/PoseProcessor.ts"/>
/// <reference path="./deformation/skeletonBased/Skeleton.ts"/>

/// <reference path="./queue/MotionEvent.ts"/>
/// <reference path="./queue/EventSeries.ts"/>
/// <reference path="./queue/PovProcessor.ts"/>
/// <reference path="./queue/TimelineControl.ts"/>

module QI {
    /** An interface used so both implementing classes & Mesh do not have to reference each other.
     *
     * Any class implementing this MUST have constructor with a single argument of the root level mesh to display.
     * Tower of Babel generates instancing this way.
     */
    export interface GrandEntrance {
        makeEntrance() : void;
    }

    /**
     * Mesh sub-class which has a before render which processes events for ShapeKeysGroups, Skeleton Poses, and POV.
     */
    export class Mesh extends BABYLON.Mesh implements SeriesTargetable{
        public  debug = false;
        private _registeredFN : () => void;
        private _positions32F : Float32Array;
        private _normals32F   : Float32Array;

        private _povProcessor : PovProcessor;
        private _shapeKeyGroups = new Array<ShapeKeyGroup>();
        private _poseProcessor : PoseProcessor;

        // for normal building, full / mesh sized futures; shared by all shapekeygroups
        public  _originalPositions: Float32Array;
        public _futurePositions   : Float32Array;
        public _futureNormals     : Float32Array;

        // tracking system members
        private _clockStart = -1;
        private _renderCPU = 0;
        private _totalDeformations = 0;
        private _totalFrames = 0;

        // info for subclassers of beforeRender, if anything was done last frame
        public _shapeKeyChangesMade : boolean;
        public _skeletonChangesMade : boolean;

        // for Firefox
        private _lastFrameID = -1;

        // for grand entrances
        public static COMPUTED_GROUP_NAME = "COMPUTED-GROUP"; // having a '-' is strategic, since that is the separator for blender shapekeys (GROUP-KEYNAME)
        public static WHOOSH : BABYLON.Sound;
        public entranceMethod : GrandEntrance; // set prior to being on screen for any effect

        /**
         * @constructor - Args same As BABYLON.Mesh, except that using a source for cloning requires there be no shape keys
         * @param {string} name - The value used by scene.getMeshByName() to do a lookup.
         * @param {Scene} scene - The scene to add this mesh to.
         * @param {Node} parent - The parent of this mesh, if it has one
         * @param {Mesh} source - An optional Mesh from which geometry is shared, cloned.
         * @param {boolean} doNotCloneChildren - When cloning, skip cloning child meshes of source, default False.
         *                  When false, achieved by calling a clone(), also passing False.
         *                  This will make creation of children, recursive.
         */
        constructor(name: string, scene: BABYLON.Scene, parent: BABYLON.Node = null, source?: Mesh, doNotCloneChildren?: boolean) {
            super(name, scene, parent, source, doNotCloneChildren);
            if (source && source._shapeKeyGroups.length > 0) throw "QI.Mesh: meshes with shapekeys cannot be cloned";

            this._povProcessor = new PovProcessor(this, false);  // do not actually register as a beforeRender, use this classes & register below

            // tricky registering a prototype as a callback in constructor; cannot say 'this.beforeRender()' & must be wrappered
            var ref = this;
            this._registeredFN = function(){ref.beforeRender();};
            // using scene level before render, so always runs & only once per frame, incase there are multiple cameras
            scene.registerBeforeRender(this._registeredFN);
        }
        // ============================ beforeRender callback & tracking =============================
        public beforeRender() : void {
            if (this._positions32F === null || this._normals32F === null || TimelineControl.isSystemPaused || this._instancePaused) return;
            var startTime = BABYLON.Tools.Now;

            // Firefox can call for a render occasionally when user is on a different tab; ignore
            if (this._lastFrameID === TimelineControl.FrameID) return;
            this._lastFrameID = TimelineControl.FrameID;

            this._shapeKeyChangesMade = false;
            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++){
                // do NOT combine these 2 lines or only 1 group will run!
                var changed = this._shapeKeyGroups[g]._incrementallyDeform(this._positions32F, this._normals32F);
                this._shapeKeyChangesMade = this._shapeKeyChangesMade || changed;
            }

            this._skeletonChangesMade = false;
            if (this._poseProcessor){
               this._skeletonChangesMade = this._poseProcessor.incrementallyDeform();
            }

            // perform any POV events on the mesh not assigned a shapekey group or the pose processor
            this._povProcessor._incrementallyMove();

            if (this._shapeKeyChangesMade || this._skeletonChangesMade){
                if (this._shapeKeyChangesMade){
                    if (this.computeBonesUsingShaders || !this._skeletonChangesMade){
                        // resend positions & normals
                        super.updateVerticesData(BABYLON.VertexBuffer.PositionKind, this._positions32F);
                        super.updateVerticesData(BABYLON.VertexBuffer.NormalKind  , this._normals32F);
                    }
                }
                if (this._clockStart < 0) this._resetTracking(startTime); // delay tracking until the first change is made
                this._renderCPU += BABYLON.Tools.Now - startTime;
                this._totalDeformations++;
            }

            this._totalFrames ++;
        }

        public resetTracking() : void{
            this._resetTracking(BABYLON.Tools.Now);
        }

        private _resetTracking(startTime : number) : void{
            this._clockStart = startTime;
            this._renderCPU = 0;
            this._totalDeformations = 0;
            this._totalFrames = 0;
        }

        public getTrackingReport(reset : boolean = false) : string{
            var totalWallClock = BABYLON.Tools.Now - this._clockStart;
            var report =
                    "\nNum Deformations: " + this._totalDeformations +
                    "\nRender CPU milli: " + this._renderCPU.toFixed(2) +
                    "\nRender CPU milli / Deformations: " + (this._renderCPU / this._totalDeformations).toFixed(2) +
                    "\nWallclock milli / Deformations: " + (totalWallClock / this._totalDeformations).toFixed(2) +
                    "\nMemo, Deformations / Sec: " + (this._totalDeformations / (totalWallClock / 1000)).toFixed(2) +
                    "\nMemo, Frames with no deformation: " + (this._totalFrames - this._totalDeformations) +
                    "\nMemo, Total vertices: " + this.getTotalVertices() +
                    "\nShape keys:";
            for (var i = 0; i < this._shapeKeyGroups.length; i++)
                report += "\n" + this._shapeKeyGroups[i].toString();

            if (reset) this.resetTracking();
            return report;
        }
        // ======================================== Overrides ========================================
        /** @override */
        public createInstance(name: string): BABYLON.InstancedMesh {
            if (this._shapeKeyGroups.length > 0){
                 BABYLON.Tools.Error("QI.Mesh:  Shared vertex instances not possible with shape keys");
                 return null;

            }else return super.createInstance(name);
        }

        /** @override */
        public convertToFlatShadedMesh() : void {
            if (this._shapeKeyGroups.length > 0){
                 BABYLON.Tools.Error("QI.Mesh:  Flat shading must be done on export with shape keys");
                 return null;

            }else super.convertToFlatShadedMesh();
        }

        /** @override
         * wrappered is so positions & normals vertex buffer & initial data can be captured
         */
        public setVerticesData(kind: any, data: any, updatable?: boolean) : void {
            super.setVerticesData(kind, data, updatable || kind === BABYLON.VertexBuffer.PositionKind || kind === BABYLON.VertexBuffer.NormalKind);

            if (kind === BABYLON.VertexBuffer.PositionKind){
                this._positions32F = this.setPositionsForCPUSkinning(); // get positions from here, so can morph & CPU skin at the same time

                // need to make a by value copy of the orignal position data, to build futurePos in call to normalsforVerticesInPlace()
                this._originalPositions = new Float32Array(data.length);
                for (var i = 0, len = data.length; i < len; i++){
                    this._originalPositions[i] = data[i];
                }
                this._futurePositions = new Float32Array(data.length);
                this._futureNormals   = new Float32Array(data.length);
            }
            else if (kind === BABYLON.VertexBuffer.NormalKind){
                this._normals32F = this.setNormalsForCPUSkinning(); // get normals from here, so can morph & CPU skin at the same time
            }
            else if (kind === BABYLON.VertexBuffer.MatricesWeightsKind){
                // exporter assigns skeleton before setting any vertex data, so should be ok
                if (!this._poseProcessor) this._poseProcessor = new PoseProcessor(<Skeleton> this.skeleton, this, true);
            }
        }

        /** @override */
        public dispose(doNotRecurse?: boolean) : void {
            super.dispose(doNotRecurse);
            this.getScene().unregisterBeforeRender(this._registeredFN);
        }
        // =================================== EventSeries related ===================================
        /**
         * Primarily called by Blender generated code.
         * @param {QI.ShapeKeyGroup} shapeKeyGroup - prebuilt group to add
         */
        public addShapeKeyGroup(shapeKeyGroup : ShapeKeyGroup) : void {
            this._shapeKeyGroups.push(shapeKeyGroup);
        }

        /**
         * Cause the group to go out of scope.  All resources on heap, so GC should remove.
         * @param {string} groupName - The name of the group to look up.
         */
        public removeShapeKeyGroup(groupName : string) : void {
            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++){
                if (this._shapeKeyGroups[g].getName() === groupName){
                    this._shapeKeyGroups = this._shapeKeyGroups.splice(g, 1);
                    return;
                }
            }
            BABYLON.Tools.Warn("QI.Mesh:  no shape key group with name: " + groupName);
        }

        /**
         * Go thru an array of Events prior to creating an event series.  Add a stall for any queue(s) that
         * does not have an event.  Useful for syncing the entire meshe's groups even though a queue may not
         * have an event.
         *
         * An example is when inserting a Grand Entrance.  The entrance may only use a shape key group.  The
         * coder may wish to add on / directly swing into action afterward using a pose.  If there was not a
         * stall added to the pose processor, pose event would begin before entrance was complete.
         *
         * @param {Array<any>} events - Events argument or EventSeries, prior to instancing.
         * @param {number} stallMillis - Amount of time to stall a queue.  Do not take into account any EventSeries
         * repeats, if any.
         * @param {string} groupForFuncActions - Should match the EventSeries constructor arg.  Defaults are the same.
         * @returns {Array<any>} - Same array as passed, with stalls added.
         */
        public appendStallForMissingQueues(events : Array<any>, stallMillis : number, groupForFuncActions = PovProcessor.POV_GROUP_NAME) : Array<any> {
            // flags of things to check for
            var povFound = false;
            var skeletonFound = !this._poseProcessor; // say found when no pose processor
            var nSkGrps = this._shapeKeyGroups.length;
            var shapeGrpFound = new Array<boolean>(nSkGrps);
            var funcActionsFound = false;

            // populate all the flags of things found
            for (var i = 0, len = events.length; i < len; i++) {
                if (events[i] instanceof VertexDeformation){
                    var grpName = (<VertexDeformation> events[i])._groupName;
                    for (var s = 0; s < nSkGrps; s++){
                        if (this._shapeKeyGroups[s]._name === grpName) {
                            shapeGrpFound[s] = true;
                            break;
                        }
                    }
                } else if (events[i] instanceof PoseEvent) {
                    skeletonFound = true;

                // must check last, since VertexDeformation & PoseEvent subclasses of MotionEvent
                } else if (!(events[i] instanceof MotionEvent)) {
                    // functions / actions / & nonMotionEvents
                    funcActionsFound = true;

                } else povFound = true;
            }

            // flag queue for functions / actions / nonMotionEvents, when present
            if (funcActionsFound) {
                if (groupForFuncActions === PovProcessor.POV_GROUP_NAME) {
                    povFound = true;

                } else if (groupForFuncActions === PoseProcessor.INTERPOLATOR_GROUP_NAME) {
                    skeletonFound = true;

                } else {
                    for (var s = 0; s < nSkGrps; s++) {
                        if (groupForFuncActions === this._shapeKeyGroups[s]._name) {
                            shapeGrpFound[s] = true;
                            break;
                        }
                    }
                }
            }

            // add stalls for missing queues
            if (!povFound) {
                events.push(new Stall(stallMillis, PovProcessor.POV_GROUP_NAME));
            }

            if (!skeletonFound) {
                events.push(new Stall(stallMillis, PoseProcessor.INTERPOLATOR_GROUP_NAME));
            }

            for (var s = 0; s < nSkGrps; s++) {
                if (!shapeGrpFound[s]) {
                    events.push(new Stall(stallMillis, this._shapeKeyGroups[s]._name));
                }
            }
            return events;
        }

        /**
         * wrapper a single MotionEvent into an EventSeries, defualting on all EventSeries optional args
         * @param {MotionEvent} event - Event to wrapper.
         */
        public queueSingleEvent(event : MotionEvent) : void {
            this.queueEventSeries(new EventSeries([event]));
        }

        /**
         * SeriesTargetable implementation method
         * @param {EventSeries} eSeries - The series to append to the end of series queue
         * @param {boolean} clearQueue - When true, stop anything queued from running.  Note this will also stop
         * any current MotionEvent.
         * @param {boolean} stopCurrentSeries - When true, stop any current MotionEvent too.
         * @param {boolean} insertSeriesInFront - Make sure series is next to run.  Primarily used by grand entrances.
         * clearQueue & stopCurrentSeries args are ignored when this is true.
         */
        public queueEventSeries(eSeries : EventSeries, clearQueue? : boolean, stopCurrentSeries? : boolean, insertSeriesInFront? : boolean) : void {
            var groups : Array<string>;
            if  (this.debug) groups = [];
            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++){
                if (eSeries.isGroupParticipating(this._shapeKeyGroups[g].getName())){
                    if (insertSeriesInFront){
                        this._shapeKeyGroups[g].insertSeriesInFront(eSeries);
                    } else {
                        this._shapeKeyGroups[g].queueEventSeries(eSeries, clearQueue, stopCurrentSeries);
                    }
                    if (groups) groups.push(this._shapeKeyGroups[g].getName());
                }
            }
            if (eSeries.isGroupParticipating(PoseProcessor.INTERPOLATOR_GROUP_NAME)){
                if (insertSeriesInFront){
                    this._poseProcessor.insertSeriesInFront(eSeries);
                } else {
                    this._poseProcessor.queueEventSeries(eSeries);
                }
                if (groups) groups.push(PoseProcessor.INTERPOLATOR_GROUP_NAME);
            }

            if (eSeries.isGroupParticipating(PovProcessor.POV_GROUP_NAME)){
                if (insertSeriesInFront){
                    this._povProcessor.insertSeriesInFront(eSeries);
                } else {
                    this._povProcessor.queueEventSeries(eSeries);
                }
                if (groups) groups.push(PovProcessor.POV_GROUP_NAME);
            }

            // diagnostic logging
            if (groups){
                if (groups.length === 0) BABYLON.Tools.Warn("QI.Mesh:  no shape keys groups or skeleton participating in event series");
                else{
                    var msg = "QI.Mesh:  series queued to " + groups.length + " group(s): [ ";
                    for (var i = 0; i < groups.length; i++){
                        msg += groups[i] + " ";
                    }
                    BABYLON.Tools.Log(msg + "]");
                }
            }
        }
        // ==================================== Shapekey Wrappers ====================================
        public hasShapeKeyGroup(groupName : string) : boolean {
            return this.getShapeKeyGroup(groupName) !== null;
        }

        public getShapeKeyGroup(groupName : string) : ShapeKeyGroup {
            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++){
                if (this._shapeKeyGroups[g].getName() === groupName){
                    return this._shapeKeyGroups[g];
                }
            }
            return null;
        }

        public getLastPoseNameQueuedOrRun() : string {
            return this._poseProcessor ? this._poseProcessor.getLastPoseNameQueuedOrRun() : null;
        }
        // ==================================== Skeleton Wrappers ====================================
        public assignPoseLibrary(libraryName : string) : void {
            if (this.skeleton){
                (<Skeleton> this.skeleton).assignPoseLibrary(libraryName);
            }
        }

        public assignPoseImmediately(poseName : string) : void {
             if (this.skeleton){
                 (<Skeleton> this.skeleton)._assignPoseImmediately(poseName);
                 this._poseProcessor._lastPoseRun = poseName;
            }
        }

       public addSubPose(poseName : string, immediately? : boolean) : void {
            if (this.skeleton){
                (<Skeleton> this.skeleton).addSubPose(poseName);
                if (immediately){
                    this.queueSingleEvent(new PoseEvent(poseName, 1) ); // 1 milli is close enough to immediate
                }
            }
        }

        public removeSubPose(poseName : string) : void {
            if (this.skeleton){
                (<Skeleton> this.skeleton).removeSubPose(poseName);
            }
        }

        public clearAllSubPoses(){
            if (this.skeleton){
                (<Skeleton> this.skeleton).clearAllSubPoses();
            }
        }
        // =================================== BJS side ShapeGroup ===================================
        /** entry point called by TOB generated code, when everything is ready. */
        public grandEntrance() : void {
            if (this.entranceMethod) this.entranceMethod.makeEntrance(); else this.makeVisible(true);
         }

        public static MakeWhoosh(scene: BABYLON.Scene) : BABYLON.Sound {
            var toBuf = function(base64){
                var bStr = window.atob(base64);

                var len = bStr.length;
                var ret = new Float32Array(len / 2);
                var b1, b2, asShort, isNeg;
                for(var i = 0, j = 0; i < len; i += 2, j++){
                    b1 = bStr.charCodeAt(i);
                    b2 = bStr.charCodeAt(i + 1);
                    isNeg = b1 >> 7 === 1;
                    b1 = b1 & 0x7F;
                    asShort = 256 * b1 + b2;
                    if (isNeg) asShort -= 0x8000;
                    ret[j] = asShort / 0x7FFF;
                }
                return ret;
            }

            var context = BABYLON.Engine.audioEngine.audioContext;
            var audioBuffer = context.createBuffer(1, 13517, 44100);
            audioBuffer.getChannelData(0).set(toBuf("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") );
            var snd = new BABYLON.Sound("whoosh", null, scene);
            snd.setAudioBuffer(audioBuffer);
            return snd;
        }

        /**
         * make computed shape key group when missing.  Used mostly by GrandEntrances.
         * @returns {ShapeKeyGroup} used for Javascript made end states.
         */
        public makeComputedGroup() : ShapeKeyGroup {
            var computedGroup = this.getShapeKeyGroup(Mesh.COMPUTED_GROUP_NAME);

            if (!computedGroup){
                var nElements = this._originalPositions.length;
                var affectedPositionElements = new Uint32Array(nElements);

                for (var i = 0; i < nElements; i++){
                    affectedPositionElements[i] = i;
                }
                computedGroup = new ShapeKeyGroup(this, Mesh.COMPUTED_GROUP_NAME, affectedPositionElements);
                this.addShapeKeyGroup(computedGroup);
            }
            return computedGroup;
        }

        /**
         * make the whole heirarchy visible or not.  The queues are either paused or resumed as well.
         * @param {boolean} visible - To be or not to be
         */
        public makeVisible(visible : boolean) : void {
            this.isVisible = visible;
            if (visible)
                this.resumeInstancePlay();
            else
                this.pausePlay();

            var children = this.getChildMeshes();
            for (var i = 0, len = children.length; i < len; i++) {
                if (children[i] instanceof Mesh){
                    (<Mesh> children[i]).makeVisible(visible);

                } else{
                    children[i].isVisible = visible;
                }
            }
        }
        // ============================ Mesh-instance wide play - pause ==============================
        private _instancePaused = true; // do not allow anything to run till visible; managed by grand entrance

        /**
         * returns {boolean} True, when this specific instance is paused
         */
        public isPaused() : boolean { return this._instancePaused; }

        /**
         * Called to pause this specific instance from performing additional animation.
         * This is independent of a system pause.
         */
        public pausePlay() : void {
             this._instancePaused = true;

            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++) {
                this._shapeKeyGroups[g].pauseInstance();
            }

            if (this._poseProcessor){
                this._poseProcessor.pauseInstance();
            }

            if (this._povProcessor){
                this._povProcessor.pauseInstance();
            }
        }

        /**
         * Called to resume animating this specific instance.
         * A system in pause will still prevent animation from resuming.
         */
        public resumeInstancePlay() : void {
            this._instancePaused = false;

            for (var g = 0, len = this._shapeKeyGroups.length; g < len; g++) {
                this._shapeKeyGroups[g].resumeInstancePlay();
            }

            if (this._poseProcessor){
                this._poseProcessor.resumeInstancePlay();
            }

            if (this._povProcessor){
                this._povProcessor.resumeInstancePlay();
            }
        }
    }
}
