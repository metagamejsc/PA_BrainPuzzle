using Spine;
using Spine.Unity;
using UnityEngine;

public class SpineEventSfxPlayer : MonoBehaviour
{
    [SerializeField]
    private SkeletonAnimation skeletonAnimation;
    [SerializeField]
    private AudioSource audioSource;
    [SerializeField]
    private AudioClip audioClip;
    [SerializeField, SpineEvent(dataField: nameof(skeletonAnimation))]
    private string spineEventName;

    private void OnEnable()
    {
        this.skeletonAnimation.AnimationState.Event += HandleSpineEvent;
    }

    private void HandleSpineEvent(TrackEntry trackEntry, Spine.Event e)
    {
        if (e?.Data == null) return;
        string eventName = e.Data.Name;
        if (this.spineEventName != eventName) return;
        this.audioSource.PlayOneShot(this.audioClip);
    }

    private void OnDisable()
    {
        this.skeletonAnimation.AnimationState.Event -= HandleSpineEvent;
    }
}