export default {
  name: "GlyphSortButtonGroup",
  data() {
    return {
      showScoreFilter: false,
    };
  },
  methods: {
    update() {
      this.showScoreFilter = EffarigUnlock.glyphFilter.isUnlocked;
    },
    sortByLevel() {
      Glyphs.sortByLevel();
    },
    sortByPower() {
      Glyphs.sortByPower();
    },
    sortByScore() {
      Glyphs.sortByScore();
    },
    sortByEffect() {
      Glyphs.sortByEffect();
    },
    collapseEmpty() {
      Glyphs.collapseEmptySlots();
    }
  },
  template: `
  <div class="o-glyph-inventory-management-group">
    <div class="l-glyph-sacrifice-options__header">
      排序符文：
    </div>
    <button
      class="c-glyph-inventory-option"
      @click="sortByLevel"
    >
      按等级排序
      <div class="c-glyph-inventory-option__tooltip">
        按符文等级降序排列
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="sortByPower"
    >
      按力量排序
      <div class="c-glyph-inventory-option__tooltip">
        按等级×稀有度降序排列
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="sortByEffect"
    >
      按效果排序
      <div class="c-glyph-inventory-option__tooltip">
        根据效果将符文分组
      </div>
    </button>
    <button
      v-if="showScoreFilter"
      class="c-glyph-inventory-option"
      @click="sortByScore"
    >
      按分数排序
      <div class="c-glyph-inventory-option__tooltip">
        按符文筛选分数降序排列
      </div>
    </button>
    <button
      class="c-glyph-inventory-option"
      @click="collapseEmpty"
    >
      折叠空白空间
      <div class="c-glyph-inventory-option__tooltip">
        将所有符文移动到最早的空槽位
      </div>
    </button>
  </div>
  `
};
