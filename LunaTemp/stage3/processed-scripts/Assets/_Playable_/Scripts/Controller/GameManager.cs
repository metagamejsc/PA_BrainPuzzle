using System;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Playable
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance;

        [Header("Luna Field")] [LunaPlaygroundField("Total Event For CTA")] [SerializeField]
        private int _totalEvent;

        [SerializeField] private int _maxEvent;

        [LunaPlaygroundField("End Time")] [SerializeField]
        private int _endTime = 30;

        [LunaPlaygroundAsset("Background Music")] [SerializeField]
        private AudioClip _backgroundMusic;

        [LunaPlaygroundAsset("Background Texture")] [SerializeField]
        private Texture2D _backgroundTexture;

        [SerializeField] private Button _btnBlock;
        [SerializeField] private Image _background;
        [SerializeField] private GameObject _losePanel;
        [SerializeField] private GameObject _winPanel;
        [SerializeField] private List<ParticleSystem> _vfxWin;

        [Header("Progress UI")] [SerializeField]
        private Image _progressFillImage;

        [SerializeField] private TMP_Text _progressText;
        [SerializeField] private float _progressTweenDuration = 0.25f;

        [Header("Timer UI")] [SerializeField] private Image _timerFillImage;

        [SerializeField] private TMP_Text _timerText;
        [SerializeField] private float _timerPunchScale = 0.12f;

        private int _quantityEvent;
        private float _remainingTime;
        private Tween _countdownTween;
        private Tween _progressTween;
        private Tween _timerPunchTween;

        public Action EventCountdownEndGame;

        private void Awake()
        {
            Instance = this;
        }

        private void Start()
        {
            _btnBlock.onClick.AddListener(ClickToCTA);
            _btnBlock.gameObject.SetActive(false);

            if (_backgroundTexture != null)
            {
                _background.sprite = CreateSprite(_backgroundTexture);
            }

            if (_backgroundMusic != null)
            {
                AudioManager.Instance.PlayMusic(_backgroundMusic);
            }

            BindUiReferences();
            InitializeUiState();
            StartCountdown();
        }

        private void OnDestroy()
        {
            _countdownTween?.Kill();
            _progressTween?.Kill();
            _timerPunchTween?.Kill();
        }

        public void EndGame()
        {
            Debug.Log("End Game");
            _countdownTween?.Kill();
            _btnBlock.gameObject.SetActive(true);
            Luna.Unity.LifeCycle.GameEnded();
        }

        public void ClickToCTA()
        {
            Luna.Unity.Playable.InstallFullGame();
        }

        public void StopCountdown()
        {
            _countdownTween?.Kill();
        }

        public void CountEvent()
        {
            _quantityEvent++;
            UpdateProgressUI();

            if (_quantityEvent >= _totalEvent)
            {
                DOVirtual.DelayedCall(2f, () =>
                {
                    _winPanel.gameObject.SetActive(true);
                    foreach (var vfx in _vfxWin)
                    {
                        vfx.Play();
                    }

                    EndGame();
                    ClickToCTA();
                });
            }
        }

        public void CountEvent(Action callback)
        {
            _quantityEvent++;
            UpdateProgressUI();

            if (_quantityEvent >= _totalEvent)
            {
                callback?.Invoke();
            }
        }

        private void BindUiReferences()
        {
            if (_progressText == null)
            {
                GameObject progressObject = GameObject.Find("ProgressBar");
                if (progressObject != null)
                {
                    _progressText = progressObject.GetComponentInChildren<TMP_Text>(true);
                }
            }

            if (_timerText == null)
            {
                GameObject timeObject = GameObject.Find("Time");
                if (timeObject != null)
                {
                    _timerText = timeObject.GetComponentInChildren<TMP_Text>(true);
                }
            }
        }

        private void InitializeUiState()
        {
            if (_progressFillImage != null)
            {
                _progressFillImage.fillAmount = 0f;
            }

            UpdateProgressText();

            if (_timerFillImage != null)
            {
                _timerFillImage.fillAmount = 1f;
            }

            UpdateTimerLabel(_endTime);
        }

        private void StartCountdown()
        {
            _remainingTime = _endTime;
            _countdownTween?.Kill();
            _countdownTween = DOTween.To(
                    () => _remainingTime,
                    value =>
                    {
                        _remainingTime = value;
                        UpdateTimerUI(value);
                    },
                    0f,
                    _endTime)
                .SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    UpdateTimerUI(0f);
                    EventCountdownEndGame?.Invoke();
                    EndGame();
                    ShowLose();
                });
        }

        private void UpdateProgressUI()
        {
            if (_progressFillImage == null || _maxEvent <= 0)
            {
                return;
            }

            float progress = Mathf.Clamp01((float)_quantityEvent / _maxEvent);
            UpdateProgressText();

            _progressTween?.Kill();
            _progressTween = _progressFillImage
                .DOFillAmount(progress, _progressTweenDuration)
                .SetEase(Ease.OutCubic);
        }

        private void UpdateProgressText()
        {
            if (_progressText == null)
            {
                return;
            }

            _progressText.text = _quantityEvent + "/" + _maxEvent;
        }

        private void UpdateTimerUI(float remainingTime)
        {
            if (_timerFillImage != null && _endTime > 0)
            {
                _timerFillImage.fillAmount = Mathf.Clamp01(remainingTime / _endTime);
            }

            UpdateTimerLabel(Mathf.Max(0, Mathf.CeilToInt(remainingTime)));
        }

        private void UpdateTimerLabel(int displayTime)
        {
            if (_timerText == null)
            {
                return;
            }

            string nextValue = displayTime.ToString();
            if (_timerText.text == nextValue)
            {
                return;
            }

            _timerText.text = nextValue;
            _timerPunchTween?.Kill();
            _timerPunchTween = _timerText.transform.DOPunchScale(Vector3.one * _timerPunchScale, 0.2f, 1, 0f);
        }

        protected Sprite CreateSprite(Texture2D texture)
        {
            return Sprite.Create(
                texture,
                new Rect(0f, 0f, texture.width, texture.height),
                new Vector2(0.5f, 0.5f));
        }

        public void ShowLose()
        {
            EndGame();
            DOVirtual.DelayedCall(1.5f, () => { _losePanel.gameObject.SetActive(true); });
        }
    }
}