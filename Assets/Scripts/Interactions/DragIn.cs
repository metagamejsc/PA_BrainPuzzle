using System.Collections;
using UnityEngine;

public class DragIn : VisualAction
{
    [SerializeField] private Dt.Area.BoxArea draggableArea;
    [SerializeField] private Dt.Area.BoxArea target;

    private Vector3 initialPos;
    private bool isDragging = false;
    private bool completed = false;
    private Transform dragTransform;
    private bool initialized = false;

    // Support for ToggleRendererGraphic (Croptop & Rope):
    // baseRenderer is the item in the room (counter/wall).
    // renderedRenderer is the hand-held dragging item.
    private SpriteRenderer baseRenderer;
    private SpriteRenderer renderedRenderer;
    private bool isToggleRenderer = false;

    // For single renderer items (HairRoller, Perfume, Razor, WC)
    private SpriteRenderer singleRenderer;

    [Header("=== Character Source Skin (Hides item on girl when dragging) ===")]
    [SerializeField] private Spine.Unity.SkeletonAnimation sourceCharacter;
    [SerializeField] private string normalSkinName;
    [SerializeField] private string takenSkinName;

    // Offset while dragging (lifting slightly above finger like original: y = 0.8f)
    private readonly Vector3 dragOffset = new Vector3(0f, 0.8f, 0f);

    private const string DraggingLayerName = "Interactable";
    private string originalLayerName = "Default";
    private int originalSortingOrder = 0;

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

        if (target == null)
        {
            var t = transform.Find("Target");
            if (t != null) target = t.GetComponent<Dt.Area.BoxArea>();
        }

        dragTransform = GetDragTransform();
        if (dragTransform != null)
        {
            initialPos = dragTransform.position;

            // Check if this item is a ToggleRenderer (Croptop or Rope)
            var renderedChild = dragTransform.Find("Rendered Sprite Renderer");
            if (renderedChild != null)
            {
                isToggleRenderer = true;
                baseRenderer = dragTransform.GetComponent<SpriteRenderer>();
                renderedRenderer = renderedChild.GetComponent<SpriteRenderer>();

                if (baseRenderer != null)
                {
                    originalLayerName = baseRenderer.sortingLayerName;
                    originalSortingOrder = baseRenderer.sortingOrder;
                    baseRenderer.enabled = true; // Visible at rest in room!
                }
                if (renderedRenderer != null)
                {
                    renderedChild.gameObject.SetActive(true);
                    renderedRenderer.enabled = false; // Hidden at rest!
                }
            }
            else
            {
                isToggleRenderer = false;
                singleRenderer = dragTransform.GetComponent<SpriteRenderer>();
                if (singleRenderer == null)
                    singleRenderer = dragTransform.GetComponentInChildren<SpriteRenderer>(true);

                if (singleRenderer != null)
                {
                    originalLayerName = singleRenderer.sortingLayerName;
                    originalSortingOrder = singleRenderer.sortingOrder;
                    // Hidden at rest because Spine background girls hold them!
                    singleRenderer.enabled = false;
                }
            }
        }

        var cols = GetComponentsInChildren<Collider2D>(true);
        foreach (var c in cols)
        {
            c.enabled = true;
        }

        AutoDetectSourceCharacter();

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

        // 1. POINTER DOWN -> START DRAG
        if (pointerDown && !DragController.IsDragging)
        {
            if (HitTest(mouseWorld))
            {
                DragController.IsDragging = true;
                DragController.CurrentDraggable = this;
                isDragging = true;

                OnStartDragging(mouseWorld);

                AudioManager.Instance?.PlaySFX(AudioManager.Instance?.TapClip);
                AudioManager.Instance?.UnlockWebAudio();
            }
        }
        // 2. POINTER STAY -> DRAGGING
        else if (pointerStay && isDragging && DragController.CurrentDraggable == (object)this)
        {
            UpdateDraggingPosition(mouseWorld);
        }
        // 3. POINTER UP -> DROP CHECK
        else if (pointerUp && isDragging && DragController.CurrentDraggable == (object)this)
        {
            isDragging = false;
            DragController.IsDragging = false;
            DragController.CurrentDraggable = null;

            CheckDrop();
        }
    }

    private bool HitTest(Vector2 worldPos)
    {
        // Only check colliders belonging to the draggable item itself (NEVER Target)
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

        // Check distance to item's rest position (radius 1.5f)
        if (Vector2.Distance(initialPos, worldPos) < 1.5f)
            return true;

        return false;
    }

    private void OnStartDragging(Vector2 mouseWorld)
    {
        // 1. Khi kéo đi, item trên tay nhân vật biến mất (chuyển sang taken skin)
        SetCharacterSkin(takenSkinName);

        if (isToggleRenderer)
        {
            // Hide the room background sprite (shirt on counter / rope on wall)
            if (baseRenderer != null) baseRenderer.enabled = false;

            // Show the hand-held drag sprite on top of everything!
            if (renderedRenderer != null)
            {
                renderedRenderer.enabled = true;
                renderedRenderer.sortingLayerName = DraggingLayerName;
                renderedRenderer.sortingOrder = 100;
            }
        }
        else
        {
            // Show single renderer on top of everything!
            if (singleRenderer != null)
            {
                singleRenderer.enabled = true;
                singleRenderer.sortingLayerName = DraggingLayerName;
                singleRenderer.sortingOrder = 100;
            }
        }

        UpdateDraggingPosition(mouseWorld);
    }

    private void UpdateDraggingPosition(Vector2 mouseWorld)
    {
        if (dragTransform != null)
        {
            // Lift item slightly above touch position so finger does not cover it
            dragTransform.position = new Vector3(mouseWorld.x + dragOffset.x, mouseWorld.y + dragOffset.y, initialPos.z);
        }
    }

    private void CheckDrop()
    {
        Vector2 targetCenter = new Vector2(2.5f, -0.8f);
        if (target != null)
        {
            targetCenter = target.transform.position;
        }

        float movedFromStart = Vector2.Distance(dragTransform.position, initialPos);
        if (movedFromStart < 1.0f)
        {
            // Released without dragging -> snap back to room state
            SnapBack();
            return;
        }

        float distToTarget = Vector2.Distance(dragTransform.position, targetCenter);
        bool droppedOnTarget = distToTarget < 2.5f || (target != null && target.Contains(dragTransform.position));

        if (droppedOnTarget)
        {
            // SUCCESS! Item disappears permanently!
            completed = true;

            // Item trên tay nhân vật nguồn giữ nguyên trạng thái đã mất
            SetCharacterSkin(takenSkinName);

            if (isToggleRenderer)
            {
                if (baseRenderer != null) baseRenderer.enabled = false;
                if (renderedRenderer != null) renderedRenderer.enabled = false;
            }
            else
            {
                if (singleRenderer != null) singleRenderer.enabled = false;
            }

            if (dragTransform != null) dragTransform.gameObject.SetActive(false);
            gameObject.SetActive(false);

            ApplyStepEffect();
            string stepName = transform.parent != null ? transform.parent.name.Replace("Sequence_", "") : name;
            Level1002Controller.Instance?.StepCompleted(stepName);
        }
        else
        {
            // Released elsewhere -> Snap back
            SnapBack();
        }
    }

    private void SnapBack()
    {
        if (dragTransform != null)
        {
            dragTransform.position = initialPos;
        }

        // Khôi phục lại item trên tay nhân vật nguồn
        SetCharacterSkin(normalSkinName);

        if (isToggleRenderer)
        {
            // Restore room sprite (shirt on counter / rope on wall)
            if (baseRenderer != null)
            {
                baseRenderer.enabled = true;
                baseRenderer.sortingLayerName = originalLayerName;
                baseRenderer.sortingOrder = originalSortingOrder;
            }
            if (renderedRenderer != null)
            {
                renderedRenderer.enabled = false;
            }
        }
        else
        {
            // Hide single drag renderer again
            if (singleRenderer != null)
            {
                singleRenderer.enabled = false;
                singleRenderer.sortingLayerName = originalLayerName;
                singleRenderer.sortingOrder = originalSortingOrder;
            }
        }
    }

    private void AutoDetectSourceCharacter()
    {
        if (sourceCharacter != null) return;

        string seqName = (transform.parent != null ? transform.parent.name : name).ToLower();

        if (seqName.Contains("perfume"))
        {
            sourceCharacter = FindGirlAnimation("Spine GameObject (Girl 3)");
            normalSkinName = "perfume";
            takenSkinName = "all_no";
        }
        else if (seqName.Contains("razor"))
        {
            sourceCharacter = FindGirlAnimation("Spine GameObject (Girl 1)");
            normalSkinName = "all";
            takenSkinName = "no_razor";
        }
        else if (seqName.Contains("hairroller"))
        {
            sourceCharacter = FindGirlAnimation("Spine GameObject (Girl 2)");
            normalSkinName = "all";
            takenSkinName = "no";
        }
        else if (seqName.Contains("wc") || seqName.Contains("makeup"))
        {
            sourceCharacter = FindGirlAnimation("Spine GameObject (Girl 4)");
            normalSkinName = "all";
            takenSkinName = "no";
        }
    }

    private Spine.Unity.SkeletonAnimation FindGirlAnimation(string girlName)
    {
        var go = GameObject.Find(girlName);
        if (go == null)
        {
            var env = GameObject.Find("Canvas/L_1002.Win/Environment");
            if (env != null)
            {
                var t = env.transform.Find(girlName);
                if (t != null) go = t.gameObject;
            }
        }
        return go != null ? go.GetComponent<Spine.Unity.SkeletonAnimation>() : null;
    }

    private void SetCharacterSkin(string skinName)
    {
        if (sourceCharacter == null || string.IsNullOrEmpty(skinName)) return;
        if (sourceCharacter.Skeleton == null) return;

        var skin = sourceCharacter.Skeleton.Data.FindSkin(skinName);
        if (skin != null)
        {
            sourceCharacter.Skeleton.SetSkin(skinName);
            sourceCharacter.Skeleton.SetSlotsToSetupPose();
            sourceCharacter.AnimationState?.Apply(sourceCharacter.Skeleton);
        }
    }

    private void ApplyStepEffect()
    {
        string pName = transform.parent != null ? transform.parent.name : name;
        AudioManager.Instance?.PlayVoiceByStepName(pName);

        var mixer = SpineSkinMixer.Instance;
        if (mixer == null) mixer = FindObjectOfType<SpineSkinMixer>();
        if (mixer == null) return;

        if (pName.Contains("Razor"))
        {
            mixer.SetShavedLegs();
        }
        else if (pName.Contains("HairRoller"))
        {
            mixer.SetSmoothHair();
        }
        else if (pName.Contains("Croptop"))
        {
            mixer.SetCroptop();
        }
        else if (pName.Contains("Perfume"))
        {
            mixer.SetGoodSmell();
            AudioManager.Instance?.PlaySFX(AudioManager.Instance?.SprayClip);
        }
        else if (pName.Contains("Rope"))
        {
            mixer.SetSkinny();
        }
        else if (pName.Contains("WC") || pName.Contains("Makeup"))
        {
            mixer.SetMakeup();
        }
    }
}
