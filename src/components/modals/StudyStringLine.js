export default {
  name: "StudyStringLine",
  props: {
    tree: {
      type: Object,
      required: true,
    },
    intoEmpty: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    importDestString() {
      return this.intoEmpty ? "到空的研究树中" : "与当前研究树合并";
    }
  },
  methods: {
    formatTheoremCost(tt, st) {
      const strTT = `${formatWithCommas(tt)} 时间之理`;
      const strST = `${formatWithCommas(st)} 空间之理`;
      return st === 0 ? strTT : `${strTT} + ${strST}`;
    }
  },
  template: `
  <div class="l-modal-import-tree__tree-info-line">
    <div v-if="tree.timeTheorems === 0 && tree.spaceTheorems === 0">
      <i>将此导入{{ importDestString }}不会购买任何新的时间研究。</i>
    </div>
    <div v-else>
      导入{{ importDestString }}将购买：
      <br>
      {{ tree.newStudies }}
      （价格：{{ formatTheoremCost(tree.timeTheorems, tree.spaceTheorems) }}）
    </div>
    <br>
  </div>
  `
};
