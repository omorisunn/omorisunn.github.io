import ModalOptionsToggleButton from "../../ModalOptionsToggleButton.js";
import ModalWrapperOptions from "./ModalWrapperOptions.js";

export default {
  name: "InfoDisplayOptionsModal",
  components: {
    ModalOptionsToggleButton,
    ModalWrapperOptions,
  },
  data() {
    return {
      infinityUnlocked: false,
      eternityUnlocked: false,
      realityUnlocked: false,
      alchemyUnlocked: false,

      showPercentage: false,
      achievements: false,
      achievementUnlockStates: false,
      challenges: false,
      studies: false,
      glyphEffectDots: false,
      realityUpgrades: false,
      perks: false,
      alchemy: false,
    };
  },
  computed: {
    fullCompletion() {
      return player.records.fullGameCompletions > 0;
    }
  },
  watch: {
    showPercentage(newValue) {
      player.options.showHintText.showPercentage = newValue;
    },
    achievements(newValue) {
      player.options.showHintText.achievements = newValue;
    },
    achievementUnlockStates(newValue) {
      player.options.showHintText.achievementUnlockStates = newValue;
    },
    challenges(newValue) {
      player.options.showHintText.challenges = newValue;
    },
    studies(newValue) {
      player.options.showHintText.studies = newValue;
    },
    glyphEffectDots(newValue) {
      player.options.showHintText.glyphEffectDots = newValue;
    },
    realityUpgrades(newValue) {
      player.options.showHintText.realityUpgrades = newValue;
    },
    perks(newValue) {
      player.options.showHintText.perks = newValue;
    },
    alchemy(newValue) {
      player.options.showHintText.alchemy = newValue;
    },
  },
  methods: {
    update() {
      const progress = PlayerProgress.current;
      this.infinityUnlocked = this.fullCompletion || progress.isInfinityUnlocked;
      this.eternityUnlocked = this.fullCompletion || progress.isEternityUnlocked;
      this.realityUnlocked = this.fullCompletion || progress.isRealityUnlocked;
      this.alchemyUnlocked = this.fullCompletion || Ra.unlocks.effarigUnlock.canBeApplied;

      const options = player.options.showHintText;
      this.showPercentage = options.showPercentage;
      this.achievements = options.achievements;
      this.achievementUnlockStates = options.achievementUnlockStates;
      this.challenges = options.challenges;
      this.studies = options.studies;
      this.glyphEffectDots = options.glyphEffectDots;
      this.realityUpgrades = options.realityUpgrades;
      this.perks = options.perks;
      this.alchemy = options.alchemy;
    }
  },
  template: `
  <ModalWrapperOptions class="c-modal-options__large">
    <template #header>
      信息显示选项
    </template>
    <div class="c-modal-options__button-container">
      <ModalOptionsToggleButton
        v-model="showPercentage"
        text="显示 % 增长："
      />
      <ModalOptionsToggleButton
        v-model="achievements"
        text="成就编号："
      />
      <ModalOptionsToggleButton
        v-model="achievementUnlockStates"
        text="成就解锁状态指示器："
      />
      <ModalOptionsToggleButton
        v-if="infinityUnlocked"
        v-model="challenges"
        text="挑战编号："
      />
      <ModalOptionsToggleButton
        v-if="eternityUnlocked"
        v-model="studies"
        text="时间研究编号："
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="glyphEffectDots"
        text="符文效果点："
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="realityUpgrades"
        text="现实升级名称："
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="perks"
        text="福利编号："
      />
      <ModalOptionsToggleButton
        v-if="alchemyUnlocked"
        v-model="alchemy"
        text="炼金资源数量："
      />
    </div>
    注意：按住 shift 时，以上所有类型的附加信息都会显示。
  </ModalWrapperOptions>
  `
};
