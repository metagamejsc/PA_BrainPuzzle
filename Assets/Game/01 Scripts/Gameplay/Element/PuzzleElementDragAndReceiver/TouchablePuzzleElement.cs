using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class TouchablePuzzleElement : BasePuzzleElement, IPointerClickHandler, IPointerDownHandler, IPointerUpHandler {
    [SerializeField] private GameObject[] enableGO = new GameObject[0];
    [SerializeField] private GameObject[] disableGO = new GameObject[0];
    [SerializeField] private GiveElementType elementType = GiveElementType.Normal;
    [SerializeField] private bool callPuzzleStepCompleted = true;
    [SerializeField] private UnityEvent onTouchEvent = new UnityEvent();

    public UnityEvent OnTouchEvent => onTouchEvent;
    public bool IsTrap => elementType == GiveElementType.Trap;

    private Vector2 pointerDownPos;
    private bool isPointerDown = false;

    public virtual void OnPointerDown(PointerEventData eventData) {
        if (LevelConfig.Instance != null) LevelConfig.Instance.EnsureBGMPlaying();
        if (!IsInteractable || _isCompleted) return;
        pointerDownPos = eventData.position;
        isPointerDown = true;
    }

    public virtual void OnPointerUp(PointerEventData eventData) {
        if (!isPointerDown) return;
        isPointerDown = false;
        if (!IsInteractable || _isCompleted) return;
        if (Vector2.Distance(eventData.position, pointerDownPos) < 60f) {
            HandleTouch();
        }
    }

    public virtual void OnPointerClick(PointerEventData eventData) {
        if (!IsInteractable || _isCompleted) return;
        HandleTouch();
    }

    public virtual void HandleTouch() {
        if (!IsInteractable || _isCompleted) return;
        _isCompleted = true;

        for (int i = 0; i < enableGO.Length; i++) {
            if (enableGO[i] != null) enableGO[i].SetActive(true);
        }
        for (int i = 0; i < disableGO.Length; i++) {
            if (disableGO[i] != null) disableGO[i].SetActive(false);
        }

        IncreaseState();

        LevelSoundFX.PlayClickSound();
        onTouchEvent?.Invoke();

        if (callPuzzleStepCompleted && LevelConfig.Instance != null) {
            LevelConfig.Instance.OnStepCompleted();
        }
    }
}
