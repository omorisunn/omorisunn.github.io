import ButtonCycle from "../../../ButtonCycle.js";
import ToggleButton from "../../../ToggleButton.js";

export default {
  name: "GlyphAutosortButtonGroup",
  components: {
    ToggleButton,
    ButtonCycle
  },
  data() {
    return {
      autoSort: 0,
      showScoreFilter: false,
      autoCollapse: false,
      showAutoAutoClean: false,
      autoAutoClean: false,
      applyFilterToPurge: false,
    };
  },
  computed: {
    sortModes() {
      // These are the keys for AUTO_SORT_MODE, with SCORE only added conditionally if unlocked
      const availableSortModes = ["NONE", "LEVEL", "POWER", "EFFECT"];
      if (this.showScoreFilter) availableSortModes.push("SCORE");
      const names = {
        NONE: "无",
        LEVEL: "等级",
        POWER: "力量",
        EFFECT: "效果",
        SCORE: "分数"
      };
      return availableSortModes.map(mode => names[mode]);
    },
    questionMarkTooltip() {
      return `以下自动设置会在每次现实后生效`;
    },
    keepTooltip() {
      return "如果设为开，你的筛选接受的符文即使更差也绝不会被自动清除";
    }
  },
  watch: {
    autoSort(newValue) {
      player.reality.autoSort = newValue;
    },
    autoCollapse(newValue) {
      player.reality.autoCollapse = newValue;
    },
    autoAutoClean(newValue) {
      player.reality.autoAutoClean = newValue;
    },
    applyFilterToPurge(newValue) {
      player.reality.applyFilterToPurge = newValue;
    },
  },
  methods: {
    update() {
      this.autoSort = player.reality.autoSort;
      this.showScoreFilter = EffarigUnlock.glyphFilter.isUnlocked;
      this.autoCollapse = player.reality.autoCollapse;
      this.showAutoAutoClean = VUnlocks.autoAutoClean.canBeApplied;
      this.autoAutoClean = player.reality.autoAutoClean;
      this.applyFilterToPurge = player.reality.applyFilterToPurge;
    },
  },
  template: `
  <div class="o-glyph-inventory-management-group">
    <div class="l-glyph-sacrifice-options__header">
      <div
        v-tooltip="questionMarkTooltip"
        class="o-questionmark"
      >
        ?
      </div>
      自动符文整理：
    </div>
    <ButtonCycle
      v-model="autoSort"
      class="c-glyph-inventory-option"
      text="自动排序模式："
      :labels="sortModes"
    />
    <ToggleButton
      v-model="autoCollapse"
      class="c-glyph-inventory-option"
      label="自动折叠空间："
    />
    <ToggleButton
      v-if="showAutoAutoClean"
      v-model="autoAutoClean"
      class="c-glyph-inventory-option"
      label="现实时自动清除："
    />
    <ToggleButton
      v-if="showAutoAutoClean"
      v-model="applyFilterToPurge"
      class="c-glyph-inventory-option"
      label="绝不自动清除被筛选接受的符文："
      tooltip-class="c-glyph-inventory-option__tooltip"
      :tooltip-content="keepTooltip"
    />
  </div>
  `
};
