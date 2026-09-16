#if UNITY_EDITOR

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Playable
{
    public static class SpineStraightAlphaConverter
    {
        private const int ColorBleedIterations = 16;
        private const string ConversionMarker = "SpineStraightAlphaConverter:v2";
        private const string StraightAlphaProperty = "_StraightAlphaInput";
        private const string StraightAlphaKeyword = "_STRAIGHT_ALPHA_INPUT";

        [MenuItem("Tools/Spine/Convert Selected Atlas To Straight Alpha")]
        private static void Convert()
        {
            var pngPaths = Selection.objects
                .Select(AssetDatabase.GetAssetPath)
                .Where(path => !string.IsNullOrEmpty(path) &&
                               path.EndsWith(".png", StringComparison.OrdinalIgnoreCase))
                .Distinct()
                .ToArray();

            if (pngPaths.Length == 0)
            {
                EditorUtility.DisplayDialog("Spine", "Chọn file .png của atlas trong Project trước.", "OK");
                return;
            }

            if (!EditorUtility.DisplayDialog(
                    "Spine",
                    $"Ghi đè {pngPaths.Length} file PNG, không thể Undo. Hãy commit Git trước khi chạy.\n\nTiếp tục?",
                    "Convert",
                    "Cancel"))
                return;

            var convertedPaths = new List<string>();
            foreach (var pngPath in pngPaths)
            {
                if (IsAlreadyConverted(pngPath))
                {
                    convertedPaths.Add(pngPath);
                    continue;
                }

                if (!AtlasDeclaresStraightAlpha(pngPath))
                    UnpremultiplyAndBleed(pngPath);

                PatchAtlasFiles(pngPath);
                convertedPaths.Add(pngPath);
            }

            AssetDatabase.Refresh(ImportAssetOptions.ForceSynchronousImport);

            foreach (var pngPath in convertedPaths)
            {
                SetImporter(pngPath);
                FixMaterials(pngPath);
                PatchLunaTextureRule(pngPath);
            }

            AssetDatabase.SaveAssets();
            Debug.Log($"[Spine] Đã convert {convertedPaths.Count}/{pngPaths.Length} atlas page sang straight alpha.");
        }

        private static bool IsAlreadyConverted(string path)
        {
            string userData = AssetImporter.GetAtPath(path)?.userData;
            return !string.IsNullOrEmpty(userData) && userData.Contains(ConversionMarker);
        }

        private static bool AtlasDeclaresStraightAlpha(string pngPath)
        {
            string directory = Path.GetDirectoryName(pngPath);
            string pngName = Path.GetFileName(pngPath);
            if (string.IsNullOrEmpty(directory)) return false;

            return Directory.GetFiles(directory, "*.atlas*")
                .Where(path => !path.EndsWith(".meta", StringComparison.OrdinalIgnoreCase))
                .Select(File.ReadAllText)
                .Any(text => text.Contains(pngName) &&
                             (text.Contains("pma:false") || text.Contains("pma: false")));
        }

        private static void UnpremultiplyAndBleed(string path)
        {
            var texture = new Texture2D(2, 2, TextureFormat.RGBA32, false, false);
            try
            {
                if (!texture.LoadImage(File.ReadAllBytes(path), false))
                    throw new InvalidDataException($"Không thể đọc PNG: {path}");

                var pixels = texture.GetPixels32();
                for (int index = 0; index < pixels.Length; index++)
                {
                    int alpha = pixels[index].a;
                    if (alpha == 0 || alpha == 255) continue;

                    pixels[index].r = UnpremultiplyChannel(pixels[index].r, alpha);
                    pixels[index].g = UnpremultiplyChannel(pixels[index].g, alpha);
                    pixels[index].b = UnpremultiplyChannel(pixels[index].b, alpha);
                }

                BleedIntoFullyTransparentPixels(pixels, texture.width, texture.height);
                texture.SetPixels32(pixels);
                texture.Apply(false, false);
                File.WriteAllBytes(path, texture.EncodeToPNG());
            }
            finally
            {
                UnityEngine.Object.DestroyImmediate(texture);
            }
        }

        private static byte UnpremultiplyChannel(byte channel, int alpha)
        {
            return (byte)Mathf.Min(255, (channel * 255 + alpha / 2) / alpha);
        }

        private static void BleedIntoFullyTransparentPixels(Color32[] pixels, int width, int height)
        {
            var hasColor = new bool[pixels.Length];
            for (int index = 0; index < pixels.Length; index++)
                hasColor[index] = pixels[index].a > 0;

            for (int iteration = 0; iteration < ColorBleedIterations; iteration++)
            {
                var nextPixels = (Color32[])pixels.Clone();
                var nextHasColor = (bool[])hasColor.Clone();
                bool changed = false;

                for (int y = 0; y < height; y++)
                {
                    for (int x = 0; x < width; x++)
                    {
                        int index = y * width + x;
                        if (hasColor[index] || pixels[index].a != 0) continue;

                        int red = 0;
                        int green = 0;
                        int blue = 0;
                        int count = 0;

                        for (int offsetY = -1; offsetY <= 1; offsetY++)
                        {
                            int sampleY = y + offsetY;
                            if (sampleY < 0 || sampleY >= height) continue;

                            for (int offsetX = -1; offsetX <= 1; offsetX++)
                            {
                                if (offsetX == 0 && offsetY == 0) continue;
                                int sampleX = x + offsetX;
                                if (sampleX < 0 || sampleX >= width) continue;

                                int sampleIndex = sampleY * width + sampleX;
                                if (!hasColor[sampleIndex]) continue;

                                red += pixels[sampleIndex].r;
                                green += pixels[sampleIndex].g;
                                blue += pixels[sampleIndex].b;
                                count++;
                            }
                        }

                        if (count == 0) continue;

                        nextPixels[index] = new Color32(
                            (byte)(red / count),
                            (byte)(green / count),
                            (byte)(blue / count),
                            0);
                        nextHasColor[index] = true;
                        changed = true;
                    }
                }

                Array.Copy(nextPixels, pixels, pixels.Length);
                hasColor = nextHasColor;
                if (!changed) break;
            }
        }

        private static void PatchAtlasFiles(string pngPath)
        {
            string directory = Path.GetDirectoryName(pngPath);
            string pngName = Path.GetFileName(pngPath);
            if (string.IsNullOrEmpty(directory)) return;

            foreach (string atlasPath in Directory.GetFiles(directory, "*.atlas*")
                         .Where(path => !path.EndsWith(".meta", StringComparison.OrdinalIgnoreCase)))
            {
                string text = File.ReadAllText(atlasPath);
                if (!text.Contains(pngName)) continue;

                string patchedText = text
                    .Replace("pma:true", "pma:false")
                    .Replace("pma: true", "pma: false");
                if (patchedText == text) continue;

                File.WriteAllText(atlasPath, patchedText);
                AssetDatabase.ImportAsset(atlasPath, ImportAssetOptions.ForceSynchronousImport);
            }
        }

        private static void SetImporter(string path)
        {
            if (!(AssetImporter.GetAtPath(path) is TextureImporter importer)) return;

            var sourceTexture = new Texture2D(2, 2, TextureFormat.RGBA32, false, false);
            sourceTexture.LoadImage(File.ReadAllBytes(path), false);
            int requiredMaxSize = Mathf.NextPowerOfTwo(Mathf.Max(sourceTexture.width, sourceTexture.height));
            UnityEngine.Object.DestroyImmediate(sourceTexture);

            importer.textureType = TextureImporterType.Default;
            importer.sRGBTexture = true;
            importer.alphaIsTransparency = false;
            importer.alphaSource = TextureImporterAlphaSource.FromInput;
            importer.npotScale = TextureImporterNPOTScale.None;
            importer.mipmapEnabled = false;
            importer.wrapMode = TextureWrapMode.Clamp;
            importer.filterMode = FilterMode.Bilinear;
            importer.textureCompression = TextureImporterCompression.Uncompressed;
            importer.maxTextureSize = Mathf.Clamp(requiredMaxSize, 32, 8192);
            SetPlatformUncompressed(importer, "WebGL", importer.maxTextureSize);
            if (string.IsNullOrEmpty(importer.userData) || !importer.userData.Contains(ConversionMarker))
            {
                importer.userData = string.IsNullOrWhiteSpace(importer.userData)
                    ? ConversionMarker
                    : $"{importer.userData};{ConversionMarker}";
            }
            importer.SaveAndReimport();
        }

        private static void SetPlatformUncompressed(TextureImporter importer, string platform, int maxTextureSize)
        {
            var settings = importer.GetPlatformTextureSettings(platform);
            settings.name = platform;
            settings.overridden = true;
            settings.maxTextureSize = maxTextureSize;
            settings.textureCompression = TextureImporterCompression.Uncompressed;
            settings.format = TextureImporterFormat.RGBA32;
            settings.crunchedCompression = false;
            importer.SetPlatformTextureSettings(settings);
        }

        private static void FixMaterials(string pngPath)
        {
            var texture = AssetDatabase.LoadAssetAtPath<Texture>(pngPath);
            string directory = Path.GetDirectoryName(pngPath)?.Replace('\\', '/');
            if (texture == null || string.IsNullOrEmpty(directory)) return;

            foreach (string guid in AssetDatabase.FindAssets("t:Material", new[] { directory }))
            {
                var material = AssetDatabase.LoadAssetAtPath<Material>(AssetDatabase.GUIDToAssetPath(guid));
                if (material == null || material.mainTexture != texture || !material.HasProperty(StraightAlphaProperty))
                    continue;

                material.SetFloat(StraightAlphaProperty, 1f);
                material.EnableKeyword(StraightAlphaKeyword);
                EditorUtility.SetDirty(material);
            }
        }

        private static void PatchLunaTextureRule(string pngPath)
        {
            const string lunaConfigPath = "luna.json";
            if (!File.Exists(lunaConfigPath)) return;

            var sourceTexture = new Texture2D(2, 2, TextureFormat.RGBA32, false, false);
            sourceTexture.LoadImage(File.ReadAllBytes(pngPath), false);
            int maxWidth = Mathf.NextPowerOfTwo(sourceTexture.width);
            int maxHeight = Mathf.NextPowerOfTwo(sourceTexture.height);
            UnityEngine.Object.DestroyImmediate(sourceTexture);

            string normalizedPath = pngPath.Replace('\\', '/');
            string[] lines = File.ReadAllLines(lunaConfigPath);
            int nameLine = Array.FindIndex(lines, line => line.Contains($"\"name\": \"{normalizedPath}\""));
            if (nameLine < 0)
            {
                Debug.LogWarning($"[Spine] Không tìm thấy texture override trong luna.json: {normalizedPath}");
                return;
            }

            for (int index = nameLine - 1; index >= 0 && !lines[index].TrimStart().StartsWith("{"); index--)
            {
                string indentation = lines[index].Substring(0, lines[index].Length - lines[index].TrimStart().Length);
                if (lines[index].Contains("\"maxWidth\""))
                    lines[index] = $"{indentation}\"maxWidth\": {maxWidth},";
                else if (lines[index].Contains("\"maxHeight\""))
                    lines[index] = $"{indentation}\"maxHeight\": {maxHeight},";
                else if (lines[index].Contains("\"compression\""))
                    lines[index] = $"{indentation}\"compression\": \"none\",";
            }

            File.WriteAllLines(lunaConfigPath, lines);
            Debug.Log($"[Spine] Đã tắt Luna texture compression cho {normalizedPath}.");
        }
    }
}

#endif
