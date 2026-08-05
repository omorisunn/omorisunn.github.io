import ImaginaryUpgradeButton from "./ImaginaryUpgradeButton.js";

export default {
  name: "ImaginaryUpgradesTab",
  components: {
    ImaginaryUpgradeButton
  },
  data() {
    return {
      baseRMCap: new Decimal(),
      capRM: new Decimal(),
      scaleTime: 0,
      capStr: "",
    };
  },
  computed: {
    upgrades: () => ImaginaryUpgrades.all,
    lockTooltip: () => `需求锁定只会阻止手动和自动操作。任何相关升级
      不会被禁用，并且仍可能导致需求失败。`,
  },
  methods: {
    update() {
      this.baseRMCap.copyFrom(MachineHandler.baseRMCap);
      this.capRM.copyFrom(MachineHandler.hardcapRM);
      this.scaleTime = MachineHandler.scaleTimeForIM;
      this.capStr = formatMachines(MachineHandler.hardcapRM, MachineHandler.currentIMCap);
    },
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  },
  template: `
  <div class="l-reality-upgrade-grid">
    <div
      class="c-cap-text"
      data-v-imaginary-upgrades-tab
    >
      你的机器上限为 <span class="c-reality-tab__reality-machines">{{ capStr }}</span>。
    </div>
    <div
      class="c-info-text"
      data-v-imaginary-upgrades-tab
    >
      你已经达到了现实的极限，无法拥有超过 {{ format(capRM) }} 台现实机器。
      <br>
      超过 {{ format(baseRMCap) }} 获得的机器会提高你所能拥有的想象机器
      数量上限。
      <br>
      想象机器会随时间被动获得直到达到上限，但随着接近上限，
      获得速度会呈指数级减缓。
      <br>
      每 {{ formatInt(scaleTime) }} 秒，你当前 iM 数量与上限之间的差距
      就会减半。
      <br>
      <br>
      前两行升级可以无限购买，其余升级则是带有需求的一次性升级。
      <br>
      这里的升级与现实升级具有相同的玩法和视觉效果，但需要花费想象机器。
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <ImaginaryUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
  `
};
