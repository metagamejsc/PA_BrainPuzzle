#if !UNITY_EDITOR
using System;

namespace Sirenix.OdinInspector
{
    // Note: TitleAlignments, InfoMessageType, ButtonSizes, ButtonStyle, etc.
    // are already defined in Luna's UnityEngine.dll and UnityEngine.js engine.
    // Defining them here causes Bridge.NET runtime crash: "Class already defined".

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class TitleAttribute : Attribute
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public TitleAlignments TitleAlignment { get; set; }
        public bool HorizontalLine { get; set; }
        public bool Bold { get; set; }

        public TitleAttribute(string title) : this(title, null, TitleAlignments.Left, true, true) { }
        public TitleAttribute(string title, string subtitle) : this(title, subtitle, TitleAlignments.Left, true, true) { }
        public TitleAttribute(string title, string subtitle, TitleAlignments titleAlignment) : this(title, subtitle, titleAlignment, true, true) { }
        public TitleAttribute(string title, string subtitle, TitleAlignments titleAlignment, bool horizontalLine) : this(title, subtitle, titleAlignment, horizontalLine, true) { }
        public TitleAttribute(string title, string subtitle, TitleAlignments titleAlignment, bool horizontalLine, bool bold)
        {
            Title = title;
            Subtitle = subtitle;
            TitleAlignment = titleAlignment;
            HorizontalLine = horizontalLine;
            Bold = bold;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class FoldoutGroupAttribute : Attribute
    {
        public string GroupName { get; set; }
        public bool Expanded { get; set; }
        public float Order { get; set; }

        public FoldoutGroupAttribute(string groupName) : this(groupName, 0f) { }
        public FoldoutGroupAttribute(string groupName, float order)
        {
            GroupName = groupName;
            Order = order;
        }

        public FoldoutGroupAttribute(string groupName, bool expanded) : this(groupName, expanded, 0f) { }
        public FoldoutGroupAttribute(string groupName, bool expanded, float order)
        {
            GroupName = groupName;
            Expanded = expanded;
            Order = order;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class BoxGroupAttribute : Attribute
    {
        public string Group { get; set; }
        public bool ShowLabel { get; set; }
        public bool CenterLabel { get; set; }
        public float Order { get; set; }

        public BoxGroupAttribute() { }
        public BoxGroupAttribute(string group) : this(group, true, false, 0f) { }
        public BoxGroupAttribute(string group, bool showLabel) : this(group, showLabel, false, 0f) { }
        public BoxGroupAttribute(string group, bool showLabel, bool centerLabel) : this(group, showLabel, centerLabel, 0f) { }
        public BoxGroupAttribute(string group, bool showLabel, bool centerLabel, float order)
        {
            Group = group;
            ShowLabel = showLabel;
            CenterLabel = centerLabel;
            Order = order;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class HorizontalGroupAttribute : Attribute
    {
        public string Group { get; set; }
        public float Width { get; set; }
        public float MarginLeft { get; set; }
        public float MarginRight { get; set; }
        public float PaddingLeft { get; set; }
        public float PaddingRight { get; set; }
        public float MinWidth { get; set; }
        public float MaxWidth { get; set; }
        public float Order { get; set; }
        public string Title { get; set; }

        public HorizontalGroupAttribute() { }
        public HorizontalGroupAttribute(string group) { Group = group; }
        public HorizontalGroupAttribute(string group, float order) { Group = group; Order = order; }
        public HorizontalGroupAttribute(float width, float margin = 0, float order = 0) { Width = width; MarginLeft = margin; Order = order; }
        public HorizontalGroupAttribute(string group, float width, int margin = 0, float order = 0) { Group = group; Width = width; MarginLeft = margin; Order = order; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class TabGroupAttribute : Attribute
    {
        public string Group { get; set; }
        public string Tab { get; set; }
        public bool UsePadding { get; set; }
        public float Order { get; set; }

        public TabGroupAttribute(string tab) { Tab = tab; }
        public TabGroupAttribute(string group, string tab) : this(group, tab, true, 0f) { }
        public TabGroupAttribute(string group, string tab, bool usePadding) : this(group, tab, usePadding, 0f) { }
        public TabGroupAttribute(string group, string tab, bool usePadding, float order)
        {
            Group = group;
            Tab = tab;
            UsePadding = usePadding;
            Order = order;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class ShowIfAttribute : Attribute
    {
        public string Condition { get; set; }
        public object Value { get; set; }
        public bool Animate { get; set; }

        public ShowIfAttribute(string condition) : this(condition, true) { }
        public ShowIfAttribute(string condition, bool animate)
        {
            Condition = condition;
            Animate = animate;
        }

        public ShowIfAttribute(string condition, object value) : this(condition, value, true) { }
        public ShowIfAttribute(string condition, object value, bool animate)
        {
            Condition = condition;
            Value = value;
            Animate = animate;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class HideIfAttribute : Attribute
    {
        public string Condition { get; set; }
        public object Value { get; set; }
        public bool Animate { get; set; }

        public HideIfAttribute(string condition) : this(condition, true) { }
        public HideIfAttribute(string condition, bool animate)
        {
            Condition = condition;
            Animate = animate;
        }

        public HideIfAttribute(string condition, object value) : this(condition, value, true) { }
        public HideIfAttribute(string condition, object value, bool animate)
        {
            Condition = condition;
            Value = value;
            Animate = animate;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class EnableIfAttribute : Attribute
    {
        public string Condition { get; set; }
        public object Value { get; set; }

        public EnableIfAttribute(string condition) { Condition = condition; }
        public EnableIfAttribute(string condition, object value) { Condition = condition; Value = value; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class DisableIfAttribute : Attribute
    {
        public string Condition { get; set; }
        public object Value { get; set; }

        public DisableIfAttribute(string condition) { Condition = condition; }
        public DisableIfAttribute(string condition, object value) { Condition = condition; Value = value; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class GUIColorAttribute : Attribute
    {
        public float R { get; set; }
        public float G { get; set; }
        public float B { get; set; }
        public float A { get; set; }
        public string GetColor { get; set; }

        public GUIColorAttribute(float r, float g, float b) : this(r, g, b, 1f) { }
        public GUIColorAttribute(float r, float g, float b, float a)
        {
            R = r; G = g; B = b; A = a;
        }

        public GUIColorAttribute(string getColor)
        {
            GetColor = getColor;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class InfoBoxAttribute : Attribute
    {
        public string Message { get; set; }
        public InfoMessageType Type { get; set; }
        public string VisibleIf { get; set; }

        public InfoBoxAttribute(string message) : this(message, InfoMessageType.Info, null) { }
        public InfoBoxAttribute(string message, InfoMessageType type) : this(message, type, null) { }
        public InfoBoxAttribute(string message, InfoMessageType type, string visibleIf)
        {
            Message = message;
            Type = type;
            VisibleIf = visibleIf;
        }

        public InfoBoxAttribute(string message, string visibleIf)
        {
            Message = message;
            VisibleIf = visibleIf;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class DictionaryDrawerSettings : Attribute
    {
        public string KeyLabel { get; set; }
        public string ValueLabel { get; set; }
        public bool DisplayAsIDictionary { get; set; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ListDrawerSettingsAttribute : Attribute
    {
        public bool ShowIndexLabels { get; set; }
        public string ListElementLabelName { get; set; }
        public string CustomAddFunction { get; set; }
        public string CustomRemoveIndexFunction { get; set; }
        public string CustomRemoveElementFunction { get; set; }
        public string OnBeginListElementGUI { get; set; }
        public string OnEndListElementGUI { get; set; }
        public bool AlwaysAddDefaultValue { get; set; }
        public bool ShowItemCount { get; set; }
        public bool AddCopiesLastElement { get; set; }
        public int NumberOfItemsPerPage { get; set; }
        public bool ShowPaging { get; set; }
        public bool DraggableItems { get; set; }
        public bool HideAddButton { get; set; }
        public bool HideRemoveButton { get; set; }
        public bool IsReadOnly { get; set; }
        public bool DefaultExpandedState { get; set; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ReadOnlyAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class RequiredAttribute : Attribute
    {
        public string ErrorMessage { get; set; }
        public InfoMessageType MessageType { get; set; }
        public RequiredAttribute() { }
        public RequiredAttribute(string errorMessage) { ErrorMessage = errorMessage; }
        public RequiredAttribute(InfoMessageType messageType) { MessageType = messageType; }
        public RequiredAttribute(string errorMessage, InfoMessageType messageType)
        {
            ErrorMessage = errorMessage;
            MessageType = messageType;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ShowInInspectorAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ValueDropdownAttribute : Attribute
    {
        public string MemberName { get; set; }
        public ValueDropdownAttribute(string memberName) { MemberName = memberName; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class InlineEditorAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class MinMaxSliderAttribute : Attribute
    {
        public float MinValue { get; set; }
        public float MaxValue { get; set; }
        public bool ShowFields { get; set; }
        public MinMaxSliderAttribute(float minValue, float maxValue) : this(minValue, maxValue, false) { }
        public MinMaxSliderAttribute(float minValue, float maxValue, bool showFields)
        {
            MinValue = minValue;
            MaxValue = maxValue;
            ShowFields = showFields;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class PropertyRangeAttribute : Attribute
    {
        public float Min { get; set; }
        public float Max { get; set; }
        public PropertyRangeAttribute(float min, float max) { Min = min; Max = max; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class EnumToggleButtonsAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class LabelTextAttribute : Attribute
    {
        public string Text { get; set; }
        public LabelTextAttribute(string text) { Text = text; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class TypeFilterAttribute : Attribute
    {
        public string FilterGetter { get; set; }
        public TypeFilterAttribute(string filterGetter) { FilterGetter = filterGetter; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class OnValueChangedAttribute : Attribute
    {
        public string Action { get; set; }
        public bool IncludeChildren { get; set; }
        public OnValueChangedAttribute(string action) : this(action, false) { }
        public OnValueChangedAttribute(string action, bool includeChildren)
        {
            Action = action;
            IncludeChildren = includeChildren;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class AssetSelectorAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ColorPaletteAttribute : Attribute
    {
        public string PaletteName { get; set; }
        public ColorPaletteAttribute() { }
        public ColorPaletteAttribute(string paletteName) { PaletteName = paletteName; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class FilePathAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class FolderPathAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class PropertySpaceAttribute : Attribute
    {
        public float SpaceBefore { get; set; }
        public float SpaceAfter { get; set; }
        public PropertySpaceAttribute() : this(8f, 0f) { }
        public PropertySpaceAttribute(float spaceBefore) : this(spaceBefore, 0f) { }
        public PropertySpaceAttribute(float spaceBefore, float spaceAfter)
        {
            SpaceBefore = spaceBefore;
            SpaceAfter = spaceAfter;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class VerticalGroupAttribute : Attribute
    {
        public string Group { get; set; }
        public float Order { get; set; }
        public VerticalGroupAttribute(string group) : this(group, 0f) { }
        public VerticalGroupAttribute(string group, float order) { Group = group; Order = order; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class ButtonGroupAttribute : Attribute
    {
        public string Group { get; set; }
        public ButtonGroupAttribute() { }
        public ButtonGroupAttribute(string group) { Group = group; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class TableListAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class InlinePropertyAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class InlineButtonAttribute : Attribute
    {
        public string MemberMethodName { get; set; }
        public string Label { get; set; }
        public InlineButtonAttribute(string memberMethodName) : this(memberMethodName, null) { }
        public InlineButtonAttribute(string memberMethodName, string label)
        {
            MemberMethodName = memberMethodName;
            Label = label;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class ValidateInputAttribute : Attribute
    {
        public string Condition { get; set; }
        public string DefaultMessage { get; set; }
        public InfoMessageType MessageType { get; set; }
        public bool IncludeChildren { get; set; }
        public ValidateInputAttribute(string condition) : this(condition, null) { }
        public ValidateInputAttribute(string condition, string defaultMessage)
        {
            Condition = condition;
            DefaultMessage = defaultMessage;
        }
        public ValidateInputAttribute(string condition, string defaultMessage, InfoMessageType messageType)
        {
            Condition = condition;
            DefaultMessage = defaultMessage;
            MessageType = messageType;
        }
        public ValidateInputAttribute(string condition, string defaultMessage, InfoMessageType messageType, bool includeChildren)
        {
            Condition = condition;
            DefaultMessage = defaultMessage;
            MessageType = messageType;
            IncludeChildren = includeChildren;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class SearchableAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class DelayedPropertyAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class DisplayAsStringAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class MultiLinePropertyAttribute : Attribute
    {
        public int Lines { get; set; }
        public MultiLinePropertyAttribute() : this(3) { }
        public MultiLinePropertyAttribute(int lines) { Lines = lines; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class WrapAttribute : Attribute
    {
        public float Min { get; set; }
        public float Max { get; set; }
        public WrapAttribute(float min, float max) { Min = min; Max = max; }
    }

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class ButtonAttribute : Attribute
    {
        public string Name { get; set; }
        public ButtonSizes ButtonSize { get; set; }
        public ButtonAttribute() { }
        public ButtonAttribute(string name) { Name = name; }
        public ButtonAttribute(ButtonSizes size) { ButtonSize = size; }
        public ButtonAttribute(string name, ButtonSizes size)
        {
            Name = name;
            ButtonSize = size;
        }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class LabelWidthAttribute : Attribute
    {
        public float Width { get; set; }
        public LabelWidthAttribute(float width) { Width = width; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class MinValueAttribute : Attribute
    {
        public double MinValue { get; set; }
        public MinValueAttribute(double minValue) { MinValue = minValue; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class MaxValueAttribute : Attribute
    {
        public double MaxValue { get; set; }
        public MaxValueAttribute(double maxValue) { MaxValue = maxValue; }
    }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = true)]
    public class ToggleLeftAttribute : Attribute { }

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
    public class TitleGroupAttribute : Attribute
    {
        public string GroupName { get; set; }
        public TitleGroupAttribute(string groupName) { GroupName = groupName; }
    }
}
#endif
