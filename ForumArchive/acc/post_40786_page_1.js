[{"Owner":"Theo Lee","Date":"2018-10-21T22:14:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis question may be a little daft... But what breaking changes were made from BabylonJS 2.4 to 2.5 regarding physics? _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/releases/tag/v2.5.0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/releases/tag/v2.5.0_lt_/a_gt_ does not seem to mention it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is because _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1PVBTF%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1PVBTF#6_lt_/a_gt_ from _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2016/09/06/webgl-car-physics-using-babylon-js-and-oimo-js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.raananweber.com/2016/09/06/webgl-car-physics-using-babylon-js-and-oimo-js/_lt_/a_gt_ back in 2016 used BabylonJS 2.4 (from 2016)_co_ but now the playground no longer works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have downloaded and playground and swapped the BabylonJS version to 2.4 (and the corresponding Oimo.js version) on my computer and it works then. Upping the version to 2.5 breaks it. May I know what changes may have caused these (and maybe how to modify the code to work with the new versions of BabylonJS)? Thank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-22T16:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfirst pinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ id_eq__qt_ips_uid_9906_10_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen can you migrate to 3.3 or even 4.0 because you are on a really OLD version _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-05T12:02:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ Theo Lee_co_ sorry for the slow replies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI started SOME work on this... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PVBTF%2374_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PVBTF#74_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you likely know_co_ arrow keys left/right for steering (works)... and arrow keys up/down for driving (fails).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe executeWhenReady() func at line 383... _lt_em_gt_should_lt_/em_gt_ start rolling all 4 wheels... slowly forward_co_ at load-finish time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt doesn_t_t.  It_t_s broken.  I_t_ll try to put some more time into helping with this.  SOMETHING happened in BJS 2.5 release_co_ and it apparently has carried-thru to current versions.  Thx for the troubleshooting you did_co_ Theo Lee... testing 2.4 vs. 2.5 on home system.  Helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know if I can (and how-to) read the 2.5 _qt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/whats-new_qt_ rel_eq__qt_external nofollow_qt__gt_What_t_s New_lt_/a_gt__qt_ document?  Still available?  Anyone know any other GitHub-ish searches/filters... to help see what changed in 2.5?  Thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-05T18:17:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat_t_s news are all here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/whats-new_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/whats-new_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-05T22:56:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Damn_co_ I_t_m an idiot.  Thx DK. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tScrollbar_co_ Wingnut.  Scrollbar.  heh.  *sigh*\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Wingnut tries to install IntelliSense onto himself).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-06T12:18:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_Updates_lt_/strong_gt__dd_  Hi!  Nothing pertinent seen in _qt_What_t_s New_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNew_co_ cleaner PG_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PVBTF%2375_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PVBTF#75_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDetached arc-cam this time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome odd tests were done... like those seen in lines 199/200_co_ changing from hinge joint to motor-enabled hinge joint (just a different way of constructing).  But likely_co_ hinge joints are motor-enabled by default.  This PG (its up/down arrows) once worked (BJS 2.4-).  There_t_s no real reason to be suspicious of joint constructor methods.  Wingnut was _qt_grasping at straws_qt_  (wasted testing).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA camera slow-pan is available at lines 359 &amp_sm_ 360.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou don_t_t need to use up/down arrows.  Motor for joint1 IS activated _lt_strong_gt_auto_lt_/strong_gt_matically  (in theory)_co_ via lines 364-375.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can activate line 361 to see joint1_t_s limitMotor angle ... streaming on the console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my opinion_co_ rollJoint1._physicsJoint.limitMotor.angle is changing MUCH too slowly.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe wheel MIGHT BE rolling... just... micro-amounts. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNormal up/down arrow keys produce motor speeds of approx. 31 and -31.  I set my auto-motor speed at 80_co_ much faster than up/down arrow keys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill_co_ slow slow angle changes.  hmm.  *shrug*  Still learning/testing.  Party on!   Help welcome_co_ as always.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Update_dd_  _lt_/strong_gt_Another broken-in-Oimo playground - paddle wheel thing_dd_  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#5W5B6W%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#5W5B6W#6_lt_/a_gt_   Maybe the Oimo motor is rusted?  Maybe some WD-40?  _lt_span_gt__dd_)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-10T06:46:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLatest_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PVBTF%2380_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PVBTF#80_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(yawn).  For those lost_co_ please back-read.  This is a thread about troubleshooting a setMotor() issue in the Oimo physics engine or plugin.  The issue appears to have been introduced in BabylonJS 2.5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor this PG_co_ I _qt_localized_qt_ the entire Oimo plugin... to make it easier for me to do tests.  So far_co_ I see no issues with the plugin.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder if we changed Oimo versions... between BJS 2.4 and 2.5.  Anyone know?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBack to the PG_co_ I decided to determine WHY the physics motors _lt_u_gt_on the steering_lt_/u_gt_... were working_co_ but _lt_u_gt_not_lt_/u_gt_ the motors that roll the wheels.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I disabled the setMotors() on the steering (it_t_s on the _qt_holders_qt__co_ to be specific... a little box near each wheel).   I disabled lines 739/740.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOMG_co_ left/right-arrow steering STILL WORKS!   Apparently the _qt_setLimit_qt_ lines 731/732 are doing some turning_co_ even without any setMotor() calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting!  Ok_co_ maybe not.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Other testing happening in renderLoop lines 772-784... repeatedly TRYING to _qt_brute force_qt_ the physics motors to run_co_ via native-level pokes.  No go._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_In my opinion_co_ there IS still a chance that this issue is caused by BJS itself... and not inside the plugin.  Activate line 797 to see wheel1 roll fine.  But just because I can roll it with setting angularVelocity... doesn_t_t mean that BJS system isn_t_t preventing the wheel from spinning.... when driven by a joint motor._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_De-activate line 797_co_ again_co_ and activate line 764_co_ to watch the motor angle streaming to the console.  See how it is _qt_micro-moving_qt_?  The caused-by-BJS theory... somewhat explains this.  The motor is TRYING to rotate it_t_s _qt_shape2_qt__co_ but BJS won_t_t let it_co_ because the shape-mesh has been frozen in place... by something in BJS itself._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_We must first try to determine if a different version of Oimo... was used in BJS 2.5 (as compared to BJS 2.4)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_And there_t_s one other thing.  The motors work fine in CannonJS... using the CannonJS plugin... in BJS 2.5+.  So even if it IS a BJS-caused issue_co_ it is ONLY affecting Oimo_t_s method of setMotor_co_ and not Cannon.  The setMotor plugin code for each... could be drastically different.  I have not yet compared Oimo_t_s setMotor code... to Cannon_t_s setMotor code... to see how they differ.  Studies and learning continue.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Not a very exciting adventure_co_ is it?  *nod*  I pretend that if I find the reason for the issue_co_ I _qt_get the girl_qt_.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  That keeps me motivated.  The hero ALWAYS gets the girl... unless it_t_s a girl hero... unless... well_co_ you know._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]