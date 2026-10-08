using UnityEngine;
using TMPro;
using System.Collections.Generic;
using System.Collections;
using UnityEngine.Events;
using System;
using UnityEngine.UI;
using TalkStep.Audios;
using UnityEngine.Serialization;

public class TalkStepController : MonoBehaviour {
    #region Singleton
    public static TalkStepController Instance { get; private set; }

    private void Awake() {
        Instance = this;
    }
    #endregion

    #region References
    [Header("References")]
    [SerializeField] TextMeshProUGUI talkStepText;
    [SerializeField] Image talkStepBackground;
    #endregion

    #region General Settings
    [Header("General Settings")]
    [SerializeField] private float timeShowText = 3f; // Thời gian hiển thị text
    [SerializeField] private float delayBetweenTexts = 0.5f; // Thời gian giữa các đoạn hội thoại
    #endregion

    #region Start Game Talk Settings
    [Header("Start Game Talk Settings")]
    [SerializeField] private bool enableStartGameTalk = true; // Bật/tắt tính năng hiển thị hội thoại khi bắt đầu
    [SerializeField] private bool autoPlayAtStart = true; // Tự động hiển thị khi bắt đầu game

    [Header("Start Game Talk Text")]
    [Tooltip("Localization key for start game talk")]
    [SerializeField] private string startGameTalkKey;
    [Tooltip("Fallback text if localization key not found")]
    [FormerlySerializedAs("startGameTalksText")]
    [SerializeField] private string startGameFallbackText;

    [Header("Start Game Talk Sounds")]
    [Tooltip("Sound to play for Vietnamese language")]
    [SerializeField] private Audio vietnameseStartGameSound;
    [Tooltip("Sound to play for all other languages")]
    [SerializeField] private Audio defaultStartGameSound;

    [SerializeField] private float startGameSoundDelay = 0f; // Thời gian delay trước khi phát âm thanh
    [SerializeField] private bool syncTextTimeWithSound = true; // Đồng bộ thời gian hiển thị text với độ dài âm thanh
    [SerializeField] private float customSoundDuration = 3f; // Thời lượng âm thanh tùy chỉnh thủ công
    [SerializeField] private float soundTextOffset = 0.5f; // Thời gian thêm vào cuối để hiển thị text sau khi âm thanh kết thúc
    [SerializeField] private Color startGameTextColor = Color.white; // Màu sắc cho hội thoại bắt đầu
    [SerializeField] private TextAnimationType startGameTextAnimation = TextAnimationType.None; // Hiệu ứng cho text
    [SerializeField] private float animationSpeed = 1f; // Tốc độ hiệu ứng
    #endregion

    #region Coroutine Tracking
    // Biến lưu trữ các coroutine hiển thị text đang chạy để có thể hủy chúng khi cần
    private Coroutine currentTextCoroutine;
    private Coroutine currentSequentialTalksCoroutine;
    private Coroutine currentSoundCoroutine; // Thêm biến theo dõi coroutine cho âm thanh
    private bool isShowingText = false;
    #endregion

    #region Enums
    public enum TextAnimationType {
        None,
        FadeIn,
        TypeWriter,
        Scale
    }
    #endregion

    public Action OnTextUIShow;
    public Action OnTextUIHide;

    private void Start() {
        if (autoPlayAtStart) {
            PlayStartGameTalk(); // Gọi phương thức khi bắt đầu game
        }
    }

    #region Public Methods
    /// <summary>
    /// Hiển thị hội thoại khi bắt đầu game/level
    /// </summary>
    public void PlayStartGameTalk() {
        if (!enableStartGameTalk)
            return;

        // Lấy text đã được địa phương hóa
        string localizedText = GetLocalizedStartGameText();

        if (string.IsNullOrEmpty(localizedText))
            return;

        // Tính toán thời gian hiển thị text dựa vào cài đặt đồng bộ với âm thanh
        float textDisplayTime = timeShowText;

        // Lấy âm thanh phù hợp với ngôn ngữ hiện tại
        Audio soundToPlay = GetLanguageSpecificStartGameSound();

        // Phát âm thanh khi bắt đầu hiển thị hội thoại
        if (soundToPlay != null) {
            // Dừng coroutine âm thanh hiện tại nếu có
            StopCurrentSoundCoroutine();

            // Bắt đầu coroutine mới và lưu lại tham chiếu
            currentSoundCoroutine = StartCoroutine(PlaySoundWithDelay(soundToPlay));

            // Nếu bật đồng bộ hóa thời gian, sử dụng thời lượng tùy chỉnh của âm thanh
            if (syncTextTimeWithSound) {
                textDisplayTime = customSoundDuration + soundTextOffset + startGameSoundDelay;
            }
        }

        // Áp dụng cài đặt style cho text và hiển thị
        ApplyStartGameTextStyle();
        ShowTextWithAnimation(localizedText, startGameTextAnimation, textDisplayTime);
    }

    private IEnumerator PlaySoundWithDelay(Audio sound) {
        // Không cần dừng âm thanh hiện tại vì LevelSoundFX.PlaySoundFX sẽ tự động xử lý
        // dựa trên kênh âm thanh (TalkStep sẽ dừng kênh TalkStep trước đó)

        // Chờ theo thời gian delay đã cấu hình
        if (startGameSoundDelay > 0) {
            yield return new WaitForSeconds(startGameSoundDelay);
        }

        // Phát âm thanh
        LevelSoundFX.PlaySoundFX(sound);

        // Đánh dấu coroutine hiện tại đã hoàn thành
        currentSoundCoroutine = null;
    }

    /// <summary>
    /// Hủy coroutine âm thanh hiện tại nếu có
    /// </summary>
    private void StopCurrentSoundCoroutine() {
        if (currentSoundCoroutine != null) {
            StopCoroutine(currentSoundCoroutine);
            currentSoundCoroutine = null;
        }

        // Dừng âm thanh TalkStep đang phát
        LevelSoundFX.StopCurrentTalkStep();
    }

    /// <summary>
    /// Hiển thị text với UI
    /// </summary>
    public void ShowTextUI(string text) {
        ShowTextUI(text, timeShowText);
    }

    /// <summary>
    /// Hiển thị text với UI và thời gian tùy chỉnh
    /// </summary>
    public void ShowTextUI(string text, float duration) {
        if (talkStepText == null) {
            Debug.LogWarning("TalkStepText is not assigned in the inspector.");
            return;
        }

        // Hủy coroutine hiện tại nếu có
        StopCurrentTextCoroutine();

        // Bắt đầu coroutine mới và lưu lại reference
        currentTextCoroutine = StartCoroutine(ShowText(text, duration));

        OnTextUIShow?.Invoke();
    }
    /// <summary>
    /// Hủy tất cả các hiển thị text đang chạy
    /// </summary>
    public void StopAllTextDisplay() {
        StopCurrentTextCoroutine();
        StopCurrentSequentialCoroutine();
        StopCurrentSoundCoroutine(); // Thêm dừng âm thanh khi dừng hiển thị text

        // Xóa text hiện tại
        // if (talkStepText != null) {
        //     talkStepText.text = string.Empty;
        // }

        // isShowingText = false;
        Text_Display(false);
    }
    #endregion

    #region Private Methods
    /// <summary>
    /// Lấy text đã được địa phương hóa cho hội thoại khi bắt đầu
    /// </summary>
    private string GetLocalizedStartGameText() {
        if (!string.IsNullOrEmpty(startGameTalkKey)) {
            string localizedText = LocalizationManager.GetString(startGameTalkKey);

            // Nếu không tìm thấy key trong bảng dịch, sử dụng text dự phòng
            if (localizedText == "Missing Localization" || (localizedText == startGameTalkKey && !string.IsNullOrEmpty(startGameFallbackText))) {
                return startGameFallbackText;
            }

            return localizedText;
        }

        // Sử dụng text dự phòng nếu không có key
        return startGameFallbackText;
    }

    /// <summary>
    /// Lấy âm thanh phù hợp với ngôn ngữ hiện tại cho hội thoại khi bắt đầu
    /// </summary>
    private Audio GetLanguageSpecificStartGameSound() {
        // Kiểm tra nếu ngôn ngữ hiện tại là tiếng Việt
        bool isVietnamese = LocalizationManager.CurrentLanguageCode.Equals("vi", StringComparison.OrdinalIgnoreCase);

        // Nếu là tiếng Việt và có sound tiếng Việt, trả về sound tiếng Việt
        if (isVietnamese && vietnameseStartGameSound != null) {
            return vietnameseStartGameSound;
        }

        // Nếu không, trả về sound mặc định
        return defaultStartGameSound;
    }

    /// <summary>
    /// Hủy coroutine hiển thị text hiện tại nếu có
    /// </summary>
    private void StopCurrentTextCoroutine() {
        if (currentTextCoroutine != null) {
            StopCoroutine(currentTextCoroutine);
            currentTextCoroutine = null;
        }
    }

    /// <summary>
    /// Hủy coroutine hiển thị nhiều đoạn hội thoại hiện tại nếu có
    /// </summary>
    private void StopCurrentSequentialCoroutine() {
        if (currentSequentialTalksCoroutine != null) {
            StopCoroutine(currentSequentialTalksCoroutine);
            currentSequentialTalksCoroutine = null;
        }
    }

    /// <summary>
    /// Áp dụng style cho text bắt đầu game
    /// </summary>
    private void ApplyStartGameTextStyle() {
        if (talkStepText != null) {
            talkStepText.color = startGameTextColor;
        }
    }

    /// <summary>
    /// Hiển thị text với hiệu ứng
    /// </summary>
    private void ShowTextWithAnimation(string text, TextAnimationType animationType, float duration) {
        if (talkStepText == null) return;

        // Hủy coroutine hiện tại nếu có
        StopCurrentTextCoroutine();

        switch (animationType) {
            case TextAnimationType.None:
                ShowTextUI(text, duration);
                break;
            case TextAnimationType.FadeIn:
                currentTextCoroutine = StartCoroutine(FadeInText(text, duration));
                break;
            case TextAnimationType.TypeWriter:
                currentTextCoroutine = StartCoroutine(TypeWriterEffect(text, duration));
                break;
            case TextAnimationType.Scale:
                currentTextCoroutine = StartCoroutine(ScaleTextEffect(text, duration));
                break;
        }
    }

    /// <summary>
    /// Hiển thị nhiều đoạn hội thoại theo thứ tự
    /// </summary>
    public void ShowTalksSequentially(List<string> talks) {
        if (talks == null || talks.Count == 0) return;

        // Hủy bỏ các coroutine đang chạy
        StopAllTextDisplay();

        // Bắt đầu coroutine mới và lưu lại reference
        currentSequentialTalksCoroutine = StartCoroutine(ShowTalksSequentiallyCoroutine(talks));
    }

    /// <summary>
    /// Coroutine hiển thị nhiều đoạn hội thoại theo thứ tự
    /// </summary>
    private IEnumerator ShowTalksSequentiallyCoroutine(List<string> talks) {
        foreach (string talk in talks) {
            // Đảm bảo coroutine hiển thị text trước đó đã kết thúc
            if (currentTextCoroutine != null) {
                StopCoroutine(currentTextCoroutine);
                currentTextCoroutine = null;
            }

            // Hiển thị text hiện tại và chờ nó kết thúc
            // isShowingText = true;
            Text_Display(true);
            currentTextCoroutine = StartCoroutine(ShowText(talk, timeShowText));

            // Chờ cho đến khi coroutine hiển thị text kết thúc
            while (isShowingText) {
                yield return null;
            }

            // Chờ thêm một khoảng thời gian giữa các đoạn hội thoại
            yield return new WaitForSeconds(delayBetweenTexts);
        }

        currentSequentialTalksCoroutine = null;
    }

    /// <summary>
    /// Hiệu ứng hiển thị text cơ bản
    /// </summary>
    private IEnumerator ShowText(string text, float duration) {
        // isShowingText = true;
        // talkStepText.text = text;
        Text_Display(true, text);
        yield return new WaitForSeconds(duration);
        // talkStepText.text = string.Empty;
        // isShowingText = false;
        Text_Display(false);
        currentTextCoroutine = null;

        OnTextUIHide?.Invoke();
    }

    /// <summary>
    /// Hiệu ứng text hiện dần
    /// </summary>
    private IEnumerator FadeInText(string text, float duration) {
        // isShowingText = true;
        // talkStepText.text = text;
        Text_Display(true, text);

        // Đặt alpha = 0
        Color originalColor = talkStepText.color;
        talkStepText.color = new Color(originalColor.r, originalColor.g, originalColor.b, 0);

        // Hiệu ứng fade in
        float elapsedTime = 0;
        float fadeTime = Mathf.Min(duration * 0.3f, 1f) / animationSpeed;

        while (elapsedTime < fadeTime) {
            elapsedTime += Time.deltaTime;
            float alpha = Mathf.Clamp01(elapsedTime / fadeTime);
            talkStepText.color = new Color(originalColor.r, originalColor.g, originalColor.b, alpha);
            yield return null;
        }

        // Hiển thị đầy đủ
        talkStepText.color = originalColor;

        // Chờ thời gian hiển thị
        yield return new WaitForSeconds(duration - fadeTime);

        // Kiểm tra xem coroutine có bị hủy không
        if (currentTextCoroutine == null) {
            // isShowingText = false;
            Text_Display(false);
            yield break;
        }

        // Xóa text
        // talkStepText.text = string.Empty;
        // isShowingText = false;
        Text_Display(false);
        currentTextCoroutine = null;

        OnTextUIHide?.Invoke();
    }

    /// <summary>
    /// Hiệu ứng text đánh máy từng chữ
    /// </summary>
    private IEnumerator TypeWriterEffect(string text, float duration) {
        // isShowingText = true;
        // talkStepText.text = "";
        Text_Display(true, "");

        // Hiệu ứng đánh máy từng chữ
        float typingSpeed = 0.05f / animationSpeed;
        float typingTime = text.Length * typingSpeed;
        float displayTime = Mathf.Max(duration - typingTime, 1f);

        for (int i = 0; i < text.Length; i++) {
            // Kiểm tra xem coroutine có bị hủy không
            if (currentTextCoroutine == null) {
                // isShowingText = false;
                Text_Display(false);
                yield break;
            }

            talkStepText.text += text[i];
            yield return new WaitForSeconds(typingSpeed);
        }

        // Chờ thời gian hiển thị
        yield return new WaitForSeconds(displayTime);

        // Kiểm tra xem coroutine có bị hủy không
        if (currentTextCoroutine == null) {
            // isShowingText = false;
            Text_Display(false);
            yield break;
        }

        // Xóa text
        // talkStepText.text = string.Empty;
        // isShowingText = false;
        Text_Display(false);
        currentTextCoroutine = null;

        OnTextUIHide?.Invoke();
    }

    /// <summary>
    /// Hiệu ứng text phóng to thu nhỏ
    /// </summary>
    private IEnumerator ScaleTextEffect(string text, float duration) {
        // isShowingText = true;
        // talkStepText.text = text;
        Text_Display(true, text);

        // Lưu kích thước ban đầu
        float originalSize = talkStepText.fontSize;

        // Bắt đầu từ kích thước nhỏ
        talkStepText.fontSize = originalSize * 0.5f;

        // Hiệu ứng phóng to
        float scaleTime = Mathf.Min(duration * 0.2f, 0.5f) / animationSpeed;
        float elapsedTime = 0;

        while (elapsedTime < scaleTime) {
            // Kiểm tra xem coroutine có bị hủy không
            if (currentTextCoroutine == null) {
                // Đặt lại kích thước font
                talkStepText.fontSize = originalSize;
                // isShowingText = false;
                Text_Display(false);
                yield break;
            }

            elapsedTime += Time.deltaTime;
            float scaleFactor = Mathf.Lerp(0.5f, 1.1f, elapsedTime / scaleTime);
            talkStepText.fontSize = originalSize * scaleFactor;
            yield return null;
        }

        // Thu nhỏ lại kích thước bình thường
        elapsedTime = 0;
        while (elapsedTime < scaleTime) {
            // Kiểm tra xem coroutine có bị hủy không
            if (currentTextCoroutine == null) {
                // Đặt lại kích thước font
                talkStepText.fontSize = originalSize;
                // isShowingText = false;
                Text_Display(false);
                yield break;
            }

            elapsedTime += Time.deltaTime;
            float scaleFactor = Mathf.Lerp(1.1f, 1f, elapsedTime / scaleTime);
            talkStepText.fontSize = originalSize * scaleFactor;
            yield return null;
        }

        // Đặt lại kích thước chính xác
        talkStepText.fontSize = originalSize;

        // Chờ thời gian hiển thị
        yield return new WaitForSeconds(duration - (scaleTime * 2));

        // Kiểm tra xem coroutine có bị hủy không
        if (currentTextCoroutine == null) {
            // isShowingText = false;
            Text_Display(false);
            yield break;
        }

        // Xóa text
        // talkStepText.text = string.Empty;
        // isShowingText = false;
        Text_Display(false);
        currentTextCoroutine = null;

        OnTextUIHide?.Invoke();
    }
    /// <summary>
    /// hiển thị text tổng quát
    /// </summary>
    bool HaveTextBackground => talkStepBackground != null;
    void Text_Display(bool Showing, string Context = null) {
        if (HaveTextBackground) {
            talkStepBackground.enabled = Showing;
        }
        if (talkStepText != null) {
            talkStepText.text = Context;
            isShowingText = Showing;
        }
    }
    #endregion
}