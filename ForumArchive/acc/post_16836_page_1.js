[{"Owner":"Dad72","Date":"2015-08-29T23:12:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Salut_co__lt_br_gt_ _lt_br_gt_Je vais faire le signalement en français pour expliquer correctement. _lt_br_gt_ _lt_br_gt_Je constate un petit soucie sur le calcule des meshes et indices actif et draw call dans debuglayer lorsque l_t_on est au dessus d_t_un objet (genre un terrain par exemple) est que l_t_on oriente la camera vers le haut._lt_br_gt_ _lt_br_gt_- quand la camera est horizontal a quelque chose prêt et ne voie plus le terrain il retire 1 meshes actif et draw call puisque la camera ne voie plus le terrain (là c’est ok)_lt_br_gt_Mais si on continue de monter la camera plus haut_co_ 1 est rajouter au meshes actif et draw call comme si le terrain était visible de nouveau (ors qu_t_il ne l_t_est pas). et si on vas jusqu’à l_t_extrémité du haut (que l_t_on regarde le ciel au plus haut)_co_ il retire 1 de nouveau au nombre de meshes actif et draw call (il y a donc un tres large moment ou il compte tout les objets que que la camera ne voie pas si elle ce trouve au dessus d_t_objets._lt_br_gt_ _lt_br_gt_cela veux dire que le terrain seras toujours calculer même quand il est pas vue par la camera et si jamais la camera est sur un personnage qui est sur la selle d_t_un cheval qui est sur le terrain et que l_t_on_co_ oriente la camera vers le haut. 4 objets serons toujours calculer (le perso_co_ selle_co_ chevale et terrain)._lt_br_gt_ _lt_br_gt_J’ai reproduit cela sur le playground au plus simple (une camera sur un cube et un ciel.)._lt_br_gt_ _lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RRK96%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1RRK96#1_lt_/a_gt_ ( _lt_strong_gt_ENGLISH_dd__lt_/strong_gt_ orient the camera up and see number of active meshes and et draw call)_lt_br_gt_ _lt_br_gt_par contre si on n_t_est pas au dessus d_t_un objet_co_ cela fonctionne correctement._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-08-31T15:04:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ the same I noticed_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SC4YB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SC4YB_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was wondering_co_ why the FPS-Rate did not raise when being UNDER the ground_co_ where the Spheres should not be rendered._lt_/p_gt__lt_p_gt_Wouldn_t_t it improve Babylon a lot if all of the objects that are not seen by the camera are not rendered any more?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Had the same effect when playing with fog. In times of C64 and Amiga we used the distance-fog to let sprites disappear_co_ so the FPS-rate would raise. In the example here with fog_co_ a high dense sphere still lowers  the FPS even she is deep inside the fog and not visible any more._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-31T16:25:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not speak french_co_ so I could be wildly wrong.  There is an isInFrustum test in scene._evaluateActiveMeshes.  If out of camera ranges_co_ will not get put on the active list for the current frame._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as meshes being blocked_co_ you can write an after render that is customized for your scene_co_ which can decide to call _lt_span style_eq__qt_font-family_dd_Monaco_sm_font-size_dd_11px_sm__qt__gt_setEnabled(false) _lt_/span_gt_on any mesh you wish.  This is cuts off as much processing as you can get._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-31T18:24:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In made_co_ if you look in my example and you point the camera up slowly_co_ you can see that active meshes and drawcall displays 2 early_co_ then 1 some time and 2 again or it should stay 1 because ground/box is not visible by the camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think Deltakosh to view this bug._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RRK96%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1RRK96%231_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T18:43:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_definitely strange...working on it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-31T22:11:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_And there is the same problem as when it is below an object_co_ and you look down._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I feel that the camera has eyes in the back. even when the camera is out of the sky and  turns her back_co_ we can also see the problem._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Yes_co_ it is strange. _lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T23:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually this is a limitation of how we compute the frustum._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The frustum is defined using 6 infinite planes and we consider an object is out the frustum when all points of its bounding box are behind at least one plane_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But in this case because the plane is really close to the camera and really large_co_ it sometimes intersects a plane even if we actually not see it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have no idea how to fix it without using heavy calculation which will be counter-productive_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-31T23:51:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I understand. Maybe you find a solution one day if you keep this bug somewhere to keep that in mind.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]