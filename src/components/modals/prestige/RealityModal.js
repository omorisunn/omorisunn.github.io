import GlyphComponent from "../../GlyphComponent.js";
import ModalWrapperChoice from "../ModalWrapperChoice.js";
import PrimaryButton from "../../PrimaryButton.js";

export default {
  name: "RealityModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
    GlyphComponent,
  },
  data() {
    return {
      firstReality: false,
      hasSpace: true,
      hasChoice: false,
      hasFilter: false,
      glyphs: [],
      bestLevel: 0,
      levelDifference: 0,
      selectedGlyph: undefined,
      canRefresh: false,
      level: 0,
      simRealities: 0,
      realityMachines: new Decimal(),
      shardsGained: 0,
      effarigUnlocked: false,
      willAutoPurge: false,
    };
  },
  computed: {
    firstRealityText() {
      return `现实会重置除挑战记录和统计页常规标题下的所有内容。
        成就的前 ${formatInt(13)} 行也会被重置，
        但每 ${timeDisplayNoDecimals(30 * 60000)} 你会自动找回一个成就。
        你还会根据永恒点数获得现实机器、一个等级基于永恒点数、复制体和膨胀时间的符文、
        一个可用于生活品质升级的福利点，并解锁各种升级。`;
    },
    canSacrifice() {
      return RealityUpgrade(19).isEffectActive;
    },
    warnText() {
      if (!this.hasChoice) {
        return `你目前每次现实只能获得一个符文选项。
          你可以通过取消此窗口并购买 START 福利，
          解锁从多个符文中选择的能力。`;
      }

      if (this.hasFilter && this.selectedGlyph === undefined) {
        return `如果你不选择符文，将使用你的符文筛选自动选择一个。`;
      }
      return this.selectedGlyph === undefined
        ? `你必须选择一个符文才能继续。`
        : null;
    },
    gained() {
      const gainedResources = [];
      gainedResources.push(`${quantifyInt("次现实", this.simRealities)}`);
      gainedResources.push(`${quantifyInt("个福利点", this.simRealities)}`);
      gainedResources.push(`${quantify("台现实机器", this.realityMachines, 2)}`);
      if (this.effarigUnlocked) {
        gainedResources.push(`${quantify("块遗物碎片", this.shardsGained, 2)}`);
      }
      return `你将获得${makeEnumeration(gainedResources)}`;
    },
    levelStats() {
      // Bit annoying to read due to needing >, <, and =, with = needing a different format.
      return `现实时你将获得等级为 ${formatInt(this.level)} 的符文，
        ${this.level === this.bestLevel ? "与你最好的记录持平" : `
        比你最好的记录${this.level > this.bestLevel ? "高" : "低"}
        ${quantifyInt("级", this.levelDifference)}`}。`;
    },
    confirmationToDisable() {
      return ConfirmationTypes.glyphSelection.isUnlocked() ? "glyphSelection" : undefined;
    },
    canConfirm() {
      return this.firstReality || this.selectedGlyph !== undefined || this.hasFilter;
    }
  },
  created() {
    this.getGlyphs();
    GlyphSelection.realityProps = getRealityProps(false, false);
  },
  methods: {
    update() {
      this.firstReality = player.realities === 0;
      this.hasChoice = Perk.firstPerk.isEffectActive;
      this.effarigUnlocked = TeresaUnlocks.effarig.canBeApplied;
      this.hasFilter = EffarigUnlock.glyphFilter.isUnlocked;
      this.level = gainedGlyphLevel().actualLevel;
      this.simRealities = 1 + simulatedRealityCount(false);
      this.hasSpace = GameCache.glyphInventorySpace.value >= this.simRealities;
      const simRMGained = MachineHandler.gainedRealityMachines.times(this.simRealities);
      this.realityMachines.copyFrom(simRMGained.clampMax(MachineHandler.distanceToRMCap));
      this.shardsGained = Effarig.shardsGained * (simulatedRealityCount(false) + 1);
      this.willAutoPurge = player.reality.autoAutoClean;
      if (this.firstReality) return;
      for (let i = 0; i < this.glyphs.length; ++i) {
        const currentGlyph = this.glyphs[i];
        const newGlyph = GlyphSelection.glyphList(
          GlyphSelection.choiceCount, gainedGlyphLevel(), { isChoosingGlyph: false }
        )[i];
        if (currentGlyph.level === newGlyph.level) continue;
        currentGlyph.level = newGlyph.level;
        currentGlyph.effects = newGlyph.effects;
      }
      this.bestLevel = player.records.bestReality.glyphLevel;
      this.levelDifference = Math.abs(this.bestLevel - this.level);
    },
    glyphClass(index) {
      return {
        "l-modal-glyph-selection__glyph": true,
        "l-modal-glyph-selection__glyph--selected": this.selectedGlyph === index,
      };
    },
    getGlyphs() {
      this.canRefresh = true;
      this.glyphs = GlyphSelection.upcomingGlyphs;
    },
    select(index) {
      this.selectedGlyph = index;
    },
    confirmModal(sacrifice) {
      if (!this.canConfirm) return;
      if (sacrifice) {
        // Sac isn't passed through confirm so we have to close it manually
        this.emitClose();
      }
      startManualReality(sacrifice, this.selectedGlyph);
    }
  },
  template: `
  <ModalWrapperChoice
    :option="confirmationToDisable"
    :show-confirm="canConfirm"
    @confirm="confirmModal(false)"
    data-v-reality-modal
  >
    <template #header>
      你即将进行现实
    </template>
    <div
      v-if="firstReality"
      class="c-modal-message__text"
      data-v-reality-modal
    >
      {{ firstRealityText }}
    </div>

    <div
      class="c-modal-message__text"
      data-v-reality-modal
    >
      {{ gained }}
    </div>
    <div
      v-if="!firstReality"
      class="l-glyph-selection__row"
      data-v-reality-modal
    >
      <GlyphComponent
        v-for="(glyph, index) in glyphs"
        :key="index"
        :class="glyphClass(index)"
        :glyph="glyph"
        :is-in-modal="true"
        :ignore-modified-level="true"
        :show-sacrifice="canSacrifice"
        @click.native="select(index)"
        data-v-reality-modal
      />
    </div>
    <div v-if="!firstReality">
      {{ levelStats }}
      <br>
      <b class="o-warning">
        {{ warnText }}
      </b>
    </div>
    <div v-if="simRealities > 1">
      <br>
      选择此符文后，游戏将模拟你的其余现实，
      <br>
      并根据你的符文筛选设置自动选择另外 {{ quantifyInt("个符文", simRealities - 1) }}。
    </div>
    <div v-if="willAutoPurge">
      <br>
      自动清除当前已启用；你选择的符文
      <br>
      可能在触发后不会出现在你的背包中。
    </div>
    <div
      v-if="!hasSpace"
      class="o-warning"
      data-v-reality-modal
    >
      <span v-if="simRealities > 1">
        你将模拟的现实次数超过你可用背包空间的容纳数量；
        这可能导致部分符文被献祭。
      </span>
      <span v-else>
        你没有可用的背包空间，你选择的符文将被自动
        {{ canSacrifice ? "献祭" : "删除" }}！
      </span>
    </div>
    <div v-if="confirmationToDisable">
      <br>
      你可以通过按住 Shift 点击现实按钮，强制此窗口出现（即使已被禁用）。
    </div>
    <template
      v-if="canSacrifice && canConfirm"
      #extra-buttons
    >
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="confirmModal(true)"
        data-v-reality-modal
      >
        献祭
      </PrimaryButton>
    </template>
  </ModalWrapperChoice>
  `
};
