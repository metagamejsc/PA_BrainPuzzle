using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

public class SkinCombiner : MonoBehaviour {
    [Header("Skeleton Reference")]
    public SkeletonGraphic skeletonGraphic;

    [Header("Base Skin")]
    public string baseSkinName = "default";

    [Header("Debug")]
    public bool showDebugLog = false;

    private List<SkinPartToggle> registeredParts = new List<SkinPartToggle>();
    private Skin combinedSkin;

    private Skeleton CurrentSkeleton => skeletonGraphic != null ? skeletonGraphic.Skeleton : null;
    private SkeletonData CurrentSkeletonData => skeletonGraphic != null && skeletonGraphic.Skeleton != null ? skeletonGraphic.Skeleton.Data : null;

    void Awake() {
        if (skeletonGraphic == null) {
            skeletonGraphic = GetComponent<SkeletonGraphic>();
        }
    }

    public void RegisterPart(SkinPartToggle part) {
        if (part != null && !registeredParts.Contains(part)) {
            registeredParts.Add(part);
        }
    }

    public void UnregisterPart(SkinPartToggle part) {
        if (part != null && registeredParts.Contains(part)) {
            registeredParts.Remove(part);
            UpdateCombinedSkin();
        }
    }

    public void UpdateCombinedSkin() {
        if (CurrentSkeleton == null || CurrentSkeletonData == null) return;

        if (registeredParts.Count == 0) {
            var childParts = GetComponentsInChildren<SkinPartToggle>(true);
            foreach (var p in childParts) {
                RegisterPart(p);
            }
        }

        try {
            combinedSkin = new Skin("combined-skin");

            if (!string.IsNullOrEmpty(baseSkinName)) {
                Skin foundBaseSkin = CurrentSkeletonData.FindSkin(baseSkinName);
                if (foundBaseSkin != null) {
                    combinedSkin.AddSkin(foundBaseSkin);
                }
            }

            // Ensure driver's headphone attachment "tainghe" is available for animation
            Skin headphoneSkin = CurrentSkeletonData.FindSkin("headphone");
            if (headphoneSkin != null) {
                var slotData = CurrentSkeletonData.FindSlot("tainghe");
                if (slotData != null) {
                    int taingheSlot = slotData.Index;
                    var taingheAtt = headphoneSkin.GetAttachment(taingheSlot, "tainghe");
                    if (taingheAtt != null) {
                        combinedSkin.SetAttachment(taingheSlot, "tainghe", taingheAtt);
                    }
                }
            }

            for (int i = 0; i < registeredParts.Count; i++) {
                var part = registeredParts[i];
                if (part == null) continue;

                string currentPartSkin = part.CurrentActiveSkin;
                if (string.IsNullOrEmpty(currentPartSkin)) continue;

                Skin foundPartSkin = CurrentSkeletonData.FindSkin(currentPartSkin);
                if (foundPartSkin != null) {
                    combinedSkin.AddSkin(foundPartSkin);
                }
            }

            CurrentSkeleton.SetSkin(combinedSkin);
            CurrentSkeleton.SetSlotsToSetupPose();
            RefreshSkeleton();
        } catch (System.Exception e) {
            Debug.LogError($"[SkinCombiner] Error updating combined skin: {e.Message}");
        }
    }

    private void RefreshSkeleton() {
        if (CurrentSkeleton == null || skeletonGraphic == null) return;

        try {
            if (skeletonGraphic.AnimationState != null) {
                skeletonGraphic.AnimationState.Apply(CurrentSkeleton);
            }
            CurrentSkeleton.UpdateWorldTransform();

            if (skeletonGraphic.enabled) {
                skeletonGraphic.Update(0);
                skeletonGraphic.LateUpdate();
            }
        } catch (System.Exception e) {
            if (showDebugLog) {
                Debug.LogError($"[SkinCombiner] Error refreshing skeleton: {e.Message}");
            }
        }
    }

    public void ResetAllPartsToSkin1() {
        for (int i = 0; i < registeredParts.Count; i++) {
            if (registeredParts[i] != null) registeredParts[i].SetToSkin1();
        }
    }

    public void ResetAllPartsToSkin2() {
        for (int i = 0; i < registeredParts.Count; i++) {
            if (registeredParts[i] != null) registeredParts[i].SetToSkin2();
        }
    }

    public void ToggleAllParts() {
        for (int i = 0; i < registeredParts.Count; i++) {
            if (registeredParts[i] != null) registeredParts[i].ToggleSkin();
        }
    }
}
