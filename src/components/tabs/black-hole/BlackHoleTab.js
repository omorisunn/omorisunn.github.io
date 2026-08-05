import { BlackHoleAnimation } from "./black-hole-animation.js";
import BlackHoleChargingSliders from "./BlackHoleChargingSliders.js";
import BlackHoleStateRow from "./BlackHoleStateRow.js";
import BlackHoleUnlockButton from "./BlackHoleUnlockButton.js";
import BlackHoleUpgradeRow from "./BlackHoleUpgradeRow.js";

export default {
  name: "BlackHoleTab",
  components: {
    BlackHoleUpgradeRow,
    BlackHoleStateRow,
    BlackHoleChargingSliders,
    BlackHoleUnlockButton
  },
  data() {
    return {
      isDoomed: false,
      isUnlocked: false,
      isPaused: false,
      isEnslaved: false,
      pauseMode: 0,
      detailedBH2: "",
      isPermanent: false,
      hasBH2: false,
      blackHoleUptime: [],
      stateChange: "",
    };
  },
  computed: {
    blackHoles: () => BlackHoles.list,
    pauseModeString() {
      switch (this.pauseMode) {
        case BLACK_HOLE_PAUSE_MODE.NO_PAUSE:
          return "不暂停";
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH1:
          return this.hasBH2 ? "在黑洞 1 前" : "在激活前";
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH2:
          return "在黑洞 2 前";
        default:
          throw new Error("Unrecognized BH offline pausing mode");
      }
    },
  },
  mounted() {
    this.startAnimation();
  },
  destroyed() {
    if (this.animation) this.animation.unmount();
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.isUnlocked = BlackHoles.areUnlocked;
      this.isPaused = BlackHoles.arePaused;
      // If stop running enslaved, re-mount the black hole animation as it reappears
      if (this.isEnslaved && !Enslaved.isRunning) {
        if (this.animation) this.animation.unmount();
        this.startAnimation();
      }
      this.isEnslaved = Enslaved.isRunning;
      this.isPermanent = BlackHoles.arePermanent;
      this.pauseMode = player.blackHoleAutoPauseMode;
      this.hasBH2 = BlackHole(2).isUnlocked;
      this.blackHoleUptime = [BlackHole(1).duration / BlackHole(1).cycleLength,
        BlackHole(2).duration / BlackHole(2).cycleLength];
      this.detailedBH2 = this.bh2Status();

      if (player.blackHoleNegative < 1) this.stateChange = this.isPaused ? "取消反转" : "反转";
      else this.stateChange = this.isPaused ? "取消暂停" : "暂停";
    },
    bh2Status() {
      const bh1Remaining = BlackHole(1).timeWithPreviousActiveToNextStateChange;
      const bh2Remaining = BlackHole(2).timeWithPreviousActiveToNextStateChange;

      // Both BH active
      if (BlackHole(1).isActive && BlackHole(2).isActive) {
        const bh2Duration = Math.min(bh1Remaining, bh2Remaining);
        return `黑洞 2 将在接下来的 ${TimeSpan.fromSeconds(bh2Duration).toStringShort()} 内保持激活！`;
      }

      // BH1 active, BH2 will trigger before BH1 runs out
      if (BlackHole(1).isActive && (bh2Remaining < bh1Remaining)) {
        const bh2Duration = Math.min(bh1Remaining - bh2Remaining, BlackHole(2).duration);
        return `黑洞 2 将在黑洞 1 停用前激活，
          持续 ${TimeSpan.fromSeconds(bh2Duration).toStringShort()}`;
      }

      // BH2 won't start yet next cycle
      if (BlackHole(1).isActive || (bh2Remaining > BlackHole(1).duration)) {
        const cycleCount = BlackHole(1).isActive
          ? Math.floor((bh2Remaining - bh1Remaining) / BlackHole(1).duration) + 1
          : Math.floor(bh2Remaining / BlackHole(1).duration);
        return `黑洞 2 将在黑洞 1 再激活 ${quantifyInt("个周期", cycleCount)} 后激活。`;
      }

      // BH1 inactive, BH2 ready to go when BH1 activates
      if (BlackHole(2).isCharged) {
        const bh2Duration = Math.min(BlackHole(1).duration, bh2Remaining);
        return `黑洞 2 将与黑洞 1 一起激活，
          持续 ${TimeSpan.fromSeconds(bh2Duration).toStringShort()}。`;
      }

      // BH1 inactive, BH2 starts at some point after BH1 activates
      const bh2Duration = Math.min(BlackHole(1).duration - bh2Remaining, BlackHole(2).duration);
      return `黑洞 2 将在黑洞 1 激活 ${TimeSpan.fromSeconds(bh2Remaining).toStringShort()} 后激活，
        持续 ${TimeSpan.fromSeconds(bh2Duration).toStringShort()}。`;
    },
    togglePause() {
      BlackHoles.togglePause();
      if (BlackHoles.arePaused) {
        player.celestials.enslaved.isAutoReleasing = false;
      }
      this.update();
    },
    changePauseMode() {
      let steps;
      switch (this.pauseMode) {
        case BLACK_HOLE_PAUSE_MODE.NO_PAUSE:
          // Note: We don't need to check for permanent BH2 because the button disappears at that point
          steps = BlackHole(1).isPermanent ? 2 : 1;
          break;
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH1:
          steps = this.hasBH2 ? 1 : 2;
          break;
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH2:
          steps = 1;
          break;
        default:
          throw new Error("Unrecognized BH offline pausing mode");
      }
      player.blackHoleAutoPauseMode = (this.pauseMode + steps) % Object.values(BLACK_HOLE_PAUSE_MODE).length;
    },
    startAnimation() {
      setTimeout(() => {
        if (this.$refs.canvas) {
          this.animation = new BlackHoleAnimation(this.$refs.canvas.getContext("2d"));
        }
      }, 1);
    },
    gridStyle() {
      return this.isPermanent ? "l-black-hole-upgrade-permanent" : "l-black-hole-upgrade-grid";
    },
  },
  template: `
  <div class="l-black-hole-tab">
    <div
      v-if="isEnslaved || isDoomed"
      class="c-black-hole-disabled-description"
      data-v-black-hole-tab
    >
      <i v-if="isEnslaved">
        你必须……另寻他法……
        <br>
      </i>
      此现实的物理规律不允许黑洞存在。
    </div>
    <div
      v-else-if="!isUnlocked"
      class="l-pre-unlock-text"
      data-v-black-hole-tab
    >
      <BlackHoleUnlockButton @blackholeunlock="startAnimation" />
      黑洞会在短时间内让整个游戏运行速度大幅提升。
      <br>
      初始为每小时一次，在 {{ formatInt(10) }} 秒内加速 {{ formatX(180) }} 倍。
      <br>
      <br>
      解锁黑洞还会获得 {{ formatInt(10) }} 点自动机点数。
    </div>
    <template v-else>
      <div class="c-subtab-option-container">
        <button
          class="o-primary-btn o-primary-btn--subtab-option"
          @click="togglePause"
        >
          {{ stateChange }}黑洞
        </button>
        <button
          v-if="!isPermanent"
          class="o-primary-btn o-primary-btn--subtab-option l-auto-pause-button"
          @click="changePauseMode"
          data-v-black-hole-tab
        >
          自动暂停：{{ pauseModeString }}
        </button>
      </div>
      <canvas
        ref="canvas"
        class="c-black-hole-canvas"
        width="400"
        height="400"
      />
      <div class="l-black-hole-upgrade-grid">
        <BlackHoleStateRow
          v-for="(blackHole, i) in blackHoles"
          :key="'state' + i"
          :black-hole="blackHole"
        />
        <span v-if="hasBH2 && !isPermanent">
          <b>{{ detailedBH2 }}</b>
          <br>
          黑洞 2 的计时器只在黑洞 1 激活时前进。
          <br>
          升级影响内部计时器；顶部显示的是距下次激活的真实时间。
        </span>
        <br>
        <div v-if="!isPermanent">
          当黑洞的激活时间占比超过 {{ formatPercents(0.9999, 2) }}
          时，它们将永久激活。
          <br>
          激活时间占比：{{ formatPercents(blackHoleUptime[0], 3) }}
          <span v-if="hasBH2">和 {{ formatPercents(blackHoleUptime[1], 3) }}</span>
        </div>
        <BlackHoleChargingSliders class="l-enslaved-shop-container" />
      </div>
      <div :class="gridStyle()">
        <BlackHoleUpgradeRow
          v-for="(blackHole, i) in blackHoles"
          :key="'upgrades' + i"
          :black-hole="blackHole"
        />
      </div>
    </template>
  </div>
  `
};
