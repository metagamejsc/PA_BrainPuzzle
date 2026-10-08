using System;
using System.Collections;
using UnityEngine;

public enum ItemId
{
    Clothes,
    Shoes,
    Gloves,
    Photo,
    Mop,
    Hammer
}

public class DraggableItem : MonoBehaviour
{
    [Header("Item Config")]
    public ItemId itemId;
    public TargetZoneType matchingZone;

    [Header("Visuals")]
    [SerializeField] private SpriteRenderer staticRenderer;
    [SerializeField] private SpriteRenderer dragRenderer;

    [Header("Drop Detection")]
    [Tooltip("Point (local to the drag sprite) that must land in the zone, e.g. the mop head. (0,0) = sprite pivot.")]
    [SerializeField] private Vector2 dropHotspot = Vector2.zero;
    [Tooltip("Also accept the drop when at least this fraction of the dragged sprite overlaps the zone. 0 = off.")]
    [Range(0f, 1f)] [SerializeField] private float minOverlap = 0.25f;

    private bool isDragging = false;
    private bool isSolved = false;
    private Camera mainCamera;
    private static DraggableItem activeDrag; // only one item can be dragged at a time
    public static bool IsAnyDragging => activeDrag != null;
    public static bool InputLocked; // set by the game controller once the level ends



    public Action<DraggableItem> OnDragStarted;
    public Action<DraggableItem, bool> OnDragEnded;

    private void Awake()
    {
        mainCamera = Camera.main;

        if (dragRenderer != null)
        {
            SetVisible(dragRenderer, false);
            dragRenderer.sortingOrder = 50;
        }
        SetVisible(staticRenderer, true);
    }

    private void OnDisable()
    {
        if (activeDrag == this) activeDrag = null;
    }

    private void Update()
    {
        if (isSolved) return;

        if (!isDragging && Input.GetMouseButtonDown(0))
        {
            if (!InputLocked && activeDrag == null && HitTest(GetPointerWorldPos()))
            {
                StartDrag();
            }
        }
        else if (isDragging && Input.GetMouseButton(0))
        {
            UpdateDrag();
        }
        else if (isDragging && Input.GetMouseButtonUp(0))
        {
            EndDrag();
        }
    }

    // 2D hit test: ignore Z so items placed at z = +/-0.1 are still clickable.
    private bool HitTest(Vector3 worldPos)
    {
        if (staticRenderer == null) return false;
        Bounds b = staticRenderer.bounds;
        worldPos.z = b.center.z;
        return b.Contains(worldPos);
    }

    // The static renderer may live on this same GameObject; deactivating it would disable
    // the whole item (and this script). Toggle the renderer instead in that case.
    private void SetVisible(SpriteRenderer r, bool visible)
    {
        if (r == null) return;
        if (r.gameObject == gameObject) r.enabled = visible;
        else r.gameObject.SetActive(visible);
    }

    private void OnMouseDown()
    {
        if (isSolved || isDragging) return;
        StartDrag();
    }

    private void OnMouseDrag()
    {
        if (!isDragging || isSolved) return;
        UpdateDrag();
    }

    private void OnMouseUp()
    {
        if (!isDragging || isSolved) return;
        EndDrag();
    }

    private void StartDrag()
    {
        isDragging = true;
        activeDrag = this;
        if (SoundManager.Instance != null) SoundManager.Instance.PlayTap();

        SetVisible(staticRenderer, false);
        if (dragRenderer != null)
        {
            SetVisible(dragRenderer, true);
            dragRenderer.transform.position = GetPointerWorldPos();
        }

        OnDragStarted?.Invoke(this);
    }

    private void UpdateDrag()
    {
        if (dragRenderer != null)
        {
            dragRenderer.transform.position = GetPointerWorldPos();
        }
    }

    private void EndDrag()
    {
        isDragging = false;
        if (activeDrag == this) activeDrag = null;

        Vector2 pointer = GetPointerWorldPos();
        Vector2 hotspot = GetHotspotWorldPos();

        DropTargetZone[] zones = FindObjectsOfType<DropTargetZone>();
        DropTargetZone hitZone = null;

        foreach (var z in zones)
        {
            if (z.zoneType != matchingZone) continue;

            bool hit = z.ContainsPoint(hotspot) || z.ContainsPoint(pointer);
            if (!hit && minOverlap > 0f && dragRenderer != null)
            {
                hit = z.OverlapFraction(dragRenderer.bounds) >= minOverlap;
            }

            if (hit)
            {
                hitZone = z;
                break;
            }
        }

        if (hitZone != null)
        {
            isSolved = true;
            SetVisible(dragRenderer, false);
            SetVisible(staticRenderer, false);
            OnDragEnded?.Invoke(this, true);
            gameObject.SetActive(false);
        }
        else
        {
            StartCoroutine(ReturnRoutine());
            OnDragEnded?.Invoke(this, false);
        }
    }

    private Vector2 GetHotspotWorldPos()
    {
        if (dragRenderer == null) return GetPointerWorldPos();
        return dragRenderer.transform.TransformPoint(dropHotspot);
    }

    private void OnDrawGizmosSelected()
    {
        SpriteRenderer r = dragRenderer != null ? dragRenderer : staticRenderer;
        if (r == null) return;
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireSphere(r.transform.TransformPoint(dropHotspot), 0.15f);
    }

    private IEnumerator ReturnRoutine()
    {
        if (dragRenderer != null)
        {
            Vector3 fromPos = dragRenderer.transform.position;
            float t = 0f;
            float duration = 0.2f;

            while (t < duration)
            {
                t += Time.deltaTime;
                dragRenderer.transform.position = Vector3.Lerp(fromPos, transform.position, t / duration);
                yield return null;
            }

            SetVisible(dragRenderer, false);
        }

        SetVisible(staticRenderer, true);
    }

    private Vector3 GetPointerWorldPos()
    {
        if (mainCamera == null) mainCamera = Camera.main;
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = -mainCamera.transform.position.z;
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(mousePos);
        worldPos.z = 0f;
        return worldPos;
    }
}
