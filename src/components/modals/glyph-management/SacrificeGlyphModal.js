import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "SacrificeGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentGlyphSacrifice: 0,
      gain: 0,
      confirmedSacrifice: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
    glyphTypeName() {
      const names = {
        power: "Power",
        infinity: "Infinity",
        time: "Time",
        replication: "Replication",
        dilation: "Dilation",
        effarig: "Effarig",
        reality: "Reality",
        cursed: "Cursed",
        companion: "Companion",
        music: "Music",
        blob: "Blob"
      };
      return names[this.glyph.type] || this.glyph.type;
    },
    message() {
      return `你真的想要献祭这个符文吗？你的${this.glyphTypeName}
      符文献祭总数值将从 ${format(this.currentGlyphSacrifice, 2, 2)} 增加到
      ${format(this.currentGlyphSacrifice + this.gain, 2, 2)}。`;
    }
  },
  methods: {
    update() {
      this.currentGlyphSacrifice = player.reality.glyphs.sac[this.glyph.type];
      this.gain = GlyphSacrificeHandler.glyphSacrificeGain(this.glyph);

      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedSacrifice) {

        // ConfirmedSacrifice is here because when you sac a glyph with confirmation it
        // Displays this modal message even though the glyph was sacced successfully.
        // I have no idea how the eventHub thing works or if moving the UI update before
        // the sac will break things so this is the best I could do. - Scar

        this.emitClose();
        Modal.message.show("选中的符文改变了位置或被其他方式更改！");
      }
    },
    handleYesClick() {
      this.confirmedSacrifice = true;
      GlyphSacrificeHandler.sacrificeGlyph(this.glyph, true);
    },
  },
  template: `
  <ModalWrapperChoice
    option="glyphSacrifice"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将献祭一个符文
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
  `
};
