export default {
  name: "AutomatorDocsIntroPage",
  template: `
  <div>
    欢迎使用反物质维度自动机！
    <br>
    <br>
    此页面是介绍页，概括性地展示了自动机的所有功能。
    各种功能的具体细节可以在如何游玩或相应标签页（如相关）中找到。
    <br>
    <br>
    <b>脚本语言：</b>自动机使用自定义脚本语言为你执行某些游戏操作。点击
    <div
      class="fas fa-list c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 可以打开可用命令列表。你也可以在
    <div
      class="fas fa-book c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 页面将各种值定义为常量的简写名称。
    <br>
    <br>
    <b>布局：</b>自动机本身分为两半；左半部分包含你的脚本以及开始、停止和重复执行的控制，
    右半部分包含自动机信息。点击
    <div
      class="fas fa-expand-arrows-alt c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 右上角的按钮会将自动机展开到整个浏览器页面，以便更轻松地编辑。
    <br>
    <br>
    <b>编辑器模式：</b>有两种不同的编辑器可以用来编写自动机脚本：积木式
    编辑器（默认）和文本式编辑器。你可以通过左半部分右上角的开关在两种编辑器类型之间切换。
    注意：有错误的脚本可能无法在两种模式之间正确转换，
    这可能导致部分脚本被删除。
    <br>
    <br>
    <b>创建脚本：</b>你可以通过第二行按钮中的下拉菜单在多个脚本之间切换或创建新脚本。
    当前脚本可以使用
    <div
      class="fas fa-edit c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> and
    <div
      class="fas fa-trash c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 按钮重命名或删除。自动机总会至少包含
    一个可供编辑的脚本；删除最后一个脚本时会自动创建一个新的空白脚本。
    <br>
    <br>
    <b>编写脚本：</b>在积木编辑器中，通过进入积木标签页
    <div
      class="fas fa-cubes c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 来编写脚本，而在文本编辑器中则是直接在左半部分的文本框中输入。
    在任一编辑器模式下，你还可以使用模板生成器中的一些小型预制脚本
    <div
      class="fas fa-file-code c-automator-button-icon"
      data-v-automator-docs-intro-page
    />。你可以使用
    <div
      class="fas fa-arrow-rotate-left c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> or
    <div
      class="fas fa-arrow-rotate-right c-automator-button-icon"
      data-v-automator-docs-intro-page
     /> 或相应的快捷键撤销或重做有限数量的编辑。切换、转换或删除脚本时，
    编辑历史会被清除。
    <br>
    <br>
    <b>调试：</b>修复脚本的两个主要工具是错误日志
    <div
      class="fas fa-exclamation-triangle c-automator-button-icon"
      data-v-automator-docs-intro-page
    />（用于脚本完全无法运行的情况）和事件日志
    <div
      class="fas fa-eye c-automator-button-icon"
      data-v-automator-docs-intro-page
    />（用于脚本运行但与预期不符的情况）。
    <br>
    <br>
    <b>导入/导出：</b>自动机脚本可以通过
    <div
      class="fas fa-file-export c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 和
    <div
      class="fas fa-file-import c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 按钮以文本格式导出和导入。如有需要，你还可以访问额外的
    扩展导出选项
    <div
      class="fas fa-window-restore c-automator-button-icon"
      data-v-automator-docs-intro-page
    /> 
    。
    <br>
    <br>
    <b>脚本保存：</b>并非在所有情况下，脚本更改都会立即保存到你的计算机；
    更多细节请查看自动机相关的如何游玩条目。此外，自动机面板上方还有两个用于减少卡顿的字符限制。
  </div>
  `
};
