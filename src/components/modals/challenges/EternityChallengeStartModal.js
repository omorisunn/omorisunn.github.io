import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "EternityChallengeStartModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    challenge() {
      return EternityChallenge(this.id);
    },
    challengeIsCompleted() {
      return this.challenge.isFullyCompleted;
    },
    message() {
      return `你将进行永恒（如果可能）并在挑战中开始一次新的永恒，所有
        挑战专属限制和修正都会生效。
        要完成挑战${this.challengeIsCompleted ? "" : "并获得其奖励"}，
        你必须达到挑战目标
        ${format(this.challenge.currentGoal)} 无限点数。永恒挑战最多可以完成
        ${formatInt(5)} 次，目标和奖励会不断提升。`;
    },
    entranceLabel() {
      return `你即将进入永恒挑战 ${this.id}`;
    },
    reward() {
      let rewardDescription = this.challenge._config.reward.description;
      if (typeof rewardDescription === "function") {
        rewardDescription = rewardDescription();
      }
      return `完成此挑战的奖励是：${rewardDescription}`;
    },
    condition() {
      let conditionOfChallenge = this.challenge._config.description;
      if (typeof conditionOfChallenge === "function") {
        conditionOfChallenge = conditionOfChallenge();
      }
      return `在此永恒挑战中，${conditionOfChallenge}`;
    }
  },
  created() {
    this.on$(GAME_EVENT.ETERNITY_RESET_AFTER, this.emitClose);
    this.on$(GAME_EVENT.REALITY_RESET_AFTER, this.emitClose);
  },
  methods: {
    handleYesClick() {
      this.challenge.start(true);
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ModalWrapperChoice
    option="challenges"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
      <br><br>
      {{ condition }}
    </div>
    <div
      v-if="!challengeIsCompleted"
      class="c-modal-message__text"
    >
      <br>
      {{ reward }}
    </div>
    <template #confirm-text>
      开始
    </template>
  </ModalWrapperChoice>
  `
};
