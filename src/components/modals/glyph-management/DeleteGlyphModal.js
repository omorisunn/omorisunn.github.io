import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "DeleteGlyphModal",
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
      confirmedDelete: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
  },
  methods: {
    update() {
      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedDelete) {

        // Why is confirmedDelete here: refer to SacrificeGlyphModal.vue

        this.emitClose();
        Modal.message.show("选中的符文改变了位置或被其他方式更改！");
      }
    },
    handleYesClick() {
      this.confirmedDelete = true;
      Glyphs.removeFromInventory(this.glyph);
    },
  },
  template: `
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      你即将删除一个符文
    </template>
    <div class="c-modal-message__text">
      删除符文会将其从你的背包中移除！
      <div class="c-modal-hard-reset-danger">
        在解锁符文献祭之前删除符文没有任何好处！
      </div>
    </div>
  </ModalWrapperChoice>
  `
};
