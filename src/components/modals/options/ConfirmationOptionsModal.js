import ConfirmationOptionsEntry from "./ConfirmationOptionsEntry.js";
import ModalWrapperOptions from "./ModalWrapperOptions.js";

export default {
  name: "ConfirmationOptionsModal",
  components: {
    ModalWrapperOptions,
    ConfirmationOptionsEntry,
  },
  computed: {
    count() {
      return ConfirmationTypes.index.length;
    },
    noConfirmations() {
      return ConfirmationTypes.index.every(x => !x.isUnlocked());
    }
  },
  template: `
  <ModalWrapperOptions class="c-modal-options__large">
    <template #header>
      确认选项
    </template>
    <div class="c-modal-options__button-container">
      <span v-if="noConfirmations">
        你目前没有任何需要确认的内容，
        如果有的话会显示在这里。
      </span>
      <ConfirmationOptionsEntry
        v-for="entryNumber in count"
        :key="entryNumber"
        :index="entryNumber - 1"
      />
    </div>
  </ModalWrapperOptions>
  `
};
