var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.JointSpring' )
  var i3109 = data
  i3108.spring = i3109[0]
  i3108.damper = i3109[1]
  i3108.targetPosition = i3109[2]
  return i3108
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.JointMotor' )
  var i3111 = data
  i3110.m_TargetVelocity = i3111[0]
  i3110.m_Force = i3111[1]
  i3110.m_FreeSpin = i3111[2]
  return i3110
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.JointLimits' )
  var i3113 = data
  i3112.m_Min = i3113[0]
  i3112.m_Max = i3113[1]
  i3112.m_Bounciness = i3113[2]
  i3112.m_BounceMinVelocity = i3113[3]
  i3112.m_ContactDistance = i3113[4]
  i3112.minBounce = i3113[5]
  i3112.maxBounce = i3113[6]
  return i3112
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.JointDrive' )
  var i3115 = data
  i3114.m_PositionSpring = i3115[0]
  i3114.m_PositionDamper = i3115[1]
  i3114.m_MaximumForce = i3115[2]
  i3114.m_UseAcceleration = i3115[3]
  return i3114
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3117 = data
  i3116.m_Spring = i3117[0]
  i3116.m_Damper = i3117[1]
  return i3116
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3119 = data
  i3118.m_Limit = i3119[0]
  i3118.m_Bounciness = i3119[1]
  i3118.m_ContactDistance = i3119[2]
  return i3118
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3121 = data
  i3120.m_ExtremumSlip = i3121[0]
  i3120.m_ExtremumValue = i3121[1]
  i3120.m_AsymptoteSlip = i3121[2]
  i3120.m_AsymptoteValue = i3121[3]
  i3120.m_Stiffness = i3121[4]
  return i3120
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3123 = data
  i3122.m_LowerAngle = i3123[0]
  i3122.m_UpperAngle = i3123[1]
  return i3122
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3125 = data
  i3124.m_MotorSpeed = i3125[0]
  i3124.m_MaximumMotorTorque = i3125[1]
  return i3124
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3127 = data
  i3126.m_DampingRatio = i3127[0]
  i3126.m_Frequency = i3127[1]
  i3126.m_Angle = i3127[2]
  return i3126
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3129 = data
  i3128.m_LowerTranslation = i3129[0]
  i3128.m_UpperTranslation = i3129[1]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3131 = data
  i3130.name = i3131[0]
  i3130.width = i3131[1]
  i3130.height = i3131[2]
  i3130.mipmapCount = i3131[3]
  i3130.anisoLevel = i3131[4]
  i3130.filterMode = i3131[5]
  i3130.hdr = !!i3131[6]
  i3130.format = i3131[7]
  i3130.wrapMode = i3131[8]
  i3130.alphaIsTransparency = !!i3131[9]
  i3130.alphaSource = i3131[10]
  i3130.graphicsFormat = i3131[11]
  i3130.sRGBTexture = !!i3131[12]
  i3130.desiredColorSpace = i3131[13]
  i3130.wrapU = i3131[14]
  i3130.wrapV = i3131[15]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3132 = root || new pc.UnityMaterial()
  var i3133 = data
  i3132.name = i3133[0]
  request.r(i3133[1], i3133[2], 0, i3132, 'shader')
  i3132.renderQueue = i3133[3]
  i3132.enableInstancing = !!i3133[4]
  var i3135 = i3133[5]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3135[i + 0]) );
  }
  i3132.floatParameters = i3134
  var i3137 = i3133[6]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3137[i + 0]) );
  }
  i3132.colorParameters = i3136
  var i3139 = i3133[7]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3139[i + 0]) );
  }
  i3132.vectorParameters = i3138
  var i3141 = i3133[8]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3141[i + 0]) );
  }
  i3132.textureParameters = i3140
  var i3143 = i3133[9]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3143[i + 0]) );
  }
  i3132.materialFlags = i3142
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3147 = data
  i3146.name = i3147[0]
  i3146.value = i3147[1]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3151 = data
  i3150.name = i3151[0]
  i3150.value = new pc.Color(i3151[1], i3151[2], i3151[3], i3151[4])
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.value = new pc.Vec4( i3155[1], i3155[2], i3155[3], i3155[4] )
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3159 = data
  i3158.name = i3159[0]
  request.r(i3159[1], i3159[2], 0, i3158, 'value')
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3163 = data
  i3162.name = i3163[0]
  i3162.enabled = !!i3163[1]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3165 = data
  i3164.name = i3165[0]
  i3164.halfPrecision = !!i3165[1]
  i3164.useSimplification = !!i3165[2]
  i3164.useUInt32IndexFormat = !!i3165[3]
  i3164.vertexCount = i3165[4]
  i3164.aabb = i3165[5]
  var i3167 = i3165[6]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( !!i3167[i + 0] );
  }
  i3164.streams = i3166
  i3164.vertices = i3165[7]
  var i3169 = i3165[8]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3169[i + 0]) );
  }
  i3164.subMeshes = i3168
  var i3171 = i3165[9]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 16) {
    i3170.push( new pc.Mat4().setData(i3171[i + 0], i3171[i + 1], i3171[i + 2], i3171[i + 3],  i3171[i + 4], i3171[i + 5], i3171[i + 6], i3171[i + 7],  i3171[i + 8], i3171[i + 9], i3171[i + 10], i3171[i + 11],  i3171[i + 12], i3171[i + 13], i3171[i + 14], i3171[i + 15]) );
  }
  i3164.bindposes = i3170
  var i3173 = i3165[10]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3173[i + 0]) );
  }
  i3164.blendShapes = i3172
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3179 = data
  i3178.triangles = i3179[0]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3185 = data
  i3184.name = i3185[0]
  var i3187 = i3185[1]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3187[i + 0]) );
  }
  i3184.frames = i3186
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3189 = data
  i3188.name = i3189[0]
  i3188.index = i3189[1]
  i3188.startup = !!i3189[2]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3191 = data
  i3190.aspect = i3191[0]
  i3190.orthographic = !!i3191[1]
  i3190.orthographicSize = i3191[2]
  i3190.backgroundColor = new pc.Color(i3191[3], i3191[4], i3191[5], i3191[6])
  i3190.nearClipPlane = i3191[7]
  i3190.farClipPlane = i3191[8]
  i3190.fieldOfView = i3191[9]
  i3190.depth = i3191[10]
  i3190.clearFlags = i3191[11]
  i3190.cullingMask = i3191[12]
  i3190.rect = i3191[13]
  request.r(i3191[14], i3191[15], 0, i3190, 'targetTexture')
  i3190.usePhysicalProperties = !!i3191[16]
  i3190.focalLength = i3191[17]
  i3190.sensorSize = new pc.Vec2( i3191[18], i3191[19] )
  i3190.lensShift = new pc.Vec2( i3191[20], i3191[21] )
  i3190.gateFit = i3191[22]
  i3190.commandBufferCount = i3191[23]
  i3190.cameraType = i3191[24]
  i3190.enabled = !!i3191[25]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3193 = data
  i3192.name = i3193[0]
  i3192.tagId = i3193[1]
  i3192.enabled = !!i3193[2]
  i3192.isStatic = !!i3193[3]
  i3192.layer = i3193[4]
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3195 = data
  i3194.pivot = new pc.Vec2( i3195[0], i3195[1] )
  i3194.anchorMin = new pc.Vec2( i3195[2], i3195[3] )
  i3194.anchorMax = new pc.Vec2( i3195[4], i3195[5] )
  i3194.sizeDelta = new pc.Vec2( i3195[6], i3195[7] )
  i3194.anchoredPosition3D = new pc.Vec3( i3195[8], i3195[9], i3195[10] )
  i3194.rotation = new pc.Quat(i3195[11], i3195[12], i3195[13], i3195[14])
  i3194.scale = new pc.Vec3( i3195[15], i3195[16], i3195[17] )
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3197 = data
  i3196.planeDistance = i3197[0]
  i3196.referencePixelsPerUnit = i3197[1]
  i3196.isFallbackOverlay = !!i3197[2]
  i3196.renderMode = i3197[3]
  i3196.renderOrder = i3197[4]
  i3196.sortingLayerName = i3197[5]
  i3196.sortingOrder = i3197[6]
  i3196.scaleFactor = i3197[7]
  request.r(i3197[8], i3197[9], 0, i3196, 'worldCamera')
  i3196.overrideSorting = !!i3197[10]
  i3196.pixelPerfect = !!i3197[11]
  i3196.targetDisplay = i3197[12]
  i3196.overridePixelPerfect = !!i3197[13]
  i3196.enabled = !!i3197[14]
  return i3196
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3198 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3199 = data
  i3198.m_UiScaleMode = i3199[0]
  i3198.m_ReferencePixelsPerUnit = i3199[1]
  i3198.m_ScaleFactor = i3199[2]
  i3198.m_ReferenceResolution = new pc.Vec2( i3199[3], i3199[4] )
  i3198.m_ScreenMatchMode = i3199[5]
  i3198.m_MatchWidthOrHeight = i3199[6]
  i3198.m_PhysicalUnit = i3199[7]
  i3198.m_FallbackScreenDPI = i3199[8]
  i3198.m_DefaultSpriteDPI = i3199[9]
  i3198.m_DynamicPixelsPerUnit = i3199[10]
  i3198.m_PresetInfoIsWorld = !!i3199[11]
  return i3198
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3200 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3201 = data
  i3200.m_IgnoreReversedGraphics = !!i3201[0]
  i3200.m_BlockingObjects = i3201[1]
  i3200.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3201[2] )
  return i3200
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i3202 = root || request.c( 'Playable.GameManager' )
  var i3203 = data
  i3202.EventCountdownEndGame = request.d('System.Action', i3203[0], i3202.EventCountdownEndGame)
  i3202._totalEvent = i3203[1]
  i3202._maxEvent = i3203[2]
  i3202._endTime = i3203[3]
  request.r(i3203[4], i3203[5], 0, i3202, '_backgroundMusic')
  request.r(i3203[6], i3203[7], 0, i3202, '_backgroundTexture')
  request.r(i3203[8], i3203[9], 0, i3202, '_btnBlock')
  request.r(i3203[10], i3203[11], 0, i3202, '_background')
  request.r(i3203[12], i3203[13], 0, i3202, '_losePanel')
  request.r(i3203[14], i3203[15], 0, i3202, '_winPanel')
  var i3205 = i3203[16]
  var i3204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i3205.length; i += 2) {
  request.r(i3205[i + 0], i3205[i + 1], 1, i3204, '')
  }
  i3202._vfxWin = i3204
  request.r(i3203[17], i3203[18], 0, i3202, '_progressFillImage')
  request.r(i3203[19], i3203[20], 0, i3202, '_progressText')
  i3202._progressTweenDuration = i3203[21]
  request.r(i3203[22], i3203[23], 0, i3202, '_timerFillImage')
  request.r(i3203[24], i3203[25], 0, i3202, '_timerText')
  i3202._timerPunchScale = i3203[26]
  return i3202
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3206 = root || request.c( 'System.Action' )
  var i3207 = data
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3211 = data
  i3210.cullTransparentMesh = !!i3211[0]
  return i3210
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3212 = root || request.c( 'UnityEngine.UI.Image' )
  var i3213 = data
  request.r(i3213[0], i3213[1], 0, i3212, 'm_Sprite')
  i3212.m_Type = i3213[2]
  i3212.m_PreserveAspect = !!i3213[3]
  i3212.m_FillCenter = !!i3213[4]
  i3212.m_FillMethod = i3213[5]
  i3212.m_FillAmount = i3213[6]
  i3212.m_FillClockwise = !!i3213[7]
  i3212.m_FillOrigin = i3213[8]
  i3212.m_UseSpriteMesh = !!i3213[9]
  i3212.m_PixelsPerUnitMultiplier = i3213[10]
  request.r(i3213[11], i3213[12], 0, i3212, 'm_Material')
  i3212.m_Maskable = !!i3213[13]
  i3212.m_Color = new pc.Color(i3213[14], i3213[15], i3213[16], i3213[17])
  i3212.m_RaycastTarget = !!i3213[18]
  i3212.m_RaycastPadding = new pc.Vec4( i3213[19], i3213[20], i3213[21], i3213[22] )
  return i3212
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3215 = data
  request.r(i3215[0], i3215[1], 0, i3214, 'm_Texture')
  i3214.m_UVRect = UnityEngine.Rect.MinMaxRect(i3215[2], i3215[3], i3215[4], i3215[5])
  request.r(i3215[6], i3215[7], 0, i3214, 'm_Material')
  i3214.m_Maskable = !!i3215[8]
  i3214.m_Color = new pc.Color(i3215[9], i3215[10], i3215[11], i3215[12])
  i3214.m_RaycastTarget = !!i3215[13]
  i3214.m_RaycastPadding = new pc.Vec4( i3215[14], i3215[15], i3215[16], i3215[17] )
  return i3214
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3216 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3217 = data
  i3216.m_hasFontAssetChanged = !!i3217[0]
  request.r(i3217[1], i3217[2], 0, i3216, 'm_baseMaterial')
  i3216.m_maskOffset = new pc.Vec4( i3217[3], i3217[4], i3217[5], i3217[6] )
  i3216.m_text = i3217[7]
  i3216.m_isRightToLeft = !!i3217[8]
  request.r(i3217[9], i3217[10], 0, i3216, 'm_fontAsset')
  request.r(i3217[11], i3217[12], 0, i3216, 'm_sharedMaterial')
  var i3219 = i3217[13]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 2) {
  request.r(i3219[i + 0], i3219[i + 1], 2, i3218, '')
  }
  i3216.m_fontSharedMaterials = i3218
  request.r(i3217[14], i3217[15], 0, i3216, 'm_fontMaterial')
  var i3221 = i3217[16]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 2) {
  request.r(i3221[i + 0], i3221[i + 1], 2, i3220, '')
  }
  i3216.m_fontMaterials = i3220
  i3216.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3217[17], i3217[18], i3217[19], i3217[20])
  i3216.m_fontColor = new pc.Color(i3217[21], i3217[22], i3217[23], i3217[24])
  i3216.m_enableVertexGradient = !!i3217[25]
  i3216.m_colorMode = i3217[26]
  i3216.m_fontColorGradient = request.d('TMPro.VertexGradient', i3217[27], i3216.m_fontColorGradient)
  request.r(i3217[28], i3217[29], 0, i3216, 'm_fontColorGradientPreset')
  request.r(i3217[30], i3217[31], 0, i3216, 'm_spriteAsset')
  i3216.m_tintAllSprites = !!i3217[32]
  request.r(i3217[33], i3217[34], 0, i3216, 'm_StyleSheet')
  i3216.m_TextStyleHashCode = i3217[35]
  i3216.m_overrideHtmlColors = !!i3217[36]
  i3216.m_faceColor = UnityEngine.Color32.ConstructColor(i3217[37], i3217[38], i3217[39], i3217[40])
  i3216.m_fontSize = i3217[41]
  i3216.m_fontSizeBase = i3217[42]
  i3216.m_fontWeight = i3217[43]
  i3216.m_enableAutoSizing = !!i3217[44]
  i3216.m_fontSizeMin = i3217[45]
  i3216.m_fontSizeMax = i3217[46]
  i3216.m_fontStyle = i3217[47]
  i3216.m_HorizontalAlignment = i3217[48]
  i3216.m_VerticalAlignment = i3217[49]
  i3216.m_textAlignment = i3217[50]
  i3216.m_characterSpacing = i3217[51]
  i3216.m_wordSpacing = i3217[52]
  i3216.m_lineSpacing = i3217[53]
  i3216.m_lineSpacingMax = i3217[54]
  i3216.m_paragraphSpacing = i3217[55]
  i3216.m_charWidthMaxAdj = i3217[56]
  i3216.m_TextWrappingMode = i3217[57]
  i3216.m_wordWrappingRatios = i3217[58]
  i3216.m_overflowMode = i3217[59]
  request.r(i3217[60], i3217[61], 0, i3216, 'm_linkedTextComponent')
  request.r(i3217[62], i3217[63], 0, i3216, 'parentLinkedComponent')
  i3216.m_enableKerning = !!i3217[64]
  var i3223 = i3217[65]
  var i3222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.add(i3223[i + 0]);
  }
  i3216.m_ActiveFontFeatures = i3222
  i3216.m_enableExtraPadding = !!i3217[66]
  i3216.checkPaddingRequired = !!i3217[67]
  i3216.m_isRichText = !!i3217[68]
  i3216.m_parseCtrlCharacters = !!i3217[69]
  i3216.m_isOrthographic = !!i3217[70]
  i3216.m_isCullingEnabled = !!i3217[71]
  i3216.m_horizontalMapping = i3217[72]
  i3216.m_verticalMapping = i3217[73]
  i3216.m_uvLineOffset = i3217[74]
  i3216.m_geometrySortingOrder = i3217[75]
  i3216.m_IsTextObjectScaleStatic = !!i3217[76]
  i3216.m_VertexBufferAutoSizeReduction = !!i3217[77]
  i3216.m_useMaxVisibleDescender = !!i3217[78]
  i3216.m_pageToDisplay = i3217[79]
  i3216.m_margin = new pc.Vec4( i3217[80], i3217[81], i3217[82], i3217[83] )
  i3216.m_isUsingLegacyAnimationComponent = !!i3217[84]
  i3216.m_isVolumetricText = !!i3217[85]
  request.r(i3217[86], i3217[87], 0, i3216, 'm_Material')
  i3216.m_EmojiFallbackSupport = !!i3217[88]
  i3216.m_Maskable = !!i3217[89]
  i3216.m_Color = new pc.Color(i3217[90], i3217[91], i3217[92], i3217[93])
  i3216.m_RaycastTarget = !!i3217[94]
  i3216.m_RaycastPadding = new pc.Vec4( i3217[95], i3217[96], i3217[97], i3217[98] )
  return i3216
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3226 = root || request.c( 'TMPro.VertexGradient' )
  var i3227 = data
  i3226.topLeft = new pc.Color(i3227[0], i3227[1], i3227[2], i3227[3])
  i3226.topRight = new pc.Color(i3227[4], i3227[5], i3227[6], i3227[7])
  i3226.bottomLeft = new pc.Color(i3227[8], i3227[9], i3227[10], i3227[11])
  i3226.bottomRight = new pc.Color(i3227[12], i3227[13], i3227[14], i3227[15])
  return i3226
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.UI.Button' )
  var i3231 = data
  i3230.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3231[0], i3230.m_OnClick)
  i3230.m_Navigation = request.d('UnityEngine.UI.Navigation', i3231[1], i3230.m_Navigation)
  i3230.m_Transition = i3231[2]
  i3230.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3231[3], i3230.m_Colors)
  i3230.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3231[4], i3230.m_SpriteState)
  i3230.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3231[5], i3230.m_AnimationTriggers)
  i3230.m_Interactable = !!i3231[6]
  request.r(i3231[7], i3231[8], 0, i3230, 'm_TargetGraphic')
  return i3230
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3233 = data
  i3232.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3233[0], i3232.m_PersistentCalls)
  return i3232
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3235 = data
  var i3237 = i3235[0]
  var i3236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.add(request.d('UnityEngine.Events.PersistentCall', i3237[i + 0]));
  }
  i3234.m_Calls = i3236
  return i3234
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3241 = data
  request.r(i3241[0], i3241[1], 0, i3240, 'm_Target')
  i3240.m_TargetAssemblyTypeName = i3241[2]
  i3240.m_MethodName = i3241[3]
  i3240.m_Mode = i3241[4]
  i3240.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3241[5], i3240.m_Arguments)
  i3240.m_CallState = i3241[6]
  return i3240
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3243 = data
  request.r(i3243[0], i3243[1], 0, i3242, 'm_ObjectArgument')
  i3242.m_ObjectArgumentAssemblyTypeName = i3243[2]
  i3242.m_IntArgument = i3243[3]
  i3242.m_FloatArgument = i3243[4]
  i3242.m_StringArgument = i3243[5]
  i3242.m_BoolArgument = !!i3243[6]
  return i3242
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3245 = data
  i3244.m_Mode = i3245[0]
  i3244.m_WrapAround = !!i3245[1]
  request.r(i3245[2], i3245[3], 0, i3244, 'm_SelectOnUp')
  request.r(i3245[4], i3245[5], 0, i3244, 'm_SelectOnDown')
  request.r(i3245[6], i3245[7], 0, i3244, 'm_SelectOnLeft')
  request.r(i3245[8], i3245[9], 0, i3244, 'm_SelectOnRight')
  return i3244
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3247 = data
  i3246.m_NormalColor = new pc.Color(i3247[0], i3247[1], i3247[2], i3247[3])
  i3246.m_HighlightedColor = new pc.Color(i3247[4], i3247[5], i3247[6], i3247[7])
  i3246.m_PressedColor = new pc.Color(i3247[8], i3247[9], i3247[10], i3247[11])
  i3246.m_SelectedColor = new pc.Color(i3247[12], i3247[13], i3247[14], i3247[15])
  i3246.m_DisabledColor = new pc.Color(i3247[16], i3247[17], i3247[18], i3247[19])
  i3246.m_ColorMultiplier = i3247[20]
  i3246.m_FadeDuration = i3247[21]
  return i3246
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3249 = data
  request.r(i3249[0], i3249[1], 0, i3248, 'm_HighlightedSprite')
  request.r(i3249[2], i3249[3], 0, i3248, 'm_PressedSprite')
  request.r(i3249[4], i3249[5], 0, i3248, 'm_SelectedSprite')
  request.r(i3249[6], i3249[7], 0, i3248, 'm_DisabledSprite')
  return i3248
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3251 = data
  i3250.m_NormalTrigger = i3251[0]
  i3250.m_HighlightedTrigger = i3251[1]
  i3250.m_PressedTrigger = i3251[2]
  i3250.m_SelectedTrigger = i3251[3]
  i3250.m_DisabledTrigger = i3251[4]
  return i3250
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3253 = data
  i3252.m_ShowMaskGraphic = !!i3253[0]
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3255 = data
  request.r(i3255[0], i3255[1], 0, i3254, 'clip')
  request.r(i3255[2], i3255[3], 0, i3254, 'outputAudioMixerGroup')
  i3254.playOnAwake = !!i3255[4]
  i3254.loop = !!i3255[5]
  i3254.time = i3255[6]
  i3254.volume = i3255[7]
  i3254.pitch = i3255[8]
  i3254.enabled = !!i3255[9]
  return i3254
}

Deserializers["GameController"] = function (request, data, root) {
  var i3256 = root || request.c( 'GameController' )
  var i3257 = data
  request.r(i3257[0], i3257[1], 0, i3256, '_tutorialHand')
  request.r(i3257[2], i3257[3], 0, i3256, '_tutorialFrom')
  request.r(i3257[4], i3257[5], 0, i3256, '_tutorialTo')
  i3256._tutorialScaleDuration = i3257[6]
  i3256._tutorialMoveDuration = i3257[7]
  i3256._tutorialStartDelay = i3257[8]
  var i3259 = i3257[9]
  var i3258 = new (System.Collections.Generic.List$1(Bridge.ns('Target')))
  for(var i = 0; i < i3259.length; i += 2) {
  request.r(i3259[i + 0], i3259[i + 1], 1, i3258, '')
  }
  i3256._targets = i3258
  return i3256
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3262 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3263 = data
  request.r(i3263[0], i3263[1], 0, i3262, 'skeletonDataAsset')
  request.r(i3263[2], i3263[3], 0, i3262, 'additiveMaterial')
  request.r(i3263[4], i3263[5], 0, i3262, 'multiplyMaterial')
  request.r(i3263[6], i3263[7], 0, i3262, 'screenMaterial')
  i3262.forceAdditiveMaterial = !!i3263[8]
  i3262.initialSkinName = i3263[9]
  i3262.initialFlipX = !!i3263[10]
  i3262.initialFlipY = !!i3263[11]
  i3262.startingAnimation = i3263[12]
  i3262.startingLoop = !!i3263[13]
  i3262.timeScale = i3263[14]
  i3262.freeze = !!i3263[15]
  i3262.layoutScaleMode = i3263[16]
  i3262.updateWhenInvisible = i3263[17]
  i3262.allowMultipleCanvasRenderers = !!i3263[18]
  var i3265 = i3263[19]
  var i3264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3265.length; i += 2) {
  request.r(i3265[i + 0], i3265[i + 1], 1, i3264, '')
  }
  i3262.canvasRenderers = i3264
  i3262.enableSeparatorSlots = !!i3263[20]
  i3262.updateSeparatorPartLocation = !!i3263[21]
  i3262.updateSeparatorPartScale = !!i3263[22]
  i3262.disableMeshAssignmentOnOverride = !!i3263[23]
  i3262.m_SkeletonColor = new pc.Color(i3263[24], i3263[25], i3263[26], i3263[27])
  i3262.referenceSize = new pc.Vec2( i3263[28], i3263[29] )
  i3262.pivotOffset = new pc.Vec2( i3263[30], i3263[31] )
  i3262.referenceScale = i3263[32]
  i3262.layoutScale = i3263[33]
  i3262.rectTransformSize = new pc.Vec2( i3263[34], i3263[35] )
  i3262.editReferenceRect = !!i3263[36]
  var i3267 = i3263[37]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( i3267[i + 0] );
  }
  i3262.separatorSlotNames = i3266
  var i3269 = i3263[38]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3269.length; i += 2) {
  request.r(i3269[i + 0], i3269[i + 1], 1, i3268, '')
  }
  i3262.separatorParts = i3268
  i3262.physicsPositionInheritanceFactor = new pc.Vec2( i3263[39], i3263[40] )
  i3262.physicsRotationInheritanceFactor = i3263[41]
  request.r(i3263[42], i3263[43], 0, i3262, 'physicsMovementRelativeTo')
  i3262.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3263[44], i3262.meshGenerator)
  i3262.updateTiming = i3263[45]
  i3262.unscaledTime = !!i3263[46]
  request.r(i3263[47], i3263[48], 0, i3262, 'm_Material')
  i3262.m_Maskable = !!i3263[49]
  i3262.m_Color = new pc.Color(i3263[50], i3263[51], i3263[52], i3263[53])
  i3262.m_RaycastTarget = !!i3263[54]
  i3262.m_RaycastPadding = new pc.Vec4( i3263[55], i3263[56], i3263[57], i3263[58] )
  return i3262
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3276 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3277 = data
  i3276.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3277[0], i3276.settings)
  return i3276
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3278 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3279 = data
  i3278.useClipping = !!i3279[0]
  i3278.zSpacing = i3279[1]
  i3278.tintBlack = !!i3279[2]
  i3278.canvasGroupCompatible = !!i3279[3]
  i3278.pmaVertexColors = !!i3279[4]
  i3278.addNormals = !!i3279[5]
  i3278.calculateTangents = !!i3279[6]
  i3278.immutableTriangles = !!i3279[7]
  return i3278
}

Deserializers["Playable.Window"] = function (request, data, root) {
  var i3280 = root || request.c( 'Playable.Window' )
  var i3281 = data
  i3280._animWindow = i3281[0]
  i3280._animGhost = i3281[1]
  request.r(i3281[2], i3281[3], 0, i3280, '_skeletonWindow')
  request.r(i3281[4], i3281[5], 0, i3280, '_skeletonGhost')
  return i3280
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i3282 = root || request.c( 'SpineEventSoundPlayer' )
  var i3283 = data
  request.r(i3283[0], i3283[1], 0, i3282, 'skeletonAnimation')
  request.r(i3283[2], i3283[3], 0, i3282, 'skeletonGraphic')
  request.r(i3283[4], i3283[5], 0, i3282, 'audioSource')
  var i3285 = i3283[6]
  var i3284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i3285.length; i += 2) {
  request.r(i3285[i + 0], i3285[i + 1], 1, i3284, '')
  }
  i3282.audioClips = i3284
  return i3282
}

Deserializers["Girl"] = function (request, data, root) {
  var i3288 = root || request.c( 'Girl' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, '_skeletonGraphic')
  i3288._defaultAnimation = request.d('SpineAnimationData', i3289[2], i3288._defaultAnimation)
  return i3288
}

Deserializers["SpineAnimationData"] = function (request, data, root) {
  var i3290 = root || request.c( 'SpineAnimationData' )
  var i3291 = data
  i3290.animationName = i3291[0]
  i3290.loop = !!i3291[1]
  return i3290
}

Deserializers["Target"] = function (request, data, root) {
  var i3292 = root || request.c( 'Target' )
  var i3293 = data
  request.r(i3293[0], i3293[1], 0, i3292, '_skeletonGraphic')
  request.r(i3293[2], i3293[3], 0, i3292, '_dropArea')
  var i3295 = i3293[4]
  var i3294 = new (System.Collections.Generic.List$1(Bridge.ns('Target+TargetReaction')))
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.add(request.d('Target+TargetReaction', i3295[i + 0]));
  }
  i3292._reactions = i3294
  return i3292
}

Deserializers["Target+TargetReaction"] = function (request, data, root) {
  var i3298 = root || request.c( 'Target+TargetReaction' )
  var i3299 = data
  i3298.itemType = i3299[0]
  var i3301 = i3299[1]
  var i3300 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.add(request.d('SpineAnimationData', i3301[i + 0]));
  }
  i3298.animations = i3300
  return i3298
}

Deserializers["Item"] = function (request, data, root) {
  var i3304 = root || request.c( 'Item' )
  var i3305 = data
  i3304._itemType = i3305[0]
  request.r(i3305[1], i3305[2], 0, i3304, '_normalVisual')
  request.r(i3305[3], i3305[4], 0, i3304, '_activeVisual')
  request.r(i3305[5], i3305[6], 0, i3304, '_girl')
  request.r(i3305[7], i3305[8], 0, i3304, '_skeletonGraphic')
  var i3307 = i3305[9]
  var i3306 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i3307.length; i += 1) {
    i3306.add(request.d('SpineAnimationData', i3307[i + 0]));
  }
  i3304._girlAnimations = i3306
  i3304._girlSkinName = i3305[10]
  i3304._dropDetectionPadding = i3305[11]
  request.r(i3305[12], i3305[13], 0, i3304, '_dropSound')
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3309 = data
  i3308.m_Alpha = i3309[0]
  i3308.m_Interactable = !!i3309[1]
  i3308.m_BlocksRaycasts = !!i3309[2]
  i3308.m_IgnoreParentGroups = !!i3309[3]
  i3308.enabled = !!i3309[4]
  return i3308
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3310 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3311 = data
  i3310.m_Spacing = i3311[0]
  i3310.m_ChildForceExpandWidth = !!i3311[1]
  i3310.m_ChildForceExpandHeight = !!i3311[2]
  i3310.m_ChildControlWidth = !!i3311[3]
  i3310.m_ChildControlHeight = !!i3311[4]
  i3310.m_ChildScaleWidth = !!i3311[5]
  i3310.m_ChildScaleHeight = !!i3311[6]
  i3310.m_ReverseArrangement = !!i3311[7]
  i3310.m_Padding = UnityEngine.RectOffset.FromPaddings(i3311[8], i3311[9], i3311[10], i3311[11])
  i3310.m_ChildAlignment = i3311[12]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3313 = data
  i3312.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3313[0], i3312.main)
  i3312.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3313[1], i3312.colorBySpeed)
  i3312.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3313[2], i3312.colorOverLifetime)
  i3312.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3313[3], i3312.emission)
  i3312.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3313[4], i3312.rotationBySpeed)
  i3312.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3313[5], i3312.rotationOverLifetime)
  i3312.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3313[6], i3312.shape)
  i3312.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3313[7], i3312.sizeBySpeed)
  i3312.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3313[8], i3312.sizeOverLifetime)
  i3312.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3313[9], i3312.textureSheetAnimation)
  i3312.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3313[10], i3312.velocityOverLifetime)
  i3312.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3313[11], i3312.noise)
  i3312.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3313[12], i3312.inheritVelocity)
  i3312.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3313[13], i3312.forceOverLifetime)
  i3312.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3313[14], i3312.limitVelocityOverLifetime)
  i3312.useAutoRandomSeed = !!i3313[15]
  i3312.randomSeed = i3313[16]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3314 = root || new pc.ParticleSystemMain()
  var i3315 = data
  i3314.duration = i3315[0]
  i3314.loop = !!i3315[1]
  i3314.prewarm = !!i3315[2]
  i3314.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[3], i3314.startDelay)
  i3314.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[4], i3314.startLifetime)
  i3314.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[5], i3314.startSpeed)
  i3314.startSize3D = !!i3315[6]
  i3314.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[7], i3314.startSizeX)
  i3314.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[8], i3314.startSizeY)
  i3314.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[9], i3314.startSizeZ)
  i3314.startRotation3D = !!i3315[10]
  i3314.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[11], i3314.startRotationX)
  i3314.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[12], i3314.startRotationY)
  i3314.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[13], i3314.startRotationZ)
  i3314.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3315[14], i3314.startColor)
  i3314.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3315[15], i3314.gravityModifier)
  i3314.simulationSpace = i3315[16]
  request.r(i3315[17], i3315[18], 0, i3314, 'customSimulationSpace')
  i3314.simulationSpeed = i3315[19]
  i3314.useUnscaledTime = !!i3315[20]
  i3314.scalingMode = i3315[21]
  i3314.playOnAwake = !!i3315[22]
  i3314.maxParticles = i3315[23]
  i3314.emitterVelocityMode = i3315[24]
  i3314.stopAction = i3315[25]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3316 = root || new pc.MinMaxCurve()
  var i3317 = data
  i3316.mode = i3317[0]
  i3316.curveMin = new pc.AnimationCurve( { keys_flow: i3317[1] } )
  i3316.curveMax = new pc.AnimationCurve( { keys_flow: i3317[2] } )
  i3316.curveMultiplier = i3317[3]
  i3316.constantMin = i3317[4]
  i3316.constantMax = i3317[5]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3318 = root || new pc.MinMaxGradient()
  var i3319 = data
  i3318.mode = i3319[0]
  i3318.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3319[1], i3318.gradientMin)
  i3318.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3319[2], i3318.gradientMax)
  i3318.colorMin = new pc.Color(i3319[3], i3319[4], i3319[5], i3319[6])
  i3318.colorMax = new pc.Color(i3319[7], i3319[8], i3319[9], i3319[10])
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3321 = data
  i3320.mode = i3321[0]
  var i3323 = i3321[1]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3323[i + 0]) );
  }
  i3320.colorKeys = i3322
  var i3325 = i3321[2]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3325[i + 0]) );
  }
  i3320.alphaKeys = i3324
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3326 = root || new pc.ParticleSystemColorBySpeed()
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3327[1], i3326.color)
  i3326.range = new pc.Vec2( i3327[2], i3327[3] )
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3331 = data
  i3330.color = new pc.Color(i3331[0], i3331[1], i3331[2], i3331[3])
  i3330.time = i3331[4]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3335 = data
  i3334.alpha = i3335[0]
  i3334.time = i3335[1]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3336 = root || new pc.ParticleSystemColorOverLifetime()
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3337[1], i3336.color)
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3338 = root || new pc.ParticleSystemEmitter()
  var i3339 = data
  i3338.enabled = !!i3339[0]
  i3338.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3339[1], i3338.rateOverTime)
  i3338.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3339[2], i3338.rateOverDistance)
  var i3341 = i3339[3]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3341[i + 0]) );
  }
  i3338.bursts = i3340
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3344 = root || new pc.ParticleSystemBurst()
  var i3345 = data
  i3344.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[0], i3344.count)
  i3344.cycleCount = i3345[1]
  i3344.minCount = i3345[2]
  i3344.maxCount = i3345[3]
  i3344.repeatInterval = i3345[4]
  i3344.time = i3345[5]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3346 = root || new pc.ParticleSystemRotationBySpeed()
  var i3347 = data
  i3346.enabled = !!i3347[0]
  i3346.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[1], i3346.x)
  i3346.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[2], i3346.y)
  i3346.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[3], i3346.z)
  i3346.separateAxes = !!i3347[4]
  i3346.range = new pc.Vec2( i3347[5], i3347[6] )
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3349 = data
  i3348.enabled = !!i3349[0]
  i3348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[1], i3348.x)
  i3348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[2], i3348.y)
  i3348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[3], i3348.z)
  i3348.separateAxes = !!i3349[4]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemShape()
  var i3351 = data
  i3350.enabled = !!i3351[0]
  i3350.shapeType = i3351[1]
  i3350.randomDirectionAmount = i3351[2]
  i3350.sphericalDirectionAmount = i3351[3]
  i3350.randomPositionAmount = i3351[4]
  i3350.alignToDirection = !!i3351[5]
  i3350.radius = i3351[6]
  i3350.radiusMode = i3351[7]
  i3350.radiusSpread = i3351[8]
  i3350.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[9], i3350.radiusSpeed)
  i3350.radiusThickness = i3351[10]
  i3350.angle = i3351[11]
  i3350.length = i3351[12]
  i3350.boxThickness = new pc.Vec3( i3351[13], i3351[14], i3351[15] )
  i3350.meshShapeType = i3351[16]
  request.r(i3351[17], i3351[18], 0, i3350, 'mesh')
  request.r(i3351[19], i3351[20], 0, i3350, 'meshRenderer')
  request.r(i3351[21], i3351[22], 0, i3350, 'skinnedMeshRenderer')
  i3350.useMeshMaterialIndex = !!i3351[23]
  i3350.meshMaterialIndex = i3351[24]
  i3350.useMeshColors = !!i3351[25]
  i3350.normalOffset = i3351[26]
  i3350.arc = i3351[27]
  i3350.arcMode = i3351[28]
  i3350.arcSpread = i3351[29]
  i3350.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[30], i3350.arcSpeed)
  i3350.donutRadius = i3351[31]
  i3350.position = new pc.Vec3( i3351[32], i3351[33], i3351[34] )
  i3350.rotation = new pc.Vec3( i3351[35], i3351[36], i3351[37] )
  i3350.scale = new pc.Vec3( i3351[38], i3351[39], i3351[40] )
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemSizeBySpeed()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[1], i3352.x)
  i3352.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[2], i3352.y)
  i3352.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[3], i3352.z)
  i3352.separateAxes = !!i3353[4]
  i3352.range = new pc.Vec2( i3353[5], i3353[6] )
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[1], i3354.x)
  i3354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[2], i3354.y)
  i3354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[3], i3354.z)
  i3354.separateAxes = !!i3355[4]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3356 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3357 = data
  i3356.enabled = !!i3357[0]
  i3356.mode = i3357[1]
  i3356.animation = i3357[2]
  i3356.numTilesX = i3357[3]
  i3356.numTilesY = i3357[4]
  i3356.useRandomRow = !!i3357[5]
  i3356.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[6], i3356.frameOverTime)
  i3356.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[7], i3356.startFrame)
  i3356.cycleCount = i3357[8]
  i3356.rowIndex = i3357[9]
  i3356.flipU = i3357[10]
  i3356.flipV = i3357[11]
  i3356.spriteCount = i3357[12]
  var i3359 = i3357[13]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 2) {
  request.r(i3359[i + 0], i3359[i + 1], 2, i3358, '')
  }
  i3356.sprites = i3358
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3362 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3363 = data
  i3362.enabled = !!i3363[0]
  i3362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[1], i3362.x)
  i3362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[2], i3362.y)
  i3362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[3], i3362.z)
  i3362.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[4], i3362.radial)
  i3362.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[5], i3362.speedModifier)
  i3362.space = i3363[6]
  i3362.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[7], i3362.orbitalX)
  i3362.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[8], i3362.orbitalY)
  i3362.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[9], i3362.orbitalZ)
  i3362.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[10], i3362.orbitalOffsetX)
  i3362.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[11], i3362.orbitalOffsetY)
  i3362.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[12], i3362.orbitalOffsetZ)
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3364 = root || new pc.ParticleSystemNoise()
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.separateAxes = !!i3365[1]
  i3364.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[2], i3364.strengthX)
  i3364.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[3], i3364.strengthY)
  i3364.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[4], i3364.strengthZ)
  i3364.frequency = i3365[5]
  i3364.damping = !!i3365[6]
  i3364.octaveCount = i3365[7]
  i3364.octaveMultiplier = i3365[8]
  i3364.octaveScale = i3365[9]
  i3364.quality = i3365[10]
  i3364.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[11], i3364.scrollSpeed)
  i3364.scrollSpeedMultiplier = i3365[12]
  i3364.remapEnabled = !!i3365[13]
  i3364.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[14], i3364.remapX)
  i3364.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[15], i3364.remapY)
  i3364.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[16], i3364.remapZ)
  i3364.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[17], i3364.positionAmount)
  i3364.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[18], i3364.rotationAmount)
  i3364.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[19], i3364.sizeAmount)
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3366 = root || new pc.ParticleSystemInheritVelocity()
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.mode = i3367[1]
  i3366.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[2], i3366.curve)
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3368 = root || new pc.ParticleSystemForceOverLifetime()
  var i3369 = data
  i3368.enabled = !!i3369[0]
  i3368.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[1], i3368.x)
  i3368.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[2], i3368.y)
  i3368.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[3], i3368.z)
  i3368.space = i3369[4]
  i3368.randomized = !!i3369[5]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3370 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3371 = data
  i3370.enabled = !!i3371[0]
  i3370.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[1], i3370.limit)
  i3370.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[2], i3370.limitX)
  i3370.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[3], i3370.limitY)
  i3370.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[4], i3370.limitZ)
  i3370.dampen = i3371[5]
  i3370.separateAxes = !!i3371[6]
  i3370.space = i3371[7]
  i3370.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[8], i3370.drag)
  i3370.multiplyDragByParticleSize = !!i3371[9]
  i3370.multiplyDragByParticleVelocity = !!i3371[10]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3373 = data
  request.r(i3373[0], i3373[1], 0, i3372, 'mesh')
  i3372.meshCount = i3373[2]
  i3372.activeVertexStreamsCount = i3373[3]
  i3372.alignment = i3373[4]
  i3372.renderMode = i3373[5]
  i3372.sortMode = i3373[6]
  i3372.lengthScale = i3373[7]
  i3372.velocityScale = i3373[8]
  i3372.cameraVelocityScale = i3373[9]
  i3372.normalDirection = i3373[10]
  i3372.sortingFudge = i3373[11]
  i3372.minParticleSize = i3373[12]
  i3372.maxParticleSize = i3373[13]
  i3372.pivot = new pc.Vec3( i3373[14], i3373[15], i3373[16] )
  request.r(i3373[17], i3373[18], 0, i3372, 'trailMaterial')
  i3372.applyActiveColorSpace = !!i3373[19]
  i3372.enabled = !!i3373[20]
  request.r(i3373[21], i3373[22], 0, i3372, 'sharedMaterial')
  var i3375 = i3373[23]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 2) {
  request.r(i3375[i + 0], i3375[i + 1], 2, i3374, '')
  }
  i3372.sharedMaterials = i3374
  i3372.receiveShadows = !!i3373[24]
  i3372.shadowCastingMode = i3373[25]
  i3372.sortingLayerID = i3373[26]
  i3372.sortingOrder = i3373[27]
  i3372.lightmapIndex = i3373[28]
  i3372.lightmapSceneIndex = i3373[29]
  i3372.lightmapScaleOffset = new pc.Vec4( i3373[30], i3373[31], i3373[32], i3373[33] )
  i3372.lightProbeUsage = i3373[34]
  i3372.reflectionProbeUsage = i3373[35]
  return i3372
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i3376 = root || request.c( 'Playable.AudioManager' )
  var i3377 = data
  var i3379 = i3377[0]
  var i3378 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.add(request.d('Playable.SoundData', i3379[i + 0]));
  }
  i3376._sounds = i3378
  request.r(i3377[1], i3377[2], 0, i3376, '_audioMusic')
  request.r(i3377[3], i3377[4], 0, i3376, '_audioSound')
  return i3376
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i3382 = root || request.c( 'Playable.SoundData' )
  var i3383 = data
  i3382.Type = i3383[0]
  request.r(i3383[1], i3383[2], 0, i3382, 'Clip')
  return i3382
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'm_FirstSelected')
  i3384.m_sendNavigationEvents = !!i3385[2]
  i3384.m_DragThreshold = i3385[3]
  return i3384
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3386 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3387 = data
  i3386.m_HorizontalAxis = i3387[0]
  i3386.m_VerticalAxis = i3387[1]
  i3386.m_SubmitButton = i3387[2]
  i3386.m_CancelButton = i3387[3]
  i3386.m_InputActionsPerSecond = i3387[4]
  i3386.m_RepeatDelay = i3387[5]
  i3386.m_ForceModuleActive = !!i3387[6]
  i3386.m_SendPointerHoverToParent = !!i3387[7]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3389 = data
  i3388.ambientIntensity = i3389[0]
  i3388.reflectionIntensity = i3389[1]
  i3388.ambientMode = i3389[2]
  i3388.ambientLight = new pc.Color(i3389[3], i3389[4], i3389[5], i3389[6])
  i3388.ambientSkyColor = new pc.Color(i3389[7], i3389[8], i3389[9], i3389[10])
  i3388.ambientGroundColor = new pc.Color(i3389[11], i3389[12], i3389[13], i3389[14])
  i3388.ambientEquatorColor = new pc.Color(i3389[15], i3389[16], i3389[17], i3389[18])
  i3388.fogColor = new pc.Color(i3389[19], i3389[20], i3389[21], i3389[22])
  i3388.fogEndDistance = i3389[23]
  i3388.fogStartDistance = i3389[24]
  i3388.fogDensity = i3389[25]
  i3388.fog = !!i3389[26]
  request.r(i3389[27], i3389[28], 0, i3388, 'skybox')
  i3388.fogMode = i3389[29]
  var i3391 = i3389[30]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3391[i + 0]) );
  }
  i3388.lightmaps = i3390
  i3388.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3389[31], i3388.lightProbes)
  i3388.lightmapsMode = i3389[32]
  i3388.mixedBakeMode = i3389[33]
  i3388.environmentLightingMode = i3389[34]
  i3388.ambientProbe = new pc.SphericalHarmonicsL2(i3389[35])
  request.r(i3389[36], i3389[37], 0, i3388, 'customReflection')
  request.r(i3389[38], i3389[39], 0, i3388, 'defaultReflection')
  i3388.defaultReflectionMode = i3389[40]
  i3388.defaultReflectionResolution = i3389[41]
  i3388.sunLightObjectId = i3389[42]
  i3388.pixelLightCount = i3389[43]
  i3388.defaultReflectionHDR = !!i3389[44]
  i3388.hasLightDataAsset = !!i3389[45]
  i3388.hasManualGenerate = !!i3389[46]
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'lightmapColor')
  request.r(i3395[2], i3395[3], 0, i3394, 'lightmapDirection')
  request.r(i3395[4], i3395[5], 0, i3394, 'shadowMask')
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3396 = root || new UnityEngine.LightProbes()
  var i3397 = data
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3405 = data
  var i3407 = i3405[0]
  var i3406 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3407[i + 0]));
  }
  i3404.ShaderCompilationErrors = i3406
  i3404.name = i3405[1]
  i3404.guid = i3405[2]
  var i3409 = i3405[3]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( i3409[i + 0] );
  }
  i3404.shaderDefinedKeywords = i3408
  var i3411 = i3405[4]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3411[i + 0]) );
  }
  i3404.passes = i3410
  var i3413 = i3405[5]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3413[i + 0]) );
  }
  i3404.usePasses = i3412
  var i3415 = i3405[6]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3415[i + 0]) );
  }
  i3404.defaultParameterValues = i3414
  request.r(i3405[7], i3405[8], 0, i3404, 'unityFallbackShader')
  i3404.readDepth = !!i3405[9]
  i3404.hasDepthOnlyPass = !!i3405[10]
  i3404.isCreatedByShaderGraph = !!i3405[11]
  i3404.disableBatching = !!i3405[12]
  i3404.compiled = !!i3405[13]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3419 = data
  i3418.shaderName = i3419[0]
  i3418.errorMessage = i3419[1]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3422 = root || new pc.UnityShaderPass()
  var i3423 = data
  i3422.id = i3423[0]
  i3422.subShaderIndex = i3423[1]
  i3422.name = i3423[2]
  i3422.passType = i3423[3]
  i3422.grabPassTextureName = i3423[4]
  i3422.usePass = !!i3423[5]
  i3422.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[6], i3422.zTest)
  i3422.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[7], i3422.zWrite)
  i3422.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[8], i3422.culling)
  i3422.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3423[9], i3422.blending)
  i3422.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3423[10], i3422.alphaBlending)
  i3422.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[11], i3422.colorWriteMask)
  i3422.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[12], i3422.offsetUnits)
  i3422.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[13], i3422.offsetFactor)
  i3422.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[14], i3422.stencilRef)
  i3422.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[15], i3422.stencilReadMask)
  i3422.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3423[16], i3422.stencilWriteMask)
  i3422.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3423[17], i3422.stencilOp)
  i3422.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3423[18], i3422.stencilOpFront)
  i3422.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3423[19], i3422.stencilOpBack)
  var i3425 = i3423[20]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3425[i + 0]) );
  }
  i3422.tags = i3424
  var i3427 = i3423[21]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( i3427[i + 0] );
  }
  i3422.passDefinedKeywords = i3426
  var i3429 = i3423[22]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 1) {
    i3428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3429[i + 0]) );
  }
  i3422.passDefinedKeywordGroups = i3428
  var i3431 = i3423[23]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3431[i + 0]) );
  }
  i3422.variants = i3430
  var i3433 = i3423[24]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3433[i + 0]) );
  }
  i3422.excludedVariants = i3432
  i3422.hasDepthReader = !!i3423[25]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3435 = data
  i3434.val = i3435[0]
  i3434.name = i3435[1]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3437 = data
  i3436.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[0], i3436.src)
  i3436.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[1], i3436.dst)
  i3436.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3437[2], i3436.op)
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3439 = data
  i3438.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[0], i3438.pass)
  i3438.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[1], i3438.fail)
  i3438.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[2], i3438.zFail)
  i3438.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[3], i3438.comp)
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.value = i3443[1]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3447 = data
  var i3449 = i3447[0]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 1) {
    i3448.push( i3449[i + 0] );
  }
  i3446.keywords = i3448
  i3446.hasDiscard = !!i3447[1]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3453 = data
  i3452.passId = i3453[0]
  i3452.subShaderIndex = i3453[1]
  var i3455 = i3453[2]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( i3455[i + 0] );
  }
  i3452.keywords = i3454
  i3452.vertexProgram = i3453[3]
  i3452.fragmentProgram = i3453[4]
  i3452.exportedForWebGl2 = !!i3453[5]
  i3452.readDepth = !!i3453[6]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'shader')
  i3458.pass = i3459[2]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3463 = data
  i3462.name = i3463[0]
  i3462.type = i3463[1]
  i3462.value = new pc.Vec4( i3463[2], i3463[3], i3463[4], i3463[5] )
  i3462.textureValue = i3463[6]
  i3462.shaderPropertyFlag = i3463[7]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3465 = data
  i3464.name = i3465[0]
  request.r(i3465[1], i3465[2], 0, i3464, 'texture')
  i3464.aabb = i3465[3]
  i3464.vertices = i3465[4]
  i3464.triangles = i3465[5]
  i3464.textureRect = UnityEngine.Rect.MinMaxRect(i3465[6], i3465[7], i3465[8], i3465[9])
  i3464.packedRect = UnityEngine.Rect.MinMaxRect(i3465[10], i3465[11], i3465[12], i3465[13])
  i3464.border = new pc.Vec4( i3465[14], i3465[15], i3465[16], i3465[17] )
  i3464.transparency = i3465[18]
  i3464.bounds = i3465[19]
  i3464.pixelsPerUnit = i3465[20]
  i3464.textureWidth = i3465[21]
  i3464.textureHeight = i3465[22]
  i3464.nativeSize = new pc.Vec2( i3465[23], i3465[24] )
  i3464.pivot = new pc.Vec2( i3465[25], i3465[26] )
  i3464.textureRectOffset = new pc.Vec2( i3465[27], i3465[28] )
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3467 = data
  i3466.name = i3467[0]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3469 = data
  i3468.name = i3469[0]
  i3468.ascent = i3469[1]
  i3468.originalLineHeight = i3469[2]
  i3468.fontSize = i3469[3]
  var i3471 = i3469[4]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3471[i + 0]) );
  }
  i3468.characterInfo = i3470
  request.r(i3469[5], i3469[6], 0, i3468, 'texture')
  i3468.originalFontSize = i3469[7]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3475 = data
  i3474.index = i3475[0]
  i3474.advance = i3475[1]
  i3474.bearing = i3475[2]
  i3474.glyphWidth = i3475[3]
  i3474.glyphHeight = i3475[4]
  i3474.minX = i3475[5]
  i3474.maxX = i3475[6]
  i3474.minY = i3475[7]
  i3474.maxY = i3475[8]
  i3474.uvBottomLeftX = i3475[9]
  i3474.uvBottomLeftY = i3475[10]
  i3474.uvBottomRightX = i3475[11]
  i3474.uvBottomRightY = i3475[12]
  i3474.uvTopLeftX = i3475[13]
  i3474.uvTopLeftY = i3475[14]
  i3474.uvTopRightX = i3475[15]
  i3474.uvTopRightY = i3475[16]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3477 = data
  i3476.name = i3477[0]
  i3476.bytes64 = i3477[1]
  i3476.data = i3477[2]
  return i3476
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3478 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3479 = data
  i3478.normalStyle = i3479[0]
  i3478.normalSpacingOffset = i3479[1]
  i3478.boldStyle = i3479[2]
  i3478.boldSpacing = i3479[3]
  i3478.italicStyle = i3479[4]
  i3478.tabSize = i3479[5]
  request.r(i3479[6], i3479[7], 0, i3478, 'atlas')
  i3478.m_SourceFontFileGUID = i3479[8]
  i3478.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3479[9], i3478.m_CreationSettings)
  request.r(i3479[10], i3479[11], 0, i3478, 'm_SourceFontFile')
  i3478.m_SourceFontFilePath = i3479[12]
  i3478.m_AtlasPopulationMode = i3479[13]
  i3478.InternalDynamicOS = !!i3479[14]
  var i3481 = i3479[15]
  var i3480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.add(request.d('UnityEngine.TextCore.Glyph', i3481[i + 0]));
  }
  i3478.m_GlyphTable = i3480
  var i3483 = i3479[16]
  var i3482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.add(request.d('TMPro.TMP_Character', i3483[i + 0]));
  }
  i3478.m_CharacterTable = i3482
  var i3485 = i3479[17]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 2) {
  request.r(i3485[i + 0], i3485[i + 1], 2, i3484, '')
  }
  i3478.m_AtlasTextures = i3484
  i3478.m_AtlasTextureIndex = i3479[18]
  i3478.m_IsMultiAtlasTexturesEnabled = !!i3479[19]
  i3478.m_GetFontFeatures = !!i3479[20]
  i3478.m_ClearDynamicDataOnBuild = !!i3479[21]
  i3478.m_AtlasWidth = i3479[22]
  i3478.m_AtlasHeight = i3479[23]
  i3478.m_AtlasPadding = i3479[24]
  i3478.m_AtlasRenderMode = i3479[25]
  var i3487 = i3479[26]
  var i3486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.add(request.d('UnityEngine.TextCore.GlyphRect', i3487[i + 0]));
  }
  i3478.m_UsedGlyphRects = i3486
  var i3489 = i3479[27]
  var i3488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.add(request.d('UnityEngine.TextCore.GlyphRect', i3489[i + 0]));
  }
  i3478.m_FreeGlyphRects = i3488
  i3478.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3479[28], i3478.m_FontFeatureTable)
  i3478.m_ShouldReimportFontFeatures = !!i3479[29]
  var i3491 = i3479[30]
  var i3490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3491.length; i += 2) {
  request.r(i3491[i + 0], i3491[i + 1], 1, i3490, '')
  }
  i3478.m_FallbackFontAssetTable = i3490
  var i3493 = i3479[31]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('TMPro.TMP_FontWeightPair', i3493[i + 0]) );
  }
  i3478.m_FontWeightTable = i3492
  var i3495 = i3479[32]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('TMPro.TMP_FontWeightPair', i3495[i + 0]) );
  }
  i3478.fontWeights = i3494
  i3478.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3479[33], i3478.m_fontInfo)
  var i3497 = i3479[34]
  var i3496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.add(request.d('TMPro.TMP_Glyph', i3497[i + 0]));
  }
  i3478.m_glyphInfoList = i3496
  i3478.m_KerningTable = request.d('TMPro.KerningTable', i3479[35], i3478.m_KerningTable)
  var i3499 = i3479[36]
  var i3498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 1, i3498, '')
  }
  i3478.fallbackFontAssets = i3498
  i3478.m_Version = i3479[37]
  i3478.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3479[38], i3478.m_FaceInfo)
  request.r(i3479[39], i3479[40], 0, i3478, 'm_Material')
  return i3478
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3500 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3501 = data
  i3500.sourceFontFileName = i3501[0]
  i3500.sourceFontFileGUID = i3501[1]
  i3500.faceIndex = i3501[2]
  i3500.pointSizeSamplingMode = i3501[3]
  i3500.pointSize = i3501[4]
  i3500.padding = i3501[5]
  i3500.paddingMode = i3501[6]
  i3500.packingMode = i3501[7]
  i3500.atlasWidth = i3501[8]
  i3500.atlasHeight = i3501[9]
  i3500.characterSetSelectionMode = i3501[10]
  i3500.characterSequence = i3501[11]
  i3500.referencedFontAssetGUID = i3501[12]
  i3500.referencedTextAssetGUID = i3501[13]
  i3500.fontStyle = i3501[14]
  i3500.fontStyleModifier = i3501[15]
  i3500.renderMode = i3501[16]
  i3500.includeFontFeatures = !!i3501[17]
  return i3500
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3505 = data
  i3504.m_Index = i3505[0]
  i3504.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3505[1], i3504.m_Metrics)
  i3504.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3505[2], i3504.m_GlyphRect)
  i3504.m_Scale = i3505[3]
  i3504.m_AtlasIndex = i3505[4]
  i3504.m_ClassDefinitionType = i3505[5]
  return i3504
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3507 = data
  i3506.m_Width = i3507[0]
  i3506.m_Height = i3507[1]
  i3506.m_HorizontalBearingX = i3507[2]
  i3506.m_HorizontalBearingY = i3507[3]
  i3506.m_HorizontalAdvance = i3507[4]
  return i3506
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3509 = data
  i3508.m_X = i3509[0]
  i3508.m_Y = i3509[1]
  i3508.m_Width = i3509[2]
  i3508.m_Height = i3509[3]
  return i3508
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3512 = root || request.c( 'TMPro.TMP_Character' )
  var i3513 = data
  i3512.m_ElementType = i3513[0]
  i3512.m_Unicode = i3513[1]
  i3512.m_GlyphIndex = i3513[2]
  i3512.m_Scale = i3513[3]
  return i3512
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3518 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3519 = data
  var i3521 = i3519[0]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.add(request.d('TMPro.MultipleSubstitutionRecord', i3521[i + 0]));
  }
  i3518.m_MultipleSubstitutionRecords = i3520
  var i3523 = i3519[1]
  var i3522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.add(request.d('TMPro.LigatureSubstitutionRecord', i3523[i + 0]));
  }
  i3518.m_LigatureSubstitutionRecords = i3522
  var i3525 = i3519[2]
  var i3524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3525[i + 0]));
  }
  i3518.m_GlyphPairAdjustmentRecords = i3524
  var i3527 = i3519[3]
  var i3526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3527[i + 0]));
  }
  i3518.m_MarkToBaseAdjustmentRecords = i3526
  var i3529 = i3519[4]
  var i3528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3529[i + 0]));
  }
  i3518.m_MarkToMarkAdjustmentRecords = i3528
  return i3518
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3532 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3533 = data
  i3532.m_TargetGlyphID = i3533[0]
  i3532.m_SubstituteGlyphIDs = i3533[1]
  return i3532
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3536 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3537 = data
  i3536.m_ComponentGlyphIDs = i3537[0]
  i3536.m_LigatureGlyphID = i3537[1]
  return i3536
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3541 = data
  i3540.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3541[0], i3540.m_FirstAdjustmentRecord)
  i3540.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3541[1], i3540.m_SecondAdjustmentRecord)
  i3540.m_FeatureLookupFlags = i3541[2]
  return i3540
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3544 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3545 = data
  i3544.m_BaseGlyphID = i3545[0]
  i3544.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3545[1], i3544.m_BaseGlyphAnchorPoint)
  i3544.m_MarkGlyphID = i3545[2]
  i3544.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3545[3], i3544.m_MarkPositionAdjustment)
  return i3544
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3548 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3549 = data
  i3548.m_BaseMarkGlyphID = i3549[0]
  i3548.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3549[1], i3548.m_BaseMarkGlyphAnchorPoint)
  i3548.m_CombiningMarkGlyphID = i3549[2]
  i3548.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3549[3], i3548.m_CombiningMarkPositionAdjustment)
  return i3548
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3554 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3555 = data
  request.r(i3555[0], i3555[1], 0, i3554, 'regularTypeface')
  request.r(i3555[2], i3555[3], 0, i3554, 'italicTypeface')
  return i3554
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3556 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3557 = data
  i3556.Name = i3557[0]
  i3556.PointSize = i3557[1]
  i3556.Scale = i3557[2]
  i3556.CharacterCount = i3557[3]
  i3556.LineHeight = i3557[4]
  i3556.Baseline = i3557[5]
  i3556.Ascender = i3557[6]
  i3556.CapHeight = i3557[7]
  i3556.Descender = i3557[8]
  i3556.CenterLine = i3557[9]
  i3556.SuperscriptOffset = i3557[10]
  i3556.SubscriptOffset = i3557[11]
  i3556.SubSize = i3557[12]
  i3556.Underline = i3557[13]
  i3556.UnderlineThickness = i3557[14]
  i3556.strikethrough = i3557[15]
  i3556.strikethroughThickness = i3557[16]
  i3556.TabWidth = i3557[17]
  i3556.Padding = i3557[18]
  i3556.AtlasWidth = i3557[19]
  i3556.AtlasHeight = i3557[20]
  return i3556
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3560 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3561 = data
  i3560.id = i3561[0]
  i3560.x = i3561[1]
  i3560.y = i3561[2]
  i3560.width = i3561[3]
  i3560.height = i3561[4]
  i3560.xOffset = i3561[5]
  i3560.yOffset = i3561[6]
  i3560.xAdvance = i3561[7]
  i3560.scale = i3561[8]
  return i3560
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3562 = root || request.c( 'TMPro.KerningTable' )
  var i3563 = data
  var i3565 = i3563[0]
  var i3564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.add(request.d('TMPro.KerningPair', i3565[i + 0]));
  }
  i3562.kerningPairs = i3564
  return i3562
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3568 = root || request.c( 'TMPro.KerningPair' )
  var i3569 = data
  i3568.xOffset = i3569[0]
  i3568.m_FirstGlyph = i3569[1]
  i3568.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3569[2], i3568.m_FirstGlyphAdjustments)
  i3568.m_SecondGlyph = i3569[3]
  i3568.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3569[4], i3568.m_SecondGlyphAdjustments)
  i3568.m_IgnoreSpacingAdjustments = !!i3569[5]
  return i3568
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3571 = data
  i3570.m_FaceIndex = i3571[0]
  i3570.m_FamilyName = i3571[1]
  i3570.m_StyleName = i3571[2]
  i3570.m_PointSize = i3571[3]
  i3570.m_Scale = i3571[4]
  i3570.m_UnitsPerEM = i3571[5]
  i3570.m_LineHeight = i3571[6]
  i3570.m_AscentLine = i3571[7]
  i3570.m_CapLine = i3571[8]
  i3570.m_MeanLine = i3571[9]
  i3570.m_Baseline = i3571[10]
  i3570.m_DescentLine = i3571[11]
  i3570.m_SuperscriptOffset = i3571[12]
  i3570.m_SuperscriptSize = i3571[13]
  i3570.m_SubscriptOffset = i3571[14]
  i3570.m_SubscriptSize = i3571[15]
  i3570.m_UnderlineOffset = i3571[16]
  i3570.m_UnderlineThickness = i3571[17]
  i3570.m_StrikethroughOffset = i3571[18]
  i3570.m_StrikethroughThickness = i3571[19]
  i3570.m_TabWidth = i3571[20]
  return i3570
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3572 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3573 = data
  var i3575 = i3573[0]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 2) {
  request.r(i3575[i + 0], i3575[i + 1], 2, i3574, '')
  }
  i3572.atlasAssets = i3574
  i3572.scale = i3573[1]
  request.r(i3573[2], i3573[3], 0, i3572, 'skeletonJSON')
  i3572.isUpgradingBlendModeMaterials = !!i3573[4]
  i3572.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3573[5], i3572.blendModeMaterials)
  var i3577 = i3573[6]
  var i3576 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3577.length; i += 2) {
  request.r(i3577[i + 0], i3577[i + 1], 1, i3576, '')
  }
  i3572.skeletonDataModifiers = i3576
  var i3579 = i3573[7]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( i3579[i + 0] );
  }
  i3572.fromAnimation = i3578
  var i3581 = i3573[8]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( i3581[i + 0] );
  }
  i3572.toAnimation = i3580
  i3572.duration = i3573[9]
  i3572.defaultMix = i3573[10]
  request.r(i3573[11], i3573[12], 0, i3572, 'controller')
  return i3572
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3584 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3585 = data
  i3584.applyAdditiveMaterial = !!i3585[0]
  var i3587 = i3585[1]
  var i3586 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3587[i + 0]));
  }
  i3584.additiveMaterials = i3586
  var i3589 = i3585[2]
  var i3588 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3589[i + 0]));
  }
  i3584.multiplyMaterials = i3588
  var i3591 = i3585[3]
  var i3590 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3591[i + 0]));
  }
  i3584.screenMaterials = i3590
  i3584.requiresBlendModeMaterials = !!i3585[4]
  return i3584
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3594 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3595 = data
  i3594.pageName = i3595[0]
  request.r(i3595[1], i3595[2], 0, i3594, 'material')
  return i3594
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3598 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'atlasFile')
  var i3601 = i3599[2]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 2, i3600, '')
  }
  i3598.materials = i3600
  i3598.textureLoadingMode = i3599[3]
  request.r(i3599[4], i3599[5], 0, i3598, 'onDemandTextureLoader')
  return i3598
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3603 = data
  i3602.useSafeMode = !!i3603[0]
  i3602.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3603[1], i3602.safeModeOptions)
  i3602.timeScale = i3603[2]
  i3602.unscaledTimeScale = i3603[3]
  i3602.useSmoothDeltaTime = !!i3603[4]
  i3602.maxSmoothUnscaledTime = i3603[5]
  i3602.rewindCallbackMode = i3603[6]
  i3602.showUnityEditorReport = !!i3603[7]
  i3602.logBehaviour = i3603[8]
  i3602.drawGizmos = !!i3603[9]
  i3602.defaultRecyclable = !!i3603[10]
  i3602.defaultAutoPlay = i3603[11]
  i3602.defaultUpdateType = i3603[12]
  i3602.defaultTimeScaleIndependent = !!i3603[13]
  i3602.defaultEaseType = i3603[14]
  i3602.defaultEaseOvershootOrAmplitude = i3603[15]
  i3602.defaultEasePeriod = i3603[16]
  i3602.defaultAutoKill = !!i3603[17]
  i3602.defaultLoopType = i3603[18]
  i3602.debugMode = !!i3603[19]
  i3602.debugStoreTargetId = !!i3603[20]
  i3602.showPreviewPanel = !!i3603[21]
  i3602.storeSettingsLocation = i3603[22]
  i3602.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3603[23], i3602.modules)
  i3602.createASMDEF = !!i3603[24]
  i3602.showPlayingTweens = !!i3603[25]
  i3602.showPausedTweens = !!i3603[26]
  return i3602
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3604 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3605 = data
  i3604.logBehaviour = i3605[0]
  i3604.nestedTweenFailureBehaviour = i3605[1]
  return i3604
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3606 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3607 = data
  i3606.showPanel = !!i3607[0]
  i3606.audioEnabled = !!i3607[1]
  i3606.physicsEnabled = !!i3607[2]
  i3606.physics2DEnabled = !!i3607[3]
  i3606.spriteEnabled = !!i3607[4]
  i3606.uiEnabled = !!i3607[5]
  i3606.uiToolkitEnabled = !!i3607[6]
  i3606.textMeshProEnabled = !!i3607[7]
  i3606.tk2DEnabled = !!i3607[8]
  i3606.deAudioEnabled = !!i3607[9]
  i3606.deUnityExtendedEnabled = !!i3607[10]
  i3606.epoOutlineEnabled = !!i3607[11]
  return i3606
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3608 = root || request.c( 'TMPro.TMP_Settings' )
  var i3609 = data
  i3608.assetVersion = i3609[0]
  i3608.m_TextWrappingMode = i3609[1]
  i3608.m_enableKerning = !!i3609[2]
  var i3611 = i3609[3]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.add(i3611[i + 0]);
  }
  i3608.m_ActiveFontFeatures = i3610
  i3608.m_enableExtraPadding = !!i3609[4]
  i3608.m_enableTintAllSprites = !!i3609[5]
  i3608.m_enableParseEscapeCharacters = !!i3609[6]
  i3608.m_EnableRaycastTarget = !!i3609[7]
  i3608.m_GetFontFeaturesAtRuntime = !!i3609[8]
  i3608.m_missingGlyphCharacter = i3609[9]
  i3608.m_ClearDynamicDataOnBuild = !!i3609[10]
  i3608.m_warningsDisabled = !!i3609[11]
  request.r(i3609[12], i3609[13], 0, i3608, 'm_defaultFontAsset')
  i3608.m_defaultFontAssetPath = i3609[14]
  i3608.m_defaultFontSize = i3609[15]
  i3608.m_defaultAutoSizeMinRatio = i3609[16]
  i3608.m_defaultAutoSizeMaxRatio = i3609[17]
  i3608.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3609[18], i3609[19] )
  i3608.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3609[20], i3609[21] )
  i3608.m_autoSizeTextContainer = !!i3609[22]
  i3608.m_IsTextObjectScaleStatic = !!i3609[23]
  var i3613 = i3609[24]
  var i3612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 1, i3612, '')
  }
  i3608.m_fallbackFontAssets = i3612
  i3608.m_matchMaterialPreset = !!i3609[25]
  i3608.m_HideSubTextObjects = !!i3609[26]
  request.r(i3609[27], i3609[28], 0, i3608, 'm_defaultSpriteAsset')
  i3608.m_defaultSpriteAssetPath = i3609[29]
  i3608.m_enableEmojiSupport = !!i3609[30]
  i3608.m_MissingCharacterSpriteUnicode = i3609[31]
  var i3615 = i3609[32]
  var i3614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3615.length; i += 2) {
  request.r(i3615[i + 0], i3615[i + 1], 1, i3614, '')
  }
  i3608.m_EmojiFallbackTextAssets = i3614
  i3608.m_defaultColorGradientPresetsPath = i3609[33]
  request.r(i3609[34], i3609[35], 0, i3608, 'm_defaultStyleSheet')
  i3608.m_StyleSheetsResourcePath = i3609[36]
  request.r(i3609[37], i3609[38], 0, i3608, 'm_leadingCharacters')
  request.r(i3609[39], i3609[40], 0, i3608, 'm_followingCharacters')
  i3608.m_UseModernHangulLineBreakingRules = !!i3609[41]
  return i3608
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3619 = data
  i3618.m_GlyphIndex = i3619[0]
  i3618.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3619[1], i3618.m_GlyphValueRecord)
  return i3618
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3621 = data
  i3620.m_XPlacement = i3621[0]
  i3620.m_YPlacement = i3621[1]
  i3620.m_XAdvance = i3621[2]
  i3620.m_YAdvance = i3621[3]
  return i3620
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3622 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'spriteSheet')
  var i3625 = i3623[2]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.add(request.d('TMPro.TMP_Sprite', i3625[i + 0]));
  }
  i3622.spriteInfoList = i3624
  var i3627 = i3623[3]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3627.length; i += 2) {
  request.r(i3627[i + 0], i3627[i + 1], 1, i3626, '')
  }
  i3622.fallbackSpriteAssets = i3626
  var i3629 = i3623[4]
  var i3628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.add(request.d('TMPro.TMP_SpriteCharacter', i3629[i + 0]));
  }
  i3622.m_SpriteCharacterTable = i3628
  var i3631 = i3623[5]
  var i3630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.add(request.d('TMPro.TMP_SpriteGlyph', i3631[i + 0]));
  }
  i3622.m_GlyphTable = i3630
  i3622.m_Version = i3623[6]
  i3622.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3623[7], i3622.m_FaceInfo)
  request.r(i3623[8], i3623[9], 0, i3622, 'm_Material')
  return i3622
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3634 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.hashCode = i3635[1]
  i3634.unicode = i3635[2]
  i3634.pivot = new pc.Vec2( i3635[3], i3635[4] )
  request.r(i3635[5], i3635[6], 0, i3634, 'sprite')
  i3634.id = i3635[7]
  i3634.x = i3635[8]
  i3634.y = i3635[9]
  i3634.width = i3635[10]
  i3634.height = i3635[11]
  i3634.xOffset = i3635[12]
  i3634.yOffset = i3635[13]
  i3634.xAdvance = i3635[14]
  i3634.scale = i3635[15]
  return i3634
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3640 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3641 = data
  i3640.m_Name = i3641[0]
  i3640.m_ElementType = i3641[1]
  i3640.m_Unicode = i3641[2]
  i3640.m_GlyphIndex = i3641[3]
  i3640.m_Scale = i3641[4]
  return i3640
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3644 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3645 = data
  request.r(i3645[0], i3645[1], 0, i3644, 'sprite')
  i3644.m_Index = i3645[2]
  i3644.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3645[3], i3644.m_Metrics)
  i3644.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3645[4], i3644.m_GlyphRect)
  i3644.m_Scale = i3645[5]
  i3644.m_AtlasIndex = i3645[6]
  i3644.m_ClassDefinitionType = i3645[7]
  return i3644
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3646 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3647 = data
  var i3649 = i3647[0]
  var i3648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.add(request.d('TMPro.TMP_Style', i3649[i + 0]));
  }
  i3646.m_StyleList = i3648
  return i3646
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3652 = root || request.c( 'TMPro.TMP_Style' )
  var i3653 = data
  i3652.m_Name = i3653[0]
  i3652.m_HashCode = i3653[1]
  i3652.m_OpeningDefinition = i3653[2]
  i3652.m_ClosingDefinition = i3653[3]
  i3652.m_OpeningTagArray = i3653[4]
  i3652.m_ClosingTagArray = i3653[5]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3655 = data
  var i3657 = i3655[0]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3657[i + 0]) );
  }
  i3654.files = i3656
  i3654.componentToPrefabIds = i3655[1]
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3661 = data
  i3660.path = i3661[0]
  request.r(i3661[1], i3661[2], 0, i3660, 'unityObject')
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3663 = data
  var i3665 = i3663[0]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3665[i + 0]) );
  }
  i3662.scriptsExecutionOrder = i3664
  var i3667 = i3663[1]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3667[i + 0]) );
  }
  i3662.sortingLayers = i3666
  var i3669 = i3663[2]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3669[i + 0]) );
  }
  i3662.cullingLayers = i3668
  i3662.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3663[3], i3662.timeSettings)
  i3662.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3663[4], i3662.physicsSettings)
  i3662.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3663[5], i3662.physics2DSettings)
  i3662.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3663[6], i3662.qualitySettings)
  i3662.enableRealtimeShadows = !!i3663[7]
  i3662.enableAutoInstancing = !!i3663[8]
  i3662.enableStaticBatching = !!i3663[9]
  i3662.enableDynamicBatching = !!i3663[10]
  i3662.usePreservativeDynamicBatching = !!i3663[11]
  i3662.lightmapEncodingQuality = i3663[12]
  i3662.desiredColorSpace = i3663[13]
  var i3671 = i3663[14]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( i3671[i + 0] );
  }
  i3662.allTags = i3670
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3675 = data
  i3674.name = i3675[0]
  i3674.value = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3679 = data
  i3678.id = i3679[0]
  i3678.name = i3679[1]
  i3678.value = i3679[2]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3683 = data
  i3682.id = i3683[0]
  i3682.name = i3683[1]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3685 = data
  i3684.fixedDeltaTime = i3685[0]
  i3684.maximumDeltaTime = i3685[1]
  i3684.timeScale = i3685[2]
  i3684.maximumParticleTimestep = i3685[3]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3687 = data
  i3686.gravity = new pc.Vec3( i3687[0], i3687[1], i3687[2] )
  i3686.defaultSolverIterations = i3687[3]
  i3686.bounceThreshold = i3687[4]
  i3686.autoSyncTransforms = !!i3687[5]
  i3686.autoSimulation = !!i3687[6]
  var i3689 = i3687[7]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3689[i + 0]) );
  }
  i3686.collisionMatrix = i3688
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3693 = data
  i3692.enabled = !!i3693[0]
  i3692.layerId = i3693[1]
  i3692.otherLayerId = i3693[2]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'material')
  i3694.gravity = new pc.Vec2( i3695[2], i3695[3] )
  i3694.positionIterations = i3695[4]
  i3694.velocityIterations = i3695[5]
  i3694.velocityThreshold = i3695[6]
  i3694.maxLinearCorrection = i3695[7]
  i3694.maxAngularCorrection = i3695[8]
  i3694.maxTranslationSpeed = i3695[9]
  i3694.maxRotationSpeed = i3695[10]
  i3694.baumgarteScale = i3695[11]
  i3694.baumgarteTOIScale = i3695[12]
  i3694.timeToSleep = i3695[13]
  i3694.linearSleepTolerance = i3695[14]
  i3694.angularSleepTolerance = i3695[15]
  i3694.defaultContactOffset = i3695[16]
  i3694.autoSimulation = !!i3695[17]
  i3694.queriesHitTriggers = !!i3695[18]
  i3694.queriesStartInColliders = !!i3695[19]
  i3694.callbacksOnDisable = !!i3695[20]
  i3694.reuseCollisionCallbacks = !!i3695[21]
  i3694.autoSyncTransforms = !!i3695[22]
  var i3697 = i3695[23]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3697[i + 0]) );
  }
  i3694.collisionMatrix = i3696
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3701 = data
  i3700.enabled = !!i3701[0]
  i3700.layerId = i3701[1]
  i3700.otherLayerId = i3701[2]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3703 = data
  var i3705 = i3703[0]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3705[i + 0]) );
  }
  i3702.qualityLevels = i3704
  var i3707 = i3703[1]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( i3707[i + 0] );
  }
  i3702.names = i3706
  i3702.shadows = i3703[2]
  i3702.anisotropicFiltering = i3703[3]
  i3702.antiAliasing = i3703[4]
  i3702.lodBias = i3703[5]
  i3702.shadowCascades = i3703[6]
  i3702.shadowDistance = i3703[7]
  i3702.shadowmaskMode = i3703[8]
  i3702.shadowProjection = i3703[9]
  i3702.shadowResolution = i3703[10]
  i3702.softParticles = !!i3703[11]
  i3702.softVegetation = !!i3703[12]
  i3702.activeColorSpace = i3703[13]
  i3702.desiredColorSpace = i3703[14]
  i3702.masterTextureLimit = i3703[15]
  i3702.maxQueuedFrames = i3703[16]
  i3702.particleRaycastBudget = i3703[17]
  i3702.pixelLightCount = i3703[18]
  i3702.realtimeReflectionProbes = !!i3703[19]
  i3702.shadowCascade2Split = i3703[20]
  i3702.shadowCascade4Split = new pc.Vec3( i3703[21], i3703[22], i3703[23] )
  i3702.streamingMipmapsActive = !!i3703[24]
  i3702.vSyncCount = i3703[25]
  i3702.asyncUploadBufferSize = i3703[26]
  i3702.asyncUploadTimeSlice = i3703[27]
  i3702.billboardsFaceCameraPosition = !!i3703[28]
  i3702.shadowNearPlaneOffset = i3703[29]
  i3702.streamingMipmapsMemoryBudget = i3703[30]
  i3702.maximumLODLevel = i3703[31]
  i3702.streamingMipmapsAddAllCameras = !!i3703[32]
  i3702.streamingMipmapsMaxLevelReduction = i3703[33]
  i3702.streamingMipmapsRenderersPerFrame = i3703[34]
  i3702.resolutionScalingFixedDPIFactor = i3703[35]
  i3702.streamingMipmapsMaxFileIORequests = i3703[36]
  i3702.currentQualityLevel = i3703[37]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3713 = data
  i3712.weight = i3713[0]
  i3712.vertices = i3713[1]
  i3712.normals = i3713[2]
  i3712.tangents = i3713[3]
  return i3712
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3714 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3715 = data
  i3714.m_XCoordinate = i3715[0]
  i3714.m_YCoordinate = i3715[1]
  return i3714
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3716 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3717 = data
  i3716.m_XPositionAdjustment = i3717[0]
  i3716.m_YPositionAdjustment = i3717[1]
  return i3716
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3718 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3719 = data
  i3718.xPlacement = i3719[0]
  i3718.yPlacement = i3719[1]
  i3718.xAdvance = i3719[2]
  i3718.yAdvance = i3719[3]
  return i3718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[2],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[2],"78":[79],"80":[81],"82":[81],"5":[4],"29":[23],"31":[4],"83":[84],"85":[4],"86":[17,4],"87":[79],"26":[17,4],"88":[89,79],"90":[79],"91":[79,92],"93":[57],"94":[64],"95":[84],"96":[97],"98":[99],"100":[37],"101":[5],"102":[4],"103":[79,4],"16":[4,17],"104":[4],"105":[17,4],"106":[79],"107":[17,4],"108":[4],"109":[110],"111":[110],"112":[110],"113":[4],"114":[4],"8":[5],"13":[17,4],"115":[4],"7":[5],"116":[4],"117":[4],"33":[4],"118":[4],"119":[4],"120":[4],"121":[4],"22":[4],"122":[4],"18":[17,4],"123":[4],"124":[4],"125":[4],"126":[4],"127":[17,4],"128":[4],"129":[37],"130":[37],"38":[37],"131":[37],"132":[2],"133":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.ParticleSystem","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","GameController","Target","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Window","SpineEventSoundPlayer","Girl","Item","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "42.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BM_V26_NgocBTU_HuyNQ";

Deserializers.lunaAppID = "34530";

Deserializers.projectId = "2908ef2555f4afa4ab6241b85cbb2f84";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1855";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5206";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PA-BEQ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5367a54d-8b3f-4037-bbdd-41df1d24d96e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

