using Spine.Unity;
using UnityEngine;

public class Level86SkinController : MonoBehaviour {
    [SerializeField] private SkinPartToggle glasses;
    [SerializeField] private SkinPartToggle headphone;
    [SerializeField] private SkinPartToggle muixe;
    [SerializeField] private SkeletonGraphic[] skeletonGraphics;
    private bool isGlasses = true;
    private bool isHeadphone = true;
    private bool isMuixe = true;

    void Start() {
        SetSkin();
    }

    public void SetGlassesOpen() {
        isGlasses = false;
        SetSkin();
    }

    public void SetHeadphone(bool isOpen) {
        isHeadphone = isOpen;
        SetSkin();
    }

    public void SetMuixeOpen(bool isOpen) {
        isMuixe = isOpen;
        SetSkin();
    }

    void SetSkin() {
        if (glasses != null) {
            if (isGlasses) glasses.SetToSkin2();
            else glasses.SetToSkin1();
        }
        if (headphone != null) {
            if (isHeadphone) headphone.SetToSkin2();
            else headphone.SetToSkin1();
        }
        if (muixe != null) {
            if (isMuixe) muixe.SetToSkin1();
            else muixe.SetToSkin2();
        }
    }

    public void FreezeAnimation() {
        if (skeletonGraphics != null) {
            foreach (var skeletonGraphic in skeletonGraphics) {
                if (skeletonGraphic != null) {
                    skeletonGraphic.freeze = true;
                }
            }
        }
    }
}
