import { TimeElement } from '../../ui/time/time-element';
import { TimeGroupElement } from '../../ui/time/time-group-element';
import { TimeSeparatorElement } from '../../ui/time/time-separator-element';

export { TimeGroupElement, TimeSeparatorElement };

customElements.define(TimeElement.tagName, TimeElement);

if (!customElements.get(TimeGroupElement.tagName)) {
  customElements.define(TimeGroupElement.tagName, TimeGroupElement);
}

if (!customElements.get(TimeSeparatorElement.tagName)) {
  customElements.define(TimeSeparatorElement.tagName, TimeSeparatorElement);
}

declare global {
  interface HTMLElementTagNameMap {
    [TimeElement.tagName]: TimeElement;
  }
}
