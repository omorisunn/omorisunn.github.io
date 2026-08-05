import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "ReplaceGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    targetSlot: {
      type: Number,
      required: true
    },
    inventoryIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      target: 0,
      idx: 0,
      isDoomed: false,
    };
  },
  computed: {
    resetTerm() { return this.isDoomed ? "末日审判" : "现实"; },
  },
  methods: {
    update() {
      this.target = this.targetSlot;
      this.idx = this.inventoryIndex;
      this.glyph = Glyphs.findByInventoryIndex(this.idx);
      this.isDoomed = Pelle.isDoomed;
    },
    handleYesClick() {
      Glyphs.swapIntoActive(this.glyph, this.targetSlot);
    },
  },
  template: `
  <ModalWrapperChoice
    option="glyphReplace"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将替换一个符文
    </template>
    替换符文将重新开始本次{{ resetTerm }}。
  </ModalWrapperChoice>
  `
};
