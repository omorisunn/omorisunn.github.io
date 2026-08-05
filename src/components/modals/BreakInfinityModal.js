import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "BreakInfinityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      const infinity = formatPostBreak(Number.MAX_VALUE, 2);
      return `突破无限后，你可以获得超过 ${infinity} 的反物质${PlayerProgress.eternityUnlocked()
        ? "。" : `，并可以读取超过 ${infinity} 的数字。`}
        在达到 ${infinity} 反物质后，维度与计数频率升级的价格增长会变快。
        大爆炸时，将根据超过 ${infinity} 的反物质产出获得额外的无限点数。\
        ${EternityMilestone.keepAutobuyers.isReached ? "" : `\n 同时解锁突破无限升级，并将所有普通挑战自动购买器设为最大。`}`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      breakInfinity();
    }
  },
  template: `
  <ModalWrapperChoice
    :show-cancel="false"
    @confirm="handleYesClick"
  >
    <template #header>
      你正在突破无限
    </template>
    <div class="c-modal-message__text">
      <span
        v-for="(line, index) in message"
        :key="index"
      >
        {{ line }} <br>
      </span>
    </div>
    <template #confirm-text>
      突破
    </template>
  </ModalWrapperChoice>
  `
};
