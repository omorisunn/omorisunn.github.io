import ModalWrapper from "./ModalWrapper.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "RealityGlyphCreationModal",
  components: {
    ModalWrapper,
    PrimaryButton
  },
  data() {
    return {
      isDoomed: false,
      realityGlyphLevel: 0,
      // This contains an array where each entry is an array looking like [4000, "realitygalaxies"]
      possibleEffects: [],
    };
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.realityGlyphLevel = AlchemyResource.reality.effectValue;
      const realityEffectConfigs = GlyphEffects.all
        .filter(eff => eff.glyphTypes.includes("reality"))
        .sort((a, b) => a.bitmaskIndex - b.bitmaskIndex);
      const minRealityEffectIndex = realityEffectConfigs.map(cfg => cfg.bitmaskIndex).min();
      this.possibleEffects = realityEffectConfigs
        .map(cfg => [realityGlyphEffectLevelThresholds[cfg.bitmaskIndex - minRealityEffectIndex], cfg.id]);
    },
    createRealityGlyph() {
      if (GameCache.glyphInventorySpace.value === 0) {
        Modal.message.show("没有可用的背包空间；献祭一些符文来腾出空间。",
          { closeEvent: GAME_EVENT.GLYPHS_CHANGED });
        return;
      }
      Glyphs.addToInventory(GlyphGenerator.realityGlyph(this.realityGlyphLevel));
      AlchemyResource.reality.amount = 0;
      player.reality.glyphs.createdRealityGlyph = true;
      this.emitClose();
    },
    formatGlyphEffect(effect) {
      if (this.realityGlyphLevel < effect[0]) return `（需要符文等级 ${formatInt(effect[0])}）`;
      const config = GlyphEffects[effect[1]];
      const value = config.effect(this.realityGlyphLevel, rarityToStrength(100));
      const effectTemplate = config.singleDesc;
      return effectTemplate.replace("{value}", config.formatEffect(value));
    }
  },
  template: `
  <ModalWrapper>
    <template #header>
      创造现实符文
    </template>
    <div class="c-reality-glyph-creation">
      <div>
        创造一个等级为 {{ formatInt(realityGlyphLevel) }} 的现实符文。
        稀有度将始终为 {{ formatPercents(1) }}，
        等级取决于你当前的现实资源数量（该资源会被全部消耗）。所有其他炼金资源
        不会受到影响。现实符文拥有独特的效果，其中一些只有在更高等级的符文中才会出现。
        现实符文也可以被献祭来增加所有记忆块产出。与 Effarig 符文一样，
        你不能同时装备超过一个。
      </div>
      <div
        class="o-available-effects-container"
        data-v-reality-glyph-creation-modal
      >
        <div
          class="o-available-effects"
          data-v-reality-glyph-creation-modal
        >
          可用效果：
        </div>
        <div
          v-for="(effect, index) in possibleEffects"
          :key="index"
        >
          {{ formatGlyphEffect(effect) }}
        </div>
      </div>
      <PrimaryButton
        v-if="isDoomed"
        :enabled="false"
      >
        在末日中你无法创造现实符文
      </PrimaryButton>
      <PrimaryButton
        v-else-if="realityGlyphLevel !== 0"
        @click="createRealityGlyph"
      >
        创造现实符文！
      </PrimaryButton>
      <PrimaryButton
        v-else
        :enabled="false"
      >
        现实符文等级必须高于 {{ formatInt(0) }}
      </PrimaryButton>
    </div>
  </ModalWrapper>
  `
};
