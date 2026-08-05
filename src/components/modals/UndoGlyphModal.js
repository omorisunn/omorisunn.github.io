import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "UndoGlyphModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      showStoredGameTime: false,
    };
  },
  methods: {
    update() {
      this.showStoredGameTime = Enslaved.isUnlocked;
    },
    realityInvalidate() {
      this.emitClose();
      Modal.message.show("符文撤销只能在一次现实中撤销！",
        { closeEvent: GAME_EVENT.REALITY_RESET_AFTER });
    },
    handleYesClick() {
      this.emitClose();
      Glyphs.undo();
    },
  },
  template: `
  <ModalWrapperChoice
    option="glyphUndo"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将撤销装备一个符文
    </template>
    <div
      class="c-modal-message__text c-text-wrapper"
      data-v-undo-glyph-modal
    >
      最后装备的符文将被移除。
      现实将被重置，但部分内容会恢复到装备该符文时的状态：
      <br>
      <div
        class="c-text-wrapper"
        data-v-undo-glyph-modal
      >
        <br>· 反物质、无限点数和永恒点数
        <br>· 膨胀升级、快子粒子和膨胀时间
        <br>· 时间之理和永恒挑战完成次数
        <br>· 时间维度与现实解锁
        <br>· 当前无限/永恒/现实中的时间
        <span v-if="showStoredGameTime"><br>· 存储的游戏时间</span>
      </div>
      <br>
      请注意，如果你使某些内容的特殊要求失效（例如在不产生反物质的情况下完成现实的成就），
      即使撤销后它们也会保持失效。在这些情况下，你需要在单次现实中不使用撤销来完成条件。
    </div>
  </ModalWrapperChoice>
  `
};
