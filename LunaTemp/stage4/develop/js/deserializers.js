var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.JointSpring' )
  var i1669 = data
  i1668.spring = i1669[0]
  i1668.damper = i1669[1]
  i1668.targetPosition = i1669[2]
  return i1668
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.JointMotor' )
  var i1671 = data
  i1670.m_TargetVelocity = i1671[0]
  i1670.m_Force = i1671[1]
  i1670.m_FreeSpin = i1671[2]
  return i1670
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.JointLimits' )
  var i1673 = data
  i1672.m_Min = i1673[0]
  i1672.m_Max = i1673[1]
  i1672.m_Bounciness = i1673[2]
  i1672.m_BounceMinVelocity = i1673[3]
  i1672.m_ContactDistance = i1673[4]
  i1672.minBounce = i1673[5]
  i1672.maxBounce = i1673[6]
  return i1672
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.JointDrive' )
  var i1675 = data
  i1674.m_PositionSpring = i1675[0]
  i1674.m_PositionDamper = i1675[1]
  i1674.m_MaximumForce = i1675[2]
  i1674.m_UseAcceleration = i1675[3]
  return i1674
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1677 = data
  i1676.m_Spring = i1677[0]
  i1676.m_Damper = i1677[1]
  return i1676
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1679 = data
  i1678.m_Limit = i1679[0]
  i1678.m_Bounciness = i1679[1]
  i1678.m_ContactDistance = i1679[2]
  return i1678
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1681 = data
  i1680.m_ExtremumSlip = i1681[0]
  i1680.m_ExtremumValue = i1681[1]
  i1680.m_AsymptoteSlip = i1681[2]
  i1680.m_AsymptoteValue = i1681[3]
  i1680.m_Stiffness = i1681[4]
  return i1680
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1683 = data
  i1682.m_LowerAngle = i1683[0]
  i1682.m_UpperAngle = i1683[1]
  return i1682
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1685 = data
  i1684.m_MotorSpeed = i1685[0]
  i1684.m_MaximumMotorTorque = i1685[1]
  return i1684
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1687 = data
  i1686.m_DampingRatio = i1687[0]
  i1686.m_Frequency = i1687[1]
  i1686.m_Angle = i1687[2]
  return i1686
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1689 = data
  i1688.m_LowerTranslation = i1689[0]
  i1688.m_UpperTranslation = i1689[1]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.width = i1691[1]
  i1690.height = i1691[2]
  i1690.mipmapCount = i1691[3]
  i1690.anisoLevel = i1691[4]
  i1690.filterMode = i1691[5]
  i1690.hdr = !!i1691[6]
  i1690.format = i1691[7]
  i1690.wrapMode = i1691[8]
  i1690.alphaIsTransparency = !!i1691[9]
  i1690.alphaSource = i1691[10]
  i1690.graphicsFormat = i1691[11]
  i1690.sRGBTexture = !!i1691[12]
  i1690.desiredColorSpace = i1691[13]
  i1690.wrapU = i1691[14]
  i1690.wrapV = i1691[15]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1692 = root || new pc.UnityMaterial()
  var i1693 = data
  i1692.name = i1693[0]
  request.r(i1693[1], i1693[2], 0, i1692, 'shader')
  i1692.renderQueue = i1693[3]
  i1692.enableInstancing = !!i1693[4]
  var i1695 = i1693[5]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1695[i + 0]) );
  }
  i1692.floatParameters = i1694
  var i1697 = i1693[6]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1697[i + 0]) );
  }
  i1692.colorParameters = i1696
  var i1699 = i1693[7]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1699[i + 0]) );
  }
  i1692.vectorParameters = i1698
  var i1701 = i1693[8]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1701[i + 0]) );
  }
  i1692.textureParameters = i1700
  var i1703 = i1693[9]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1703[i + 0]) );
  }
  i1692.materialFlags = i1702
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.value = i1707[1]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1711 = data
  i1710.name = i1711[0]
  i1710.value = new pc.Color(i1711[1], i1711[2], i1711[3], i1711[4])
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1715 = data
  i1714.name = i1715[0]
  i1714.value = new pc.Vec4( i1715[1], i1715[2], i1715[3], i1715[4] )
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1719 = data
  i1718.name = i1719[0]
  request.r(i1719[1], i1719[2], 0, i1718, 'value')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1723 = data
  i1722.name = i1723[0]
  i1722.enabled = !!i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.index = i1725[1]
  i1724.startup = !!i1725[2]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1727 = data
  i1726.aspect = i1727[0]
  i1726.orthographic = !!i1727[1]
  i1726.orthographicSize = i1727[2]
  i1726.backgroundColor = new pc.Color(i1727[3], i1727[4], i1727[5], i1727[6])
  i1726.nearClipPlane = i1727[7]
  i1726.farClipPlane = i1727[8]
  i1726.fieldOfView = i1727[9]
  i1726.depth = i1727[10]
  i1726.clearFlags = i1727[11]
  i1726.cullingMask = i1727[12]
  i1726.rect = i1727[13]
  request.r(i1727[14], i1727[15], 0, i1726, 'targetTexture')
  i1726.usePhysicalProperties = !!i1727[16]
  i1726.focalLength = i1727[17]
  i1726.sensorSize = new pc.Vec2( i1727[18], i1727[19] )
  i1726.lensShift = new pc.Vec2( i1727[20], i1727[21] )
  i1726.gateFit = i1727[22]
  i1726.commandBufferCount = i1727[23]
  i1726.cameraType = i1727[24]
  i1726.enabled = !!i1727[25]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1729 = data
  i1728.name = i1729[0]
  i1728.tagId = i1729[1]
  i1728.enabled = !!i1729[2]
  i1728.isStatic = !!i1729[3]
  i1728.layer = i1729[4]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1731 = data
  i1730.pivot = new pc.Vec2( i1731[0], i1731[1] )
  i1730.anchorMin = new pc.Vec2( i1731[2], i1731[3] )
  i1730.anchorMax = new pc.Vec2( i1731[4], i1731[5] )
  i1730.sizeDelta = new pc.Vec2( i1731[6], i1731[7] )
  i1730.anchoredPosition3D = new pc.Vec3( i1731[8], i1731[9], i1731[10] )
  i1730.rotation = new pc.Quat(i1731[11], i1731[12], i1731[13], i1731[14])
  i1730.scale = new pc.Vec3( i1731[15], i1731[16], i1731[17] )
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1733 = data
  i1732.planeDistance = i1733[0]
  i1732.referencePixelsPerUnit = i1733[1]
  i1732.isFallbackOverlay = !!i1733[2]
  i1732.renderMode = i1733[3]
  i1732.renderOrder = i1733[4]
  i1732.sortingLayerName = i1733[5]
  i1732.sortingOrder = i1733[6]
  i1732.scaleFactor = i1733[7]
  request.r(i1733[8], i1733[9], 0, i1732, 'worldCamera')
  i1732.overrideSorting = !!i1733[10]
  i1732.pixelPerfect = !!i1733[11]
  i1732.targetDisplay = i1733[12]
  i1732.overridePixelPerfect = !!i1733[13]
  i1732.enabled = !!i1733[14]
  return i1732
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1735 = data
  i1734.m_UiScaleMode = i1735[0]
  i1734.m_ReferencePixelsPerUnit = i1735[1]
  i1734.m_ScaleFactor = i1735[2]
  i1734.m_ReferenceResolution = new pc.Vec2( i1735[3], i1735[4] )
  i1734.m_ScreenMatchMode = i1735[5]
  i1734.m_MatchWidthOrHeight = i1735[6]
  i1734.m_PhysicalUnit = i1735[7]
  i1734.m_FallbackScreenDPI = i1735[8]
  i1734.m_DefaultSpriteDPI = i1735[9]
  i1734.m_DynamicPixelsPerUnit = i1735[10]
  i1734.m_PresetInfoIsWorld = !!i1735[11]
  return i1734
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1737 = data
  i1736.m_IgnoreReversedGraphics = !!i1737[0]
  i1736.m_BlockingObjects = i1737[1]
  i1736.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1737[2] )
  return i1736
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1738 = root || request.c( 'Playable.GameManager' )
  var i1739 = data
  i1738.EventCountdownEndGame = request.d('System.Action', i1739[0], i1738.EventCountdownEndGame)
  i1738._totalEvent = i1739[1]
  i1738._maxEvent = i1739[2]
  i1738._endTime = i1739[3]
  request.r(i1739[4], i1739[5], 0, i1738, '_backgroundMusic')
  request.r(i1739[6], i1739[7], 0, i1738, '_backgroundTexture')
  request.r(i1739[8], i1739[9], 0, i1738, '_btnBlock')
  request.r(i1739[10], i1739[11], 0, i1738, '_background')
  request.r(i1739[12], i1739[13], 0, i1738, '_losePanel')
  request.r(i1739[14], i1739[15], 0, i1738, '_progressFillImage')
  request.r(i1739[16], i1739[17], 0, i1738, '_progressText')
  i1738._progressTweenDuration = i1739[18]
  request.r(i1739[19], i1739[20], 0, i1738, '_timerFillImage')
  request.r(i1739[21], i1739[22], 0, i1738, '_timerText')
  i1738._timerPunchScale = i1739[23]
  return i1738
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1740 = root || request.c( 'System.Action' )
  var i1741 = data
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1743 = data
  i1742.cullTransparentMesh = !!i1743[0]
  return i1742
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.UI.Image' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'm_Sprite')
  i1744.m_Type = i1745[2]
  i1744.m_PreserveAspect = !!i1745[3]
  i1744.m_FillCenter = !!i1745[4]
  i1744.m_FillMethod = i1745[5]
  i1744.m_FillAmount = i1745[6]
  i1744.m_FillClockwise = !!i1745[7]
  i1744.m_FillOrigin = i1745[8]
  i1744.m_UseSpriteMesh = !!i1745[9]
  i1744.m_PixelsPerUnitMultiplier = i1745[10]
  request.r(i1745[11], i1745[12], 0, i1744, 'm_Material')
  i1744.m_Maskable = !!i1745[13]
  i1744.m_Color = new pc.Color(i1745[14], i1745[15], i1745[16], i1745[17])
  i1744.m_RaycastTarget = !!i1745[18]
  i1744.m_RaycastPadding = new pc.Vec4( i1745[19], i1745[20], i1745[21], i1745[22] )
  return i1744
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'm_Texture')
  i1746.m_UVRect = UnityEngine.Rect.MinMaxRect(i1747[2], i1747[3], i1747[4], i1747[5])
  request.r(i1747[6], i1747[7], 0, i1746, 'm_Material')
  i1746.m_Maskable = !!i1747[8]
  i1746.m_Color = new pc.Color(i1747[9], i1747[10], i1747[11], i1747[12])
  i1746.m_RaycastTarget = !!i1747[13]
  i1746.m_RaycastPadding = new pc.Vec4( i1747[14], i1747[15], i1747[16], i1747[17] )
  return i1746
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1749 = data
  i1748.m_hasFontAssetChanged = !!i1749[0]
  request.r(i1749[1], i1749[2], 0, i1748, 'm_baseMaterial')
  i1748.m_maskOffset = new pc.Vec4( i1749[3], i1749[4], i1749[5], i1749[6] )
  i1748.m_text = i1749[7]
  i1748.m_isRightToLeft = !!i1749[8]
  request.r(i1749[9], i1749[10], 0, i1748, 'm_fontAsset')
  request.r(i1749[11], i1749[12], 0, i1748, 'm_sharedMaterial')
  var i1751 = i1749[13]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 2, i1750, '')
  }
  i1748.m_fontSharedMaterials = i1750
  request.r(i1749[14], i1749[15], 0, i1748, 'm_fontMaterial')
  var i1753 = i1749[16]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1748.m_fontMaterials = i1752
  i1748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1749[17], i1749[18], i1749[19], i1749[20])
  i1748.m_fontColor = new pc.Color(i1749[21], i1749[22], i1749[23], i1749[24])
  i1748.m_enableVertexGradient = !!i1749[25]
  i1748.m_colorMode = i1749[26]
  i1748.m_fontColorGradient = request.d('TMPro.VertexGradient', i1749[27], i1748.m_fontColorGradient)
  request.r(i1749[28], i1749[29], 0, i1748, 'm_fontColorGradientPreset')
  request.r(i1749[30], i1749[31], 0, i1748, 'm_spriteAsset')
  i1748.m_tintAllSprites = !!i1749[32]
  request.r(i1749[33], i1749[34], 0, i1748, 'm_StyleSheet')
  i1748.m_TextStyleHashCode = i1749[35]
  i1748.m_overrideHtmlColors = !!i1749[36]
  i1748.m_faceColor = UnityEngine.Color32.ConstructColor(i1749[37], i1749[38], i1749[39], i1749[40])
  i1748.m_fontSize = i1749[41]
  i1748.m_fontSizeBase = i1749[42]
  i1748.m_fontWeight = i1749[43]
  i1748.m_enableAutoSizing = !!i1749[44]
  i1748.m_fontSizeMin = i1749[45]
  i1748.m_fontSizeMax = i1749[46]
  i1748.m_fontStyle = i1749[47]
  i1748.m_HorizontalAlignment = i1749[48]
  i1748.m_VerticalAlignment = i1749[49]
  i1748.m_textAlignment = i1749[50]
  i1748.m_characterSpacing = i1749[51]
  i1748.m_wordSpacing = i1749[52]
  i1748.m_lineSpacing = i1749[53]
  i1748.m_lineSpacingMax = i1749[54]
  i1748.m_paragraphSpacing = i1749[55]
  i1748.m_charWidthMaxAdj = i1749[56]
  i1748.m_TextWrappingMode = i1749[57]
  i1748.m_wordWrappingRatios = i1749[58]
  i1748.m_overflowMode = i1749[59]
  request.r(i1749[60], i1749[61], 0, i1748, 'm_linkedTextComponent')
  request.r(i1749[62], i1749[63], 0, i1748, 'parentLinkedComponent')
  i1748.m_enableKerning = !!i1749[64]
  var i1755 = i1749[65]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(i1755[i + 0]);
  }
  i1748.m_ActiveFontFeatures = i1754
  i1748.m_enableExtraPadding = !!i1749[66]
  i1748.checkPaddingRequired = !!i1749[67]
  i1748.m_isRichText = !!i1749[68]
  i1748.m_parseCtrlCharacters = !!i1749[69]
  i1748.m_isOrthographic = !!i1749[70]
  i1748.m_isCullingEnabled = !!i1749[71]
  i1748.m_horizontalMapping = i1749[72]
  i1748.m_verticalMapping = i1749[73]
  i1748.m_uvLineOffset = i1749[74]
  i1748.m_geometrySortingOrder = i1749[75]
  i1748.m_IsTextObjectScaleStatic = !!i1749[76]
  i1748.m_VertexBufferAutoSizeReduction = !!i1749[77]
  i1748.m_useMaxVisibleDescender = !!i1749[78]
  i1748.m_pageToDisplay = i1749[79]
  i1748.m_margin = new pc.Vec4( i1749[80], i1749[81], i1749[82], i1749[83] )
  i1748.m_isUsingLegacyAnimationComponent = !!i1749[84]
  i1748.m_isVolumetricText = !!i1749[85]
  request.r(i1749[86], i1749[87], 0, i1748, 'm_Material')
  i1748.m_EmojiFallbackSupport = !!i1749[88]
  i1748.m_Maskable = !!i1749[89]
  i1748.m_Color = new pc.Color(i1749[90], i1749[91], i1749[92], i1749[93])
  i1748.m_RaycastTarget = !!i1749[94]
  i1748.m_RaycastPadding = new pc.Vec4( i1749[95], i1749[96], i1749[97], i1749[98] )
  return i1748
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.VertexGradient' )
  var i1759 = data
  i1758.topLeft = new pc.Color(i1759[0], i1759[1], i1759[2], i1759[3])
  i1758.topRight = new pc.Color(i1759[4], i1759[5], i1759[6], i1759[7])
  i1758.bottomLeft = new pc.Color(i1759[8], i1759[9], i1759[10], i1759[11])
  i1758.bottomRight = new pc.Color(i1759[12], i1759[13], i1759[14], i1759[15])
  return i1758
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.UI.Button' )
  var i1763 = data
  i1762.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1763[0], i1762.m_OnClick)
  i1762.m_Navigation = request.d('UnityEngine.UI.Navigation', i1763[1], i1762.m_Navigation)
  i1762.m_Transition = i1763[2]
  i1762.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1763[3], i1762.m_Colors)
  i1762.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1763[4], i1762.m_SpriteState)
  i1762.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1763[5], i1762.m_AnimationTriggers)
  i1762.m_Interactable = !!i1763[6]
  request.r(i1763[7], i1763[8], 0, i1762, 'm_TargetGraphic')
  return i1762
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1765 = data
  i1764.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1765[0], i1764.m_PersistentCalls)
  return i1764
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('UnityEngine.Events.PersistentCall', i1769[i + 0]));
  }
  i1766.m_Calls = i1768
  return i1766
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'm_Target')
  i1772.m_TargetAssemblyTypeName = i1773[2]
  i1772.m_MethodName = i1773[3]
  i1772.m_Mode = i1773[4]
  i1772.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1773[5], i1772.m_Arguments)
  i1772.m_CallState = i1773[6]
  return i1772
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'm_ObjectArgument')
  i1774.m_ObjectArgumentAssemblyTypeName = i1775[2]
  i1774.m_IntArgument = i1775[3]
  i1774.m_FloatArgument = i1775[4]
  i1774.m_StringArgument = i1775[5]
  i1774.m_BoolArgument = !!i1775[6]
  return i1774
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1777 = data
  i1776.m_Mode = i1777[0]
  i1776.m_WrapAround = !!i1777[1]
  request.r(i1777[2], i1777[3], 0, i1776, 'm_SelectOnUp')
  request.r(i1777[4], i1777[5], 0, i1776, 'm_SelectOnDown')
  request.r(i1777[6], i1777[7], 0, i1776, 'm_SelectOnLeft')
  request.r(i1777[8], i1777[9], 0, i1776, 'm_SelectOnRight')
  return i1776
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1779 = data
  i1778.m_NormalColor = new pc.Color(i1779[0], i1779[1], i1779[2], i1779[3])
  i1778.m_HighlightedColor = new pc.Color(i1779[4], i1779[5], i1779[6], i1779[7])
  i1778.m_PressedColor = new pc.Color(i1779[8], i1779[9], i1779[10], i1779[11])
  i1778.m_SelectedColor = new pc.Color(i1779[12], i1779[13], i1779[14], i1779[15])
  i1778.m_DisabledColor = new pc.Color(i1779[16], i1779[17], i1779[18], i1779[19])
  i1778.m_ColorMultiplier = i1779[20]
  i1778.m_FadeDuration = i1779[21]
  return i1778
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'm_HighlightedSprite')
  request.r(i1781[2], i1781[3], 0, i1780, 'm_PressedSprite')
  request.r(i1781[4], i1781[5], 0, i1780, 'm_SelectedSprite')
  request.r(i1781[6], i1781[7], 0, i1780, 'm_DisabledSprite')
  return i1780
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1783 = data
  i1782.m_NormalTrigger = i1783[0]
  i1782.m_HighlightedTrigger = i1783[1]
  i1782.m_PressedTrigger = i1783[2]
  i1782.m_SelectedTrigger = i1783[3]
  i1782.m_DisabledTrigger = i1783[4]
  return i1782
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1785 = data
  i1784.m_ShowMaskGraphic = !!i1785[0]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'clip')
  request.r(i1787[2], i1787[3], 0, i1786, 'outputAudioMixerGroup')
  i1786.playOnAwake = !!i1787[4]
  i1786.loop = !!i1787[5]
  i1786.time = i1787[6]
  i1786.volume = i1787[7]
  i1786.pitch = i1787[8]
  i1786.enabled = !!i1787[9]
  return i1786
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i1789 = data
  i1788.m_Padding = new pc.Vec4( i1789[0], i1789[1], i1789[2], i1789[3] )
  i1788.m_Softness = new pc.Vec2( i1789[4], i1789[5] )
  return i1788
}

Deserializers["GameController"] = function (request, data, root) {
  var i1790 = root || request.c( 'GameController' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, '_tutorialHand')
  request.r(i1791[2], i1791[3], 0, i1790, '_tutorialInPlace')
  request.r(i1791[4], i1791[5], 0, i1790, '_tutorialFrom')
  request.r(i1791[6], i1791[7], 0, i1790, '_tutorialTo')
  i1790._tutorialScaleDuration = i1791[8]
  i1790._tutorialMoveDuration = i1791[9]
  i1790._tutorialStartDelay = i1791[10]
  return i1790
}

Deserializers["Item"] = function (request, data, root) {
  var i1792 = root || request.c( 'Item' )
  var i1793 = data
  var i1795 = i1793[0]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('Item+ItemData', i1795[i + 0]));
  }
  i1792._data = i1794
  i1792._dragSortingOrder = i1793[1]
  return i1792
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i1798 = root || request.c( 'Item+ItemData' )
  var i1799 = data
  i1798.id = i1799[0]
  i1798.stateChange = request.d('Item+GirlStateChange', i1799[1], i1798.stateChange)
  i1798.animationStateTiming = i1799[2]
  i1798.result = i1799[3]
  return i1798
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i1800 = root || request.c( 'Item+GirlStateChange' )
  var i1801 = data
  i1800.changeBodyShape = !!i1801[0]
  i1800.bodyShape = i1801[1]
  i1800.changeOutfit = !!i1801[2]
  i1800.outfit = i1801[3]
  i1800.changeRestraint = !!i1801[4]
  i1800.restraint = i1801[5]
  return i1800
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1802 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'skeletonDataAsset')
  request.r(i1803[2], i1803[3], 0, i1802, 'additiveMaterial')
  request.r(i1803[4], i1803[5], 0, i1802, 'multiplyMaterial')
  request.r(i1803[6], i1803[7], 0, i1802, 'screenMaterial')
  i1802.initialSkinName = i1803[8]
  i1802.initialFlipX = !!i1803[9]
  i1802.initialFlipY = !!i1803[10]
  i1802.startingAnimation = i1803[11]
  i1802.startingLoop = !!i1803[12]
  i1802.timeScale = i1803[13]
  i1802.freeze = !!i1803[14]
  i1802.layoutScaleMode = i1803[15]
  i1802.updateWhenInvisible = i1803[16]
  i1802.allowMultipleCanvasRenderers = !!i1803[17]
  var i1805 = i1803[18]
  var i1804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1805.length; i += 2) {
  request.r(i1805[i + 0], i1805[i + 1], 1, i1804, '')
  }
  i1802.canvasRenderers = i1804
  i1802.enableSeparatorSlots = !!i1803[19]
  i1802.updateSeparatorPartLocation = !!i1803[20]
  i1802.updateSeparatorPartScale = !!i1803[21]
  i1802.disableMeshAssignmentOnOverride = !!i1803[22]
  i1802.referenceSize = new pc.Vec2( i1803[23], i1803[24] )
  i1802.referenceScale = i1803[25]
  i1802.rectTransformSize = new pc.Vec2( i1803[26], i1803[27] )
  i1802.editReferenceRect = !!i1803[28]
  var i1807 = i1803[29]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1802.separatorSlotNames = i1806
  var i1809 = i1803[30]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 1, i1808, '')
  }
  i1802.separatorParts = i1808
  i1802.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1803[31], i1802.meshGenerator)
  i1802.updateTiming = i1803[32]
  i1802.unscaledTime = !!i1803[33]
  request.r(i1803[34], i1803[35], 0, i1802, 'm_Material')
  i1802.m_Maskable = !!i1803[36]
  i1802.m_Color = new pc.Color(i1803[37], i1803[38], i1803[39], i1803[40])
  i1802.m_RaycastTarget = !!i1803[41]
  i1802.m_RaycastPadding = new pc.Vec4( i1803[42], i1803[43], i1803[44], i1803[45] )
  return i1802
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1816 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1817 = data
  i1816.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1817[0], i1816.settings)
  return i1816
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1818 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1819 = data
  i1818.useClipping = !!i1819[0]
  i1818.zSpacing = i1819[1]
  i1818.pmaVertexColors = !!i1819[2]
  i1818.tintBlack = !!i1819[3]
  i1818.canvasGroupTintBlack = !!i1819[4]
  i1818.calculateTangents = !!i1819[5]
  i1818.addNormals = !!i1819[6]
  i1818.immutableTriangles = !!i1819[7]
  return i1818
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i1820 = root || request.c( 'Playable.Door' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, '_image')
  request.r(i1821[2], i1821[3], 0, i1820, '_open')
  request.r(i1821[4], i1821[5], 0, i1820, '_close')
  return i1820
}

Deserializers["Girl"] = function (request, data, root) {
  var i1822 = root || request.c( 'Girl' )
  var i1823 = data
  i1822._enableDebugLogs = !!i1823[0]
  i1822._status = request.d('GirlStatus', i1823[1], i1822._status)
  var i1825 = i1823[2]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('Girl+BodyShapeSkins', i1825[i + 0]));
  }
  i1822._bodyShapeSkins = i1824
  var i1827 = i1823[3]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.add(request.d('Girl+OutfitSkins', i1827[i + 0]));
  }
  i1822._outfitSkins = i1826
  var i1829 = i1823[4]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('Girl+RestraintSkins', i1829[i + 0]));
  }
  i1822._restraintSkins = i1828
  request.r(i1823[5], i1823[6], 0, i1822, '_skeletonGraphic')
  var i1831 = i1823[7]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( i1831[i + 0] );
  }
  i1822._defaultSkins = i1830
  i1822._defaultAnimation = request.d('Target+GirlAnimation', i1823[8], i1822._defaultAnimation)
  var i1833 = i1823[9]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('Target+GirlAnimation', i1833[i + 0]));
  }
  i1822._removeGlassesAnimations = i1832
  i1822._endGameDelay = i1823[10]
  i1822._boy1 = request.d('Girl+BoyAnimationData', i1823[11], i1822._boy1)
  i1822._boy2 = request.d('Girl+BoyAnimationData', i1823[12], i1822._boy2)
  return i1822
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i1834 = root || request.c( 'GirlStatus' )
  var i1835 = data
  i1834.bodyShape = i1835[0]
  i1834.outfit = i1835[1]
  i1834.restraint = i1835[2]
  return i1834
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i1838 = root || request.c( 'Girl+BodyShapeSkins' )
  var i1839 = data
  i1838.bodyShape = i1839[0]
  var i1841 = i1839[1]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( i1841[i + 0] );
  }
  i1838.skins = i1840
  return i1838
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i1844 = root || request.c( 'Girl+OutfitSkins' )
  var i1845 = data
  i1844.outfit = i1845[0]
  var i1847 = i1845[1]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1844.skins = i1846
  return i1844
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i1850 = root || request.c( 'Girl+RestraintSkins' )
  var i1851 = data
  i1850.restraint = i1851[0]
  var i1853 = i1851[1]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( i1853[i + 0] );
  }
  i1850.skins = i1852
  return i1850
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i1854 = root || request.c( 'Target+GirlAnimation' )
  var i1855 = data
  i1854.animationName = i1855[0]
  i1854.loop = !!i1855[1]
  return i1854
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i1858 = root || request.c( 'Girl+BoyAnimationData' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'skeletonGraphic')
  i1858.idleAnimation = i1859[2]
  i1858.winAnimation = i1859[3]
  i1858.loseAnimation = i1859[4]
  return i1858
}

Deserializers["Target"] = function (request, data, root) {
  var i1860 = root || request.c( 'Target' )
  var i1861 = data
  i1860._part = i1861[0]
  request.r(i1861[1], i1861[2], 0, i1860, '_girl')
  request.r(i1861[3], i1861[4], 0, i1860, '_skeletonGraphic')
  var i1863 = i1861[5]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.add(request.d('Target+ItemReaction', i1863[i + 0]));
  }
  i1860._itemReactions = i1862
  return i1860
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i1866 = root || request.c( 'Target+ItemReaction' )
  var i1867 = data
  i1866.itemId = i1867[0]
  var i1869 = i1867[1]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.add(request.d('Target+AnimationRule', i1869[i + 0]));
  }
  i1866.animationRules = i1868
  var i1871 = i1867[2]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1866.skinAdded = i1870
  var i1873 = i1867[3]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1866.skinRemoved = i1872
  request.r(i1867[4], i1867[5], 0, i1866, 'audioClip')
  return i1866
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i1876 = root || request.c( 'Target+AnimationRule' )
  var i1877 = data
  i1876.checkBodyShape = !!i1877[0]
  i1876.bodyShape = i1877[1]
  i1876.checkOutfit = !!i1877[2]
  i1876.outfit = i1877[3]
  i1876.checkRestraint = !!i1877[4]
  i1876.restraint = i1877[5]
  var i1879 = i1877[6]
  var i1878 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.add(request.d('Target+GirlAnimation', i1879[i + 0]));
  }
  i1876.animations = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1881 = data
  i1880.m_Alpha = i1881[0]
  i1880.m_Interactable = !!i1881[1]
  i1880.m_BlocksRaycasts = !!i1881[2]
  i1880.m_IgnoreParentGroups = !!i1881[3]
  i1880.enabled = !!i1881[4]
  return i1880
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1883 = data
  i1882.m_Spacing = i1883[0]
  i1882.m_ChildForceExpandWidth = !!i1883[1]
  i1882.m_ChildForceExpandHeight = !!i1883[2]
  i1882.m_ChildControlWidth = !!i1883[3]
  i1882.m_ChildControlHeight = !!i1883[4]
  i1882.m_ChildScaleWidth = !!i1883[5]
  i1882.m_ChildScaleHeight = !!i1883[6]
  i1882.m_ReverseArrangement = !!i1883[7]
  i1882.m_Padding = UnityEngine.RectOffset.FromPaddings(i1883[8], i1883[9], i1883[10], i1883[11])
  i1882.m_ChildAlignment = i1883[12]
  return i1882
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i1884 = root || request.c( 'Playable.AudioManager' )
  var i1885 = data
  var i1887 = i1885[0]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.add(request.d('Playable.SoundData', i1887[i + 0]));
  }
  i1884._sounds = i1886
  request.r(i1885[1], i1885[2], 0, i1884, '_audioMusic')
  request.r(i1885[3], i1885[4], 0, i1884, '_audioSound')
  return i1884
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i1890 = root || request.c( 'Playable.SoundData' )
  var i1891 = data
  i1890.Type = i1891[0]
  request.r(i1891[1], i1891[2], 0, i1890, 'Clip')
  return i1890
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'm_FirstSelected')
  i1892.m_sendNavigationEvents = !!i1893[2]
  i1892.m_DragThreshold = i1893[3]
  return i1892
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1895 = data
  i1894.m_HorizontalAxis = i1895[0]
  i1894.m_VerticalAxis = i1895[1]
  i1894.m_SubmitButton = i1895[2]
  i1894.m_CancelButton = i1895[3]
  i1894.m_InputActionsPerSecond = i1895[4]
  i1894.m_RepeatDelay = i1895[5]
  i1894.m_ForceModuleActive = !!i1895[6]
  i1894.m_SendPointerHoverToParent = !!i1895[7]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1897 = data
  i1896.ambientIntensity = i1897[0]
  i1896.reflectionIntensity = i1897[1]
  i1896.ambientMode = i1897[2]
  i1896.ambientLight = new pc.Color(i1897[3], i1897[4], i1897[5], i1897[6])
  i1896.ambientSkyColor = new pc.Color(i1897[7], i1897[8], i1897[9], i1897[10])
  i1896.ambientGroundColor = new pc.Color(i1897[11], i1897[12], i1897[13], i1897[14])
  i1896.ambientEquatorColor = new pc.Color(i1897[15], i1897[16], i1897[17], i1897[18])
  i1896.fogColor = new pc.Color(i1897[19], i1897[20], i1897[21], i1897[22])
  i1896.fogEndDistance = i1897[23]
  i1896.fogStartDistance = i1897[24]
  i1896.fogDensity = i1897[25]
  i1896.fog = !!i1897[26]
  request.r(i1897[27], i1897[28], 0, i1896, 'skybox')
  i1896.fogMode = i1897[29]
  var i1899 = i1897[30]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1899[i + 0]) );
  }
  i1896.lightmaps = i1898
  i1896.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1897[31], i1896.lightProbes)
  i1896.lightmapsMode = i1897[32]
  i1896.mixedBakeMode = i1897[33]
  i1896.environmentLightingMode = i1897[34]
  i1896.ambientProbe = new pc.SphericalHarmonicsL2(i1897[35])
  request.r(i1897[36], i1897[37], 0, i1896, 'customReflection')
  request.r(i1897[38], i1897[39], 0, i1896, 'defaultReflection')
  i1896.defaultReflectionMode = i1897[40]
  i1896.defaultReflectionResolution = i1897[41]
  i1896.sunLightObjectId = i1897[42]
  i1896.pixelLightCount = i1897[43]
  i1896.defaultReflectionHDR = !!i1897[44]
  i1896.hasLightDataAsset = !!i1897[45]
  i1896.hasManualGenerate = !!i1897[46]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'lightmapColor')
  request.r(i1903[2], i1903[3], 0, i1902, 'lightmapDirection')
  request.r(i1903[4], i1903[5], 0, i1902, 'shadowMask')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1904 = root || new UnityEngine.LightProbes()
  var i1905 = data
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1915[i + 0]));
  }
  i1912.ShaderCompilationErrors = i1914
  i1912.name = i1913[1]
  i1912.guid = i1913[2]
  var i1917 = i1913[3]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1912.shaderDefinedKeywords = i1916
  var i1919 = i1913[4]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1919[i + 0]) );
  }
  i1912.passes = i1918
  var i1921 = i1913[5]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1921[i + 0]) );
  }
  i1912.usePasses = i1920
  var i1923 = i1913[6]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1923[i + 0]) );
  }
  i1912.defaultParameterValues = i1922
  request.r(i1913[7], i1913[8], 0, i1912, 'unityFallbackShader')
  i1912.readDepth = !!i1913[9]
  i1912.hasDepthOnlyPass = !!i1913[10]
  i1912.isCreatedByShaderGraph = !!i1913[11]
  i1912.disableBatching = !!i1913[12]
  i1912.compiled = !!i1913[13]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1927 = data
  i1926.shaderName = i1927[0]
  i1926.errorMessage = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1930 = root || new pc.UnityShaderPass()
  var i1931 = data
  i1930.id = i1931[0]
  i1930.subShaderIndex = i1931[1]
  i1930.name = i1931[2]
  i1930.passType = i1931[3]
  i1930.grabPassTextureName = i1931[4]
  i1930.usePass = !!i1931[5]
  i1930.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[6], i1930.zTest)
  i1930.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[7], i1930.zWrite)
  i1930.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[8], i1930.culling)
  i1930.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1931[9], i1930.blending)
  i1930.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1931[10], i1930.alphaBlending)
  i1930.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[11], i1930.colorWriteMask)
  i1930.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[12], i1930.offsetUnits)
  i1930.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[13], i1930.offsetFactor)
  i1930.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[14], i1930.stencilRef)
  i1930.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[15], i1930.stencilReadMask)
  i1930.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1931[16], i1930.stencilWriteMask)
  i1930.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[17], i1930.stencilOp)
  i1930.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[18], i1930.stencilOpFront)
  i1930.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1931[19], i1930.stencilOpBack)
  var i1933 = i1931[20]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1933[i + 0]) );
  }
  i1930.tags = i1932
  var i1935 = i1931[21]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( i1935[i + 0] );
  }
  i1930.passDefinedKeywords = i1934
  var i1937 = i1931[22]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1937[i + 0]) );
  }
  i1930.passDefinedKeywordGroups = i1936
  var i1939 = i1931[23]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1939[i + 0]) );
  }
  i1930.variants = i1938
  var i1941 = i1931[24]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1941[i + 0]) );
  }
  i1930.excludedVariants = i1940
  i1930.hasDepthReader = !!i1931[25]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1943 = data
  i1942.val = i1943[0]
  i1942.name = i1943[1]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1945 = data
  i1944.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[0], i1944.src)
  i1944.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[1], i1944.dst)
  i1944.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1945[2], i1944.op)
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1947 = data
  i1946.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[0], i1946.pass)
  i1946.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[1], i1946.fail)
  i1946.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[2], i1946.zFail)
  i1946.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1947[3], i1946.comp)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1951 = data
  i1950.name = i1951[0]
  i1950.value = i1951[1]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( i1957[i + 0] );
  }
  i1954.keywords = i1956
  i1954.hasDiscard = !!i1955[1]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1961 = data
  i1960.passId = i1961[0]
  i1960.subShaderIndex = i1961[1]
  var i1963 = i1961[2]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( i1963[i + 0] );
  }
  i1960.keywords = i1962
  i1960.vertexProgram = i1961[3]
  i1960.fragmentProgram = i1961[4]
  i1960.exportedForWebGl2 = !!i1961[5]
  i1960.readDepth = !!i1961[6]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'shader')
  i1966.pass = i1967[2]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.type = i1971[1]
  i1970.value = new pc.Vec4( i1971[2], i1971[3], i1971[4], i1971[5] )
  i1970.textureValue = i1971[6]
  i1970.shaderPropertyFlag = i1971[7]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1973 = data
  i1972.name = i1973[0]
  request.r(i1973[1], i1973[2], 0, i1972, 'texture')
  i1972.aabb = i1973[3]
  i1972.vertices = i1973[4]
  i1972.triangles = i1973[5]
  i1972.textureRect = UnityEngine.Rect.MinMaxRect(i1973[6], i1973[7], i1973[8], i1973[9])
  i1972.packedRect = UnityEngine.Rect.MinMaxRect(i1973[10], i1973[11], i1973[12], i1973[13])
  i1972.border = new pc.Vec4( i1973[14], i1973[15], i1973[16], i1973[17] )
  i1972.transparency = i1973[18]
  i1972.bounds = i1973[19]
  i1972.pixelsPerUnit = i1973[20]
  i1972.textureWidth = i1973[21]
  i1972.textureHeight = i1973[22]
  i1972.nativeSize = new pc.Vec2( i1973[23], i1973[24] )
  i1972.pivot = new pc.Vec2( i1973[25], i1973[26] )
  i1972.textureRectOffset = new pc.Vec2( i1973[27], i1973[28] )
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1975 = data
  i1974.name = i1975[0]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.ascent = i1977[1]
  i1976.originalLineHeight = i1977[2]
  i1976.fontSize = i1977[3]
  var i1979 = i1977[4]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1979[i + 0]) );
  }
  i1976.characterInfo = i1978
  request.r(i1977[5], i1977[6], 0, i1976, 'texture')
  i1976.originalFontSize = i1977[7]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1983 = data
  i1982.index = i1983[0]
  i1982.advance = i1983[1]
  i1982.bearing = i1983[2]
  i1982.glyphWidth = i1983[3]
  i1982.glyphHeight = i1983[4]
  i1982.minX = i1983[5]
  i1982.maxX = i1983[6]
  i1982.minY = i1983[7]
  i1982.maxY = i1983[8]
  i1982.uvBottomLeftX = i1983[9]
  i1982.uvBottomLeftY = i1983[10]
  i1982.uvBottomRightX = i1983[11]
  i1982.uvBottomRightY = i1983[12]
  i1982.uvTopLeftX = i1983[13]
  i1982.uvTopLeftY = i1983[14]
  i1982.uvTopRightX = i1983[15]
  i1982.uvTopRightY = i1983[16]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.bytes64 = i1985[1]
  i1984.data = i1985[2]
  return i1984
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1987 = data
  i1986.normalStyle = i1987[0]
  i1986.normalSpacingOffset = i1987[1]
  i1986.boldStyle = i1987[2]
  i1986.boldSpacing = i1987[3]
  i1986.italicStyle = i1987[4]
  i1986.tabSize = i1987[5]
  request.r(i1987[6], i1987[7], 0, i1986, 'atlas')
  i1986.m_SourceFontFileGUID = i1987[8]
  i1986.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1987[9], i1986.m_CreationSettings)
  request.r(i1987[10], i1987[11], 0, i1986, 'm_SourceFontFile')
  i1986.m_SourceFontFilePath = i1987[12]
  i1986.m_AtlasPopulationMode = i1987[13]
  i1986.InternalDynamicOS = !!i1987[14]
  var i1989 = i1987[15]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.add(request.d('UnityEngine.TextCore.Glyph', i1989[i + 0]));
  }
  i1986.m_GlyphTable = i1988
  var i1991 = i1987[16]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.add(request.d('TMPro.TMP_Character', i1991[i + 0]));
  }
  i1986.m_CharacterTable = i1990
  var i1993 = i1987[17]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 2, i1992, '')
  }
  i1986.m_AtlasTextures = i1992
  i1986.m_AtlasTextureIndex = i1987[18]
  i1986.m_IsMultiAtlasTexturesEnabled = !!i1987[19]
  i1986.m_GetFontFeatures = !!i1987[20]
  i1986.m_ClearDynamicDataOnBuild = !!i1987[21]
  i1986.m_AtlasWidth = i1987[22]
  i1986.m_AtlasHeight = i1987[23]
  i1986.m_AtlasPadding = i1987[24]
  i1986.m_AtlasRenderMode = i1987[25]
  var i1995 = i1987[26]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.add(request.d('UnityEngine.TextCore.GlyphRect', i1995[i + 0]));
  }
  i1986.m_UsedGlyphRects = i1994
  var i1997 = i1987[27]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.add(request.d('UnityEngine.TextCore.GlyphRect', i1997[i + 0]));
  }
  i1986.m_FreeGlyphRects = i1996
  i1986.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1987[28], i1986.m_FontFeatureTable)
  i1986.m_ShouldReimportFontFeatures = !!i1987[29]
  var i1999 = i1987[30]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1986.m_FallbackFontAssetTable = i1998
  var i2001 = i1987[31]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('TMPro.TMP_FontWeightPair', i2001[i + 0]) );
  }
  i1986.m_FontWeightTable = i2000
  var i2003 = i1987[32]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('TMPro.TMP_FontWeightPair', i2003[i + 0]) );
  }
  i1986.fontWeights = i2002
  i1986.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1987[33], i1986.m_fontInfo)
  var i2005 = i1987[34]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('TMPro.TMP_Glyph', i2005[i + 0]));
  }
  i1986.m_glyphInfoList = i2004
  i1986.m_KerningTable = request.d('TMPro.KerningTable', i1987[35], i1986.m_KerningTable)
  var i2007 = i1987[36]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i1986.fallbackFontAssets = i2006
  i1986.m_Version = i1987[37]
  i1986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1987[38], i1986.m_FaceInfo)
  request.r(i1987[39], i1987[40], 0, i1986, 'm_Material')
  return i1986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2009 = data
  i2008.sourceFontFileName = i2009[0]
  i2008.sourceFontFileGUID = i2009[1]
  i2008.faceIndex = i2009[2]
  i2008.pointSizeSamplingMode = i2009[3]
  i2008.pointSize = i2009[4]
  i2008.padding = i2009[5]
  i2008.paddingMode = i2009[6]
  i2008.packingMode = i2009[7]
  i2008.atlasWidth = i2009[8]
  i2008.atlasHeight = i2009[9]
  i2008.characterSetSelectionMode = i2009[10]
  i2008.characterSequence = i2009[11]
  i2008.referencedFontAssetGUID = i2009[12]
  i2008.referencedTextAssetGUID = i2009[13]
  i2008.fontStyle = i2009[14]
  i2008.fontStyleModifier = i2009[15]
  i2008.renderMode = i2009[16]
  i2008.includeFontFeatures = !!i2009[17]
  return i2008
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2013 = data
  i2012.m_Index = i2013[0]
  i2012.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2013[1], i2012.m_Metrics)
  i2012.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2013[2], i2012.m_GlyphRect)
  i2012.m_Scale = i2013[3]
  i2012.m_AtlasIndex = i2013[4]
  i2012.m_ClassDefinitionType = i2013[5]
  return i2012
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2015 = data
  i2014.m_Width = i2015[0]
  i2014.m_Height = i2015[1]
  i2014.m_HorizontalBearingX = i2015[2]
  i2014.m_HorizontalBearingY = i2015[3]
  i2014.m_HorizontalAdvance = i2015[4]
  return i2014
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2017 = data
  i2016.m_X = i2017[0]
  i2016.m_Y = i2017[1]
  i2016.m_Width = i2017[2]
  i2016.m_Height = i2017[3]
  return i2016
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.TMP_Character' )
  var i2021 = data
  i2020.m_ElementType = i2021[0]
  i2020.m_Unicode = i2021[1]
  i2020.m_GlyphIndex = i2021[2]
  i2020.m_Scale = i2021[3]
  return i2020
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2026 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('TMPro.MultipleSubstitutionRecord', i2029[i + 0]));
  }
  i2026.m_MultipleSubstitutionRecords = i2028
  var i2031 = i2027[1]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.add(request.d('TMPro.LigatureSubstitutionRecord', i2031[i + 0]));
  }
  i2026.m_LigatureSubstitutionRecords = i2030
  var i2033 = i2027[2]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2033[i + 0]));
  }
  i2026.m_GlyphPairAdjustmentRecords = i2032
  var i2035 = i2027[3]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2035[i + 0]));
  }
  i2026.m_MarkToBaseAdjustmentRecords = i2034
  var i2037 = i2027[4]
  var i2036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2037[i + 0]));
  }
  i2026.m_MarkToMarkAdjustmentRecords = i2036
  return i2026
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2041 = data
  i2040.m_TargetGlyphID = i2041[0]
  i2040.m_SubstituteGlyphIDs = i2041[1]
  return i2040
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2044 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2045 = data
  i2044.m_ComponentGlyphIDs = i2045[0]
  i2044.m_LigatureGlyphID = i2045[1]
  return i2044
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2049 = data
  i2048.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2049[0], i2048.m_FirstAdjustmentRecord)
  i2048.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2049[1], i2048.m_SecondAdjustmentRecord)
  i2048.m_FeatureLookupFlags = i2049[2]
  return i2048
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2052 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2053 = data
  i2052.m_BaseGlyphID = i2053[0]
  i2052.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2053[1], i2052.m_BaseGlyphAnchorPoint)
  i2052.m_MarkGlyphID = i2053[2]
  i2052.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2053[3], i2052.m_MarkPositionAdjustment)
  return i2052
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2056 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2057 = data
  i2056.m_BaseMarkGlyphID = i2057[0]
  i2056.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2057[1], i2056.m_BaseMarkGlyphAnchorPoint)
  i2056.m_CombiningMarkGlyphID = i2057[2]
  i2056.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2057[3], i2056.m_CombiningMarkPositionAdjustment)
  return i2056
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'regularTypeface')
  request.r(i2063[2], i2063[3], 0, i2062, 'italicTypeface')
  return i2062
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2065 = data
  i2064.Name = i2065[0]
  i2064.PointSize = i2065[1]
  i2064.Scale = i2065[2]
  i2064.CharacterCount = i2065[3]
  i2064.LineHeight = i2065[4]
  i2064.Baseline = i2065[5]
  i2064.Ascender = i2065[6]
  i2064.CapHeight = i2065[7]
  i2064.Descender = i2065[8]
  i2064.CenterLine = i2065[9]
  i2064.SuperscriptOffset = i2065[10]
  i2064.SubscriptOffset = i2065[11]
  i2064.SubSize = i2065[12]
  i2064.Underline = i2065[13]
  i2064.UnderlineThickness = i2065[14]
  i2064.strikethrough = i2065[15]
  i2064.strikethroughThickness = i2065[16]
  i2064.TabWidth = i2065[17]
  i2064.Padding = i2065[18]
  i2064.AtlasWidth = i2065[19]
  i2064.AtlasHeight = i2065[20]
  return i2064
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2069 = data
  i2068.id = i2069[0]
  i2068.x = i2069[1]
  i2068.y = i2069[2]
  i2068.width = i2069[3]
  i2068.height = i2069[4]
  i2068.xOffset = i2069[5]
  i2068.yOffset = i2069[6]
  i2068.xAdvance = i2069[7]
  i2068.scale = i2069[8]
  return i2068
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.KerningTable' )
  var i2071 = data
  var i2073 = i2071[0]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('TMPro.KerningPair', i2073[i + 0]));
  }
  i2070.kerningPairs = i2072
  return i2070
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2076 = root || request.c( 'TMPro.KerningPair' )
  var i2077 = data
  i2076.xOffset = i2077[0]
  i2076.m_FirstGlyph = i2077[1]
  i2076.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2077[2], i2076.m_FirstGlyphAdjustments)
  i2076.m_SecondGlyph = i2077[3]
  i2076.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2077[4], i2076.m_SecondGlyphAdjustments)
  i2076.m_IgnoreSpacingAdjustments = !!i2077[5]
  return i2076
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2079 = data
  i2078.m_FaceIndex = i2079[0]
  i2078.m_FamilyName = i2079[1]
  i2078.m_StyleName = i2079[2]
  i2078.m_PointSize = i2079[3]
  i2078.m_Scale = i2079[4]
  i2078.m_UnitsPerEM = i2079[5]
  i2078.m_LineHeight = i2079[6]
  i2078.m_AscentLine = i2079[7]
  i2078.m_CapLine = i2079[8]
  i2078.m_MeanLine = i2079[9]
  i2078.m_Baseline = i2079[10]
  i2078.m_DescentLine = i2079[11]
  i2078.m_SuperscriptOffset = i2079[12]
  i2078.m_SuperscriptSize = i2079[13]
  i2078.m_SubscriptOffset = i2079[14]
  i2078.m_SubscriptSize = i2079[15]
  i2078.m_UnderlineOffset = i2079[16]
  i2078.m_UnderlineThickness = i2079[17]
  i2078.m_StrikethroughOffset = i2079[18]
  i2078.m_StrikethroughThickness = i2079[19]
  i2078.m_TabWidth = i2079[20]
  return i2078
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2080 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2080.atlasAssets = i2082
  i2080.scale = i2081[1]
  request.r(i2081[2], i2081[3], 0, i2080, 'skeletonJSON')
  i2080.isUpgradingBlendModeMaterials = !!i2081[4]
  i2080.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2081[5], i2080.blendModeMaterials)
  var i2085 = i2081[6]
  var i2084 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 1, i2084, '')
  }
  i2080.skeletonDataModifiers = i2084
  var i2087 = i2081[7]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( i2087[i + 0] );
  }
  i2080.fromAnimation = i2086
  var i2089 = i2081[8]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( i2089[i + 0] );
  }
  i2080.toAnimation = i2088
  i2080.duration = i2081[9]
  i2080.defaultMix = i2081[10]
  request.r(i2081[11], i2081[12], 0, i2080, 'controller')
  return i2080
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2092 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2093 = data
  i2092.applyAdditiveMaterial = !!i2093[0]
  var i2095 = i2093[1]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2095[i + 0]));
  }
  i2092.additiveMaterials = i2094
  var i2097 = i2093[2]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2097[i + 0]));
  }
  i2092.multiplyMaterials = i2096
  var i2099 = i2093[3]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2099[i + 0]));
  }
  i2092.screenMaterials = i2098
  i2092.requiresBlendModeMaterials = !!i2093[4]
  return i2092
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2102 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2103 = data
  i2102.pageName = i2103[0]
  request.r(i2103[1], i2103[2], 0, i2102, 'material')
  return i2102
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2106 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'atlasFile')
  var i2109 = i2107[2]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106.materials = i2108
  i2106.textureLoadingMode = i2107[3]
  request.r(i2107[4], i2107[5], 0, i2106, 'onDemandTextureLoader')
  return i2106
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2111 = data
  i2110.useSafeMode = !!i2111[0]
  i2110.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2111[1], i2110.safeModeOptions)
  i2110.timeScale = i2111[2]
  i2110.unscaledTimeScale = i2111[3]
  i2110.useSmoothDeltaTime = !!i2111[4]
  i2110.maxSmoothUnscaledTime = i2111[5]
  i2110.rewindCallbackMode = i2111[6]
  i2110.showUnityEditorReport = !!i2111[7]
  i2110.logBehaviour = i2111[8]
  i2110.drawGizmos = !!i2111[9]
  i2110.defaultRecyclable = !!i2111[10]
  i2110.defaultAutoPlay = i2111[11]
  i2110.defaultUpdateType = i2111[12]
  i2110.defaultTimeScaleIndependent = !!i2111[13]
  i2110.defaultEaseType = i2111[14]
  i2110.defaultEaseOvershootOrAmplitude = i2111[15]
  i2110.defaultEasePeriod = i2111[16]
  i2110.defaultAutoKill = !!i2111[17]
  i2110.defaultLoopType = i2111[18]
  i2110.debugMode = !!i2111[19]
  i2110.debugStoreTargetId = !!i2111[20]
  i2110.showPreviewPanel = !!i2111[21]
  i2110.storeSettingsLocation = i2111[22]
  i2110.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2111[23], i2110.modules)
  i2110.createASMDEF = !!i2111[24]
  i2110.showPlayingTweens = !!i2111[25]
  i2110.showPausedTweens = !!i2111[26]
  return i2110
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2113 = data
  i2112.logBehaviour = i2113[0]
  i2112.nestedTweenFailureBehaviour = i2113[1]
  return i2112
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2115 = data
  i2114.showPanel = !!i2115[0]
  i2114.audioEnabled = !!i2115[1]
  i2114.physicsEnabled = !!i2115[2]
  i2114.physics2DEnabled = !!i2115[3]
  i2114.spriteEnabled = !!i2115[4]
  i2114.uiEnabled = !!i2115[5]
  i2114.uiToolkitEnabled = !!i2115[6]
  i2114.textMeshProEnabled = !!i2115[7]
  i2114.tk2DEnabled = !!i2115[8]
  i2114.deAudioEnabled = !!i2115[9]
  i2114.deUnityExtendedEnabled = !!i2115[10]
  i2114.epoOutlineEnabled = !!i2115[11]
  return i2114
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.TMP_Settings' )
  var i2117 = data
  i2116.assetVersion = i2117[0]
  i2116.m_TextWrappingMode = i2117[1]
  i2116.m_enableKerning = !!i2117[2]
  var i2119 = i2117[3]
  var i2118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.add(i2119[i + 0]);
  }
  i2116.m_ActiveFontFeatures = i2118
  i2116.m_enableExtraPadding = !!i2117[4]
  i2116.m_enableTintAllSprites = !!i2117[5]
  i2116.m_enableParseEscapeCharacters = !!i2117[6]
  i2116.m_EnableRaycastTarget = !!i2117[7]
  i2116.m_GetFontFeaturesAtRuntime = !!i2117[8]
  i2116.m_missingGlyphCharacter = i2117[9]
  i2116.m_ClearDynamicDataOnBuild = !!i2117[10]
  i2116.m_warningsDisabled = !!i2117[11]
  request.r(i2117[12], i2117[13], 0, i2116, 'm_defaultFontAsset')
  i2116.m_defaultFontAssetPath = i2117[14]
  i2116.m_defaultFontSize = i2117[15]
  i2116.m_defaultAutoSizeMinRatio = i2117[16]
  i2116.m_defaultAutoSizeMaxRatio = i2117[17]
  i2116.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2117[18], i2117[19] )
  i2116.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2117[20], i2117[21] )
  i2116.m_autoSizeTextContainer = !!i2117[22]
  i2116.m_IsTextObjectScaleStatic = !!i2117[23]
  var i2121 = i2117[24]
  var i2120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 1, i2120, '')
  }
  i2116.m_fallbackFontAssets = i2120
  i2116.m_matchMaterialPreset = !!i2117[25]
  i2116.m_HideSubTextObjects = !!i2117[26]
  request.r(i2117[27], i2117[28], 0, i2116, 'm_defaultSpriteAsset')
  i2116.m_defaultSpriteAssetPath = i2117[29]
  i2116.m_enableEmojiSupport = !!i2117[30]
  i2116.m_MissingCharacterSpriteUnicode = i2117[31]
  var i2123 = i2117[32]
  var i2122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 1, i2122, '')
  }
  i2116.m_EmojiFallbackTextAssets = i2122
  i2116.m_defaultColorGradientPresetsPath = i2117[33]
  request.r(i2117[34], i2117[35], 0, i2116, 'm_defaultStyleSheet')
  i2116.m_StyleSheetsResourcePath = i2117[36]
  request.r(i2117[37], i2117[38], 0, i2116, 'm_leadingCharacters')
  request.r(i2117[39], i2117[40], 0, i2116, 'm_followingCharacters')
  i2116.m_UseModernHangulLineBreakingRules = !!i2117[41]
  return i2116
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2127 = data
  i2126.m_GlyphIndex = i2127[0]
  i2126.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2127[1], i2126.m_GlyphValueRecord)
  return i2126
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2129 = data
  i2128.m_XPlacement = i2129[0]
  i2128.m_YPlacement = i2129[1]
  i2128.m_XAdvance = i2129[2]
  i2128.m_YAdvance = i2129[3]
  return i2128
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'spriteSheet')
  var i2133 = i2131[2]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('TMPro.TMP_Sprite', i2133[i + 0]));
  }
  i2130.spriteInfoList = i2132
  var i2135 = i2131[3]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 1, i2134, '')
  }
  i2130.fallbackSpriteAssets = i2134
  var i2137 = i2131[4]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.add(request.d('TMPro.TMP_SpriteCharacter', i2137[i + 0]));
  }
  i2130.m_SpriteCharacterTable = i2136
  var i2139 = i2131[5]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(request.d('TMPro.TMP_SpriteGlyph', i2139[i + 0]));
  }
  i2130.m_GlyphTable = i2138
  i2130.m_Version = i2131[6]
  i2130.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2131[7], i2130.m_FaceInfo)
  request.r(i2131[8], i2131[9], 0, i2130, 'm_Material')
  return i2130
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.hashCode = i2143[1]
  i2142.unicode = i2143[2]
  i2142.pivot = new pc.Vec2( i2143[3], i2143[4] )
  request.r(i2143[5], i2143[6], 0, i2142, 'sprite')
  i2142.id = i2143[7]
  i2142.x = i2143[8]
  i2142.y = i2143[9]
  i2142.width = i2143[10]
  i2142.height = i2143[11]
  i2142.xOffset = i2143[12]
  i2142.yOffset = i2143[13]
  i2142.xAdvance = i2143[14]
  i2142.scale = i2143[15]
  return i2142
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2149 = data
  i2148.m_Name = i2149[0]
  i2148.m_ElementType = i2149[1]
  i2148.m_Unicode = i2149[2]
  i2148.m_GlyphIndex = i2149[3]
  i2148.m_Scale = i2149[4]
  return i2148
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2152 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'sprite')
  i2152.m_Index = i2153[2]
  i2152.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2153[3], i2152.m_Metrics)
  i2152.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2153[4], i2152.m_GlyphRect)
  i2152.m_Scale = i2153[5]
  i2152.m_AtlasIndex = i2153[6]
  i2152.m_ClassDefinitionType = i2153[7]
  return i2152
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2154 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2155 = data
  var i2157 = i2155[0]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('TMPro.TMP_Style', i2157[i + 0]));
  }
  i2154.m_StyleList = i2156
  return i2154
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2160 = root || request.c( 'TMPro.TMP_Style' )
  var i2161 = data
  i2160.m_Name = i2161[0]
  i2160.m_HashCode = i2161[1]
  i2160.m_OpeningDefinition = i2161[2]
  i2160.m_ClosingDefinition = i2161[3]
  i2160.m_OpeningTagArray = i2161[4]
  i2160.m_ClosingTagArray = i2161[5]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2163 = data
  var i2165 = i2163[0]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2165[i + 0]) );
  }
  i2162.files = i2164
  i2162.componentToPrefabIds = i2163[1]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2169 = data
  i2168.path = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'unityObject')
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2171 = data
  var i2173 = i2171[0]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2173[i + 0]) );
  }
  i2170.scriptsExecutionOrder = i2172
  var i2175 = i2171[1]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2175[i + 0]) );
  }
  i2170.sortingLayers = i2174
  var i2177 = i2171[2]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2177[i + 0]) );
  }
  i2170.cullingLayers = i2176
  i2170.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2171[3], i2170.timeSettings)
  i2170.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2171[4], i2170.physicsSettings)
  i2170.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2171[5], i2170.physics2DSettings)
  i2170.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2171[6], i2170.qualitySettings)
  i2170.enableRealtimeShadows = !!i2171[7]
  i2170.enableAutoInstancing = !!i2171[8]
  i2170.enableStaticBatching = !!i2171[9]
  i2170.enableDynamicBatching = !!i2171[10]
  i2170.usePreservativeDynamicBatching = !!i2171[11]
  i2170.lightmapEncodingQuality = i2171[12]
  i2170.desiredColorSpace = i2171[13]
  var i2179 = i2171[14]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( i2179[i + 0] );
  }
  i2170.allTags = i2178
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.value = i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2187 = data
  i2186.id = i2187[0]
  i2186.name = i2187[1]
  i2186.value = i2187[2]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2191 = data
  i2190.id = i2191[0]
  i2190.name = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2193 = data
  i2192.fixedDeltaTime = i2193[0]
  i2192.maximumDeltaTime = i2193[1]
  i2192.timeScale = i2193[2]
  i2192.maximumParticleTimestep = i2193[3]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2195 = data
  i2194.gravity = new pc.Vec3( i2195[0], i2195[1], i2195[2] )
  i2194.defaultSolverIterations = i2195[3]
  i2194.bounceThreshold = i2195[4]
  i2194.autoSyncTransforms = !!i2195[5]
  i2194.autoSimulation = !!i2195[6]
  var i2197 = i2195[7]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2197[i + 0]) );
  }
  i2194.collisionMatrix = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.layerId = i2201[1]
  i2200.otherLayerId = i2201[2]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'material')
  i2202.gravity = new pc.Vec2( i2203[2], i2203[3] )
  i2202.positionIterations = i2203[4]
  i2202.velocityIterations = i2203[5]
  i2202.velocityThreshold = i2203[6]
  i2202.maxLinearCorrection = i2203[7]
  i2202.maxAngularCorrection = i2203[8]
  i2202.maxTranslationSpeed = i2203[9]
  i2202.maxRotationSpeed = i2203[10]
  i2202.baumgarteScale = i2203[11]
  i2202.baumgarteTOIScale = i2203[12]
  i2202.timeToSleep = i2203[13]
  i2202.linearSleepTolerance = i2203[14]
  i2202.angularSleepTolerance = i2203[15]
  i2202.defaultContactOffset = i2203[16]
  i2202.autoSimulation = !!i2203[17]
  i2202.queriesHitTriggers = !!i2203[18]
  i2202.queriesStartInColliders = !!i2203[19]
  i2202.callbacksOnDisable = !!i2203[20]
  i2202.reuseCollisionCallbacks = !!i2203[21]
  i2202.autoSyncTransforms = !!i2203[22]
  var i2205 = i2203[23]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2205[i + 0]) );
  }
  i2202.collisionMatrix = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.layerId = i2209[1]
  i2208.otherLayerId = i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2211 = data
  var i2213 = i2211[0]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2213[i + 0]) );
  }
  i2210.qualityLevels = i2212
  var i2215 = i2211[1]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2210.names = i2214
  i2210.shadows = i2211[2]
  i2210.anisotropicFiltering = i2211[3]
  i2210.antiAliasing = i2211[4]
  i2210.lodBias = i2211[5]
  i2210.shadowCascades = i2211[6]
  i2210.shadowDistance = i2211[7]
  i2210.shadowmaskMode = i2211[8]
  i2210.shadowProjection = i2211[9]
  i2210.shadowResolution = i2211[10]
  i2210.softParticles = !!i2211[11]
  i2210.softVegetation = !!i2211[12]
  i2210.activeColorSpace = i2211[13]
  i2210.desiredColorSpace = i2211[14]
  i2210.masterTextureLimit = i2211[15]
  i2210.maxQueuedFrames = i2211[16]
  i2210.particleRaycastBudget = i2211[17]
  i2210.pixelLightCount = i2211[18]
  i2210.realtimeReflectionProbes = !!i2211[19]
  i2210.shadowCascade2Split = i2211[20]
  i2210.shadowCascade4Split = new pc.Vec3( i2211[21], i2211[22], i2211[23] )
  i2210.streamingMipmapsActive = !!i2211[24]
  i2210.vSyncCount = i2211[25]
  i2210.asyncUploadBufferSize = i2211[26]
  i2210.asyncUploadTimeSlice = i2211[27]
  i2210.billboardsFaceCameraPosition = !!i2211[28]
  i2210.shadowNearPlaneOffset = i2211[29]
  i2210.streamingMipmapsMemoryBudget = i2211[30]
  i2210.maximumLODLevel = i2211[31]
  i2210.streamingMipmapsAddAllCameras = !!i2211[32]
  i2210.streamingMipmapsMaxLevelReduction = i2211[33]
  i2210.streamingMipmapsRenderersPerFrame = i2211[34]
  i2210.resolutionScalingFixedDPIFactor = i2211[35]
  i2210.streamingMipmapsMaxFileIORequests = i2211[36]
  i2210.currentQualityLevel = i2211[37]
  return i2210
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2218 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2219 = data
  i2218.m_XCoordinate = i2219[0]
  i2218.m_YCoordinate = i2219[1]
  return i2218
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2220 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2221 = data
  i2220.m_XPositionAdjustment = i2221[0]
  i2220.m_YPositionAdjustment = i2221[1]
  return i2220
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2222 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2223 = data
  i2222.xPlacement = i2223[0]
  i2222.yPlacement = i2223[1]
  i2222.xAdvance = i2223[2]
  i2222.yAdvance = i2223[3]
  return i2222
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

Deserializers.creativeName = "BP_V33_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "39964";

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

Deserializers.buildID = "c23ba996-6e13-4587-bc3e-ae60944ea9dc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

