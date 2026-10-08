using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

namespace EscapeBigHead
{
    public enum GameState
    {
        Playing,
        Win,
        Lose
    }

    /// <summary>
    /// EscapeBigHeadGameController: Quan ly vong lap game Level 47 cho Luna Playable Ads.
    /// Ho tro ca 2 co gai bo tren duong ong (Lead Girl & Follower Girl),
    /// Action animation cua Co gai 1 va Spine Item tuong ung voi tung vat pham keo vao.
    /// Toi uu cho Luna, Zero-GC, khong dung UniTask hay Zenject.
    /// </summary>
    public class EscapeBigHeadGameController : MonoBehaviour
    {
        private static EscapeBigHeadGameController _instance;
        public static EscapeBigHeadGameController Instance
        {
            get
            {
#pragma warning disable CS0618
                if (_instance == null)
                {
                    _instance = FindObjectOfType<EscapeBigHeadGameController>();
                }
#pragma warning restore CS0618
                return _instance;
            }
            private set => _instance = value;
        }

        [Header("Game State")]
        [SerializeField] private GameState currentState = GameState.Playing;
        [SerializeField] private int requiredStepsToWin = 7;

        public event Action<int, int> OnStepUpdated;
        public GameState CurrentState => currentState;
        public int CompletedSteps => completedSteps;
        public int RequiredStepsToWin => requiredStepsToWin;

        [Header("Spine Characters & Objects")]
        [SerializeField] private SkeletonAnimation demonSkeleton;
        [SerializeField] private SkeletonAnimation leadGirlSkeleton;
        [SerializeField] private SkeletonAnimation followerGirlSkeleton;
        [SerializeField] private SkeletonAnimation actionGirlSkeleton;
        [SerializeField] private SkeletonAnimation itemSkeleton;
        [SerializeField] private SkeletonAnimation fanSkeleton;
        [SerializeField] private SkeletonAnimation closetSkeleton;
        [SerializeField] private SkeletonAnimation wrongSkeleton;

        [Header("Movement Controller")]
        [SerializeField] private CharacterEscaper characterEscaper;

        [Header("Draggable Items")]
        [SerializeField] private List<DraggableItem> draggableItems = new List<DraggableItem>();
        [SerializeField] private DraggableItem fireExtinguisherItem;

        [Header("UI Panels")]
        [SerializeField] private GameObject winUI;
        [SerializeField] private GameObject loseUI;

        private int completedSteps = 0;
        private bool isClosetOpen = false;

        private void Awake()
        {
            Instance = this;
            AdjustCameraForAspect();
        }

        private void Start()
        {
            // Khoi tao trang thai ban dau cua cac Spine
            InitializeSpines();

            // Dang ky su kien keo tha cho tat ca cac items
            for (int i = 0; i < draggableItems.Count; i++)
            {
                if (draggableItems[i] != null)
                {
                    draggableItems[i].OnDroppedSuccess += HandleItemSuccess;
                    draggableItems[i].OnDragStarted += HandleDragStarted;
                    draggableItems[i].OnDragCancelled += HandleDragCancelled;
                }
            }

            if (fireExtinguisherItem != null)
            {
                fireExtinguisherItem.OnDroppedSuccess += HandleItemSuccess;
                fireExtinguisherItem.OnDragStarted += HandleDragStarted;
                fireExtinguisherItem.OnDragCancelled += HandleDragCancelled;
                // Ban dau an binh cuu hoa trong tu sat
                fireExtinguisherItem.gameObject.SetActive(false);
            }

            if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.NotifyGameStarted();
            }

            OnStepUpdated?.Invoke(completedSteps, requiredStepsToWin);
        }

        private void AdjustCameraForAspect()
        {
            Camera cam = Camera.main;
            if (cam == null) return;

            float aspect = (float)Screen.width / Screen.height;
            // Neu man hinh doc (portrait vi du 9:16 = 0.5625), tang orthographic size de thay toan bo be ngang
            if (aspect < 0.65f)
            {
                cam.orthographicSize = Mathf.Max(9.5f, 5.2f / aspect);
            }
            else
            {
                cam.orthographicSize = 9.5f;
            }
        }

        private void InitializeSpines()
        {
            // Demon: Ban dau o trang thai di giay (skin "all")
            if (demonSkeleton != null)
            {
                demonSkeleton.gameObject.SetActive(true);
                try
                {
                    demonSkeleton.Skeleton.SetSkin("all");
                    demonSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
                demonSkeleton.AnimationState.SetAnimation(0, "Act 1", true);
            }

            // Khoi tao hang co gai bo
            if (characterEscaper != null)
            {
                characterEscaper.InitializeQueue();
            }

            // Action Girl: An ban dau, chi bat khi lam hanh dong cu the
            if (actionGirlSkeleton != null)
            {
                actionGirlSkeleton.gameObject.SetActive(false);
            }

            // Item Spine: An ban dau
            if (itemSkeleton != null)
            {
                itemSkeleton.gameObject.SetActive(false);
            }

            // Quat: Ban dau quay lien tuc (skin "all", anim "Act 1" loop)
            if (fanSkeleton != null)
            {
                fanSkeleton.gameObject.SetActive(true);
                try
                {
                    fanSkeleton.Skeleton.SetSkin("all");
                    fanSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
                fanSkeleton.AnimationState.SetAnimation(0, "Act 1", true);
            }

            // Cua tu sat: Ban dau dong (skin "all")
            if (closetSkeleton != null)
            {
                closetSkeleton.gameObject.SetActive(true);
                try
                {
                    closetSkeleton.Skeleton.SetSkin("all");
                    closetSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
                closetSkeleton.AnimationState.SetAnimation(0, "Act 1", false);
            }

            // Wrong Spine (Thao Tac Sai - Tia dien tia lua): Bat ban dau, skin "all", anim "Act 1" loop
            if (wrongSkeleton != null)
            {
                wrongSkeleton.gameObject.SetActive(true);
                try
                {
                    wrongSkeleton.Skeleton.SetSkin("all");
                    wrongSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
                wrongSkeleton.AnimationState.SetAnimation(0, "Act 1", true);
            }
        }

        private void HandleDragStarted(DraggableItem item)
        {
            if (currentState != GameState.Playing) return;
            ItemType type = item.GetItemType();

            // Khi bat dau keo giay: Dau to bi lay mat giay (chuyen sang "no_shoe")
            if (type == ItemType.Shoes && demonSkeleton != null)
            {
                try
                {
                    demonSkeleton.Skeleton.SetSkin("no_shoe");
                    demonSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
            }
            // Khi bat dau keo quat: Canh quat tren tuong duoc thao ra (chuyen sang "no")
            else if (type == ItemType.Fan && fanSkeleton != null)
            {
                try
                {
                    fanSkeleton.Skeleton.SetSkin("no");
                    fanSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
            }
            // Khi bat dau keo binh cuu hoa: An hinh binh cuu hoa ben trong tu sat
            else if (type == ItemType.FireExtinguisher && closetSkeleton != null)
            {
                try
                {
                    closetSkeleton.Skeleton.SetAttachment("fire_extinguisher", null);
                }
                catch { }
            }
        }

        private void HandleDragCancelled(DraggableItem item)
        {
            if (currentState != GameState.Playing) return;
            ItemType type = item.GetItemType();

            // Neu tha truot giay: Tra lai giay cho dau to (chuyen sang "all")
            if (type == ItemType.Shoes && demonSkeleton != null)
            {
                try
                {
                    demonSkeleton.Skeleton.SetSkin("all");
                    demonSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
            }
            // Neu tha truot quat: Tra lai quat tren tuong (chuyen sang "all") va phat lai animation quay
            else if (type == ItemType.Fan && fanSkeleton != null)
            {
                try
                {
                    fanSkeleton.Skeleton.SetSkin("all");
                    fanSkeleton.Skeleton.SetSlotsToSetupPose();
                    if (fanSkeleton.AnimationState != null)
                    {
                        fanSkeleton.AnimationState.SetAnimation(0, "Act 1", true);
                    }
                }
                catch { }
            }
            // Neu tha truot binh cuu hoa: Hien lai hinh binh cuu hoa ben trong tu sat
            else if (type == ItemType.FireExtinguisher && closetSkeleton != null)
            {
                try
                {
                    closetSkeleton.Skeleton.SetAttachment("fire_extinguisher", "fire_extinguisher");
                }
                catch { }
            }
        }

        private void Update()
        {
            if (currentState != GameState.Playing) return;

            // Kiem tra nguoi choi click/tap vao canh tu sat de mo tu
            if (!isClosetOpen && Input.GetMouseButtonDown(0))
            {
                Vector3 mousePos = Input.mousePosition;
                if (Camera.main != null)
                {
                    mousePos.z = -Camera.main.transform.position.z;
                    Vector3 worldPos = Camera.main.ScreenToWorldPoint(mousePos);
                    // Toa do tu sat: x trong khoang [1.4, 3.8], y trong khoang [-7.2, -4.6] (tranh de len item ong nuoc o y = -3.75)
                    if (worldPos.x >= 1.4f && worldPos.x <= 3.8f && worldPos.y >= -7.2f && worldPos.y <= -4.6f)
                    {
                        OpenCloset();
                    }
                }
            }
        }

        public void OpenCloset()
        {
            if (isClosetOpen) return;
            isClosetOpen = true;

            Debug.Log("[Game] Mo cua tu sat!");

            if (closetSkeleton != null)
            {
                closetSkeleton.AnimationState.SetAnimation(0, "Slot 6_Tap Cua Tu", false);
            }

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayClosetOpen();
            }

            // Hien binh cuu hoa ben trong tu de nguoi choi keo
            if (fireExtinguisherItem != null)
            {
                fireExtinguisherItem.gameObject.SetActive(true);
                fireExtinguisherItem.SetInteractable(true);
            }
        }

        private void HandleItemSuccess(DraggableItem item, DropTargetArea targetArea)
        {
            if (currentState != GameState.Playing) return;

            ItemType type = item.GetItemType();

            // THAO TAC SAI: Keo day dien vao co gai -> DIEN GIAT!
            if (type == ItemType.Wire)
            {
                Debug.Log("[Game] Keo day dien -> Thao tac sai (Dien giat)!");
                TriggerLose();
                return;
            }

            completedSteps++;
            Debug.Log($"[Game] Hoan thanh Slot {completedSteps}: {type}");
            OnStepUpdated?.Invoke(completedSteps, requiredStepsToWin);

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayTap();
            }

            StartCoroutine(PlayActionSequence(type));
        }

        private IEnumerator PlayActionSequence(ItemType type)
        {
            // 1. An co gai dang bo o vi tri dau tien
            if (characterEscaper != null)
            {
                characterEscaper.HideCurrentLeadGirl();
            }

            // 2. Bat action girl skeleton tai (0, 0, 0)
            if (actionGirlSkeleton != null) actionGirlSkeleton.gameObject.SetActive(true);

            string slotAnim = "";
            string itemAnim = "";
            float animDuration = 1.33f;

            switch (type)
            {
                case ItemType.Ladder:
                    slotAnim = "Slot 1_Keo Cai Thang";
                    itemAnim = "Slot 1_Keo Cai Thang";
                    animDuration = 1.33f;
                    break;
                case ItemType.Web:
                    slotAnim = "Slot 2_Keo Mang Nhen";
                    itemAnim = "Slot 2_Keo Mang Nhen";
                    animDuration = 1.33f;
                    break;
                case ItemType.Rope:
                    slotAnim = "Slot 3_Keo Day Thung";
                    itemAnim = "Slot 3_Keo Day Thung";
                    animDuration = 1.67f;
                    break;
                case ItemType.Pipe:
                    slotAnim = "Slot 5_Keo Ong Nuoc";
                    itemAnim = "Slot 5_Keo Ong Nuoc";
                    animDuration = 1.67f;
                    break;
                case ItemType.Fan:
                    slotAnim = "Slot 4_Keo Quat";
                    animDuration = 2.67f;
                    if (SoundManager.Instance != null)
                    {
                        SoundManager.Instance.PlayWind();
                    }
                    if (fanSkeleton != null)
                    {
                        try
                        {
                            fanSkeleton.Skeleton.SetSkin("no");
                            fanSkeleton.Skeleton.SetSlotsToSetupPose();
                        }
                        catch { }
                    }
                    break;
                case ItemType.Shoes:
                    slotAnim = "Slot 7_Keo Doi Giay";
                    animDuration = 2.67f;
                    // Quai vat dau to bi lay giay -> chuyen / duy tri skin "no_shoe"
                    if (demonSkeleton != null)
                    {
                        try
                        {
                            demonSkeleton.Skeleton.SetSkin("no_shoe");
                            demonSkeleton.Skeleton.SetSlotsToSetupPose();
                        }
                        catch { }
                    }
                    break;
                case ItemType.FireExtinguisher:
                    slotAnim = "Slot 6,1_Keo Binh Cuu Hoa";
                    animDuration = 2.67f;
                    if (closetSkeleton != null)
                    {
                        try
                        {
                            closetSkeleton.Skeleton.SetAttachment("fire_extinguisher", null);
                        }
                        catch { }
                    }
                    break;
            }

            if (!string.IsNullOrEmpty(slotAnim) && actionGirlSkeleton != null)
            {
                actionGirlSkeleton.AnimationState.SetAnimation(0, slotAnim, false);
            }

            if (!string.IsNullOrEmpty(itemAnim) && itemSkeleton != null)
            {
                itemSkeleton.gameObject.SetActive(true);
                itemSkeleton.AnimationState.SetAnimation(0, itemAnim, false);
            }

            // Doi thoi luong animation cua tung item
            yield return new WaitForSeconds(animDuration);

            // An Item Skeleton
            if (itemSkeleton != null)
            {
                itemSkeleton.gameObject.SetActive(false);
            }

            // An Action Girl vi da leo len ong thoat thoat than
            if (actionGirlSkeleton != null)
            {
                actionGirlSkeleton.gameObject.SetActive(false);
            }

            // Kiem tra dieu kien thang neu da du so buoc
            if (completedSteps >= requiredStepsToWin && currentState == GameState.Playing)
            {
                TriggerWin();
                yield break;
            }

            // Cho hang co gai phia sau bo tien vao vi tri dan dau (0, 0, 0)
            if (characterEscaper != null)
            {
                characterEscaper.AdvanceQueue();
            }
        }

        public void TriggerWin()
        {
            if (currentState != GameState.Playing) return;
            currentState = GameState.Win;

            Debug.Log("[Game] Escape Big Head: WIN!");

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayWin();
            }

            DisableAllItems();

            if (winUI != null) winUI.SetActive(true);

            if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.NotifyGameEnded(true);
            }
        }

        /// <summary>
        /// TriggerLose: Mac dinh kich hoat khi thao tac sai (vi du: keo day dien lam giat dien, quai vat vo an thit).
        /// </summary>
        public void TriggerLose()
        {
            TriggerWrongActionLose();
        }

        /// <summary>
        /// TriggerWrongActionLose: Thao tac sai (keo day dien).
        /// Phat tieng giat dien, tieng quai vat gam, tieng thet, animation quai vat vo an thit roi hien Lose UI.
        /// </summary>
        public void TriggerWrongActionLose()
        {
            if (currentState != GameState.Playing) return;
            currentState = GameState.Lose;

            Debug.Log("[Game] Escape Big Head: LOSE (Thao tac sai)!");
            StartCoroutine(LoseRoutine());
        }

        /// <summary>
        /// TriggerTimeoutLose: Het gio.
        /// Hien truc tiep Lose UI va phat am thanh Lose, KHONG chay animation hay am thanh Thao Tac Sai.
        /// </summary>
        public void TriggerTimeoutLose()
        {
            if (currentState != GameState.Playing) return;
            currentState = GameState.Lose;

            Debug.Log("[Game] Escape Big Head: LOSE (Het gio / Time Out)!");
            DisableAllItems();

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayLose();
            }

            if (loseUI != null)
            {
                loseUI.SetActive(true);
            }

            if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.NotifyGameEnded(false);
            }
        }

        private IEnumerator LoseRoutine()
        {
            DisableAllItems();

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayElectricShock();
                SoundManager.Instance.PlayMonsterRoar();
                SoundManager.Instance.PlayWomanScream();
            }

            // Kich hoat tia dien giat Thao Tac Sai
            if (wrongSkeleton != null)
            {
                wrongSkeleton.gameObject.SetActive(true);
                wrongSkeleton.AnimationState.SetAnimation(0, "Thao Tac Sai", false);
                wrongSkeleton.AnimationState.AddAnimation(0, "Thao Tac Sai_Loop", true, 0);
            }

            // Hang co gai bi giat dien
            if (characterEscaper != null)
            {
                characterEscaper.PlayShockAnimation();
            }

            if (actionGirlSkeleton != null && actionGirlSkeleton.gameObject.activeSelf)
            {
                try
                {
                    actionGirlSkeleton.AnimationState.SetAnimation(0, "Thao Tac Sai", false);
                    actionGirlSkeleton.AnimationState.AddAnimation(0, "Thao Tac Sai_Loop", true, 0);
                }
                catch { }
            }

            // Quai vat dau to vo an thit co gai (Thao Tac Sai: 2.67s), sau do moi chuyen sang Thao Tac Sai_Loop
            if (demonSkeleton != null)
            {
                try
                {
                    demonSkeleton.Skeleton.SetSkin("all");
                    demonSkeleton.Skeleton.SetSlotsToSetupPose();
                }
                catch { }
                demonSkeleton.AnimationState.SetAnimation(0, "Thao Tac Sai", false);
                demonSkeleton.AnimationState.AddAnimation(0, "Thao Tac Sai_Loop", true, 0f);
            }

            // Cho animation vo an thit hoan tat (2.67s)
            yield return new WaitForSeconds(2.8f);

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayLose();
            }

            if (loseUI != null) loseUI.SetActive(true);

            if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.NotifyGameEnded(false);
            }
        }

        private void DisableAllItems()
        {
            for (int i = 0; i < draggableItems.Count; i++)
            {
                if (draggableItems[i] != null)
                {
                    draggableItems[i].SetInteractable(false);
                }
            }

            if (fireExtinguisherItem != null)
            {
                fireExtinguisherItem.SetInteractable(false);
            }
        }

        public void OnCTAButtonClicked()
        {
            if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.InstallFullGame();
            }
        }

        public void RestartGame()
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
        }

        public void OnRetryButtonClicked()
        {
            RestartGame();
        }
    }
}
