using System.Collections;
using UnityEngine;
public class PlayAudioClip : VisualAction {
    [SerializeField] private AudioClip clip;
    protected override IEnumerator OnExecuting() {
        if (clip != null) AudioManager.Instance?.PlaySFX(clip);
        yield return null;
    }
}