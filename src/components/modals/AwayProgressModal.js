import AwayProgressEntry from "./AwayProgressEntry.js";
import ModalWrapper from "./ModalWrapper.js";

export default {
  name: "AwayProgressModal",
  components: {
    AwayProgressEntry,
    ModalWrapper,
  },
  props: {
    playerBefore: {
      type: Object,
      required: true,
    },
    playerAfter: {
      type: Object,
      required: true,
    },
    seconds: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      somethingHappened: false,
    };
  },
  computed: {
    nothingHappened() {
      return Theme.current().name === "S9";
    },
    offlineStats() {
      return AwayProgressTypes.appearsInAwayModal;
    },
    headerText() {
      const timeDisplay = TimeSpan.fromSeconds(this.seconds).toString();
      if (this.nothingHappened || !this.somethingHappened) {
        return `你离开了 ${timeDisplay}... 什么也没有发生。`;
      }
      return `你离开了 ${timeDisplay}：`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      // After all the children have been loaded, check if somethingHappened - if not, give them the achievement!
      if (this.nothingHappened || !this.somethingHappened) SecretAchievement(36).unlock();
    });
  },
  template: `
  <ModalWrapper class="c-modal-away-progress">
    <div class="c-modal-away-progress__header">
      {{ headerText }}
    </div>
    <div
      v-if="!nothingHappened"
      class="c-modal-away-progress__resources c-modal--short"
      data-v-away-progress-modal
    >
      <AwayProgressEntry
        v-for="name of offlineStats"
        :key="name"
        :name="name"
        :player-before="playerBefore"
        :player-after="playerAfter"
        @something-happened="somethingHappened = true"
      />
    </div>
    <span v-if="!nothingHappened && somethingHappened">提示：点击条目可以隐藏它。</span>
  </ModalWrapper>
  `
};