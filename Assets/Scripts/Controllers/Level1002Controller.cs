using UnityEngine;
using Spine.Unity;

public class Level1002Controller : MonoBehaviour
{
    public static Level1002Controller Instance { get; private set; }

    [SerializeField] private GameObject outroWinObject;
    [SerializeField] private GameObject endCardUI;

    private int completedSteps = 0;
    private const int TOTAL_STEPS = 7;

    private void Awake()
    {
        if (Instance == null) Instance = this;

        // Clean up any missing hint / text overlays
        var hints = GameObject.Find("Hints");
        if (hints != null) hints.SetActive(false);

        var canvasText = GameObject.Find("Canvas-Text");
        if (canvasText != null) canvasText.SetActive(false);

        // Ensure Seq-OutroWin is inactive at start
        if (outroWinObject == null)
        {
            var outro = GameObject.Find("Seq-OutroWin");
            if (outro != null) outroWinObject = outro;
        }
        if (outroWinObject != null)
        {
            outroWinObject.SetActive(false);
        }
        if (endCardUI != null)
        {
            endCardUI.SetActive(false);
        }
    }

    private void Start()
    {
        if (LevelHeaderUI.Instance != null)
        {
            LevelHeaderUI.Instance.SetSteps(0, TOTAL_STEPS);
        }
    }

    public void StepCompleted(string stepName)
    {
        completedSteps++;
        Debug.Log($"[Level1002] Step completed: {stepName} ({completedSteps}/{TOTAL_STEPS})");

        if (LevelHeaderUI.Instance != null)
        {
            LevelHeaderUI.Instance.SetSteps(completedSteps, TOTAL_STEPS);
        }

        if (GameEndingAndCTAController.Instance != null)
        {
            GameEndingAndCTAController.Instance.OnStepUpdated(completedSteps, TOTAL_STEPS);
        }

        if (completedSteps >= TOTAL_STEPS)
        {
            TriggerWin();
        }
    }

    public void TriggerWin()
    {
        Debug.Log("[Level1002] ALL 7 STEPS COMPLETE! LEVEL WON!");
        AudioManager.Instance?.PlayWin();
        LunaPlayableBridge.Instance?.OnGameWin();

        // Change girl chubby skin to slim/pretty version
        var mixer = FindObjectOfType<SpineSkinMixer>();
        if (mixer != null)
        {
            mixer.SetSkin("Girl_Trang Gay");
        }

        // Play Outro animation on all 5 background girls
        PlayAllGirlsOutro();

        if (outroWinObject != null)
        {
            outroWinObject.SetActive(true);
        }
        if (endCardUI != null)
        {
            endCardUI.SetActive(true);
        }

        if (GameEndingAndCTAController.Instance != null)
        {
            GameEndingAndCTAController.Instance.TriggerWin();
        }
    }

    public void TriggerLose()
    {
        if (GameEndingAndCTAController.Instance != null)
        {
            GameEndingAndCTAController.Instance.TriggerLose();
        }
    }

    private void PlayAllGirlsOutro()
    {
        for (int i = 1; i <= 5; i++)
        {
            var go = GameObject.Find($"Spine GameObject (Girl {i})");
            if (go != null)
            {
                var sa = go.GetComponent<SkeletonAnimation>();
                if (sa != null)
                {
                    sa.AnimationState.SetAnimation(0, "Outro", true);
                }
            }
        }
    }
}
