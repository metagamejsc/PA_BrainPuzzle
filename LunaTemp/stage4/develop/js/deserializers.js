var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSpring' )
  var i505 = data
  i504.spring = i505[0]
  i504.damper = i505[1]
  i504.targetPosition = i505[2]
  return i504
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointMotor' )
  var i507 = data
  i506.m_TargetVelocity = i507[0]
  i506.m_Force = i507[1]
  i506.m_FreeSpin = i507[2]
  return i506
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointLimits' )
  var i509 = data
  i508.m_Min = i509[0]
  i508.m_Max = i509[1]
  i508.m_Bounciness = i509[2]
  i508.m_BounceMinVelocity = i509[3]
  i508.m_ContactDistance = i509[4]
  i508.minBounce = i509[5]
  i508.maxBounce = i509[6]
  return i508
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointDrive' )
  var i511 = data
  i510.m_PositionSpring = i511[0]
  i510.m_PositionDamper = i511[1]
  i510.m_MaximumForce = i511[2]
  i510.m_UseAcceleration = i511[3]
  return i510
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i513 = data
  i512.m_Spring = i513[0]
  i512.m_Damper = i513[1]
  return i512
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i515 = data
  i514.m_Limit = i515[0]
  i514.m_Bounciness = i515[1]
  i514.m_ContactDistance = i515[2]
  return i514
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i517 = data
  i516.m_ExtremumSlip = i517[0]
  i516.m_ExtremumValue = i517[1]
  i516.m_AsymptoteSlip = i517[2]
  i516.m_AsymptoteValue = i517[3]
  i516.m_Stiffness = i517[4]
  return i516
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i519 = data
  i518.m_LowerAngle = i519[0]
  i518.m_UpperAngle = i519[1]
  return i518
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i521 = data
  i520.m_MotorSpeed = i521[0]
  i520.m_MaximumMotorTorque = i521[1]
  return i520
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i523 = data
  i522.m_DampingRatio = i523[0]
  i522.m_Frequency = i523[1]
  i522.m_Angle = i523[2]
  return i522
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i525 = data
  i524.m_LowerTranslation = i525[0]
  i524.m_UpperTranslation = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i527 = data
  i526.name = i527[0]
  i526.width = i527[1]
  i526.height = i527[2]
  i526.mipmapCount = i527[3]
  i526.anisoLevel = i527[4]
  i526.filterMode = i527[5]
  i526.hdr = !!i527[6]
  i526.format = i527[7]
  i526.wrapMode = i527[8]
  i526.alphaIsTransparency = !!i527[9]
  i526.alphaSource = i527[10]
  i526.graphicsFormat = i527[11]
  i526.sRGBTexture = !!i527[12]
  i526.desiredColorSpace = i527[13]
  i526.wrapU = i527[14]
  i526.wrapV = i527[15]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i528 = root || new pc.UnityMaterial()
  var i529 = data
  i528.name = i529[0]
  request.r(i529[1], i529[2], 0, i528, 'shader')
  i528.renderQueue = i529[3]
  i528.enableInstancing = !!i529[4]
  var i531 = i529[5]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i531[i + 0]) );
  }
  i528.floatParameters = i530
  var i533 = i529[6]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i533[i + 0]) );
  }
  i528.colorParameters = i532
  var i535 = i529[7]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i535[i + 0]) );
  }
  i528.vectorParameters = i534
  var i537 = i529[8]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i537[i + 0]) );
  }
  i528.textureParameters = i536
  var i539 = i529[9]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i539[i + 0]) );
  }
  i528.materialFlags = i538
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i547 = data
  i546.name = i547[0]
  i546.value = new pc.Color(i547[1], i547[2], i547[3], i547[4])
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = new pc.Vec4( i551[1], i551[2], i551[3], i551[4] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i555 = data
  i554.name = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'value')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i559 = data
  i558.name = i559[0]
  i558.enabled = !!i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i561 = data
  i560.name = i561[0]
  i560.index = i561[1]
  i560.startup = !!i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i563 = data
  i562.aspect = i563[0]
  i562.orthographic = !!i563[1]
  i562.orthographicSize = i563[2]
  i562.backgroundColor = new pc.Color(i563[3], i563[4], i563[5], i563[6])
  i562.nearClipPlane = i563[7]
  i562.farClipPlane = i563[8]
  i562.fieldOfView = i563[9]
  i562.depth = i563[10]
  i562.clearFlags = i563[11]
  i562.cullingMask = i563[12]
  i562.rect = i563[13]
  request.r(i563[14], i563[15], 0, i562, 'targetTexture')
  i562.usePhysicalProperties = !!i563[16]
  i562.focalLength = i563[17]
  i562.sensorSize = new pc.Vec2( i563[18], i563[19] )
  i562.lensShift = new pc.Vec2( i563[20], i563[21] )
  i562.gateFit = i563[22]
  i562.commandBufferCount = i563[23]
  i562.cameraType = i563[24]
  i562.enabled = !!i563[25]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i565 = data
  i564.name = i565[0]
  i564.tagId = i565[1]
  i564.enabled = !!i565[2]
  i564.isStatic = !!i565[3]
  i564.layer = i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i567 = data
  i566.pivot = new pc.Vec2( i567[0], i567[1] )
  i566.anchorMin = new pc.Vec2( i567[2], i567[3] )
  i566.anchorMax = new pc.Vec2( i567[4], i567[5] )
  i566.sizeDelta = new pc.Vec2( i567[6], i567[7] )
  i566.anchoredPosition3D = new pc.Vec3( i567[8], i567[9], i567[10] )
  i566.rotation = new pc.Quat(i567[11], i567[12], i567[13], i567[14])
  i566.scale = new pc.Vec3( i567[15], i567[16], i567[17] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i569 = data
  i568.planeDistance = i569[0]
  i568.referencePixelsPerUnit = i569[1]
  i568.isFallbackOverlay = !!i569[2]
  i568.renderMode = i569[3]
  i568.renderOrder = i569[4]
  i568.sortingLayerName = i569[5]
  i568.sortingOrder = i569[6]
  i568.scaleFactor = i569[7]
  request.r(i569[8], i569[9], 0, i568, 'worldCamera')
  i568.overrideSorting = !!i569[10]
  i568.pixelPerfect = !!i569[11]
  i568.targetDisplay = i569[12]
  i568.overridePixelPerfect = !!i569[13]
  i568.enabled = !!i569[14]
  return i568
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i571 = data
  i570.m_UiScaleMode = i571[0]
  i570.m_ReferencePixelsPerUnit = i571[1]
  i570.m_ScaleFactor = i571[2]
  i570.m_ReferenceResolution = new pc.Vec2( i571[3], i571[4] )
  i570.m_ScreenMatchMode = i571[5]
  i570.m_MatchWidthOrHeight = i571[6]
  i570.m_PhysicalUnit = i571[7]
  i570.m_FallbackScreenDPI = i571[8]
  i570.m_DefaultSpriteDPI = i571[9]
  i570.m_DynamicPixelsPerUnit = i571[10]
  i570.m_PresetInfoIsWorld = !!i571[11]
  return i570
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i573 = data
  i572.m_IgnoreReversedGraphics = !!i573[0]
  i572.m_BlockingObjects = i573[1]
  i572.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i573[2] )
  return i572
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i574 = root || request.c( 'Playable.GameManager' )
  var i575 = data
  i574.EventCountdownEndGame = request.d('System.Action', i575[0], i574.EventCountdownEndGame)
  i574._totalEvent = i575[1]
  i574._maxEvent = i575[2]
  i574._endTime = i575[3]
  request.r(i575[4], i575[5], 0, i574, '_backgroundMusic')
  request.r(i575[6], i575[7], 0, i574, '_backgroundTexture')
  request.r(i575[8], i575[9], 0, i574, '_btnBlock')
  request.r(i575[10], i575[11], 0, i574, '_background')
  request.r(i575[12], i575[13], 0, i574, '_progressFillImage')
  request.r(i575[14], i575[15], 0, i574, '_progressText')
  i574._progressTweenDuration = i575[16]
  request.r(i575[17], i575[18], 0, i574, '_timerFillImage')
  request.r(i575[19], i575[20], 0, i574, '_timerText')
  i574._timerPunchScale = i575[21]
  return i574
}

Deserializers["System.Action"] = function (request, data, root) {
  var i576 = root || request.c( 'System.Action' )
  var i577 = data
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i579 = data
  i578.cullTransparentMesh = !!i579[0]
  return i578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Image' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Sprite')
  i580.m_Type = i581[2]
  i580.m_PreserveAspect = !!i581[3]
  i580.m_FillCenter = !!i581[4]
  i580.m_FillMethod = i581[5]
  i580.m_FillAmount = i581[6]
  i580.m_FillClockwise = !!i581[7]
  i580.m_FillOrigin = i581[8]
  i580.m_UseSpriteMesh = !!i581[9]
  i580.m_PixelsPerUnitMultiplier = i581[10]
  request.r(i581[11], i581[12], 0, i580, 'm_Material')
  i580.m_Maskable = !!i581[13]
  i580.m_Color = new pc.Color(i581[14], i581[15], i581[16], i581[17])
  i580.m_RaycastTarget = !!i581[18]
  i580.m_RaycastPadding = new pc.Vec4( i581[19], i581[20], i581[21], i581[22] )
  return i580
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Texture')
  i582.m_UVRect = UnityEngine.Rect.MinMaxRect(i583[2], i583[3], i583[4], i583[5])
  request.r(i583[6], i583[7], 0, i582, 'm_Material')
  i582.m_Maskable = !!i583[8]
  i582.m_Color = new pc.Color(i583[9], i583[10], i583[11], i583[12])
  i582.m_RaycastTarget = !!i583[13]
  i582.m_RaycastPadding = new pc.Vec4( i583[14], i583[15], i583[16], i583[17] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'clip')
  request.r(i585[2], i585[3], 0, i584, 'outputAudioMixerGroup')
  i584.playOnAwake = !!i585[4]
  i584.loop = !!i585[5]
  i584.time = i585[6]
  i584.volume = i585[7]
  i584.pitch = i585[8]
  i584.enabled = !!i585[9]
  return i584
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i586 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i587 = data
  i586.m_hasFontAssetChanged = !!i587[0]
  request.r(i587[1], i587[2], 0, i586, 'm_baseMaterial')
  i586.m_maskOffset = new pc.Vec4( i587[3], i587[4], i587[5], i587[6] )
  i586.m_text = i587[7]
  i586.m_isRightToLeft = !!i587[8]
  request.r(i587[9], i587[10], 0, i586, 'm_fontAsset')
  request.r(i587[11], i587[12], 0, i586, 'm_sharedMaterial')
  var i589 = i587[13]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.m_fontSharedMaterials = i588
  request.r(i587[14], i587[15], 0, i586, 'm_fontMaterial')
  var i591 = i587[16]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i586.m_fontMaterials = i590
  i586.m_fontColor32 = UnityEngine.Color32.ConstructColor(i587[17], i587[18], i587[19], i587[20])
  i586.m_fontColor = new pc.Color(i587[21], i587[22], i587[23], i587[24])
  i586.m_enableVertexGradient = !!i587[25]
  i586.m_colorMode = i587[26]
  i586.m_fontColorGradient = request.d('TMPro.VertexGradient', i587[27], i586.m_fontColorGradient)
  request.r(i587[28], i587[29], 0, i586, 'm_fontColorGradientPreset')
  request.r(i587[30], i587[31], 0, i586, 'm_spriteAsset')
  i586.m_tintAllSprites = !!i587[32]
  request.r(i587[33], i587[34], 0, i586, 'm_StyleSheet')
  i586.m_TextStyleHashCode = i587[35]
  i586.m_overrideHtmlColors = !!i587[36]
  i586.m_faceColor = UnityEngine.Color32.ConstructColor(i587[37], i587[38], i587[39], i587[40])
  i586.m_fontSize = i587[41]
  i586.m_fontSizeBase = i587[42]
  i586.m_fontWeight = i587[43]
  i586.m_enableAutoSizing = !!i587[44]
  i586.m_fontSizeMin = i587[45]
  i586.m_fontSizeMax = i587[46]
  i586.m_fontStyle = i587[47]
  i586.m_HorizontalAlignment = i587[48]
  i586.m_VerticalAlignment = i587[49]
  i586.m_textAlignment = i587[50]
  i586.m_characterSpacing = i587[51]
  i586.m_wordSpacing = i587[52]
  i586.m_lineSpacing = i587[53]
  i586.m_lineSpacingMax = i587[54]
  i586.m_paragraphSpacing = i587[55]
  i586.m_charWidthMaxAdj = i587[56]
  i586.m_TextWrappingMode = i587[57]
  i586.m_wordWrappingRatios = i587[58]
  i586.m_overflowMode = i587[59]
  request.r(i587[60], i587[61], 0, i586, 'm_linkedTextComponent')
  request.r(i587[62], i587[63], 0, i586, 'parentLinkedComponent')
  i586.m_enableKerning = !!i587[64]
  var i593 = i587[65]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i593.length; i += 1) {
    i592.add(i593[i + 0]);
  }
  i586.m_ActiveFontFeatures = i592
  i586.m_enableExtraPadding = !!i587[66]
  i586.checkPaddingRequired = !!i587[67]
  i586.m_isRichText = !!i587[68]
  i586.m_parseCtrlCharacters = !!i587[69]
  i586.m_isOrthographic = !!i587[70]
  i586.m_isCullingEnabled = !!i587[71]
  i586.m_horizontalMapping = i587[72]
  i586.m_verticalMapping = i587[73]
  i586.m_uvLineOffset = i587[74]
  i586.m_geometrySortingOrder = i587[75]
  i586.m_IsTextObjectScaleStatic = !!i587[76]
  i586.m_VertexBufferAutoSizeReduction = !!i587[77]
  i586.m_useMaxVisibleDescender = !!i587[78]
  i586.m_pageToDisplay = i587[79]
  i586.m_margin = new pc.Vec4( i587[80], i587[81], i587[82], i587[83] )
  i586.m_isUsingLegacyAnimationComponent = !!i587[84]
  i586.m_isVolumetricText = !!i587[85]
  request.r(i587[86], i587[87], 0, i586, 'm_Material')
  i586.m_EmojiFallbackSupport = !!i587[88]
  i586.m_Maskable = !!i587[89]
  i586.m_Color = new pc.Color(i587[90], i587[91], i587[92], i587[93])
  i586.m_RaycastTarget = !!i587[94]
  i586.m_RaycastPadding = new pc.Vec4( i587[95], i587[96], i587[97], i587[98] )
  return i586
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i596 = root || request.c( 'TMPro.VertexGradient' )
  var i597 = data
  i596.topLeft = new pc.Color(i597[0], i597[1], i597[2], i597[3])
  i596.topRight = new pc.Color(i597[4], i597[5], i597[6], i597[7])
  i596.bottomLeft = new pc.Color(i597[8], i597[9], i597[10], i597[11])
  i596.bottomRight = new pc.Color(i597[12], i597[13], i597[14], i597[15])
  return i596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button' )
  var i601 = data
  i600.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i601[0], i600.m_OnClick)
  i600.m_Navigation = request.d('UnityEngine.UI.Navigation', i601[1], i600.m_Navigation)
  i600.m_Transition = i601[2]
  i600.m_Colors = request.d('UnityEngine.UI.ColorBlock', i601[3], i600.m_Colors)
  i600.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i601[4], i600.m_SpriteState)
  i600.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i601[5], i600.m_AnimationTriggers)
  i600.m_Interactable = !!i601[6]
  request.r(i601[7], i601[8], 0, i600, 'm_TargetGraphic')
  return i600
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i603 = data
  i602.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i603[0], i602.m_PersistentCalls)
  return i602
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i605 = data
  var i607 = i605[0]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('UnityEngine.Events.PersistentCall', i607[i + 0]));
  }
  i604.m_Calls = i606
  return i604
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_Target')
  i610.m_TargetAssemblyTypeName = i611[2]
  i610.m_MethodName = i611[3]
  i610.m_Mode = i611[4]
  i610.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i611[5], i610.m_Arguments)
  i610.m_CallState = i611[6]
  return i610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i613 = data
  i612.m_Mode = i613[0]
  i612.m_WrapAround = !!i613[1]
  request.r(i613[2], i613[3], 0, i612, 'm_SelectOnUp')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectOnDown')
  request.r(i613[6], i613[7], 0, i612, 'm_SelectOnLeft')
  request.r(i613[8], i613[9], 0, i612, 'm_SelectOnRight')
  return i612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i615 = data
  i614.m_NormalColor = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  i614.m_HighlightedColor = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.m_PressedColor = new pc.Color(i615[8], i615[9], i615[10], i615[11])
  i614.m_SelectedColor = new pc.Color(i615[12], i615[13], i615[14], i615[15])
  i614.m_DisabledColor = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  i614.m_ColorMultiplier = i615[20]
  i614.m_FadeDuration = i615[21]
  return i614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_HighlightedSprite')
  request.r(i617[2], i617[3], 0, i616, 'm_PressedSprite')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectedSprite')
  request.r(i617[6], i617[7], 0, i616, 'm_DisabledSprite')
  return i616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i619 = data
  i618.m_NormalTrigger = i619[0]
  i618.m_HighlightedTrigger = i619[1]
  i618.m_PressedTrigger = i619[2]
  i618.m_SelectedTrigger = i619[3]
  i618.m_DisabledTrigger = i619[4]
  return i618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_ObjectArgument')
  i620.m_ObjectArgumentAssemblyTypeName = i621[2]
  i620.m_IntArgument = i621[3]
  i620.m_FloatArgument = i621[4]
  i620.m_StringArgument = i621[5]
  i620.m_BoolArgument = !!i621[6]
  return i620
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Mask' )
  var i623 = data
  i622.m_ShowMaskGraphic = !!i623[0]
  return i622
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i624 = root || request.c( 'Playable.GameController' )
  var i625 = data
  return i624
}

Deserializers["Playable.BG"] = function (request, data, root) {
  var i626 = root || request.c( 'Playable.BG' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, '_bg')
  request.r(i627[2], i627[3], 0, i626, '_sprite')
  i626._onPlay = request.d('UnityEngine.Events.UnityEvent', i627[4], i626._onPlay)
  request.r(i627[5], i627[6], 0, i626, '_source')
  return i626
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i629 = data
  i628.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i629[0], i628.m_PersistentCalls)
  return i628
}

Deserializers["Playable.Ceiling"] = function (request, data, root) {
  var i630 = root || request.c( 'Playable.Ceiling' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, '_fan')
  request.r(i631[2], i631[3], 0, i630, '_airCondition')
  request.r(i631[4], i631[5], 0, i630, '_clip')
  i630._onPlay = request.d('UnityEngine.Events.UnityEvent', i631[6], i630._onPlay)
  request.r(i631[7], i631[8], 0, i630, '_source')
  return i630
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i632 = root || request.c( 'Playable.Door' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, '_skeleton')
  i632._animName = i633[2]
  request.r(i633[3], i633[4], 0, i632, '_door')
  i632._onPlay = request.d('UnityEngine.Events.UnityEvent', i633[5], i632._onPlay)
  request.r(i633[6], i633[7], 0, i632, '_source')
  return i632
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i634 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'skeletonDataAsset')
  request.r(i635[2], i635[3], 0, i634, 'additiveMaterial')
  request.r(i635[4], i635[5], 0, i634, 'multiplyMaterial')
  request.r(i635[6], i635[7], 0, i634, 'screenMaterial')
  i634.initialSkinName = i635[8]
  i634.initialFlipX = !!i635[9]
  i634.initialFlipY = !!i635[10]
  i634.startingAnimation = i635[11]
  i634.startingLoop = !!i635[12]
  i634.timeScale = i635[13]
  i634.freeze = !!i635[14]
  i634.layoutScaleMode = i635[15]
  i634.updateWhenInvisible = i635[16]
  i634.allowMultipleCanvasRenderers = !!i635[17]
  var i637 = i635[18]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.canvasRenderers = i636
  i634.enableSeparatorSlots = !!i635[19]
  i634.updateSeparatorPartLocation = !!i635[20]
  i634.updateSeparatorPartScale = !!i635[21]
  i634.disableMeshAssignmentOnOverride = !!i635[22]
  i634.referenceSize = new pc.Vec2( i635[23], i635[24] )
  i634.referenceScale = i635[25]
  i634.rectTransformSize = new pc.Vec2( i635[26], i635[27] )
  i634.editReferenceRect = !!i635[28]
  var i639 = i635[29]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i634.separatorSlotNames = i638
  var i641 = i635[30]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 1, i640, '')
  }
  i634.separatorParts = i640
  i634.meshGenerator = request.d('Spine.Unity.MeshGenerator', i635[31], i634.meshGenerator)
  i634.updateTiming = i635[32]
  i634.unscaledTime = !!i635[33]
  request.r(i635[34], i635[35], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[36]
  i634.m_Color = new pc.Color(i635[37], i635[38], i635[39], i635[40])
  i634.m_RaycastTarget = !!i635[41]
  i634.m_RaycastPadding = new pc.Vec4( i635[42], i635[43], i635[44], i635[45] )
  return i634
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i648 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i649 = data
  i648.settings = request.d('Spine.Unity.MeshGenerator+Settings', i649[0], i648.settings)
  return i648
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i650 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i651 = data
  i650.useClipping = !!i651[0]
  i650.zSpacing = i651[1]
  i650.pmaVertexColors = !!i651[2]
  i650.tintBlack = !!i651[3]
  i650.canvasGroupTintBlack = !!i651[4]
  i650.calculateTangents = !!i651[5]
  i650.addNormals = !!i651[6]
  i650.immutableTriangles = !!i651[7]
  return i650
}

Deserializers["Playable.Bed"] = function (request, data, root) {
  var i652 = root || request.c( 'Playable.Bed' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '_skeleton')
  i652._animName = i653[2]
  request.r(i653[3], i653[4], 0, i652, '_bed')
  request.r(i653[5], i653[6], 0, i652, '_bedOld')
  request.r(i653[7], i653[8], 0, i652, '_clip')
  i652._onPlay = request.d('UnityEngine.Events.UnityEvent', i653[9], i652._onPlay)
  request.r(i653[10], i653[11], 0, i652, '_source')
  return i652
}

Deserializers["Playable.Bathroom"] = function (request, data, root) {
  var i654 = root || request.c( 'Playable.Bathroom' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, '_skeleton')
  i654._animName = i655[2]
  request.r(i655[3], i655[4], 0, i654, '_mirror')
  request.r(i655[5], i655[6], 0, i654, '_bathroom')
  request.r(i655[7], i655[8], 0, i654, '_clip')
  i654._onPlay = request.d('UnityEngine.Events.UnityEvent', i655[9], i654._onPlay)
  request.r(i655[10], i655[11], 0, i654, '_source')
  return i654
}

Deserializers["Playable.Computer"] = function (request, data, root) {
  var i656 = root || request.c( 'Playable.Computer' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, '_skeleton')
  i656._animName = i657[2]
  request.r(i657[3], i657[4], 0, i656, '_computerOld')
  request.r(i657[5], i657[6], 0, i656, '_computer')
  i656._onPlay = request.d('UnityEngine.Events.UnityEvent', i657[7], i656._onPlay)
  request.r(i657[8], i657[9], 0, i656, '_source')
  return i656
}

Deserializers["Playable.Toilet"] = function (request, data, root) {
  var i658 = root || request.c( 'Playable.Toilet' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, '_skeleton')
  i658._animName = i659[2]
  request.r(i659[3], i659[4], 0, i658, '_toilet')
  request.r(i659[5], i659[6], 0, i658, '_clip')
  i658._onPlay = request.d('UnityEngine.Events.UnityEvent', i659[7], i658._onPlay)
  request.r(i659[8], i659[9], 0, i658, '_source')
  return i658
}

Deserializers["Playable.ItemRoot"] = function (request, data, root) {
  var i660 = root || request.c( 'Playable.ItemRoot' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.Item')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i660._itemList = i662
  request.r(i661[1], i661[2], 0, i660, '_canvas')
  request.r(i661[3], i661[4], 0, i660, '_camera')
  return i660
}

Deserializers["Playable.Item"] = function (request, data, root) {
  var i666 = root || request.c( 'Playable.Item' )
  var i667 = data
  return i666
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i668 = root || request.c( 'Playable.AudioManager' )
  var i669 = data
  var i671 = i669[0]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('Playable.SoundData', i671[i + 0]));
  }
  i668._sounds = i670
  request.r(i669[1], i669[2], 0, i668, '_audioMusic')
  request.r(i669[3], i669[4], 0, i668, '_audioSound')
  return i668
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i674 = root || request.c( 'Playable.SoundData' )
  var i675 = data
  i674.Type = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'Clip')
  return i674
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_FirstSelected')
  i676.m_sendNavigationEvents = !!i677[2]
  i676.m_DragThreshold = i677[3]
  return i676
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i679 = data
  i678.m_HorizontalAxis = i679[0]
  i678.m_VerticalAxis = i679[1]
  i678.m_SubmitButton = i679[2]
  i678.m_CancelButton = i679[3]
  i678.m_InputActionsPerSecond = i679[4]
  i678.m_RepeatDelay = i679[5]
  i678.m_ForceModuleActive = !!i679[6]
  i678.m_SendPointerHoverToParent = !!i679[7]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i681 = data
  i680.ambientIntensity = i681[0]
  i680.reflectionIntensity = i681[1]
  i680.ambientMode = i681[2]
  i680.ambientLight = new pc.Color(i681[3], i681[4], i681[5], i681[6])
  i680.ambientSkyColor = new pc.Color(i681[7], i681[8], i681[9], i681[10])
  i680.ambientGroundColor = new pc.Color(i681[11], i681[12], i681[13], i681[14])
  i680.ambientEquatorColor = new pc.Color(i681[15], i681[16], i681[17], i681[18])
  i680.fogColor = new pc.Color(i681[19], i681[20], i681[21], i681[22])
  i680.fogEndDistance = i681[23]
  i680.fogStartDistance = i681[24]
  i680.fogDensity = i681[25]
  i680.fog = !!i681[26]
  request.r(i681[27], i681[28], 0, i680, 'skybox')
  i680.fogMode = i681[29]
  var i683 = i681[30]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i683[i + 0]) );
  }
  i680.lightmaps = i682
  i680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i681[31], i680.lightProbes)
  i680.lightmapsMode = i681[32]
  i680.mixedBakeMode = i681[33]
  i680.environmentLightingMode = i681[34]
  i680.ambientProbe = new pc.SphericalHarmonicsL2(i681[35])
  request.r(i681[36], i681[37], 0, i680, 'customReflection')
  request.r(i681[38], i681[39], 0, i680, 'defaultReflection')
  i680.defaultReflectionMode = i681[40]
  i680.defaultReflectionResolution = i681[41]
  i680.sunLightObjectId = i681[42]
  i680.pixelLightCount = i681[43]
  i680.defaultReflectionHDR = !!i681[44]
  i680.hasLightDataAsset = !!i681[45]
  i680.hasManualGenerate = !!i681[46]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'lightmapColor')
  request.r(i687[2], i687[3], 0, i686, 'lightmapDirection')
  request.r(i687[4], i687[5], 0, i686, 'shadowMask')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i688 = root || new UnityEngine.LightProbes()
  var i689 = data
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i699[i + 0]));
  }
  i696.ShaderCompilationErrors = i698
  i696.name = i697[1]
  i696.guid = i697[2]
  var i701 = i697[3]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.shaderDefinedKeywords = i700
  var i703 = i697[4]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i703[i + 0]) );
  }
  i696.passes = i702
  var i705 = i697[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i705[i + 0]) );
  }
  i696.usePasses = i704
  var i707 = i697[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i707[i + 0]) );
  }
  i696.defaultParameterValues = i706
  request.r(i697[7], i697[8], 0, i696, 'unityFallbackShader')
  i696.readDepth = !!i697[9]
  i696.hasDepthOnlyPass = !!i697[10]
  i696.isCreatedByShaderGraph = !!i697[11]
  i696.disableBatching = !!i697[12]
  i696.compiled = !!i697[13]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i711 = data
  i710.shaderName = i711[0]
  i710.errorMessage = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i714 = root || new pc.UnityShaderPass()
  var i715 = data
  i714.id = i715[0]
  i714.subShaderIndex = i715[1]
  i714.name = i715[2]
  i714.passType = i715[3]
  i714.grabPassTextureName = i715[4]
  i714.usePass = !!i715[5]
  i714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[6], i714.zTest)
  i714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[7], i714.zWrite)
  i714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[8], i714.culling)
  i714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[9], i714.blending)
  i714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[10], i714.alphaBlending)
  i714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[11], i714.colorWriteMask)
  i714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[12], i714.offsetUnits)
  i714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[13], i714.offsetFactor)
  i714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[14], i714.stencilRef)
  i714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[15], i714.stencilReadMask)
  i714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[16], i714.stencilWriteMask)
  i714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[17], i714.stencilOp)
  i714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[18], i714.stencilOpFront)
  i714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[19], i714.stencilOpBack)
  var i717 = i715[20]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i717[i + 0]) );
  }
  i714.tags = i716
  var i719 = i715[21]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.passDefinedKeywords = i718
  var i721 = i715[22]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i721[i + 0]) );
  }
  i714.passDefinedKeywordGroups = i720
  var i723 = i715[23]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i714.variants = i722
  var i725 = i715[24]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i714.excludedVariants = i724
  i714.hasDepthReader = !!i715[25]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i727 = data
  i726.val = i727[0]
  i726.name = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i729 = data
  i728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.src)
  i728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.dst)
  i728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.op)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i731 = data
  i730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.pass)
  i730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.fail)
  i730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.zFail)
  i730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[3], i730.comp)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.keywords = i740
  i738.hasDiscard = !!i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i745 = data
  i744.passId = i745[0]
  i744.subShaderIndex = i745[1]
  var i747 = i745[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.vertexProgram = i745[3]
  i744.fragmentProgram = i745[4]
  i744.exportedForWebGl2 = !!i745[5]
  i744.readDepth = !!i745[6]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'shader')
  i750.pass = i751[2]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i755 = data
  i754.name = i755[0]
  i754.type = i755[1]
  i754.value = new pc.Vec4( i755[2], i755[3], i755[4], i755[5] )
  i754.textureValue = i755[6]
  i754.shaderPropertyFlag = i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'texture')
  i756.aabb = i757[3]
  i756.vertices = i757[4]
  i756.triangles = i757[5]
  i756.textureRect = UnityEngine.Rect.MinMaxRect(i757[6], i757[7], i757[8], i757[9])
  i756.packedRect = UnityEngine.Rect.MinMaxRect(i757[10], i757[11], i757[12], i757[13])
  i756.border = new pc.Vec4( i757[14], i757[15], i757[16], i757[17] )
  i756.transparency = i757[18]
  i756.bounds = i757[19]
  i756.pixelsPerUnit = i757[20]
  i756.textureWidth = i757[21]
  i756.textureHeight = i757[22]
  i756.nativeSize = new pc.Vec2( i757[23], i757[24] )
  i756.pivot = new pc.Vec2( i757[25], i757[26] )
  i756.textureRectOffset = new pc.Vec2( i757[27], i757[28] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i759 = data
  i758.name = i759[0]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i761 = data
  i760.name = i761[0]
  i760.ascent = i761[1]
  i760.originalLineHeight = i761[2]
  i760.fontSize = i761[3]
  var i763 = i761[4]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i763[i + 0]) );
  }
  i760.characterInfo = i762
  request.r(i761[5], i761[6], 0, i760, 'texture')
  i760.originalFontSize = i761[7]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i767 = data
  i766.index = i767[0]
  i766.advance = i767[1]
  i766.bearing = i767[2]
  i766.glyphWidth = i767[3]
  i766.glyphHeight = i767[4]
  i766.minX = i767[5]
  i766.maxX = i767[6]
  i766.minY = i767[7]
  i766.maxY = i767[8]
  i766.uvBottomLeftX = i767[9]
  i766.uvBottomLeftY = i767[10]
  i766.uvBottomRightX = i767[11]
  i766.uvBottomRightY = i767[12]
  i766.uvTopLeftX = i767[13]
  i766.uvTopLeftY = i767[14]
  i766.uvTopRightX = i767[15]
  i766.uvTopRightY = i767[16]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i769 = data
  i768.name = i769[0]
  i768.bytes64 = i769[1]
  i768.data = i769[2]
  return i768
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i771 = data
  i770.normalStyle = i771[0]
  i770.normalSpacingOffset = i771[1]
  i770.boldStyle = i771[2]
  i770.boldSpacing = i771[3]
  i770.italicStyle = i771[4]
  i770.tabSize = i771[5]
  request.r(i771[6], i771[7], 0, i770, 'atlas')
  i770.m_SourceFontFileGUID = i771[8]
  i770.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i771[9], i770.m_CreationSettings)
  request.r(i771[10], i771[11], 0, i770, 'm_SourceFontFile')
  i770.m_SourceFontFilePath = i771[12]
  i770.m_AtlasPopulationMode = i771[13]
  i770.InternalDynamicOS = !!i771[14]
  var i773 = i771[15]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.Glyph', i773[i + 0]));
  }
  i770.m_GlyphTable = i772
  var i775 = i771[16]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('TMPro.TMP_Character', i775[i + 0]));
  }
  i770.m_CharacterTable = i774
  var i777 = i771[17]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i770.m_AtlasTextures = i776
  i770.m_AtlasTextureIndex = i771[18]
  i770.m_IsMultiAtlasTexturesEnabled = !!i771[19]
  i770.m_GetFontFeatures = !!i771[20]
  i770.m_ClearDynamicDataOnBuild = !!i771[21]
  i770.m_AtlasWidth = i771[22]
  i770.m_AtlasHeight = i771[23]
  i770.m_AtlasPadding = i771[24]
  i770.m_AtlasRenderMode = i771[25]
  var i779 = i771[26]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.GlyphRect', i779[i + 0]));
  }
  i770.m_UsedGlyphRects = i778
  var i781 = i771[27]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('UnityEngine.TextCore.GlyphRect', i781[i + 0]));
  }
  i770.m_FreeGlyphRects = i780
  i770.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i771[28], i770.m_FontFeatureTable)
  i770.m_ShouldReimportFontFeatures = !!i771[29]
  var i783 = i771[30]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i770.m_FallbackFontAssetTable = i782
  var i785 = i771[31]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i770.m_FontWeightTable = i784
  var i787 = i771[32]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('TMPro.TMP_FontWeightPair', i787[i + 0]) );
  }
  i770.fontWeights = i786
  i770.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i771[33], i770.m_fontInfo)
  var i789 = i771[34]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('TMPro.TMP_Glyph', i789[i + 0]));
  }
  i770.m_glyphInfoList = i788
  i770.m_KerningTable = request.d('TMPro.KerningTable', i771[35], i770.m_KerningTable)
  var i791 = i771[36]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i770.fallbackFontAssets = i790
  i770.m_Version = i771[37]
  i770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i771[38], i770.m_FaceInfo)
  request.r(i771[39], i771[40], 0, i770, 'm_Material')
  return i770
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i793 = data
  i792.sourceFontFileName = i793[0]
  i792.sourceFontFileGUID = i793[1]
  i792.faceIndex = i793[2]
  i792.pointSizeSamplingMode = i793[3]
  i792.pointSize = i793[4]
  i792.padding = i793[5]
  i792.paddingMode = i793[6]
  i792.packingMode = i793[7]
  i792.atlasWidth = i793[8]
  i792.atlasHeight = i793[9]
  i792.characterSetSelectionMode = i793[10]
  i792.characterSequence = i793[11]
  i792.referencedFontAssetGUID = i793[12]
  i792.referencedTextAssetGUID = i793[13]
  i792.fontStyle = i793[14]
  i792.fontStyleModifier = i793[15]
  i792.renderMode = i793[16]
  i792.includeFontFeatures = !!i793[17]
  return i792
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i797 = data
  i796.m_Index = i797[0]
  i796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i797[1], i796.m_Metrics)
  i796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i797[2], i796.m_GlyphRect)
  i796.m_Scale = i797[3]
  i796.m_AtlasIndex = i797[4]
  i796.m_ClassDefinitionType = i797[5]
  return i796
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i799 = data
  i798.m_Width = i799[0]
  i798.m_Height = i799[1]
  i798.m_HorizontalBearingX = i799[2]
  i798.m_HorizontalBearingY = i799[3]
  i798.m_HorizontalAdvance = i799[4]
  return i798
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i801 = data
  i800.m_X = i801[0]
  i800.m_Y = i801[1]
  i800.m_Width = i801[2]
  i800.m_Height = i801[3]
  return i800
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.TMP_Character' )
  var i805 = data
  i804.m_ElementType = i805[0]
  i804.m_Unicode = i805[1]
  i804.m_GlyphIndex = i805[2]
  i804.m_Scale = i805[3]
  return i804
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.MultipleSubstitutionRecord', i813[i + 0]));
  }
  i810.m_MultipleSubstitutionRecords = i812
  var i815 = i811[1]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.LigatureSubstitutionRecord', i815[i + 0]));
  }
  i810.m_LigatureSubstitutionRecords = i814
  var i817 = i811[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i817[i + 0]));
  }
  i810.m_GlyphPairAdjustmentRecords = i816
  var i819 = i811[3]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i819[i + 0]));
  }
  i810.m_MarkToBaseAdjustmentRecords = i818
  var i821 = i811[4]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i821[i + 0]));
  }
  i810.m_MarkToMarkAdjustmentRecords = i820
  return i810
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i825 = data
  i824.m_TargetGlyphID = i825[0]
  i824.m_SubstituteGlyphIDs = i825[1]
  return i824
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i829 = data
  i828.m_ComponentGlyphIDs = i829[0]
  i828.m_LigatureGlyphID = i829[1]
  return i828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i833 = data
  i832.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i833[0], i832.m_FirstAdjustmentRecord)
  i832.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i833[1], i832.m_SecondAdjustmentRecord)
  i832.m_FeatureLookupFlags = i833[2]
  return i832
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i837 = data
  i836.m_BaseGlyphID = i837[0]
  i836.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i837[1], i836.m_BaseGlyphAnchorPoint)
  i836.m_MarkGlyphID = i837[2]
  i836.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i837[3], i836.m_MarkPositionAdjustment)
  return i836
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i841 = data
  i840.m_BaseMarkGlyphID = i841[0]
  i840.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i841[1], i840.m_BaseMarkGlyphAnchorPoint)
  i840.m_CombiningMarkGlyphID = i841[2]
  i840.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i841[3], i840.m_CombiningMarkPositionAdjustment)
  return i840
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'regularTypeface')
  request.r(i847[2], i847[3], 0, i846, 'italicTypeface')
  return i846
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i849 = data
  i848.Name = i849[0]
  i848.PointSize = i849[1]
  i848.Scale = i849[2]
  i848.CharacterCount = i849[3]
  i848.LineHeight = i849[4]
  i848.Baseline = i849[5]
  i848.Ascender = i849[6]
  i848.CapHeight = i849[7]
  i848.Descender = i849[8]
  i848.CenterLine = i849[9]
  i848.SuperscriptOffset = i849[10]
  i848.SubscriptOffset = i849[11]
  i848.SubSize = i849[12]
  i848.Underline = i849[13]
  i848.UnderlineThickness = i849[14]
  i848.strikethrough = i849[15]
  i848.strikethroughThickness = i849[16]
  i848.TabWidth = i849[17]
  i848.Padding = i849[18]
  i848.AtlasWidth = i849[19]
  i848.AtlasHeight = i849[20]
  return i848
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_Glyph' )
  var i853 = data
  i852.id = i853[0]
  i852.x = i853[1]
  i852.y = i853[2]
  i852.width = i853[3]
  i852.height = i853[4]
  i852.xOffset = i853[5]
  i852.yOffset = i853[6]
  i852.xAdvance = i853[7]
  i852.scale = i853[8]
  return i852
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.KerningTable' )
  var i855 = data
  var i857 = i855[0]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.KerningPair', i857[i + 0]));
  }
  i854.kerningPairs = i856
  return i854
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.KerningPair' )
  var i861 = data
  i860.xOffset = i861[0]
  i860.m_FirstGlyph = i861[1]
  i860.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i861[2], i860.m_FirstGlyphAdjustments)
  i860.m_SecondGlyph = i861[3]
  i860.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i861[4], i860.m_SecondGlyphAdjustments)
  i860.m_IgnoreSpacingAdjustments = !!i861[5]
  return i860
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i863 = data
  i862.m_FaceIndex = i863[0]
  i862.m_FamilyName = i863[1]
  i862.m_StyleName = i863[2]
  i862.m_PointSize = i863[3]
  i862.m_Scale = i863[4]
  i862.m_UnitsPerEM = i863[5]
  i862.m_LineHeight = i863[6]
  i862.m_AscentLine = i863[7]
  i862.m_CapLine = i863[8]
  i862.m_MeanLine = i863[9]
  i862.m_Baseline = i863[10]
  i862.m_DescentLine = i863[11]
  i862.m_SuperscriptOffset = i863[12]
  i862.m_SuperscriptSize = i863[13]
  i862.m_SubscriptOffset = i863[14]
  i862.m_SubscriptSize = i863[15]
  i862.m_UnderlineOffset = i863[16]
  i862.m_UnderlineThickness = i863[17]
  i862.m_StrikethroughOffset = i863[18]
  i862.m_StrikethroughThickness = i863[19]
  i862.m_TabWidth = i863[20]
  return i862
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i864 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.atlasAssets = i866
  i864.scale = i865[1]
  request.r(i865[2], i865[3], 0, i864, 'skeletonJSON')
  i864.isUpgradingBlendModeMaterials = !!i865[4]
  i864.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i865[5], i864.blendModeMaterials)
  var i869 = i865[6]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i864.skeletonDataModifiers = i868
  var i871 = i865[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i864.fromAnimation = i870
  var i873 = i865[8]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i864.toAnimation = i872
  i864.duration = i865[9]
  i864.defaultMix = i865[10]
  request.r(i865[11], i865[12], 0, i864, 'controller')
  return i864
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i876 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i877 = data
  i876.applyAdditiveMaterial = !!i877[0]
  var i879 = i877[1]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i879[i + 0]));
  }
  i876.additiveMaterials = i878
  var i881 = i877[2]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i881[i + 0]));
  }
  i876.multiplyMaterials = i880
  var i883 = i877[3]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i883[i + 0]));
  }
  i876.screenMaterials = i882
  i876.requiresBlendModeMaterials = !!i877[4]
  return i876
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i886 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i887 = data
  i886.pageName = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'material')
  return i886
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i890 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'atlasFile')
  var i893 = i891[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.materials = i892
  i890.textureLoadingMode = i891[3]
  request.r(i891[4], i891[5], 0, i890, 'onDemandTextureLoader')
  return i890
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i895 = data
  i894.useSafeMode = !!i895[0]
  i894.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i895[1], i894.safeModeOptions)
  i894.timeScale = i895[2]
  i894.unscaledTimeScale = i895[3]
  i894.useSmoothDeltaTime = !!i895[4]
  i894.maxSmoothUnscaledTime = i895[5]
  i894.rewindCallbackMode = i895[6]
  i894.showUnityEditorReport = !!i895[7]
  i894.logBehaviour = i895[8]
  i894.drawGizmos = !!i895[9]
  i894.defaultRecyclable = !!i895[10]
  i894.defaultAutoPlay = i895[11]
  i894.defaultUpdateType = i895[12]
  i894.defaultTimeScaleIndependent = !!i895[13]
  i894.defaultEaseType = i895[14]
  i894.defaultEaseOvershootOrAmplitude = i895[15]
  i894.defaultEasePeriod = i895[16]
  i894.defaultAutoKill = !!i895[17]
  i894.defaultLoopType = i895[18]
  i894.debugMode = !!i895[19]
  i894.debugStoreTargetId = !!i895[20]
  i894.showPreviewPanel = !!i895[21]
  i894.storeSettingsLocation = i895[22]
  i894.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i895[23], i894.modules)
  i894.createASMDEF = !!i895[24]
  i894.showPlayingTweens = !!i895[25]
  i894.showPausedTweens = !!i895[26]
  return i894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i897 = data
  i896.logBehaviour = i897[0]
  i896.nestedTweenFailureBehaviour = i897[1]
  return i896
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i899 = data
  i898.showPanel = !!i899[0]
  i898.audioEnabled = !!i899[1]
  i898.physicsEnabled = !!i899[2]
  i898.physics2DEnabled = !!i899[3]
  i898.spriteEnabled = !!i899[4]
  i898.uiEnabled = !!i899[5]
  i898.uiToolkitEnabled = !!i899[6]
  i898.textMeshProEnabled = !!i899[7]
  i898.tk2DEnabled = !!i899[8]
  i898.deAudioEnabled = !!i899[9]
  i898.deUnityExtendedEnabled = !!i899[10]
  i898.epoOutlineEnabled = !!i899[11]
  return i898
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_Settings' )
  var i901 = data
  i900.assetVersion = i901[0]
  i900.m_TextWrappingMode = i901[1]
  i900.m_enableKerning = !!i901[2]
  var i903 = i901[3]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(i903[i + 0]);
  }
  i900.m_ActiveFontFeatures = i902
  i900.m_enableExtraPadding = !!i901[4]
  i900.m_enableTintAllSprites = !!i901[5]
  i900.m_enableParseEscapeCharacters = !!i901[6]
  i900.m_EnableRaycastTarget = !!i901[7]
  i900.m_GetFontFeaturesAtRuntime = !!i901[8]
  i900.m_missingGlyphCharacter = i901[9]
  i900.m_ClearDynamicDataOnBuild = !!i901[10]
  i900.m_warningsDisabled = !!i901[11]
  request.r(i901[12], i901[13], 0, i900, 'm_defaultFontAsset')
  i900.m_defaultFontAssetPath = i901[14]
  i900.m_defaultFontSize = i901[15]
  i900.m_defaultAutoSizeMinRatio = i901[16]
  i900.m_defaultAutoSizeMaxRatio = i901[17]
  i900.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i901[18], i901[19] )
  i900.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i901[20], i901[21] )
  i900.m_autoSizeTextContainer = !!i901[22]
  i900.m_IsTextObjectScaleStatic = !!i901[23]
  var i905 = i901[24]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i900.m_fallbackFontAssets = i904
  i900.m_matchMaterialPreset = !!i901[25]
  i900.m_HideSubTextObjects = !!i901[26]
  request.r(i901[27], i901[28], 0, i900, 'm_defaultSpriteAsset')
  i900.m_defaultSpriteAssetPath = i901[29]
  i900.m_enableEmojiSupport = !!i901[30]
  i900.m_MissingCharacterSpriteUnicode = i901[31]
  var i907 = i901[32]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i900.m_EmojiFallbackTextAssets = i906
  i900.m_defaultColorGradientPresetsPath = i901[33]
  request.r(i901[34], i901[35], 0, i900, 'm_defaultStyleSheet')
  i900.m_StyleSheetsResourcePath = i901[36]
  request.r(i901[37], i901[38], 0, i900, 'm_leadingCharacters')
  request.r(i901[39], i901[40], 0, i900, 'm_followingCharacters')
  i900.m_UseModernHangulLineBreakingRules = !!i901[41]
  return i900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i911 = data
  i910.m_GlyphIndex = i911[0]
  i910.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i911[1], i910.m_GlyphValueRecord)
  return i910
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i913 = data
  i912.m_XPlacement = i913[0]
  i912.m_YPlacement = i913[1]
  i912.m_XAdvance = i913[2]
  i912.m_YAdvance = i913[3]
  return i912
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'spriteSheet')
  var i917 = i915[2]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_Sprite', i917[i + 0]));
  }
  i914.spriteInfoList = i916
  var i919 = i915[3]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i914.fallbackSpriteAssets = i918
  var i921 = i915[4]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('TMPro.TMP_SpriteCharacter', i921[i + 0]));
  }
  i914.m_SpriteCharacterTable = i920
  var i923 = i915[5]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.TMP_SpriteGlyph', i923[i + 0]));
  }
  i914.m_GlyphTable = i922
  i914.m_Version = i915[6]
  i914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i915[7], i914.m_FaceInfo)
  request.r(i915[8], i915[9], 0, i914, 'm_Material')
  return i914
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_Sprite' )
  var i927 = data
  i926.name = i927[0]
  i926.hashCode = i927[1]
  i926.unicode = i927[2]
  i926.pivot = new pc.Vec2( i927[3], i927[4] )
  request.r(i927[5], i927[6], 0, i926, 'sprite')
  i926.id = i927[7]
  i926.x = i927[8]
  i926.y = i927[9]
  i926.width = i927[10]
  i926.height = i927[11]
  i926.xOffset = i927[12]
  i926.yOffset = i927[13]
  i926.xAdvance = i927[14]
  i926.scale = i927[15]
  return i926
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i933 = data
  i932.m_Name = i933[0]
  i932.m_ElementType = i933[1]
  i932.m_Unicode = i933[2]
  i932.m_GlyphIndex = i933[3]
  i932.m_Scale = i933[4]
  return i932
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'sprite')
  i936.m_Index = i937[2]
  i936.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i937[3], i936.m_Metrics)
  i936.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i937[4], i936.m_GlyphRect)
  i936.m_Scale = i937[5]
  i936.m_AtlasIndex = i937[6]
  i936.m_ClassDefinitionType = i937[7]
  return i936
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_Style', i941[i + 0]));
  }
  i938.m_StyleList = i940
  return i938
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_Style' )
  var i945 = data
  i944.m_Name = i945[0]
  i944.m_HashCode = i945[1]
  i944.m_OpeningDefinition = i945[2]
  i944.m_ClosingDefinition = i945[3]
  i944.m_OpeningTagArray = i945[4]
  i944.m_ClosingTagArray = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i949[i + 0]) );
  }
  i946.files = i948
  i946.componentToPrefabIds = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i953 = data
  i952.path = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'unityObject')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i957[i + 0]) );
  }
  i954.scriptsExecutionOrder = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i959[i + 0]) );
  }
  i954.sortingLayers = i958
  var i961 = i955[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i961[i + 0]) );
  }
  i954.cullingLayers = i960
  i954.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i955[3], i954.timeSettings)
  i954.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i955[4], i954.physicsSettings)
  i954.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i955[5], i954.physics2DSettings)
  i954.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i955[6], i954.qualitySettings)
  i954.enableRealtimeShadows = !!i955[7]
  i954.enableAutoInstancing = !!i955[8]
  i954.enableStaticBatching = !!i955[9]
  i954.enableDynamicBatching = !!i955[10]
  i954.usePreservativeDynamicBatching = !!i955[11]
  i954.lightmapEncodingQuality = i955[12]
  i954.desiredColorSpace = i955[13]
  var i963 = i955[14]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i954.allTags = i962
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i967 = data
  i966.name = i967[0]
  i966.value = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i971 = data
  i970.id = i971[0]
  i970.name = i971[1]
  i970.value = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i975 = data
  i974.id = i975[0]
  i974.name = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i977 = data
  i976.fixedDeltaTime = i977[0]
  i976.maximumDeltaTime = i977[1]
  i976.timeScale = i977[2]
  i976.maximumParticleTimestep = i977[3]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i979 = data
  i978.gravity = new pc.Vec3( i979[0], i979[1], i979[2] )
  i978.defaultSolverIterations = i979[3]
  i978.bounceThreshold = i979[4]
  i978.autoSyncTransforms = !!i979[5]
  i978.autoSimulation = !!i979[6]
  var i981 = i979[7]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i981[i + 0]) );
  }
  i978.collisionMatrix = i980
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i985 = data
  i984.enabled = !!i985[0]
  i984.layerId = i985[1]
  i984.otherLayerId = i985[2]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'material')
  i986.gravity = new pc.Vec2( i987[2], i987[3] )
  i986.positionIterations = i987[4]
  i986.velocityIterations = i987[5]
  i986.velocityThreshold = i987[6]
  i986.maxLinearCorrection = i987[7]
  i986.maxAngularCorrection = i987[8]
  i986.maxTranslationSpeed = i987[9]
  i986.maxRotationSpeed = i987[10]
  i986.baumgarteScale = i987[11]
  i986.baumgarteTOIScale = i987[12]
  i986.timeToSleep = i987[13]
  i986.linearSleepTolerance = i987[14]
  i986.angularSleepTolerance = i987[15]
  i986.defaultContactOffset = i987[16]
  i986.autoSimulation = !!i987[17]
  i986.queriesHitTriggers = !!i987[18]
  i986.queriesStartInColliders = !!i987[19]
  i986.callbacksOnDisable = !!i987[20]
  i986.reuseCollisionCallbacks = !!i987[21]
  i986.autoSyncTransforms = !!i987[22]
  var i989 = i987[23]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i989[i + 0]) );
  }
  i986.collisionMatrix = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i993 = data
  i992.enabled = !!i993[0]
  i992.layerId = i993[1]
  i992.otherLayerId = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i997[i + 0]) );
  }
  i994.qualityLevels = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i994.names = i998
  i994.shadows = i995[2]
  i994.anisotropicFiltering = i995[3]
  i994.antiAliasing = i995[4]
  i994.lodBias = i995[5]
  i994.shadowCascades = i995[6]
  i994.shadowDistance = i995[7]
  i994.shadowmaskMode = i995[8]
  i994.shadowProjection = i995[9]
  i994.shadowResolution = i995[10]
  i994.softParticles = !!i995[11]
  i994.softVegetation = !!i995[12]
  i994.activeColorSpace = i995[13]
  i994.desiredColorSpace = i995[14]
  i994.masterTextureLimit = i995[15]
  i994.maxQueuedFrames = i995[16]
  i994.particleRaycastBudget = i995[17]
  i994.pixelLightCount = i995[18]
  i994.realtimeReflectionProbes = !!i995[19]
  i994.shadowCascade2Split = i995[20]
  i994.shadowCascade4Split = new pc.Vec3( i995[21], i995[22], i995[23] )
  i994.streamingMipmapsActive = !!i995[24]
  i994.vSyncCount = i995[25]
  i994.asyncUploadBufferSize = i995[26]
  i994.asyncUploadTimeSlice = i995[27]
  i994.billboardsFaceCameraPosition = !!i995[28]
  i994.shadowNearPlaneOffset = i995[29]
  i994.streamingMipmapsMemoryBudget = i995[30]
  i994.maximumLODLevel = i995[31]
  i994.streamingMipmapsAddAllCameras = !!i995[32]
  i994.streamingMipmapsMaxLevelReduction = i995[33]
  i994.streamingMipmapsRenderersPerFrame = i995[34]
  i994.resolutionScalingFixedDPIFactor = i995[35]
  i994.streamingMipmapsMaxFileIORequests = i995[36]
  i994.currentQualityLevel = i995[37]
  return i994
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1003 = data
  i1002.m_XCoordinate = i1003[0]
  i1002.m_YCoordinate = i1003[1]
  return i1002
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1005 = data
  i1004.m_XPositionAdjustment = i1005[0]
  i1004.m_YPositionAdjustment = i1005[1]
  return i1004
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1007 = data
  i1006.xPlacement = i1007[0]
  i1006.yPlacement = i1007[1]
  i1006.xAdvance = i1007[2]
  i1006.yAdvance = i1007[3]
  return i1006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"5":[4],"82":[83],"84":[85],"86":[78,87],"88":[27],"89":[85],"90":[91],"92":[85],"93":[85],"94":[95],"96":[95],"97":[85],"98":[99],"100":[4],"101":[15,4],"102":[78],"27":[15,4],"103":[104,78],"85":[78],"105":[78,87],"106":[56],"107":[63],"108":[99],"109":[95],"110":[111],"112":[2],"113":[114],"115":[36],"116":[5],"117":[4],"118":[78,4],"14":[4,15],"119":[4],"120":[15,4],"121":[78],"122":[15,4],"123":[4],"124":[125],"126":[125],"127":[125],"128":[4],"129":[4],"8":[5],"13":[15,4],"130":[4],"7":[5],"131":[4],"132":[4],"133":[4],"134":[4],"135":[4],"136":[4],"137":[4],"21":[4],"138":[4],"16":[15,4],"139":[4],"140":[4],"141":[4],"142":[4],"143":[15,4],"144":[4],"145":[36],"146":[36],"37":[36],"147":[36],"148":[2],"149":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","Playable.GameController","Playable.BG","Playable.Ceiling","UnityEngine.GameObject","Playable.Door","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Bed","Playable.Bathroom","Playable.Computer","Playable.Toilet","Playable.ItemRoot","Playable.Item","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "47.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BETP_V07_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "42831";

Deserializers.projectId = "cc1f2bc1088d6d648901eead39e3bfa0";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1918";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4508";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "966a76d6-f889-4a24-9748-795815c1b7d3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

