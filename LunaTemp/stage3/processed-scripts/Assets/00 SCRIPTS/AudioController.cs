using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [SerializeField] private AudioClip BGM;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Transform SFXPool;

    private List<AudioSource> SFXSources;


    public static AudioController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    void Awake()
    {
        CreateIns();
        InitPool();
    }
    private void InitPool()
    {
        SFXSources = new List<AudioSource>();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
        CreatNewSource();
    }

    public void PlayMusic()
    {
        musicSource.clip = BGM;
        musicSource.Play();
    }
    public void StopMusic()
    {
        musicSource.Stop();
    }

    private AudioSource GetFreeSource()
    {
        foreach (AudioSource source in SFXSources)
        {
            if (!source.isPlaying) return source;
        }
        return CreatNewSource();
    }
    public void PlaySFX(AudioClip clip)
    {
        AudioSource source = GetFreeSource();
        source.PlayOneShot(clip);
    }

    private AudioSource CreatNewSource()
    {
        AudioSource s = new GameObject().AddComponent<AudioSource>();
        s.transform.SetParent(SFXPool);
        SFXSources.Add(s);
        return s;
    }
}
