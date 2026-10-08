using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class Level49GameController : MonoBehaviour
{
    [Header("Spine Characters")]
    [SerializeField] private SkeletonAnimation bgSpine;
    [SerializeField] private SkeletonAnimation wolfSpine;
    [SerializeField] private SkeletonAnimation girlSpine;
    [SerializeField] private SkeletonAnimation slot3Spine; // Bua
    [SerializeField] private SkeletonAnimation slot4Spine; // Choi lau nha

    [Header("Draggable Items")]
    [SerializeField] private List<DraggableItem> items = new List<DraggableItem>();

    [Header("Drop Zones")]
    [SerializeField] private DropTargetZone wolfZone;
    [SerializeField] private DropTargetZone mopZone;
    [SerializeField] private DropTargetZone hammerZone;

    [Header("Tutorial")]
    [SerializeField] private TutorialHand tutorialHand;
    [SerializeField] private DraggableItem firstHintItem;

    [Header("Door (lose trigger)")]
    [SerializeField] private DoorTapZone doorZone;


    [Header("UI EndCard")]
    [SerializeField] private GameObject winCanvas;
    [SerializeField] private GameObject loseCanvas;
    [SerializeField] private Button ctaButton;

    private readonly HashSet<string> activeWolfSkins = new HashSet<string>();
    private int solvedCount = 0;
    private bool isGameOver = false;
    private bool canClickCta = false;
    private float lastCtaTime = -10f;

    [Header("Timing")]
    [Tooltip("Pause after the last clothing item is put on the wolf before the girl opens the door.")]
    [SerializeField] private float wearPause = 0.8f;


    // ---- Public API used by the UI (LevelHeaderUI, UIResultPanel, LunaController) ----
    public static Level49GameController Instance { get; private set; }
    public GameState CurrentState { get; private set; } = GameState.Playing;
    public event System.Action<int, int> OnStepUpdated; // (completed, total)
    public int CompletedSteps => solvedCount;
    public int RequiredStepsToWin => items.Count;

    private void Awake()
    {
        Instance = this;
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
    }

    public void TriggerTimeoutLose() => TriggerLose();
    public void OnCTAButtonClicked() => OnCtaClicked();



    private void Start()
    {
        LunaPlayableAdapter.GameStarted();
        DraggableItem.InputLocked = false;


        if (winCanvas != null) winCanvas.SetActive(false);
        if (loseCanvas != null) loseCanvas.SetActive(false);
        if (ctaButton != null) ctaButton.onClick.AddListener(OnCtaClicked);

        // Setup Spine default animations
        if (bgSpine != null && bgSpine.Skeleton != null)
        {
            bgSpine.AnimationState.SetAnimation(0, "Act 1", true);
        }

        if (wolfSpine != null && wolfSpine.Skeleton != null)
        {
            wolfSpine.AnimationState.SetAnimation(0, "Act 1", true);
        }

        if (girlSpine != null && girlSpine.Skeleton != null)
        {
            girlSpine.AnimationState.SetAnimation(0, "Act 1", true);
        }

        // Slot 3 holds the mirror, Slot 4 holds the blood stain: they must be visible from the start
        // (idle "Act 1"), then play their action animation when the hammer / mop is used.
        PlayIdle(slot3Spine);
        PlayIdle(slot4Spine);

        // Sound & Dialogue
        if (SoundManager.Instance != null)
        {
            SoundManager.Instance.PlayBGM();
            if (SoundManager.Instance.voiceIntro != null)
            {
                SoundManager.Instance.PlayVoice(SoundManager.Instance.voiceIntro);
            }
        }

        // Register items
        foreach (var item in items)
        {
            if (item != null)
            {
                item.OnDragStarted += OnItemDragStarted;
                item.OnDragEnded += OnItemDragEnded;
            }
        }

        // Show tutorial guide for first item
        ShowTutorial();
    }

    private void Update()
    {
        if (canClickCta && Input.GetMouseButtonDown(0))
        {
            OnCtaClicked();
        }
    }

    // LateUpdate so item Update() has already claimed the tap if the player grabbed an item over the door.
    private void LateUpdate()
    {
        if (isGameOver || doorZone == null) return;
        if (!Input.GetMouseButtonDown(0) || DraggableItem.IsAnyDragging) return;

        Camera cam = Camera.main;
        if (cam == null) return;
        Vector3 mp = Input.mousePosition;
        mp.z = -cam.transform.position.z;
        Vector3 wp = cam.ScreenToWorldPoint(mp);

        if (doorZone.ContainsPoint(wp))
        {
            // Opening the door before the wolf is fully prepared = lose.
            if (solvedCount < items.Count) TriggerLose();
        }
    }


    private void ShowTutorial()
    {
        if (tutorialHand != null && firstHintItem != null && wolfZone != null)
        {
            tutorialHand.PlayGuide(firstHintItem.transform, wolfZone.transform);
        }
    }

    private void PlayIdle(SkeletonAnimation spine)
    {
        if (spine == null) return;
        spine.gameObject.SetActive(true);
        if (!spine.valid) spine.Initialize(false);
        if (spine.AnimationState != null)
        {
            spine.AnimationState.SetAnimation(0, "Act 1", true);
        }
    }


    private void OnItemDragStarted(DraggableItem item)
    {
        if (tutorialHand != null) tutorialHand.HideGuide();
    }

    private void OnItemDragEnded(DraggableItem item, bool isSuccess)
    {
        if (isGameOver) return;

        if (isSuccess)
        {
            float effectDuration = ApplyItemEffect(item);
            solvedCount++;
            OnStepUpdated?.Invoke(solvedCount, items.Count);

            if (solvedCount >= items.Count)
            {
                // Last step: let the last item's animation finish before the girl opens the door.
                StartCoroutine(WinRoutine(effectDuration));
            }
        }
    }

    // Applies the item's effect and returns how long its animation takes (seconds).
    private float ApplyItemEffect(DraggableItem item)
    {
        switch (item.itemId)
        {
            case ItemId.Clothes:
                AddWolfSkin("clothes_on");
                return wearPause;
            case ItemId.Shoes:
                AddWolfSkin("shoes_on");
                return wearPause;
            case ItemId.Gloves:
                AddWolfSkin("gloves_on");
                return wearPause;
            case ItemId.Photo:
                AddWolfSkin("grandma_head");
                return wearPause;
            case ItemId.Mop:
                return PlaySlotAction(slot4Spine, "Slot 4_Keo Choi Lau Nha");
            case ItemId.Hammer:
                return PlaySlotAction(slot3Spine, "Slot 3_Keo Cai Bua");
        }
        return 0f;
    }

    private float PlaySlotAction(SkeletonAnimation spine, string anim)
    {
        if (spine == null) return 0f;
        spine.gameObject.SetActive(true);
        if (!spine.valid) spine.Initialize(false);
        TrackEntry entry = spine.AnimationState.SetAnimation(0, anim, false);
        spine.AnimationState.AddAnimation(0, anim + "_Loop", true, 0f);
        return entry != null && entry.Animation != null ? entry.Animation.Duration : 0f;
    }

    private void AddWolfSkin(string skinName)
    {
        if (wolfSpine == null || wolfSpine.Skeleton == null) return;

        activeWolfSkins.Add(skinName);

        SkeletonData skeletonData = wolfSpine.Skeleton.Data;
        Skin newSkin = new Skin("MixedSkin");

        Skin defaultSkin = skeletonData.FindSkin("default");
        if (defaultSkin != null) newSkin.AddSkin(defaultSkin);

        foreach (string s in activeWolfSkins)
        {
            Skin skin = skeletonData.FindSkin(s);
            if (skin != null) newSkin.AddSkin(skin);
        }

        wolfSpine.Skeleton.SetSkin(newSkin);
        wolfSpine.Skeleton.SetSlotsToSetupPose();
        wolfSpine.AnimationState.Apply(wolfSpine.Skeleton);
    }

    private IEnumerator WinRoutine(float waitBeforeOutro)
    {
        // Lock everything immediately (no door tap / timeout lose while the last animation plays).
        isGameOver = true;
        CurrentState = GameState.Win;
        DraggableItem.InputLocked = true;
        if (tutorialHand != null) tutorialHand.HideGuide();

        if (waitBeforeOutro > 0f) yield return new WaitForSeconds(waitBeforeOutro);

        if (girlSpine != null && girlSpine.Skeleton != null)
        {
            girlSpine.AnimationState.SetAnimation(0, "Outro", false);
            girlSpine.AnimationState.AddAnimation(0, "Outro_Loop", true, 0f);
        }

        if (wolfSpine != null && wolfSpine.Skeleton != null)
        {
            wolfSpine.AnimationState.SetAnimation(0, "Outro", false);
            wolfSpine.AnimationState.AddAnimation(0, "Outro_Loop", true, 0f);
        }

        if (SoundManager.Instance != null && SoundManager.Instance.voiceOutro != null)
        {
            SoundManager.Instance.PlayVoice(SoundManager.Instance.voiceOutro);
        }

        yield return new WaitForSeconds(1.5f);

        if (winCanvas != null) winCanvas.SetActive(true);
        canClickCta = true;
        LunaPlayableAdapter.GameEnded();
    }

    public void TriggerLose()
    {
        if (isGameOver) return;
        StartCoroutine(LoseRoutine());
    }

    private IEnumerator LoseRoutine()
    {
        isGameOver = true;
        CurrentState = GameState.Lose;
        DraggableItem.InputLocked = true;
        if (tutorialHand != null) tutorialHand.HideGuide();
        if (SoundManager.Instance != null) SoundManager.Instance.PlayTap();

        // Girl opens the door (her fail anim switches door_closed -> door_opened).
        if (girlSpine != null && girlSpine.Skeleton != null)
        {
            girlSpine.AnimationState.SetAnimation(0, "Thao Tac Sai", false);
            girlSpine.AnimationState.AddAnimation(0, "Thao Tac Sai_Loop", true, 0f);
        }

        // Wolf reaction: disguised with grandma's head -> 'Thao Tac Sai 1', otherwise wolf face -> 'Thao Tac Sai 2'.
        if (wolfSpine != null && wolfSpine.Skeleton != null)
        {
            string fail = activeWolfSkins.Contains("grandma_head") ? "Thao Tac Sai 1" : "Thao Tac Sai 2";
            wolfSpine.AnimationState.SetAnimation(0, fail, false);
            wolfSpine.AnimationState.AddAnimation(0, fail + "_Loop", true, 0f);
        }

        if (SoundManager.Instance != null && SoundManager.Instance.voiceFail != null)
        {
            SoundManager.Instance.PlayVoice(SoundManager.Instance.voiceFail);
        }

        yield return new WaitForSeconds(2.7f); // let the fail animation (2.67s) play out

        if (loseCanvas != null) loseCanvas.SetActive(true);
        canClickCta = true;
        LunaPlayableAdapter.GameEnded();
    }

    public void OnCtaClicked()
    {
        // Button click + tap-anywhere can fire in the same frame; only open the store once per tap.
        if (Time.unscaledTime - lastCtaTime < 0.5f) return;
        lastCtaTime = Time.unscaledTime;
        LunaPlayableAdapter.InstallFullGame();
    }
}
