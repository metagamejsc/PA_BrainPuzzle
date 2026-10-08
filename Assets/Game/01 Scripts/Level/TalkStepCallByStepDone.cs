using UnityEngine;
using TalkStep.Audios;
using System.Collections.Generic;

public class TalkStepCallByStepDone : MonoBehaviour {
    [System.Serializable]
    public struct TalkStepData {
        [SerializeField, Tooltip("Default step: 2")]
        private int _step;
        public int step {
            get => _step;
            set => _step = value;
        }

        [Tooltip("Localization key for text")]
        public string textKey;

        [Tooltip("Fallback text if localization key is not found")]
        public string fallbackText;

        [Header("Language-Specific Sounds")]
        [Tooltip("Sound to play for Vietnamese language")]
        public Audio[] vietnameseSound;

        [Tooltip("Sound to play for all other languages")]
        public Audio[] defaultSound;
    }

    [SerializeField] private TalkStepData[] talkStepDataArray;
    private int currentStep = 0;

    private void Reset() {
        // Set default values when component is added or reset
        if (talkStepDataArray == null || talkStepDataArray.Length == 0) {
            talkStepDataArray = new TalkStepData[1];
            talkStepDataArray[0] = new TalkStepData {
                step = 2
            };
        }
    }

    void OnEnable() {
        ActionEvent.OnPuzzleStepCompleted += OnPuzzleStepCompleted;
    }

    void OnDisable() {
        ActionEvent.OnPuzzleStepCompleted -= OnPuzzleStepCompleted;
    }

    private void OnPuzzleStepCompleted() {
        currentStep++;
        // tìm kiếm talkStepDataArray có step = currentStep
        for (int i = 0; i < talkStepDataArray.Length; i++) {
            if (talkStepDataArray[i].step == currentStep) {
                PlayTalkStepSound(talkStepDataArray[i]);
                ShowText(talkStepDataArray[i]);
                return;
            }
        }
    }

    private void PlayTalkStepSound(TalkStepData talkStepData) {
        // Check current language to determine which sound set to play
        bool isVietnamese = LocalizationManager.CurrentLanguageCode.Equals("vi", System.StringComparison.OrdinalIgnoreCase);

        // Select appropriate sound array based on language
        Audio[] soundToPlay = isVietnamese && talkStepData.vietnameseSound != null && talkStepData.vietnameseSound.Length > 0
            ? talkStepData.vietnameseSound
            : talkStepData.defaultSound;

        if (soundToPlay != null && soundToPlay.Length > 0) {
            foreach (var sound in soundToPlay) {
                if (sound != null) {
                    LevelSoundFX.PlaySoundFX(sound);
                }
            }
        }
    }

    private void ShowText(TalkStepData talkStepData) {
        if (TalkStepController.Instance == null) {
            Debug.LogWarning("TalkStepController instance is not assigned in the inspector.");
            return;
        }

        // Get localized text using the key
        string localizedText = string.Empty;

        if (!string.IsNullOrEmpty(talkStepData.textKey)) {
            localizedText = LocalizationManager.GetString(talkStepData.textKey);

            // If the localization returns "Missing Localization", use fallback text
            if (localizedText == "Missing Localization") {
                localizedText = talkStepData.fallbackText;
            }
        } else {
            // Use fallback text if no key is provided
            localizedText = talkStepData.fallbackText;
        }

        TalkStepController.Instance.ShowTextUI(localizedText);
    }
}