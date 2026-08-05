export default {
  name: "AutomatorErrorPage",
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    update() {
      this.errors = AutomatorData.currentErrors();
    },
    scrollToLine(line) {
      AutomatorScroller.scrollToLine(line);
      AutomatorHighlighter.updateHighlightedLine(line, LineEnum.Error);
    }
  },
  template: `
  <div class="c-automator-docs-page">
    <div v-if="errors.length === 0">
      未发现脚本错误！
    </div>
    <div v-else>
      <b>你的脚本有以下 {{ quantify("个错误", errors.length) }}：</b>
      <br>
      <span
        v-for="(error, i) in errors"
        :key="i"
      >
        <b>在第 {{ error.startLine }} 行：</b>
        <button
          v-tooltip="'跳转到该行'"
          class="c-automator-docs--button fas fa-arrow-circle-right"
          @click="scrollToLine(error.startLine)"
        />
        <div class="c-automator-docs-page__indented">
          {{ error.info }}
        </div>
        <div class="c-automator-docs-page__indented">
          <i>建议修复：{{ error.tip }}</i>
        </div>
      </span>
      <i>
        注意：有时错误会导致自动机无法正确扫描脚本的其余部分。
        这可能导致一些错误由于前面行中的其他错误而“消失”，或者
        带有内部块的命令（例如 IF 或 WHILE）中的错误导致
        格式正确的后续命令也显示错误。
        此外，由于错误原因不明确，部分建议修复可能会产生误导。
      </i>
    </div>
  </div>
  `
};
