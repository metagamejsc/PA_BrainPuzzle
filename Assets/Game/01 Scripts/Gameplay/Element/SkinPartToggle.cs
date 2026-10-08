using Spine.Unity;
using UnityEngine;

public class SkinPartToggle : MonoBehaviour {
    public enum DefaultSkin {
        Skin1,
        Skin2
    }

    [Header("Reference")]
    public SkinCombiner skinCombiner;
    public SkeletonGraphic skeletonGraphicReference;

    [Header("Skin Settings")]
    public string skin1 = "default";
    public string skin2 = "default";

    [Header("Default Settings")]
    public bool setDefaultOnAwake = true;
    public DefaultSkin defaultSkin = DefaultSkin.Skin1;

    [Header("Debug")]
    public string partName = "Part";

    private int currentSkinIndex = 0;

    public string CurrentActiveSkin => currentSkinIndex == 0 ? skin1 : skin2;

    void Awake() {
        if (skinCombiner == null) {
            skinCombiner = GetComponentInParent<SkinCombiner>();
            if (skinCombiner == null) {
                skinCombiner = FindObjectOfType<SkinCombiner>();
            }
        }

        if (skinCombiner != null) {
            if (skeletonGraphicReference == null) {
                skeletonGraphicReference = skinCombiner.skeletonGraphic;
            }
            skinCombiner.RegisterPart(this);
        }

        if (setDefaultOnAwake) {
            currentSkinIndex = defaultSkin == DefaultSkin.Skin1 ? 0 : 1;
        }
    }

    void Start() {
        if (setDefaultOnAwake && skinCombiner != null) {
            skinCombiner.UpdateCombinedSkin();
        }
    }

    void OnDestroy() {
        if (skinCombiner != null) {
            skinCombiner.UnregisterPart(this);
        }
    }

    public void ToggleSkin() {
        currentSkinIndex = currentSkinIndex == 0 ? 1 : 0;
        NotifyCombiner();
    }

    public void SetSkin(int index) {
        if (index < 0 || index > 1) return;
        currentSkinIndex = index;
        NotifyCombiner();
    }

    public void SetToSkin1() => SetSkin(0);
    public void SetToSkin2() => SetSkin(1);

    private void NotifyCombiner() {
        if (skinCombiner != null) {
            skinCombiner.UpdateCombinedSkin();
        }
    }

    public string GetCurrentSkinName() => currentSkinIndex == 0 ? skin1 : skin2;
    public int GetCurrentSkinIndex() => currentSkinIndex;
    public bool IsUsingSkin1() => currentSkinIndex == 0;
    public bool IsUsingSkin2() => currentSkinIndex == 1;
}
