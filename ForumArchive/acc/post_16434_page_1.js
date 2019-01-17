[{"Owner":"fariazz","Date":"2015-08-13T05:57:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to export any file from Blender using File - Export - Babylon.js and I get this error message._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any help would be very much appreciated!_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_\tExporter version_dd_ 3.0.0_co_ Blender version_dd_ 2.70 (sub 0)_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq_\tPython World class constructor completed\tprocessing begun of mesh_dd_  Cylinder.004\t\tprocessing begun of Standard material_dd_  Material.028\t\tnum positions      _dd_  66\t\tnum normals        _dd_  66\t\tnum uvs            _dd_  0\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  384\tprocessing begun of mesh_dd_  Sphere.006\t\tprocessing begun of Standard material_dd_  Material.033\t\tnum positions      _dd_  529\t\tnum normals        _dd_  529\t\tnum uvs            _dd_  0\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  3096\tprocessing begun of mesh_dd_  Sphere.005\t\tprocessing begun of Standard material_dd_  Material.027\t\tnum positions      _dd_  994\t\tnum normals        _dd_  994\t\tnum uvs            _dd_  0\t\tnum uvs2           _dd_  0\t\tnum colors         _dd_  0\t\tnum indices        _dd_  5952\tprocessing begun of mesh_dd_  Sphere.004\t\tprocessing begun of baked material_dd_  Sphere.004_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq_  File _qt_/home/fariazz/.config/blender/2.70/scripts/addons/io_export_babylon.py_qt__co_ line 287_co_ in execute    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)  File _qt_/home/fariazz/.config/blender/2.70/scripts/addons/io_export_babylon.py_qt__co_ line 695_co_ in __init__    bakedMat _eq_ BakedMaterial(exporter_co_ object_co_ recipe)  File _qt_/home/fariazz/.config/blender/2.70/scripts/addons/io_export_babylon.py_qt__co_ line 1803_co_ in __init__    bpy.ops.uv.smart_project(angle_limit _eq_ 66.0_co_ island_margin _eq_ 0.0_co_ user_area_weight _eq_ 1.0_co_ use_aspect _eq_ True)  File _qt_/usr/share/blender/scripts/modules/bpy/ops.py_qt__co_ line 188_co_ in __call__    ret _eq_ op_call(self.idname_py()_co_ None_co_ kw)ERROR_dd_  Converting py args to operator properties_dd_ _dd_ keyword _qt_use_aspect_qt_ unrecognized_eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_elapsed time_dd_  0 min_co_ 0.1385 secs_lt_/pre_gt__lt_p_gt_This is version 2.72 of Blender (the one required for the Babylon export script) in Ubuntu._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve tried exporting a new Blender project with no edits_co_ also tried this public domain one _lt_a href_eq__qt_http_dd_//www.blendswap.com/blends/view/3796_qt_ rel_eq__qt_external nofollow_qt__gt_Japanese House | Blend Swap_lt_/a_gt_ and many others_co_ always getting the same _qt_use_aspect_qt_ error message._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fariazz","Date":"2015-08-13T06:18:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It seems to be an issue with the latest version._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It worked fine when I used an older version of the python script. Opened an issue _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/655_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/655_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-13T16:15:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks JCP will be able to check it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-13T19:20:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well fariazz_co_ I looked at the Japanese House from Blend swap and at the log above._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The exporter does fine with with the first three materials - they do not have textures associated with them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then it hits mesh Sphere04 - which does have a texture associated with its material - pillowfabric.jpg. Unfortunately_co_ this texture is not being loaded (see image below - right red box)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In fact there seem to be at least 5 textures not being loaded (left red box)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If textures are somehow copyrighted etc they are often left out of Blendswap files._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-7026-0-91531200-1439493517.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-7026-0-91531200-1439493517.png_qt_ data-fileid_eq__qt_4866_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-91531200-1439493517.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-13T21:38:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_2.49 .blend file _qt_Fixed_qt__co_ that is works as good as it did prior to baking with no errors._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2.75 now version for exporter_co_ though 2.74 worked.  If not baking_co_ earlier probably still works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See cross post_co_ where I replied to._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fariazz","Date":"2015-08-14T00:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks guys for the amazingly fast support. Under the new version of the exporter 3.0.1 it works like a charm using Blender 2.75._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]