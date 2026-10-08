using UnityEngine;

public static class DragController
{
    public static bool IsDragging { get; set; } = false;
    public static object CurrentDraggable { get; set; } = null;
}
