export default {
  name: "AutomatorDocsTemplateList",
  data() {
    return {
      isBlock: false,
      blockTemplates: [],
      selectedTemplateID: -1,
    };
  },
  computed: {
    templates: () => GameDatabase.reality.automator.templates.scripts,
    pasteText() {
      return this.isBlock
        ? `创建一个特殊的积木，你可以将它拖放到自动机中你想要放置的位置。它会自动
          填充模板所需的所有独立积木`
        : `将模板以文本形式复制到剪贴板。你可以将模板文本直接粘贴到自动机的任何位置`;
    }
  },
  methods: {
    update() {
      this.isBlock = player.reality.automator.type === AUTOMATOR_TYPE.BLOCK;
      this.blockTemplates = AutomatorData.blockTemplates;
    },
    showModal(template) {
      Modal.automatorScriptTemplate.show(template);
    },
    unpackTemplateBlocks(event) {
      const templateBlocks = this.blockTemplates[this.selectedTemplateID].blocks;
      const beforeBlocks = BlockAutomator.lines.slice(0, event.newIndex);
      // Note that slice will also pick up the Vue observer, so we need to remove that as well
      const afterBlocks = BlockAutomator.lines.slice(event.newIndex).filter(b => b.cmd);

      // Remap IDs, in case the template gets added more than once
      const maxExistingID = Math.max(...BlockAutomator._idArray.filter(id => id));
      const minTemplateID = Math.min(...templateBlocks.map(b => b.id));
      const blocksToAdd = [];
      for (const block of templateBlocks) {
        blocksToAdd.push({
          ...block,
          id: block.id + maxExistingID - minTemplateID + 1
        });
      }
      BlockAutomator.lines = beforeBlocks;
      BlockAutomator.lines.push(...blocksToAdd);
      BlockAutomator.lines.push(...afterBlocks);
      BlockAutomator.updateIdArray();
    },
    setIndex(index) {
      this.selectedTemplateID = index;
    }
  },
  template: `
  <div>
    这些模板可以让你在自动机中完成一些更常见的操作。它们可能比
    手写脚本稍慢，但使用它们不需要你具备任何编程经验。点击任意
    按钮都会打开一个带有输入字段的窗口，从而生成一个可以放入
    自动机的模板。
    <button
      v-for="template in templates"
      :key="template.name"
      class="o-primary-btn c-automator-docs-template--button l-automator__button"
      @click="showModal(template)"
      data-v-automator-docs-template-list
    >
      模板：{{ template.name }}
    </button>
    由于你当前使用的是{{ isBlock ? "积木" : "文本" }}编辑器，此面板将{{ pasteText }}。
    <br>
    <br>
    <draggable
      v-if="isBlock"
      :key="blockTemplates.length"
      class="template-container"
      :list="blockTemplates"
      :group="{ name: 'code-blocks', pull: 'clone', put: false }"
      :sort="false"
      @end="unpackTemplateBlocks"
      data-v-automator-docs-template-list
    >
      <div
        v-for="(template, i) in blockTemplates"
        :key="i"
        class="o-automator-command o-automator-block-list draggable-blocks"
        @dragstart="setIndex(i)"
        data-v-automator-docs-template-list
      >
        {{ template.name }}
      </div>
    </draggable>
  </div>
  `
};
