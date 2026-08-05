import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "DimensionBoostModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    bulk: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    topLabel() {
      return `你即将进行维度提升重置`;
    },
    message() {
      const keepDimensions = Perk.antimatterNoReset.canBeApplied || Achievement(111).canBeApplied ||
        PelleUpgrade.dimBoostResetsNothing.isBought
        ? `由于你拥有的升级阻止了反物质和反物质维度在此情况下被重置，
          实际上不会重置任何东西。你仍会像往常一样获得提升带来的倍率。`
        : `重置你的反物质和反物质维度。你确定要这样做吗？`;

      return `这将${keepDimensions}`;
    },
  },
  methods: {
    handleYesClick() {
      requestDimensionBoost(this.bulk);
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ModalWrapperChoice
    option="dimensionBoost"
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
