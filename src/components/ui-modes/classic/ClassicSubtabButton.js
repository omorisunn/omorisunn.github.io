export default {
  name: "ClassicSubtabButton",
  props: {
    subtab: {
      type: Object,
      required: true
    },
    parentName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isAvailable: false,
      hasNotification: false,
      isCurrentSubtab: false,
      tabName: ""
    };
  },
  computed: {
    classObject() {
      return {
        "o-tab-btn": true,
        "o-tab-btn--secondary": true,
        "o-subtab-btn--active": this.isCurrentSubtab,
        "o-tab-btn--infinity": this.parentName === "无限",
        "o-tab-btn--eternity": this.parentName === "永恒",
        "o-tab-btn--reality": this.parentName === "现实",
        "o-tab-btn--celestial": this.parentName === "天神"
      };
    },
  },
  methods: {
    update() {
      this.isAvailable = this.subtab.isAvailable;
      this.hasNotification = this.subtab.hasNotification;
      this.isCurrentSubtab = this.subtab.isOpen && Theme.currentName() !== "S9";
      this.tabName = Pelle.transitionText(
        this.subtab.name,
        this.subtab.name,
        Math.max(Math.min(GameEnd.endState - (this.subtab.id) % 4 / 10, 1), 0)
      );
    }
  },
  template: `
  <button
    v-if="isAvailable"
    :class="classObject"
    @click="subtab.show(true)"
    data-v-classic-subtab-button
  >
    {{ tabName }}
    <svg
      v-if="hasNotification"
      class="l-notification-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-v-classic-subtab-button
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2v5.2" />
      <circle cx="12" cy="16" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  </button>
  `
};
