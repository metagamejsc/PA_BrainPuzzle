var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4036 = root || request.c( 'UnityEngine.JointSpring' )
  var i4037 = data
  i4036.spring = i4037[0]
  i4036.damper = i4037[1]
  i4036.targetPosition = i4037[2]
  return i4036
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4038 = root || request.c( 'UnityEngine.JointMotor' )
  var i4039 = data
  i4038.m_TargetVelocity = i4039[0]
  i4038.m_Force = i4039[1]
  i4038.m_FreeSpin = i4039[2]
  return i4038
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4040 = root || request.c( 'UnityEngine.JointLimits' )
  var i4041 = data
  i4040.m_Min = i4041[0]
  i4040.m_Max = i4041[1]
  i4040.m_Bounciness = i4041[2]
  i4040.m_BounceMinVelocity = i4041[3]
  i4040.m_ContactDistance = i4041[4]
  i4040.minBounce = i4041[5]
  i4040.maxBounce = i4041[6]
  return i4040
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4042 = root || request.c( 'UnityEngine.JointDrive' )
  var i4043 = data
  i4042.m_PositionSpring = i4043[0]
  i4042.m_PositionDamper = i4043[1]
  i4042.m_MaximumForce = i4043[2]
  i4042.m_UseAcceleration = i4043[3]
  return i4042
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4044 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4045 = data
  i4044.m_Spring = i4045[0]
  i4044.m_Damper = i4045[1]
  return i4044
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4046 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4047 = data
  i4046.m_Limit = i4047[0]
  i4046.m_Bounciness = i4047[1]
  i4046.m_ContactDistance = i4047[2]
  return i4046
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4048 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4049 = data
  i4048.m_ExtremumSlip = i4049[0]
  i4048.m_ExtremumValue = i4049[1]
  i4048.m_AsymptoteSlip = i4049[2]
  i4048.m_AsymptoteValue = i4049[3]
  i4048.m_Stiffness = i4049[4]
  return i4048
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4050 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4051 = data
  i4050.m_LowerAngle = i4051[0]
  i4050.m_UpperAngle = i4051[1]
  return i4050
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4052 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4053 = data
  i4052.m_MotorSpeed = i4053[0]
  i4052.m_MaximumMotorTorque = i4053[1]
  return i4052
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4054 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4055 = data
  i4054.m_DampingRatio = i4055[0]
  i4054.m_Frequency = i4055[1]
  i4054.m_Angle = i4055[2]
  return i4054
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4056 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4057 = data
  i4056.m_LowerTranslation = i4057[0]
  i4056.m_UpperTranslation = i4057[1]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4059 = data
  i4058.name = i4059[0]
  i4058.width = i4059[1]
  i4058.height = i4059[2]
  i4058.mipmapCount = i4059[3]
  i4058.anisoLevel = i4059[4]
  i4058.filterMode = i4059[5]
  i4058.hdr = !!i4059[6]
  i4058.format = i4059[7]
  i4058.wrapMode = i4059[8]
  i4058.alphaIsTransparency = !!i4059[9]
  i4058.alphaSource = i4059[10]
  i4058.graphicsFormat = i4059[11]
  i4058.sRGBTexture = !!i4059[12]
  i4058.desiredColorSpace = i4059[13]
  i4058.wrapU = i4059[14]
  i4058.wrapV = i4059[15]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4060 = root || new pc.UnityMaterial()
  var i4061 = data
  i4060.name = i4061[0]
  request.r(i4061[1], i4061[2], 0, i4060, 'shader')
  i4060.renderQueue = i4061[3]
  i4060.enableInstancing = !!i4061[4]
  var i4063 = i4061[5]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4063[i + 0]) );
  }
  i4060.floatParameters = i4062
  var i4065 = i4061[6]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4065[i + 0]) );
  }
  i4060.colorParameters = i4064
  var i4067 = i4061[7]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4067[i + 0]) );
  }
  i4060.vectorParameters = i4066
  var i4069 = i4061[8]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4069[i + 0]) );
  }
  i4060.textureParameters = i4068
  var i4071 = i4061[9]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4071[i + 0]) );
  }
  i4060.materialFlags = i4070
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4075 = data
  i4074.name = i4075[0]
  i4074.value = i4075[1]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4079 = data
  i4078.name = i4079[0]
  i4078.value = new pc.Color(i4079[1], i4079[2], i4079[3], i4079[4])
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4083 = data
  i4082.name = i4083[0]
  i4082.value = new pc.Vec4( i4083[1], i4083[2], i4083[3], i4083[4] )
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4087 = data
  i4086.name = i4087[0]
  request.r(i4087[1], i4087[2], 0, i4086, 'value')
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4091 = data
  i4090.name = i4091[0]
  i4090.enabled = !!i4091[1]
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4093 = data
  i4092.name = i4093[0]
  i4092.index = i4093[1]
  i4092.startup = !!i4093[2]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4095 = data
  i4094.aspect = i4095[0]
  i4094.orthographic = !!i4095[1]
  i4094.orthographicSize = i4095[2]
  i4094.backgroundColor = new pc.Color(i4095[3], i4095[4], i4095[5], i4095[6])
  i4094.nearClipPlane = i4095[7]
  i4094.farClipPlane = i4095[8]
  i4094.fieldOfView = i4095[9]
  i4094.depth = i4095[10]
  i4094.clearFlags = i4095[11]
  i4094.cullingMask = i4095[12]
  i4094.rect = i4095[13]
  request.r(i4095[14], i4095[15], 0, i4094, 'targetTexture')
  i4094.usePhysicalProperties = !!i4095[16]
  i4094.focalLength = i4095[17]
  i4094.sensorSize = new pc.Vec2( i4095[18], i4095[19] )
  i4094.lensShift = new pc.Vec2( i4095[20], i4095[21] )
  i4094.gateFit = i4095[22]
  i4094.commandBufferCount = i4095[23]
  i4094.cameraType = i4095[24]
  i4094.enabled = !!i4095[25]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4097 = data
  i4096.name = i4097[0]
  i4096.tagId = i4097[1]
  i4096.enabled = !!i4097[2]
  i4096.isStatic = !!i4097[3]
  i4096.layer = i4097[4]
  return i4096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4099 = data
  i4098.pivot = new pc.Vec2( i4099[0], i4099[1] )
  i4098.anchorMin = new pc.Vec2( i4099[2], i4099[3] )
  i4098.anchorMax = new pc.Vec2( i4099[4], i4099[5] )
  i4098.sizeDelta = new pc.Vec2( i4099[6], i4099[7] )
  i4098.anchoredPosition3D = new pc.Vec3( i4099[8], i4099[9], i4099[10] )
  i4098.rotation = new pc.Quat(i4099[11], i4099[12], i4099[13], i4099[14])
  i4098.scale = new pc.Vec3( i4099[15], i4099[16], i4099[17] )
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4101 = data
  i4100.planeDistance = i4101[0]
  i4100.referencePixelsPerUnit = i4101[1]
  i4100.isFallbackOverlay = !!i4101[2]
  i4100.renderMode = i4101[3]
  i4100.renderOrder = i4101[4]
  i4100.sortingLayerName = i4101[5]
  i4100.sortingOrder = i4101[6]
  i4100.scaleFactor = i4101[7]
  request.r(i4101[8], i4101[9], 0, i4100, 'worldCamera')
  i4100.overrideSorting = !!i4101[10]
  i4100.pixelPerfect = !!i4101[11]
  i4100.targetDisplay = i4101[12]
  i4100.overridePixelPerfect = !!i4101[13]
  i4100.enabled = !!i4101[14]
  return i4100
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4102 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4103 = data
  i4102.m_UiScaleMode = i4103[0]
  i4102.m_ReferencePixelsPerUnit = i4103[1]
  i4102.m_ScaleFactor = i4103[2]
  i4102.m_ReferenceResolution = new pc.Vec2( i4103[3], i4103[4] )
  i4102.m_ScreenMatchMode = i4103[5]
  i4102.m_MatchWidthOrHeight = i4103[6]
  i4102.m_PhysicalUnit = i4103[7]
  i4102.m_FallbackScreenDPI = i4103[8]
  i4102.m_DefaultSpriteDPI = i4103[9]
  i4102.m_DynamicPixelsPerUnit = i4103[10]
  i4102.m_PresetInfoIsWorld = !!i4103[11]
  return i4102
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4104 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4105 = data
  i4104.m_IgnoreReversedGraphics = !!i4105[0]
  i4104.m_BlockingObjects = i4105[1]
  i4104.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4105[2] )
  return i4104
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i4106 = root || request.c( 'Playable.GameManager' )
  var i4107 = data
  i4106.EventCountdownEndGame = request.d('System.Action', i4107[0], i4106.EventCountdownEndGame)
  i4106._totalEvent = i4107[1]
  i4106._maxEvent = i4107[2]
  i4106._endTime = i4107[3]
  request.r(i4107[4], i4107[5], 0, i4106, '_backgroundMusic')
  request.r(i4107[6], i4107[7], 0, i4106, '_backgroundTexture')
  request.r(i4107[8], i4107[9], 0, i4106, '_btnBlock')
  request.r(i4107[10], i4107[11], 0, i4106, '_background')
  request.r(i4107[12], i4107[13], 0, i4106, '_losePanel')
  request.r(i4107[14], i4107[15], 0, i4106, '_progressFillImage')
  request.r(i4107[16], i4107[17], 0, i4106, '_progressText')
  i4106._progressTweenDuration = i4107[18]
  request.r(i4107[19], i4107[20], 0, i4106, '_timerFillImage')
  request.r(i4107[21], i4107[22], 0, i4106, '_timerText')
  i4106._timerPunchScale = i4107[23]
  return i4106
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4108 = root || request.c( 'System.Action' )
  var i4109 = data
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4111 = data
  i4110.cullTransparentMesh = !!i4111[0]
  return i4110
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4112 = root || request.c( 'UnityEngine.UI.Image' )
  var i4113 = data
  request.r(i4113[0], i4113[1], 0, i4112, 'm_Sprite')
  i4112.m_Type = i4113[2]
  i4112.m_PreserveAspect = !!i4113[3]
  i4112.m_FillCenter = !!i4113[4]
  i4112.m_FillMethod = i4113[5]
  i4112.m_FillAmount = i4113[6]
  i4112.m_FillClockwise = !!i4113[7]
  i4112.m_FillOrigin = i4113[8]
  i4112.m_UseSpriteMesh = !!i4113[9]
  i4112.m_PixelsPerUnitMultiplier = i4113[10]
  request.r(i4113[11], i4113[12], 0, i4112, 'm_Material')
  i4112.m_Maskable = !!i4113[13]
  i4112.m_Color = new pc.Color(i4113[14], i4113[15], i4113[16], i4113[17])
  i4112.m_RaycastTarget = !!i4113[18]
  i4112.m_RaycastPadding = new pc.Vec4( i4113[19], i4113[20], i4113[21], i4113[22] )
  return i4112
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4114 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4115 = data
  request.r(i4115[0], i4115[1], 0, i4114, 'm_Texture')
  i4114.m_UVRect = UnityEngine.Rect.MinMaxRect(i4115[2], i4115[3], i4115[4], i4115[5])
  request.r(i4115[6], i4115[7], 0, i4114, 'm_Material')
  i4114.m_Maskable = !!i4115[8]
  i4114.m_Color = new pc.Color(i4115[9], i4115[10], i4115[11], i4115[12])
  i4114.m_RaycastTarget = !!i4115[13]
  i4114.m_RaycastPadding = new pc.Vec4( i4115[14], i4115[15], i4115[16], i4115[17] )
  return i4114
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4116 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4117 = data
  i4116.m_hasFontAssetChanged = !!i4117[0]
  request.r(i4117[1], i4117[2], 0, i4116, 'm_baseMaterial')
  i4116.m_maskOffset = new pc.Vec4( i4117[3], i4117[4], i4117[5], i4117[6] )
  i4116.m_text = i4117[7]
  i4116.m_isRightToLeft = !!i4117[8]
  request.r(i4117[9], i4117[10], 0, i4116, 'm_fontAsset')
  request.r(i4117[11], i4117[12], 0, i4116, 'm_sharedMaterial')
  var i4119 = i4117[13]
  var i4118 = []
  for(var i = 0; i < i4119.length; i += 2) {
  request.r(i4119[i + 0], i4119[i + 1], 2, i4118, '')
  }
  i4116.m_fontSharedMaterials = i4118
  request.r(i4117[14], i4117[15], 0, i4116, 'm_fontMaterial')
  var i4121 = i4117[16]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 2) {
  request.r(i4121[i + 0], i4121[i + 1], 2, i4120, '')
  }
  i4116.m_fontMaterials = i4120
  i4116.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4117[17], i4117[18], i4117[19], i4117[20])
  i4116.m_fontColor = new pc.Color(i4117[21], i4117[22], i4117[23], i4117[24])
  i4116.m_enableVertexGradient = !!i4117[25]
  i4116.m_colorMode = i4117[26]
  i4116.m_fontColorGradient = request.d('TMPro.VertexGradient', i4117[27], i4116.m_fontColorGradient)
  request.r(i4117[28], i4117[29], 0, i4116, 'm_fontColorGradientPreset')
  request.r(i4117[30], i4117[31], 0, i4116, 'm_spriteAsset')
  i4116.m_tintAllSprites = !!i4117[32]
  request.r(i4117[33], i4117[34], 0, i4116, 'm_StyleSheet')
  i4116.m_TextStyleHashCode = i4117[35]
  i4116.m_overrideHtmlColors = !!i4117[36]
  i4116.m_faceColor = UnityEngine.Color32.ConstructColor(i4117[37], i4117[38], i4117[39], i4117[40])
  i4116.m_fontSize = i4117[41]
  i4116.m_fontSizeBase = i4117[42]
  i4116.m_fontWeight = i4117[43]
  i4116.m_enableAutoSizing = !!i4117[44]
  i4116.m_fontSizeMin = i4117[45]
  i4116.m_fontSizeMax = i4117[46]
  i4116.m_fontStyle = i4117[47]
  i4116.m_HorizontalAlignment = i4117[48]
  i4116.m_VerticalAlignment = i4117[49]
  i4116.m_textAlignment = i4117[50]
  i4116.m_characterSpacing = i4117[51]
  i4116.m_wordSpacing = i4117[52]
  i4116.m_lineSpacing = i4117[53]
  i4116.m_lineSpacingMax = i4117[54]
  i4116.m_paragraphSpacing = i4117[55]
  i4116.m_charWidthMaxAdj = i4117[56]
  i4116.m_TextWrappingMode = i4117[57]
  i4116.m_wordWrappingRatios = i4117[58]
  i4116.m_overflowMode = i4117[59]
  request.r(i4117[60], i4117[61], 0, i4116, 'm_linkedTextComponent')
  request.r(i4117[62], i4117[63], 0, i4116, 'parentLinkedComponent')
  i4116.m_enableKerning = !!i4117[64]
  var i4123 = i4117[65]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.add(i4123[i + 0]);
  }
  i4116.m_ActiveFontFeatures = i4122
  i4116.m_enableExtraPadding = !!i4117[66]
  i4116.checkPaddingRequired = !!i4117[67]
  i4116.m_isRichText = !!i4117[68]
  i4116.m_parseCtrlCharacters = !!i4117[69]
  i4116.m_isOrthographic = !!i4117[70]
  i4116.m_isCullingEnabled = !!i4117[71]
  i4116.m_horizontalMapping = i4117[72]
  i4116.m_verticalMapping = i4117[73]
  i4116.m_uvLineOffset = i4117[74]
  i4116.m_geometrySortingOrder = i4117[75]
  i4116.m_IsTextObjectScaleStatic = !!i4117[76]
  i4116.m_VertexBufferAutoSizeReduction = !!i4117[77]
  i4116.m_useMaxVisibleDescender = !!i4117[78]
  i4116.m_pageToDisplay = i4117[79]
  i4116.m_margin = new pc.Vec4( i4117[80], i4117[81], i4117[82], i4117[83] )
  i4116.m_isUsingLegacyAnimationComponent = !!i4117[84]
  i4116.m_isVolumetricText = !!i4117[85]
  request.r(i4117[86], i4117[87], 0, i4116, 'm_Material')
  i4116.m_EmojiFallbackSupport = !!i4117[88]
  i4116.m_Maskable = !!i4117[89]
  i4116.m_Color = new pc.Color(i4117[90], i4117[91], i4117[92], i4117[93])
  i4116.m_RaycastTarget = !!i4117[94]
  i4116.m_RaycastPadding = new pc.Vec4( i4117[95], i4117[96], i4117[97], i4117[98] )
  return i4116
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4126 = root || request.c( 'TMPro.VertexGradient' )
  var i4127 = data
  i4126.topLeft = new pc.Color(i4127[0], i4127[1], i4127[2], i4127[3])
  i4126.topRight = new pc.Color(i4127[4], i4127[5], i4127[6], i4127[7])
  i4126.bottomLeft = new pc.Color(i4127[8], i4127[9], i4127[10], i4127[11])
  i4126.bottomRight = new pc.Color(i4127[12], i4127[13], i4127[14], i4127[15])
  return i4126
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4130 = root || request.c( 'UnityEngine.UI.Button' )
  var i4131 = data
  i4130.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4131[0], i4130.m_OnClick)
  i4130.m_Navigation = request.d('UnityEngine.UI.Navigation', i4131[1], i4130.m_Navigation)
  i4130.m_Transition = i4131[2]
  i4130.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4131[3], i4130.m_Colors)
  i4130.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4131[4], i4130.m_SpriteState)
  i4130.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4131[5], i4130.m_AnimationTriggers)
  i4130.m_Interactable = !!i4131[6]
  request.r(i4131[7], i4131[8], 0, i4130, 'm_TargetGraphic')
  return i4130
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4132 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4133 = data
  i4132.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4133[0], i4132.m_PersistentCalls)
  return i4132
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4134 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4135 = data
  var i4137 = i4135[0]
  var i4136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.add(request.d('UnityEngine.Events.PersistentCall', i4137[i + 0]));
  }
  i4134.m_Calls = i4136
  return i4134
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4140 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4141 = data
  request.r(i4141[0], i4141[1], 0, i4140, 'm_Target')
  i4140.m_TargetAssemblyTypeName = i4141[2]
  i4140.m_MethodName = i4141[3]
  i4140.m_Mode = i4141[4]
  i4140.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4141[5], i4140.m_Arguments)
  i4140.m_CallState = i4141[6]
  return i4140
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4142 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4143 = data
  request.r(i4143[0], i4143[1], 0, i4142, 'm_ObjectArgument')
  i4142.m_ObjectArgumentAssemblyTypeName = i4143[2]
  i4142.m_IntArgument = i4143[3]
  i4142.m_FloatArgument = i4143[4]
  i4142.m_StringArgument = i4143[5]
  i4142.m_BoolArgument = !!i4143[6]
  return i4142
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4144 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4145 = data
  i4144.m_Mode = i4145[0]
  i4144.m_WrapAround = !!i4145[1]
  request.r(i4145[2], i4145[3], 0, i4144, 'm_SelectOnUp')
  request.r(i4145[4], i4145[5], 0, i4144, 'm_SelectOnDown')
  request.r(i4145[6], i4145[7], 0, i4144, 'm_SelectOnLeft')
  request.r(i4145[8], i4145[9], 0, i4144, 'm_SelectOnRight')
  return i4144
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4146 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4147 = data
  i4146.m_NormalColor = new pc.Color(i4147[0], i4147[1], i4147[2], i4147[3])
  i4146.m_HighlightedColor = new pc.Color(i4147[4], i4147[5], i4147[6], i4147[7])
  i4146.m_PressedColor = new pc.Color(i4147[8], i4147[9], i4147[10], i4147[11])
  i4146.m_SelectedColor = new pc.Color(i4147[12], i4147[13], i4147[14], i4147[15])
  i4146.m_DisabledColor = new pc.Color(i4147[16], i4147[17], i4147[18], i4147[19])
  i4146.m_ColorMultiplier = i4147[20]
  i4146.m_FadeDuration = i4147[21]
  return i4146
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4148 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4149 = data
  request.r(i4149[0], i4149[1], 0, i4148, 'm_HighlightedSprite')
  request.r(i4149[2], i4149[3], 0, i4148, 'm_PressedSprite')
  request.r(i4149[4], i4149[5], 0, i4148, 'm_SelectedSprite')
  request.r(i4149[6], i4149[7], 0, i4148, 'm_DisabledSprite')
  return i4148
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4150 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4151 = data
  i4150.m_NormalTrigger = i4151[0]
  i4150.m_HighlightedTrigger = i4151[1]
  i4150.m_PressedTrigger = i4151[2]
  i4150.m_SelectedTrigger = i4151[3]
  i4150.m_DisabledTrigger = i4151[4]
  return i4150
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4152 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4153 = data
  i4152.m_ShowMaskGraphic = !!i4153[0]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4155 = data
  request.r(i4155[0], i4155[1], 0, i4154, 'clip')
  request.r(i4155[2], i4155[3], 0, i4154, 'outputAudioMixerGroup')
  i4154.playOnAwake = !!i4155[4]
  i4154.loop = !!i4155[5]
  i4154.time = i4155[6]
  i4154.volume = i4155[7]
  i4154.pitch = i4155[8]
  i4154.enabled = !!i4155[9]
  return i4154
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i4156 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i4157 = data
  i4156.m_Padding = new pc.Vec4( i4157[0], i4157[1], i4157[2], i4157[3] )
  i4156.m_Softness = new pc.Vec2( i4157[4], i4157[5] )
  return i4156
}

Deserializers["GameController"] = function (request, data, root) {
  var i4158 = root || request.c( 'GameController' )
  var i4159 = data
  request.r(i4159[0], i4159[1], 0, i4158, '_tutorialHand')
  request.r(i4159[2], i4159[3], 0, i4158, '_tutorialInPlace')
  request.r(i4159[4], i4159[5], 0, i4158, '_tutorialFrom')
  request.r(i4159[6], i4159[7], 0, i4158, '_tutorialTo')
  i4158._tutorialScaleDuration = i4159[8]
  i4158._tutorialMoveDuration = i4159[9]
  i4158._tutorialStartDelay = i4159[10]
  return i4158
}

Deserializers["Item"] = function (request, data, root) {
  var i4160 = root || request.c( 'Item' )
  var i4161 = data
  var i4163 = i4161[0]
  var i4162 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.add(request.d('Item+ItemData', i4163[i + 0]));
  }
  i4160._data = i4162
  i4160._dragSortingOrder = i4161[1]
  return i4160
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i4166 = root || request.c( 'Item+ItemData' )
  var i4167 = data
  i4166.id = i4167[0]
  i4166.stateChange = request.d('Item+GirlStateChange', i4167[1], i4166.stateChange)
  i4166.animationStateTiming = i4167[2]
  i4166.result = i4167[3]
  return i4166
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i4168 = root || request.c( 'Item+GirlStateChange' )
  var i4169 = data
  i4168.changeBodyShape = !!i4169[0]
  i4168.bodyShape = i4169[1]
  i4168.changeOutfit = !!i4169[2]
  i4168.outfit = i4169[3]
  i4168.changeRestraint = !!i4169[4]
  i4168.restraint = i4169[5]
  return i4168
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4170 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4171 = data
  request.r(i4171[0], i4171[1], 0, i4170, 'skeletonDataAsset')
  request.r(i4171[2], i4171[3], 0, i4170, 'additiveMaterial')
  request.r(i4171[4], i4171[5], 0, i4170, 'multiplyMaterial')
  request.r(i4171[6], i4171[7], 0, i4170, 'screenMaterial')
  i4170.initialSkinName = i4171[8]
  i4170.initialFlipX = !!i4171[9]
  i4170.initialFlipY = !!i4171[10]
  i4170.startingAnimation = i4171[11]
  i4170.startingLoop = !!i4171[12]
  i4170.timeScale = i4171[13]
  i4170.freeze = !!i4171[14]
  i4170.layoutScaleMode = i4171[15]
  i4170.updateWhenInvisible = i4171[16]
  i4170.allowMultipleCanvasRenderers = !!i4171[17]
  var i4173 = i4171[18]
  var i4172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4173.length; i += 2) {
  request.r(i4173[i + 0], i4173[i + 1], 1, i4172, '')
  }
  i4170.canvasRenderers = i4172
  i4170.enableSeparatorSlots = !!i4171[19]
  i4170.updateSeparatorPartLocation = !!i4171[20]
  i4170.updateSeparatorPartScale = !!i4171[21]
  i4170.disableMeshAssignmentOnOverride = !!i4171[22]
  i4170.referenceSize = new pc.Vec2( i4171[23], i4171[24] )
  i4170.referenceScale = i4171[25]
  i4170.rectTransformSize = new pc.Vec2( i4171[26], i4171[27] )
  i4170.editReferenceRect = !!i4171[28]
  var i4175 = i4171[29]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( i4175[i + 0] );
  }
  i4170.separatorSlotNames = i4174
  var i4177 = i4171[30]
  var i4176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4177.length; i += 2) {
  request.r(i4177[i + 0], i4177[i + 1], 1, i4176, '')
  }
  i4170.separatorParts = i4176
  i4170.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4171[31], i4170.meshGenerator)
  i4170.updateTiming = i4171[32]
  i4170.unscaledTime = !!i4171[33]
  request.r(i4171[34], i4171[35], 0, i4170, 'm_Material')
  i4170.m_Maskable = !!i4171[36]
  i4170.m_Color = new pc.Color(i4171[37], i4171[38], i4171[39], i4171[40])
  i4170.m_RaycastTarget = !!i4171[41]
  i4170.m_RaycastPadding = new pc.Vec4( i4171[42], i4171[43], i4171[44], i4171[45] )
  return i4170
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4184 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4185 = data
  i4184.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4185[0], i4184.settings)
  return i4184
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4186 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4187 = data
  i4186.useClipping = !!i4187[0]
  i4186.zSpacing = i4187[1]
  i4186.pmaVertexColors = !!i4187[2]
  i4186.tintBlack = !!i4187[3]
  i4186.canvasGroupTintBlack = !!i4187[4]
  i4186.calculateTangents = !!i4187[5]
  i4186.addNormals = !!i4187[6]
  i4186.immutableTriangles = !!i4187[7]
  return i4186
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i4188 = root || request.c( 'Playable.Door' )
  var i4189 = data
  request.r(i4189[0], i4189[1], 0, i4188, '_image')
  request.r(i4189[2], i4189[3], 0, i4188, '_open')
  request.r(i4189[4], i4189[5], 0, i4188, '_close')
  return i4188
}

Deserializers["Girl"] = function (request, data, root) {
  var i4190 = root || request.c( 'Girl' )
  var i4191 = data
  i4190._enableDebugLogs = !!i4191[0]
  i4190._status = request.d('GirlStatus', i4191[1], i4190._status)
  var i4193 = i4191[2]
  var i4192 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.add(request.d('Girl+BodyShapeSkins', i4193[i + 0]));
  }
  i4190._bodyShapeSkins = i4192
  var i4195 = i4191[3]
  var i4194 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.add(request.d('Girl+OutfitSkins', i4195[i + 0]));
  }
  i4190._outfitSkins = i4194
  var i4197 = i4191[4]
  var i4196 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.add(request.d('Girl+RestraintSkins', i4197[i + 0]));
  }
  i4190._restraintSkins = i4196
  request.r(i4191[5], i4191[6], 0, i4190, '_skeletonGraphic')
  var i4199 = i4191[7]
  var i4198 = []
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.push( i4199[i + 0] );
  }
  i4190._defaultSkins = i4198
  i4190._defaultAnimation = request.d('Target+GirlAnimation', i4191[8], i4190._defaultAnimation)
  var i4201 = i4191[9]
  var i4200 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.add(request.d('Target+GirlAnimation', i4201[i + 0]));
  }
  i4190._removeGlassesAnimations = i4200
  i4190._endGameDelay = i4191[10]
  i4190._boy1 = request.d('Girl+BoyAnimationData', i4191[11], i4190._boy1)
  i4190._boy2 = request.d('Girl+BoyAnimationData', i4191[12], i4190._boy2)
  return i4190
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i4202 = root || request.c( 'GirlStatus' )
  var i4203 = data
  i4202.bodyShape = i4203[0]
  i4202.outfit = i4203[1]
  i4202.restraint = i4203[2]
  return i4202
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i4206 = root || request.c( 'Girl+BodyShapeSkins' )
  var i4207 = data
  i4206.bodyShape = i4207[0]
  var i4209 = i4207[1]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.push( i4209[i + 0] );
  }
  i4206.skins = i4208
  return i4206
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i4212 = root || request.c( 'Girl+OutfitSkins' )
  var i4213 = data
  i4212.outfit = i4213[0]
  var i4215 = i4213[1]
  var i4214 = []
  for(var i = 0; i < i4215.length; i += 1) {
    i4214.push( i4215[i + 0] );
  }
  i4212.skins = i4214
  return i4212
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i4218 = root || request.c( 'Girl+RestraintSkins' )
  var i4219 = data
  i4218.restraint = i4219[0]
  var i4221 = i4219[1]
  var i4220 = []
  for(var i = 0; i < i4221.length; i += 1) {
    i4220.push( i4221[i + 0] );
  }
  i4218.skins = i4220
  return i4218
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i4222 = root || request.c( 'Target+GirlAnimation' )
  var i4223 = data
  i4222.animationName = i4223[0]
  i4222.loop = !!i4223[1]
  return i4222
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i4226 = root || request.c( 'Girl+BoyAnimationData' )
  var i4227 = data
  request.r(i4227[0], i4227[1], 0, i4226, 'skeletonGraphic')
  i4226.idleAnimation = i4227[2]
  i4226.winAnimation = i4227[3]
  i4226.loseAnimation = i4227[4]
  return i4226
}

Deserializers["Target"] = function (request, data, root) {
  var i4228 = root || request.c( 'Target' )
  var i4229 = data
  i4228._part = i4229[0]
  request.r(i4229[1], i4229[2], 0, i4228, '_girl')
  request.r(i4229[3], i4229[4], 0, i4228, '_skeletonGraphic')
  var i4231 = i4229[5]
  var i4230 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.add(request.d('Target+ItemReaction', i4231[i + 0]));
  }
  i4228._itemReactions = i4230
  return i4228
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i4234 = root || request.c( 'Target+ItemReaction' )
  var i4235 = data
  i4234.itemId = i4235[0]
  var i4237 = i4235[1]
  var i4236 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.add(request.d('Target+AnimationRule', i4237[i + 0]));
  }
  i4234.animationRules = i4236
  var i4239 = i4235[2]
  var i4238 = []
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.push( i4239[i + 0] );
  }
  i4234.skinAdded = i4238
  var i4241 = i4235[3]
  var i4240 = []
  for(var i = 0; i < i4241.length; i += 1) {
    i4240.push( i4241[i + 0] );
  }
  i4234.skinRemoved = i4240
  request.r(i4235[4], i4235[5], 0, i4234, 'audioClip')
  return i4234
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i4244 = root || request.c( 'Target+AnimationRule' )
  var i4245 = data
  i4244.checkBodyShape = !!i4245[0]
  i4244.bodyShape = i4245[1]
  i4244.checkOutfit = !!i4245[2]
  i4244.outfit = i4245[3]
  i4244.checkRestraint = !!i4245[4]
  i4244.restraint = i4245[5]
  var i4247 = i4245[6]
  var i4246 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.add(request.d('Target+GirlAnimation', i4247[i + 0]));
  }
  i4244.animations = i4246
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4249 = data
  i4248.m_Alpha = i4249[0]
  i4248.m_Interactable = !!i4249[1]
  i4248.m_BlocksRaycasts = !!i4249[2]
  i4248.m_IgnoreParentGroups = !!i4249[3]
  i4248.enabled = !!i4249[4]
  return i4248
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4250 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4251 = data
  i4250.m_Spacing = i4251[0]
  i4250.m_ChildForceExpandWidth = !!i4251[1]
  i4250.m_ChildForceExpandHeight = !!i4251[2]
  i4250.m_ChildControlWidth = !!i4251[3]
  i4250.m_ChildControlHeight = !!i4251[4]
  i4250.m_ChildScaleWidth = !!i4251[5]
  i4250.m_ChildScaleHeight = !!i4251[6]
  i4250.m_ReverseArrangement = !!i4251[7]
  i4250.m_Padding = UnityEngine.RectOffset.FromPaddings(i4251[8], i4251[9], i4251[10], i4251[11])
  i4250.m_ChildAlignment = i4251[12]
  return i4250
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i4252 = root || request.c( 'Playable.AudioManager' )
  var i4253 = data
  var i4255 = i4253[0]
  var i4254 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.add(request.d('Playable.SoundData', i4255[i + 0]));
  }
  i4252._sounds = i4254
  request.r(i4253[1], i4253[2], 0, i4252, '_audioMusic')
  request.r(i4253[3], i4253[4], 0, i4252, '_audioSound')
  return i4252
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i4258 = root || request.c( 'Playable.SoundData' )
  var i4259 = data
  i4258.Type = i4259[0]
  request.r(i4259[1], i4259[2], 0, i4258, 'Clip')
  return i4258
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4260 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4261 = data
  request.r(i4261[0], i4261[1], 0, i4260, 'm_FirstSelected')
  i4260.m_sendNavigationEvents = !!i4261[2]
  i4260.m_DragThreshold = i4261[3]
  return i4260
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4262 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4263 = data
  i4262.m_HorizontalAxis = i4263[0]
  i4262.m_VerticalAxis = i4263[1]
  i4262.m_SubmitButton = i4263[2]
  i4262.m_CancelButton = i4263[3]
  i4262.m_InputActionsPerSecond = i4263[4]
  i4262.m_RepeatDelay = i4263[5]
  i4262.m_ForceModuleActive = !!i4263[6]
  i4262.m_SendPointerHoverToParent = !!i4263[7]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4265 = data
  i4264.ambientIntensity = i4265[0]
  i4264.reflectionIntensity = i4265[1]
  i4264.ambientMode = i4265[2]
  i4264.ambientLight = new pc.Color(i4265[3], i4265[4], i4265[5], i4265[6])
  i4264.ambientSkyColor = new pc.Color(i4265[7], i4265[8], i4265[9], i4265[10])
  i4264.ambientGroundColor = new pc.Color(i4265[11], i4265[12], i4265[13], i4265[14])
  i4264.ambientEquatorColor = new pc.Color(i4265[15], i4265[16], i4265[17], i4265[18])
  i4264.fogColor = new pc.Color(i4265[19], i4265[20], i4265[21], i4265[22])
  i4264.fogEndDistance = i4265[23]
  i4264.fogStartDistance = i4265[24]
  i4264.fogDensity = i4265[25]
  i4264.fog = !!i4265[26]
  request.r(i4265[27], i4265[28], 0, i4264, 'skybox')
  i4264.fogMode = i4265[29]
  var i4267 = i4265[30]
  var i4266 = []
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4267[i + 0]) );
  }
  i4264.lightmaps = i4266
  i4264.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4265[31], i4264.lightProbes)
  i4264.lightmapsMode = i4265[32]
  i4264.mixedBakeMode = i4265[33]
  i4264.environmentLightingMode = i4265[34]
  i4264.ambientProbe = new pc.SphericalHarmonicsL2(i4265[35])
  request.r(i4265[36], i4265[37], 0, i4264, 'customReflection')
  request.r(i4265[38], i4265[39], 0, i4264, 'defaultReflection')
  i4264.defaultReflectionMode = i4265[40]
  i4264.defaultReflectionResolution = i4265[41]
  i4264.sunLightObjectId = i4265[42]
  i4264.pixelLightCount = i4265[43]
  i4264.defaultReflectionHDR = !!i4265[44]
  i4264.hasLightDataAsset = !!i4265[45]
  i4264.hasManualGenerate = !!i4265[46]
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4271 = data
  request.r(i4271[0], i4271[1], 0, i4270, 'lightmapColor')
  request.r(i4271[2], i4271[3], 0, i4270, 'lightmapDirection')
  request.r(i4271[4], i4271[5], 0, i4270, 'shadowMask')
  return i4270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4272 = root || new UnityEngine.LightProbes()
  var i4273 = data
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4281 = data
  var i4283 = i4281[0]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4283.length; i += 1) {
    i4282.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4283[i + 0]));
  }
  i4280.ShaderCompilationErrors = i4282
  i4280.name = i4281[1]
  i4280.guid = i4281[2]
  var i4285 = i4281[3]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.push( i4285[i + 0] );
  }
  i4280.shaderDefinedKeywords = i4284
  var i4287 = i4281[4]
  var i4286 = []
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4287[i + 0]) );
  }
  i4280.passes = i4286
  var i4289 = i4281[5]
  var i4288 = []
  for(var i = 0; i < i4289.length; i += 1) {
    i4288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4289[i + 0]) );
  }
  i4280.usePasses = i4288
  var i4291 = i4281[6]
  var i4290 = []
  for(var i = 0; i < i4291.length; i += 1) {
    i4290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4291[i + 0]) );
  }
  i4280.defaultParameterValues = i4290
  request.r(i4281[7], i4281[8], 0, i4280, 'unityFallbackShader')
  i4280.readDepth = !!i4281[9]
  i4280.hasDepthOnlyPass = !!i4281[10]
  i4280.isCreatedByShaderGraph = !!i4281[11]
  i4280.disableBatching = !!i4281[12]
  i4280.compiled = !!i4281[13]
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4295 = data
  i4294.shaderName = i4295[0]
  i4294.errorMessage = i4295[1]
  return i4294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4298 = root || new pc.UnityShaderPass()
  var i4299 = data
  i4298.id = i4299[0]
  i4298.subShaderIndex = i4299[1]
  i4298.name = i4299[2]
  i4298.passType = i4299[3]
  i4298.grabPassTextureName = i4299[4]
  i4298.usePass = !!i4299[5]
  i4298.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[6], i4298.zTest)
  i4298.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[7], i4298.zWrite)
  i4298.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[8], i4298.culling)
  i4298.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4299[9], i4298.blending)
  i4298.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4299[10], i4298.alphaBlending)
  i4298.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[11], i4298.colorWriteMask)
  i4298.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[12], i4298.offsetUnits)
  i4298.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[13], i4298.offsetFactor)
  i4298.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[14], i4298.stencilRef)
  i4298.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[15], i4298.stencilReadMask)
  i4298.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4299[16], i4298.stencilWriteMask)
  i4298.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4299[17], i4298.stencilOp)
  i4298.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4299[18], i4298.stencilOpFront)
  i4298.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4299[19], i4298.stencilOpBack)
  var i4301 = i4299[20]
  var i4300 = []
  for(var i = 0; i < i4301.length; i += 1) {
    i4300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4301[i + 0]) );
  }
  i4298.tags = i4300
  var i4303 = i4299[21]
  var i4302 = []
  for(var i = 0; i < i4303.length; i += 1) {
    i4302.push( i4303[i + 0] );
  }
  i4298.passDefinedKeywords = i4302
  var i4305 = i4299[22]
  var i4304 = []
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4305[i + 0]) );
  }
  i4298.passDefinedKeywordGroups = i4304
  var i4307 = i4299[23]
  var i4306 = []
  for(var i = 0; i < i4307.length; i += 1) {
    i4306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4307[i + 0]) );
  }
  i4298.variants = i4306
  var i4309 = i4299[24]
  var i4308 = []
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4309[i + 0]) );
  }
  i4298.excludedVariants = i4308
  i4298.hasDepthReader = !!i4299[25]
  return i4298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4311 = data
  i4310.val = i4311[0]
  i4310.name = i4311[1]
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4313 = data
  i4312.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4313[0], i4312.src)
  i4312.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4313[1], i4312.dst)
  i4312.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4313[2], i4312.op)
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4315 = data
  i4314.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4315[0], i4314.pass)
  i4314.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4315[1], i4314.fail)
  i4314.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4315[2], i4314.zFail)
  i4314.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4315[3], i4314.comp)
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4319 = data
  i4318.name = i4319[0]
  i4318.value = i4319[1]
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4323 = data
  var i4325 = i4323[0]
  var i4324 = []
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.push( i4325[i + 0] );
  }
  i4322.keywords = i4324
  i4322.hasDiscard = !!i4323[1]
  return i4322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4329 = data
  i4328.passId = i4329[0]
  i4328.subShaderIndex = i4329[1]
  var i4331 = i4329[2]
  var i4330 = []
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.push( i4331[i + 0] );
  }
  i4328.keywords = i4330
  i4328.vertexProgram = i4329[3]
  i4328.fragmentProgram = i4329[4]
  i4328.exportedForWebGl2 = !!i4329[5]
  i4328.readDepth = !!i4329[6]
  return i4328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4335 = data
  request.r(i4335[0], i4335[1], 0, i4334, 'shader')
  i4334.pass = i4335[2]
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4339 = data
  i4338.name = i4339[0]
  i4338.type = i4339[1]
  i4338.value = new pc.Vec4( i4339[2], i4339[3], i4339[4], i4339[5] )
  i4338.textureValue = i4339[6]
  i4338.shaderPropertyFlag = i4339[7]
  return i4338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4341 = data
  i4340.name = i4341[0]
  request.r(i4341[1], i4341[2], 0, i4340, 'texture')
  i4340.aabb = i4341[3]
  i4340.vertices = i4341[4]
  i4340.triangles = i4341[5]
  i4340.textureRect = UnityEngine.Rect.MinMaxRect(i4341[6], i4341[7], i4341[8], i4341[9])
  i4340.packedRect = UnityEngine.Rect.MinMaxRect(i4341[10], i4341[11], i4341[12], i4341[13])
  i4340.border = new pc.Vec4( i4341[14], i4341[15], i4341[16], i4341[17] )
  i4340.transparency = i4341[18]
  i4340.bounds = i4341[19]
  i4340.pixelsPerUnit = i4341[20]
  i4340.textureWidth = i4341[21]
  i4340.textureHeight = i4341[22]
  i4340.nativeSize = new pc.Vec2( i4341[23], i4341[24] )
  i4340.pivot = new pc.Vec2( i4341[25], i4341[26] )
  i4340.textureRectOffset = new pc.Vec2( i4341[27], i4341[28] )
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4343 = data
  i4342.name = i4343[0]
  return i4342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4345 = data
  i4344.name = i4345[0]
  i4344.ascent = i4345[1]
  i4344.originalLineHeight = i4345[2]
  i4344.fontSize = i4345[3]
  var i4347 = i4345[4]
  var i4346 = []
  for(var i = 0; i < i4347.length; i += 1) {
    i4346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4347[i + 0]) );
  }
  i4344.characterInfo = i4346
  request.r(i4345[5], i4345[6], 0, i4344, 'texture')
  i4344.originalFontSize = i4345[7]
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4351 = data
  i4350.index = i4351[0]
  i4350.advance = i4351[1]
  i4350.bearing = i4351[2]
  i4350.glyphWidth = i4351[3]
  i4350.glyphHeight = i4351[4]
  i4350.minX = i4351[5]
  i4350.maxX = i4351[6]
  i4350.minY = i4351[7]
  i4350.maxY = i4351[8]
  i4350.uvBottomLeftX = i4351[9]
  i4350.uvBottomLeftY = i4351[10]
  i4350.uvBottomRightX = i4351[11]
  i4350.uvBottomRightY = i4351[12]
  i4350.uvTopLeftX = i4351[13]
  i4350.uvTopLeftY = i4351[14]
  i4350.uvTopRightX = i4351[15]
  i4350.uvTopRightY = i4351[16]
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4353 = data
  i4352.name = i4353[0]
  i4352.bytes64 = i4353[1]
  i4352.data = i4353[2]
  return i4352
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4354 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4355 = data
  i4354.normalStyle = i4355[0]
  i4354.normalSpacingOffset = i4355[1]
  i4354.boldStyle = i4355[2]
  i4354.boldSpacing = i4355[3]
  i4354.italicStyle = i4355[4]
  i4354.tabSize = i4355[5]
  request.r(i4355[6], i4355[7], 0, i4354, 'atlas')
  i4354.m_SourceFontFileGUID = i4355[8]
  i4354.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4355[9], i4354.m_CreationSettings)
  request.r(i4355[10], i4355[11], 0, i4354, 'm_SourceFontFile')
  i4354.m_SourceFontFilePath = i4355[12]
  i4354.m_AtlasPopulationMode = i4355[13]
  i4354.InternalDynamicOS = !!i4355[14]
  var i4357 = i4355[15]
  var i4356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4357.length; i += 1) {
    i4356.add(request.d('UnityEngine.TextCore.Glyph', i4357[i + 0]));
  }
  i4354.m_GlyphTable = i4356
  var i4359 = i4355[16]
  var i4358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4359.length; i += 1) {
    i4358.add(request.d('TMPro.TMP_Character', i4359[i + 0]));
  }
  i4354.m_CharacterTable = i4358
  var i4361 = i4355[17]
  var i4360 = []
  for(var i = 0; i < i4361.length; i += 2) {
  request.r(i4361[i + 0], i4361[i + 1], 2, i4360, '')
  }
  i4354.m_AtlasTextures = i4360
  i4354.m_AtlasTextureIndex = i4355[18]
  i4354.m_IsMultiAtlasTexturesEnabled = !!i4355[19]
  i4354.m_GetFontFeatures = !!i4355[20]
  i4354.m_ClearDynamicDataOnBuild = !!i4355[21]
  i4354.m_AtlasWidth = i4355[22]
  i4354.m_AtlasHeight = i4355[23]
  i4354.m_AtlasPadding = i4355[24]
  i4354.m_AtlasRenderMode = i4355[25]
  var i4363 = i4355[26]
  var i4362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4363.length; i += 1) {
    i4362.add(request.d('UnityEngine.TextCore.GlyphRect', i4363[i + 0]));
  }
  i4354.m_UsedGlyphRects = i4362
  var i4365 = i4355[27]
  var i4364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4365.length; i += 1) {
    i4364.add(request.d('UnityEngine.TextCore.GlyphRect', i4365[i + 0]));
  }
  i4354.m_FreeGlyphRects = i4364
  i4354.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4355[28], i4354.m_FontFeatureTable)
  i4354.m_ShouldReimportFontFeatures = !!i4355[29]
  var i4367 = i4355[30]
  var i4366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4367.length; i += 2) {
  request.r(i4367[i + 0], i4367[i + 1], 1, i4366, '')
  }
  i4354.m_FallbackFontAssetTable = i4366
  var i4369 = i4355[31]
  var i4368 = []
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.push( request.d('TMPro.TMP_FontWeightPair', i4369[i + 0]) );
  }
  i4354.m_FontWeightTable = i4368
  var i4371 = i4355[32]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( request.d('TMPro.TMP_FontWeightPair', i4371[i + 0]) );
  }
  i4354.fontWeights = i4370
  i4354.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4355[33], i4354.m_fontInfo)
  var i4373 = i4355[34]
  var i4372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.add(request.d('TMPro.TMP_Glyph', i4373[i + 0]));
  }
  i4354.m_glyphInfoList = i4372
  i4354.m_KerningTable = request.d('TMPro.KerningTable', i4355[35], i4354.m_KerningTable)
  var i4375 = i4355[36]
  var i4374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4375.length; i += 2) {
  request.r(i4375[i + 0], i4375[i + 1], 1, i4374, '')
  }
  i4354.fallbackFontAssets = i4374
  i4354.m_Version = i4355[37]
  i4354.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4355[38], i4354.m_FaceInfo)
  request.r(i4355[39], i4355[40], 0, i4354, 'm_Material')
  return i4354
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4376 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4377 = data
  i4376.sourceFontFileName = i4377[0]
  i4376.sourceFontFileGUID = i4377[1]
  i4376.faceIndex = i4377[2]
  i4376.pointSizeSamplingMode = i4377[3]
  i4376.pointSize = i4377[4]
  i4376.padding = i4377[5]
  i4376.paddingMode = i4377[6]
  i4376.packingMode = i4377[7]
  i4376.atlasWidth = i4377[8]
  i4376.atlasHeight = i4377[9]
  i4376.characterSetSelectionMode = i4377[10]
  i4376.characterSequence = i4377[11]
  i4376.referencedFontAssetGUID = i4377[12]
  i4376.referencedTextAssetGUID = i4377[13]
  i4376.fontStyle = i4377[14]
  i4376.fontStyleModifier = i4377[15]
  i4376.renderMode = i4377[16]
  i4376.includeFontFeatures = !!i4377[17]
  return i4376
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4380 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4381 = data
  i4380.m_Index = i4381[0]
  i4380.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4381[1], i4380.m_Metrics)
  i4380.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4381[2], i4380.m_GlyphRect)
  i4380.m_Scale = i4381[3]
  i4380.m_AtlasIndex = i4381[4]
  i4380.m_ClassDefinitionType = i4381[5]
  return i4380
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4382 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4383 = data
  i4382.m_Width = i4383[0]
  i4382.m_Height = i4383[1]
  i4382.m_HorizontalBearingX = i4383[2]
  i4382.m_HorizontalBearingY = i4383[3]
  i4382.m_HorizontalAdvance = i4383[4]
  return i4382
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4384 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4385 = data
  i4384.m_X = i4385[0]
  i4384.m_Y = i4385[1]
  i4384.m_Width = i4385[2]
  i4384.m_Height = i4385[3]
  return i4384
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4388 = root || request.c( 'TMPro.TMP_Character' )
  var i4389 = data
  i4388.m_ElementType = i4389[0]
  i4388.m_Unicode = i4389[1]
  i4388.m_GlyphIndex = i4389[2]
  i4388.m_Scale = i4389[3]
  return i4388
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4394 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4395 = data
  var i4397 = i4395[0]
  var i4396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4397.length; i += 1) {
    i4396.add(request.d('TMPro.MultipleSubstitutionRecord', i4397[i + 0]));
  }
  i4394.m_MultipleSubstitutionRecords = i4396
  var i4399 = i4395[1]
  var i4398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4399.length; i += 1) {
    i4398.add(request.d('TMPro.LigatureSubstitutionRecord', i4399[i + 0]));
  }
  i4394.m_LigatureSubstitutionRecords = i4398
  var i4401 = i4395[2]
  var i4400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4401[i + 0]));
  }
  i4394.m_GlyphPairAdjustmentRecords = i4400
  var i4403 = i4395[3]
  var i4402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4403.length; i += 1) {
    i4402.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4403[i + 0]));
  }
  i4394.m_MarkToBaseAdjustmentRecords = i4402
  var i4405 = i4395[4]
  var i4404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4405.length; i += 1) {
    i4404.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4405[i + 0]));
  }
  i4394.m_MarkToMarkAdjustmentRecords = i4404
  return i4394
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4408 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4409 = data
  i4408.m_TargetGlyphID = i4409[0]
  i4408.m_SubstituteGlyphIDs = i4409[1]
  return i4408
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4412 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4413 = data
  i4412.m_ComponentGlyphIDs = i4413[0]
  i4412.m_LigatureGlyphID = i4413[1]
  return i4412
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4416 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4417 = data
  i4416.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4417[0], i4416.m_FirstAdjustmentRecord)
  i4416.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4417[1], i4416.m_SecondAdjustmentRecord)
  i4416.m_FeatureLookupFlags = i4417[2]
  return i4416
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4420 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4421 = data
  i4420.m_BaseGlyphID = i4421[0]
  i4420.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4421[1], i4420.m_BaseGlyphAnchorPoint)
  i4420.m_MarkGlyphID = i4421[2]
  i4420.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4421[3], i4420.m_MarkPositionAdjustment)
  return i4420
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4424 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4425 = data
  i4424.m_BaseMarkGlyphID = i4425[0]
  i4424.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4425[1], i4424.m_BaseMarkGlyphAnchorPoint)
  i4424.m_CombiningMarkGlyphID = i4425[2]
  i4424.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4425[3], i4424.m_CombiningMarkPositionAdjustment)
  return i4424
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4430 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4431 = data
  request.r(i4431[0], i4431[1], 0, i4430, 'regularTypeface')
  request.r(i4431[2], i4431[3], 0, i4430, 'italicTypeface')
  return i4430
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4432 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4433 = data
  i4432.Name = i4433[0]
  i4432.PointSize = i4433[1]
  i4432.Scale = i4433[2]
  i4432.CharacterCount = i4433[3]
  i4432.LineHeight = i4433[4]
  i4432.Baseline = i4433[5]
  i4432.Ascender = i4433[6]
  i4432.CapHeight = i4433[7]
  i4432.Descender = i4433[8]
  i4432.CenterLine = i4433[9]
  i4432.SuperscriptOffset = i4433[10]
  i4432.SubscriptOffset = i4433[11]
  i4432.SubSize = i4433[12]
  i4432.Underline = i4433[13]
  i4432.UnderlineThickness = i4433[14]
  i4432.strikethrough = i4433[15]
  i4432.strikethroughThickness = i4433[16]
  i4432.TabWidth = i4433[17]
  i4432.Padding = i4433[18]
  i4432.AtlasWidth = i4433[19]
  i4432.AtlasHeight = i4433[20]
  return i4432
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4436 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4437 = data
  i4436.id = i4437[0]
  i4436.x = i4437[1]
  i4436.y = i4437[2]
  i4436.width = i4437[3]
  i4436.height = i4437[4]
  i4436.xOffset = i4437[5]
  i4436.yOffset = i4437[6]
  i4436.xAdvance = i4437[7]
  i4436.scale = i4437[8]
  return i4436
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4438 = root || request.c( 'TMPro.KerningTable' )
  var i4439 = data
  var i4441 = i4439[0]
  var i4440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4441.length; i += 1) {
    i4440.add(request.d('TMPro.KerningPair', i4441[i + 0]));
  }
  i4438.kerningPairs = i4440
  return i4438
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4444 = root || request.c( 'TMPro.KerningPair' )
  var i4445 = data
  i4444.xOffset = i4445[0]
  i4444.m_FirstGlyph = i4445[1]
  i4444.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4445[2], i4444.m_FirstGlyphAdjustments)
  i4444.m_SecondGlyph = i4445[3]
  i4444.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4445[4], i4444.m_SecondGlyphAdjustments)
  i4444.m_IgnoreSpacingAdjustments = !!i4445[5]
  return i4444
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4446 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4447 = data
  i4446.m_FaceIndex = i4447[0]
  i4446.m_FamilyName = i4447[1]
  i4446.m_StyleName = i4447[2]
  i4446.m_PointSize = i4447[3]
  i4446.m_Scale = i4447[4]
  i4446.m_UnitsPerEM = i4447[5]
  i4446.m_LineHeight = i4447[6]
  i4446.m_AscentLine = i4447[7]
  i4446.m_CapLine = i4447[8]
  i4446.m_MeanLine = i4447[9]
  i4446.m_Baseline = i4447[10]
  i4446.m_DescentLine = i4447[11]
  i4446.m_SuperscriptOffset = i4447[12]
  i4446.m_SuperscriptSize = i4447[13]
  i4446.m_SubscriptOffset = i4447[14]
  i4446.m_SubscriptSize = i4447[15]
  i4446.m_UnderlineOffset = i4447[16]
  i4446.m_UnderlineThickness = i4447[17]
  i4446.m_StrikethroughOffset = i4447[18]
  i4446.m_StrikethroughThickness = i4447[19]
  i4446.m_TabWidth = i4447[20]
  return i4446
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4448 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4449 = data
  var i4451 = i4449[0]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 2) {
  request.r(i4451[i + 0], i4451[i + 1], 2, i4450, '')
  }
  i4448.atlasAssets = i4450
  i4448.scale = i4449[1]
  request.r(i4449[2], i4449[3], 0, i4448, 'skeletonJSON')
  i4448.isUpgradingBlendModeMaterials = !!i4449[4]
  i4448.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4449[5], i4448.blendModeMaterials)
  var i4453 = i4449[6]
  var i4452 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4453.length; i += 2) {
  request.r(i4453[i + 0], i4453[i + 1], 1, i4452, '')
  }
  i4448.skeletonDataModifiers = i4452
  var i4455 = i4449[7]
  var i4454 = []
  for(var i = 0; i < i4455.length; i += 1) {
    i4454.push( i4455[i + 0] );
  }
  i4448.fromAnimation = i4454
  var i4457 = i4449[8]
  var i4456 = []
  for(var i = 0; i < i4457.length; i += 1) {
    i4456.push( i4457[i + 0] );
  }
  i4448.toAnimation = i4456
  i4448.duration = i4449[9]
  i4448.defaultMix = i4449[10]
  request.r(i4449[11], i4449[12], 0, i4448, 'controller')
  return i4448
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4460 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4461 = data
  i4460.applyAdditiveMaterial = !!i4461[0]
  var i4463 = i4461[1]
  var i4462 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4463.length; i += 1) {
    i4462.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4463[i + 0]));
  }
  i4460.additiveMaterials = i4462
  var i4465 = i4461[2]
  var i4464 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4465[i + 0]));
  }
  i4460.multiplyMaterials = i4464
  var i4467 = i4461[3]
  var i4466 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4467[i + 0]));
  }
  i4460.screenMaterials = i4466
  i4460.requiresBlendModeMaterials = !!i4461[4]
  return i4460
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4470 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4471 = data
  i4470.pageName = i4471[0]
  request.r(i4471[1], i4471[2], 0, i4470, 'material')
  return i4470
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4474 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4475 = data
  request.r(i4475[0], i4475[1], 0, i4474, 'atlasFile')
  var i4477 = i4475[2]
  var i4476 = []
  for(var i = 0; i < i4477.length; i += 2) {
  request.r(i4477[i + 0], i4477[i + 1], 2, i4476, '')
  }
  i4474.materials = i4476
  i4474.textureLoadingMode = i4475[3]
  request.r(i4475[4], i4475[5], 0, i4474, 'onDemandTextureLoader')
  return i4474
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4478 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4479 = data
  i4478.useSafeMode = !!i4479[0]
  i4478.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4479[1], i4478.safeModeOptions)
  i4478.timeScale = i4479[2]
  i4478.unscaledTimeScale = i4479[3]
  i4478.useSmoothDeltaTime = !!i4479[4]
  i4478.maxSmoothUnscaledTime = i4479[5]
  i4478.rewindCallbackMode = i4479[6]
  i4478.showUnityEditorReport = !!i4479[7]
  i4478.logBehaviour = i4479[8]
  i4478.drawGizmos = !!i4479[9]
  i4478.defaultRecyclable = !!i4479[10]
  i4478.defaultAutoPlay = i4479[11]
  i4478.defaultUpdateType = i4479[12]
  i4478.defaultTimeScaleIndependent = !!i4479[13]
  i4478.defaultEaseType = i4479[14]
  i4478.defaultEaseOvershootOrAmplitude = i4479[15]
  i4478.defaultEasePeriod = i4479[16]
  i4478.defaultAutoKill = !!i4479[17]
  i4478.defaultLoopType = i4479[18]
  i4478.debugMode = !!i4479[19]
  i4478.debugStoreTargetId = !!i4479[20]
  i4478.showPreviewPanel = !!i4479[21]
  i4478.storeSettingsLocation = i4479[22]
  i4478.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4479[23], i4478.modules)
  i4478.createASMDEF = !!i4479[24]
  i4478.showPlayingTweens = !!i4479[25]
  i4478.showPausedTweens = !!i4479[26]
  return i4478
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4480 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4481 = data
  i4480.logBehaviour = i4481[0]
  i4480.nestedTweenFailureBehaviour = i4481[1]
  return i4480
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4482 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4483 = data
  i4482.showPanel = !!i4483[0]
  i4482.audioEnabled = !!i4483[1]
  i4482.physicsEnabled = !!i4483[2]
  i4482.physics2DEnabled = !!i4483[3]
  i4482.spriteEnabled = !!i4483[4]
  i4482.uiEnabled = !!i4483[5]
  i4482.uiToolkitEnabled = !!i4483[6]
  i4482.textMeshProEnabled = !!i4483[7]
  i4482.tk2DEnabled = !!i4483[8]
  i4482.deAudioEnabled = !!i4483[9]
  i4482.deUnityExtendedEnabled = !!i4483[10]
  i4482.epoOutlineEnabled = !!i4483[11]
  return i4482
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4484 = root || request.c( 'TMPro.TMP_Settings' )
  var i4485 = data
  i4484.assetVersion = i4485[0]
  i4484.m_TextWrappingMode = i4485[1]
  i4484.m_enableKerning = !!i4485[2]
  var i4487 = i4485[3]
  var i4486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4487.length; i += 1) {
    i4486.add(i4487[i + 0]);
  }
  i4484.m_ActiveFontFeatures = i4486
  i4484.m_enableExtraPadding = !!i4485[4]
  i4484.m_enableTintAllSprites = !!i4485[5]
  i4484.m_enableParseEscapeCharacters = !!i4485[6]
  i4484.m_EnableRaycastTarget = !!i4485[7]
  i4484.m_GetFontFeaturesAtRuntime = !!i4485[8]
  i4484.m_missingGlyphCharacter = i4485[9]
  i4484.m_ClearDynamicDataOnBuild = !!i4485[10]
  i4484.m_warningsDisabled = !!i4485[11]
  request.r(i4485[12], i4485[13], 0, i4484, 'm_defaultFontAsset')
  i4484.m_defaultFontAssetPath = i4485[14]
  i4484.m_defaultFontSize = i4485[15]
  i4484.m_defaultAutoSizeMinRatio = i4485[16]
  i4484.m_defaultAutoSizeMaxRatio = i4485[17]
  i4484.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4485[18], i4485[19] )
  i4484.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4485[20], i4485[21] )
  i4484.m_autoSizeTextContainer = !!i4485[22]
  i4484.m_IsTextObjectScaleStatic = !!i4485[23]
  var i4489 = i4485[24]
  var i4488 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4489.length; i += 2) {
  request.r(i4489[i + 0], i4489[i + 1], 1, i4488, '')
  }
  i4484.m_fallbackFontAssets = i4488
  i4484.m_matchMaterialPreset = !!i4485[25]
  i4484.m_HideSubTextObjects = !!i4485[26]
  request.r(i4485[27], i4485[28], 0, i4484, 'm_defaultSpriteAsset')
  i4484.m_defaultSpriteAssetPath = i4485[29]
  i4484.m_enableEmojiSupport = !!i4485[30]
  i4484.m_MissingCharacterSpriteUnicode = i4485[31]
  var i4491 = i4485[32]
  var i4490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4491.length; i += 2) {
  request.r(i4491[i + 0], i4491[i + 1], 1, i4490, '')
  }
  i4484.m_EmojiFallbackTextAssets = i4490
  i4484.m_defaultColorGradientPresetsPath = i4485[33]
  request.r(i4485[34], i4485[35], 0, i4484, 'm_defaultStyleSheet')
  i4484.m_StyleSheetsResourcePath = i4485[36]
  request.r(i4485[37], i4485[38], 0, i4484, 'm_leadingCharacters')
  request.r(i4485[39], i4485[40], 0, i4484, 'm_followingCharacters')
  i4484.m_UseModernHangulLineBreakingRules = !!i4485[41]
  return i4484
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4494 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4495 = data
  i4494.m_GlyphIndex = i4495[0]
  i4494.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4495[1], i4494.m_GlyphValueRecord)
  return i4494
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4496 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4497 = data
  i4496.m_XPlacement = i4497[0]
  i4496.m_YPlacement = i4497[1]
  i4496.m_XAdvance = i4497[2]
  i4496.m_YAdvance = i4497[3]
  return i4496
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4498 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4499 = data
  request.r(i4499[0], i4499[1], 0, i4498, 'spriteSheet')
  var i4501 = i4499[2]
  var i4500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4501.length; i += 1) {
    i4500.add(request.d('TMPro.TMP_Sprite', i4501[i + 0]));
  }
  i4498.spriteInfoList = i4500
  var i4503 = i4499[3]
  var i4502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4503.length; i += 2) {
  request.r(i4503[i + 0], i4503[i + 1], 1, i4502, '')
  }
  i4498.fallbackSpriteAssets = i4502
  var i4505 = i4499[4]
  var i4504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4505.length; i += 1) {
    i4504.add(request.d('TMPro.TMP_SpriteCharacter', i4505[i + 0]));
  }
  i4498.m_SpriteCharacterTable = i4504
  var i4507 = i4499[5]
  var i4506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4507.length; i += 1) {
    i4506.add(request.d('TMPro.TMP_SpriteGlyph', i4507[i + 0]));
  }
  i4498.m_GlyphTable = i4506
  i4498.m_Version = i4499[6]
  i4498.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4499[7], i4498.m_FaceInfo)
  request.r(i4499[8], i4499[9], 0, i4498, 'm_Material')
  return i4498
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4510 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4511 = data
  i4510.name = i4511[0]
  i4510.hashCode = i4511[1]
  i4510.unicode = i4511[2]
  i4510.pivot = new pc.Vec2( i4511[3], i4511[4] )
  request.r(i4511[5], i4511[6], 0, i4510, 'sprite')
  i4510.id = i4511[7]
  i4510.x = i4511[8]
  i4510.y = i4511[9]
  i4510.width = i4511[10]
  i4510.height = i4511[11]
  i4510.xOffset = i4511[12]
  i4510.yOffset = i4511[13]
  i4510.xAdvance = i4511[14]
  i4510.scale = i4511[15]
  return i4510
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4516 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4517 = data
  i4516.m_Name = i4517[0]
  i4516.m_ElementType = i4517[1]
  i4516.m_Unicode = i4517[2]
  i4516.m_GlyphIndex = i4517[3]
  i4516.m_Scale = i4517[4]
  return i4516
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4520 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4521 = data
  request.r(i4521[0], i4521[1], 0, i4520, 'sprite')
  i4520.m_Index = i4521[2]
  i4520.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4521[3], i4520.m_Metrics)
  i4520.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4521[4], i4520.m_GlyphRect)
  i4520.m_Scale = i4521[5]
  i4520.m_AtlasIndex = i4521[6]
  i4520.m_ClassDefinitionType = i4521[7]
  return i4520
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4522 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4523 = data
  var i4525 = i4523[0]
  var i4524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4525.length; i += 1) {
    i4524.add(request.d('TMPro.TMP_Style', i4525[i + 0]));
  }
  i4522.m_StyleList = i4524
  return i4522
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4528 = root || request.c( 'TMPro.TMP_Style' )
  var i4529 = data
  i4528.m_Name = i4529[0]
  i4528.m_HashCode = i4529[1]
  i4528.m_OpeningDefinition = i4529[2]
  i4528.m_ClosingDefinition = i4529[3]
  i4528.m_OpeningTagArray = i4529[4]
  i4528.m_ClosingTagArray = i4529[5]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4531 = data
  var i4533 = i4531[0]
  var i4532 = []
  for(var i = 0; i < i4533.length; i += 1) {
    i4532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4533[i + 0]) );
  }
  i4530.files = i4532
  i4530.componentToPrefabIds = i4531[1]
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4537 = data
  i4536.path = i4537[0]
  request.r(i4537[1], i4537[2], 0, i4536, 'unityObject')
  return i4536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4539 = data
  var i4541 = i4539[0]
  var i4540 = []
  for(var i = 0; i < i4541.length; i += 1) {
    i4540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4541[i + 0]) );
  }
  i4538.scriptsExecutionOrder = i4540
  var i4543 = i4539[1]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 1) {
    i4542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4543[i + 0]) );
  }
  i4538.sortingLayers = i4542
  var i4545 = i4539[2]
  var i4544 = []
  for(var i = 0; i < i4545.length; i += 1) {
    i4544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4545[i + 0]) );
  }
  i4538.cullingLayers = i4544
  i4538.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4539[3], i4538.timeSettings)
  i4538.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4539[4], i4538.physicsSettings)
  i4538.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4539[5], i4538.physics2DSettings)
  i4538.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4539[6], i4538.qualitySettings)
  i4538.enableRealtimeShadows = !!i4539[7]
  i4538.enableAutoInstancing = !!i4539[8]
  i4538.enableStaticBatching = !!i4539[9]
  i4538.enableDynamicBatching = !!i4539[10]
  i4538.usePreservativeDynamicBatching = !!i4539[11]
  i4538.lightmapEncodingQuality = i4539[12]
  i4538.desiredColorSpace = i4539[13]
  var i4547 = i4539[14]
  var i4546 = []
  for(var i = 0; i < i4547.length; i += 1) {
    i4546.push( i4547[i + 0] );
  }
  i4538.allTags = i4546
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4551 = data
  i4550.name = i4551[0]
  i4550.value = i4551[1]
  return i4550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4555 = data
  i4554.id = i4555[0]
  i4554.name = i4555[1]
  i4554.value = i4555[2]
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4559 = data
  i4558.id = i4559[0]
  i4558.name = i4559[1]
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4561 = data
  i4560.fixedDeltaTime = i4561[0]
  i4560.maximumDeltaTime = i4561[1]
  i4560.timeScale = i4561[2]
  i4560.maximumParticleTimestep = i4561[3]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4563 = data
  i4562.gravity = new pc.Vec3( i4563[0], i4563[1], i4563[2] )
  i4562.defaultSolverIterations = i4563[3]
  i4562.bounceThreshold = i4563[4]
  i4562.autoSyncTransforms = !!i4563[5]
  i4562.autoSimulation = !!i4563[6]
  var i4565 = i4563[7]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4565[i + 0]) );
  }
  i4562.collisionMatrix = i4564
  return i4562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4569 = data
  i4568.enabled = !!i4569[0]
  i4568.layerId = i4569[1]
  i4568.otherLayerId = i4569[2]
  return i4568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4571 = data
  request.r(i4571[0], i4571[1], 0, i4570, 'material')
  i4570.gravity = new pc.Vec2( i4571[2], i4571[3] )
  i4570.positionIterations = i4571[4]
  i4570.velocityIterations = i4571[5]
  i4570.velocityThreshold = i4571[6]
  i4570.maxLinearCorrection = i4571[7]
  i4570.maxAngularCorrection = i4571[8]
  i4570.maxTranslationSpeed = i4571[9]
  i4570.maxRotationSpeed = i4571[10]
  i4570.baumgarteScale = i4571[11]
  i4570.baumgarteTOIScale = i4571[12]
  i4570.timeToSleep = i4571[13]
  i4570.linearSleepTolerance = i4571[14]
  i4570.angularSleepTolerance = i4571[15]
  i4570.defaultContactOffset = i4571[16]
  i4570.autoSimulation = !!i4571[17]
  i4570.queriesHitTriggers = !!i4571[18]
  i4570.queriesStartInColliders = !!i4571[19]
  i4570.callbacksOnDisable = !!i4571[20]
  i4570.reuseCollisionCallbacks = !!i4571[21]
  i4570.autoSyncTransforms = !!i4571[22]
  var i4573 = i4571[23]
  var i4572 = []
  for(var i = 0; i < i4573.length; i += 1) {
    i4572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4573[i + 0]) );
  }
  i4570.collisionMatrix = i4572
  return i4570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4577 = data
  i4576.enabled = !!i4577[0]
  i4576.layerId = i4577[1]
  i4576.otherLayerId = i4577[2]
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4579 = data
  var i4581 = i4579[0]
  var i4580 = []
  for(var i = 0; i < i4581.length; i += 1) {
    i4580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4581[i + 0]) );
  }
  i4578.qualityLevels = i4580
  var i4583 = i4579[1]
  var i4582 = []
  for(var i = 0; i < i4583.length; i += 1) {
    i4582.push( i4583[i + 0] );
  }
  i4578.names = i4582
  i4578.shadows = i4579[2]
  i4578.anisotropicFiltering = i4579[3]
  i4578.antiAliasing = i4579[4]
  i4578.lodBias = i4579[5]
  i4578.shadowCascades = i4579[6]
  i4578.shadowDistance = i4579[7]
  i4578.shadowmaskMode = i4579[8]
  i4578.shadowProjection = i4579[9]
  i4578.shadowResolution = i4579[10]
  i4578.softParticles = !!i4579[11]
  i4578.softVegetation = !!i4579[12]
  i4578.activeColorSpace = i4579[13]
  i4578.desiredColorSpace = i4579[14]
  i4578.masterTextureLimit = i4579[15]
  i4578.maxQueuedFrames = i4579[16]
  i4578.particleRaycastBudget = i4579[17]
  i4578.pixelLightCount = i4579[18]
  i4578.realtimeReflectionProbes = !!i4579[19]
  i4578.shadowCascade2Split = i4579[20]
  i4578.shadowCascade4Split = new pc.Vec3( i4579[21], i4579[22], i4579[23] )
  i4578.streamingMipmapsActive = !!i4579[24]
  i4578.vSyncCount = i4579[25]
  i4578.asyncUploadBufferSize = i4579[26]
  i4578.asyncUploadTimeSlice = i4579[27]
  i4578.billboardsFaceCameraPosition = !!i4579[28]
  i4578.shadowNearPlaneOffset = i4579[29]
  i4578.streamingMipmapsMemoryBudget = i4579[30]
  i4578.maximumLODLevel = i4579[31]
  i4578.streamingMipmapsAddAllCameras = !!i4579[32]
  i4578.streamingMipmapsMaxLevelReduction = i4579[33]
  i4578.streamingMipmapsRenderersPerFrame = i4579[34]
  i4578.resolutionScalingFixedDPIFactor = i4579[35]
  i4578.streamingMipmapsMaxFileIORequests = i4579[36]
  i4578.currentQualityLevel = i4579[37]
  return i4578
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4586 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4587 = data
  i4586.m_XCoordinate = i4587[0]
  i4586.m_YCoordinate = i4587[1]
  return i4586
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4588 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4589 = data
  i4588.m_XPositionAdjustment = i4589[0]
  i4588.m_YPositionAdjustment = i4589[1]
  return i4588
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4590 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4591 = data
  i4590.xPlacement = i4591[0]
  i4590.yPlacement = i4591[1]
  i4590.xAdvance = i4591[2]
  i4590.yAdvance = i4591[3]
  return i4590
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

Deserializers.creativeName = "BP_V33_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "42533";

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

Deserializers.buildID = "9fb79a4c-08e7-486f-bcd1-ef663be34d51";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

