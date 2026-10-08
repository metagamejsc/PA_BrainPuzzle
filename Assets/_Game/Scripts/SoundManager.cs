using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public static SoundManager Instance { get; private set; }

    [Header("Audio Sources")]
    [SerializeField] private AudioSource bgmSource;
    [SerializeField] private AudioSource sfxSource;
    [SerializeField] private AudioSource voiceSource;

    [Header("Audio Clips")]
    public AudioClip bgmHorror;
    public AudioClip sfxTapItem;
    public AudioClip voiceIntro;
    public AudioClip voiceOutro;
    public AudioClip voiceFail;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
            return;
        }

        if (bgmSource == null) bgmSource = gameObject.AddComponent<AudioSource>();
        if (sfxSource == null) sfxSource = gameObject.AddComponent<AudioSource>();
        if (voiceSource == null) voiceSource = gameObject.AddComponent<AudioSource>();

        bgmSource.loop = true;
        bgmSource.playOnAwake = false;
        sfxSource.loop = false;
        voiceSource.loop = false;
    }

    public void PlayBGM(AudioClip clip = null)
    {
        AudioClip target = clip != null ? clip : bgmHorror;
        if (target != null && bgmSource != null)
        {
            bgmSource.clip = target;
            bgmSource.Play();
        }
    }

    public void StopBGM()
    {
        if (bgmSource != null) bgmSource.Stop();
    }

    public void PlaySFX(AudioClip clip)
    {
        if (clip != null && sfxSource != null)
        {
            sfxSource.PlayOneShot(clip);
        }
    }

    public void PlayTap()
    {
        PlaySFX(sfxTapItem);
    }

    public void PlayVoice(AudioClip clip)
    {
        if (clip != null && voiceSource != null)
        {
            voiceSource.Stop();
            voiceSource.clip = clip;
            voiceSource.Play();
        }
    }
}
