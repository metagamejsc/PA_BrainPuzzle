var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4134 = root || request.c( 'UnityEngine.JointSpring' )
  var i4135 = data
  i4134.spring = i4135[0]
  i4134.damper = i4135[1]
  i4134.targetPosition = i4135[2]
  return i4134
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4136 = root || request.c( 'UnityEngine.JointMotor' )
  var i4137 = data
  i4136.m_TargetVelocity = i4137[0]
  i4136.m_Force = i4137[1]
  i4136.m_FreeSpin = i4137[2]
  return i4136
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4138 = root || request.c( 'UnityEngine.JointLimits' )
  var i4139 = data
  i4138.m_Min = i4139[0]
  i4138.m_Max = i4139[1]
  i4138.m_Bounciness = i4139[2]
  i4138.m_BounceMinVelocity = i4139[3]
  i4138.m_ContactDistance = i4139[4]
  i4138.minBounce = i4139[5]
  i4138.maxBounce = i4139[6]
  return i4138
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4140 = root || request.c( 'UnityEngine.JointDrive' )
  var i4141 = data
  i4140.m_PositionSpring = i4141[0]
  i4140.m_PositionDamper = i4141[1]
  i4140.m_MaximumForce = i4141[2]
  i4140.m_UseAcceleration = i4141[3]
  return i4140
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4142 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4143 = data
  i4142.m_Spring = i4143[0]
  i4142.m_Damper = i4143[1]
  return i4142
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4144 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4145 = data
  i4144.m_Limit = i4145[0]
  i4144.m_Bounciness = i4145[1]
  i4144.m_ContactDistance = i4145[2]
  return i4144
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4146 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4147 = data
  i4146.m_ExtremumSlip = i4147[0]
  i4146.m_ExtremumValue = i4147[1]
  i4146.m_AsymptoteSlip = i4147[2]
  i4146.m_AsymptoteValue = i4147[3]
  i4146.m_Stiffness = i4147[4]
  return i4146
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4148 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4149 = data
  i4148.m_LowerAngle = i4149[0]
  i4148.m_UpperAngle = i4149[1]
  return i4148
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4150 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4151 = data
  i4150.m_MotorSpeed = i4151[0]
  i4150.m_MaximumMotorTorque = i4151[1]
  return i4150
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4152 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4153 = data
  i4152.m_DampingRatio = i4153[0]
  i4152.m_Frequency = i4153[1]
  i4152.m_Angle = i4153[2]
  return i4152
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4154 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4155 = data
  i4154.m_LowerTranslation = i4155[0]
  i4154.m_UpperTranslation = i4155[1]
  return i4154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4157 = data
  i4156.name = i4157[0]
  i4156.width = i4157[1]
  i4156.height = i4157[2]
  i4156.mipmapCount = i4157[3]
  i4156.anisoLevel = i4157[4]
  i4156.filterMode = i4157[5]
  i4156.hdr = !!i4157[6]
  i4156.format = i4157[7]
  i4156.wrapMode = i4157[8]
  i4156.alphaIsTransparency = !!i4157[9]
  i4156.alphaSource = i4157[10]
  i4156.graphicsFormat = i4157[11]
  i4156.sRGBTexture = !!i4157[12]
  i4156.desiredColorSpace = i4157[13]
  i4156.wrapU = i4157[14]
  i4156.wrapV = i4157[15]
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4158 = root || new pc.UnityMaterial()
  var i4159 = data
  i4158.name = i4159[0]
  request.r(i4159[1], i4159[2], 0, i4158, 'shader')
  i4158.renderQueue = i4159[3]
  i4158.enableInstancing = !!i4159[4]
  var i4161 = i4159[5]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4161[i + 0]) );
  }
  i4158.floatParameters = i4160
  var i4163 = i4159[6]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4163[i + 0]) );
  }
  i4158.colorParameters = i4162
  var i4165 = i4159[7]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4165[i + 0]) );
  }
  i4158.vectorParameters = i4164
  var i4167 = i4159[8]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4167[i + 0]) );
  }
  i4158.textureParameters = i4166
  var i4169 = i4159[9]
  var i4168 = []
  for(var i = 0; i < i4169.length; i += 1) {
    i4168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4169[i + 0]) );
  }
  i4158.materialFlags = i4168
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4173 = data
  i4172.name = i4173[0]
  i4172.value = i4173[1]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4177 = data
  i4176.name = i4177[0]
  i4176.value = new pc.Color(i4177[1], i4177[2], i4177[3], i4177[4])
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4181 = data
  i4180.name = i4181[0]
  i4180.value = new pc.Vec4( i4181[1], i4181[2], i4181[3], i4181[4] )
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4185 = data
  i4184.name = i4185[0]
  request.r(i4185[1], i4185[2], 0, i4184, 'value')
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4189 = data
  i4188.name = i4189[0]
  i4188.enabled = !!i4189[1]
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4191 = data
  i4190.name = i4191[0]
  i4190.index = i4191[1]
  i4190.startup = !!i4191[2]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4193 = data
  i4192.aspect = i4193[0]
  i4192.orthographic = !!i4193[1]
  i4192.orthographicSize = i4193[2]
  i4192.backgroundColor = new pc.Color(i4193[3], i4193[4], i4193[5], i4193[6])
  i4192.nearClipPlane = i4193[7]
  i4192.farClipPlane = i4193[8]
  i4192.fieldOfView = i4193[9]
  i4192.depth = i4193[10]
  i4192.clearFlags = i4193[11]
  i4192.cullingMask = i4193[12]
  i4192.rect = i4193[13]
  request.r(i4193[14], i4193[15], 0, i4192, 'targetTexture')
  i4192.usePhysicalProperties = !!i4193[16]
  i4192.focalLength = i4193[17]
  i4192.sensorSize = new pc.Vec2( i4193[18], i4193[19] )
  i4192.lensShift = new pc.Vec2( i4193[20], i4193[21] )
  i4192.gateFit = i4193[22]
  i4192.commandBufferCount = i4193[23]
  i4192.cameraType = i4193[24]
  i4192.enabled = !!i4193[25]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4195 = data
  i4194.name = i4195[0]
  i4194.tagId = i4195[1]
  i4194.enabled = !!i4195[2]
  i4194.isStatic = !!i4195[3]
  i4194.layer = i4195[4]
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4197 = data
  i4196.pivot = new pc.Vec2( i4197[0], i4197[1] )
  i4196.anchorMin = new pc.Vec2( i4197[2], i4197[3] )
  i4196.anchorMax = new pc.Vec2( i4197[4], i4197[5] )
  i4196.sizeDelta = new pc.Vec2( i4197[6], i4197[7] )
  i4196.anchoredPosition3D = new pc.Vec3( i4197[8], i4197[9], i4197[10] )
  i4196.rotation = new pc.Quat(i4197[11], i4197[12], i4197[13], i4197[14])
  i4196.scale = new pc.Vec3( i4197[15], i4197[16], i4197[17] )
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4199 = data
  i4198.planeDistance = i4199[0]
  i4198.referencePixelsPerUnit = i4199[1]
  i4198.isFallbackOverlay = !!i4199[2]
  i4198.renderMode = i4199[3]
  i4198.renderOrder = i4199[4]
  i4198.sortingLayerName = i4199[5]
  i4198.sortingOrder = i4199[6]
  i4198.scaleFactor = i4199[7]
  request.r(i4199[8], i4199[9], 0, i4198, 'worldCamera')
  i4198.overrideSorting = !!i4199[10]
  i4198.pixelPerfect = !!i4199[11]
  i4198.targetDisplay = i4199[12]
  i4198.overridePixelPerfect = !!i4199[13]
  i4198.enabled = !!i4199[14]
  return i4198
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4200 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4201 = data
  i4200.m_UiScaleMode = i4201[0]
  i4200.m_ReferencePixelsPerUnit = i4201[1]
  i4200.m_ScaleFactor = i4201[2]
  i4200.m_ReferenceResolution = new pc.Vec2( i4201[3], i4201[4] )
  i4200.m_ScreenMatchMode = i4201[5]
  i4200.m_MatchWidthOrHeight = i4201[6]
  i4200.m_PhysicalUnit = i4201[7]
  i4200.m_FallbackScreenDPI = i4201[8]
  i4200.m_DefaultSpriteDPI = i4201[9]
  i4200.m_DynamicPixelsPerUnit = i4201[10]
  i4200.m_PresetInfoIsWorld = !!i4201[11]
  return i4200
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4202 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4203 = data
  i4202.m_IgnoreReversedGraphics = !!i4203[0]
  i4202.m_BlockingObjects = i4203[1]
  i4202.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4203[2] )
  return i4202
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i4204 = root || request.c( 'Playable.GameManager' )
  var i4205 = data
  i4204.EventCountdownEndGame = request.d('System.Action', i4205[0], i4204.EventCountdownEndGame)
  i4204._totalEvent = i4205[1]
  i4204._maxEvent = i4205[2]
  i4204._endTime = i4205[3]
  request.r(i4205[4], i4205[5], 0, i4204, '_backgroundMusic')
  request.r(i4205[6], i4205[7], 0, i4204, '_backgroundTexture')
  request.r(i4205[8], i4205[9], 0, i4204, '_logoTexture')
  var i4207 = i4205[10]
  var i4206 = []
  for(var i = 0; i < i4207.length; i += 2) {
  request.r(i4207[i + 0], i4207[i + 1], 2, i4206, '')
  }
  i4204._logoGame = i4206
  var i4209 = i4205[11]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 2) {
  request.r(i4209[i + 0], i4209[i + 1], 2, i4208, '')
  }
  i4204._logoImages = i4208
  request.r(i4205[12], i4205[13], 0, i4204, '_btnBlock')
  request.r(i4205[14], i4205[15], 0, i4204, '_background')
  request.r(i4205[16], i4205[17], 0, i4204, '_losePanel')
  request.r(i4205[18], i4205[19], 0, i4204, '_progressFillImage')
  request.r(i4205[20], i4205[21], 0, i4204, '_progressText')
  i4204._progressTweenDuration = i4205[22]
  request.r(i4205[23], i4205[24], 0, i4204, '_timerFillImage')
  request.r(i4205[25], i4205[26], 0, i4204, '_timerText')
  i4204._timerPunchScale = i4205[27]
  return i4204
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4210 = root || request.c( 'System.Action' )
  var i4211 = data
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4217 = data
  i4216.cullTransparentMesh = !!i4217[0]
  return i4216
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4218 = root || request.c( 'UnityEngine.UI.Image' )
  var i4219 = data
  request.r(i4219[0], i4219[1], 0, i4218, 'm_Sprite')
  i4218.m_Type = i4219[2]
  i4218.m_PreserveAspect = !!i4219[3]
  i4218.m_FillCenter = !!i4219[4]
  i4218.m_FillMethod = i4219[5]
  i4218.m_FillAmount = i4219[6]
  i4218.m_FillClockwise = !!i4219[7]
  i4218.m_FillOrigin = i4219[8]
  i4218.m_UseSpriteMesh = !!i4219[9]
  i4218.m_PixelsPerUnitMultiplier = i4219[10]
  request.r(i4219[11], i4219[12], 0, i4218, 'm_Material')
  i4218.m_Maskable = !!i4219[13]
  i4218.m_Color = new pc.Color(i4219[14], i4219[15], i4219[16], i4219[17])
  i4218.m_RaycastTarget = !!i4219[18]
  i4218.m_RaycastPadding = new pc.Vec4( i4219[19], i4219[20], i4219[21], i4219[22] )
  return i4218
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4220 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4221 = data
  request.r(i4221[0], i4221[1], 0, i4220, 'm_Texture')
  i4220.m_UVRect = UnityEngine.Rect.MinMaxRect(i4221[2], i4221[3], i4221[4], i4221[5])
  request.r(i4221[6], i4221[7], 0, i4220, 'm_Material')
  i4220.m_Maskable = !!i4221[8]
  i4220.m_Color = new pc.Color(i4221[9], i4221[10], i4221[11], i4221[12])
  i4220.m_RaycastTarget = !!i4221[13]
  i4220.m_RaycastPadding = new pc.Vec4( i4221[14], i4221[15], i4221[16], i4221[17] )
  return i4220
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4222 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4223 = data
  i4222.m_hasFontAssetChanged = !!i4223[0]
  request.r(i4223[1], i4223[2], 0, i4222, 'm_baseMaterial')
  i4222.m_maskOffset = new pc.Vec4( i4223[3], i4223[4], i4223[5], i4223[6] )
  i4222.m_text = i4223[7]
  i4222.m_isRightToLeft = !!i4223[8]
  request.r(i4223[9], i4223[10], 0, i4222, 'm_fontAsset')
  request.r(i4223[11], i4223[12], 0, i4222, 'm_sharedMaterial')
  var i4225 = i4223[13]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 2) {
  request.r(i4225[i + 0], i4225[i + 1], 2, i4224, '')
  }
  i4222.m_fontSharedMaterials = i4224
  request.r(i4223[14], i4223[15], 0, i4222, 'm_fontMaterial')
  var i4227 = i4223[16]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 2) {
  request.r(i4227[i + 0], i4227[i + 1], 2, i4226, '')
  }
  i4222.m_fontMaterials = i4226
  i4222.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4223[17], i4223[18], i4223[19], i4223[20])
  i4222.m_fontColor = new pc.Color(i4223[21], i4223[22], i4223[23], i4223[24])
  i4222.m_enableVertexGradient = !!i4223[25]
  i4222.m_colorMode = i4223[26]
  i4222.m_fontColorGradient = request.d('TMPro.VertexGradient', i4223[27], i4222.m_fontColorGradient)
  request.r(i4223[28], i4223[29], 0, i4222, 'm_fontColorGradientPreset')
  request.r(i4223[30], i4223[31], 0, i4222, 'm_spriteAsset')
  i4222.m_tintAllSprites = !!i4223[32]
  request.r(i4223[33], i4223[34], 0, i4222, 'm_StyleSheet')
  i4222.m_TextStyleHashCode = i4223[35]
  i4222.m_overrideHtmlColors = !!i4223[36]
  i4222.m_faceColor = UnityEngine.Color32.ConstructColor(i4223[37], i4223[38], i4223[39], i4223[40])
  i4222.m_fontSize = i4223[41]
  i4222.m_fontSizeBase = i4223[42]
  i4222.m_fontWeight = i4223[43]
  i4222.m_enableAutoSizing = !!i4223[44]
  i4222.m_fontSizeMin = i4223[45]
  i4222.m_fontSizeMax = i4223[46]
  i4222.m_fontStyle = i4223[47]
  i4222.m_HorizontalAlignment = i4223[48]
  i4222.m_VerticalAlignment = i4223[49]
  i4222.m_textAlignment = i4223[50]
  i4222.m_characterSpacing = i4223[51]
  i4222.m_characterHorizontalScale = i4223[52]
  i4222.m_wordSpacing = i4223[53]
  i4222.m_lineSpacing = i4223[54]
  i4222.m_lineSpacingMax = i4223[55]
  i4222.m_paragraphSpacing = i4223[56]
  i4222.m_charWidthMaxAdj = i4223[57]
  i4222.m_TextWrappingMode = i4223[58]
  i4222.m_wordWrappingRatios = i4223[59]
  i4222.m_overflowMode = i4223[60]
  request.r(i4223[61], i4223[62], 0, i4222, 'm_linkedTextComponent')
  request.r(i4223[63], i4223[64], 0, i4222, 'parentLinkedComponent')
  i4222.m_enableKerning = !!i4223[65]
  var i4229 = i4223[66]
  var i4228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.add(i4229[i + 0]);
  }
  i4222.m_ActiveFontFeatures = i4228
  i4222.m_enableExtraPadding = !!i4223[67]
  i4222.checkPaddingRequired = !!i4223[68]
  i4222.m_isRichText = !!i4223[69]
  i4222.m_parseCtrlCharacters = !!i4223[70]
  i4222.m_isOrthographic = !!i4223[71]
  i4222.m_isCullingEnabled = !!i4223[72]
  i4222.m_horizontalMapping = i4223[73]
  i4222.m_verticalMapping = i4223[74]
  i4222.m_uvLineOffset = i4223[75]
  i4222.m_geometrySortingOrder = i4223[76]
  i4222.m_IsTextObjectScaleStatic = !!i4223[77]
  i4222.m_VertexBufferAutoSizeReduction = !!i4223[78]
  i4222.m_useMaxVisibleDescender = !!i4223[79]
  i4222.m_pageToDisplay = i4223[80]
  i4222.m_margin = new pc.Vec4( i4223[81], i4223[82], i4223[83], i4223[84] )
  i4222.m_isUsingLegacyAnimationComponent = !!i4223[85]
  i4222.m_isVolumetricText = !!i4223[86]
  request.r(i4223[87], i4223[88], 0, i4222, 'm_Material')
  i4222.m_EmojiFallbackSupport = !!i4223[89]
  i4222.m_Maskable = !!i4223[90]
  i4222.m_Color = new pc.Color(i4223[91], i4223[92], i4223[93], i4223[94])
  i4222.m_RaycastTarget = !!i4223[95]
  i4222.m_RaycastPadding = new pc.Vec4( i4223[96], i4223[97], i4223[98], i4223[99] )
  return i4222
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4232 = root || request.c( 'TMPro.VertexGradient' )
  var i4233 = data
  i4232.topLeft = new pc.Color(i4233[0], i4233[1], i4233[2], i4233[3])
  i4232.topRight = new pc.Color(i4233[4], i4233[5], i4233[6], i4233[7])
  i4232.bottomLeft = new pc.Color(i4233[8], i4233[9], i4233[10], i4233[11])
  i4232.bottomRight = new pc.Color(i4233[12], i4233[13], i4233[14], i4233[15])
  return i4232
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4236 = root || request.c( 'UnityEngine.UI.Button' )
  var i4237 = data
  i4236.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4237[0], i4236.m_OnClick)
  i4236.m_Navigation = request.d('UnityEngine.UI.Navigation', i4237[1], i4236.m_Navigation)
  i4236.m_Transition = i4237[2]
  i4236.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4237[3], i4236.m_Colors)
  i4236.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4237[4], i4236.m_SpriteState)
  i4236.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4237[5], i4236.m_AnimationTriggers)
  i4236.m_Interactable = !!i4237[6]
  request.r(i4237[7], i4237[8], 0, i4236, 'm_TargetGraphic')
  return i4236
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4238 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4239 = data
  i4238.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4239[0], i4238.m_PersistentCalls)
  return i4238
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4240 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4241 = data
  var i4243 = i4241[0]
  var i4242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4243.length; i += 1) {
    i4242.add(request.d('UnityEngine.Events.PersistentCall', i4243[i + 0]));
  }
  i4240.m_Calls = i4242
  return i4240
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4246 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4247 = data
  request.r(i4247[0], i4247[1], 0, i4246, 'm_Target')
  i4246.m_TargetAssemblyTypeName = i4247[2]
  i4246.m_MethodName = i4247[3]
  i4246.m_Mode = i4247[4]
  i4246.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4247[5], i4246.m_Arguments)
  i4246.m_CallState = i4247[6]
  return i4246
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4248 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4249 = data
  request.r(i4249[0], i4249[1], 0, i4248, 'm_ObjectArgument')
  i4248.m_ObjectArgumentAssemblyTypeName = i4249[2]
  i4248.m_IntArgument = i4249[3]
  i4248.m_FloatArgument = i4249[4]
  i4248.m_StringArgument = i4249[5]
  i4248.m_BoolArgument = !!i4249[6]
  return i4248
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4250 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4251 = data
  i4250.m_Mode = i4251[0]
  i4250.m_WrapAround = !!i4251[1]
  request.r(i4251[2], i4251[3], 0, i4250, 'm_SelectOnUp')
  request.r(i4251[4], i4251[5], 0, i4250, 'm_SelectOnDown')
  request.r(i4251[6], i4251[7], 0, i4250, 'm_SelectOnLeft')
  request.r(i4251[8], i4251[9], 0, i4250, 'm_SelectOnRight')
  return i4250
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4252 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4253 = data
  i4252.m_NormalColor = new pc.Color(i4253[0], i4253[1], i4253[2], i4253[3])
  i4252.m_HighlightedColor = new pc.Color(i4253[4], i4253[5], i4253[6], i4253[7])
  i4252.m_PressedColor = new pc.Color(i4253[8], i4253[9], i4253[10], i4253[11])
  i4252.m_SelectedColor = new pc.Color(i4253[12], i4253[13], i4253[14], i4253[15])
  i4252.m_DisabledColor = new pc.Color(i4253[16], i4253[17], i4253[18], i4253[19])
  i4252.m_ColorMultiplier = i4253[20]
  i4252.m_FadeDuration = i4253[21]
  return i4252
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4254 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4255 = data
  request.r(i4255[0], i4255[1], 0, i4254, 'm_HighlightedSprite')
  request.r(i4255[2], i4255[3], 0, i4254, 'm_PressedSprite')
  request.r(i4255[4], i4255[5], 0, i4254, 'm_SelectedSprite')
  request.r(i4255[6], i4255[7], 0, i4254, 'm_DisabledSprite')
  return i4254
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4256 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4257 = data
  i4256.m_NormalTrigger = i4257[0]
  i4256.m_HighlightedTrigger = i4257[1]
  i4256.m_PressedTrigger = i4257[2]
  i4256.m_SelectedTrigger = i4257[3]
  i4256.m_DisabledTrigger = i4257[4]
  return i4256
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4258 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4259 = data
  i4258.m_ShowMaskGraphic = !!i4259[0]
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4261 = data
  request.r(i4261[0], i4261[1], 0, i4260, 'clip')
  request.r(i4261[2], i4261[3], 0, i4260, 'outputAudioMixerGroup')
  i4260.playOnAwake = !!i4261[4]
  i4260.loop = !!i4261[5]
  i4260.time = i4261[6]
  i4260.volume = i4261[7]
  i4260.pitch = i4261[8]
  i4260.enabled = !!i4261[9]
  return i4260
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i4262 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i4263 = data
  i4262.m_Padding = new pc.Vec4( i4263[0], i4263[1], i4263[2], i4263[3] )
  i4262.m_Softness = new pc.Vec2( i4263[4], i4263[5] )
  return i4262
}

Deserializers["GameController"] = function (request, data, root) {
  var i4264 = root || request.c( 'GameController' )
  var i4265 = data
  request.r(i4265[0], i4265[1], 0, i4264, '_tutorialHand')
  request.r(i4265[2], i4265[3], 0, i4264, '_tutorialInPlace')
  request.r(i4265[4], i4265[5], 0, i4264, '_tutorialFrom')
  request.r(i4265[6], i4265[7], 0, i4264, '_tutorialTo')
  i4264._tutorialScaleDuration = i4265[8]
  i4264._tutorialMoveDuration = i4265[9]
  i4264._tutorialStartDelay = i4265[10]
  return i4264
}

Deserializers["Playable.WinLoseController"] = function (request, data, root) {
  var i4266 = root || request.c( 'Playable.WinLoseController' )
  var i4267 = data
  request.r(i4267[0], i4267[1], 0, i4266, '_progressBar')
  i4266._autoCheckFull = !!i4267[2]
  i4266._resetProgressOnStart = !!i4267[3]
  request.r(i4267[4], i4267[5], 0, i4266, '_winObject')
  request.r(i4267[6], i4267[7], 0, i4266, '_winTitle')
  i4266._winStartScale = i4267[8]
  i4266._winAnimDuration = i4267[9]
  i4266._winEase = i4267[10]
  i4266._showWinDelay = i4267[11]
  request.r(i4267[12], i4267[13], 0, i4266, '_loseObject')
  request.r(i4267[14], i4267[15], 0, i4266, '_loseTitle')
  i4266._loseStartScale = i4267[16]
  i4266._loseAnimDuration = i4267[17]
  i4266._loseEase = i4267[18]
  i4266._showLoseDelay = i4267[19]
  return i4266
}

Deserializers["Item"] = function (request, data, root) {
  var i4268 = root || request.c( 'Item' )
  var i4269 = data
  var i4271 = i4269[0]
  var i4270 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i4271.length; i += 1) {
    i4270.add(request.d('Item+ItemData', i4271[i + 0]));
  }
  i4268._data = i4270
  i4268._dragSortingOrder = i4269[1]
  return i4268
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i4274 = root || request.c( 'Item+ItemData' )
  var i4275 = data
  i4274.id = i4275[0]
  i4274.stateChange = request.d('Item+GirlStateChange', i4275[1], i4274.stateChange)
  i4274.animationStateTiming = i4275[2]
  i4274.result = i4275[3]
  return i4274
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i4276 = root || request.c( 'Item+GirlStateChange' )
  var i4277 = data
  i4276.changeBodyShape = !!i4277[0]
  i4276.bodyShape = i4277[1]
  i4276.changeOutfit = !!i4277[2]
  i4276.outfit = i4277[3]
  i4276.changeRestraint = !!i4277[4]
  i4276.restraint = i4277[5]
  return i4276
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4278 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4279 = data
  request.r(i4279[0], i4279[1], 0, i4278, 'skeletonDataAsset')
  request.r(i4279[2], i4279[3], 0, i4278, 'additiveMaterial')
  request.r(i4279[4], i4279[5], 0, i4278, 'multiplyMaterial')
  request.r(i4279[6], i4279[7], 0, i4278, 'screenMaterial')
  i4278.initialSkinName = i4279[8]
  i4278.initialFlipX = !!i4279[9]
  i4278.initialFlipY = !!i4279[10]
  i4278.startingAnimation = i4279[11]
  i4278.startingLoop = !!i4279[12]
  i4278.timeScale = i4279[13]
  i4278.freeze = !!i4279[14]
  i4278.layoutScaleMode = i4279[15]
  i4278.updateWhenInvisible = i4279[16]
  i4278.allowMultipleCanvasRenderers = !!i4279[17]
  var i4281 = i4279[18]
  var i4280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4281.length; i += 2) {
  request.r(i4281[i + 0], i4281[i + 1], 1, i4280, '')
  }
  i4278.canvasRenderers = i4280
  i4278.enableSeparatorSlots = !!i4279[19]
  i4278.updateSeparatorPartLocation = !!i4279[20]
  i4278.updateSeparatorPartScale = !!i4279[21]
  i4278.disableMeshAssignmentOnOverride = !!i4279[22]
  i4278.referenceSize = new pc.Vec2( i4279[23], i4279[24] )
  i4278.referenceScale = i4279[25]
  i4278.rectTransformSize = new pc.Vec2( i4279[26], i4279[27] )
  i4278.editReferenceRect = !!i4279[28]
  var i4283 = i4279[29]
  var i4282 = []
  for(var i = 0; i < i4283.length; i += 1) {
    i4282.push( i4283[i + 0] );
  }
  i4278.separatorSlotNames = i4282
  var i4285 = i4279[30]
  var i4284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4285.length; i += 2) {
  request.r(i4285[i + 0], i4285[i + 1], 1, i4284, '')
  }
  i4278.separatorParts = i4284
  i4278.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4279[31], i4278.meshGenerator)
  i4278.updateTiming = i4279[32]
  i4278.unscaledTime = !!i4279[33]
  request.r(i4279[34], i4279[35], 0, i4278, 'm_Material')
  i4278.m_Maskable = !!i4279[36]
  i4278.m_Color = new pc.Color(i4279[37], i4279[38], i4279[39], i4279[40])
  i4278.m_RaycastTarget = !!i4279[41]
  i4278.m_RaycastPadding = new pc.Vec4( i4279[42], i4279[43], i4279[44], i4279[45] )
  return i4278
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4292 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4293 = data
  i4292.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4293[0], i4292.settings)
  return i4292
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4294 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4295 = data
  i4294.useClipping = !!i4295[0]
  i4294.zSpacing = i4295[1]
  i4294.pmaVertexColors = !!i4295[2]
  i4294.tintBlack = !!i4295[3]
  i4294.canvasGroupTintBlack = !!i4295[4]
  i4294.calculateTangents = !!i4295[5]
  i4294.addNormals = !!i4295[6]
  i4294.immutableTriangles = !!i4295[7]
  return i4294
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i4296 = root || request.c( 'Playable.Door' )
  var i4297 = data
  request.r(i4297[0], i4297[1], 0, i4296, '_image')
  request.r(i4297[2], i4297[3], 0, i4296, '_open')
  request.r(i4297[4], i4297[5], 0, i4296, '_close')
  return i4296
}

Deserializers["Girl"] = function (request, data, root) {
  var i4298 = root || request.c( 'Girl' )
  var i4299 = data
  i4298._enableDebugLogs = !!i4299[0]
  i4298._status = request.d('GirlStatus', i4299[1], i4298._status)
  var i4301 = i4299[2]
  var i4300 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i4301.length; i += 1) {
    i4300.add(request.d('Girl+BodyShapeSkins', i4301[i + 0]));
  }
  i4298._bodyShapeSkins = i4300
  var i4303 = i4299[3]
  var i4302 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i4303.length; i += 1) {
    i4302.add(request.d('Girl+OutfitSkins', i4303[i + 0]));
  }
  i4298._outfitSkins = i4302
  var i4305 = i4299[4]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.add(request.d('Girl+RestraintSkins', i4305[i + 0]));
  }
  i4298._restraintSkins = i4304
  request.r(i4299[5], i4299[6], 0, i4298, '_skeletonGraphic')
  var i4307 = i4299[7]
  var i4306 = []
  for(var i = 0; i < i4307.length; i += 1) {
    i4306.push( i4307[i + 0] );
  }
  i4298._defaultSkins = i4306
  i4298._defaultAnimation = request.d('Target+GirlAnimation', i4299[8], i4298._defaultAnimation)
  var i4309 = i4299[9]
  var i4308 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.add(request.d('Target+GirlAnimation', i4309[i + 0]));
  }
  i4298._removeGlassesAnimations = i4308
  i4298._endGameDelay = i4299[10]
  i4298._boy1 = request.d('Girl+BoyAnimationData', i4299[11], i4298._boy1)
  i4298._boy2 = request.d('Girl+BoyAnimationData', i4299[12], i4298._boy2)
  return i4298
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i4310 = root || request.c( 'GirlStatus' )
  var i4311 = data
  i4310.bodyShape = i4311[0]
  i4310.outfit = i4311[1]
  i4310.restraint = i4311[2]
  return i4310
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i4314 = root || request.c( 'Girl+BodyShapeSkins' )
  var i4315 = data
  i4314.bodyShape = i4315[0]
  var i4317 = i4315[1]
  var i4316 = []
  for(var i = 0; i < i4317.length; i += 1) {
    i4316.push( i4317[i + 0] );
  }
  i4314.skins = i4316
  return i4314
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i4320 = root || request.c( 'Girl+OutfitSkins' )
  var i4321 = data
  i4320.outfit = i4321[0]
  var i4323 = i4321[1]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( i4323[i + 0] );
  }
  i4320.skins = i4322
  return i4320
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i4326 = root || request.c( 'Girl+RestraintSkins' )
  var i4327 = data
  i4326.restraint = i4327[0]
  var i4329 = i4327[1]
  var i4328 = []
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.push( i4329[i + 0] );
  }
  i4326.skins = i4328
  return i4326
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i4330 = root || request.c( 'Target+GirlAnimation' )
  var i4331 = data
  i4330.animationName = i4331[0]
  i4330.loop = !!i4331[1]
  return i4330
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i4334 = root || request.c( 'Girl+BoyAnimationData' )
  var i4335 = data
  request.r(i4335[0], i4335[1], 0, i4334, 'skeletonGraphic')
  i4334.idleAnimation = i4335[2]
  i4334.winAnimation = i4335[3]
  i4334.loseAnimation = i4335[4]
  return i4334
}

Deserializers["Target"] = function (request, data, root) {
  var i4336 = root || request.c( 'Target' )
  var i4337 = data
  i4336._part = i4337[0]
  request.r(i4337[1], i4337[2], 0, i4336, '_girl')
  request.r(i4337[3], i4337[4], 0, i4336, '_skeletonGraphic')
  var i4339 = i4337[5]
  var i4338 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i4339.length; i += 1) {
    i4338.add(request.d('Target+ItemReaction', i4339[i + 0]));
  }
  i4336._itemReactions = i4338
  return i4336
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i4342 = root || request.c( 'Target+ItemReaction' )
  var i4343 = data
  i4342.itemId = i4343[0]
  var i4345 = i4343[1]
  var i4344 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.add(request.d('Target+AnimationRule', i4345[i + 0]));
  }
  i4342.animationRules = i4344
  var i4347 = i4343[2]
  var i4346 = []
  for(var i = 0; i < i4347.length; i += 1) {
    i4346.push( i4347[i + 0] );
  }
  i4342.skinAdded = i4346
  var i4349 = i4343[3]
  var i4348 = []
  for(var i = 0; i < i4349.length; i += 1) {
    i4348.push( i4349[i + 0] );
  }
  i4342.skinRemoved = i4348
  request.r(i4343[4], i4343[5], 0, i4342, 'audioClip')
  return i4342
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i4352 = root || request.c( 'Target+AnimationRule' )
  var i4353 = data
  i4352.checkBodyShape = !!i4353[0]
  i4352.bodyShape = i4353[1]
  i4352.checkOutfit = !!i4353[2]
  i4352.outfit = i4353[3]
  i4352.checkRestraint = !!i4353[4]
  i4352.restraint = i4353[5]
  var i4355 = i4353[6]
  var i4354 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i4355.length; i += 1) {
    i4354.add(request.d('Target+GirlAnimation', i4355[i + 0]));
  }
  i4352.animations = i4354
  return i4352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4357 = data
  i4356.m_Alpha = i4357[0]
  i4356.m_Interactable = !!i4357[1]
  i4356.m_BlocksRaycasts = !!i4357[2]
  i4356.m_IgnoreParentGroups = !!i4357[3]
  i4356.enabled = !!i4357[4]
  return i4356
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i4359 = data
  i4358.m_Spacing = i4359[0]
  i4358.m_ChildForceExpandWidth = !!i4359[1]
  i4358.m_ChildForceExpandHeight = !!i4359[2]
  i4358.m_ChildControlWidth = !!i4359[3]
  i4358.m_ChildControlHeight = !!i4359[4]
  i4358.m_ChildScaleWidth = !!i4359[5]
  i4358.m_ChildScaleHeight = !!i4359[6]
  i4358.m_ReverseArrangement = !!i4359[7]
  i4358.m_Padding = UnityEngine.RectOffset.FromPaddings(i4359[8], i4359[9], i4359[10], i4359[11])
  i4358.m_ChildAlignment = i4359[12]
  return i4358
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4360 = root || request.c( 'UnityEngine.UI.Text' )
  var i4361 = data
  i4360.m_FontData = request.d('UnityEngine.UI.FontData', i4361[0], i4360.m_FontData)
  i4360.m_Text = i4361[1]
  request.r(i4361[2], i4361[3], 0, i4360, 'm_Material')
  i4360.m_Maskable = !!i4361[4]
  i4360.m_Color = new pc.Color(i4361[5], i4361[6], i4361[7], i4361[8])
  i4360.m_RaycastTarget = !!i4361[9]
  i4360.m_RaycastPadding = new pc.Vec4( i4361[10], i4361[11], i4361[12], i4361[13] )
  return i4360
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4362 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4363 = data
  request.r(i4363[0], i4363[1], 0, i4362, 'm_Font')
  i4362.m_FontSize = i4363[2]
  i4362.m_FontStyle = i4363[3]
  i4362.m_BestFit = !!i4363[4]
  i4362.m_MinSize = i4363[5]
  i4362.m_MaxSize = i4363[6]
  i4362.m_Alignment = i4363[7]
  i4362.m_AlignByGeometry = !!i4363[8]
  i4362.m_RichText = !!i4363[9]
  i4362.m_HorizontalOverflow = i4363[10]
  i4362.m_VerticalOverflow = i4363[11]
  i4362.m_LineSpacing = i4363[12]
  return i4362
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i4364 = root || request.c( 'Playable.AudioManager' )
  var i4365 = data
  var i4367 = i4365[0]
  var i4366 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.add(request.d('Playable.SoundData', i4367[i + 0]));
  }
  i4364._sounds = i4366
  request.r(i4365[1], i4365[2], 0, i4364, '_audioMusic')
  request.r(i4365[3], i4365[4], 0, i4364, '_audioSound')
  return i4364
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i4370 = root || request.c( 'Playable.SoundData' )
  var i4371 = data
  i4370.Type = i4371[0]
  request.r(i4371[1], i4371[2], 0, i4370, 'Clip')
  return i4370
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4372 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4373 = data
  request.r(i4373[0], i4373[1], 0, i4372, 'm_FirstSelected')
  i4372.m_sendNavigationEvents = !!i4373[2]
  i4372.m_DragThreshold = i4373[3]
  return i4372
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4374 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4375 = data
  i4374.m_HorizontalAxis = i4375[0]
  i4374.m_VerticalAxis = i4375[1]
  i4374.m_SubmitButton = i4375[2]
  i4374.m_CancelButton = i4375[3]
  i4374.m_InputActionsPerSecond = i4375[4]
  i4374.m_RepeatDelay = i4375[5]
  i4374.m_ForceModuleActive = !!i4375[6]
  i4374.m_SendPointerHoverToParent = !!i4375[7]
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4377 = data
  i4376.ambientIntensity = i4377[0]
  i4376.reflectionIntensity = i4377[1]
  i4376.ambientMode = i4377[2]
  i4376.ambientLight = new pc.Color(i4377[3], i4377[4], i4377[5], i4377[6])
  i4376.ambientSkyColor = new pc.Color(i4377[7], i4377[8], i4377[9], i4377[10])
  i4376.ambientGroundColor = new pc.Color(i4377[11], i4377[12], i4377[13], i4377[14])
  i4376.ambientEquatorColor = new pc.Color(i4377[15], i4377[16], i4377[17], i4377[18])
  i4376.fogColor = new pc.Color(i4377[19], i4377[20], i4377[21], i4377[22])
  i4376.fogEndDistance = i4377[23]
  i4376.fogStartDistance = i4377[24]
  i4376.fogDensity = i4377[25]
  i4376.fog = !!i4377[26]
  request.r(i4377[27], i4377[28], 0, i4376, 'skybox')
  i4376.fogMode = i4377[29]
  var i4379 = i4377[30]
  var i4378 = []
  for(var i = 0; i < i4379.length; i += 1) {
    i4378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4379[i + 0]) );
  }
  i4376.lightmaps = i4378
  i4376.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4377[31], i4376.lightProbes)
  i4376.lightmapsMode = i4377[32]
  i4376.mixedBakeMode = i4377[33]
  i4376.environmentLightingMode = i4377[34]
  i4376.ambientProbe = new pc.SphericalHarmonicsL2(i4377[35])
  request.r(i4377[36], i4377[37], 0, i4376, 'customReflection')
  request.r(i4377[38], i4377[39], 0, i4376, 'defaultReflection')
  i4376.defaultReflectionMode = i4377[40]
  i4376.defaultReflectionResolution = i4377[41]
  i4376.sunLightObjectId = i4377[42]
  i4376.pixelLightCount = i4377[43]
  i4376.defaultReflectionHDR = !!i4377[44]
  i4376.hasLightDataAsset = !!i4377[45]
  i4376.hasManualGenerate = !!i4377[46]
  return i4376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4383 = data
  request.r(i4383[0], i4383[1], 0, i4382, 'lightmapColor')
  request.r(i4383[2], i4383[3], 0, i4382, 'lightmapDirection')
  request.r(i4383[4], i4383[5], 0, i4382, 'shadowMask')
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4384 = root || new UnityEngine.LightProbes()
  var i4385 = data
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4393 = data
  var i4395 = i4393[0]
  var i4394 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4395.length; i += 1) {
    i4394.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4395[i + 0]));
  }
  i4392.ShaderCompilationErrors = i4394
  i4392.name = i4393[1]
  i4392.guid = i4393[2]
  var i4397 = i4393[3]
  var i4396 = []
  for(var i = 0; i < i4397.length; i += 1) {
    i4396.push( i4397[i + 0] );
  }
  i4392.shaderDefinedKeywords = i4396
  var i4399 = i4393[4]
  var i4398 = []
  for(var i = 0; i < i4399.length; i += 1) {
    i4398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4399[i + 0]) );
  }
  i4392.passes = i4398
  var i4401 = i4393[5]
  var i4400 = []
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4401[i + 0]) );
  }
  i4392.usePasses = i4400
  var i4403 = i4393[6]
  var i4402 = []
  for(var i = 0; i < i4403.length; i += 1) {
    i4402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4403[i + 0]) );
  }
  i4392.defaultParameterValues = i4402
  request.r(i4393[7], i4393[8], 0, i4392, 'unityFallbackShader')
  i4392.readDepth = !!i4393[9]
  i4392.hasDepthOnlyPass = !!i4393[10]
  i4392.isCreatedByShaderGraph = !!i4393[11]
  i4392.disableBatching = !!i4393[12]
  i4392.compiled = !!i4393[13]
  return i4392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4407 = data
  i4406.shaderName = i4407[0]
  i4406.errorMessage = i4407[1]
  return i4406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4410 = root || new pc.UnityShaderPass()
  var i4411 = data
  i4410.id = i4411[0]
  i4410.subShaderIndex = i4411[1]
  i4410.name = i4411[2]
  i4410.passType = i4411[3]
  i4410.grabPassTextureName = i4411[4]
  i4410.usePass = !!i4411[5]
  i4410.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[6], i4410.zTest)
  i4410.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[7], i4410.zWrite)
  i4410.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[8], i4410.culling)
  i4410.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4411[9], i4410.blending)
  i4410.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4411[10], i4410.alphaBlending)
  i4410.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[11], i4410.colorWriteMask)
  i4410.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[12], i4410.offsetUnits)
  i4410.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[13], i4410.offsetFactor)
  i4410.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[14], i4410.stencilRef)
  i4410.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[15], i4410.stencilReadMask)
  i4410.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[16], i4410.stencilWriteMask)
  i4410.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4411[17], i4410.stencilOp)
  i4410.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4411[18], i4410.stencilOpFront)
  i4410.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4411[19], i4410.stencilOpBack)
  var i4413 = i4411[20]
  var i4412 = []
  for(var i = 0; i < i4413.length; i += 1) {
    i4412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4413[i + 0]) );
  }
  i4410.tags = i4412
  var i4415 = i4411[21]
  var i4414 = []
  for(var i = 0; i < i4415.length; i += 1) {
    i4414.push( i4415[i + 0] );
  }
  i4410.passDefinedKeywords = i4414
  var i4417 = i4411[22]
  var i4416 = []
  for(var i = 0; i < i4417.length; i += 1) {
    i4416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4417[i + 0]) );
  }
  i4410.passDefinedKeywordGroups = i4416
  var i4419 = i4411[23]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4419[i + 0]) );
  }
  i4410.variants = i4418
  var i4421 = i4411[24]
  var i4420 = []
  for(var i = 0; i < i4421.length; i += 1) {
    i4420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4421[i + 0]) );
  }
  i4410.excludedVariants = i4420
  i4410.hasDepthReader = !!i4411[25]
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4423 = data
  i4422.val = i4423[0]
  i4422.name = i4423[1]
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4425 = data
  i4424.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4425[0], i4424.src)
  i4424.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4425[1], i4424.dst)
  i4424.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4425[2], i4424.op)
  return i4424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4427 = data
  i4426.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4427[0], i4426.pass)
  i4426.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4427[1], i4426.fail)
  i4426.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4427[2], i4426.zFail)
  i4426.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4427[3], i4426.comp)
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4431 = data
  i4430.name = i4431[0]
  i4430.value = i4431[1]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4435 = data
  var i4437 = i4435[0]
  var i4436 = []
  for(var i = 0; i < i4437.length; i += 1) {
    i4436.push( i4437[i + 0] );
  }
  i4434.keywords = i4436
  i4434.hasDiscard = !!i4435[1]
  return i4434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4441 = data
  i4440.passId = i4441[0]
  i4440.subShaderIndex = i4441[1]
  var i4443 = i4441[2]
  var i4442 = []
  for(var i = 0; i < i4443.length; i += 1) {
    i4442.push( i4443[i + 0] );
  }
  i4440.keywords = i4442
  i4440.vertexProgram = i4441[3]
  i4440.fragmentProgram = i4441[4]
  i4440.exportedForWebGl2 = !!i4441[5]
  i4440.readDepth = !!i4441[6]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4447 = data
  request.r(i4447[0], i4447[1], 0, i4446, 'shader')
  i4446.pass = i4447[2]
  return i4446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4451 = data
  i4450.name = i4451[0]
  i4450.type = i4451[1]
  i4450.value = new pc.Vec4( i4451[2], i4451[3], i4451[4], i4451[5] )
  i4450.textureValue = i4451[6]
  i4450.shaderPropertyFlag = i4451[7]
  return i4450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4453 = data
  i4452.name = i4453[0]
  request.r(i4453[1], i4453[2], 0, i4452, 'texture')
  i4452.aabb = i4453[3]
  i4452.vertices = i4453[4]
  i4452.triangles = i4453[5]
  i4452.textureRect = UnityEngine.Rect.MinMaxRect(i4453[6], i4453[7], i4453[8], i4453[9])
  i4452.packedRect = UnityEngine.Rect.MinMaxRect(i4453[10], i4453[11], i4453[12], i4453[13])
  i4452.border = new pc.Vec4( i4453[14], i4453[15], i4453[16], i4453[17] )
  i4452.transparency = i4453[18]
  i4452.bounds = i4453[19]
  i4452.pixelsPerUnit = i4453[20]
  i4452.textureWidth = i4453[21]
  i4452.textureHeight = i4453[22]
  i4452.nativeSize = new pc.Vec2( i4453[23], i4453[24] )
  i4452.pivot = new pc.Vec2( i4453[25], i4453[26] )
  i4452.textureRectOffset = new pc.Vec2( i4453[27], i4453[28] )
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4455 = data
  i4454.name = i4455[0]
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4457 = data
  i4456.name = i4457[0]
  i4456.ascent = i4457[1]
  i4456.originalLineHeight = i4457[2]
  i4456.fontSize = i4457[3]
  var i4459 = i4457[4]
  var i4458 = []
  for(var i = 0; i < i4459.length; i += 1) {
    i4458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4459[i + 0]) );
  }
  i4456.characterInfo = i4458
  request.r(i4457[5], i4457[6], 0, i4456, 'texture')
  i4456.originalFontSize = i4457[7]
  return i4456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4463 = data
  i4462.index = i4463[0]
  i4462.advance = i4463[1]
  i4462.bearing = i4463[2]
  i4462.glyphWidth = i4463[3]
  i4462.glyphHeight = i4463[4]
  i4462.minX = i4463[5]
  i4462.maxX = i4463[6]
  i4462.minY = i4463[7]
  i4462.maxY = i4463[8]
  i4462.uvBottomLeftX = i4463[9]
  i4462.uvBottomLeftY = i4463[10]
  i4462.uvBottomRightX = i4463[11]
  i4462.uvBottomRightY = i4463[12]
  i4462.uvTopLeftX = i4463[13]
  i4462.uvTopLeftY = i4463[14]
  i4462.uvTopRightX = i4463[15]
  i4462.uvTopRightY = i4463[16]
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4465 = data
  i4464.name = i4465[0]
  i4464.bytes64 = i4465[1]
  i4464.data = i4465[2]
  return i4464
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4466 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4467 = data
  i4466.normalStyle = i4467[0]
  i4466.normalSpacingOffset = i4467[1]
  i4466.boldStyle = i4467[2]
  i4466.boldSpacing = i4467[3]
  i4466.italicStyle = i4467[4]
  i4466.tabSize = i4467[5]
  request.r(i4467[6], i4467[7], 0, i4466, 'atlas')
  i4466.m_SourceFontFileGUID = i4467[8]
  i4466.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4467[9], i4466.m_CreationSettings)
  request.r(i4467[10], i4467[11], 0, i4466, 'm_SourceFontFile')
  i4466.m_SourceFontFilePath = i4467[12]
  i4466.m_AtlasPopulationMode = i4467[13]
  i4466.InternalDynamicOS = !!i4467[14]
  var i4469 = i4467[15]
  var i4468 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.add(request.d('UnityEngine.TextCore.Glyph', i4469[i + 0]));
  }
  i4466.m_GlyphTable = i4468
  var i4471 = i4467[16]
  var i4470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.add(request.d('TMPro.TMP_Character', i4471[i + 0]));
  }
  i4466.m_CharacterTable = i4470
  var i4473 = i4467[17]
  var i4472 = []
  for(var i = 0; i < i4473.length; i += 2) {
  request.r(i4473[i + 0], i4473[i + 1], 2, i4472, '')
  }
  i4466.m_AtlasTextures = i4472
  i4466.m_AtlasTextureIndex = i4467[18]
  i4466.m_IsMultiAtlasTexturesEnabled = !!i4467[19]
  i4466.m_GetFontFeatures = !!i4467[20]
  i4466.m_ClearDynamicDataOnBuild = !!i4467[21]
  i4466.m_AtlasWidth = i4467[22]
  i4466.m_AtlasHeight = i4467[23]
  i4466.m_AtlasPadding = i4467[24]
  i4466.m_AtlasRenderMode = i4467[25]
  var i4475 = i4467[26]
  var i4474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4475.length; i += 1) {
    i4474.add(request.d('UnityEngine.TextCore.GlyphRect', i4475[i + 0]));
  }
  i4466.m_UsedGlyphRects = i4474
  var i4477 = i4467[27]
  var i4476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4477.length; i += 1) {
    i4476.add(request.d('UnityEngine.TextCore.GlyphRect', i4477[i + 0]));
  }
  i4466.m_FreeGlyphRects = i4476
  i4466.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4467[28], i4466.m_FontFeatureTable)
  i4466.m_ShouldReimportFontFeatures = !!i4467[29]
  var i4479 = i4467[30]
  var i4478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4479.length; i += 2) {
  request.r(i4479[i + 0], i4479[i + 1], 1, i4478, '')
  }
  i4466.m_FallbackFontAssetTable = i4478
  var i4481 = i4467[31]
  var i4480 = []
  for(var i = 0; i < i4481.length; i += 1) {
    i4480.push( request.d('TMPro.TMP_FontWeightPair', i4481[i + 0]) );
  }
  i4466.m_FontWeightTable = i4480
  var i4483 = i4467[32]
  var i4482 = []
  for(var i = 0; i < i4483.length; i += 1) {
    i4482.push( request.d('TMPro.TMP_FontWeightPair', i4483[i + 0]) );
  }
  i4466.fontWeights = i4482
  i4466.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4467[33], i4466.m_fontInfo)
  var i4485 = i4467[34]
  var i4484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4485.length; i += 1) {
    i4484.add(request.d('TMPro.TMP_Glyph', i4485[i + 0]));
  }
  i4466.m_glyphInfoList = i4484
  i4466.m_KerningTable = request.d('TMPro.KerningTable', i4467[35], i4466.m_KerningTable)
  var i4487 = i4467[36]
  var i4486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4487.length; i += 2) {
  request.r(i4487[i + 0], i4487[i + 1], 1, i4486, '')
  }
  i4466.fallbackFontAssets = i4486
  i4466.m_Version = i4467[37]
  i4466.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4467[38], i4466.m_FaceInfo)
  request.r(i4467[39], i4467[40], 0, i4466, 'm_Material')
  return i4466
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4488 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4489 = data
  i4488.sourceFontFileName = i4489[0]
  i4488.sourceFontFileGUID = i4489[1]
  i4488.faceIndex = i4489[2]
  i4488.pointSizeSamplingMode = i4489[3]
  i4488.pointSize = i4489[4]
  i4488.padding = i4489[5]
  i4488.paddingMode = i4489[6]
  i4488.packingMode = i4489[7]
  i4488.atlasWidth = i4489[8]
  i4488.atlasHeight = i4489[9]
  i4488.characterSetSelectionMode = i4489[10]
  i4488.characterSequence = i4489[11]
  i4488.referencedFontAssetGUID = i4489[12]
  i4488.referencedTextAssetGUID = i4489[13]
  i4488.fontStyle = i4489[14]
  i4488.fontStyleModifier = i4489[15]
  i4488.renderMode = i4489[16]
  i4488.includeFontFeatures = !!i4489[17]
  return i4488
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4492 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4493 = data
  i4492.m_Index = i4493[0]
  i4492.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4493[1], i4492.m_Metrics)
  i4492.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4493[2], i4492.m_GlyphRect)
  i4492.m_Scale = i4493[3]
  i4492.m_AtlasIndex = i4493[4]
  i4492.m_ClassDefinitionType = i4493[5]
  return i4492
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4494 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4495 = data
  i4494.m_Width = i4495[0]
  i4494.m_Height = i4495[1]
  i4494.m_HorizontalBearingX = i4495[2]
  i4494.m_HorizontalBearingY = i4495[3]
  i4494.m_HorizontalAdvance = i4495[4]
  return i4494
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4496 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4497 = data
  i4496.m_X = i4497[0]
  i4496.m_Y = i4497[1]
  i4496.m_Width = i4497[2]
  i4496.m_Height = i4497[3]
  return i4496
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4500 = root || request.c( 'TMPro.TMP_Character' )
  var i4501 = data
  i4500.m_ElementType = i4501[0]
  i4500.m_Unicode = i4501[1]
  i4500.m_GlyphIndex = i4501[2]
  i4500.m_Scale = i4501[3]
  return i4500
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4506 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4507 = data
  var i4509 = i4507[0]
  var i4508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4509.length; i += 1) {
    i4508.add(request.d('TMPro.MultipleSubstitutionRecord', i4509[i + 0]));
  }
  i4506.m_MultipleSubstitutionRecords = i4508
  var i4511 = i4507[1]
  var i4510 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4511.length; i += 1) {
    i4510.add(request.d('TMPro.LigatureSubstitutionRecord', i4511[i + 0]));
  }
  i4506.m_LigatureSubstitutionRecords = i4510
  var i4513 = i4507[2]
  var i4512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4513[i + 0]));
  }
  i4506.m_GlyphPairAdjustmentRecords = i4512
  var i4515 = i4507[3]
  var i4514 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4515[i + 0]));
  }
  i4506.m_MarkToBaseAdjustmentRecords = i4514
  var i4517 = i4507[4]
  var i4516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4517.length; i += 1) {
    i4516.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4517[i + 0]));
  }
  i4506.m_MarkToMarkAdjustmentRecords = i4516
  return i4506
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4520 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4521 = data
  i4520.m_TargetGlyphID = i4521[0]
  i4520.m_SubstituteGlyphIDs = i4521[1]
  return i4520
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4524 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4525 = data
  i4524.m_ComponentGlyphIDs = i4525[0]
  i4524.m_LigatureGlyphID = i4525[1]
  return i4524
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4528 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4529 = data
  i4528.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4529[0], i4528.m_FirstAdjustmentRecord)
  i4528.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4529[1], i4528.m_SecondAdjustmentRecord)
  i4528.m_FeatureLookupFlags = i4529[2]
  return i4528
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4532 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4533 = data
  i4532.m_BaseGlyphID = i4533[0]
  i4532.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4533[1], i4532.m_BaseGlyphAnchorPoint)
  i4532.m_MarkGlyphID = i4533[2]
  i4532.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4533[3], i4532.m_MarkPositionAdjustment)
  return i4532
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4536 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4537 = data
  i4536.m_BaseMarkGlyphID = i4537[0]
  i4536.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4537[1], i4536.m_BaseMarkGlyphAnchorPoint)
  i4536.m_CombiningMarkGlyphID = i4537[2]
  i4536.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4537[3], i4536.m_CombiningMarkPositionAdjustment)
  return i4536
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4542 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4543 = data
  request.r(i4543[0], i4543[1], 0, i4542, 'regularTypeface')
  request.r(i4543[2], i4543[3], 0, i4542, 'italicTypeface')
  return i4542
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4544 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4545 = data
  i4544.Name = i4545[0]
  i4544.PointSize = i4545[1]
  i4544.Scale = i4545[2]
  i4544.CharacterCount = i4545[3]
  i4544.LineHeight = i4545[4]
  i4544.Baseline = i4545[5]
  i4544.Ascender = i4545[6]
  i4544.CapHeight = i4545[7]
  i4544.Descender = i4545[8]
  i4544.CenterLine = i4545[9]
  i4544.SuperscriptOffset = i4545[10]
  i4544.SubscriptOffset = i4545[11]
  i4544.SubSize = i4545[12]
  i4544.Underline = i4545[13]
  i4544.UnderlineThickness = i4545[14]
  i4544.strikethrough = i4545[15]
  i4544.strikethroughThickness = i4545[16]
  i4544.TabWidth = i4545[17]
  i4544.Padding = i4545[18]
  i4544.AtlasWidth = i4545[19]
  i4544.AtlasHeight = i4545[20]
  return i4544
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4548 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4549 = data
  i4548.id = i4549[0]
  i4548.x = i4549[1]
  i4548.y = i4549[2]
  i4548.width = i4549[3]
  i4548.height = i4549[4]
  i4548.xOffset = i4549[5]
  i4548.yOffset = i4549[6]
  i4548.xAdvance = i4549[7]
  i4548.scale = i4549[8]
  return i4548
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4550 = root || request.c( 'TMPro.KerningTable' )
  var i4551 = data
  var i4553 = i4551[0]
  var i4552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4553.length; i += 1) {
    i4552.add(request.d('TMPro.KerningPair', i4553[i + 0]));
  }
  i4550.kerningPairs = i4552
  return i4550
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4556 = root || request.c( 'TMPro.KerningPair' )
  var i4557 = data
  i4556.xOffset = i4557[0]
  i4556.m_FirstGlyph = i4557[1]
  i4556.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4557[2], i4556.m_FirstGlyphAdjustments)
  i4556.m_SecondGlyph = i4557[3]
  i4556.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4557[4], i4556.m_SecondGlyphAdjustments)
  i4556.m_IgnoreSpacingAdjustments = !!i4557[5]
  return i4556
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4558 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4559 = data
  i4558.m_FaceIndex = i4559[0]
  i4558.m_FamilyName = i4559[1]
  i4558.m_StyleName = i4559[2]
  i4558.m_PointSize = i4559[3]
  i4558.m_Scale = i4559[4]
  i4558.m_UnitsPerEM = i4559[5]
  i4558.m_LineHeight = i4559[6]
  i4558.m_AscentLine = i4559[7]
  i4558.m_CapLine = i4559[8]
  i4558.m_MeanLine = i4559[9]
  i4558.m_Baseline = i4559[10]
  i4558.m_DescentLine = i4559[11]
  i4558.m_SuperscriptOffset = i4559[12]
  i4558.m_SuperscriptSize = i4559[13]
  i4558.m_SubscriptOffset = i4559[14]
  i4558.m_SubscriptSize = i4559[15]
  i4558.m_UnderlineOffset = i4559[16]
  i4558.m_UnderlineThickness = i4559[17]
  i4558.m_StrikethroughOffset = i4559[18]
  i4558.m_StrikethroughThickness = i4559[19]
  i4558.m_TabWidth = i4559[20]
  return i4558
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4560 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4561 = data
  var i4563 = i4561[0]
  var i4562 = []
  for(var i = 0; i < i4563.length; i += 2) {
  request.r(i4563[i + 0], i4563[i + 1], 2, i4562, '')
  }
  i4560.atlasAssets = i4562
  i4560.scale = i4561[1]
  request.r(i4561[2], i4561[3], 0, i4560, 'skeletonJSON')
  i4560.isUpgradingBlendModeMaterials = !!i4561[4]
  i4560.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4561[5], i4560.blendModeMaterials)
  var i4565 = i4561[6]
  var i4564 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4565.length; i += 2) {
  request.r(i4565[i + 0], i4565[i + 1], 1, i4564, '')
  }
  i4560.skeletonDataModifiers = i4564
  var i4567 = i4561[7]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( i4567[i + 0] );
  }
  i4560.fromAnimation = i4566
  var i4569 = i4561[8]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.push( i4569[i + 0] );
  }
  i4560.toAnimation = i4568
  i4560.duration = i4561[9]
  i4560.defaultMix = i4561[10]
  request.r(i4561[11], i4561[12], 0, i4560, 'controller')
  return i4560
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4572 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4573 = data
  i4572.applyAdditiveMaterial = !!i4573[0]
  var i4575 = i4573[1]
  var i4574 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4575.length; i += 1) {
    i4574.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4575[i + 0]));
  }
  i4572.additiveMaterials = i4574
  var i4577 = i4573[2]
  var i4576 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4577.length; i += 1) {
    i4576.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4577[i + 0]));
  }
  i4572.multiplyMaterials = i4576
  var i4579 = i4573[3]
  var i4578 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4579.length; i += 1) {
    i4578.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4579[i + 0]));
  }
  i4572.screenMaterials = i4578
  i4572.requiresBlendModeMaterials = !!i4573[4]
  return i4572
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4582 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4583 = data
  i4582.pageName = i4583[0]
  request.r(i4583[1], i4583[2], 0, i4582, 'material')
  return i4582
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4586 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4587 = data
  request.r(i4587[0], i4587[1], 0, i4586, 'atlasFile')
  var i4589 = i4587[2]
  var i4588 = []
  for(var i = 0; i < i4589.length; i += 2) {
  request.r(i4589[i + 0], i4589[i + 1], 2, i4588, '')
  }
  i4586.materials = i4588
  i4586.textureLoadingMode = i4587[3]
  request.r(i4587[4], i4587[5], 0, i4586, 'onDemandTextureLoader')
  return i4586
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4591 = data
  i4590.useSafeMode = !!i4591[0]
  i4590.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4591[1], i4590.safeModeOptions)
  i4590.timeScale = i4591[2]
  i4590.unscaledTimeScale = i4591[3]
  i4590.useSmoothDeltaTime = !!i4591[4]
  i4590.maxSmoothUnscaledTime = i4591[5]
  i4590.rewindCallbackMode = i4591[6]
  i4590.showUnityEditorReport = !!i4591[7]
  i4590.logBehaviour = i4591[8]
  i4590.drawGizmos = !!i4591[9]
  i4590.defaultRecyclable = !!i4591[10]
  i4590.defaultAutoPlay = i4591[11]
  i4590.defaultUpdateType = i4591[12]
  i4590.defaultTimeScaleIndependent = !!i4591[13]
  i4590.defaultEaseType = i4591[14]
  i4590.defaultEaseOvershootOrAmplitude = i4591[15]
  i4590.defaultEasePeriod = i4591[16]
  i4590.defaultAutoKill = !!i4591[17]
  i4590.defaultLoopType = i4591[18]
  i4590.debugMode = !!i4591[19]
  i4590.debugStoreTargetId = !!i4591[20]
  i4590.showPreviewPanel = !!i4591[21]
  i4590.storeSettingsLocation = i4591[22]
  i4590.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4591[23], i4590.modules)
  i4590.createASMDEF = !!i4591[24]
  i4590.showPlayingTweens = !!i4591[25]
  i4590.showPausedTweens = !!i4591[26]
  return i4590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4593 = data
  i4592.logBehaviour = i4593[0]
  i4592.nestedTweenFailureBehaviour = i4593[1]
  return i4592
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4594 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4595 = data
  i4594.showPanel = !!i4595[0]
  i4594.audioEnabled = !!i4595[1]
  i4594.physicsEnabled = !!i4595[2]
  i4594.physics2DEnabled = !!i4595[3]
  i4594.spriteEnabled = !!i4595[4]
  i4594.uiEnabled = !!i4595[5]
  i4594.uiToolkitEnabled = !!i4595[6]
  i4594.textMeshProEnabled = !!i4595[7]
  i4594.tk2DEnabled = !!i4595[8]
  i4594.deAudioEnabled = !!i4595[9]
  i4594.deUnityExtendedEnabled = !!i4595[10]
  i4594.epoOutlineEnabled = !!i4595[11]
  return i4594
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4596 = root || request.c( 'TMPro.TMP_Settings' )
  var i4597 = data
  i4596.assetVersion = i4597[0]
  i4596.m_TextWrappingMode = i4597[1]
  i4596.m_enableKerning = !!i4597[2]
  var i4599 = i4597[3]
  var i4598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4599.length; i += 1) {
    i4598.add(i4599[i + 0]);
  }
  i4596.m_ActiveFontFeatures = i4598
  i4596.m_enableExtraPadding = !!i4597[4]
  i4596.m_enableTintAllSprites = !!i4597[5]
  i4596.m_enableParseEscapeCharacters = !!i4597[6]
  i4596.m_EnableRaycastTarget = !!i4597[7]
  i4596.m_GetFontFeaturesAtRuntime = !!i4597[8]
  i4596.m_missingGlyphCharacter = i4597[9]
  i4596.m_ClearDynamicDataOnBuild = !!i4597[10]
  i4596.m_warningsDisabled = !!i4597[11]
  request.r(i4597[12], i4597[13], 0, i4596, 'm_defaultFontAsset')
  i4596.m_defaultFontAssetPath = i4597[14]
  i4596.m_defaultFontSize = i4597[15]
  i4596.m_defaultAutoSizeMinRatio = i4597[16]
  i4596.m_defaultAutoSizeMaxRatio = i4597[17]
  i4596.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4597[18], i4597[19] )
  i4596.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4597[20], i4597[21] )
  i4596.m_autoSizeTextContainer = !!i4597[22]
  i4596.m_IsTextObjectScaleStatic = !!i4597[23]
  var i4601 = i4597[24]
  var i4600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4601.length; i += 2) {
  request.r(i4601[i + 0], i4601[i + 1], 1, i4600, '')
  }
  i4596.m_fallbackFontAssets = i4600
  i4596.m_matchMaterialPreset = !!i4597[25]
  i4596.m_HideSubTextObjects = !!i4597[26]
  request.r(i4597[27], i4597[28], 0, i4596, 'm_defaultSpriteAsset')
  i4596.m_defaultSpriteAssetPath = i4597[29]
  i4596.m_enableEmojiSupport = !!i4597[30]
  i4596.m_MissingCharacterSpriteUnicode = i4597[31]
  var i4603 = i4597[32]
  var i4602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4603.length; i += 2) {
  request.r(i4603[i + 0], i4603[i + 1], 1, i4602, '')
  }
  i4596.m_EmojiFallbackTextAssets = i4602
  i4596.m_defaultColorGradientPresetsPath = i4597[33]
  request.r(i4597[34], i4597[35], 0, i4596, 'm_defaultStyleSheet')
  i4596.m_StyleSheetsResourcePath = i4597[36]
  request.r(i4597[37], i4597[38], 0, i4596, 'm_leadingCharacters')
  request.r(i4597[39], i4597[40], 0, i4596, 'm_followingCharacters')
  i4596.m_UseModernHangulLineBreakingRules = !!i4597[41]
  return i4596
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4606 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4607 = data
  i4606.m_GlyphIndex = i4607[0]
  i4606.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4607[1], i4606.m_GlyphValueRecord)
  return i4606
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4608 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4609 = data
  i4608.m_XPlacement = i4609[0]
  i4608.m_YPlacement = i4609[1]
  i4608.m_XAdvance = i4609[2]
  i4608.m_YAdvance = i4609[3]
  return i4608
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4610 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4611 = data
  request.r(i4611[0], i4611[1], 0, i4610, 'spriteSheet')
  var i4613 = i4611[2]
  var i4612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4613.length; i += 1) {
    i4612.add(request.d('TMPro.TMP_Sprite', i4613[i + 0]));
  }
  i4610.spriteInfoList = i4612
  var i4615 = i4611[3]
  var i4614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4615.length; i += 2) {
  request.r(i4615[i + 0], i4615[i + 1], 1, i4614, '')
  }
  i4610.fallbackSpriteAssets = i4614
  var i4617 = i4611[4]
  var i4616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4617.length; i += 1) {
    i4616.add(request.d('TMPro.TMP_SpriteCharacter', i4617[i + 0]));
  }
  i4610.m_SpriteCharacterTable = i4616
  var i4619 = i4611[5]
  var i4618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4619.length; i += 1) {
    i4618.add(request.d('TMPro.TMP_SpriteGlyph', i4619[i + 0]));
  }
  i4610.m_GlyphTable = i4618
  i4610.m_Version = i4611[6]
  i4610.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4611[7], i4610.m_FaceInfo)
  request.r(i4611[8], i4611[9], 0, i4610, 'm_Material')
  return i4610
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4622 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4623 = data
  i4622.name = i4623[0]
  i4622.hashCode = i4623[1]
  i4622.unicode = i4623[2]
  i4622.pivot = new pc.Vec2( i4623[3], i4623[4] )
  request.r(i4623[5], i4623[6], 0, i4622, 'sprite')
  i4622.id = i4623[7]
  i4622.x = i4623[8]
  i4622.y = i4623[9]
  i4622.width = i4623[10]
  i4622.height = i4623[11]
  i4622.xOffset = i4623[12]
  i4622.yOffset = i4623[13]
  i4622.xAdvance = i4623[14]
  i4622.scale = i4623[15]
  return i4622
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4628 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4629 = data
  i4628.m_Name = i4629[0]
  i4628.m_ElementType = i4629[1]
  i4628.m_Unicode = i4629[2]
  i4628.m_GlyphIndex = i4629[3]
  i4628.m_Scale = i4629[4]
  return i4628
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4632 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4633 = data
  request.r(i4633[0], i4633[1], 0, i4632, 'sprite')
  i4632.m_Index = i4633[2]
  i4632.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4633[3], i4632.m_Metrics)
  i4632.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4633[4], i4632.m_GlyphRect)
  i4632.m_Scale = i4633[5]
  i4632.m_AtlasIndex = i4633[6]
  i4632.m_ClassDefinitionType = i4633[7]
  return i4632
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4634 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4635 = data
  var i4637 = i4635[0]
  var i4636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4637.length; i += 1) {
    i4636.add(request.d('TMPro.TMP_Style', i4637[i + 0]));
  }
  i4634.m_StyleList = i4636
  return i4634
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4640 = root || request.c( 'TMPro.TMP_Style' )
  var i4641 = data
  i4640.m_Name = i4641[0]
  i4640.m_HashCode = i4641[1]
  i4640.m_OpeningDefinition = i4641[2]
  i4640.m_ClosingDefinition = i4641[3]
  i4640.m_OpeningTagArray = i4641[4]
  i4640.m_ClosingTagArray = i4641[5]
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4643 = data
  var i4645 = i4643[0]
  var i4644 = []
  for(var i = 0; i < i4645.length; i += 1) {
    i4644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4645[i + 0]) );
  }
  i4642.files = i4644
  i4642.componentToPrefabIds = i4643[1]
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4649 = data
  i4648.path = i4649[0]
  request.r(i4649[1], i4649[2], 0, i4648, 'unityObject')
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4651 = data
  var i4653 = i4651[0]
  var i4652 = []
  for(var i = 0; i < i4653.length; i += 1) {
    i4652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4653[i + 0]) );
  }
  i4650.scriptsExecutionOrder = i4652
  var i4655 = i4651[1]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4655[i + 0]) );
  }
  i4650.sortingLayers = i4654
  var i4657 = i4651[2]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4657[i + 0]) );
  }
  i4650.cullingLayers = i4656
  i4650.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4651[3], i4650.timeSettings)
  i4650.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4651[4], i4650.physicsSettings)
  i4650.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4651[5], i4650.physics2DSettings)
  i4650.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4651[6], i4650.qualitySettings)
  i4650.enableRealtimeShadows = !!i4651[7]
  i4650.enableAutoInstancing = !!i4651[8]
  i4650.enableStaticBatching = !!i4651[9]
  i4650.enableDynamicBatching = !!i4651[10]
  i4650.usePreservativeDynamicBatching = !!i4651[11]
  i4650.lightmapEncodingQuality = i4651[12]
  i4650.desiredColorSpace = i4651[13]
  var i4659 = i4651[14]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 1) {
    i4658.push( i4659[i + 0] );
  }
  i4650.allTags = i4658
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4663 = data
  i4662.name = i4663[0]
  i4662.value = i4663[1]
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4667 = data
  i4666.id = i4667[0]
  i4666.name = i4667[1]
  i4666.value = i4667[2]
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4671 = data
  i4670.id = i4671[0]
  i4670.name = i4671[1]
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4673 = data
  i4672.fixedDeltaTime = i4673[0]
  i4672.maximumDeltaTime = i4673[1]
  i4672.timeScale = i4673[2]
  i4672.maximumParticleTimestep = i4673[3]
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4675 = data
  i4674.gravity = new pc.Vec3( i4675[0], i4675[1], i4675[2] )
  i4674.defaultSolverIterations = i4675[3]
  i4674.bounceThreshold = i4675[4]
  i4674.autoSyncTransforms = !!i4675[5]
  i4674.autoSimulation = !!i4675[6]
  var i4677 = i4675[7]
  var i4676 = []
  for(var i = 0; i < i4677.length; i += 1) {
    i4676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4677[i + 0]) );
  }
  i4674.collisionMatrix = i4676
  return i4674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4681 = data
  i4680.enabled = !!i4681[0]
  i4680.layerId = i4681[1]
  i4680.otherLayerId = i4681[2]
  return i4680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4683 = data
  request.r(i4683[0], i4683[1], 0, i4682, 'material')
  i4682.gravity = new pc.Vec2( i4683[2], i4683[3] )
  i4682.positionIterations = i4683[4]
  i4682.velocityIterations = i4683[5]
  i4682.velocityThreshold = i4683[6]
  i4682.maxLinearCorrection = i4683[7]
  i4682.maxAngularCorrection = i4683[8]
  i4682.maxTranslationSpeed = i4683[9]
  i4682.maxRotationSpeed = i4683[10]
  i4682.baumgarteScale = i4683[11]
  i4682.baumgarteTOIScale = i4683[12]
  i4682.timeToSleep = i4683[13]
  i4682.linearSleepTolerance = i4683[14]
  i4682.angularSleepTolerance = i4683[15]
  i4682.defaultContactOffset = i4683[16]
  i4682.autoSimulation = !!i4683[17]
  i4682.queriesHitTriggers = !!i4683[18]
  i4682.queriesStartInColliders = !!i4683[19]
  i4682.callbacksOnDisable = !!i4683[20]
  i4682.reuseCollisionCallbacks = !!i4683[21]
  i4682.autoSyncTransforms = !!i4683[22]
  var i4685 = i4683[23]
  var i4684 = []
  for(var i = 0; i < i4685.length; i += 1) {
    i4684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4685[i + 0]) );
  }
  i4682.collisionMatrix = i4684
  return i4682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4689 = data
  i4688.enabled = !!i4689[0]
  i4688.layerId = i4689[1]
  i4688.otherLayerId = i4689[2]
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4691 = data
  var i4693 = i4691[0]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 1) {
    i4692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4693[i + 0]) );
  }
  i4690.qualityLevels = i4692
  var i4695 = i4691[1]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 1) {
    i4694.push( i4695[i + 0] );
  }
  i4690.names = i4694
  i4690.shadows = i4691[2]
  i4690.anisotropicFiltering = i4691[3]
  i4690.antiAliasing = i4691[4]
  i4690.lodBias = i4691[5]
  i4690.shadowCascades = i4691[6]
  i4690.shadowDistance = i4691[7]
  i4690.shadowmaskMode = i4691[8]
  i4690.shadowProjection = i4691[9]
  i4690.shadowResolution = i4691[10]
  i4690.softParticles = !!i4691[11]
  i4690.softVegetation = !!i4691[12]
  i4690.activeColorSpace = i4691[13]
  i4690.desiredColorSpace = i4691[14]
  i4690.masterTextureLimit = i4691[15]
  i4690.maxQueuedFrames = i4691[16]
  i4690.particleRaycastBudget = i4691[17]
  i4690.pixelLightCount = i4691[18]
  i4690.realtimeReflectionProbes = !!i4691[19]
  i4690.shadowCascade2Split = i4691[20]
  i4690.shadowCascade4Split = new pc.Vec3( i4691[21], i4691[22], i4691[23] )
  i4690.streamingMipmapsActive = !!i4691[24]
  i4690.vSyncCount = i4691[25]
  i4690.asyncUploadBufferSize = i4691[26]
  i4690.asyncUploadTimeSlice = i4691[27]
  i4690.billboardsFaceCameraPosition = !!i4691[28]
  i4690.shadowNearPlaneOffset = i4691[29]
  i4690.streamingMipmapsMemoryBudget = i4691[30]
  i4690.maximumLODLevel = i4691[31]
  i4690.streamingMipmapsAddAllCameras = !!i4691[32]
  i4690.streamingMipmapsMaxLevelReduction = i4691[33]
  i4690.streamingMipmapsRenderersPerFrame = i4691[34]
  i4690.resolutionScalingFixedDPIFactor = i4691[35]
  i4690.streamingMipmapsMaxFileIORequests = i4691[36]
  i4690.currentQualityLevel = i4691[37]
  return i4690
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4698 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4699 = data
  i4698.m_XCoordinate = i4699[0]
  i4698.m_YCoordinate = i4699[1]
  return i4698
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4700 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4701 = data
  i4700.m_XPositionAdjustment = i4701[0]
  i4700.m_YPositionAdjustment = i4701[1]
  return i4700
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4702 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4703 = data
  i4702.xPlacement = i4703[0]
  i4702.yPlacement = i4703[1]
  i4702.xAdvance = i4703[2]
  i4702.yAdvance = i4703[3]
  return i4702
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"5":[4],"26":[4],"82":[83],"84":[4],"85":[16,4],"86":[78],"27":[16,4],"87":[88,78],"89":[78,90],"91":[78],"92":[56],"93":[63],"94":[83],"95":[96],"97":[98],"99":[37],"100":[5],"101":[4],"102":[16,4],"103":[78],"104":[16,4],"105":[4],"106":[4],"107":[78,4],"15":[4,16],"108":[109],"110":[109],"111":[109],"112":[4],"113":[4],"8":[5],"12":[16,4],"114":[4],"7":[5],"115":[4],"116":[4],"33":[4],"117":[4],"118":[4],"119":[4],"120":[4],"21":[4],"121":[4],"17":[16,4],"23":[4],"122":[4],"123":[4],"124":[4],"34":[16,4],"125":[4],"126":[37],"127":[37],"38":[37],"128":[37],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Playable.WinLoseController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "09/21/2026 06:45:49";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V38_NgocNDL_DatDv";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "2908ef2555f4afa4ab6241b85cbb2f84";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.PA_BEQ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9199c59b-d632-4603-af33-76d9315bd0ce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

