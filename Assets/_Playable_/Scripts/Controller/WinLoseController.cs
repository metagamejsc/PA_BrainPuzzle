using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace Playable
{
    public class WinLoseController : MonoBehaviour
    {
        public static WinLoseController Instance { get; private set; }

        [Header("Progress Bar (Image Filled)")]
        [Tooltip("Kéo Image có Image Type là Filled vào đây")]
        [SerializeField] private Image _progressBar;
        [SerializeField] private bool _autoCheckFull = true;
        [SerializeField] private bool _resetProgressOnStart = false;

        [Header("Win Settings")]
        [SerializeField] private GameObject _winObject;
        [SerializeField] private Transform _winTitle;
        [SerializeField] private float _winStartScale = 0.3f;
        [SerializeField] private float _winAnimDuration = 0.5f;
        [SerializeField] private Ease _winEase = Ease.OutBack;
        [SerializeField] private float _showWinDelay = 0f;

        [Header("Lose Settings")]
        [SerializeField] private GameObject _loseObject;
        [SerializeField] private Transform _loseTitle;
        [SerializeField] private float _loseStartScale = 1.8f;
        [SerializeField] private float _loseAnimDuration = 0.5f;
        [SerializeField] private Ease _loseEase = Ease.OutBack;
        [SerializeField] private float _showLoseDelay = 0f;

        private bool _isWinTriggered;
        private bool _isLoseTriggered;
        private bool _isWinAnimated;
        private bool _isLoseAnimated;
        private bool _canTriggerWin;

        private Tween _winTween;
        private Tween _loseTween;
        private Tween _progressTween;

        public event Action OnWinShown;
        public event Action OnLoseShown;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
        }

        private void Start()
        {
            if (_progressBar != null)
            {
                if (_resetProgressOnStart)
                {
                    _progressBar.fillAmount = 0f;
                    _canTriggerWin = true;
                }
                else
                {
                    if (_progressBar.fillAmount < 0.999f)
                    {
                        _canTriggerWin = true;
                    }
                }
            }
        }

        private void Update()
        {
            // 1. Kiểm tra tự động thanh ProgressBar đầy -> Kích hoạt Win
            if (_autoCheckFull && !_isWinTriggered && _progressBar != null)
            {
                if (!_canTriggerWin && _progressBar.fillAmount < 0.999f)
                {
                    _canTriggerWin = true;
                }

                if (_canTriggerWin && _progressBar.fillAmount >= 0.999f)
                {
                    ShowWin();
                }
            }

            // 2. Tự động bắt sự kiện khi Lose Object hoặc Lose Title được bật lên (kể cả do GameManager hay script khác bật)
            bool isLoseActive = (_loseObject != null && _loseObject.activeInHierarchy) || 
                                (_loseTitle != null && _loseTitle.gameObject.activeInHierarchy);
            if (!_isLoseAnimated && isLoseActive)
            {
                PlayLoseTitleAnimation();
            }

            // 3. Tự động bắt sự kiện khi Win Object hoặc Win Title được bật lên
            bool isWinActive = (_winObject != null && _winObject.activeInHierarchy) || 
                               (_winTitle != null && _winTitle.gameObject.activeInHierarchy);
            if (!_isWinAnimated && isWinActive)
            {
                PlayWinTitleAnimation();
            }
        }

        /// <summary>
        /// Cập nhật tiến trình qua Image fillAmount (từ 0.0 đến 1.0)
        /// </summary>
        public void SetProgress(float targetFill, bool animate = true, float duration = 0.25f)
        {
            if (_progressBar == null) return;

            targetFill = Mathf.Clamp01(targetFill);
            if (targetFill < 0.999f)
            {
                _canTriggerWin = true;
            }

            _progressTween?.Kill();

            if (animate)
            {
                _progressTween = _progressBar.DOFillAmount(targetFill, duration)
                    .SetEase(Ease.OutCubic)
                    .OnUpdate(() =>
                    {
                        if (!_isWinTriggered && _canTriggerWin && _progressBar.fillAmount >= 0.999f)
                        {
                            ShowWin();
                        }
                    });
            }
            else
            {
                _progressBar.fillAmount = targetFill;
                if (!_isWinTriggered && _canTriggerWin && _progressBar.fillAmount >= 0.999f)
                {
                    ShowWin();
                }
            }
        }

        /// <summary>
        /// Hiển thị Win object và kích hoạt animation scale title từ 0.3 về 1
        /// </summary>
        public void ShowWin()
        {
            if (_isWinTriggered) return;
            _isWinTriggered = true;

            DOVirtual.DelayedCall(_showWinDelay, () =>
            {
                if (_winObject != null)
                {
                    _winObject.SetActive(true);
                }

                PlayWinTitleAnimation();
                OnWinShown?.Invoke();
            });
        }

        /// <summary>
        /// Hiển thị Lose object và kích hoạt animation scale title từ 1.8 về 1
        /// </summary>
        public void ShowLose()
        {
            if (_isLoseTriggered) return;
            _isLoseTriggered = true;

            DOVirtual.DelayedCall(_showLoseDelay, () =>
            {
                if (_loseObject != null)
                {
                    _loseObject.SetActive(true);
                }

                PlayLoseTitleAnimation();
                OnLoseShown?.Invoke();
            });
        }

        /// <summary>
        /// Chạy hiệu ứng scale Title Win: từ 0.3 về 1
        /// </summary>
        public void PlayWinTitleAnimation()
        {
            if (_isWinAnimated || _winTitle == null) return;
            _isWinAnimated = true;

            _winTitle.gameObject.SetActive(true);
            _winTween?.Kill();
            _winTitle.localScale = Vector3.one * _winStartScale;
            _winTween = _winTitle.DOScale(Vector3.one, _winAnimDuration)
                .SetEase(_winEase)
                .SetUpdate(true);
        }

        /// <summary>
        /// Chạy hiệu ứng scale Title Lose: từ 1.8 về 1
        /// </summary>
        public void PlayLoseTitleAnimation()
        {
            if (_isLoseAnimated || _loseTitle == null) return;
            _isLoseAnimated = true;

            _loseTitle.gameObject.SetActive(true);
            _loseTween?.Kill();
            _loseTitle.localScale = Vector3.one * _loseStartScale;
            _loseTween = _loseTitle.DOScale(Vector3.one, _loseAnimDuration)
                .SetEase(_loseEase)
                .SetUpdate(true);
        }

        private void OnDestroy()
        {
            _winTween?.Kill();
            _loseTween?.Kill();
            _progressTween?.Kill();
        }
    }
}
