var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointSpring' )
  var i557 = data
  i556.spring = i557[0]
  i556.damper = i557[1]
  i556.targetPosition = i557[2]
  return i556
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointMotor' )
  var i559 = data
  i558.m_TargetVelocity = i559[0]
  i558.m_Force = i559[1]
  i558.m_FreeSpin = i559[2]
  return i558
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointLimits' )
  var i561 = data
  i560.m_Min = i561[0]
  i560.m_Max = i561[1]
  i560.m_Bounciness = i561[2]
  i560.m_BounceMinVelocity = i561[3]
  i560.m_ContactDistance = i561[4]
  i560.minBounce = i561[5]
  i560.maxBounce = i561[6]
  return i560
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointDrive' )
  var i563 = data
  i562.m_PositionSpring = i563[0]
  i562.m_PositionDamper = i563[1]
  i562.m_MaximumForce = i563[2]
  i562.m_UseAcceleration = i563[3]
  return i562
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i565 = data
  i564.m_Spring = i565[0]
  i564.m_Damper = i565[1]
  return i564
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i567 = data
  i566.m_Limit = i567[0]
  i566.m_Bounciness = i567[1]
  i566.m_ContactDistance = i567[2]
  return i566
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i569 = data
  i568.m_ExtremumSlip = i569[0]
  i568.m_ExtremumValue = i569[1]
  i568.m_AsymptoteSlip = i569[2]
  i568.m_AsymptoteValue = i569[3]
  i568.m_Stiffness = i569[4]
  return i568
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i571 = data
  i570.m_LowerAngle = i571[0]
  i570.m_UpperAngle = i571[1]
  return i570
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i573 = data
  i572.m_MotorSpeed = i573[0]
  i572.m_MaximumMotorTorque = i573[1]
  return i572
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i575 = data
  i574.m_DampingRatio = i575[0]
  i574.m_Frequency = i575[1]
  i574.m_Angle = i575[2]
  return i574
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i577 = data
  i576.m_LowerTranslation = i577[0]
  i576.m_UpperTranslation = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i579 = data
  i578.name = i579[0]
  i578.width = i579[1]
  i578.height = i579[2]
  i578.mipmapCount = i579[3]
  i578.anisoLevel = i579[4]
  i578.filterMode = i579[5]
  i578.hdr = !!i579[6]
  i578.format = i579[7]
  i578.wrapMode = i579[8]
  i578.alphaIsTransparency = !!i579[9]
  i578.alphaSource = i579[10]
  i578.graphicsFormat = i579[11]
  i578.sRGBTexture = !!i579[12]
  i578.desiredColorSpace = i579[13]
  i578.wrapU = i579[14]
  i578.wrapV = i579[15]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i580 = root || new pc.UnityMaterial()
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'shader')
  i580.renderQueue = i581[3]
  i580.enableInstancing = !!i581[4]
  var i583 = i581[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i583[i + 0]) );
  }
  i580.floatParameters = i582
  var i585 = i581[6]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i585[i + 0]) );
  }
  i580.colorParameters = i584
  var i587 = i581[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i587[i + 0]) );
  }
  i580.vectorParameters = i586
  var i589 = i581[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i589[i + 0]) );
  }
  i580.textureParameters = i588
  var i591 = i581[9]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i591[i + 0]) );
  }
  i580.materialFlags = i590
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = new pc.Color(i599[1], i599[2], i599[3], i599[4])
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Vec4( i603[1], i603[2], i603[3], i603[4] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'value')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i611 = data
  i610.name = i611[0]
  i610.enabled = !!i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i613 = data
  i612.name = i613[0]
  i612.index = i613[1]
  i612.startup = !!i613[2]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i615 = data
  i614.aspect = i615[0]
  i614.orthographic = !!i615[1]
  i614.orthographicSize = i615[2]
  i614.backgroundColor = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.nearClipPlane = i615[7]
  i614.farClipPlane = i615[8]
  i614.fieldOfView = i615[9]
  i614.depth = i615[10]
  i614.clearFlags = i615[11]
  i614.cullingMask = i615[12]
  i614.rect = i615[13]
  request.r(i615[14], i615[15], 0, i614, 'targetTexture')
  i614.usePhysicalProperties = !!i615[16]
  i614.focalLength = i615[17]
  i614.sensorSize = new pc.Vec2( i615[18], i615[19] )
  i614.lensShift = new pc.Vec2( i615[20], i615[21] )
  i614.gateFit = i615[22]
  i614.commandBufferCount = i615[23]
  i614.cameraType = i615[24]
  i614.enabled = !!i615[25]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i617 = data
  i616.name = i617[0]
  i616.tagId = i617[1]
  i616.enabled = !!i617[2]
  i616.isStatic = !!i617[3]
  i616.layer = i617[4]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i619 = data
  i618.pivot = new pc.Vec2( i619[0], i619[1] )
  i618.anchorMin = new pc.Vec2( i619[2], i619[3] )
  i618.anchorMax = new pc.Vec2( i619[4], i619[5] )
  i618.sizeDelta = new pc.Vec2( i619[6], i619[7] )
  i618.anchoredPosition3D = new pc.Vec3( i619[8], i619[9], i619[10] )
  i618.rotation = new pc.Quat(i619[11], i619[12], i619[13], i619[14])
  i618.scale = new pc.Vec3( i619[15], i619[16], i619[17] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i621 = data
  i620.planeDistance = i621[0]
  i620.referencePixelsPerUnit = i621[1]
  i620.isFallbackOverlay = !!i621[2]
  i620.renderMode = i621[3]
  i620.renderOrder = i621[4]
  i620.sortingLayerName = i621[5]
  i620.sortingOrder = i621[6]
  i620.scaleFactor = i621[7]
  request.r(i621[8], i621[9], 0, i620, 'worldCamera')
  i620.overrideSorting = !!i621[10]
  i620.pixelPerfect = !!i621[11]
  i620.targetDisplay = i621[12]
  i620.overridePixelPerfect = !!i621[13]
  i620.enabled = !!i621[14]
  return i620
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i623 = data
  i622.m_UiScaleMode = i623[0]
  i622.m_ReferencePixelsPerUnit = i623[1]
  i622.m_ScaleFactor = i623[2]
  i622.m_ReferenceResolution = new pc.Vec2( i623[3], i623[4] )
  i622.m_ScreenMatchMode = i623[5]
  i622.m_MatchWidthOrHeight = i623[6]
  i622.m_PhysicalUnit = i623[7]
  i622.m_FallbackScreenDPI = i623[8]
  i622.m_DefaultSpriteDPI = i623[9]
  i622.m_DynamicPixelsPerUnit = i623[10]
  i622.m_PresetInfoIsWorld = !!i623[11]
  return i622
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i625 = data
  i624.m_IgnoreReversedGraphics = !!i625[0]
  i624.m_BlockingObjects = i625[1]
  i624.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i625[2] )
  return i624
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i626 = root || request.c( 'Playable.GameManager' )
  var i627 = data
  i626.EventCountdownEndGame = request.d('System.Action', i627[0], i626.EventCountdownEndGame)
  i626._totalEvent = i627[1]
  i626._maxEvent = i627[2]
  i626._endTime = i627[3]
  request.r(i627[4], i627[5], 0, i626, '_backgroundMusic')
  request.r(i627[6], i627[7], 0, i626, '_backgroundTexture')
  request.r(i627[8], i627[9], 0, i626, '_btnBlock')
  request.r(i627[10], i627[11], 0, i626, '_background')
  request.r(i627[12], i627[13], 0, i626, '_losePanel')
  request.r(i627[14], i627[15], 0, i626, '_progressFillImage')
  request.r(i627[16], i627[17], 0, i626, '_progressText')
  i626._progressTweenDuration = i627[18]
  request.r(i627[19], i627[20], 0, i626, '_timerFillImage')
  request.r(i627[21], i627[22], 0, i626, '_timerText')
  i626._timerPunchScale = i627[23]
  return i626
}

Deserializers["System.Action"] = function (request, data, root) {
  var i628 = root || request.c( 'System.Action' )
  var i629 = data
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Image' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Sprite')
  i632.m_Type = i633[2]
  i632.m_PreserveAspect = !!i633[3]
  i632.m_FillCenter = !!i633[4]
  i632.m_FillMethod = i633[5]
  i632.m_FillAmount = i633[6]
  i632.m_FillClockwise = !!i633[7]
  i632.m_FillOrigin = i633[8]
  i632.m_UseSpriteMesh = !!i633[9]
  i632.m_PixelsPerUnitMultiplier = i633[10]
  request.r(i633[11], i633[12], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[13]
  i632.m_Color = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.m_RaycastTarget = !!i633[18]
  i632.m_RaycastPadding = new pc.Vec4( i633[19], i633[20], i633[21], i633[22] )
  return i632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Texture')
  i634.m_UVRect = UnityEngine.Rect.MinMaxRect(i635[2], i635[3], i635[4], i635[5])
  request.r(i635[6], i635[7], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[8]
  i634.m_Color = new pc.Color(i635[9], i635[10], i635[11], i635[12])
  i634.m_RaycastTarget = !!i635[13]
  i634.m_RaycastPadding = new pc.Vec4( i635[14], i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i636 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i637 = data
  i636.m_hasFontAssetChanged = !!i637[0]
  request.r(i637[1], i637[2], 0, i636, 'm_baseMaterial')
  i636.m_maskOffset = new pc.Vec4( i637[3], i637[4], i637[5], i637[6] )
  i636.m_text = i637[7]
  i636.m_isRightToLeft = !!i637[8]
  request.r(i637[9], i637[10], 0, i636, 'm_fontAsset')
  request.r(i637[11], i637[12], 0, i636, 'm_sharedMaterial')
  var i639 = i637[13]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.m_fontSharedMaterials = i638
  request.r(i637[14], i637[15], 0, i636, 'm_fontMaterial')
  var i641 = i637[16]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i636.m_fontMaterials = i640
  i636.m_fontColor32 = UnityEngine.Color32.ConstructColor(i637[17], i637[18], i637[19], i637[20])
  i636.m_fontColor = new pc.Color(i637[21], i637[22], i637[23], i637[24])
  i636.m_enableVertexGradient = !!i637[25]
  i636.m_colorMode = i637[26]
  i636.m_fontColorGradient = request.d('TMPro.VertexGradient', i637[27], i636.m_fontColorGradient)
  request.r(i637[28], i637[29], 0, i636, 'm_fontColorGradientPreset')
  request.r(i637[30], i637[31], 0, i636, 'm_spriteAsset')
  i636.m_tintAllSprites = !!i637[32]
  request.r(i637[33], i637[34], 0, i636, 'm_StyleSheet')
  i636.m_TextStyleHashCode = i637[35]
  i636.m_overrideHtmlColors = !!i637[36]
  i636.m_faceColor = UnityEngine.Color32.ConstructColor(i637[37], i637[38], i637[39], i637[40])
  i636.m_fontSize = i637[41]
  i636.m_fontSizeBase = i637[42]
  i636.m_fontWeight = i637[43]
  i636.m_enableAutoSizing = !!i637[44]
  i636.m_fontSizeMin = i637[45]
  i636.m_fontSizeMax = i637[46]
  i636.m_fontStyle = i637[47]
  i636.m_HorizontalAlignment = i637[48]
  i636.m_VerticalAlignment = i637[49]
  i636.m_textAlignment = i637[50]
  i636.m_characterSpacing = i637[51]
  i636.m_wordSpacing = i637[52]
  i636.m_lineSpacing = i637[53]
  i636.m_lineSpacingMax = i637[54]
  i636.m_paragraphSpacing = i637[55]
  i636.m_charWidthMaxAdj = i637[56]
  i636.m_TextWrappingMode = i637[57]
  i636.m_wordWrappingRatios = i637[58]
  i636.m_overflowMode = i637[59]
  request.r(i637[60], i637[61], 0, i636, 'm_linkedTextComponent')
  request.r(i637[62], i637[63], 0, i636, 'parentLinkedComponent')
  i636.m_enableKerning = !!i637[64]
  var i643 = i637[65]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(i643[i + 0]);
  }
  i636.m_ActiveFontFeatures = i642
  i636.m_enableExtraPadding = !!i637[66]
  i636.checkPaddingRequired = !!i637[67]
  i636.m_isRichText = !!i637[68]
  i636.m_parseCtrlCharacters = !!i637[69]
  i636.m_isOrthographic = !!i637[70]
  i636.m_isCullingEnabled = !!i637[71]
  i636.m_horizontalMapping = i637[72]
  i636.m_verticalMapping = i637[73]
  i636.m_uvLineOffset = i637[74]
  i636.m_geometrySortingOrder = i637[75]
  i636.m_IsTextObjectScaleStatic = !!i637[76]
  i636.m_VertexBufferAutoSizeReduction = !!i637[77]
  i636.m_useMaxVisibleDescender = !!i637[78]
  i636.m_pageToDisplay = i637[79]
  i636.m_margin = new pc.Vec4( i637[80], i637[81], i637[82], i637[83] )
  i636.m_isUsingLegacyAnimationComponent = !!i637[84]
  i636.m_isVolumetricText = !!i637[85]
  request.r(i637[86], i637[87], 0, i636, 'm_Material')
  i636.m_EmojiFallbackSupport = !!i637[88]
  i636.m_Maskable = !!i637[89]
  i636.m_Color = new pc.Color(i637[90], i637[91], i637[92], i637[93])
  i636.m_RaycastTarget = !!i637[94]
  i636.m_RaycastPadding = new pc.Vec4( i637[95], i637[96], i637[97], i637[98] )
  return i636
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i646 = root || request.c( 'TMPro.VertexGradient' )
  var i647 = data
  i646.topLeft = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.topRight = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  i646.bottomLeft = new pc.Color(i647[8], i647[9], i647[10], i647[11])
  i646.bottomRight = new pc.Color(i647[12], i647[13], i647[14], i647[15])
  return i646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Button' )
  var i651 = data
  i650.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i651[0], i650.m_OnClick)
  i650.m_Navigation = request.d('UnityEngine.UI.Navigation', i651[1], i650.m_Navigation)
  i650.m_Transition = i651[2]
  i650.m_Colors = request.d('UnityEngine.UI.ColorBlock', i651[3], i650.m_Colors)
  i650.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i651[4], i650.m_SpriteState)
  i650.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i651[5], i650.m_AnimationTriggers)
  i650.m_Interactable = !!i651[6]
  request.r(i651[7], i651[8], 0, i650, 'm_TargetGraphic')
  return i650
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i653 = data
  i652.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i653[0], i652.m_PersistentCalls)
  return i652
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i655 = data
  var i657 = i655[0]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('UnityEngine.Events.PersistentCall', i657[i + 0]));
  }
  i654.m_Calls = i656
  return i654
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_Target')
  i660.m_TargetAssemblyTypeName = i661[2]
  i660.m_MethodName = i661[3]
  i660.m_Mode = i661[4]
  i660.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i661[5], i660.m_Arguments)
  i660.m_CallState = i661[6]
  return i660
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_ObjectArgument')
  i662.m_ObjectArgumentAssemblyTypeName = i663[2]
  i662.m_IntArgument = i663[3]
  i662.m_FloatArgument = i663[4]
  i662.m_StringArgument = i663[5]
  i662.m_BoolArgument = !!i663[6]
  return i662
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i665 = data
  i664.m_Mode = i665[0]
  i664.m_WrapAround = !!i665[1]
  request.r(i665[2], i665[3], 0, i664, 'm_SelectOnUp')
  request.r(i665[4], i665[5], 0, i664, 'm_SelectOnDown')
  request.r(i665[6], i665[7], 0, i664, 'm_SelectOnLeft')
  request.r(i665[8], i665[9], 0, i664, 'm_SelectOnRight')
  return i664
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i667 = data
  i666.m_NormalColor = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.m_HighlightedColor = new pc.Color(i667[4], i667[5], i667[6], i667[7])
  i666.m_PressedColor = new pc.Color(i667[8], i667[9], i667[10], i667[11])
  i666.m_SelectedColor = new pc.Color(i667[12], i667[13], i667[14], i667[15])
  i666.m_DisabledColor = new pc.Color(i667[16], i667[17], i667[18], i667[19])
  i666.m_ColorMultiplier = i667[20]
  i666.m_FadeDuration = i667[21]
  return i666
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_HighlightedSprite')
  request.r(i669[2], i669[3], 0, i668, 'm_PressedSprite')
  request.r(i669[4], i669[5], 0, i668, 'm_SelectedSprite')
  request.r(i669[6], i669[7], 0, i668, 'm_DisabledSprite')
  return i668
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i671 = data
  i670.m_NormalTrigger = i671[0]
  i670.m_HighlightedTrigger = i671[1]
  i670.m_PressedTrigger = i671[2]
  i670.m_SelectedTrigger = i671[3]
  i670.m_DisabledTrigger = i671[4]
  return i670
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Mask' )
  var i673 = data
  i672.m_ShowMaskGraphic = !!i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'clip')
  request.r(i675[2], i675[3], 0, i674, 'outputAudioMixerGroup')
  i674.playOnAwake = !!i675[4]
  i674.loop = !!i675[5]
  i674.time = i675[6]
  i674.volume = i675[7]
  i674.pitch = i675[8]
  i674.enabled = !!i675[9]
  return i674
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i677 = data
  i676.m_Padding = new pc.Vec4( i677[0], i677[1], i677[2], i677[3] )
  i676.m_Softness = new pc.Vec2( i677[4], i677[5] )
  return i676
}

Deserializers["GameController"] = function (request, data, root) {
  var i678 = root || request.c( 'GameController' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, '_tutorialHand')
  request.r(i679[2], i679[3], 0, i678, '_tutorialInPlace')
  request.r(i679[4], i679[5], 0, i678, '_tutorialFrom')
  request.r(i679[6], i679[7], 0, i678, '_tutorialTo')
  i678._tutorialScaleDuration = i679[8]
  i678._tutorialMoveDuration = i679[9]
  i678._tutorialStartDelay = i679[10]
  return i678
}

Deserializers["Item"] = function (request, data, root) {
  var i680 = root || request.c( 'Item' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('Item+ItemData', i683[i + 0]));
  }
  i680._data = i682
  i680._dragSortingOrder = i681[1]
  return i680
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i686 = root || request.c( 'Item+ItemData' )
  var i687 = data
  i686.id = i687[0]
  i686.stateChange = request.d('Item+GirlStateChange', i687[1], i686.stateChange)
  i686.animationStateTiming = i687[2]
  i686.result = i687[3]
  return i686
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i688 = root || request.c( 'Item+GirlStateChange' )
  var i689 = data
  i688.changeBodyShape = !!i689[0]
  i688.bodyShape = i689[1]
  i688.changeOutfit = !!i689[2]
  i688.outfit = i689[3]
  i688.changeRestraint = !!i689[4]
  i688.restraint = i689[5]
  return i688
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i690 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'skeletonDataAsset')
  request.r(i691[2], i691[3], 0, i690, 'additiveMaterial')
  request.r(i691[4], i691[5], 0, i690, 'multiplyMaterial')
  request.r(i691[6], i691[7], 0, i690, 'screenMaterial')
  i690.initialSkinName = i691[8]
  i690.initialFlipX = !!i691[9]
  i690.initialFlipY = !!i691[10]
  i690.startingAnimation = i691[11]
  i690.startingLoop = !!i691[12]
  i690.timeScale = i691[13]
  i690.freeze = !!i691[14]
  i690.layoutScaleMode = i691[15]
  i690.updateWhenInvisible = i691[16]
  i690.allowMultipleCanvasRenderers = !!i691[17]
  var i693 = i691[18]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i690.canvasRenderers = i692
  i690.enableSeparatorSlots = !!i691[19]
  i690.updateSeparatorPartLocation = !!i691[20]
  i690.updateSeparatorPartScale = !!i691[21]
  i690.disableMeshAssignmentOnOverride = !!i691[22]
  i690.referenceSize = new pc.Vec2( i691[23], i691[24] )
  i690.referenceScale = i691[25]
  i690.rectTransformSize = new pc.Vec2( i691[26], i691[27] )
  i690.editReferenceRect = !!i691[28]
  var i695 = i691[29]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i690.separatorSlotNames = i694
  var i697 = i691[30]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i690.separatorParts = i696
  i690.meshGenerator = request.d('Spine.Unity.MeshGenerator', i691[31], i690.meshGenerator)
  i690.updateTiming = i691[32]
  i690.unscaledTime = !!i691[33]
  request.r(i691[34], i691[35], 0, i690, 'm_Material')
  i690.m_Maskable = !!i691[36]
  i690.m_Color = new pc.Color(i691[37], i691[38], i691[39], i691[40])
  i690.m_RaycastTarget = !!i691[41]
  i690.m_RaycastPadding = new pc.Vec4( i691[42], i691[43], i691[44], i691[45] )
  return i690
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i705 = data
  i704.settings = request.d('Spine.Unity.MeshGenerator+Settings', i705[0], i704.settings)
  return i704
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i706 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i707 = data
  i706.useClipping = !!i707[0]
  i706.zSpacing = i707[1]
  i706.pmaVertexColors = !!i707[2]
  i706.tintBlack = !!i707[3]
  i706.canvasGroupTintBlack = !!i707[4]
  i706.calculateTangents = !!i707[5]
  i706.addNormals = !!i707[6]
  i706.immutableTriangles = !!i707[7]
  return i706
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i708 = root || request.c( 'Playable.Door' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, '_image')
  request.r(i709[2], i709[3], 0, i708, '_open')
  request.r(i709[4], i709[5], 0, i708, '_close')
  return i708
}

Deserializers["Girl"] = function (request, data, root) {
  var i710 = root || request.c( 'Girl' )
  var i711 = data
  i710._enableDebugLogs = !!i711[0]
  i710._status = request.d('GirlStatus', i711[1], i710._status)
  var i713 = i711[2]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('Girl+BodyShapeSkins', i713[i + 0]));
  }
  i710._bodyShapeSkins = i712
  var i715 = i711[3]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('Girl+OutfitSkins', i715[i + 0]));
  }
  i710._outfitSkins = i714
  var i717 = i711[4]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Girl+RestraintSkins', i717[i + 0]));
  }
  i710._restraintSkins = i716
  request.r(i711[5], i711[6], 0, i710, '_skeletonGraphic')
  var i719 = i711[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i710._defaultSkins = i718
  i710._defaultAnimation = request.d('Target+GirlAnimation', i711[8], i710._defaultAnimation)
  var i721 = i711[9]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Target+GirlAnimation', i721[i + 0]));
  }
  i710._removeGlassesAnimations = i720
  i710._endGameDelay = i711[10]
  i710._boy1 = request.d('Girl+BoyAnimationData', i711[11], i710._boy1)
  i710._boy2 = request.d('Girl+BoyAnimationData', i711[12], i710._boy2)
  return i710
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i722 = root || request.c( 'GirlStatus' )
  var i723 = data
  i722.bodyShape = i723[0]
  i722.outfit = i723[1]
  i722.restraint = i723[2]
  return i722
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i726 = root || request.c( 'Girl+BodyShapeSkins' )
  var i727 = data
  i726.bodyShape = i727[0]
  var i729 = i727[1]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.skins = i728
  return i726
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i732 = root || request.c( 'Girl+OutfitSkins' )
  var i733 = data
  i732.outfit = i733[0]
  var i735 = i733[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i732.skins = i734
  return i732
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i738 = root || request.c( 'Girl+RestraintSkins' )
  var i739 = data
  i738.restraint = i739[0]
  var i741 = i739[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.skins = i740
  return i738
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i742 = root || request.c( 'Target+GirlAnimation' )
  var i743 = data
  i742.animationName = i743[0]
  i742.loop = !!i743[1]
  return i742
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i746 = root || request.c( 'Girl+BoyAnimationData' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'skeletonGraphic')
  i746.idleAnimation = i747[2]
  i746.winAnimation = i747[3]
  i746.loseAnimation = i747[4]
  return i746
}

Deserializers["Target"] = function (request, data, root) {
  var i748 = root || request.c( 'Target' )
  var i749 = data
  i748._part = i749[0]
  request.r(i749[1], i749[2], 0, i748, '_girl')
  request.r(i749[3], i749[4], 0, i748, '_skeletonGraphic')
  var i751 = i749[5]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('Target+ItemReaction', i751[i + 0]));
  }
  i748._itemReactions = i750
  return i748
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i754 = root || request.c( 'Target+ItemReaction' )
  var i755 = data
  i754.itemId = i755[0]
  var i757 = i755[1]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('Target+AnimationRule', i757[i + 0]));
  }
  i754.animationRules = i756
  var i759 = i755[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i754.skinAdded = i758
  var i761 = i755[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i754.skinRemoved = i760
  request.r(i755[4], i755[5], 0, i754, 'audioClip')
  return i754
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i764 = root || request.c( 'Target+AnimationRule' )
  var i765 = data
  i764.checkBodyShape = !!i765[0]
  i764.bodyShape = i765[1]
  i764.checkOutfit = !!i765[2]
  i764.outfit = i765[3]
  i764.checkRestraint = !!i765[4]
  i764.restraint = i765[5]
  var i767 = i765[6]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('Target+GirlAnimation', i767[i + 0]));
  }
  i764.animations = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i769 = data
  i768.m_Alpha = i769[0]
  i768.m_Interactable = !!i769[1]
  i768.m_BlocksRaycasts = !!i769[2]
  i768.m_IgnoreParentGroups = !!i769[3]
  i768.enabled = !!i769[4]
  return i768
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i771 = data
  i770.m_Spacing = i771[0]
  i770.m_ChildForceExpandWidth = !!i771[1]
  i770.m_ChildForceExpandHeight = !!i771[2]
  i770.m_ChildControlWidth = !!i771[3]
  i770.m_ChildControlHeight = !!i771[4]
  i770.m_ChildScaleWidth = !!i771[5]
  i770.m_ChildScaleHeight = !!i771[6]
  i770.m_ReverseArrangement = !!i771[7]
  i770.m_Padding = UnityEngine.RectOffset.FromPaddings(i771[8], i771[9], i771[10], i771[11])
  i770.m_ChildAlignment = i771[12]
  return i770
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i772 = root || request.c( 'Playable.AudioManager' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Playable.SoundData', i775[i + 0]));
  }
  i772._sounds = i774
  request.r(i773[1], i773[2], 0, i772, '_audioMusic')
  request.r(i773[3], i773[4], 0, i772, '_audioSound')
  return i772
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i778 = root || request.c( 'Playable.SoundData' )
  var i779 = data
  i778.Type = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'Clip')
  return i778
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_FirstSelected')
  i780.m_sendNavigationEvents = !!i781[2]
  i780.m_DragThreshold = i781[3]
  return i780
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i783 = data
  i782.m_HorizontalAxis = i783[0]
  i782.m_VerticalAxis = i783[1]
  i782.m_SubmitButton = i783[2]
  i782.m_CancelButton = i783[3]
  i782.m_InputActionsPerSecond = i783[4]
  i782.m_RepeatDelay = i783[5]
  i782.m_ForceModuleActive = !!i783[6]
  i782.m_SendPointerHoverToParent = !!i783[7]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i785 = data
  i784.ambientIntensity = i785[0]
  i784.reflectionIntensity = i785[1]
  i784.ambientMode = i785[2]
  i784.ambientLight = new pc.Color(i785[3], i785[4], i785[5], i785[6])
  i784.ambientSkyColor = new pc.Color(i785[7], i785[8], i785[9], i785[10])
  i784.ambientGroundColor = new pc.Color(i785[11], i785[12], i785[13], i785[14])
  i784.ambientEquatorColor = new pc.Color(i785[15], i785[16], i785[17], i785[18])
  i784.fogColor = new pc.Color(i785[19], i785[20], i785[21], i785[22])
  i784.fogEndDistance = i785[23]
  i784.fogStartDistance = i785[24]
  i784.fogDensity = i785[25]
  i784.fog = !!i785[26]
  request.r(i785[27], i785[28], 0, i784, 'skybox')
  i784.fogMode = i785[29]
  var i787 = i785[30]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i787[i + 0]) );
  }
  i784.lightmaps = i786
  i784.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i785[31], i784.lightProbes)
  i784.lightmapsMode = i785[32]
  i784.mixedBakeMode = i785[33]
  i784.environmentLightingMode = i785[34]
  i784.ambientProbe = new pc.SphericalHarmonicsL2(i785[35])
  request.r(i785[36], i785[37], 0, i784, 'customReflection')
  request.r(i785[38], i785[39], 0, i784, 'defaultReflection')
  i784.defaultReflectionMode = i785[40]
  i784.defaultReflectionResolution = i785[41]
  i784.sunLightObjectId = i785[42]
  i784.pixelLightCount = i785[43]
  i784.defaultReflectionHDR = !!i785[44]
  i784.hasLightDataAsset = !!i785[45]
  i784.hasManualGenerate = !!i785[46]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'lightmapColor')
  request.r(i791[2], i791[3], 0, i790, 'lightmapDirection')
  request.r(i791[4], i791[5], 0, i790, 'shadowMask')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i792 = root || new UnityEngine.LightProbes()
  var i793 = data
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i803[i + 0]));
  }
  i800.ShaderCompilationErrors = i802
  i800.name = i801[1]
  i800.guid = i801[2]
  var i805 = i801[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.shaderDefinedKeywords = i804
  var i807 = i801[4]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i807[i + 0]) );
  }
  i800.passes = i806
  var i809 = i801[5]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i809[i + 0]) );
  }
  i800.usePasses = i808
  var i811 = i801[6]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i811[i + 0]) );
  }
  i800.defaultParameterValues = i810
  request.r(i801[7], i801[8], 0, i800, 'unityFallbackShader')
  i800.readDepth = !!i801[9]
  i800.hasDepthOnlyPass = !!i801[10]
  i800.isCreatedByShaderGraph = !!i801[11]
  i800.disableBatching = !!i801[12]
  i800.compiled = !!i801[13]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i815 = data
  i814.shaderName = i815[0]
  i814.errorMessage = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i818 = root || new pc.UnityShaderPass()
  var i819 = data
  i818.id = i819[0]
  i818.subShaderIndex = i819[1]
  i818.name = i819[2]
  i818.passType = i819[3]
  i818.grabPassTextureName = i819[4]
  i818.usePass = !!i819[5]
  i818.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[6], i818.zTest)
  i818.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[7], i818.zWrite)
  i818.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[8], i818.culling)
  i818.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i819[9], i818.blending)
  i818.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i819[10], i818.alphaBlending)
  i818.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[11], i818.colorWriteMask)
  i818.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[12], i818.offsetUnits)
  i818.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[13], i818.offsetFactor)
  i818.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[14], i818.stencilRef)
  i818.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[15], i818.stencilReadMask)
  i818.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[16], i818.stencilWriteMask)
  i818.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[17], i818.stencilOp)
  i818.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[18], i818.stencilOpFront)
  i818.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[19], i818.stencilOpBack)
  var i821 = i819[20]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i821[i + 0]) );
  }
  i818.tags = i820
  var i823 = i819[21]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.passDefinedKeywords = i822
  var i825 = i819[22]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i825[i + 0]) );
  }
  i818.passDefinedKeywordGroups = i824
  var i827 = i819[23]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i827[i + 0]) );
  }
  i818.variants = i826
  var i829 = i819[24]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i829[i + 0]) );
  }
  i818.excludedVariants = i828
  i818.hasDepthReader = !!i819[25]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i831 = data
  i830.val = i831[0]
  i830.name = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i833 = data
  i832.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[0], i832.src)
  i832.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[1], i832.dst)
  i832.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[2], i832.op)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i835 = data
  i834.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[0], i834.pass)
  i834.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[1], i834.fail)
  i834.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[2], i834.zFail)
  i834.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[3], i834.comp)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i839 = data
  i838.name = i839[0]
  i838.value = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i842.keywords = i844
  i842.hasDiscard = !!i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i849 = data
  i848.passId = i849[0]
  i848.subShaderIndex = i849[1]
  var i851 = i849[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i848.keywords = i850
  i848.vertexProgram = i849[3]
  i848.fragmentProgram = i849[4]
  i848.exportedForWebGl2 = !!i849[5]
  i848.readDepth = !!i849[6]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'shader')
  i854.pass = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i859 = data
  i858.name = i859[0]
  i858.type = i859[1]
  i858.value = new pc.Vec4( i859[2], i859[3], i859[4], i859[5] )
  i858.textureValue = i859[6]
  i858.shaderPropertyFlag = i859[7]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i861 = data
  i860.name = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'texture')
  i860.aabb = i861[3]
  i860.vertices = i861[4]
  i860.triangles = i861[5]
  i860.textureRect = UnityEngine.Rect.MinMaxRect(i861[6], i861[7], i861[8], i861[9])
  i860.packedRect = UnityEngine.Rect.MinMaxRect(i861[10], i861[11], i861[12], i861[13])
  i860.border = new pc.Vec4( i861[14], i861[15], i861[16], i861[17] )
  i860.transparency = i861[18]
  i860.bounds = i861[19]
  i860.pixelsPerUnit = i861[20]
  i860.textureWidth = i861[21]
  i860.textureHeight = i861[22]
  i860.nativeSize = new pc.Vec2( i861[23], i861[24] )
  i860.pivot = new pc.Vec2( i861[25], i861[26] )
  i860.textureRectOffset = new pc.Vec2( i861[27], i861[28] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i863 = data
  i862.name = i863[0]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i865 = data
  i864.name = i865[0]
  i864.ascent = i865[1]
  i864.originalLineHeight = i865[2]
  i864.fontSize = i865[3]
  var i867 = i865[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i867[i + 0]) );
  }
  i864.characterInfo = i866
  request.r(i865[5], i865[6], 0, i864, 'texture')
  i864.originalFontSize = i865[7]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i871 = data
  i870.index = i871[0]
  i870.advance = i871[1]
  i870.bearing = i871[2]
  i870.glyphWidth = i871[3]
  i870.glyphHeight = i871[4]
  i870.minX = i871[5]
  i870.maxX = i871[6]
  i870.minY = i871[7]
  i870.maxY = i871[8]
  i870.uvBottomLeftX = i871[9]
  i870.uvBottomLeftY = i871[10]
  i870.uvBottomRightX = i871[11]
  i870.uvBottomRightY = i871[12]
  i870.uvTopLeftX = i871[13]
  i870.uvTopLeftY = i871[14]
  i870.uvTopRightX = i871[15]
  i870.uvTopRightY = i871[16]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i873 = data
  i872.name = i873[0]
  i872.bytes64 = i873[1]
  i872.data = i873[2]
  return i872
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i875 = data
  i874.normalStyle = i875[0]
  i874.normalSpacingOffset = i875[1]
  i874.boldStyle = i875[2]
  i874.boldSpacing = i875[3]
  i874.italicStyle = i875[4]
  i874.tabSize = i875[5]
  request.r(i875[6], i875[7], 0, i874, 'atlas')
  i874.m_SourceFontFileGUID = i875[8]
  i874.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i875[9], i874.m_CreationSettings)
  request.r(i875[10], i875[11], 0, i874, 'm_SourceFontFile')
  i874.m_SourceFontFilePath = i875[12]
  i874.m_AtlasPopulationMode = i875[13]
  i874.InternalDynamicOS = !!i875[14]
  var i877 = i875[15]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.TextCore.Glyph', i877[i + 0]));
  }
  i874.m_GlyphTable = i876
  var i879 = i875[16]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_Character', i879[i + 0]));
  }
  i874.m_CharacterTable = i878
  var i881 = i875[17]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i874.m_AtlasTextures = i880
  i874.m_AtlasTextureIndex = i875[18]
  i874.m_IsMultiAtlasTexturesEnabled = !!i875[19]
  i874.m_GetFontFeatures = !!i875[20]
  i874.m_ClearDynamicDataOnBuild = !!i875[21]
  i874.m_AtlasWidth = i875[22]
  i874.m_AtlasHeight = i875[23]
  i874.m_AtlasPadding = i875[24]
  i874.m_AtlasRenderMode = i875[25]
  var i883 = i875[26]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('UnityEngine.TextCore.GlyphRect', i883[i + 0]));
  }
  i874.m_UsedGlyphRects = i882
  var i885 = i875[27]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('UnityEngine.TextCore.GlyphRect', i885[i + 0]));
  }
  i874.m_FreeGlyphRects = i884
  i874.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i875[28], i874.m_FontFeatureTable)
  i874.m_ShouldReimportFontFeatures = !!i875[29]
  var i887 = i875[30]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i874.m_FallbackFontAssetTable = i886
  var i889 = i875[31]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('TMPro.TMP_FontWeightPair', i889[i + 0]) );
  }
  i874.m_FontWeightTable = i888
  var i891 = i875[32]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('TMPro.TMP_FontWeightPair', i891[i + 0]) );
  }
  i874.fontWeights = i890
  i874.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i875[33], i874.m_fontInfo)
  var i893 = i875[34]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Glyph', i893[i + 0]));
  }
  i874.m_glyphInfoList = i892
  i874.m_KerningTable = request.d('TMPro.KerningTable', i875[35], i874.m_KerningTable)
  var i895 = i875[36]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i874.fallbackFontAssets = i894
  i874.m_Version = i875[37]
  i874.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i875[38], i874.m_FaceInfo)
  request.r(i875[39], i875[40], 0, i874, 'm_Material')
  return i874
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i897 = data
  i896.sourceFontFileName = i897[0]
  i896.sourceFontFileGUID = i897[1]
  i896.faceIndex = i897[2]
  i896.pointSizeSamplingMode = i897[3]
  i896.pointSize = i897[4]
  i896.padding = i897[5]
  i896.paddingMode = i897[6]
  i896.packingMode = i897[7]
  i896.atlasWidth = i897[8]
  i896.atlasHeight = i897[9]
  i896.characterSetSelectionMode = i897[10]
  i896.characterSequence = i897[11]
  i896.referencedFontAssetGUID = i897[12]
  i896.referencedTextAssetGUID = i897[13]
  i896.fontStyle = i897[14]
  i896.fontStyleModifier = i897[15]
  i896.renderMode = i897[16]
  i896.includeFontFeatures = !!i897[17]
  return i896
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i901 = data
  i900.m_Index = i901[0]
  i900.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i901[1], i900.m_Metrics)
  i900.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i901[2], i900.m_GlyphRect)
  i900.m_Scale = i901[3]
  i900.m_AtlasIndex = i901[4]
  i900.m_ClassDefinitionType = i901[5]
  return i900
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i903 = data
  i902.m_Width = i903[0]
  i902.m_Height = i903[1]
  i902.m_HorizontalBearingX = i903[2]
  i902.m_HorizontalBearingY = i903[3]
  i902.m_HorizontalAdvance = i903[4]
  return i902
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i905 = data
  i904.m_X = i905[0]
  i904.m_Y = i905[1]
  i904.m_Width = i905[2]
  i904.m_Height = i905[3]
  return i904
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_Character' )
  var i909 = data
  i908.m_ElementType = i909[0]
  i908.m_Unicode = i909[1]
  i908.m_GlyphIndex = i909[2]
  i908.m_Scale = i909[3]
  return i908
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i915 = data
  var i917 = i915[0]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.MultipleSubstitutionRecord', i917[i + 0]));
  }
  i914.m_MultipleSubstitutionRecords = i916
  var i919 = i915[1]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.LigatureSubstitutionRecord', i919[i + 0]));
  }
  i914.m_LigatureSubstitutionRecords = i918
  var i921 = i915[2]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i921[i + 0]));
  }
  i914.m_GlyphPairAdjustmentRecords = i920
  var i923 = i915[3]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i923[i + 0]));
  }
  i914.m_MarkToBaseAdjustmentRecords = i922
  var i925 = i915[4]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i925[i + 0]));
  }
  i914.m_MarkToMarkAdjustmentRecords = i924
  return i914
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i929 = data
  i928.m_TargetGlyphID = i929[0]
  i928.m_SubstituteGlyphIDs = i929[1]
  return i928
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i933 = data
  i932.m_ComponentGlyphIDs = i933[0]
  i932.m_LigatureGlyphID = i933[1]
  return i932
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i937 = data
  i936.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i937[0], i936.m_FirstAdjustmentRecord)
  i936.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i937[1], i936.m_SecondAdjustmentRecord)
  i936.m_FeatureLookupFlags = i937[2]
  return i936
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i941 = data
  i940.m_BaseGlyphID = i941[0]
  i940.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i941[1], i940.m_BaseGlyphAnchorPoint)
  i940.m_MarkGlyphID = i941[2]
  i940.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i941[3], i940.m_MarkPositionAdjustment)
  return i940
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i945 = data
  i944.m_BaseMarkGlyphID = i945[0]
  i944.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i945[1], i944.m_BaseMarkGlyphAnchorPoint)
  i944.m_CombiningMarkGlyphID = i945[2]
  i944.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i945[3], i944.m_CombiningMarkPositionAdjustment)
  return i944
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'regularTypeface')
  request.r(i951[2], i951[3], 0, i950, 'italicTypeface')
  return i950
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i953 = data
  i952.Name = i953[0]
  i952.PointSize = i953[1]
  i952.Scale = i953[2]
  i952.CharacterCount = i953[3]
  i952.LineHeight = i953[4]
  i952.Baseline = i953[5]
  i952.Ascender = i953[6]
  i952.CapHeight = i953[7]
  i952.Descender = i953[8]
  i952.CenterLine = i953[9]
  i952.SuperscriptOffset = i953[10]
  i952.SubscriptOffset = i953[11]
  i952.SubSize = i953[12]
  i952.Underline = i953[13]
  i952.UnderlineThickness = i953[14]
  i952.strikethrough = i953[15]
  i952.strikethroughThickness = i953[16]
  i952.TabWidth = i953[17]
  i952.Padding = i953[18]
  i952.AtlasWidth = i953[19]
  i952.AtlasHeight = i953[20]
  return i952
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_Glyph' )
  var i957 = data
  i956.id = i957[0]
  i956.x = i957[1]
  i956.y = i957[2]
  i956.width = i957[3]
  i956.height = i957[4]
  i956.xOffset = i957[5]
  i956.yOffset = i957[6]
  i956.xAdvance = i957[7]
  i956.scale = i957[8]
  return i956
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.KerningTable' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.KerningPair', i961[i + 0]));
  }
  i958.kerningPairs = i960
  return i958
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.KerningPair' )
  var i965 = data
  i964.xOffset = i965[0]
  i964.m_FirstGlyph = i965[1]
  i964.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i965[2], i964.m_FirstGlyphAdjustments)
  i964.m_SecondGlyph = i965[3]
  i964.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i965[4], i964.m_SecondGlyphAdjustments)
  i964.m_IgnoreSpacingAdjustments = !!i965[5]
  return i964
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i967 = data
  i966.m_FaceIndex = i967[0]
  i966.m_FamilyName = i967[1]
  i966.m_StyleName = i967[2]
  i966.m_PointSize = i967[3]
  i966.m_Scale = i967[4]
  i966.m_UnitsPerEM = i967[5]
  i966.m_LineHeight = i967[6]
  i966.m_AscentLine = i967[7]
  i966.m_CapLine = i967[8]
  i966.m_MeanLine = i967[9]
  i966.m_Baseline = i967[10]
  i966.m_DescentLine = i967[11]
  i966.m_SuperscriptOffset = i967[12]
  i966.m_SuperscriptSize = i967[13]
  i966.m_SubscriptOffset = i967[14]
  i966.m_SubscriptSize = i967[15]
  i966.m_UnderlineOffset = i967[16]
  i966.m_UnderlineThickness = i967[17]
  i966.m_StrikethroughOffset = i967[18]
  i966.m_StrikethroughThickness = i967[19]
  i966.m_TabWidth = i967[20]
  return i966
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i968 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.atlasAssets = i970
  i968.scale = i969[1]
  request.r(i969[2], i969[3], 0, i968, 'skeletonJSON')
  i968.isUpgradingBlendModeMaterials = !!i969[4]
  i968.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i969[5], i968.blendModeMaterials)
  var i973 = i969[6]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i968.skeletonDataModifiers = i972
  var i975 = i969[7]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i968.fromAnimation = i974
  var i977 = i969[8]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i968.toAnimation = i976
  i968.duration = i969[9]
  i968.defaultMix = i969[10]
  request.r(i969[11], i969[12], 0, i968, 'controller')
  return i968
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i980 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i981 = data
  i980.applyAdditiveMaterial = !!i981[0]
  var i983 = i981[1]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i983[i + 0]));
  }
  i980.additiveMaterials = i982
  var i985 = i981[2]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i985[i + 0]));
  }
  i980.multiplyMaterials = i984
  var i987 = i981[3]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i987[i + 0]));
  }
  i980.screenMaterials = i986
  i980.requiresBlendModeMaterials = !!i981[4]
  return i980
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i990 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i991 = data
  i990.pageName = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'material')
  return i990
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i994 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'atlasFile')
  var i997 = i995[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.materials = i996
  i994.textureLoadingMode = i995[3]
  request.r(i995[4], i995[5], 0, i994, 'onDemandTextureLoader')
  return i994
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i999 = data
  i998.useSafeMode = !!i999[0]
  i998.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i999[1], i998.safeModeOptions)
  i998.timeScale = i999[2]
  i998.unscaledTimeScale = i999[3]
  i998.useSmoothDeltaTime = !!i999[4]
  i998.maxSmoothUnscaledTime = i999[5]
  i998.rewindCallbackMode = i999[6]
  i998.showUnityEditorReport = !!i999[7]
  i998.logBehaviour = i999[8]
  i998.drawGizmos = !!i999[9]
  i998.defaultRecyclable = !!i999[10]
  i998.defaultAutoPlay = i999[11]
  i998.defaultUpdateType = i999[12]
  i998.defaultTimeScaleIndependent = !!i999[13]
  i998.defaultEaseType = i999[14]
  i998.defaultEaseOvershootOrAmplitude = i999[15]
  i998.defaultEasePeriod = i999[16]
  i998.defaultAutoKill = !!i999[17]
  i998.defaultLoopType = i999[18]
  i998.debugMode = !!i999[19]
  i998.debugStoreTargetId = !!i999[20]
  i998.showPreviewPanel = !!i999[21]
  i998.storeSettingsLocation = i999[22]
  i998.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i999[23], i998.modules)
  i998.createASMDEF = !!i999[24]
  i998.showPlayingTweens = !!i999[25]
  i998.showPausedTweens = !!i999[26]
  return i998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1001 = data
  i1000.logBehaviour = i1001[0]
  i1000.nestedTweenFailureBehaviour = i1001[1]
  return i1000
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1002 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1003 = data
  i1002.showPanel = !!i1003[0]
  i1002.audioEnabled = !!i1003[1]
  i1002.physicsEnabled = !!i1003[2]
  i1002.physics2DEnabled = !!i1003[3]
  i1002.spriteEnabled = !!i1003[4]
  i1002.uiEnabled = !!i1003[5]
  i1002.uiToolkitEnabled = !!i1003[6]
  i1002.textMeshProEnabled = !!i1003[7]
  i1002.tk2DEnabled = !!i1003[8]
  i1002.deAudioEnabled = !!i1003[9]
  i1002.deUnityExtendedEnabled = !!i1003[10]
  i1002.epoOutlineEnabled = !!i1003[11]
  return i1002
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_Settings' )
  var i1005 = data
  i1004.assetVersion = i1005[0]
  i1004.m_TextWrappingMode = i1005[1]
  i1004.m_enableKerning = !!i1005[2]
  var i1007 = i1005[3]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(i1007[i + 0]);
  }
  i1004.m_ActiveFontFeatures = i1006
  i1004.m_enableExtraPadding = !!i1005[4]
  i1004.m_enableTintAllSprites = !!i1005[5]
  i1004.m_enableParseEscapeCharacters = !!i1005[6]
  i1004.m_EnableRaycastTarget = !!i1005[7]
  i1004.m_GetFontFeaturesAtRuntime = !!i1005[8]
  i1004.m_missingGlyphCharacter = i1005[9]
  i1004.m_ClearDynamicDataOnBuild = !!i1005[10]
  i1004.m_warningsDisabled = !!i1005[11]
  request.r(i1005[12], i1005[13], 0, i1004, 'm_defaultFontAsset')
  i1004.m_defaultFontAssetPath = i1005[14]
  i1004.m_defaultFontSize = i1005[15]
  i1004.m_defaultAutoSizeMinRatio = i1005[16]
  i1004.m_defaultAutoSizeMaxRatio = i1005[17]
  i1004.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1005[18], i1005[19] )
  i1004.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1005[20], i1005[21] )
  i1004.m_autoSizeTextContainer = !!i1005[22]
  i1004.m_IsTextObjectScaleStatic = !!i1005[23]
  var i1009 = i1005[24]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i1004.m_fallbackFontAssets = i1008
  i1004.m_matchMaterialPreset = !!i1005[25]
  i1004.m_HideSubTextObjects = !!i1005[26]
  request.r(i1005[27], i1005[28], 0, i1004, 'm_defaultSpriteAsset')
  i1004.m_defaultSpriteAssetPath = i1005[29]
  i1004.m_enableEmojiSupport = !!i1005[30]
  i1004.m_MissingCharacterSpriteUnicode = i1005[31]
  var i1011 = i1005[32]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1004.m_EmojiFallbackTextAssets = i1010
  i1004.m_defaultColorGradientPresetsPath = i1005[33]
  request.r(i1005[34], i1005[35], 0, i1004, 'm_defaultStyleSheet')
  i1004.m_StyleSheetsResourcePath = i1005[36]
  request.r(i1005[37], i1005[38], 0, i1004, 'm_leadingCharacters')
  request.r(i1005[39], i1005[40], 0, i1004, 'm_followingCharacters')
  i1004.m_UseModernHangulLineBreakingRules = !!i1005[41]
  return i1004
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1015 = data
  i1014.m_GlyphIndex = i1015[0]
  i1014.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1015[1], i1014.m_GlyphValueRecord)
  return i1014
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1017 = data
  i1016.m_XPlacement = i1017[0]
  i1016.m_YPlacement = i1017[1]
  i1016.m_XAdvance = i1017[2]
  i1016.m_YAdvance = i1017[3]
  return i1016
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'spriteSheet')
  var i1021 = i1019[2]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_Sprite', i1021[i + 0]));
  }
  i1018.spriteInfoList = i1020
  var i1023 = i1019[3]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.fallbackSpriteAssets = i1022
  var i1025 = i1019[4]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_SpriteCharacter', i1025[i + 0]));
  }
  i1018.m_SpriteCharacterTable = i1024
  var i1027 = i1019[5]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_SpriteGlyph', i1027[i + 0]));
  }
  i1018.m_GlyphTable = i1026
  i1018.m_Version = i1019[6]
  i1018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1019[7], i1018.m_FaceInfo)
  request.r(i1019[8], i1019[9], 0, i1018, 'm_Material')
  return i1018
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.hashCode = i1031[1]
  i1030.unicode = i1031[2]
  i1030.pivot = new pc.Vec2( i1031[3], i1031[4] )
  request.r(i1031[5], i1031[6], 0, i1030, 'sprite')
  i1030.id = i1031[7]
  i1030.x = i1031[8]
  i1030.y = i1031[9]
  i1030.width = i1031[10]
  i1030.height = i1031[11]
  i1030.xOffset = i1031[12]
  i1030.yOffset = i1031[13]
  i1030.xAdvance = i1031[14]
  i1030.scale = i1031[15]
  return i1030
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1037 = data
  i1036.m_Name = i1037[0]
  i1036.m_ElementType = i1037[1]
  i1036.m_Unicode = i1037[2]
  i1036.m_GlyphIndex = i1037[3]
  i1036.m_Scale = i1037[4]
  return i1036
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'sprite')
  i1040.m_Index = i1041[2]
  i1040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1041[3], i1040.m_Metrics)
  i1040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1041[4], i1040.m_GlyphRect)
  i1040.m_Scale = i1041[5]
  i1040.m_AtlasIndex = i1041[6]
  i1040.m_ClassDefinitionType = i1041[7]
  return i1040
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('TMPro.TMP_Style', i1045[i + 0]));
  }
  i1042.m_StyleList = i1044
  return i1042
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Style' )
  var i1049 = data
  i1048.m_Name = i1049[0]
  i1048.m_HashCode = i1049[1]
  i1048.m_OpeningDefinition = i1049[2]
  i1048.m_ClosingDefinition = i1049[3]
  i1048.m_OpeningTagArray = i1049[4]
  i1048.m_ClosingTagArray = i1049[5]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1053[i + 0]) );
  }
  i1050.files = i1052
  i1050.componentToPrefabIds = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1057 = data
  i1056.path = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'unityObject')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1061[i + 0]) );
  }
  i1058.scriptsExecutionOrder = i1060
  var i1063 = i1059[1]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1063[i + 0]) );
  }
  i1058.sortingLayers = i1062
  var i1065 = i1059[2]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1065[i + 0]) );
  }
  i1058.cullingLayers = i1064
  i1058.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1059[3], i1058.timeSettings)
  i1058.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1059[4], i1058.physicsSettings)
  i1058.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1059[5], i1058.physics2DSettings)
  i1058.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1059[6], i1058.qualitySettings)
  i1058.enableRealtimeShadows = !!i1059[7]
  i1058.enableAutoInstancing = !!i1059[8]
  i1058.enableStaticBatching = !!i1059[9]
  i1058.enableDynamicBatching = !!i1059[10]
  i1058.usePreservativeDynamicBatching = !!i1059[11]
  i1058.lightmapEncodingQuality = i1059[12]
  i1058.desiredColorSpace = i1059[13]
  var i1067 = i1059[14]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1058.allTags = i1066
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.name = i1075[1]
  i1074.value = i1075[2]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1081 = data
  i1080.fixedDeltaTime = i1081[0]
  i1080.maximumDeltaTime = i1081[1]
  i1080.timeScale = i1081[2]
  i1080.maximumParticleTimestep = i1081[3]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1083 = data
  i1082.gravity = new pc.Vec3( i1083[0], i1083[1], i1083[2] )
  i1082.defaultSolverIterations = i1083[3]
  i1082.bounceThreshold = i1083[4]
  i1082.autoSyncTransforms = !!i1083[5]
  i1082.autoSimulation = !!i1083[6]
  var i1085 = i1083[7]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1085[i + 0]) );
  }
  i1082.collisionMatrix = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1089 = data
  i1088.enabled = !!i1089[0]
  i1088.layerId = i1089[1]
  i1088.otherLayerId = i1089[2]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'material')
  i1090.gravity = new pc.Vec2( i1091[2], i1091[3] )
  i1090.positionIterations = i1091[4]
  i1090.velocityIterations = i1091[5]
  i1090.velocityThreshold = i1091[6]
  i1090.maxLinearCorrection = i1091[7]
  i1090.maxAngularCorrection = i1091[8]
  i1090.maxTranslationSpeed = i1091[9]
  i1090.maxRotationSpeed = i1091[10]
  i1090.baumgarteScale = i1091[11]
  i1090.baumgarteTOIScale = i1091[12]
  i1090.timeToSleep = i1091[13]
  i1090.linearSleepTolerance = i1091[14]
  i1090.angularSleepTolerance = i1091[15]
  i1090.defaultContactOffset = i1091[16]
  i1090.autoSimulation = !!i1091[17]
  i1090.queriesHitTriggers = !!i1091[18]
  i1090.queriesStartInColliders = !!i1091[19]
  i1090.callbacksOnDisable = !!i1091[20]
  i1090.reuseCollisionCallbacks = !!i1091[21]
  i1090.autoSyncTransforms = !!i1091[22]
  var i1093 = i1091[23]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1101[i + 0]) );
  }
  i1098.qualityLevels = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1098.names = i1102
  i1098.shadows = i1099[2]
  i1098.anisotropicFiltering = i1099[3]
  i1098.antiAliasing = i1099[4]
  i1098.lodBias = i1099[5]
  i1098.shadowCascades = i1099[6]
  i1098.shadowDistance = i1099[7]
  i1098.shadowmaskMode = i1099[8]
  i1098.shadowProjection = i1099[9]
  i1098.shadowResolution = i1099[10]
  i1098.softParticles = !!i1099[11]
  i1098.softVegetation = !!i1099[12]
  i1098.activeColorSpace = i1099[13]
  i1098.desiredColorSpace = i1099[14]
  i1098.masterTextureLimit = i1099[15]
  i1098.maxQueuedFrames = i1099[16]
  i1098.particleRaycastBudget = i1099[17]
  i1098.pixelLightCount = i1099[18]
  i1098.realtimeReflectionProbes = !!i1099[19]
  i1098.shadowCascade2Split = i1099[20]
  i1098.shadowCascade4Split = new pc.Vec3( i1099[21], i1099[22], i1099[23] )
  i1098.streamingMipmapsActive = !!i1099[24]
  i1098.vSyncCount = i1099[25]
  i1098.asyncUploadBufferSize = i1099[26]
  i1098.asyncUploadTimeSlice = i1099[27]
  i1098.billboardsFaceCameraPosition = !!i1099[28]
  i1098.shadowNearPlaneOffset = i1099[29]
  i1098.streamingMipmapsMemoryBudget = i1099[30]
  i1098.maximumLODLevel = i1099[31]
  i1098.streamingMipmapsAddAllCameras = !!i1099[32]
  i1098.streamingMipmapsMaxLevelReduction = i1099[33]
  i1098.streamingMipmapsRenderersPerFrame = i1099[34]
  i1098.resolutionScalingFixedDPIFactor = i1099[35]
  i1098.streamingMipmapsMaxFileIORequests = i1099[36]
  i1098.currentQualityLevel = i1099[37]
  return i1098
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1107 = data
  i1106.m_XCoordinate = i1107[0]
  i1106.m_YCoordinate = i1107[1]
  return i1106
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1109 = data
  i1108.m_XPositionAdjustment = i1109[0]
  i1108.m_YPositionAdjustment = i1109[1]
  return i1108
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1111 = data
  i1110.xPlacement = i1111[0]
  i1110.yPlacement = i1111[1]
  i1110.xAdvance = i1111[2]
  i1110.yAdvance = i1111[3]
  return i1110
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"5":[4],"25":[4],"80":[81],"82":[4],"83":[16,4],"84":[76],"26":[16,4],"85":[86,76],"87":[76],"88":[76,89],"90":[54],"91":[61],"92":[81],"93":[94],"95":[96],"97":[34],"98":[5],"99":[4],"100":[76,4],"15":[4,16],"101":[4],"102":[16,4],"103":[76],"104":[16,4],"105":[4],"106":[107],"108":[107],"109":[107],"110":[4],"111":[4],"8":[5],"13":[16,4],"112":[4],"7":[5],"113":[4],"114":[4],"32":[4],"115":[4],"116":[4],"117":[4],"118":[4],"21":[4],"119":[4],"17":[16,4],"23":[4],"120":[4],"121":[4],"122":[4],"123":[16,4],"124":[4],"125":[34],"126":[34],"35":[34],"127":[34],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","Girl","Target","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "42.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V35_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "29138";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4509";

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

Deserializers.buildID = "dce95710-19f7-4ee0-b75a-b3e2c0bb806d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

