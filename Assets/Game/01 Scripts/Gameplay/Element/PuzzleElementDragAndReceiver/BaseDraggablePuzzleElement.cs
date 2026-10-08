using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class BaseDraggablePuzzleElement : BaseDraggableElement, IBeginDragHandler, IDragHandler, IEndDragHandler, IPointerDownHandler, IPointerUpHandler, IPointerClickHandler {
    [SerializeField] protected bool canDrag = true;
    [SerializeField] protected bool returnToStartPositionOnFailure = true;
    [SerializeField] protected float maxRaycastDistance = 100f;
    [SerializeField] private GiveElementType elementType = GiveElementType.Normal;
    [SerializeField] protected float minDragDistanceThreshold = 40f;

    public bool IsCompleted => _isCompleted;
    public bool IsTrap => elementType == GiveElementType.Trap;

    public UnityEvent OnDragStartEvent = new UnityEvent();
    public UnityEvent OnDragEndEvent = new UnityEvent();
    public UnityEvent OnDragFailureEvent = new UnityEvent();

    protected bool isDragging = false;
    protected bool hasPointerDown = false;
    protected Vector2 pointerDownPosition;
    protected Vector2 startPosition;
    protected Camera mainCamera;

    protected virtual void Awake() {
        mainCamera = Camera.main;
    }

    public virtual void OnPointerDown(PointerEventData eventData) {
        if (LevelConfig.Instance != null) LevelConfig.Instance.EnsureBGMPlaying();
        if (!IsInteractable || _isCompleted) return;
        pointerDownPosition = eventData.position;
        hasPointerDown = true;
    }

    public virtual void OnPointerUp(PointerEventData eventData) {
        hasPointerDown = false;
    }

    public virtual void OnPointerClick(PointerEventData eventData) {
        // Chỉ là click tại chỗ, không xử lý hoàn thành step ở đây
    }

    public virtual void OnBeginDrag(PointerEventData eventData) {}
    public virtual void OnDrag(PointerEventData eventData) {}
    public virtual void OnEndDrag(PointerEventData eventData) {}

    protected virtual void ReturnToStartPosition() {
        var rt = transform as RectTransform;
        if (rt != null) rt.anchoredPosition = startPosition;
    }
}
