[{"Owner":"GrosSacASacs","Date":"2016-03-26T00:18:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow can I use the same mesh for 2 different object in the 3D space ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I tried_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    //...\n        //before the mesh is loaded we use another mesh\n        hero _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 0.1_co_ scene)_sm_\n        enemy _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere2_qt__co_ 16_co_ 0.1_co_ scene)_sm_\n\n        BABYLON.SceneLoader.ImportMesh(_qt_fr_qt__co_ _qt_/_qt__co_ _qt_models/5.babylon_qt__co_ scene_co_\n            function (newMeshes_co_ particleSystems) {\n                camera.target _eq_ newMeshes[0]_sm_\n                hero _eq_ newMeshes[0]_sm_\n                enemy _eq_ newMeshes[0]\n                //how can I separate hero and enemy again ?\n            }\n        )_sm_\n   //..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf there are different ways to do _co_ give me the one that uses the least resources.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T02:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can use instances_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Instances_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Instances_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#createinstance-name-rarr-instancedmesh-classes-2-3-instancedmesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#createinstance-name-rarr-instancedmesh-classes-2-3-instancedmesh-_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor clones_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-2-3-mesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-2-3-mesh-_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]