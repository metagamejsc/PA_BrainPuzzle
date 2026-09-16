using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System.Linq;
using Spine.Unity;

[CustomEditor(typeof(SpineEventSoundPlayer))]
public class SpineEventSoundPlayerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        SpineEventSoundPlayer script = (SpineEventSoundPlayer)target;

        if (GUILayout.Button("Auto Sync Sounds from Spine Events"))
        {
            SyncSounds(script);
        }
    }

    private void SyncSounds(SpineEventSoundPlayer script)
    {
        SkeletonDataAsset dataAsset = null;
        
        var anim = script.GetComponent<SkeletonAnimation>();
        var graphic = script.GetComponent<SkeletonGraphic>();

        if (anim != null) dataAsset = anim.skeletonDataAsset;
        else if (graphic != null) dataAsset = graphic.skeletonDataAsset;

        if (dataAsset == null)
        {
            Debug.LogError($"[Editor] {script.name}: Không thấy SkeletonAnimation hay SkeletonGraphic!");
            return;
        }
        
        var skeletonData = dataAsset.GetSkeletonData(true);
        if (skeletonData == null) return;

        var eventNames = skeletonData.Events.Select(e => e.Name).ToList();
        
        string[] guids = AssetDatabase.FindAssets("t:AudioClip");
        List<AudioClip> matchedClips = new List<AudioClip>();

        foreach (string guid in guids)
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            AudioClip clip = AssetDatabase.LoadAssetAtPath<AudioClip>(path);
            
            if (clip != null && eventNames.Any(n => n.Equals(clip.name, System.StringComparison.OrdinalIgnoreCase)))
            {
                if (!matchedClips.Contains(clip)) matchedClips.Add(clip);
            }
        }
        
        Undo.RecordObject(script, "Auto Sync Spine Sounds");
        script.SyncAudioClips(matchedClips);
        EditorUtility.SetDirty(script);

        Debug.Log($"[Editor] {script.name}: Đã đồng bộ {matchedClips.Count} âm thanh.");
    }
}