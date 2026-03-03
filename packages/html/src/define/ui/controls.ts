import { ControlsElement } from '../../ui/controls/controls-element';
import { ControlsGroupElement } from '../../ui/controls/controls-group-element';

export { ControlsGroupElement };

customElements.define(ControlsElement.tagName, ControlsElement);

if (!customElements.get(ControlsGroupElement.tagName)) {
  customElements.define(ControlsGroupElement.tagName, ControlsGroupElement);
}

declare global {
  interface HTMLElementTagNameMap {
    [ControlsElement.tagName]: ControlsElement;
  }
}
