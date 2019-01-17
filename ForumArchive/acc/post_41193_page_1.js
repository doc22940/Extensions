[{"Owner":"tham_kathy","Date":"2018-11-11T12:53:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan anyone please explain the code here?  I_t_m really confused with the complex formulas here. Went through the code for days but couldn_t_t understand it properly. Really appreciate this help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample -&gt_sm_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#4GBWI5%23110_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#4GBWI5#110_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tham_kathy","Date":"2018-11-12T04:23:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnyone ??? _lt_span class_eq__qt_ipsEmoji_qt__gt_😔_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-12T10:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi TK.  Everyone is scared to answer.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Reading that vertices-manipulation code... is like trying to read Klingon text_co_ eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you_t_ll need to be more patient. Possibly_co_ this PG was coded by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_.   I could be wrong - happens often.  He stands pinged_co_ so he_t_ll visit us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut you must admit... that teaching somebody _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#4GBWI5%23110_qt_ rel_eq__qt_external nofollow_qt__gt_that code_lt_/a_gt_... could be a very time-consuming task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s take a slow start.  Do you understand what happens in lines 170-179? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s almost easy to see... that we take the data stored in some arrays on a _qt_vertexData_qt_ object_co_ and we apply it to a blank mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe 4 arrays... are positions_co_ indices_co_ normals_co_ and UVs.  Colors is another_co_ but not used there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA bunch of junk about _qt_plotting_qt_... (shaping your own mesh)... can be learned in this plotting demo... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1UHFAP%2360_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1UHFAP#60_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is using a _lt_em_gt_colors_lt_/em_gt_ array instead of a UVs (for texture mappings) array_co_ but you can still learn lots and do experiments.  Tour-around in the entire 1UHFAP series... see all the plottings people have done.  (Yes_co_ I DO wish we had + and - buttons on the playground GUI_co_ to go-to next/previous playgrounds.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPositions - they are the positions of the vertices in 3D space... always 3 values.... x y z.  Pretend that verts also have a WHICH ONE AM I number.  It_t_s often called an _lt_em_gt_index._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIndices - imaginary lines often used to delineate a _qt_face_qt_... which is a triangle.  Usually/always they are 3 values.  The values are vertex indexes... the WHICH ONE AM I numbers mentioned above.  Indices drawn in ONE clockwise/counterclockwise direction... causes the triangle_t_s _qt_face_qt_ to have its _qt_front side_qt_ in ONE direction.  Drawn in the other direction_co_ and the face _qt_faces_qt_ the other direction.  Used heavily in lighting and _qt_backfaceCulling_qt_ ops... performance stuff.  These are all things you can learn-about/experiment-with... in the #60 demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAin_t_t it cool that the #60 demo has a _lt_em_gt_boxify_lt_/em_gt_ helper func... to display the _qt_WHICH ONE AM I_qt_ vertex index number?  Yeah boy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNormals - are a direction vector3_co_ often used to calculate lights/colors.  Sometimes they are also used for bounce-angles for physics collisions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tColors - BJS has a color-per-vertex system.  It is well-activated on the #60 demo... showing a nice color-dithering effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUV_t_s - UVW is exactly the same as XYZ_co_ except it is _lt_u_gt_for textures_lt_/u_gt_.  SO_co_ UV could be thought-of as TEXTURE XY axes_co_ yes?  And that_t_s exactly what it is.  Each is only two values (per vertex) and the values are always between 0 and 1 inclusive.  Textures ALWAYS have their X_dd_0 and Y_dd_0 point... in the lower left corner.  So if you set a 0_co_ 0 UV on some vert_co_ that means that the lower left corner of the texture... will _qt_clamp_qt_ there.  If you set it to .3_co_ 0_co_ then the texture would clamp to that vert... 30% of its width inward along X axis.  Textures can stretch_co_ they are latex-ish.  UV_t_s can be thought-of as HOW TO STRETCH and WHERE TO STAPLE IT (clamp it) to a vert location.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith me?  Goooood.  You are rolling into the world of the Vertex Masters.  Most of the (Klingon) code in the #110 playground... is vertexData array manipulations.  One of the most important things for professional vertex wranglers... is knowing how the arrays are formatted.  How to _qt_lookup_qt_ the position_co_ normal_co_ indices_co_ UV_co_ colors... of ANY vertex.  Where are the commas in the array data? How are the values stored?  This... takes practice... and some greasy Klingon-looking math-wrangling.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Ok_co_ from this point onward_co_ I_t_m just as confused as you are.  I_t_m far-from being a pro vertex wrangler.  I failed Algebra 1 three years in a row_co_ but I did manage a _qt_D_qt_ grade for _qt_Introduction to Algebra_qt_ in my freshman year.  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe make webGL frameworks _t_round here_co_ and not modellers.  We don_t_t teach modelling_co_ either.  But we got a few demos that can help you teach yourself modelling/plotting... using the BJS vertexData geometry-storage system.  _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.vertexdata_qt_ rel_eq__qt_external nofollow_qt__gt_VertexData objects_lt_/a_gt_ have some powerful tools on them_co_ thanks to the fine core-coders for BJS.  Many of those tools are there to help learn the system.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I hope I didn_t_t accidentally tell you wrong things.  And I hope others will visit and give advice_co_ but be patient... especially with yourself.  There_t_s really no shortcuts to vert-wrangling_co_ other than using a modelling software app.  If you want to grapple great roof-plotter funcs like those seen in #110_co_ ya just GOTTA _qt_grind it out_qt_.  The variable names you see in the code... ARE applicable and wise... but are severely abbreviated.  Once you learn the terminology used in plotting_co_ they will make more sense.  It just takes time... and patience.  But I think you can see WHY folks use modelling software.  Plotting-by-math... is certainly no _qt_walk in the park_qt__co_ is it?  Sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou picked a GRUESOME playground to ask about _qt_How does this thing work?_qt_.  MANY of us are wondering the very same thing.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tham_kathy","Date":"2018-11-12T10:37:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually I understood everything clearly except that UV thing. So I just removed that code from my research  project and now there is no texture for the roof. _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#4GBWI5%23120_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#4GBWI5#120_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou guys really helped me during my research project. Thanks again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-12T10:46:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy pleasure.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#13AEVX%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#13AEVX#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried some miserable plotting of woodgrain.... on some flat-shaded mesh.  I got a brain tumor.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Flat-shaded mesh are weird because they have more than one vertex... at the exact same location.  SOMETIMES... 5 of them at the same location (see the stacks of blue boxify markers?)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is needed so that more _qt_normals_qt_ data is available_co_ so light reflections can show that _qt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#LB4MVX%237_qt_ rel_eq__qt_external nofollow_qt__gt_faceted diamond_lt_/a_gt__qt_ type of rendering.  Plotting.  erf.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUV_t_s can be treated like percentages.   For example_co_ 0.3_co_ 0.8 means... 30% rightward on X-axis ... and 80% upward on Y-axis (starting from lower left 0_co_0 corner of texture).  Staple/clamp/tack THAT point OF the texture... to THIS vertex.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-11-12T17:40:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBeen busy recently so sorry for the delay. You need to be able to understand the data structure of a mesh and particularly for the UV part _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/custom#calculating-uvs_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/custom#calculating-uvs_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you state a couple of lines at a time that give you the most problem we can work through code a bit at a time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]