import { S12Windows } from "./windows.js";

export default {
  name: "TaskbarIcon",
  props: {
    tab: {
      type: Object,
      required: true
    },
    tabPosition: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isAvailable: true,
      isHidden: false,
      hasNotification: false,
      tabName: "",
      S12Windows,
    };
  },
  computed: {
    isCurrentTab() {
      return this.tab.isOpen && !S12Windows.isMinimised;
    }
  },
  methods: {
    update() {
      this.isAvailable = this.tab.isAvailable;
      this.isHidden = this.tab.isHidden;
      this.hasNotification = this.tab.hasNotification;
      if (this.tabPosition < Pelle.endTabNames.length) {
        this.tabName = Pelle.transitionText(
          this.tab.name,
          Pelle.endTabNames[this.tabPosition],
          Math.clamp(GameEnd.endState - (this.tab.id % 4) / 10, 0, 1)
        );
      } else {
        this.tabName = this.tab.name;
      }

      S12Windows.tabs.tabButtonPositions[this.tab.id] = this.getSubtabsPosition();
    },
    getSubtabsPosition() {
      if (!this.$refs.taskbarIcon) return "0px";
      return this.$refs.taskbarIcon.offsetLeft + this.$refs.taskbarIcon.offsetWidth / 2;
    },
  },
  template: `
  <div
    ref="taskbarIcon"
    :class="{
      'c-taskbar-icon': true,
      'c-taskbar-icon--active': isCurrentTab
    }"
    :title="tab.name"
    @mouseenter="S12Windows.tabs.setHoveringTab(tab)"
    @mouseleave="S12Windows.tabs.unsetHoveringTab()"
    @click="tab.show(true); S12Windows.isMinimised = false; S12Windows.tabs.unsetHoveringTab(true);"
    data-v-taskbar-icon
  >
    <img
      class="c-taskbar-icon__image"
      :src="\`./public/images/s12/\${tab.key}.png\`"
      data-v-taskbar-icon
    >
    <svg
      v-if="hasNotification"
      class="l-notification-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-v-taskbar-icon
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2v5.2" />
      <circle cx="12" cy="16" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  </div>
  `
};
