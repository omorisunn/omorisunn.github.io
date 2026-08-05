import FullScreenAnimationHandler from "../../../core/full-screen-animation-handler.js";

import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "ExitDilationModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      tachyonGain: new Decimal(0),
      isDoomed: false
    };
  },
  computed: {
    gainText() {
      if (this.tachyonGain.lte(0)) return `不会获得任何东西`;
      return `获得 ${quantify("个快子粒子", this.tachyonGain, 2, 1)}`;
    },
    isInEC() {
      return Player.anyChallenge instanceof EternityChallengeState;
    },
    confirmText() {
      return this.isDoomed ? "好的" : "退出";
    }
  },
  methods: {
    update() {
      // We force-close the modal if dilation is inactive because there are a few edge cases which allow it to be
      // opened while switching between dilated/regular. The only thing this results in is an incorrect TP gain value
      if (!player.dilation.active) this.emitClose();
      this.tachyonGain.copyFrom(getTachyonGain(true));
      this.isDoomed = Pelle.isDoomed;
    },
    handleYesClick() {
      if (!player.dilation.active) return;
      const playAnimation = player.options.animations.dilation && !FullScreenAnimationHandler.isDisplaying;
      if (playAnimation) {
        animateAndUndilate();
      } else {
        eternity(false, false, { switchingDilation: true });
      }
    },
  },
  template: `
  <ModalWrapperChoice
    option="dilation"
    @confirm="handleYesClick"
  >
    <template #header>
      <span v-if="isDoomed">
        在末日中你无法退出膨胀
      </span>
      <span v-else>
        你即将退出膨胀
      </span>
    </template>
    <div class="c-modal-message__text">
      <span v-if="isDoomed">
        膨胀是永久的。你将{{ gainText }}并重置当前的永恒。
      </span>
      <span v-else>
        如果你现在退出膨胀，你将{{ gainText }}。
      </span>
      <div v-if="isInEC">
        你同时也会退出当前的永恒挑战。
      </div>
      <br>
      你确定要继续吗？
    </div>
    <template #confirm-text>
      {{ confirmText }}
    </template>
  </ModalWrapperChoice>
  `
};
