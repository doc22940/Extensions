[{"Owner":"juanmajr93","Date":"2016-12-12T13:07:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ this is my code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tfor(var t _eq_ 0_sm_ t &lt_sm_ edificios_texto.length_sm_ t++){\n\t\tvar loader _eq_ new BABYLON.AssetsManager(scene)_sm_\n\t\t//console.log(edificios_texto[n])_sm_\n\t\tvar edificio _eq_ loader.addMeshTask(t_co_ _qt__qt__co_ _qt_http_dd_//localhost_dd_8080/modelos2/_qt_+edificios_texto[t]+_qt_/_qt__co_edificios_texto[t]+_qt_.obj_qt_)_sm_\n\t\tedificio.onSuccess _eq_ function (task) {\n\t\t\t//console.log(task.loadedMeshes.length)_sm_\n\t\t\tconsole.log(edificio.name)_sm_\n\t\t\ttask.loadedMeshes.forEach(function(b) {\n\t\t\t\t\n\t\t\t\tb.scaling _eq_  new BABYLON.Vector3(5_co_5_co_ 5)_sm_\n\t\t\t\tb.rotation.y _eq_ Math.PI_sm_\n\t\t\t\t\n\t\t\t\t// cambiar las X\n\t\t\t\tvar vertex_data _eq_ BABYLON.VertexData.ExtractFromMesh(b)_sm_\n\t\t\t\t\n\t\t\t\tfor (var i _eq_ 0_sm_ i &lt_sm_ vertex_data.normals.length_sm_ i+_eq_3) {\n\t\t\t\t\tvertex_data.positions[i] *_eq_ -1_sm_\n\t\t\t\t}\n\t\t\t\tvertex_data.applyToMesh(b)_sm_\n\t\t\t\t\n\t\t\t\tfor (var i _eq_ 0_sm_ i &lt_sm_ edificios.length_sm_ i++) {\n\t\t\t\t//\tconsole.log(edificios[i].texto)_sm_\n\t\t\t\t\t//\tconsole.log(t)_sm_\n\t\t\t\t\tif(edificios[i].texto _eq__eq_ edificios_texto[t]){\n\t\t\t\t\t\t\n\t\t\t\t\t\tvar utmPlaceZ _eq_ edificios[i].x_sm_\n\t\t\t\t\t\tvar utmPlaceX _eq_ edificios[i].z_sm_\n\t\t\t\n\t\t\t\t\t\tvar utmPlaceXFromCentre _eq_ utmPlaceX - mapCentreX_sm_\n\t\t\t\t\t\tvar utmPlaceZFromCentre _eq_ utmPlaceZ - mapCentreZ_sm_\n\t\n\t\t\t\t\t\tvar x _eq_ utmPlaceXFromCentre/scaleX_sm_\n\t\t\t\t\t\tvar z _eq_ utmPlaceZFromCentre/scaleZ_sm_\t\n\t\t\t\t\t\t\n\t\t\t\t\t\tb.position.x _eq_ x_sm_\n\t\t\t\t\t\tb.position.z _eq_ z_sm_\n\t\t\t\t\t\tbreak_sm_\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t}\n\t\t\t})_sm_\n\t\t\t\n\t\t}\n\t/*\t\n\t\tedificio.onFinish _eq_ function() {\n\t\t\tengine.runRenderLoop(function () {\n            scene.render()_sm_\n\t\t\t})_sm_\n\t\t}_sm_\n*/\n\t\tloader.load()_sm_\n\t}\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have to use the var _lt_strong_gt_edificios_texto[t]_lt_/strong_gt_ inside this function_co_ How can I do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-12T13:19:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHola Juan_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ nothing stops you from using this variable inside any function declared in this scope. As long as it is not a class member (accessed with _qt_this_qt_). Should be working...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-12T17:18:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ I cant get the value inside callback_co_ I think that I have to send vector (edificios_texto) as parameter of function to access after..._lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe before code started with the init of vector_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var edificios_texto _eq_ [_t_C6_t__co__t_A4_t_]_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThanks..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-12T17:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep_co_ find the problem. Try using forEach instead of the for loops. Your problem will be solved. The variable t and i change after each call_co_ but you reference them inside an asynchronous function.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-12T17:52:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks. Perfect!!! The problem is resolved!!!_lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]