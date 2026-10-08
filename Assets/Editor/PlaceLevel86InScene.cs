using UnityEditor;
using UnityEngine;
using UnityEditor.SceneManagement;

[InitializeOnLoad]
public static class PlaceLevel86InScene {
    static PlaceLevel86InScene() {
        EditorApplication.delayCall += Execute;
    }

    [MenuItem("Tools/Put Level86 On Scene")]
    public static void Execute() {
        // Ensure SampleScene is active
        var activeScene = EditorSceneManager.GetActiveScene();
        
        // Find Canvas in active scene
        GameObject canvas = GameObject.Find("Canvas");
        if (canvas == null) {
            Canvas canvasComp = Object.FindObjectOfType<Canvas>();
            if (canvasComp != null) canvas = canvasComp.gameObject;
        }

        if (canvas == null) {
            Debug.LogWarning("[PlaceLevel86InScene] Canvas not found in scene!");
            return;
        }

        // Remove LevelLauncher component if present on Canvas
        var launcher = canvas.GetComponent<LevelLauncher>();
        if (launcher != null) {
            Object.DestroyImmediate(launcher);
        }

        // Check if Level86 already exists under Canvas
        Transform existing = canvas.transform.Find("Level86");
        if (existing != null) {
            Debug.Log("[PlaceLevel86InScene] Level86 already exists under Canvas.");
            return;
        }

        // Load Level86 prefab
        GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/Game/07 Prefabs/Gameplay/Levels/Level86.prefab");
        if (prefab == null) {
            Debug.LogError("[PlaceLevel86InScene] Prefab not found at Assets/Game/07 Prefabs/Gameplay/Levels/Level86.prefab");
            return;
        }

        // Instantiate under Canvas
        GameObject instance = (GameObject)PrefabUtility.InstantiatePrefab(prefab, canvas.transform);
        instance.name = "Level86";
        
        RectTransform rt = instance.GetComponent<RectTransform>();
        if (rt != null) {
            rt.anchoredPosition = Vector2.zero;
            rt.localPosition = Vector3.zero;
            rt.localScale = Vector3.one;
        }

        // Unpack prefab completely so all objects exist directly in scene
        PrefabUtility.UnpackPrefabInstance(instance, PrefabUnpackMode.Completely, InteractionMode.AutomatedAction);

        // Mark scene dirty and save
        EditorSceneManager.MarkSceneDirty(activeScene);
        EditorSceneManager.SaveScene(activeScene);

        Debug.Log("[PlaceLevel86InScene] Successfully placed all Level86 objects onto Canvas in the scene!");
    }
}
