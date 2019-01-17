[{"Owner":"JCPalmer","Date":"2015-04-07T14:50:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_u_gt__lt_strong_gt_S_lt_/strong_gt__lt_/u_gt__lt_/span_gt_ingle _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_u_gt__lt_strong_gt_I_lt_/strong_gt__lt_/u_gt__lt_/span_gt_nstruction _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_u_gt__lt_strong_gt_M_lt_/strong_gt__lt_/u_gt__lt_/span_gt_ultiple _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_u_gt__lt_strong_gt_D_lt_/strong_gt__lt_/u_gt__lt_/span_gt_ata discussion started on the Wingnut Chronicles_co_ but I think this discussion needs its own topic.  To recap so that most of it is here_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_Intel &amp_sm_ browser makers were working on allowing a set of special CPU instructions to be called within Javascript.  See _lt_a href_eq__qt_https_dd_//software.intel.com/en-us/articles/simd-javascript-faster-html5-apps_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//software.intel.com/en-us/articles/simd-javascript-faster-html5-apps_lt_/a_gt__lt_/li_gt__lt_li_gt_Deltakosh has enabled many parallel methods in Math.ts to be swap out for SIMD versions when detected._lt_/li_gt__lt_li_gt_Though not yet in production_co_ testing can be run on Firefox nightly_co_ Version 40_co_ which I put on my system._lt_/li_gt__lt_li_gt_I found a SIMD test page_co_ which I ran as both Firefox 37_co_ and 40.  Here is a picture of improvement.  Remember not everything can be done using this._lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-16455000-1428415978.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-16455000-1428415978_thumb.png_qt_ data-fileid_eq__qt_4029_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-16455000-1428415978_thumb.pn_qt__gt__lt_/a_gt__lt_/li_gt__lt_/ul_gt__lt_br_gt__lt_p_gt_I did some more testing over the weekend using BJS scenes_co_ but found no discernible change.  Been thinking for a while. _lt_/p_gt__lt_ul_gt__lt_li_gt_Those math methods are probably not called enough to make a difference.  Probably more than this is required to make great impact.  _lt_/li_gt__lt_li_gt_SIMD works using Float32Arrays_co_ which BJS does very little of.  Those Math.ts methods seem to have to load stuff to float32.  (Hard to tell with out any documentation)_lt_/li_gt__lt_/ul_gt__lt_p_gt_The Morph extension I made deals exclusively with Float32Arrays.  In the beforerenderer_co_ each morph is an interpolation of position &amp_sm_ normal end points.  I am thinking about coming up with a 2nd way to do this which does the +_co_ the -_co_ and the * in batches.  No loading to float32 is required_co_ but I do not know if or where SIMD.js is documented_co_ so would have to reverse engineer it from math.ts and that test page.  Does this look feasible?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_/** * Called by the beforeRender() registered by this._mesh * ShapeKeyGroup is a subclass of POV.BeforeRenderer_co_ so need to call its beforeRender method_co_ _incrementallyMove() * @param {Float32Array} positions - Array of the positions for the entire mesh_co_ portion updated based on _affectedPositionElements * @param {Float32Array} normals   - Array of the normals   for the entire mesh_co_ portion updated based on _affectedVertices */public _incrementallyDeform(positions _dd_ Float32Array_co_ normals _dd_Float32Array) _dd_ boolean {    super._incrementallyMove()_sm_                // test of this._currentSeries is duplicated_co_ since super.incrementallyMove() cannot return a value    // is possible to have a MotionEvent(with no deformation)_co_ which is not a ReferenceDeformation sub-class    if (this._currentSeries _eq__eq__eq_ null || !(this._currentStepInSeries instanceof MORPH.ReferenceDeformation) ) return false_sm_                if (this._ratioComplete &lt_sm_ 0) return false_sm_ // MotionEvent.BLOCKED or MotionEvent.WAITING                // update the positions    for (var i _eq_ 0_sm_ i &lt_sm_ this._nPosElements_sm_ i++){        positions[this._affectedPositionElements[i]] _eq_ this._priorFinalPositionVals[i] + ((this._currFinalPositionVals[i] - this._priorFinalPositionVals[i]) * this._ratioComplete)_sm_    }                // update the normals    var mIdx _dd_ number_co_ kIdx _dd_ number_sm_    for (var i _eq_ 0_sm_ i &lt_sm_ this._nVertices_sm_ i++){        mIdx _eq_ 3 * this._affectedVertices[i] // offset for this vertex in the entire mesh        kIdx _eq_ 3 * i_sm_                        // offset for this vertex in the shape key group        normals[mIdx    ] _eq_ this._priorFinalNormalVals[kIdx    ] + ((this._currFinalNormalVals[kIdx    ] - this._priorFinalNormalVals[kIdx    ]) * this._ratioComplete)_sm_        normals[mIdx + 1] _eq_ this._priorFinalNormalVals[kIdx + 1] + ((this._currFinalNormalVals[kIdx + 1] - this._priorFinalNormalVals[kIdx + 1]) * this._ratioComplete)_sm_        normals[mIdx + 2] _eq_ this._priorFinalNormalVals[kIdx + 2] + ((this._currFinalNormalVals[kIdx + 2] - this._priorFinalNormalVals[kIdx + 2]) * this._ratioComplete)_sm_    }    return true_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-07T18:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll ask people from Intel to swing by here to help you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But AFAIC_co_ this is PERFECTLY feasible._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From Babylon.js point of view_co_ bones for instance can get a lot of improvements wehn SIMD.js is available_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeterJensen","Date":"2015-04-08T17:10:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Thank You @JCPalmer for taking an interest in SIMD.js_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Currently_co_ our documentation is in the form of a polyfill.  We_t_ve gone to great length to have the functionality and semantics of the polyfill match the implementations.  The polyfill_co_ tests_co_ and benchmarks_co_ we_t_ve been using_co_ currently resides here_dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_a href_eq__qt_https_dd_//github.com/johnmccutchan/ecmascript_simd_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/johnmccutchan/ecmascript_simd_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Your example code is a perfect candidate for using SIMD to get a ~4x speedup.  I_t_ve taken a stab at rewriting your code.  This is just me writing code_co_ so there might be both syntax errors and functional errors_co_ but at least you_t_ll get the gist._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    // update the positions.  4 at a time    for (var i _eq_ 0_sm_ i &lt_sm__eq_ this._nPosElements-4_sm_ i +_eq_ 4){        var priorFinalPositionVals _eq_ SIMD.float32x4.load(this._priorFinalPositionVals_co_ i)_sm_        var currFinalPositionVals  _eq_ SIMD.float32x4.load(this._currFinalPositionVals_co_ i)_sm_        var ratioComplete          _eq_ SIMD.float32x4.splat(this._ratioComplete)_sm_        var positionx4             _eq_ SIMD.float32x4.add(priorFinalPositionVals_co_ SIMD.float32x4.mul(SIMD.float32x4.sub(currFinalPositionVals_co_ priorFinalPositionVals)_co_ ratioComplete))_sm_        SIMD.float32x4.store(positions_co_ this._affectedPositionElements[i]_co_ positionx4)_sm_    }    // handle possible remainder    for (var i _eq_ this._nPosElements &amp_sm_ ~0x3_sm_ i &lt_sm_ this._nPosElements_sm_ i++){        positions[this._affectedPositionElements[i]] _eq_ this._priorFinalPositionVals[i] + ((this._currFinalPositionVals[i] - this._priorFinalPositionVals[i]) * this._ratioComplete)_sm_    }               // update the normals    var mIdx _dd_ number_co_ kIdx _dd_ number_sm_    for (var i _eq_ 0_sm_ i &lt_sm_ this._nVertices_sm_ i++){        mIdx _eq_ 3 * this._affectedVertices[i] // offset for this vertex in the entire mesh        kIdx _eq_ 3 * i_sm_                        // offset for this vertex in the shape key group        var priorNormalVals      _eq_ SIMD.float32x4.loadXYZ(this._priorFinalNormalVals_co_ kIdx)_sm_        var currFinalNormalVals  _eq_ SIMD.float32x4.loadXYZ(this._currFinalNormalVals_co_ kIdx)_sm_        var priorFinalNormalVals _eq_ SIMD.float32x4.loadXYZ(this._priorFinalNormalVals_co_ kIdx)_sm_        var ratioComplete        _eq_ SIMD.float32x4.splat(this._ratioComplete)_sm_        var normalx4             _eq_ SIMD.float32x4.add(priorFinalNormalVals_co_ SIMD.float32x4.mul(SIMD.float32x4.sub(currFinalNormalVals_co_ priorFinalNormalVals)_co_ ratioComplete))_sm_        SIMD.float32x3.storeXYZ(normals_co_ mIdx_co_ normalx4)_sm_    }_lt_/pre_gt__lt_/div_gt__lt_p_gt_Besides these extensions being in FF nightly_co_  there_t_s also a Chromium prototype available (developed by Intel)_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You should be able to download that here_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//drive.google.com/open?id_eq_0B9RVWZYRtYFeWTFoNUJfUkdDRlE&amp_sm_authuser_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/open?id_eq_0B9RVWZYRtYFeWTFoNUJfUkdDRlE&amp_sm_authuser_eq_0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll try to get your little code snippet extracted into a benchmark kernel that we can use in our benchmarking framework._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again thanks for writing this post and providing the code snippet._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Peter Jensen_lt_/p_gt__lt_p_gt_Intel_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-08T21:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!   That was more than I had expected.  I already have changes to that file that are not checked in.  Early next week_co_ I will try to implement this.  I also have a sample scene to test.  Could add a switch to the scene to force it to not use SIMD_co_ but will just switch between browsers initially._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-11T15:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just probably a note to myself_co_ but in case anyone cares.  Firefox nightly v40 runs pretty poorly_co_ relative v37.  This makes any improvements difficult to see. Am just going to stick with it for now though_co_ and get the thing running out of the way._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-11T23:00:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ now I am into this_co_ finally.  I started looking at the doc link.  Even started trying to make a d.ts from the full API source code. (I saw how Math.ts got around a d.ts in line 3 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ).  I have my first questions_co_ but first I have broken out my 2 operations (positions &amp_sm_ normals) into separate functions_co_ so I can do the swap out like Math.ts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are both versions of updatePositions_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_private updatePositions(positions _dd_ Float32Array) _dd_ void {    for (var i _eq_ 0_sm_ i &lt_sm_ this._nPosElements_sm_ i++){        positions[this._affectedPositionElements[i]] _eq_ this._priorFinalPositionVals[i] + ((this._currFinalPositionVals[i] - this._priorFinalPositionVals[i]) * this._ratioComplete)_sm_    }            }        private updatePositionsSIMD(positions _dd_ Float32Array) _dd_ void{    for (var i _eq_ 0_sm_ i &lt_sm__eq_ this._nPosElements-4_sm_ i +_eq_ 4){        var priorFinalPositionVals _eq_ SIMD.float32x4.load(this._priorFinalPositionVals_co_ i)_sm_        var currFinalPositionVals  _eq_ SIMD.float32x4.load(this._currFinalPositionVals_co_ i)_sm_        var ratioComplete          _eq_ SIMD.float32x4.splat(this._ratioComplete)_sm_        var positionx4             _eq_ SIMD.float32x4.add(priorFinalPositionVals_co_ SIMD.float32x4.mul(SIMD.float32x4.sub(currFinalPositionVals_co_ priorFinalPositionVals)_co_ ratioComplete))_sm_        SIMD.float32x4.store(positions_co_ this._affectedPositionElements[i]_co_ positionx4)_sm_    }  }   _lt_/pre_gt__lt_p_gt_When I looked at the source code for the static function float32x4.load()_co_ I found this is a helper function with all kinds of checking &amp_sm_ calling of other helper functions.  Trust me_co_ I value checking arguments &amp_sm_ see its importance in a typeless Javascript world.  But I am coming from Typescript &amp_sm_ and my args are explicitly Float32Array.  Paying all this overhead seems like it would be more than I would save._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_  /**    * @param {Typed array} tarray An instance of a typed array.    * @param {Number} index An instance of Number.    * @return {float32x4} New instance of float32x4.    */  SIMD.float32x4.load _eq_ function(tarray_co_ index) {    if (!isTypedArray(tarray))      throw new TypeError(_qt_The 1st argument must be a typed array._qt_)_sm_    if (!isInt32(index))      throw new TypeError(_qt_The 2nd argument must be an Int32._qt_)_sm_    var bpe _eq_ tarray.BYTES_PER_ELEMENT_sm_    if (index &lt_sm_ 0 || (index * bpe + 16) &gt_sm_ tarray.byteLength)      throw new RangeError(_qt_The value of index is invalid._qt_)_sm_    var f32temp _eq_ _f32x4_sm_    var array _eq_ bpe _eq__eq_ 1 ? _i8x16 _dd_                bpe _eq__eq_ 2 ? _i16x8 _dd_                bpe _eq__eq_ 4 ? (tarray instanceof Float32Array ? f32temp _dd_ _i32x4) _dd_                _f64x2_sm_    var n _eq_ 16 / bpe_sm_    for (var i _eq_ 0_sm_ i &lt_sm_ n_sm_ ++i)      array[i] _eq_ tarray[index + i]_sm_    return SIMD.float32x4(f32temp[0]_co_ f32temp[1]_co_ f32temp[2]_co_ f32temp[3])_sm_  }_lt_/pre_gt__lt_p_gt_I wrote a 2nd SIMD version_co_ using the float32x4 constructor directly_co_ bypassing all that._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_private updatePositionsSIMDToo(positions _dd_ Float32Array) _dd_ void{    var ratioComplete _eq_ SIMD.float32x4(this._ratioComplete_co_ this._ratioComplete_co_ this._ratioComplete_co_ this._ratioComplete)    for (var i _eq_ 0_sm_ i &lt_sm__eq_ this._nPosElements-4_sm_ i +_eq_ 4){        var priorFinalPositionVals _eq_ SIMD.float32x4(this._priorFinalPositionVals[i]_co_ this._priorFinalPositionVals[i + 1]_co_ this._priorFinalPositionVals[i + 2]_co_ this._priorFinalPositionVals[i + 3])_sm_        var currFinalPositionVals  _eq_ SIMD.float32x4(this._currFinalPositionVals [i]_co_ this._currFinalPositionVals [i + 1]_co_ this._currFinalPositionVals [i + 2]_co_ this._currFinalPositionVals [i + 3])_sm_        var positionx4             _eq_ SIMD.float32x4.add(priorFinalPositionVals_co_ SIMD.float32x4.mul(SIMD.float32x4.sub(currFinalPositionVals_co_ priorFinalPositionVals)_co_ ratioComplete))_sm_        SIMD.float32x4.store(positions_co_ this._affectedPositionElements[i]_co_ positionx4)_sm_    }           }_lt_/pre_gt__lt_p_gt_As soon as I get the swapper ready I will test both ways.  Thought I would give you this feedback for comment. Also I think I will need to take into # of positions is not evenly divided by 4 at the end_co_ right?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-12T17:10:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I have not built the swapper yet_co_ just compiled referencing a different method (pure javascript_co_ SIMD.load_co_ &amp_sm_ SIMD constructor).  Morph has a built-in wall clock tracker isolating just the deformations.  They were all very close_co_ but Javascript was the fastest.  Have only done positions so far.  Adding the normals interpolation next._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One thing I saw in the readme.md was Float32x4Array.  The entire class is using typed arrays already.  Maybe generate it as Float32x4Array &amp_sm_ Uint32x4Array.  Then just do the calc without all the throw away float32x4 to garbage collect._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-12T17:40:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ the normals using SIMD was 4 x slower than Javascript.  Thinking more about using the Float32x4Array.  Doing the whole class is too much work.  Making versions of the prior &amp_sm_ current_co_ (positions &amp_sm_ normals) outside of the render loop as those arrays is next._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]