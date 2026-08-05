import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "PurgeGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    harsh: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    threshold() {
      return this.harsh ? 1 : 5;
    },
    extraMessage() {
      if (this.glyphsDeleted === 0) return `这次清除不会删除任何符文。`;
      if (this.glyphsDeleted === this.glyphsTotal) return `这次清除会删除你的所有符文。`;
      return `${this.harsh ? `严厉清除` : `清除`}将删除
        ${formatInt(this.glyphsDeleted)}/${formatInt(this.glyphsTotal)}
      个符文。`;
    },
    explanation() {
      if (this.harsh) return `严厉清除会删除比你背包中任何其他符文都严格更差的符文。
        例如，如果一个符文与另一个符文拥有完全相同的效果，但所有效果的数值
        都更差，那么它将被删除。`;
      return `清除会删除严格差于其他符文的符文，同时保留足够装备
        一套相同效果的符文。这类似于严厉清除，但普通清除只有在找到五个
        更好的符文时才会删除某个符文（而不是只找一个）。`;
    },
    topLabel() {
      return `你即将${this.harsh ? `严厉清除` : `清除`}你的符文`;
    },

    // These two don't need to be reactive since the modal force-closes itself whenever glyphs change
    glyphsTotal() {
      return Glyphs.inventory.filter(slot => slot !== null).length;
    },
    glyphsDeleted() {
      return Glyphs.autoClean(this.threshold, false);
    },
  },
  methods: {
    handleYesClick() {
      Glyphs.autoClean(this.threshold, true);
    },
  },
  template: `
  <ModalWrapperChoice
    option="autoClean"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      这可能会删除你背包中足够好、以后可能想使用的符文。
      清除将根据你的清除模式删除符文。你确定要这样做吗？
      <br>
      <br>
      {{ explanation }}
    </div>
    <br>
    <div class="c-modal-hard-reset-danger">
      {{ extraMessage }}
    </div>
  </ModalWrapperChoice>
  `
};
