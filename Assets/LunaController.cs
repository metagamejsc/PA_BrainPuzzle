using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Count Play")] public int CountPlay;
    [LunaPlaygroundField("BG Color")] public Color BGColor;
    [LunaPlaygroundField("Game BG Color")] public Color GameBGColor;
    [LunaPlaygroundField("Level Text Color")] public Color LevelTextColor;
    [LunaPlaygroundField("Header Text Color")] public Color TitleTextColor;
    [LunaPlaygroundField("Sub BG Color")] public Color SubBGColor;

    [SerializeField] private Text time;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private RawImage GameBGImage;
    [SerializeField] private Image progressBar;
    [SerializeField] private Text levelText;
    [SerializeField] private Text titleText;
    [SerializeField] private RawImage subBG;
    [SerializeField] private int _maxCount;
    [SerializeField] private LevelHeaderUI _levelHeaderUI;

    [SerializeField] private Transform endCard;
    [SerializeField] private List<Button> CTA;

    [SerializeField] private int showCTAStep;

    private int _currentCount;
    public int ShowCTAStep
    {
        get => showCTAStep;
        set
        {
            showCTAStep = value;
            if (LevelHeaderUI.Instance != null)
            {
                LevelHeaderUI.Instance.ShowCTAStep = value;
            }
        }
    }
  
    void Awake()
    {
        ShowCTAStep = CountPlay;

        if (CTA != null) CTA.ForEach(b => { if (b != null) b.onClick.AddListener(ClickCTA); });
        if (endCard != null) endCard.gameObject.SetActive(false);

        if (BGImage != null) BGImage.color = BGColor;
        if (GameBGImage != null) GameBGImage.color = GameBGColor;
        if (levelText != null) levelText.color = LevelTextColor;
        if (titleText != null) titleText.color = TitleTextColor;
        if (subBG != null) subBG.color = SubBGColor;
    }
    private bool _isCountEventTriggered = false;

    void Start()
    {
        ShowCTAStep = CountPlay;

        if (progressBar == null)
        {
            if (_levelHeaderUI != null && _levelHeaderUI.ProgressFill != null)
                progressBar = _levelHeaderUI.ProgressFill;
            else if (LevelHeaderUI.Instance != null && LevelHeaderUI.Instance.ProgressFill != null)
                progressBar = LevelHeaderUI.Instance.ProgressFill;
        }

        if (TimePlay > 0 && time != null)
        {
            StartCoroutine(CountdownTimerRoutine());
        }
    }

    void Update()
    {
        if (!_isCountEventTriggered && CountPlay > 0)
        {
            if (progressBar == null)
            {
                if (_levelHeaderUI != null && _levelHeaderUI.ProgressFill != null)
                    progressBar = _levelHeaderUI.ProgressFill;
                else if (LevelHeaderUI.Instance != null && LevelHeaderUI.Instance.ProgressFill != null)
                    progressBar = LevelHeaderUI.Instance.ProgressFill;
            }

            if (progressBar != null && progressBar.fillAmount >= (float)CountPlay / 10f - 0.005f)
            {
                _isCountEventTriggered = true;
                StartCoroutine(CountEvent());
            }
        }
    }

    public IEnumerator CountEvent()
    {
        if (progressBar == null)
        {
            if (_levelHeaderUI != null && _levelHeaderUI.ProgressFill != null)
                progressBar = _levelHeaderUI.ProgressFill;
            else if (LevelHeaderUI.Instance != null && LevelHeaderUI.Instance.ProgressFill != null)
                progressBar = LevelHeaderUI.Instance.ProgressFill;
        }

        if (progressBar != null && progressBar.fillAmount >= (float)CountPlay / 10f - 0.005f)
        {
            _isCountEventTriggered = true;
            EndGame();
            Luna.Unity.Playable.InstallFullGame();
        }
        yield return null;
    }

    private IEnumerator CountdownTimerRoutine()
    {
        float count = TimePlay;
        int round = (int)TimePlay;
        if (time != null) time.text = round.ToString();
        while (count > 0)
        {
            count -= Time.unscaledDeltaTime;
            if (count < round)
            {
                if (time != null) time.text = round.ToString();
                round--;
            }
            yield return null;
        }
        if (time != null) time.text = "0";
        ShowEndCard();
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void ShowEndCard()
    {
        if (endCard != null) endCard.gameObject.SetActive(true);
        Luna.Unity.Playable.InstallFullGame();
    }

    public void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame(); // click cta/ show end event count 
    }

    public void EndGame()
    {
        if (endCard != null) endCard.gameObject.SetActive(true);
        Luna.Unity.LifeCycle.GameEnded(); // end count event 
    }

}
