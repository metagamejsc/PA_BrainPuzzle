using Playable;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class Item : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IBeginDragHandler, IDragHandler,
    IEndDragHandler
{
    [Header("Item Behaviour")] [SerializeField]
    private ItemType _itemType;

    [SerializeField] private GameObject _normalVisual;
    [SerializeField] private GameObject _activeVisual;
    [SerializeField] private Girl _girl;
    [SerializeField] private SkeletonGraphic _skeletonGraphic;
    [SerializeField] private System.Collections.Generic.List<SpineAnimationData> _girlAnimations;

    [SpineSkin(dataField: "_skeletonGraphic")] [SerializeField]
    private string _girlSkinName;

    [Min(0f)] [SerializeField] private float _dropDetectionPadding = 30f;
    [SerializeField] private AudioClip _dropSound;

    private RectTransform _rectTransform;
    private RectTransform _dragPlane;
    private Canvas _canvas;
    private Transform _originalParent;
    private int _originalSiblingIndex;
    private Vector3 _originalWorldPosition;
    private Vector3 _pointerOffset;
    private bool _isDragging;
    private bool _isGirlSkinPreviewed;
    private string _previousGirlSkinName;

    private void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();
        _canvas = GetComponentInParent<Canvas>();
        _dragPlane = _canvas != null ? _canvas.transform as RectTransform : _rectTransform.parent as RectTransform;
        CacheStartState();
        SetActiveVisual(false);
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        GameController.Instance?.StopTutorialHand();
        SetActiveVisual(true);
        PreviewGirlSkin();
        AudioManager.Instance.PlaySound(_dropSound);
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        SetActiveVisual(false);
        if (!_isDragging) RevertGirlSkin();
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        _isDragging = true;
        CacheStartState();
        CachePointerOffset(eventData);
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (_dragPlane != null && RectTransformUtility.ScreenPointToWorldPointInRectangle(
                _dragPlane,
                eventData.position,
                GetEventCamera(eventData),
                out Vector3 pointerWorldPosition))
        {
            _rectTransform.position = pointerWorldPosition + _pointerOffset;
        }
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        SetActiveVisual(false);
        _isDragging = false;

        bool accepted = _itemType == ItemType.Microphone
            ? TryDropMicrophone(eventData)
            : TryDropOnTarget(eventData);

        if (accepted)
        {
            KeepGirlSkin();
            gameObject.SetActive(false);
            return;
        }

        RevertGirlSkin();
        ResetToStartState();
    }

    private void SetActiveVisual(bool active)
    {
        if (_normalVisual != null) _normalVisual.SetActive(!active);
        if (_activeVisual != null) _activeVisual.SetActive(active);
    }

    private bool TryDropMicrophone(PointerEventData eventData)
    {
        if (_girl == null || !IsPointerOverGirl(eventData)) return false;

        _girl.PlayAnimations(_girlAnimations);
        GameController.Instance?.PlayRandomTarget(_itemType);
        return true;
    }

    private bool IsPointerOverGirl(PointerEventData eventData)
    {
        RectTransform girlRect = _girl.transform as RectTransform;
        return girlRect != null && RectTransformUtility.RectangleContainsScreenPoint(
            girlRect,
            eventData.position,
            GetEventCamera(eventData));
    }

    private void PreviewGirlSkin()
    {
        if (_isGirlSkinPreviewed || _girl == null || string.IsNullOrEmpty(_girlSkinName)) return;

        string previousSkinName = _girl.CurrentSkinName;
        if (!_girl.SetSkin(_girlSkinName)) return;

        _previousGirlSkinName = previousSkinName;
        _isGirlSkinPreviewed = true;
    }

    private void RevertGirlSkin()
    {
        if (!_isGirlSkinPreviewed) return;

        _isGirlSkinPreviewed = false;
        _girl.RestoreSkin(_previousGirlSkinName);
    }

    private void KeepGirlSkin()
    {
        _isGirlSkinPreviewed = false;
    }

    private void CacheStartState()
    {
        _originalParent = _rectTransform.parent;
        _originalSiblingIndex = _rectTransform.GetSiblingIndex();
        _originalWorldPosition = _rectTransform.position;
    }

    private void CachePointerOffset(PointerEventData eventData)
    {
        _pointerOffset = Vector3.zero;
        if (_dragPlane == null) return;

        if (RectTransformUtility.ScreenPointToWorldPointInRectangle(
                _dragPlane,
                eventData.position,
                GetEventCamera(eventData),
                out Vector3 pointerWorldPosition))
        {
            _pointerOffset = _rectTransform.position - pointerWorldPosition;
        }
    }

    private Camera GetEventCamera(PointerEventData eventData)
    {
        if (_canvas != null && _canvas.renderMode == RenderMode.ScreenSpaceOverlay) return null;
        return eventData.pressEventCamera != null ? eventData.pressEventCamera : _canvas?.worldCamera;
    }

    private void ResetToStartState()
    {
        _rectTransform.SetParent(_originalParent, true);
        _rectTransform.SetSiblingIndex(_originalSiblingIndex);
        _rectTransform.position = _originalWorldPosition;
    }

    private bool TryDropOnTarget(PointerEventData eventData)
    {
        return GameController.Instance != null && GameController.Instance.TryDropOnTarget(
            _itemType,
            _rectTransform,
            eventData.position,
            GetEventCamera(eventData),
            _dropDetectionPadding);
    }
}

public enum ItemType
{
    Talisman,
    Scissors,
    SoySauce,
    Feather,
    Microphone,
    Shoes,
    Window
}