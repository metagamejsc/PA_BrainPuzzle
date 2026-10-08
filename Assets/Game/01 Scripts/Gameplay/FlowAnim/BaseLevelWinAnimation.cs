using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class BaseLevelWinAnimation : MonoBehaviour {
    public static BaseLevelWinAnimation Instance { get; private set; }

    public UnityEvent onLevelCompleteEvent = new UnityEvent();
    [SerializeField] private float delayTimeCallWin = 3f;
    [SerializeField] private float delayCallUnityEvent = 0f;

    void Awake() {
        Instance = this;
    }

    public virtual void HandleLevelComplete() {
        StartCoroutine(WinRoutine());
    }

    private IEnumerator WinRoutine() {
        if (delayCallUnityEvent > 0) {
            yield return new WaitForSeconds(delayCallUnityEvent);
        }
        onLevelCompleteEvent?.Invoke();
        Debug.Log("[BaseLevelWinAnimation] onLevelCompleteEvent invoked!");
    }
}
