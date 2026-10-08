using System;
using System.Collections;
using UnityEngine;

namespace HAVIGAME {
    public static class Log {
        public static void Debug(object msg) => UnityEngine.Debug.Log(msg);
        public static void Info(object msg) => UnityEngine.Debug.Log(msg);
        public static void Warning(object msg) => UnityEngine.Debug.LogWarning(msg);
        public static void Error(object msg) => UnityEngine.Debug.LogError(msg);
    }

    public static class EventDispatcher {
        public static void Dispatch(object ev) {}
    }

    public class GameEvent {
        public struct OnStepCompleted {
            public int step;
            public OnStepCompleted(int s) { step = s; }
        }
    }

    [AttributeUsage(AttributeTargets.Field, AllowMultiple = false, Inherited = true)]
    public class SpriteFieldAttribute : PropertyAttribute {
        public readonly float size;
        public SpriteFieldAttribute(float size = 64f) {
            this.size = size;
        }
    }

    public class Executor : MonoBehaviour {
        private static Executor instance;
        public static Executor Instance {
            get {
                if (instance == null) {
                    var go = new GameObject("Executor");
                    instance = go.AddComponent<Executor>();
                    DontDestroyOnLoad(go);
                }
                return instance;
            }
        }
        public Coroutine RunOnMainTheard(IEnumerator enumerator) {
            return StartCoroutine(enumerator);
        }
        public void RunOnMainTheard(Action action) {
            action?.Invoke();
        }
    }
}

public class Executor : HAVIGAME.Executor {}

namespace HAVIGAME.Audios {
    public enum AudioChannel {
        Master,
        Music,
        SoundFX,
        UI
    }

    [System.Serializable]
    public class Audio {
        [SerializeField] private AudioClip clip;
        [SerializeField] private AudioChannel channel = AudioChannel.Music;
        [SerializeField, Range(0f, 1f)] private float volume = 1f;
        [SerializeField] private bool loop = true;
        [SerializeField] private float delay = 0;

        public Audio() {}
        public Audio(AudioClip clip, AudioChannel channel = AudioChannel.SoundFX, float volume = 1f, bool loop = false) {
            this.clip = clip;
            this.channel = channel;
            this.volume = volume;
            this.loop = loop;
        }

        public AudioClip Clip => clip;
        public AudioChannel Channel => channel;
        public float Volume => volume;
        public bool Loop => loop;
        public float Delay => delay;

        public void Play() {
            if (AudioManager.Instance != null) {
                AudioManager.Instance.Play(this);
            }
        }

        public void PlayAtPosition(Vector3 pos) {
            Play();
        }
    }

    public class AudioManager : MonoBehaviour {
        private static AudioManager instance;
        public static bool HasInstance => instance != null;
        public static AudioManager Instance {
            get {
                if (instance == null) {
                    var go = new GameObject("AudioManager");
                    instance = go.AddComponent<AudioManager>();
                    DontDestroyOnLoad(go);
                }
                return instance;
            }
        }

        private AudioSource musicSource;
        private AudioSource sfxSource;

        void Awake() {
            if (instance == null) {
                instance = this;
                DontDestroyOnLoad(gameObject);
            }
            if (musicSource == null) musicSource = gameObject.AddComponent<AudioSource>();
            if (sfxSource == null) sfxSource = gameObject.AddComponent<AudioSource>();
        }

        public void Play(Audio audio) {
            if (audio == null || audio.Clip == null) return;
            if (musicSource == null) musicSource = gameObject.AddComponent<AudioSource>();
            if (sfxSource == null) sfxSource = gameObject.AddComponent<AudioSource>();

            if (audio.Channel == AudioChannel.Music) {
                musicSource.clip = audio.Clip;
                musicSource.volume = audio.Volume;
                musicSource.loop = audio.Loop;
                musicSource.Play();
            } else {
                sfxSource.PlayOneShot(audio.Clip, audio.Volume);
            }
        }

        public void Stop(AudioChannel channel) {
            if (channel == AudioChannel.Music && musicSource != null) {
                musicSource.Stop();
            }
        }
    }
}

namespace HAVIGAME.UI {
    public class UIManager : MonoBehaviour {
        private static UIManager instance;
        public static bool HasInstance => instance != null;
        public static UIManager Instance {
            get {
                if (instance == null) {
                    var go = new GameObject("UIManager");
                    instance = go.AddComponent<UIManager>();
                }
                return instance;
            }
        }

        public T Push<T>() where T : Component {
            return UnityEngine.Object.FindObjectOfType<T>();
        }
    }
}

namespace CutScene.Commands {
    public interface ICutSceneCommand {
        void Execute();
        void Cleanup();
    }

    public static class CutSceneCommandFactory {
        public static ICutSceneCommand CreateWinAnimation(BaseLevelWinAnimation anim) => null;
    }
}

public class CutSceneLevelData : MonoBehaviour {
    public bool HasStartCutScene;
    public bool HasEndCutScene;
    public bool isInStory;
    public GameObject CutSceneStartPrefab;
    public GameObject CutSceneEndPrefab;
}

public class IngamePanel : MonoBehaviour {
    public static IngamePanel Instance { get; set; }
    public void StopGameTimer() {}
}

public class CutScenePanel : MonoBehaviour {
    public void Setup(GameObject prefab, CutScene.Commands.ICutSceneCommand cmd, TrackingManager.CutSceneType type) {}
}

public class TrackingManager : MonoBehaviour {
    private static TrackingManager instance;
    public static TrackingManager Instance {
        get {
            if (instance == null) {
                instance = UnityEngine.Object.FindObjectOfType<TrackingManager>();
                if (instance == null) {
                    var go = new GameObject("TrackingManager");
                    instance = go.AddComponent<TrackingManager>();
                }
            }
            return instance;
        }
        set { instance = value; }
    }
    public enum CutSceneType { start, end }
    public static void SetCompletedItemCount(int count) {}
    public static void SetLastTimeCompleteItem(float time) {}
    public void SetRemainingSequence(string seq) {}
    public void AddActionSeq(string seq) {}
    public static void TrackingLevelExit() {}
    public static void TrackingLevelReOpen() {}
}

public class LevelDatabase : ScriptableObject {
    private static LevelDatabase instance;
    public static LevelDatabase Instance {
        get {
            if (instance == null) {
                instance = ScriptableObject.CreateInstance<LevelDatabase>();
                instance.InitAudio();
            }
            return instance;
        }
    }

    private HAVIGAME.Audios.Audio correctSoundFX = new HAVIGAME.Audios.Audio();
    private HAVIGAME.Audios.Audio wrongSoundFX = new HAVIGAME.Audios.Audio();

    public HAVIGAME.Audios.Audio CorrectSoundFX {
        get {
            if (correctSoundFX == null || correctSoundFX.Clip == null) InitAudio();
            return correctSoundFX;
        }
    }
    public HAVIGAME.Audios.Audio IncorrectSoundFX {
        get {
            if (wrongSoundFX == null || wrongSoundFX.Clip == null) InitAudio();
            return wrongSoundFX;
        }
    }

    private void InitAudio() {
        AudioClip correctClip = null;
        AudioClip wrongClip = null;

        if (LevelSoundFX.Instance != null) {
            correctClip = LevelSoundFX.Instance.DefaultCorrectClip;
            wrongClip = LevelSoundFX.Instance.DefaultWrongClip;
        }

        if (correctClip == null) {
            correctClip = Resources.Load<AudioClip>("SoundFX/Done (mp3cut.net)") ?? Resources.Load<AudioClip>("Done (mp3cut.net)");
        }
        if (correctClip != null) {
            correctSoundFX = new HAVIGAME.Audios.Audio(correctClip, HAVIGAME.Audios.AudioChannel.SoundFX, 1f, false);
        }

        if (wrongClip == null) {
            wrongClip = Resources.Load<AudioClip>("SoundFX/sound_lose") ?? Resources.Load<AudioClip>("sound_lose");
        }
        if (wrongClip != null) {
            wrongSoundFX = new HAVIGAME.Audios.Audio(wrongClip, HAVIGAME.Audios.AudioChannel.SoundFX, 1f, false);
        }
    }
}

public class ConfigDatabase : ScriptableObject {
    private static ConfigDatabase instance;
    public static ConfigDatabase Instance {
        get {
            if (instance == null) {
                instance = ScriptableObject.CreateInstance<ConfigDatabase>();
                instance.InitAudio();
            }
            return instance;
        }
    }

    private HAVIGAME.Audios.Audio defaultButtonPressAudio = new HAVIGAME.Audios.Audio();
    public HAVIGAME.Audios.Audio DefaultButtonPressAudio {
        get {
            if (defaultButtonPressAudio == null || defaultButtonPressAudio.Clip == null) InitAudio();
            return defaultButtonPressAudio;
        }
    }

    private void InitAudio() {
        AudioClip btnClip = null;
        if (LevelSoundFX.Instance != null) {
            btnClip = LevelSoundFX.Instance.DefaultButtonClip;
        }
        if (btnClip == null) {
            btnClip = Resources.Load<AudioClip>("SoundFX/sound_button_tap") ?? Resources.Load<AudioClip>("sound_button_tap");
        }
        if (btnClip != null) {
            defaultButtonPressAudio = new HAVIGAME.Audios.Audio(btnClip, HAVIGAME.Audios.AudioChannel.UI, 1f, false);
        }
    }
}

public static class LocalizationManager {
    public static string CurrentLanguageCode => "en";
    public static string GetTranslation(string term) => term;
    public static string GetString(string term, string fallback = "") => term;
}

public static class Const {
    public const string HINT_KEY_DRAG = "KÃ©o {0} vÃ o {1}";
    public const string TAG_RECEIVER = "Receiver";
    public const string TAG_DRAGGABLE = "Draggable";
}

public class DragSpawner : MonoBehaviour {
    private static DragSpawner instance;
    public static DragSpawner Instance {
        get {
            if (instance == null) instance = UnityEngine.Object.FindObjectOfType<DragSpawner>();
            return instance;
        }
        set { instance = value; }
    }

    public RectTransform MapArea;

    public Vector2 ClampPositionToBounds(Vector2 localPosition, RectTransform elementRect, RectTransform parentRect) {
        return localPosition;
    }

    public void SpawnSpecificAmount(int amount) {}
    public void SpawnTurn() {}
    public bool HasElementsToSpawn() => false;
    public int GetRemainingElementsCount() => 0;
}