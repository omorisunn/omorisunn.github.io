import { DC } from "../../../core/constants.js";

import TypeSacrifice from "./TypeSacrifice.js";

export default {
  name: "SacrificedGlyphs",
  components: {
    TypeSacrifice
  },
  data() {
    return {
      anySacrifices: false,
      hasDragover: false,
      hasAlteration: false,
      hideAlteration: false,
      maxSacrifice: 0,
      teresaMult: 0,
      lastMachinesTeresa: new Decimal(0),
    };
  },
  computed: {
    types: () => GLYPH_TYPES.filter(type => type !== "cursed" && type !== "companion"),
    lastMachines() {
      return this.lastMachinesTeresa.lt(DC.E10000)
        ? `${quantify("台现实机器", this.lastMachinesTeresa, 2)}`
        : `${quantify("台想象机器", this.lastMachinesTeresa.dividedBy(DC.E10000), 2)}`;
    },
    dropDownIconClass() {
      return this.hideAlteration ? "far fa-plus-square" : "far fa-minus-square";
    },
    isDoomed() {
      return Pelle.isDoomed;
    },
    addThreshold() {
      return GlyphAlteration.additionThreshold;
    },
    empowerThreshold() {
      return GlyphAlteration.empowermentThreshold;
    },
    boostThreshold() {
      return GlyphAlteration.boostingThreshold;
    },
    cosmeticTypes: () => CosmeticGlyphTypes,
    addStyle() {
      return { color: GlyphAlteration.baseAdditionColor() };
    },
    empowerStyle() {
      return { color: GlyphAlteration.baseEmpowermentColor() };
    },
    boostStyle() {
      return { color: GlyphAlteration.baseBoostColor() };
    },
    hasSeenRealityGlyph() {
      return player.reality.glyphs.createdRealityGlyph;
    }
  },
  created() {
    this.on$(GAME_EVENT.GLYPH_VISUAL_CHANGE, () => {
      this.$recompute("cosmeticTypes");
    });
  },
  methods: {
    update() {
      this.anySacrifices = GameCache.logTotalGlyphSacrifice !== 0;
      this.hasAlteration = Ra.unlocks.alteredGlyphs.canBeApplied;
      this.hideAlteration = player.options.hideAlterationEffects;
      this.maxSacrifice = GlyphSacrificeHandler.maxSacrificeForEffects;
      this.teresaMult = Teresa.runRewardMultiplier;
      this.lastMachinesTeresa.copyFrom(player.celestials.teresa.lastRepeatedMachines);
    },
    dragover(event) {
      if (Pelle.isDoomed) return;
      if (!event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      event.preventDefault();
      this.hasDragover = true;
    },
    dragleave(event) {
      if (
        this.isDoomed ||
        !event.relatedTarget ||
        !event.relatedTarget.classList ||
        event.relatedTarget.classList.contains("c-current-glyph-effects") ||
        event.relatedTarget.classList.contains("c-sacrificed-glyphs__header") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type-symbol") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type-amount") ||
        event.relatedTarget.classList.contains("c-sacrificed-glyphs__type-new-amount") ||
        event.relatedTarget.classList.length === 0) return;
      this.hasDragover = false;
    },
    drop(event) {
      if (this.isDoomed || !event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      const id = parseInt(event.dataTransfer.getData(GLYPH_MIME_TYPE), 10);
      if (isNaN(id)) return;
      const glyph = Glyphs.findById(id);
      if (!glyph) return;
      GlyphSacrificeHandler.sacrificeGlyph(glyph, true);
      this.hasDragover = false;
    },
    toggleAlteration() {
      player.options.hideAlterationEffects = !player.options.hideAlterationEffects;
    },
    glyphSymbol(type) {
      return this.cosmeticTypes[type].currentSymbol.symbol;
    }
  },
  template: `
  <div
    class="c-current-glyph-effects l-current-glyph-effects"
    :class="{'c-sacrificed-glyphs--dragover': hasDragover}"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <div class="l-sacrificed-glyphs__help">
      <span
        v-if="isDoomed"
        class="pelle-current-glyph-effects"
      >
        在末日中你无法献祭符文。
      </span>
      <span v-else>
        <div>将符文拖到这里或按住 shift 点击以献祭。</div>
        <div>可以在选项或按住 Ctrl 时禁用确认提示。</div>
      </span>
    </div>
    <div v-if="hasAlteration">
      <span
        class="c-altered-glyphs-toggle-button"
        @click="toggleAlteration"
      >
        <i :class="dropDownIconClass" />
        <b> 改造符文</b>
      </span>
      <br>
      <div v-if="hideAlteration">
        （细节已隐藏，点击以显示）
      </div>
      <div v-else>
        当符文类型的符文献祭总值超过以下数值时，<br>
        该类型符文的一个效果将得到提升：
        <br><br>
        <b>
          <span :style="addStyle">{{ format(addThreshold) }}：获得一个额外的次要效果</span>
          <br>
          <span :style="empowerStyle">{{ format(empowerThreshold) }}：公式大幅改进</span>
          <br>
          <span :style="boostStyle">{{ format(boostThreshold) }}：根据符文献祭获得加成</span>
        </b>
        <br><br>
        符文献祭的所有效果一旦达到 {{ format(maxSacrifice) }} 就无法再提升。
      </div>
    </div>
    <br>
    <div class="c-sacrificed-glyphs__header">
      符文献祭加成：
    </div>
    <div v-if="anySacrifices && !isDoomed">
      <div v-if="teresaMult > 1">
        符文献祭数值乘以 {{ formatX(teresaMult, 2, 2) }}；
        Teresa 上次是在 {{ lastMachines }} 时完成的。
        <span v-if="hasSeenRealityGlyph">
          Reality Glyph 不受此倍率影响，也没有改造效果。
        </span>
      </div>
      <template v-for="type in types">
        <TypeSacrifice
          :key="type + glyphSymbol(type)"
          :type="type"
          :has-dragover="hasDragover"
        />
      </template>
    </div>
    <div
      v-else-if="isDoomed"
      class="pelle-current-glyph-effects"
    >
      在末日中，符文献祭的所有加成都会被禁用，包括改造符文带来的效果变化。
    </div>
    <div v-else>
      你还没有献祭过任何符文！
    </div>
  </div>
  `
};
