[{"Owner":"Melancholix","Date":"2017-09-24T23:56:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to import BABYLON_co_ but TypeScript is complaining that it _t_cannot find namespace BABYLON_t__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs a result_co_ I cannot compile my files with gulp.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried everything to get this to work_co_ and have spent the last two days googling_co_ to no avail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import * as BABYLON from _t_./babylon_t__sm_\nimport * as BABYLON from _t_./babylon.module_t__sm_\nimport { BABYLON } from _t_./babylon_t__sm_\nimport { BABYLON } from _t_./babylon.module_t__sm_\nimport _t_./babylon_t__sm_\nimport _t_./babylon.module_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNone of them work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have attached a screenshot of the error I am getting_co_ and my folder setup.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHopefully someone could explain to me how to get this to work_co_ thanks in advance!\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/cannot_find_namespace.png.5551e02ded46b9fc65ff142fc8bf5507.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14977_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/cannot_find_namespace.png.5551e02ded46b9fc65ff142fc8bf5507.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_cannot_find_namespace.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/folder_setup.png.ecc30af925a39f429460922452684ddc.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14978_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/folder_setup.png.ecc30af925a39f429460922452684ddc.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_folder_setup.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-09-25T00:21:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not using typescript_co_ but I added both babylon &amp_sm_ canon as dependencies via npm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14979_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/image.png.507a2f0c199761db2c78bff99ea156f1.png_qt_ alt_eq__qt_image.png.507a2f0c199761db2c78bff99ea156f1.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThen in my scene file_co_ i have at the top_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import BABYLON from _t_babylonjs_t_\nimport CANNON from _t_cannon_t_\nwindow.CANNON _eq_ CANNON_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCannon is hoisted on window_co_ as babylon expects it to be global scope. If you have your code babylon code scattered among multiple files_co_ import babylon in each separate file. Just import cannon the one time_co_ at the earliest point in your tree that you can.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-09-25T05:25:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you will want to do_dd__lt_br /_gt_\n\timport * as BABYLON from _t_babylonjs_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImport BABYLON from _t_babylonjs_t_  gets only the default export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake sure you have alpha3.4 of babylonjs_co_ which is only a few days old.  The from part or the import will either reference a file in your project (ie_dd_ ./file.ts or ../../file.ts) or the name of an NPM module.  ie_dd_ _t_babylonjs_t_.  Getting started is always a struggle!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-25T08:33:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ said_co_ starting 3.1.0-alpha3.4 npm works a bit differently. I am writing the documentation right now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the CANNON trick from above is wonderful. this is probably the best way to integrate cannon with babylon without changing babylon_t_s architecture (which we won_t_t right now).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-25T15:31:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ did a fantastic work as usual_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/npm_support_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/npm_support_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Melancholix","Date":"2017-09-25T19:47:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks guys_co_ I tried what you suggested and it worked! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rook","Date":"2017-09-25T22:30:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan we expand the Examples in the doc page for _t_npm_support_t_ to include require() structures?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am building my app inside of Electron_co_ which does not support ES6 import statements without Babel and etc.  I_t_d like to avoid that_co_ if at all possible_co_ and ensure that the require()s will work just fine.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-26T08:31:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_let BABYLON _eq_ require(_qt_babylonjs_qt_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut this is a good suggestion_co_ I will take care of that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]