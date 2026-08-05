export default {
  name: "AutomatorPointsList",
  data() {
    return {
      totalPoints: 0,
    };
  },
  computed: {
    pointsForAutomator: () => AutomatorPoints.pointsForAutomator,
    fromPerks: () => AutomatorPoints.pointsFromPerks,
    fromUpgrades: () => AutomatorPoints.pointsFromUpgrades,
    perkSources: () => AutomatorPoints.perks,
    upgradeSources: () => AutomatorPoints.upgrades,
    otherSources: () => GameDatabase.reality.automator.otherAutomatorPoints,
    automatorInterval: () => AutomatorBackend.currentInterval,
  },
  methods: {
    update() {
      this.totalPoints = AutomatorPoints.totalPoints;
    },
    textColor(hasBought) {
      return {
        color: hasBought ? "var(--color-good)" : "var(--color-bad)"
      };
    }
  },
  template: `
  <div>
    <div
      class="l-header"
      data-v-automator-points-list
    >
      你已拥有 {{ formatInt(totalPoints) }} / {{ formatInt(pointsForAutomator) }}
      自动机点数，用于解锁自动机。
      <br>
      你可以从以下来源获得自动机点数：
    </div>
    <div
      class="l-automator-points-list-container"
      data-v-automator-points-list
    >
      <div
        class="l-automator-points-list-side-col c-automator-points-list-col"
        data-v-automator-points-list
      >
        <span
          class="c-automator-points-list-symbol fas fa-project-diagram"
          data-v-automator-points-list
        />
        <span
          class="c-automator-points-list-ap--large"
          data-v-automator-points-list
        >{{ formatInt(fromPerks) }} AP</span>
        <span
          class="l-large-text"
          data-v-automator-points-list
        >
          福利
        </span>
        <div
          v-for="perk in perkSources"
          :key="perk.id"
          class="c-automator-points-list-single-entry"
          :style="textColor(perk.isBought)"
          data-v-automator-points-list
        >
          <span
            class="c-automator-points-list-perk-label"
            data-v-automator-points-list
          >{{ perk.label }}</span>
          · {{ perk.shortDescription }}
          <span
            class="c-automator-points-list-ap"
            data-v-automator-points-list
          >{{ formatInt(perk.automatorPoints) }} AP</span>
        </div>
      </div>
      <div
        class="l-automator-points-list-center-col"
        data-v-automator-points-list
      >
        <div
          v-for="source in otherSources"
          :key="source.name"
          class="c-automator-points-list-cell"
          data-v-automator-points-list
        >
          <span
            class="c-automator-points-list-ap--large"
            data-v-automator-points-list
          >{{ formatInt(source.automatorPoints()) }} AP</span>
          <span
            class="l-large-text"
            data-v-automator-points-list
          >
            {{ source.name }}
          </span>
          <br>
          <br>
          <span
            :style="textColor(source.automatorPoints() > 0)"
            data-v-automator-points-list
          >
            {{ source.shortDescription() }}
          </span>
          <span
            class="c-automator-points-list-symbol"
            v-html="source.symbol"
            data-v-automator-points-list
          />
        </div>
      </div>
      <div
        class="l-automator-points-list-side-col c-automator-points-list-col"
        data-v-automator-points-list
      >
        <span
          class="c-automator-points-list-symbol fas fa-arrow-up"
          data-v-automator-points-list
        />
        <span
          class="c-automator-points-list-ap--large"
          data-v-automator-points-list
        >{{ formatInt(fromUpgrades) }} AP</span>
        <span
          class="l-large-text"
          data-v-automator-points-list
        >
          现实升级
        </span>
        <div
          v-for="upgrade in upgradeSources"
          :key="upgrade.id"
          class="c-automator-points-list-single-entry l-upgrade-list"
          :style="textColor(upgrade.isBought)"
          data-v-automator-points-list
        >
          <b>{{ upgrade.name }}</b>
          <span
            class="c-automator-points-list-ap"
            data-v-automator-points-list
          >{{ formatInt(upgrade.automatorPoints) }} AP</span>
          <br>
          {{ upgrade.shortDescription }}
        </div>
      </div>
    </div>
    <br>
    <div>
      自动机可以（除其他功能外）购买完整的时间研究树、进入永恒挑战，
      或开始膨胀。
      <br>
      它还可以独立于自动购买器在特定条件下强制进行声望事件，或修改
      部分自动购买器设置。
      <br>
      自动机的速度会随着你完成更多现实而逐渐提升。如果现在解锁，
      它每真实秒将执行 {{ format(1000 / automatorInterval, 2, 2) }} 条命令。
    </div>
  </div>
  `
};
