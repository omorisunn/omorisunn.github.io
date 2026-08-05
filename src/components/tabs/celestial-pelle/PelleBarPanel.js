import PelleRift from "./PelleRift.js";

export default {
  name: "PelleBarPanel",
  components: {
    PelleRift
  },
  data() {
    return {
      decayRate: 0,
      isCollapsed: false,
    };
  },
  computed: {
    collapseIcon() {
      return this.isCollapsed
        ? "fas fa-expand-arrows-alt"
        : "fas fa-compress-arrows-alt";
    },
    strikes() {
      return PelleStrikes.all;
    }
  },
  methods: {
    update() {
      this.decayRate = Pelle.riftDrainPercent;
      this.isCollapsed = player.celestials.pelle.collapsed.rifts;
    },
    toggleCollapse() {
      player.celestials.pelle.collapsed.rifts = !this.isCollapsed;
    },
  },
  template: `
  <div
    class="l-pelle-panel-container"
    data-v-pelle-bar-panel
  >
    <div
      class="c-pelle-panel-title"
      data-v-pelle-bar-panel
    >
      <i
        :class="collapseIcon"
        class="c-collapse-icon-clickable"
        @click="toggleCollapse"
        data-v-pelle-bar-panel
      />
      Pelle 打击与裂隙
    </div>
    <div
      v-if="!isCollapsed"
      class="l-pelle-content-container"
      data-v-pelle-bar-panel
    >
      裂隙可以通过点击其进度条来激活。
      <span v-if="strikes.length > 1">你不能同时激活超过两个裂隙。</span>
      <br v-else>
      激活时，裂隙每秒消耗另一种资源的 {{ formatPercents(decayRate) }}。
      <br>
      即使未激活，裂隙效果也会生效，并基于总消耗量计算。
      <b
        class="o-strike-warning"
        data-v-pelle-bar-panel
      >Pelle 打击的惩罚是永久的，即使在末日审判之后仍然生效！</b>
      <div
        class="c-pelle-bar-container"
        data-v-pelle-bar-panel
      >
        <PelleRift
          v-for="strike in strikes"
          :key="strike.config.id"
          :strike="strike"
          data-v-pelle-bar-panel
        />
      </div>
    </div>
  </div>
  `
};
