import RealityUpgradeButton from "./RealityUpgradeButton.js";

export default {
  name: "RealityUpgradesTab",
  components: {
    RealityUpgradeButton
  },
  computed: {
    upgrades: () => RealityUpgrades.all,
    costScalingTooltip: () => `价格在超过 ${format(1e30)} RM 后增长会变快，在超过
      ${format(Decimal.NUMBER_MAX_VALUE, 1)} RM 后会更快`,
    possibleTooltip: () => `方格图案的升级在本次现实中无法解锁。条纹图案的升级
      仍然可以解锁。`,
    lockTooltip: () => `只有在你尚未失败条件或
      尚未解锁该升级时，此功能才会生效。`,
  },
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  },
  template: `
  <div class="l-reality-upgrade-grid">
    <div
      class="c-reality-upgrade-infotext"
      data-v-reality-upgrades-tab
    >
      将鼠标悬停在 <i class="fas fa-question-circle" /> 图标上可查看更多信息。
      <br>
      第一行升级可以无限购买，价格会不断上涨
      <span :ach-tooltip="costScalingTooltip">
        <i class="fas fa-question-circle" />
      </span>
      ，其余升级为一次性购买。
      <br>
      一次性升级还有需求，一旦完成，就会永久解锁
      随时购买这些升级的能力。
      <span :ach-tooltip="possibleTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      锁定的升级默认显示其需求和效果；已解锁的升级显示
      其效果、当前加成和价格。按住 shift 可以交换此行为。
      <br>
      你可以按住 shift 点击带有 <i class="fas fa-lock-open" /> 的升级，让游戏阻止你
      在本次现实中做出任何会导致其解锁条件失败的操作。
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      每完成一整行已购买的升级，你的符文等级就会提高 {{ formatInt(1) }}。
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <RealityUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
  `
};
