import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "ArmageddonModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      isDoomed: false,
      remnantsGain: 0,
      realityShardGain: new Decimal(0),
      nextRealityShardGain: new Decimal(0),
      canArmageddon: false,
    };
  },
  computed: {
    topLabel() {
      if (!this.isDoomed) return `你即将使你的现实进入末日`;
      return `你即将执行一次末日审判重置`;
    },
    message() {
      const isFirstReset = (Currency.remnants.eq(0))
        ? `，这将产生每秒 ${format(this.nextRealityShardGain, 2, 2)} 现实碎片`
        : `，这将使你的现实碎片产出从每秒 ${format(this.realityShardGain, 2, 2)}
          增加到每秒 ${format(this.nextRealityShardGain, 2, 2)}`;

      return `末日审判将开始一个新的末日现实。你将获得
      ${quantify("个遗物", this.remnantsGain, 2, 0)}${isFirstReset}`;
    }
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.remnantsGain = Pelle.remnantsGain;
      this.realityShardGain.copyFrom(Pelle.realityShardGainPerSecond);
      this.nextRealityShardGain.copyFrom(Pelle.nextRealityShardGain);
      this.canArmageddon = Pelle.canArmageddon;
    },
    handleYesClick() {
      Pelle.initializeRun();
    },
  },
  template: `
  <ModalWrapperChoice
    :option="isDoomed ? 'armageddon' : undefined"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div
      v-if="!isDoomed"
      class="c-modal-message__text"
    >
      使你的现实进入末日会重置除挑战记录、天体进度以及统计页中
      常规与现实标题下的所有内容。你将不会从当前现实中的进度获得任何奖励。
      使你的现实进入末日还会清除大部分未受保护的符文，并禁用
      某些游戏机制。
      <br>
      <br>
      你确定要这样做吗？
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      {{ message }}
    </div>
  </ModalWrapperChoice>
  `
};
