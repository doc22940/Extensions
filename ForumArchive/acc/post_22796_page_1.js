[{"Owner":"benoit-1842","Date":"2016-05-25T21:58:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody !!!!  I am using the new babylon exporter version 4.5 with Blender 2.76 and 2.77.  I am using makewalk to load the bvh inside my character.  Sometime (scarcely) my animation works in babylon but most of the time I get the spaghetti man.  I am removing the key 0 with the dope sheet.  I am using a character from the make human 1.1.0.  Maybe I need to do something i don_t_t know.  In the link below_co_ you will find my blend file_co_ bvh and character......\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanx in advance_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFile link _dd_ _lt_a href_eq__qt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xY3FnQjNMbzROUGs&amp_sm_usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xY3FnQjNMbzROUGs&amp_sm_usp_eq_sharing_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ecv","Date":"2016-05-26T01:07:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA shot in the dark_co_ as I have zero experience with Babylon and the aforementioned programs except a little with Blender. The random behavior you mentioned sounds like it could be a performance issue. I checked the blend file and the animation is literally plagued with keyframes_co_ like one keyframe per frame for several bones at a time. Maybe the problem has nothing to do with this but it_t_s worth a try to remove most keyframes and just leave a few interpolations and see if the performance will get any better. If it does_co_ then I guess you_t_ll need to edit the original and leave only the most critical keyframes in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Maybe it_t_s got too many polygons? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-05-26T02_dd_05_dd_55Z_t_ title_eq__t_05/26/2016 02_dd_05  AM_t_ data-short_eq__t_2 yr_t__gt_May 26_co_ 2016_lt_/time_gt_ by ecv_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-26T02:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI looked at the .bvh file alone in Blender_co_ and compared it to the character animation in your problem file_co_ and to the character animation when I used MakeWalk to add it to a figure I exported from MH1.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn all cases the animation looked alike - the walk of someone who had drunk far too much Crown Royal_lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI exported both my file and the problem file to .babylon and observed them on my local server - both fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis what I call _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/anim_test3/index_anim3.html_qt_ rel_eq__qt_external nofollow_qt__gt_spaghetti_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you post a picture of the alleged _qt_spaghetti man_qt_ behaviour?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-26T02:50:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah the walk is very weird I know....  Yeah maybe too much beer.....  Here_t_s a screenshot of my behavior....  It_t_s weird.......\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/spaghettisuit.png.7648599fc81c6ce65ccb0883c6f1c586.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7813_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/spaghettisuit.png.7648599fc81c6ce65ccb0883c6f1c586.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_spaghettisuit.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-26T03:08:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell this is what I get when I export your _lt_u_gt_problem.blend_lt_/u_gt_ from Blender 2.76 with BE 4.5.0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo _qt_spaghetti_qt_ just the er ... _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/benoit5/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Crown Royal walk._lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you try exporting/importing as a .mhx2 file instead of a .dae?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-26T15:17:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah late last night i figured out to avoid the spaghetti demo you might have to only use .mhx2 files.  It works with .mhx2 files.  But i have many .dae files (rigged with mixamo) that i want to use in a babylon context.  Those that mean that the exporter is unable to transform correctly .dae files ? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-26T16:32:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell try this on your _lt_u_gt_problem.blend._lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe image below shows how your file loads for me - a 250 frame animation but you have set the length to 137 (purple box in image below). So change that to 250. And set the current frame to (the box with 71) to 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThose are the only changes I made before I did my export. So try exporting with those changes.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti have many .dae files (rigged with mixamo)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell there seem to have been issues with such .dae files within the last year. _lt_a href_eq__qt_https_dd_//community.mixamo.com/hc/en-us/community/posts/204378137-DAE-import-to-Blender_qt_ rel_eq__qt_external nofollow_qt__gt_DAE Import into Blender_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow old are your .dae files?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think the issue is the BJS Blender exporter - just remember that a dae file is exported from some program_co_ then is imported by Blender. If there are differences between how the .dae file is exported and what Blender wants - there could be internal issues in Blender that are not visible. In the case of the .mhx2 files_co_ the exporter from MH and the importer for Blender are written by the the people of the MH group.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wish people would not just blame @JCPalmer and @Deltakosh when things don_t_t work right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/endframe1.png.eaf00e38f7ef60e9ae148868ee44b345.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7818_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/endframe1.png.eaf00e38f7ef60e9ae148868ee44b345.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_endframe1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-26T16:54:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think that the new exporter is fantastic !!!!!!  What a good work.  I clearly see the improvement over the year !!!!  I remember I was doing the same work like 1 year ago with the blender to babylon exporter and I can see right now a sea of difference.... It take way less time to create the babylon file....  The .dae file I am using is the one from Mixamo auto-rigger... I will send you one later because I am right now working.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks everybody for the good work_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-26T18:51:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid the changes I suggested before exporting work?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-26T23:59:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRedoubled setting of frame for all objects_co_ especially armature &amp_sm_ mesh_co_ to the same frame when exporting_co_ see version 4.5.1.  Think issues with bone animation are now behind us_co_ except for non-applied scale / rotation on meshes with a skeleton.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not want to have the exporter to apply the scale / rotation for you_co_ changing your .blend_co_ incase you save it.  Too many times this got reported though.  A message in a log file not good enough.  Going to throw an outright exception in future to prohibit any .babylon output (exception will get written to log file)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-27T00:07:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt__dd_ just a little image below to let you know what I_t_m currently playing with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote the _qt_Master_qt_ bone _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/rigpic1.png.2e853924cb9442add92e74fb08c3def3.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7825_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/rigpic1.png.2e853924cb9442add92e74fb08c3def3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_rigpic1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-27T03:18:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou are really pull some strings.  This is cmu_co_ which is way too many bones for mobile.  I am going to have to do something similar for _qt_Game Engine_qt_ rig.  Minus the 30 finger bones_co_ it is only 23.  Your master bone is where it_t_s root bone is. Do not think root can do double duty.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-27T16:13:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys hope you are having a wonderful day.  So exporting in babylon.js with mhx2 looks fine with the new blender to babylon exporter.....  That_t_s very neat !  But I am trying to solve the problem with the .dae files.  For example I am auto-rigging a character in Mixamo and export it to Blender everything is fine.  I load an animation with Makewalk everything is fine in Blender.  But when I export it to babylon...  I got the spaghetti man....  I have tried everything Gryff suggest to me with no success...  (But thank you Gryff btw)...  Maybe my blender file isn_t_t setup properly or I miss something..... I will investigate more this afternoon.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the link to the model I am trying to use as a babylon file and the bvh used with make walk....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//drive.google.com/file/d/0B_ZBy6q5jS8xVGZjeUtLTEVMT1U/view?usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/file/d/0B_ZBy6q5jS8xVGZjeUtLTEVMT1U/view?usp_eq_sharing_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you very much_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-27T16:45:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell Benoit_co_ I_t_ve downloaded your files - and I will also try to take a look this afternoon. However I will be dog sitting my daughters two dogs - and her little Italian Greyhound has a wonderful knack of finding trouble _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-27T16:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLOL   I Imported the .dae with all the options checked and it looks better but it_t_s still distorted.....But at least its not a chef boyardee spaghetti.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun with the dogs.....  Me I have a tiny one and he_t_s full of energy !!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks btw_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-27T16:55:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI got it work !!!!  First you need to check all the import settings for .dae and after ctrl-a to apply everything and as usual remove the keyframe 0....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Gryff and Mr Palmer for the great help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-27T19:16:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI maybe shout victory too fast.....I got it work once but I am not able to reproduce it but when I check the log file in the .txt file it saying the same thing in between the good animated model and the faulty one.....weird....but at least I got one that have exported well in babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a silly question _dd_ is it possible to create bone animation directly in babylon.js instead of doing all the animation in blender....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanx_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-29T06:09:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell Benoit_co_ I tried (twice) your latest .dae model (in your last link)  - c3p0 - almost half a million faces. Blender went into a _qt_not responding _qt_ mode both times when I tried to add the .bvh file_lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_. I gave up on that but I have experimented with some other .dae files - more later when I have it clearly set out.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI have a silly question _dd_ is it possible to create bone animation directly in babylon.js instead of doing all the animation in blender....\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou are not really doing the animation in Blender - rather using it to get animations (mocap) from elsewhere through .dae or .bvh files. If you create animations in Blender it will likely involve IK - and I am not sure that BJS is capable of that but  @NasimiAsl I believe has used shaders to create animations. And _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ did look at using BJS to load ASF/AMC mocap files directly - not sure where that led.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-31T14:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI wrote parsers for both ASF/AMC and BVH in Typescript.  I abandoned them in favor of IK in blender.  This resulted in the ignoring of bones with .ik in the name as well as supporting Blender actions to BJS animation ranges in the exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow that I got the skeleton interpolator working_co_ I completely dropped using the BABYLON.Animation for storage for my own work.  Development of Blender Pose Libraries exported to my own pose implementation in JS is nearly done.  Seems like the improvements in the exporter are tied to my own needs_co_ but nothing is stopping anyone from forking.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-31T17:02:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you !!!!  I will investigate more when I will have time (I am in the middle of a school teacher rush _sm_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-05-31T20:47:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know I am using a big file with a lot of vertices....But i just had an idea while grading an history test ?Will it be possible to take only a bvh file in blender and transform this file as a .babylon and have in my code 2 separate entity but with the same skeleton produce in blender.  And the two skeletons (one with a complex mesh and the other one just the skeleton)are animating in simultaneity. And the light babylon file is transparent.....Just an idea.....So tonight I will work on that !!!! If you have any thoughts to share dont hesitate....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanx\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]