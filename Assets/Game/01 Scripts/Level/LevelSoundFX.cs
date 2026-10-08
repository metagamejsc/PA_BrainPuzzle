using UnityEngine;
// using HAVIGAME.Audios;
using TalkStep.Audios;
using System.Collections;
using System.Collections.Generic;

public class LevelSoundFX : MonoBehaviour {
    private static LevelSoundFX _instance;
    public static LevelSoundFX Instance {
        get {
            if (_instance == null) {
                _instance = FindObjectOfType<LevelSoundFX>();
                if (_instance == null) {
                    var go = new GameObject("LevelSoundFX");
                    _instance = go.AddComponent<LevelSoundFX>();
                    _instance.audioSource = go.AddComponent<AudioSource>();
                    DontDestroyOnLoad(go);
                }
            }
            if (_instance != null && _instance.audioSource == null) {
                _instance.audioSource = _instance.GetComponent<AudioSource>();
                if (_instance.audioSource == null) {
                    _instance.audioSource = _instance.gameObject.AddComponent<AudioSource>();
                }
            }
            return _instance;
        }
        private set => _instance = value;
    }

    [Header("Default Sound FX (Fallback / Luna Bundle References)")]
    [SerializeField] private AudioClip defaultCorrectClip;
    [SerializeField] private AudioClip defaultWrongClip;
    [SerializeField] private AudioClip defaultButtonClip;

    public AudioClip DefaultCorrectClip => defaultCorrectClip;
    public AudioClip DefaultWrongClip => defaultWrongClip;
    public AudioClip DefaultButtonClip => defaultButtonClip;
    [SerializeField] private AudioClip winClip;

    public static void PlayWinSound() {
        if (Instance != null && Instance.audioSource != null) {
            AudioClip clip = Instance.winClip != null ? Instance.winClip : Instance.defaultCorrectClip;
            if (clip != null) {
                Instance.audioSource.PlayOneShot(clip, 1f);
            }
        }
    }

    public static void PlayCorrectSound() {
        if (Instance != null && Instance.audioSource != null && Instance.defaultCorrectClip != null) {
            Instance.audioSource.PlayOneShot(Instance.defaultCorrectClip, 1f);
        }
    }

    public static void PlayClickSound() {
        if (Instance != null && Instance.audioSource != null && Instance.defaultButtonClip != null) {
            Instance.audioSource.PlayOneShot(Instance.defaultButtonClip, 1f);
        }
    }

    private AudioSource audioSource;
    private Coroutine currentTalkStepCoroutine; // Theo dõi coroutine của TalkStep hiện tại
    private Audio currentTalkStep; // Theo dõi audio TalkStep đang phát hiện tại
    // Danh sách các coroutine cho SoundFX đang phát
    private List<Coroutine> activeSoundFXCoroutines = new List<Coroutine>();

    void Awake() {
        if (_instance == null) {
            _instance = this;
        } else if (_instance != this) {
            Destroy(gameObject); // Destroy duplicate instances
            return;
        }
        if (audioSource == null) {
            audioSource = GetComponent<AudioSource>();
            if (audioSource == null) {
                audioSource = gameObject.AddComponent<AudioSource>();
            }
        }
    }

    public static void PlaySoundFX(Audio audio) {
        if (Instance != null && Instance.audioSource != null && audio != null && audio.Clip != null) {
            if (audio.Channel == AudioChannel.TalkStep) {
                // Đối với TalkStep, dừng TalkStep hiện tại trước khi phát âm thanh mới
                StopCurrentTalkStep();

                // Ghi nhớ TalkStep hiện tại
                Instance.currentTalkStep = audio;

                // Sử dụng các thông số tùy chỉnh trong Audio
                if (audio.Loop || audio.Delay > 0) {
                    Instance.currentTalkStepCoroutine = Instance.StartCoroutine(Instance.PlayTalkStepWithDelay(audio));
                } else {
                    // Phát trực tiếp nếu không có delay và không lặp
                    Instance.audioSource.Stop();
                    Instance.audioSource.clip = audio.Clip;
                    Instance.audioSource.loop = false;
                    Instance.audioSource.volume = audio.Volume;
                    Instance.audioSource.Play();
                }
            } else {
                // Đối với SoundFX, cho phép phát chồng chéo nhau bằng cách dùng PlayOneShot
                if (audio.Delay > 0) {
                    Coroutine coroutine = Instance.StartCoroutine(Instance.PlaySoundFXWithDelay(audio));
                    Instance.activeSoundFXCoroutines.Add(coroutine);
                } else {
                    // Phát âm thanh với PlayOneShot để cho phép nhiều âm thanh cùng lúc
                    Instance.audioSource.PlayOneShot(audio.Clip, audio.Volume);
                }
            }
        } else {
            Debug.LogWarning("LevelSoundEffect instance or AudioSource is not set up correctly.");
        }
    }

    public static void StopCurrentTalkStep() {
        if (Instance != null) {
            // Dừng coroutine của TalkStep hiện tại nếu có
            if (Instance.currentTalkStepCoroutine != null) {
                Instance.StopCoroutine(Instance.currentTalkStepCoroutine);
                Instance.currentTalkStepCoroutine = null;
            }

            // Dừng AudioSource nếu đang phát TalkStep
            if (Instance.currentTalkStep != null && Instance.audioSource != null && Instance.audioSource.isPlaying) {
                Instance.audioSource.Stop();
            }

            Instance.currentTalkStep = null;
        }
    }

    public static void StopAllSounds() {
        StopCurrentTalkStep();
        StopAllSoundFX();
    }

    public static void StopAllSoundFX() {
        if (Instance != null) {
            // Dừng tất cả các coroutine SoundFX đang chạy
            foreach (Coroutine coroutine in Instance.activeSoundFXCoroutines) {
                if (coroutine != null) {
                    Instance.StopCoroutine(coroutine);
                }
            }
            Instance.activeSoundFXCoroutines.Clear();
        }
    }

    private IEnumerator PlayTalkStepWithDelay(Audio audio) {
        if (audio.Delay > 0) {
            yield return new WaitForSeconds(audio.Delay);
        }

        // Cấu hình lại AudioSource với thông số từ Audio
        audioSource.clip = audio.Clip;
        audioSource.loop = audio.Loop;
        audioSource.volume = audio.Volume;

        // Dừng nếu đang phát để tránh chồng âm thanh
        if (audioSource.isPlaying) {
            audioSource.Stop();
        }

        audioSource.Play();

        // Nếu không lặp, ta cần đợi clip hoàn thành
        if (!audio.Loop) {
            yield return new WaitForSeconds(audio.Clip.length);

            // Chỉ reset nếu vẫn đang phát TalkStep này
            if (currentTalkStep == audio) {
                currentTalkStepCoroutine = null;
                currentTalkStep = null;
            }
        }
    }

    private IEnumerator PlaySoundFXWithDelay(Audio audio) {
        // Lưu lại coroutine hiện tại để có thể xóa nó khỏi danh sách sau khi hoàn thành
        //Coroutine thisCoroutine = null;

        if (audio.Delay > 0) {
            yield return new WaitForSeconds(audio.Delay);
        }

        // Phát âm thanh
        audioSource.PlayOneShot(audio.Clip, audio.Volume);

        // Chờ đợi cho đến khi âm thanh kết thúc
        yield return new WaitForSeconds(audio.Clip.length);

        // Tìm và xóa coroutine này khỏi danh sách
        activeSoundFXCoroutines.RemoveAll(c => c == null);
    }
}