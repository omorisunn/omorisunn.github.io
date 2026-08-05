import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "ModalCloseButton",
  components: {
    PrimaryButton
  },
  template: `
  <PrimaryButton
    class="o-primary-btn--modal-close c-modal__close-btn"
    @click="emitClick"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  </PrimaryButton>
  `
};
