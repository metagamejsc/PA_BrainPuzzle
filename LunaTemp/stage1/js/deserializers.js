var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.JointSpring' )
  var i2781 = data
  i2780.spring = i2781[0]
  i2780.damper = i2781[1]
  i2780.targetPosition = i2781[2]
  return i2780
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.JointMotor' )
  var i2783 = data
  i2782.m_TargetVelocity = i2783[0]
  i2782.m_Force = i2783[1]
  i2782.m_FreeSpin = i2783[2]
  return i2782
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.JointLimits' )
  var i2785 = data
  i2784.m_Min = i2785[0]
  i2784.m_Max = i2785[1]
  i2784.m_Bounciness = i2785[2]
  i2784.m_BounceMinVelocity = i2785[3]
  i2784.m_ContactDistance = i2785[4]
  i2784.minBounce = i2785[5]
  i2784.maxBounce = i2785[6]
  return i2784
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.JointDrive' )
  var i2787 = data
  i2786.m_PositionSpring = i2787[0]
  i2786.m_PositionDamper = i2787[1]
  i2786.m_MaximumForce = i2787[2]
  i2786.m_UseAcceleration = i2787[3]
  return i2786
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2789 = data
  i2788.m_Spring = i2789[0]
  i2788.m_Damper = i2789[1]
  return i2788
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2791 = data
  i2790.m_Limit = i2791[0]
  i2790.m_Bounciness = i2791[1]
  i2790.m_ContactDistance = i2791[2]
  return i2790
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2793 = data
  i2792.m_ExtremumSlip = i2793[0]
  i2792.m_ExtremumValue = i2793[1]
  i2792.m_AsymptoteSlip = i2793[2]
  i2792.m_AsymptoteValue = i2793[3]
  i2792.m_Stiffness = i2793[4]
  return i2792
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2795 = data
  i2794.m_LowerAngle = i2795[0]
  i2794.m_UpperAngle = i2795[1]
  return i2794
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2797 = data
  i2796.m_MotorSpeed = i2797[0]
  i2796.m_MaximumMotorTorque = i2797[1]
  return i2796
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2799 = data
  i2798.m_DampingRatio = i2799[0]
  i2798.m_Frequency = i2799[1]
  i2798.m_Angle = i2799[2]
  return i2798
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2801 = data
  i2800.m_LowerTranslation = i2801[0]
  i2800.m_UpperTranslation = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2803 = data
  i2802.name = i2803[0]
  i2802.width = i2803[1]
  i2802.height = i2803[2]
  i2802.mipmapCount = i2803[3]
  i2802.anisoLevel = i2803[4]
  i2802.filterMode = i2803[5]
  i2802.hdr = !!i2803[6]
  i2802.format = i2803[7]
  i2802.wrapMode = i2803[8]
  i2802.alphaIsTransparency = !!i2803[9]
  i2802.alphaSource = i2803[10]
  i2802.graphicsFormat = i2803[11]
  i2802.sRGBTexture = !!i2803[12]
  i2802.desiredColorSpace = i2803[13]
  i2802.wrapU = i2803[14]
  i2802.wrapV = i2803[15]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2804 = root || new pc.UnityMaterial()
  var i2805 = data
  i2804.name = i2805[0]
  request.r(i2805[1], i2805[2], 0, i2804, 'shader')
  i2804.renderQueue = i2805[3]
  i2804.enableInstancing = !!i2805[4]
  var i2807 = i2805[5]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2807[i + 0]) );
  }
  i2804.floatParameters = i2806
  var i2809 = i2805[6]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2809[i + 0]) );
  }
  i2804.colorParameters = i2808
  var i2811 = i2805[7]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2811[i + 0]) );
  }
  i2804.vectorParameters = i2810
  var i2813 = i2805[8]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2813[i + 0]) );
  }
  i2804.textureParameters = i2812
  var i2815 = i2805[9]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2815[i + 0]) );
  }
  i2804.materialFlags = i2814
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.value = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2823 = data
  i2822.name = i2823[0]
  i2822.value = new pc.Color(i2823[1], i2823[2], i2823[3], i2823[4])
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2827 = data
  i2826.name = i2827[0]
  i2826.value = new pc.Vec4( i2827[1], i2827[2], i2827[3], i2827[4] )
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2831 = data
  i2830.name = i2831[0]
  request.r(i2831[1], i2831[2], 0, i2830, 'value')
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2835 = data
  i2834.name = i2835[0]
  i2834.enabled = !!i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.index = i2837[1]
  i2836.startup = !!i2837[2]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2839 = data
  i2838.aspect = i2839[0]
  i2838.orthographic = !!i2839[1]
  i2838.orthographicSize = i2839[2]
  i2838.backgroundColor = new pc.Color(i2839[3], i2839[4], i2839[5], i2839[6])
  i2838.nearClipPlane = i2839[7]
  i2838.farClipPlane = i2839[8]
  i2838.fieldOfView = i2839[9]
  i2838.depth = i2839[10]
  i2838.clearFlags = i2839[11]
  i2838.cullingMask = i2839[12]
  i2838.rect = i2839[13]
  request.r(i2839[14], i2839[15], 0, i2838, 'targetTexture')
  i2838.usePhysicalProperties = !!i2839[16]
  i2838.focalLength = i2839[17]
  i2838.sensorSize = new pc.Vec2( i2839[18], i2839[19] )
  i2838.lensShift = new pc.Vec2( i2839[20], i2839[21] )
  i2838.gateFit = i2839[22]
  i2838.commandBufferCount = i2839[23]
  i2838.cameraType = i2839[24]
  i2838.enabled = !!i2839[25]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2841 = data
  i2840.name = i2841[0]
  i2840.tagId = i2841[1]
  i2840.enabled = !!i2841[2]
  i2840.isStatic = !!i2841[3]
  i2840.layer = i2841[4]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2843 = data
  i2842.pivot = new pc.Vec2( i2843[0], i2843[1] )
  i2842.anchorMin = new pc.Vec2( i2843[2], i2843[3] )
  i2842.anchorMax = new pc.Vec2( i2843[4], i2843[5] )
  i2842.sizeDelta = new pc.Vec2( i2843[6], i2843[7] )
  i2842.anchoredPosition3D = new pc.Vec3( i2843[8], i2843[9], i2843[10] )
  i2842.rotation = new pc.Quat(i2843[11], i2843[12], i2843[13], i2843[14])
  i2842.scale = new pc.Vec3( i2843[15], i2843[16], i2843[17] )
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2845 = data
  i2844.planeDistance = i2845[0]
  i2844.referencePixelsPerUnit = i2845[1]
  i2844.isFallbackOverlay = !!i2845[2]
  i2844.renderMode = i2845[3]
  i2844.renderOrder = i2845[4]
  i2844.sortingLayerName = i2845[5]
  i2844.sortingOrder = i2845[6]
  i2844.scaleFactor = i2845[7]
  request.r(i2845[8], i2845[9], 0, i2844, 'worldCamera')
  i2844.overrideSorting = !!i2845[10]
  i2844.pixelPerfect = !!i2845[11]
  i2844.targetDisplay = i2845[12]
  i2844.overridePixelPerfect = !!i2845[13]
  i2844.enabled = !!i2845[14]
  return i2844
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2847 = data
  i2846.m_UiScaleMode = i2847[0]
  i2846.m_ReferencePixelsPerUnit = i2847[1]
  i2846.m_ScaleFactor = i2847[2]
  i2846.m_ReferenceResolution = new pc.Vec2( i2847[3], i2847[4] )
  i2846.m_ScreenMatchMode = i2847[5]
  i2846.m_MatchWidthOrHeight = i2847[6]
  i2846.m_PhysicalUnit = i2847[7]
  i2846.m_FallbackScreenDPI = i2847[8]
  i2846.m_DefaultSpriteDPI = i2847[9]
  i2846.m_DynamicPixelsPerUnit = i2847[10]
  i2846.m_PresetInfoIsWorld = !!i2847[11]
  return i2846
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2849 = data
  i2848.m_IgnoreReversedGraphics = !!i2849[0]
  i2848.m_BlockingObjects = i2849[1]
  i2848.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2849[2] )
  return i2848
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i2850 = root || request.c( 'Playable.GameManager' )
  var i2851 = data
  i2850.EventCountdownEndGame = request.d('System.Action', i2851[0], i2850.EventCountdownEndGame)
  i2850._totalEvent = i2851[1]
  i2850._maxEvent = i2851[2]
  i2850._endTime = i2851[3]
  request.r(i2851[4], i2851[5], 0, i2850, '_backgroundMusic')
  request.r(i2851[6], i2851[7], 0, i2850, '_backgroundTexture')
  request.r(i2851[8], i2851[9], 0, i2850, '_btnBlock')
  request.r(i2851[10], i2851[11], 0, i2850, '_background')
  request.r(i2851[12], i2851[13], 0, i2850, '_losePanel')
  request.r(i2851[14], i2851[15], 0, i2850, '_progressFillImage')
  request.r(i2851[16], i2851[17], 0, i2850, '_progressText')
  i2850._progressTweenDuration = i2851[18]
  request.r(i2851[19], i2851[20], 0, i2850, '_timerFillImage')
  request.r(i2851[21], i2851[22], 0, i2850, '_timerText')
  i2850._timerPunchScale = i2851[23]
  return i2850
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2852 = root || request.c( 'System.Action' )
  var i2853 = data
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2855 = data
  i2854.cullTransparentMesh = !!i2855[0]
  return i2854
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2856 = root || request.c( 'UnityEngine.UI.Image' )
  var i2857 = data
  request.r(i2857[0], i2857[1], 0, i2856, 'm_Sprite')
  i2856.m_Type = i2857[2]
  i2856.m_PreserveAspect = !!i2857[3]
  i2856.m_FillCenter = !!i2857[4]
  i2856.m_FillMethod = i2857[5]
  i2856.m_FillAmount = i2857[6]
  i2856.m_FillClockwise = !!i2857[7]
  i2856.m_FillOrigin = i2857[8]
  i2856.m_UseSpriteMesh = !!i2857[9]
  i2856.m_PixelsPerUnitMultiplier = i2857[10]
  request.r(i2857[11], i2857[12], 0, i2856, 'm_Material')
  i2856.m_Maskable = !!i2857[13]
  i2856.m_Color = new pc.Color(i2857[14], i2857[15], i2857[16], i2857[17])
  i2856.m_RaycastTarget = !!i2857[18]
  i2856.m_RaycastPadding = new pc.Vec4( i2857[19], i2857[20], i2857[21], i2857[22] )
  return i2856
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2858 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2859 = data
  request.r(i2859[0], i2859[1], 0, i2858, 'm_Texture')
  i2858.m_UVRect = UnityEngine.Rect.MinMaxRect(i2859[2], i2859[3], i2859[4], i2859[5])
  request.r(i2859[6], i2859[7], 0, i2858, 'm_Material')
  i2858.m_Maskable = !!i2859[8]
  i2858.m_Color = new pc.Color(i2859[9], i2859[10], i2859[11], i2859[12])
  i2858.m_RaycastTarget = !!i2859[13]
  i2858.m_RaycastPadding = new pc.Vec4( i2859[14], i2859[15], i2859[16], i2859[17] )
  return i2858
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2861 = data
  i2860.m_hasFontAssetChanged = !!i2861[0]
  request.r(i2861[1], i2861[2], 0, i2860, 'm_baseMaterial')
  i2860.m_maskOffset = new pc.Vec4( i2861[3], i2861[4], i2861[5], i2861[6] )
  i2860.m_text = i2861[7]
  i2860.m_isRightToLeft = !!i2861[8]
  request.r(i2861[9], i2861[10], 0, i2860, 'm_fontAsset')
  request.r(i2861[11], i2861[12], 0, i2860, 'm_sharedMaterial')
  var i2863 = i2861[13]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 2, i2862, '')
  }
  i2860.m_fontSharedMaterials = i2862
  request.r(i2861[14], i2861[15], 0, i2860, 'm_fontMaterial')
  var i2865 = i2861[16]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 2) {
  request.r(i2865[i + 0], i2865[i + 1], 2, i2864, '')
  }
  i2860.m_fontMaterials = i2864
  i2860.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2861[17], i2861[18], i2861[19], i2861[20])
  i2860.m_fontColor = new pc.Color(i2861[21], i2861[22], i2861[23], i2861[24])
  i2860.m_enableVertexGradient = !!i2861[25]
  i2860.m_colorMode = i2861[26]
  i2860.m_fontColorGradient = request.d('TMPro.VertexGradient', i2861[27], i2860.m_fontColorGradient)
  request.r(i2861[28], i2861[29], 0, i2860, 'm_fontColorGradientPreset')
  request.r(i2861[30], i2861[31], 0, i2860, 'm_spriteAsset')
  i2860.m_tintAllSprites = !!i2861[32]
  request.r(i2861[33], i2861[34], 0, i2860, 'm_StyleSheet')
  i2860.m_TextStyleHashCode = i2861[35]
  i2860.m_overrideHtmlColors = !!i2861[36]
  i2860.m_faceColor = UnityEngine.Color32.ConstructColor(i2861[37], i2861[38], i2861[39], i2861[40])
  i2860.m_fontSize = i2861[41]
  i2860.m_fontSizeBase = i2861[42]
  i2860.m_fontWeight = i2861[43]
  i2860.m_enableAutoSizing = !!i2861[44]
  i2860.m_fontSizeMin = i2861[45]
  i2860.m_fontSizeMax = i2861[46]
  i2860.m_fontStyle = i2861[47]
  i2860.m_HorizontalAlignment = i2861[48]
  i2860.m_VerticalAlignment = i2861[49]
  i2860.m_textAlignment = i2861[50]
  i2860.m_characterSpacing = i2861[51]
  i2860.m_wordSpacing = i2861[52]
  i2860.m_lineSpacing = i2861[53]
  i2860.m_lineSpacingMax = i2861[54]
  i2860.m_paragraphSpacing = i2861[55]
  i2860.m_charWidthMaxAdj = i2861[56]
  i2860.m_TextWrappingMode = i2861[57]
  i2860.m_wordWrappingRatios = i2861[58]
  i2860.m_overflowMode = i2861[59]
  request.r(i2861[60], i2861[61], 0, i2860, 'm_linkedTextComponent')
  request.r(i2861[62], i2861[63], 0, i2860, 'parentLinkedComponent')
  i2860.m_enableKerning = !!i2861[64]
  var i2867 = i2861[65]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.add(i2867[i + 0]);
  }
  i2860.m_ActiveFontFeatures = i2866
  i2860.m_enableExtraPadding = !!i2861[66]
  i2860.checkPaddingRequired = !!i2861[67]
  i2860.m_isRichText = !!i2861[68]
  i2860.m_parseCtrlCharacters = !!i2861[69]
  i2860.m_isOrthographic = !!i2861[70]
  i2860.m_isCullingEnabled = !!i2861[71]
  i2860.m_horizontalMapping = i2861[72]
  i2860.m_verticalMapping = i2861[73]
  i2860.m_uvLineOffset = i2861[74]
  i2860.m_geometrySortingOrder = i2861[75]
  i2860.m_IsTextObjectScaleStatic = !!i2861[76]
  i2860.m_VertexBufferAutoSizeReduction = !!i2861[77]
  i2860.m_useMaxVisibleDescender = !!i2861[78]
  i2860.m_pageToDisplay = i2861[79]
  i2860.m_margin = new pc.Vec4( i2861[80], i2861[81], i2861[82], i2861[83] )
  i2860.m_isUsingLegacyAnimationComponent = !!i2861[84]
  i2860.m_isVolumetricText = !!i2861[85]
  request.r(i2861[86], i2861[87], 0, i2860, 'm_Material')
  i2860.m_EmojiFallbackSupport = !!i2861[88]
  i2860.m_Maskable = !!i2861[89]
  i2860.m_Color = new pc.Color(i2861[90], i2861[91], i2861[92], i2861[93])
  i2860.m_RaycastTarget = !!i2861[94]
  i2860.m_RaycastPadding = new pc.Vec4( i2861[95], i2861[96], i2861[97], i2861[98] )
  return i2860
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.VertexGradient' )
  var i2871 = data
  i2870.topLeft = new pc.Color(i2871[0], i2871[1], i2871[2], i2871[3])
  i2870.topRight = new pc.Color(i2871[4], i2871[5], i2871[6], i2871[7])
  i2870.bottomLeft = new pc.Color(i2871[8], i2871[9], i2871[10], i2871[11])
  i2870.bottomRight = new pc.Color(i2871[12], i2871[13], i2871[14], i2871[15])
  return i2870
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2874 = root || request.c( 'UnityEngine.UI.Button' )
  var i2875 = data
  i2874.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2875[0], i2874.m_OnClick)
  i2874.m_Navigation = request.d('UnityEngine.UI.Navigation', i2875[1], i2874.m_Navigation)
  i2874.m_Transition = i2875[2]
  i2874.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2875[3], i2874.m_Colors)
  i2874.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2875[4], i2874.m_SpriteState)
  i2874.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2875[5], i2874.m_AnimationTriggers)
  i2874.m_Interactable = !!i2875[6]
  request.r(i2875[7], i2875[8], 0, i2874, 'm_TargetGraphic')
  return i2874
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2876 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2877 = data
  i2876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2877[0], i2876.m_PersistentCalls)
  return i2876
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2879 = data
  var i2881 = i2879[0]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.add(request.d('UnityEngine.Events.PersistentCall', i2881[i + 0]));
  }
  i2878.m_Calls = i2880
  return i2878
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'm_Target')
  i2884.m_TargetAssemblyTypeName = i2885[2]
  i2884.m_MethodName = i2885[3]
  i2884.m_Mode = i2885[4]
  i2884.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2885[5], i2884.m_Arguments)
  i2884.m_CallState = i2885[6]
  return i2884
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2887 = data
  request.r(i2887[0], i2887[1], 0, i2886, 'm_ObjectArgument')
  i2886.m_ObjectArgumentAssemblyTypeName = i2887[2]
  i2886.m_IntArgument = i2887[3]
  i2886.m_FloatArgument = i2887[4]
  i2886.m_StringArgument = i2887[5]
  i2886.m_BoolArgument = !!i2887[6]
  return i2886
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2888 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2889 = data
  i2888.m_Mode = i2889[0]
  i2888.m_WrapAround = !!i2889[1]
  request.r(i2889[2], i2889[3], 0, i2888, 'm_SelectOnUp')
  request.r(i2889[4], i2889[5], 0, i2888, 'm_SelectOnDown')
  request.r(i2889[6], i2889[7], 0, i2888, 'm_SelectOnLeft')
  request.r(i2889[8], i2889[9], 0, i2888, 'm_SelectOnRight')
  return i2888
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2890 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2891 = data
  i2890.m_NormalColor = new pc.Color(i2891[0], i2891[1], i2891[2], i2891[3])
  i2890.m_HighlightedColor = new pc.Color(i2891[4], i2891[5], i2891[6], i2891[7])
  i2890.m_PressedColor = new pc.Color(i2891[8], i2891[9], i2891[10], i2891[11])
  i2890.m_SelectedColor = new pc.Color(i2891[12], i2891[13], i2891[14], i2891[15])
  i2890.m_DisabledColor = new pc.Color(i2891[16], i2891[17], i2891[18], i2891[19])
  i2890.m_ColorMultiplier = i2891[20]
  i2890.m_FadeDuration = i2891[21]
  return i2890
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'm_HighlightedSprite')
  request.r(i2893[2], i2893[3], 0, i2892, 'm_PressedSprite')
  request.r(i2893[4], i2893[5], 0, i2892, 'm_SelectedSprite')
  request.r(i2893[6], i2893[7], 0, i2892, 'm_DisabledSprite')
  return i2892
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2895 = data
  i2894.m_NormalTrigger = i2895[0]
  i2894.m_HighlightedTrigger = i2895[1]
  i2894.m_PressedTrigger = i2895[2]
  i2894.m_SelectedTrigger = i2895[3]
  i2894.m_DisabledTrigger = i2895[4]
  return i2894
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2896 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2897 = data
  i2896.m_ShowMaskGraphic = !!i2897[0]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2899 = data
  request.r(i2899[0], i2899[1], 0, i2898, 'clip')
  request.r(i2899[2], i2899[3], 0, i2898, 'outputAudioMixerGroup')
  i2898.playOnAwake = !!i2899[4]
  i2898.loop = !!i2899[5]
  i2898.time = i2899[6]
  i2898.volume = i2899[7]
  i2898.pitch = i2899[8]
  i2898.enabled = !!i2899[9]
  return i2898
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i2900 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i2901 = data
  i2900.m_Padding = new pc.Vec4( i2901[0], i2901[1], i2901[2], i2901[3] )
  i2900.m_Softness = new pc.Vec2( i2901[4], i2901[5] )
  return i2900
}

Deserializers["GameController"] = function (request, data, root) {
  var i2902 = root || request.c( 'GameController' )
  var i2903 = data
  request.r(i2903[0], i2903[1], 0, i2902, '_tutorialHand')
  request.r(i2903[2], i2903[3], 0, i2902, '_tutorialInPlace')
  request.r(i2903[4], i2903[5], 0, i2902, '_tutorialFrom')
  request.r(i2903[6], i2903[7], 0, i2902, '_tutorialTo')
  i2902._tutorialScaleDuration = i2903[8]
  i2902._tutorialMoveDuration = i2903[9]
  i2902._tutorialStartDelay = i2903[10]
  return i2902
}

Deserializers["Item"] = function (request, data, root) {
  var i2904 = root || request.c( 'Item' )
  var i2905 = data
  var i2907 = i2905[0]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.add(request.d('Item+ItemData', i2907[i + 0]));
  }
  i2904._data = i2906
  i2904._dragSortingOrder = i2905[1]
  return i2904
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i2910 = root || request.c( 'Item+ItemData' )
  var i2911 = data
  i2910.id = i2911[0]
  i2910.stateChange = request.d('Item+GirlStateChange', i2911[1], i2910.stateChange)
  i2910.animationStateTiming = i2911[2]
  i2910.result = i2911[3]
  return i2910
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i2912 = root || request.c( 'Item+GirlStateChange' )
  var i2913 = data
  i2912.changeBodyShape = !!i2913[0]
  i2912.bodyShape = i2913[1]
  i2912.changeOutfit = !!i2913[2]
  i2912.outfit = i2913[3]
  i2912.changeRestraint = !!i2913[4]
  i2912.restraint = i2913[5]
  return i2912
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2914 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2915 = data
  request.r(i2915[0], i2915[1], 0, i2914, 'skeletonDataAsset')
  request.r(i2915[2], i2915[3], 0, i2914, 'additiveMaterial')
  request.r(i2915[4], i2915[5], 0, i2914, 'multiplyMaterial')
  request.r(i2915[6], i2915[7], 0, i2914, 'screenMaterial')
  i2914.initialSkinName = i2915[8]
  i2914.initialFlipX = !!i2915[9]
  i2914.initialFlipY = !!i2915[10]
  i2914.startingAnimation = i2915[11]
  i2914.startingLoop = !!i2915[12]
  i2914.timeScale = i2915[13]
  i2914.freeze = !!i2915[14]
  i2914.layoutScaleMode = i2915[15]
  i2914.updateWhenInvisible = i2915[16]
  i2914.allowMultipleCanvasRenderers = !!i2915[17]
  var i2917 = i2915[18]
  var i2916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 1, i2916, '')
  }
  i2914.canvasRenderers = i2916
  i2914.enableSeparatorSlots = !!i2915[19]
  i2914.updateSeparatorPartLocation = !!i2915[20]
  i2914.updateSeparatorPartScale = !!i2915[21]
  i2914.disableMeshAssignmentOnOverride = !!i2915[22]
  i2914.referenceSize = new pc.Vec2( i2915[23], i2915[24] )
  i2914.referenceScale = i2915[25]
  i2914.rectTransformSize = new pc.Vec2( i2915[26], i2915[27] )
  i2914.editReferenceRect = !!i2915[28]
  var i2919 = i2915[29]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( i2919[i + 0] );
  }
  i2914.separatorSlotNames = i2918
  var i2921 = i2915[30]
  var i2920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2921.length; i += 2) {
  request.r(i2921[i + 0], i2921[i + 1], 1, i2920, '')
  }
  i2914.separatorParts = i2920
  i2914.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2915[31], i2914.meshGenerator)
  i2914.updateTiming = i2915[32]
  i2914.unscaledTime = !!i2915[33]
  request.r(i2915[34], i2915[35], 0, i2914, 'm_Material')
  i2914.m_Maskable = !!i2915[36]
  i2914.m_Color = new pc.Color(i2915[37], i2915[38], i2915[39], i2915[40])
  i2914.m_RaycastTarget = !!i2915[41]
  i2914.m_RaycastPadding = new pc.Vec4( i2915[42], i2915[43], i2915[44], i2915[45] )
  return i2914
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2928 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2929 = data
  i2928.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2929[0], i2928.settings)
  return i2928
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2930 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2931 = data
  i2930.useClipping = !!i2931[0]
  i2930.zSpacing = i2931[1]
  i2930.pmaVertexColors = !!i2931[2]
  i2930.tintBlack = !!i2931[3]
  i2930.canvasGroupTintBlack = !!i2931[4]
  i2930.calculateTangents = !!i2931[5]
  i2930.addNormals = !!i2931[6]
  i2930.immutableTriangles = !!i2931[7]
  return i2930
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i2932 = root || request.c( 'Playable.Door' )
  var i2933 = data
  request.r(i2933[0], i2933[1], 0, i2932, '_image')
  request.r(i2933[2], i2933[3], 0, i2932, '_open')
  request.r(i2933[4], i2933[5], 0, i2932, '_close')
  return i2932
}

Deserializers["Girl"] = function (request, data, root) {
  var i2934 = root || request.c( 'Girl' )
  var i2935 = data
  i2934._enableDebugLogs = !!i2935[0]
  i2934._status = request.d('GirlStatus', i2935[1], i2934._status)
  var i2937 = i2935[2]
  var i2936 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.add(request.d('Girl+BodyShapeSkins', i2937[i + 0]));
  }
  i2934._bodyShapeSkins = i2936
  var i2939 = i2935[3]
  var i2938 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.add(request.d('Girl+OutfitSkins', i2939[i + 0]));
  }
  i2934._outfitSkins = i2938
  var i2941 = i2935[4]
  var i2940 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.add(request.d('Girl+RestraintSkins', i2941[i + 0]));
  }
  i2934._restraintSkins = i2940
  request.r(i2935[5], i2935[6], 0, i2934, '_skeletonGraphic')
  var i2943 = i2935[7]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( i2943[i + 0] );
  }
  i2934._defaultSkins = i2942
  i2934._defaultAnimation = request.d('Target+GirlAnimation', i2935[8], i2934._defaultAnimation)
  var i2945 = i2935[9]
  var i2944 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.add(request.d('Target+GirlAnimation', i2945[i + 0]));
  }
  i2934._removeGlassesAnimations = i2944
  i2934._endGameDelay = i2935[10]
  i2934._boy1 = request.d('Girl+BoyAnimationData', i2935[11], i2934._boy1)
  i2934._boy2 = request.d('Girl+BoyAnimationData', i2935[12], i2934._boy2)
  return i2934
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i2946 = root || request.c( 'GirlStatus' )
  var i2947 = data
  i2946.bodyShape = i2947[0]
  i2946.outfit = i2947[1]
  i2946.restraint = i2947[2]
  return i2946
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i2950 = root || request.c( 'Girl+BodyShapeSkins' )
  var i2951 = data
  i2950.bodyShape = i2951[0]
  var i2953 = i2951[1]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( i2953[i + 0] );
  }
  i2950.skins = i2952
  return i2950
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i2956 = root || request.c( 'Girl+OutfitSkins' )
  var i2957 = data
  i2956.outfit = i2957[0]
  var i2959 = i2957[1]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( i2959[i + 0] );
  }
  i2956.skins = i2958
  return i2956
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i2962 = root || request.c( 'Girl+RestraintSkins' )
  var i2963 = data
  i2962.restraint = i2963[0]
  var i2965 = i2963[1]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( i2965[i + 0] );
  }
  i2962.skins = i2964
  return i2962
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i2966 = root || request.c( 'Target+GirlAnimation' )
  var i2967 = data
  i2966.animationName = i2967[0]
  i2966.loop = !!i2967[1]
  return i2966
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i2970 = root || request.c( 'Girl+BoyAnimationData' )
  var i2971 = data
  request.r(i2971[0], i2971[1], 0, i2970, 'skeletonGraphic')
  i2970.idleAnimation = i2971[2]
  i2970.winAnimation = i2971[3]
  i2970.loseAnimation = i2971[4]
  return i2970
}

Deserializers["Target"] = function (request, data, root) {
  var i2972 = root || request.c( 'Target' )
  var i2973 = data
  i2972._part = i2973[0]
  request.r(i2973[1], i2973[2], 0, i2972, '_girl')
  request.r(i2973[3], i2973[4], 0, i2972, '_skeletonGraphic')
  var i2975 = i2973[5]
  var i2974 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.add(request.d('Target+ItemReaction', i2975[i + 0]));
  }
  i2972._itemReactions = i2974
  return i2972
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i2978 = root || request.c( 'Target+ItemReaction' )
  var i2979 = data
  i2978.itemId = i2979[0]
  var i2981 = i2979[1]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.add(request.d('Target+AnimationRule', i2981[i + 0]));
  }
  i2978.animationRules = i2980
  var i2983 = i2979[2]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( i2983[i + 0] );
  }
  i2978.skinAdded = i2982
  var i2985 = i2979[3]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( i2985[i + 0] );
  }
  i2978.skinRemoved = i2984
  request.r(i2979[4], i2979[5], 0, i2978, 'audioClip')
  return i2978
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i2988 = root || request.c( 'Target+AnimationRule' )
  var i2989 = data
  i2988.checkBodyShape = !!i2989[0]
  i2988.bodyShape = i2989[1]
  i2988.checkOutfit = !!i2989[2]
  i2988.outfit = i2989[3]
  i2988.checkRestraint = !!i2989[4]
  i2988.restraint = i2989[5]
  var i2991 = i2989[6]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('Target+GirlAnimation', i2991[i + 0]));
  }
  i2988.animations = i2990
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2993 = data
  i2992.m_Alpha = i2993[0]
  i2992.m_Interactable = !!i2993[1]
  i2992.m_BlocksRaycasts = !!i2993[2]
  i2992.m_IgnoreParentGroups = !!i2993[3]
  i2992.enabled = !!i2993[4]
  return i2992
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2995 = data
  i2994.m_Spacing = i2995[0]
  i2994.m_ChildForceExpandWidth = !!i2995[1]
  i2994.m_ChildForceExpandHeight = !!i2995[2]
  i2994.m_ChildControlWidth = !!i2995[3]
  i2994.m_ChildControlHeight = !!i2995[4]
  i2994.m_ChildScaleWidth = !!i2995[5]
  i2994.m_ChildScaleHeight = !!i2995[6]
  i2994.m_ReverseArrangement = !!i2995[7]
  i2994.m_Padding = UnityEngine.RectOffset.FromPaddings(i2995[8], i2995[9], i2995[10], i2995[11])
  i2994.m_ChildAlignment = i2995[12]
  return i2994
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i2996 = root || request.c( 'Playable.AudioManager' )
  var i2997 = data
  var i2999 = i2997[0]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.add(request.d('Playable.SoundData', i2999[i + 0]));
  }
  i2996._sounds = i2998
  request.r(i2997[1], i2997[2], 0, i2996, '_audioMusic')
  request.r(i2997[3], i2997[4], 0, i2996, '_audioSound')
  return i2996
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i3002 = root || request.c( 'Playable.SoundData' )
  var i3003 = data
  i3002.Type = i3003[0]
  request.r(i3003[1], i3003[2], 0, i3002, 'Clip')
  return i3002
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3005 = data
  request.r(i3005[0], i3005[1], 0, i3004, 'm_FirstSelected')
  i3004.m_sendNavigationEvents = !!i3005[2]
  i3004.m_DragThreshold = i3005[3]
  return i3004
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3007 = data
  i3006.m_HorizontalAxis = i3007[0]
  i3006.m_VerticalAxis = i3007[1]
  i3006.m_SubmitButton = i3007[2]
  i3006.m_CancelButton = i3007[3]
  i3006.m_InputActionsPerSecond = i3007[4]
  i3006.m_RepeatDelay = i3007[5]
  i3006.m_ForceModuleActive = !!i3007[6]
  i3006.m_SendPointerHoverToParent = !!i3007[7]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3009 = data
  i3008.ambientIntensity = i3009[0]
  i3008.reflectionIntensity = i3009[1]
  i3008.ambientMode = i3009[2]
  i3008.ambientLight = new pc.Color(i3009[3], i3009[4], i3009[5], i3009[6])
  i3008.ambientSkyColor = new pc.Color(i3009[7], i3009[8], i3009[9], i3009[10])
  i3008.ambientGroundColor = new pc.Color(i3009[11], i3009[12], i3009[13], i3009[14])
  i3008.ambientEquatorColor = new pc.Color(i3009[15], i3009[16], i3009[17], i3009[18])
  i3008.fogColor = new pc.Color(i3009[19], i3009[20], i3009[21], i3009[22])
  i3008.fogEndDistance = i3009[23]
  i3008.fogStartDistance = i3009[24]
  i3008.fogDensity = i3009[25]
  i3008.fog = !!i3009[26]
  request.r(i3009[27], i3009[28], 0, i3008, 'skybox')
  i3008.fogMode = i3009[29]
  var i3011 = i3009[30]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3011[i + 0]) );
  }
  i3008.lightmaps = i3010
  i3008.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3009[31], i3008.lightProbes)
  i3008.lightmapsMode = i3009[32]
  i3008.mixedBakeMode = i3009[33]
  i3008.environmentLightingMode = i3009[34]
  i3008.ambientProbe = new pc.SphericalHarmonicsL2(i3009[35])
  request.r(i3009[36], i3009[37], 0, i3008, 'customReflection')
  request.r(i3009[38], i3009[39], 0, i3008, 'defaultReflection')
  i3008.defaultReflectionMode = i3009[40]
  i3008.defaultReflectionResolution = i3009[41]
  i3008.sunLightObjectId = i3009[42]
  i3008.pixelLightCount = i3009[43]
  i3008.defaultReflectionHDR = !!i3009[44]
  i3008.hasLightDataAsset = !!i3009[45]
  i3008.hasManualGenerate = !!i3009[46]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3015 = data
  request.r(i3015[0], i3015[1], 0, i3014, 'lightmapColor')
  request.r(i3015[2], i3015[3], 0, i3014, 'lightmapDirection')
  request.r(i3015[4], i3015[5], 0, i3014, 'shadowMask')
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3016 = root || new UnityEngine.LightProbes()
  var i3017 = data
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3025 = data
  var i3027 = i3025[0]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3027[i + 0]));
  }
  i3024.ShaderCompilationErrors = i3026
  i3024.name = i3025[1]
  i3024.guid = i3025[2]
  var i3029 = i3025[3]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( i3029[i + 0] );
  }
  i3024.shaderDefinedKeywords = i3028
  var i3031 = i3025[4]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3031[i + 0]) );
  }
  i3024.passes = i3030
  var i3033 = i3025[5]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3033[i + 0]) );
  }
  i3024.usePasses = i3032
  var i3035 = i3025[6]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3035[i + 0]) );
  }
  i3024.defaultParameterValues = i3034
  request.r(i3025[7], i3025[8], 0, i3024, 'unityFallbackShader')
  i3024.readDepth = !!i3025[9]
  i3024.hasDepthOnlyPass = !!i3025[10]
  i3024.isCreatedByShaderGraph = !!i3025[11]
  i3024.disableBatching = !!i3025[12]
  i3024.compiled = !!i3025[13]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3039 = data
  i3038.shaderName = i3039[0]
  i3038.errorMessage = i3039[1]
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3042 = root || new pc.UnityShaderPass()
  var i3043 = data
  i3042.id = i3043[0]
  i3042.subShaderIndex = i3043[1]
  i3042.name = i3043[2]
  i3042.passType = i3043[3]
  i3042.grabPassTextureName = i3043[4]
  i3042.usePass = !!i3043[5]
  i3042.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[6], i3042.zTest)
  i3042.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[7], i3042.zWrite)
  i3042.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[8], i3042.culling)
  i3042.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3043[9], i3042.blending)
  i3042.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3043[10], i3042.alphaBlending)
  i3042.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[11], i3042.colorWriteMask)
  i3042.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[12], i3042.offsetUnits)
  i3042.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[13], i3042.offsetFactor)
  i3042.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[14], i3042.stencilRef)
  i3042.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[15], i3042.stencilReadMask)
  i3042.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3043[16], i3042.stencilWriteMask)
  i3042.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3043[17], i3042.stencilOp)
  i3042.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3043[18], i3042.stencilOpFront)
  i3042.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3043[19], i3042.stencilOpBack)
  var i3045 = i3043[20]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3045[i + 0]) );
  }
  i3042.tags = i3044
  var i3047 = i3043[21]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( i3047[i + 0] );
  }
  i3042.passDefinedKeywords = i3046
  var i3049 = i3043[22]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3049[i + 0]) );
  }
  i3042.passDefinedKeywordGroups = i3048
  var i3051 = i3043[23]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3051[i + 0]) );
  }
  i3042.variants = i3050
  var i3053 = i3043[24]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3053[i + 0]) );
  }
  i3042.excludedVariants = i3052
  i3042.hasDepthReader = !!i3043[25]
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3055 = data
  i3054.val = i3055[0]
  i3054.name = i3055[1]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3057 = data
  i3056.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3057[0], i3056.src)
  i3056.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3057[1], i3056.dst)
  i3056.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3057[2], i3056.op)
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3059 = data
  i3058.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3059[0], i3058.pass)
  i3058.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3059[1], i3058.fail)
  i3058.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3059[2], i3058.zFail)
  i3058.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3059[3], i3058.comp)
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3063 = data
  i3062.name = i3063[0]
  i3062.value = i3063[1]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3067 = data
  var i3069 = i3067[0]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( i3069[i + 0] );
  }
  i3066.keywords = i3068
  i3066.hasDiscard = !!i3067[1]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3073 = data
  i3072.passId = i3073[0]
  i3072.subShaderIndex = i3073[1]
  var i3075 = i3073[2]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( i3075[i + 0] );
  }
  i3072.keywords = i3074
  i3072.vertexProgram = i3073[3]
  i3072.fragmentProgram = i3073[4]
  i3072.exportedForWebGl2 = !!i3073[5]
  i3072.readDepth = !!i3073[6]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'shader')
  i3078.pass = i3079[2]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3083 = data
  i3082.name = i3083[0]
  i3082.type = i3083[1]
  i3082.value = new pc.Vec4( i3083[2], i3083[3], i3083[4], i3083[5] )
  i3082.textureValue = i3083[6]
  i3082.shaderPropertyFlag = i3083[7]
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3085 = data
  i3084.name = i3085[0]
  request.r(i3085[1], i3085[2], 0, i3084, 'texture')
  i3084.aabb = i3085[3]
  i3084.vertices = i3085[4]
  i3084.triangles = i3085[5]
  i3084.textureRect = UnityEngine.Rect.MinMaxRect(i3085[6], i3085[7], i3085[8], i3085[9])
  i3084.packedRect = UnityEngine.Rect.MinMaxRect(i3085[10], i3085[11], i3085[12], i3085[13])
  i3084.border = new pc.Vec4( i3085[14], i3085[15], i3085[16], i3085[17] )
  i3084.transparency = i3085[18]
  i3084.bounds = i3085[19]
  i3084.pixelsPerUnit = i3085[20]
  i3084.textureWidth = i3085[21]
  i3084.textureHeight = i3085[22]
  i3084.nativeSize = new pc.Vec2( i3085[23], i3085[24] )
  i3084.pivot = new pc.Vec2( i3085[25], i3085[26] )
  i3084.textureRectOffset = new pc.Vec2( i3085[27], i3085[28] )
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3087 = data
  i3086.name = i3087[0]
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3089 = data
  i3088.name = i3089[0]
  i3088.ascent = i3089[1]
  i3088.originalLineHeight = i3089[2]
  i3088.fontSize = i3089[3]
  var i3091 = i3089[4]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3091[i + 0]) );
  }
  i3088.characterInfo = i3090
  request.r(i3089[5], i3089[6], 0, i3088, 'texture')
  i3088.originalFontSize = i3089[7]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3095 = data
  i3094.index = i3095[0]
  i3094.advance = i3095[1]
  i3094.bearing = i3095[2]
  i3094.glyphWidth = i3095[3]
  i3094.glyphHeight = i3095[4]
  i3094.minX = i3095[5]
  i3094.maxX = i3095[6]
  i3094.minY = i3095[7]
  i3094.maxY = i3095[8]
  i3094.uvBottomLeftX = i3095[9]
  i3094.uvBottomLeftY = i3095[10]
  i3094.uvBottomRightX = i3095[11]
  i3094.uvBottomRightY = i3095[12]
  i3094.uvTopLeftX = i3095[13]
  i3094.uvTopLeftY = i3095[14]
  i3094.uvTopRightX = i3095[15]
  i3094.uvTopRightY = i3095[16]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3097 = data
  i3096.name = i3097[0]
  i3096.bytes64 = i3097[1]
  i3096.data = i3097[2]
  return i3096
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3098 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3099 = data
  i3098.normalStyle = i3099[0]
  i3098.normalSpacingOffset = i3099[1]
  i3098.boldStyle = i3099[2]
  i3098.boldSpacing = i3099[3]
  i3098.italicStyle = i3099[4]
  i3098.tabSize = i3099[5]
  request.r(i3099[6], i3099[7], 0, i3098, 'atlas')
  i3098.m_SourceFontFileGUID = i3099[8]
  i3098.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3099[9], i3098.m_CreationSettings)
  request.r(i3099[10], i3099[11], 0, i3098, 'm_SourceFontFile')
  i3098.m_SourceFontFilePath = i3099[12]
  i3098.m_AtlasPopulationMode = i3099[13]
  i3098.InternalDynamicOS = !!i3099[14]
  var i3101 = i3099[15]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.add(request.d('UnityEngine.TextCore.Glyph', i3101[i + 0]));
  }
  i3098.m_GlyphTable = i3100
  var i3103 = i3099[16]
  var i3102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.add(request.d('TMPro.TMP_Character', i3103[i + 0]));
  }
  i3098.m_CharacterTable = i3102
  var i3105 = i3099[17]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 2) {
  request.r(i3105[i + 0], i3105[i + 1], 2, i3104, '')
  }
  i3098.m_AtlasTextures = i3104
  i3098.m_AtlasTextureIndex = i3099[18]
  i3098.m_IsMultiAtlasTexturesEnabled = !!i3099[19]
  i3098.m_GetFontFeatures = !!i3099[20]
  i3098.m_ClearDynamicDataOnBuild = !!i3099[21]
  i3098.m_AtlasWidth = i3099[22]
  i3098.m_AtlasHeight = i3099[23]
  i3098.m_AtlasPadding = i3099[24]
  i3098.m_AtlasRenderMode = i3099[25]
  var i3107 = i3099[26]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.add(request.d('UnityEngine.TextCore.GlyphRect', i3107[i + 0]));
  }
  i3098.m_UsedGlyphRects = i3106
  var i3109 = i3099[27]
  var i3108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.add(request.d('UnityEngine.TextCore.GlyphRect', i3109[i + 0]));
  }
  i3098.m_FreeGlyphRects = i3108
  i3098.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3099[28], i3098.m_FontFeatureTable)
  i3098.m_ShouldReimportFontFeatures = !!i3099[29]
  var i3111 = i3099[30]
  var i3110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3111.length; i += 2) {
  request.r(i3111[i + 0], i3111[i + 1], 1, i3110, '')
  }
  i3098.m_FallbackFontAssetTable = i3110
  var i3113 = i3099[31]
  var i3112 = []
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.push( request.d('TMPro.TMP_FontWeightPair', i3113[i + 0]) );
  }
  i3098.m_FontWeightTable = i3112
  var i3115 = i3099[32]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( request.d('TMPro.TMP_FontWeightPair', i3115[i + 0]) );
  }
  i3098.fontWeights = i3114
  i3098.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3099[33], i3098.m_fontInfo)
  var i3117 = i3099[34]
  var i3116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.add(request.d('TMPro.TMP_Glyph', i3117[i + 0]));
  }
  i3098.m_glyphInfoList = i3116
  i3098.m_KerningTable = request.d('TMPro.KerningTable', i3099[35], i3098.m_KerningTable)
  var i3119 = i3099[36]
  var i3118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3119.length; i += 2) {
  request.r(i3119[i + 0], i3119[i + 1], 1, i3118, '')
  }
  i3098.fallbackFontAssets = i3118
  i3098.m_Version = i3099[37]
  i3098.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3099[38], i3098.m_FaceInfo)
  request.r(i3099[39], i3099[40], 0, i3098, 'm_Material')
  return i3098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3120 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3121 = data
  i3120.sourceFontFileName = i3121[0]
  i3120.sourceFontFileGUID = i3121[1]
  i3120.faceIndex = i3121[2]
  i3120.pointSizeSamplingMode = i3121[3]
  i3120.pointSize = i3121[4]
  i3120.padding = i3121[5]
  i3120.paddingMode = i3121[6]
  i3120.packingMode = i3121[7]
  i3120.atlasWidth = i3121[8]
  i3120.atlasHeight = i3121[9]
  i3120.characterSetSelectionMode = i3121[10]
  i3120.characterSequence = i3121[11]
  i3120.referencedFontAssetGUID = i3121[12]
  i3120.referencedTextAssetGUID = i3121[13]
  i3120.fontStyle = i3121[14]
  i3120.fontStyleModifier = i3121[15]
  i3120.renderMode = i3121[16]
  i3120.includeFontFeatures = !!i3121[17]
  return i3120
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3125 = data
  i3124.m_Index = i3125[0]
  i3124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3125[1], i3124.m_Metrics)
  i3124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3125[2], i3124.m_GlyphRect)
  i3124.m_Scale = i3125[3]
  i3124.m_AtlasIndex = i3125[4]
  i3124.m_ClassDefinitionType = i3125[5]
  return i3124
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3127 = data
  i3126.m_Width = i3127[0]
  i3126.m_Height = i3127[1]
  i3126.m_HorizontalBearingX = i3127[2]
  i3126.m_HorizontalBearingY = i3127[3]
  i3126.m_HorizontalAdvance = i3127[4]
  return i3126
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3129 = data
  i3128.m_X = i3129[0]
  i3128.m_Y = i3129[1]
  i3128.m_Width = i3129[2]
  i3128.m_Height = i3129[3]
  return i3128
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3132 = root || request.c( 'TMPro.TMP_Character' )
  var i3133 = data
  i3132.m_ElementType = i3133[0]
  i3132.m_Unicode = i3133[1]
  i3132.m_GlyphIndex = i3133[2]
  i3132.m_Scale = i3133[3]
  return i3132
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3138 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3139 = data
  var i3141 = i3139[0]
  var i3140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.add(request.d('TMPro.MultipleSubstitutionRecord', i3141[i + 0]));
  }
  i3138.m_MultipleSubstitutionRecords = i3140
  var i3143 = i3139[1]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(request.d('TMPro.LigatureSubstitutionRecord', i3143[i + 0]));
  }
  i3138.m_LigatureSubstitutionRecords = i3142
  var i3145 = i3139[2]
  var i3144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3145[i + 0]));
  }
  i3138.m_GlyphPairAdjustmentRecords = i3144
  var i3147 = i3139[3]
  var i3146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3147[i + 0]));
  }
  i3138.m_MarkToBaseAdjustmentRecords = i3146
  var i3149 = i3139[4]
  var i3148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3149[i + 0]));
  }
  i3138.m_MarkToMarkAdjustmentRecords = i3148
  return i3138
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3152 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3153 = data
  i3152.m_TargetGlyphID = i3153[0]
  i3152.m_SubstituteGlyphIDs = i3153[1]
  return i3152
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3156 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3157 = data
  i3156.m_ComponentGlyphIDs = i3157[0]
  i3156.m_LigatureGlyphID = i3157[1]
  return i3156
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3161 = data
  i3160.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3161[0], i3160.m_FirstAdjustmentRecord)
  i3160.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3161[1], i3160.m_SecondAdjustmentRecord)
  i3160.m_FeatureLookupFlags = i3161[2]
  return i3160
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3164 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3165 = data
  i3164.m_BaseGlyphID = i3165[0]
  i3164.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3165[1], i3164.m_BaseGlyphAnchorPoint)
  i3164.m_MarkGlyphID = i3165[2]
  i3164.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3165[3], i3164.m_MarkPositionAdjustment)
  return i3164
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3168 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3169 = data
  i3168.m_BaseMarkGlyphID = i3169[0]
  i3168.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3169[1], i3168.m_BaseMarkGlyphAnchorPoint)
  i3168.m_CombiningMarkGlyphID = i3169[2]
  i3168.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3169[3], i3168.m_CombiningMarkPositionAdjustment)
  return i3168
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3174 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3175 = data
  request.r(i3175[0], i3175[1], 0, i3174, 'regularTypeface')
  request.r(i3175[2], i3175[3], 0, i3174, 'italicTypeface')
  return i3174
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3176 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3177 = data
  i3176.Name = i3177[0]
  i3176.PointSize = i3177[1]
  i3176.Scale = i3177[2]
  i3176.CharacterCount = i3177[3]
  i3176.LineHeight = i3177[4]
  i3176.Baseline = i3177[5]
  i3176.Ascender = i3177[6]
  i3176.CapHeight = i3177[7]
  i3176.Descender = i3177[8]
  i3176.CenterLine = i3177[9]
  i3176.SuperscriptOffset = i3177[10]
  i3176.SubscriptOffset = i3177[11]
  i3176.SubSize = i3177[12]
  i3176.Underline = i3177[13]
  i3176.UnderlineThickness = i3177[14]
  i3176.strikethrough = i3177[15]
  i3176.strikethroughThickness = i3177[16]
  i3176.TabWidth = i3177[17]
  i3176.Padding = i3177[18]
  i3176.AtlasWidth = i3177[19]
  i3176.AtlasHeight = i3177[20]
  return i3176
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3180 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3181 = data
  i3180.id = i3181[0]
  i3180.x = i3181[1]
  i3180.y = i3181[2]
  i3180.width = i3181[3]
  i3180.height = i3181[4]
  i3180.xOffset = i3181[5]
  i3180.yOffset = i3181[6]
  i3180.xAdvance = i3181[7]
  i3180.scale = i3181[8]
  return i3180
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3182 = root || request.c( 'TMPro.KerningTable' )
  var i3183 = data
  var i3185 = i3183[0]
  var i3184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.add(request.d('TMPro.KerningPair', i3185[i + 0]));
  }
  i3182.kerningPairs = i3184
  return i3182
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3188 = root || request.c( 'TMPro.KerningPair' )
  var i3189 = data
  i3188.xOffset = i3189[0]
  i3188.m_FirstGlyph = i3189[1]
  i3188.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3189[2], i3188.m_FirstGlyphAdjustments)
  i3188.m_SecondGlyph = i3189[3]
  i3188.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3189[4], i3188.m_SecondGlyphAdjustments)
  i3188.m_IgnoreSpacingAdjustments = !!i3189[5]
  return i3188
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3190 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3191 = data
  i3190.m_FaceIndex = i3191[0]
  i3190.m_FamilyName = i3191[1]
  i3190.m_StyleName = i3191[2]
  i3190.m_PointSize = i3191[3]
  i3190.m_Scale = i3191[4]
  i3190.m_UnitsPerEM = i3191[5]
  i3190.m_LineHeight = i3191[6]
  i3190.m_AscentLine = i3191[7]
  i3190.m_CapLine = i3191[8]
  i3190.m_MeanLine = i3191[9]
  i3190.m_Baseline = i3191[10]
  i3190.m_DescentLine = i3191[11]
  i3190.m_SuperscriptOffset = i3191[12]
  i3190.m_SuperscriptSize = i3191[13]
  i3190.m_SubscriptOffset = i3191[14]
  i3190.m_SubscriptSize = i3191[15]
  i3190.m_UnderlineOffset = i3191[16]
  i3190.m_UnderlineThickness = i3191[17]
  i3190.m_StrikethroughOffset = i3191[18]
  i3190.m_StrikethroughThickness = i3191[19]
  i3190.m_TabWidth = i3191[20]
  return i3190
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3192 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3193 = data
  var i3195 = i3193[0]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3192.atlasAssets = i3194
  i3192.scale = i3193[1]
  request.r(i3193[2], i3193[3], 0, i3192, 'skeletonJSON')
  i3192.isUpgradingBlendModeMaterials = !!i3193[4]
  i3192.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3193[5], i3192.blendModeMaterials)
  var i3197 = i3193[6]
  var i3196 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3197.length; i += 2) {
  request.r(i3197[i + 0], i3197[i + 1], 1, i3196, '')
  }
  i3192.skeletonDataModifiers = i3196
  var i3199 = i3193[7]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( i3199[i + 0] );
  }
  i3192.fromAnimation = i3198
  var i3201 = i3193[8]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( i3201[i + 0] );
  }
  i3192.toAnimation = i3200
  i3192.duration = i3193[9]
  i3192.defaultMix = i3193[10]
  request.r(i3193[11], i3193[12], 0, i3192, 'controller')
  return i3192
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3204 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3205 = data
  i3204.applyAdditiveMaterial = !!i3205[0]
  var i3207 = i3205[1]
  var i3206 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3207[i + 0]));
  }
  i3204.additiveMaterials = i3206
  var i3209 = i3205[2]
  var i3208 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3209[i + 0]));
  }
  i3204.multiplyMaterials = i3208
  var i3211 = i3205[3]
  var i3210 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3211.length; i += 1) {
    i3210.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3211[i + 0]));
  }
  i3204.screenMaterials = i3210
  i3204.requiresBlendModeMaterials = !!i3205[4]
  return i3204
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3214 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3215 = data
  i3214.pageName = i3215[0]
  request.r(i3215[1], i3215[2], 0, i3214, 'material')
  return i3214
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3218 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3219 = data
  request.r(i3219[0], i3219[1], 0, i3218, 'atlasFile')
  var i3221 = i3219[2]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 2) {
  request.r(i3221[i + 0], i3221[i + 1], 2, i3220, '')
  }
  i3218.materials = i3220
  i3218.textureLoadingMode = i3219[3]
  request.r(i3219[4], i3219[5], 0, i3218, 'onDemandTextureLoader')
  return i3218
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3223 = data
  i3222.useSafeMode = !!i3223[0]
  i3222.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3223[1], i3222.safeModeOptions)
  i3222.timeScale = i3223[2]
  i3222.unscaledTimeScale = i3223[3]
  i3222.useSmoothDeltaTime = !!i3223[4]
  i3222.maxSmoothUnscaledTime = i3223[5]
  i3222.rewindCallbackMode = i3223[6]
  i3222.showUnityEditorReport = !!i3223[7]
  i3222.logBehaviour = i3223[8]
  i3222.drawGizmos = !!i3223[9]
  i3222.defaultRecyclable = !!i3223[10]
  i3222.defaultAutoPlay = i3223[11]
  i3222.defaultUpdateType = i3223[12]
  i3222.defaultTimeScaleIndependent = !!i3223[13]
  i3222.defaultEaseType = i3223[14]
  i3222.defaultEaseOvershootOrAmplitude = i3223[15]
  i3222.defaultEasePeriod = i3223[16]
  i3222.defaultAutoKill = !!i3223[17]
  i3222.defaultLoopType = i3223[18]
  i3222.debugMode = !!i3223[19]
  i3222.debugStoreTargetId = !!i3223[20]
  i3222.showPreviewPanel = !!i3223[21]
  i3222.storeSettingsLocation = i3223[22]
  i3222.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3223[23], i3222.modules)
  i3222.createASMDEF = !!i3223[24]
  i3222.showPlayingTweens = !!i3223[25]
  i3222.showPausedTweens = !!i3223[26]
  return i3222
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3224 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3225 = data
  i3224.logBehaviour = i3225[0]
  i3224.nestedTweenFailureBehaviour = i3225[1]
  return i3224
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3226 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3227 = data
  i3226.showPanel = !!i3227[0]
  i3226.audioEnabled = !!i3227[1]
  i3226.physicsEnabled = !!i3227[2]
  i3226.physics2DEnabled = !!i3227[3]
  i3226.spriteEnabled = !!i3227[4]
  i3226.uiEnabled = !!i3227[5]
  i3226.uiToolkitEnabled = !!i3227[6]
  i3226.textMeshProEnabled = !!i3227[7]
  i3226.tk2DEnabled = !!i3227[8]
  i3226.deAudioEnabled = !!i3227[9]
  i3226.deUnityExtendedEnabled = !!i3227[10]
  i3226.epoOutlineEnabled = !!i3227[11]
  return i3226
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3228 = root || request.c( 'TMPro.TMP_Settings' )
  var i3229 = data
  i3228.assetVersion = i3229[0]
  i3228.m_TextWrappingMode = i3229[1]
  i3228.m_enableKerning = !!i3229[2]
  var i3231 = i3229[3]
  var i3230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.add(i3231[i + 0]);
  }
  i3228.m_ActiveFontFeatures = i3230
  i3228.m_enableExtraPadding = !!i3229[4]
  i3228.m_enableTintAllSprites = !!i3229[5]
  i3228.m_enableParseEscapeCharacters = !!i3229[6]
  i3228.m_EnableRaycastTarget = !!i3229[7]
  i3228.m_GetFontFeaturesAtRuntime = !!i3229[8]
  i3228.m_missingGlyphCharacter = i3229[9]
  i3228.m_ClearDynamicDataOnBuild = !!i3229[10]
  i3228.m_warningsDisabled = !!i3229[11]
  request.r(i3229[12], i3229[13], 0, i3228, 'm_defaultFontAsset')
  i3228.m_defaultFontAssetPath = i3229[14]
  i3228.m_defaultFontSize = i3229[15]
  i3228.m_defaultAutoSizeMinRatio = i3229[16]
  i3228.m_defaultAutoSizeMaxRatio = i3229[17]
  i3228.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3229[18], i3229[19] )
  i3228.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3229[20], i3229[21] )
  i3228.m_autoSizeTextContainer = !!i3229[22]
  i3228.m_IsTextObjectScaleStatic = !!i3229[23]
  var i3233 = i3229[24]
  var i3232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3233.length; i += 2) {
  request.r(i3233[i + 0], i3233[i + 1], 1, i3232, '')
  }
  i3228.m_fallbackFontAssets = i3232
  i3228.m_matchMaterialPreset = !!i3229[25]
  i3228.m_HideSubTextObjects = !!i3229[26]
  request.r(i3229[27], i3229[28], 0, i3228, 'm_defaultSpriteAsset')
  i3228.m_defaultSpriteAssetPath = i3229[29]
  i3228.m_enableEmojiSupport = !!i3229[30]
  i3228.m_MissingCharacterSpriteUnicode = i3229[31]
  var i3235 = i3229[32]
  var i3234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3235.length; i += 2) {
  request.r(i3235[i + 0], i3235[i + 1], 1, i3234, '')
  }
  i3228.m_EmojiFallbackTextAssets = i3234
  i3228.m_defaultColorGradientPresetsPath = i3229[33]
  request.r(i3229[34], i3229[35], 0, i3228, 'm_defaultStyleSheet')
  i3228.m_StyleSheetsResourcePath = i3229[36]
  request.r(i3229[37], i3229[38], 0, i3228, 'm_leadingCharacters')
  request.r(i3229[39], i3229[40], 0, i3228, 'm_followingCharacters')
  i3228.m_UseModernHangulLineBreakingRules = !!i3229[41]
  return i3228
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3239 = data
  i3238.m_GlyphIndex = i3239[0]
  i3238.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3239[1], i3238.m_GlyphValueRecord)
  return i3238
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3241 = data
  i3240.m_XPlacement = i3241[0]
  i3240.m_YPlacement = i3241[1]
  i3240.m_XAdvance = i3241[2]
  i3240.m_YAdvance = i3241[3]
  return i3240
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3243 = data
  request.r(i3243[0], i3243[1], 0, i3242, 'spriteSheet')
  var i3245 = i3243[2]
  var i3244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.add(request.d('TMPro.TMP_Sprite', i3245[i + 0]));
  }
  i3242.spriteInfoList = i3244
  var i3247 = i3243[3]
  var i3246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3247.length; i += 2) {
  request.r(i3247[i + 0], i3247[i + 1], 1, i3246, '')
  }
  i3242.fallbackSpriteAssets = i3246
  var i3249 = i3243[4]
  var i3248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.add(request.d('TMPro.TMP_SpriteCharacter', i3249[i + 0]));
  }
  i3242.m_SpriteCharacterTable = i3248
  var i3251 = i3243[5]
  var i3250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.add(request.d('TMPro.TMP_SpriteGlyph', i3251[i + 0]));
  }
  i3242.m_GlyphTable = i3250
  i3242.m_Version = i3243[6]
  i3242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3243[7], i3242.m_FaceInfo)
  request.r(i3243[8], i3243[9], 0, i3242, 'm_Material')
  return i3242
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3254 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3255 = data
  i3254.name = i3255[0]
  i3254.hashCode = i3255[1]
  i3254.unicode = i3255[2]
  i3254.pivot = new pc.Vec2( i3255[3], i3255[4] )
  request.r(i3255[5], i3255[6], 0, i3254, 'sprite')
  i3254.id = i3255[7]
  i3254.x = i3255[8]
  i3254.y = i3255[9]
  i3254.width = i3255[10]
  i3254.height = i3255[11]
  i3254.xOffset = i3255[12]
  i3254.yOffset = i3255[13]
  i3254.xAdvance = i3255[14]
  i3254.scale = i3255[15]
  return i3254
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3260 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3261 = data
  i3260.m_Name = i3261[0]
  i3260.m_ElementType = i3261[1]
  i3260.m_Unicode = i3261[2]
  i3260.m_GlyphIndex = i3261[3]
  i3260.m_Scale = i3261[4]
  return i3260
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3264 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3265 = data
  request.r(i3265[0], i3265[1], 0, i3264, 'sprite')
  i3264.m_Index = i3265[2]
  i3264.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3265[3], i3264.m_Metrics)
  i3264.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3265[4], i3264.m_GlyphRect)
  i3264.m_Scale = i3265[5]
  i3264.m_AtlasIndex = i3265[6]
  i3264.m_ClassDefinitionType = i3265[7]
  return i3264
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3266 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3267 = data
  var i3269 = i3267[0]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.add(request.d('TMPro.TMP_Style', i3269[i + 0]));
  }
  i3266.m_StyleList = i3268
  return i3266
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3272 = root || request.c( 'TMPro.TMP_Style' )
  var i3273 = data
  i3272.m_Name = i3273[0]
  i3272.m_HashCode = i3273[1]
  i3272.m_OpeningDefinition = i3273[2]
  i3272.m_ClosingDefinition = i3273[3]
  i3272.m_OpeningTagArray = i3273[4]
  i3272.m_ClosingTagArray = i3273[5]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3275 = data
  var i3277 = i3275[0]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 1) {
    i3276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3277[i + 0]) );
  }
  i3274.files = i3276
  i3274.componentToPrefabIds = i3275[1]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3281 = data
  i3280.path = i3281[0]
  request.r(i3281[1], i3281[2], 0, i3280, 'unityObject')
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3283 = data
  var i3285 = i3283[0]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3285[i + 0]) );
  }
  i3282.scriptsExecutionOrder = i3284
  var i3287 = i3283[1]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3287[i + 0]) );
  }
  i3282.sortingLayers = i3286
  var i3289 = i3283[2]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3289[i + 0]) );
  }
  i3282.cullingLayers = i3288
  i3282.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3283[3], i3282.timeSettings)
  i3282.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3283[4], i3282.physicsSettings)
  i3282.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3283[5], i3282.physics2DSettings)
  i3282.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3283[6], i3282.qualitySettings)
  i3282.enableRealtimeShadows = !!i3283[7]
  i3282.enableAutoInstancing = !!i3283[8]
  i3282.enableStaticBatching = !!i3283[9]
  i3282.enableDynamicBatching = !!i3283[10]
  i3282.usePreservativeDynamicBatching = !!i3283[11]
  i3282.lightmapEncodingQuality = i3283[12]
  i3282.desiredColorSpace = i3283[13]
  var i3291 = i3283[14]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( i3291[i + 0] );
  }
  i3282.allTags = i3290
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.value = i3295[1]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3299 = data
  i3298.id = i3299[0]
  i3298.name = i3299[1]
  i3298.value = i3299[2]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3303 = data
  i3302.id = i3303[0]
  i3302.name = i3303[1]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3305 = data
  i3304.fixedDeltaTime = i3305[0]
  i3304.maximumDeltaTime = i3305[1]
  i3304.timeScale = i3305[2]
  i3304.maximumParticleTimestep = i3305[3]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3307 = data
  i3306.gravity = new pc.Vec3( i3307[0], i3307[1], i3307[2] )
  i3306.defaultSolverIterations = i3307[3]
  i3306.bounceThreshold = i3307[4]
  i3306.autoSyncTransforms = !!i3307[5]
  i3306.autoSimulation = !!i3307[6]
  var i3309 = i3307[7]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3309[i + 0]) );
  }
  i3306.collisionMatrix = i3308
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3313 = data
  i3312.enabled = !!i3313[0]
  i3312.layerId = i3313[1]
  i3312.otherLayerId = i3313[2]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'material')
  i3314.gravity = new pc.Vec2( i3315[2], i3315[3] )
  i3314.positionIterations = i3315[4]
  i3314.velocityIterations = i3315[5]
  i3314.velocityThreshold = i3315[6]
  i3314.maxLinearCorrection = i3315[7]
  i3314.maxAngularCorrection = i3315[8]
  i3314.maxTranslationSpeed = i3315[9]
  i3314.maxRotationSpeed = i3315[10]
  i3314.baumgarteScale = i3315[11]
  i3314.baumgarteTOIScale = i3315[12]
  i3314.timeToSleep = i3315[13]
  i3314.linearSleepTolerance = i3315[14]
  i3314.angularSleepTolerance = i3315[15]
  i3314.defaultContactOffset = i3315[16]
  i3314.autoSimulation = !!i3315[17]
  i3314.queriesHitTriggers = !!i3315[18]
  i3314.queriesStartInColliders = !!i3315[19]
  i3314.callbacksOnDisable = !!i3315[20]
  i3314.reuseCollisionCallbacks = !!i3315[21]
  i3314.autoSyncTransforms = !!i3315[22]
  var i3317 = i3315[23]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3317[i + 0]) );
  }
  i3314.collisionMatrix = i3316
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3321 = data
  i3320.enabled = !!i3321[0]
  i3320.layerId = i3321[1]
  i3320.otherLayerId = i3321[2]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3323 = data
  var i3325 = i3323[0]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3325[i + 0]) );
  }
  i3322.qualityLevels = i3324
  var i3327 = i3323[1]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( i3327[i + 0] );
  }
  i3322.names = i3326
  i3322.shadows = i3323[2]
  i3322.anisotropicFiltering = i3323[3]
  i3322.antiAliasing = i3323[4]
  i3322.lodBias = i3323[5]
  i3322.shadowCascades = i3323[6]
  i3322.shadowDistance = i3323[7]
  i3322.shadowmaskMode = i3323[8]
  i3322.shadowProjection = i3323[9]
  i3322.shadowResolution = i3323[10]
  i3322.softParticles = !!i3323[11]
  i3322.softVegetation = !!i3323[12]
  i3322.activeColorSpace = i3323[13]
  i3322.desiredColorSpace = i3323[14]
  i3322.masterTextureLimit = i3323[15]
  i3322.maxQueuedFrames = i3323[16]
  i3322.particleRaycastBudget = i3323[17]
  i3322.pixelLightCount = i3323[18]
  i3322.realtimeReflectionProbes = !!i3323[19]
  i3322.shadowCascade2Split = i3323[20]
  i3322.shadowCascade4Split = new pc.Vec3( i3323[21], i3323[22], i3323[23] )
  i3322.streamingMipmapsActive = !!i3323[24]
  i3322.vSyncCount = i3323[25]
  i3322.asyncUploadBufferSize = i3323[26]
  i3322.asyncUploadTimeSlice = i3323[27]
  i3322.billboardsFaceCameraPosition = !!i3323[28]
  i3322.shadowNearPlaneOffset = i3323[29]
  i3322.streamingMipmapsMemoryBudget = i3323[30]
  i3322.maximumLODLevel = i3323[31]
  i3322.streamingMipmapsAddAllCameras = !!i3323[32]
  i3322.streamingMipmapsMaxLevelReduction = i3323[33]
  i3322.streamingMipmapsRenderersPerFrame = i3323[34]
  i3322.resolutionScalingFixedDPIFactor = i3323[35]
  i3322.streamingMipmapsMaxFileIORequests = i3323[36]
  i3322.currentQualityLevel = i3323[37]
  return i3322
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3330 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3331 = data
  i3330.m_XCoordinate = i3331[0]
  i3330.m_YCoordinate = i3331[1]
  return i3330
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3332 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3333 = data
  i3332.m_XPositionAdjustment = i3333[0]
  i3332.m_YPositionAdjustment = i3333[1]
  return i3332
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3334 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3335 = data
  i3334.xPlacement = i3335[0]
  i3334.yPlacement = i3335[1]
  i3334.xAdvance = i3335[2]
  i3334.yAdvance = i3335[3]
  return i3334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"5":[4],"25":[4],"80":[81],"82":[4],"83":[16,4],"84":[76],"26":[16,4],"85":[86,76],"87":[76],"88":[76,89],"90":[54],"91":[61],"92":[81],"93":[94],"95":[96],"97":[34],"98":[5],"99":[4],"100":[76,4],"15":[4,16],"101":[4],"102":[16,4],"103":[76],"104":[16,4],"105":[4],"106":[107],"108":[107],"109":[107],"110":[4],"111":[4],"8":[5],"13":[16,4],"112":[4],"7":[5],"113":[4],"114":[4],"32":[4],"115":[4],"116":[4],"117":[4],"118":[4],"21":[4],"119":[4],"17":[16,4],"23":[4],"120":[4],"121":[4],"122":[4],"123":[16,4],"124":[4],"125":[34],"126":[34],"35":[34],"127":[34],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "43.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BETP_V03_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "42831";

Deserializers.projectId = "2908ef2555f4afa4ab6241b85cbb2f84";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1843";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4501";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PA-BEQ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "2929243e-19d0-4c81-8617-dd2a77eae861";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

