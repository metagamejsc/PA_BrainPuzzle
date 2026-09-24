var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.JointSpring' )
  var i1513 = data
  i1512.spring = i1513[0]
  i1512.damper = i1513[1]
  i1512.targetPosition = i1513[2]
  return i1512
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.JointMotor' )
  var i1515 = data
  i1514.m_TargetVelocity = i1515[0]
  i1514.m_Force = i1515[1]
  i1514.m_FreeSpin = i1515[2]
  return i1514
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.JointLimits' )
  var i1517 = data
  i1516.m_Min = i1517[0]
  i1516.m_Max = i1517[1]
  i1516.m_Bounciness = i1517[2]
  i1516.m_BounceMinVelocity = i1517[3]
  i1516.m_ContactDistance = i1517[4]
  i1516.minBounce = i1517[5]
  i1516.maxBounce = i1517[6]
  return i1516
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.JointDrive' )
  var i1519 = data
  i1518.m_PositionSpring = i1519[0]
  i1518.m_PositionDamper = i1519[1]
  i1518.m_MaximumForce = i1519[2]
  i1518.m_UseAcceleration = i1519[3]
  return i1518
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1521 = data
  i1520.m_Spring = i1521[0]
  i1520.m_Damper = i1521[1]
  return i1520
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1523 = data
  i1522.m_Limit = i1523[0]
  i1522.m_Bounciness = i1523[1]
  i1522.m_ContactDistance = i1523[2]
  return i1522
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1525 = data
  i1524.m_ExtremumSlip = i1525[0]
  i1524.m_ExtremumValue = i1525[1]
  i1524.m_AsymptoteSlip = i1525[2]
  i1524.m_AsymptoteValue = i1525[3]
  i1524.m_Stiffness = i1525[4]
  return i1524
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1527 = data
  i1526.m_LowerAngle = i1527[0]
  i1526.m_UpperAngle = i1527[1]
  return i1526
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1529 = data
  i1528.m_MotorSpeed = i1529[0]
  i1528.m_MaximumMotorTorque = i1529[1]
  return i1528
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1531 = data
  i1530.m_DampingRatio = i1531[0]
  i1530.m_Frequency = i1531[1]
  i1530.m_Angle = i1531[2]
  return i1530
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1533 = data
  i1532.m_LowerTranslation = i1533[0]
  i1532.m_UpperTranslation = i1533[1]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.width = i1535[1]
  i1534.height = i1535[2]
  i1534.mipmapCount = i1535[3]
  i1534.anisoLevel = i1535[4]
  i1534.filterMode = i1535[5]
  i1534.hdr = !!i1535[6]
  i1534.format = i1535[7]
  i1534.wrapMode = i1535[8]
  i1534.alphaIsTransparency = !!i1535[9]
  i1534.alphaSource = i1535[10]
  i1534.graphicsFormat = i1535[11]
  i1534.sRGBTexture = !!i1535[12]
  i1534.desiredColorSpace = i1535[13]
  i1534.wrapU = i1535[14]
  i1534.wrapV = i1535[15]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1536 = root || new pc.UnityMaterial()
  var i1537 = data
  i1536.name = i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'shader')
  i1536.renderQueue = i1537[3]
  i1536.enableInstancing = !!i1537[4]
  var i1539 = i1537[5]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1539[i + 0]) );
  }
  i1536.floatParameters = i1538
  var i1541 = i1537[6]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1541[i + 0]) );
  }
  i1536.colorParameters = i1540
  var i1543 = i1537[7]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1543[i + 0]) );
  }
  i1536.vectorParameters = i1542
  var i1545 = i1537[8]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1545[i + 0]) );
  }
  i1536.textureParameters = i1544
  var i1547 = i1537[9]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1547[i + 0]) );
  }
  i1536.materialFlags = i1546
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.value = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1555 = data
  i1554.name = i1555[0]
  i1554.value = new pc.Color(i1555[1], i1555[2], i1555[3], i1555[4])
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.value = new pc.Vec4( i1559[1], i1559[2], i1559[3], i1559[4] )
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1563 = data
  i1562.name = i1563[0]
  request.r(i1563[1], i1563[2], 0, i1562, 'value')
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.enabled = !!i1567[1]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1569 = data
  i1568.name = i1569[0]
  i1568.index = i1569[1]
  i1568.startup = !!i1569[2]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1571 = data
  i1570.aspect = i1571[0]
  i1570.orthographic = !!i1571[1]
  i1570.orthographicSize = i1571[2]
  i1570.backgroundColor = new pc.Color(i1571[3], i1571[4], i1571[5], i1571[6])
  i1570.nearClipPlane = i1571[7]
  i1570.farClipPlane = i1571[8]
  i1570.fieldOfView = i1571[9]
  i1570.depth = i1571[10]
  i1570.clearFlags = i1571[11]
  i1570.cullingMask = i1571[12]
  i1570.rect = i1571[13]
  request.r(i1571[14], i1571[15], 0, i1570, 'targetTexture')
  i1570.usePhysicalProperties = !!i1571[16]
  i1570.focalLength = i1571[17]
  i1570.sensorSize = new pc.Vec2( i1571[18], i1571[19] )
  i1570.lensShift = new pc.Vec2( i1571[20], i1571[21] )
  i1570.gateFit = i1571[22]
  i1570.commandBufferCount = i1571[23]
  i1570.cameraType = i1571[24]
  i1570.enabled = !!i1571[25]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1573 = data
  i1572.name = i1573[0]
  i1572.tagId = i1573[1]
  i1572.enabled = !!i1573[2]
  i1572.isStatic = !!i1573[3]
  i1572.layer = i1573[4]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1575 = data
  i1574.pivot = new pc.Vec2( i1575[0], i1575[1] )
  i1574.anchorMin = new pc.Vec2( i1575[2], i1575[3] )
  i1574.anchorMax = new pc.Vec2( i1575[4], i1575[5] )
  i1574.sizeDelta = new pc.Vec2( i1575[6], i1575[7] )
  i1574.anchoredPosition3D = new pc.Vec3( i1575[8], i1575[9], i1575[10] )
  i1574.rotation = new pc.Quat(i1575[11], i1575[12], i1575[13], i1575[14])
  i1574.scale = new pc.Vec3( i1575[15], i1575[16], i1575[17] )
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1577 = data
  i1576.planeDistance = i1577[0]
  i1576.referencePixelsPerUnit = i1577[1]
  i1576.isFallbackOverlay = !!i1577[2]
  i1576.renderMode = i1577[3]
  i1576.renderOrder = i1577[4]
  i1576.sortingLayerName = i1577[5]
  i1576.sortingOrder = i1577[6]
  i1576.scaleFactor = i1577[7]
  request.r(i1577[8], i1577[9], 0, i1576, 'worldCamera')
  i1576.overrideSorting = !!i1577[10]
  i1576.pixelPerfect = !!i1577[11]
  i1576.targetDisplay = i1577[12]
  i1576.overridePixelPerfect = !!i1577[13]
  i1576.enabled = !!i1577[14]
  return i1576
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1579 = data
  i1578.m_UiScaleMode = i1579[0]
  i1578.m_ReferencePixelsPerUnit = i1579[1]
  i1578.m_ScaleFactor = i1579[2]
  i1578.m_ReferenceResolution = new pc.Vec2( i1579[3], i1579[4] )
  i1578.m_ScreenMatchMode = i1579[5]
  i1578.m_MatchWidthOrHeight = i1579[6]
  i1578.m_PhysicalUnit = i1579[7]
  i1578.m_FallbackScreenDPI = i1579[8]
  i1578.m_DefaultSpriteDPI = i1579[9]
  i1578.m_DynamicPixelsPerUnit = i1579[10]
  i1578.m_PresetInfoIsWorld = !!i1579[11]
  return i1578
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1581 = data
  i1580.m_IgnoreReversedGraphics = !!i1581[0]
  i1580.m_BlockingObjects = i1581[1]
  i1580.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1581[2] )
  return i1580
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1582 = root || request.c( 'Playable.GameManager' )
  var i1583 = data
  i1582.EventCountdownEndGame = request.d('System.Action', i1583[0], i1582.EventCountdownEndGame)
  i1582._totalEvent = i1583[1]
  i1582._maxEvent = i1583[2]
  i1582._endTime = i1583[3]
  request.r(i1583[4], i1583[5], 0, i1582, '_backgroundMusic')
  request.r(i1583[6], i1583[7], 0, i1582, '_backgroundTexture')
  request.r(i1583[8], i1583[9], 0, i1582, '_btnBlock')
  request.r(i1583[10], i1583[11], 0, i1582, '_background')
  request.r(i1583[12], i1583[13], 0, i1582, '_progressFillImage')
  request.r(i1583[14], i1583[15], 0, i1582, '_progressText')
  i1582._progressTweenDuration = i1583[16]
  request.r(i1583[17], i1583[18], 0, i1582, '_timerFillImage')
  request.r(i1583[19], i1583[20], 0, i1582, '_timerText')
  i1582._timerPunchScale = i1583[21]
  return i1582
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1584 = root || request.c( 'System.Action' )
  var i1585 = data
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1587 = data
  i1586.cullTransparentMesh = !!i1587[0]
  return i1586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.UI.Image' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'm_Sprite')
  i1588.m_Type = i1589[2]
  i1588.m_PreserveAspect = !!i1589[3]
  i1588.m_FillCenter = !!i1589[4]
  i1588.m_FillMethod = i1589[5]
  i1588.m_FillAmount = i1589[6]
  i1588.m_FillClockwise = !!i1589[7]
  i1588.m_FillOrigin = i1589[8]
  i1588.m_UseSpriteMesh = !!i1589[9]
  i1588.m_PixelsPerUnitMultiplier = i1589[10]
  request.r(i1589[11], i1589[12], 0, i1588, 'm_Material')
  i1588.m_Maskable = !!i1589[13]
  i1588.m_Color = new pc.Color(i1589[14], i1589[15], i1589[16], i1589[17])
  i1588.m_RaycastTarget = !!i1589[18]
  i1588.m_RaycastPadding = new pc.Vec4( i1589[19], i1589[20], i1589[21], i1589[22] )
  return i1588
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'm_Texture')
  i1590.m_UVRect = UnityEngine.Rect.MinMaxRect(i1591[2], i1591[3], i1591[4], i1591[5])
  request.r(i1591[6], i1591[7], 0, i1590, 'm_Material')
  i1590.m_Maskable = !!i1591[8]
  i1590.m_Color = new pc.Color(i1591[9], i1591[10], i1591[11], i1591[12])
  i1590.m_RaycastTarget = !!i1591[13]
  i1590.m_RaycastPadding = new pc.Vec4( i1591[14], i1591[15], i1591[16], i1591[17] )
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'clip')
  request.r(i1593[2], i1593[3], 0, i1592, 'outputAudioMixerGroup')
  i1592.playOnAwake = !!i1593[4]
  i1592.loop = !!i1593[5]
  i1592.time = i1593[6]
  i1592.volume = i1593[7]
  i1592.pitch = i1593[8]
  i1592.enabled = !!i1593[9]
  return i1592
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1595 = data
  i1594.m_hasFontAssetChanged = !!i1595[0]
  request.r(i1595[1], i1595[2], 0, i1594, 'm_baseMaterial')
  i1594.m_maskOffset = new pc.Vec4( i1595[3], i1595[4], i1595[5], i1595[6] )
  i1594.m_text = i1595[7]
  i1594.m_isRightToLeft = !!i1595[8]
  request.r(i1595[9], i1595[10], 0, i1594, 'm_fontAsset')
  request.r(i1595[11], i1595[12], 0, i1594, 'm_sharedMaterial')
  var i1597 = i1595[13]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 2) {
  request.r(i1597[i + 0], i1597[i + 1], 2, i1596, '')
  }
  i1594.m_fontSharedMaterials = i1596
  request.r(i1595[14], i1595[15], 0, i1594, 'm_fontMaterial')
  var i1599 = i1595[16]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1594.m_fontMaterials = i1598
  i1594.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1595[17], i1595[18], i1595[19], i1595[20])
  i1594.m_fontColor = new pc.Color(i1595[21], i1595[22], i1595[23], i1595[24])
  i1594.m_enableVertexGradient = !!i1595[25]
  i1594.m_colorMode = i1595[26]
  i1594.m_fontColorGradient = request.d('TMPro.VertexGradient', i1595[27], i1594.m_fontColorGradient)
  request.r(i1595[28], i1595[29], 0, i1594, 'm_fontColorGradientPreset')
  request.r(i1595[30], i1595[31], 0, i1594, 'm_spriteAsset')
  i1594.m_tintAllSprites = !!i1595[32]
  request.r(i1595[33], i1595[34], 0, i1594, 'm_StyleSheet')
  i1594.m_TextStyleHashCode = i1595[35]
  i1594.m_overrideHtmlColors = !!i1595[36]
  i1594.m_faceColor = UnityEngine.Color32.ConstructColor(i1595[37], i1595[38], i1595[39], i1595[40])
  i1594.m_fontSize = i1595[41]
  i1594.m_fontSizeBase = i1595[42]
  i1594.m_fontWeight = i1595[43]
  i1594.m_enableAutoSizing = !!i1595[44]
  i1594.m_fontSizeMin = i1595[45]
  i1594.m_fontSizeMax = i1595[46]
  i1594.m_fontStyle = i1595[47]
  i1594.m_HorizontalAlignment = i1595[48]
  i1594.m_VerticalAlignment = i1595[49]
  i1594.m_textAlignment = i1595[50]
  i1594.m_characterSpacing = i1595[51]
  i1594.m_wordSpacing = i1595[52]
  i1594.m_lineSpacing = i1595[53]
  i1594.m_lineSpacingMax = i1595[54]
  i1594.m_paragraphSpacing = i1595[55]
  i1594.m_charWidthMaxAdj = i1595[56]
  i1594.m_TextWrappingMode = i1595[57]
  i1594.m_wordWrappingRatios = i1595[58]
  i1594.m_overflowMode = i1595[59]
  request.r(i1595[60], i1595[61], 0, i1594, 'm_linkedTextComponent')
  request.r(i1595[62], i1595[63], 0, i1594, 'parentLinkedComponent')
  i1594.m_enableKerning = !!i1595[64]
  var i1601 = i1595[65]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(i1601[i + 0]);
  }
  i1594.m_ActiveFontFeatures = i1600
  i1594.m_enableExtraPadding = !!i1595[66]
  i1594.checkPaddingRequired = !!i1595[67]
  i1594.m_isRichText = !!i1595[68]
  i1594.m_parseCtrlCharacters = !!i1595[69]
  i1594.m_isOrthographic = !!i1595[70]
  i1594.m_isCullingEnabled = !!i1595[71]
  i1594.m_horizontalMapping = i1595[72]
  i1594.m_verticalMapping = i1595[73]
  i1594.m_uvLineOffset = i1595[74]
  i1594.m_geometrySortingOrder = i1595[75]
  i1594.m_IsTextObjectScaleStatic = !!i1595[76]
  i1594.m_VertexBufferAutoSizeReduction = !!i1595[77]
  i1594.m_useMaxVisibleDescender = !!i1595[78]
  i1594.m_pageToDisplay = i1595[79]
  i1594.m_margin = new pc.Vec4( i1595[80], i1595[81], i1595[82], i1595[83] )
  i1594.m_isUsingLegacyAnimationComponent = !!i1595[84]
  i1594.m_isVolumetricText = !!i1595[85]
  request.r(i1595[86], i1595[87], 0, i1594, 'm_Material')
  i1594.m_EmojiFallbackSupport = !!i1595[88]
  i1594.m_Maskable = !!i1595[89]
  i1594.m_Color = new pc.Color(i1595[90], i1595[91], i1595[92], i1595[93])
  i1594.m_RaycastTarget = !!i1595[94]
  i1594.m_RaycastPadding = new pc.Vec4( i1595[95], i1595[96], i1595[97], i1595[98] )
  return i1594
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.VertexGradient' )
  var i1605 = data
  i1604.topLeft = new pc.Color(i1605[0], i1605[1], i1605[2], i1605[3])
  i1604.topRight = new pc.Color(i1605[4], i1605[5], i1605[6], i1605[7])
  i1604.bottomLeft = new pc.Color(i1605[8], i1605[9], i1605[10], i1605[11])
  i1604.bottomRight = new pc.Color(i1605[12], i1605[13], i1605[14], i1605[15])
  return i1604
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.Button' )
  var i1609 = data
  i1608.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1609[0], i1608.m_OnClick)
  i1608.m_Navigation = request.d('UnityEngine.UI.Navigation', i1609[1], i1608.m_Navigation)
  i1608.m_Transition = i1609[2]
  i1608.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1609[3], i1608.m_Colors)
  i1608.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1609[4], i1608.m_SpriteState)
  i1608.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1609[5], i1608.m_AnimationTriggers)
  i1608.m_Interactable = !!i1609[6]
  request.r(i1609[7], i1609[8], 0, i1608, 'm_TargetGraphic')
  return i1608
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1611 = data
  i1610.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1611[0], i1610.m_PersistentCalls)
  return i1610
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.add(request.d('UnityEngine.Events.PersistentCall', i1615[i + 0]));
  }
  i1612.m_Calls = i1614
  return i1612
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_Target')
  i1618.m_TargetAssemblyTypeName = i1619[2]
  i1618.m_MethodName = i1619[3]
  i1618.m_Mode = i1619[4]
  i1618.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1619[5], i1618.m_Arguments)
  i1618.m_CallState = i1619[6]
  return i1618
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1621 = data
  i1620.m_Mode = i1621[0]
  i1620.m_WrapAround = !!i1621[1]
  request.r(i1621[2], i1621[3], 0, i1620, 'm_SelectOnUp')
  request.r(i1621[4], i1621[5], 0, i1620, 'm_SelectOnDown')
  request.r(i1621[6], i1621[7], 0, i1620, 'm_SelectOnLeft')
  request.r(i1621[8], i1621[9], 0, i1620, 'm_SelectOnRight')
  return i1620
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1623 = data
  i1622.m_NormalColor = new pc.Color(i1623[0], i1623[1], i1623[2], i1623[3])
  i1622.m_HighlightedColor = new pc.Color(i1623[4], i1623[5], i1623[6], i1623[7])
  i1622.m_PressedColor = new pc.Color(i1623[8], i1623[9], i1623[10], i1623[11])
  i1622.m_SelectedColor = new pc.Color(i1623[12], i1623[13], i1623[14], i1623[15])
  i1622.m_DisabledColor = new pc.Color(i1623[16], i1623[17], i1623[18], i1623[19])
  i1622.m_ColorMultiplier = i1623[20]
  i1622.m_FadeDuration = i1623[21]
  return i1622
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'm_HighlightedSprite')
  request.r(i1625[2], i1625[3], 0, i1624, 'm_PressedSprite')
  request.r(i1625[4], i1625[5], 0, i1624, 'm_SelectedSprite')
  request.r(i1625[6], i1625[7], 0, i1624, 'm_DisabledSprite')
  return i1624
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1627 = data
  i1626.m_NormalTrigger = i1627[0]
  i1626.m_HighlightedTrigger = i1627[1]
  i1626.m_PressedTrigger = i1627[2]
  i1626.m_SelectedTrigger = i1627[3]
  i1626.m_DisabledTrigger = i1627[4]
  return i1626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'm_ObjectArgument')
  i1628.m_ObjectArgumentAssemblyTypeName = i1629[2]
  i1628.m_IntArgument = i1629[3]
  i1628.m_FloatArgument = i1629[4]
  i1628.m_StringArgument = i1629[5]
  i1628.m_BoolArgument = !!i1629[6]
  return i1628
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1631 = data
  i1630.m_ShowMaskGraphic = !!i1631[0]
  return i1630
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i1632 = root || request.c( 'Playable.GameController' )
  var i1633 = data
  return i1632
}

Deserializers["Playable.BG"] = function (request, data, root) {
  var i1634 = root || request.c( 'Playable.BG' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, '_bg')
  request.r(i1635[2], i1635[3], 0, i1634, '_sprite')
  i1634._onPlay = request.d('UnityEngine.Events.UnityEvent', i1635[4], i1634._onPlay)
  request.r(i1635[5], i1635[6], 0, i1634, '_source')
  return i1634
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1637 = data
  i1636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1637[0], i1636.m_PersistentCalls)
  return i1636
}

Deserializers["Playable.Ceiling"] = function (request, data, root) {
  var i1638 = root || request.c( 'Playable.Ceiling' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, '_fan')
  request.r(i1639[2], i1639[3], 0, i1638, '_airCondition')
  request.r(i1639[4], i1639[5], 0, i1638, '_clip')
  i1638._onPlay = request.d('UnityEngine.Events.UnityEvent', i1639[6], i1638._onPlay)
  request.r(i1639[7], i1639[8], 0, i1638, '_source')
  return i1638
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i1640 = root || request.c( 'Playable.Door' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, '_skeleton')
  i1640._animName = i1641[2]
  request.r(i1641[3], i1641[4], 0, i1640, '_door')
  i1640._onPlay = request.d('UnityEngine.Events.UnityEvent', i1641[5], i1640._onPlay)
  request.r(i1641[6], i1641[7], 0, i1640, '_source')
  return i1640
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1642 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'skeletonDataAsset')
  request.r(i1643[2], i1643[3], 0, i1642, 'additiveMaterial')
  request.r(i1643[4], i1643[5], 0, i1642, 'multiplyMaterial')
  request.r(i1643[6], i1643[7], 0, i1642, 'screenMaterial')
  i1642.initialSkinName = i1643[8]
  i1642.initialFlipX = !!i1643[9]
  i1642.initialFlipY = !!i1643[10]
  i1642.startingAnimation = i1643[11]
  i1642.startingLoop = !!i1643[12]
  i1642.timeScale = i1643[13]
  i1642.freeze = !!i1643[14]
  i1642.layoutScaleMode = i1643[15]
  i1642.updateWhenInvisible = i1643[16]
  i1642.allowMultipleCanvasRenderers = !!i1643[17]
  var i1645 = i1643[18]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 1, i1644, '')
  }
  i1642.canvasRenderers = i1644
  i1642.enableSeparatorSlots = !!i1643[19]
  i1642.updateSeparatorPartLocation = !!i1643[20]
  i1642.updateSeparatorPartScale = !!i1643[21]
  i1642.disableMeshAssignmentOnOverride = !!i1643[22]
  i1642.referenceSize = new pc.Vec2( i1643[23], i1643[24] )
  i1642.referenceScale = i1643[25]
  i1642.rectTransformSize = new pc.Vec2( i1643[26], i1643[27] )
  i1642.editReferenceRect = !!i1643[28]
  var i1647 = i1643[29]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( i1647[i + 0] );
  }
  i1642.separatorSlotNames = i1646
  var i1649 = i1643[30]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 1, i1648, '')
  }
  i1642.separatorParts = i1648
  i1642.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1643[31], i1642.meshGenerator)
  i1642.updateTiming = i1643[32]
  i1642.unscaledTime = !!i1643[33]
  request.r(i1643[34], i1643[35], 0, i1642, 'm_Material')
  i1642.m_Maskable = !!i1643[36]
  i1642.m_Color = new pc.Color(i1643[37], i1643[38], i1643[39], i1643[40])
  i1642.m_RaycastTarget = !!i1643[41]
  i1642.m_RaycastPadding = new pc.Vec4( i1643[42], i1643[43], i1643[44], i1643[45] )
  return i1642
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1656 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1657 = data
  i1656.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1657[0], i1656.settings)
  return i1656
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1658 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1659 = data
  i1658.useClipping = !!i1659[0]
  i1658.zSpacing = i1659[1]
  i1658.pmaVertexColors = !!i1659[2]
  i1658.tintBlack = !!i1659[3]
  i1658.canvasGroupTintBlack = !!i1659[4]
  i1658.calculateTangents = !!i1659[5]
  i1658.addNormals = !!i1659[6]
  i1658.immutableTriangles = !!i1659[7]
  return i1658
}

Deserializers["Playable.Bed"] = function (request, data, root) {
  var i1660 = root || request.c( 'Playable.Bed' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, '_skeleton')
  i1660._animName = i1661[2]
  request.r(i1661[3], i1661[4], 0, i1660, '_bed')
  request.r(i1661[5], i1661[6], 0, i1660, '_bedOld')
  request.r(i1661[7], i1661[8], 0, i1660, '_clip')
  i1660._onPlay = request.d('UnityEngine.Events.UnityEvent', i1661[9], i1660._onPlay)
  request.r(i1661[10], i1661[11], 0, i1660, '_source')
  return i1660
}

Deserializers["Playable.Bathroom"] = function (request, data, root) {
  var i1662 = root || request.c( 'Playable.Bathroom' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, '_skeleton')
  i1662._animName = i1663[2]
  request.r(i1663[3], i1663[4], 0, i1662, '_mirror')
  request.r(i1663[5], i1663[6], 0, i1662, '_bathroom')
  request.r(i1663[7], i1663[8], 0, i1662, '_clip')
  i1662._onPlay = request.d('UnityEngine.Events.UnityEvent', i1663[9], i1662._onPlay)
  request.r(i1663[10], i1663[11], 0, i1662, '_source')
  return i1662
}

Deserializers["Playable.Computer"] = function (request, data, root) {
  var i1664 = root || request.c( 'Playable.Computer' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, '_skeleton')
  i1664._animName = i1665[2]
  request.r(i1665[3], i1665[4], 0, i1664, '_computerOld')
  request.r(i1665[5], i1665[6], 0, i1664, '_computer')
  i1664._onPlay = request.d('UnityEngine.Events.UnityEvent', i1665[7], i1664._onPlay)
  request.r(i1665[8], i1665[9], 0, i1664, '_source')
  return i1664
}

Deserializers["Playable.Toilet"] = function (request, data, root) {
  var i1666 = root || request.c( 'Playable.Toilet' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, '_skeleton')
  i1666._animName = i1667[2]
  request.r(i1667[3], i1667[4], 0, i1666, '_toilet')
  request.r(i1667[5], i1667[6], 0, i1666, '_clip')
  i1666._onPlay = request.d('UnityEngine.Events.UnityEvent', i1667[7], i1666._onPlay)
  request.r(i1667[8], i1667[9], 0, i1666, '_source')
  return i1666
}

Deserializers["Playable.ItemRoot"] = function (request, data, root) {
  var i1668 = root || request.c( 'Playable.ItemRoot' )
  var i1669 = data
  var i1671 = i1669[0]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.Item')))
  for(var i = 0; i < i1671.length; i += 2) {
  request.r(i1671[i + 0], i1671[i + 1], 1, i1670, '')
  }
  i1668._itemList = i1670
  request.r(i1669[1], i1669[2], 0, i1668, '_canvas')
  request.r(i1669[3], i1669[4], 0, i1668, '_camera')
  return i1668
}

Deserializers["Playable.Item"] = function (request, data, root) {
  var i1674 = root || request.c( 'Playable.Item' )
  var i1675 = data
  return i1674
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i1676 = root || request.c( 'Playable.AudioManager' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.add(request.d('Playable.SoundData', i1679[i + 0]));
  }
  i1676._sounds = i1678
  request.r(i1677[1], i1677[2], 0, i1676, '_audioMusic')
  request.r(i1677[3], i1677[4], 0, i1676, '_audioSound')
  return i1676
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i1682 = root || request.c( 'Playable.SoundData' )
  var i1683 = data
  i1682.Type = i1683[0]
  request.r(i1683[1], i1683[2], 0, i1682, 'Clip')
  return i1682
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'm_FirstSelected')
  i1684.m_sendNavigationEvents = !!i1685[2]
  i1684.m_DragThreshold = i1685[3]
  return i1684
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1687 = data
  i1686.m_HorizontalAxis = i1687[0]
  i1686.m_VerticalAxis = i1687[1]
  i1686.m_SubmitButton = i1687[2]
  i1686.m_CancelButton = i1687[3]
  i1686.m_InputActionsPerSecond = i1687[4]
  i1686.m_RepeatDelay = i1687[5]
  i1686.m_ForceModuleActive = !!i1687[6]
  i1686.m_SendPointerHoverToParent = !!i1687[7]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1689 = data
  i1688.ambientIntensity = i1689[0]
  i1688.reflectionIntensity = i1689[1]
  i1688.ambientMode = i1689[2]
  i1688.ambientLight = new pc.Color(i1689[3], i1689[4], i1689[5], i1689[6])
  i1688.ambientSkyColor = new pc.Color(i1689[7], i1689[8], i1689[9], i1689[10])
  i1688.ambientGroundColor = new pc.Color(i1689[11], i1689[12], i1689[13], i1689[14])
  i1688.ambientEquatorColor = new pc.Color(i1689[15], i1689[16], i1689[17], i1689[18])
  i1688.fogColor = new pc.Color(i1689[19], i1689[20], i1689[21], i1689[22])
  i1688.fogEndDistance = i1689[23]
  i1688.fogStartDistance = i1689[24]
  i1688.fogDensity = i1689[25]
  i1688.fog = !!i1689[26]
  request.r(i1689[27], i1689[28], 0, i1688, 'skybox')
  i1688.fogMode = i1689[29]
  var i1691 = i1689[30]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1691[i + 0]) );
  }
  i1688.lightmaps = i1690
  i1688.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1689[31], i1688.lightProbes)
  i1688.lightmapsMode = i1689[32]
  i1688.mixedBakeMode = i1689[33]
  i1688.environmentLightingMode = i1689[34]
  i1688.ambientProbe = new pc.SphericalHarmonicsL2(i1689[35])
  request.r(i1689[36], i1689[37], 0, i1688, 'customReflection')
  request.r(i1689[38], i1689[39], 0, i1688, 'defaultReflection')
  i1688.defaultReflectionMode = i1689[40]
  i1688.defaultReflectionResolution = i1689[41]
  i1688.sunLightObjectId = i1689[42]
  i1688.pixelLightCount = i1689[43]
  i1688.defaultReflectionHDR = !!i1689[44]
  i1688.hasLightDataAsset = !!i1689[45]
  i1688.hasManualGenerate = !!i1689[46]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'lightmapColor')
  request.r(i1695[2], i1695[3], 0, i1694, 'lightmapDirection')
  request.r(i1695[4], i1695[5], 0, i1694, 'shadowMask')
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1696 = root || new UnityEngine.LightProbes()
  var i1697 = data
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1707[i + 0]));
  }
  i1704.ShaderCompilationErrors = i1706
  i1704.name = i1705[1]
  i1704.guid = i1705[2]
  var i1709 = i1705[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1704.shaderDefinedKeywords = i1708
  var i1711 = i1705[4]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1711[i + 0]) );
  }
  i1704.passes = i1710
  var i1713 = i1705[5]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1713[i + 0]) );
  }
  i1704.usePasses = i1712
  var i1715 = i1705[6]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1715[i + 0]) );
  }
  i1704.defaultParameterValues = i1714
  request.r(i1705[7], i1705[8], 0, i1704, 'unityFallbackShader')
  i1704.readDepth = !!i1705[9]
  i1704.hasDepthOnlyPass = !!i1705[10]
  i1704.isCreatedByShaderGraph = !!i1705[11]
  i1704.disableBatching = !!i1705[12]
  i1704.compiled = !!i1705[13]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1719 = data
  i1718.shaderName = i1719[0]
  i1718.errorMessage = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1722 = root || new pc.UnityShaderPass()
  var i1723 = data
  i1722.id = i1723[0]
  i1722.subShaderIndex = i1723[1]
  i1722.name = i1723[2]
  i1722.passType = i1723[3]
  i1722.grabPassTextureName = i1723[4]
  i1722.usePass = !!i1723[5]
  i1722.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[6], i1722.zTest)
  i1722.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[7], i1722.zWrite)
  i1722.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[8], i1722.culling)
  i1722.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1723[9], i1722.blending)
  i1722.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1723[10], i1722.alphaBlending)
  i1722.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[11], i1722.colorWriteMask)
  i1722.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[12], i1722.offsetUnits)
  i1722.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[13], i1722.offsetFactor)
  i1722.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[14], i1722.stencilRef)
  i1722.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[15], i1722.stencilReadMask)
  i1722.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1723[16], i1722.stencilWriteMask)
  i1722.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1723[17], i1722.stencilOp)
  i1722.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1723[18], i1722.stencilOpFront)
  i1722.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1723[19], i1722.stencilOpBack)
  var i1725 = i1723[20]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1725[i + 0]) );
  }
  i1722.tags = i1724
  var i1727 = i1723[21]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( i1727[i + 0] );
  }
  i1722.passDefinedKeywords = i1726
  var i1729 = i1723[22]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1729[i + 0]) );
  }
  i1722.passDefinedKeywordGroups = i1728
  var i1731 = i1723[23]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1731[i + 0]) );
  }
  i1722.variants = i1730
  var i1733 = i1723[24]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1733[i + 0]) );
  }
  i1722.excludedVariants = i1732
  i1722.hasDepthReader = !!i1723[25]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1735 = data
  i1734.val = i1735[0]
  i1734.name = i1735[1]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1737 = data
  i1736.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[0], i1736.src)
  i1736.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[1], i1736.dst)
  i1736.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[2], i1736.op)
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1739 = data
  i1738.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[0], i1738.pass)
  i1738.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[1], i1738.fail)
  i1738.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[2], i1738.zFail)
  i1738.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[3], i1738.comp)
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1743 = data
  i1742.name = i1743[0]
  i1742.value = i1743[1]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1747 = data
  var i1749 = i1747[0]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1746.keywords = i1748
  i1746.hasDiscard = !!i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1753 = data
  i1752.passId = i1753[0]
  i1752.subShaderIndex = i1753[1]
  var i1755 = i1753[2]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( i1755[i + 0] );
  }
  i1752.keywords = i1754
  i1752.vertexProgram = i1753[3]
  i1752.fragmentProgram = i1753[4]
  i1752.exportedForWebGl2 = !!i1753[5]
  i1752.readDepth = !!i1753[6]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'shader')
  i1758.pass = i1759[2]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.type = i1763[1]
  i1762.value = new pc.Vec4( i1763[2], i1763[3], i1763[4], i1763[5] )
  i1762.textureValue = i1763[6]
  i1762.shaderPropertyFlag = i1763[7]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1765 = data
  i1764.name = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'texture')
  i1764.aabb = i1765[3]
  i1764.vertices = i1765[4]
  i1764.triangles = i1765[5]
  i1764.textureRect = UnityEngine.Rect.MinMaxRect(i1765[6], i1765[7], i1765[8], i1765[9])
  i1764.packedRect = UnityEngine.Rect.MinMaxRect(i1765[10], i1765[11], i1765[12], i1765[13])
  i1764.border = new pc.Vec4( i1765[14], i1765[15], i1765[16], i1765[17] )
  i1764.transparency = i1765[18]
  i1764.bounds = i1765[19]
  i1764.pixelsPerUnit = i1765[20]
  i1764.textureWidth = i1765[21]
  i1764.textureHeight = i1765[22]
  i1764.nativeSize = new pc.Vec2( i1765[23], i1765[24] )
  i1764.pivot = new pc.Vec2( i1765[25], i1765[26] )
  i1764.textureRectOffset = new pc.Vec2( i1765[27], i1765[28] )
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1767 = data
  i1766.name = i1767[0]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.ascent = i1769[1]
  i1768.originalLineHeight = i1769[2]
  i1768.fontSize = i1769[3]
  var i1771 = i1769[4]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1771[i + 0]) );
  }
  i1768.characterInfo = i1770
  request.r(i1769[5], i1769[6], 0, i1768, 'texture')
  i1768.originalFontSize = i1769[7]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1775 = data
  i1774.index = i1775[0]
  i1774.advance = i1775[1]
  i1774.bearing = i1775[2]
  i1774.glyphWidth = i1775[3]
  i1774.glyphHeight = i1775[4]
  i1774.minX = i1775[5]
  i1774.maxX = i1775[6]
  i1774.minY = i1775[7]
  i1774.maxY = i1775[8]
  i1774.uvBottomLeftX = i1775[9]
  i1774.uvBottomLeftY = i1775[10]
  i1774.uvBottomRightX = i1775[11]
  i1774.uvBottomRightY = i1775[12]
  i1774.uvTopLeftX = i1775[13]
  i1774.uvTopLeftY = i1775[14]
  i1774.uvTopRightX = i1775[15]
  i1774.uvTopRightY = i1775[16]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.bytes64 = i1777[1]
  i1776.data = i1777[2]
  return i1776
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1779 = data
  i1778.normalStyle = i1779[0]
  i1778.normalSpacingOffset = i1779[1]
  i1778.boldStyle = i1779[2]
  i1778.boldSpacing = i1779[3]
  i1778.italicStyle = i1779[4]
  i1778.tabSize = i1779[5]
  request.r(i1779[6], i1779[7], 0, i1778, 'atlas')
  i1778.m_SourceFontFileGUID = i1779[8]
  i1778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1779[9], i1778.m_CreationSettings)
  request.r(i1779[10], i1779[11], 0, i1778, 'm_SourceFontFile')
  i1778.m_SourceFontFilePath = i1779[12]
  i1778.m_AtlasPopulationMode = i1779[13]
  i1778.InternalDynamicOS = !!i1779[14]
  var i1781 = i1779[15]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.add(request.d('UnityEngine.TextCore.Glyph', i1781[i + 0]));
  }
  i1778.m_GlyphTable = i1780
  var i1783 = i1779[16]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.add(request.d('TMPro.TMP_Character', i1783[i + 0]));
  }
  i1778.m_CharacterTable = i1782
  var i1785 = i1779[17]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 2, i1784, '')
  }
  i1778.m_AtlasTextures = i1784
  i1778.m_AtlasTextureIndex = i1779[18]
  i1778.m_IsMultiAtlasTexturesEnabled = !!i1779[19]
  i1778.m_GetFontFeatures = !!i1779[20]
  i1778.m_ClearDynamicDataOnBuild = !!i1779[21]
  i1778.m_AtlasWidth = i1779[22]
  i1778.m_AtlasHeight = i1779[23]
  i1778.m_AtlasPadding = i1779[24]
  i1778.m_AtlasRenderMode = i1779[25]
  var i1787 = i1779[26]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.add(request.d('UnityEngine.TextCore.GlyphRect', i1787[i + 0]));
  }
  i1778.m_UsedGlyphRects = i1786
  var i1789 = i1779[27]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.add(request.d('UnityEngine.TextCore.GlyphRect', i1789[i + 0]));
  }
  i1778.m_FreeGlyphRects = i1788
  i1778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1779[28], i1778.m_FontFeatureTable)
  i1778.m_ShouldReimportFontFeatures = !!i1779[29]
  var i1791 = i1779[30]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 1, i1790, '')
  }
  i1778.m_FallbackFontAssetTable = i1790
  var i1793 = i1779[31]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('TMPro.TMP_FontWeightPair', i1793[i + 0]) );
  }
  i1778.m_FontWeightTable = i1792
  var i1795 = i1779[32]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('TMPro.TMP_FontWeightPair', i1795[i + 0]) );
  }
  i1778.fontWeights = i1794
  i1778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1779[33], i1778.m_fontInfo)
  var i1797 = i1779[34]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('TMPro.TMP_Glyph', i1797[i + 0]));
  }
  i1778.m_glyphInfoList = i1796
  i1778.m_KerningTable = request.d('TMPro.KerningTable', i1779[35], i1778.m_KerningTable)
  var i1799 = i1779[36]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1799.length; i += 2) {
  request.r(i1799[i + 0], i1799[i + 1], 1, i1798, '')
  }
  i1778.fallbackFontAssets = i1798
  i1778.m_Version = i1779[37]
  i1778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1779[38], i1778.m_FaceInfo)
  request.r(i1779[39], i1779[40], 0, i1778, 'm_Material')
  return i1778
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1801 = data
  i1800.sourceFontFileName = i1801[0]
  i1800.sourceFontFileGUID = i1801[1]
  i1800.faceIndex = i1801[2]
  i1800.pointSizeSamplingMode = i1801[3]
  i1800.pointSize = i1801[4]
  i1800.padding = i1801[5]
  i1800.paddingMode = i1801[6]
  i1800.packingMode = i1801[7]
  i1800.atlasWidth = i1801[8]
  i1800.atlasHeight = i1801[9]
  i1800.characterSetSelectionMode = i1801[10]
  i1800.characterSequence = i1801[11]
  i1800.referencedFontAssetGUID = i1801[12]
  i1800.referencedTextAssetGUID = i1801[13]
  i1800.fontStyle = i1801[14]
  i1800.fontStyleModifier = i1801[15]
  i1800.renderMode = i1801[16]
  i1800.includeFontFeatures = !!i1801[17]
  return i1800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1805 = data
  i1804.m_Index = i1805[0]
  i1804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1805[1], i1804.m_Metrics)
  i1804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1805[2], i1804.m_GlyphRect)
  i1804.m_Scale = i1805[3]
  i1804.m_AtlasIndex = i1805[4]
  i1804.m_ClassDefinitionType = i1805[5]
  return i1804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1807 = data
  i1806.m_Width = i1807[0]
  i1806.m_Height = i1807[1]
  i1806.m_HorizontalBearingX = i1807[2]
  i1806.m_HorizontalBearingY = i1807[3]
  i1806.m_HorizontalAdvance = i1807[4]
  return i1806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1809 = data
  i1808.m_X = i1809[0]
  i1808.m_Y = i1809[1]
  i1808.m_Width = i1809[2]
  i1808.m_Height = i1809[3]
  return i1808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1812 = root || request.c( 'TMPro.TMP_Character' )
  var i1813 = data
  i1812.m_ElementType = i1813[0]
  i1812.m_Unicode = i1813[1]
  i1812.m_GlyphIndex = i1813[2]
  i1812.m_Scale = i1813[3]
  return i1812
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.add(request.d('TMPro.MultipleSubstitutionRecord', i1821[i + 0]));
  }
  i1818.m_MultipleSubstitutionRecords = i1820
  var i1823 = i1819[1]
  var i1822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.add(request.d('TMPro.LigatureSubstitutionRecord', i1823[i + 0]));
  }
  i1818.m_LigatureSubstitutionRecords = i1822
  var i1825 = i1819[2]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1825[i + 0]));
  }
  i1818.m_GlyphPairAdjustmentRecords = i1824
  var i1827 = i1819[3]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1827[i + 0]));
  }
  i1818.m_MarkToBaseAdjustmentRecords = i1826
  var i1829 = i1819[4]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1829[i + 0]));
  }
  i1818.m_MarkToMarkAdjustmentRecords = i1828
  return i1818
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1833 = data
  i1832.m_TargetGlyphID = i1833[0]
  i1832.m_SubstituteGlyphIDs = i1833[1]
  return i1832
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1836 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1837 = data
  i1836.m_ComponentGlyphIDs = i1837[0]
  i1836.m_LigatureGlyphID = i1837[1]
  return i1836
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1841 = data
  i1840.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1841[0], i1840.m_FirstAdjustmentRecord)
  i1840.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1841[1], i1840.m_SecondAdjustmentRecord)
  i1840.m_FeatureLookupFlags = i1841[2]
  return i1840
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1845 = data
  i1844.m_BaseGlyphID = i1845[0]
  i1844.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1845[1], i1844.m_BaseGlyphAnchorPoint)
  i1844.m_MarkGlyphID = i1845[2]
  i1844.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1845[3], i1844.m_MarkPositionAdjustment)
  return i1844
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1848 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1849 = data
  i1848.m_BaseMarkGlyphID = i1849[0]
  i1848.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1849[1], i1848.m_BaseMarkGlyphAnchorPoint)
  i1848.m_CombiningMarkGlyphID = i1849[2]
  i1848.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1849[3], i1848.m_CombiningMarkPositionAdjustment)
  return i1848
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'regularTypeface')
  request.r(i1855[2], i1855[3], 0, i1854, 'italicTypeface')
  return i1854
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1856 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1857 = data
  i1856.Name = i1857[0]
  i1856.PointSize = i1857[1]
  i1856.Scale = i1857[2]
  i1856.CharacterCount = i1857[3]
  i1856.LineHeight = i1857[4]
  i1856.Baseline = i1857[5]
  i1856.Ascender = i1857[6]
  i1856.CapHeight = i1857[7]
  i1856.Descender = i1857[8]
  i1856.CenterLine = i1857[9]
  i1856.SuperscriptOffset = i1857[10]
  i1856.SubscriptOffset = i1857[11]
  i1856.SubSize = i1857[12]
  i1856.Underline = i1857[13]
  i1856.UnderlineThickness = i1857[14]
  i1856.strikethrough = i1857[15]
  i1856.strikethroughThickness = i1857[16]
  i1856.TabWidth = i1857[17]
  i1856.Padding = i1857[18]
  i1856.AtlasWidth = i1857[19]
  i1856.AtlasHeight = i1857[20]
  return i1856
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1860 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1861 = data
  i1860.id = i1861[0]
  i1860.x = i1861[1]
  i1860.y = i1861[2]
  i1860.width = i1861[3]
  i1860.height = i1861[4]
  i1860.xOffset = i1861[5]
  i1860.yOffset = i1861[6]
  i1860.xAdvance = i1861[7]
  i1860.scale = i1861[8]
  return i1860
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.KerningTable' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.add(request.d('TMPro.KerningPair', i1865[i + 0]));
  }
  i1862.kerningPairs = i1864
  return i1862
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1868 = root || request.c( 'TMPro.KerningPair' )
  var i1869 = data
  i1868.xOffset = i1869[0]
  i1868.m_FirstGlyph = i1869[1]
  i1868.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1869[2], i1868.m_FirstGlyphAdjustments)
  i1868.m_SecondGlyph = i1869[3]
  i1868.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1869[4], i1868.m_SecondGlyphAdjustments)
  i1868.m_IgnoreSpacingAdjustments = !!i1869[5]
  return i1868
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1871 = data
  i1870.m_FaceIndex = i1871[0]
  i1870.m_FamilyName = i1871[1]
  i1870.m_StyleName = i1871[2]
  i1870.m_PointSize = i1871[3]
  i1870.m_Scale = i1871[4]
  i1870.m_UnitsPerEM = i1871[5]
  i1870.m_LineHeight = i1871[6]
  i1870.m_AscentLine = i1871[7]
  i1870.m_CapLine = i1871[8]
  i1870.m_MeanLine = i1871[9]
  i1870.m_Baseline = i1871[10]
  i1870.m_DescentLine = i1871[11]
  i1870.m_SuperscriptOffset = i1871[12]
  i1870.m_SuperscriptSize = i1871[13]
  i1870.m_SubscriptOffset = i1871[14]
  i1870.m_SubscriptSize = i1871[15]
  i1870.m_UnderlineOffset = i1871[16]
  i1870.m_UnderlineThickness = i1871[17]
  i1870.m_StrikethroughOffset = i1871[18]
  i1870.m_StrikethroughThickness = i1871[19]
  i1870.m_TabWidth = i1871[20]
  return i1870
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1872 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1873 = data
  var i1875 = i1873[0]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 2) {
  request.r(i1875[i + 0], i1875[i + 1], 2, i1874, '')
  }
  i1872.atlasAssets = i1874
  i1872.scale = i1873[1]
  request.r(i1873[2], i1873[3], 0, i1872, 'skeletonJSON')
  i1872.isUpgradingBlendModeMaterials = !!i1873[4]
  i1872.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1873[5], i1872.blendModeMaterials)
  var i1877 = i1873[6]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 1, i1876, '')
  }
  i1872.skeletonDataModifiers = i1876
  var i1879 = i1873[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1872.fromAnimation = i1878
  var i1881 = i1873[8]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( i1881[i + 0] );
  }
  i1872.toAnimation = i1880
  i1872.duration = i1873[9]
  i1872.defaultMix = i1873[10]
  request.r(i1873[11], i1873[12], 0, i1872, 'controller')
  return i1872
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1884 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1885 = data
  i1884.applyAdditiveMaterial = !!i1885[0]
  var i1887 = i1885[1]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1887[i + 0]));
  }
  i1884.additiveMaterials = i1886
  var i1889 = i1885[2]
  var i1888 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1889[i + 0]));
  }
  i1884.multiplyMaterials = i1888
  var i1891 = i1885[3]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1891[i + 0]));
  }
  i1884.screenMaterials = i1890
  i1884.requiresBlendModeMaterials = !!i1885[4]
  return i1884
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1894 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1895 = data
  i1894.pageName = i1895[0]
  request.r(i1895[1], i1895[2], 0, i1894, 'material')
  return i1894
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1898 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'atlasFile')
  var i1901 = i1899[2]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.materials = i1900
  i1898.textureLoadingMode = i1899[3]
  request.r(i1899[4], i1899[5], 0, i1898, 'onDemandTextureLoader')
  return i1898
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1902 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1903 = data
  i1902.useSafeMode = !!i1903[0]
  i1902.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1903[1], i1902.safeModeOptions)
  i1902.timeScale = i1903[2]
  i1902.unscaledTimeScale = i1903[3]
  i1902.useSmoothDeltaTime = !!i1903[4]
  i1902.maxSmoothUnscaledTime = i1903[5]
  i1902.rewindCallbackMode = i1903[6]
  i1902.showUnityEditorReport = !!i1903[7]
  i1902.logBehaviour = i1903[8]
  i1902.drawGizmos = !!i1903[9]
  i1902.defaultRecyclable = !!i1903[10]
  i1902.defaultAutoPlay = i1903[11]
  i1902.defaultUpdateType = i1903[12]
  i1902.defaultTimeScaleIndependent = !!i1903[13]
  i1902.defaultEaseType = i1903[14]
  i1902.defaultEaseOvershootOrAmplitude = i1903[15]
  i1902.defaultEasePeriod = i1903[16]
  i1902.defaultAutoKill = !!i1903[17]
  i1902.defaultLoopType = i1903[18]
  i1902.debugMode = !!i1903[19]
  i1902.debugStoreTargetId = !!i1903[20]
  i1902.showPreviewPanel = !!i1903[21]
  i1902.storeSettingsLocation = i1903[22]
  i1902.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1903[23], i1902.modules)
  i1902.createASMDEF = !!i1903[24]
  i1902.showPlayingTweens = !!i1903[25]
  i1902.showPausedTweens = !!i1903[26]
  return i1902
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1904 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1905 = data
  i1904.logBehaviour = i1905[0]
  i1904.nestedTweenFailureBehaviour = i1905[1]
  return i1904
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1906 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1907 = data
  i1906.showPanel = !!i1907[0]
  i1906.audioEnabled = !!i1907[1]
  i1906.physicsEnabled = !!i1907[2]
  i1906.physics2DEnabled = !!i1907[3]
  i1906.spriteEnabled = !!i1907[4]
  i1906.uiEnabled = !!i1907[5]
  i1906.uiToolkitEnabled = !!i1907[6]
  i1906.textMeshProEnabled = !!i1907[7]
  i1906.tk2DEnabled = !!i1907[8]
  i1906.deAudioEnabled = !!i1907[9]
  i1906.deUnityExtendedEnabled = !!i1907[10]
  i1906.epoOutlineEnabled = !!i1907[11]
  return i1906
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.TMP_Settings' )
  var i1909 = data
  i1908.assetVersion = i1909[0]
  i1908.m_TextWrappingMode = i1909[1]
  i1908.m_enableKerning = !!i1909[2]
  var i1911 = i1909[3]
  var i1910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.add(i1911[i + 0]);
  }
  i1908.m_ActiveFontFeatures = i1910
  i1908.m_enableExtraPadding = !!i1909[4]
  i1908.m_enableTintAllSprites = !!i1909[5]
  i1908.m_enableParseEscapeCharacters = !!i1909[6]
  i1908.m_EnableRaycastTarget = !!i1909[7]
  i1908.m_GetFontFeaturesAtRuntime = !!i1909[8]
  i1908.m_missingGlyphCharacter = i1909[9]
  i1908.m_ClearDynamicDataOnBuild = !!i1909[10]
  i1908.m_warningsDisabled = !!i1909[11]
  request.r(i1909[12], i1909[13], 0, i1908, 'm_defaultFontAsset')
  i1908.m_defaultFontAssetPath = i1909[14]
  i1908.m_defaultFontSize = i1909[15]
  i1908.m_defaultAutoSizeMinRatio = i1909[16]
  i1908.m_defaultAutoSizeMaxRatio = i1909[17]
  i1908.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1909[18], i1909[19] )
  i1908.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1909[20], i1909[21] )
  i1908.m_autoSizeTextContainer = !!i1909[22]
  i1908.m_IsTextObjectScaleStatic = !!i1909[23]
  var i1913 = i1909[24]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 1, i1912, '')
  }
  i1908.m_fallbackFontAssets = i1912
  i1908.m_matchMaterialPreset = !!i1909[25]
  i1908.m_HideSubTextObjects = !!i1909[26]
  request.r(i1909[27], i1909[28], 0, i1908, 'm_defaultSpriteAsset')
  i1908.m_defaultSpriteAssetPath = i1909[29]
  i1908.m_enableEmojiSupport = !!i1909[30]
  i1908.m_MissingCharacterSpriteUnicode = i1909[31]
  var i1915 = i1909[32]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 1, i1914, '')
  }
  i1908.m_EmojiFallbackTextAssets = i1914
  i1908.m_defaultColorGradientPresetsPath = i1909[33]
  request.r(i1909[34], i1909[35], 0, i1908, 'm_defaultStyleSheet')
  i1908.m_StyleSheetsResourcePath = i1909[36]
  request.r(i1909[37], i1909[38], 0, i1908, 'm_leadingCharacters')
  request.r(i1909[39], i1909[40], 0, i1908, 'm_followingCharacters')
  i1908.m_UseModernHangulLineBreakingRules = !!i1909[41]
  return i1908
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1919 = data
  i1918.m_GlyphIndex = i1919[0]
  i1918.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1919[1], i1918.m_GlyphValueRecord)
  return i1918
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1921 = data
  i1920.m_XPlacement = i1921[0]
  i1920.m_YPlacement = i1921[1]
  i1920.m_XAdvance = i1921[2]
  i1920.m_YAdvance = i1921[3]
  return i1920
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'spriteSheet')
  var i1925 = i1923[2]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('TMPro.TMP_Sprite', i1925[i + 0]));
  }
  i1922.spriteInfoList = i1924
  var i1927 = i1923[3]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1927.length; i += 2) {
  request.r(i1927[i + 0], i1927[i + 1], 1, i1926, '')
  }
  i1922.fallbackSpriteAssets = i1926
  var i1929 = i1923[4]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.add(request.d('TMPro.TMP_SpriteCharacter', i1929[i + 0]));
  }
  i1922.m_SpriteCharacterTable = i1928
  var i1931 = i1923[5]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('TMPro.TMP_SpriteGlyph', i1931[i + 0]));
  }
  i1922.m_GlyphTable = i1930
  i1922.m_Version = i1923[6]
  i1922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1923[7], i1922.m_FaceInfo)
  request.r(i1923[8], i1923[9], 0, i1922, 'm_Material')
  return i1922
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1934 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1935 = data
  i1934.name = i1935[0]
  i1934.hashCode = i1935[1]
  i1934.unicode = i1935[2]
  i1934.pivot = new pc.Vec2( i1935[3], i1935[4] )
  request.r(i1935[5], i1935[6], 0, i1934, 'sprite')
  i1934.id = i1935[7]
  i1934.x = i1935[8]
  i1934.y = i1935[9]
  i1934.width = i1935[10]
  i1934.height = i1935[11]
  i1934.xOffset = i1935[12]
  i1934.yOffset = i1935[13]
  i1934.xAdvance = i1935[14]
  i1934.scale = i1935[15]
  return i1934
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1940 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1941 = data
  i1940.m_Name = i1941[0]
  i1940.m_ElementType = i1941[1]
  i1940.m_Unicode = i1941[2]
  i1940.m_GlyphIndex = i1941[3]
  i1940.m_Scale = i1941[4]
  return i1940
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'sprite')
  i1944.m_Index = i1945[2]
  i1944.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1945[3], i1944.m_Metrics)
  i1944.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1945[4], i1944.m_GlyphRect)
  i1944.m_Scale = i1945[5]
  i1944.m_AtlasIndex = i1945[6]
  i1944.m_ClassDefinitionType = i1945[7]
  return i1944
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1947 = data
  var i1949 = i1947[0]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.add(request.d('TMPro.TMP_Style', i1949[i + 0]));
  }
  i1946.m_StyleList = i1948
  return i1946
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1952 = root || request.c( 'TMPro.TMP_Style' )
  var i1953 = data
  i1952.m_Name = i1953[0]
  i1952.m_HashCode = i1953[1]
  i1952.m_OpeningDefinition = i1953[2]
  i1952.m_ClosingDefinition = i1953[3]
  i1952.m_OpeningTagArray = i1953[4]
  i1952.m_ClosingTagArray = i1953[5]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1957[i + 0]) );
  }
  i1954.files = i1956
  i1954.componentToPrefabIds = i1955[1]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1961 = data
  i1960.path = i1961[0]
  request.r(i1961[1], i1961[2], 0, i1960, 'unityObject')
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1963 = data
  var i1965 = i1963[0]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1965[i + 0]) );
  }
  i1962.scriptsExecutionOrder = i1964
  var i1967 = i1963[1]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1967[i + 0]) );
  }
  i1962.sortingLayers = i1966
  var i1969 = i1963[2]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1969[i + 0]) );
  }
  i1962.cullingLayers = i1968
  i1962.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1963[3], i1962.timeSettings)
  i1962.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1963[4], i1962.physicsSettings)
  i1962.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1963[5], i1962.physics2DSettings)
  i1962.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1963[6], i1962.qualitySettings)
  i1962.enableRealtimeShadows = !!i1963[7]
  i1962.enableAutoInstancing = !!i1963[8]
  i1962.enableStaticBatching = !!i1963[9]
  i1962.enableDynamicBatching = !!i1963[10]
  i1962.usePreservativeDynamicBatching = !!i1963[11]
  i1962.lightmapEncodingQuality = i1963[12]
  i1962.desiredColorSpace = i1963[13]
  var i1971 = i1963[14]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( i1971[i + 0] );
  }
  i1962.allTags = i1970
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.value = i1975[1]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1979 = data
  i1978.id = i1979[0]
  i1978.name = i1979[1]
  i1978.value = i1979[2]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1983 = data
  i1982.id = i1983[0]
  i1982.name = i1983[1]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1985 = data
  i1984.fixedDeltaTime = i1985[0]
  i1984.maximumDeltaTime = i1985[1]
  i1984.timeScale = i1985[2]
  i1984.maximumParticleTimestep = i1985[3]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1987 = data
  i1986.gravity = new pc.Vec3( i1987[0], i1987[1], i1987[2] )
  i1986.defaultSolverIterations = i1987[3]
  i1986.bounceThreshold = i1987[4]
  i1986.autoSyncTransforms = !!i1987[5]
  i1986.autoSimulation = !!i1987[6]
  var i1989 = i1987[7]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1989[i + 0]) );
  }
  i1986.collisionMatrix = i1988
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1993 = data
  i1992.enabled = !!i1993[0]
  i1992.layerId = i1993[1]
  i1992.otherLayerId = i1993[2]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'material')
  i1994.gravity = new pc.Vec2( i1995[2], i1995[3] )
  i1994.positionIterations = i1995[4]
  i1994.velocityIterations = i1995[5]
  i1994.velocityThreshold = i1995[6]
  i1994.maxLinearCorrection = i1995[7]
  i1994.maxAngularCorrection = i1995[8]
  i1994.maxTranslationSpeed = i1995[9]
  i1994.maxRotationSpeed = i1995[10]
  i1994.baumgarteScale = i1995[11]
  i1994.baumgarteTOIScale = i1995[12]
  i1994.timeToSleep = i1995[13]
  i1994.linearSleepTolerance = i1995[14]
  i1994.angularSleepTolerance = i1995[15]
  i1994.defaultContactOffset = i1995[16]
  i1994.autoSimulation = !!i1995[17]
  i1994.queriesHitTriggers = !!i1995[18]
  i1994.queriesStartInColliders = !!i1995[19]
  i1994.callbacksOnDisable = !!i1995[20]
  i1994.reuseCollisionCallbacks = !!i1995[21]
  i1994.autoSyncTransforms = !!i1995[22]
  var i1997 = i1995[23]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1997[i + 0]) );
  }
  i1994.collisionMatrix = i1996
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2001 = data
  i2000.enabled = !!i2001[0]
  i2000.layerId = i2001[1]
  i2000.otherLayerId = i2001[2]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2003 = data
  var i2005 = i2003[0]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2005[i + 0]) );
  }
  i2002.qualityLevels = i2004
  var i2007 = i2003[1]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( i2007[i + 0] );
  }
  i2002.names = i2006
  i2002.shadows = i2003[2]
  i2002.anisotropicFiltering = i2003[3]
  i2002.antiAliasing = i2003[4]
  i2002.lodBias = i2003[5]
  i2002.shadowCascades = i2003[6]
  i2002.shadowDistance = i2003[7]
  i2002.shadowmaskMode = i2003[8]
  i2002.shadowProjection = i2003[9]
  i2002.shadowResolution = i2003[10]
  i2002.softParticles = !!i2003[11]
  i2002.softVegetation = !!i2003[12]
  i2002.activeColorSpace = i2003[13]
  i2002.desiredColorSpace = i2003[14]
  i2002.masterTextureLimit = i2003[15]
  i2002.maxQueuedFrames = i2003[16]
  i2002.particleRaycastBudget = i2003[17]
  i2002.pixelLightCount = i2003[18]
  i2002.realtimeReflectionProbes = !!i2003[19]
  i2002.shadowCascade2Split = i2003[20]
  i2002.shadowCascade4Split = new pc.Vec3( i2003[21], i2003[22], i2003[23] )
  i2002.streamingMipmapsActive = !!i2003[24]
  i2002.vSyncCount = i2003[25]
  i2002.asyncUploadBufferSize = i2003[26]
  i2002.asyncUploadTimeSlice = i2003[27]
  i2002.billboardsFaceCameraPosition = !!i2003[28]
  i2002.shadowNearPlaneOffset = i2003[29]
  i2002.streamingMipmapsMemoryBudget = i2003[30]
  i2002.maximumLODLevel = i2003[31]
  i2002.streamingMipmapsAddAllCameras = !!i2003[32]
  i2002.streamingMipmapsMaxLevelReduction = i2003[33]
  i2002.streamingMipmapsRenderersPerFrame = i2003[34]
  i2002.resolutionScalingFixedDPIFactor = i2003[35]
  i2002.streamingMipmapsMaxFileIORequests = i2003[36]
  i2002.currentQualityLevel = i2003[37]
  return i2002
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2011 = data
  i2010.m_XCoordinate = i2011[0]
  i2010.m_YCoordinate = i2011[1]
  return i2010
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2012 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2013 = data
  i2012.m_XPositionAdjustment = i2013[0]
  i2012.m_YPositionAdjustment = i2013[1]
  return i2012
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2015 = data
  i2014.xPlacement = i2015[0]
  i2014.yPlacement = i2015[1]
  i2014.xAdvance = i2015[2]
  i2014.yAdvance = i2015[3]
  return i2014
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

Deserializers.buildID = "d032eb7e-3fa9-4061-8927-21fa67729fc5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

