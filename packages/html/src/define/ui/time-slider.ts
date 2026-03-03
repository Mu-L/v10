import { SliderBufferElement } from '../../ui/slider/slider-buffer-element';
import { SliderFillElement } from '../../ui/slider/slider-fill-element';
import { SliderThumbElement } from '../../ui/slider/slider-thumb-element';
import { SliderTrackElement } from '../../ui/slider/slider-track-element';
import { SliderValueElement } from '../../ui/slider/slider-value-element';
import { TimeSliderElement } from '../../ui/time-slider/time-slider-element';

export { SliderBufferElement, SliderFillElement, SliderThumbElement, SliderTrackElement, SliderValueElement };

customElements.define(TimeSliderElement.tagName, TimeSliderElement);

if (!customElements.get(SliderBufferElement.tagName)) {
  customElements.define(SliderBufferElement.tagName, SliderBufferElement);
}

if (!customElements.get(SliderFillElement.tagName)) {
  customElements.define(SliderFillElement.tagName, SliderFillElement);
}

if (!customElements.get(SliderThumbElement.tagName)) {
  customElements.define(SliderThumbElement.tagName, SliderThumbElement);
}

if (!customElements.get(SliderTrackElement.tagName)) {
  customElements.define(SliderTrackElement.tagName, SliderTrackElement);
}

if (!customElements.get(SliderValueElement.tagName)) {
  customElements.define(SliderValueElement.tagName, SliderValueElement);
}

declare global {
  interface HTMLElementTagNameMap {
    [TimeSliderElement.tagName]: TimeSliderElement;
  }
}
