[{"Owner":"Bladetrick","Date":"2018-10-09T20:27:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy scenario_dd_ _lt_br /_gt_\n\t- An OBJ file containing several meshes (cube_co_ cones_co_ monkey head_co_ etc) all touching each other_lt_br /_gt_\n\t- A sphere (or more than one) created off to the side of the imported mesh._lt_br /_gt_\n\t_lt_br /_gt_\n\tMy objectives are_dd__lt_br /_gt_\n\t- Determine the closest point on the imported mesh from the sphere._lt_br /_gt_\n\t- Create another Sphere at that point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe end result is a sphere on the surface of the imported mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBefore I started playing with Babylon JS_co_ I had tried Three JS.  I found a small routine that would do this.  Now I_t_d like to do the same thing in Babylon.  Here_t_s the Three JS.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        // This function is called first.  it accepts datapoint as a parameter.  datapoint is the sphere that is off to the side of the imported model.\n        function updateClosestPointPosition(datapoint) {\n            var p _eq_ datapoint.position_sm_   \n            var geom _eq_ partmodel.geometry_sm_ // cone.geometry\n            \n            var closestDistance _eq_ 1e9_sm_     // Don_t_t understand 1e9 to be honest\n            var closestFace _eq_ geom.faces.forEach(function (face) {\n                var normal _eq_ face.normal_sm_\n                var va _eq_ geom.vertices[face.a]_sm_\n                var vb _eq_ geom.vertices[face.b]_sm_\n                var vc _eq_ geom.vertices[face.c]_sm_\n                var pd _eq_ normal.dot(p.clone().sub(va))_sm_\n                // move p -(pd - td) units in the direction of the normal\n                var proj _eq_ p.clone().sub(normal.clone().multiplyScalar(pd))_sm_\n                // closest point of proj and the triangle\n                var cp _eq_ closestPointToTriangle(proj_co_ va_co_ vb_co_ vc)_sm_\n                if (cp.distanceTo(p) &lt_sm_ closestDistance) {\n                    closestDistance _eq_ cp.distanceTo(p)_sm_\n                    closestPoint.position.copy(cp)_sm_\n                    closestPoint.position.y.toString() + _t__co__t_ + closestPoint.position.z.toString() + _t__co__t__sm_\n                }                 \n        })\n\n        function sameSide(p1_co_ p2_co_ a_co_ b) {\n            var ab _eq_ b.clone().sub(a)\n            var ap1 _eq_ p1.clone().sub(a)\n            var ap2 _eq_ p2.clone().sub(a)\n            var cp1 _eq_ new THREE.Vector3().crossVectors(ab_co_ ap1)\n            var cp2 _eq_ new THREE.Vector3().crossVectors(ab_co_ ap2)\n            return cp1.dot(cp2) &gt_sm__eq_ 0\n        }\n\n        function pointInTriangle(p_co_ a_co_ b_co_ c) {\n            return sameSide(p_co_ a_co_ b_co_ c) &amp_sm_&amp_sm_ sameSide(p_co_ b_co_ a_co_ c) &amp_sm_&amp_sm_ sameSide(p_co_ c_co_ a_co_ b)\n        }\n\n        function closestToSegment(p_co_ a_co_ b) {\n            var ab _eq_ b.clone().sub(a)\n            var nab _eq_ ab.clone().normalize()\n            var n _eq_ nab.dot(p.clone().sub(a))\n            if (n &lt_sm_ 0) return a\n            if (n &gt_sm_ ab.length()) return b\n            return a.clone().add(nab.multiplyScalar(n))\n        }\n\n        function closestToSides(p_co_ sides) {\n            var minDist _eq_ 1e9\n            var ret\n            sides.forEach(function (side) {\n                var ct _eq_ closestToSegment(p_co_ side[0]_co_ side[1])\n                var dist _eq_ ct.distanceTo(p)\n                if (dist &lt_sm_ minDist) {\n                    minDist _eq_ dist\n                    ret _eq_ ct\n                }\n            })\n\n            return ret\n        }\n\n        function closestPointToTriangle(p_co_ a_co_ b_co_ c) {\n            // if the point is inside the triangle then it_t_s the closest point\n            if (pointInTriangle(p_co_ a_co_ b_co_ c)) return p\n            // otherwise it_t_s the closest point to one of the sides\n            return closestToSides(p_co_ [[a_co_ b]_co_ [b_co_ c]_co_ [a_co_ c]])\n        }\n        _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIs there an easy way to do this in babylon js or do i need to work on some conversion?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the playground I started_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#NSSAV4_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#NSSAV4_lt_/a_gt__lt_br /_gt_\n\tThe playground uses two spheres.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately I am not sure how to do this offhand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for the assistance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-10-09T21:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a read through this section it may give you ideas\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-10-10T11:42:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks John_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll take a looksee.  I found the original example I grabbed from three js.  this is basically what I want to do_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//codepen.io/maurizzzio/pen/pERqxV?editors_eq_0010_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//codepen.io/maurizzzio/pen/pERqxV?editors_eq_0010_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-10-10T12:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNothing is built in but it could be done in exactly the same way. using the facet partitioning as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ metionned as first segmenting will actually greatly improve your perf as you ll be able to do the face search on a smaller area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-10-11T16:32:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI ran through the documentation on facet data and used it to construct a function that seems to work for me.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function GetNearestPoint(currentSphere) {\n    var nearestMesh_co_ nearestFacet_co_ facetPos_sm_\n    var projected_sm_\n    var distance _eq_ 0_sm_\n    var shortestDistance _eq_ 9999999_sm_\n    meshes.forEach(function (mesh) {     // meshes is an array containing the mesh and its _qt_sub meshes_qt_\n    var facets _eq_ mesh.getFacetLocalPositions()\n\n        if (facets.length &gt_sm_ 0) {\n            facets.forEach(function (facet) {\n                distance _eq_ BABYLON.Vector3.Distance(currentSphere.position_co_ facet)_sm_\n                if (distance &lt_sm_ shortestDistance) {\n                    nearestFacet _eq_ facet_sm_\n                    shortestDistance _eq_ distance_sm_\n                    nearestMesh _eq_ mesh_sm_\n                }\n            })_sm_\n        }\n    })_sm_\n\n    projected _eq_ BABYLON.Vector3.Zero()_sm_\n    var index _eq_ nearestMesh.getClosestFacetAtCoordinates(nearestFacet.x_co_ nearestFacet.y_co_ nearestFacet.z_co_ projected)_sm_\n\n    return projected_sm_  // use this set of coordinates to construct the newer/closer sphere\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks for the help_co_ everyone!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]