import GlyphCustomizationSlidingWindow
  from "./GlyphCustomizationSlidingWindow.js";

export default {
  name: "GlyphCustomizationSingleType",
  components: {
    GlyphCustomizationSlidingWindow,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    glyphId: {
      type: Number,
      required: false,
      default: -1,
    }
  },
  computed: {
    name() {
      return this.type.capitalize();
    },
    symbols() {
      return GlyphAppearanceHandler.availableSymbols;
    },
    colors() {
      return GlyphAppearanceHandler.availableColors;
    },
  },
  template: `
  <div
    class="c-glyph-customization-entry"
    data-v-glyph-customization-single-type
  >
    <span
      v-if="glyphId === -1"
      class="c-name"
      data-v-glyph-customization-single-type
    >
      {{ name }} Glyph 的外观选项
    </span>
    <div v-if="type === 'companion'">
      Companion Glyph 的符号无法修改。
    </div>
    <GlyphCustomizationSlidingWindow
      v-else
      :type="type"
      :is-symbol="true"
      :options="symbols"
      :glyph-id="glyphId"
    />
    <GlyphCustomizationSlidingWindow
      :type="type"
      :is-symbol="false"
      :options="colors"
      :glyph-id="glyphId"
    />
  </div>
  `
};
