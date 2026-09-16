var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.JointSpring' )
  var i1837 = data
  i1836.spring = i1837[0]
  i1836.damper = i1837[1]
  i1836.targetPosition = i1837[2]
  return i1836
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.JointMotor' )
  var i1839 = data
  i1838.m_TargetVelocity = i1839[0]
  i1838.m_Force = i1839[1]
  i1838.m_FreeSpin = i1839[2]
  return i1838
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.JointLimits' )
  var i1841 = data
  i1840.m_Min = i1841[0]
  i1840.m_Max = i1841[1]
  i1840.m_Bounciness = i1841[2]
  i1840.m_BounceMinVelocity = i1841[3]
  i1840.m_ContactDistance = i1841[4]
  i1840.minBounce = i1841[5]
  i1840.maxBounce = i1841[6]
  return i1840
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.JointDrive' )
  var i1843 = data
  i1842.m_PositionSpring = i1843[0]
  i1842.m_PositionDamper = i1843[1]
  i1842.m_MaximumForce = i1843[2]
  i1842.m_UseAcceleration = i1843[3]
  return i1842
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1845 = data
  i1844.m_Spring = i1845[0]
  i1844.m_Damper = i1845[1]
  return i1844
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1847 = data
  i1846.m_Limit = i1847[0]
  i1846.m_Bounciness = i1847[1]
  i1846.m_ContactDistance = i1847[2]
  return i1846
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1849 = data
  i1848.m_ExtremumSlip = i1849[0]
  i1848.m_ExtremumValue = i1849[1]
  i1848.m_AsymptoteSlip = i1849[2]
  i1848.m_AsymptoteValue = i1849[3]
  i1848.m_Stiffness = i1849[4]
  return i1848
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1851 = data
  i1850.m_LowerAngle = i1851[0]
  i1850.m_UpperAngle = i1851[1]
  return i1850
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1853 = data
  i1852.m_MotorSpeed = i1853[0]
  i1852.m_MaximumMotorTorque = i1853[1]
  return i1852
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1855 = data
  i1854.m_DampingRatio = i1855[0]
  i1854.m_Frequency = i1855[1]
  i1854.m_Angle = i1855[2]
  return i1854
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1857 = data
  i1856.m_LowerTranslation = i1857[0]
  i1856.m_UpperTranslation = i1857[1]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.width = i1859[1]
  i1858.height = i1859[2]
  i1858.mipmapCount = i1859[3]
  i1858.anisoLevel = i1859[4]
  i1858.filterMode = i1859[5]
  i1858.hdr = !!i1859[6]
  i1858.format = i1859[7]
  i1858.wrapMode = i1859[8]
  i1858.alphaIsTransparency = !!i1859[9]
  i1858.alphaSource = i1859[10]
  i1858.graphicsFormat = i1859[11]
  i1858.sRGBTexture = !!i1859[12]
  i1858.desiredColorSpace = i1859[13]
  i1858.wrapU = i1859[14]
  i1858.wrapV = i1859[15]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1860 = root || new pc.UnityMaterial()
  var i1861 = data
  i1860.name = i1861[0]
  request.r(i1861[1], i1861[2], 0, i1860, 'shader')
  i1860.renderQueue = i1861[3]
  i1860.enableInstancing = !!i1861[4]
  var i1863 = i1861[5]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1863[i + 0]) );
  }
  i1860.floatParameters = i1862
  var i1865 = i1861[6]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1865[i + 0]) );
  }
  i1860.colorParameters = i1864
  var i1867 = i1861[7]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1867[i + 0]) );
  }
  i1860.vectorParameters = i1866
  var i1869 = i1861[8]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1869[i + 0]) );
  }
  i1860.textureParameters = i1868
  var i1871 = i1861[9]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1871[i + 0]) );
  }
  i1860.materialFlags = i1870
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.value = i1875[1]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1879 = data
  i1878.name = i1879[0]
  i1878.value = new pc.Color(i1879[1], i1879[2], i1879[3], i1879[4])
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1883 = data
  i1882.name = i1883[0]
  i1882.value = new pc.Vec4( i1883[1], i1883[2], i1883[3], i1883[4] )
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1887 = data
  i1886.name = i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'value')
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.enabled = !!i1891[1]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.halfPrecision = !!i1893[1]
  i1892.useSimplification = !!i1893[2]
  i1892.useUInt32IndexFormat = !!i1893[3]
  i1892.vertexCount = i1893[4]
  i1892.aabb = i1893[5]
  var i1895 = i1893[6]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( !!i1895[i + 0] );
  }
  i1892.streams = i1894
  i1892.vertices = i1893[7]
  var i1897 = i1893[8]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1897[i + 0]) );
  }
  i1892.subMeshes = i1896
  var i1899 = i1893[9]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 16) {
    i1898.push( new pc.Mat4().setData(i1899[i + 0], i1899[i + 1], i1899[i + 2], i1899[i + 3],  i1899[i + 4], i1899[i + 5], i1899[i + 6], i1899[i + 7],  i1899[i + 8], i1899[i + 9], i1899[i + 10], i1899[i + 11],  i1899[i + 12], i1899[i + 13], i1899[i + 14], i1899[i + 15]) );
  }
  i1892.bindposes = i1898
  var i1901 = i1893[10]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1901[i + 0]) );
  }
  i1892.blendShapes = i1900
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1907 = data
  i1906.triangles = i1907[0]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1913 = data
  i1912.name = i1913[0]
  var i1915 = i1913[1]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1915[i + 0]) );
  }
  i1912.frames = i1914
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1917 = data
  i1916.name = i1917[0]
  i1916.index = i1917[1]
  i1916.startup = !!i1917[2]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1919 = data
  i1918.aspect = i1919[0]
  i1918.orthographic = !!i1919[1]
  i1918.orthographicSize = i1919[2]
  i1918.backgroundColor = new pc.Color(i1919[3], i1919[4], i1919[5], i1919[6])
  i1918.nearClipPlane = i1919[7]
  i1918.farClipPlane = i1919[8]
  i1918.fieldOfView = i1919[9]
  i1918.depth = i1919[10]
  i1918.clearFlags = i1919[11]
  i1918.cullingMask = i1919[12]
  i1918.rect = i1919[13]
  request.r(i1919[14], i1919[15], 0, i1918, 'targetTexture')
  i1918.usePhysicalProperties = !!i1919[16]
  i1918.focalLength = i1919[17]
  i1918.sensorSize = new pc.Vec2( i1919[18], i1919[19] )
  i1918.lensShift = new pc.Vec2( i1919[20], i1919[21] )
  i1918.gateFit = i1919[22]
  i1918.commandBufferCount = i1919[23]
  i1918.cameraType = i1919[24]
  i1918.enabled = !!i1919[25]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.tagId = i1921[1]
  i1920.enabled = !!i1921[2]
  i1920.isStatic = !!i1921[3]
  i1920.layer = i1921[4]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1923 = data
  i1922.pivot = new pc.Vec2( i1923[0], i1923[1] )
  i1922.anchorMin = new pc.Vec2( i1923[2], i1923[3] )
  i1922.anchorMax = new pc.Vec2( i1923[4], i1923[5] )
  i1922.sizeDelta = new pc.Vec2( i1923[6], i1923[7] )
  i1922.anchoredPosition3D = new pc.Vec3( i1923[8], i1923[9], i1923[10] )
  i1922.rotation = new pc.Quat(i1923[11], i1923[12], i1923[13], i1923[14])
  i1922.scale = new pc.Vec3( i1923[15], i1923[16], i1923[17] )
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1925 = data
  i1924.planeDistance = i1925[0]
  i1924.referencePixelsPerUnit = i1925[1]
  i1924.isFallbackOverlay = !!i1925[2]
  i1924.renderMode = i1925[3]
  i1924.renderOrder = i1925[4]
  i1924.sortingLayerName = i1925[5]
  i1924.sortingOrder = i1925[6]
  i1924.scaleFactor = i1925[7]
  request.r(i1925[8], i1925[9], 0, i1924, 'worldCamera')
  i1924.overrideSorting = !!i1925[10]
  i1924.pixelPerfect = !!i1925[11]
  i1924.targetDisplay = i1925[12]
  i1924.overridePixelPerfect = !!i1925[13]
  i1924.enabled = !!i1925[14]
  return i1924
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1927 = data
  i1926.m_UiScaleMode = i1927[0]
  i1926.m_ReferencePixelsPerUnit = i1927[1]
  i1926.m_ScaleFactor = i1927[2]
  i1926.m_ReferenceResolution = new pc.Vec2( i1927[3], i1927[4] )
  i1926.m_ScreenMatchMode = i1927[5]
  i1926.m_MatchWidthOrHeight = i1927[6]
  i1926.m_PhysicalUnit = i1927[7]
  i1926.m_FallbackScreenDPI = i1927[8]
  i1926.m_DefaultSpriteDPI = i1927[9]
  i1926.m_DynamicPixelsPerUnit = i1927[10]
  i1926.m_PresetInfoIsWorld = !!i1927[11]
  return i1926
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1929 = data
  i1928.m_IgnoreReversedGraphics = !!i1929[0]
  i1928.m_BlockingObjects = i1929[1]
  i1928.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1929[2] )
  return i1928
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1930 = root || request.c( 'Playable.GameManager' )
  var i1931 = data
  i1930.EventCountdownEndGame = request.d('System.Action', i1931[0], i1930.EventCountdownEndGame)
  i1930._totalEvent = i1931[1]
  i1930._maxEvent = i1931[2]
  i1930._endTime = i1931[3]
  request.r(i1931[4], i1931[5], 0, i1930, '_backgroundMusic')
  request.r(i1931[6], i1931[7], 0, i1930, '_backgroundTexture')
  request.r(i1931[8], i1931[9], 0, i1930, '_btnBlock')
  request.r(i1931[10], i1931[11], 0, i1930, '_background')
  request.r(i1931[12], i1931[13], 0, i1930, '_losePanel')
  request.r(i1931[14], i1931[15], 0, i1930, '_winPanel')
  var i1933 = i1931[16]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1933.length; i += 2) {
  request.r(i1933[i + 0], i1933[i + 1], 1, i1932, '')
  }
  i1930._vfxWin = i1932
  request.r(i1931[17], i1931[18], 0, i1930, '_progressFillImage')
  request.r(i1931[19], i1931[20], 0, i1930, '_progressText')
  i1930._progressTweenDuration = i1931[21]
  request.r(i1931[22], i1931[23], 0, i1930, '_timerFillImage')
  request.r(i1931[24], i1931[25], 0, i1930, '_timerText')
  i1930._timerPunchScale = i1931[26]
  return i1930
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1934 = root || request.c( 'System.Action' )
  var i1935 = data
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1939 = data
  i1938.cullTransparentMesh = !!i1939[0]
  return i1938
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.UI.Image' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Sprite')
  i1940.m_Type = i1941[2]
  i1940.m_PreserveAspect = !!i1941[3]
  i1940.m_FillCenter = !!i1941[4]
  i1940.m_FillMethod = i1941[5]
  i1940.m_FillAmount = i1941[6]
  i1940.m_FillClockwise = !!i1941[7]
  i1940.m_FillOrigin = i1941[8]
  i1940.m_UseSpriteMesh = !!i1941[9]
  i1940.m_PixelsPerUnitMultiplier = i1941[10]
  request.r(i1941[11], i1941[12], 0, i1940, 'm_Material')
  i1940.m_Maskable = !!i1941[13]
  i1940.m_Color = new pc.Color(i1941[14], i1941[15], i1941[16], i1941[17])
  i1940.m_RaycastTarget = !!i1941[18]
  i1940.m_RaycastPadding = new pc.Vec4( i1941[19], i1941[20], i1941[21], i1941[22] )
  return i1940
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_Texture')
  i1942.m_UVRect = UnityEngine.Rect.MinMaxRect(i1943[2], i1943[3], i1943[4], i1943[5])
  request.r(i1943[6], i1943[7], 0, i1942, 'm_Material')
  i1942.m_Maskable = !!i1943[8]
  i1942.m_Color = new pc.Color(i1943[9], i1943[10], i1943[11], i1943[12])
  i1942.m_RaycastTarget = !!i1943[13]
  i1942.m_RaycastPadding = new pc.Vec4( i1943[14], i1943[15], i1943[16], i1943[17] )
  return i1942
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1945 = data
  i1944.m_hasFontAssetChanged = !!i1945[0]
  request.r(i1945[1], i1945[2], 0, i1944, 'm_baseMaterial')
  i1944.m_maskOffset = new pc.Vec4( i1945[3], i1945[4], i1945[5], i1945[6] )
  i1944.m_text = i1945[7]
  i1944.m_isRightToLeft = !!i1945[8]
  request.r(i1945[9], i1945[10], 0, i1944, 'm_fontAsset')
  request.r(i1945[11], i1945[12], 0, i1944, 'm_sharedMaterial')
  var i1947 = i1945[13]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 2, i1946, '')
  }
  i1944.m_fontSharedMaterials = i1946
  request.r(i1945[14], i1945[15], 0, i1944, 'm_fontMaterial')
  var i1949 = i1945[16]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 2, i1948, '')
  }
  i1944.m_fontMaterials = i1948
  i1944.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1945[17], i1945[18], i1945[19], i1945[20])
  i1944.m_fontColor = new pc.Color(i1945[21], i1945[22], i1945[23], i1945[24])
  i1944.m_enableVertexGradient = !!i1945[25]
  i1944.m_colorMode = i1945[26]
  i1944.m_fontColorGradient = request.d('TMPro.VertexGradient', i1945[27], i1944.m_fontColorGradient)
  request.r(i1945[28], i1945[29], 0, i1944, 'm_fontColorGradientPreset')
  request.r(i1945[30], i1945[31], 0, i1944, 'm_spriteAsset')
  i1944.m_tintAllSprites = !!i1945[32]
  request.r(i1945[33], i1945[34], 0, i1944, 'm_StyleSheet')
  i1944.m_TextStyleHashCode = i1945[35]
  i1944.m_overrideHtmlColors = !!i1945[36]
  i1944.m_faceColor = UnityEngine.Color32.ConstructColor(i1945[37], i1945[38], i1945[39], i1945[40])
  i1944.m_fontSize = i1945[41]
  i1944.m_fontSizeBase = i1945[42]
  i1944.m_fontWeight = i1945[43]
  i1944.m_enableAutoSizing = !!i1945[44]
  i1944.m_fontSizeMin = i1945[45]
  i1944.m_fontSizeMax = i1945[46]
  i1944.m_fontStyle = i1945[47]
  i1944.m_HorizontalAlignment = i1945[48]
  i1944.m_VerticalAlignment = i1945[49]
  i1944.m_textAlignment = i1945[50]
  i1944.m_characterSpacing = i1945[51]
  i1944.m_wordSpacing = i1945[52]
  i1944.m_lineSpacing = i1945[53]
  i1944.m_lineSpacingMax = i1945[54]
  i1944.m_paragraphSpacing = i1945[55]
  i1944.m_charWidthMaxAdj = i1945[56]
  i1944.m_TextWrappingMode = i1945[57]
  i1944.m_wordWrappingRatios = i1945[58]
  i1944.m_overflowMode = i1945[59]
  request.r(i1945[60], i1945[61], 0, i1944, 'm_linkedTextComponent')
  request.r(i1945[62], i1945[63], 0, i1944, 'parentLinkedComponent')
  i1944.m_enableKerning = !!i1945[64]
  var i1951 = i1945[65]
  var i1950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.add(i1951[i + 0]);
  }
  i1944.m_ActiveFontFeatures = i1950
  i1944.m_enableExtraPadding = !!i1945[66]
  i1944.checkPaddingRequired = !!i1945[67]
  i1944.m_isRichText = !!i1945[68]
  i1944.m_parseCtrlCharacters = !!i1945[69]
  i1944.m_isOrthographic = !!i1945[70]
  i1944.m_isCullingEnabled = !!i1945[71]
  i1944.m_horizontalMapping = i1945[72]
  i1944.m_verticalMapping = i1945[73]
  i1944.m_uvLineOffset = i1945[74]
  i1944.m_geometrySortingOrder = i1945[75]
  i1944.m_IsTextObjectScaleStatic = !!i1945[76]
  i1944.m_VertexBufferAutoSizeReduction = !!i1945[77]
  i1944.m_useMaxVisibleDescender = !!i1945[78]
  i1944.m_pageToDisplay = i1945[79]
  i1944.m_margin = new pc.Vec4( i1945[80], i1945[81], i1945[82], i1945[83] )
  i1944.m_isUsingLegacyAnimationComponent = !!i1945[84]
  i1944.m_isVolumetricText = !!i1945[85]
  request.r(i1945[86], i1945[87], 0, i1944, 'm_Material')
  i1944.m_EmojiFallbackSupport = !!i1945[88]
  i1944.m_Maskable = !!i1945[89]
  i1944.m_Color = new pc.Color(i1945[90], i1945[91], i1945[92], i1945[93])
  i1944.m_RaycastTarget = !!i1945[94]
  i1944.m_RaycastPadding = new pc.Vec4( i1945[95], i1945[96], i1945[97], i1945[98] )
  return i1944
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.VertexGradient' )
  var i1955 = data
  i1954.topLeft = new pc.Color(i1955[0], i1955[1], i1955[2], i1955[3])
  i1954.topRight = new pc.Color(i1955[4], i1955[5], i1955[6], i1955[7])
  i1954.bottomLeft = new pc.Color(i1955[8], i1955[9], i1955[10], i1955[11])
  i1954.bottomRight = new pc.Color(i1955[12], i1955[13], i1955[14], i1955[15])
  return i1954
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.UI.Button' )
  var i1959 = data
  i1958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1959[0], i1958.m_OnClick)
  i1958.m_Navigation = request.d('UnityEngine.UI.Navigation', i1959[1], i1958.m_Navigation)
  i1958.m_Transition = i1959[2]
  i1958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1959[3], i1958.m_Colors)
  i1958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1959[4], i1958.m_SpriteState)
  i1958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1959[5], i1958.m_AnimationTriggers)
  i1958.m_Interactable = !!i1959[6]
  request.r(i1959[7], i1959[8], 0, i1958, 'm_TargetGraphic')
  return i1958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1961 = data
  i1960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1961[0], i1960.m_PersistentCalls)
  return i1960
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1963 = data
  var i1965 = i1963[0]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.add(request.d('UnityEngine.Events.PersistentCall', i1965[i + 0]));
  }
  i1962.m_Calls = i1964
  return i1962
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'm_Target')
  i1968.m_TargetAssemblyTypeName = i1969[2]
  i1968.m_MethodName = i1969[3]
  i1968.m_Mode = i1969[4]
  i1968.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1969[5], i1968.m_Arguments)
  i1968.m_CallState = i1969[6]
  return i1968
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'm_ObjectArgument')
  i1970.m_ObjectArgumentAssemblyTypeName = i1971[2]
  i1970.m_IntArgument = i1971[3]
  i1970.m_FloatArgument = i1971[4]
  i1970.m_StringArgument = i1971[5]
  i1970.m_BoolArgument = !!i1971[6]
  return i1970
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1973 = data
  i1972.m_Mode = i1973[0]
  i1972.m_WrapAround = !!i1973[1]
  request.r(i1973[2], i1973[3], 0, i1972, 'm_SelectOnUp')
  request.r(i1973[4], i1973[5], 0, i1972, 'm_SelectOnDown')
  request.r(i1973[6], i1973[7], 0, i1972, 'm_SelectOnLeft')
  request.r(i1973[8], i1973[9], 0, i1972, 'm_SelectOnRight')
  return i1972
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1975 = data
  i1974.m_NormalColor = new pc.Color(i1975[0], i1975[1], i1975[2], i1975[3])
  i1974.m_HighlightedColor = new pc.Color(i1975[4], i1975[5], i1975[6], i1975[7])
  i1974.m_PressedColor = new pc.Color(i1975[8], i1975[9], i1975[10], i1975[11])
  i1974.m_SelectedColor = new pc.Color(i1975[12], i1975[13], i1975[14], i1975[15])
  i1974.m_DisabledColor = new pc.Color(i1975[16], i1975[17], i1975[18], i1975[19])
  i1974.m_ColorMultiplier = i1975[20]
  i1974.m_FadeDuration = i1975[21]
  return i1974
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'm_HighlightedSprite')
  request.r(i1977[2], i1977[3], 0, i1976, 'm_PressedSprite')
  request.r(i1977[4], i1977[5], 0, i1976, 'm_SelectedSprite')
  request.r(i1977[6], i1977[7], 0, i1976, 'm_DisabledSprite')
  return i1976
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1979 = data
  i1978.m_NormalTrigger = i1979[0]
  i1978.m_HighlightedTrigger = i1979[1]
  i1978.m_PressedTrigger = i1979[2]
  i1978.m_SelectedTrigger = i1979[3]
  i1978.m_DisabledTrigger = i1979[4]
  return i1978
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1981 = data
  i1980.m_ShowMaskGraphic = !!i1981[0]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'clip')
  request.r(i1983[2], i1983[3], 0, i1982, 'outputAudioMixerGroup')
  i1982.playOnAwake = !!i1983[4]
  i1982.loop = !!i1983[5]
  i1982.time = i1983[6]
  i1982.volume = i1983[7]
  i1982.pitch = i1983[8]
  i1982.enabled = !!i1983[9]
  return i1982
}

Deserializers["GameController"] = function (request, data, root) {
  var i1984 = root || request.c( 'GameController' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, '_tutorialHand')
  request.r(i1985[2], i1985[3], 0, i1984, '_tutorialFrom')
  request.r(i1985[4], i1985[5], 0, i1984, '_tutorialTo')
  i1984._tutorialScaleDuration = i1985[6]
  i1984._tutorialMoveDuration = i1985[7]
  i1984._tutorialStartDelay = i1985[8]
  var i1987 = i1985[9]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('Target')))
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 1, i1986, '')
  }
  i1984._targets = i1986
  return i1984
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1990 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'skeletonDataAsset')
  request.r(i1991[2], i1991[3], 0, i1990, 'additiveMaterial')
  request.r(i1991[4], i1991[5], 0, i1990, 'multiplyMaterial')
  request.r(i1991[6], i1991[7], 0, i1990, 'screenMaterial')
  i1990.forceAdditiveMaterial = !!i1991[8]
  i1990.initialSkinName = i1991[9]
  i1990.initialFlipX = !!i1991[10]
  i1990.initialFlipY = !!i1991[11]
  i1990.startingAnimation = i1991[12]
  i1990.startingLoop = !!i1991[13]
  i1990.timeScale = i1991[14]
  i1990.freeze = !!i1991[15]
  i1990.layoutScaleMode = i1991[16]
  i1990.updateWhenInvisible = i1991[17]
  i1990.allowMultipleCanvasRenderers = !!i1991[18]
  var i1993 = i1991[19]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 1, i1992, '')
  }
  i1990.canvasRenderers = i1992
  i1990.enableSeparatorSlots = !!i1991[20]
  i1990.updateSeparatorPartLocation = !!i1991[21]
  i1990.updateSeparatorPartScale = !!i1991[22]
  i1990.disableMeshAssignmentOnOverride = !!i1991[23]
  i1990.m_SkeletonColor = new pc.Color(i1991[24], i1991[25], i1991[26], i1991[27])
  i1990.referenceSize = new pc.Vec2( i1991[28], i1991[29] )
  i1990.pivotOffset = new pc.Vec2( i1991[30], i1991[31] )
  i1990.referenceScale = i1991[32]
  i1990.layoutScale = i1991[33]
  i1990.rectTransformSize = new pc.Vec2( i1991[34], i1991[35] )
  i1990.editReferenceRect = !!i1991[36]
  var i1995 = i1991[37]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( i1995[i + 0] );
  }
  i1990.separatorSlotNames = i1994
  var i1997 = i1991[38]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 1, i1996, '')
  }
  i1990.separatorParts = i1996
  i1990.physicsPositionInheritanceFactor = new pc.Vec2( i1991[39], i1991[40] )
  i1990.physicsRotationInheritanceFactor = i1991[41]
  request.r(i1991[42], i1991[43], 0, i1990, 'physicsMovementRelativeTo')
  i1990.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1991[44], i1990.meshGenerator)
  i1990.updateTiming = i1991[45]
  i1990.unscaledTime = !!i1991[46]
  request.r(i1991[47], i1991[48], 0, i1990, 'm_Material')
  i1990.m_Maskable = !!i1991[49]
  i1990.m_Color = new pc.Color(i1991[50], i1991[51], i1991[52], i1991[53])
  i1990.m_RaycastTarget = !!i1991[54]
  i1990.m_RaycastPadding = new pc.Vec4( i1991[55], i1991[56], i1991[57], i1991[58] )
  return i1990
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2004 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2005 = data
  i2004.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2005[0], i2004.settings)
  return i2004
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2006 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2007 = data
  i2006.useClipping = !!i2007[0]
  i2006.zSpacing = i2007[1]
  i2006.tintBlack = !!i2007[2]
  i2006.canvasGroupCompatible = !!i2007[3]
  i2006.pmaVertexColors = !!i2007[4]
  i2006.addNormals = !!i2007[5]
  i2006.calculateTangents = !!i2007[6]
  i2006.immutableTriangles = !!i2007[7]
  return i2006
}

Deserializers["Playable.Window"] = function (request, data, root) {
  var i2008 = root || request.c( 'Playable.Window' )
  var i2009 = data
  i2008._animWindow = i2009[0]
  i2008._animGhost = i2009[1]
  request.r(i2009[2], i2009[3], 0, i2008, '_skeletonWindow')
  request.r(i2009[4], i2009[5], 0, i2008, '_skeletonGhost')
  return i2008
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i2010 = root || request.c( 'SpineEventSoundPlayer' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'skeletonAnimation')
  request.r(i2011[2], i2011[3], 0, i2010, 'skeletonGraphic')
  request.r(i2011[4], i2011[5], 0, i2010, 'audioSource')
  var i2013 = i2011[6]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 1, i2012, '')
  }
  i2010.audioClips = i2012
  return i2010
}

Deserializers["Girl"] = function (request, data, root) {
  var i2016 = root || request.c( 'Girl' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, '_skeletonGraphic')
  i2016._defaultAnimation = request.d('SpineAnimationData', i2017[2], i2016._defaultAnimation)
  return i2016
}

Deserializers["SpineAnimationData"] = function (request, data, root) {
  var i2018 = root || request.c( 'SpineAnimationData' )
  var i2019 = data
  i2018.animationName = i2019[0]
  i2018.loop = !!i2019[1]
  return i2018
}

Deserializers["Target"] = function (request, data, root) {
  var i2020 = root || request.c( 'Target' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, '_skeletonGraphic')
  request.r(i2021[2], i2021[3], 0, i2020, '_dropArea')
  var i2023 = i2021[4]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('Target+TargetReaction')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('Target+TargetReaction', i2023[i + 0]));
  }
  i2020._reactions = i2022
  return i2020
}

Deserializers["Target+TargetReaction"] = function (request, data, root) {
  var i2026 = root || request.c( 'Target+TargetReaction' )
  var i2027 = data
  i2026.itemType = i2027[0]
  var i2029 = i2027[1]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('SpineAnimationData', i2029[i + 0]));
  }
  i2026.animations = i2028
  return i2026
}

Deserializers["Item"] = function (request, data, root) {
  var i2032 = root || request.c( 'Item' )
  var i2033 = data
  i2032._itemType = i2033[0]
  request.r(i2033[1], i2033[2], 0, i2032, '_normalVisual')
  request.r(i2033[3], i2033[4], 0, i2032, '_activeVisual')
  request.r(i2033[5], i2033[6], 0, i2032, '_girl')
  request.r(i2033[7], i2033[8], 0, i2032, '_skeletonGraphic')
  var i2035 = i2033[9]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('SpineAnimationData')))
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.add(request.d('SpineAnimationData', i2035[i + 0]));
  }
  i2032._girlAnimations = i2034
  i2032._girlSkinName = i2033[10]
  i2032._dropDetectionPadding = i2033[11]
  request.r(i2033[12], i2033[13], 0, i2032, '_dropSound')
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2037 = data
  i2036.m_Alpha = i2037[0]
  i2036.m_Interactable = !!i2037[1]
  i2036.m_BlocksRaycasts = !!i2037[2]
  i2036.m_IgnoreParentGroups = !!i2037[3]
  i2036.enabled = !!i2037[4]
  return i2036
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2039 = data
  i2038.m_Spacing = i2039[0]
  i2038.m_ChildForceExpandWidth = !!i2039[1]
  i2038.m_ChildForceExpandHeight = !!i2039[2]
  i2038.m_ChildControlWidth = !!i2039[3]
  i2038.m_ChildControlHeight = !!i2039[4]
  i2038.m_ChildScaleWidth = !!i2039[5]
  i2038.m_ChildScaleHeight = !!i2039[6]
  i2038.m_ReverseArrangement = !!i2039[7]
  i2038.m_Padding = UnityEngine.RectOffset.FromPaddings(i2039[8], i2039[9], i2039[10], i2039[11])
  i2038.m_ChildAlignment = i2039[12]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2041 = data
  i2040.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2041[0], i2040.main)
  i2040.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2041[1], i2040.colorBySpeed)
  i2040.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2041[2], i2040.colorOverLifetime)
  i2040.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2041[3], i2040.emission)
  i2040.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2041[4], i2040.rotationBySpeed)
  i2040.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2041[5], i2040.rotationOverLifetime)
  i2040.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2041[6], i2040.shape)
  i2040.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2041[7], i2040.sizeBySpeed)
  i2040.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2041[8], i2040.sizeOverLifetime)
  i2040.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2041[9], i2040.textureSheetAnimation)
  i2040.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2041[10], i2040.velocityOverLifetime)
  i2040.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2041[11], i2040.noise)
  i2040.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2041[12], i2040.inheritVelocity)
  i2040.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2041[13], i2040.forceOverLifetime)
  i2040.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2041[14], i2040.limitVelocityOverLifetime)
  i2040.useAutoRandomSeed = !!i2041[15]
  i2040.randomSeed = i2041[16]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2042 = root || new pc.ParticleSystemMain()
  var i2043 = data
  i2042.duration = i2043[0]
  i2042.loop = !!i2043[1]
  i2042.prewarm = !!i2043[2]
  i2042.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[3], i2042.startDelay)
  i2042.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[4], i2042.startLifetime)
  i2042.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[5], i2042.startSpeed)
  i2042.startSize3D = !!i2043[6]
  i2042.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[7], i2042.startSizeX)
  i2042.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[8], i2042.startSizeY)
  i2042.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[9], i2042.startSizeZ)
  i2042.startRotation3D = !!i2043[10]
  i2042.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[11], i2042.startRotationX)
  i2042.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[12], i2042.startRotationY)
  i2042.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[13], i2042.startRotationZ)
  i2042.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2043[14], i2042.startColor)
  i2042.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2043[15], i2042.gravityModifier)
  i2042.simulationSpace = i2043[16]
  request.r(i2043[17], i2043[18], 0, i2042, 'customSimulationSpace')
  i2042.simulationSpeed = i2043[19]
  i2042.useUnscaledTime = !!i2043[20]
  i2042.scalingMode = i2043[21]
  i2042.playOnAwake = !!i2043[22]
  i2042.maxParticles = i2043[23]
  i2042.emitterVelocityMode = i2043[24]
  i2042.stopAction = i2043[25]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2044 = root || new pc.MinMaxCurve()
  var i2045 = data
  i2044.mode = i2045[0]
  i2044.curveMin = new pc.AnimationCurve( { keys_flow: i2045[1] } )
  i2044.curveMax = new pc.AnimationCurve( { keys_flow: i2045[2] } )
  i2044.curveMultiplier = i2045[3]
  i2044.constantMin = i2045[4]
  i2044.constantMax = i2045[5]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2046 = root || new pc.MinMaxGradient()
  var i2047 = data
  i2046.mode = i2047[0]
  i2046.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2047[1], i2046.gradientMin)
  i2046.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2047[2], i2046.gradientMax)
  i2046.colorMin = new pc.Color(i2047[3], i2047[4], i2047[5], i2047[6])
  i2046.colorMax = new pc.Color(i2047[7], i2047[8], i2047[9], i2047[10])
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2049 = data
  i2048.mode = i2049[0]
  var i2051 = i2049[1]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2051[i + 0]) );
  }
  i2048.colorKeys = i2050
  var i2053 = i2049[2]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2053[i + 0]) );
  }
  i2048.alphaKeys = i2052
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2054 = root || new pc.ParticleSystemColorBySpeed()
  var i2055 = data
  i2054.enabled = !!i2055[0]
  i2054.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2055[1], i2054.color)
  i2054.range = new pc.Vec2( i2055[2], i2055[3] )
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2059 = data
  i2058.color = new pc.Color(i2059[0], i2059[1], i2059[2], i2059[3])
  i2058.time = i2059[4]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2063 = data
  i2062.alpha = i2063[0]
  i2062.time = i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemColorOverLifetime()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2065[1], i2064.color)
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemEmitter()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[1], i2066.rateOverTime)
  i2066.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[2], i2066.rateOverDistance)
  var i2069 = i2067[3]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2069[i + 0]) );
  }
  i2066.bursts = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemBurst()
  var i2073 = data
  i2072.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[0], i2072.count)
  i2072.cycleCount = i2073[1]
  i2072.minCount = i2073[2]
  i2072.maxCount = i2073[3]
  i2072.repeatInterval = i2073[4]
  i2072.time = i2073[5]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemRotationBySpeed()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[1], i2074.x)
  i2074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.y)
  i2074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[3], i2074.z)
  i2074.separateAxes = !!i2075[4]
  i2074.range = new pc.Vec2( i2075[5], i2075[6] )
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[1], i2076.x)
  i2076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.y)
  i2076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.z)
  i2076.separateAxes = !!i2077[4]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemShape()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.shapeType = i2079[1]
  i2078.randomDirectionAmount = i2079[2]
  i2078.sphericalDirectionAmount = i2079[3]
  i2078.randomPositionAmount = i2079[4]
  i2078.alignToDirection = !!i2079[5]
  i2078.radius = i2079[6]
  i2078.radiusMode = i2079[7]
  i2078.radiusSpread = i2079[8]
  i2078.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[9], i2078.radiusSpeed)
  i2078.radiusThickness = i2079[10]
  i2078.angle = i2079[11]
  i2078.length = i2079[12]
  i2078.boxThickness = new pc.Vec3( i2079[13], i2079[14], i2079[15] )
  i2078.meshShapeType = i2079[16]
  request.r(i2079[17], i2079[18], 0, i2078, 'mesh')
  request.r(i2079[19], i2079[20], 0, i2078, 'meshRenderer')
  request.r(i2079[21], i2079[22], 0, i2078, 'skinnedMeshRenderer')
  i2078.useMeshMaterialIndex = !!i2079[23]
  i2078.meshMaterialIndex = i2079[24]
  i2078.useMeshColors = !!i2079[25]
  i2078.normalOffset = i2079[26]
  i2078.arc = i2079[27]
  i2078.arcMode = i2079[28]
  i2078.arcSpread = i2079[29]
  i2078.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[30], i2078.arcSpeed)
  i2078.donutRadius = i2079[31]
  i2078.position = new pc.Vec3( i2079[32], i2079[33], i2079[34] )
  i2078.rotation = new pc.Vec3( i2079[35], i2079[36], i2079[37] )
  i2078.scale = new pc.Vec3( i2079[38], i2079[39], i2079[40] )
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemSizeBySpeed()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.x)
  i2080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.y)
  i2080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[3], i2080.z)
  i2080.separateAxes = !!i2081[4]
  i2080.range = new pc.Vec2( i2081[5], i2081[6] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.separateAxes = !!i2083[4]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.mode = i2085[1]
  i2084.animation = i2085[2]
  i2084.numTilesX = i2085[3]
  i2084.numTilesY = i2085[4]
  i2084.useRandomRow = !!i2085[5]
  i2084.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[6], i2084.frameOverTime)
  i2084.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[7], i2084.startFrame)
  i2084.cycleCount = i2085[8]
  i2084.rowIndex = i2085[9]
  i2084.flipU = i2085[10]
  i2084.flipV = i2085[11]
  i2084.spriteCount = i2085[12]
  var i2087 = i2085[13]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.sprites = i2086
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[1], i2090.x)
  i2090.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.y)
  i2090.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.z)
  i2090.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[4], i2090.radial)
  i2090.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[5], i2090.speedModifier)
  i2090.space = i2091[6]
  i2090.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[7], i2090.orbitalX)
  i2090.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[8], i2090.orbitalY)
  i2090.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[9], i2090.orbitalZ)
  i2090.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[10], i2090.orbitalOffsetX)
  i2090.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[11], i2090.orbitalOffsetY)
  i2090.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[12], i2090.orbitalOffsetZ)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemNoise()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.separateAxes = !!i2093[1]
  i2092.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.strengthX)
  i2092.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[3], i2092.strengthY)
  i2092.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[4], i2092.strengthZ)
  i2092.frequency = i2093[5]
  i2092.damping = !!i2093[6]
  i2092.octaveCount = i2093[7]
  i2092.octaveMultiplier = i2093[8]
  i2092.octaveScale = i2093[9]
  i2092.quality = i2093[10]
  i2092.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[11], i2092.scrollSpeed)
  i2092.scrollSpeedMultiplier = i2093[12]
  i2092.remapEnabled = !!i2093[13]
  i2092.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[14], i2092.remapX)
  i2092.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[15], i2092.remapY)
  i2092.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[16], i2092.remapZ)
  i2092.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[17], i2092.positionAmount)
  i2092.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[18], i2092.rotationAmount)
  i2092.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[19], i2092.sizeAmount)
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemInheritVelocity()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.mode = i2095[1]
  i2094.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[2], i2094.curve)
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemForceOverLifetime()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.x)
  i2096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.y)
  i2096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.z)
  i2096.space = i2097[4]
  i2096.randomized = !!i2097[5]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[1], i2098.limit)
  i2098.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[2], i2098.limitX)
  i2098.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[3], i2098.limitY)
  i2098.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[4], i2098.limitZ)
  i2098.dampen = i2099[5]
  i2098.separateAxes = !!i2099[6]
  i2098.space = i2099[7]
  i2098.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[8], i2098.drag)
  i2098.multiplyDragByParticleSize = !!i2099[9]
  i2098.multiplyDragByParticleVelocity = !!i2099[10]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'mesh')
  i2100.meshCount = i2101[2]
  i2100.activeVertexStreamsCount = i2101[3]
  i2100.alignment = i2101[4]
  i2100.renderMode = i2101[5]
  i2100.sortMode = i2101[6]
  i2100.lengthScale = i2101[7]
  i2100.velocityScale = i2101[8]
  i2100.cameraVelocityScale = i2101[9]
  i2100.normalDirection = i2101[10]
  i2100.sortingFudge = i2101[11]
  i2100.minParticleSize = i2101[12]
  i2100.maxParticleSize = i2101[13]
  i2100.pivot = new pc.Vec3( i2101[14], i2101[15], i2101[16] )
  request.r(i2101[17], i2101[18], 0, i2100, 'trailMaterial')
  i2100.applyActiveColorSpace = !!i2101[19]
  i2100.enabled = !!i2101[20]
  request.r(i2101[21], i2101[22], 0, i2100, 'sharedMaterial')
  var i2103 = i2101[23]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.sharedMaterials = i2102
  i2100.receiveShadows = !!i2101[24]
  i2100.shadowCastingMode = i2101[25]
  i2100.sortingLayerID = i2101[26]
  i2100.sortingOrder = i2101[27]
  i2100.lightmapIndex = i2101[28]
  i2100.lightmapSceneIndex = i2101[29]
  i2100.lightmapScaleOffset = new pc.Vec4( i2101[30], i2101[31], i2101[32], i2101[33] )
  i2100.lightProbeUsage = i2101[34]
  i2100.reflectionProbeUsage = i2101[35]
  return i2100
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i2104 = root || request.c( 'Playable.AudioManager' )
  var i2105 = data
  var i2107 = i2105[0]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('Playable.SoundData', i2107[i + 0]));
  }
  i2104._sounds = i2106
  request.r(i2105[1], i2105[2], 0, i2104, '_audioMusic')
  request.r(i2105[3], i2105[4], 0, i2104, '_audioSound')
  return i2104
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i2110 = root || request.c( 'Playable.SoundData' )
  var i2111 = data
  i2110.Type = i2111[0]
  request.r(i2111[1], i2111[2], 0, i2110, 'Clip')
  return i2110
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'm_FirstSelected')
  i2112.m_sendNavigationEvents = !!i2113[2]
  i2112.m_DragThreshold = i2113[3]
  return i2112
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2115 = data
  i2114.m_HorizontalAxis = i2115[0]
  i2114.m_VerticalAxis = i2115[1]
  i2114.m_SubmitButton = i2115[2]
  i2114.m_CancelButton = i2115[3]
  i2114.m_InputActionsPerSecond = i2115[4]
  i2114.m_RepeatDelay = i2115[5]
  i2114.m_ForceModuleActive = !!i2115[6]
  i2114.m_SendPointerHoverToParent = !!i2115[7]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2117 = data
  i2116.ambientIntensity = i2117[0]
  i2116.reflectionIntensity = i2117[1]
  i2116.ambientMode = i2117[2]
  i2116.ambientLight = new pc.Color(i2117[3], i2117[4], i2117[5], i2117[6])
  i2116.ambientSkyColor = new pc.Color(i2117[7], i2117[8], i2117[9], i2117[10])
  i2116.ambientGroundColor = new pc.Color(i2117[11], i2117[12], i2117[13], i2117[14])
  i2116.ambientEquatorColor = new pc.Color(i2117[15], i2117[16], i2117[17], i2117[18])
  i2116.fogColor = new pc.Color(i2117[19], i2117[20], i2117[21], i2117[22])
  i2116.fogEndDistance = i2117[23]
  i2116.fogStartDistance = i2117[24]
  i2116.fogDensity = i2117[25]
  i2116.fog = !!i2117[26]
  request.r(i2117[27], i2117[28], 0, i2116, 'skybox')
  i2116.fogMode = i2117[29]
  var i2119 = i2117[30]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2119[i + 0]) );
  }
  i2116.lightmaps = i2118
  i2116.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2117[31], i2116.lightProbes)
  i2116.lightmapsMode = i2117[32]
  i2116.mixedBakeMode = i2117[33]
  i2116.environmentLightingMode = i2117[34]
  i2116.ambientProbe = new pc.SphericalHarmonicsL2(i2117[35])
  request.r(i2117[36], i2117[37], 0, i2116, 'customReflection')
  request.r(i2117[38], i2117[39], 0, i2116, 'defaultReflection')
  i2116.defaultReflectionMode = i2117[40]
  i2116.defaultReflectionResolution = i2117[41]
  i2116.sunLightObjectId = i2117[42]
  i2116.pixelLightCount = i2117[43]
  i2116.defaultReflectionHDR = !!i2117[44]
  i2116.hasLightDataAsset = !!i2117[45]
  i2116.hasManualGenerate = !!i2117[46]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'lightmapColor')
  request.r(i2123[2], i2123[3], 0, i2122, 'lightmapDirection')
  request.r(i2123[4], i2123[5], 0, i2122, 'shadowMask')
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2124 = root || new UnityEngine.LightProbes()
  var i2125 = data
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2133 = data
  var i2135 = i2133[0]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2135[i + 0]));
  }
  i2132.ShaderCompilationErrors = i2134
  i2132.name = i2133[1]
  i2132.guid = i2133[2]
  var i2137 = i2133[3]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( i2137[i + 0] );
  }
  i2132.shaderDefinedKeywords = i2136
  var i2139 = i2133[4]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2139[i + 0]) );
  }
  i2132.passes = i2138
  var i2141 = i2133[5]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2141[i + 0]) );
  }
  i2132.usePasses = i2140
  var i2143 = i2133[6]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2143[i + 0]) );
  }
  i2132.defaultParameterValues = i2142
  request.r(i2133[7], i2133[8], 0, i2132, 'unityFallbackShader')
  i2132.readDepth = !!i2133[9]
  i2132.hasDepthOnlyPass = !!i2133[10]
  i2132.isCreatedByShaderGraph = !!i2133[11]
  i2132.disableBatching = !!i2133[12]
  i2132.compiled = !!i2133[13]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2147 = data
  i2146.shaderName = i2147[0]
  i2146.errorMessage = i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2150 = root || new pc.UnityShaderPass()
  var i2151 = data
  i2150.id = i2151[0]
  i2150.subShaderIndex = i2151[1]
  i2150.name = i2151[2]
  i2150.passType = i2151[3]
  i2150.grabPassTextureName = i2151[4]
  i2150.usePass = !!i2151[5]
  i2150.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[6], i2150.zTest)
  i2150.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[7], i2150.zWrite)
  i2150.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[8], i2150.culling)
  i2150.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2151[9], i2150.blending)
  i2150.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2151[10], i2150.alphaBlending)
  i2150.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[11], i2150.colorWriteMask)
  i2150.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[12], i2150.offsetUnits)
  i2150.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[13], i2150.offsetFactor)
  i2150.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[14], i2150.stencilRef)
  i2150.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[15], i2150.stencilReadMask)
  i2150.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2151[16], i2150.stencilWriteMask)
  i2150.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[17], i2150.stencilOp)
  i2150.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[18], i2150.stencilOpFront)
  i2150.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2151[19], i2150.stencilOpBack)
  var i2153 = i2151[20]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2153[i + 0]) );
  }
  i2150.tags = i2152
  var i2155 = i2151[21]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( i2155[i + 0] );
  }
  i2150.passDefinedKeywords = i2154
  var i2157 = i2151[22]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2157[i + 0]) );
  }
  i2150.passDefinedKeywordGroups = i2156
  var i2159 = i2151[23]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2159[i + 0]) );
  }
  i2150.variants = i2158
  var i2161 = i2151[24]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2161[i + 0]) );
  }
  i2150.excludedVariants = i2160
  i2150.hasDepthReader = !!i2151[25]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2163 = data
  i2162.val = i2163[0]
  i2162.name = i2163[1]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2165 = data
  i2164.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[0], i2164.src)
  i2164.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[1], i2164.dst)
  i2164.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2165[2], i2164.op)
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2167 = data
  i2166.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[0], i2166.pass)
  i2166.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[1], i2166.fail)
  i2166.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[2], i2166.zFail)
  i2166.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2167[3], i2166.comp)
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.value = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2175 = data
  var i2177 = i2175[0]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( i2177[i + 0] );
  }
  i2174.keywords = i2176
  i2174.hasDiscard = !!i2175[1]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2181 = data
  i2180.passId = i2181[0]
  i2180.subShaderIndex = i2181[1]
  var i2183 = i2181[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( i2183[i + 0] );
  }
  i2180.keywords = i2182
  i2180.vertexProgram = i2181[3]
  i2180.fragmentProgram = i2181[4]
  i2180.exportedForWebGl2 = !!i2181[5]
  i2180.readDepth = !!i2181[6]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'shader')
  i2186.pass = i2187[2]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.type = i2191[1]
  i2190.value = new pc.Vec4( i2191[2], i2191[3], i2191[4], i2191[5] )
  i2190.textureValue = i2191[6]
  i2190.shaderPropertyFlag = i2191[7]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2193 = data
  i2192.name = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'texture')
  i2192.aabb = i2193[3]
  i2192.vertices = i2193[4]
  i2192.triangles = i2193[5]
  i2192.textureRect = UnityEngine.Rect.MinMaxRect(i2193[6], i2193[7], i2193[8], i2193[9])
  i2192.packedRect = UnityEngine.Rect.MinMaxRect(i2193[10], i2193[11], i2193[12], i2193[13])
  i2192.border = new pc.Vec4( i2193[14], i2193[15], i2193[16], i2193[17] )
  i2192.transparency = i2193[18]
  i2192.bounds = i2193[19]
  i2192.pixelsPerUnit = i2193[20]
  i2192.textureWidth = i2193[21]
  i2192.textureHeight = i2193[22]
  i2192.nativeSize = new pc.Vec2( i2193[23], i2193[24] )
  i2192.pivot = new pc.Vec2( i2193[25], i2193[26] )
  i2192.textureRectOffset = new pc.Vec2( i2193[27], i2193[28] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2195 = data
  i2194.name = i2195[0]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2197 = data
  i2196.name = i2197[0]
  i2196.ascent = i2197[1]
  i2196.originalLineHeight = i2197[2]
  i2196.fontSize = i2197[3]
  var i2199 = i2197[4]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2199[i + 0]) );
  }
  i2196.characterInfo = i2198
  request.r(i2197[5], i2197[6], 0, i2196, 'texture')
  i2196.originalFontSize = i2197[7]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2203 = data
  i2202.index = i2203[0]
  i2202.advance = i2203[1]
  i2202.bearing = i2203[2]
  i2202.glyphWidth = i2203[3]
  i2202.glyphHeight = i2203[4]
  i2202.minX = i2203[5]
  i2202.maxX = i2203[6]
  i2202.minY = i2203[7]
  i2202.maxY = i2203[8]
  i2202.uvBottomLeftX = i2203[9]
  i2202.uvBottomLeftY = i2203[10]
  i2202.uvBottomRightX = i2203[11]
  i2202.uvBottomRightY = i2203[12]
  i2202.uvTopLeftX = i2203[13]
  i2202.uvTopLeftY = i2203[14]
  i2202.uvTopRightX = i2203[15]
  i2202.uvTopRightY = i2203[16]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.bytes64 = i2205[1]
  i2204.data = i2205[2]
  return i2204
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2206 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2207 = data
  i2206.normalStyle = i2207[0]
  i2206.normalSpacingOffset = i2207[1]
  i2206.boldStyle = i2207[2]
  i2206.boldSpacing = i2207[3]
  i2206.italicStyle = i2207[4]
  i2206.tabSize = i2207[5]
  request.r(i2207[6], i2207[7], 0, i2206, 'atlas')
  i2206.m_SourceFontFileGUID = i2207[8]
  i2206.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2207[9], i2206.m_CreationSettings)
  request.r(i2207[10], i2207[11], 0, i2206, 'm_SourceFontFile')
  i2206.m_SourceFontFilePath = i2207[12]
  i2206.m_AtlasPopulationMode = i2207[13]
  i2206.InternalDynamicOS = !!i2207[14]
  var i2209 = i2207[15]
  var i2208 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.add(request.d('UnityEngine.TextCore.Glyph', i2209[i + 0]));
  }
  i2206.m_GlyphTable = i2208
  var i2211 = i2207[16]
  var i2210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.add(request.d('TMPro.TMP_Character', i2211[i + 0]));
  }
  i2206.m_CharacterTable = i2210
  var i2213 = i2207[17]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2206.m_AtlasTextures = i2212
  i2206.m_AtlasTextureIndex = i2207[18]
  i2206.m_IsMultiAtlasTexturesEnabled = !!i2207[19]
  i2206.m_GetFontFeatures = !!i2207[20]
  i2206.m_ClearDynamicDataOnBuild = !!i2207[21]
  i2206.m_AtlasWidth = i2207[22]
  i2206.m_AtlasHeight = i2207[23]
  i2206.m_AtlasPadding = i2207[24]
  i2206.m_AtlasRenderMode = i2207[25]
  var i2215 = i2207[26]
  var i2214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.add(request.d('UnityEngine.TextCore.GlyphRect', i2215[i + 0]));
  }
  i2206.m_UsedGlyphRects = i2214
  var i2217 = i2207[27]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.add(request.d('UnityEngine.TextCore.GlyphRect', i2217[i + 0]));
  }
  i2206.m_FreeGlyphRects = i2216
  i2206.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2207[28], i2206.m_FontFeatureTable)
  i2206.m_ShouldReimportFontFeatures = !!i2207[29]
  var i2219 = i2207[30]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 1, i2218, '')
  }
  i2206.m_FallbackFontAssetTable = i2218
  var i2221 = i2207[31]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('TMPro.TMP_FontWeightPair', i2221[i + 0]) );
  }
  i2206.m_FontWeightTable = i2220
  var i2223 = i2207[32]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('TMPro.TMP_FontWeightPair', i2223[i + 0]) );
  }
  i2206.fontWeights = i2222
  i2206.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2207[33], i2206.m_fontInfo)
  var i2225 = i2207[34]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.add(request.d('TMPro.TMP_Glyph', i2225[i + 0]));
  }
  i2206.m_glyphInfoList = i2224
  i2206.m_KerningTable = request.d('TMPro.KerningTable', i2207[35], i2206.m_KerningTable)
  var i2227 = i2207[36]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 1, i2226, '')
  }
  i2206.fallbackFontAssets = i2226
  i2206.m_Version = i2207[37]
  i2206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2207[38], i2206.m_FaceInfo)
  request.r(i2207[39], i2207[40], 0, i2206, 'm_Material')
  return i2206
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2229 = data
  i2228.sourceFontFileName = i2229[0]
  i2228.sourceFontFileGUID = i2229[1]
  i2228.faceIndex = i2229[2]
  i2228.pointSizeSamplingMode = i2229[3]
  i2228.pointSize = i2229[4]
  i2228.padding = i2229[5]
  i2228.paddingMode = i2229[6]
  i2228.packingMode = i2229[7]
  i2228.atlasWidth = i2229[8]
  i2228.atlasHeight = i2229[9]
  i2228.characterSetSelectionMode = i2229[10]
  i2228.characterSequence = i2229[11]
  i2228.referencedFontAssetGUID = i2229[12]
  i2228.referencedTextAssetGUID = i2229[13]
  i2228.fontStyle = i2229[14]
  i2228.fontStyleModifier = i2229[15]
  i2228.renderMode = i2229[16]
  i2228.includeFontFeatures = !!i2229[17]
  return i2228
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2233 = data
  i2232.m_Index = i2233[0]
  i2232.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2233[1], i2232.m_Metrics)
  i2232.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2233[2], i2232.m_GlyphRect)
  i2232.m_Scale = i2233[3]
  i2232.m_AtlasIndex = i2233[4]
  i2232.m_ClassDefinitionType = i2233[5]
  return i2232
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2235 = data
  i2234.m_Width = i2235[0]
  i2234.m_Height = i2235[1]
  i2234.m_HorizontalBearingX = i2235[2]
  i2234.m_HorizontalBearingY = i2235[3]
  i2234.m_HorizontalAdvance = i2235[4]
  return i2234
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2237 = data
  i2236.m_X = i2237[0]
  i2236.m_Y = i2237[1]
  i2236.m_Width = i2237[2]
  i2236.m_Height = i2237[3]
  return i2236
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2240 = root || request.c( 'TMPro.TMP_Character' )
  var i2241 = data
  i2240.m_ElementType = i2241[0]
  i2240.m_Unicode = i2241[1]
  i2240.m_GlyphIndex = i2241[2]
  i2240.m_Scale = i2241[3]
  return i2240
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2246 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2247 = data
  var i2249 = i2247[0]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.add(request.d('TMPro.MultipleSubstitutionRecord', i2249[i + 0]));
  }
  i2246.m_MultipleSubstitutionRecords = i2248
  var i2251 = i2247[1]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.add(request.d('TMPro.LigatureSubstitutionRecord', i2251[i + 0]));
  }
  i2246.m_LigatureSubstitutionRecords = i2250
  var i2253 = i2247[2]
  var i2252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2253[i + 0]));
  }
  i2246.m_GlyphPairAdjustmentRecords = i2252
  var i2255 = i2247[3]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2255[i + 0]));
  }
  i2246.m_MarkToBaseAdjustmentRecords = i2254
  var i2257 = i2247[4]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2257[i + 0]));
  }
  i2246.m_MarkToMarkAdjustmentRecords = i2256
  return i2246
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2260 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2261 = data
  i2260.m_TargetGlyphID = i2261[0]
  i2260.m_SubstituteGlyphIDs = i2261[1]
  return i2260
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2264 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2265 = data
  i2264.m_ComponentGlyphIDs = i2265[0]
  i2264.m_LigatureGlyphID = i2265[1]
  return i2264
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2269 = data
  i2268.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2269[0], i2268.m_FirstAdjustmentRecord)
  i2268.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2269[1], i2268.m_SecondAdjustmentRecord)
  i2268.m_FeatureLookupFlags = i2269[2]
  return i2268
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2272 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2273 = data
  i2272.m_BaseGlyphID = i2273[0]
  i2272.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2273[1], i2272.m_BaseGlyphAnchorPoint)
  i2272.m_MarkGlyphID = i2273[2]
  i2272.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2273[3], i2272.m_MarkPositionAdjustment)
  return i2272
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2277 = data
  i2276.m_BaseMarkGlyphID = i2277[0]
  i2276.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2277[1], i2276.m_BaseMarkGlyphAnchorPoint)
  i2276.m_CombiningMarkGlyphID = i2277[2]
  i2276.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2277[3], i2276.m_CombiningMarkPositionAdjustment)
  return i2276
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'regularTypeface')
  request.r(i2283[2], i2283[3], 0, i2282, 'italicTypeface')
  return i2282
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2284 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2285 = data
  i2284.Name = i2285[0]
  i2284.PointSize = i2285[1]
  i2284.Scale = i2285[2]
  i2284.CharacterCount = i2285[3]
  i2284.LineHeight = i2285[4]
  i2284.Baseline = i2285[5]
  i2284.Ascender = i2285[6]
  i2284.CapHeight = i2285[7]
  i2284.Descender = i2285[8]
  i2284.CenterLine = i2285[9]
  i2284.SuperscriptOffset = i2285[10]
  i2284.SubscriptOffset = i2285[11]
  i2284.SubSize = i2285[12]
  i2284.Underline = i2285[13]
  i2284.UnderlineThickness = i2285[14]
  i2284.strikethrough = i2285[15]
  i2284.strikethroughThickness = i2285[16]
  i2284.TabWidth = i2285[17]
  i2284.Padding = i2285[18]
  i2284.AtlasWidth = i2285[19]
  i2284.AtlasHeight = i2285[20]
  return i2284
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2288 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2289 = data
  i2288.id = i2289[0]
  i2288.x = i2289[1]
  i2288.y = i2289[2]
  i2288.width = i2289[3]
  i2288.height = i2289[4]
  i2288.xOffset = i2289[5]
  i2288.yOffset = i2289[6]
  i2288.xAdvance = i2289[7]
  i2288.scale = i2289[8]
  return i2288
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.KerningTable' )
  var i2291 = data
  var i2293 = i2291[0]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.add(request.d('TMPro.KerningPair', i2293[i + 0]));
  }
  i2290.kerningPairs = i2292
  return i2290
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.KerningPair' )
  var i2297 = data
  i2296.xOffset = i2297[0]
  i2296.m_FirstGlyph = i2297[1]
  i2296.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2297[2], i2296.m_FirstGlyphAdjustments)
  i2296.m_SecondGlyph = i2297[3]
  i2296.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2297[4], i2296.m_SecondGlyphAdjustments)
  i2296.m_IgnoreSpacingAdjustments = !!i2297[5]
  return i2296
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2299 = data
  i2298.m_FaceIndex = i2299[0]
  i2298.m_FamilyName = i2299[1]
  i2298.m_StyleName = i2299[2]
  i2298.m_PointSize = i2299[3]
  i2298.m_Scale = i2299[4]
  i2298.m_UnitsPerEM = i2299[5]
  i2298.m_LineHeight = i2299[6]
  i2298.m_AscentLine = i2299[7]
  i2298.m_CapLine = i2299[8]
  i2298.m_MeanLine = i2299[9]
  i2298.m_Baseline = i2299[10]
  i2298.m_DescentLine = i2299[11]
  i2298.m_SuperscriptOffset = i2299[12]
  i2298.m_SuperscriptSize = i2299[13]
  i2298.m_SubscriptOffset = i2299[14]
  i2298.m_SubscriptSize = i2299[15]
  i2298.m_UnderlineOffset = i2299[16]
  i2298.m_UnderlineThickness = i2299[17]
  i2298.m_StrikethroughOffset = i2299[18]
  i2298.m_StrikethroughThickness = i2299[19]
  i2298.m_TabWidth = i2299[20]
  return i2298
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2300 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 2, i2302, '')
  }
  i2300.atlasAssets = i2302
  i2300.scale = i2301[1]
  request.r(i2301[2], i2301[3], 0, i2300, 'skeletonJSON')
  i2300.isUpgradingBlendModeMaterials = !!i2301[4]
  i2300.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2301[5], i2300.blendModeMaterials)
  var i2305 = i2301[6]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 1, i2304, '')
  }
  i2300.skeletonDataModifiers = i2304
  var i2307 = i2301[7]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( i2307[i + 0] );
  }
  i2300.fromAnimation = i2306
  var i2309 = i2301[8]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( i2309[i + 0] );
  }
  i2300.toAnimation = i2308
  i2300.duration = i2301[9]
  i2300.defaultMix = i2301[10]
  request.r(i2301[11], i2301[12], 0, i2300, 'controller')
  return i2300
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2312 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2313 = data
  i2312.applyAdditiveMaterial = !!i2313[0]
  var i2315 = i2313[1]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2315[i + 0]));
  }
  i2312.additiveMaterials = i2314
  var i2317 = i2313[2]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2317[i + 0]));
  }
  i2312.multiplyMaterials = i2316
  var i2319 = i2313[3]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2319[i + 0]));
  }
  i2312.screenMaterials = i2318
  i2312.requiresBlendModeMaterials = !!i2313[4]
  return i2312
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2322 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2323 = data
  i2322.pageName = i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'material')
  return i2322
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2326 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'atlasFile')
  var i2329 = i2327[2]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2326.materials = i2328
  i2326.textureLoadingMode = i2327[3]
  request.r(i2327[4], i2327[5], 0, i2326, 'onDemandTextureLoader')
  return i2326
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2331 = data
  i2330.useSafeMode = !!i2331[0]
  i2330.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2331[1], i2330.safeModeOptions)
  i2330.timeScale = i2331[2]
  i2330.unscaledTimeScale = i2331[3]
  i2330.useSmoothDeltaTime = !!i2331[4]
  i2330.maxSmoothUnscaledTime = i2331[5]
  i2330.rewindCallbackMode = i2331[6]
  i2330.showUnityEditorReport = !!i2331[7]
  i2330.logBehaviour = i2331[8]
  i2330.drawGizmos = !!i2331[9]
  i2330.defaultRecyclable = !!i2331[10]
  i2330.defaultAutoPlay = i2331[11]
  i2330.defaultUpdateType = i2331[12]
  i2330.defaultTimeScaleIndependent = !!i2331[13]
  i2330.defaultEaseType = i2331[14]
  i2330.defaultEaseOvershootOrAmplitude = i2331[15]
  i2330.defaultEasePeriod = i2331[16]
  i2330.defaultAutoKill = !!i2331[17]
  i2330.defaultLoopType = i2331[18]
  i2330.debugMode = !!i2331[19]
  i2330.debugStoreTargetId = !!i2331[20]
  i2330.showPreviewPanel = !!i2331[21]
  i2330.storeSettingsLocation = i2331[22]
  i2330.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2331[23], i2330.modules)
  i2330.createASMDEF = !!i2331[24]
  i2330.showPlayingTweens = !!i2331[25]
  i2330.showPausedTweens = !!i2331[26]
  return i2330
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2332 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2333 = data
  i2332.logBehaviour = i2333[0]
  i2332.nestedTweenFailureBehaviour = i2333[1]
  return i2332
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2335 = data
  i2334.showPanel = !!i2335[0]
  i2334.audioEnabled = !!i2335[1]
  i2334.physicsEnabled = !!i2335[2]
  i2334.physics2DEnabled = !!i2335[3]
  i2334.spriteEnabled = !!i2335[4]
  i2334.uiEnabled = !!i2335[5]
  i2334.uiToolkitEnabled = !!i2335[6]
  i2334.textMeshProEnabled = !!i2335[7]
  i2334.tk2DEnabled = !!i2335[8]
  i2334.deAudioEnabled = !!i2335[9]
  i2334.deUnityExtendedEnabled = !!i2335[10]
  i2334.epoOutlineEnabled = !!i2335[11]
  return i2334
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.TMP_Settings' )
  var i2337 = data
  i2336.assetVersion = i2337[0]
  i2336.m_TextWrappingMode = i2337[1]
  i2336.m_enableKerning = !!i2337[2]
  var i2339 = i2337[3]
  var i2338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.add(i2339[i + 0]);
  }
  i2336.m_ActiveFontFeatures = i2338
  i2336.m_enableExtraPadding = !!i2337[4]
  i2336.m_enableTintAllSprites = !!i2337[5]
  i2336.m_enableParseEscapeCharacters = !!i2337[6]
  i2336.m_EnableRaycastTarget = !!i2337[7]
  i2336.m_GetFontFeaturesAtRuntime = !!i2337[8]
  i2336.m_missingGlyphCharacter = i2337[9]
  i2336.m_ClearDynamicDataOnBuild = !!i2337[10]
  i2336.m_warningsDisabled = !!i2337[11]
  request.r(i2337[12], i2337[13], 0, i2336, 'm_defaultFontAsset')
  i2336.m_defaultFontAssetPath = i2337[14]
  i2336.m_defaultFontSize = i2337[15]
  i2336.m_defaultAutoSizeMinRatio = i2337[16]
  i2336.m_defaultAutoSizeMaxRatio = i2337[17]
  i2336.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2337[18], i2337[19] )
  i2336.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2337[20], i2337[21] )
  i2336.m_autoSizeTextContainer = !!i2337[22]
  i2336.m_IsTextObjectScaleStatic = !!i2337[23]
  var i2341 = i2337[24]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 1, i2340, '')
  }
  i2336.m_fallbackFontAssets = i2340
  i2336.m_matchMaterialPreset = !!i2337[25]
  i2336.m_HideSubTextObjects = !!i2337[26]
  request.r(i2337[27], i2337[28], 0, i2336, 'm_defaultSpriteAsset')
  i2336.m_defaultSpriteAssetPath = i2337[29]
  i2336.m_enableEmojiSupport = !!i2337[30]
  i2336.m_MissingCharacterSpriteUnicode = i2337[31]
  var i2343 = i2337[32]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 1, i2342, '')
  }
  i2336.m_EmojiFallbackTextAssets = i2342
  i2336.m_defaultColorGradientPresetsPath = i2337[33]
  request.r(i2337[34], i2337[35], 0, i2336, 'm_defaultStyleSheet')
  i2336.m_StyleSheetsResourcePath = i2337[36]
  request.r(i2337[37], i2337[38], 0, i2336, 'm_leadingCharacters')
  request.r(i2337[39], i2337[40], 0, i2336, 'm_followingCharacters')
  i2336.m_UseModernHangulLineBreakingRules = !!i2337[41]
  return i2336
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2347 = data
  i2346.m_GlyphIndex = i2347[0]
  i2346.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2347[1], i2346.m_GlyphValueRecord)
  return i2346
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2349 = data
  i2348.m_XPlacement = i2349[0]
  i2348.m_YPlacement = i2349[1]
  i2348.m_XAdvance = i2349[2]
  i2348.m_YAdvance = i2349[3]
  return i2348
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'spriteSheet')
  var i2353 = i2351[2]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('TMPro.TMP_Sprite', i2353[i + 0]));
  }
  i2350.spriteInfoList = i2352
  var i2355 = i2351[3]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 1, i2354, '')
  }
  i2350.fallbackSpriteAssets = i2354
  var i2357 = i2351[4]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(request.d('TMPro.TMP_SpriteCharacter', i2357[i + 0]));
  }
  i2350.m_SpriteCharacterTable = i2356
  var i2359 = i2351[5]
  var i2358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.add(request.d('TMPro.TMP_SpriteGlyph', i2359[i + 0]));
  }
  i2350.m_GlyphTable = i2358
  i2350.m_Version = i2351[6]
  i2350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2351[7], i2350.m_FaceInfo)
  request.r(i2351[8], i2351[9], 0, i2350, 'm_Material')
  return i2350
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.hashCode = i2363[1]
  i2362.unicode = i2363[2]
  i2362.pivot = new pc.Vec2( i2363[3], i2363[4] )
  request.r(i2363[5], i2363[6], 0, i2362, 'sprite')
  i2362.id = i2363[7]
  i2362.x = i2363[8]
  i2362.y = i2363[9]
  i2362.width = i2363[10]
  i2362.height = i2363[11]
  i2362.xOffset = i2363[12]
  i2362.yOffset = i2363[13]
  i2362.xAdvance = i2363[14]
  i2362.scale = i2363[15]
  return i2362
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2368 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2369 = data
  i2368.m_Name = i2369[0]
  i2368.m_ElementType = i2369[1]
  i2368.m_Unicode = i2369[2]
  i2368.m_GlyphIndex = i2369[3]
  i2368.m_Scale = i2369[4]
  return i2368
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2372 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'sprite')
  i2372.m_Index = i2373[2]
  i2372.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2373[3], i2372.m_Metrics)
  i2372.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2373[4], i2372.m_GlyphRect)
  i2372.m_Scale = i2373[5]
  i2372.m_AtlasIndex = i2373[6]
  i2372.m_ClassDefinitionType = i2373[7]
  return i2372
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('TMPro.TMP_Style', i2377[i + 0]));
  }
  i2374.m_StyleList = i2376
  return i2374
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2380 = root || request.c( 'TMPro.TMP_Style' )
  var i2381 = data
  i2380.m_Name = i2381[0]
  i2380.m_HashCode = i2381[1]
  i2380.m_OpeningDefinition = i2381[2]
  i2380.m_ClosingDefinition = i2381[3]
  i2380.m_OpeningTagArray = i2381[4]
  i2380.m_ClosingTagArray = i2381[5]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2383 = data
  var i2385 = i2383[0]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2385[i + 0]) );
  }
  i2382.files = i2384
  i2382.componentToPrefabIds = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2389 = data
  i2388.path = i2389[0]
  request.r(i2389[1], i2389[2], 0, i2388, 'unityObject')
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2393[i + 0]) );
  }
  i2390.scriptsExecutionOrder = i2392
  var i2395 = i2391[1]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2395[i + 0]) );
  }
  i2390.sortingLayers = i2394
  var i2397 = i2391[2]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2397[i + 0]) );
  }
  i2390.cullingLayers = i2396
  i2390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2391[3], i2390.timeSettings)
  i2390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2391[4], i2390.physicsSettings)
  i2390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2391[5], i2390.physics2DSettings)
  i2390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2391[6], i2390.qualitySettings)
  i2390.enableRealtimeShadows = !!i2391[7]
  i2390.enableAutoInstancing = !!i2391[8]
  i2390.enableStaticBatching = !!i2391[9]
  i2390.enableDynamicBatching = !!i2391[10]
  i2390.usePreservativeDynamicBatching = !!i2391[11]
  i2390.lightmapEncodingQuality = i2391[12]
  i2390.desiredColorSpace = i2391[13]
  var i2399 = i2391[14]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( i2399[i + 0] );
  }
  i2390.allTags = i2398
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2403 = data
  i2402.name = i2403[0]
  i2402.value = i2403[1]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2407 = data
  i2406.id = i2407[0]
  i2406.name = i2407[1]
  i2406.value = i2407[2]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2411 = data
  i2410.id = i2411[0]
  i2410.name = i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2413 = data
  i2412.fixedDeltaTime = i2413[0]
  i2412.maximumDeltaTime = i2413[1]
  i2412.timeScale = i2413[2]
  i2412.maximumParticleTimestep = i2413[3]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2415 = data
  i2414.gravity = new pc.Vec3( i2415[0], i2415[1], i2415[2] )
  i2414.defaultSolverIterations = i2415[3]
  i2414.bounceThreshold = i2415[4]
  i2414.autoSyncTransforms = !!i2415[5]
  i2414.autoSimulation = !!i2415[6]
  var i2417 = i2415[7]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2417[i + 0]) );
  }
  i2414.collisionMatrix = i2416
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.layerId = i2421[1]
  i2420.otherLayerId = i2421[2]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'material')
  i2422.gravity = new pc.Vec2( i2423[2], i2423[3] )
  i2422.positionIterations = i2423[4]
  i2422.velocityIterations = i2423[5]
  i2422.velocityThreshold = i2423[6]
  i2422.maxLinearCorrection = i2423[7]
  i2422.maxAngularCorrection = i2423[8]
  i2422.maxTranslationSpeed = i2423[9]
  i2422.maxRotationSpeed = i2423[10]
  i2422.baumgarteScale = i2423[11]
  i2422.baumgarteTOIScale = i2423[12]
  i2422.timeToSleep = i2423[13]
  i2422.linearSleepTolerance = i2423[14]
  i2422.angularSleepTolerance = i2423[15]
  i2422.defaultContactOffset = i2423[16]
  i2422.autoSimulation = !!i2423[17]
  i2422.queriesHitTriggers = !!i2423[18]
  i2422.queriesStartInColliders = !!i2423[19]
  i2422.callbacksOnDisable = !!i2423[20]
  i2422.reuseCollisionCallbacks = !!i2423[21]
  i2422.autoSyncTransforms = !!i2423[22]
  var i2425 = i2423[23]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2425[i + 0]) );
  }
  i2422.collisionMatrix = i2424
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2429 = data
  i2428.enabled = !!i2429[0]
  i2428.layerId = i2429[1]
  i2428.otherLayerId = i2429[2]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2433[i + 0]) );
  }
  i2430.qualityLevels = i2432
  var i2435 = i2431[1]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2430.names = i2434
  i2430.shadows = i2431[2]
  i2430.anisotropicFiltering = i2431[3]
  i2430.antiAliasing = i2431[4]
  i2430.lodBias = i2431[5]
  i2430.shadowCascades = i2431[6]
  i2430.shadowDistance = i2431[7]
  i2430.shadowmaskMode = i2431[8]
  i2430.shadowProjection = i2431[9]
  i2430.shadowResolution = i2431[10]
  i2430.softParticles = !!i2431[11]
  i2430.softVegetation = !!i2431[12]
  i2430.activeColorSpace = i2431[13]
  i2430.desiredColorSpace = i2431[14]
  i2430.masterTextureLimit = i2431[15]
  i2430.maxQueuedFrames = i2431[16]
  i2430.particleRaycastBudget = i2431[17]
  i2430.pixelLightCount = i2431[18]
  i2430.realtimeReflectionProbes = !!i2431[19]
  i2430.shadowCascade2Split = i2431[20]
  i2430.shadowCascade4Split = new pc.Vec3( i2431[21], i2431[22], i2431[23] )
  i2430.streamingMipmapsActive = !!i2431[24]
  i2430.vSyncCount = i2431[25]
  i2430.asyncUploadBufferSize = i2431[26]
  i2430.asyncUploadTimeSlice = i2431[27]
  i2430.billboardsFaceCameraPosition = !!i2431[28]
  i2430.shadowNearPlaneOffset = i2431[29]
  i2430.streamingMipmapsMemoryBudget = i2431[30]
  i2430.maximumLODLevel = i2431[31]
  i2430.streamingMipmapsAddAllCameras = !!i2431[32]
  i2430.streamingMipmapsMaxLevelReduction = i2431[33]
  i2430.streamingMipmapsRenderersPerFrame = i2431[34]
  i2430.resolutionScalingFixedDPIFactor = i2431[35]
  i2430.streamingMipmapsMaxFileIORequests = i2431[36]
  i2430.currentQualityLevel = i2431[37]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2441 = data
  i2440.weight = i2441[0]
  i2440.vertices = i2441[1]
  i2440.normals = i2441[2]
  i2440.tangents = i2441[3]
  return i2440
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2442 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2443 = data
  i2442.m_XCoordinate = i2443[0]
  i2442.m_YCoordinate = i2443[1]
  return i2442
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2445 = data
  i2444.m_XPositionAdjustment = i2445[0]
  i2444.m_YPositionAdjustment = i2445[1]
  return i2444
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2447 = data
  i2446.xPlacement = i2447[0]
  i2446.yPlacement = i2447[1]
  i2446.xAdvance = i2447[2]
  i2446.yAdvance = i2447[3]
  return i2446
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

Deserializers.buildID = "55ce6b8d-9494-4b24-bcf2-cec5f8b28265";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

