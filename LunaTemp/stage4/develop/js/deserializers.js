var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSpring' )
  var i613 = data
  i612.spring = i613[0]
  i612.damper = i613[1]
  i612.targetPosition = i613[2]
  return i612
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointMotor' )
  var i615 = data
  i614.m_TargetVelocity = i615[0]
  i614.m_Force = i615[1]
  i614.m_FreeSpin = i615[2]
  return i614
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointLimits' )
  var i617 = data
  i616.m_Min = i617[0]
  i616.m_Max = i617[1]
  i616.m_Bounciness = i617[2]
  i616.m_BounceMinVelocity = i617[3]
  i616.m_ContactDistance = i617[4]
  i616.minBounce = i617[5]
  i616.maxBounce = i617[6]
  return i616
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointDrive' )
  var i619 = data
  i618.m_PositionSpring = i619[0]
  i618.m_PositionDamper = i619[1]
  i618.m_MaximumForce = i619[2]
  i618.m_UseAcceleration = i619[3]
  return i618
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i621 = data
  i620.m_Spring = i621[0]
  i620.m_Damper = i621[1]
  return i620
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i623 = data
  i622.m_Limit = i623[0]
  i622.m_Bounciness = i623[1]
  i622.m_ContactDistance = i623[2]
  return i622
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i625 = data
  i624.m_ExtremumSlip = i625[0]
  i624.m_ExtremumValue = i625[1]
  i624.m_AsymptoteSlip = i625[2]
  i624.m_AsymptoteValue = i625[3]
  i624.m_Stiffness = i625[4]
  return i624
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i627 = data
  i626.m_LowerAngle = i627[0]
  i626.m_UpperAngle = i627[1]
  return i626
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i629 = data
  i628.m_MotorSpeed = i629[0]
  i628.m_MaximumMotorTorque = i629[1]
  return i628
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i631 = data
  i630.m_DampingRatio = i631[0]
  i630.m_Frequency = i631[1]
  i630.m_Angle = i631[2]
  return i630
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i633 = data
  i632.m_LowerTranslation = i633[0]
  i632.m_UpperTranslation = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i635 = data
  i634.name = i635[0]
  i634.width = i635[1]
  i634.height = i635[2]
  i634.mipmapCount = i635[3]
  i634.anisoLevel = i635[4]
  i634.filterMode = i635[5]
  i634.hdr = !!i635[6]
  i634.format = i635[7]
  i634.wrapMode = i635[8]
  i634.alphaIsTransparency = !!i635[9]
  i634.alphaSource = i635[10]
  i634.graphicsFormat = i635[11]
  i634.sRGBTexture = !!i635[12]
  i634.desiredColorSpace = i635[13]
  i634.wrapU = i635[14]
  i634.wrapV = i635[15]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i636 = root || new pc.UnityMaterial()
  var i637 = data
  i636.name = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'shader')
  i636.renderQueue = i637[3]
  i636.enableInstancing = !!i637[4]
  var i639 = i637[5]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i639[i + 0]) );
  }
  i636.floatParameters = i638
  var i641 = i637[6]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i641[i + 0]) );
  }
  i636.colorParameters = i640
  var i643 = i637[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i643[i + 0]) );
  }
  i636.vectorParameters = i642
  var i645 = i637[8]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i645[i + 0]) );
  }
  i636.textureParameters = i644
  var i647 = i637[9]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i647[i + 0]) );
  }
  i636.materialFlags = i646
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = new pc.Color(i655[1], i655[2], i655[3], i655[4])
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i659 = data
  i658.name = i659[0]
  i658.value = new pc.Vec4( i659[1], i659[2], i659[3], i659[4] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i663 = data
  i662.name = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'value')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i667 = data
  i666.name = i667[0]
  i666.enabled = !!i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i669 = data
  i668.name = i669[0]
  i668.halfPrecision = !!i669[1]
  i668.useSimplification = !!i669[2]
  i668.useUInt32IndexFormat = !!i669[3]
  i668.vertexCount = i669[4]
  i668.aabb = i669[5]
  var i671 = i669[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( !!i671[i + 0] );
  }
  i668.streams = i670
  i668.vertices = i669[7]
  var i673 = i669[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i673[i + 0]) );
  }
  i668.subMeshes = i672
  var i675 = i669[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 16) {
    i674.push( new pc.Mat4().setData(i675[i + 0], i675[i + 1], i675[i + 2], i675[i + 3],  i675[i + 4], i675[i + 5], i675[i + 6], i675[i + 7],  i675[i + 8], i675[i + 9], i675[i + 10], i675[i + 11],  i675[i + 12], i675[i + 13], i675[i + 14], i675[i + 15]) );
  }
  i668.bindposes = i674
  var i677 = i669[10]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i677[i + 0]) );
  }
  i668.blendShapes = i676
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i683 = data
  i682.triangles = i683[0]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i689 = data
  i688.name = i689[0]
  var i691 = i689[1]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i691[i + 0]) );
  }
  i688.frames = i690
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i693 = data
  i692.name = i693[0]
  i692.index = i693[1]
  i692.startup = !!i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i695 = data
  i694.aspect = i695[0]
  i694.orthographic = !!i695[1]
  i694.orthographicSize = i695[2]
  i694.backgroundColor = new pc.Color(i695[3], i695[4], i695[5], i695[6])
  i694.nearClipPlane = i695[7]
  i694.farClipPlane = i695[8]
  i694.fieldOfView = i695[9]
  i694.depth = i695[10]
  i694.clearFlags = i695[11]
  i694.cullingMask = i695[12]
  i694.rect = i695[13]
  request.r(i695[14], i695[15], 0, i694, 'targetTexture')
  i694.usePhysicalProperties = !!i695[16]
  i694.focalLength = i695[17]
  i694.sensorSize = new pc.Vec2( i695[18], i695[19] )
  i694.lensShift = new pc.Vec2( i695[20], i695[21] )
  i694.gateFit = i695[22]
  i694.commandBufferCount = i695[23]
  i694.cameraType = i695[24]
  i694.enabled = !!i695[25]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i697 = data
  i696.name = i697[0]
  i696.tagId = i697[1]
  i696.enabled = !!i697[2]
  i696.isStatic = !!i697[3]
  i696.layer = i697[4]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i699 = data
  i698.pivot = new pc.Vec2( i699[0], i699[1] )
  i698.anchorMin = new pc.Vec2( i699[2], i699[3] )
  i698.anchorMax = new pc.Vec2( i699[4], i699[5] )
  i698.sizeDelta = new pc.Vec2( i699[6], i699[7] )
  i698.anchoredPosition3D = new pc.Vec3( i699[8], i699[9], i699[10] )
  i698.rotation = new pc.Quat(i699[11], i699[12], i699[13], i699[14])
  i698.scale = new pc.Vec3( i699[15], i699[16], i699[17] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i701 = data
  i700.planeDistance = i701[0]
  i700.referencePixelsPerUnit = i701[1]
  i700.isFallbackOverlay = !!i701[2]
  i700.renderMode = i701[3]
  i700.renderOrder = i701[4]
  i700.sortingLayerName = i701[5]
  i700.sortingOrder = i701[6]
  i700.scaleFactor = i701[7]
  request.r(i701[8], i701[9], 0, i700, 'worldCamera')
  i700.overrideSorting = !!i701[10]
  i700.pixelPerfect = !!i701[11]
  i700.targetDisplay = i701[12]
  i700.overridePixelPerfect = !!i701[13]
  i700.enabled = !!i701[14]
  return i700
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i703 = data
  i702.m_UiScaleMode = i703[0]
  i702.m_ReferencePixelsPerUnit = i703[1]
  i702.m_ScaleFactor = i703[2]
  i702.m_ReferenceResolution = new pc.Vec2( i703[3], i703[4] )
  i702.m_ScreenMatchMode = i703[5]
  i702.m_MatchWidthOrHeight = i703[6]
  i702.m_PhysicalUnit = i703[7]
  i702.m_FallbackScreenDPI = i703[8]
  i702.m_DefaultSpriteDPI = i703[9]
  i702.m_DynamicPixelsPerUnit = i703[10]
  i702.m_PresetInfoIsWorld = !!i703[11]
  return i702
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i705 = data
  i704.m_IgnoreReversedGraphics = !!i705[0]
  i704.m_BlockingObjects = i705[1]
  i704.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i705[2] )
  return i704
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i706 = root || request.c( 'Playable.GameManager' )
  var i707 = data
  i706.EventCountdownEndGame = request.d('System.Action', i707[0], i706.EventCountdownEndGame)
  i706._totalEvent = i707[1]
  i706._maxEvent = i707[2]
  i706._endTime = i707[3]
  request.r(i707[4], i707[5], 0, i706, '_backgroundMusic')
  request.r(i707[6], i707[7], 0, i706, '_backgroundTexture')
  request.r(i707[8], i707[9], 0, i706, '_btnBlock')
  request.r(i707[10], i707[11], 0, i706, '_background')
  request.r(i707[12], i707[13], 0, i706, '_losePanel')
  request.r(i707[14], i707[15], 0, i706, '_winPanel')
  var i709 = i707[16]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706._vfxWin = i708
  request.r(i707[17], i707[18], 0, i706, '_progressFillImage')
  request.r(i707[19], i707[20], 0, i706, '_progressText')
  i706._progressTweenDuration = i707[21]
  request.r(i707[22], i707[23], 0, i706, '_timerFillImage')
  request.r(i707[24], i707[25], 0, i706, '_timerText')
  i706._timerPunchScale = i707[26]
  return i706
}

Deserializers["System.Action"] = function (request, data, root) {
  var i710 = root || request.c( 'System.Action' )
  var i711 = data
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i715 = data
  i714.cullTransparentMesh = !!i715[0]
  return i714
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Image' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Sprite')
  i716.m_Type = i717[2]
  i716.m_PreserveAspect = !!i717[3]
  i716.m_FillCenter = !!i717[4]
  i716.m_FillMethod = i717[5]
  i716.m_FillAmount = i717[6]
  i716.m_FillClockwise = !!i717[7]
  i716.m_FillOrigin = i717[8]
  i716.m_UseSpriteMesh = !!i717[9]
  i716.m_PixelsPerUnitMultiplier = i717[10]
  request.r(i717[11], i717[12], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[13]
  i716.m_Color = new pc.Color(i717[14], i717[15], i717[16], i717[17])
  i716.m_RaycastTarget = !!i717[18]
  i716.m_RaycastPadding = new pc.Vec4( i717[19], i717[20], i717[21], i717[22] )
  return i716
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_Texture')
  i718.m_UVRect = UnityEngine.Rect.MinMaxRect(i719[2], i719[3], i719[4], i719[5])
  request.r(i719[6], i719[7], 0, i718, 'm_Material')
  i718.m_Maskable = !!i719[8]
  i718.m_Color = new pc.Color(i719[9], i719[10], i719[11], i719[12])
  i718.m_RaycastTarget = !!i719[13]
  i718.m_RaycastPadding = new pc.Vec4( i719[14], i719[15], i719[16], i719[17] )
  return i718
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i721 = data
  i720.m_hasFontAssetChanged = !!i721[0]
  request.r(i721[1], i721[2], 0, i720, 'm_baseMaterial')
  i720.m_maskOffset = new pc.Vec4( i721[3], i721[4], i721[5], i721[6] )
  i720.m_text = i721[7]
  i720.m_isRightToLeft = !!i721[8]
  request.r(i721[9], i721[10], 0, i720, 'm_fontAsset')
  request.r(i721[11], i721[12], 0, i720, 'm_sharedMaterial')
  var i723 = i721[13]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.m_fontSharedMaterials = i722
  request.r(i721[14], i721[15], 0, i720, 'm_fontMaterial')
  var i725 = i721[16]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i720.m_fontMaterials = i724
  i720.m_fontColor32 = UnityEngine.Color32.ConstructColor(i721[17], i721[18], i721[19], i721[20])
  i720.m_fontColor = new pc.Color(i721[21], i721[22], i721[23], i721[24])
  i720.m_enableVertexGradient = !!i721[25]
  i720.m_colorMode = i721[26]
  i720.m_fontColorGradient = request.d('TMPro.VertexGradient', i721[27], i720.m_fontColorGradient)
  request.r(i721[28], i721[29], 0, i720, 'm_fontColorGradientPreset')
  request.r(i721[30], i721[31], 0, i720, 'm_spriteAsset')
  i720.m_tintAllSprites = !!i721[32]
  request.r(i721[33], i721[34], 0, i720, 'm_StyleSheet')
  i720.m_TextStyleHashCode = i721[35]
  i720.m_overrideHtmlColors = !!i721[36]
  i720.m_faceColor = UnityEngine.Color32.ConstructColor(i721[37], i721[38], i721[39], i721[40])
  i720.m_fontSize = i721[41]
  i720.m_fontSizeBase = i721[42]
  i720.m_fontWeight = i721[43]
  i720.m_enableAutoSizing = !!i721[44]
  i720.m_fontSizeMin = i721[45]
  i720.m_fontSizeMax = i721[46]
  i720.m_fontStyle = i721[47]
  i720.m_HorizontalAlignment = i721[48]
  i720.m_VerticalAlignment = i721[49]
  i720.m_textAlignment = i721[50]
  i720.m_characterSpacing = i721[51]
  i720.m_wordSpacing = i721[52]
  i720.m_lineSpacing = i721[53]
  i720.m_lineSpacingMax = i721[54]
  i720.m_paragraphSpacing = i721[55]
  i720.m_charWidthMaxAdj = i721[56]
  i720.m_TextWrappingMode = i721[57]
  i720.m_wordWrappingRatios = i721[58]
  i720.m_overflowMode = i721[59]
  request.r(i721[60], i721[61], 0, i720, 'm_linkedTextComponent')
  request.r(i721[62], i721[63], 0, i720, 'parentLinkedComponent')
  i720.m_enableKerning = !!i721[64]
  var i727 = i721[65]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(i727[i + 0]);
  }
  i720.m_ActiveFontFeatures = i726
  i720.m_enableExtraPadding = !!i721[66]
  i720.checkPaddingRequired = !!i721[67]
  i720.m_isRichText = !!i721[68]
  i720.m_parseCtrlCharacters = !!i721[69]
  i720.m_isOrthographic = !!i721[70]
  i720.m_isCullingEnabled = !!i721[71]
  i720.m_horizontalMapping = i721[72]
  i720.m_verticalMapping = i721[73]
  i720.m_uvLineOffset = i721[74]
  i720.m_geometrySortingOrder = i721[75]
  i720.m_IsTextObjectScaleStatic = !!i721[76]
  i720.m_VertexBufferAutoSizeReduction = !!i721[77]
  i720.m_useMaxVisibleDescender = !!i721[78]
  i720.m_pageToDisplay = i721[79]
  i720.m_margin = new pc.Vec4( i721[80], i721[81], i721[82], i721[83] )
  i720.m_isUsingLegacyAnimationComponent = !!i721[84]
  i720.m_isVolumetricText = !!i721[85]
  request.r(i721[86], i721[87], 0, i720, 'm_Material')
  i720.m_EmojiFallbackSupport = !!i721[88]
  i720.m_Maskable = !!i721[89]
  i720.m_Color = new pc.Color(i721[90], i721[91], i721[92], i721[93])
  i720.m_RaycastTarget = !!i721[94]
  i720.m_RaycastPadding = new pc.Vec4( i721[95], i721[96], i721[97], i721[98] )
  return i720
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i730 = root || request.c( 'TMPro.VertexGradient' )
  var i731 = data
  i730.topLeft = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.topRight = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.bottomLeft = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  i730.bottomRight = new pc.Color(i731[12], i731[13], i731[14], i731[15])
  return i730
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Button' )
  var i735 = data
  i734.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i735[0], i734.m_OnClick)
  i734.m_Navigation = request.d('UnityEngine.UI.Navigation', i735[1], i734.m_Navigation)
  i734.m_Transition = i735[2]
  i734.m_Colors = request.d('UnityEngine.UI.ColorBlock', i735[3], i734.m_Colors)
  i734.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i735[4], i734.m_SpriteState)
  i734.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i735[5], i734.m_AnimationTriggers)
  i734.m_Interactable = !!i735[6]
  request.r(i735[7], i735[8], 0, i734, 'm_TargetGraphic')
  return i734
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i737 = data
  i736.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i737[0], i736.m_PersistentCalls)
  return i736
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i739 = data
  var i741 = i739[0]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('UnityEngine.Events.PersistentCall', i741[i + 0]));
  }
  i738.m_Calls = i740
  return i738
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_Target')
  i744.m_TargetAssemblyTypeName = i745[2]
  i744.m_MethodName = i745[3]
  i744.m_Mode = i745[4]
  i744.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i745[5], i744.m_Arguments)
  i744.m_CallState = i745[6]
  return i744
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_ObjectArgument')
  i746.m_ObjectArgumentAssemblyTypeName = i747[2]
  i746.m_IntArgument = i747[3]
  i746.m_FloatArgument = i747[4]
  i746.m_StringArgument = i747[5]
  i746.m_BoolArgument = !!i747[6]
  return i746
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i749 = data
  i748.m_Mode = i749[0]
  i748.m_WrapAround = !!i749[1]
  request.r(i749[2], i749[3], 0, i748, 'm_SelectOnUp')
  request.r(i749[4], i749[5], 0, i748, 'm_SelectOnDown')
  request.r(i749[6], i749[7], 0, i748, 'm_SelectOnLeft')
  request.r(i749[8], i749[9], 0, i748, 'm_SelectOnRight')
  return i748
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i751 = data
  i750.m_NormalColor = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.m_HighlightedColor = new pc.Color(i751[4], i751[5], i751[6], i751[7])
  i750.m_PressedColor = new pc.Color(i751[8], i751[9], i751[10], i751[11])
  i750.m_SelectedColor = new pc.Color(i751[12], i751[13], i751[14], i751[15])
  i750.m_DisabledColor = new pc.Color(i751[16], i751[17], i751[18], i751[19])
  i750.m_ColorMultiplier = i751[20]
  i750.m_FadeDuration = i751[21]
  return i750
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_HighlightedSprite')
  request.r(i753[2], i753[3], 0, i752, 'm_PressedSprite')
  request.r(i753[4], i753[5], 0, i752, 'm_SelectedSprite')
  request.r(i753[6], i753[7], 0, i752, 'm_DisabledSprite')
  return i752
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i755 = data
  i754.m_NormalTrigger = i755[0]
  i754.m_HighlightedTrigger = i755[1]
  i754.m_PressedTrigger = i755[2]
  i754.m_SelectedTrigger = i755[3]
  i754.m_DisabledTrigger = i755[4]
  return i754
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Mask' )
  var i757 = data
  i756.m_ShowMaskGraphic = !!i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'clip')
  request.r(i759[2], i759[3], 0, i758, 'outputAudioMixerGroup')
  i758.playOnAwake = !!i759[4]
  i758.loop = !!i759[5]
  i758.time = i759[6]
  i758.volume = i759[7]
  i758.pitch = i759[8]
  i758.enabled = !!i759[9]
  return i758
}

Deserializers["GameController"] = function (request, data, root) {
  var i760 = root || request.c( 'GameController' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, '_tutorialHand')
  request.r(i761[2], i761[3], 0, i760, '_tutorialFrom')
  request.r(i761[4], i761[5], 0, i760, '_tutorialTo')
  i760._tutorialScaleDuration = i761[6]
  i760._tutorialMoveDuration = i761[7]
  i760._tutorialStartDelay = i761[8]
  var i763 = i761[9]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Target')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760._targets = i762
  return i760
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i766 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'skeletonDataAsset')
  request.r(i767[2], i767[3], 0, i766, 'additiveMaterial')
  request.r(i767[4], i767[5], 0, i766, 'multiplyMaterial')
  request.r(i767[6], i767[7], 0, i766, 'screenMaterial')
  i766.forceAdditiveMaterial = !!i767[8]
  i766.initialSkinName = i767[9]
  i766.initialFlipX = !!i767[10]
  i766.initialFlipY = !!i767[11]
  i766.startingAnimation = i767[12]
  i766.startingLoop = !!i767[13]
  i766.timeScale = i767[14]
  i766.freeze = !!i767[15]
  i766.layoutScaleMode = i767[16]
  i766.updateWhenInvisible = i767[17]
  i766.allowMultipleCanvasRenderers = !!i767[18]
  var i769 = i767[19]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i766.canvasRenderers = i768
  i766.enableSeparatorSlots = !!i767[20]
  i766.updateSeparatorPartLocation = !!i767[21]
  i766.updateSeparatorPartScale = !!i767[22]
  i766.disableMeshAssignmentOnOverride = !!i767[23]
  i766.m_SkeletonColor = new pc.Color(i767[24], i767[25], i767[26], i767[27])
  i766.referenceSize = new pc.Vec2( i767[28], i767[29] )
  i766.pivotOffset = new pc.Vec2( i767[30], i767[31] )
  i766.referenceScale = i767[32]
  i766.layoutScale = i767[33]
  i766.rectTransformSize = new pc.Vec2( i767[34], i767[35] )
  i766.editReferenceRect = !!i767[36]
  var i771 = i767[37]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.separatorSlotNames = i770
  var i773 = i767[38]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i766.separatorParts = i772
  i766.physicsPositionInheritanceFactor = new pc.Vec2( i767[39], i767[40] )
  i766.physicsRotationInheritanceFactor = i767[41]
  request.r(i767[42], i767[43], 0, i766, 'physicsMovementRelativeTo')
  i766.meshGenerator = request.d('Spine.Unity.MeshGenerator', i767[44], i766.meshGenerator)
  i766.updateTiming = i767[45]
  i766.unscaledTime = !!i767[46]
  request.r(i767[47], i767[48], 0, i766, 'm_Material')
  i766.m_Maskable = !!i767[49]
  i766.m_Color = new pc.Color(i767[50], i767[51], i767[52], i767[53])
  i766.m_RaycastTarget = !!i767[54]
  i766.m_RaycastPadding = new pc.Vec4( i767[55], i767[56], i767[57], i767[58] )
  return i766
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i780 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i781 = data
  i780.settings = request.d('Spine.Unity.MeshGenerator+Settings', i781[0], i780.settings)
  return i780
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i782 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i783 = data
  i782.useClipping = !!i783[0]
  i782.zSpacing = i783[1]
  i782.tintBlack = !!i783[2]
  i782.canvasGroupCompatible = !!i783[3]
  i782.pmaVertexColors = !!i783[4]
  i782.addNormals = !!i783[5]
  i782.calculateTangents = !!i783[6]
  i782.immutableTriangles = !!i783[7]
  return i782
}

Deserializers["Playable.Window"] = function (request, data, root) {
  var i784 = root || request.c( 'Playable.Window' )
  var i785 = data
  i784._animWindow = i785[0]
  i784._animGhost = i785[1]
  request.r(i785[2], i785[3], 0, i784, '_skeletonWindow')
  request.r(i785[4], i785[5], 0, i784, '_skeletonGhost')
  return i784
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i786 = root || request.c( 'SpineEventSoundPlayer' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'skeletonAnimation')
  request.r(i787[2], i787[3], 0, i786, 'skeletonGraphic')
  request.r(i787[4], i787[5], 0, i786, 'audioSource')
  var i789 = i787[6]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i786.audioClips = i788
  return i786
}

Deserializers["Girl"] = function (request, data, root) {
  var i792 = root || request.c( 'Girl' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, '_skeletonGraphic')
  i792._defaultAnimation = request.d('SpineAnimationData', i793[2], i792._defaultAnimation)
  return i792
}

Deserializers["SpineAnimationData"] = function (request, data, root) {
  var i794 = root || request.c( 'SpineAnimationData' )
  var i795 = data
  i794.animationName = i795[0]
  i794.loop = !!i795[1]
  return i794
}

Deserializers["Target"] = function (request, data, root) {
  var i796 = root || request.c( 'Target' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, '_skeletonGraphic')
  request.r(i797[2], i797[3], 0, i796, '_dropArea')
  var i799 = i797[4]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('Target+TargetReaction')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('Target+TargetReaction', i799[i + 0]));
  }
  i796._reactions = i798
  return i796
}

Deserializers["Target+TargetReaction"] = function (request, data, root) {
  var i802 = root || request.c( 'Target+TargetReaction' )
  var i803 = data
  i802.itemType = i803[0]
  var i805 = i803[1]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('SpineAnimationData', i805[i + 0]));
  }
  i802.animations = i804
  return i802
}

Deserializers["Item"] = function (request, data, root) {
  var i808 = root || request.c( 'Item' )
  var i809 = data
  i808._itemType = i809[0]
  request.r(i809[1], i809[2], 0, i808, '_normalVisual')
  request.r(i809[3], i809[4], 0, i808, '_activeVisual')
  request.r(i809[5], i809[6], 0, i808, '_girl')
  request.r(i809[7], i809[8], 0, i808, '_skeletonGraphic')
  var i811 = i809[9]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('SpineAnimationData', i811[i + 0]));
  }
  i808._girlAnimations = i810
  i808._girlSkinName = i809[10]
  i808._dropDetectionPadding = i809[11]
  request.r(i809[12], i809[13], 0, i808, '_dropSound')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i813 = data
  i812.m_Alpha = i813[0]
  i812.m_Interactable = !!i813[1]
  i812.m_BlocksRaycasts = !!i813[2]
  i812.m_IgnoreParentGroups = !!i813[3]
  i812.enabled = !!i813[4]
  return i812
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i815 = data
  i814.m_Spacing = i815[0]
  i814.m_ChildForceExpandWidth = !!i815[1]
  i814.m_ChildForceExpandHeight = !!i815[2]
  i814.m_ChildControlWidth = !!i815[3]
  i814.m_ChildControlHeight = !!i815[4]
  i814.m_ChildScaleWidth = !!i815[5]
  i814.m_ChildScaleHeight = !!i815[6]
  i814.m_ReverseArrangement = !!i815[7]
  i814.m_Padding = UnityEngine.RectOffset.FromPaddings(i815[8], i815[9], i815[10], i815[11])
  i814.m_ChildAlignment = i815[12]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i817 = data
  i816.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i817[0], i816.main)
  i816.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i817[1], i816.colorBySpeed)
  i816.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i817[2], i816.colorOverLifetime)
  i816.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i817[3], i816.emission)
  i816.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i817[4], i816.rotationBySpeed)
  i816.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i817[5], i816.rotationOverLifetime)
  i816.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i817[6], i816.shape)
  i816.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i817[7], i816.sizeBySpeed)
  i816.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i817[8], i816.sizeOverLifetime)
  i816.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i817[9], i816.textureSheetAnimation)
  i816.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i817[10], i816.velocityOverLifetime)
  i816.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i817[11], i816.noise)
  i816.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i817[12], i816.inheritVelocity)
  i816.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i817[13], i816.forceOverLifetime)
  i816.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i817[14], i816.limitVelocityOverLifetime)
  i816.useAutoRandomSeed = !!i817[15]
  i816.randomSeed = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemMain()
  var i819 = data
  i818.duration = i819[0]
  i818.loop = !!i819[1]
  i818.prewarm = !!i819[2]
  i818.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.startDelay)
  i818.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.startLifetime)
  i818.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[5], i818.startSpeed)
  i818.startSize3D = !!i819[6]
  i818.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[7], i818.startSizeX)
  i818.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.startSizeY)
  i818.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[9], i818.startSizeZ)
  i818.startRotation3D = !!i819[10]
  i818.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.startRotationX)
  i818.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[12], i818.startRotationY)
  i818.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[13], i818.startRotationZ)
  i818.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i819[14], i818.startColor)
  i818.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[15], i818.gravityModifier)
  i818.simulationSpace = i819[16]
  request.r(i819[17], i819[18], 0, i818, 'customSimulationSpace')
  i818.simulationSpeed = i819[19]
  i818.useUnscaledTime = !!i819[20]
  i818.scalingMode = i819[21]
  i818.playOnAwake = !!i819[22]
  i818.maxParticles = i819[23]
  i818.emitterVelocityMode = i819[24]
  i818.stopAction = i819[25]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i820 = root || new pc.MinMaxCurve()
  var i821 = data
  i820.mode = i821[0]
  i820.curveMin = new pc.AnimationCurve( { keys_flow: i821[1] } )
  i820.curveMax = new pc.AnimationCurve( { keys_flow: i821[2] } )
  i820.curveMultiplier = i821[3]
  i820.constantMin = i821[4]
  i820.constantMax = i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i822 = root || new pc.MinMaxGradient()
  var i823 = data
  i822.mode = i823[0]
  i822.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i823[1], i822.gradientMin)
  i822.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i823[2], i822.gradientMax)
  i822.colorMin = new pc.Color(i823[3], i823[4], i823[5], i823[6])
  i822.colorMax = new pc.Color(i823[7], i823[8], i823[9], i823[10])
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i825 = data
  i824.mode = i825[0]
  var i827 = i825[1]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i827[i + 0]) );
  }
  i824.colorKeys = i826
  var i829 = i825[2]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i829[i + 0]) );
  }
  i824.alphaKeys = i828
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemColorBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i831[1], i830.color)
  i830.range = new pc.Vec2( i831[2], i831[3] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i835 = data
  i834.color = new pc.Color(i835[0], i835[1], i835[2], i835[3])
  i834.time = i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i839 = data
  i838.alpha = i839[0]
  i838.time = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemColorOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i841[1], i840.color)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemEmitter()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.rateOverTime)
  i842.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.rateOverDistance)
  var i845 = i843[3]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i845[i + 0]) );
  }
  i842.bursts = i844
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemBurst()
  var i849 = data
  i848.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[0], i848.count)
  i848.cycleCount = i849[1]
  i848.minCount = i849[2]
  i848.maxCount = i849[3]
  i848.repeatInterval = i849[4]
  i848.time = i849[5]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemRotationBySpeed()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.x)
  i850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.y)
  i850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.z)
  i850.separateAxes = !!i851[4]
  i850.range = new pc.Vec2( i851[5], i851[6] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemRotationOverLifetime()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.x)
  i852.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.y)
  i852.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.z)
  i852.separateAxes = !!i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemShape()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.shapeType = i855[1]
  i854.randomDirectionAmount = i855[2]
  i854.sphericalDirectionAmount = i855[3]
  i854.randomPositionAmount = i855[4]
  i854.alignToDirection = !!i855[5]
  i854.radius = i855[6]
  i854.radiusMode = i855[7]
  i854.radiusSpread = i855[8]
  i854.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.radiusSpeed)
  i854.radiusThickness = i855[10]
  i854.angle = i855[11]
  i854.length = i855[12]
  i854.boxThickness = new pc.Vec3( i855[13], i855[14], i855[15] )
  i854.meshShapeType = i855[16]
  request.r(i855[17], i855[18], 0, i854, 'mesh')
  request.r(i855[19], i855[20], 0, i854, 'meshRenderer')
  request.r(i855[21], i855[22], 0, i854, 'skinnedMeshRenderer')
  i854.useMeshMaterialIndex = !!i855[23]
  i854.meshMaterialIndex = i855[24]
  i854.useMeshColors = !!i855[25]
  i854.normalOffset = i855[26]
  i854.arc = i855[27]
  i854.arcMode = i855[28]
  i854.arcSpread = i855[29]
  i854.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[30], i854.arcSpeed)
  i854.donutRadius = i855[31]
  i854.position = new pc.Vec3( i855[32], i855[33], i855[34] )
  i854.rotation = new pc.Vec3( i855[35], i855[36], i855[37] )
  i854.scale = new pc.Vec3( i855[38], i855[39], i855[40] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemSizeBySpeed()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[1], i856.x)
  i856.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.y)
  i856.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[3], i856.z)
  i856.separateAxes = !!i857[4]
  i856.range = new pc.Vec2( i857[5], i857[6] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemSizeOverLifetime()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.x)
  i858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.y)
  i858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.z)
  i858.separateAxes = !!i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.mode = i861[1]
  i860.animation = i861[2]
  i860.numTilesX = i861[3]
  i860.numTilesY = i861[4]
  i860.useRandomRow = !!i861[5]
  i860.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[6], i860.frameOverTime)
  i860.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[7], i860.startFrame)
  i860.cycleCount = i861[8]
  i860.rowIndex = i861[9]
  i860.flipU = i861[10]
  i860.flipV = i861[11]
  i860.spriteCount = i861[12]
  var i863 = i861[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.sprites = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[1], i866.x)
  i866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[2], i866.y)
  i866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[3], i866.z)
  i866.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[4], i866.radial)
  i866.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[5], i866.speedModifier)
  i866.space = i867[6]
  i866.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[7], i866.orbitalX)
  i866.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[8], i866.orbitalY)
  i866.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[9], i866.orbitalZ)
  i866.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[10], i866.orbitalOffsetX)
  i866.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[11], i866.orbitalOffsetY)
  i866.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[12], i866.orbitalOffsetZ)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemNoise()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.separateAxes = !!i869[1]
  i868.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.strengthX)
  i868.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.strengthY)
  i868.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[4], i868.strengthZ)
  i868.frequency = i869[5]
  i868.damping = !!i869[6]
  i868.octaveCount = i869[7]
  i868.octaveMultiplier = i869[8]
  i868.octaveScale = i869[9]
  i868.quality = i869[10]
  i868.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[11], i868.scrollSpeed)
  i868.scrollSpeedMultiplier = i869[12]
  i868.remapEnabled = !!i869[13]
  i868.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[14], i868.remapX)
  i868.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[15], i868.remapY)
  i868.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[16], i868.remapZ)
  i868.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[17], i868.positionAmount)
  i868.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[18], i868.rotationAmount)
  i868.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[19], i868.sizeAmount)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemInheritVelocity()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.mode = i871[1]
  i870.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.curve)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemForceOverLifetime()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[1], i872.x)
  i872.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[2], i872.y)
  i872.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[3], i872.z)
  i872.space = i873[4]
  i872.randomized = !!i873[5]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.limit)
  i874.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.limitX)
  i874.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.limitY)
  i874.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[4], i874.limitZ)
  i874.dampen = i875[5]
  i874.separateAxes = !!i875[6]
  i874.space = i875[7]
  i874.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[8], i874.drag)
  i874.multiplyDragByParticleSize = !!i875[9]
  i874.multiplyDragByParticleVelocity = !!i875[10]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'mesh')
  i876.meshCount = i877[2]
  i876.activeVertexStreamsCount = i877[3]
  i876.alignment = i877[4]
  i876.renderMode = i877[5]
  i876.sortMode = i877[6]
  i876.lengthScale = i877[7]
  i876.velocityScale = i877[8]
  i876.cameraVelocityScale = i877[9]
  i876.normalDirection = i877[10]
  i876.sortingFudge = i877[11]
  i876.minParticleSize = i877[12]
  i876.maxParticleSize = i877[13]
  i876.pivot = new pc.Vec3( i877[14], i877[15], i877[16] )
  request.r(i877[17], i877[18], 0, i876, 'trailMaterial')
  i876.applyActiveColorSpace = !!i877[19]
  i876.enabled = !!i877[20]
  request.r(i877[21], i877[22], 0, i876, 'sharedMaterial')
  var i879 = i877[23]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.sharedMaterials = i878
  i876.receiveShadows = !!i877[24]
  i876.shadowCastingMode = i877[25]
  i876.sortingLayerID = i877[26]
  i876.sortingOrder = i877[27]
  i876.lightmapIndex = i877[28]
  i876.lightmapSceneIndex = i877[29]
  i876.lightmapScaleOffset = new pc.Vec4( i877[30], i877[31], i877[32], i877[33] )
  i876.lightProbeUsage = i877[34]
  i876.reflectionProbeUsage = i877[35]
  return i876
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i880 = root || request.c( 'Playable.AudioManager' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('Playable.SoundData', i883[i + 0]));
  }
  i880._sounds = i882
  request.r(i881[1], i881[2], 0, i880, '_audioMusic')
  request.r(i881[3], i881[4], 0, i880, '_audioSound')
  return i880
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i886 = root || request.c( 'Playable.SoundData' )
  var i887 = data
  i886.Type = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'Clip')
  return i886
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_FirstSelected')
  i888.m_sendNavigationEvents = !!i889[2]
  i888.m_DragThreshold = i889[3]
  return i888
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i891 = data
  i890.m_HorizontalAxis = i891[0]
  i890.m_VerticalAxis = i891[1]
  i890.m_SubmitButton = i891[2]
  i890.m_CancelButton = i891[3]
  i890.m_InputActionsPerSecond = i891[4]
  i890.m_RepeatDelay = i891[5]
  i890.m_ForceModuleActive = !!i891[6]
  i890.m_SendPointerHoverToParent = !!i891[7]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i893 = data
  i892.ambientIntensity = i893[0]
  i892.reflectionIntensity = i893[1]
  i892.ambientMode = i893[2]
  i892.ambientLight = new pc.Color(i893[3], i893[4], i893[5], i893[6])
  i892.ambientSkyColor = new pc.Color(i893[7], i893[8], i893[9], i893[10])
  i892.ambientGroundColor = new pc.Color(i893[11], i893[12], i893[13], i893[14])
  i892.ambientEquatorColor = new pc.Color(i893[15], i893[16], i893[17], i893[18])
  i892.fogColor = new pc.Color(i893[19], i893[20], i893[21], i893[22])
  i892.fogEndDistance = i893[23]
  i892.fogStartDistance = i893[24]
  i892.fogDensity = i893[25]
  i892.fog = !!i893[26]
  request.r(i893[27], i893[28], 0, i892, 'skybox')
  i892.fogMode = i893[29]
  var i895 = i893[30]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i895[i + 0]) );
  }
  i892.lightmaps = i894
  i892.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i893[31], i892.lightProbes)
  i892.lightmapsMode = i893[32]
  i892.mixedBakeMode = i893[33]
  i892.environmentLightingMode = i893[34]
  i892.ambientProbe = new pc.SphericalHarmonicsL2(i893[35])
  request.r(i893[36], i893[37], 0, i892, 'customReflection')
  request.r(i893[38], i893[39], 0, i892, 'defaultReflection')
  i892.defaultReflectionMode = i893[40]
  i892.defaultReflectionResolution = i893[41]
  i892.sunLightObjectId = i893[42]
  i892.pixelLightCount = i893[43]
  i892.defaultReflectionHDR = !!i893[44]
  i892.hasLightDataAsset = !!i893[45]
  i892.hasManualGenerate = !!i893[46]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'lightmapColor')
  request.r(i899[2], i899[3], 0, i898, 'lightmapDirection')
  request.r(i899[4], i899[5], 0, i898, 'shadowMask')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i900 = root || new UnityEngine.LightProbes()
  var i901 = data
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i909 = data
  var i911 = i909[0]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i911[i + 0]));
  }
  i908.ShaderCompilationErrors = i910
  i908.name = i909[1]
  i908.guid = i909[2]
  var i913 = i909[3]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.shaderDefinedKeywords = i912
  var i915 = i909[4]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i915[i + 0]) );
  }
  i908.passes = i914
  var i917 = i909[5]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i917[i + 0]) );
  }
  i908.usePasses = i916
  var i919 = i909[6]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i919[i + 0]) );
  }
  i908.defaultParameterValues = i918
  request.r(i909[7], i909[8], 0, i908, 'unityFallbackShader')
  i908.readDepth = !!i909[9]
  i908.hasDepthOnlyPass = !!i909[10]
  i908.isCreatedByShaderGraph = !!i909[11]
  i908.disableBatching = !!i909[12]
  i908.compiled = !!i909[13]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i923 = data
  i922.shaderName = i923[0]
  i922.errorMessage = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i926 = root || new pc.UnityShaderPass()
  var i927 = data
  i926.id = i927[0]
  i926.subShaderIndex = i927[1]
  i926.name = i927[2]
  i926.passType = i927[3]
  i926.grabPassTextureName = i927[4]
  i926.usePass = !!i927[5]
  i926.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[6], i926.zTest)
  i926.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[7], i926.zWrite)
  i926.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[8], i926.culling)
  i926.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i927[9], i926.blending)
  i926.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i927[10], i926.alphaBlending)
  i926.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[11], i926.colorWriteMask)
  i926.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[12], i926.offsetUnits)
  i926.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[13], i926.offsetFactor)
  i926.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[14], i926.stencilRef)
  i926.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[15], i926.stencilReadMask)
  i926.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[16], i926.stencilWriteMask)
  i926.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[17], i926.stencilOp)
  i926.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[18], i926.stencilOpFront)
  i926.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[19], i926.stencilOpBack)
  var i929 = i927[20]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i929[i + 0]) );
  }
  i926.tags = i928
  var i931 = i927[21]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.passDefinedKeywords = i930
  var i933 = i927[22]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i933[i + 0]) );
  }
  i926.passDefinedKeywordGroups = i932
  var i935 = i927[23]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i935[i + 0]) );
  }
  i926.variants = i934
  var i937 = i927[24]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i937[i + 0]) );
  }
  i926.excludedVariants = i936
  i926.hasDepthReader = !!i927[25]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i939 = data
  i938.val = i939[0]
  i938.name = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i941 = data
  i940.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[0], i940.src)
  i940.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[1], i940.dst)
  i940.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[2], i940.op)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i943 = data
  i942.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[0], i942.pass)
  i942.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[1], i942.fail)
  i942.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[2], i942.zFail)
  i942.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[3], i942.comp)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i947 = data
  i946.name = i947[0]
  i946.value = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i951 = data
  var i953 = i951[0]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i950.keywords = i952
  i950.hasDiscard = !!i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i957 = data
  i956.passId = i957[0]
  i956.subShaderIndex = i957[1]
  var i959 = i957[2]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.vertexProgram = i957[3]
  i956.fragmentProgram = i957[4]
  i956.exportedForWebGl2 = !!i957[5]
  i956.readDepth = !!i957[6]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'shader')
  i962.pass = i963[2]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i967 = data
  i966.name = i967[0]
  i966.type = i967[1]
  i966.value = new pc.Vec4( i967[2], i967[3], i967[4], i967[5] )
  i966.textureValue = i967[6]
  i966.shaderPropertyFlag = i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i969 = data
  i968.name = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'texture')
  i968.aabb = i969[3]
  i968.vertices = i969[4]
  i968.triangles = i969[5]
  i968.textureRect = UnityEngine.Rect.MinMaxRect(i969[6], i969[7], i969[8], i969[9])
  i968.packedRect = UnityEngine.Rect.MinMaxRect(i969[10], i969[11], i969[12], i969[13])
  i968.border = new pc.Vec4( i969[14], i969[15], i969[16], i969[17] )
  i968.transparency = i969[18]
  i968.bounds = i969[19]
  i968.pixelsPerUnit = i969[20]
  i968.textureWidth = i969[21]
  i968.textureHeight = i969[22]
  i968.nativeSize = new pc.Vec2( i969[23], i969[24] )
  i968.pivot = new pc.Vec2( i969[25], i969[26] )
  i968.textureRectOffset = new pc.Vec2( i969[27], i969[28] )
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i971 = data
  i970.name = i971[0]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i973 = data
  i972.name = i973[0]
  i972.ascent = i973[1]
  i972.originalLineHeight = i973[2]
  i972.fontSize = i973[3]
  var i975 = i973[4]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i975[i + 0]) );
  }
  i972.characterInfo = i974
  request.r(i973[5], i973[6], 0, i972, 'texture')
  i972.originalFontSize = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i979 = data
  i978.index = i979[0]
  i978.advance = i979[1]
  i978.bearing = i979[2]
  i978.glyphWidth = i979[3]
  i978.glyphHeight = i979[4]
  i978.minX = i979[5]
  i978.maxX = i979[6]
  i978.minY = i979[7]
  i978.maxY = i979[8]
  i978.uvBottomLeftX = i979[9]
  i978.uvBottomLeftY = i979[10]
  i978.uvBottomRightX = i979[11]
  i978.uvBottomRightY = i979[12]
  i978.uvTopLeftX = i979[13]
  i978.uvTopLeftY = i979[14]
  i978.uvTopRightX = i979[15]
  i978.uvTopRightY = i979[16]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i981 = data
  i980.name = i981[0]
  i980.bytes64 = i981[1]
  i980.data = i981[2]
  return i980
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i983 = data
  i982.normalStyle = i983[0]
  i982.normalSpacingOffset = i983[1]
  i982.boldStyle = i983[2]
  i982.boldSpacing = i983[3]
  i982.italicStyle = i983[4]
  i982.tabSize = i983[5]
  request.r(i983[6], i983[7], 0, i982, 'atlas')
  i982.m_SourceFontFileGUID = i983[8]
  i982.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i983[9], i982.m_CreationSettings)
  request.r(i983[10], i983[11], 0, i982, 'm_SourceFontFile')
  i982.m_SourceFontFilePath = i983[12]
  i982.m_AtlasPopulationMode = i983[13]
  i982.InternalDynamicOS = !!i983[14]
  var i985 = i983[15]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('UnityEngine.TextCore.Glyph', i985[i + 0]));
  }
  i982.m_GlyphTable = i984
  var i987 = i983[16]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('TMPro.TMP_Character', i987[i + 0]));
  }
  i982.m_CharacterTable = i986
  var i989 = i983[17]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i982.m_AtlasTextures = i988
  i982.m_AtlasTextureIndex = i983[18]
  i982.m_IsMultiAtlasTexturesEnabled = !!i983[19]
  i982.m_GetFontFeatures = !!i983[20]
  i982.m_ClearDynamicDataOnBuild = !!i983[21]
  i982.m_AtlasWidth = i983[22]
  i982.m_AtlasHeight = i983[23]
  i982.m_AtlasPadding = i983[24]
  i982.m_AtlasRenderMode = i983[25]
  var i991 = i983[26]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('UnityEngine.TextCore.GlyphRect', i991[i + 0]));
  }
  i982.m_UsedGlyphRects = i990
  var i993 = i983[27]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('UnityEngine.TextCore.GlyphRect', i993[i + 0]));
  }
  i982.m_FreeGlyphRects = i992
  i982.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i983[28], i982.m_FontFeatureTable)
  i982.m_ShouldReimportFontFeatures = !!i983[29]
  var i995 = i983[30]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i982.m_FallbackFontAssetTable = i994
  var i997 = i983[31]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('TMPro.TMP_FontWeightPair', i997[i + 0]) );
  }
  i982.m_FontWeightTable = i996
  var i999 = i983[32]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('TMPro.TMP_FontWeightPair', i999[i + 0]) );
  }
  i982.fontWeights = i998
  i982.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i983[33], i982.m_fontInfo)
  var i1001 = i983[34]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Glyph', i1001[i + 0]));
  }
  i982.m_glyphInfoList = i1000
  i982.m_KerningTable = request.d('TMPro.KerningTable', i983[35], i982.m_KerningTable)
  var i1003 = i983[36]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i982.fallbackFontAssets = i1002
  i982.m_Version = i983[37]
  i982.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i983[38], i982.m_FaceInfo)
  request.r(i983[39], i983[40], 0, i982, 'm_Material')
  return i982
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1005 = data
  i1004.sourceFontFileName = i1005[0]
  i1004.sourceFontFileGUID = i1005[1]
  i1004.faceIndex = i1005[2]
  i1004.pointSizeSamplingMode = i1005[3]
  i1004.pointSize = i1005[4]
  i1004.padding = i1005[5]
  i1004.paddingMode = i1005[6]
  i1004.packingMode = i1005[7]
  i1004.atlasWidth = i1005[8]
  i1004.atlasHeight = i1005[9]
  i1004.characterSetSelectionMode = i1005[10]
  i1004.characterSequence = i1005[11]
  i1004.referencedFontAssetGUID = i1005[12]
  i1004.referencedTextAssetGUID = i1005[13]
  i1004.fontStyle = i1005[14]
  i1004.fontStyleModifier = i1005[15]
  i1004.renderMode = i1005[16]
  i1004.includeFontFeatures = !!i1005[17]
  return i1004
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1009 = data
  i1008.m_Index = i1009[0]
  i1008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1009[1], i1008.m_Metrics)
  i1008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1009[2], i1008.m_GlyphRect)
  i1008.m_Scale = i1009[3]
  i1008.m_AtlasIndex = i1009[4]
  i1008.m_ClassDefinitionType = i1009[5]
  return i1008
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1011 = data
  i1010.m_Width = i1011[0]
  i1010.m_Height = i1011[1]
  i1010.m_HorizontalBearingX = i1011[2]
  i1010.m_HorizontalBearingY = i1011[3]
  i1010.m_HorizontalAdvance = i1011[4]
  return i1010
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1013 = data
  i1012.m_X = i1013[0]
  i1012.m_Y = i1013[1]
  i1012.m_Width = i1013[2]
  i1012.m_Height = i1013[3]
  return i1012
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_Character' )
  var i1017 = data
  i1016.m_ElementType = i1017[0]
  i1016.m_Unicode = i1017[1]
  i1016.m_GlyphIndex = i1017[2]
  i1016.m_Scale = i1017[3]
  return i1016
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.MultipleSubstitutionRecord', i1025[i + 0]));
  }
  i1022.m_MultipleSubstitutionRecords = i1024
  var i1027 = i1023[1]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.LigatureSubstitutionRecord', i1027[i + 0]));
  }
  i1022.m_LigatureSubstitutionRecords = i1026
  var i1029 = i1023[2]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1029[i + 0]));
  }
  i1022.m_GlyphPairAdjustmentRecords = i1028
  var i1031 = i1023[3]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1031[i + 0]));
  }
  i1022.m_MarkToBaseAdjustmentRecords = i1030
  var i1033 = i1023[4]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1033[i + 0]));
  }
  i1022.m_MarkToMarkAdjustmentRecords = i1032
  return i1022
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1037 = data
  i1036.m_TargetGlyphID = i1037[0]
  i1036.m_SubstituteGlyphIDs = i1037[1]
  return i1036
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1041 = data
  i1040.m_ComponentGlyphIDs = i1041[0]
  i1040.m_LigatureGlyphID = i1041[1]
  return i1040
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1045 = data
  i1044.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1045[0], i1044.m_FirstAdjustmentRecord)
  i1044.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1045[1], i1044.m_SecondAdjustmentRecord)
  i1044.m_FeatureLookupFlags = i1045[2]
  return i1044
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1049 = data
  i1048.m_BaseGlyphID = i1049[0]
  i1048.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1049[1], i1048.m_BaseGlyphAnchorPoint)
  i1048.m_MarkGlyphID = i1049[2]
  i1048.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1049[3], i1048.m_MarkPositionAdjustment)
  return i1048
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1053 = data
  i1052.m_BaseMarkGlyphID = i1053[0]
  i1052.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1053[1], i1052.m_BaseMarkGlyphAnchorPoint)
  i1052.m_CombiningMarkGlyphID = i1053[2]
  i1052.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1053[3], i1052.m_CombiningMarkPositionAdjustment)
  return i1052
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'regularTypeface')
  request.r(i1059[2], i1059[3], 0, i1058, 'italicTypeface')
  return i1058
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1061 = data
  i1060.Name = i1061[0]
  i1060.PointSize = i1061[1]
  i1060.Scale = i1061[2]
  i1060.CharacterCount = i1061[3]
  i1060.LineHeight = i1061[4]
  i1060.Baseline = i1061[5]
  i1060.Ascender = i1061[6]
  i1060.CapHeight = i1061[7]
  i1060.Descender = i1061[8]
  i1060.CenterLine = i1061[9]
  i1060.SuperscriptOffset = i1061[10]
  i1060.SubscriptOffset = i1061[11]
  i1060.SubSize = i1061[12]
  i1060.Underline = i1061[13]
  i1060.UnderlineThickness = i1061[14]
  i1060.strikethrough = i1061[15]
  i1060.strikethroughThickness = i1061[16]
  i1060.TabWidth = i1061[17]
  i1060.Padding = i1061[18]
  i1060.AtlasWidth = i1061[19]
  i1060.AtlasHeight = i1061[20]
  return i1060
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1065 = data
  i1064.id = i1065[0]
  i1064.x = i1065[1]
  i1064.y = i1065[2]
  i1064.width = i1065[3]
  i1064.height = i1065[4]
  i1064.xOffset = i1065[5]
  i1064.yOffset = i1065[6]
  i1064.xAdvance = i1065[7]
  i1064.scale = i1065[8]
  return i1064
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.KerningTable' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.KerningPair', i1069[i + 0]));
  }
  i1066.kerningPairs = i1068
  return i1066
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.KerningPair' )
  var i1073 = data
  i1072.xOffset = i1073[0]
  i1072.m_FirstGlyph = i1073[1]
  i1072.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1073[2], i1072.m_FirstGlyphAdjustments)
  i1072.m_SecondGlyph = i1073[3]
  i1072.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1073[4], i1072.m_SecondGlyphAdjustments)
  i1072.m_IgnoreSpacingAdjustments = !!i1073[5]
  return i1072
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1075 = data
  i1074.m_FaceIndex = i1075[0]
  i1074.m_FamilyName = i1075[1]
  i1074.m_StyleName = i1075[2]
  i1074.m_PointSize = i1075[3]
  i1074.m_Scale = i1075[4]
  i1074.m_UnitsPerEM = i1075[5]
  i1074.m_LineHeight = i1075[6]
  i1074.m_AscentLine = i1075[7]
  i1074.m_CapLine = i1075[8]
  i1074.m_MeanLine = i1075[9]
  i1074.m_Baseline = i1075[10]
  i1074.m_DescentLine = i1075[11]
  i1074.m_SuperscriptOffset = i1075[12]
  i1074.m_SuperscriptSize = i1075[13]
  i1074.m_SubscriptOffset = i1075[14]
  i1074.m_SubscriptSize = i1075[15]
  i1074.m_UnderlineOffset = i1075[16]
  i1074.m_UnderlineThickness = i1075[17]
  i1074.m_StrikethroughOffset = i1075[18]
  i1074.m_StrikethroughThickness = i1075[19]
  i1074.m_TabWidth = i1075[20]
  return i1074
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1076 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.atlasAssets = i1078
  i1076.scale = i1077[1]
  request.r(i1077[2], i1077[3], 0, i1076, 'skeletonJSON')
  i1076.isUpgradingBlendModeMaterials = !!i1077[4]
  i1076.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1077[5], i1076.blendModeMaterials)
  var i1081 = i1077[6]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1076.skeletonDataModifiers = i1080
  var i1083 = i1077[7]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1076.fromAnimation = i1082
  var i1085 = i1077[8]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1076.toAnimation = i1084
  i1076.duration = i1077[9]
  i1076.defaultMix = i1077[10]
  request.r(i1077[11], i1077[12], 0, i1076, 'controller')
  return i1076
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1088 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1089 = data
  i1088.applyAdditiveMaterial = !!i1089[0]
  var i1091 = i1089[1]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1091[i + 0]));
  }
  i1088.additiveMaterials = i1090
  var i1093 = i1089[2]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1093[i + 0]));
  }
  i1088.multiplyMaterials = i1092
  var i1095 = i1089[3]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1095[i + 0]));
  }
  i1088.screenMaterials = i1094
  i1088.requiresBlendModeMaterials = !!i1089[4]
  return i1088
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1098 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1099 = data
  i1098.pageName = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'material')
  return i1098
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1102 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'atlasFile')
  var i1105 = i1103[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.materials = i1104
  i1102.textureLoadingMode = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'onDemandTextureLoader')
  return i1102
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1107 = data
  i1106.useSafeMode = !!i1107[0]
  i1106.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1107[1], i1106.safeModeOptions)
  i1106.timeScale = i1107[2]
  i1106.unscaledTimeScale = i1107[3]
  i1106.useSmoothDeltaTime = !!i1107[4]
  i1106.maxSmoothUnscaledTime = i1107[5]
  i1106.rewindCallbackMode = i1107[6]
  i1106.showUnityEditorReport = !!i1107[7]
  i1106.logBehaviour = i1107[8]
  i1106.drawGizmos = !!i1107[9]
  i1106.defaultRecyclable = !!i1107[10]
  i1106.defaultAutoPlay = i1107[11]
  i1106.defaultUpdateType = i1107[12]
  i1106.defaultTimeScaleIndependent = !!i1107[13]
  i1106.defaultEaseType = i1107[14]
  i1106.defaultEaseOvershootOrAmplitude = i1107[15]
  i1106.defaultEasePeriod = i1107[16]
  i1106.defaultAutoKill = !!i1107[17]
  i1106.defaultLoopType = i1107[18]
  i1106.debugMode = !!i1107[19]
  i1106.debugStoreTargetId = !!i1107[20]
  i1106.showPreviewPanel = !!i1107[21]
  i1106.storeSettingsLocation = i1107[22]
  i1106.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1107[23], i1106.modules)
  i1106.createASMDEF = !!i1107[24]
  i1106.showPlayingTweens = !!i1107[25]
  i1106.showPausedTweens = !!i1107[26]
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1109 = data
  i1108.logBehaviour = i1109[0]
  i1108.nestedTweenFailureBehaviour = i1109[1]
  return i1108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1111 = data
  i1110.showPanel = !!i1111[0]
  i1110.audioEnabled = !!i1111[1]
  i1110.physicsEnabled = !!i1111[2]
  i1110.physics2DEnabled = !!i1111[3]
  i1110.spriteEnabled = !!i1111[4]
  i1110.uiEnabled = !!i1111[5]
  i1110.uiToolkitEnabled = !!i1111[6]
  i1110.textMeshProEnabled = !!i1111[7]
  i1110.tk2DEnabled = !!i1111[8]
  i1110.deAudioEnabled = !!i1111[9]
  i1110.deUnityExtendedEnabled = !!i1111[10]
  i1110.epoOutlineEnabled = !!i1111[11]
  return i1110
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_Settings' )
  var i1113 = data
  i1112.assetVersion = i1113[0]
  i1112.m_TextWrappingMode = i1113[1]
  i1112.m_enableKerning = !!i1113[2]
  var i1115 = i1113[3]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(i1115[i + 0]);
  }
  i1112.m_ActiveFontFeatures = i1114
  i1112.m_enableExtraPadding = !!i1113[4]
  i1112.m_enableTintAllSprites = !!i1113[5]
  i1112.m_enableParseEscapeCharacters = !!i1113[6]
  i1112.m_EnableRaycastTarget = !!i1113[7]
  i1112.m_GetFontFeaturesAtRuntime = !!i1113[8]
  i1112.m_missingGlyphCharacter = i1113[9]
  i1112.m_ClearDynamicDataOnBuild = !!i1113[10]
  i1112.m_warningsDisabled = !!i1113[11]
  request.r(i1113[12], i1113[13], 0, i1112, 'm_defaultFontAsset')
  i1112.m_defaultFontAssetPath = i1113[14]
  i1112.m_defaultFontSize = i1113[15]
  i1112.m_defaultAutoSizeMinRatio = i1113[16]
  i1112.m_defaultAutoSizeMaxRatio = i1113[17]
  i1112.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1113[18], i1113[19] )
  i1112.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1113[20], i1113[21] )
  i1112.m_autoSizeTextContainer = !!i1113[22]
  i1112.m_IsTextObjectScaleStatic = !!i1113[23]
  var i1117 = i1113[24]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1112.m_fallbackFontAssets = i1116
  i1112.m_matchMaterialPreset = !!i1113[25]
  i1112.m_HideSubTextObjects = !!i1113[26]
  request.r(i1113[27], i1113[28], 0, i1112, 'm_defaultSpriteAsset')
  i1112.m_defaultSpriteAssetPath = i1113[29]
  i1112.m_enableEmojiSupport = !!i1113[30]
  i1112.m_MissingCharacterSpriteUnicode = i1113[31]
  var i1119 = i1113[32]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1112.m_EmojiFallbackTextAssets = i1118
  i1112.m_defaultColorGradientPresetsPath = i1113[33]
  request.r(i1113[34], i1113[35], 0, i1112, 'm_defaultStyleSheet')
  i1112.m_StyleSheetsResourcePath = i1113[36]
  request.r(i1113[37], i1113[38], 0, i1112, 'm_leadingCharacters')
  request.r(i1113[39], i1113[40], 0, i1112, 'm_followingCharacters')
  i1112.m_UseModernHangulLineBreakingRules = !!i1113[41]
  return i1112
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1123 = data
  i1122.m_GlyphIndex = i1123[0]
  i1122.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1123[1], i1122.m_GlyphValueRecord)
  return i1122
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1125 = data
  i1124.m_XPlacement = i1125[0]
  i1124.m_YPlacement = i1125[1]
  i1124.m_XAdvance = i1125[2]
  i1124.m_YAdvance = i1125[3]
  return i1124
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'spriteSheet')
  var i1129 = i1127[2]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.TMP_Sprite', i1129[i + 0]));
  }
  i1126.spriteInfoList = i1128
  var i1131 = i1127[3]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1126.fallbackSpriteAssets = i1130
  var i1133 = i1127[4]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('TMPro.TMP_SpriteCharacter', i1133[i + 0]));
  }
  i1126.m_SpriteCharacterTable = i1132
  var i1135 = i1127[5]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.TMP_SpriteGlyph', i1135[i + 0]));
  }
  i1126.m_GlyphTable = i1134
  i1126.m_Version = i1127[6]
  i1126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1127[7], i1126.m_FaceInfo)
  request.r(i1127[8], i1127[9], 0, i1126, 'm_Material')
  return i1126
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.hashCode = i1139[1]
  i1138.unicode = i1139[2]
  i1138.pivot = new pc.Vec2( i1139[3], i1139[4] )
  request.r(i1139[5], i1139[6], 0, i1138, 'sprite')
  i1138.id = i1139[7]
  i1138.x = i1139[8]
  i1138.y = i1139[9]
  i1138.width = i1139[10]
  i1138.height = i1139[11]
  i1138.xOffset = i1139[12]
  i1138.yOffset = i1139[13]
  i1138.xAdvance = i1139[14]
  i1138.scale = i1139[15]
  return i1138
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1145 = data
  i1144.m_Name = i1145[0]
  i1144.m_ElementType = i1145[1]
  i1144.m_Unicode = i1145[2]
  i1144.m_GlyphIndex = i1145[3]
  i1144.m_Scale = i1145[4]
  return i1144
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'sprite')
  i1148.m_Index = i1149[2]
  i1148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1149[3], i1148.m_Metrics)
  i1148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1149[4], i1148.m_GlyphRect)
  i1148.m_Scale = i1149[5]
  i1148.m_AtlasIndex = i1149[6]
  i1148.m_ClassDefinitionType = i1149[7]
  return i1148
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.TMP_Style', i1153[i + 0]));
  }
  i1150.m_StyleList = i1152
  return i1150
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Style' )
  var i1157 = data
  i1156.m_Name = i1157[0]
  i1156.m_HashCode = i1157[1]
  i1156.m_OpeningDefinition = i1157[2]
  i1156.m_ClosingDefinition = i1157[3]
  i1156.m_OpeningTagArray = i1157[4]
  i1156.m_ClosingTagArray = i1157[5]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1161[i + 0]) );
  }
  i1158.files = i1160
  i1158.componentToPrefabIds = i1159[1]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1165 = data
  i1164.path = i1165[0]
  request.r(i1165[1], i1165[2], 0, i1164, 'unityObject')
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1169[i + 0]) );
  }
  i1166.scriptsExecutionOrder = i1168
  var i1171 = i1167[1]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1171[i + 0]) );
  }
  i1166.sortingLayers = i1170
  var i1173 = i1167[2]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1173[i + 0]) );
  }
  i1166.cullingLayers = i1172
  i1166.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1167[3], i1166.timeSettings)
  i1166.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1167[4], i1166.physicsSettings)
  i1166.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1167[5], i1166.physics2DSettings)
  i1166.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1167[6], i1166.qualitySettings)
  i1166.enableRealtimeShadows = !!i1167[7]
  i1166.enableAutoInstancing = !!i1167[8]
  i1166.enableStaticBatching = !!i1167[9]
  i1166.enableDynamicBatching = !!i1167[10]
  i1166.usePreservativeDynamicBatching = !!i1167[11]
  i1166.lightmapEncodingQuality = i1167[12]
  i1166.desiredColorSpace = i1167[13]
  var i1175 = i1167[14]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1166.allTags = i1174
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.value = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  i1182.value = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1189 = data
  i1188.fixedDeltaTime = i1189[0]
  i1188.maximumDeltaTime = i1189[1]
  i1188.timeScale = i1189[2]
  i1188.maximumParticleTimestep = i1189[3]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1191 = data
  i1190.gravity = new pc.Vec3( i1191[0], i1191[1], i1191[2] )
  i1190.defaultSolverIterations = i1191[3]
  i1190.bounceThreshold = i1191[4]
  i1190.autoSyncTransforms = !!i1191[5]
  i1190.autoSimulation = !!i1191[6]
  var i1193 = i1191[7]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'material')
  i1198.gravity = new pc.Vec2( i1199[2], i1199[3] )
  i1198.positionIterations = i1199[4]
  i1198.velocityIterations = i1199[5]
  i1198.velocityThreshold = i1199[6]
  i1198.maxLinearCorrection = i1199[7]
  i1198.maxAngularCorrection = i1199[8]
  i1198.maxTranslationSpeed = i1199[9]
  i1198.maxRotationSpeed = i1199[10]
  i1198.baumgarteScale = i1199[11]
  i1198.baumgarteTOIScale = i1199[12]
  i1198.timeToSleep = i1199[13]
  i1198.linearSleepTolerance = i1199[14]
  i1198.angularSleepTolerance = i1199[15]
  i1198.defaultContactOffset = i1199[16]
  i1198.autoSimulation = !!i1199[17]
  i1198.queriesHitTriggers = !!i1199[18]
  i1198.queriesStartInColliders = !!i1199[19]
  i1198.callbacksOnDisable = !!i1199[20]
  i1198.reuseCollisionCallbacks = !!i1199[21]
  i1198.autoSyncTransforms = !!i1199[22]
  var i1201 = i1199[23]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1201[i + 0]) );
  }
  i1198.collisionMatrix = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1205 = data
  i1204.enabled = !!i1205[0]
  i1204.layerId = i1205[1]
  i1204.otherLayerId = i1205[2]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1209[i + 0]) );
  }
  i1206.qualityLevels = i1208
  var i1211 = i1207[1]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( i1211[i + 0] );
  }
  i1206.names = i1210
  i1206.shadows = i1207[2]
  i1206.anisotropicFiltering = i1207[3]
  i1206.antiAliasing = i1207[4]
  i1206.lodBias = i1207[5]
  i1206.shadowCascades = i1207[6]
  i1206.shadowDistance = i1207[7]
  i1206.shadowmaskMode = i1207[8]
  i1206.shadowProjection = i1207[9]
  i1206.shadowResolution = i1207[10]
  i1206.softParticles = !!i1207[11]
  i1206.softVegetation = !!i1207[12]
  i1206.activeColorSpace = i1207[13]
  i1206.desiredColorSpace = i1207[14]
  i1206.masterTextureLimit = i1207[15]
  i1206.maxQueuedFrames = i1207[16]
  i1206.particleRaycastBudget = i1207[17]
  i1206.pixelLightCount = i1207[18]
  i1206.realtimeReflectionProbes = !!i1207[19]
  i1206.shadowCascade2Split = i1207[20]
  i1206.shadowCascade4Split = new pc.Vec3( i1207[21], i1207[22], i1207[23] )
  i1206.streamingMipmapsActive = !!i1207[24]
  i1206.vSyncCount = i1207[25]
  i1206.asyncUploadBufferSize = i1207[26]
  i1206.asyncUploadTimeSlice = i1207[27]
  i1206.billboardsFaceCameraPosition = !!i1207[28]
  i1206.shadowNearPlaneOffset = i1207[29]
  i1206.streamingMipmapsMemoryBudget = i1207[30]
  i1206.maximumLODLevel = i1207[31]
  i1206.streamingMipmapsAddAllCameras = !!i1207[32]
  i1206.streamingMipmapsMaxLevelReduction = i1207[33]
  i1206.streamingMipmapsRenderersPerFrame = i1207[34]
  i1206.resolutionScalingFixedDPIFactor = i1207[35]
  i1206.streamingMipmapsMaxFileIORequests = i1207[36]
  i1206.currentQualityLevel = i1207[37]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1217 = data
  i1216.weight = i1217[0]
  i1216.vertices = i1217[1]
  i1216.normals = i1217[2]
  i1216.tangents = i1217[3]
  return i1216
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1219 = data
  i1218.m_XCoordinate = i1219[0]
  i1218.m_YCoordinate = i1219[1]
  return i1218
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1221 = data
  i1220.m_XPositionAdjustment = i1221[0]
  i1220.m_YPositionAdjustment = i1221[1]
  return i1220
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1223 = data
  i1222.xPlacement = i1223[0]
  i1222.yPlacement = i1223[1]
  i1222.xAdvance = i1223[2]
  i1222.yAdvance = i1223[3]
  return i1222
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[2],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[2],"78":[79],"80":[81],"82":[81],"5":[4],"29":[23],"31":[4],"83":[84],"85":[4],"86":[17,4],"87":[79],"26":[17,4],"88":[89,79],"90":[79],"91":[79,92],"93":[57],"94":[64],"95":[84],"96":[97],"98":[99],"100":[37],"101":[5],"102":[4],"103":[79,4],"16":[4,17],"104":[4],"105":[17,4],"106":[79],"107":[17,4],"108":[4],"109":[110],"111":[110],"112":[110],"113":[4],"114":[4],"8":[5],"13":[17,4],"115":[4],"7":[5],"116":[4],"117":[4],"33":[4],"118":[4],"119":[4],"120":[4],"121":[4],"22":[4],"122":[4],"18":[17,4],"123":[4],"124":[4],"125":[4],"126":[4],"127":[17,4],"128":[4],"129":[37],"130":[37],"38":[37],"131":[37],"132":[2],"133":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.ParticleSystem","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","GameController","Target","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Window","SpineEventSoundPlayer","Girl","Item","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "42.9";

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

Deserializers.buildID = "43ed5fa6-8907-4cfd-b2f9-e62bc976f076";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

