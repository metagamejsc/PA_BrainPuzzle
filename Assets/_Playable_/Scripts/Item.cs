using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

[RequireComponent(typeof(RectTransform))]
public class Item : MonoBehaviour, IPointerDownHandler, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private List<ItemData> _data;
    [SerializeField] private int _dragSortingOrder = 5;

    private RectTransform _rectTransform;
    private RectTransform _dragPlane;
    private Canvas _canvas;
    private Canvas _itemCanvas;
    private Transform _originalParent;
    private int _originalSiblingIndex;
    private Vector3 _originalWorldPosition;
    private bool _isPlaced;
    private bool[] _usedData;
    private int _usedCount;
    private Vector3 _pointerOffset;
    private int _originalSortingOrder;
    private bool _originalOverrideSorting;
    private bool _hasCachedSortingOrder;

    private void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();
        _canvas = GetComponentInParent<Canvas>();
        _itemCanvas = GetComponent<Canvas>();
        if (_itemCanvas == null) _itemCanvas = gameObject.AddComponent<Canvas>();
        _dragPlane = _canvas != null ? _canvas.transform as RectTransform : _rectTransform.parent as RectTransform;
        _usedData = new bool[_data != null ? _data.Count : 0];
        CacheStartState();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (Girl.Instance != null && !Girl.Instance.CanReceiveItem) return;
        GameController.Instance?.StopTutorialHand();
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (_isPlaced) return;
        if (Girl.Instance != null && !Girl.Instance.CanReceiveItem) return;

        CacheStartState();
        CachePointerOffset(eventData);
        SetDraggingSortingOrder();
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (_isPlaced) return;
        if (Girl.Instance != null && !Girl.Instance.CanReceiveItem) return;

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
        if (_isPlaced) return;
        if (Girl.Instance != null && !Girl.Instance.CanReceiveItem) return;

        RestoreSortingOrder();

        if (_data == null || _usedCount >= _data.Count)
        {
            ResetToStartState();
            return;
        }

        if (!TryDropOnTarget(eventData, out int usedDataIndex))
        {
            ResetToStartState();
            return;
        }

        _usedData[usedDataIndex] = true;
        _usedCount++;
        if (_usedCount < _data.Count)
        {
            ResetToStartState();
        }
        else
        {
            CompleteDrop();
        }
    }

    private void CompleteDrop()
    {
        _isPlaced = true;
        gameObject.SetActive(false);
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

    private void SetDraggingSortingOrder()
    {
        if (_itemCanvas == null) return;

        _originalOverrideSorting = _itemCanvas.overrideSorting;
        _originalSortingOrder = _itemCanvas.sortingOrder;
        _hasCachedSortingOrder = true;
        _itemCanvas.overrideSorting = true;
        _itemCanvas.sortingOrder = _dragSortingOrder;
    }

    private void RestoreSortingOrder()
    {
        if (_itemCanvas == null || !_hasCachedSortingOrder) return;

        _itemCanvas.sortingOrder = _originalSortingOrder;
        _itemCanvas.overrideSorting = _originalOverrideSorting;
        _hasCachedSortingOrder = false;
    }

    private void ResetToStartState()
    {
        _rectTransform.SetParent(_originalParent, true);
        _rectTransform.SetSiblingIndex(_originalSiblingIndex);
        _rectTransform.position = _originalWorldPosition;
    }

    private bool TryDropOnTarget(PointerEventData eventData, out int usedDataIndex)
    {
        usedDataIndex = -1;
        if (EventSystem.current == null) return false;

        HashSet<Target> checkedTargets = new HashSet<Target>();
        List<Vector2> samplePositions = GetDropSamplePositions(eventData);

        for (int i = 0; i < samplePositions.Count; i++)
        {
            PointerEventData sampleEventData = new PointerEventData(EventSystem.current)
            {
                position = samplePositions[i]
            };

            List<RaycastResult> raycastResults = new List<RaycastResult>();
            EventSystem.current.RaycastAll(sampleEventData, raycastResults);

            foreach (RaycastResult result in raycastResults)
            {
                Target target = result.gameObject.GetComponentInParent<Target>();
                if (target == null || !checkedTargets.Add(target)) continue;

                for (int dataIndex = 0; dataIndex < _data.Count; dataIndex++)
                {
                    if (_usedData[dataIndex]) continue;
                    if (!target.TryAccept(_data[dataIndex])) continue;

                    usedDataIndex = dataIndex;
                    return true;
                }
            }
        }

        return false;
    }

    private List<Vector2> GetDropSamplePositions(PointerEventData eventData)
    {
        List<Vector2> positions = new List<Vector2> { eventData.position };
        Vector3[] corners = new Vector3[4];
        _rectTransform.GetWorldCorners(corners);

        Camera eventCamera = GetEventCamera(eventData);
        Vector3 center = (corners[0] + corners[2]) * 0.5f;
        positions.Add(RectTransformUtility.WorldToScreenPoint(eventCamera, center));

        for (int i = 0; i < corners.Length; i++)
        {
            Vector3 innerPoint = Vector3.Lerp(center, corners[i], 0.65f);
            positions.Add(RectTransformUtility.WorldToScreenPoint(eventCamera, innerPoint));
        }

        return positions;
    }

    [Serializable]
    public struct ItemData
    {
        public int id;
        public GirlStateChange stateChange;
        public AnimationStateTiming animationStateTiming;
        public ItemResult result;
    }

    [Serializable]
    public struct GirlStateChange
    {
        public bool changeBodyShape;
        public BodyShape bodyShape;
        public bool changeOutfit;
        public Outfit outfit;
        public bool changeRestraint;
        public Restraint restraint;
    }
}

public enum ItemResult
{
    Lose,
    Win,
}

public enum AnimationStateTiming
{
    BeforeStateChange,
    AfterStateChange
}
