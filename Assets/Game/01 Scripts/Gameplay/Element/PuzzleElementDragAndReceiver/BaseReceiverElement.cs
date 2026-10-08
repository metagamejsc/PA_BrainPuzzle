using System.Collections.Generic;
using UnityEngine;

public abstract class BaseReceiverElement : BasePuzzleElement {
    public virtual bool CanReceive(BaseDraggableElement element) {
        if (_isCompleted) return false;
        if (requireSpecificElement && !specificTargetElementNames.Contains(element.ElementName)) return false;
        return true;
    }

    public virtual void OnReceive(BaseDraggableElement element) {}
}
