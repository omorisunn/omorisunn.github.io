export default {
  name: "PlusMinusButton",
  props: {
    type: {
      type: String,
      required: true
    }
  },
  template: `
  <div
    v-repeating-click="{ delay: 500 }"
    class="c-ad-slider__button"
    @firstclick="$emit('click')"
    @repeatclick="$emit('click')"
    data-v-plus-minus-button
  >
    <svg
      v-if="type === 'plus'"
      class="c-ad-slider__button-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      data-v-plus-minus-button
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
    <svg
      v-else
      class="c-ad-slider__button-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      data-v-plus-minus-button
    >
      <path d="M5 12h14" />
    </svg>
  </div>
  `
};
