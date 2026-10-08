using System;
using System.Collections;
using UnityEngine;

namespace EscapeBigHead
{
    public enum ItemType
    {
        Ladder,
        Web,
        Rope,
        Pipe,
        Fan,
        Shoes,
        FireExtinguisher,
        Wire
    }

    /// <summary>
    /// DraggableItem: Xu ly keo tha vat pham trong man choi.
    /// staticVisual: Hinh anh vat pham tren boi canh (vi du: cuon day thung, thang tren tuong, mang nhen).
    /// dragVisual: Hinh anh vat pham khi keo theo tay (vi du: rope_drag, ladder_drag, web_drag).
    /// </summary>
    [RequireComponent(typeof(Collider2D))]
    public class DraggableItem : MonoBehaviour
    {
        [Header("Item Settings")]
        [SerializeField] private ItemType itemType;
        [SerializeField] private bool isInteractable = true;

        [Header("Visuals")]
        [SerializeField] private SpriteRenderer staticVisual;
        [SerializeField] private SpriteRenderer dragVisual;

        [Header("Drag Appearance")]
        [SerializeField] private Sprite dragSprite;
        [SerializeField] private float dragScaleMultiplier = 1.0f;
        [SerializeField] private int dragSortingOrder = 100;
        [SerializeField] private Vector3 dragOffset = Vector3.zero;

        // Events
        public event Action<DraggableItem> OnDragStarted;
        public event Action<DraggableItem> OnDragCancelled;
        public event Action<DraggableItem, DropTargetArea> OnDroppedSuccess;

        private static DraggableItem currentDraggingItem = null;

        private Collider2D col2d;
        private Camera mainCamera;
        private bool isPointerDown = false;
        private Vector3 pointerDownWorldPos;
        private bool isDragging = false;
        private Vector3 startDragPos;
        private Vector3 originalScale;
        private bool wasStaticVisualInitiallyEnabled = false;
        private const float DragThreshold = 0.25f;

        // Vung muc tieu chap nhan: Quai vat (Demon), Co gai (Girl), hoac duong ong
        private static readonly Vector2 MonsterTargetPos = new Vector2(-1.5f, 0f);
        private static readonly Vector2 GirlTargetPos = new Vector2(1.5f, -0.84f);
        private const float DropAcceptRadius = 3.5f;

        public ItemType GetItemType() => itemType;
        public bool IsInteractable => isInteractable;

        private void Awake()
        {
            mainCamera = Camera.main;
            col2d = GetComponent<Collider2D>();
            originalScale = transform.localScale;

            // Neu chua gan staticVisual thi lay luon SpriteRenderer tren GameObject nay
            if (staticVisual == null)
            {
                staticVisual = GetComponent<SpriteRenderer>();
            }

            if (staticVisual != null)
            {
                wasStaticVisualInitiallyEnabled = staticVisual.enabled;
            }

            // Neu co dragSprite ma chua co dragVisual thi tao san
            if (dragVisual == null && dragSprite != null)
            {
                CreateDragVisual();
            }
            else if (dragVisual != null && dragVisual != staticVisual)
            {
                dragVisual.gameObject.SetActive(false);
            }
        }

        private void CreateDragVisual()
        {
            GameObject dvGo = new GameObject("DragVisual");
            dvGo.transform.SetParent(transform);
            dvGo.transform.localPosition = Vector3.zero;
            dvGo.transform.localScale = Vector3.one;
            dragVisual = dvGo.AddComponent<SpriteRenderer>();
            dragVisual.sprite = dragSprite;
            dragVisual.sortingOrder = dragSortingOrder;
            if (staticVisual != null)
            {
                dragVisual.sortingLayerID = staticVisual.sortingLayerID;
            }
            dvGo.SetActive(false);
        }

        private void Start()
        {
            if (mainCamera == null)
            {
                mainCamera = Camera.main;
            }
        }

        private void Update()
        {
            if (!isInteractable) return;

            if (Input.GetMouseButtonDown(0))
            {
                Vector3 worldPos = GetMouseWorldPos();
                if (IsPointInsideCollider(worldPos))
                {
                    if (currentDraggingItem == null || currentDraggingItem == this)
                    {
                        isPointerDown = true;
                        pointerDownWorldPos = worldPos;
                    }
                }
            }
            else if (Input.GetMouseButton(0) && isPointerDown)
            {
                Vector3 worldPos = GetMouseWorldPos();
                if (!isDragging)
                {
                    // Chi bat dau tinh la keo vat pham khi di chuyen vuot nguong DragThreshold
                    if (Vector2.Distance(worldPos, pointerDownWorldPos) >= DragThreshold)
                    {
                        StartDrag(worldPos);
                    }
                }
                else
                {
                    Vector3 targetPos = new Vector3(worldPos.x + dragOffset.x, worldPos.y + dragOffset.y, -0.8f);

                    if (dragVisual != null)
                    {
                        dragVisual.transform.position = targetPos;
                    }
                    else
                    {
                        transform.position = targetPos;
                    }
                }
            }
            else if (Input.GetMouseButtonUp(0))
            {
                if (isDragging)
                {
                    EndDrag();
                }
                isPointerDown = false;
                isDragging = false;
                if (currentDraggingItem == this)
                {
                    currentDraggingItem = null;
                }
            }
        }

        private bool IsPointInsideCollider(Vector2 point)
        {
            if (col2d == null || !col2d.enabled) return false;

            if (col2d is BoxCollider2D box)
            {
                Vector2 localPoint = transform.InverseTransformPoint(point) - (Vector3)box.offset;
                Vector2 halfSize = box.size * 0.5f;
                float padX = 0.35f / Mathf.Max(0.001f, Mathf.Abs(transform.lossyScale.x));
                float padY = 0.35f / Mathf.Max(0.001f, Mathf.Abs(transform.lossyScale.y));
                return Mathf.Abs(localPoint.x) <= (halfSize.x + padX) &&
                       Mathf.Abs(localPoint.y) <= (halfSize.y + padY);
            }

            Bounds b = col2d.bounds;
            float padding = 0.35f;
            return point.x >= (b.min.x - padding) && point.x <= (b.max.x + padding) &&
                   point.y >= (b.min.y - padding) && point.y <= (b.max.y + padding);
        }

        private Vector3 GetMouseWorldPos()
        {
            if (mainCamera == null) mainCamera = Camera.main;
            Vector3 mousePos = Input.touchCount > 0 ? (Vector3)Input.GetTouch(0).position : Input.mousePosition;
            if (mainCamera != null)
            {
                mousePos.z = -mainCamera.transform.position.z;
                return mainCamera.ScreenToWorldPoint(mousePos);
            }
            return Vector3.zero;
        }

        private void StartDrag(Vector3 touchPos)
        {
            if (currentDraggingItem != null && currentDraggingItem != this) return;
            currentDraggingItem = this;
            isDragging = true;
            startDragPos = transform.position;

            if (dragVisual == null && dragSprite != null)
            {
                CreateDragVisual();
            }

            // Neu co dragVisual rieng thi bat dragVisual len tai vi tri chuot
            if (dragVisual != null && dragVisual != staticVisual)
            {
                dragVisual.gameObject.SetActive(true);
                dragVisual.transform.position = new Vector3(touchPos.x + dragOffset.x, touchPos.y + dragOffset.y, -0.8f);
                dragVisual.sortingOrder = dragSortingOrder;
                dragVisual.transform.localScale = originalScale * dragScaleMultiplier;

                // An tam static visual tren tuong neu co
                if (staticVisual != null && staticVisual.enabled)
                {
                    staticVisual.enabled = false;
                }
            }
            else if (staticVisual != null && staticVisual.enabled)
            {
                staticVisual.sortingOrder = dragSortingOrder;
                transform.localScale = originalScale * dragScaleMultiplier;
            }

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayTap();
            }

            OnDragStarted?.Invoke(this);
        }

        private void EndDrag()
        {
            isDragging = false;
            isPointerDown = false;
            currentDraggingItem = null;

            Vector3 dropPos = (dragVisual != null && dragVisual != staticVisual)
                ? dragVisual.transform.position
                : transform.position;

            Vector2 currentPos2D = dropPos;

            // Kiem tra quang duong keo: Phai keo roi xa vi tri ban dau
            float dragDistance = Vector2.Distance(currentPos2D, (Vector2)pointerDownWorldPos);
            bool isNearTarget = false;

            if (dragDistance >= 0.6f)
            {
                // Vung co gai thuc te: Trung tam khoang (1.2, -0.8), ban kinh khoang 2.0f
                bool inGirlZone = (currentPos2D.x >= -0.5f && currentPos2D.x <= 3.2f && currentPos2D.y >= -2.2f && currentPos2D.y <= 0.8f) ||
                                  Vector2.Distance(currentPos2D, new Vector2(1.2f, -0.8f)) <= 2.0f;

                if (itemType == ItemType.Wire)
                {
                    // Day dien: Chi tinh khi tha dung vao khu vuc co gai
                    isNearTarget = inGirlZone;
                }
                else if (itemType == ItemType.Shoes)
                {
                    // Giay: Chap nhan tha vao Quai vat (Demon tai x=-3.0, y=-2.0) HOAC vao Co gai
                    bool inDemonZone = Vector2.Distance(currentPos2D, new Vector2(-2.96f, -2.0f)) <= 2.0f ||
                                       (currentPos2D.x >= -4.2f && currentPos2D.x <= -1.8f && currentPos2D.y >= -3.5f && currentPos2D.y <= -0.5f);
                    isNearTarget = inGirlZone || inDemonZone;
                }
                else
                {
                    // Tat ca cac vat pham khac (Thang, Mang nhen, Day thung, Ong nuoc, Quat, Binh cuu hoa):
                    // Bat buoc phai keo den dung khu vuc co gai!
                    isNearTarget = inGirlZone;
                }

                // Kiem tra them Area_Girl neu co DropTargetArea hop le trong Scene
                DropTargetArea matchedArea = null;
#pragma warning disable CS0618
                DropTargetArea[] allAreas = FindObjectsOfType<DropTargetArea>();
#pragma warning restore CS0618
                for (int i = 0; i < allAreas.Length; i++)
                {
                    if (allAreas[i] != null && allAreas[i].gameObject.activeInHierarchy && allAreas[i].ContainsPoint(dropPos))
                    {
                        if (allAreas[i].GetTargetType() == TargetType.Girl)
                        {
                            matchedArea = allAreas[i];
                            isNearTarget = true;
                            break;
                        }
                        else if (itemType == ItemType.Shoes && allAreas[i].GetTargetType() == TargetType.Demon)
                        {
                            matchedArea = allAreas[i];
                            isNearTarget = true;
                            break;
                        }
                    }
                }

                if (isNearTarget)
                {
                    // Tha vao thanh cong
                    if (dragVisual != null && dragVisual != staticVisual)
                    {
                        dragVisual.gameObject.SetActive(false);
                    }

                    if (staticVisual != null)
                    {
                        staticVisual.enabled = false;
                    }

                    SetInteractable(false);
                    gameObject.SetActive(false);
                    OnDroppedSuccess?.Invoke(this, matchedArea);
                    return;
                }
            }

            // Tha truot hoac chi click nhe -> phuc hoi trang thai ban dau
            if (dragVisual != null && dragVisual != staticVisual)
            {
                dragVisual.gameObject.SetActive(false);
                if (staticVisual != null)
                {
                    staticVisual.enabled = wasStaticVisualInitiallyEnabled;
                }
            }
            else
            {
                transform.position = startDragPos;
                transform.localScale = originalScale;
                if (staticVisual != null)
                {
                    staticVisual.sortingOrder = 12;
                    staticVisual.enabled = wasStaticVisualInitiallyEnabled;
                }
            }

            OnDragCancelled?.Invoke(this);
        }

        public void SetDragSprite(Sprite sprite)
        {
            dragSprite = sprite;
            if (dragVisual != null)
            {
                dragVisual.sprite = sprite;
            }
        }

        public void SetInteractable(bool interactable)
        {
            isInteractable = interactable;
            if (col2d != null) col2d.enabled = interactable;
        }

        public void SetVisuals(SpriteRenderer staticRend, SpriteRenderer dragRend)
        {
            staticVisual = staticRend;
            dragVisual = dragRend;
        }
    }
}
