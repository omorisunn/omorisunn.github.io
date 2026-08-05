import AutomatorDataTransferSingleEntry from "./AutomatorDataTransferSingleEntry.js";

export default {
  name: "AutomatorDataTransferPage",
  components: {
    AutomatorDataTransferSingleEntry,
  },
  data() {
    return {
      scripts: 0,
    };
  },
  computed: {
    maxScriptCount: () => AutomatorData.MAX_ALLOWED_SCRIPT_COUNT,
  },
  created() {
    this.loadScripts();
    this.on$(GAME_EVENT.AUTOMATOR_SAVE_CHANGED, () => {
      this.loadScripts();
    });
  },
  methods: {
    loadScripts() {
      this.scripts = Object.values(player.reality.automator.scripts).map(script => ({
        id: script.id,
        name: script.name,
      }));
    },
  },
  template: `
  <div
    class="l-panel-padding"
    data-v-automator-data-transfer-page
  >
    此页面允许你导入和导出带有附加数据的脚本；编码文本还会包含
    脚本中使用的任何时间研究预设或常量的数据。这可以让你更容易地在不同的存档之间
    转移可用的脚本，但由于时间研究预设和常量的空间有限，过程中可能需要覆盖现有数据。
    从此页面导出的数据也会以与单个脚本数据相同的方式导入。
    <br>
    <br>
    注意：注释中提到的任何常量名称或完整的研究购买命令也会被视为脚本中
    “使用”的内容。这是有意为之，因为注释被认为可以反映脚本本身对预设或常量的使用意图。
    <br>
    <br>
    <div
      v-for="(script, id) in scripts"
      :key="id"
    >
      <AutomatorDataTransferSingleEntry
        class="l-entry-margin"
        :script="script"
        data-v-automator-data-transfer-page
      />
    </div>
  </div>
  `
};
