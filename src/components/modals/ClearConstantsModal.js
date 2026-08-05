import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "ClearConstantsModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      constantCount: 0,
    };
  },
  methods: {
    update() {
      this.constantCount = Object.keys(player.reality.automator.constants).length;
      if (this.constantCount === 0) this.emitClose();
    },
    deleteConstants() {
      player.reality.automator.constants = {};
      player.reality.automator.constantSortOrder = [];
    }
  },
  template: `
  <ModalWrapperChoice
    @confirm="deleteConstants"
  >
    <template #header>
      删除自动机常量
    </template>
    <div class="c-modal-message__text">
      你确定要删除当前定义的所有自动机常量吗？
      <br>
      <span
        class="l-lost-text"
        data-v-clear-constants-modal
      >
        This will irreversibly delete {{ quantify("constant", constantCount) }}!
      </span>
    </div>
    <template #confirm-text>
      全部删除
    </template>
  </ModalWrapperChoice>
  `
};
