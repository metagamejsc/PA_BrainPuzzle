using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[RequireComponent(typeof(CanvasGroup))]
public class DraggablePuzzleElement : BaseDraggablePuzzleElement {
    [SerializeField] private bool canDragWhenNotInteractable = false;
    [SerializeField] private bool callPuzzleStepCompleted = true;

    [SerializeField] private UnityEvent onDragStartEvent = new UnityEvent();
    [SerializeField] private UnityEvent onDragSuccessEvent = new UnityEvent();
    [SerializeField] private UnityEvent onDragFailureEvent = new UnityEvent();
    [SerializeField] private UnityEvent onReturnToStartEvent = new UnityEvent();

    public new UnityEvent OnDragStartEvent => onDragStartEvent;
    public UnityEvent OnReturnToStartEvent => onReturnToStartEvent;
    public UnityEvent OnDragSuccessEvent => onDragSuccessEvent;

    private CanvasGroup canvasGroup;
    private RectTransform rectTransform;
    private Transform originalParent;
    private int startSiblingIndex;
    private Vector3 startLocalScale;
    private Quaternion startLocalRotation;
    private Vector2 dragOffset;
    private Vector2 startPointerPos;
    private Coroutine returnCoroutine;
    private float returnToStartDuration = 0.2f;

    protected override void Awake() {
        base.Awake();
        canvasGroup = GetComponent<CanvasGroup>();
        rectTransform = GetComponent<RectTransform>();

        if (canvasGroup != null) {
            canvasGroup.alpha = 1f;
            canvasGroup.blocksRaycasts = true;
        }

        originalParent = transform.parent;
        startSiblingIndex = transform.GetSiblingIndex();
        startPosition = rectTransform.anchoredPosition;
        startLocalScale = transform.localScale;
        startLocalRotation = transform.localRotation;
    }

    private Camera GetEventCamera(PointerEventData eventData) {
        if (eventData != null && eventData.pressEventCamera != null) {
            return eventData.pressEventCamera;
        }
        Canvas canvas = GetComponentInParent<Canvas>();
        if (canvas != null && canvas.renderMode != RenderMode.ScreenSpaceOverlay) {
            return canvas.worldCamera != null ? canvas.worldCamera : Camera.main;
        }
        return null;
    }

    public override void OnPointerDown(PointerEventData eventData) {
        base.OnPointerDown(eventData);
        if (!IsInteractable || _isCompleted) return;
        startPointerPos = eventData.position;
    }

    public override void OnPointerClick(PointerEventData eventData) {
        base.OnPointerClick(eventData);
        if (!IsInteractable || _isCompleted) return;
        if (!isDragging) {
            StartCoroutine(ClickFeedbackRoutine());
        }
    }

    private IEnumerator ClickFeedbackRoutine() {
        Vector3 baseScale = startLocalScale;
        Vector3 punchScale = baseScale * 1.08f;
        float dur = 0.08f;
        float el = 0f;
        while (el < dur) {
            el += Time.deltaTime;
            transform.localScale = Vector3.Lerp(baseScale, punchScale, el / dur);
            yield return null;
        }
        el = 0f;
        while (el < dur) {
            el += Time.deltaTime;
            transform.localScale = Vector3.Lerp(punchScale, baseScale, el / dur);
            yield return null;
        }
        transform.localScale = baseScale;
    }

    public override void OnBeginDrag(PointerEventData eventData) {
        if (LevelConfig.Instance != null) LevelConfig.Instance.EnsureBGMPlaying();
        if (!IsInteractable || _isCompleted) return;

        startPosition = rectTransform.anchoredPosition;
        startLocalScale = transform.localScale;
        startLocalRotation = transform.localRotation;
        originalParent = transform.parent;
        startSiblingIndex = transform.GetSiblingIndex();
        startPointerPos = eventData.position;

        isDragging = true;

        if (canvasGroup != null) {
            canvasGroup.alpha = 1f;
            canvasGroup.blocksRaycasts = false;
        }

        if (DragableController.Instance != null && DragableController.Instance.RootDragableObject != null) {
            transform.SetParent(DragableController.Instance.RootDragableObject.transform, true);
            transform.SetAsLastSibling();
        } else {
            transform.SetAsLastSibling();
        }

        Camera cam = GetEventCamera(eventData);
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            cam,
            out Vector2 localPoint)) {
            dragOffset = (Vector2)rectTransform.localPosition - localPoint;
        } else {
            dragOffset = Vector2.zero;
        }

        onDragStartEvent?.Invoke();
    }

    public override void OnDrag(PointerEventData eventData) {
        if (!isDragging) return;

        Camera cam = GetEventCamera(eventData);
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            cam,
            out Vector2 localPoint)) {
            rectTransform.localPosition = new Vector3(localPoint.x + dragOffset.x, localPoint.y + dragOffset.y, rectTransform.localPosition.z);
        }
    }

    public override void OnEndDrag(PointerEventData eventData) {
        if (!isDragging) return;
        isDragging = false;

        if (canvasGroup != null) {
            canvasGroup.alpha = 1f;
            canvasGroup.blocksRaycasts = true;
        }

        float dragDistance = Vector2.Distance(startPointerPos, eventData.position);
        if (dragDistance < minDragDistanceThreshold) {
            Debug.Log($"[DraggablePuzzleElement] Drag distance ({dragDistance:F1}px) < threshold ({minDragDistanceThreshold}px). Cancelling drop for '{ElementName}'.");
            if (returnToStartPositionOnFailure) {
                ReturnToStartPositionWithAnimation();
            } else {
                RestoreOriginalTransform();
            }
            OnDragEndEvent?.Invoke();
            return;
        }

        BaseReceiverElement targetReceiver = FindBestReceiver(eventData);

        if (targetReceiver != null) {
            Debug.Log($"[DraggablePuzzleElement] Successfully dropped '{ElementName}' onto '{targetReceiver.ElementName}'");
            HandleDropSuccess(targetReceiver);
        } else {
            Debug.Log($"[DraggablePuzzleElement] No valid receiver found for '{ElementName}' at position {eventData.position}");
            if (returnToStartPositionOnFailure) {
                ReturnToStartPositionWithAnimation();
            } else {
                RestoreOriginalTransform();
            }
        }

        OnDragEndEvent?.Invoke();
    }

    private BaseReceiverElement FindBestReceiver(PointerEventData eventData) {
        var allReceivers = UnityEngine.Object.FindObjectsOfType<BaseReceiverElement>();
        if (allReceivers == null || allReceivers.Length == 0) return null;

        BaseReceiverElement bestReceiver = null;
        float bestDistance = float.MaxValue;
        Camera cam = GetEventCamera(eventData);

        for (int i = 0; i < allReceivers.Length; i++) {
            var receiver = allReceivers[i];
            if (receiver == null || !receiver.gameObject.activeInHierarchy) continue;

            // Check compatibility first
            if (!CanDropOnto(receiver) || !receiver.CanReceive(this)) continue;

            bool isInside = false;

            // Check 1: RectTransform screen point check (Robust & camera-aware)
            var rect = receiver.GetComponent<RectTransform>();
            if (rect != null) {
                if (RectTransformUtility.RectangleContainsScreenPoint(rect, eventData.position, cam)) {
                    isInside = true;
                } else if (RectTransformUtility.ScreenPointToLocalPointInRectangle(rect, eventData.position, cam, out Vector2 localPt)) {
                    var boxCol = receiver.GetComponent<BoxCollider2D>();
                    Vector2 size = (boxCol != null && boxCol.size.x > 0 && boxCol.size.y > 0)
                        ? boxCol.size
                        : new Vector2(Mathf.Max(rect.rect.width, 200f), Mathf.Max(rect.rect.height, 300f));
                    Vector2 offset = boxCol != null ? boxCol.offset : Vector2.zero;

                    float halfW = size.x * 0.55f;
                    float halfH = size.y * 0.55f;

                    if (Mathf.Abs(localPt.x - offset.x) <= halfW && Mathf.Abs(localPt.y - offset.y) <= halfH) {
                        isInside = true;
                    }
                }
            }

            // Check 2: World space BoxCollider2D check with correct plane distance
            if (!isInside && cam != null) {
                var col = receiver.GetComponent<BoxCollider2D>();
                if (col != null) {
                    float distToPlane = Mathf.Abs(receiver.transform.position.z - cam.transform.position.z);
                    Vector3 screenPointWithZ = new Vector3(eventData.position.x, eventData.position.y, distToPlane);
                    Vector3 realWorldPoint = cam.ScreenToWorldPoint(screenPointWithZ);
                    if (col.OverlapPoint((Vector2)realWorldPoint)) {
                        isInside = true;
                    }
                }
            }

            // Check 3: Screen distance check within receiver extent
            Vector2 receiverScreenPos = RectTransformUtility.WorldToScreenPoint(cam, receiver.transform.position);
            float dist = Vector2.Distance(eventData.position, receiverScreenPos);

            if (!isInside) {
                var col = receiver.GetComponent<BoxCollider2D>();
                float allowedRadius = col != null ? Mathf.Min(col.size.x, col.size.y) * 0.5f : 150f;
                if (dist <= allowedRadius) {
                    isInside = true;
                }
            }

            if (isInside) {
                if (dist < bestDistance) {
                    bestDistance = dist;
                    bestReceiver = receiver;
                }
            }
        }

        return bestReceiver;
    }

    private void RestoreOriginalTransform() {
        transform.SetParent(originalParent, true);
        transform.SetSiblingIndex(startSiblingIndex);
        transform.localScale = startLocalScale;
        transform.localRotation = startLocalRotation;
    }

    private void HandleDropSuccess(BaseReceiverElement receiver) {
        if (_isCompleted) return;
        _isCompleted = true;
        RestoreOriginalTransform();

        OnDroppedOnto(receiver);

        IncreaseState();

        if (callPuzzleStepCompleted && LevelConfig.Instance != null) {
            LevelConfig.Instance.OnStepCompleted();
        }

        LevelSoundFX.PlayCorrectSound();
        onDragSuccessEvent?.Invoke();
        gameObject.SetActive(false);
    }

    private void ReturnToStartPositionWithAnimation() {
        RestoreOriginalTransform();

        if (returnCoroutine != null) StopCoroutine(returnCoroutine);
        returnCoroutine = StartCoroutine(SmoothReturnRoutine());
    }

    private IEnumerator SmoothReturnRoutine() {
        Vector2 current = rectTransform.anchoredPosition;
        float elapsed = 0f;

        while (elapsed < returnToStartDuration) {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / returnToStartDuration);
            t = Mathf.Sin(t * Mathf.PI * 0.5f);
            rectTransform.anchoredPosition = Vector2.Lerp(current, startPosition, t);
            yield return null;
        }

        rectTransform.anchoredPosition = startPosition;
        onReturnToStartEvent?.Invoke();
        returnCoroutine = null;
    }
}
