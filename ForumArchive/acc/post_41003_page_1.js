[{"Owner":"fateriddle","Date":"2018-11-02T06:07:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m pretty confused right now. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Is camera.cameraDirection a vector of where camera is pointing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Then setTarget/getTarget is doing the same thing? to point the camera to the direction of the target?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. And to rotate a camera is also trying to point a camera to some direction_co_ no?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo what is the difference?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbtw_co_ I_t_m trying to add customized input to camera.inputs to control which direction it is pointing for a shooter game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"droggam","Date":"2018-11-02T07:49:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_i dont understand..._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_target is like focus a specific mesh.._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_rotation is just rotating THE camera?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_how is that THE same?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fateriddle","Date":"2018-11-02T08:06:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow do you find where the camera is pointing now? _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32936-droggam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32936_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32936-droggam/_qt_ rel_eq__qt__qt__gt_@droggam_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"droggam","Date":"2018-11-02T09:18:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI cant check right now in pc but Wat ur asking is really basics... Think of cam as another mesh u can rotate it position and manage its direction in animations examples_lt_span class_eq__qt_ipsEmoji_qt__gt_😋_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dreinzy","Date":"2018-11-02T11:03:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe what you want is\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_code_gt_Camera.getForwardRay().direction_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-02T14:50:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_\n\t1. Is camera.cameraDirection a vector of where camera is pointing?_lt_strong_gt_Nope it is the direction to where the camera goes_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_\n\t2. Then setTarget/getTarget is doing the same thing? to point the camera to the direction of the target? _lt_strong_gt_setTarget will update cameraRotation_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_\n\t3. And to rotate a camera is also trying to point a camera to some direction_co_ no? _lt_strong_gt_yes this is correct. You can either set a target or change camera rotation_lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]