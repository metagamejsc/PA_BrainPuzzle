var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSpring' )
  var i571 = data
  i570.spring = i571[0]
  i570.damper = i571[1]
  i570.targetPosition = i571[2]
  return i570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor' )
  var i573 = data
  i572.m_TargetVelocity = i573[0]
  i572.m_Force = i573[1]
  i572.m_FreeSpin = i573[2]
  return i572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointLimits' )
  var i575 = data
  i574.m_Min = i575[0]
  i574.m_Max = i575[1]
  i574.m_Bounciness = i575[2]
  i574.m_BounceMinVelocity = i575[3]
  i574.m_ContactDistance = i575[4]
  i574.minBounce = i575[5]
  i574.maxBounce = i575[6]
  return i574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointDrive' )
  var i577 = data
  i576.m_PositionSpring = i577[0]
  i576.m_PositionDamper = i577[1]
  i576.m_MaximumForce = i577[2]
  i576.m_UseAcceleration = i577[3]
  return i576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i579 = data
  i578.m_Spring = i579[0]
  i578.m_Damper = i579[1]
  return i578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i581 = data
  i580.m_Limit = i581[0]
  i580.m_Bounciness = i581[1]
  i580.m_ContactDistance = i581[2]
  return i580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i583 = data
  i582.m_ExtremumSlip = i583[0]
  i582.m_ExtremumValue = i583[1]
  i582.m_AsymptoteSlip = i583[2]
  i582.m_AsymptoteValue = i583[3]
  i582.m_Stiffness = i583[4]
  return i582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i585 = data
  i584.m_LowerAngle = i585[0]
  i584.m_UpperAngle = i585[1]
  return i584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i587 = data
  i586.m_MotorSpeed = i587[0]
  i586.m_MaximumMotorTorque = i587[1]
  return i586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i589 = data
  i588.m_DampingRatio = i589[0]
  i588.m_Frequency = i589[1]
  i588.m_Angle = i589[2]
  return i588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i591 = data
  i590.m_LowerTranslation = i591[0]
  i590.m_UpperTranslation = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i593 = data
  i592.name = i593[0]
  i592.width = i593[1]
  i592.height = i593[2]
  i592.mipmapCount = i593[3]
  i592.anisoLevel = i593[4]
  i592.filterMode = i593[5]
  i592.hdr = !!i593[6]
  i592.format = i593[7]
  i592.wrapMode = i593[8]
  i592.alphaIsTransparency = !!i593[9]
  i592.alphaSource = i593[10]
  i592.graphicsFormat = i593[11]
  i592.sRGBTexture = !!i593[12]
  i592.desiredColorSpace = i593[13]
  i592.wrapU = i593[14]
  i592.wrapV = i593[15]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i594 = root || new pc.UnityMaterial()
  var i595 = data
  i594.name = i595[0]
  request.r(i595[1], i595[2], 0, i594, 'shader')
  i594.renderQueue = i595[3]
  i594.enableInstancing = !!i595[4]
  var i597 = i595[5]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i597[i + 0]) );
  }
  i594.floatParameters = i596
  var i599 = i595[6]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i599[i + 0]) );
  }
  i594.colorParameters = i598
  var i601 = i595[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i601[i + 0]) );
  }
  i594.vectorParameters = i600
  var i603 = i595[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i603[i + 0]) );
  }
  i594.textureParameters = i602
  var i605 = i595[9]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i605[i + 0]) );
  }
  i594.materialFlags = i604
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i613 = data
  i612.name = i613[0]
  i612.value = new pc.Color(i613[1], i613[2], i613[3], i613[4])
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = new pc.Vec4( i617[1], i617[2], i617[3], i617[4] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i621 = data
  i620.name = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'value')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i625 = data
  i624.name = i625[0]
  i624.enabled = !!i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i627 = data
  i626.name = i627[0]
  i626.index = i627[1]
  i626.startup = !!i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i629 = data
  i628.aspect = i629[0]
  i628.orthographic = !!i629[1]
  i628.orthographicSize = i629[2]
  i628.backgroundColor = new pc.Color(i629[3], i629[4], i629[5], i629[6])
  i628.nearClipPlane = i629[7]
  i628.farClipPlane = i629[8]
  i628.fieldOfView = i629[9]
  i628.depth = i629[10]
  i628.clearFlags = i629[11]
  i628.cullingMask = i629[12]
  i628.rect = i629[13]
  request.r(i629[14], i629[15], 0, i628, 'targetTexture')
  i628.usePhysicalProperties = !!i629[16]
  i628.focalLength = i629[17]
  i628.sensorSize = new pc.Vec2( i629[18], i629[19] )
  i628.lensShift = new pc.Vec2( i629[20], i629[21] )
  i628.gateFit = i629[22]
  i628.commandBufferCount = i629[23]
  i628.cameraType = i629[24]
  i628.enabled = !!i629[25]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i631 = data
  i630.name = i631[0]
  i630.tagId = i631[1]
  i630.enabled = !!i631[2]
  i630.isStatic = !!i631[3]
  i630.layer = i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i633 = data
  i632.pivot = new pc.Vec2( i633[0], i633[1] )
  i632.anchorMin = new pc.Vec2( i633[2], i633[3] )
  i632.anchorMax = new pc.Vec2( i633[4], i633[5] )
  i632.sizeDelta = new pc.Vec2( i633[6], i633[7] )
  i632.anchoredPosition3D = new pc.Vec3( i633[8], i633[9], i633[10] )
  i632.rotation = new pc.Quat(i633[11], i633[12], i633[13], i633[14])
  i632.scale = new pc.Vec3( i633[15], i633[16], i633[17] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i635 = data
  i634.planeDistance = i635[0]
  i634.referencePixelsPerUnit = i635[1]
  i634.isFallbackOverlay = !!i635[2]
  i634.renderMode = i635[3]
  i634.renderOrder = i635[4]
  i634.sortingLayerName = i635[5]
  i634.sortingOrder = i635[6]
  i634.scaleFactor = i635[7]
  request.r(i635[8], i635[9], 0, i634, 'worldCamera')
  i634.overrideSorting = !!i635[10]
  i634.pixelPerfect = !!i635[11]
  i634.targetDisplay = i635[12]
  i634.overridePixelPerfect = !!i635[13]
  i634.enabled = !!i635[14]
  return i634
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i637 = data
  i636.m_UiScaleMode = i637[0]
  i636.m_ReferencePixelsPerUnit = i637[1]
  i636.m_ScaleFactor = i637[2]
  i636.m_ReferenceResolution = new pc.Vec2( i637[3], i637[4] )
  i636.m_ScreenMatchMode = i637[5]
  i636.m_MatchWidthOrHeight = i637[6]
  i636.m_PhysicalUnit = i637[7]
  i636.m_FallbackScreenDPI = i637[8]
  i636.m_DefaultSpriteDPI = i637[9]
  i636.m_DynamicPixelsPerUnit = i637[10]
  i636.m_PresetInfoIsWorld = !!i637[11]
  return i636
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i639 = data
  i638.m_IgnoreReversedGraphics = !!i639[0]
  i638.m_BlockingObjects = i639[1]
  i638.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i639[2] )
  return i638
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i640 = root || request.c( 'Playable.GameManager' )
  var i641 = data
  i640.EventCountdownEndGame = request.d('System.Action', i641[0], i640.EventCountdownEndGame)
  i640._totalEvent = i641[1]
  i640._maxEvent = i641[2]
  i640._endTime = i641[3]
  request.r(i641[4], i641[5], 0, i640, '_backgroundMusic')
  request.r(i641[6], i641[7], 0, i640, '_backgroundTexture')
  request.r(i641[8], i641[9], 0, i640, '_logoTexture')
  var i643 = i641[10]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640._logoGame = i642
  var i645 = i641[11]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i640._logoImages = i644
  request.r(i641[12], i641[13], 0, i640, '_btnBlock')
  request.r(i641[14], i641[15], 0, i640, '_background')
  request.r(i641[16], i641[17], 0, i640, '_losePanel')
  request.r(i641[18], i641[19], 0, i640, '_progressFillImage')
  request.r(i641[20], i641[21], 0, i640, '_progressText')
  i640._progressTweenDuration = i641[22]
  request.r(i641[23], i641[24], 0, i640, '_timerFillImage')
  request.r(i641[25], i641[26], 0, i640, '_timerText')
  i640._timerPunchScale = i641[27]
  return i640
}

Deserializers["System.Action"] = function (request, data, root) {
  var i646 = root || request.c( 'System.Action' )
  var i647 = data
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i653 = data
  i652.cullTransparentMesh = !!i653[0]
  return i652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.Image' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Sprite')
  i654.m_Type = i655[2]
  i654.m_PreserveAspect = !!i655[3]
  i654.m_FillCenter = !!i655[4]
  i654.m_FillMethod = i655[5]
  i654.m_FillAmount = i655[6]
  i654.m_FillClockwise = !!i655[7]
  i654.m_FillOrigin = i655[8]
  i654.m_UseSpriteMesh = !!i655[9]
  i654.m_PixelsPerUnitMultiplier = i655[10]
  request.r(i655[11], i655[12], 0, i654, 'm_Material')
  i654.m_Maskable = !!i655[13]
  i654.m_Color = new pc.Color(i655[14], i655[15], i655[16], i655[17])
  i654.m_RaycastTarget = !!i655[18]
  i654.m_RaycastPadding = new pc.Vec4( i655[19], i655[20], i655[21], i655[22] )
  return i654
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Texture')
  i656.m_UVRect = UnityEngine.Rect.MinMaxRect(i657[2], i657[3], i657[4], i657[5])
  request.r(i657[6], i657[7], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[8]
  i656.m_Color = new pc.Color(i657[9], i657[10], i657[11], i657[12])
  i656.m_RaycastTarget = !!i657[13]
  i656.m_RaycastPadding = new pc.Vec4( i657[14], i657[15], i657[16], i657[17] )
  return i656
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i658 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i659 = data
  i658.m_hasFontAssetChanged = !!i659[0]
  request.r(i659[1], i659[2], 0, i658, 'm_baseMaterial')
  i658.m_maskOffset = new pc.Vec4( i659[3], i659[4], i659[5], i659[6] )
  i658.m_text = i659[7]
  i658.m_isRightToLeft = !!i659[8]
  request.r(i659[9], i659[10], 0, i658, 'm_fontAsset')
  request.r(i659[11], i659[12], 0, i658, 'm_sharedMaterial')
  var i661 = i659[13]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.m_fontSharedMaterials = i660
  request.r(i659[14], i659[15], 0, i658, 'm_fontMaterial')
  var i663 = i659[16]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i658.m_fontMaterials = i662
  i658.m_fontColor32 = UnityEngine.Color32.ConstructColor(i659[17], i659[18], i659[19], i659[20])
  i658.m_fontColor = new pc.Color(i659[21], i659[22], i659[23], i659[24])
  i658.m_enableVertexGradient = !!i659[25]
  i658.m_colorMode = i659[26]
  i658.m_fontColorGradient = request.d('TMPro.VertexGradient', i659[27], i658.m_fontColorGradient)
  request.r(i659[28], i659[29], 0, i658, 'm_fontColorGradientPreset')
  request.r(i659[30], i659[31], 0, i658, 'm_spriteAsset')
  i658.m_tintAllSprites = !!i659[32]
  request.r(i659[33], i659[34], 0, i658, 'm_StyleSheet')
  i658.m_TextStyleHashCode = i659[35]
  i658.m_overrideHtmlColors = !!i659[36]
  i658.m_faceColor = UnityEngine.Color32.ConstructColor(i659[37], i659[38], i659[39], i659[40])
  i658.m_fontSize = i659[41]
  i658.m_fontSizeBase = i659[42]
  i658.m_fontWeight = i659[43]
  i658.m_enableAutoSizing = !!i659[44]
  i658.m_fontSizeMin = i659[45]
  i658.m_fontSizeMax = i659[46]
  i658.m_fontStyle = i659[47]
  i658.m_HorizontalAlignment = i659[48]
  i658.m_VerticalAlignment = i659[49]
  i658.m_textAlignment = i659[50]
  i658.m_characterSpacing = i659[51]
  i658.m_characterHorizontalScale = i659[52]
  i658.m_wordSpacing = i659[53]
  i658.m_lineSpacing = i659[54]
  i658.m_lineSpacingMax = i659[55]
  i658.m_paragraphSpacing = i659[56]
  i658.m_charWidthMaxAdj = i659[57]
  i658.m_TextWrappingMode = i659[58]
  i658.m_wordWrappingRatios = i659[59]
  i658.m_overflowMode = i659[60]
  request.r(i659[61], i659[62], 0, i658, 'm_linkedTextComponent')
  request.r(i659[63], i659[64], 0, i658, 'parentLinkedComponent')
  i658.m_enableKerning = !!i659[65]
  var i665 = i659[66]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(i665[i + 0]);
  }
  i658.m_ActiveFontFeatures = i664
  i658.m_enableExtraPadding = !!i659[67]
  i658.checkPaddingRequired = !!i659[68]
  i658.m_isRichText = !!i659[69]
  i658.m_parseCtrlCharacters = !!i659[70]
  i658.m_isOrthographic = !!i659[71]
  i658.m_isCullingEnabled = !!i659[72]
  i658.m_horizontalMapping = i659[73]
  i658.m_verticalMapping = i659[74]
  i658.m_uvLineOffset = i659[75]
  i658.m_geometrySortingOrder = i659[76]
  i658.m_IsTextObjectScaleStatic = !!i659[77]
  i658.m_VertexBufferAutoSizeReduction = !!i659[78]
  i658.m_useMaxVisibleDescender = !!i659[79]
  i658.m_pageToDisplay = i659[80]
  i658.m_margin = new pc.Vec4( i659[81], i659[82], i659[83], i659[84] )
  i658.m_isUsingLegacyAnimationComponent = !!i659[85]
  i658.m_isVolumetricText = !!i659[86]
  request.r(i659[87], i659[88], 0, i658, 'm_Material')
  i658.m_EmojiFallbackSupport = !!i659[89]
  i658.m_Maskable = !!i659[90]
  i658.m_Color = new pc.Color(i659[91], i659[92], i659[93], i659[94])
  i658.m_RaycastTarget = !!i659[95]
  i658.m_RaycastPadding = new pc.Vec4( i659[96], i659[97], i659[98], i659[99] )
  return i658
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i668 = root || request.c( 'TMPro.VertexGradient' )
  var i669 = data
  i668.topLeft = new pc.Color(i669[0], i669[1], i669[2], i669[3])
  i668.topRight = new pc.Color(i669[4], i669[5], i669[6], i669[7])
  i668.bottomLeft = new pc.Color(i669[8], i669[9], i669[10], i669[11])
  i668.bottomRight = new pc.Color(i669[12], i669[13], i669[14], i669[15])
  return i668
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Button' )
  var i673 = data
  i672.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i673[0], i672.m_OnClick)
  i672.m_Navigation = request.d('UnityEngine.UI.Navigation', i673[1], i672.m_Navigation)
  i672.m_Transition = i673[2]
  i672.m_Colors = request.d('UnityEngine.UI.ColorBlock', i673[3], i672.m_Colors)
  i672.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i673[4], i672.m_SpriteState)
  i672.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i673[5], i672.m_AnimationTriggers)
  i672.m_Interactable = !!i673[6]
  request.r(i673[7], i673[8], 0, i672, 'm_TargetGraphic')
  return i672
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i675 = data
  i674.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i675[0], i674.m_PersistentCalls)
  return i674
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('UnityEngine.Events.PersistentCall', i679[i + 0]));
  }
  i676.m_Calls = i678
  return i676
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_Target')
  i682.m_TargetAssemblyTypeName = i683[2]
  i682.m_MethodName = i683[3]
  i682.m_Mode = i683[4]
  i682.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i683[5], i682.m_Arguments)
  i682.m_CallState = i683[6]
  return i682
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_ObjectArgument')
  i684.m_ObjectArgumentAssemblyTypeName = i685[2]
  i684.m_IntArgument = i685[3]
  i684.m_FloatArgument = i685[4]
  i684.m_StringArgument = i685[5]
  i684.m_BoolArgument = !!i685[6]
  return i684
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i687 = data
  i686.m_Mode = i687[0]
  i686.m_WrapAround = !!i687[1]
  request.r(i687[2], i687[3], 0, i686, 'm_SelectOnUp')
  request.r(i687[4], i687[5], 0, i686, 'm_SelectOnDown')
  request.r(i687[6], i687[7], 0, i686, 'm_SelectOnLeft')
  request.r(i687[8], i687[9], 0, i686, 'm_SelectOnRight')
  return i686
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i689 = data
  i688.m_NormalColor = new pc.Color(i689[0], i689[1], i689[2], i689[3])
  i688.m_HighlightedColor = new pc.Color(i689[4], i689[5], i689[6], i689[7])
  i688.m_PressedColor = new pc.Color(i689[8], i689[9], i689[10], i689[11])
  i688.m_SelectedColor = new pc.Color(i689[12], i689[13], i689[14], i689[15])
  i688.m_DisabledColor = new pc.Color(i689[16], i689[17], i689[18], i689[19])
  i688.m_ColorMultiplier = i689[20]
  i688.m_FadeDuration = i689[21]
  return i688
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_HighlightedSprite')
  request.r(i691[2], i691[3], 0, i690, 'm_PressedSprite')
  request.r(i691[4], i691[5], 0, i690, 'm_SelectedSprite')
  request.r(i691[6], i691[7], 0, i690, 'm_DisabledSprite')
  return i690
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i693 = data
  i692.m_NormalTrigger = i693[0]
  i692.m_HighlightedTrigger = i693[1]
  i692.m_PressedTrigger = i693[2]
  i692.m_SelectedTrigger = i693[3]
  i692.m_DisabledTrigger = i693[4]
  return i692
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Mask' )
  var i695 = data
  i694.m_ShowMaskGraphic = !!i695[0]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'clip')
  request.r(i697[2], i697[3], 0, i696, 'outputAudioMixerGroup')
  i696.playOnAwake = !!i697[4]
  i696.loop = !!i697[5]
  i696.time = i697[6]
  i696.volume = i697[7]
  i696.pitch = i697[8]
  i696.enabled = !!i697[9]
  return i696
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i699 = data
  i698.m_Padding = new pc.Vec4( i699[0], i699[1], i699[2], i699[3] )
  i698.m_Softness = new pc.Vec2( i699[4], i699[5] )
  return i698
}

Deserializers["GameController"] = function (request, data, root) {
  var i700 = root || request.c( 'GameController' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_tutorialHand')
  request.r(i701[2], i701[3], 0, i700, '_tutorialInPlace')
  request.r(i701[4], i701[5], 0, i700, '_tutorialFrom')
  request.r(i701[6], i701[7], 0, i700, '_tutorialTo')
  i700._tutorialScaleDuration = i701[8]
  i700._tutorialMoveDuration = i701[9]
  i700._tutorialStartDelay = i701[10]
  return i700
}

Deserializers["Playable.WinLoseController"] = function (request, data, root) {
  var i702 = root || request.c( 'Playable.WinLoseController' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_progressBar')
  i702._autoCheckFull = !!i703[2]
  i702._resetProgressOnStart = !!i703[3]
  request.r(i703[4], i703[5], 0, i702, '_winObject')
  request.r(i703[6], i703[7], 0, i702, '_winTitle')
  i702._winStartScale = i703[8]
  i702._winAnimDuration = i703[9]
  i702._winEase = i703[10]
  i702._showWinDelay = i703[11]
  request.r(i703[12], i703[13], 0, i702, '_loseObject')
  request.r(i703[14], i703[15], 0, i702, '_loseTitle')
  i702._loseStartScale = i703[16]
  i702._loseAnimDuration = i703[17]
  i702._loseEase = i703[18]
  i702._showLoseDelay = i703[19]
  return i702
}

Deserializers["Item"] = function (request, data, root) {
  var i704 = root || request.c( 'Item' )
  var i705 = data
  var i707 = i705[0]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('Item+ItemData', i707[i + 0]));
  }
  i704._data = i706
  i704._dragSortingOrder = i705[1]
  return i704
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i710 = root || request.c( 'Item+ItemData' )
  var i711 = data
  i710.id = i711[0]
  i710.stateChange = request.d('Item+GirlStateChange', i711[1], i710.stateChange)
  i710.animationStateTiming = i711[2]
  i710.result = i711[3]
  return i710
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i712 = root || request.c( 'Item+GirlStateChange' )
  var i713 = data
  i712.changeBodyShape = !!i713[0]
  i712.bodyShape = i713[1]
  i712.changeOutfit = !!i713[2]
  i712.outfit = i713[3]
  i712.changeRestraint = !!i713[4]
  i712.restraint = i713[5]
  return i712
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i714 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'skeletonDataAsset')
  request.r(i715[2], i715[3], 0, i714, 'additiveMaterial')
  request.r(i715[4], i715[5], 0, i714, 'multiplyMaterial')
  request.r(i715[6], i715[7], 0, i714, 'screenMaterial')
  i714.initialSkinName = i715[8]
  i714.initialFlipX = !!i715[9]
  i714.initialFlipY = !!i715[10]
  i714.startingAnimation = i715[11]
  i714.startingLoop = !!i715[12]
  i714.timeScale = i715[13]
  i714.freeze = !!i715[14]
  i714.layoutScaleMode = i715[15]
  i714.updateWhenInvisible = i715[16]
  i714.allowMultipleCanvasRenderers = !!i715[17]
  var i717 = i715[18]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714.canvasRenderers = i716
  i714.enableSeparatorSlots = !!i715[19]
  i714.updateSeparatorPartLocation = !!i715[20]
  i714.updateSeparatorPartScale = !!i715[21]
  i714.disableMeshAssignmentOnOverride = !!i715[22]
  i714.referenceSize = new pc.Vec2( i715[23], i715[24] )
  i714.referenceScale = i715[25]
  i714.rectTransformSize = new pc.Vec2( i715[26], i715[27] )
  i714.editReferenceRect = !!i715[28]
  var i719 = i715[29]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.separatorSlotNames = i718
  var i721 = i715[30]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 1, i720, '')
  }
  i714.separatorParts = i720
  i714.meshGenerator = request.d('Spine.Unity.MeshGenerator', i715[31], i714.meshGenerator)
  i714.updateTiming = i715[32]
  i714.unscaledTime = !!i715[33]
  request.r(i715[34], i715[35], 0, i714, 'm_Material')
  i714.m_Maskable = !!i715[36]
  i714.m_Color = new pc.Color(i715[37], i715[38], i715[39], i715[40])
  i714.m_RaycastTarget = !!i715[41]
  i714.m_RaycastPadding = new pc.Vec4( i715[42], i715[43], i715[44], i715[45] )
  return i714
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i728 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i729 = data
  i728.settings = request.d('Spine.Unity.MeshGenerator+Settings', i729[0], i728.settings)
  return i728
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i730 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i731 = data
  i730.useClipping = !!i731[0]
  i730.zSpacing = i731[1]
  i730.pmaVertexColors = !!i731[2]
  i730.tintBlack = !!i731[3]
  i730.canvasGroupTintBlack = !!i731[4]
  i730.calculateTangents = !!i731[5]
  i730.addNormals = !!i731[6]
  i730.immutableTriangles = !!i731[7]
  return i730
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i732 = root || request.c( 'Playable.Door' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_image')
  request.r(i733[2], i733[3], 0, i732, '_open')
  request.r(i733[4], i733[5], 0, i732, '_close')
  return i732
}

Deserializers["Girl"] = function (request, data, root) {
  var i734 = root || request.c( 'Girl' )
  var i735 = data
  i734._enableDebugLogs = !!i735[0]
  i734._status = request.d('GirlStatus', i735[1], i734._status)
  var i737 = i735[2]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('Girl+BodyShapeSkins', i737[i + 0]));
  }
  i734._bodyShapeSkins = i736
  var i739 = i735[3]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Girl+OutfitSkins', i739[i + 0]));
  }
  i734._outfitSkins = i738
  var i741 = i735[4]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Girl+RestraintSkins', i741[i + 0]));
  }
  i734._restraintSkins = i740
  request.r(i735[5], i735[6], 0, i734, '_skeletonGraphic')
  var i743 = i735[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i734._defaultSkins = i742
  i734._defaultAnimation = request.d('Target+GirlAnimation', i735[8], i734._defaultAnimation)
  var i745 = i735[9]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('Target+GirlAnimation', i745[i + 0]));
  }
  i734._removeGlassesAnimations = i744
  i734._endGameDelay = i735[10]
  i734._boy1 = request.d('Girl+BoyAnimationData', i735[11], i734._boy1)
  i734._boy2 = request.d('Girl+BoyAnimationData', i735[12], i734._boy2)
  return i734
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i746 = root || request.c( 'GirlStatus' )
  var i747 = data
  i746.bodyShape = i747[0]
  i746.outfit = i747[1]
  i746.restraint = i747[2]
  return i746
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i750 = root || request.c( 'Girl+BodyShapeSkins' )
  var i751 = data
  i750.bodyShape = i751[0]
  var i753 = i751[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.skins = i752
  return i750
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i756 = root || request.c( 'Girl+OutfitSkins' )
  var i757 = data
  i756.outfit = i757[0]
  var i759 = i757[1]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.skins = i758
  return i756
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i762 = root || request.c( 'Girl+RestraintSkins' )
  var i763 = data
  i762.restraint = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.skins = i764
  return i762
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i766 = root || request.c( 'Target+GirlAnimation' )
  var i767 = data
  i766.animationName = i767[0]
  i766.loop = !!i767[1]
  return i766
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i770 = root || request.c( 'Girl+BoyAnimationData' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'skeletonGraphic')
  i770.idleAnimation = i771[2]
  i770.winAnimation = i771[3]
  i770.loseAnimation = i771[4]
  return i770
}

Deserializers["Target"] = function (request, data, root) {
  var i772 = root || request.c( 'Target' )
  var i773 = data
  i772._part = i773[0]
  request.r(i773[1], i773[2], 0, i772, '_girl')
  request.r(i773[3], i773[4], 0, i772, '_skeletonGraphic')
  var i775 = i773[5]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Target+ItemReaction', i775[i + 0]));
  }
  i772._itemReactions = i774
  return i772
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i778 = root || request.c( 'Target+ItemReaction' )
  var i779 = data
  i778.itemId = i779[0]
  var i781 = i779[1]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('Target+AnimationRule', i781[i + 0]));
  }
  i778.animationRules = i780
  var i783 = i779[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i778.skinAdded = i782
  var i785 = i779[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i778.skinRemoved = i784
  request.r(i779[4], i779[5], 0, i778, 'audioClip')
  return i778
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i788 = root || request.c( 'Target+AnimationRule' )
  var i789 = data
  i788.checkBodyShape = !!i789[0]
  i788.bodyShape = i789[1]
  i788.checkOutfit = !!i789[2]
  i788.outfit = i789[3]
  i788.checkRestraint = !!i789[4]
  i788.restraint = i789[5]
  var i791 = i789[6]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Target+GirlAnimation', i791[i + 0]));
  }
  i788.animations = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i793 = data
  i792.m_Alpha = i793[0]
  i792.m_Interactable = !!i793[1]
  i792.m_BlocksRaycasts = !!i793[2]
  i792.m_IgnoreParentGroups = !!i793[3]
  i792.enabled = !!i793[4]
  return i792
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i795 = data
  i794.m_Spacing = i795[0]
  i794.m_ChildForceExpandWidth = !!i795[1]
  i794.m_ChildForceExpandHeight = !!i795[2]
  i794.m_ChildControlWidth = !!i795[3]
  i794.m_ChildControlHeight = !!i795[4]
  i794.m_ChildScaleWidth = !!i795[5]
  i794.m_ChildScaleHeight = !!i795[6]
  i794.m_ReverseArrangement = !!i795[7]
  i794.m_Padding = UnityEngine.RectOffset.FromPaddings(i795[8], i795[9], i795[10], i795[11])
  i794.m_ChildAlignment = i795[12]
  return i794
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Text' )
  var i797 = data
  i796.m_FontData = request.d('UnityEngine.UI.FontData', i797[0], i796.m_FontData)
  i796.m_Text = i797[1]
  request.r(i797[2], i797[3], 0, i796, 'm_Material')
  i796.m_Maskable = !!i797[4]
  i796.m_Color = new pc.Color(i797[5], i797[6], i797[7], i797[8])
  i796.m_RaycastTarget = !!i797[9]
  i796.m_RaycastPadding = new pc.Vec4( i797[10], i797[11], i797[12], i797[13] )
  return i796
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.FontData' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'm_Font')
  i798.m_FontSize = i799[2]
  i798.m_FontStyle = i799[3]
  i798.m_BestFit = !!i799[4]
  i798.m_MinSize = i799[5]
  i798.m_MaxSize = i799[6]
  i798.m_Alignment = i799[7]
  i798.m_AlignByGeometry = !!i799[8]
  i798.m_RichText = !!i799[9]
  i798.m_HorizontalOverflow = i799[10]
  i798.m_VerticalOverflow = i799[11]
  i798.m_LineSpacing = i799[12]
  return i798
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i800 = root || request.c( 'Playable.AudioManager' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('Playable.SoundData', i803[i + 0]));
  }
  i800._sounds = i802
  request.r(i801[1], i801[2], 0, i800, '_audioMusic')
  request.r(i801[3], i801[4], 0, i800, '_audioSound')
  return i800
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i806 = root || request.c( 'Playable.SoundData' )
  var i807 = data
  i806.Type = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'Clip')
  return i806
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_FirstSelected')
  i808.m_sendNavigationEvents = !!i809[2]
  i808.m_DragThreshold = i809[3]
  return i808
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i811 = data
  i810.m_HorizontalAxis = i811[0]
  i810.m_VerticalAxis = i811[1]
  i810.m_SubmitButton = i811[2]
  i810.m_CancelButton = i811[3]
  i810.m_InputActionsPerSecond = i811[4]
  i810.m_RepeatDelay = i811[5]
  i810.m_ForceModuleActive = !!i811[6]
  i810.m_SendPointerHoverToParent = !!i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i813 = data
  i812.ambientIntensity = i813[0]
  i812.reflectionIntensity = i813[1]
  i812.ambientMode = i813[2]
  i812.ambientLight = new pc.Color(i813[3], i813[4], i813[5], i813[6])
  i812.ambientSkyColor = new pc.Color(i813[7], i813[8], i813[9], i813[10])
  i812.ambientGroundColor = new pc.Color(i813[11], i813[12], i813[13], i813[14])
  i812.ambientEquatorColor = new pc.Color(i813[15], i813[16], i813[17], i813[18])
  i812.fogColor = new pc.Color(i813[19], i813[20], i813[21], i813[22])
  i812.fogEndDistance = i813[23]
  i812.fogStartDistance = i813[24]
  i812.fogDensity = i813[25]
  i812.fog = !!i813[26]
  request.r(i813[27], i813[28], 0, i812, 'skybox')
  i812.fogMode = i813[29]
  var i815 = i813[30]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i815[i + 0]) );
  }
  i812.lightmaps = i814
  i812.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i813[31], i812.lightProbes)
  i812.lightmapsMode = i813[32]
  i812.mixedBakeMode = i813[33]
  i812.environmentLightingMode = i813[34]
  i812.ambientProbe = new pc.SphericalHarmonicsL2(i813[35])
  request.r(i813[36], i813[37], 0, i812, 'customReflection')
  request.r(i813[38], i813[39], 0, i812, 'defaultReflection')
  i812.defaultReflectionMode = i813[40]
  i812.defaultReflectionResolution = i813[41]
  i812.sunLightObjectId = i813[42]
  i812.pixelLightCount = i813[43]
  i812.defaultReflectionHDR = !!i813[44]
  i812.hasLightDataAsset = !!i813[45]
  i812.hasManualGenerate = !!i813[46]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'lightmapColor')
  request.r(i819[2], i819[3], 0, i818, 'lightmapDirection')
  request.r(i819[4], i819[5], 0, i818, 'shadowMask')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i820 = root || new UnityEngine.LightProbes()
  var i821 = data
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i831[i + 0]));
  }
  i828.ShaderCompilationErrors = i830
  i828.name = i829[1]
  i828.guid = i829[2]
  var i833 = i829[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.shaderDefinedKeywords = i832
  var i835 = i829[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i835[i + 0]) );
  }
  i828.passes = i834
  var i837 = i829[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i837[i + 0]) );
  }
  i828.usePasses = i836
  var i839 = i829[6]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i839[i + 0]) );
  }
  i828.defaultParameterValues = i838
  request.r(i829[7], i829[8], 0, i828, 'unityFallbackShader')
  i828.readDepth = !!i829[9]
  i828.hasDepthOnlyPass = !!i829[10]
  i828.isCreatedByShaderGraph = !!i829[11]
  i828.disableBatching = !!i829[12]
  i828.compiled = !!i829[13]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i843 = data
  i842.shaderName = i843[0]
  i842.errorMessage = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i846 = root || new pc.UnityShaderPass()
  var i847 = data
  i846.id = i847[0]
  i846.subShaderIndex = i847[1]
  i846.name = i847[2]
  i846.passType = i847[3]
  i846.grabPassTextureName = i847[4]
  i846.usePass = !!i847[5]
  i846.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[6], i846.zTest)
  i846.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[7], i846.zWrite)
  i846.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[8], i846.culling)
  i846.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i847[9], i846.blending)
  i846.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i847[10], i846.alphaBlending)
  i846.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[11], i846.colorWriteMask)
  i846.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[12], i846.offsetUnits)
  i846.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[13], i846.offsetFactor)
  i846.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[14], i846.stencilRef)
  i846.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[15], i846.stencilReadMask)
  i846.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[16], i846.stencilWriteMask)
  i846.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i847[17], i846.stencilOp)
  i846.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i847[18], i846.stencilOpFront)
  i846.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i847[19], i846.stencilOpBack)
  var i849 = i847[20]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i849[i + 0]) );
  }
  i846.tags = i848
  var i851 = i847[21]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i846.passDefinedKeywords = i850
  var i853 = i847[22]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i853[i + 0]) );
  }
  i846.passDefinedKeywordGroups = i852
  var i855 = i847[23]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i855[i + 0]) );
  }
  i846.variants = i854
  var i857 = i847[24]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i857[i + 0]) );
  }
  i846.excludedVariants = i856
  i846.hasDepthReader = !!i847[25]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i859 = data
  i858.val = i859[0]
  i858.name = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i861 = data
  i860.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[0], i860.src)
  i860.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[1], i860.dst)
  i860.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[2], i860.op)
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i863 = data
  i862.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[0], i862.pass)
  i862.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[1], i862.fail)
  i862.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[2], i862.zFail)
  i862.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[3], i862.comp)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i867 = data
  i866.name = i867[0]
  i866.value = i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i870.keywords = i872
  i870.hasDiscard = !!i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i877 = data
  i876.passId = i877[0]
  i876.subShaderIndex = i877[1]
  var i879 = i877[2]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i876.keywords = i878
  i876.vertexProgram = i877[3]
  i876.fragmentProgram = i877[4]
  i876.exportedForWebGl2 = !!i877[5]
  i876.readDepth = !!i877[6]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'shader')
  i882.pass = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i887 = data
  i886.name = i887[0]
  i886.type = i887[1]
  i886.value = new pc.Vec4( i887[2], i887[3], i887[4], i887[5] )
  i886.textureValue = i887[6]
  i886.shaderPropertyFlag = i887[7]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i889 = data
  i888.name = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'texture')
  i888.aabb = i889[3]
  i888.vertices = i889[4]
  i888.triangles = i889[5]
  i888.textureRect = UnityEngine.Rect.MinMaxRect(i889[6], i889[7], i889[8], i889[9])
  i888.packedRect = UnityEngine.Rect.MinMaxRect(i889[10], i889[11], i889[12], i889[13])
  i888.border = new pc.Vec4( i889[14], i889[15], i889[16], i889[17] )
  i888.transparency = i889[18]
  i888.bounds = i889[19]
  i888.pixelsPerUnit = i889[20]
  i888.textureWidth = i889[21]
  i888.textureHeight = i889[22]
  i888.nativeSize = new pc.Vec2( i889[23], i889[24] )
  i888.pivot = new pc.Vec2( i889[25], i889[26] )
  i888.textureRectOffset = new pc.Vec2( i889[27], i889[28] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i891 = data
  i890.name = i891[0]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i893 = data
  i892.name = i893[0]
  i892.ascent = i893[1]
  i892.originalLineHeight = i893[2]
  i892.fontSize = i893[3]
  var i895 = i893[4]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i895[i + 0]) );
  }
  i892.characterInfo = i894
  request.r(i893[5], i893[6], 0, i892, 'texture')
  i892.originalFontSize = i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i899 = data
  i898.index = i899[0]
  i898.advance = i899[1]
  i898.bearing = i899[2]
  i898.glyphWidth = i899[3]
  i898.glyphHeight = i899[4]
  i898.minX = i899[5]
  i898.maxX = i899[6]
  i898.minY = i899[7]
  i898.maxY = i899[8]
  i898.uvBottomLeftX = i899[9]
  i898.uvBottomLeftY = i899[10]
  i898.uvBottomRightX = i899[11]
  i898.uvBottomRightY = i899[12]
  i898.uvTopLeftX = i899[13]
  i898.uvTopLeftY = i899[14]
  i898.uvTopRightX = i899[15]
  i898.uvTopRightY = i899[16]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i901 = data
  i900.name = i901[0]
  i900.bytes64 = i901[1]
  i900.data = i901[2]
  return i900
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i903 = data
  i902.normalStyle = i903[0]
  i902.normalSpacingOffset = i903[1]
  i902.boldStyle = i903[2]
  i902.boldSpacing = i903[3]
  i902.italicStyle = i903[4]
  i902.tabSize = i903[5]
  request.r(i903[6], i903[7], 0, i902, 'atlas')
  i902.m_SourceFontFileGUID = i903[8]
  i902.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i903[9], i902.m_CreationSettings)
  request.r(i903[10], i903[11], 0, i902, 'm_SourceFontFile')
  i902.m_SourceFontFilePath = i903[12]
  i902.m_AtlasPopulationMode = i903[13]
  i902.InternalDynamicOS = !!i903[14]
  var i905 = i903[15]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.TextCore.Glyph', i905[i + 0]));
  }
  i902.m_GlyphTable = i904
  var i907 = i903[16]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_Character', i907[i + 0]));
  }
  i902.m_CharacterTable = i906
  var i909 = i903[17]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i902.m_AtlasTextures = i908
  i902.m_AtlasTextureIndex = i903[18]
  i902.m_IsMultiAtlasTexturesEnabled = !!i903[19]
  i902.m_GetFontFeatures = !!i903[20]
  i902.m_ClearDynamicDataOnBuild = !!i903[21]
  i902.m_AtlasWidth = i903[22]
  i902.m_AtlasHeight = i903[23]
  i902.m_AtlasPadding = i903[24]
  i902.m_AtlasRenderMode = i903[25]
  var i911 = i903[26]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('UnityEngine.TextCore.GlyphRect', i911[i + 0]));
  }
  i902.m_UsedGlyphRects = i910
  var i913 = i903[27]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('UnityEngine.TextCore.GlyphRect', i913[i + 0]));
  }
  i902.m_FreeGlyphRects = i912
  i902.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i903[28], i902.m_FontFeatureTable)
  i902.m_ShouldReimportFontFeatures = !!i903[29]
  var i915 = i903[30]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i902.m_FallbackFontAssetTable = i914
  var i917 = i903[31]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('TMPro.TMP_FontWeightPair', i917[i + 0]) );
  }
  i902.m_FontWeightTable = i916
  var i919 = i903[32]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('TMPro.TMP_FontWeightPair', i919[i + 0]) );
  }
  i902.fontWeights = i918
  i902.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i903[33], i902.m_fontInfo)
  var i921 = i903[34]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('TMPro.TMP_Glyph', i921[i + 0]));
  }
  i902.m_glyphInfoList = i920
  i902.m_KerningTable = request.d('TMPro.KerningTable', i903[35], i902.m_KerningTable)
  var i923 = i903[36]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i902.fallbackFontAssets = i922
  i902.m_Version = i903[37]
  i902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i903[38], i902.m_FaceInfo)
  request.r(i903[39], i903[40], 0, i902, 'm_Material')
  return i902
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i925 = data
  i924.sourceFontFileName = i925[0]
  i924.sourceFontFileGUID = i925[1]
  i924.faceIndex = i925[2]
  i924.pointSizeSamplingMode = i925[3]
  i924.pointSize = i925[4]
  i924.padding = i925[5]
  i924.paddingMode = i925[6]
  i924.packingMode = i925[7]
  i924.atlasWidth = i925[8]
  i924.atlasHeight = i925[9]
  i924.characterSetSelectionMode = i925[10]
  i924.characterSequence = i925[11]
  i924.referencedFontAssetGUID = i925[12]
  i924.referencedTextAssetGUID = i925[13]
  i924.fontStyle = i925[14]
  i924.fontStyleModifier = i925[15]
  i924.renderMode = i925[16]
  i924.includeFontFeatures = !!i925[17]
  return i924
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i929 = data
  i928.m_Index = i929[0]
  i928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i929[1], i928.m_Metrics)
  i928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i929[2], i928.m_GlyphRect)
  i928.m_Scale = i929[3]
  i928.m_AtlasIndex = i929[4]
  i928.m_ClassDefinitionType = i929[5]
  return i928
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i931 = data
  i930.m_Width = i931[0]
  i930.m_Height = i931[1]
  i930.m_HorizontalBearingX = i931[2]
  i930.m_HorizontalBearingY = i931[3]
  i930.m_HorizontalAdvance = i931[4]
  return i930
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i933 = data
  i932.m_X = i933[0]
  i932.m_Y = i933[1]
  i932.m_Width = i933[2]
  i932.m_Height = i933[3]
  return i932
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_Character' )
  var i937 = data
  i936.m_ElementType = i937[0]
  i936.m_Unicode = i937[1]
  i936.m_GlyphIndex = i937[2]
  i936.m_Scale = i937[3]
  return i936
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.MultipleSubstitutionRecord', i945[i + 0]));
  }
  i942.m_MultipleSubstitutionRecords = i944
  var i947 = i943[1]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.LigatureSubstitutionRecord', i947[i + 0]));
  }
  i942.m_LigatureSubstitutionRecords = i946
  var i949 = i943[2]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i949[i + 0]));
  }
  i942.m_GlyphPairAdjustmentRecords = i948
  var i951 = i943[3]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i951[i + 0]));
  }
  i942.m_MarkToBaseAdjustmentRecords = i950
  var i953 = i943[4]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i953[i + 0]));
  }
  i942.m_MarkToMarkAdjustmentRecords = i952
  return i942
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i957 = data
  i956.m_TargetGlyphID = i957[0]
  i956.m_SubstituteGlyphIDs = i957[1]
  return i956
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i961 = data
  i960.m_ComponentGlyphIDs = i961[0]
  i960.m_LigatureGlyphID = i961[1]
  return i960
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i965 = data
  i964.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i965[0], i964.m_FirstAdjustmentRecord)
  i964.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i965[1], i964.m_SecondAdjustmentRecord)
  i964.m_FeatureLookupFlags = i965[2]
  return i964
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i969 = data
  i968.m_BaseGlyphID = i969[0]
  i968.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i969[1], i968.m_BaseGlyphAnchorPoint)
  i968.m_MarkGlyphID = i969[2]
  i968.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i969[3], i968.m_MarkPositionAdjustment)
  return i968
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i973 = data
  i972.m_BaseMarkGlyphID = i973[0]
  i972.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i973[1], i972.m_BaseMarkGlyphAnchorPoint)
  i972.m_CombiningMarkGlyphID = i973[2]
  i972.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i973[3], i972.m_CombiningMarkPositionAdjustment)
  return i972
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'regularTypeface')
  request.r(i979[2], i979[3], 0, i978, 'italicTypeface')
  return i978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i981 = data
  i980.Name = i981[0]
  i980.PointSize = i981[1]
  i980.Scale = i981[2]
  i980.CharacterCount = i981[3]
  i980.LineHeight = i981[4]
  i980.Baseline = i981[5]
  i980.Ascender = i981[6]
  i980.CapHeight = i981[7]
  i980.Descender = i981[8]
  i980.CenterLine = i981[9]
  i980.SuperscriptOffset = i981[10]
  i980.SubscriptOffset = i981[11]
  i980.SubSize = i981[12]
  i980.Underline = i981[13]
  i980.UnderlineThickness = i981[14]
  i980.strikethrough = i981[15]
  i980.strikethroughThickness = i981[16]
  i980.TabWidth = i981[17]
  i980.Padding = i981[18]
  i980.AtlasWidth = i981[19]
  i980.AtlasHeight = i981[20]
  return i980
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_Glyph' )
  var i985 = data
  i984.id = i985[0]
  i984.x = i985[1]
  i984.y = i985[2]
  i984.width = i985[3]
  i984.height = i985[4]
  i984.xOffset = i985[5]
  i984.yOffset = i985[6]
  i984.xAdvance = i985[7]
  i984.scale = i985[8]
  return i984
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.KerningTable' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.KerningPair', i989[i + 0]));
  }
  i986.kerningPairs = i988
  return i986
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.KerningPair' )
  var i993 = data
  i992.xOffset = i993[0]
  i992.m_FirstGlyph = i993[1]
  i992.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i993[2], i992.m_FirstGlyphAdjustments)
  i992.m_SecondGlyph = i993[3]
  i992.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i993[4], i992.m_SecondGlyphAdjustments)
  i992.m_IgnoreSpacingAdjustments = !!i993[5]
  return i992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i995 = data
  i994.m_FaceIndex = i995[0]
  i994.m_FamilyName = i995[1]
  i994.m_StyleName = i995[2]
  i994.m_PointSize = i995[3]
  i994.m_Scale = i995[4]
  i994.m_UnitsPerEM = i995[5]
  i994.m_LineHeight = i995[6]
  i994.m_AscentLine = i995[7]
  i994.m_CapLine = i995[8]
  i994.m_MeanLine = i995[9]
  i994.m_Baseline = i995[10]
  i994.m_DescentLine = i995[11]
  i994.m_SuperscriptOffset = i995[12]
  i994.m_SuperscriptSize = i995[13]
  i994.m_SubscriptOffset = i995[14]
  i994.m_SubscriptSize = i995[15]
  i994.m_UnderlineOffset = i995[16]
  i994.m_UnderlineThickness = i995[17]
  i994.m_StrikethroughOffset = i995[18]
  i994.m_StrikethroughThickness = i995[19]
  i994.m_TabWidth = i995[20]
  return i994
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i996 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i996.atlasAssets = i998
  i996.scale = i997[1]
  request.r(i997[2], i997[3], 0, i996, 'skeletonJSON')
  i996.isUpgradingBlendModeMaterials = !!i997[4]
  i996.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i997[5], i996.blendModeMaterials)
  var i1001 = i997[6]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i996.skeletonDataModifiers = i1000
  var i1003 = i997[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i996.fromAnimation = i1002
  var i1005 = i997[8]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( i1005[i + 0] );
  }
  i996.toAnimation = i1004
  i996.duration = i997[9]
  i996.defaultMix = i997[10]
  request.r(i997[11], i997[12], 0, i996, 'controller')
  return i996
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1008 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1009 = data
  i1008.applyAdditiveMaterial = !!i1009[0]
  var i1011 = i1009[1]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1011[i + 0]));
  }
  i1008.additiveMaterials = i1010
  var i1013 = i1009[2]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1013[i + 0]));
  }
  i1008.multiplyMaterials = i1012
  var i1015 = i1009[3]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1015[i + 0]));
  }
  i1008.screenMaterials = i1014
  i1008.requiresBlendModeMaterials = !!i1009[4]
  return i1008
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1018 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1019 = data
  i1018.pageName = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'material')
  return i1018
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1022 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'atlasFile')
  var i1025 = i1023[2]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.materials = i1024
  i1022.textureLoadingMode = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'onDemandTextureLoader')
  return i1022
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1027 = data
  i1026.useSafeMode = !!i1027[0]
  i1026.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1027[1], i1026.safeModeOptions)
  i1026.timeScale = i1027[2]
  i1026.unscaledTimeScale = i1027[3]
  i1026.useSmoothDeltaTime = !!i1027[4]
  i1026.maxSmoothUnscaledTime = i1027[5]
  i1026.rewindCallbackMode = i1027[6]
  i1026.showUnityEditorReport = !!i1027[7]
  i1026.logBehaviour = i1027[8]
  i1026.drawGizmos = !!i1027[9]
  i1026.defaultRecyclable = !!i1027[10]
  i1026.defaultAutoPlay = i1027[11]
  i1026.defaultUpdateType = i1027[12]
  i1026.defaultTimeScaleIndependent = !!i1027[13]
  i1026.defaultEaseType = i1027[14]
  i1026.defaultEaseOvershootOrAmplitude = i1027[15]
  i1026.defaultEasePeriod = i1027[16]
  i1026.defaultAutoKill = !!i1027[17]
  i1026.defaultLoopType = i1027[18]
  i1026.debugMode = !!i1027[19]
  i1026.debugStoreTargetId = !!i1027[20]
  i1026.showPreviewPanel = !!i1027[21]
  i1026.storeSettingsLocation = i1027[22]
  i1026.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1027[23], i1026.modules)
  i1026.createASMDEF = !!i1027[24]
  i1026.showPlayingTweens = !!i1027[25]
  i1026.showPausedTweens = !!i1027[26]
  return i1026
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1028 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1029 = data
  i1028.logBehaviour = i1029[0]
  i1028.nestedTweenFailureBehaviour = i1029[1]
  return i1028
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1031 = data
  i1030.showPanel = !!i1031[0]
  i1030.audioEnabled = !!i1031[1]
  i1030.physicsEnabled = !!i1031[2]
  i1030.physics2DEnabled = !!i1031[3]
  i1030.spriteEnabled = !!i1031[4]
  i1030.uiEnabled = !!i1031[5]
  i1030.uiToolkitEnabled = !!i1031[6]
  i1030.textMeshProEnabled = !!i1031[7]
  i1030.tk2DEnabled = !!i1031[8]
  i1030.deAudioEnabled = !!i1031[9]
  i1030.deUnityExtendedEnabled = !!i1031[10]
  i1030.epoOutlineEnabled = !!i1031[11]
  return i1030
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Settings' )
  var i1033 = data
  i1032.assetVersion = i1033[0]
  i1032.m_TextWrappingMode = i1033[1]
  i1032.m_enableKerning = !!i1033[2]
  var i1035 = i1033[3]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(i1035[i + 0]);
  }
  i1032.m_ActiveFontFeatures = i1034
  i1032.m_enableExtraPadding = !!i1033[4]
  i1032.m_enableTintAllSprites = !!i1033[5]
  i1032.m_enableParseEscapeCharacters = !!i1033[6]
  i1032.m_EnableRaycastTarget = !!i1033[7]
  i1032.m_GetFontFeaturesAtRuntime = !!i1033[8]
  i1032.m_missingGlyphCharacter = i1033[9]
  i1032.m_ClearDynamicDataOnBuild = !!i1033[10]
  i1032.m_warningsDisabled = !!i1033[11]
  request.r(i1033[12], i1033[13], 0, i1032, 'm_defaultFontAsset')
  i1032.m_defaultFontAssetPath = i1033[14]
  i1032.m_defaultFontSize = i1033[15]
  i1032.m_defaultAutoSizeMinRatio = i1033[16]
  i1032.m_defaultAutoSizeMaxRatio = i1033[17]
  i1032.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1033[18], i1033[19] )
  i1032.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1033[20], i1033[21] )
  i1032.m_autoSizeTextContainer = !!i1033[22]
  i1032.m_IsTextObjectScaleStatic = !!i1033[23]
  var i1037 = i1033[24]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1032.m_fallbackFontAssets = i1036
  i1032.m_matchMaterialPreset = !!i1033[25]
  i1032.m_HideSubTextObjects = !!i1033[26]
  request.r(i1033[27], i1033[28], 0, i1032, 'm_defaultSpriteAsset')
  i1032.m_defaultSpriteAssetPath = i1033[29]
  i1032.m_enableEmojiSupport = !!i1033[30]
  i1032.m_MissingCharacterSpriteUnicode = i1033[31]
  var i1039 = i1033[32]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1032.m_EmojiFallbackTextAssets = i1038
  i1032.m_defaultColorGradientPresetsPath = i1033[33]
  request.r(i1033[34], i1033[35], 0, i1032, 'm_defaultStyleSheet')
  i1032.m_StyleSheetsResourcePath = i1033[36]
  request.r(i1033[37], i1033[38], 0, i1032, 'm_leadingCharacters')
  request.r(i1033[39], i1033[40], 0, i1032, 'm_followingCharacters')
  i1032.m_UseModernHangulLineBreakingRules = !!i1033[41]
  return i1032
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1043 = data
  i1042.m_GlyphIndex = i1043[0]
  i1042.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1043[1], i1042.m_GlyphValueRecord)
  return i1042
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1045 = data
  i1044.m_XPlacement = i1045[0]
  i1044.m_YPlacement = i1045[1]
  i1044.m_XAdvance = i1045[2]
  i1044.m_YAdvance = i1045[3]
  return i1044
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'spriteSheet')
  var i1049 = i1047[2]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_Sprite', i1049[i + 0]));
  }
  i1046.spriteInfoList = i1048
  var i1051 = i1047[3]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1046.fallbackSpriteAssets = i1050
  var i1053 = i1047[4]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_SpriteCharacter', i1053[i + 0]));
  }
  i1046.m_SpriteCharacterTable = i1052
  var i1055 = i1047[5]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.TMP_SpriteGlyph', i1055[i + 0]));
  }
  i1046.m_GlyphTable = i1054
  i1046.m_Version = i1047[6]
  i1046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1047[7], i1046.m_FaceInfo)
  request.r(i1047[8], i1047[9], 0, i1046, 'm_Material')
  return i1046
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.hashCode = i1059[1]
  i1058.unicode = i1059[2]
  i1058.pivot = new pc.Vec2( i1059[3], i1059[4] )
  request.r(i1059[5], i1059[6], 0, i1058, 'sprite')
  i1058.id = i1059[7]
  i1058.x = i1059[8]
  i1058.y = i1059[9]
  i1058.width = i1059[10]
  i1058.height = i1059[11]
  i1058.xOffset = i1059[12]
  i1058.yOffset = i1059[13]
  i1058.xAdvance = i1059[14]
  i1058.scale = i1059[15]
  return i1058
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1065 = data
  i1064.m_Name = i1065[0]
  i1064.m_ElementType = i1065[1]
  i1064.m_Unicode = i1065[2]
  i1064.m_GlyphIndex = i1065[3]
  i1064.m_Scale = i1065[4]
  return i1064
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'sprite')
  i1068.m_Index = i1069[2]
  i1068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1069[3], i1068.m_Metrics)
  i1068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1069[4], i1068.m_GlyphRect)
  i1068.m_Scale = i1069[5]
  i1068.m_AtlasIndex = i1069[6]
  i1068.m_ClassDefinitionType = i1069[7]
  return i1068
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_Style', i1073[i + 0]));
  }
  i1070.m_StyleList = i1072
  return i1070
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_Style' )
  var i1077 = data
  i1076.m_Name = i1077[0]
  i1076.m_HashCode = i1077[1]
  i1076.m_OpeningDefinition = i1077[2]
  i1076.m_ClosingDefinition = i1077[3]
  i1076.m_OpeningTagArray = i1077[4]
  i1076.m_ClosingTagArray = i1077[5]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1081[i + 0]) );
  }
  i1078.files = i1080
  i1078.componentToPrefabIds = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1085 = data
  i1084.path = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'unityObject')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1089[i + 0]) );
  }
  i1086.scriptsExecutionOrder = i1088
  var i1091 = i1087[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1091[i + 0]) );
  }
  i1086.sortingLayers = i1090
  var i1093 = i1087[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1093[i + 0]) );
  }
  i1086.cullingLayers = i1092
  i1086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1087[3], i1086.timeSettings)
  i1086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1087[4], i1086.physicsSettings)
  i1086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1087[5], i1086.physics2DSettings)
  i1086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1087[6], i1086.qualitySettings)
  i1086.enableRealtimeShadows = !!i1087[7]
  i1086.enableAutoInstancing = !!i1087[8]
  i1086.enableStaticBatching = !!i1087[9]
  i1086.enableDynamicBatching = !!i1087[10]
  i1086.usePreservativeDynamicBatching = !!i1087[11]
  i1086.lightmapEncodingQuality = i1087[12]
  i1086.desiredColorSpace = i1087[13]
  var i1095 = i1087[14]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1086.allTags = i1094
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  i1102.value = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1109 = data
  i1108.fixedDeltaTime = i1109[0]
  i1108.maximumDeltaTime = i1109[1]
  i1108.timeScale = i1109[2]
  i1108.maximumParticleTimestep = i1109[3]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1111 = data
  i1110.gravity = new pc.Vec3( i1111[0], i1111[1], i1111[2] )
  i1110.defaultSolverIterations = i1111[3]
  i1110.bounceThreshold = i1111[4]
  i1110.autoSyncTransforms = !!i1111[5]
  i1110.autoSimulation = !!i1111[6]
  var i1113 = i1111[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'material')
  i1118.gravity = new pc.Vec2( i1119[2], i1119[3] )
  i1118.positionIterations = i1119[4]
  i1118.velocityIterations = i1119[5]
  i1118.velocityThreshold = i1119[6]
  i1118.maxLinearCorrection = i1119[7]
  i1118.maxAngularCorrection = i1119[8]
  i1118.maxTranslationSpeed = i1119[9]
  i1118.maxRotationSpeed = i1119[10]
  i1118.baumgarteScale = i1119[11]
  i1118.baumgarteTOIScale = i1119[12]
  i1118.timeToSleep = i1119[13]
  i1118.linearSleepTolerance = i1119[14]
  i1118.angularSleepTolerance = i1119[15]
  i1118.defaultContactOffset = i1119[16]
  i1118.autoSimulation = !!i1119[17]
  i1118.queriesHitTriggers = !!i1119[18]
  i1118.queriesStartInColliders = !!i1119[19]
  i1118.callbacksOnDisable = !!i1119[20]
  i1118.reuseCollisionCallbacks = !!i1119[21]
  i1118.autoSyncTransforms = !!i1119[22]
  var i1121 = i1119[23]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1121[i + 0]) );
  }
  i1118.collisionMatrix = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.layerId = i1125[1]
  i1124.otherLayerId = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[i + 0]) );
  }
  i1126.qualityLevels = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.names = i1130
  i1126.shadows = i1127[2]
  i1126.anisotropicFiltering = i1127[3]
  i1126.antiAliasing = i1127[4]
  i1126.lodBias = i1127[5]
  i1126.shadowCascades = i1127[6]
  i1126.shadowDistance = i1127[7]
  i1126.shadowmaskMode = i1127[8]
  i1126.shadowProjection = i1127[9]
  i1126.shadowResolution = i1127[10]
  i1126.softParticles = !!i1127[11]
  i1126.softVegetation = !!i1127[12]
  i1126.activeColorSpace = i1127[13]
  i1126.desiredColorSpace = i1127[14]
  i1126.masterTextureLimit = i1127[15]
  i1126.maxQueuedFrames = i1127[16]
  i1126.particleRaycastBudget = i1127[17]
  i1126.pixelLightCount = i1127[18]
  i1126.realtimeReflectionProbes = !!i1127[19]
  i1126.shadowCascade2Split = i1127[20]
  i1126.shadowCascade4Split = new pc.Vec3( i1127[21], i1127[22], i1127[23] )
  i1126.streamingMipmapsActive = !!i1127[24]
  i1126.vSyncCount = i1127[25]
  i1126.asyncUploadBufferSize = i1127[26]
  i1126.asyncUploadTimeSlice = i1127[27]
  i1126.billboardsFaceCameraPosition = !!i1127[28]
  i1126.shadowNearPlaneOffset = i1127[29]
  i1126.streamingMipmapsMemoryBudget = i1127[30]
  i1126.maximumLODLevel = i1127[31]
  i1126.streamingMipmapsAddAllCameras = !!i1127[32]
  i1126.streamingMipmapsMaxLevelReduction = i1127[33]
  i1126.streamingMipmapsRenderersPerFrame = i1127[34]
  i1126.resolutionScalingFixedDPIFactor = i1127[35]
  i1126.streamingMipmapsMaxFileIORequests = i1127[36]
  i1126.currentQualityLevel = i1127[37]
  return i1126
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1135 = data
  i1134.m_XCoordinate = i1135[0]
  i1134.m_YCoordinate = i1135[1]
  return i1134
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1137 = data
  i1136.m_XPositionAdjustment = i1137[0]
  i1136.m_YPositionAdjustment = i1137[1]
  return i1136
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1139 = data
  i1138.xPlacement = i1139[0]
  i1138.yPlacement = i1139[1]
  i1138.xAdvance = i1139[2]
  i1138.yAdvance = i1139[3]
  return i1138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"5":[4],"26":[4],"82":[83],"84":[4],"85":[16,4],"86":[78],"27":[16,4],"87":[88,78],"89":[78,90],"91":[78],"92":[56],"93":[63],"94":[83],"95":[96],"97":[98],"99":[37],"100":[5],"101":[4],"102":[16,4],"103":[78],"104":[16,4],"105":[4],"106":[4],"107":[78,4],"15":[4,16],"108":[109],"110":[109],"111":[109],"112":[4],"113":[4],"8":[5],"12":[16,4],"114":[4],"7":[5],"115":[4],"116":[4],"33":[4],"117":[4],"118":[4],"119":[4],"120":[4],"21":[4],"121":[4],"17":[16,4],"23":[4],"122":[4],"123":[4],"124":[4],"34":[16,4],"125":[4],"126":[37],"127":[37],"38":[37],"128":[37],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Playable.WinLoseController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "09/21/2026 06:45:49";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.buildID = "a132e007-2b04-4cc4-b56e-c7951cb03cbb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

