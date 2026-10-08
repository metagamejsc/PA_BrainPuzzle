using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public enum ElementActionType {
    RunSpineSkeletonAnimation,
    EnableObject,
    DisableObject,
    UnityEvent
}

[Serializable]
public class ElementAction {
    public ElementActionType actionType;
    public float delay;

    // RunSpineSkeletonAnimation
    public Spine.Unity.SkeletonGraphic skeletonGraphic;
    public List<SkeletonAnimationInfo> animations = new List<SkeletonAnimationInfo>();

    // EnableObject / DisableObject
    public GameObject[] targetObjects = new GameObject[0];

    // UnityEvent
    public UnityEvent eventAction = new UnityEvent();

    public IEnumerator Execute(MonoBehaviour runner = null) {
        if (delay > 0) yield return new WaitForSeconds(delay);

        switch (actionType) {
            case ElementActionType.RunSpineSkeletonAnimation:
                if (skeletonGraphic == null || animations == null || animations.Count == 0) yield break;

                if (skeletonGraphic.AnimationState == null) {
                    skeletonGraphic.Initialize(false);
                }

                for (int i = 0; i < animations.Count; i++) {
                    var info = animations[i];
                    if (info == null || string.IsNullOrEmpty(info.animationName)) continue;

                    skeletonGraphic.timeScale = info.timeScale;
                    info.onAnimationStart?.Invoke();

                    if (info.isLoopWithSecond) {
                        skeletonGraphic.AnimationState.SetAnimation(0, info.animationName, true);
                        yield return new WaitForSeconds(info.timeLoopSecond);
                        info.onAnimationComplete?.Invoke();
                    } else if (info.isLoop) {
                        skeletonGraphic.AnimationState.SetAnimation(0, info.animationName, true);
                        info.onAnimationComplete?.Invoke();
                        break;
                    } else {
                        bool isCompleted = false;
                        var trackEntry = skeletonGraphic.AnimationState.SetAnimation(0, info.animationName, false);
                        if (trackEntry != null) {
                            trackEntry.Complete += (track) => {
                                isCompleted = true;
                            };

                            float duration = trackEntry.Animation != null ? trackEntry.Animation.Duration : 1f;
                            float timer = 0f;
                            while (!isCompleted && timer < duration + 0.5f) {
                                timer += Time.deltaTime;
                                yield return null;
                            }
                        }
                        info.onAnimationComplete?.Invoke();
                    }
                }
                break;

            case ElementActionType.EnableObject:
                if (targetObjects != null) {
                    for (int i = 0; i < targetObjects.Length; i++) {
                        if (targetObjects[i] != null) targetObjects[i].SetActive(true);
                    }
                }
                break;

            case ElementActionType.DisableObject:
                if (targetObjects != null) {
                    for (int i = 0; i < targetObjects.Length; i++) {
                        if (targetObjects[i] != null) targetObjects[i].SetActive(false);
                    }
                }
                break;

            case ElementActionType.UnityEvent:
                eventAction?.Invoke();
                break;
        }
    }
}
