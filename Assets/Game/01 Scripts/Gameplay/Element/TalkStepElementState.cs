using UnityEngine;
using TalkStep.Audios;
using System;

public enum TalkStepPlayType {
    OnEnable,
    CallByUnityEvent,
}

public class TalkStepElementState : MonoBehaviour {
    [Header("Talk Step Configuration")]
    [SerializeField] private TalkStepPlayType talkStepPlayType = TalkStepPlayType.OnEnable;
    //[SerializeField, Tooltip("Default step: 2")] private int step = 2;

    [Header("Text Options")]
    [Tooltip("Localization key for text")]
    [SerializeField] private string talkStepTextKey;

    [Tooltip("Fallback text if localization key is not found")]
    [SerializeField] private string fallbackText;

    [Header("Language-Specific Sounds")]
    [Tooltip("Sound to play for Vietnamese language")]
    [SerializeField] private Audio[] vietnameseSound;

    [Tooltip("Sound to play for all other languages")]
    [SerializeField] private Audio[] defaultSound;

    private void OnValidate() {
        // Set default values for audio settings
        SetDefaultAudioSettings(vietnameseSound);
        SetDefaultAudioSettings(defaultSound);
    }

    private void SetDefaultAudioSettings(Audio[] audioArray) {
        if (audioArray == null) return;

        foreach (var audio in audioArray) {
            if (audio != null) {
                audio.Configure(AudioChannel.SoundFX, 1f, false);
            }
        }
    }

    private void OnEnable() {
        // Gọi hàm khi đối tượng được kích hoạt
        if (talkStepPlayType == TalkStepPlayType.OnEnable) {
            PlayTalkStepSound();
            ShowLocalizedText();
        }
    }

    // call by unity event in inspector
    public void OnDragComplete() {
        // Gọi hàm khi kéo hoàn tất
        if (talkStepPlayType == TalkStepPlayType.CallByUnityEvent) {
            PlayTalkStepSound();
            ShowLocalizedText();
        }
    }

    private void PlayTalkStepSound() {
        // Kiểm tra nếu ngôn ngữ hiện tại là tiếng Việt
        bool isVietnamese = LocalizationManager.CurrentLanguageCode.Equals("vi", StringComparison.OrdinalIgnoreCase);

        // Chọn sound phù hợp dựa trên ngôn ngữ
        Audio[] soundToPlay = isVietnamese && vietnameseSound != null && vietnameseSound.Length > 0
            ? vietnameseSound
            : defaultSound;

        if (soundToPlay != null && soundToPlay.Length > 0) {
            // Dừng TalkStep hiện tại trước khi phát TalkStep mới
            LevelSoundFX.StopCurrentTalkStep();

            foreach (var sound in soundToPlay) {
                if (sound != null) {
                    LevelSoundFX.PlaySoundFX(sound);
                }
            }
        }
    }

    private void ShowLocalizedText() {
        if (TalkStepController.Instance == null) {
            Debug.LogWarning("TalkStepController instance is not assigned.");
            return;
        }

        string textToShow = GetLocalizedText();
        if (!string.IsNullOrEmpty(textToShow)) {
            TalkStepController.Instance.ShowTextUI(textToShow);
        }
    }

    private string GetLocalizedText() {
        // Nếu có key, sử dụng localization
        if (!string.IsNullOrEmpty(talkStepTextKey)) {
            string localizedText = LocalizationManager.GetString(talkStepTextKey);

            // Nếu không tìm thấy key trong bảng dịch, sử dụng text dự phòng
            if (localizedText == "Missing Localization") {
                return fallbackText;
            }

            return localizedText;
        }

        // Sử dụng text dự phòng nếu không có key
        return fallbackText;
    }
}