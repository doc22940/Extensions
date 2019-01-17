[{"Owner":"BangTao","Date":"2017-03-15T03:46:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thelllo.i wanna create a firework(which can get every instant of it)_co_here is the PG/\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#OHXA1%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#OHXA1#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can hardly controll the explode range(line 35-37).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#OHXA1%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#OHXA1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tis there some  ways that  can optimization it to make it more Fluent?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-15T12:39:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi BT.  Did you mean _qt_more _lt_em_gt_fluid_lt_/em_gt__qt_?  I don_t_t know much about Fluent programming techniques_co_ sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you use particles instead-of physics mesh?  Particle systems have a .manualEmitCount that allows pulses of particles that CAN simulate fireworks explosions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#206JUO%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#206JUO#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGetting a spherical or circular emit-pattern from our STANDARD emitters/fountains (mesh or vector3)... is not necessarily easy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT_co_ once upon a time_co_ I did particles in 3DS Max... that emitted from each vertex of a mesh_co_ and the particles that emitted from each vertex... were colored the vertexColor of THAT vertex-emitter.  Some local hero created the same thing for us_co_ here.  (Can_t_t rem who_co_ but I would hug them again. I LOVE LOVE LOVE particles spraying from verts.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2A4NUR%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2A4NUR#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDemos #2A4NUR 1-15 are cool_co_ too... worth touring for fun.  Above (#16)_co_ I am NOT using a .manualEmitCount (instead continuous flow)... and I am scaling the emitter/fountain sphere.  Looks cool_co_ huh?  You could make the emitter sphere invisible_co_ then use .manualEmitCount to _qt_pulse_qt_ the particles out-of the sphere.  Doing that_co_ I think you could get spherical/circular shapes to your fireworks explosions (even MORE realistic).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS particleSystems also have provisions (thx DK) for easily using 2 _lt_em_gt_custom_lt_/em_gt_ _lt_em_gt_functions_lt_/em_gt_ (you can override default funcs).  One u-change-it func is for starting and initially-positioning spawned particles.  Another over-ride-able is for updating each particle during each _qt_step_qt_ of their flight.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ for example_co_ using a _lt_em_gt_custom update function_lt_/em_gt__co_ you can change per-particle parameters mid-flight. It is a little CPU-heavy_co_ but fun. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelow... is a playground that uses custom _lt_em_gt_startPosition_lt_/em_gt_ and custom _lt_em_gt_update_lt_/em_gt_ funcs.  The update function does particle color and size changes... on-the-fly... for each particle. (lines 26 &amp_sm_ 27)  It makes them sparkle! (with the help of an excellent _qt_star_qt_ texture created by someone unknown.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1CMD3G%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1CMD3G#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll see me _qt_wedge-in_qt_ the custom _lt_em_gt_update_lt_/em_gt_ and custom _lt_em_gt_startPosition_lt_/em_gt_ funcs at lines 136 and 139.  Here_t_s a link that talks more about it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/27266-sps-and-gryff-the-end-of-the-world-as-we-know-it/?do_eq_findComment&amp_sm_comment_eq_156718_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/27266-sps-and-gryff-the-end-of-the-world-as-we-know-it/?do_eq_findComment&amp_sm_comment_eq_156718_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ too much talk.  I hope you consider using particles instead of physics.  Particles have good performance (when not doing demented Wingnut experiments that slow them down). They react well to scene gravity_co_ or allow a custom gravity_co_ and their flight trajectories are pretty good_co_ especially when being emitted by vertex points.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (I wonder what a heightMap per-vertex-emitter would look like)  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also use many particleSystems at the same time_co_ and they can share emitter mesh or emitter vector3 points.  Particles are a decent (and safe) fireworks tool.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Be well_co_ party on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Particles ARE mesh... or... actually... each particle is one _qt_quad_qt_ of a sub-divided ground or gridded plane.  Highly efficient.  Each particle flies through space... by moving its few vertices... and not via standard mesh .position or .rotation.  Each particle _qt_billboards_qt_ - it stays facing the camera.  (not necessarily true in our Solid Particle System_co_ but we_t_ll talk about that... another day.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-16T05:33:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_I_t_ve tried to use particleSystems_co_and。。。。。Haha _co_it_t_s did better than physics_co_and i can also get the particle_t_s position after i read this_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_167285_qt_ data-ipsquote-contentid_eq__qt_29071_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1489581566_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/27266-sps-and-gryff-the-end-of-the-world-as-we-know-it/?do_eq_findComment&amp_sm_comment_eq_156718_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/27266-sps-and-gryff-the-end-of-the-world-as-we-know-it/?do_eq_findComment&amp_sm_comment_eq_156718_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tand there still has problems_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\t  I still can_t_t get the max particle_t_s(X、Y、Z) and min particle_t_s(X、Y、Z) range(it_t_s like the BoundingBox_t_s Size)_co__co__co_is there a method or a formula that i can do some calculations to get these values?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tsee this _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#OHXA1%232_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_(please wait 10 sec)_co_why the explosion didn_t_t look like a sphere but a Box?any other ways to set the direction?(I only fonud direction1&amp_sm_direction2)\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-16T11:01:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi BT.  I think you are doing great.  Keep experimenting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  If you DID have upper left and lower right positions of a single particle _qt_bounding area_qt__co_ would that be somehow useful?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1a.  Are you wanting values for the upper left and lower right of the entire _qt_group_qt_ of particles?  Would that be somehow useful?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.  The square-ness of the fountain... MIGHT be caused by having .minEmitBox and .maxEmitBox _eq__eq_ 000.  Consider using different values_co_ there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdvice_dd_  Turn off physics/launch (the mortar and shell) for now_co_ and work-on ONLY the _qt_report_qt_ (the blast/pop).  Perhaps build BangTao_t_s Particle Popper Laboratory.  A confetti popper factory.  heh.   REAL fireworks _qt_report patterns_qt_ come from shell-packing methods... AND fancier tech.  They sometimes use _qt_bouquet_qt_ shells_co_ which are shells with other shells inside.  This allows for different _qt_stars_qt_ to travel at different speeds... after the pop.  So_co_ if you REALLY REALLY want to get realistic fireworks... you will need multiple particle systems operating at the same time. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also _qt_hack_qt_ our current particle code_co_ and turn it into a _qt_multi-channel_qt_ particles system_co_ but the perf results could be similar.  The BJS particle system is somewhat easy to understand and easy to hack-on.  For now_co_ let_t_s pretend you will use more than one PS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that directional updating... is done in the update function.  So_co_ YOU get to say how each particle flies.  You also are allowed a custom start-position function_co_ so you control where they start_co_ too. Think about that power.  YOU are the God of your particle systemS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShooting particles from the verts of a sphere... is easy.  The code is in the playgrounds above... and if you would become a professional at setting sphere vertex colors (colorKind data on the vertexData object for the sphere)... then you could make colored _qt_stripes_qt_ on the sphere.  Next_co_ squish it like a pumpkin... squatty.  Set its subdivs real high... and .manualEmitCount _eq_ 5000.  POOM.  Was it pretty?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe important part... learning how to _qt_paint_qt_ a sub-divided sphere... using colorKind data (color per vertex).  When you use that nicely colored sphere... to fire stars from its vertices... it SHOULD look nicely multi-colored.  You can hide the sphere with .visibility_co_ like line 17 in _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2A4NUR%2322_qt_ rel_eq__qt_external nofollow_qt__gt_this pg_lt_/a_gt_.  Now pretend there are FOUR hidden spheres_co_ with a particleSystem hooked to EACH ONE.  WOW.  Or_co_ maybe one little sphere_co_ one medium torus_co_ and one tall thin cylinder. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd guess what.  BangTao is going to turn-on .manualEmitCounts on everything_co_ all at the same time_co_ for 1 second.  POOM!   heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMultiple particle systems_co_ multiple particle sizes_co_ multiple colors_co_ directions_co_ and multiple _qt_spheres_qt_.  Cool. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ I know... firing stars from vertex points on mesh... IS a bit slow.  But_co_ it is somewhat already coded.  Again_co_ you can do custom particle systems with custom _qt_start_qt_ and _qt_update_qt_ if you wish.  I think... direction1 and 2 define a range... the upper and lower limits of system-provided random values.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember custom startPosition and custom updateParticle.  Using simple sine and cosine_co_ a person could _qt_start_qt_ particles in a circular pattern.  In update func... each particle can be checked.  Investigate its _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/particle_qt_ rel_eq__qt_external nofollow_qt__gt_property values_lt_/a_gt_.  Fancy stuff COULD be done (like a BJS particle system custom designed for fireworks).  But if you can afford perf loss_co_ then consider using hidden (custom painted) mesh and firing particles from their verts... to get patterns.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSOME people can live-move particle start locations_co_ perhaps managing an _qt_emitter state_qt__co_ and make pretty Fibonacci snail patterns and fancy junk... with math from their brains.  Not me_co_ though.  Math hates me.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ are you going to enter sphere-coloring school?  Become a God of setting vertex colors on mesh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRemember PlayDoh Fun Factory?  You _qt_pumped_qt_ the PlayDoh through _qt_cookie cutter_qt_ templates... to make pretty shapes.  In a way_co_ emitting particles from mesh vertices... is similar.  The shapes and colors of the (hidden and highly-colored) mesh... is the cookie cutter.  Sort of like swap-able _qt_nozzles_qt_ on the fireworks machine.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Collect a toolbox of sphere colorizers... little pieces of code... each makes a different color mesh... for spraying particles-from.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_ Wingnut just RAMBLING on and on... no real purpose.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-17T09:48:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_aha_co_this is really a good _qt__lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_RAMBLING_lt_/span_gt__qt__co_I benefited a lot。thank u so much_co_and with your help_co_i did some changes_co_look at this _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TM3B6%234_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_. Although i still not familiar with PS_co_but i found that  it become more and more interesting（Imagination is _qt_Power_qt__lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_）_co_i_t_ll keep investigating and perfecting fireworks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know what to say but thankful for your support_co_。_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tand i know one thing which is _qt_Why it explode like a square not a sphere_qt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcause the direction1&amp_sm_&amp_sm_direction2_t_s range_eq__eq_&gt_sm_Eg_dd_X from -1 to  1_sm_Y from -1 to 1_sm_Z_dd_from -1 to 1_co_that_t_s exactly a Box_co_how come it_t_ll be a sphere?_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-17T13:25:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  My pleasure.  Good to hear_co_ thx!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy is _t_emitBox_t_ not a sphere?  GOOD QUESTION!   I think we need to be math professors to understand why.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT... did you see my dome-of-stars demented experiment?  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#J6ZLH%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#J6ZLH#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 10 is the particle start-position custom func.  Line 20 is the update-each-particle-each-step custom function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at lines 31-39.  That is code from BJS _lt_em_gt_normal_lt_/em_gt_ particle updater.  I just ignore it.  Nope_co_ Mister JS_co_ you won_t_t be doing any addInPlace or scaleToRef (flying) MY particles.  I need MY particles to stay where they started.  At lines 140-152... I don_t_t even set gravity or direction 1/2 values.  MY custom update function ignores them_co_ anyway.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGOD of particles.  Taking control.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Particle Choreographer.  Can you _qt_design_qt_ a particle dance number... with 5000 particle dancers_co_ and not have any stage stumbles?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(how le femme)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I had to steal code from the Cartesians_co_ and then Theta and Phi got involved_co_ and it all got ugly.  My startPosition needed lots of help.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tApparently_co_ getting things _qt_spaced_qt_ in a spherical way_co_ is not easy_co_ worldwide.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd apparently folks don_t_t like the _qt_flocking_qt_ near the poles_co_ either.  Flocking poles.  hrmf.  I guess they want perfect distribution/dispersion of particles.... whomever _qt_they_qt_ are.  (Wingy tosses a k-ration from a Russian military plane as if flies over the north pole).  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCircular things... (flat_co_ not spherical)... are a little easier.  Check out lines 3-11 on _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1N9RJY%2332_qt_ rel_eq__qt_external nofollow_qt__gt_THIS circle-maker playground_lt_/a_gt_.  Not sure_co_ but I _lt_em_gt_think_lt_/em_gt_ I have seen SOME fireworks... be tilted upright_co_ or aimed relative to the launch point.  That type would be less-reliant on gravity_co_ and more a _qt_blast it toward/away-from the audience_qt_ report.  Let_t_s call that... a _qt_vectored report_qt__co_ ok?  Easier to type.  Target-able report_co_ rotation-wise_co_ including aiming straight up or down... but not dependent upon gravity to accomplish that.  SIGH.  Damn_co_ describing stuff SUCKS.  I_t_m pooped!  heh.  Like ANY of us REALLY wanted to study fireworks technology at this time in our lives. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou could easily mod my _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1CMD3G%2318_qt_ rel_eq__qt_external nofollow_qt__gt_wall-of-emitters_lt_/a_gt_... into a circle-of-emitters_co_ right?  Perhaps a very tiny circle.  Notice they are not mesh.  Each nozzle is a vector3.  Each nozzle shoots almost straight up (see lines 167-168_co_ and lines 29-32 where those directions are applied to the particles).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou would do start-position settings based-upon sin and cosine stuff in lines 8-9 of the circlemaker.  Try to avoid pre-making the positions like I did.  Try to _qt_derive_qt_ the next position... _qt_just in time_qt_.  _qt_Stream_qt_ a _qt_flow_qt_ of vector3_t_s into ps.emitter.  It_t_s a propeller_co_ when you get it working properly.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut... what if you could do _lt_strong_gt_direction updating_lt_/strong_gt_ (all the addInPlace/scaleToRef stuff)... based-upon the sin and cosine_co_ too?  You would then have 18 vector3 emitters... in a circle... all firing (direction_t_d) outwards.  Spokes generator.  Many of today_t_s fancier fireworks... do a fast spokes-background first... beams or flower petals.  Can you make a _qt_Spokes Nozzle_qt_?  (Opposite of the low-powered water-bubbler nozzle).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ now you have some more formulas for your _qt_fireworks nozzle design company_qt_. Grab a fresh toddy and _lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_spherical+coordinates_qt_ rel_eq__qt_external nofollow_qt__gt_The Spherical Coordinates Manual_lt_/a_gt__co_ and may your horse be with you.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Anything is possible.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-19T16:05:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22253-richard-c/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22253_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22253-richard-c/_qt_ rel_eq__qt__qt__gt_@Richard C_lt_/a_gt_ and I have been working on some particle emit-patterns... doing some playing.  Richard is now at the point... where he MIGHT want to try using _lt_strong_gt_custom functions_lt_/strong_gt_ that can easily be installed in our standard Babylon particleSystem.  These three functions (and easy user-intervention/customization points)... can be used to really _qt_take command_qt_ of a particle system.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I was making a playground for the Richard C project_co_ and I thought it would be handy for THIS thread_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1PQT7P%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1PQT7P#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a deep box_co_ using large .emitBox Z-axis values_co_ and also with .direction1/2 set to spray particles into the upper-left quadrant (up and left).  Nothing TOO fancy_co_ there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT_co_ this demo has all three customizable funcs... already _qt_hijacked_qt_ into the playground (lines 17-57)  (big-time hacking fun areas!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey are still _qt_default_qt_... essentially identical-to BJS 2.5 core code.  No customization has been done at all (to the 3 custom funcs). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ this playground is a nice _qt_experimenter_t_s starter kit_qt_... for those who want to play-with custom functions for a standard BabylonJS particleSystem.  Do experiments_co_ make mores saves_co_ grab a zip_co_ try to blow up the world!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Talk more soon... party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-24T09:48:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHi_co_Wingnut_co_Check this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ZXI9H_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ZXI9H_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to delay method execution?these two explosion are happened at the same time...(Lines_dd_77-79_co_and the _qt_version1Firework_qt_ Func is at Line 130)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I-|)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-25T13:32:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNICE!!!  Well done!  Yeah_co_ you can use the JS _lt_em_gt_setTimout _lt_/em_gt_method... to delay a func execution.  Lines 156-160 of _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#14EGUT%2352_qt_ rel_eq__qt_external nofollow_qt__gt_this fascinating playground_lt_/a_gt_.  _lt_em_gt_msWait_lt_/em_gt_ _eq__eq_1000 means about 1 second delay... between box spawnings.  Currently set to 200 (about 1/5 second) in line 166. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep up the pro fire-working_co_ BT.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Looks great.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-27T12:41:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeap!and that works_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_~\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut there is a new problem that i can_t_t use _qt_PS.dispose()_qt_ method_co_cause this _lt_strong_gt_seems will dispose all of the ParticularSystem_lt_/strong_gt_(i_t_m trying to create more than 5 PS.)~~~~\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ZXI9H%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ZXI9H#2_lt_/a_gt_(Line 81)\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow can i remove each PS_t_s particulars and it_t_s meshes?(Like it didn_t_t created?)_co_i can not control it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep working _lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve solve!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-29T12:44:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck this.haha_lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#J6ZLH%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#J6ZLH#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-29T17:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBEAUTIFUL!!!  Coooooool!  I bookmarked that one twice.  \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]