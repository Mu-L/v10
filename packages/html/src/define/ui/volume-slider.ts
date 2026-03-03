import { SliderFillElement } from '../../ui/slider/slider-fill-element';
import { SliderThumbElement } from '../../ui/slider/slider-thumb-element';
import { SliderTrackElement } from '../../ui/slider/slider-track-element';
import { SliderValueElement } from '../../ui/slider/slider-value-element';
import { VolumeSliderElement } from '../../ui/volume-slider/volume-slider-element';

export { SliderFillElement, SliderThumbElement, SliderTrackElement, SliderValueElement };

customElements.define(VolumeSliderElement.tagName, VolumeSliderElement);

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
    [VolumeSliderElement.tagName]: VolumeSliderElement;
  }
}
