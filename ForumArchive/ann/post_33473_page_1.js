[{"Owner":"jerome","Date":"2017-10-17T08:24:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs you know_co_ the SPS is a standard mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApplying the transparency to a standard mesh leads to well-known issues ... not when visualizing other opaque or transparent meshes through this current transparent mesh_co_ but when visualizing some parts of this transparent mesh through itself. Indeed_co_ when passing the mesh geometry to the GPU_co_ this one draws the mesh in the order the mesh facets are sorted in the indices array _dd_ first triangle_co_ second one_co_ etc ... whatever the position of the camera. The shader only respects the geometry order and this geometry is fixed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs the SPS is a standard mesh_co_ it has the same issue when dealing with transparent particles (rotate the camera) _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EPBTB7%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EPBTB7#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA new feature allows now to sort the internal mesh geometry live according to the current camera position _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EPBTB7%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EPBTB7#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt sorts the SPS particles only_co_ not all the facets_co_ for performance reasons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo enable it_co_ just create your SPS with the parameter _lt_em_gt_enableDepthSort_lt_/em_gt_ to _lt_em_gt_true_lt_/em_gt_. By default_co_ each next call to _lt_em_gt_setParticles()_lt_/em_gt_ will sort the particles according to the camera global position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf for some reasons (immobile camera and sps)_co_  you want to stop (or reactivate) the sort on the next calls to_lt_em_gt_ setParticles()_lt_/em_gt__co_ just set the property _lt_em_gt_sps.depthSortParticles_lt_/em_gt_ to _lt_em_gt_false_lt_/em_gt_ (or _lt_em_gt_true_lt_/em_gt_ to reactivate it)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// _lt_span_gt__lt_span_gt_create_lt_/span_gt_ a particle depth sort enabled SPS\nvar sps _eq_ new BABYLON.SolidParticleSystem(_lt_span_gt__qt_sps_qt__lt_/span_gt__co_ scene_co_ {enableDepthSort_dd_ _lt_span_gt_true_lt_/span_gt_})_sm__lt_/span_gt_\n\n// then later_co_ only do ...\nsps.setParticles()_sm_   // and the particle are depth sorted each _lt_span_gt__lt_span_gt_call\n_lt_/span_gt_\n// We can skip the sorting _lt_span_gt_at_lt_/span_gt_ _lt_span_gt_any_lt_/span_gt_ _lt_span_gt_time_lt_/span_gt_ (_lt_span_gt_or_lt_/span_gt_ reactive it) _dd_ sps _lt_span_gt_and_lt_/span_gt_ camera _lt_span_gt_not_lt_/span_gt_ moving anymore\nsps.depthSortParticles _eq_ _lt_span_gt_false_lt_/span_gt__sm__lt_/span_gt_  // true by default when enableDepthSort is _lt_span_gt__lt_span_gt_set_lt_/span_gt_ _lt_span_gt_to_lt_/span_gt_ _lt_span_gt_true_lt_/span_gt__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tinitial post _dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed5160310125_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/33026-transparency-alpha-issues/?do_eq_embed&amp_sm_comment_eq_192124&amp_sm_embedComment_eq_192124&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_248px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tDocumentation coming soon ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-17T15:43:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is.....HUGE _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-18T08:44:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdocumented. (documentation / overviews / SPS)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]