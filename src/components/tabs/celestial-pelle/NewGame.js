export default {
  name: "NewGame",
  data() {
    return {
      opacity: 0,
      visible: false,
      hasMoreCosmetics: false,
      selectedSetName: "",
    };
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
        visibility: this.visible ? "visible" : "hidden",
      };
    }
  },
  methods: {
    update() {
      this.visible = GameEnd.endState > END_STATE_MARKERS.SHOW_NEW_GAME && !GameEnd.removeAdditionalEnd;
      this.opacity = (GameEnd.endState - END_STATE_MARKERS.SHOW_NEW_GAME) * 2;
      this.hasMoreCosmetics = GlyphAppearanceHandler.lockedSets.length > 0;
      this.selectedSetName = GlyphAppearanceHandler.chosenFromModal?.name ?? "无（将随机选择）";
    },
    startNewGame() {
      NG.startNewGame();
    },
    openSelectionModal() {
      Modal.cosmeticSetChoice.show();
    }
  },
  template: `
  <div
    class="c-new-game-container"
    :style="style"
    data-v-new-game
  >
    <h2>
      重置整个游戏，但保留自动机脚本、时间研究预设、秘密主题、秘密成就、选项
      和 Companion Glyph。
    </h2>
    <h3>你可以使用右上角的按钮查看游戏当前的状态。</h3>
    <div
      class="c-new-game-button-container"
      data-v-new-game
    >
      <button
        class="c-new-game-button"
        @click="startNewGame"
        data-v-new-game
      >
        重新开始？
      </button>
    </div>
    <br>
    <h3 v-if="hasMoreCosmetics">
      通关游戏后，你还会解锁一套自选的符文外观套装。这些外观在再次达到现实后
      可以自由修改，但纯粹是视觉上的，不提供任何游戏加成。
      <br>
      <button
        class="c-new-game-button"
        @click="openSelectionModal"
        data-v-new-game
      >
        选择外观套装
      </button>
      <br>
      <br>
      已选择套装：{{ selectedSetName }}
    </h3>
    <h3 v-else>
      你已经解锁了所有符文外观套装！
    </h3>
    <br>
    <h3>
      你也可以导入 "speedrun" 来重新开始游戏，并获得用于速通的额外跟踪功能。
    </h3>
  </div>
  `
};
