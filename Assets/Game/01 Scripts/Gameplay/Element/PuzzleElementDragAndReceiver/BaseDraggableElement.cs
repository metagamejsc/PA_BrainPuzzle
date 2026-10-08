using UnityEngine;

public abstract class BaseDraggableElement : BasePuzzleElement {
    public virtual bool CanDropOnto(BaseReceiverElement receiver) {
        if (receiver == null) return false;

        // If receiver has specific action for this element by name, allow immediately
        if (receiver is ReceiverPuzzleElementAndAction receiverAction) {
            if (receiverAction.HasActionForElement(ElementName)) return true;
        }

        if (requireSpecificElement && !specificTargetElementNames.Contains(receiver.ElementName)) return false;
        if (receiver.RequireSpecificElement && !receiver.SpecificTargetElementNames.Contains(ElementName)) return false;
        if (allowAllIdInteraction || receiver.AllowAllIdInteraction) return true;
        return elementId == receiver.ElementId;
    }

    public virtual void OnDroppedOnto(BaseReceiverElement receiver) {
        if (receiver != null) receiver.OnReceive(this);
    }
}
