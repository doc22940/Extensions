[{"Owner":"Junior","Date":"2016-10-31T18:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have 3 meshes in a Blender scene. Each mesh has its own origin and animation. The meshes animate as expected when viewed in Blender_co_ i.e. they move as distinct meshes and have their own distinct animation.  When I export to Babylon JS and test it in the sandbox at _qt_http_dd_//www.babylonjs.com/sandbox/_qt__co_ all meshes seem to share the same origin and all 3 animations are applied automatically to them. I am not sure if this a bug but I have tried exporting different animated meshes in the same scene from blender and I keep getting the same results. Could someone please give some advice on this. I am using Blender 2.78a and Babylon.js 5.0.6 exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease find below the .blend and Babylon JS files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10086_qt__gt_3 Mesh Animation.blend_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10087_qt__gt_3MeshAnimation.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-31T21:36:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Junior!  Sorry to hear about the problems.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_...\n{_qt_name_qt__dd__qt_Cone_qt__co__qt_id_qt__dd__qt_Cone_qt__co__qt_materialId_qt__dd__qt_MeshAnimation_3.Cone_qt__co__qt_billboardMode_qt__dd_0_co__qt_position_qt__dd_[0_co_0_co_-1.1242]_co__co_\t\n...\n{_qt_name_qt__dd__qt_Plane.001_qt__co__qt_id_qt__dd__qt_Plane.001_qt__co__qt_materialId_qt__dd__qt_MeshAnimation_3.Plane.001_qt__co__qt_billboardMode_qt__dd_0_co__qt_position_qt__dd_[0_co_0_co_-1.1242]\n...\n{_qt_name_qt__dd__qt_Plane_qt__co__qt_id_qt__dd__qt_Plane_qt__co__qt_materialId_qt__dd__qt_MeshAnimation_3.Plane_qt__co__qt_billboardMode_qt__dd_0_co__qt_position_qt__dd_[0_co_0_co_-1.1242]\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHmm.  Yeah_co_ according to the .babylon file (excerpt above)_co_ all three mesh took-on the position of the LAST mesh (_qt_Plane_qt_).  Cone is suppose to be at position 0_co_0_co_0 and plane.001 should be at Blender-position 0_co_ 1.82371_co_ 0.  (0_co_ 0_co_ 1.82381 in BJS land).  Something went wrong during the export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you revert to the previous version of the exporter?  Might work.  No promises. Thanks for the report.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2016-10-31T23:05:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried your suggestion but all the 5.0 versions of the Blender exporter give the same result. I also tried some of the older versions from the 4.0 to 4.6.1 and they all produce major errors.  Thanks for your suggestion\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-01T16:32:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-11-01T16:34:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah_co_ I looked at that.  Don_t_t know\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2016-11-13T17:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_149604_qt_ data-ipsquote-contentid_eq__qt_26131_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478018045_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/1/2016 at 0_dd_34 PM_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYeah_co_ I looked at that.  Don_t_t know\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello Guys_co_ thanks for your  work with Babylon JS and Blender. I have tried  the latest blender exporter (Version 5.1.0) but the problem with multiple meshes and animations has still not been resolved. I am not a programmer else I would try fix it my self_co_ but I know that this was not an issue 2 years ago with earlier developments of Blender and Babylon JS version 2.2. I appreciate the time and effort that you take to make this framework a success and I would like to help  make it better by testing it to report bugs or glitches.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTwo years ago_co_ I created a test project that had multiple meshes and animations that actually worked. You can view the project _lt_a href_eq__qt_http_dd_//www.3dpanacea.com/CxybroxSize/_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_. (Click on the doors and hood to see the animations.) The *.babylon file for this project does not work with the current online version of the Sandbox. I am not sure if it is because of the file size (21 Megabytes) or that the framework has been completely rewritten since version 2.2. of Babylon JS. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to know however_co_ if there will be a fix for the issue with multiple meshes and animations with the Blender exporter.  How can I help to make it possible. Thanks for your effort.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-11-14T15:37:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill there be a fix_co_ not by me in the near future.  Not sure there is a fix. Found limitations detecting things related to actions.  5.0 allows you to isolate actions to individual meshes.  From 5.0 release announcement_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhen there are multiple meshes with actions in a .BLEND_co_ it is not possible to determine which meshes participate in which actions. When there is an action which is only done by one Mesh_co_ place the mesh name then a _t_-_t_ in the name of the action to isolate it.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSuggest you try naming your actions such that an action only affects one mesh_co_ then name them using this format.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2016-11-17T00:55:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ thanks for your suggestion_co_ It solved the problem. BiG THANKS TO YOU! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]