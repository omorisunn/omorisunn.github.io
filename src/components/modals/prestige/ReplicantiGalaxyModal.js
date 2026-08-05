import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "ReplicantiGalaxyModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      replicanti: new Decimal(),
      divideReplicanti: false,
      canBeBought: 0,
    };
  },
  computed: {
    topLabel() {
      return `你即将购买 ${quantifyInt("个复制器星系", this.canBeBought)}`;
    },
    message() {
      const reductionString = this.divideReplicanti
        ? `每购买一个复制器星系，将你的复制器除以 ${format(Number.MAX_VALUE, 2, 2)}
          （从 ${format(this.replicanti, 2, 2)} 变为
          ${format(this.replicanti.divide(Decimal.NUMBER_MAX_VALUE.pow(this.canBeBought)), 2, 2)}）`
        : `将你的复制器重置为 ${formatInt(1)}`;
      return `复制器星系与反物质星系一样提升计数频率。但它不会
        提高反物质星系的价格，也不受专门针对反物质星系的倍率影响。
        它将${reductionString}。`;
    }
  },
  methods: {
    update() {
      this.replicanti.copyFrom(player.replicanti.amount);
      this.divideReplicanti = Achievement(126).isUnlocked;
      this.canBeBought = Replicanti.galaxies.gain;
      if (this.replicanti.lt(Number.MAX_VALUE)) this.emitClose();
    },
    handleYesClick() {
      replicantiGalaxy(false);
    },
  },
  template: `
  <ModalWrapperChoice
    option="replicantiGalaxy"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
  `
};
