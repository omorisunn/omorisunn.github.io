import ResetModal from "./ResetModal.js";

export default {
  name: "EternityModal",
  components: {
    ResetModal
  },
  data() {
    return {
      exitingEC: false,
      startingIP: new Decimal(),
      gainedEternityPoints: new Decimal(),
      gainedEternities: new Decimal()
    };
  },
  computed: {
    message() {
      return PlayerProgress.eternityUnlocked()
        ? `永恒会重置除成就、挑战记录以及统计页中常规标题下的所有内容。`
        : `永恒会重置除成就、挑战记录以及统计页中常规标题下的所有内容。
          你还会获得 1 点永恒点数并解锁各种升级。`;
    },
    gainedEPOnEternity() {
      return `永恒时你将获得 ${quantify("次永恒", this.gainedEternities, 2)}
      和 ${quantify("点永恒点数", this.gainedEternityPoints, 2)}。`;
    },
    startWithIP() {
      return this.startingIP.gt(0)
        ? `你的下一次永恒将从 ${quantify("点无限点数", this.startingIP, 2)} 开始。`
        : ``;
    },
    eternityChallenge() {
      const ec = EternityChallenge.current;
      if (ec.isFullyCompleted) {
        return `永恒挑战 ${ec.id} 已完全完成。`;
      }
      if (!Perk.studyECBulk.isBought) {
        return `你将获得永恒挑战 ${ec.id} 的一次完成。`;
      }
      const gainedCompletions = ec.gainedCompletionStatus.gainedCompletions;
      return `你将获得永恒挑战 ${ec.id} 的 ${quantifyInt("次完成", gainedCompletions)}。`;
    }
  },
  methods: {
    update() {
      this.exitingEC = EternityChallenge.isRunning;
      this.startingIP = Currency.infinityPoints.startingValue;
      this.gainedEternityPoints = gainedEternityPoints();
      this.gainedEternities = gainedEternities();
    },
    handleYesClick() {
      animateAndEternity();
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ResetModal
    :header="exitingEC ? '完成永恒挑战' : '你即将进行永恒'"
    :message="message"
    :gained-resources="gainedEPOnEternity"
    :starting-resources="startWithIP"
    :confirm-fn="handleYesClick"
    :alternate-condition="exitingEC"
    :alternate-text="exitingEC ? eternityChallenge : undefined"
    confirm-option="eternity"
  />
  `
};
