import ResetModal from "./ResetModal.js";

export default {
  name: "BigCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedInfinities: new Decimal(),
      gainedInfinityPoints: new Decimal(),
      startingBoosts: 0,
      startingAM: 10,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstInfinity() {
      return !PlayerProgress.infinityUnlocked();
    },
    message() {
      const info = this.isFirstInfinity ? this.firstInfinityInfo : ``;
      return `无限时，所有维度、维度提升和反物质星系都会被重置。${info}`;
    },
    firstInfinityInfo() {
      return `作为交换，你会获得 1 点无限点数（IP）。这允许你购买无限标签页中的多种升级。
        你还会获得 1 次无限，即统计页中显示的数值。`;
    },
    ipGainInfo() {
      return `你将获得 ${quantify("次无限", this.gainedInfinities, 2, 0)}
        和 ${quantify("点无限点数", this.gainedInfinityPoints, 2, 0)}。`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingAM.gte(10)) gainedResources.push(`${quantify("反物质", this.startingAM, 2, 1)}`);
      if (this.startingBoosts > 0) gainedResources.push(`${quantify("次维度提升", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("个星系", 1)}`);

      return `你的下一次无限将从${makeEnumeration(gainedResources)}开始。`;
    }
  },
  methods: {
    update() {
      this.gainedInfinities = gainedInfinities().round();
      this.gainedInfinityPoints = gainedInfinityPoints().round();
      this.startingBoosts = DimBoost.startingDimensionBoosts;
      this.startingAM = Currency.antimatter.startingValue;
      this.willStartWithGalaxy = InfinityUpgrade.skipResetGalaxy.isBought;
    },
    handleYesClick() {
      bigCrunchResetRequest();
      EventHub.ui.offAll(this);
      if (this.isFirstInfinity) {
        setTimeout(() => Modal.message.show(`此动画会在每次手动触发的无限后出现。如果你想要
          禁用它，可以在选项页中找到相关设置。游戏中的任何视觉效果动画在首次观看后都可以这样关闭。`, {}, 3), 2000);
      }
    }
  },
  template: `
  <ResetModal
    header="你即将进入无限"
    :message="message"
    :gained-resources="ipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstInfinity"
    :alternate-text="message"
    :confirm-option="isFirstInfinity ? undefined : 'bigCrunch'"
  />
  `
};
