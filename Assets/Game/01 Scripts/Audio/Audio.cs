using UnityEngine;

namespace TalkStep.Audios {
    public enum AudioChannel {
        TalkStep,
        SoundFX,
        Music
    }
    [System.Serializable]
    public class Audio {
        [SerializeField] private AudioClip clip;
        [SerializeField] private AudioChannel channel = AudioChannel.SoundFX;
        [SerializeField, Range(0f, 1f)] private float volume = 1f;
        [SerializeField] private bool loop = true;
        [SerializeField] private float delay = 0;
        public bool IsEmpty => Clip == null;
        public AudioClip Clip => clip;
        public AudioChannel Channel => channel;
        public float Volume => volume;
        public bool Loop => loop;
        public float Delay => delay;

        public void Configure(AudioChannel channel, float volume, bool loop) {
            this.channel = channel;
            this.volume = volume;
            this.loop = loop;
        }

        public void Play() {
            if (LevelSoundFX.Instance != null) {
                LevelSoundFX.PlaySoundFX(this);
            }
        }


    }
}