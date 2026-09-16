var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.JointSpring' )
  var i1885 = data
  i1884.spring = i1885[0]
  i1884.damper = i1885[1]
  i1884.targetPosition = i1885[2]
  return i1884
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.JointMotor' )
  var i1887 = data
  i1886.m_TargetVelocity = i1887[0]
  i1886.m_Force = i1887[1]
  i1886.m_FreeSpin = i1887[2]
  return i1886
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.JointLimits' )
  var i1889 = data
  i1888.m_Min = i1889[0]
  i1888.m_Max = i1889[1]
  i1888.m_Bounciness = i1889[2]
  i1888.m_BounceMinVelocity = i1889[3]
  i1888.m_ContactDistance = i1889[4]
  i1888.minBounce = i1889[5]
  i1888.maxBounce = i1889[6]
  return i1888
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointDrive' )
  var i1891 = data
  i1890.m_PositionSpring = i1891[0]
  i1890.m_PositionDamper = i1891[1]
  i1890.m_MaximumForce = i1891[2]
  i1890.m_UseAcceleration = i1891[3]
  return i1890
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1893 = data
  i1892.m_Spring = i1893[0]
  i1892.m_Damper = i1893[1]
  return i1892
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1895 = data
  i1894.m_Limit = i1895[0]
  i1894.m_Bounciness = i1895[1]
  i1894.m_ContactDistance = i1895[2]
  return i1894
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1897 = data
  i1896.m_ExtremumSlip = i1897[0]
  i1896.m_ExtremumValue = i1897[1]
  i1896.m_AsymptoteSlip = i1897[2]
  i1896.m_AsymptoteValue = i1897[3]
  i1896.m_Stiffness = i1897[4]
  return i1896
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1899 = data
  i1898.m_LowerAngle = i1899[0]
  i1898.m_UpperAngle = i1899[1]
  return i1898
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1901 = data
  i1900.m_MotorSpeed = i1901[0]
  i1900.m_MaximumMotorTorque = i1901[1]
  return i1900
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1903 = data
  i1902.m_DampingRatio = i1903[0]
  i1902.m_Frequency = i1903[1]
  i1902.m_Angle = i1903[2]
  return i1902
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1905 = data
  i1904.m_LowerTranslation = i1905[0]
  i1904.m_UpperTranslation = i1905[1]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.width = i1907[1]
  i1906.height = i1907[2]
  i1906.mipmapCount = i1907[3]
  i1906.anisoLevel = i1907[4]
  i1906.filterMode = i1907[5]
  i1906.hdr = !!i1907[6]
  i1906.format = i1907[7]
  i1906.wrapMode = i1907[8]
  i1906.alphaIsTransparency = !!i1907[9]
  i1906.alphaSource = i1907[10]
  i1906.graphicsFormat = i1907[11]
  i1906.sRGBTexture = !!i1907[12]
  i1906.desiredColorSpace = i1907[13]
  i1906.wrapU = i1907[14]
  i1906.wrapV = i1907[15]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1908 = root || new pc.UnityMaterial()
  var i1909 = data
  i1908.name = i1909[0]
  request.r(i1909[1], i1909[2], 0, i1908, 'shader')
  i1908.renderQueue = i1909[3]
  i1908.enableInstancing = !!i1909[4]
  var i1911 = i1909[5]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1911[i + 0]) );
  }
  i1908.floatParameters = i1910
  var i1913 = i1909[6]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1913[i + 0]) );
  }
  i1908.colorParameters = i1912
  var i1915 = i1909[7]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1915[i + 0]) );
  }
  i1908.vectorParameters = i1914
  var i1917 = i1909[8]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1917[i + 0]) );
  }
  i1908.textureParameters = i1916
  var i1919 = i1909[9]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1919[i + 0]) );
  }
  i1908.materialFlags = i1918
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.value = i1923[1]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.value = new pc.Color(i1927[1], i1927[2], i1927[3], i1927[4])
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = new pc.Vec4( i1931[1], i1931[2], i1931[3], i1931[4] )
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1935 = data
  i1934.name = i1935[0]
  request.r(i1935[1], i1935[2], 0, i1934, 'value')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1939 = data
  i1938.name = i1939[0]
  i1938.enabled = !!i1939[1]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.halfPrecision = !!i1941[1]
  i1940.useSimplification = !!i1941[2]
  i1940.useUInt32IndexFormat = !!i1941[3]
  i1940.vertexCount = i1941[4]
  i1940.aabb = i1941[5]
  var i1943 = i1941[6]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( !!i1943[i + 0] );
  }
  i1940.streams = i1942
  i1940.vertices = i1941[7]
  var i1945 = i1941[8]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1945[i + 0]) );
  }
  i1940.subMeshes = i1944
  var i1947 = i1941[9]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 16) {
    i1946.push( new pc.Mat4().setData(i1947[i + 0], i1947[i + 1], i1947[i + 2], i1947[i + 3],  i1947[i + 4], i1947[i + 5], i1947[i + 6], i1947[i + 7],  i1947[i + 8], i1947[i + 9], i1947[i + 10], i1947[i + 11],  i1947[i + 12], i1947[i + 13], i1947[i + 14], i1947[i + 15]) );
  }
  i1940.bindposes = i1946
  var i1949 = i1941[10]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1949[i + 0]) );
  }
  i1940.blendShapes = i1948
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1955 = data
  i1954.triangles = i1955[0]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1961 = data
  i1960.name = i1961[0]
  var i1963 = i1961[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1963[i + 0]) );
  }
  i1960.frames = i1962
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.index = i1965[1]
  i1964.startup = !!i1965[2]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1967 = data
  i1966.aspect = i1967[0]
  i1966.orthographic = !!i1967[1]
  i1966.orthographicSize = i1967[2]
  i1966.backgroundColor = new pc.Color(i1967[3], i1967[4], i1967[5], i1967[6])
  i1966.nearClipPlane = i1967[7]
  i1966.farClipPlane = i1967[8]
  i1966.fieldOfView = i1967[9]
  i1966.depth = i1967[10]
  i1966.clearFlags = i1967[11]
  i1966.cullingMask = i1967[12]
  i1966.rect = i1967[13]
  request.r(i1967[14], i1967[15], 0, i1966, 'targetTexture')
  i1966.usePhysicalProperties = !!i1967[16]
  i1966.focalLength = i1967[17]
  i1966.sensorSize = new pc.Vec2( i1967[18], i1967[19] )
  i1966.lensShift = new pc.Vec2( i1967[20], i1967[21] )
  i1966.gateFit = i1967[22]
  i1966.commandBufferCount = i1967[23]
  i1966.cameraType = i1967[24]
  i1966.enabled = !!i1967[25]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1969 = data
  i1968.name = i1969[0]
  i1968.tagId = i1969[1]
  i1968.enabled = !!i1969[2]
  i1968.isStatic = !!i1969[3]
  i1968.layer = i1969[4]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1971 = data
  i1970.pivot = new pc.Vec2( i1971[0], i1971[1] )
  i1970.anchorMin = new pc.Vec2( i1971[2], i1971[3] )
  i1970.anchorMax = new pc.Vec2( i1971[4], i1971[5] )
  i1970.sizeDelta = new pc.Vec2( i1971[6], i1971[7] )
  i1970.anchoredPosition3D = new pc.Vec3( i1971[8], i1971[9], i1971[10] )
  i1970.rotation = new pc.Quat(i1971[11], i1971[12], i1971[13], i1971[14])
  i1970.scale = new pc.Vec3( i1971[15], i1971[16], i1971[17] )
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1973 = data
  i1972.planeDistance = i1973[0]
  i1972.referencePixelsPerUnit = i1973[1]
  i1972.isFallbackOverlay = !!i1973[2]
  i1972.renderMode = i1973[3]
  i1972.renderOrder = i1973[4]
  i1972.sortingLayerName = i1973[5]
  i1972.sortingOrder = i1973[6]
  i1972.scaleFactor = i1973[7]
  request.r(i1973[8], i1973[9], 0, i1972, 'worldCamera')
  i1972.overrideSorting = !!i1973[10]
  i1972.pixelPerfect = !!i1973[11]
  i1972.targetDisplay = i1973[12]
  i1972.overridePixelPerfect = !!i1973[13]
  i1972.enabled = !!i1973[14]
  return i1972
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1975 = data
  i1974.m_UiScaleMode = i1975[0]
  i1974.m_ReferencePixelsPerUnit = i1975[1]
  i1974.m_ScaleFactor = i1975[2]
  i1974.m_ReferenceResolution = new pc.Vec2( i1975[3], i1975[4] )
  i1974.m_ScreenMatchMode = i1975[5]
  i1974.m_MatchWidthOrHeight = i1975[6]
  i1974.m_PhysicalUnit = i1975[7]
  i1974.m_FallbackScreenDPI = i1975[8]
  i1974.m_DefaultSpriteDPI = i1975[9]
  i1974.m_DynamicPixelsPerUnit = i1975[10]
  i1974.m_PresetInfoIsWorld = !!i1975[11]
  return i1974
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1977 = data
  i1976.m_IgnoreReversedGraphics = !!i1977[0]
  i1976.m_BlockingObjects = i1977[1]
  i1976.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1977[2] )
  return i1976
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1978 = root || request.c( 'Playable.GameManager' )
  var i1979 = data
  i1978.EventCountdownEndGame = request.d('System.Action', i1979[0], i1978.EventCountdownEndGame)
  i1978._totalEvent = i1979[1]
  i1978._maxEvent = i1979[2]
  i1978._endTime = i1979[3]
  request.r(i1979[4], i1979[5], 0, i1978, '_backgroundMusic')
  request.r(i1979[6], i1979[7], 0, i1978, '_backgroundTexture')
  request.r(i1979[8], i1979[9], 0, i1978, '_btnBlock')
  request.r(i1979[10], i1979[11], 0, i1978, '_background')
  request.r(i1979[12], i1979[13], 0, i1978, '_losePanel')
  request.r(i1979[14], i1979[15], 0, i1978, '_winPanel')
  var i1981 = i1979[16]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978._vfxWin = i1980
  request.r(i1979[17], i1979[18], 0, i1978, '_progressFillImage')
  request.r(i1979[19], i1979[20], 0, i1978, '_progressText')
  i1978._progressTweenDuration = i1979[21]
  request.r(i1979[22], i1979[23], 0, i1978, '_timerFillImage')
  request.r(i1979[24], i1979[25], 0, i1978, '_timerText')
  i1978._timerPunchScale = i1979[26]
  return i1978
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1982 = root || request.c( 'System.Action' )
  var i1983 = data
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1987 = data
  i1986.cullTransparentMesh = !!i1987[0]
  return i1986
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.Image' )
  var i1989 = data
  request.r(i1989[0], i1989[1], 0, i1988, 'm_Sprite')
  i1988.m_Type = i1989[2]
  i1988.m_PreserveAspect = !!i1989[3]
  i1988.m_FillCenter = !!i1989[4]
  i1988.m_FillMethod = i1989[5]
  i1988.m_FillAmount = i1989[6]
  i1988.m_FillClockwise = !!i1989[7]
  i1988.m_FillOrigin = i1989[8]
  i1988.m_UseSpriteMesh = !!i1989[9]
  i1988.m_PixelsPerUnitMultiplier = i1989[10]
  request.r(i1989[11], i1989[12], 0, i1988, 'm_Material')
  i1988.m_Maskable = !!i1989[13]
  i1988.m_Color = new pc.Color(i1989[14], i1989[15], i1989[16], i1989[17])
  i1988.m_RaycastTarget = !!i1989[18]
  i1988.m_RaycastPadding = new pc.Vec4( i1989[19], i1989[20], i1989[21], i1989[22] )
  return i1988
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'm_Texture')
  i1990.m_UVRect = UnityEngine.Rect.MinMaxRect(i1991[2], i1991[3], i1991[4], i1991[5])
  request.r(i1991[6], i1991[7], 0, i1990, 'm_Material')
  i1990.m_Maskable = !!i1991[8]
  i1990.m_Color = new pc.Color(i1991[9], i1991[10], i1991[11], i1991[12])
  i1990.m_RaycastTarget = !!i1991[13]
  i1990.m_RaycastPadding = new pc.Vec4( i1991[14], i1991[15], i1991[16], i1991[17] )
  return i1990
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1993 = data
  i1992.m_hasFontAssetChanged = !!i1993[0]
  request.r(i1993[1], i1993[2], 0, i1992, 'm_baseMaterial')
  i1992.m_maskOffset = new pc.Vec4( i1993[3], i1993[4], i1993[5], i1993[6] )
  i1992.m_text = i1993[7]
  i1992.m_isRightToLeft = !!i1993[8]
  request.r(i1993[9], i1993[10], 0, i1992, 'm_fontAsset')
  request.r(i1993[11], i1993[12], 0, i1992, 'm_sharedMaterial')
  var i1995 = i1993[13]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 2, i1994, '')
  }
  i1992.m_fontSharedMaterials = i1994
  request.r(i1993[14], i1993[15], 0, i1992, 'm_fontMaterial')
  var i1997 = i1993[16]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1992.m_fontMaterials = i1996
  i1992.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1993[17], i1993[18], i1993[19], i1993[20])
  i1992.m_fontColor = new pc.Color(i1993[21], i1993[22], i1993[23], i1993[24])
  i1992.m_enableVertexGradient = !!i1993[25]
  i1992.m_colorMode = i1993[26]
  i1992.m_fontColorGradient = request.d('TMPro.VertexGradient', i1993[27], i1992.m_fontColorGradient)
  request.r(i1993[28], i1993[29], 0, i1992, 'm_fontColorGradientPreset')
  request.r(i1993[30], i1993[31], 0, i1992, 'm_spriteAsset')
  i1992.m_tintAllSprites = !!i1993[32]
  request.r(i1993[33], i1993[34], 0, i1992, 'm_StyleSheet')
  i1992.m_TextStyleHashCode = i1993[35]
  i1992.m_overrideHtmlColors = !!i1993[36]
  i1992.m_faceColor = UnityEngine.Color32.ConstructColor(i1993[37], i1993[38], i1993[39], i1993[40])
  i1992.m_fontSize = i1993[41]
  i1992.m_fontSizeBase = i1993[42]
  i1992.m_fontWeight = i1993[43]
  i1992.m_enableAutoSizing = !!i1993[44]
  i1992.m_fontSizeMin = i1993[45]
  i1992.m_fontSizeMax = i1993[46]
  i1992.m_fontStyle = i1993[47]
  i1992.m_HorizontalAlignment = i1993[48]
  i1992.m_VerticalAlignment = i1993[49]
  i1992.m_textAlignment = i1993[50]
  i1992.m_characterSpacing = i1993[51]
  i1992.m_wordSpacing = i1993[52]
  i1992.m_lineSpacing = i1993[53]
  i1992.m_lineSpacingMax = i1993[54]
  i1992.m_paragraphSpacing = i1993[55]
  i1992.m_charWidthMaxAdj = i1993[56]
  i1992.m_TextWrappingMode = i1993[57]
  i1992.m_wordWrappingRatios = i1993[58]
  i1992.m_overflowMode = i1993[59]
  request.r(i1993[60], i1993[61], 0, i1992, 'm_linkedTextComponent')
  request.r(i1993[62], i1993[63], 0, i1992, 'parentLinkedComponent')
  i1992.m_enableKerning = !!i1993[64]
  var i1999 = i1993[65]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.add(i1999[i + 0]);
  }
  i1992.m_ActiveFontFeatures = i1998
  i1992.m_enableExtraPadding = !!i1993[66]
  i1992.checkPaddingRequired = !!i1993[67]
  i1992.m_isRichText = !!i1993[68]
  i1992.m_parseCtrlCharacters = !!i1993[69]
  i1992.m_isOrthographic = !!i1993[70]
  i1992.m_isCullingEnabled = !!i1993[71]
  i1992.m_horizontalMapping = i1993[72]
  i1992.m_verticalMapping = i1993[73]
  i1992.m_uvLineOffset = i1993[74]
  i1992.m_geometrySortingOrder = i1993[75]
  i1992.m_IsTextObjectScaleStatic = !!i1993[76]
  i1992.m_VertexBufferAutoSizeReduction = !!i1993[77]
  i1992.m_useMaxVisibleDescender = !!i1993[78]
  i1992.m_pageToDisplay = i1993[79]
  i1992.m_margin = new pc.Vec4( i1993[80], i1993[81], i1993[82], i1993[83] )
  i1992.m_isUsingLegacyAnimationComponent = !!i1993[84]
  i1992.m_isVolumetricText = !!i1993[85]
  request.r(i1993[86], i1993[87], 0, i1992, 'm_Material')
  i1992.m_EmojiFallbackSupport = !!i1993[88]
  i1992.m_Maskable = !!i1993[89]
  i1992.m_Color = new pc.Color(i1993[90], i1993[91], i1993[92], i1993[93])
  i1992.m_RaycastTarget = !!i1993[94]
  i1992.m_RaycastPadding = new pc.Vec4( i1993[95], i1993[96], i1993[97], i1993[98] )
  return i1992
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.VertexGradient' )
  var i2003 = data
  i2002.topLeft = new pc.Color(i2003[0], i2003[1], i2003[2], i2003[3])
  i2002.topRight = new pc.Color(i2003[4], i2003[5], i2003[6], i2003[7])
  i2002.bottomLeft = new pc.Color(i2003[8], i2003[9], i2003[10], i2003[11])
  i2002.bottomRight = new pc.Color(i2003[12], i2003[13], i2003[14], i2003[15])
  return i2002
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnityEngine.UI.Button' )
  var i2007 = data
  i2006.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2007[0], i2006.m_OnClick)
  i2006.m_Navigation = request.d('UnityEngine.UI.Navigation', i2007[1], i2006.m_Navigation)
  i2006.m_Transition = i2007[2]
  i2006.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2007[3], i2006.m_Colors)
  i2006.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2007[4], i2006.m_SpriteState)
  i2006.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2007[5], i2006.m_AnimationTriggers)
  i2006.m_Interactable = !!i2007[6]
  request.r(i2007[7], i2007[8], 0, i2006, 'm_TargetGraphic')
  return i2006
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2009 = data
  i2008.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2009[0], i2008.m_PersistentCalls)
  return i2008
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2011 = data
  var i2013 = i2011[0]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.add(request.d('UnityEngine.Events.PersistentCall', i2013[i + 0]));
  }
  i2010.m_Calls = i2012
  return i2010
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'm_Target')
  i2016.m_TargetAssemblyTypeName = i2017[2]
  i2016.m_MethodName = i2017[3]
  i2016.m_Mode = i2017[4]
  i2016.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2017[5], i2016.m_Arguments)
  i2016.m_CallState = i2017[6]
  return i2016
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'm_ObjectArgument')
  i2018.m_ObjectArgumentAssemblyTypeName = i2019[2]
  i2018.m_IntArgument = i2019[3]
  i2018.m_FloatArgument = i2019[4]
  i2018.m_StringArgument = i2019[5]
  i2018.m_BoolArgument = !!i2019[6]
  return i2018
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2021 = data
  i2020.m_Mode = i2021[0]
  i2020.m_WrapAround = !!i2021[1]
  request.r(i2021[2], i2021[3], 0, i2020, 'm_SelectOnUp')
  request.r(i2021[4], i2021[5], 0, i2020, 'm_SelectOnDown')
  request.r(i2021[6], i2021[7], 0, i2020, 'm_SelectOnLeft')
  request.r(i2021[8], i2021[9], 0, i2020, 'm_SelectOnRight')
  return i2020
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2023 = data
  i2022.m_NormalColor = new pc.Color(i2023[0], i2023[1], i2023[2], i2023[3])
  i2022.m_HighlightedColor = new pc.Color(i2023[4], i2023[5], i2023[6], i2023[7])
  i2022.m_PressedColor = new pc.Color(i2023[8], i2023[9], i2023[10], i2023[11])
  i2022.m_SelectedColor = new pc.Color(i2023[12], i2023[13], i2023[14], i2023[15])
  i2022.m_DisabledColor = new pc.Color(i2023[16], i2023[17], i2023[18], i2023[19])
  i2022.m_ColorMultiplier = i2023[20]
  i2022.m_FadeDuration = i2023[21]
  return i2022
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'm_HighlightedSprite')
  request.r(i2025[2], i2025[3], 0, i2024, 'm_PressedSprite')
  request.r(i2025[4], i2025[5], 0, i2024, 'm_SelectedSprite')
  request.r(i2025[6], i2025[7], 0, i2024, 'm_DisabledSprite')
  return i2024
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2027 = data
  i2026.m_NormalTrigger = i2027[0]
  i2026.m_HighlightedTrigger = i2027[1]
  i2026.m_PressedTrigger = i2027[2]
  i2026.m_SelectedTrigger = i2027[3]
  i2026.m_DisabledTrigger = i2027[4]
  return i2026
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2029 = data
  i2028.m_ShowMaskGraphic = !!i2029[0]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'clip')
  request.r(i2031[2], i2031[3], 0, i2030, 'outputAudioMixerGroup')
  i2030.playOnAwake = !!i2031[4]
  i2030.loop = !!i2031[5]
  i2030.time = i2031[6]
  i2030.volume = i2031[7]
  i2030.pitch = i2031[8]
  i2030.enabled = !!i2031[9]
  return i2030
}

Deserializers["GameController"] = function (request, data, root) {
  var i2032 = root || request.c( 'GameController' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, '_tutorialHand')
  request.r(i2033[2], i2033[3], 0, i2032, '_tutorialFrom')
  request.r(i2033[4], i2033[5], 0, i2032, '_tutorialTo')
  i2032._tutorialScaleDuration = i2033[6]
  i2032._tutorialMoveDuration = i2033[7]
  i2032._tutorialStartDelay = i2033[8]
  var i2035 = i2033[9]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('Target')))
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 1, i2034, '')
  }
  i2032._targets = i2034
  return i2032
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2038 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'skeletonDataAsset')
  request.r(i2039[2], i2039[3], 0, i2038, 'additiveMaterial')
  request.r(i2039[4], i2039[5], 0, i2038, 'multiplyMaterial')
  request.r(i2039[6], i2039[7], 0, i2038, 'screenMaterial')
  i2038.forceAdditiveMaterial = !!i2039[8]
  i2038.initialSkinName = i2039[9]
  i2038.initialFlipX = !!i2039[10]
  i2038.initialFlipY = !!i2039[11]
  i2038.startingAnimation = i2039[12]
  i2038.startingLoop = !!i2039[13]
  i2038.timeScale = i2039[14]
  i2038.freeze = !!i2039[15]
  i2038.layoutScaleMode = i2039[16]
  i2038.updateWhenInvisible = i2039[17]
  i2038.allowMultipleCanvasRenderers = !!i2039[18]
  var i2041 = i2039[19]
  var i2040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 1, i2040, '')
  }
  i2038.canvasRenderers = i2040
  i2038.enableSeparatorSlots = !!i2039[20]
  i2038.updateSeparatorPartLocation = !!i2039[21]
  i2038.updateSeparatorPartScale = !!i2039[22]
  i2038.disableMeshAssignmentOnOverride = !!i2039[23]
  i2038.m_SkeletonColor = new pc.Color(i2039[24], i2039[25], i2039[26], i2039[27])
  i2038.referenceSize = new pc.Vec2( i2039[28], i2039[29] )
  i2038.pivotOffset = new pc.Vec2( i2039[30], i2039[31] )
  i2038.referenceScale = i2039[32]
  i2038.layoutScale = i2039[33]
  i2038.rectTransformSize = new pc.Vec2( i2039[34], i2039[35] )
  i2038.editReferenceRect = !!i2039[36]
  var i2043 = i2039[37]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( i2043[i + 0] );
  }
  i2038.separatorSlotNames = i2042
  var i2045 = i2039[38]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 1, i2044, '')
  }
  i2038.separatorParts = i2044
  i2038.physicsPositionInheritanceFactor = new pc.Vec2( i2039[39], i2039[40] )
  i2038.physicsRotationInheritanceFactor = i2039[41]
  request.r(i2039[42], i2039[43], 0, i2038, 'physicsMovementRelativeTo')
  i2038.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2039[44], i2038.meshGenerator)
  i2038.updateTiming = i2039[45]
  i2038.unscaledTime = !!i2039[46]
  request.r(i2039[47], i2039[48], 0, i2038, 'm_Material')
  i2038.m_Maskable = !!i2039[49]
  i2038.m_Color = new pc.Color(i2039[50], i2039[51], i2039[52], i2039[53])
  i2038.m_RaycastTarget = !!i2039[54]
  i2038.m_RaycastPadding = new pc.Vec4( i2039[55], i2039[56], i2039[57], i2039[58] )
  return i2038
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2052 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2053 = data
  i2052.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2053[0], i2052.settings)
  return i2052
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2054 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2055 = data
  i2054.useClipping = !!i2055[0]
  i2054.zSpacing = i2055[1]
  i2054.tintBlack = !!i2055[2]
  i2054.canvasGroupCompatible = !!i2055[3]
  i2054.pmaVertexColors = !!i2055[4]
  i2054.addNormals = !!i2055[5]
  i2054.calculateTangents = !!i2055[6]
  i2054.immutableTriangles = !!i2055[7]
  return i2054
}

Deserializers["Playable.Window"] = function (request, data, root) {
  var i2056 = root || request.c( 'Playable.Window' )
  var i2057 = data
  i2056._animWindow = i2057[0]
  i2056._animGhost = i2057[1]
  request.r(i2057[2], i2057[3], 0, i2056, '_skeletonWindow')
  request.r(i2057[4], i2057[5], 0, i2056, '_skeletonGhost')
  return i2056
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i2058 = root || request.c( 'SpineEventSoundPlayer' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'skeletonAnimation')
  request.r(i2059[2], i2059[3], 0, i2058, 'skeletonGraphic')
  request.r(i2059[4], i2059[5], 0, i2058, 'audioSource')
  var i2061 = i2059[6]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 1, i2060, '')
  }
  i2058.audioClips = i2060
  return i2058
}

Deserializers["Girl"] = function (request, data, root) {
  var i2064 = root || request.c( 'Girl' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, '_skeletonGraphic')
  i2064._defaultAnimation = request.d('SpineAnimationData', i2065[2], i2064._defaultAnimation)
  return i2064
}

Deserializers["SpineAnimationData"] = function (request, data, root) {
  var i2066 = root || request.c( 'SpineAnimationData' )
  var i2067 = data
  i2066.animationName = i2067[0]
  i2066.loop = !!i2067[1]
  return i2066
}

Deserializers["Target"] = function (request, data, root) {
  var i2068 = root || request.c( 'Target' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, '_skeletonGraphic')
  request.r(i2069[2], i2069[3], 0, i2068, '_dropArea')
  var i2071 = i2069[4]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('Target+TargetReaction')))
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.add(request.d('Target+TargetReaction', i2071[i + 0]));
  }
  i2068._reactions = i2070
  return i2068
}

Deserializers["Target+TargetReaction"] = function (request, data, root) {
  var i2074 = root || request.c( 'Target+TargetReaction' )
  var i2075 = data
  i2074.itemType = i2075[0]
  var i2077 = i2075[1]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('SpineAnimationData', i2077[i + 0]));
  }
  i2074.animations = i2076
  return i2074
}

Deserializers["Item"] = function (request, data, root) {
  var i2080 = root || request.c( 'Item' )
  var i2081 = data
  i2080._itemType = i2081[0]
  request.r(i2081[1], i2081[2], 0, i2080, '_normalVisual')
  request.r(i2081[3], i2081[4], 0, i2080, '_activeVisual')
  request.r(i2081[5], i2081[6], 0, i2080, '_girl')
  request.r(i2081[7], i2081[8], 0, i2080, '_skeletonGraphic')
  var i2083 = i2081[9]
  var i2082 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.add(request.d('SpineAnimationData', i2083[i + 0]));
  }
  i2080._girlAnimations = i2082
  i2080._girlSkinName = i2081[10]
  i2080._dropDetectionPadding = i2081[11]
  request.r(i2081[12], i2081[13], 0, i2080, '_dropSound')
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2085 = data
  i2084.m_Alpha = i2085[0]
  i2084.m_Interactable = !!i2085[1]
  i2084.m_BlocksRaycasts = !!i2085[2]
  i2084.m_IgnoreParentGroups = !!i2085[3]
  i2084.enabled = !!i2085[4]
  return i2084
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2087 = data
  i2086.m_Spacing = i2087[0]
  i2086.m_ChildForceExpandWidth = !!i2087[1]
  i2086.m_ChildForceExpandHeight = !!i2087[2]
  i2086.m_ChildControlWidth = !!i2087[3]
  i2086.m_ChildControlHeight = !!i2087[4]
  i2086.m_ChildScaleWidth = !!i2087[5]
  i2086.m_ChildScaleHeight = !!i2087[6]
  i2086.m_ReverseArrangement = !!i2087[7]
  i2086.m_Padding = UnityEngine.RectOffset.FromPaddings(i2087[8], i2087[9], i2087[10], i2087[11])
  i2086.m_ChildAlignment = i2087[12]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2089 = data
  i2088.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2089[0], i2088.main)
  i2088.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2089[1], i2088.colorBySpeed)
  i2088.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2089[2], i2088.colorOverLifetime)
  i2088.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2089[3], i2088.emission)
  i2088.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2089[4], i2088.rotationBySpeed)
  i2088.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2089[5], i2088.rotationOverLifetime)
  i2088.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2089[6], i2088.shape)
  i2088.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2089[7], i2088.sizeBySpeed)
  i2088.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2089[8], i2088.sizeOverLifetime)
  i2088.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2089[9], i2088.textureSheetAnimation)
  i2088.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2089[10], i2088.velocityOverLifetime)
  i2088.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2089[11], i2088.noise)
  i2088.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2089[12], i2088.inheritVelocity)
  i2088.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2089[13], i2088.forceOverLifetime)
  i2088.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2089[14], i2088.limitVelocityOverLifetime)
  i2088.useAutoRandomSeed = !!i2089[15]
  i2088.randomSeed = i2089[16]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemMain()
  var i2091 = data
  i2090.duration = i2091[0]
  i2090.loop = !!i2091[1]
  i2090.prewarm = !!i2091[2]
  i2090.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.startDelay)
  i2090.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[4], i2090.startLifetime)
  i2090.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[5], i2090.startSpeed)
  i2090.startSize3D = !!i2091[6]
  i2090.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[7], i2090.startSizeX)
  i2090.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[8], i2090.startSizeY)
  i2090.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[9], i2090.startSizeZ)
  i2090.startRotation3D = !!i2091[10]
  i2090.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[11], i2090.startRotationX)
  i2090.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[12], i2090.startRotationY)
  i2090.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[13], i2090.startRotationZ)
  i2090.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2091[14], i2090.startColor)
  i2090.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[15], i2090.gravityModifier)
  i2090.simulationSpace = i2091[16]
  request.r(i2091[17], i2091[18], 0, i2090, 'customSimulationSpace')
  i2090.simulationSpeed = i2091[19]
  i2090.useUnscaledTime = !!i2091[20]
  i2090.scalingMode = i2091[21]
  i2090.playOnAwake = !!i2091[22]
  i2090.maxParticles = i2091[23]
  i2090.emitterVelocityMode = i2091[24]
  i2090.stopAction = i2091[25]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2092 = root || new pc.MinMaxCurve()
  var i2093 = data
  i2092.mode = i2093[0]
  i2092.curveMin = new pc.AnimationCurve( { keys_flow: i2093[1] } )
  i2092.curveMax = new pc.AnimationCurve( { keys_flow: i2093[2] } )
  i2092.curveMultiplier = i2093[3]
  i2092.constantMin = i2093[4]
  i2092.constantMax = i2093[5]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2094 = root || new pc.MinMaxGradient()
  var i2095 = data
  i2094.mode = i2095[0]
  i2094.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2095[1], i2094.gradientMin)
  i2094.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2095[2], i2094.gradientMax)
  i2094.colorMin = new pc.Color(i2095[3], i2095[4], i2095[5], i2095[6])
  i2094.colorMax = new pc.Color(i2095[7], i2095[8], i2095[9], i2095[10])
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2097 = data
  i2096.mode = i2097[0]
  var i2099 = i2097[1]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2099[i + 0]) );
  }
  i2096.colorKeys = i2098
  var i2101 = i2097[2]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2101[i + 0]) );
  }
  i2096.alphaKeys = i2100
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2102 = root || new pc.ParticleSystemColorBySpeed()
  var i2103 = data
  i2102.enabled = !!i2103[0]
  i2102.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2103[1], i2102.color)
  i2102.range = new pc.Vec2( i2103[2], i2103[3] )
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2107 = data
  i2106.color = new pc.Color(i2107[0], i2107[1], i2107[2], i2107[3])
  i2106.time = i2107[4]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2111 = data
  i2110.alpha = i2111[0]
  i2110.time = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemColorOverLifetime()
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2113[1], i2112.color)
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2114 = root || new pc.ParticleSystemEmitter()
  var i2115 = data
  i2114.enabled = !!i2115[0]
  i2114.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[1], i2114.rateOverTime)
  i2114.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[2], i2114.rateOverDistance)
  var i2117 = i2115[3]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2117[i + 0]) );
  }
  i2114.bursts = i2116
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2120 = root || new pc.ParticleSystemBurst()
  var i2121 = data
  i2120.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2121[0], i2120.count)
  i2120.cycleCount = i2121[1]
  i2120.minCount = i2121[2]
  i2120.maxCount = i2121[3]
  i2120.repeatInterval = i2121[4]
  i2120.time = i2121[5]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2122 = root || new pc.ParticleSystemRotationBySpeed()
  var i2123 = data
  i2122.enabled = !!i2123[0]
  i2122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[1], i2122.x)
  i2122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[2], i2122.y)
  i2122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[3], i2122.z)
  i2122.separateAxes = !!i2123[4]
  i2122.range = new pc.Vec2( i2123[5], i2123[6] )
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2124 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2125 = data
  i2124.enabled = !!i2125[0]
  i2124.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[1], i2124.x)
  i2124.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[2], i2124.y)
  i2124.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[3], i2124.z)
  i2124.separateAxes = !!i2125[4]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2126 = root || new pc.ParticleSystemShape()
  var i2127 = data
  i2126.enabled = !!i2127[0]
  i2126.shapeType = i2127[1]
  i2126.randomDirectionAmount = i2127[2]
  i2126.sphericalDirectionAmount = i2127[3]
  i2126.randomPositionAmount = i2127[4]
  i2126.alignToDirection = !!i2127[5]
  i2126.radius = i2127[6]
  i2126.radiusMode = i2127[7]
  i2126.radiusSpread = i2127[8]
  i2126.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2127[9], i2126.radiusSpeed)
  i2126.radiusThickness = i2127[10]
  i2126.angle = i2127[11]
  i2126.length = i2127[12]
  i2126.boxThickness = new pc.Vec3( i2127[13], i2127[14], i2127[15] )
  i2126.meshShapeType = i2127[16]
  request.r(i2127[17], i2127[18], 0, i2126, 'mesh')
  request.r(i2127[19], i2127[20], 0, i2126, 'meshRenderer')
  request.r(i2127[21], i2127[22], 0, i2126, 'skinnedMeshRenderer')
  i2126.useMeshMaterialIndex = !!i2127[23]
  i2126.meshMaterialIndex = i2127[24]
  i2126.useMeshColors = !!i2127[25]
  i2126.normalOffset = i2127[26]
  i2126.arc = i2127[27]
  i2126.arcMode = i2127[28]
  i2126.arcSpread = i2127[29]
  i2126.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2127[30], i2126.arcSpeed)
  i2126.donutRadius = i2127[31]
  i2126.position = new pc.Vec3( i2127[32], i2127[33], i2127[34] )
  i2126.rotation = new pc.Vec3( i2127[35], i2127[36], i2127[37] )
  i2126.scale = new pc.Vec3( i2127[38], i2127[39], i2127[40] )
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2128 = root || new pc.ParticleSystemSizeBySpeed()
  var i2129 = data
  i2128.enabled = !!i2129[0]
  i2128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2129[1], i2128.x)
  i2128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2129[2], i2128.y)
  i2128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2129[3], i2128.z)
  i2128.separateAxes = !!i2129[4]
  i2128.range = new pc.Vec2( i2129[5], i2129[6] )
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2130 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2131 = data
  i2130.enabled = !!i2131[0]
  i2130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[1], i2130.x)
  i2130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[2], i2130.y)
  i2130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[3], i2130.z)
  i2130.separateAxes = !!i2131[4]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2132 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2133 = data
  i2132.enabled = !!i2133[0]
  i2132.mode = i2133[1]
  i2132.animation = i2133[2]
  i2132.numTilesX = i2133[3]
  i2132.numTilesY = i2133[4]
  i2132.useRandomRow = !!i2133[5]
  i2132.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[6], i2132.frameOverTime)
  i2132.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[7], i2132.startFrame)
  i2132.cycleCount = i2133[8]
  i2132.rowIndex = i2133[9]
  i2132.flipU = i2133[10]
  i2132.flipV = i2133[11]
  i2132.spriteCount = i2133[12]
  var i2135 = i2133[13]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2132.sprites = i2134
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2138 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2139 = data
  i2138.enabled = !!i2139[0]
  i2138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[1], i2138.x)
  i2138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[2], i2138.y)
  i2138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[3], i2138.z)
  i2138.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[4], i2138.radial)
  i2138.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[5], i2138.speedModifier)
  i2138.space = i2139[6]
  i2138.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[7], i2138.orbitalX)
  i2138.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[8], i2138.orbitalY)
  i2138.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[9], i2138.orbitalZ)
  i2138.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[10], i2138.orbitalOffsetX)
  i2138.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[11], i2138.orbitalOffsetY)
  i2138.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[12], i2138.orbitalOffsetZ)
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2140 = root || new pc.ParticleSystemNoise()
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.separateAxes = !!i2141[1]
  i2140.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[2], i2140.strengthX)
  i2140.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[3], i2140.strengthY)
  i2140.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[4], i2140.strengthZ)
  i2140.frequency = i2141[5]
  i2140.damping = !!i2141[6]
  i2140.octaveCount = i2141[7]
  i2140.octaveMultiplier = i2141[8]
  i2140.octaveScale = i2141[9]
  i2140.quality = i2141[10]
  i2140.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[11], i2140.scrollSpeed)
  i2140.scrollSpeedMultiplier = i2141[12]
  i2140.remapEnabled = !!i2141[13]
  i2140.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[14], i2140.remapX)
  i2140.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[15], i2140.remapY)
  i2140.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[16], i2140.remapZ)
  i2140.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[17], i2140.positionAmount)
  i2140.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[18], i2140.rotationAmount)
  i2140.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[19], i2140.sizeAmount)
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2142 = root || new pc.ParticleSystemInheritVelocity()
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.mode = i2143[1]
  i2142.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[2], i2142.curve)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2144 = root || new pc.ParticleSystemForceOverLifetime()
  var i2145 = data
  i2144.enabled = !!i2145[0]
  i2144.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[1], i2144.x)
  i2144.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[2], i2144.y)
  i2144.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[3], i2144.z)
  i2144.space = i2145[4]
  i2144.randomized = !!i2145[5]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2146 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2147 = data
  i2146.enabled = !!i2147[0]
  i2146.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[1], i2146.limit)
  i2146.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[2], i2146.limitX)
  i2146.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[3], i2146.limitY)
  i2146.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[4], i2146.limitZ)
  i2146.dampen = i2147[5]
  i2146.separateAxes = !!i2147[6]
  i2146.space = i2147[7]
  i2146.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[8], i2146.drag)
  i2146.multiplyDragByParticleSize = !!i2147[9]
  i2146.multiplyDragByParticleVelocity = !!i2147[10]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'mesh')
  i2148.meshCount = i2149[2]
  i2148.activeVertexStreamsCount = i2149[3]
  i2148.alignment = i2149[4]
  i2148.renderMode = i2149[5]
  i2148.sortMode = i2149[6]
  i2148.lengthScale = i2149[7]
  i2148.velocityScale = i2149[8]
  i2148.cameraVelocityScale = i2149[9]
  i2148.normalDirection = i2149[10]
  i2148.sortingFudge = i2149[11]
  i2148.minParticleSize = i2149[12]
  i2148.maxParticleSize = i2149[13]
  i2148.pivot = new pc.Vec3( i2149[14], i2149[15], i2149[16] )
  request.r(i2149[17], i2149[18], 0, i2148, 'trailMaterial')
  i2148.applyActiveColorSpace = !!i2149[19]
  i2148.enabled = !!i2149[20]
  request.r(i2149[21], i2149[22], 0, i2148, 'sharedMaterial')
  var i2151 = i2149[23]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 2, i2150, '')
  }
  i2148.sharedMaterials = i2150
  i2148.receiveShadows = !!i2149[24]
  i2148.shadowCastingMode = i2149[25]
  i2148.sortingLayerID = i2149[26]
  i2148.sortingOrder = i2149[27]
  i2148.lightmapIndex = i2149[28]
  i2148.lightmapSceneIndex = i2149[29]
  i2148.lightmapScaleOffset = new pc.Vec4( i2149[30], i2149[31], i2149[32], i2149[33] )
  i2148.lightProbeUsage = i2149[34]
  i2148.reflectionProbeUsage = i2149[35]
  return i2148
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i2152 = root || request.c( 'Playable.AudioManager' )
  var i2153 = data
  var i2155 = i2153[0]
  var i2154 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.add(request.d('Playable.SoundData', i2155[i + 0]));
  }
  i2152._sounds = i2154
  request.r(i2153[1], i2153[2], 0, i2152, '_audioMusic')
  request.r(i2153[3], i2153[4], 0, i2152, '_audioSound')
  return i2152
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i2158 = root || request.c( 'Playable.SoundData' )
  var i2159 = data
  i2158.Type = i2159[0]
  request.r(i2159[1], i2159[2], 0, i2158, 'Clip')
  return i2158
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'm_FirstSelected')
  i2160.m_sendNavigationEvents = !!i2161[2]
  i2160.m_DragThreshold = i2161[3]
  return i2160
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2163 = data
  i2162.m_HorizontalAxis = i2163[0]
  i2162.m_VerticalAxis = i2163[1]
  i2162.m_SubmitButton = i2163[2]
  i2162.m_CancelButton = i2163[3]
  i2162.m_InputActionsPerSecond = i2163[4]
  i2162.m_RepeatDelay = i2163[5]
  i2162.m_ForceModuleActive = !!i2163[6]
  i2162.m_SendPointerHoverToParent = !!i2163[7]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2165 = data
  i2164.ambientIntensity = i2165[0]
  i2164.reflectionIntensity = i2165[1]
  i2164.ambientMode = i2165[2]
  i2164.ambientLight = new pc.Color(i2165[3], i2165[4], i2165[5], i2165[6])
  i2164.ambientSkyColor = new pc.Color(i2165[7], i2165[8], i2165[9], i2165[10])
  i2164.ambientGroundColor = new pc.Color(i2165[11], i2165[12], i2165[13], i2165[14])
  i2164.ambientEquatorColor = new pc.Color(i2165[15], i2165[16], i2165[17], i2165[18])
  i2164.fogColor = new pc.Color(i2165[19], i2165[20], i2165[21], i2165[22])
  i2164.fogEndDistance = i2165[23]
  i2164.fogStartDistance = i2165[24]
  i2164.fogDensity = i2165[25]
  i2164.fog = !!i2165[26]
  request.r(i2165[27], i2165[28], 0, i2164, 'skybox')
  i2164.fogMode = i2165[29]
  var i2167 = i2165[30]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2167[i + 0]) );
  }
  i2164.lightmaps = i2166
  i2164.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2165[31], i2164.lightProbes)
  i2164.lightmapsMode = i2165[32]
  i2164.mixedBakeMode = i2165[33]
  i2164.environmentLightingMode = i2165[34]
  i2164.ambientProbe = new pc.SphericalHarmonicsL2(i2165[35])
  request.r(i2165[36], i2165[37], 0, i2164, 'customReflection')
  request.r(i2165[38], i2165[39], 0, i2164, 'defaultReflection')
  i2164.defaultReflectionMode = i2165[40]
  i2164.defaultReflectionResolution = i2165[41]
  i2164.sunLightObjectId = i2165[42]
  i2164.pixelLightCount = i2165[43]
  i2164.defaultReflectionHDR = !!i2165[44]
  i2164.hasLightDataAsset = !!i2165[45]
  i2164.hasManualGenerate = !!i2165[46]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'lightmapColor')
  request.r(i2171[2], i2171[3], 0, i2170, 'lightmapDirection')
  request.r(i2171[4], i2171[5], 0, i2170, 'shadowMask')
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2172 = root || new UnityEngine.LightProbes()
  var i2173 = data
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2183[i + 0]));
  }
  i2180.ShaderCompilationErrors = i2182
  i2180.name = i2181[1]
  i2180.guid = i2181[2]
  var i2185 = i2181[3]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( i2185[i + 0] );
  }
  i2180.shaderDefinedKeywords = i2184
  var i2187 = i2181[4]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2187[i + 0]) );
  }
  i2180.passes = i2186
  var i2189 = i2181[5]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2189[i + 0]) );
  }
  i2180.usePasses = i2188
  var i2191 = i2181[6]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2191[i + 0]) );
  }
  i2180.defaultParameterValues = i2190
  request.r(i2181[7], i2181[8], 0, i2180, 'unityFallbackShader')
  i2180.readDepth = !!i2181[9]
  i2180.hasDepthOnlyPass = !!i2181[10]
  i2180.isCreatedByShaderGraph = !!i2181[11]
  i2180.disableBatching = !!i2181[12]
  i2180.compiled = !!i2181[13]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2195 = data
  i2194.shaderName = i2195[0]
  i2194.errorMessage = i2195[1]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2198 = root || new pc.UnityShaderPass()
  var i2199 = data
  i2198.id = i2199[0]
  i2198.subShaderIndex = i2199[1]
  i2198.name = i2199[2]
  i2198.passType = i2199[3]
  i2198.grabPassTextureName = i2199[4]
  i2198.usePass = !!i2199[5]
  i2198.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[6], i2198.zTest)
  i2198.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[7], i2198.zWrite)
  i2198.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[8], i2198.culling)
  i2198.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2199[9], i2198.blending)
  i2198.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2199[10], i2198.alphaBlending)
  i2198.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[11], i2198.colorWriteMask)
  i2198.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[12], i2198.offsetUnits)
  i2198.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[13], i2198.offsetFactor)
  i2198.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[14], i2198.stencilRef)
  i2198.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[15], i2198.stencilReadMask)
  i2198.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[16], i2198.stencilWriteMask)
  i2198.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[17], i2198.stencilOp)
  i2198.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[18], i2198.stencilOpFront)
  i2198.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[19], i2198.stencilOpBack)
  var i2201 = i2199[20]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2201[i + 0]) );
  }
  i2198.tags = i2200
  var i2203 = i2199[21]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2198.passDefinedKeywords = i2202
  var i2205 = i2199[22]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2205[i + 0]) );
  }
  i2198.passDefinedKeywordGroups = i2204
  var i2207 = i2199[23]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2207[i + 0]) );
  }
  i2198.variants = i2206
  var i2209 = i2199[24]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2209[i + 0]) );
  }
  i2198.excludedVariants = i2208
  i2198.hasDepthReader = !!i2199[25]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2211 = data
  i2210.val = i2211[0]
  i2210.name = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2213 = data
  i2212.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[0], i2212.src)
  i2212.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[1], i2212.dst)
  i2212.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[2], i2212.op)
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2215 = data
  i2214.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2215[0], i2214.pass)
  i2214.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2215[1], i2214.fail)
  i2214.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2215[2], i2214.zFail)
  i2214.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2215[3], i2214.comp)
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.value = i2219[1]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2223 = data
  var i2225 = i2223[0]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( i2225[i + 0] );
  }
  i2222.keywords = i2224
  i2222.hasDiscard = !!i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2229 = data
  i2228.passId = i2229[0]
  i2228.subShaderIndex = i2229[1]
  var i2231 = i2229[2]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( i2231[i + 0] );
  }
  i2228.keywords = i2230
  i2228.vertexProgram = i2229[3]
  i2228.fragmentProgram = i2229[4]
  i2228.exportedForWebGl2 = !!i2229[5]
  i2228.readDepth = !!i2229[6]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'shader')
  i2234.pass = i2235[2]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.type = i2239[1]
  i2238.value = new pc.Vec4( i2239[2], i2239[3], i2239[4], i2239[5] )
  i2238.textureValue = i2239[6]
  i2238.shaderPropertyFlag = i2239[7]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2241 = data
  i2240.name = i2241[0]
  request.r(i2241[1], i2241[2], 0, i2240, 'texture')
  i2240.aabb = i2241[3]
  i2240.vertices = i2241[4]
  i2240.triangles = i2241[5]
  i2240.textureRect = UnityEngine.Rect.MinMaxRect(i2241[6], i2241[7], i2241[8], i2241[9])
  i2240.packedRect = UnityEngine.Rect.MinMaxRect(i2241[10], i2241[11], i2241[12], i2241[13])
  i2240.border = new pc.Vec4( i2241[14], i2241[15], i2241[16], i2241[17] )
  i2240.transparency = i2241[18]
  i2240.bounds = i2241[19]
  i2240.pixelsPerUnit = i2241[20]
  i2240.textureWidth = i2241[21]
  i2240.textureHeight = i2241[22]
  i2240.nativeSize = new pc.Vec2( i2241[23], i2241[24] )
  i2240.pivot = new pc.Vec2( i2241[25], i2241[26] )
  i2240.textureRectOffset = new pc.Vec2( i2241[27], i2241[28] )
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2243 = data
  i2242.name = i2243[0]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.ascent = i2245[1]
  i2244.originalLineHeight = i2245[2]
  i2244.fontSize = i2245[3]
  var i2247 = i2245[4]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2247[i + 0]) );
  }
  i2244.characterInfo = i2246
  request.r(i2245[5], i2245[6], 0, i2244, 'texture')
  i2244.originalFontSize = i2245[7]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2251 = data
  i2250.index = i2251[0]
  i2250.advance = i2251[1]
  i2250.bearing = i2251[2]
  i2250.glyphWidth = i2251[3]
  i2250.glyphHeight = i2251[4]
  i2250.minX = i2251[5]
  i2250.maxX = i2251[6]
  i2250.minY = i2251[7]
  i2250.maxY = i2251[8]
  i2250.uvBottomLeftX = i2251[9]
  i2250.uvBottomLeftY = i2251[10]
  i2250.uvBottomRightX = i2251[11]
  i2250.uvBottomRightY = i2251[12]
  i2250.uvTopLeftX = i2251[13]
  i2250.uvTopLeftY = i2251[14]
  i2250.uvTopRightX = i2251[15]
  i2250.uvTopRightY = i2251[16]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.bytes64 = i2253[1]
  i2252.data = i2253[2]
  return i2252
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2254 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2255 = data
  i2254.normalStyle = i2255[0]
  i2254.normalSpacingOffset = i2255[1]
  i2254.boldStyle = i2255[2]
  i2254.boldSpacing = i2255[3]
  i2254.italicStyle = i2255[4]
  i2254.tabSize = i2255[5]
  request.r(i2255[6], i2255[7], 0, i2254, 'atlas')
  i2254.m_SourceFontFileGUID = i2255[8]
  i2254.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2255[9], i2254.m_CreationSettings)
  request.r(i2255[10], i2255[11], 0, i2254, 'm_SourceFontFile')
  i2254.m_SourceFontFilePath = i2255[12]
  i2254.m_AtlasPopulationMode = i2255[13]
  i2254.InternalDynamicOS = !!i2255[14]
  var i2257 = i2255[15]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.add(request.d('UnityEngine.TextCore.Glyph', i2257[i + 0]));
  }
  i2254.m_GlyphTable = i2256
  var i2259 = i2255[16]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.add(request.d('TMPro.TMP_Character', i2259[i + 0]));
  }
  i2254.m_CharacterTable = i2258
  var i2261 = i2255[17]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 2, i2260, '')
  }
  i2254.m_AtlasTextures = i2260
  i2254.m_AtlasTextureIndex = i2255[18]
  i2254.m_IsMultiAtlasTexturesEnabled = !!i2255[19]
  i2254.m_GetFontFeatures = !!i2255[20]
  i2254.m_ClearDynamicDataOnBuild = !!i2255[21]
  i2254.m_AtlasWidth = i2255[22]
  i2254.m_AtlasHeight = i2255[23]
  i2254.m_AtlasPadding = i2255[24]
  i2254.m_AtlasRenderMode = i2255[25]
  var i2263 = i2255[26]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(request.d('UnityEngine.TextCore.GlyphRect', i2263[i + 0]));
  }
  i2254.m_UsedGlyphRects = i2262
  var i2265 = i2255[27]
  var i2264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.add(request.d('UnityEngine.TextCore.GlyphRect', i2265[i + 0]));
  }
  i2254.m_FreeGlyphRects = i2264
  i2254.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2255[28], i2254.m_FontFeatureTable)
  i2254.m_ShouldReimportFontFeatures = !!i2255[29]
  var i2267 = i2255[30]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 1, i2266, '')
  }
  i2254.m_FallbackFontAssetTable = i2266
  var i2269 = i2255[31]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('TMPro.TMP_FontWeightPair', i2269[i + 0]) );
  }
  i2254.m_FontWeightTable = i2268
  var i2271 = i2255[32]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('TMPro.TMP_FontWeightPair', i2271[i + 0]) );
  }
  i2254.fontWeights = i2270
  i2254.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2255[33], i2254.m_fontInfo)
  var i2273 = i2255[34]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.add(request.d('TMPro.TMP_Glyph', i2273[i + 0]));
  }
  i2254.m_glyphInfoList = i2272
  i2254.m_KerningTable = request.d('TMPro.KerningTable', i2255[35], i2254.m_KerningTable)
  var i2275 = i2255[36]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 1, i2274, '')
  }
  i2254.fallbackFontAssets = i2274
  i2254.m_Version = i2255[37]
  i2254.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2255[38], i2254.m_FaceInfo)
  request.r(i2255[39], i2255[40], 0, i2254, 'm_Material')
  return i2254
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2277 = data
  i2276.sourceFontFileName = i2277[0]
  i2276.sourceFontFileGUID = i2277[1]
  i2276.faceIndex = i2277[2]
  i2276.pointSizeSamplingMode = i2277[3]
  i2276.pointSize = i2277[4]
  i2276.padding = i2277[5]
  i2276.paddingMode = i2277[6]
  i2276.packingMode = i2277[7]
  i2276.atlasWidth = i2277[8]
  i2276.atlasHeight = i2277[9]
  i2276.characterSetSelectionMode = i2277[10]
  i2276.characterSequence = i2277[11]
  i2276.referencedFontAssetGUID = i2277[12]
  i2276.referencedTextAssetGUID = i2277[13]
  i2276.fontStyle = i2277[14]
  i2276.fontStyleModifier = i2277[15]
  i2276.renderMode = i2277[16]
  i2276.includeFontFeatures = !!i2277[17]
  return i2276
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2281 = data
  i2280.m_Index = i2281[0]
  i2280.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2281[1], i2280.m_Metrics)
  i2280.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2281[2], i2280.m_GlyphRect)
  i2280.m_Scale = i2281[3]
  i2280.m_AtlasIndex = i2281[4]
  i2280.m_ClassDefinitionType = i2281[5]
  return i2280
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2283 = data
  i2282.m_Width = i2283[0]
  i2282.m_Height = i2283[1]
  i2282.m_HorizontalBearingX = i2283[2]
  i2282.m_HorizontalBearingY = i2283[3]
  i2282.m_HorizontalAdvance = i2283[4]
  return i2282
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2285 = data
  i2284.m_X = i2285[0]
  i2284.m_Y = i2285[1]
  i2284.m_Width = i2285[2]
  i2284.m_Height = i2285[3]
  return i2284
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2288 = root || request.c( 'TMPro.TMP_Character' )
  var i2289 = data
  i2288.m_ElementType = i2289[0]
  i2288.m_Unicode = i2289[1]
  i2288.m_GlyphIndex = i2289[2]
  i2288.m_Scale = i2289[3]
  return i2288
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2295 = data
  var i2297 = i2295[0]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.add(request.d('TMPro.MultipleSubstitutionRecord', i2297[i + 0]));
  }
  i2294.m_MultipleSubstitutionRecords = i2296
  var i2299 = i2295[1]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.add(request.d('TMPro.LigatureSubstitutionRecord', i2299[i + 0]));
  }
  i2294.m_LigatureSubstitutionRecords = i2298
  var i2301 = i2295[2]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2301[i + 0]));
  }
  i2294.m_GlyphPairAdjustmentRecords = i2300
  var i2303 = i2295[3]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2303[i + 0]));
  }
  i2294.m_MarkToBaseAdjustmentRecords = i2302
  var i2305 = i2295[4]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2305[i + 0]));
  }
  i2294.m_MarkToMarkAdjustmentRecords = i2304
  return i2294
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2308 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2309 = data
  i2308.m_TargetGlyphID = i2309[0]
  i2308.m_SubstituteGlyphIDs = i2309[1]
  return i2308
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2313 = data
  i2312.m_ComponentGlyphIDs = i2313[0]
  i2312.m_LigatureGlyphID = i2313[1]
  return i2312
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2317 = data
  i2316.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2317[0], i2316.m_FirstAdjustmentRecord)
  i2316.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2317[1], i2316.m_SecondAdjustmentRecord)
  i2316.m_FeatureLookupFlags = i2317[2]
  return i2316
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2320 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2321 = data
  i2320.m_BaseGlyphID = i2321[0]
  i2320.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2321[1], i2320.m_BaseGlyphAnchorPoint)
  i2320.m_MarkGlyphID = i2321[2]
  i2320.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2321[3], i2320.m_MarkPositionAdjustment)
  return i2320
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2325 = data
  i2324.m_BaseMarkGlyphID = i2325[0]
  i2324.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2325[1], i2324.m_BaseMarkGlyphAnchorPoint)
  i2324.m_CombiningMarkGlyphID = i2325[2]
  i2324.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2325[3], i2324.m_CombiningMarkPositionAdjustment)
  return i2324
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'regularTypeface')
  request.r(i2331[2], i2331[3], 0, i2330, 'italicTypeface')
  return i2330
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2332 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2333 = data
  i2332.Name = i2333[0]
  i2332.PointSize = i2333[1]
  i2332.Scale = i2333[2]
  i2332.CharacterCount = i2333[3]
  i2332.LineHeight = i2333[4]
  i2332.Baseline = i2333[5]
  i2332.Ascender = i2333[6]
  i2332.CapHeight = i2333[7]
  i2332.Descender = i2333[8]
  i2332.CenterLine = i2333[9]
  i2332.SuperscriptOffset = i2333[10]
  i2332.SubscriptOffset = i2333[11]
  i2332.SubSize = i2333[12]
  i2332.Underline = i2333[13]
  i2332.UnderlineThickness = i2333[14]
  i2332.strikethrough = i2333[15]
  i2332.strikethroughThickness = i2333[16]
  i2332.TabWidth = i2333[17]
  i2332.Padding = i2333[18]
  i2332.AtlasWidth = i2333[19]
  i2332.AtlasHeight = i2333[20]
  return i2332
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2337 = data
  i2336.id = i2337[0]
  i2336.x = i2337[1]
  i2336.y = i2337[2]
  i2336.width = i2337[3]
  i2336.height = i2337[4]
  i2336.xOffset = i2337[5]
  i2336.yOffset = i2337[6]
  i2336.xAdvance = i2337[7]
  i2336.scale = i2337[8]
  return i2336
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2338 = root || request.c( 'TMPro.KerningTable' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(request.d('TMPro.KerningPair', i2341[i + 0]));
  }
  i2338.kerningPairs = i2340
  return i2338
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.KerningPair' )
  var i2345 = data
  i2344.xOffset = i2345[0]
  i2344.m_FirstGlyph = i2345[1]
  i2344.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2345[2], i2344.m_FirstGlyphAdjustments)
  i2344.m_SecondGlyph = i2345[3]
  i2344.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2345[4], i2344.m_SecondGlyphAdjustments)
  i2344.m_IgnoreSpacingAdjustments = !!i2345[5]
  return i2344
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2347 = data
  i2346.m_FaceIndex = i2347[0]
  i2346.m_FamilyName = i2347[1]
  i2346.m_StyleName = i2347[2]
  i2346.m_PointSize = i2347[3]
  i2346.m_Scale = i2347[4]
  i2346.m_UnitsPerEM = i2347[5]
  i2346.m_LineHeight = i2347[6]
  i2346.m_AscentLine = i2347[7]
  i2346.m_CapLine = i2347[8]
  i2346.m_MeanLine = i2347[9]
  i2346.m_Baseline = i2347[10]
  i2346.m_DescentLine = i2347[11]
  i2346.m_SuperscriptOffset = i2347[12]
  i2346.m_SuperscriptSize = i2347[13]
  i2346.m_SubscriptOffset = i2347[14]
  i2346.m_SubscriptSize = i2347[15]
  i2346.m_UnderlineOffset = i2347[16]
  i2346.m_UnderlineThickness = i2347[17]
  i2346.m_StrikethroughOffset = i2347[18]
  i2346.m_StrikethroughThickness = i2347[19]
  i2346.m_TabWidth = i2347[20]
  return i2346
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2348 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2349 = data
  var i2351 = i2349[0]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 2, i2350, '')
  }
  i2348.atlasAssets = i2350
  i2348.scale = i2349[1]
  request.r(i2349[2], i2349[3], 0, i2348, 'skeletonJSON')
  i2348.isUpgradingBlendModeMaterials = !!i2349[4]
  i2348.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2349[5], i2348.blendModeMaterials)
  var i2353 = i2349[6]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 1, i2352, '')
  }
  i2348.skeletonDataModifiers = i2352
  var i2355 = i2349[7]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( i2355[i + 0] );
  }
  i2348.fromAnimation = i2354
  var i2357 = i2349[8]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( i2357[i + 0] );
  }
  i2348.toAnimation = i2356
  i2348.duration = i2349[9]
  i2348.defaultMix = i2349[10]
  request.r(i2349[11], i2349[12], 0, i2348, 'controller')
  return i2348
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2360 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2361 = data
  i2360.applyAdditiveMaterial = !!i2361[0]
  var i2363 = i2361[1]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2363[i + 0]));
  }
  i2360.additiveMaterials = i2362
  var i2365 = i2361[2]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2365[i + 0]));
  }
  i2360.multiplyMaterials = i2364
  var i2367 = i2361[3]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2367[i + 0]));
  }
  i2360.screenMaterials = i2366
  i2360.requiresBlendModeMaterials = !!i2361[4]
  return i2360
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2370 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2371 = data
  i2370.pageName = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'material')
  return i2370
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2374 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'atlasFile')
  var i2377 = i2375[2]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2374.materials = i2376
  i2374.textureLoadingMode = i2375[3]
  request.r(i2375[4], i2375[5], 0, i2374, 'onDemandTextureLoader')
  return i2374
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2379 = data
  i2378.useSafeMode = !!i2379[0]
  i2378.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2379[1], i2378.safeModeOptions)
  i2378.timeScale = i2379[2]
  i2378.unscaledTimeScale = i2379[3]
  i2378.useSmoothDeltaTime = !!i2379[4]
  i2378.maxSmoothUnscaledTime = i2379[5]
  i2378.rewindCallbackMode = i2379[6]
  i2378.showUnityEditorReport = !!i2379[7]
  i2378.logBehaviour = i2379[8]
  i2378.drawGizmos = !!i2379[9]
  i2378.defaultRecyclable = !!i2379[10]
  i2378.defaultAutoPlay = i2379[11]
  i2378.defaultUpdateType = i2379[12]
  i2378.defaultTimeScaleIndependent = !!i2379[13]
  i2378.defaultEaseType = i2379[14]
  i2378.defaultEaseOvershootOrAmplitude = i2379[15]
  i2378.defaultEasePeriod = i2379[16]
  i2378.defaultAutoKill = !!i2379[17]
  i2378.defaultLoopType = i2379[18]
  i2378.debugMode = !!i2379[19]
  i2378.debugStoreTargetId = !!i2379[20]
  i2378.showPreviewPanel = !!i2379[21]
  i2378.storeSettingsLocation = i2379[22]
  i2378.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2379[23], i2378.modules)
  i2378.createASMDEF = !!i2379[24]
  i2378.showPlayingTweens = !!i2379[25]
  i2378.showPausedTweens = !!i2379[26]
  return i2378
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2381 = data
  i2380.logBehaviour = i2381[0]
  i2380.nestedTweenFailureBehaviour = i2381[1]
  return i2380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2383 = data
  i2382.showPanel = !!i2383[0]
  i2382.audioEnabled = !!i2383[1]
  i2382.physicsEnabled = !!i2383[2]
  i2382.physics2DEnabled = !!i2383[3]
  i2382.spriteEnabled = !!i2383[4]
  i2382.uiEnabled = !!i2383[5]
  i2382.uiToolkitEnabled = !!i2383[6]
  i2382.textMeshProEnabled = !!i2383[7]
  i2382.tk2DEnabled = !!i2383[8]
  i2382.deAudioEnabled = !!i2383[9]
  i2382.deUnityExtendedEnabled = !!i2383[10]
  i2382.epoOutlineEnabled = !!i2383[11]
  return i2382
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2384 = root || request.c( 'TMPro.TMP_Settings' )
  var i2385 = data
  i2384.assetVersion = i2385[0]
  i2384.m_TextWrappingMode = i2385[1]
  i2384.m_enableKerning = !!i2385[2]
  var i2387 = i2385[3]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(i2387[i + 0]);
  }
  i2384.m_ActiveFontFeatures = i2386
  i2384.m_enableExtraPadding = !!i2385[4]
  i2384.m_enableTintAllSprites = !!i2385[5]
  i2384.m_enableParseEscapeCharacters = !!i2385[6]
  i2384.m_EnableRaycastTarget = !!i2385[7]
  i2384.m_GetFontFeaturesAtRuntime = !!i2385[8]
  i2384.m_missingGlyphCharacter = i2385[9]
  i2384.m_ClearDynamicDataOnBuild = !!i2385[10]
  i2384.m_warningsDisabled = !!i2385[11]
  request.r(i2385[12], i2385[13], 0, i2384, 'm_defaultFontAsset')
  i2384.m_defaultFontAssetPath = i2385[14]
  i2384.m_defaultFontSize = i2385[15]
  i2384.m_defaultAutoSizeMinRatio = i2385[16]
  i2384.m_defaultAutoSizeMaxRatio = i2385[17]
  i2384.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2385[18], i2385[19] )
  i2384.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2385[20], i2385[21] )
  i2384.m_autoSizeTextContainer = !!i2385[22]
  i2384.m_IsTextObjectScaleStatic = !!i2385[23]
  var i2389 = i2385[24]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.m_fallbackFontAssets = i2388
  i2384.m_matchMaterialPreset = !!i2385[25]
  i2384.m_HideSubTextObjects = !!i2385[26]
  request.r(i2385[27], i2385[28], 0, i2384, 'm_defaultSpriteAsset')
  i2384.m_defaultSpriteAssetPath = i2385[29]
  i2384.m_enableEmojiSupport = !!i2385[30]
  i2384.m_MissingCharacterSpriteUnicode = i2385[31]
  var i2391 = i2385[32]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2391.length; i += 2) {
  request.r(i2391[i + 0], i2391[i + 1], 1, i2390, '')
  }
  i2384.m_EmojiFallbackTextAssets = i2390
  i2384.m_defaultColorGradientPresetsPath = i2385[33]
  request.r(i2385[34], i2385[35], 0, i2384, 'm_defaultStyleSheet')
  i2384.m_StyleSheetsResourcePath = i2385[36]
  request.r(i2385[37], i2385[38], 0, i2384, 'm_leadingCharacters')
  request.r(i2385[39], i2385[40], 0, i2384, 'm_followingCharacters')
  i2384.m_UseModernHangulLineBreakingRules = !!i2385[41]
  return i2384
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2395 = data
  i2394.m_GlyphIndex = i2395[0]
  i2394.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2395[1], i2394.m_GlyphValueRecord)
  return i2394
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2397 = data
  i2396.m_XPlacement = i2397[0]
  i2396.m_YPlacement = i2397[1]
  i2396.m_XAdvance = i2397[2]
  i2396.m_YAdvance = i2397[3]
  return i2396
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2398 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'spriteSheet')
  var i2401 = i2399[2]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.add(request.d('TMPro.TMP_Sprite', i2401[i + 0]));
  }
  i2398.spriteInfoList = i2400
  var i2403 = i2399[3]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2398.fallbackSpriteAssets = i2402
  var i2405 = i2399[4]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('TMPro.TMP_SpriteCharacter', i2405[i + 0]));
  }
  i2398.m_SpriteCharacterTable = i2404
  var i2407 = i2399[5]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(request.d('TMPro.TMP_SpriteGlyph', i2407[i + 0]));
  }
  i2398.m_GlyphTable = i2406
  i2398.m_Version = i2399[6]
  i2398.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2399[7], i2398.m_FaceInfo)
  request.r(i2399[8], i2399[9], 0, i2398, 'm_Material')
  return i2398
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2411 = data
  i2410.name = i2411[0]
  i2410.hashCode = i2411[1]
  i2410.unicode = i2411[2]
  i2410.pivot = new pc.Vec2( i2411[3], i2411[4] )
  request.r(i2411[5], i2411[6], 0, i2410, 'sprite')
  i2410.id = i2411[7]
  i2410.x = i2411[8]
  i2410.y = i2411[9]
  i2410.width = i2411[10]
  i2410.height = i2411[11]
  i2410.xOffset = i2411[12]
  i2410.yOffset = i2411[13]
  i2410.xAdvance = i2411[14]
  i2410.scale = i2411[15]
  return i2410
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2417 = data
  i2416.m_Name = i2417[0]
  i2416.m_ElementType = i2417[1]
  i2416.m_Unicode = i2417[2]
  i2416.m_GlyphIndex = i2417[3]
  i2416.m_Scale = i2417[4]
  return i2416
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'sprite')
  i2420.m_Index = i2421[2]
  i2420.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2421[3], i2420.m_Metrics)
  i2420.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2421[4], i2420.m_GlyphRect)
  i2420.m_Scale = i2421[5]
  i2420.m_AtlasIndex = i2421[6]
  i2420.m_ClassDefinitionType = i2421[7]
  return i2420
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.TMP_Style', i2425[i + 0]));
  }
  i2422.m_StyleList = i2424
  return i2422
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.TMP_Style' )
  var i2429 = data
  i2428.m_Name = i2429[0]
  i2428.m_HashCode = i2429[1]
  i2428.m_OpeningDefinition = i2429[2]
  i2428.m_ClosingDefinition = i2429[3]
  i2428.m_OpeningTagArray = i2429[4]
  i2428.m_ClosingTagArray = i2429[5]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2433[i + 0]) );
  }
  i2430.files = i2432
  i2430.componentToPrefabIds = i2431[1]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2437 = data
  i2436.path = i2437[0]
  request.r(i2437[1], i2437[2], 0, i2436, 'unityObject')
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2439 = data
  var i2441 = i2439[0]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2441[i + 0]) );
  }
  i2438.scriptsExecutionOrder = i2440
  var i2443 = i2439[1]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2443[i + 0]) );
  }
  i2438.sortingLayers = i2442
  var i2445 = i2439[2]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2445[i + 0]) );
  }
  i2438.cullingLayers = i2444
  i2438.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2439[3], i2438.timeSettings)
  i2438.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2439[4], i2438.physicsSettings)
  i2438.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2439[5], i2438.physics2DSettings)
  i2438.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2439[6], i2438.qualitySettings)
  i2438.enableRealtimeShadows = !!i2439[7]
  i2438.enableAutoInstancing = !!i2439[8]
  i2438.enableStaticBatching = !!i2439[9]
  i2438.enableDynamicBatching = !!i2439[10]
  i2438.usePreservativeDynamicBatching = !!i2439[11]
  i2438.lightmapEncodingQuality = i2439[12]
  i2438.desiredColorSpace = i2439[13]
  var i2447 = i2439[14]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( i2447[i + 0] );
  }
  i2438.allTags = i2446
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2451 = data
  i2450.name = i2451[0]
  i2450.value = i2451[1]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2455 = data
  i2454.id = i2455[0]
  i2454.name = i2455[1]
  i2454.value = i2455[2]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2459 = data
  i2458.id = i2459[0]
  i2458.name = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2461 = data
  i2460.fixedDeltaTime = i2461[0]
  i2460.maximumDeltaTime = i2461[1]
  i2460.timeScale = i2461[2]
  i2460.maximumParticleTimestep = i2461[3]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2463 = data
  i2462.gravity = new pc.Vec3( i2463[0], i2463[1], i2463[2] )
  i2462.defaultSolverIterations = i2463[3]
  i2462.bounceThreshold = i2463[4]
  i2462.autoSyncTransforms = !!i2463[5]
  i2462.autoSimulation = !!i2463[6]
  var i2465 = i2463[7]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2465[i + 0]) );
  }
  i2462.collisionMatrix = i2464
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2469 = data
  i2468.enabled = !!i2469[0]
  i2468.layerId = i2469[1]
  i2468.otherLayerId = i2469[2]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'material')
  i2470.gravity = new pc.Vec2( i2471[2], i2471[3] )
  i2470.positionIterations = i2471[4]
  i2470.velocityIterations = i2471[5]
  i2470.velocityThreshold = i2471[6]
  i2470.maxLinearCorrection = i2471[7]
  i2470.maxAngularCorrection = i2471[8]
  i2470.maxTranslationSpeed = i2471[9]
  i2470.maxRotationSpeed = i2471[10]
  i2470.baumgarteScale = i2471[11]
  i2470.baumgarteTOIScale = i2471[12]
  i2470.timeToSleep = i2471[13]
  i2470.linearSleepTolerance = i2471[14]
  i2470.angularSleepTolerance = i2471[15]
  i2470.defaultContactOffset = i2471[16]
  i2470.autoSimulation = !!i2471[17]
  i2470.queriesHitTriggers = !!i2471[18]
  i2470.queriesStartInColliders = !!i2471[19]
  i2470.callbacksOnDisable = !!i2471[20]
  i2470.reuseCollisionCallbacks = !!i2471[21]
  i2470.autoSyncTransforms = !!i2471[22]
  var i2473 = i2471[23]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2473[i + 0]) );
  }
  i2470.collisionMatrix = i2472
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.layerId = i2477[1]
  i2476.otherLayerId = i2477[2]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2481[i + 0]) );
  }
  i2478.qualityLevels = i2480
  var i2483 = i2479[1]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2478.names = i2482
  i2478.shadows = i2479[2]
  i2478.anisotropicFiltering = i2479[3]
  i2478.antiAliasing = i2479[4]
  i2478.lodBias = i2479[5]
  i2478.shadowCascades = i2479[6]
  i2478.shadowDistance = i2479[7]
  i2478.shadowmaskMode = i2479[8]
  i2478.shadowProjection = i2479[9]
  i2478.shadowResolution = i2479[10]
  i2478.softParticles = !!i2479[11]
  i2478.softVegetation = !!i2479[12]
  i2478.activeColorSpace = i2479[13]
  i2478.desiredColorSpace = i2479[14]
  i2478.masterTextureLimit = i2479[15]
  i2478.maxQueuedFrames = i2479[16]
  i2478.particleRaycastBudget = i2479[17]
  i2478.pixelLightCount = i2479[18]
  i2478.realtimeReflectionProbes = !!i2479[19]
  i2478.shadowCascade2Split = i2479[20]
  i2478.shadowCascade4Split = new pc.Vec3( i2479[21], i2479[22], i2479[23] )
  i2478.streamingMipmapsActive = !!i2479[24]
  i2478.vSyncCount = i2479[25]
  i2478.asyncUploadBufferSize = i2479[26]
  i2478.asyncUploadTimeSlice = i2479[27]
  i2478.billboardsFaceCameraPosition = !!i2479[28]
  i2478.shadowNearPlaneOffset = i2479[29]
  i2478.streamingMipmapsMemoryBudget = i2479[30]
  i2478.maximumLODLevel = i2479[31]
  i2478.streamingMipmapsAddAllCameras = !!i2479[32]
  i2478.streamingMipmapsMaxLevelReduction = i2479[33]
  i2478.streamingMipmapsRenderersPerFrame = i2479[34]
  i2478.resolutionScalingFixedDPIFactor = i2479[35]
  i2478.streamingMipmapsMaxFileIORequests = i2479[36]
  i2478.currentQualityLevel = i2479[37]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2489 = data
  i2488.weight = i2489[0]
  i2488.vertices = i2489[1]
  i2488.normals = i2489[2]
  i2488.tangents = i2489[3]
  return i2488
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2491 = data
  i2490.m_XCoordinate = i2491[0]
  i2490.m_YCoordinate = i2491[1]
  return i2490
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2492 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2493 = data
  i2492.m_XPositionAdjustment = i2493[0]
  i2492.m_YPositionAdjustment = i2493[1]
  return i2492
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2495 = data
  i2494.xPlacement = i2495[0]
  i2494.yPlacement = i2495[1]
  i2494.xAdvance = i2495[2]
  i2494.yAdvance = i2495[3]
  return i2494
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

Deserializers.buildID = "6c2d5753-5a85-47c9-adc6-21b8be0e5276";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

