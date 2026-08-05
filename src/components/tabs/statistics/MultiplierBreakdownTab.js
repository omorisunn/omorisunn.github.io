import { createEntryInfo } from "./breakdown-entry-info.js";
import MultiplierBreakdownEntry from "./MultiplierBreakdownEntry.js";

const MULT_TAB_OPTIONS = [
  { id: 0, key: "AM", text: "反物质产出" },
  { id: 1, key: "tickspeed", text: "计数频率" },
  { id: 2, key: "AD", text: "反物质维度" },
  { id: 3, key: "IP", text: "无限点数" },
  { id: 4, key: "ID", text: "无限维度" },
  { id: 5, key: "infinities", text: "无限次数" },
  { id: 6, key: "replicanti", text: "复制体速度" },
  { id: 7, key: "EP", text: "永恒点数" },
  { id: 8, key: "TD", text: "时间维度" },
  { id: 9, key: "eternities", text: "永恒次数" },
  { id: 10, key: "DT", text: "膨胀时间" },
  { id: 11, key: "gamespeed", text: "游戏速度" },
];

export default {
  name: "MultiplierBreakdownTab",
  components: {
    MultiplierBreakdownEntry
  },
  data() {
    return {
      availableOptions: [],
      currentID: player.options.multiplierTab.currTab,
    };
  },
  computed: {
    currentKey() {
      return MULT_TAB_OPTIONS.find(opt => opt.id === this.currentID).key;
    },
    resource() {
      return createEntryInfo(`${this.currentKey}_total`);
    },
    resourceSymbols() {
      return GameDatabase.multiplierTabValues[this.currentKey].total.overlay;
    }
  },
  methods: {
    update() {
      this.availableOptions = MULT_TAB_OPTIONS.map(opt => ({
        ...opt,
        isActive: this.checkActiveKey(opt.key)
      })).filter(opt => opt.isActive);
    },
    checkActiveKey(key) {
      const act = GameDatabase.multiplierTabValues[key].total.isActive;
      return typeof act === "function" ? act() : act;
    },
    accessProp(prop) {
      return typeof prop === "function" ? prop() : prop;
    },
    subtabClassObject(option) {
      return {
        "c-multiplier-subtab-btn": true,
        "c-multiplier-subtab-btn--active": option.key === this.currentKey,
      };
    },
    clickSubtab(index) {
      this.currentID = this.availableOptions[index].id;
      player.options.multiplierTab.currTab = MULT_TAB_OPTIONS.find(opt => opt.key === this.currentKey).id;
    }
  },
  template: `
  <div
    class="c-stats-tab"
    data-v-multiplier-breakdown-tab
  >
    <div
      class="l-multiplier-subtab-btn-container"
      data-v-multiplier-breakdown-tab
    >
      <button
        v-for="(option, index) in availableOptions"
        :key="option.key + option.isActive"
        :class="subtabClassObject(option)"
        @click="clickSubtab(index)"
        data-v-multiplier-breakdown-tab
      >
        {{ option.text }}
      </button>
    </div>
    <div
      class="c-list-container"
      data-v-multiplier-breakdown-tab
    >
      <span
        v-for="symbol in resourceSymbols"
        :key="symbol"
      >
        <span
          class="c-symbol-overlay"
          v-html="symbol"
          data-v-multiplier-breakdown-tab
        />
      </span>
      <MultiplierBreakdownEntry
        :key="resource.key"
        :resource="resource"
        :is-root="true"
        data-v-multiplier-breakdown-tab
      />
      <div
        class="c-multiplier-tab-text-line"
        data-v-multiplier-breakdown-tab
      >
        注意：条目只有在包含多个可能不同的来源时才能展开。
        例如，任何对某种类型的所有维度产生相同影响的效果不会展开成
        八个相同的数字。
        <br>
        <b>
          某些条目完全展开时可能会导致卡顿。为了减少光敏性可能带来的不良影响，
          尺寸调整需要 200 毫秒而不是瞬间完成。这可能导致声望事件后出现一些视觉异常。
        </b>
      </div>
    </div>
  </div>
  `
};
