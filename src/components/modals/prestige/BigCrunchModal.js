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
      return `Upon Infinity, all Dimensions, Dimension Boosts, and Antimatter Galaxies are reset. ${info}`;
    },
    firstInfinityInfo() {
      return `In return, you gain an Infinity Point (IP). This allows you to buy multiple upgrades that you can
        find in the Infinity tab. You will also gain one Infinity, which is the stat shown in the Statistics tab.`;
    },
    ipGainInfo() {
      return `You will gain ${quantify("Infinity", this.gainedInfinities, 2, 0)}
        and ${quantify("Infinity Point", this.gainedInfinityPoints, 2, 0)}.`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingAM.gte(10)) gainedResources.push(`${quantify("Antimatter", this.startingAM, 2, 1)}`);
      if (this.startingBoosts > 0) gainedResources.push(`${quantify("Dimension Boost", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("Galaxy", 1)}`);

      return `You will start your next Infinity with ${makeEnumeration(gainedResources)}.`;
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