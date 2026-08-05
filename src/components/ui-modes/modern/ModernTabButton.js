export default {
  name: "ModernTabButton",
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
      isAvailable: false,
      isHidden: false,
      subtabVisibilities: [],
      showSubtabs: false,
      hasNotification: false,
      tabName: ""
    };
  },
  computed: {
    classObject() {
      return {
        "o-tab-btn": true,
        "o-tab-btn--modern-tabs": true,
        "o-tab-btn--subtabs": this.showSubtabs,
        "o-tab-btn--active": this.isCurrentTab && Theme.currentName() !== "S9"
      };
    },
    isCurrentTab() {
      return this.tab.isOpen;
    }
  },
  methods: {
    update() {
      this.isAvailable = this.tab.isAvailable;
      this.isHidden = this.tab.isHidden;
      this.subtabVisibilities = this.tab.subtabs.map(x => x.isAvailable);
      this.showSubtabs = this.isAvailable && this.subtabVisibilities.length >= 1;
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
    },
    isCurrentSubtab(id) {
      return player.options.lastOpenSubtab[this.tab.id] === id && Theme.currentName() !== "S9";
    },
    handleClick() {
      this.tab.show(true);
    },
    handleSubtabClick(subtab) {
      subtab.show(true);
    },
    tabIcon() {
      const stroke = 'stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"';
      const icons = {
        dimensions: `<svg viewBox="0 0 24 24" ${stroke}><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="9" y="12" width="6" height="6" rx="1"/><rect x="15" y="9" width="6" height="6" rx="1"/><path d="M3 9l9-5 9 5"/></svg>`,
        automation: `<svg viewBox="0 0 24 24" ${stroke}><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.4 5.4l1.8 1.8M16.8 16.8l1.8 1.8M18.6 5.4l-1.8 1.8M7.2 16.8l-1.8 1.8"/></svg>`,
        challenges: `<svg viewBox="0 0 24 24" ${stroke}><path d="M5 21V3.5"/><path d="M5 4h11.5l-2.6 3.6L16.5 11H5"/></svg>`,
        infinity: `<svg viewBox="0 0 24 24" ${stroke}><path d="M18.18 8.04c-2.35 0-4.26 1.77-6.18 3.96-1.92-2.19-3.83-3.96-6.18-3.96C3.1 8.04 1 10.13 1 12s2.1 3.96 2.82 3.96c2.35 0 4.26-1.77 6.18-3.96 1.92 2.19 3.83 3.96 6.18 3.96.72 0 2.82-2.09 2.82-3.96s-2.1-3.96-2.82-3.96z"/></svg>`,
        eternity: `<svg viewBox="0 0 24 24" ${stroke}><path d="M6.5 3h11M6.5 21h11"/><path d="M7.5 3c0 4.8 4 5.6 4.5 9-.5 3.4-4.5 4.2-4.5 9M16.5 3c0 4.8-4 5.6-4.5 9 .5 3.4 4.5 4.2 4.5 9"/></svg>`,
        reality: `<svg viewBox="0 0 24 24" ${stroke}><path d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3.2"/></svg>`,
        celestials: `<svg viewBox="0 0 24 24" ${stroke}><circle cx="12" cy="12" r="5.2"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-20 12 12)"/></svg>`,
        achievements: `<svg viewBox="0 0 24 24" ${stroke}><circle cx="12" cy="14.5" r="5.2"/><path d="M8.6 10 6 3.5h3.8L12 7l2.2-3.5H18L15.4 10"/></svg>`,
        statistics: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 20.5h16"/><rect x="6" y="12" width="3" height="6.5" rx="0.6"/><rect x="10.5" y="7.5" width="3" height="11" rx="0.6"/><rect x="15" y="14" width="3" height="4.5" rx="0.6"/></svg>`,
        options: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 7.5h9M17.5 7.5H20M4 16.5h3M11.5 16.5H20"/><circle cx="15" cy="7.5" r="2.3"/><circle cx="9" cy="16.5" r="2.3"/></svg>`,
        shop: `<svg viewBox="0 0 24 24" ${stroke}><path d="M6 8.5h12l-1.1 12H7.1L6 8.5z"/><path d="M9 8.5V6.5a3 3 0 0 1 6 0v2"/></svg>`
      };
      return icons[this.tab.key] || "";
    }
  },
  template: `
  <div
    v-if="!isHidden && isAvailable"
    :class="[classObject, tab.config.UIClass]"
    data-v-modern-tab-button
  >
    <div
      class="l-tab-btn-inner"
      @click="handleClick"
      data-v-modern-tab-button
    >
      <span
        v-if="tabIcon()"
        class="o-tab-btn__icon"
        v-html="tabIcon()"
        data-v-modern-tab-button
      />
      <span
        class="o-tab-btn__label"
        data-v-modern-tab-button
      >
        {{ tabName }}
      </span>
      <svg
        v-if="hasNotification"
        class="l-notification-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        data-v-modern-tab-button
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2v5.2" />
        <circle cx="12" cy="16" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    </div>
    <div
      v-if="showSubtabs"
      class="subtabs"
      data-v-modern-tab-button
    >
      <template
        v-for="(subtab, index) in tab.subtabs"
      >
        <div
          v-if="subtabVisibilities[index]"
          :key="index"
          class="o-tab-btn o-tab-btn--subtab"
          :class="
            [tab.config.UIClass,
             {'o-subtab-btn--active': isCurrentSubtab(subtab.id)}]
          "
          @click="handleSubtabClick(subtab)"
          data-v-modern-tab-button
        >
          <span v-html="subtab.symbol" />
          <svg
            v-if="subtab.hasNotification"
            class="l-notification-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-v-modern-tab-button
          >
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.2v5.2" />
            <circle cx="12" cy="16" r="0.7" fill="currentColor" stroke="none" />
          </svg>
          <div
            class="o-subtab__tooltip"
            data-v-modern-tab-button
          >
            {{ subtab.name }}
          </div>
        </div>
      </template>
    </div>
  </div>
  `
};
