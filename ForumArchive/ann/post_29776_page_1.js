[{"Owner":"javalang","Date":"2017-04-14T22:42:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s a pleasure to announce a texture generator  _qt_TexGen_qt_ to be used by BABYLON developers. Due to the excellent work of _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ _t_s ShaderBuilder it_t_s possible to build a somewhat generic shader and inject the  runtime properties (uniforms) on the fly. I_t_ve designed a shader-script which takes altenative inputs_co_ generates artificial normal maps_co_ mixes with another optionally image and outputs a really nice 3D look of the (flat) inputs. Live system available _lt_a href_eq__qt_https_dd_//cdn.rawgit.com/androdlang/clonerjs/5308ca3f/texgen01B.html_qt_ rel_eq__qt_external nofollow_qt__gt_HERE (updated)_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKey featuers_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tAlternative input sources_dd_ PatternGenerator_co_ NoiseGenerator and plain image\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tNo need for normal maps_co_ they will be generated on the fly by the shader\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tpattern generator on the javascript side_co_ once generated _eq_&gt_sm_ turbo speed on the shader side\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tnoise generator on the javascript side (Perlin_co_Fractal_co_Turbulence)_co_ once generated _eq_&gt_sm_ turbo speed on the shader side\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tPreset concept_co_ all shader/pattern/noise-parameters can be reduced to a handful numerical settings (JSON-Format)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tFull procedural_co_ images can be mixed optionally\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are some preset patterns from the noise generator and some other Examples.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you find this interesting...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjavalang\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS. a short description to the LIVE-System (from right to left)_dd_ on the upper right you find a slider with three input-sources. The next menu are the properties for the pattern generator. On thenext  menu are the shader properties mainly for the normal map creation and a slider _qt_balance_qt_ where you can mix another image to the input. And on the left side is the noise menu (I prefer preset9 _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ )_co_ there are endless more to be detected...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12495_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen1.jpg.94621a4310ea8b53686ceb249b31dc09.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12495_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen1.thumb.jpg.97fbe18a7f6a7bbf1e2d41f259fb60df.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12496_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen2.jpg.fd4244a7b7505cea2d2f9682da59bf55.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen2.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12496_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen2.thumb.jpg.137c0bca09d6d7b308f87bb20bb436f5.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12506_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen7.jpg.7070c8db42fb6a0c67138d6ace623597.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen7.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12506_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen7.thumb.jpg.dfabc8695781631b4f0f247fbd08e968.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFull procedural image with noise_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12497_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen3.jpg.043e5e16482351ddba7ed89c78fc2373.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen3.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12497_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen3.thumb.jpg.5e329f47b91129f227b49cc5fd1adc08.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMixed with another image_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12498_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen4.jpg.789dcbd31121f8a91127ff6ad0545fc6.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen4.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12498_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen4.thumb.jpg.483b70eab9f4617b831c7975266a48c6.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInput source_dd_ single image!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12499_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen5.jpg.197c5ec29d33e64071eab9ac0a590114.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen5.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12499_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen5.thumb.jpg.f427e43246e2c976d8411496ea3ec50c.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInput source_dd_ pattern generator\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12500_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen6.jpg.9697a7dcf1049a4476480f29eaa5e874.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen6.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12500_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen6.thumb.jpg.07e70dbd92597046e779686a2ea24931.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNoise mixed with image_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12507_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen8.jpg.d17896098c13efd47a14f686a3209254.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen8.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12507_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen8.jpg.d17896098c13efd47a14f686a3209254.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-15T03:20:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnice work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-15T12:27:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmenus and layout updated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd for machines with a bit more horsepower look _lt_a href_eq__qt_https_dd_//cdn.rawgit.com/androdlang/clonerjs/d4e97c73/texgen01C.html_qt_ rel_eq__qt_external nofollow_qt__gt_here _lt_/a_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-17T00:32:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere are a lot of combinations by the two input channels _qt_generator-input_qt_ and _qt_mixing-input_qt_. The following scene is showing some combinations with two pattern/noise-settings and one image_co_ live system _lt_a href_eq__qt_https_dd_//cdn.rawgit.com/androdlang/clonerjs/5befba51/texgen01D.html_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12524_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen10.jpg.35a691b54e3c6c392028830a3b1bf29f.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texgen10.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12524_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen10.jpg.35a691b54e3c6c392028830a3b1bf29f.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen11.jpg.28901c260fa4cb6ebced08a8a723b091.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12525_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texgen11.jpg.28901c260fa4cb6ebced08a8a723b091.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_texgen11.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-17T15:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is REALLLLY cool.. Do you plan to make it available as an extension?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-18T19:56:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ thank you_co_ I_t_m not sure because Texture Generator consists of two parts_dd_ the editor/generator and the corresponding shader-script . Both have dependencies to the  ShaderBuilder which isn_t_t an official extension yet. Suggestions are welcome _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the amost finished version of the editor (it_t_s a plain BABYLON application). The interface for using the generated output is very straight forward_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ FYI\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shaderparams _eq_ { stepx_dd_ 0.005_co_ stepy_dd_ 0.005_co_ invR_dd_ false_co_.... // shader parameters\nshaderparams.texGen _eq_ dynTexGen_sm_ //generator texture_co_ image generated from TextureEditor\nshaderparams.texMix _eq_ dynTexMix_sm_ //mixer texture_co_ image generated from TextureEditor\nbox.material _eq_ compoundShader(shaderparams).BuildMaterial(scene)_sm_\n\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou can play with the Texture Editor _lt_a href_eq__qt_https_dd_//rawgit.com/androdlang/clonerjs/master/texEdit01.html_qt_ rel_eq__qt_external nofollow_qt__gt_(version alpha) HERE_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_12567_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texEdit01.jpg.f62499ab2aab90ac021790cabd816a7b.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texEdit01.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12567_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texEdit01.thumb.jpg.58b443968e84d2004ab855da5fd8a9ac.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texEdit01a.jpg.d29f9a8d4b39808c49c38ca4744aada2.jpg_qt_ data-fileid_eq__qt_12577_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_texEdit01a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12577_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/texEdit01a.thumb.jpg.12adbf5775cca65b7ae9d00bb4939c53.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-18T22:19:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou have good hand for make tools _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tif you have time and wanna make something special take look for that\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/OfLpH9_eL3U?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\ti wanna make that for shaderbuilder and see you work nice with SB and we can make it for custom material too (that can be  good)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-18T22:25:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUiiii_co_ _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__co_ very nice_co_ sure_co_ that will give clothes of the _qt_future art_qt_ !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ accitentally I_t_m working on _qt_textile patterns_qt_ now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-18T22:34:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti have this tools but for first version of shaderbuilder (eash)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i most collect of all shader builder functions with parameters\n_lt_/p_gt_\n\n_lt_p_gt_\n\tafter that you can be design that like what you do in Texture Generator\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-19T11:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tfirst playground of CompoundShader available_dd_ _qt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7VL769%237_qt_ rel_eq__qt_external nofollow_qt__gt_HelloWorld_lt_/a_gt__qt_ and _qt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7VL769%238_qt_ rel_eq__qt_external nofollow_qt__gt_HelloWorld_lt_/a_gt_2_qt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-19T18:06:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd finally_co_ the first version of the _lt_a href_eq__qt_https_dd_//rawgit.com/BabylonJS/Extensions/master/TextureEditor/textureEditor01Alpha.html_qt_ rel_eq__qt_external nofollow_qt__gt_TextureEditor _lt_/a_gt_is online.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]