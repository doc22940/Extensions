[{"Owner":"damian2taylor","Date":"2017-09-06T14:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to create my own SSAO shader in forward rendering (not in post processing) with GLSL. I_t_m encountering some issues_co_ but I really can_t_t figure out what_t_s wrong with my code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is implemented as a BABYLON.ShaderMaterial and set in a RenderTargetTexture_co_ and it is mainly inspired by this renowned SSAO tutorial_dd_ _lt_a href_eq__qt_http_dd_//john-chapman-graphics.blogspot.fr/2013/01/ssao-tutorial.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//john-chapman-graphics.blogspot.fr/2013/01/ssao-tutorial.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor performance reasons_co_ I have to do all the calculation without projecting and unprojecting in screen space_co_ I_t_d rather use the view ray method described in the tutorial above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- First_co_ I calculate my four camera far plane corners positions in my JS code. They might be constants every time as they are calculated in view space position.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Calculating 4 corners manually in view space\nvar tan _eq_ Math.tan_sm_\nvar atan _eq_ Math.atan_sm_\nvar ratio _eq_ SSAOSize.x / SSAOSize.y_sm_\nvar far _eq_ scene.activeCamera.maxZ_sm_\nvar fovy _eq_ scene.activeCamera.fov_sm_\nvar fovx _eq_ 2 * atan(tan(fovy/2) * ratio)_sm_\nvar xFarPlane _eq_ far * tan(fovx/2)_sm_\nvar yFarPlane _eq_ far * tan(fovy/2)_sm_\n\nvar topLeft     _eq_ new BABYLON.Vector3(-xFarPlane_co_  yFarPlane_co_ far)_sm_\nvar topRight    _eq_ new BABYLON.Vector3( xFarPlane_co_  yFarPlane_co_ far)_sm_\nvar bottomRight _eq_ new BABYLON.Vector3( xFarPlane_co_ -yFarPlane_co_ far)_sm_\nvar bottomLeft  _eq_ new BABYLON.Vector3(-xFarPlane_co_ -yFarPlane_co_ far)_sm_\n\nvar farCornersVec _eq_ [topLeft_co_ topRight_co_ bottomRight_co_ bottomLeft]_sm_\nvar farCorners _eq_ []_sm_\n\nfor (var i _eq_ 0_sm_ i &lt_sm_ 4_sm_ i++) {\n    var vecTemp _eq_ farCornersVec[i]_sm_\n    farCorners.push(vecTemp.x_co_ vecTemp.y_co_ vecTemp.z)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t- These corner positions are sent to the vertex shader -- that is why the vector coordinates are serialized in the farCorners array to be sent in the vertex shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- In my vertex shader_co_ _lt_em_gt_position_lt_/em_gt_.x and _lt_em_gt_position_lt_/em_gt_.y signs let the shader know which corner to use at each pass.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- These corners are then interpolated in my fragment shader for calculating a view ray_co_ i.e. a vector from the camera to the far plane (its z component is_co_ therefore_co_ equal to the far plane distance to camera).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get my depth buffer as a BABYLON.RenderTargetTexture with the DepthRenderer.getDepthMap() method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe kernel samples are disposed in a hemisphere with random floats in [0_co_1]_co_ most being distributed close to origin with a linear interpolation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I don_t_t have a normal texture_co_ I calculate them from the current depth buffer value with getNormalFromDepthValue() (source_dd_ _lt_a href_eq__qt_http_dd_//theorangeduck.com/page/pure-depth-ssao_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//theorangeduck.com/page/pure-depth-ssao_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinally_co_ my getDepth() function allows me to get the depth value at current UV in 32-bit float.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my fragment shader code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_uniform mat4 projection_sm_ // Projection matrix\nuniform float radius_sm_ // Scaling factor for sample position_co_ by default _eq_ 1.7\nuniform float depthBias_sm_ // 1e-5\nuniform vec2 noiseScale_sm_ // (SSAOSize.x / noiseSize_co_ SSAOSize.y / noiseSize)_co_ with noiseSize _eq_ 4\n\nvarying vec3 vCornerPositionVS_sm_ // vCornerPositionVS is the interpolated position calculated from the 4 far corners\n\nvoid main() {\n    // Get linear depth in [0_co_1] with texture2D(depthBufferTexture_co_ vUV)\n    float fragDepth _eq_ getDepth(depthBufferTexture_co_ vUV)_sm_\n    float occlusion _eq_ 0.0_sm_\n\n    if (fragDepth &lt_sm_ 1.0) {\n        // Retrieve fragment_t_s view space normal\n        vec3 normal _eq_ getNormalFromDepthValue(fragDepth)_sm_ // in [-1_co_1]\n\n        // Random rotation_dd_ rvec.xyz are the components of the generated random vector\n        vec3 rvec _eq_ texture2D(randomSampler_co_ vUV * noiseScale).rgb * 2.0 - 1.0_sm_ // [-1_co_1]\n        rvec.z _eq_ 0.0_sm_ // Random rotation around Z axis\n\n        // Get view ray_co_ from camera to far plane_co_ scaled by 1/far so that viewRayVS.z _eq__eq_ 1.0\n        vec3 viewRayVS _eq_ vCornerPositionVS / far_sm_\n\n        // Current fragment_t_s view space position\n        vec3 fragPositionVS _eq_ viewRay * fragDepth_sm_\n\n        // Creation of TBN matrix\n        vec3 tangent _eq_ normalize(rvec - normal * dot(rvec_co_ normal))_sm_\n        vec3 bitangent _eq_ cross(normal_co_ tangent)_sm_\n        mat3 tbn _eq_ mat3(tangent_co_ bitangent_co_ normal)_sm_\n\n        for (int i _eq_ 0_sm_ i &lt_sm_ NB_SAMPLES_sm_ i++) {\n            // Get sample kernel position_co_ from tangent space to view space\n            vec3 samplePosition _eq_ tbn * kernelSamples[i]_sm_\n\n           // Add VS kernel offset sample to fragment_t_s VS position\n            samplePosition _eq_ samplePosition * radius + fragPosition_sm_\n\n            // Project sample position from view space to screen space_dd_\n            vec4 offset _eq_ vec4(samplePosition_co_ 1.0)_sm_\n            offset _eq_ projection * offset_sm_\n            offset.xy /_eq_ offset.w_sm_ // Perspective division -&gt_sm_ [-1_co_1]\n            offset.xy _eq_ offset.xy * 0.5 + 0.5_sm_ // [-1_co_1] -&gt_sm_ [0_co_1]\n\n            // Get current sample depth_dd_\n            float sampleDepth _eq_ getDepth(depthTexture_co_ offset.xy)_sm_\n\n            float rangeCheck _eq_ abs(fragDepth - sampleDepth) &lt_sm_ radius ? 1.0 _dd_ 0.0_sm_\n            // Reminder_dd_ fragDepth _eq__eq_ fragPosition.z\n\n            // Range check and accumulate if fragment contributes to occlusion_dd_\n            occlusion +_eq_ (samplePosition.z - sampleDepth &gt_sm__eq_ depthBias ? 1.0 _dd_ 0.0) * rangeCheck_sm_\n        }\n    }\n\n    // Inversion\n    float ambientOcclusion _eq_ 1.0 - (occlusion / float(NB_SAMPLES))_sm_\n    ambientOcclusion _eq_ pow(ambientOcclusion_co_ power)_sm_\n    gl_FragColor _eq_ vec4(vec3(ambientOcclusion)_co_ 1.0)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tA horizontal and vertical gaussian shader blur clears the noise generated by the random texture afterwards.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy parameters are_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNB_SAMPLES _eq_ 16_lt_br /_gt_\n\tradius _eq_ 1.7_lt_br /_gt_\n\tdepthBias _eq_ 1e-5_lt_br /_gt_\n\tpower _eq_ 1.0\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe result has artifacts on its edges_co_ and the close shadows are not very strong... Would anyone see something wrong or weird in my code?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14755_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/Capture.png.5ddecacbccc17b329de681aaf0826a96.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Capture.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14755_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/Capture.png.5ddecacbccc17b329de681aaf0826a96.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"damian2taylor","Date":"2017-09-07T14:01:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tQuestion linked to this topic_dd_ having looked in both documentation and source code of BJS_co_ I can_t_t figure it out at all_co_ but maybe someone could help me on this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGetting my depth buffer as a BABYLON.RenderTargetTexture with the _lt_strong_gt_DepthRenderer.getDepthMap()_lt_/strong_gt_ method_co_ _lt_u_gt__lt_strong_gt_is this depth function linear??_lt_/strong_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-07T17:36:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is how we generate it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/depth.vertex.fx#L32_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/depth.vertex.fx#L32_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw_co_ perhaps you should provide a repro in the PG so we can try to experiment with you _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"damian2taylor","Date":"2017-09-15T10:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ I understand that this depth is non-linear (so that it is more precise for near distances for optimization reasons).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question is now_dd_ _lt_strong_gt_how do I get linear depth in _lt_/strong_gt__lt_strong_gt_range_lt_/strong_gt__lt_strong_gt_ [0.0_co_ 1.0]?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I read _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12153-depth-only-pass/_qt_ rel_eq__qt__qt__gt_that post_lt_/a_gt_ but I didn_t_t get it all_co_ it is quite complex and seems more like a debate between experienced BJS developers _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt_ Plus it is kinda old\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-15T21:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTo get the depth as linear I would recommend computing it in camera space and just dividing it by (maxZ - minZ) \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]