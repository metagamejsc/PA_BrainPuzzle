using System.Collections;
using UnityEngine;

public class DragOut : VisualAction
{
    [SerializeField] private Dt.Area.BoxArea draggableArea;
    [SerializeField] private Dt.Area.BoxArea targetArea;

    private Vector3 initialPos;
    private bool isDragging = false;
    private bool completed = false;
    private Transform dragTransform;
    private SpriteRenderer dragRenderer;
    private bool initialized = false;

    private const string DraggingLayerName = "Interactable";
    private readonly Vector3 dragOffset = new Vector3(0f, 0.4f, 0f);

    private void Start()
    {
        Init();
    }

    private void Init()
    {
        if (initialized) return;

        if (draggableArea == null)
        {
            var d = transform.Find("DraggableArea");
            if (d != null) draggableArea = d.GetComponent<Dt.Area.BoxArea>();
        }

        if (targetArea == null)
        {
            var t = transform.Find("TargetArea");
            if (t != null) targetArea = t.GetComponent<Dt.Area.BoxArea>();
        }

        dragTransform = GetDragTransform();
        if (dragTransform != null)
        {
            initialPos = dragTransform.position;
            dragRenderer = dragTransform.GetComponent<SpriteRenderer>();
            if (dragRenderer == null)
                dragRenderer = dragTransform.GetComponentInChildren<SpriteRenderer>(true);

            // Initially glasses are rendered by Spine skin 'Girl_Cai Kinh'
            // Loose SpriteRenderer is hidden at rest!
            if (dragRenderer != null)
            {
                dragRenderer.enabled = false;
            }
        }

        var cols = GetComponentsInChildren<Collider2D>(true);
        foreach (var c in cols)
        {
            c.enabled = true;
        }

        initialized = true;
    }

    private Transform GetDragTransform()
    {
        var child = transform.Find("DraggableArea");
        if (child != null) return child;
        if (draggableArea != null) return draggableArea.transform;
        return transform;
    }

    private void Update()
    {
        if (completed) return;
        Init();
        HandleInput();
    }

    protected override IEnumerator OnExecuting()
    {
        Init();
        while (!completed)
        {
            yield return null;
        }
    }

    private Vector2 GetWorldMousePos()
    {
        Camera cam = Camera.main;
        if (cam == null) cam = FindObjectOfType<Camera>();
        if (cam == null) return Vector2.zero;

        Vector3 screenPos = Input.mousePosition;
        if (Input.touchCount > 0)
        {
            screenPos = Input.GetTouch(0).position;
        }
        screenPos.z = Mathf.Abs(cam.transform.position.z);
        return cam.ScreenToWorldPoint(screenPos);
    }

    private void HandleInput()
    {
        bool pointerDown = Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
        bool pointerStay = Input.GetMouseButton(0) || (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Stationary));
        bool pointerUp   = Input.GetMouseButtonUp(0) || (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Ended || Input.GetTouch(0).phase == TouchPhase.Canceled));

        Vector2 mouseWorld = GetWorldMousePos();

        if (pointerDown && !DragController.IsDragging)
        {
            if (HitTest(mouseWorld))
            {
                DragController.IsDragging = true;
                DragController.CurrentDraggable = this;
                isDragging = true;

                // Remove glasses from Spine character immediately so it doesn't double-render
                var mixer = SpineSkinMixer.Instance;
                if (mixer == null) mixer = FindObjectOfType<SpineSkinMixer>();
                mixer?.RemoveGlasses();

                // Show drag sprite on top layer
                if (dragRenderer != null)
                {
                    dragRenderer.enabled = true;
                    dragRenderer.sortingLayerName = DraggingLayerName;
                    dragRenderer.sortingOrder = 100;
                }

                UpdateDraggingPosition(mouseWorld);

                AudioManager.Instance?.PlaySFX(AudioManager.Instance?.TapClip);
                AudioManager.Instance?.UnlockWebAudio();
            }
        }
        else if (pointerStay && isDragging && DragController.CurrentDraggable == (object)this)
        {
            UpdateDraggingPosition(mouseWorld);
        }
        else if (pointerUp && isDragging && DragController.CurrentDraggable == (object)this)
        {
            isDragging = false;
            DragController.IsDragging = false;
            DragController.CurrentDraggable = null;

            // Check if pulled away from face by > 0.8f
            if (Vector2.Distance(dragTransform.position, initialPos) > 0.8f)
            {
                completed = true;
                if (dragRenderer != null) dragRenderer.enabled = false;
                if (dragTransform != null) dragTransform.gameObject.SetActive(false);
                gameObject.SetActive(false);

                AudioManager.Instance?.PlayVoiceByStepName("Glasses");
                Level1002Controller.Instance?.StepCompleted("Glasses");
            }
            else
            {
                // Released near face -> restore to Spine
                if (dragTransform != null) dragTransform.position = initialPos;
                if (dragRenderer != null) dragRenderer.enabled = false;

                var mixer = SpineSkinMixer.Instance;
                if (mixer == null) mixer = FindObjectOfType<SpineSkinMixer>();
                mixer?.RestoreGlasses();
            }
        }
    }

    private void UpdateDraggingPosition(Vector2 mouseWorld)
    {
        if (dragTransform != null)
        {
            dragTransform.position = new Vector3(mouseWorld.x + dragOffset.x, mouseWorld.y + dragOffset.y, initialPos.z);
        }
    }

    private bool HitTest(Vector2 worldPos)
    {
        if (dragTransform != null)
        {
            var cols = dragTransform.GetComponentsInChildren<Collider2D>();
            foreach (var c in cols)
            {
                if (c != null && c.enabled && c.OverlapPoint(worldPos))
                    return true;
            }
        }

        if (draggableArea != null && draggableArea.Contains(worldPos))
            return true;

        if (Vector2.Distance(initialPos, worldPos) < 1.2f)
            return true;

        return false;
    }
}
