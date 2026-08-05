import AutomatorDefineSingleEntry from "./AutomatorDefineSingleEntry.js";
import PrimaryButton from "../../PrimaryButton.js";

export default {
  name: "AutomatorDefinePage",
  components: {
    AutomatorDefineSingleEntry,
    PrimaryButton,
  },
  data() {
    return {
      constants: [],
      count: 0,
      refreshConstants: false,
    };
  },
  computed: {
    maxConstantCount() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_COUNT;
    },
    maxNameLength() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_NAME_LENGTH;
    },
    maxValueLength() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_VALUE_LENGTH;
    },
    hasConstants() {
      return this.constants.length > 1 || this.constants[0] !== "";
    }
  },
  created() {
    // This key-swaps the container for all the constants in order to force a re-render when externally changed
    this.on$(GAME_EVENT.AUTOMATOR_CONSTANT_CHANGED, () => {
      this.refreshConstants = true;
      this.$nextTick(() => this.refreshConstants = false);
    });
  },
  methods: {
    update() {
      const existingValues = player.reality.automator.constantSortOrder;
      this.count = existingValues.length;
      this.constants = this.count < this.maxConstantCount ? [...existingValues, ""] : [...existingValues];
    },
    deleteAllConstants() {
      if (this.hasConstants) Modal.clearAutomatorConstants.show();
    },
    importPresets() {
      Modal.importTSConstants.show();
    },
  },
  template: `
  <div
    class="l-panel-padding"
    data-v-automator-define-page
  >
    此面板允许你定义区分大小写的常量值，这些值可以代替数字或时间研究
    导入字符串使用。这些定义会在你的所有脚本之间共享，最多可以定义
    {{ maxConstantCount }} 个常量。此外，常量名称和值的长度分别限制为
    {{ maxNameLength }} 和 {{ maxValueLength }} 个字符。对常量所做的更改
    只有在重新启动任何当前运行的脚本后才会生效。
    <br>
    <br>
    作为使用示例，定义
    <b>first → 11,21,22,31,32,33</b>
    后，你就可以使用
    <b>studies purchase first</b>
    来购买前三行中的所有研究。
    <br>
    <br>
    <PrimaryButton
      v-tooltip="hasConstants ? null : '你没有可删除的有效常量！'"
      class="c-delete-margin o-primary-btn--subtab-option"
      :class="{ 'o-primary-btn--disabled' : !hasConstants }"
      @click="deleteAllConstants"
      data-v-automator-define-page
    >
      删除所有常量
    </PrimaryButton>
    <br>
    <br>
    <PrimaryButton
      class="c-delete-margin o-primary-btn--subtab-option"
      @click="importPresets"
      data-v-automator-define-page
    >
      导入时间研究预设
    </PrimaryButton>
    <div
      :key="count + refreshConstants"
      class="l-definition-container"
      data-v-automator-define-page
    >
      <AutomatorDefineSingleEntry
        v-for="(constant, i) in constants"
        :key="i"
        :constant="constant"
        data-v-automator-define-page
      />
    </div>
  </div>
  `
};
