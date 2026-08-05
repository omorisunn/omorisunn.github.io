import HiddenTabGroup from "./HiddenTabGroup.js";
import ModalWrapperOptions from "../ModalWrapperOptions.js";
import PrimaryButton from "../../../PrimaryButton.js";

export default {
  name: "HiddenTabsModal",
  components: {
    HiddenTabGroup,
    ModalWrapperOptions,
    PrimaryButton,
  },
  data() {
    return {
      isEnslaved: false,
      isAlmostEnd: false,
    };
  },
  computed: {
    tabs: () => Tabs.currentUIFormat,
  },
  methods: {
    update() {
      this.isEnslaved = Enslaved.isRunning;
      this.isAlmostEnd = Pelle.hasGalaxyGenerator;
    },
    showAllTabs() {
      for (const tab of this.tabs) {
        tab.unhideTab();
        for (const subtab of tab.subtabs)
          subtab.unhideTab();
      }
    }
  },
  template: `
  <ModalWrapperOptions
    class="l-wrapper"
    data-v-hidden-tabs-modal
  >
    <template #header>
      修改可见标签页
    </template>
    <div class="c-modal--short">
      点击按钮以切换标签页的显示或隐藏。
      <br>
      部分标签页无法隐藏，你也不能隐藏当前所在的标签页。
      <br>
      取消隐藏一个所有子标签都已隐藏的标签页时，也会取消隐藏其全部子标签；
      而隐藏全部子标签时，也会隐藏该标签页。
      <br>
      <div v-if="isAlmostEnd">
        解锁星系生成器后，你将无法隐藏标签页。
      </div>
      <div v-if="isEnslaved">
        <br>
        <i>你必须……无处不在……</i>
        <br>
        （你无法在此现实中隐藏标签页）
      </div>
      <PrimaryButton
        @click="showAllTabs"
      >
        显示所有标签页
      </PrimaryButton>
      <HiddenTabGroup
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :change-enabled="!isEnslaved && !isAlmostEnd"
        class="l-hide-modal-tab-container"
      />
    </div>
  </ModalWrapperOptions>
  `
};
