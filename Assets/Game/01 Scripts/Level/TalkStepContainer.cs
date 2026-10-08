using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using System;
using TalkStep.Audios;
public class TalkStepContainer : MonoBehaviour {
    [System.Serializable]
    public struct TalkData {
        public string nameElement;
        public TalkStep[] talkSteps;
    }
    [System.Serializable]
    public struct TalkStep {
        [SerializeField, Tooltip("Default step: 2")]
        private int _step;
        public int step {
            get => _step;
            set => _step = value;
        }

        [Header("Text Options")]
        [Tooltip("Localization key for text")]
        public string textKey;

        [Tooltip("Fallback text if localization key is not found")]
        public string fallbackText;

        [Header("Language-Specific Sounds")]
        [Tooltip("Sound to play for Vietnamese language")]
        public Audio[] vietnameseSound;

        [Tooltip("Sound to play for all other languages")]
        public Audio[] defaultSound;

        [Header("Sound Effects")]
        [Tooltip("Sound effects to play")]
        public Audio[] soundFx;

        [Header("Follow-up Sound Effects")]
        [Tooltip("Sound effect played AFTER the main sound finishes")]
        public Audio followUpSound;

        [Tooltip("Check this if you do NOT want to lock player interaction while sounds are playing")]
        public bool disableInteractionLock;
    }

    [Header("Talk Data")]
    [SerializeField] private TalkData[] talkData;

    public TalkData[] TalkDataList => talkData;

    private Coroutine activeTalkSequenceCoroutine;

    private void Reset() {
        // Set default values when component is added or reset
        if (talkData == null || talkData.Length == 0) {
            talkData = new TalkData[1];
            talkData[0] = new TalkData {
                nameElement = "Element1",
                talkSteps = new TalkStep[] {
                    new TalkStep { step = 2 }
                }
            };
        }
    }

    void OnEnable() {
        ActionEvent.OnElementStateChanged += OnPuzzleStepCompleted;
    }

    void OnDisable() {
        ActionEvent.OnElementStateChanged -= OnPuzzleStepCompleted;
        if (activeTalkSequenceCoroutine != null) {
            StopCoroutine(activeTalkSequenceCoroutine);
            activeTalkSequenceCoroutine = null;
            GamePlayManager.SetAnimationState(false);
        }
    }
    void OnPuzzleStepCompleted(BasePuzzleElement element, int state) {
        if (element == null || talkData == null) return;

        // Tìm dữ liệu talk cho element cụ thể theo tên (không phân biệt hoa thường)
        var currentTalkData = talkData.FirstOrDefault(t => 
            string.Equals(t.nameElement?.Trim(), element.ElementName?.Trim(), StringComparison.OrdinalIgnoreCase));

        if (string.IsNullOrEmpty(currentTalkData.nameElement)) {
            currentTalkData = talkData.FirstOrDefault(t => 
                string.Equals(t.nameElement?.Trim(), element.gameObject.name.Trim(), StringComparison.OrdinalIgnoreCase));
        }

        // Kiểm tra nếu tìm thấy dữ liệu talk hợp lệ và có các bước talk
        if (currentTalkData.talkSteps != null && currentTalkData.talkSteps.Length > 0) {
            // Tìm bước talk khớp với trạng thái hiện tại
            var currentStep = currentTalkData.talkSteps.FirstOrDefault(t => t.step == state);
            if ((currentStep.defaultSound == null || currentStep.defaultSound.Length == 0) &&
                (currentStep.vietnameseSound == null || currentStep.vietnameseSound.Length == 0) &&
                (currentStep.followUpSound == null || currentStep.followUpSound.Clip == null) &&
                currentTalkData.talkSteps.Length > 0) {
                currentStep = currentTalkData.talkSteps[0];
            }

            // Xử lý hiển thị text
            string textToShow = GetLocalizedText(currentStep);
            bool hasValidText = !string.IsNullOrEmpty(textToShow);

            // Xác định sound phù hợp với ngôn ngữ hiện tại
            Audio[] soundToPlay = GetLanguageSpecificSound(currentStep);

            // Hiển thị text nếu có
            if (hasValidText) {
                if (TalkStepController.Instance != null) {
                    TalkStepController.Instance.ShowTextUI(textToShow);
                }
            }

            // Dừng coroutine cũ nếu đang chạy
            if (activeTalkSequenceCoroutine != null) {
                StopCoroutine(activeTalkSequenceCoroutine);
                activeTalkSequenceCoroutine = null;
                GamePlayManager.SetAnimationState(false);
            }

            // Bắt đầu chuỗi phát âm thanh và khóa tương tác
            activeTalkSequenceCoroutine = StartCoroutine(PlayTalkSequenceCoroutine(currentStep, soundToPlay, currentTalkData.nameElement));
        }
    }

    private System.Collections.IEnumerator PlayTalkSequenceCoroutine(TalkStep currentStep, Audio[] soundToPlay, string elementName = "") {
        bool shouldLock = !currentStep.disableInteractionLock;
        if (shouldLock) {
            GamePlayManager.SetAnimationState(true);
        }

        // 1. Phát các soundFx tức thì (nếu có)
        if (currentStep.soundFx != null && currentStep.soundFx.Length > 0) {
            foreach (var sfx in currentStep.soundFx) {
                if (sfx != null && sfx.Clip != null) {
                    LevelSoundFX.PlaySoundFX(sfx);
                }
            }
        }

        // 2. Phát âm thanh đàm thoại chính (voice/dialogue) và tính thời lượng
        float maxVoiceDuration = 0f;
        if (soundToPlay != null && soundToPlay.Length > 0) {
            foreach (var sound in soundToPlay) {
                if (sound != null && sound.Clip != null) {
                    LevelSoundFX.PlaySoundFX(sound);
                    float duration = sound.Clip.length + Mathf.Max(0f, sound.Delay);
                    if (duration > maxVoiceDuration) {
                        maxVoiceDuration = duration;
                    }
                }
            }
        }

        if (maxVoiceDuration > 0f) {
            Debug.Log($"[TalkStepContainer] Playing primary sound for '{elementName}'. Duration: {maxVoiceDuration:F2}s. Player locked: {shouldLock}");
            yield return new WaitForSeconds(maxVoiceDuration);
        }

        // 3. Phát âm thanh nối tiếp (follow-up sound effect) sau khi âm thanh chính kết thúc
        if (currentStep.followUpSound != null && currentStep.followUpSound.Clip != null) {
            float vol = currentStep.followUpSound.Volume > 0f ? currentStep.followUpSound.Volume : 1f;
            currentStep.followUpSound.Configure(AudioChannel.SoundFX, vol, false);

            LevelSoundFX.PlaySoundFX(currentStep.followUpSound);
            float followUpDuration = currentStep.followUpSound.Clip.length + Mathf.Max(0f, currentStep.followUpSound.Delay);
            Debug.Log($"[TalkStepContainer] Primary sound finished. Now playing follow-up '{currentStep.followUpSound.Clip.name}' for '{elementName}'. Duration: {followUpDuration:F2}s. Player remains locked: {shouldLock}");

            if (followUpDuration > 0f) {
                yield return new WaitForSeconds(followUpDuration);
            }
        }

        // 4. Mở khóa lại tương tác cho người chơi
        if (shouldLock) {
            GamePlayManager.SetAnimationState(false);
            Debug.Log($"[TalkStepContainer] Sound sequence completed for '{elementName}'. Player interaction unlocked.");
        }

        activeTalkSequenceCoroutine = null;
    }

    /// <summary>
    /// Lấy text đã được dịch từ key hoặc sử dụng text dự phòng
    /// </summary>
    private string GetLocalizedText(TalkStep talkStep) {
        if (!string.IsNullOrEmpty(talkStep.textKey)) {
            string localizedText = LocalizationManager.GetString(talkStep.textKey);

            // Nếu không tìm thấy key trong bảng dịch, sử dụng text dự phòng
            if (localizedText == "Missing Localization") {
                return talkStep.fallbackText;
            }

            return localizedText;
        }

        // Sử dụng text dự phòng nếu không có key
        return talkStep.fallbackText;
    }

    /// <summary>
    /// Lấy audio phù hợp với ngôn ngữ hiện tại
    /// </summary>
    private Audio[] GetLanguageSpecificSound(TalkStep talkStep) {
        // Kiểm tra nếu ngôn ngữ hiện tại là tiếng Việt
        bool isVietnamese = LocalizationManager.CurrentLanguageCode.Equals("vi", StringComparison.OrdinalIgnoreCase);

        // Nếu là tiếng Việt và có sound tiếng Việt, trả về sound tiếng Việt
        if (isVietnamese && talkStep.vietnameseSound != null && talkStep.vietnameseSound.Length > 0) {
            return talkStep.vietnameseSound;
        }

        // Nếu không, trả về sound mặc định
        return talkStep.defaultSound;
    }

    /// <summary>
    /// Phương thức public để gọi TalkStep từ Unity Event
    /// Sử dụng cho các trường hợp như timeout, hoàn thành level, v.v.
    /// </summary>
    /// <param name="elementName">Tên element để tìm TalkStep</param>
    /// <param name="stepNumber">Số bước để tìm TalkStep</param>
    public void TriggerTalkStepByUnityEvent(string elementName, int stepNumber) {
        if (string.IsNullOrEmpty(elementName) || talkData == null) return;

        // Tìm dữ liệu talk cho element cụ thể theo tên
        var currentTalkData = talkData.FirstOrDefault(t => t.nameElement == elementName);

        // Kiểm tra nếu tìm thấy dữ liệu talk hợp lệ và có các bước talk
        if (currentTalkData.talkSteps != null && currentTalkData.talkSteps.Length > 0) {
            // Tìm bước talk khớp với số bước được chỉ định
            var currentStep = currentTalkData.talkSteps.FirstOrDefault(t => t.step == stepNumber);

            // Xử lý hiển thị text
            string textToShow = GetLocalizedText(currentStep);
            bool hasValidText = !string.IsNullOrEmpty(textToShow);

            // Xác định sound phù hợp với ngôn ngữ hiện tại
            Audio[] soundToPlay = GetLanguageSpecificSound(currentStep);
            bool hasValidSound = soundToPlay != null && soundToPlay.Length > 0;

            // Hiển thị text nếu có
            if (hasValidText) {
                TalkStepController.Instance.ShowTextUI(textToShow);
            }

            // Phát tất cả các âm thanh nếu có
            if (hasValidSound) {
                // Dừng TalkStep hiện tại trước khi phát TalkStep mới
                LevelSoundFX.StopCurrentTalkStep();
                
                foreach (var sound in soundToPlay) {
                    if (sound != null) {
                        LevelSoundFX.PlaySoundFX(sound);
                    }
                }
            }
        }
    }

 
    /// <summary>
    /// Phương thức để gọi TalkStep từ Unity Event với string format "elementName,stepNumber"
    /// Ví dụ: "chiecGiay,2" hoặc "timeout,999"
    /// </summary>
    /// <param name="elementAndStep">String format: "elementName,stepNumber"</param>
    public void TriggerTalkStepByString(string elementAndStep) {
        if (string.IsNullOrEmpty(elementAndStep)) return;

        // Tách string bằng dấu phẩy
        string[] parts = elementAndStep.Split(',');
        
        if (parts.Length != 2) {
            Debug.LogWarning($"TalkStepContainer: Invalid format '{elementAndStep}'. Expected format: 'elementName,stepNumber'");
            return;
        }

        string elementName = parts[0].Trim();
        string stepString = parts[1].Trim();

        // Parse step number
        if (int.TryParse(stepString, out int stepNumber)) {
            TriggerTalkStepByUnityEvent(elementName, stepNumber);
        } else {
            Debug.LogWarning($"TalkStepContainer: Invalid step number '{stepString}' in '{elementAndStep}'. Step must be a valid integer.");
        }
    }
}