[{"Owner":"eljuko","Date":"2017-10-30T12:24:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry to bother you with yet another shadow related question_co_ but i_t_v ran into trouble. I_t_m doing some tests with dynamic world creation and shadows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo i_t_m using directional light to cast shadows_co_ but for every mesh i import the shadows get more and more _qt_crispy_qt_. This is fine as long as i keep light.autoUpdateExtends as false.._co_ BUT i ran into another issue_sm_ the _qt_shadow projection_qt_ from the light is very slim and parallel with light angle_co_ i simply don_t_t know how to enlarge the shadow projection so it would fit with camera view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- eljuko\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ added image. As u can see_co_ the shadows from the rocks doesn_t_t fit in the projection.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/derpingShadows.png.d3c4c4f03b4f8947ec5b52fa76f96692.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15472_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/derpingShadows.png.d3c4c4f03b4f8947ec5b52fa76f96692.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_derpingShadows.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2017-10-30T13:14:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ so i think i found the solution from light.shadowFrustumSize _eq_ X and moving the light with camera. All this time i was trying to find the solution from shadowGenerator and forgot to experiment with the light itself _dd__t_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-30T15:40:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou did it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcongratulations ! I like when a problem is solved by the op himself _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]