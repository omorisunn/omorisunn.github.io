import FullScreenAnimationHandler from "../../../core/full-screen-animation-handler.js";

import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "EnterDilationModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `膨胀时间将开始一次新的永恒，所有维度倍率的指数和
        计数频率倍率的指数都会降低到 ${formatPow(0.75, 2, 2)}。如果你能在膨胀状态下永恒，
        你的快子粒子将根据你的最高反物质和拥有的任何快子粒子倍率提升到一个数值。`;
    },
    entranceLabel() {
      return `你即将进入膨胀`;
    },
    EPSinceLabel() {
      if (player.dilation.lastEP.eq(-1)) {
        return "这是你的第一次膨胀";
      }
      if (!isInCelestialReality() && Ra.unlocks.unlockDilationStartingTP.canBeApplied) {
        return `由于 Teresa 的等级 ${formatInt(25)} 奖励，你已经拥有所能获得的最大可行快子粒子数量。`;
      }
      return `你上次在 ${format(player.dilation.lastEP, 2, 2)} 永恒点数时完成了膨胀。`;
    }
  },
  methods: {
    handleYesClick() {
      if (player.dilation.active) return;
      if (player.options.animations.dilation && !FullScreenAnimationHandler.isDisplaying) {
        // Strike trigger happens within the delayed dilation callback in this function
        animateAndDilate();
      } else {
        startDilatedEternity();
        if (Pelle.isDoomed) PelleStrikes.dilation.trigger();
      }
    },
  },
  template: `
  <ModalWrapperChoice
    option="dilation"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ EPSinceLabel }}
      <br>
      <br>
      {{ message }}
    </div>
    <template #confirm-text>
      进入
    </template>
  </ModalWrapperChoice>
  `
};
