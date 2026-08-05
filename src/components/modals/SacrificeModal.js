import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "SacrificeModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      currentMultiplier: new Decimal(),
      nextMultiplier: new Decimal(),
    };
  },
  computed: {
    message() {
      if (Achievement(118).isUnlocked && !Pelle.isDoomed) {
        return `维度献祭将根据献祭时拥有的第一反物质维度数量，
          为第八反物质维度提供加成。`;
      }
      return `维度献祭将移除你的第一至第七反物质维度
        （价格和倍率保持不变），并根据献祭的第一反物质维度总数
        为第八反物质维度提供加成。恢复产出需要一些时间。`;
    },
    multiplierText() {
      return `当前倍率为 ${formatX(this.currentMultiplier, 2, 2)}，维度献祭后将增加到
        ${formatX(this.nextMultiplier, 2, 2)}。`;
    },
  },
  methods: {
    update() {
      this.currentMultiplier.copyFrom(Sacrifice.totalBoost);
      this.nextMultiplier.copyFrom(Sacrifice.nextBoost.times(Sacrifice.totalBoost));
    },
    handleYesClick() {
      sacrificeReset();
    }
  },
  template: `
  <ModalWrapperChoice
    option="sacrifice"
    @confirm="handleYesClick"
  >
    <template #header>
      维度献祭
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <br>
    <div class="c-modal-message__text">
      {{ multiplierText }}
      <br>
    </div>
  </ModalWrapperChoice>
  `
};
