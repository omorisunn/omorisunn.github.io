export default {
  name: "AutobuyerToggleLabel",
  props: {
    isActive: Boolean,
    isDisabled: Boolean,
    name: {
      type: String,
      required: true
    },
  },
  computed: {
    autobuyerStateClass() {
      if (this.isDisabled) {
        return {
          "o-autobuyer-toggle-checkbox__label": true,
          "o-autobuyer-toggle-checkbox__label--active-paused": this.isActive,
          "o-autobuyer-toggle-checkbox__label--deactive-paused": !this.isActive,
          "o-autobuyer-toggle-checkbox__label--disabled": this.isDisabled
        };
      }
      return {
        "o-autobuyer-toggle-checkbox__label": true,
        "o-autobuyer-toggle-checkbox__label--active": this.isActive,
        "o-autobuyer-toggle-checkbox__label--disabled": this.isDisabled
      };
    },
  },
  template: `
  <div
    class="l-autobuyer-box__footer"
    @click="emitClick"
  >
    <label :class="autobuyerStateClass">
      <svg
        v-if="isActive && !isDisabled"
        class="o-autobuyer-toggle-checkbox__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4.5 12.5l5 5L19.5 6.5" />
      </svg>
      <svg
        v-else-if="isActive && isDisabled"
        class="o-autobuyer-toggle-checkbox__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
      >
        <path d="M6.5 12h11" />
      </svg>
      <svg
        v-else
        class="o-autobuyer-toggle-checkbox__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </label>
    <input
      :checked="isActive && !isDisabled"
      :disabled="isDisabled"
      :name="name"
      type="checkbox"
    >
  </div>
  `
};
