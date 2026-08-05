import CelestialQuoteHistory from "../../CelestialQuoteHistory.js";
import RaPet from "./RaPet.js";
import RaPetRemembranceButton from "./RaPetRemembranceButton.js";

export default {
  name: "RaTab",
  components: {
    RaPet,
    RaPetRemembranceButton,
    CelestialQuoteHistory
  },
  data() {
    return {
      memoriesPerChunk: 0,
      showReality: false,
      isRaCapped: false,
      totalLevels: 0,
      showRemembrance: false,
      hasRemembrance: false,
      remembranceReq: 0,
      remembranceMult: 1,
      remembranceNerf: 1,
      petWithRemembrance: "",
      isRunning: false,
      memoryBoosts: "",
    };
  },
  computed: {
    laitelaUnlock: () => Laitela.isUnlocked,
    pets: () => [
      {
        pet: Ra.pets.teresa,
        scalingUpgradeVisible: () => Ra.unlocks.chargedInfinityUpgrades.isUnlocked,
        scalingUpgradeText: () => `你可以为 ${quantifyInt("个无限升级", Ra.totalCharges)} 充能。`,
      },
      {
        pet: Ra.pets.effarig,
        scalingUpgradeVisible: () => AlchemyResources.all.filter(r => r.isUnlocked).length > 0,
        scalingUpgradeText: () => {
          const resources = AlchemyResources.all.filter(r => r.isUnlocked).length;
          return `你已经解锁了 ${quantifyInt("个炼金资源", resources)}。`;
        },
      },
      {
        pet: Ra.pets.enslaved,
        scalingUpgradeVisible: () => Ra.unlocks.improvedStoredTime.isUnlocked,
        scalingUpgradeText: () => `存储游戏时间
          ${formatX(Ra.unlocks.improvedStoredTime.effects.gameTimeAmplification.effectOrDefault(1), 2)}，真实时间
          上限 +${formatInt(Ra.unlocks.improvedStoredTime.effects.realTimeCap.effectOrDefault(0) / (1000 * 3600))} 小时`,
      },
      {
        pet: Ra.pets.v,
        scalingUpgradeVisible: () => Ra.unlocks.unlockHardV.isUnlocked,
        scalingUpgradeText: () => {
          const triadCount = Ra.unlocks.unlockHardV.effectOrDefault(0);
          return `你已经解锁了 ${quantifyInt("个三元研究", triadCount)}。`;
        },
      }
    ],
    petStyle() {
      return {
        color: (this.petWithRemembrance === "")
          ? "white"
          : this.pets.find(pet => pet.pet.name === this.petWithRemembrance).pet.color,
      };
    },
    runButtonClassObject() {
      return {
        "c-ra-run-button__icon": true,
        "c-ra-run-button__icon--running": this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
    runDescription() {
      return GameDatabase.celestials.descriptions[4].effects().replace(/^\w/u, c => c.toUpperCase()).split("\n");
    },
    memoryDescription() {
      return `在 Ra 的现实中，天体记忆的记忆块
        将根据特定资源数量生成。`;
    },
    isDoomed: () => Pelle.isDoomed,
  },
  methods: {
    update() {
      this.memoriesPerChunk = Ra.productionPerMemoryChunk;
      this.isRaCapped = Ra.totalPetLevel === 100;
      this.totalLevels = Ra.totalPetLevel;
      this.showRemembrance = Ra.unlocks.effarigUnlock.canBeApplied;
      this.hasRemembrance = Ra.remembrance.isUnlocked;
      this.remembranceReq = Ra.remembrance.requiredLevels;
      this.remembranceMult = Ra.remembrance.multiplier;
      this.remembranceNerf = Ra.remembrance.nerf;
      this.petWithRemembrance = Ra.petWithRemembrance;
      this.isRunning = Ra.isRunning;
      this.memoryBoosts = Ra.memoryBoostResources;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "Ra's", number: 4 });
    },
    toggleMode() {
      Ra.toggleMode();
    }
  },
  template: `
  <div class="l-ra-celestial-tab">
    <div class="c-ra-memory-header">
      <CelestialQuoteHistory celestial="ra" />
      <div v-if="!isRaCapped">
        每个记忆块基础每秒生成 1 点记忆<span v-if="memoriesPerChunk > 1">，
          目前已经提升到每秒 {{ quantify("点记忆", memoriesPerChunk, 2, 3) }}</span>。
        <br>
        存储真实时间会阻止记忆块生成，但记忆仍会正常获得。
        <span v-if="memoriesPerChunk > 1">
          <br>
          由于{{ memoryBoosts }}，这一数值正在提升。
        </span>
      </div>
      <div v-else>
        所有记忆都已归还。
      </div>
    </div>
    <div>
      将鼠标悬停在进度条下方的图标上可以查看升级说明，
      <br>
      将鼠标悬停在 <i class="fas fa-question-circle" /> 图标上可以查看特定资源信息。
    </div>
    <div class="l-ra-all-pets-container">
      <RaPet
        v-for="(pet, i) in pets"
        :key="i"
        :pet-config="pet"
      />
    </div>
    <div class="l-ra-non-pets">
      <button class="c-ra-run-button">
        <h2 :class="{ 'o-pelle-disabled': isDoomed }">
          <span v-if="isRunning">你正处于 </span>
          <span v-else>开始 </span>
          Ra 的现实
        </h2>
        <div
          :class="runButtonClassObject"
          @click="startRun"
        >
          <span class="c-ra-run-button__icon__sigil fas fa-sun" />
        </div>
        <span
          v-for="(line, lineId) in runDescription"
          :key="lineId + '-ra-run-desc'"
        >
          {{ line }}
        </span>
        <br>
        <span>
          {{ memoryDescription }}
        </span>
      </button>
      <div
        v-if="showRemembrance && !isRaCapped"
        class="c-ra-remembrance-unlock"
      >
        <h1 :style="petStyle">
          Remembrance
        </h1>
        <span :style="petStyle">
          拥有 Remembrance 的天体将获得 {{ formatX(remembranceMult) }} 的记忆块收益。其他
          天体将获得 {{ formatX(remembranceNerf, 1, 1) }} 的记忆块收益。
        </span>
        <div
          v-if="hasRemembrance"
          class="c-ra-remembrance-unlock-inner"
        >
          <RaPetRemembranceButton
            v-for="(pet, i) in pets"
            :key="i"
            :pet-config="pet"
          />
        </div>
        <div
          v-else
          class="c-ra-remembrance-unlock-inner"
        >
          通过获得总计 {{ formatInt(remembranceReq) }} 级天体记忆等级解锁
          （你还需要 {{ formatInt(remembranceReq - totalLevels) }} 级）
        </div>
      </div>
    </div>
  </div>
  `
};
