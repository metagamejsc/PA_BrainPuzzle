using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance { get; private set; }

    [Header("Audio Sources")]
    [SerializeField] private AudioSource bgmSource;
    [SerializeField] private AudioSource voiceSource;
    [SerializeField] private AudioSource sfxSource;
    [SerializeField] private AudioSource winSource;

    [Header("BGM")]
    [SerializeField] private AudioClip bgmClip;

    [Header("Voices")]
    [SerializeField] private AudioClip voiceGlasses;
    [SerializeField] private AudioClip voiceRazor;
    [SerializeField] private AudioClip voiceHairCurler;
    [SerializeField] private AudioClip voiceCroptop;
    [SerializeField] private AudioClip voiceRope;
    [SerializeField] private AudioClip voicePerfume;
    [SerializeField] private AudioClip voiceMakeup;

    [Header("SFX")]
    [SerializeField] private AudioClip tapClip;
    [SerializeField] private AudioClip sprayClip;
    [SerializeField] private AudioClip winClip;

    [Header("Volume Settings")]
    [Tooltip("Âm lượng BGM (mặc định 0.7f - tăng 40% so với gốc 0.5f)")]
    [Range(0f, 1f)] [SerializeField] private float bgmVolume = 0.7f;
    [Tooltip("Âm lượng Giọng nói (mặc định 1.0f)")]
    [Range(0f, 1f)] [SerializeField] private float voiceVolume = 1.0f;
    [Tooltip("Âm lượng Hiệu ứng SFX (mặc định 1.0f)")]
    [Range(0f, 1f)] [SerializeField] private float sfxVolume = 1.0f;
    [Tooltip("Âm lượng Chiến thắng Win (mặc định 1.0f)")]
    [Range(0f, 1f)] [SerializeField] private float winVolume = 1.0f;

    public AudioClip TapClip => tapClip;
    public AudioClip SprayClip => sprayClip;

    private bool webAudioUnlocked = false;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else { Destroy(gameObject); return; }

        if (bgmSource == null) bgmSource = gameObject.AddComponent<AudioSource>();
        if (voiceSource == null) voiceSource = gameObject.AddComponent<AudioSource>();
        if (sfxSource == null) sfxSource = gameObject.AddComponent<AudioSource>();
        if (winSource == null) winSource = gameObject.AddComponent<AudioSource>();

        bgmSource.loop = true;
        bgmSource.volume = bgmVolume;
        voiceSource.volume = voiceVolume;
        sfxSource.volume = sfxVolume;
        winSource.volume = winVolume;
    }

    private void Start()
    {
        PlayBGM();
    }

    public void UnlockWebAudio()
    {
        if (!webAudioUnlocked)
        {
            webAudioUnlocked = true;
            if (bgmSource != null && !bgmSource.isPlaying && bgmClip != null)
            {
                bgmSource.Play();
            }
        }
    }

    public void PlayBGM()
    {
        if (bgmSource != null && bgmClip != null)
        {
            bgmSource.clip = bgmClip;
            bgmSource.volume = bgmVolume;
            bgmSource.Play();
        }
    }

    public void PlayVoice(AudioClip clip)
    {
        if (voiceSource != null && clip != null)
        {
            voiceSource.PlayOneShot(clip);
        }
    }

    public void PlayVoiceByStepName(string stepName)
    {
        if (string.IsNullOrEmpty(stepName)) return;
        stepName = stepName.ToLower();

        if (stepName.Contains("glass")) PlayVoice(voiceGlasses);
        else if (stepName.Contains("razor")) PlayVoice(voiceRazor);
        else if (stepName.Contains("hair") || stepName.Contains("curler")) PlayVoice(voiceHairCurler);
        else if (stepName.Contains("croptop") || stepName.Contains("shirt")) PlayVoice(voiceCroptop);
        else if (stepName.Contains("rope")) PlayVoice(voiceRope);
        else if (stepName.Contains("perfume")) { PlayVoice(voicePerfume); PlaySFX(sprayClip); }
        else if (stepName.Contains("makeup") || stepName.Contains("wc")) PlayVoice(voiceMakeup);
    }

    public void PlaySFX(AudioClip clip)
    {
        if (sfxSource != null && clip != null)
        {
            sfxSource.PlayOneShot(clip);
        }
    }

    public void PlayWin()
    {
        if (bgmSource != null) bgmSource.Stop();
        if (winSource != null && winClip != null)
        {
            winSource.PlayOneShot(winClip);
        }
    }
}
