using UnityEngine;

public class LevelLauncher : MonoBehaviour {
    [SerializeField] private GameObject levelPrefab;

    void Awake() {
        if (levelPrefab != null && transform.childCount == 0) {
            GameObject lvl = Instantiate(levelPrefab, transform);
            lvl.name = levelPrefab.name;
            var rt = lvl.GetComponent<RectTransform>();
            if (rt != null) {
                rt.anchoredPosition = Vector2.zero;
                rt.localScale = Vector3.one;
            }
        }
    }
}
