using UnityEngine;

namespace EscapeBigHead
{
    /// <summary>
    /// SoundManager: Quan ly am thanh BGM va SFX toi uu cho Luna Playable Ads.
    /// Khong dung thu vien ngoai, zero-GC, sieu nhe va on dinh tren WebGL.
    /// </summary>
    public class SoundManager : MonoBehaviour
    {
        private static SoundManager _instance;
        public static SoundManager Instance
        {
            get
            {
#pragma warning disable CS0618
                if (_instance == null)
                {
                    _instance = FindObjectOfType<SoundManager>();
                }
#pragma warning restore CS0618
                return _instance;
            }
            private set => _instance = value;
        }

        [Header("Audio Sources")]
        [SerializeField] private AudioSource bgmSource;
        [SerializeField] private AudioSource sfxSource;

        [Header("Audio Clips")]
        [SerializeField] private AudioClip bgmHorror;
        [SerializeField] private AudioClip tapItem;
        [SerializeField] private AudioClip winClip;
        [SerializeField] private AudioClip loseClip;
        [SerializeField] private AudioClip monsterRoar;
        [SerializeField] private AudioClip womanScream;
        [SerializeField] private AudioClip electricShock;
        [SerializeField] private AudioClip closetOpen;
        [SerializeField] private AudioClip windClip;

        [Header("Audio Settings")]
        [SerializeField] private bool soundEnabled = true;
        [SerializeField] private float bgmVolume = 0.5f;
        [SerializeField] private float sfxVolume = 1.0f;

        private bool hasInteracted = false;

        private void Awake()
        {
            if (_instance == null)
            {
                _instance = this;
            }
            else if (_instance != this)
            {
                Destroy(gameObject);
                return;
            }

            InitAudioSources();
        }

        private void InitAudioSources()
        {
            if (bgmSource == null)
            {
                bgmSource = gameObject.AddComponent<AudioSource>();
            }
            bgmSource.loop = true;
            bgmSource.playOnAwake = false;
            bgmSource.volume = bgmVolume;

            if (sfxSource == null)
            {
                sfxSource = gameObject.AddComponent<AudioSource>();
            }
            sfxSource.loop = false;
            sfxSource.playOnAwake = false;
            sfxSource.volume = sfxVolume;
        }

        private void Start()
        {
            if (soundEnabled)
            {
                PlayBGM();
            }
        }

        private void Update()
        {
            // WebGL / Luna Playable: Browser blocks autoplay until first user gesture.
            // On first touch/click, ensure audio context resumes and BGM plays if not already playing.
            if (!hasInteracted && Input.GetMouseButtonDown(0))
            {
                hasInteracted = true;
                if (soundEnabled && bgmSource != null && !bgmSource.isPlaying && bgmHorror != null)
                {
                    PlayBGM();
                }
            }
        }

        public void PlayBGM()
        {
            if (!soundEnabled) return;
            if (bgmSource != null && bgmHorror != null)
            {
                if (bgmSource.clip != bgmHorror)
                {
                    bgmSource.clip = bgmHorror;
                }
                if (!bgmSource.isPlaying)
                {
                    bgmSource.volume = bgmVolume;
                    bgmSource.Play();
                }
            }
        }

        public void StopBGM()
        {
            if (bgmSource != null)
            {
                bgmSource.Stop();
            }
        }

        public void PlayTap()
        {
            PlaySFX(tapItem);
        }

        public void PlayWin()
        {
            StopBGM();
            PlaySFX(winClip);
        }

        public void PlayLose()
        {
            StopBGM();
            PlaySFX(loseClip);
        }

        public void PlayMonsterRoar()
        {
            PlaySFX(monsterRoar);
        }

        public void PlayWomanScream()
        {
            PlaySFX(womanScream);
        }

        public void PlayElectricShock()
        {
            PlaySFX(electricShock);
        }

        public void PlayClosetOpen()
        {
            PlaySFX(closetOpen != null ? closetOpen : tapItem);
        }

        public void PlayWind()
        {
            PlaySFX(windClip);
        }

        public void PlaySFX(AudioClip clip, float volume = 1.0f)
        {
            if (!soundEnabled) return;
            if (sfxSource != null && clip != null)
            {
                sfxSource.PlayOneShot(clip, volume * sfxVolume);
            }
        }

        public void SetSoundEnabled(bool enabled)
        {
            soundEnabled = enabled;
            if (!soundEnabled)
            {
                StopBGM();
            }
            else
            {
                PlayBGM();
            }
        }
    }
}
