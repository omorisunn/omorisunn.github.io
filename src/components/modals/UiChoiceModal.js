import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "UiChoiceModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    listEntries() {
      return [
        `现在有更多游戏事件拥有动画。如果这些动画影响你的性能或游戏体验，可以在
        视觉选项页中关闭。`,
        `新的确认窗口已取代默认的 JavaScript 弹窗。这些可以在
        游戏玩法选项页中关闭。`,
        "游戏现在也有了一个采用更现代设计理念打造的新布局。"
      ];
    }
  },
  methods: {
    handleYesClick() {
      GameOptions.toggleUI();
    },
  },
  template: `
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      视觉变化
    </template>
    <div class="c-modal-message__text">
      我们注意到你加载了一个旧存档；与游戏的旧版本相比，有一些视觉变化：
      <br>
      <br>
      <div
        class="c-visual-change-list"
        data-v-ui-choice-modal
      >
        <div
          v-for="(entry, i) in listEntries"
          :key="i"
          class="c-visual-change-list-entry"
          data-v-ui-choice-modal
        >
          <b>&bull;</b>
          {{ entry }}
        </div>
      </div>
      <br>
      <br>
      你可以在任何时候通过视觉选项页在旧版本游戏使用的经典界面和较新的现代界面之间切换。
      你想现在切换到现代界面吗？
    </div>
    <template #cancel-text>
      保持不变
    </template>
    <template #confirm-text>
      切换
    </template>
  </ModalWrapperChoice>
  `
};
