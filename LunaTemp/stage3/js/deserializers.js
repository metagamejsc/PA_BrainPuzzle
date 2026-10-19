var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointSpring' )
  var i395 = data
  i394.spring = i395[0]
  i394.damper = i395[1]
  i394.targetPosition = i395[2]
  return i394
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointMotor' )
  var i397 = data
  i396.m_TargetVelocity = i397[0]
  i396.m_Force = i397[1]
  i396.m_FreeSpin = i397[2]
  return i396
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointLimits' )
  var i399 = data
  i398.m_Min = i399[0]
  i398.m_Max = i399[1]
  i398.m_Bounciness = i399[2]
  i398.m_BounceMinVelocity = i399[3]
  i398.m_ContactDistance = i399[4]
  i398.minBounce = i399[5]
  i398.maxBounce = i399[6]
  return i398
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.JointDrive' )
  var i401 = data
  i400.m_PositionSpring = i401[0]
  i400.m_PositionDamper = i401[1]
  i400.m_MaximumForce = i401[2]
  i400.m_UseAcceleration = i401[3]
  return i400
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i403 = data
  i402.m_Spring = i403[0]
  i402.m_Damper = i403[1]
  return i402
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i405 = data
  i404.m_Limit = i405[0]
  i404.m_Bounciness = i405[1]
  i404.m_ContactDistance = i405[2]
  return i404
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i407 = data
  i406.m_ExtremumSlip = i407[0]
  i406.m_ExtremumValue = i407[1]
  i406.m_AsymptoteSlip = i407[2]
  i406.m_AsymptoteValue = i407[3]
  i406.m_Stiffness = i407[4]
  return i406
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i409 = data
  i408.m_LowerAngle = i409[0]
  i408.m_UpperAngle = i409[1]
  return i408
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i411 = data
  i410.m_MotorSpeed = i411[0]
  i410.m_MaximumMotorTorque = i411[1]
  return i410
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i413 = data
  i412.m_DampingRatio = i413[0]
  i412.m_Frequency = i413[1]
  i412.m_Angle = i413[2]
  return i412
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i415 = data
  i414.m_LowerTranslation = i415[0]
  i414.m_UpperTranslation = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i417 = data
  i416.name = i417[0]
  i416.width = i417[1]
  i416.height = i417[2]
  i416.mipmapCount = i417[3]
  i416.anisoLevel = i417[4]
  i416.filterMode = i417[5]
  i416.hdr = !!i417[6]
  i416.format = i417[7]
  i416.wrapMode = i417[8]
  i416.alphaIsTransparency = !!i417[9]
  i416.alphaSource = i417[10]
  i416.graphicsFormat = i417[11]
  i416.sRGBTexture = !!i417[12]
  i416.desiredColorSpace = i417[13]
  i416.wrapU = i417[14]
  i416.wrapV = i417[15]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i418 = root || new pc.UnityMaterial()
  var i419 = data
  i418.name = i419[0]
  request.r(i419[1], i419[2], 0, i418, 'shader')
  i418.renderQueue = i419[3]
  i418.enableInstancing = !!i419[4]
  var i421 = i419[5]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i421[i + 0]) );
  }
  i418.floatParameters = i420
  var i423 = i419[6]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i423[i + 0]) );
  }
  i418.colorParameters = i422
  var i425 = i419[7]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i425[i + 0]) );
  }
  i418.vectorParameters = i424
  var i427 = i419[8]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i427[i + 0]) );
  }
  i418.textureParameters = i426
  var i429 = i419[9]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i429[i + 0]) );
  }
  i418.materialFlags = i428
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i433 = data
  i432.name = i433[0]
  i432.value = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i437 = data
  i436.name = i437[0]
  i436.value = new pc.Color(i437[1], i437[2], i437[3], i437[4])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i441 = data
  i440.name = i441[0]
  i440.value = new pc.Vec4( i441[1], i441[2], i441[3], i441[4] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i445 = data
  i444.name = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'value')
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i449 = data
  i448.name = i449[0]
  i448.enabled = !!i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i451 = data
  i450.name = i451[0]
  i450.index = i451[1]
  i450.startup = !!i451[2]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i453 = data
  i452.aspect = i453[0]
  i452.orthographic = !!i453[1]
  i452.orthographicSize = i453[2]
  i452.backgroundColor = new pc.Color(i453[3], i453[4], i453[5], i453[6])
  i452.nearClipPlane = i453[7]
  i452.farClipPlane = i453[8]
  i452.fieldOfView = i453[9]
  i452.depth = i453[10]
  i452.clearFlags = i453[11]
  i452.cullingMask = i453[12]
  i452.rect = i453[13]
  request.r(i453[14], i453[15], 0, i452, 'targetTexture')
  i452.usePhysicalProperties = !!i453[16]
  i452.focalLength = i453[17]
  i452.sensorSize = new pc.Vec2( i453[18], i453[19] )
  i452.lensShift = new pc.Vec2( i453[20], i453[21] )
  i452.gateFit = i453[22]
  i452.commandBufferCount = i453[23]
  i452.cameraType = i453[24]
  i452.enabled = !!i453[25]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i455 = data
  i454.name = i455[0]
  i454.tagId = i455[1]
  i454.enabled = !!i455[2]
  i454.isStatic = !!i455[3]
  i454.layer = i455[4]
  return i454
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'm_FirstSelected')
  i456.m_sendNavigationEvents = !!i457[2]
  i456.m_DragThreshold = i457[3]
  return i456
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i459 = data
  i458.m_HorizontalAxis = i459[0]
  i458.m_VerticalAxis = i459[1]
  i458.m_SubmitButton = i459[2]
  i458.m_CancelButton = i459[3]
  i458.m_InputActionsPerSecond = i459[4]
  i458.m_RepeatDelay = i459[5]
  i458.m_ForceModuleActive = !!i459[6]
  i458.m_SendPointerHoverToParent = !!i459[7]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i461 = data
  i460.pivot = new pc.Vec2( i461[0], i461[1] )
  i460.anchorMin = new pc.Vec2( i461[2], i461[3] )
  i460.anchorMax = new pc.Vec2( i461[4], i461[5] )
  i460.sizeDelta = new pc.Vec2( i461[6], i461[7] )
  i460.anchoredPosition3D = new pc.Vec3( i461[8], i461[9], i461[10] )
  i460.rotation = new pc.Quat(i461[11], i461[12], i461[13], i461[14])
  i460.scale = new pc.Vec3( i461[15], i461[16], i461[17] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i463 = data
  i462.planeDistance = i463[0]
  i462.referencePixelsPerUnit = i463[1]
  i462.isFallbackOverlay = !!i463[2]
  i462.renderMode = i463[3]
  i462.renderOrder = i463[4]
  i462.sortingLayerName = i463[5]
  i462.sortingOrder = i463[6]
  i462.scaleFactor = i463[7]
  request.r(i463[8], i463[9], 0, i462, 'worldCamera')
  i462.overrideSorting = !!i463[10]
  i462.pixelPerfect = !!i463[11]
  i462.targetDisplay = i463[12]
  i462.overridePixelPerfect = !!i463[13]
  i462.enabled = !!i463[14]
  return i462
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i465 = data
  i464.m_UiScaleMode = i465[0]
  i464.m_ReferencePixelsPerUnit = i465[1]
  i464.m_ScaleFactor = i465[2]
  i464.m_ReferenceResolution = new pc.Vec2( i465[3], i465[4] )
  i464.m_ScreenMatchMode = i465[5]
  i464.m_MatchWidthOrHeight = i465[6]
  i464.m_PhysicalUnit = i465[7]
  i464.m_FallbackScreenDPI = i465[8]
  i464.m_DefaultSpriteDPI = i465[9]
  i464.m_DynamicPixelsPerUnit = i465[10]
  i464.m_PresetInfoIsWorld = !!i465[11]
  return i464
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i467 = data
  i466.m_IgnoreReversedGraphics = !!i467[0]
  i466.m_BlockingObjects = i467[1]
  i466.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i467[2] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i469 = data
  i468.cullTransparentMesh = !!i469[0]
  return i468
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.Image' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_Sprite')
  i470.m_Type = i471[2]
  i470.m_PreserveAspect = !!i471[3]
  i470.m_FillCenter = !!i471[4]
  i470.m_FillMethod = i471[5]
  i470.m_FillAmount = i471[6]
  i470.m_FillClockwise = !!i471[7]
  i470.m_FillOrigin = i471[8]
  i470.m_UseSpriteMesh = !!i471[9]
  i470.m_PixelsPerUnitMultiplier = i471[10]
  request.r(i471[11], i471[12], 0, i470, 'm_Material')
  i470.m_Maskable = !!i471[13]
  i470.m_Color = new pc.Color(i471[14], i471[15], i471[16], i471[17])
  i470.m_RaycastTarget = !!i471[18]
  i470.m_RaycastPadding = new pc.Vec4( i471[19], i471[20], i471[21], i471[22] )
  return i470
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.Text' )
  var i473 = data
  i472.m_FontData = request.d('UnityEngine.UI.FontData', i473[0], i472.m_FontData)
  i472.m_Text = i473[1]
  request.r(i473[2], i473[3], 0, i472, 'm_Material')
  i472.m_Maskable = !!i473[4]
  i472.m_Color = new pc.Color(i473[5], i473[6], i473[7], i473[8])
  i472.m_RaycastTarget = !!i473[9]
  i472.m_RaycastPadding = new pc.Vec4( i473[10], i473[11], i473[12], i473[13] )
  return i472
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.FontData' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'm_Font')
  i474.m_FontSize = i475[2]
  i474.m_FontStyle = i475[3]
  i474.m_BestFit = !!i475[4]
  i474.m_MinSize = i475[5]
  i474.m_MaxSize = i475[6]
  i474.m_Alignment = i475[7]
  i474.m_AlignByGeometry = !!i475[8]
  i474.m_RichText = !!i475[9]
  i474.m_HorizontalOverflow = i475[10]
  i474.m_VerticalOverflow = i475[11]
  i474.m_LineSpacing = i475[12]
  return i474
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.UI.Slider' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'm_FillRect')
  request.r(i477[2], i477[3], 0, i476, 'm_HandleRect')
  i476.m_Direction = i477[4]
  i476.m_MinValue = i477[5]
  i476.m_MaxValue = i477[6]
  i476.m_WholeNumbers = !!i477[7]
  i476.m_Value = i477[8]
  i476.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i477[9], i476.m_OnValueChanged)
  i476.m_Navigation = request.d('UnityEngine.UI.Navigation', i477[10], i476.m_Navigation)
  i476.m_Transition = i477[11]
  i476.m_Colors = request.d('UnityEngine.UI.ColorBlock', i477[12], i476.m_Colors)
  i476.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i477[13], i476.m_SpriteState)
  i476.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i477[14], i476.m_AnimationTriggers)
  i476.m_Interactable = !!i477[15]
  request.r(i477[16], i477[17], 0, i476, 'm_TargetGraphic')
  return i476
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i479 = data
  i478.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i479[0], i478.m_PersistentCalls)
  return i478
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i481 = data
  var i483 = i481[0]
  var i482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i483.length; i += 1) {
    i482.add(request.d('UnityEngine.Events.PersistentCall', i483[i + 0]));
  }
  i480.m_Calls = i482
  return i480
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'm_Target')
  i486.m_TargetAssemblyTypeName = i487[2]
  i486.m_MethodName = i487[3]
  i486.m_Mode = i487[4]
  i486.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i487[5], i486.m_Arguments)
  i486.m_CallState = i487[6]
  return i486
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i489 = data
  i488.m_Mode = i489[0]
  i488.m_WrapAround = !!i489[1]
  request.r(i489[2], i489[3], 0, i488, 'm_SelectOnUp')
  request.r(i489[4], i489[5], 0, i488, 'm_SelectOnDown')
  request.r(i489[6], i489[7], 0, i488, 'm_SelectOnLeft')
  request.r(i489[8], i489[9], 0, i488, 'm_SelectOnRight')
  return i488
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i491 = data
  i490.m_NormalColor = new pc.Color(i491[0], i491[1], i491[2], i491[3])
  i490.m_HighlightedColor = new pc.Color(i491[4], i491[5], i491[6], i491[7])
  i490.m_PressedColor = new pc.Color(i491[8], i491[9], i491[10], i491[11])
  i490.m_SelectedColor = new pc.Color(i491[12], i491[13], i491[14], i491[15])
  i490.m_DisabledColor = new pc.Color(i491[16], i491[17], i491[18], i491[19])
  i490.m_ColorMultiplier = i491[20]
  i490.m_FadeDuration = i491[21]
  return i490
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_HighlightedSprite')
  request.r(i493[2], i493[3], 0, i492, 'm_PressedSprite')
  request.r(i493[4], i493[5], 0, i492, 'm_SelectedSprite')
  request.r(i493[6], i493[7], 0, i492, 'm_DisabledSprite')
  return i492
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i495 = data
  i494.m_NormalTrigger = i495[0]
  i494.m_HighlightedTrigger = i495[1]
  i494.m_PressedTrigger = i495[2]
  i494.m_SelectedTrigger = i495[3]
  i494.m_DisabledTrigger = i495[4]
  return i494
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Mask' )
  var i497 = data
  i496.m_ShowMaskGraphic = !!i497[0]
  return i496
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i498 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'skeletonDataAsset')
  request.r(i499[2], i499[3], 0, i498, 'additiveMaterial')
  request.r(i499[4], i499[5], 0, i498, 'multiplyMaterial')
  request.r(i499[6], i499[7], 0, i498, 'screenMaterial')
  i498.forceAdditiveMaterial = !!i499[8]
  i498.initialSkinName = i499[9]
  i498.initialFlipX = !!i499[10]
  i498.initialFlipY = !!i499[11]
  i498.startingAnimation = i499[12]
  i498.startingLoop = !!i499[13]
  i498.timeScale = i499[14]
  i498.freeze = !!i499[15]
  i498.layoutScaleMode = i499[16]
  i498.updateWhenInvisible = i499[17]
  i498.allowMultipleCanvasRenderers = !!i499[18]
  var i501 = i499[19]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 1, i500, '')
  }
  i498.canvasRenderers = i500
  i498.enableSeparatorSlots = !!i499[20]
  i498.updateSeparatorPartLocation = !!i499[21]
  i498.updateSeparatorPartScale = !!i499[22]
  i498.disableMeshAssignmentOnOverride = !!i499[23]
  i498.m_SkeletonColor = new pc.Color(i499[24], i499[25], i499[26], i499[27])
  i498.referenceSize = new pc.Vec2( i499[28], i499[29] )
  i498.pivotOffset = new pc.Vec2( i499[30], i499[31] )
  i498.referenceScale = i499[32]
  i498.layoutScale = i499[33]
  i498.rectTransformSize = new pc.Vec2( i499[34], i499[35] )
  i498.editReferenceRect = !!i499[36]
  var i503 = i499[37]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( i503[i + 0] );
  }
  i498.separatorSlotNames = i502
  var i505 = i499[38]
  var i504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 1, i504, '')
  }
  i498.separatorParts = i504
  i498.physicsPositionInheritanceFactor = new pc.Vec2( i499[39], i499[40] )
  i498.physicsRotationInheritanceFactor = i499[41]
  request.r(i499[42], i499[43], 0, i498, 'physicsMovementRelativeTo')
  i498.meshGenerator = request.d('Spine.Unity.MeshGenerator', i499[44], i498.meshGenerator)
  i498.updateTiming = i499[45]
  i498.unscaledTime = !!i499[46]
  request.r(i499[47], i499[48], 0, i498, 'm_Material')
  i498.m_Maskable = !!i499[49]
  i498.m_Color = new pc.Color(i499[50], i499[51], i499[52], i499[53])
  i498.m_RaycastTarget = !!i499[54]
  i498.m_RaycastPadding = new pc.Vec4( i499[55], i499[56], i499[57], i499[58] )
  return i498
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i512 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i513 = data
  i512.settings = request.d('Spine.Unity.MeshGenerator+Settings', i513[0], i512.settings)
  return i512
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i514 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i515 = data
  i514.useClipping = !!i515[0]
  i514.zSpacing = i515[1]
  i514.tintBlack = !!i515[2]
  i514.canvasGroupCompatible = !!i515[3]
  i514.pmaVertexColors = !!i515[4]
  i514.addNormals = !!i515[5]
  i514.calculateTangents = !!i515[6]
  i514.immutableTriangles = !!i515[7]
  return i514
}

Deserializers["SkinController"] = function (request, data, root) {
  var i516 = root || request.c( 'SkinController' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'skeleton')
  i516.defaultSkin = i517[2]
  i516.actionSkin = i517[3]
  return i516
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i518 = root || request.c( 'AnimationController' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'skeleton')
  var i521 = i519[2]
  var i520 = new (System.Collections.Generic.List$1(Bridge.ns('DropAction')))
  for(var i = 0; i < i521.length; i += 1) {
    i520.add(request.d('DropAction', i521[i + 0]));
  }
  i518.actions = i520
  return i518
}

Deserializers["DropAction"] = function (request, data, root) {
  var i524 = root || request.c( 'DropAction' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'Item')
  i524.DelayTime = i525[2]
  var i527 = i525[3]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('Anim', i527[i + 0]));
  }
  i524.Anim = i526
  return i524
}

Deserializers["Anim"] = function (request, data, root) {
  var i530 = root || request.c( 'Anim' )
  var i531 = data
  i530.KeyAnim = i531[0]
  var i533 = i531[1]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d('Sound', i533[i + 0]));
  }
  i530.Sounds = i532
  i530.Next = !!i531[2]
  i530.OnAnimDone = request.d('UnityEngine.Events.UnityEvent', i531[3], i530.OnAnimDone)
  return i530
}

Deserializers["Sound"] = function (request, data, root) {
  var i536 = root || request.c( 'Sound' )
  var i537 = data
  i536.TimeDelay = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'Clip')
  return i536
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i539 = data
  i538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i539[0], i538.m_PersistentCalls)
  return i538
}

Deserializers["PlayAnimation"] = function (request, data, root) {
  var i540 = root || request.c( 'PlayAnimation' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'skeleton')
  i540.keyAnim = i541[2]
  return i540
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_ObjectArgument')
  i542.m_ObjectArgumentAssemblyTypeName = i543[2]
  i542.m_IntArgument = i543[3]
  i542.m_FloatArgument = i543[4]
  i542.m_StringArgument = i543[5]
  i542.m_BoolArgument = !!i543[6]
  return i542
}

Deserializers["ActiveDefaultSkin"] = function (request, data, root) {
  var i544 = root || request.c( 'ActiveDefaultSkin' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'anim')
  return i544
}

Deserializers["ActiveActionSkin"] = function (request, data, root) {
  var i546 = root || request.c( 'ActiveActionSkin' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'anim')
  return i546
}

Deserializers["Battery"] = function (request, data, root) {
  var i548 = root || request.c( 'Battery' )
  var i549 = data
  var i551 = i549[0]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 1, i550, '')
  }
  i548.greenCells = i550
  return i548
}

Deserializers["Level44.TMProBatteryTracker"] = function (request, data, root) {
  var i554 = root || request.c( 'Level44.TMProBatteryTracker' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'battery')
  request.r(i555[2], i555[3], 0, i554, 'text')
  return i554
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i556 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i557 = data
  i556.targetIsSelf = !!i557[0]
  request.r(i557[1], i557[2], 0, i556, 'targetGO')
  i556.tweenTargetIsTargetGO = !!i557[3]
  i556.delay = i557[4]
  i556.duration = i557[5]
  i556.easeType = i557[6]
  i556.easeCurve = new pc.AnimationCurve( { keys_flow: i557[7] } )
  i556.loopType = i557[8]
  i556.loops = i557[9]
  i556.id = i557[10]
  i556.isRelative = !!i557[11]
  i556.isFrom = !!i557[12]
  i556.isIndependentUpdate = !!i557[13]
  i556.autoKill = !!i557[14]
  i556.autoGenerate = !!i557[15]
  i556.isActive = !!i557[16]
  i556.isValid = !!i557[17]
  request.r(i557[18], i557[19], 0, i556, 'target')
  i556.animationType = i557[20]
  i556.targetType = i557[21]
  i556.forcedTargetType = i557[22]
  i556.autoPlay = !!i557[23]
  i556.useTargetAsV3 = !!i557[24]
  i556.endValueFloat = i557[25]
  i556.endValueV3 = new pc.Vec3( i557[26], i557[27], i557[28] )
  i556.endValueV2 = new pc.Vec2( i557[29], i557[30] )
  i556.endValueColor = new pc.Color(i557[31], i557[32], i557[33], i557[34])
  i556.endValueString = i557[35]
  i556.endValueRect = UnityEngine.Rect.MinMaxRect(i557[36], i557[37], i557[38], i557[39])
  request.r(i557[40], i557[41], 0, i556, 'endValueTransform')
  i556.optionalBool0 = !!i557[42]
  i556.optionalBool1 = !!i557[43]
  i556.optionalFloat0 = i557[44]
  i556.optionalInt0 = i557[45]
  i556.optionalRotationMode = i557[46]
  i556.optionalScrambleMode = i557[47]
  i556.optionalShakeRandomnessMode = i557[48]
  i556.optionalString = i557[49]
  i556.updateType = i557[50]
  i556.isSpeedBased = !!i557[51]
  i556.hasOnStart = !!i557[52]
  i556.hasOnPlay = !!i557[53]
  i556.hasOnUpdate = !!i557[54]
  i556.hasOnStepComplete = !!i557[55]
  i556.hasOnComplete = !!i557[56]
  i556.hasOnTweenCreated = !!i557[57]
  i556.hasOnRewind = !!i557[58]
  i556.onStart = request.d('UnityEngine.Events.UnityEvent', i557[59], i556.onStart)
  i556.onPlay = request.d('UnityEngine.Events.UnityEvent', i557[60], i556.onPlay)
  i556.onUpdate = request.d('UnityEngine.Events.UnityEvent', i557[61], i556.onUpdate)
  i556.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i557[62], i556.onStepComplete)
  i556.onComplete = request.d('UnityEngine.Events.UnityEvent', i557[63], i556.onComplete)
  i556.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i557[64], i556.onTweenCreated)
  i556.onRewind = request.d('UnityEngine.Events.UnityEvent', i557[65], i556.onRewind)
  return i556
}

Deserializers["TutController"] = function (request, data, root) {
  var i558 = root || request.c( 'TutController' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'icon')
  request.r(i559[2], i559[3], 0, i558, 'tutObject')
  i558.toPos = new pc.Vec3( i559[4], i559[5], i559[6] )
  i558.timeMove = i559[7]
  i558.timeDelay = i559[8]
  return i558
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Button' )
  var i561 = data
  i560.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i561[0], i560.m_OnClick)
  i560.m_Navigation = request.d('UnityEngine.UI.Navigation', i561[1], i560.m_Navigation)
  i560.m_Transition = i561[2]
  i560.m_Colors = request.d('UnityEngine.UI.ColorBlock', i561[3], i560.m_Colors)
  i560.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i561[4], i560.m_SpriteState)
  i560.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i561[5], i560.m_AnimationTriggers)
  i560.m_Interactable = !!i561[6]
  request.r(i561[7], i561[8], 0, i560, 'm_TargetGraphic')
  return i560
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i563 = data
  i562.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i563[0], i562.m_PersistentCalls)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'clip')
  request.r(i565[2], i565[3], 0, i564, 'outputAudioMixerGroup')
  i564.playOnAwake = !!i565[4]
  i564.loop = !!i565[5]
  i564.time = i565[6]
  i564.volume = i565[7]
  i564.pitch = i565[8]
  i564.enabled = !!i565[9]
  return i564
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Texture')
  i566.m_UVRect = UnityEngine.Rect.MinMaxRect(i567[2], i567[3], i567[4], i567[5])
  request.r(i567[6], i567[7], 0, i566, 'm_Material')
  i566.m_Maskable = !!i567[8]
  i566.m_Color = new pc.Color(i567[9], i567[10], i567[11], i567[12])
  i566.m_RaycastTarget = !!i567[13]
  i566.m_RaycastPadding = new pc.Vec4( i567[14], i567[15], i567[16], i567[17] )
  return i566
}

Deserializers["LunaController"] = function (request, data, root) {
  var i568 = root || request.c( 'LunaController' )
  var i569 = data
  i568.TimePlay = i569[0]
  i568.CountPlay = i569[1]
  request.r(i569[2], i569[3], 0, i568, 'LogoGameTexture')
  i568.BGColor = new pc.Color(i569[4], i569[5], i569[6], i569[7])
  i568.GameBGColor = new pc.Color(i569[8], i569[9], i569[10], i569[11])
  i568.LevelTextColor = new pc.Color(i569[12], i569[13], i569[14], i569[15])
  i568.TitleTextColor = new pc.Color(i569[16], i569[17], i569[18], i569[19])
  i568.SubBGColor = new pc.Color(i569[20], i569[21], i569[22], i569[23])
  request.r(i569[24], i569[25], 0, i568, 'time')
  var i571 = i569[26]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.RawImage')))
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 1, i570, '')
  }
  i568.logoImage = i570
  request.r(i569[27], i569[28], 0, i568, 'BGImage')
  request.r(i569[29], i569[30], 0, i568, 'GameBGImage')
  request.r(i569[31], i569[32], 0, i568, 'levelText')
  request.r(i569[33], i569[34], 0, i568, 'titleText')
  request.r(i569[35], i569[36], 0, i568, 'subBG')
  request.r(i569[37], i569[38], 0, i568, 'endCard')
  var i573 = i569[39]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 1, i572, '')
  }
  i568.CTA = i572
  i568.count = i569[40]
  i568.complete = !!i569[41]
  return i568
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i578 = root || request.c( 'LayoutController' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'CTA')
  i578.hide = !!i579[2]
  return i578
}

Deserializers["AudioController"] = function (request, data, root) {
  var i580 = root || request.c( 'AudioController' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'BGM')
  request.r(i581[2], i581[3], 0, i580, 'musicSource')
  request.r(i581[4], i581[5], 0, i580, 'SFXPool')
  return i580
}

Deserializers["InteractController"] = function (request, data, root) {
  var i582 = root || request.c( 'InteractController' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'canvas')
  i582.maxPos = new pc.Vec2( i583[2], i583[3] )
  i582.minPos = new pc.Vec2( i583[4], i583[5] )
  var i585 = i583[6]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i585.length; i += 1) {
    i584.add(request.d('ItemDrag', i585[i + 0]));
  }
  i582.itemDrags = i584
  i582.currentTarget = request.d('ItemDrag', i583[7], i582.currentTarget)
  request.r(i583[8], i583[9], 0, i582, 'pickupSound')
  request.r(i583[10], i583[11], 0, i582, 'tut')
  i582.lockPlay = !!i583[12]
  return i582
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i588 = root || request.c( 'ItemDrag' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'DragArea')
  request.r(i589[2], i589[3], 0, i588, 'Item')
  request.r(i589[4], i589[5], 0, i588, 'Icon')
  return i588
}

Deserializers["GameController"] = function (request, data, root) {
  var i590 = root || request.c( 'GameController' )
  var i591 = data
  i590.OnEnd = request.d('System.Action', i591[0], i590.OnEnd)
  i590.OnComplete = request.d('System.Action', i591[1], i590.OnComplete)
  i590.CompleteEvent = request.d('UnityEngine.Events.UnityEvent', i591[2], i590.CompleteEvent)
  i590.CompleteStep = request.d('System.Action', i591[3], i590.CompleteStep)
  var i593 = i591[4]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.skeletons = i592
  request.r(i591[5], i591[6], 0, i590, 'winScene')
  request.r(i591[7], i591[8], 0, i590, 'failScene')
  request.r(i591[9], i591[10], 0, i590, 'stepSound')
  i590.complete = !!i591[11]
  i590.currentStep = i591[12]
  i590.maxStep = i591[13]
  request.r(i591[14], i591[15], 0, i590, 'currentStepText')
  request.r(i591[16], i591[17], 0, i590, 'maxStepText')
  request.r(i591[18], i591[19], 0, i590, 'slider')
  i590.DelayComplete = i591[20]
  i590.subTime = i591[21]
  i590.startSub = i591[22]
  var i595 = i591[23]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i595.length; i += 1) {
    i594.add(request.d('Sub', i595[i + 0]));
  }
  i590.subs = i594
  request.r(i591[24], i591[25], 0, i590, 'sub')
  request.r(i591[26], i591[27], 0, i590, 'subText')
  return i590
}

Deserializers["System.Action"] = function (request, data, root) {
  var i596 = root || request.c( 'System.Action' )
  var i597 = data
  return i596
}

Deserializers["Sub"] = function (request, data, root) {
  var i602 = root || request.c( 'Sub' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'Item')
  i602.Delay = i603[2]
  i602.SubText = i603[3]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i605 = data
  i604.ambientIntensity = i605[0]
  i604.reflectionIntensity = i605[1]
  i604.ambientMode = i605[2]
  i604.ambientLight = new pc.Color(i605[3], i605[4], i605[5], i605[6])
  i604.ambientSkyColor = new pc.Color(i605[7], i605[8], i605[9], i605[10])
  i604.ambientGroundColor = new pc.Color(i605[11], i605[12], i605[13], i605[14])
  i604.ambientEquatorColor = new pc.Color(i605[15], i605[16], i605[17], i605[18])
  i604.fogColor = new pc.Color(i605[19], i605[20], i605[21], i605[22])
  i604.fogEndDistance = i605[23]
  i604.fogStartDistance = i605[24]
  i604.fogDensity = i605[25]
  i604.fog = !!i605[26]
  request.r(i605[27], i605[28], 0, i604, 'skybox')
  i604.fogMode = i605[29]
  var i607 = i605[30]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i607[i + 0]) );
  }
  i604.lightmaps = i606
  i604.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i605[31], i604.lightProbes)
  i604.lightmapsMode = i605[32]
  i604.mixedBakeMode = i605[33]
  i604.environmentLightingMode = i605[34]
  i604.ambientProbe = new pc.SphericalHarmonicsL2(i605[35])
  request.r(i605[36], i605[37], 0, i604, 'customReflection')
  request.r(i605[38], i605[39], 0, i604, 'defaultReflection')
  i604.defaultReflectionMode = i605[40]
  i604.defaultReflectionResolution = i605[41]
  i604.sunLightObjectId = i605[42]
  i604.pixelLightCount = i605[43]
  i604.defaultReflectionHDR = !!i605[44]
  i604.hasLightDataAsset = !!i605[45]
  i604.hasManualGenerate = !!i605[46]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'lightmapColor')
  request.r(i611[2], i611[3], 0, i610, 'lightmapDirection')
  request.r(i611[4], i611[5], 0, i610, 'shadowMask')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i612 = root || new UnityEngine.LightProbes()
  var i613 = data
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i621 = data
  var i623 = i621[0]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i623.length; i += 1) {
    i622.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i623[i + 0]));
  }
  i620.ShaderCompilationErrors = i622
  i620.name = i621[1]
  i620.guid = i621[2]
  var i625 = i621[3]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( i625[i + 0] );
  }
  i620.shaderDefinedKeywords = i624
  var i627 = i621[4]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i627[i + 0]) );
  }
  i620.passes = i626
  var i629 = i621[5]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i629[i + 0]) );
  }
  i620.usePasses = i628
  var i631 = i621[6]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i631[i + 0]) );
  }
  i620.defaultParameterValues = i630
  request.r(i621[7], i621[8], 0, i620, 'unityFallbackShader')
  i620.readDepth = !!i621[9]
  i620.hasDepthOnlyPass = !!i621[10]
  i620.isCreatedByShaderGraph = !!i621[11]
  i620.disableBatching = !!i621[12]
  i620.compiled = !!i621[13]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i635 = data
  i634.shaderName = i635[0]
  i634.errorMessage = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i638 = root || new pc.UnityShaderPass()
  var i639 = data
  i638.id = i639[0]
  i638.subShaderIndex = i639[1]
  i638.name = i639[2]
  i638.passType = i639[3]
  i638.grabPassTextureName = i639[4]
  i638.usePass = !!i639[5]
  i638.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[6], i638.zTest)
  i638.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[7], i638.zWrite)
  i638.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[8], i638.culling)
  i638.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[9], i638.blending)
  i638.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[10], i638.alphaBlending)
  i638.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[11], i638.colorWriteMask)
  i638.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[12], i638.offsetUnits)
  i638.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[13], i638.offsetFactor)
  i638.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[14], i638.stencilRef)
  i638.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[15], i638.stencilReadMask)
  i638.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[16], i638.stencilWriteMask)
  i638.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[17], i638.stencilOp)
  i638.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[18], i638.stencilOpFront)
  i638.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[19], i638.stencilOpBack)
  var i641 = i639[20]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i641[i + 0]) );
  }
  i638.tags = i640
  var i643 = i639[21]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.passDefinedKeywords = i642
  var i645 = i639[22]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i645[i + 0]) );
  }
  i638.passDefinedKeywordGroups = i644
  var i647 = i639[23]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i647[i + 0]) );
  }
  i638.variants = i646
  var i649 = i639[24]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i649[i + 0]) );
  }
  i638.excludedVariants = i648
  i638.hasDepthReader = !!i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i651 = data
  i650.val = i651[0]
  i650.name = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i653 = data
  i652.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[0], i652.src)
  i652.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[1], i652.dst)
  i652.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[2], i652.op)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i655 = data
  i654.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[0], i654.pass)
  i654.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[1], i654.fail)
  i654.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[2], i654.zFail)
  i654.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[3], i654.comp)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i659 = data
  i658.name = i659[0]
  i658.value = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i662.keywords = i664
  i662.hasDiscard = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i669 = data
  i668.passId = i669[0]
  i668.subShaderIndex = i669[1]
  var i671 = i669[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.keywords = i670
  i668.vertexProgram = i669[3]
  i668.fragmentProgram = i669[4]
  i668.exportedForWebGl2 = !!i669[5]
  i668.readDepth = !!i669[6]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'shader')
  i674.pass = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i679 = data
  i678.name = i679[0]
  i678.type = i679[1]
  i678.value = new pc.Vec4( i679[2], i679[3], i679[4], i679[5] )
  i678.textureValue = i679[6]
  i678.shaderPropertyFlag = i679[7]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i681 = data
  i680.name = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'texture')
  i680.aabb = i681[3]
  i680.vertices = i681[4]
  i680.triangles = i681[5]
  i680.textureRect = UnityEngine.Rect.MinMaxRect(i681[6], i681[7], i681[8], i681[9])
  i680.packedRect = UnityEngine.Rect.MinMaxRect(i681[10], i681[11], i681[12], i681[13])
  i680.border = new pc.Vec4( i681[14], i681[15], i681[16], i681[17] )
  i680.transparency = i681[18]
  i680.bounds = i681[19]
  i680.pixelsPerUnit = i681[20]
  i680.textureWidth = i681[21]
  i680.textureHeight = i681[22]
  i680.nativeSize = new pc.Vec2( i681[23], i681[24] )
  i680.pivot = new pc.Vec2( i681[25], i681[26] )
  i680.textureRectOffset = new pc.Vec2( i681[27], i681[28] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i683 = data
  i682.name = i683[0]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i685 = data
  i684.name = i685[0]
  i684.ascent = i685[1]
  i684.originalLineHeight = i685[2]
  i684.fontSize = i685[3]
  var i687 = i685[4]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i687[i + 0]) );
  }
  i684.characterInfo = i686
  request.r(i685[5], i685[6], 0, i684, 'texture')
  i684.originalFontSize = i685[7]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i691 = data
  i690.index = i691[0]
  i690.advance = i691[1]
  i690.bearing = i691[2]
  i690.glyphWidth = i691[3]
  i690.glyphHeight = i691[4]
  i690.minX = i691[5]
  i690.maxX = i691[6]
  i690.minY = i691[7]
  i690.maxY = i691[8]
  i690.uvBottomLeftX = i691[9]
  i690.uvBottomLeftY = i691[10]
  i690.uvBottomRightX = i691[11]
  i690.uvBottomRightY = i691[12]
  i690.uvTopLeftX = i691[13]
  i690.uvTopLeftY = i691[14]
  i690.uvTopRightX = i691[15]
  i690.uvTopRightY = i691[16]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i693 = data
  i692.name = i693[0]
  i692.bytes64 = i693[1]
  i692.data = i693[2]
  return i692
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i694 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i695 = data
  var i697 = i695[0]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.atlasAssets = i696
  i694.scale = i695[1]
  request.r(i695[2], i695[3], 0, i694, 'skeletonJSON')
  i694.isUpgradingBlendModeMaterials = !!i695[4]
  i694.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i695[5], i694.blendModeMaterials)
  var i699 = i695[6]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i694.skeletonDataModifiers = i698
  var i701 = i695[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i694.fromAnimation = i700
  var i703 = i695[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i694.toAnimation = i702
  i694.duration = i695[9]
  i694.defaultMix = i695[10]
  request.r(i695[11], i695[12], 0, i694, 'controller')
  return i694
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i706 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i707 = data
  i706.applyAdditiveMaterial = !!i707[0]
  var i709 = i707[1]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i709[i + 0]));
  }
  i706.additiveMaterials = i708
  var i711 = i707[2]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i711[i + 0]));
  }
  i706.multiplyMaterials = i710
  var i713 = i707[3]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i713[i + 0]));
  }
  i706.screenMaterials = i712
  i706.requiresBlendModeMaterials = !!i707[4]
  return i706
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i716 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i717 = data
  i716.pageName = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'material')
  return i716
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i720 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'atlasFile')
  var i723 = i721[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.materials = i722
  i720.textureLoadingMode = i721[3]
  request.r(i721[4], i721[5], 0, i720, 'onDemandTextureLoader')
  return i720
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i726 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i727 = data
  i726.useSafeMode = !!i727[0]
  i726.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i727[1], i726.safeModeOptions)
  i726.timeScale = i727[2]
  i726.unscaledTimeScale = i727[3]
  i726.useSmoothDeltaTime = !!i727[4]
  i726.maxSmoothUnscaledTime = i727[5]
  i726.rewindCallbackMode = i727[6]
  i726.showUnityEditorReport = !!i727[7]
  i726.logBehaviour = i727[8]
  i726.drawGizmos = !!i727[9]
  i726.defaultRecyclable = !!i727[10]
  i726.defaultAutoPlay = i727[11]
  i726.defaultUpdateType = i727[12]
  i726.defaultTimeScaleIndependent = !!i727[13]
  i726.defaultEaseType = i727[14]
  i726.defaultEaseOvershootOrAmplitude = i727[15]
  i726.defaultEasePeriod = i727[16]
  i726.defaultAutoKill = !!i727[17]
  i726.defaultLoopType = i727[18]
  i726.debugMode = !!i727[19]
  i726.debugStoreTargetId = !!i727[20]
  i726.showPreviewPanel = !!i727[21]
  i726.storeSettingsLocation = i727[22]
  i726.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i727[23], i726.modules)
  i726.createASMDEF = !!i727[24]
  i726.showPlayingTweens = !!i727[25]
  i726.showPausedTweens = !!i727[26]
  return i726
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i729 = data
  i728.logBehaviour = i729[0]
  i728.nestedTweenFailureBehaviour = i729[1]
  return i728
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i730 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i731 = data
  i730.showPanel = !!i731[0]
  i730.audioEnabled = !!i731[1]
  i730.physicsEnabled = !!i731[2]
  i730.physics2DEnabled = !!i731[3]
  i730.spriteEnabled = !!i731[4]
  i730.uiEnabled = !!i731[5]
  i730.textMeshProEnabled = !!i731[6]
  i730.tk2DEnabled = !!i731[7]
  i730.deAudioEnabled = !!i731[8]
  i730.deUnityExtendedEnabled = !!i731[9]
  i730.epoOutlineEnabled = !!i731[10]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i735[i + 0]) );
  }
  i732.files = i734
  i732.componentToPrefabIds = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i739 = data
  i738.path = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'unityObject')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i741 = data
  var i743 = i741[0]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i743[i + 0]) );
  }
  i740.scriptsExecutionOrder = i742
  var i745 = i741[1]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i745[i + 0]) );
  }
  i740.sortingLayers = i744
  var i747 = i741[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i747[i + 0]) );
  }
  i740.cullingLayers = i746
  i740.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i741[3], i740.timeSettings)
  i740.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i741[4], i740.physicsSettings)
  i740.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i741[5], i740.physics2DSettings)
  i740.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i741[6], i740.qualitySettings)
  i740.enableRealtimeShadows = !!i741[7]
  i740.enableAutoInstancing = !!i741[8]
  i740.enableStaticBatching = !!i741[9]
  i740.enableDynamicBatching = !!i741[10]
  i740.usePreservativeDynamicBatching = !!i741[11]
  i740.lightmapEncodingQuality = i741[12]
  i740.desiredColorSpace = i741[13]
  var i749 = i741[14]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i740.allTags = i748
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i757 = data
  i756.id = i757[0]
  i756.name = i757[1]
  i756.value = i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i761 = data
  i760.id = i761[0]
  i760.name = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i763 = data
  i762.fixedDeltaTime = i763[0]
  i762.maximumDeltaTime = i763[1]
  i762.timeScale = i763[2]
  i762.maximumParticleTimestep = i763[3]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i765 = data
  i764.gravity = new pc.Vec3( i765[0], i765[1], i765[2] )
  i764.defaultSolverIterations = i765[3]
  i764.bounceThreshold = i765[4]
  i764.autoSyncTransforms = !!i765[5]
  i764.autoSimulation = !!i765[6]
  var i767 = i765[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i767[i + 0]) );
  }
  i764.collisionMatrix = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.layerId = i771[1]
  i770.otherLayerId = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'material')
  i772.gravity = new pc.Vec2( i773[2], i773[3] )
  i772.positionIterations = i773[4]
  i772.velocityIterations = i773[5]
  i772.velocityThreshold = i773[6]
  i772.maxLinearCorrection = i773[7]
  i772.maxAngularCorrection = i773[8]
  i772.maxTranslationSpeed = i773[9]
  i772.maxRotationSpeed = i773[10]
  i772.baumgarteScale = i773[11]
  i772.baumgarteTOIScale = i773[12]
  i772.timeToSleep = i773[13]
  i772.linearSleepTolerance = i773[14]
  i772.angularSleepTolerance = i773[15]
  i772.defaultContactOffset = i773[16]
  i772.autoSimulation = !!i773[17]
  i772.queriesHitTriggers = !!i773[18]
  i772.queriesStartInColliders = !!i773[19]
  i772.callbacksOnDisable = !!i773[20]
  i772.reuseCollisionCallbacks = !!i773[21]
  i772.autoSyncTransforms = !!i773[22]
  var i775 = i773[23]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i775[i + 0]) );
  }
  i772.collisionMatrix = i774
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i779 = data
  i778.enabled = !!i779[0]
  i778.layerId = i779[1]
  i778.otherLayerId = i779[2]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i783[i + 0]) );
  }
  i780.qualityLevels = i782
  var i785 = i781[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.names = i784
  i780.shadows = i781[2]
  i780.anisotropicFiltering = i781[3]
  i780.antiAliasing = i781[4]
  i780.lodBias = i781[5]
  i780.shadowCascades = i781[6]
  i780.shadowDistance = i781[7]
  i780.shadowmaskMode = i781[8]
  i780.shadowProjection = i781[9]
  i780.shadowResolution = i781[10]
  i780.softParticles = !!i781[11]
  i780.softVegetation = !!i781[12]
  i780.activeColorSpace = i781[13]
  i780.desiredColorSpace = i781[14]
  i780.masterTextureLimit = i781[15]
  i780.maxQueuedFrames = i781[16]
  i780.particleRaycastBudget = i781[17]
  i780.pixelLightCount = i781[18]
  i780.realtimeReflectionProbes = !!i781[19]
  i780.shadowCascade2Split = i781[20]
  i780.shadowCascade4Split = new pc.Vec3( i781[21], i781[22], i781[23] )
  i780.streamingMipmapsActive = !!i781[24]
  i780.vSyncCount = i781[25]
  i780.asyncUploadBufferSize = i781[26]
  i780.asyncUploadTimeSlice = i781[27]
  i780.billboardsFaceCameraPosition = !!i781[28]
  i780.shadowNearPlaneOffset = i781[29]
  i780.streamingMipmapsMemoryBudget = i781[30]
  i780.maximumLODLevel = i781[31]
  i780.streamingMipmapsAddAllCameras = !!i781[32]
  i780.streamingMipmapsMaxLevelReduction = i781[33]
  i780.streamingMipmapsRenderersPerFrame = i781[34]
  i780.resolutionScalingFixedDPIFactor = i781[35]
  i780.streamingMipmapsMaxFileIORequests = i781[36]
  i780.currentQualityLevel = i781[37]
  return i780
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"8":[7],"23":[18],"82":[83],"84":[7],"85":[11,7],"86":[78],"18":[11,7],"87":[88,78],"89":[78,90],"91":[78],"92":[56],"93":[63],"94":[83],"95":[96],"97":[98],"99":[2],"100":[101],"102":[7],"103":[11,7],"104":[78],"105":[11,7],"106":[7],"107":[7],"108":[78,7],"109":[7,11],"110":[111],"112":[111],"113":[111],"114":[7],"115":[7],"10":[8],"12":[11,7],"116":[7],"9":[8],"117":[7],"118":[7],"119":[7],"120":[7],"121":[7],"122":[7],"123":[7],"17":[7],"124":[7],"36":[11,7],"125":[7],"126":[7],"127":[7],"16":[7],"13":[11,7],"128":[7],"129":[5],"130":[5],"6":[5],"131":[5],"132":[2],"133":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","SkinController","AnimationController","UnityEngine.GameObject","PlayAnimation","UnityEngine.AudioClip","GameController","Battery","ActiveDefaultSkin","ActiveActionSkin","Level44.TMProBatteryTracker","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.UI.RawImage","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "10/17/2026 13:45:43";

Deserializers.lunaDaysRunning = "1.6";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_BMTP_V17_NgocBTU";

Deserializers.lunaAppID = "38020";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1905";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4987";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "eedf9c03-2fa0-43ed-a816-fe2be72895d0";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

