using UnityEngine;
using UnityEngine.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using TMPro;

public static class HeaderUISetup
{
    [MenuItem("Tools/Header UI/Create or Update Header UI in Scene & Prefab")]
    public static void CreateOrUpdateHeader()
    {
        // 1. Ensure scene is open or find Canvas
        var canvas = Object.FindFirstObjectByType<Canvas>();
        if (canvas == null)
        {
            var canvasGo = GameObject.Find("Canvas");
            if (canvasGo != null) canvas = canvasGo.GetComponent<Canvas>();
        }

        if (canvas == null)
        {
            Debug.LogError("[HeaderUISetup] Canvas not found in scene!");
            return;
        }

        // 2. Load Fonts & Sprites
        TMP_FontAsset fontAsset = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>("Assets/TextMesh Pro/Fonts/MUSEOSANSROUNDED-1000 SDF.asset");
        if (fontAsset == null)
        {
            fontAsset = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>("Assets/TextMesh Pro/Resources/Fonts & Materials/LiberationSans SDF.asset");
        }

        Sprite progressBgSprite = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Levels/UI/progressbar_bg.png");
        Sprite progressFillSprite = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Levels/UI/progressbar_fill.png");
        Sprite clockCircleBgSprite = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Levels/UI/clock_circle_bg.png");

        Sprite clockSprite = null;
        Object[] clockAssets = AssetDatabase.LoadAllAssetsAtPath("Assets/_Levels/UI/clock.png");
        foreach (var a in clockAssets)
        {
            if (a is Sprite s)
            {
                clockSprite = s;
                break;
            }
        }

        // 3. Find or Create HeaderUI Root
        Transform existingHeader = canvas.transform.Find("HeaderUI");
        GameObject headerGo;
        if (existingHeader != null)
        {
            headerGo = existingHeader.gameObject;
            Undo.RegisterCompleteObjectUndo(headerGo, "Update Header UI");
            while (headerGo.transform.childCount > 0)
            {
                Object.DestroyImmediate(headerGo.transform.GetChild(0).gameObject);
            }
        }
        else
        {
            headerGo = new GameObject("HeaderUI", typeof(RectTransform));
            Undo.RegisterCreatedObjectUndo(headerGo, "Create Header UI");
            headerGo.transform.SetParent(canvas.transform, false);
            headerGo.transform.SetAsFirstSibling();
        }

        // Setup Root RectTransform (anchored top-center)
        RectTransform rootRect = headerGo.GetComponent<RectTransform>();
        rootRect.anchorMin = new Vector2(0.5f, 1f);
        rootRect.anchorMax = new Vector2(0.5f, 1f);
        rootRect.pivot = new Vector2(0.5f, 1f);
        rootRect.anchoredPosition = new Vector2(0f, -50f);
        rootRect.sizeDelta = new Vector2(720f, 180f);

        // Add or get LevelHeaderUI component
        LevelHeaderUI headerScript = headerGo.GetComponent<LevelHeaderUI>();
        if (headerScript == null) headerScript = headerGo.AddComponent<LevelHeaderUI>();

        // 4. Create Title Level (placeholder text for user to adjust in Unity)
        GameObject levelGo = new GameObject("Title_Level", typeof(RectTransform), typeof(TextMeshProUGUI));
        levelGo.transform.SetParent(headerGo.transform, false);
        RectTransform levelRect = levelGo.GetComponent<RectTransform>();
        levelRect.anchorMin = new Vector2(0.5f, 1f);
        levelRect.anchorMax = new Vector2(0.5f, 1f);
        levelRect.pivot = new Vector2(0.5f, 1f);
        levelRect.anchoredPosition = new Vector2(0f, -10f);
        levelRect.sizeDelta = new Vector2(500f, 42f);

        TextMeshProUGUI levelTmp = levelGo.GetComponent<TextMeshProUGUI>();
        if (fontAsset != null) levelTmp.font = fontAsset;
        levelTmp.fontSize = 36;
        levelTmp.fontStyle = FontStyles.Bold;
        levelTmp.alignment = TextAlignmentOptions.Center;
        levelTmp.color = new Color32(0x94, 0x1C, 0x12, 0xFF);
        levelTmp.text = "Level";

        // 5. Create Objective Title (placeholder text for user to adjust in Unity)
        GameObject titleGo = new GameObject("Title_Objective", typeof(RectTransform), typeof(TextMeshProUGUI));
        titleGo.transform.SetParent(headerGo.transform, false);
        RectTransform titleRect = titleGo.GetComponent<RectTransform>();
        titleRect.anchorMin = new Vector2(0.5f, 1f);
        titleRect.anchorMax = new Vector2(0.5f, 1f);
        titleRect.pivot = new Vector2(0.5f, 1f);
        titleRect.anchoredPosition = new Vector2(0f, -55f);
        titleRect.sizeDelta = new Vector2(500f, 48f);

        TextMeshProUGUI titleTmp = titleGo.GetComponent<TextMeshProUGUI>();
        if (fontAsset != null) titleTmp.font = fontAsset;
        titleTmp.fontSize = 42;
        titleTmp.fontStyle = FontStyles.Bold;
        titleTmp.alignment = TextAlignmentOptions.Center;
        titleTmp.color = new Color32(0x1A, 0x1A, 0x1A, 0xFF);
        titleTmp.text = "Title";

        // 6. Create Progress Bar Container (starts from 0, max is maxSteps)
        GameObject progressGo = new GameObject("ProgressBar", typeof(RectTransform));
        progressGo.transform.SetParent(headerGo.transform, false);
        RectTransform progressRect = progressGo.GetComponent<RectTransform>();
        progressRect.anchorMin = new Vector2(0.5f, 1f);
        progressRect.anchorMax = new Vector2(0.5f, 1f);
        progressRect.pivot = new Vector2(0.5f, 1f);
        progressRect.anchoredPosition = new Vector2(0f, -114f);
        progressRect.sizeDelta = new Vector2(380f, 40f);

        // 6a. Progress Bar Background
        GameObject progressBgGo = new GameObject("Background", typeof(RectTransform), typeof(Image));
        progressBgGo.transform.SetParent(progressGo.transform, false);
        RectTransform bgRect = progressBgGo.GetComponent<RectTransform>();
        bgRect.anchorMin = Vector2.zero;
        bgRect.anchorMax = Vector2.one;
        bgRect.offsetMin = Vector2.zero;
        bgRect.offsetMax = Vector2.zero;

        Image bgImage = progressBgGo.GetComponent<Image>();
        if (progressBgSprite != null)
        {
            bgImage.sprite = progressBgSprite;
            bgImage.type = Image.Type.Sliced;
        }
        bgImage.color = Color.white;

        // 6b. Fill Area with Mask
        GameObject fillAreaGo = new GameObject("FillArea", typeof(RectTransform), typeof(RectMask2D));
        fillAreaGo.transform.SetParent(progressGo.transform, false);
        RectTransform fillAreaRect = fillAreaGo.GetComponent<RectTransform>();
        fillAreaRect.anchorMin = Vector2.zero;
        fillAreaRect.anchorMax = Vector2.one;
        fillAreaRect.offsetMin = new Vector2(3.5f, 3.5f);
        fillAreaRect.offsetMax = new Vector2(-3.5f, -3.5f);

        // 6c. Fill Image (starts at 0 fill!)
        GameObject fillGo = new GameObject("Fill", typeof(RectTransform), typeof(Image));
        fillGo.transform.SetParent(fillAreaGo.transform, false);
        RectTransform fillRect = fillGo.GetComponent<RectTransform>();
        fillRect.anchorMin = Vector2.zero;
        fillRect.anchorMax = Vector2.one;
        fillRect.offsetMin = Vector2.zero;
        fillRect.offsetMax = Vector2.zero;

        Image fillImage = fillGo.GetComponent<Image>();
        if (progressFillSprite != null)
        {
            fillImage.sprite = progressFillSprite;
            fillImage.type = Image.Type.Filled;
            fillImage.fillMethod = Image.FillMethod.Horizontal;
            fillImage.fillOrigin = (int)Image.OriginHorizontal.Left;
            fillImage.fillAmount = 0f; // Bắt đầu từ 0!
        }
        fillImage.color = new Color32(0xF5, 0xB7, 0x38, 0xFF);

        // 6d. Step Text (starts at 0/7)
        GameObject stepTextGo = new GameObject("Text_Steps", typeof(RectTransform), typeof(TextMeshProUGUI));
        stepTextGo.transform.SetParent(progressGo.transform, false);
        RectTransform stepTextRect = stepTextGo.GetComponent<RectTransform>();
        stepTextRect.anchorMin = Vector2.zero;
        stepTextRect.anchorMax = Vector2.one;
        stepTextRect.offsetMin = Vector2.zero;
        stepTextRect.offsetMax = Vector2.zero;

        TextMeshProUGUI stepTmp = stepTextGo.GetComponent<TextMeshProUGUI>();
        if (fontAsset != null) stepTmp.font = fontAsset;
        stepTmp.fontSize = 26;
        stepTmp.fontStyle = FontStyles.Bold;
        stepTmp.alignment = TextAlignmentOptions.Center;
        stepTmp.color = Color.white;
        stepTmp.text = "0/7";

        // 7. Create Clock Object (Right side)
        GameObject clockGo = new GameObject("Clock_Object", typeof(RectTransform));
        clockGo.transform.SetParent(headerGo.transform, false);
        RectTransform clockRect = clockGo.GetComponent<RectTransform>();
        clockRect.anchorMin = new Vector2(0.5f, 1f);
        clockRect.anchorMax = new Vector2(0.5f, 1f);
        clockRect.pivot = new Vector2(0.5f, 0.5f);
        clockRect.anchoredPosition = new Vector2(255f, -85f);
        clockRect.sizeDelta = new Vector2(88f, 88f);

        // 7a. Clock White Background Circle
        GameObject clockBgGo = new GameObject("Clock_WhiteBG", typeof(RectTransform), typeof(Image));
        clockBgGo.transform.SetParent(clockGo.transform, false);
        RectTransform clockBgRect = clockBgGo.GetComponent<RectTransform>();
        clockBgRect.anchorMin = new Vector2(0.5f, 0.5f);
        clockBgRect.anchorMax = new Vector2(0.5f, 0.5f);
        clockBgRect.anchoredPosition = new Vector2(0f, 0f);
        clockBgRect.sizeDelta = new Vector2(62f, 62f);

        Image clockBgImg = clockBgGo.GetComponent<Image>();
        if (clockCircleBgSprite != null) clockBgImg.sprite = clockCircleBgSprite;
        clockBgImg.color = Color.white;

        // 7b. Clock Icon Frame
        GameObject clockIconGo = new GameObject("Clock_Icon", typeof(RectTransform), typeof(Image));
        clockIconGo.transform.SetParent(clockGo.transform, false);
        RectTransform clockIconRect = clockIconGo.GetComponent<RectTransform>();
        clockIconRect.anchorMin = Vector2.zero;
        clockIconRect.anchorMax = Vector2.one;
        clockIconRect.offsetMin = Vector2.zero;
        clockIconRect.offsetMax = Vector2.zero;

        Image clockIconImg = clockIconGo.GetComponent<Image>();
        if (clockSprite != null) clockIconImg.sprite = clockSprite;
        clockIconImg.color = Color.white;

        // 7c. Clock Seconds Text (starts at 00, user adjusts in Unity)
        GameObject clockTextGo = new GameObject("Text_Seconds", typeof(RectTransform), typeof(TextMeshProUGUI));
        clockTextGo.transform.SetParent(clockGo.transform, false);
        RectTransform clockTextRect = clockTextGo.GetComponent<RectTransform>();
        clockTextRect.anchorMin = new Vector2(0.5f, 0.5f);
        clockTextRect.anchorMax = new Vector2(0.5f, 0.5f);
        clockTextRect.anchoredPosition = new Vector2(0f, -1f);
        clockTextRect.sizeDelta = new Vector2(50f, 50f);

        TextMeshProUGUI clockTmp = clockTextGo.GetComponent<TextMeshProUGUI>();
        if (fontAsset != null) clockTmp.font = fontAsset;
        clockTmp.fontSize = 30;
        clockTmp.fontStyle = FontStyles.Bold;
        clockTmp.alignment = TextAlignmentOptions.Center;
        clockTmp.color = new Color32(0x1A, 0x1A, 0x1A, 0xFF);
        clockTmp.text = "00";

        // 8. Connect references in LevelHeaderUI
        SerializedObject so = new SerializedObject(headerScript);
        so.FindProperty("levelText").objectReferenceValue = levelTmp;
        so.FindProperty("titleText").objectReferenceValue = titleTmp;

        so.FindProperty("progressFillImage").objectReferenceValue = fillImage;
        so.FindProperty("progressStepText").objectReferenceValue = stepTmp;
        so.FindProperty("currentStep").intValue = 0; // Starts from 0!
        so.FindProperty("maxSteps").intValue = 7;    // Max steps
        so.FindProperty("stepFormat").stringValue = "{0}/{1}";
        so.FindProperty("showPercentageInstead").boolValue = false;

        so.FindProperty("clockObject").objectReferenceValue = clockGo;
        so.FindProperty("clockSecondsText").objectReferenceValue = clockTmp;
        so.FindProperty("remainingSeconds").intValue = 0;
        so.FindProperty("clockFormat").stringValue = "{0}";
        so.FindProperty("runCountdown").boolValue = true;

        so.ApplyModifiedProperties();
        headerScript.UpdateProgressUI();

        // 9. Save as Prefab
        string prefabPath = "Assets/_Levels/UI/HeaderUI.prefab";
        PrefabUtility.SaveAsPrefabAssetAndConnect(headerGo, prefabPath, InteractionMode.AutomatedAction);
        Debug.Log($"[HeaderUISetup] Successfully saved HeaderUI Prefab at: {prefabPath}");

        // 10. Save scene
        EditorSceneManager.MarkSceneDirty(canvas.gameObject.scene);
        EditorSceneManager.SaveScene(canvas.gameObject.scene);

        Selection.activeGameObject = headerGo;
        Debug.Log("[HeaderUISetup] Header UI setup completed!");
    }
}
