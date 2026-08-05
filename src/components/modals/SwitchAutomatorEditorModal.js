import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "SwitchAutomatorEditorModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    callback: {
      type: Function,
      required: false,
      default: () => ({})
    },
    lostBlocks: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  data() {
    return {
      errorCount: 0,
      isCurrentlyBlocks: false
    };
  },
  computed: {
    currentScriptID: {
      get() {
        return this.$viewModel.tabs.reality.automator.editorScriptID;
      },
      set(value) {
        this.$viewModel.tabs.reality.automator.editorScriptID = value;
      }
    },
    otherMode() {
      return this.isCurrentlyBlocks ? "文本" : "积木";
    }
  },
  methods: {
    update() {
      this.errorCount = AutomatorData.currentErrors().length;
      this.isCurrentlyBlocks = player.reality.automator.type === AUTOMATOR_TYPE.BLOCK;
    },
    toggleAutomatorMode() {
      AutomatorBackend.changeModes(this.currentScriptID);
      this.callback?.();
    }
  },
  template: `
  <ModalWrapperChoice
    option="switchAutomatorMode"
    @confirm="toggleAutomatorMode"
  >
    <template #header>
      将自动机切换到{{ otherMode }}编辑器
    </template>
    <div class="c-modal-message__text">
      如果你的当前脚本正在运行，这将会停止它！
      <div v-if="errorCount">
        <br>
        你的脚本存在一些错误，可能无法正确转换为{{ otherMode }}模式。继续操作将
        让自动机尝试解析这些行，但部分信息可能会丢失或无法正确
        转换。
      </div>
      <!-- Note: this can only ever appear on text-to-block -->
      <b v-if="lostBlocks">
        <br>
        警告：你的脚本目前还有一些无法解释为特定命令的行。这些
        行最终会被删除，因为它们无法转换为任何积木。
        如果错误发生在循环或 IF 的开头，这可能会导致脚本的大部分内容被删除！
        <span
          class="l-lost-text"
          data-v-switch-automator-editor-modal
        >
          现在切换编辑器模式将导致 {{ quantifyInt("行代码", lostBlocks) }} 被不可逆地
          丢失！
        </span>
      </b>
      <br>
      <span
        class="l-lost-text"
        data-v-switch-automator-editor-modal
      >
        不建议隐藏此确认提示，因为如果你的脚本在尝试切换模式时存在错误，
        可能会导致部分脚本立即且不可逆地丢失。
      </span>
      <br>
      <br>
      你确定要切换到{{ otherMode }}编辑器吗？
    </div>
    <template #confirm-text>
      切换模式
    </template>
  </ModalWrapperChoice>
  `
};
