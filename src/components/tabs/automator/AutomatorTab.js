import SplitPane from "../../../../modules/vue-split-pane.js";

import AutomatorDocs from "./AutomatorDocs.js";
import AutomatorEditor from "./AutomatorEditor.js";
import AutomatorPointsList from "./AutomatorPointsList.js";

export default {
  name: "AutomatorTab",
  components: {
    SplitPane,
    AutomatorEditor,
    AutomatorPointsList,
    AutomatorDocs
  },
  data() {
    return {
      automatorUnlocked: false,
      interval: 0,
      currentChars: 0,
      totalChars: 0,
      withinLimit: false,
    };
  },
  computed: {
    fullScreen() {
      return this.$viewModel.tabs.reality.automator.fullScreen;
    },
    tabClass() {
      if (!this.fullScreen) return undefined;
      return "c-automator-tab--full-screen";
    },
    fullScreenIconClass() {
      return this.fullScreen ? "fa-compress-arrows-alt" : "fa-expand-arrows-alt";
    },
    intervalText() {
      const speedupText = `每次现实都会使其运行速度提升 ${formatPercents(0.006, 1)}，最高可达
        每秒 ${formatInt(1000)} 条。`;
      return this.interval === 1
        ? `自动机正以最高速度运行（每真实秒 ${formatInt(1000)} 条命令）。`
        : `自动机每真实秒运行 ${quantify("条命令", 1000 / this.interval, 2, 2)}。
          ${speedupText}`;
    },
    maxScriptChars() {
      return AutomatorData.MAX_ALLOWED_SCRIPT_CHARACTERS;
    },
    maxTotalChars() {
      return AutomatorData.MAX_ALLOWED_TOTAL_CHARACTERS;
    },
  },
  methods: {
    update() {
      this.automatorUnlocked = Player.automatorUnlocked;
      this.interval = AutomatorBackend.currentInterval;
      this.currentChars = AutomatorData.singleScriptCharacters();
      this.totalChars = AutomatorData.totalScriptCharacters();
      this.withinLimit = AutomatorData.isWithinLimit();
    }
  },
  template: `
  <div
    :class="tabClass"
    class="c-automator-tab l-automator-tab"
    data-v-automator-tab
  >
    <div v-if="automatorUnlocked">
      <div>
        {{ intervalText }}
      </div>
      <span
        :class="{ 'c-overlimit': currentChars > maxScriptChars }"
        data-v-automator-tab
      >
        当前脚本：{{ formatInt(currentChars) }} / {{ formatInt(maxScriptChars) }}
      </span>
      |
      <span
        :class="{ 'c-overlimit': totalChars > maxTotalChars }"
        data-v-automator-tab
      >
        全部脚本：{{ formatInt(totalChars) }} / {{ formatInt(maxTotalChars) }}
      </span>
      <br>
      <span
        v-if="!withinLimit"
        class="c-overlimit"
        data-v-automator-tab
      >
        （由于超出字符限制，你的更改将不会被保存！）
      </span>
      <div
        class="c-automator-split-pane"
        data-v-automator-tab
      >
        <SplitPane
          :min-percent="44"
          :default-percent="50"
          split="vertical"
          data-v-automator-tab
        >
          <template #paneL>
            <AutomatorEditor />
          </template>
          <template #paneR>
            <AutomatorDocs />
          </template>
        </SplitPane>
      </div>
    </div>
    <AutomatorPointsList v-else />
  </div>
  `
};
