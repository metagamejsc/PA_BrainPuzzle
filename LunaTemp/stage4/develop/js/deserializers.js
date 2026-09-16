var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.JointSpring' )
  var i2925 = data
  i2924.spring = i2925[0]
  i2924.damper = i2925[1]
  i2924.targetPosition = i2925[2]
  return i2924
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.JointMotor' )
  var i2927 = data
  i2926.m_TargetVelocity = i2927[0]
  i2926.m_Force = i2927[1]
  i2926.m_FreeSpin = i2927[2]
  return i2926
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.JointLimits' )
  var i2929 = data
  i2928.m_Min = i2929[0]
  i2928.m_Max = i2929[1]
  i2928.m_Bounciness = i2929[2]
  i2928.m_BounceMinVelocity = i2929[3]
  i2928.m_ContactDistance = i2929[4]
  i2928.minBounce = i2929[5]
  i2928.maxBounce = i2929[6]
  return i2928
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2930 = root || request.c( 'UnityEngine.JointDrive' )
  var i2931 = data
  i2930.m_PositionSpring = i2931[0]
  i2930.m_PositionDamper = i2931[1]
  i2930.m_MaximumForce = i2931[2]
  i2930.m_UseAcceleration = i2931[3]
  return i2930
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2933 = data
  i2932.m_Spring = i2933[0]
  i2932.m_Damper = i2933[1]
  return i2932
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2934 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2935 = data
  i2934.m_Limit = i2935[0]
  i2934.m_Bounciness = i2935[1]
  i2934.m_ContactDistance = i2935[2]
  return i2934
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2936 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2937 = data
  i2936.m_ExtremumSlip = i2937[0]
  i2936.m_ExtremumValue = i2937[1]
  i2936.m_AsymptoteSlip = i2937[2]
  i2936.m_AsymptoteValue = i2937[3]
  i2936.m_Stiffness = i2937[4]
  return i2936
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2938 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2939 = data
  i2938.m_LowerAngle = i2939[0]
  i2938.m_UpperAngle = i2939[1]
  return i2938
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2941 = data
  i2940.m_MotorSpeed = i2941[0]
  i2940.m_MaximumMotorTorque = i2941[1]
  return i2940
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2942 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2943 = data
  i2942.m_DampingRatio = i2943[0]
  i2942.m_Frequency = i2943[1]
  i2942.m_Angle = i2943[2]
  return i2942
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2944 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2945 = data
  i2944.m_LowerTranslation = i2945[0]
  i2944.m_UpperTranslation = i2945[1]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2947 = data
  i2946.name = i2947[0]
  i2946.width = i2947[1]
  i2946.height = i2947[2]
  i2946.mipmapCount = i2947[3]
  i2946.anisoLevel = i2947[4]
  i2946.filterMode = i2947[5]
  i2946.hdr = !!i2947[6]
  i2946.format = i2947[7]
  i2946.wrapMode = i2947[8]
  i2946.alphaIsTransparency = !!i2947[9]
  i2946.alphaSource = i2947[10]
  i2946.graphicsFormat = i2947[11]
  i2946.sRGBTexture = !!i2947[12]
  i2946.desiredColorSpace = i2947[13]
  i2946.wrapU = i2947[14]
  i2946.wrapV = i2947[15]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2948 = root || new pc.UnityMaterial()
  var i2949 = data
  i2948.name = i2949[0]
  request.r(i2949[1], i2949[2], 0, i2948, 'shader')
  i2948.renderQueue = i2949[3]
  i2948.enableInstancing = !!i2949[4]
  var i2951 = i2949[5]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2951[i + 0]) );
  }
  i2948.floatParameters = i2950
  var i2953 = i2949[6]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2953[i + 0]) );
  }
  i2948.colorParameters = i2952
  var i2955 = i2949[7]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2955[i + 0]) );
  }
  i2948.vectorParameters = i2954
  var i2957 = i2949[8]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2957[i + 0]) );
  }
  i2948.textureParameters = i2956
  var i2959 = i2949[9]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2959[i + 0]) );
  }
  i2948.materialFlags = i2958
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.value = i2963[1]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2967 = data
  i2966.name = i2967[0]
  i2966.value = new pc.Color(i2967[1], i2967[2], i2967[3], i2967[4])
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.value = new pc.Vec4( i2971[1], i2971[2], i2971[3], i2971[4] )
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2975 = data
  i2974.name = i2975[0]
  request.r(i2975[1], i2975[2], 0, i2974, 'value')
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2979 = data
  i2978.name = i2979[0]
  i2978.enabled = !!i2979[1]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2981 = data
  i2980.name = i2981[0]
  i2980.index = i2981[1]
  i2980.startup = !!i2981[2]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2983 = data
  i2982.aspect = i2983[0]
  i2982.orthographic = !!i2983[1]
  i2982.orthographicSize = i2983[2]
  i2982.backgroundColor = new pc.Color(i2983[3], i2983[4], i2983[5], i2983[6])
  i2982.nearClipPlane = i2983[7]
  i2982.farClipPlane = i2983[8]
  i2982.fieldOfView = i2983[9]
  i2982.depth = i2983[10]
  i2982.clearFlags = i2983[11]
  i2982.cullingMask = i2983[12]
  i2982.rect = i2983[13]
  request.r(i2983[14], i2983[15], 0, i2982, 'targetTexture')
  i2982.usePhysicalProperties = !!i2983[16]
  i2982.focalLength = i2983[17]
  i2982.sensorSize = new pc.Vec2( i2983[18], i2983[19] )
  i2982.lensShift = new pc.Vec2( i2983[20], i2983[21] )
  i2982.gateFit = i2983[22]
  i2982.commandBufferCount = i2983[23]
  i2982.cameraType = i2983[24]
  i2982.enabled = !!i2983[25]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2985 = data
  i2984.name = i2985[0]
  i2984.tagId = i2985[1]
  i2984.enabled = !!i2985[2]
  i2984.isStatic = !!i2985[3]
  i2984.layer = i2985[4]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2987 = data
  i2986.pivot = new pc.Vec2( i2987[0], i2987[1] )
  i2986.anchorMin = new pc.Vec2( i2987[2], i2987[3] )
  i2986.anchorMax = new pc.Vec2( i2987[4], i2987[5] )
  i2986.sizeDelta = new pc.Vec2( i2987[6], i2987[7] )
  i2986.anchoredPosition3D = new pc.Vec3( i2987[8], i2987[9], i2987[10] )
  i2986.rotation = new pc.Quat(i2987[11], i2987[12], i2987[13], i2987[14])
  i2986.scale = new pc.Vec3( i2987[15], i2987[16], i2987[17] )
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2989 = data
  i2988.planeDistance = i2989[0]
  i2988.referencePixelsPerUnit = i2989[1]
  i2988.isFallbackOverlay = !!i2989[2]
  i2988.renderMode = i2989[3]
  i2988.renderOrder = i2989[4]
  i2988.sortingLayerName = i2989[5]
  i2988.sortingOrder = i2989[6]
  i2988.scaleFactor = i2989[7]
  request.r(i2989[8], i2989[9], 0, i2988, 'worldCamera')
  i2988.overrideSorting = !!i2989[10]
  i2988.pixelPerfect = !!i2989[11]
  i2988.targetDisplay = i2989[12]
  i2988.overridePixelPerfect = !!i2989[13]
  i2988.enabled = !!i2989[14]
  return i2988
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2991 = data
  i2990.m_UiScaleMode = i2991[0]
  i2990.m_ReferencePixelsPerUnit = i2991[1]
  i2990.m_ScaleFactor = i2991[2]
  i2990.m_ReferenceResolution = new pc.Vec2( i2991[3], i2991[4] )
  i2990.m_ScreenMatchMode = i2991[5]
  i2990.m_MatchWidthOrHeight = i2991[6]
  i2990.m_PhysicalUnit = i2991[7]
  i2990.m_FallbackScreenDPI = i2991[8]
  i2990.m_DefaultSpriteDPI = i2991[9]
  i2990.m_DynamicPixelsPerUnit = i2991[10]
  i2990.m_PresetInfoIsWorld = !!i2991[11]
  return i2990
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2993 = data
  i2992.m_IgnoreReversedGraphics = !!i2993[0]
  i2992.m_BlockingObjects = i2993[1]
  i2992.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2993[2] )
  return i2992
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i2994 = root || request.c( 'Playable.GameManager' )
  var i2995 = data
  i2994.EventCountdownEndGame = request.d('System.Action', i2995[0], i2994.EventCountdownEndGame)
  i2994._totalEvent = i2995[1]
  i2994._maxEvent = i2995[2]
  i2994._endTime = i2995[3]
  request.r(i2995[4], i2995[5], 0, i2994, '_backgroundMusic')
  request.r(i2995[6], i2995[7], 0, i2994, '_backgroundTexture')
  request.r(i2995[8], i2995[9], 0, i2994, '_btnBlock')
  request.r(i2995[10], i2995[11], 0, i2994, '_background')
  request.r(i2995[12], i2995[13], 0, i2994, '_losePanel')
  request.r(i2995[14], i2995[15], 0, i2994, '_progressFillImage')
  request.r(i2995[16], i2995[17], 0, i2994, '_progressText')
  i2994._progressTweenDuration = i2995[18]
  request.r(i2995[19], i2995[20], 0, i2994, '_timerFillImage')
  request.r(i2995[21], i2995[22], 0, i2994, '_timerText')
  i2994._timerPunchScale = i2995[23]
  return i2994
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2996 = root || request.c( 'System.Action' )
  var i2997 = data
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2999 = data
  i2998.cullTransparentMesh = !!i2999[0]
  return i2998
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.UI.Image' )
  var i3001 = data
  request.r(i3001[0], i3001[1], 0, i3000, 'm_Sprite')
  i3000.m_Type = i3001[2]
  i3000.m_PreserveAspect = !!i3001[3]
  i3000.m_FillCenter = !!i3001[4]
  i3000.m_FillMethod = i3001[5]
  i3000.m_FillAmount = i3001[6]
  i3000.m_FillClockwise = !!i3001[7]
  i3000.m_FillOrigin = i3001[8]
  i3000.m_UseSpriteMesh = !!i3001[9]
  i3000.m_PixelsPerUnitMultiplier = i3001[10]
  request.r(i3001[11], i3001[12], 0, i3000, 'm_Material')
  i3000.m_Maskable = !!i3001[13]
  i3000.m_Color = new pc.Color(i3001[14], i3001[15], i3001[16], i3001[17])
  i3000.m_RaycastTarget = !!i3001[18]
  i3000.m_RaycastPadding = new pc.Vec4( i3001[19], i3001[20], i3001[21], i3001[22] )
  return i3000
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3002 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'm_Texture')
  i3002.m_UVRect = UnityEngine.Rect.MinMaxRect(i3003[2], i3003[3], i3003[4], i3003[5])
  request.r(i3003[6], i3003[7], 0, i3002, 'm_Material')
  i3002.m_Maskable = !!i3003[8]
  i3002.m_Color = new pc.Color(i3003[9], i3003[10], i3003[11], i3003[12])
  i3002.m_RaycastTarget = !!i3003[13]
  i3002.m_RaycastPadding = new pc.Vec4( i3003[14], i3003[15], i3003[16], i3003[17] )
  return i3002
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3004 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3005 = data
  i3004.m_hasFontAssetChanged = !!i3005[0]
  request.r(i3005[1], i3005[2], 0, i3004, 'm_baseMaterial')
  i3004.m_maskOffset = new pc.Vec4( i3005[3], i3005[4], i3005[5], i3005[6] )
  i3004.m_text = i3005[7]
  i3004.m_isRightToLeft = !!i3005[8]
  request.r(i3005[9], i3005[10], 0, i3004, 'm_fontAsset')
  request.r(i3005[11], i3005[12], 0, i3004, 'm_sharedMaterial')
  var i3007 = i3005[13]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 2) {
  request.r(i3007[i + 0], i3007[i + 1], 2, i3006, '')
  }
  i3004.m_fontSharedMaterials = i3006
  request.r(i3005[14], i3005[15], 0, i3004, 'm_fontMaterial')
  var i3009 = i3005[16]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 2) {
  request.r(i3009[i + 0], i3009[i + 1], 2, i3008, '')
  }
  i3004.m_fontMaterials = i3008
  i3004.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3005[17], i3005[18], i3005[19], i3005[20])
  i3004.m_fontColor = new pc.Color(i3005[21], i3005[22], i3005[23], i3005[24])
  i3004.m_enableVertexGradient = !!i3005[25]
  i3004.m_colorMode = i3005[26]
  i3004.m_fontColorGradient = request.d('TMPro.VertexGradient', i3005[27], i3004.m_fontColorGradient)
  request.r(i3005[28], i3005[29], 0, i3004, 'm_fontColorGradientPreset')
  request.r(i3005[30], i3005[31], 0, i3004, 'm_spriteAsset')
  i3004.m_tintAllSprites = !!i3005[32]
  request.r(i3005[33], i3005[34], 0, i3004, 'm_StyleSheet')
  i3004.m_TextStyleHashCode = i3005[35]
  i3004.m_overrideHtmlColors = !!i3005[36]
  i3004.m_faceColor = UnityEngine.Color32.ConstructColor(i3005[37], i3005[38], i3005[39], i3005[40])
  i3004.m_fontSize = i3005[41]
  i3004.m_fontSizeBase = i3005[42]
  i3004.m_fontWeight = i3005[43]
  i3004.m_enableAutoSizing = !!i3005[44]
  i3004.m_fontSizeMin = i3005[45]
  i3004.m_fontSizeMax = i3005[46]
  i3004.m_fontStyle = i3005[47]
  i3004.m_HorizontalAlignment = i3005[48]
  i3004.m_VerticalAlignment = i3005[49]
  i3004.m_textAlignment = i3005[50]
  i3004.m_characterSpacing = i3005[51]
  i3004.m_wordSpacing = i3005[52]
  i3004.m_lineSpacing = i3005[53]
  i3004.m_lineSpacingMax = i3005[54]
  i3004.m_paragraphSpacing = i3005[55]
  i3004.m_charWidthMaxAdj = i3005[56]
  i3004.m_TextWrappingMode = i3005[57]
  i3004.m_wordWrappingRatios = i3005[58]
  i3004.m_overflowMode = i3005[59]
  request.r(i3005[60], i3005[61], 0, i3004, 'm_linkedTextComponent')
  request.r(i3005[62], i3005[63], 0, i3004, 'parentLinkedComponent')
  i3004.m_enableKerning = !!i3005[64]
  var i3011 = i3005[65]
  var i3010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.add(i3011[i + 0]);
  }
  i3004.m_ActiveFontFeatures = i3010
  i3004.m_enableExtraPadding = !!i3005[66]
  i3004.checkPaddingRequired = !!i3005[67]
  i3004.m_isRichText = !!i3005[68]
  i3004.m_parseCtrlCharacters = !!i3005[69]
  i3004.m_isOrthographic = !!i3005[70]
  i3004.m_isCullingEnabled = !!i3005[71]
  i3004.m_horizontalMapping = i3005[72]
  i3004.m_verticalMapping = i3005[73]
  i3004.m_uvLineOffset = i3005[74]
  i3004.m_geometrySortingOrder = i3005[75]
  i3004.m_IsTextObjectScaleStatic = !!i3005[76]
  i3004.m_VertexBufferAutoSizeReduction = !!i3005[77]
  i3004.m_useMaxVisibleDescender = !!i3005[78]
  i3004.m_pageToDisplay = i3005[79]
  i3004.m_margin = new pc.Vec4( i3005[80], i3005[81], i3005[82], i3005[83] )
  i3004.m_isUsingLegacyAnimationComponent = !!i3005[84]
  i3004.m_isVolumetricText = !!i3005[85]
  request.r(i3005[86], i3005[87], 0, i3004, 'm_Material')
  i3004.m_EmojiFallbackSupport = !!i3005[88]
  i3004.m_Maskable = !!i3005[89]
  i3004.m_Color = new pc.Color(i3005[90], i3005[91], i3005[92], i3005[93])
  i3004.m_RaycastTarget = !!i3005[94]
  i3004.m_RaycastPadding = new pc.Vec4( i3005[95], i3005[96], i3005[97], i3005[98] )
  return i3004
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3014 = root || request.c( 'TMPro.VertexGradient' )
  var i3015 = data
  i3014.topLeft = new pc.Color(i3015[0], i3015[1], i3015[2], i3015[3])
  i3014.topRight = new pc.Color(i3015[4], i3015[5], i3015[6], i3015[7])
  i3014.bottomLeft = new pc.Color(i3015[8], i3015[9], i3015[10], i3015[11])
  i3014.bottomRight = new pc.Color(i3015[12], i3015[13], i3015[14], i3015[15])
  return i3014
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3018 = root || request.c( 'UnityEngine.UI.Button' )
  var i3019 = data
  i3018.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3019[0], i3018.m_OnClick)
  i3018.m_Navigation = request.d('UnityEngine.UI.Navigation', i3019[1], i3018.m_Navigation)
  i3018.m_Transition = i3019[2]
  i3018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3019[3], i3018.m_Colors)
  i3018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3019[4], i3018.m_SpriteState)
  i3018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3019[5], i3018.m_AnimationTriggers)
  i3018.m_Interactable = !!i3019[6]
  request.r(i3019[7], i3019[8], 0, i3018, 'm_TargetGraphic')
  return i3018
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3020 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3021 = data
  i3020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3021[0], i3020.m_PersistentCalls)
  return i3020
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3022 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3023 = data
  var i3025 = i3023[0]
  var i3024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.add(request.d('UnityEngine.Events.PersistentCall', i3025[i + 0]));
  }
  i3022.m_Calls = i3024
  return i3022
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3028 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3029 = data
  request.r(i3029[0], i3029[1], 0, i3028, 'm_Target')
  i3028.m_TargetAssemblyTypeName = i3029[2]
  i3028.m_MethodName = i3029[3]
  i3028.m_Mode = i3029[4]
  i3028.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3029[5], i3028.m_Arguments)
  i3028.m_CallState = i3029[6]
  return i3028
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'm_ObjectArgument')
  i3030.m_ObjectArgumentAssemblyTypeName = i3031[2]
  i3030.m_IntArgument = i3031[3]
  i3030.m_FloatArgument = i3031[4]
  i3030.m_StringArgument = i3031[5]
  i3030.m_BoolArgument = !!i3031[6]
  return i3030
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3032 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3033 = data
  i3032.m_Mode = i3033[0]
  i3032.m_WrapAround = !!i3033[1]
  request.r(i3033[2], i3033[3], 0, i3032, 'm_SelectOnUp')
  request.r(i3033[4], i3033[5], 0, i3032, 'm_SelectOnDown')
  request.r(i3033[6], i3033[7], 0, i3032, 'm_SelectOnLeft')
  request.r(i3033[8], i3033[9], 0, i3032, 'm_SelectOnRight')
  return i3032
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3034 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3035 = data
  i3034.m_NormalColor = new pc.Color(i3035[0], i3035[1], i3035[2], i3035[3])
  i3034.m_HighlightedColor = new pc.Color(i3035[4], i3035[5], i3035[6], i3035[7])
  i3034.m_PressedColor = new pc.Color(i3035[8], i3035[9], i3035[10], i3035[11])
  i3034.m_SelectedColor = new pc.Color(i3035[12], i3035[13], i3035[14], i3035[15])
  i3034.m_DisabledColor = new pc.Color(i3035[16], i3035[17], i3035[18], i3035[19])
  i3034.m_ColorMultiplier = i3035[20]
  i3034.m_FadeDuration = i3035[21]
  return i3034
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3036 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3037 = data
  request.r(i3037[0], i3037[1], 0, i3036, 'm_HighlightedSprite')
  request.r(i3037[2], i3037[3], 0, i3036, 'm_PressedSprite')
  request.r(i3037[4], i3037[5], 0, i3036, 'm_SelectedSprite')
  request.r(i3037[6], i3037[7], 0, i3036, 'm_DisabledSprite')
  return i3036
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3038 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3039 = data
  i3038.m_NormalTrigger = i3039[0]
  i3038.m_HighlightedTrigger = i3039[1]
  i3038.m_PressedTrigger = i3039[2]
  i3038.m_SelectedTrigger = i3039[3]
  i3038.m_DisabledTrigger = i3039[4]
  return i3038
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3040 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3041 = data
  i3040.m_ShowMaskGraphic = !!i3041[0]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3043 = data
  request.r(i3043[0], i3043[1], 0, i3042, 'clip')
  request.r(i3043[2], i3043[3], 0, i3042, 'outputAudioMixerGroup')
  i3042.playOnAwake = !!i3043[4]
  i3042.loop = !!i3043[5]
  i3042.time = i3043[6]
  i3042.volume = i3043[7]
  i3042.pitch = i3043[8]
  i3042.enabled = !!i3043[9]
  return i3042
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i3044 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i3045 = data
  i3044.m_Padding = new pc.Vec4( i3045[0], i3045[1], i3045[2], i3045[3] )
  i3044.m_Softness = new pc.Vec2( i3045[4], i3045[5] )
  return i3044
}

Deserializers["GameController"] = function (request, data, root) {
  var i3046 = root || request.c( 'GameController' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, '_tutorialHand')
  request.r(i3047[2], i3047[3], 0, i3046, '_tutorialInPlace')
  request.r(i3047[4], i3047[5], 0, i3046, '_tutorialFrom')
  request.r(i3047[6], i3047[7], 0, i3046, '_tutorialTo')
  i3046._tutorialScaleDuration = i3047[8]
  i3046._tutorialMoveDuration = i3047[9]
  i3046._tutorialStartDelay = i3047[10]
  return i3046
}

Deserializers["Item"] = function (request, data, root) {
  var i3048 = root || request.c( 'Item' )
  var i3049 = data
  var i3051 = i3049[0]
  var i3050 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.add(request.d('Item+ItemData', i3051[i + 0]));
  }
  i3048._data = i3050
  i3048._dragSortingOrder = i3049[1]
  return i3048
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i3054 = root || request.c( 'Item+ItemData' )
  var i3055 = data
  i3054.id = i3055[0]
  i3054.stateChange = request.d('Item+GirlStateChange', i3055[1], i3054.stateChange)
  i3054.animationStateTiming = i3055[2]
  i3054.result = i3055[3]
  return i3054
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i3056 = root || request.c( 'Item+GirlStateChange' )
  var i3057 = data
  i3056.changeBodyShape = !!i3057[0]
  i3056.bodyShape = i3057[1]
  i3056.changeOutfit = !!i3057[2]
  i3056.outfit = i3057[3]
  i3056.changeRestraint = !!i3057[4]
  i3056.restraint = i3057[5]
  return i3056
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3058 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'skeletonDataAsset')
  request.r(i3059[2], i3059[3], 0, i3058, 'additiveMaterial')
  request.r(i3059[4], i3059[5], 0, i3058, 'multiplyMaterial')
  request.r(i3059[6], i3059[7], 0, i3058, 'screenMaterial')
  i3058.initialSkinName = i3059[8]
  i3058.initialFlipX = !!i3059[9]
  i3058.initialFlipY = !!i3059[10]
  i3058.startingAnimation = i3059[11]
  i3058.startingLoop = !!i3059[12]
  i3058.timeScale = i3059[13]
  i3058.freeze = !!i3059[14]
  i3058.layoutScaleMode = i3059[15]
  i3058.updateWhenInvisible = i3059[16]
  i3058.allowMultipleCanvasRenderers = !!i3059[17]
  var i3061 = i3059[18]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3061.length; i += 2) {
  request.r(i3061[i + 0], i3061[i + 1], 1, i3060, '')
  }
  i3058.canvasRenderers = i3060
  i3058.enableSeparatorSlots = !!i3059[19]
  i3058.updateSeparatorPartLocation = !!i3059[20]
  i3058.updateSeparatorPartScale = !!i3059[21]
  i3058.disableMeshAssignmentOnOverride = !!i3059[22]
  i3058.referenceSize = new pc.Vec2( i3059[23], i3059[24] )
  i3058.referenceScale = i3059[25]
  i3058.rectTransformSize = new pc.Vec2( i3059[26], i3059[27] )
  i3058.editReferenceRect = !!i3059[28]
  var i3063 = i3059[29]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( i3063[i + 0] );
  }
  i3058.separatorSlotNames = i3062
  var i3065 = i3059[30]
  var i3064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 1, i3064, '')
  }
  i3058.separatorParts = i3064
  i3058.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3059[31], i3058.meshGenerator)
  i3058.updateTiming = i3059[32]
  i3058.unscaledTime = !!i3059[33]
  request.r(i3059[34], i3059[35], 0, i3058, 'm_Material')
  i3058.m_Maskable = !!i3059[36]
  i3058.m_Color = new pc.Color(i3059[37], i3059[38], i3059[39], i3059[40])
  i3058.m_RaycastTarget = !!i3059[41]
  i3058.m_RaycastPadding = new pc.Vec4( i3059[42], i3059[43], i3059[44], i3059[45] )
  return i3058
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3072 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3073 = data
  i3072.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3073[0], i3072.settings)
  return i3072
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3074 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3075 = data
  i3074.useClipping = !!i3075[0]
  i3074.zSpacing = i3075[1]
  i3074.pmaVertexColors = !!i3075[2]
  i3074.tintBlack = !!i3075[3]
  i3074.canvasGroupTintBlack = !!i3075[4]
  i3074.calculateTangents = !!i3075[5]
  i3074.addNormals = !!i3075[6]
  i3074.immutableTriangles = !!i3075[7]
  return i3074
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i3076 = root || request.c( 'Playable.Door' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, '_image')
  request.r(i3077[2], i3077[3], 0, i3076, '_open')
  request.r(i3077[4], i3077[5], 0, i3076, '_close')
  return i3076
}

Deserializers["Girl"] = function (request, data, root) {
  var i3078 = root || request.c( 'Girl' )
  var i3079 = data
  i3078._enableDebugLogs = !!i3079[0]
  i3078._status = request.d('GirlStatus', i3079[1], i3078._status)
  var i3081 = i3079[2]
  var i3080 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.add(request.d('Girl+BodyShapeSkins', i3081[i + 0]));
  }
  i3078._bodyShapeSkins = i3080
  var i3083 = i3079[3]
  var i3082 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.add(request.d('Girl+OutfitSkins', i3083[i + 0]));
  }
  i3078._outfitSkins = i3082
  var i3085 = i3079[4]
  var i3084 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.add(request.d('Girl+RestraintSkins', i3085[i + 0]));
  }
  i3078._restraintSkins = i3084
  request.r(i3079[5], i3079[6], 0, i3078, '_skeletonGraphic')
  var i3087 = i3079[7]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( i3087[i + 0] );
  }
  i3078._defaultSkins = i3086
  i3078._defaultAnimation = request.d('Target+GirlAnimation', i3079[8], i3078._defaultAnimation)
  var i3089 = i3079[9]
  var i3088 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.add(request.d('Target+GirlAnimation', i3089[i + 0]));
  }
  i3078._removeGlassesAnimations = i3088
  i3078._endGameDelay = i3079[10]
  i3078._boy1 = request.d('Girl+BoyAnimationData', i3079[11], i3078._boy1)
  i3078._boy2 = request.d('Girl+BoyAnimationData', i3079[12], i3078._boy2)
  return i3078
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i3090 = root || request.c( 'GirlStatus' )
  var i3091 = data
  i3090.bodyShape = i3091[0]
  i3090.outfit = i3091[1]
  i3090.restraint = i3091[2]
  return i3090
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i3094 = root || request.c( 'Girl+BodyShapeSkins' )
  var i3095 = data
  i3094.bodyShape = i3095[0]
  var i3097 = i3095[1]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( i3097[i + 0] );
  }
  i3094.skins = i3096
  return i3094
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i3100 = root || request.c( 'Girl+OutfitSkins' )
  var i3101 = data
  i3100.outfit = i3101[0]
  var i3103 = i3101[1]
  var i3102 = []
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.push( i3103[i + 0] );
  }
  i3100.skins = i3102
  return i3100
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i3106 = root || request.c( 'Girl+RestraintSkins' )
  var i3107 = data
  i3106.restraint = i3107[0]
  var i3109 = i3107[1]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( i3109[i + 0] );
  }
  i3106.skins = i3108
  return i3106
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i3110 = root || request.c( 'Target+GirlAnimation' )
  var i3111 = data
  i3110.animationName = i3111[0]
  i3110.loop = !!i3111[1]
  return i3110
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i3114 = root || request.c( 'Girl+BoyAnimationData' )
  var i3115 = data
  request.r(i3115[0], i3115[1], 0, i3114, 'skeletonGraphic')
  i3114.idleAnimation = i3115[2]
  i3114.winAnimation = i3115[3]
  i3114.loseAnimation = i3115[4]
  return i3114
}

Deserializers["Target"] = function (request, data, root) {
  var i3116 = root || request.c( 'Target' )
  var i3117 = data
  i3116._part = i3117[0]
  request.r(i3117[1], i3117[2], 0, i3116, '_girl')
  request.r(i3117[3], i3117[4], 0, i3116, '_skeletonGraphic')
  var i3119 = i3117[5]
  var i3118 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.add(request.d('Target+ItemReaction', i3119[i + 0]));
  }
  i3116._itemReactions = i3118
  return i3116
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i3122 = root || request.c( 'Target+ItemReaction' )
  var i3123 = data
  i3122.itemId = i3123[0]
  var i3125 = i3123[1]
  var i3124 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.add(request.d('Target+AnimationRule', i3125[i + 0]));
  }
  i3122.animationRules = i3124
  var i3127 = i3123[2]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( i3127[i + 0] );
  }
  i3122.skinAdded = i3126
  var i3129 = i3123[3]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( i3129[i + 0] );
  }
  i3122.skinRemoved = i3128
  request.r(i3123[4], i3123[5], 0, i3122, 'audioClip')
  return i3122
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i3132 = root || request.c( 'Target+AnimationRule' )
  var i3133 = data
  i3132.checkBodyShape = !!i3133[0]
  i3132.bodyShape = i3133[1]
  i3132.checkOutfit = !!i3133[2]
  i3132.outfit = i3133[3]
  i3132.checkRestraint = !!i3133[4]
  i3132.restraint = i3133[5]
  var i3135 = i3133[6]
  var i3134 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.add(request.d('Target+GirlAnimation', i3135[i + 0]));
  }
  i3132.animations = i3134
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3137 = data
  i3136.m_Alpha = i3137[0]
  i3136.m_Interactable = !!i3137[1]
  i3136.m_BlocksRaycasts = !!i3137[2]
  i3136.m_IgnoreParentGroups = !!i3137[3]
  i3136.enabled = !!i3137[4]
  return i3136
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3138 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3139 = data
  i3138.m_Spacing = i3139[0]
  i3138.m_ChildForceExpandWidth = !!i3139[1]
  i3138.m_ChildForceExpandHeight = !!i3139[2]
  i3138.m_ChildControlWidth = !!i3139[3]
  i3138.m_ChildControlHeight = !!i3139[4]
  i3138.m_ChildScaleWidth = !!i3139[5]
  i3138.m_ChildScaleHeight = !!i3139[6]
  i3138.m_ReverseArrangement = !!i3139[7]
  i3138.m_Padding = UnityEngine.RectOffset.FromPaddings(i3139[8], i3139[9], i3139[10], i3139[11])
  i3138.m_ChildAlignment = i3139[12]
  return i3138
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i3140 = root || request.c( 'Playable.AudioManager' )
  var i3141 = data
  var i3143 = i3141[0]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(request.d('Playable.SoundData', i3143[i + 0]));
  }
  i3140._sounds = i3142
  request.r(i3141[1], i3141[2], 0, i3140, '_audioMusic')
  request.r(i3141[3], i3141[4], 0, i3140, '_audioSound')
  return i3140
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i3146 = root || request.c( 'Playable.SoundData' )
  var i3147 = data
  i3146.Type = i3147[0]
  request.r(i3147[1], i3147[2], 0, i3146, 'Clip')
  return i3146
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3148 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3149 = data
  request.r(i3149[0], i3149[1], 0, i3148, 'm_FirstSelected')
  i3148.m_sendNavigationEvents = !!i3149[2]
  i3148.m_DragThreshold = i3149[3]
  return i3148
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3150 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3151 = data
  i3150.m_HorizontalAxis = i3151[0]
  i3150.m_VerticalAxis = i3151[1]
  i3150.m_SubmitButton = i3151[2]
  i3150.m_CancelButton = i3151[3]
  i3150.m_InputActionsPerSecond = i3151[4]
  i3150.m_RepeatDelay = i3151[5]
  i3150.m_ForceModuleActive = !!i3151[6]
  i3150.m_SendPointerHoverToParent = !!i3151[7]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3153 = data
  i3152.ambientIntensity = i3153[0]
  i3152.reflectionIntensity = i3153[1]
  i3152.ambientMode = i3153[2]
  i3152.ambientLight = new pc.Color(i3153[3], i3153[4], i3153[5], i3153[6])
  i3152.ambientSkyColor = new pc.Color(i3153[7], i3153[8], i3153[9], i3153[10])
  i3152.ambientGroundColor = new pc.Color(i3153[11], i3153[12], i3153[13], i3153[14])
  i3152.ambientEquatorColor = new pc.Color(i3153[15], i3153[16], i3153[17], i3153[18])
  i3152.fogColor = new pc.Color(i3153[19], i3153[20], i3153[21], i3153[22])
  i3152.fogEndDistance = i3153[23]
  i3152.fogStartDistance = i3153[24]
  i3152.fogDensity = i3153[25]
  i3152.fog = !!i3153[26]
  request.r(i3153[27], i3153[28], 0, i3152, 'skybox')
  i3152.fogMode = i3153[29]
  var i3155 = i3153[30]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3155[i + 0]) );
  }
  i3152.lightmaps = i3154
  i3152.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3153[31], i3152.lightProbes)
  i3152.lightmapsMode = i3153[32]
  i3152.mixedBakeMode = i3153[33]
  i3152.environmentLightingMode = i3153[34]
  i3152.ambientProbe = new pc.SphericalHarmonicsL2(i3153[35])
  request.r(i3153[36], i3153[37], 0, i3152, 'customReflection')
  request.r(i3153[38], i3153[39], 0, i3152, 'defaultReflection')
  i3152.defaultReflectionMode = i3153[40]
  i3152.defaultReflectionResolution = i3153[41]
  i3152.sunLightObjectId = i3153[42]
  i3152.pixelLightCount = i3153[43]
  i3152.defaultReflectionHDR = !!i3153[44]
  i3152.hasLightDataAsset = !!i3153[45]
  i3152.hasManualGenerate = !!i3153[46]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'lightmapColor')
  request.r(i3159[2], i3159[3], 0, i3158, 'lightmapDirection')
  request.r(i3159[4], i3159[5], 0, i3158, 'shadowMask')
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3160 = root || new UnityEngine.LightProbes()
  var i3161 = data
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3169 = data
  var i3171 = i3169[0]
  var i3170 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3171[i + 0]));
  }
  i3168.ShaderCompilationErrors = i3170
  i3168.name = i3169[1]
  i3168.guid = i3169[2]
  var i3173 = i3169[3]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( i3173[i + 0] );
  }
  i3168.shaderDefinedKeywords = i3172
  var i3175 = i3169[4]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3175[i + 0]) );
  }
  i3168.passes = i3174
  var i3177 = i3169[5]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3177[i + 0]) );
  }
  i3168.usePasses = i3176
  var i3179 = i3169[6]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3179[i + 0]) );
  }
  i3168.defaultParameterValues = i3178
  request.r(i3169[7], i3169[8], 0, i3168, 'unityFallbackShader')
  i3168.readDepth = !!i3169[9]
  i3168.hasDepthOnlyPass = !!i3169[10]
  i3168.isCreatedByShaderGraph = !!i3169[11]
  i3168.disableBatching = !!i3169[12]
  i3168.compiled = !!i3169[13]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3183 = data
  i3182.shaderName = i3183[0]
  i3182.errorMessage = i3183[1]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3186 = root || new pc.UnityShaderPass()
  var i3187 = data
  i3186.id = i3187[0]
  i3186.subShaderIndex = i3187[1]
  i3186.name = i3187[2]
  i3186.passType = i3187[3]
  i3186.grabPassTextureName = i3187[4]
  i3186.usePass = !!i3187[5]
  i3186.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[6], i3186.zTest)
  i3186.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[7], i3186.zWrite)
  i3186.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[8], i3186.culling)
  i3186.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3187[9], i3186.blending)
  i3186.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3187[10], i3186.alphaBlending)
  i3186.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[11], i3186.colorWriteMask)
  i3186.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[12], i3186.offsetUnits)
  i3186.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[13], i3186.offsetFactor)
  i3186.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[14], i3186.stencilRef)
  i3186.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[15], i3186.stencilReadMask)
  i3186.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3187[16], i3186.stencilWriteMask)
  i3186.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3187[17], i3186.stencilOp)
  i3186.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3187[18], i3186.stencilOpFront)
  i3186.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3187[19], i3186.stencilOpBack)
  var i3189 = i3187[20]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3189[i + 0]) );
  }
  i3186.tags = i3188
  var i3191 = i3187[21]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( i3191[i + 0] );
  }
  i3186.passDefinedKeywords = i3190
  var i3193 = i3187[22]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3193[i + 0]) );
  }
  i3186.passDefinedKeywordGroups = i3192
  var i3195 = i3187[23]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 1) {
    i3194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3195[i + 0]) );
  }
  i3186.variants = i3194
  var i3197 = i3187[24]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3197[i + 0]) );
  }
  i3186.excludedVariants = i3196
  i3186.hasDepthReader = !!i3187[25]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3199 = data
  i3198.val = i3199[0]
  i3198.name = i3199[1]
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3201 = data
  i3200.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3201[0], i3200.src)
  i3200.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3201[1], i3200.dst)
  i3200.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3201[2], i3200.op)
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3203 = data
  i3202.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3203[0], i3202.pass)
  i3202.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3203[1], i3202.fail)
  i3202.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3203[2], i3202.zFail)
  i3202.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3203[3], i3202.comp)
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3207 = data
  i3206.name = i3207[0]
  i3206.value = i3207[1]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3211 = data
  var i3213 = i3211[0]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.push( i3213[i + 0] );
  }
  i3210.keywords = i3212
  i3210.hasDiscard = !!i3211[1]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3217 = data
  i3216.passId = i3217[0]
  i3216.subShaderIndex = i3217[1]
  var i3219 = i3217[2]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( i3219[i + 0] );
  }
  i3216.keywords = i3218
  i3216.vertexProgram = i3217[3]
  i3216.fragmentProgram = i3217[4]
  i3216.exportedForWebGl2 = !!i3217[5]
  i3216.readDepth = !!i3217[6]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3223 = data
  request.r(i3223[0], i3223[1], 0, i3222, 'shader')
  i3222.pass = i3223[2]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3227 = data
  i3226.name = i3227[0]
  i3226.type = i3227[1]
  i3226.value = new pc.Vec4( i3227[2], i3227[3], i3227[4], i3227[5] )
  i3226.textureValue = i3227[6]
  i3226.shaderPropertyFlag = i3227[7]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3229 = data
  i3228.name = i3229[0]
  request.r(i3229[1], i3229[2], 0, i3228, 'texture')
  i3228.aabb = i3229[3]
  i3228.vertices = i3229[4]
  i3228.triangles = i3229[5]
  i3228.textureRect = UnityEngine.Rect.MinMaxRect(i3229[6], i3229[7], i3229[8], i3229[9])
  i3228.packedRect = UnityEngine.Rect.MinMaxRect(i3229[10], i3229[11], i3229[12], i3229[13])
  i3228.border = new pc.Vec4( i3229[14], i3229[15], i3229[16], i3229[17] )
  i3228.transparency = i3229[18]
  i3228.bounds = i3229[19]
  i3228.pixelsPerUnit = i3229[20]
  i3228.textureWidth = i3229[21]
  i3228.textureHeight = i3229[22]
  i3228.nativeSize = new pc.Vec2( i3229[23], i3229[24] )
  i3228.pivot = new pc.Vec2( i3229[25], i3229[26] )
  i3228.textureRectOffset = new pc.Vec2( i3229[27], i3229[28] )
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3231 = data
  i3230.name = i3231[0]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3233 = data
  i3232.name = i3233[0]
  i3232.ascent = i3233[1]
  i3232.originalLineHeight = i3233[2]
  i3232.fontSize = i3233[3]
  var i3235 = i3233[4]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3235[i + 0]) );
  }
  i3232.characterInfo = i3234
  request.r(i3233[5], i3233[6], 0, i3232, 'texture')
  i3232.originalFontSize = i3233[7]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3239 = data
  i3238.index = i3239[0]
  i3238.advance = i3239[1]
  i3238.bearing = i3239[2]
  i3238.glyphWidth = i3239[3]
  i3238.glyphHeight = i3239[4]
  i3238.minX = i3239[5]
  i3238.maxX = i3239[6]
  i3238.minY = i3239[7]
  i3238.maxY = i3239[8]
  i3238.uvBottomLeftX = i3239[9]
  i3238.uvBottomLeftY = i3239[10]
  i3238.uvBottomRightX = i3239[11]
  i3238.uvBottomRightY = i3239[12]
  i3238.uvTopLeftX = i3239[13]
  i3238.uvTopLeftY = i3239[14]
  i3238.uvTopRightX = i3239[15]
  i3238.uvTopRightY = i3239[16]
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3241 = data
  i3240.name = i3241[0]
  i3240.bytes64 = i3241[1]
  i3240.data = i3241[2]
  return i3240
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3243 = data
  i3242.normalStyle = i3243[0]
  i3242.normalSpacingOffset = i3243[1]
  i3242.boldStyle = i3243[2]
  i3242.boldSpacing = i3243[3]
  i3242.italicStyle = i3243[4]
  i3242.tabSize = i3243[5]
  request.r(i3243[6], i3243[7], 0, i3242, 'atlas')
  i3242.m_SourceFontFileGUID = i3243[8]
  i3242.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3243[9], i3242.m_CreationSettings)
  request.r(i3243[10], i3243[11], 0, i3242, 'm_SourceFontFile')
  i3242.m_SourceFontFilePath = i3243[12]
  i3242.m_AtlasPopulationMode = i3243[13]
  i3242.InternalDynamicOS = !!i3243[14]
  var i3245 = i3243[15]
  var i3244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.add(request.d('UnityEngine.TextCore.Glyph', i3245[i + 0]));
  }
  i3242.m_GlyphTable = i3244
  var i3247 = i3243[16]
  var i3246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.add(request.d('TMPro.TMP_Character', i3247[i + 0]));
  }
  i3242.m_CharacterTable = i3246
  var i3249 = i3243[17]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 2) {
  request.r(i3249[i + 0], i3249[i + 1], 2, i3248, '')
  }
  i3242.m_AtlasTextures = i3248
  i3242.m_AtlasTextureIndex = i3243[18]
  i3242.m_IsMultiAtlasTexturesEnabled = !!i3243[19]
  i3242.m_GetFontFeatures = !!i3243[20]
  i3242.m_ClearDynamicDataOnBuild = !!i3243[21]
  i3242.m_AtlasWidth = i3243[22]
  i3242.m_AtlasHeight = i3243[23]
  i3242.m_AtlasPadding = i3243[24]
  i3242.m_AtlasRenderMode = i3243[25]
  var i3251 = i3243[26]
  var i3250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3251.length; i += 1) {
    i3250.add(request.d('UnityEngine.TextCore.GlyphRect', i3251[i + 0]));
  }
  i3242.m_UsedGlyphRects = i3250
  var i3253 = i3243[27]
  var i3252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.add(request.d('UnityEngine.TextCore.GlyphRect', i3253[i + 0]));
  }
  i3242.m_FreeGlyphRects = i3252
  i3242.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3243[28], i3242.m_FontFeatureTable)
  i3242.m_ShouldReimportFontFeatures = !!i3243[29]
  var i3255 = i3243[30]
  var i3254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3255.length; i += 2) {
  request.r(i3255[i + 0], i3255[i + 1], 1, i3254, '')
  }
  i3242.m_FallbackFontAssetTable = i3254
  var i3257 = i3243[31]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( request.d('TMPro.TMP_FontWeightPair', i3257[i + 0]) );
  }
  i3242.m_FontWeightTable = i3256
  var i3259 = i3243[32]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('TMPro.TMP_FontWeightPair', i3259[i + 0]) );
  }
  i3242.fontWeights = i3258
  i3242.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3243[33], i3242.m_fontInfo)
  var i3261 = i3243[34]
  var i3260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.add(request.d('TMPro.TMP_Glyph', i3261[i + 0]));
  }
  i3242.m_glyphInfoList = i3260
  i3242.m_KerningTable = request.d('TMPro.KerningTable', i3243[35], i3242.m_KerningTable)
  var i3263 = i3243[36]
  var i3262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3263.length; i += 2) {
  request.r(i3263[i + 0], i3263[i + 1], 1, i3262, '')
  }
  i3242.fallbackFontAssets = i3262
  i3242.m_Version = i3243[37]
  i3242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3243[38], i3242.m_FaceInfo)
  request.r(i3243[39], i3243[40], 0, i3242, 'm_Material')
  return i3242
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3264 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3265 = data
  i3264.sourceFontFileName = i3265[0]
  i3264.sourceFontFileGUID = i3265[1]
  i3264.faceIndex = i3265[2]
  i3264.pointSizeSamplingMode = i3265[3]
  i3264.pointSize = i3265[4]
  i3264.padding = i3265[5]
  i3264.paddingMode = i3265[6]
  i3264.packingMode = i3265[7]
  i3264.atlasWidth = i3265[8]
  i3264.atlasHeight = i3265[9]
  i3264.characterSetSelectionMode = i3265[10]
  i3264.characterSequence = i3265[11]
  i3264.referencedFontAssetGUID = i3265[12]
  i3264.referencedTextAssetGUID = i3265[13]
  i3264.fontStyle = i3265[14]
  i3264.fontStyleModifier = i3265[15]
  i3264.renderMode = i3265[16]
  i3264.includeFontFeatures = !!i3265[17]
  return i3264
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3268 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3269 = data
  i3268.m_Index = i3269[0]
  i3268.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3269[1], i3268.m_Metrics)
  i3268.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3269[2], i3268.m_GlyphRect)
  i3268.m_Scale = i3269[3]
  i3268.m_AtlasIndex = i3269[4]
  i3268.m_ClassDefinitionType = i3269[5]
  return i3268
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3271 = data
  i3270.m_Width = i3271[0]
  i3270.m_Height = i3271[1]
  i3270.m_HorizontalBearingX = i3271[2]
  i3270.m_HorizontalBearingY = i3271[3]
  i3270.m_HorizontalAdvance = i3271[4]
  return i3270
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3273 = data
  i3272.m_X = i3273[0]
  i3272.m_Y = i3273[1]
  i3272.m_Width = i3273[2]
  i3272.m_Height = i3273[3]
  return i3272
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3276 = root || request.c( 'TMPro.TMP_Character' )
  var i3277 = data
  i3276.m_ElementType = i3277[0]
  i3276.m_Unicode = i3277[1]
  i3276.m_GlyphIndex = i3277[2]
  i3276.m_Scale = i3277[3]
  return i3276
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3282 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3283 = data
  var i3285 = i3283[0]
  var i3284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.add(request.d('TMPro.MultipleSubstitutionRecord', i3285[i + 0]));
  }
  i3282.m_MultipleSubstitutionRecords = i3284
  var i3287 = i3283[1]
  var i3286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.add(request.d('TMPro.LigatureSubstitutionRecord', i3287[i + 0]));
  }
  i3282.m_LigatureSubstitutionRecords = i3286
  var i3289 = i3283[2]
  var i3288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3289[i + 0]));
  }
  i3282.m_GlyphPairAdjustmentRecords = i3288
  var i3291 = i3283[3]
  var i3290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3291[i + 0]));
  }
  i3282.m_MarkToBaseAdjustmentRecords = i3290
  var i3293 = i3283[4]
  var i3292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3293[i + 0]));
  }
  i3282.m_MarkToMarkAdjustmentRecords = i3292
  return i3282
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3296 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3297 = data
  i3296.m_TargetGlyphID = i3297[0]
  i3296.m_SubstituteGlyphIDs = i3297[1]
  return i3296
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3300 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3301 = data
  i3300.m_ComponentGlyphIDs = i3301[0]
  i3300.m_LigatureGlyphID = i3301[1]
  return i3300
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3304 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3305 = data
  i3304.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3305[0], i3304.m_FirstAdjustmentRecord)
  i3304.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3305[1], i3304.m_SecondAdjustmentRecord)
  i3304.m_FeatureLookupFlags = i3305[2]
  return i3304
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3308 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3309 = data
  i3308.m_BaseGlyphID = i3309[0]
  i3308.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3309[1], i3308.m_BaseGlyphAnchorPoint)
  i3308.m_MarkGlyphID = i3309[2]
  i3308.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3309[3], i3308.m_MarkPositionAdjustment)
  return i3308
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3312 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3313 = data
  i3312.m_BaseMarkGlyphID = i3313[0]
  i3312.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3313[1], i3312.m_BaseMarkGlyphAnchorPoint)
  i3312.m_CombiningMarkGlyphID = i3313[2]
  i3312.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3313[3], i3312.m_CombiningMarkPositionAdjustment)
  return i3312
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3318 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3319 = data
  request.r(i3319[0], i3319[1], 0, i3318, 'regularTypeface')
  request.r(i3319[2], i3319[3], 0, i3318, 'italicTypeface')
  return i3318
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3320 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3321 = data
  i3320.Name = i3321[0]
  i3320.PointSize = i3321[1]
  i3320.Scale = i3321[2]
  i3320.CharacterCount = i3321[3]
  i3320.LineHeight = i3321[4]
  i3320.Baseline = i3321[5]
  i3320.Ascender = i3321[6]
  i3320.CapHeight = i3321[7]
  i3320.Descender = i3321[8]
  i3320.CenterLine = i3321[9]
  i3320.SuperscriptOffset = i3321[10]
  i3320.SubscriptOffset = i3321[11]
  i3320.SubSize = i3321[12]
  i3320.Underline = i3321[13]
  i3320.UnderlineThickness = i3321[14]
  i3320.strikethrough = i3321[15]
  i3320.strikethroughThickness = i3321[16]
  i3320.TabWidth = i3321[17]
  i3320.Padding = i3321[18]
  i3320.AtlasWidth = i3321[19]
  i3320.AtlasHeight = i3321[20]
  return i3320
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3324 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3325 = data
  i3324.id = i3325[0]
  i3324.x = i3325[1]
  i3324.y = i3325[2]
  i3324.width = i3325[3]
  i3324.height = i3325[4]
  i3324.xOffset = i3325[5]
  i3324.yOffset = i3325[6]
  i3324.xAdvance = i3325[7]
  i3324.scale = i3325[8]
  return i3324
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3326 = root || request.c( 'TMPro.KerningTable' )
  var i3327 = data
  var i3329 = i3327[0]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.add(request.d('TMPro.KerningPair', i3329[i + 0]));
  }
  i3326.kerningPairs = i3328
  return i3326
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3332 = root || request.c( 'TMPro.KerningPair' )
  var i3333 = data
  i3332.xOffset = i3333[0]
  i3332.m_FirstGlyph = i3333[1]
  i3332.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3333[2], i3332.m_FirstGlyphAdjustments)
  i3332.m_SecondGlyph = i3333[3]
  i3332.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3333[4], i3332.m_SecondGlyphAdjustments)
  i3332.m_IgnoreSpacingAdjustments = !!i3333[5]
  return i3332
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3335 = data
  i3334.m_FaceIndex = i3335[0]
  i3334.m_FamilyName = i3335[1]
  i3334.m_StyleName = i3335[2]
  i3334.m_PointSize = i3335[3]
  i3334.m_Scale = i3335[4]
  i3334.m_UnitsPerEM = i3335[5]
  i3334.m_LineHeight = i3335[6]
  i3334.m_AscentLine = i3335[7]
  i3334.m_CapLine = i3335[8]
  i3334.m_MeanLine = i3335[9]
  i3334.m_Baseline = i3335[10]
  i3334.m_DescentLine = i3335[11]
  i3334.m_SuperscriptOffset = i3335[12]
  i3334.m_SuperscriptSize = i3335[13]
  i3334.m_SubscriptOffset = i3335[14]
  i3334.m_SubscriptSize = i3335[15]
  i3334.m_UnderlineOffset = i3335[16]
  i3334.m_UnderlineThickness = i3335[17]
  i3334.m_StrikethroughOffset = i3335[18]
  i3334.m_StrikethroughThickness = i3335[19]
  i3334.m_TabWidth = i3335[20]
  return i3334
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3336 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3337 = data
  var i3339 = i3337[0]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 2) {
  request.r(i3339[i + 0], i3339[i + 1], 2, i3338, '')
  }
  i3336.atlasAssets = i3338
  i3336.scale = i3337[1]
  request.r(i3337[2], i3337[3], 0, i3336, 'skeletonJSON')
  i3336.isUpgradingBlendModeMaterials = !!i3337[4]
  i3336.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3337[5], i3336.blendModeMaterials)
  var i3341 = i3337[6]
  var i3340 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3341.length; i += 2) {
  request.r(i3341[i + 0], i3341[i + 1], 1, i3340, '')
  }
  i3336.skeletonDataModifiers = i3340
  var i3343 = i3337[7]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( i3343[i + 0] );
  }
  i3336.fromAnimation = i3342
  var i3345 = i3337[8]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.push( i3345[i + 0] );
  }
  i3336.toAnimation = i3344
  i3336.duration = i3337[9]
  i3336.defaultMix = i3337[10]
  request.r(i3337[11], i3337[12], 0, i3336, 'controller')
  return i3336
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3348 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3349 = data
  i3348.applyAdditiveMaterial = !!i3349[0]
  var i3351 = i3349[1]
  var i3350 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3351[i + 0]));
  }
  i3348.additiveMaterials = i3350
  var i3353 = i3349[2]
  var i3352 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3353[i + 0]));
  }
  i3348.multiplyMaterials = i3352
  var i3355 = i3349[3]
  var i3354 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3355[i + 0]));
  }
  i3348.screenMaterials = i3354
  i3348.requiresBlendModeMaterials = !!i3349[4]
  return i3348
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3358 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3359 = data
  i3358.pageName = i3359[0]
  request.r(i3359[1], i3359[2], 0, i3358, 'material')
  return i3358
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3362 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3363 = data
  request.r(i3363[0], i3363[1], 0, i3362, 'atlasFile')
  var i3365 = i3363[2]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 2) {
  request.r(i3365[i + 0], i3365[i + 1], 2, i3364, '')
  }
  i3362.materials = i3364
  i3362.textureLoadingMode = i3363[3]
  request.r(i3363[4], i3363[5], 0, i3362, 'onDemandTextureLoader')
  return i3362
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3366 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3367 = data
  i3366.useSafeMode = !!i3367[0]
  i3366.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3367[1], i3366.safeModeOptions)
  i3366.timeScale = i3367[2]
  i3366.unscaledTimeScale = i3367[3]
  i3366.useSmoothDeltaTime = !!i3367[4]
  i3366.maxSmoothUnscaledTime = i3367[5]
  i3366.rewindCallbackMode = i3367[6]
  i3366.showUnityEditorReport = !!i3367[7]
  i3366.logBehaviour = i3367[8]
  i3366.drawGizmos = !!i3367[9]
  i3366.defaultRecyclable = !!i3367[10]
  i3366.defaultAutoPlay = i3367[11]
  i3366.defaultUpdateType = i3367[12]
  i3366.defaultTimeScaleIndependent = !!i3367[13]
  i3366.defaultEaseType = i3367[14]
  i3366.defaultEaseOvershootOrAmplitude = i3367[15]
  i3366.defaultEasePeriod = i3367[16]
  i3366.defaultAutoKill = !!i3367[17]
  i3366.defaultLoopType = i3367[18]
  i3366.debugMode = !!i3367[19]
  i3366.debugStoreTargetId = !!i3367[20]
  i3366.showPreviewPanel = !!i3367[21]
  i3366.storeSettingsLocation = i3367[22]
  i3366.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3367[23], i3366.modules)
  i3366.createASMDEF = !!i3367[24]
  i3366.showPlayingTweens = !!i3367[25]
  i3366.showPausedTweens = !!i3367[26]
  return i3366
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3368 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3369 = data
  i3368.logBehaviour = i3369[0]
  i3368.nestedTweenFailureBehaviour = i3369[1]
  return i3368
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3370 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3371 = data
  i3370.showPanel = !!i3371[0]
  i3370.audioEnabled = !!i3371[1]
  i3370.physicsEnabled = !!i3371[2]
  i3370.physics2DEnabled = !!i3371[3]
  i3370.spriteEnabled = !!i3371[4]
  i3370.uiEnabled = !!i3371[5]
  i3370.uiToolkitEnabled = !!i3371[6]
  i3370.textMeshProEnabled = !!i3371[7]
  i3370.tk2DEnabled = !!i3371[8]
  i3370.deAudioEnabled = !!i3371[9]
  i3370.deUnityExtendedEnabled = !!i3371[10]
  i3370.epoOutlineEnabled = !!i3371[11]
  return i3370
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3372 = root || request.c( 'TMPro.TMP_Settings' )
  var i3373 = data
  i3372.assetVersion = i3373[0]
  i3372.m_TextWrappingMode = i3373[1]
  i3372.m_enableKerning = !!i3373[2]
  var i3375 = i3373[3]
  var i3374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.add(i3375[i + 0]);
  }
  i3372.m_ActiveFontFeatures = i3374
  i3372.m_enableExtraPadding = !!i3373[4]
  i3372.m_enableTintAllSprites = !!i3373[5]
  i3372.m_enableParseEscapeCharacters = !!i3373[6]
  i3372.m_EnableRaycastTarget = !!i3373[7]
  i3372.m_GetFontFeaturesAtRuntime = !!i3373[8]
  i3372.m_missingGlyphCharacter = i3373[9]
  i3372.m_ClearDynamicDataOnBuild = !!i3373[10]
  i3372.m_warningsDisabled = !!i3373[11]
  request.r(i3373[12], i3373[13], 0, i3372, 'm_defaultFontAsset')
  i3372.m_defaultFontAssetPath = i3373[14]
  i3372.m_defaultFontSize = i3373[15]
  i3372.m_defaultAutoSizeMinRatio = i3373[16]
  i3372.m_defaultAutoSizeMaxRatio = i3373[17]
  i3372.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3373[18], i3373[19] )
  i3372.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3373[20], i3373[21] )
  i3372.m_autoSizeTextContainer = !!i3373[22]
  i3372.m_IsTextObjectScaleStatic = !!i3373[23]
  var i3377 = i3373[24]
  var i3376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3377.length; i += 2) {
  request.r(i3377[i + 0], i3377[i + 1], 1, i3376, '')
  }
  i3372.m_fallbackFontAssets = i3376
  i3372.m_matchMaterialPreset = !!i3373[25]
  i3372.m_HideSubTextObjects = !!i3373[26]
  request.r(i3373[27], i3373[28], 0, i3372, 'm_defaultSpriteAsset')
  i3372.m_defaultSpriteAssetPath = i3373[29]
  i3372.m_enableEmojiSupport = !!i3373[30]
  i3372.m_MissingCharacterSpriteUnicode = i3373[31]
  var i3379 = i3373[32]
  var i3378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3379.length; i += 2) {
  request.r(i3379[i + 0], i3379[i + 1], 1, i3378, '')
  }
  i3372.m_EmojiFallbackTextAssets = i3378
  i3372.m_defaultColorGradientPresetsPath = i3373[33]
  request.r(i3373[34], i3373[35], 0, i3372, 'm_defaultStyleSheet')
  i3372.m_StyleSheetsResourcePath = i3373[36]
  request.r(i3373[37], i3373[38], 0, i3372, 'm_leadingCharacters')
  request.r(i3373[39], i3373[40], 0, i3372, 'm_followingCharacters')
  i3372.m_UseModernHangulLineBreakingRules = !!i3373[41]
  return i3372
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3383 = data
  i3382.m_GlyphIndex = i3383[0]
  i3382.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3383[1], i3382.m_GlyphValueRecord)
  return i3382
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3385 = data
  i3384.m_XPlacement = i3385[0]
  i3384.m_YPlacement = i3385[1]
  i3384.m_XAdvance = i3385[2]
  i3384.m_YAdvance = i3385[3]
  return i3384
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3386 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3387 = data
  request.r(i3387[0], i3387[1], 0, i3386, 'spriteSheet')
  var i3389 = i3387[2]
  var i3388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.add(request.d('TMPro.TMP_Sprite', i3389[i + 0]));
  }
  i3386.spriteInfoList = i3388
  var i3391 = i3387[3]
  var i3390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 1, i3390, '')
  }
  i3386.fallbackSpriteAssets = i3390
  var i3393 = i3387[4]
  var i3392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.add(request.d('TMPro.TMP_SpriteCharacter', i3393[i + 0]));
  }
  i3386.m_SpriteCharacterTable = i3392
  var i3395 = i3387[5]
  var i3394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.add(request.d('TMPro.TMP_SpriteGlyph', i3395[i + 0]));
  }
  i3386.m_GlyphTable = i3394
  i3386.m_Version = i3387[6]
  i3386.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3387[7], i3386.m_FaceInfo)
  request.r(i3387[8], i3387[9], 0, i3386, 'm_Material')
  return i3386
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3398 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3399 = data
  i3398.name = i3399[0]
  i3398.hashCode = i3399[1]
  i3398.unicode = i3399[2]
  i3398.pivot = new pc.Vec2( i3399[3], i3399[4] )
  request.r(i3399[5], i3399[6], 0, i3398, 'sprite')
  i3398.id = i3399[7]
  i3398.x = i3399[8]
  i3398.y = i3399[9]
  i3398.width = i3399[10]
  i3398.height = i3399[11]
  i3398.xOffset = i3399[12]
  i3398.yOffset = i3399[13]
  i3398.xAdvance = i3399[14]
  i3398.scale = i3399[15]
  return i3398
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3404 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3405 = data
  i3404.m_Name = i3405[0]
  i3404.m_ElementType = i3405[1]
  i3404.m_Unicode = i3405[2]
  i3404.m_GlyphIndex = i3405[3]
  i3404.m_Scale = i3405[4]
  return i3404
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3408 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'sprite')
  i3408.m_Index = i3409[2]
  i3408.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3409[3], i3408.m_Metrics)
  i3408.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3409[4], i3408.m_GlyphRect)
  i3408.m_Scale = i3409[5]
  i3408.m_AtlasIndex = i3409[6]
  i3408.m_ClassDefinitionType = i3409[7]
  return i3408
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3410 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.add(request.d('TMPro.TMP_Style', i3413[i + 0]));
  }
  i3410.m_StyleList = i3412
  return i3410
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3416 = root || request.c( 'TMPro.TMP_Style' )
  var i3417 = data
  i3416.m_Name = i3417[0]
  i3416.m_HashCode = i3417[1]
  i3416.m_OpeningDefinition = i3417[2]
  i3416.m_ClosingDefinition = i3417[3]
  i3416.m_OpeningTagArray = i3417[4]
  i3416.m_ClosingTagArray = i3417[5]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3419 = data
  var i3421 = i3419[0]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3421[i + 0]) );
  }
  i3418.files = i3420
  i3418.componentToPrefabIds = i3419[1]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3425 = data
  i3424.path = i3425[0]
  request.r(i3425[1], i3425[2], 0, i3424, 'unityObject')
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3427 = data
  var i3429 = i3427[0]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3429[i + 0]) );
  }
  i3426.scriptsExecutionOrder = i3428
  var i3431 = i3427[1]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3431[i + 0]) );
  }
  i3426.sortingLayers = i3430
  var i3433 = i3427[2]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3433[i + 0]) );
  }
  i3426.cullingLayers = i3432
  i3426.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3427[3], i3426.timeSettings)
  i3426.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3427[4], i3426.physicsSettings)
  i3426.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3427[5], i3426.physics2DSettings)
  i3426.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3427[6], i3426.qualitySettings)
  i3426.enableRealtimeShadows = !!i3427[7]
  i3426.enableAutoInstancing = !!i3427[8]
  i3426.enableStaticBatching = !!i3427[9]
  i3426.enableDynamicBatching = !!i3427[10]
  i3426.usePreservativeDynamicBatching = !!i3427[11]
  i3426.lightmapEncodingQuality = i3427[12]
  i3426.desiredColorSpace = i3427[13]
  var i3435 = i3427[14]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( i3435[i + 0] );
  }
  i3426.allTags = i3434
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3439 = data
  i3438.name = i3439[0]
  i3438.value = i3439[1]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3443 = data
  i3442.id = i3443[0]
  i3442.name = i3443[1]
  i3442.value = i3443[2]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3447 = data
  i3446.id = i3447[0]
  i3446.name = i3447[1]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3449 = data
  i3448.fixedDeltaTime = i3449[0]
  i3448.maximumDeltaTime = i3449[1]
  i3448.timeScale = i3449[2]
  i3448.maximumParticleTimestep = i3449[3]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3451 = data
  i3450.gravity = new pc.Vec3( i3451[0], i3451[1], i3451[2] )
  i3450.defaultSolverIterations = i3451[3]
  i3450.bounceThreshold = i3451[4]
  i3450.autoSyncTransforms = !!i3451[5]
  i3450.autoSimulation = !!i3451[6]
  var i3453 = i3451[7]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3453[i + 0]) );
  }
  i3450.collisionMatrix = i3452
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3457 = data
  i3456.enabled = !!i3457[0]
  i3456.layerId = i3457[1]
  i3456.otherLayerId = i3457[2]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'material')
  i3458.gravity = new pc.Vec2( i3459[2], i3459[3] )
  i3458.positionIterations = i3459[4]
  i3458.velocityIterations = i3459[5]
  i3458.velocityThreshold = i3459[6]
  i3458.maxLinearCorrection = i3459[7]
  i3458.maxAngularCorrection = i3459[8]
  i3458.maxTranslationSpeed = i3459[9]
  i3458.maxRotationSpeed = i3459[10]
  i3458.baumgarteScale = i3459[11]
  i3458.baumgarteTOIScale = i3459[12]
  i3458.timeToSleep = i3459[13]
  i3458.linearSleepTolerance = i3459[14]
  i3458.angularSleepTolerance = i3459[15]
  i3458.defaultContactOffset = i3459[16]
  i3458.autoSimulation = !!i3459[17]
  i3458.queriesHitTriggers = !!i3459[18]
  i3458.queriesStartInColliders = !!i3459[19]
  i3458.callbacksOnDisable = !!i3459[20]
  i3458.reuseCollisionCallbacks = !!i3459[21]
  i3458.autoSyncTransforms = !!i3459[22]
  var i3461 = i3459[23]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3461[i + 0]) );
  }
  i3458.collisionMatrix = i3460
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3465 = data
  i3464.enabled = !!i3465[0]
  i3464.layerId = i3465[1]
  i3464.otherLayerId = i3465[2]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3467 = data
  var i3469 = i3467[0]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3469[i + 0]) );
  }
  i3466.qualityLevels = i3468
  var i3471 = i3467[1]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( i3471[i + 0] );
  }
  i3466.names = i3470
  i3466.shadows = i3467[2]
  i3466.anisotropicFiltering = i3467[3]
  i3466.antiAliasing = i3467[4]
  i3466.lodBias = i3467[5]
  i3466.shadowCascades = i3467[6]
  i3466.shadowDistance = i3467[7]
  i3466.shadowmaskMode = i3467[8]
  i3466.shadowProjection = i3467[9]
  i3466.shadowResolution = i3467[10]
  i3466.softParticles = !!i3467[11]
  i3466.softVegetation = !!i3467[12]
  i3466.activeColorSpace = i3467[13]
  i3466.desiredColorSpace = i3467[14]
  i3466.masterTextureLimit = i3467[15]
  i3466.maxQueuedFrames = i3467[16]
  i3466.particleRaycastBudget = i3467[17]
  i3466.pixelLightCount = i3467[18]
  i3466.realtimeReflectionProbes = !!i3467[19]
  i3466.shadowCascade2Split = i3467[20]
  i3466.shadowCascade4Split = new pc.Vec3( i3467[21], i3467[22], i3467[23] )
  i3466.streamingMipmapsActive = !!i3467[24]
  i3466.vSyncCount = i3467[25]
  i3466.asyncUploadBufferSize = i3467[26]
  i3466.asyncUploadTimeSlice = i3467[27]
  i3466.billboardsFaceCameraPosition = !!i3467[28]
  i3466.shadowNearPlaneOffset = i3467[29]
  i3466.streamingMipmapsMemoryBudget = i3467[30]
  i3466.maximumLODLevel = i3467[31]
  i3466.streamingMipmapsAddAllCameras = !!i3467[32]
  i3466.streamingMipmapsMaxLevelReduction = i3467[33]
  i3466.streamingMipmapsRenderersPerFrame = i3467[34]
  i3466.resolutionScalingFixedDPIFactor = i3467[35]
  i3466.streamingMipmapsMaxFileIORequests = i3467[36]
  i3466.currentQualityLevel = i3467[37]
  return i3466
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3474 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3475 = data
  i3474.m_XCoordinate = i3475[0]
  i3474.m_YCoordinate = i3475[1]
  return i3474
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3476 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3477 = data
  i3476.m_XPositionAdjustment = i3477[0]
  i3476.m_YPositionAdjustment = i3477[1]
  return i3476
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3478 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3479 = data
  i3478.xPlacement = i3479[0]
  i3478.yPlacement = i3479[1]
  i3478.xAdvance = i3479[2]
  i3478.yAdvance = i3479[3]
  return i3478
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"5":[4],"25":[4],"80":[81],"82":[4],"83":[16,4],"84":[76],"26":[16,4],"85":[86,76],"87":[76],"88":[76,89],"90":[54],"91":[61],"92":[81],"93":[94],"95":[96],"97":[34],"98":[5],"99":[4],"100":[76,4],"15":[4,16],"101":[4],"102":[16,4],"103":[76],"104":[16,4],"105":[4],"106":[107],"108":[107],"109":[107],"110":[4],"111":[4],"8":[5],"13":[16,4],"112":[4],"7":[5],"113":[4],"114":[4],"32":[4],"115":[4],"116":[4],"117":[4],"118":[4],"21":[4],"119":[4],"17":[16,4],"23":[4],"120":[4],"121":[4],"122":[4],"123":[16,4],"124":[4],"125":[34],"126":[34],"35":[34],"127":[34],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "43.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V27_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "33901";

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

Deserializers.buildID = "b1f5a03c-eafb-40af-970f-43db2d7af31f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

