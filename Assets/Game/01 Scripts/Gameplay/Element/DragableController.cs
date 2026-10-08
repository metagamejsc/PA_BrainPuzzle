using UnityEngine;

public class DragableController : MonoBehaviour {
    public static DragableController Instance { get; private set; }
    public GameObject RootDragableObject { get; private set; }

    void Awake() {
        Instance = this;
        GameObject go = new GameObject("DragableContainer");
        RectTransform rt = go.AddComponent<RectTransform>();
        go.transform.SetParent(transform, false);
        rt.anchorMin = Vector2.zero;
        rt.anchorMax = Vector2.one;
        rt.offsetMin = Vector2.zero;
        rt.offsetMax = Vector2.zero;
        rt.pivot = new Vector2(0.5f, 0.5f);
        go.transform.localPosition = Vector3.zero;
        go.transform.localScale = Vector3.one;
        go.transform.localRotation = Quaternion.identity;
        go.transform.SetAsLastSibling();
        RootDragableObject = go;
    }

    public GameObject GetRootDragableObject() {
        return RootDragableObject;
    }
}
