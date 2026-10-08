using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(LevelHeaderUI))]
public class LevelHeaderUIEditor : Editor
{
    public override void OnInspectorGUI()
    {
        LevelHeaderUI ui = (LevelHeaderUI)target;

        ui.SyncTimeFromClockText();

        serializedObject.Update();

        DrawDefaultInspector();

        if (!string.IsNullOrEmpty(ui.ClockText))
        {
            EditorGUILayout.HelpBox($"Thời gian: {ui.RemainingSeconds}s (Tự động đồng bộ từ Text_Seconds: \"{ui.ClockText}\")", MessageType.Info);
        }

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Quick Controls (Edit & Play Mode)", EditorStyles.boldLabel);

        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("-1 Step"))
        {
            Undo.RecordObject(ui, "Step Decrement");
            ui.IncrementStep(-1);
            EditorUtility.SetDirty(ui);
        }
        if (GUILayout.Button("+1 Step"))
        {
            Undo.RecordObject(ui, "Step Increment");
            ui.IncrementStep(1);
            EditorUtility.SetDirty(ui);
        }
        EditorGUILayout.EndHorizontal();

        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("Reset to 0 Steps"))
        {
            Undo.RecordObject(ui, "Reset Steps");
            ui.SetCurrentStep(0);
            EditorUtility.SetDirty(ui);
        }
        if (GUILayout.Button("Set to Max Steps"))
        {
            Undo.RecordObject(ui, "Set Max Steps");
            ui.SetCurrentStep(ui.MaxSteps);
            EditorUtility.SetDirty(ui);
        }
        EditorGUILayout.EndHorizontal();

        EditorGUILayout.Space(5);
        if (GUILayout.Button("Force Refresh Progress & Clock"))
        {
            ui.UpdateProgressUI();
            ui.UpdateClockUI();
            EditorUtility.SetDirty(ui);
        }

        serializedObject.ApplyModifiedProperties();
    }
}
