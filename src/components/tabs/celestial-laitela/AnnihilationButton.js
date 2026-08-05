export default {
  name: "AnnihilationButton",
  data() {
    return {
      darkMatter: new Decimal(0),
      darkMatterMult: 0,
      darkMatterMultGain: 0,
      autobuyerUnlocked: false,
      annihilationButtonVisible: false,
      matterRequirement: 0,
      darkMatterMultRatio: 0,
      autoAnnihilationInput: player.auto.annihilation.multiplier,
      isEnabled: true,
    };
  },
  computed: {
    annihilationInputStyle() {
      return { "background-color": this.isEnabled ? "" : "var(--color-bad)" };
    }
  },
  methods: {
    update() {
      this.darkMatter.copyFrom(Currency.darkMatter);
      this.darkMatterMult = Laitela.darkMatterMult;
      this.darkMatterMultGain = Laitela.darkMatterMultGain;
      this.autobuyerUnlocked = Autobuyer.annihilation.isUnlocked;
      this.annihilationButtonVisible = Laitela.canAnnihilate || this.autobuyerUnlocked;
      this.matterRequirement = Laitela.annihilationDMRequirement;
      this.darkMatterMultRatio = Laitela.darkMatterMultRatio;
      this.isEnabled = player.auto.annihilation.isActive;
    },
    annihilate() {
      Laitela.annihilate();
    },
    handleAutoAnnihilationInputChange() {
      const float = parseFloat(this.autoAnnihilationInput);
      if (isNaN(float)) {
        this.autoAnnihilationInput = player.auto.annihilation.multiplier;
      } else {
        player.auto.annihilation.multiplier = float;
      }
    }
  },
  template: `
  <div class="l-laitela-annihilation-container">
    <button
      v-if="darkMatter.lt(matterRequirement)"
      class="l-laitela-annihilation-button"
    >
      湮灭需要 {{ format(matterRequirement, 2) }} 暗物质
    </button>
    <button
      v-else
      class="l-laitela-annihilation-button c-laitela-annihilation-button"
      @click="annihilate"
    >
      <b>湮灭你的暗物质维度</b>
    </button>
    <br>
    <br>
    <span v-if="darkMatterMult > 1">
      所有暗物质维度的当前倍率：<b>{{ formatX(darkMatterMult, 2, 2) }}</b>
      <br>
      <br>
      湮灭会重置你的暗物质和暗物质维度数量，但也会为你的湮灭倍率增加
      <b>+{{ format(darkMatterMultGain, 2, 2) }}</b>。
      <br>
      （来自之前倍率的 <b>{{ formatX(darkMatterMultRatio, 2, 2) }}</b>）
      <span v-if="autobuyerUnlocked">
        <br>
        <br>
        当增加
        <input
          v-model="autoAnnihilationInput"
          type="text"
          :style="annihilationInputStyle"
          class="c-small-autobuyer-input c-laitela-annihilation-input"
          @change="handleAutoAnnihilationInputChange()"
        >
        到倍率时自动湮灭。
      </span>
    </span>
    <span v-else>
      湮灭会重置你的暗物质和暗物质维度数量，但会为所有暗物质维度提供
      <b>{{ formatX(1 + darkMatterMultGain, 2, 2) }}</b> 的永久倍率。
    </span>
  </div>
  `
};
