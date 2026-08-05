import ModalWrapperChoice from "./ModalWrapperChoice.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "SpeedrunModeModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
  },
  data() {
    return {
      onInfoPage: true,
      name: "",
      confirmPhrase: "",
    };
  },
  computed: {
    willStartRun() {
      return this.confirmPhrase === "Gotta Go Fast!";
    },
  },
  methods: {
    nextPage() {
      this.onInfoPage = false;
    },
    startRun() {
      if (!this.willStartRun) return;
      this.emitClose();
      Speedrun.prepareSave(Speedrun.generateName(this.name));
    },
  },
  template: `
  <ModalWrapperChoice
    :show-cancel="!onInfoPage && !willStartRun"
    :show-confirm="!onInfoPage && willStartRun"
    confirm-class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
    @confirm="startRun"
  >
    <template #header>
      进入速通模式
    </template>
    <div
      v-if="onInfoPage"
      class="c-modal-message__text"
    >
      这将开始一个带有额外统计跟踪的存档，用于记录你到达游戏特定节点的时间。
      这些统计会显示在屏幕右下角以及统计页的专用子标签中。
      <br>
      <br>
      默认情况下几乎所有动画和确认提示都会被禁用，但你可以在达到相应进度之前更改这些设置。
      当你开始速通时，游戏会保持暂停，直到你的反物质发生变化，这样你可以在开始前配置好所有设置。
      为了避免在开始优化好的速通前等待过久，部分成就会直接免费获得。
      <br>
      <br>
      <i>
        速通模式没有额外内容。
      </i>
      <br>
      <br>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
        @click="nextPage"
      >
        继续
      </PrimaryButton>
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      你可以在下方输入文字为速通存档命名。这对游戏玩法没有任何影响，只是用来标识这个存档属于你。
      如果没有输入名称，则会生成一个随机名称。只要计时器尚未开始，你就可以点击速通信息框中的名称来修改它。
      <input
        ref="name"
        v-model="name"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
      <br>
      <br>
      速通存档可以像普通存档一样导入和导出。导入速通存档会将其标记为分段速通，
      因为导入和导出可以对游戏的不同分段进行优化。没有导入过的存档将保持为单段速通。
      <br>
      <br>
      如有需要，你可以在开始速通之前在选项页修改符文随机种子。
      <br>
      <br>
      <div class="c-modal-hard-reset-danger">
        开始速通会将你的存档重置到游戏开头。部分内容会保留，例如完整通关统计、视觉设置、
        自动机脚本和符文外观，但除此之外，就像是刚刚通关整个游戏并在制作人员界面选择了重新开始。
        请在下方输入 "Gotta Go Fast!" 以确认并（重新）开始速通。
      </div>
      <input
        ref="confirmPhrase"
        v-model="confirmPhrase"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
    </div>
    <template #confirm>
      开始速通！
    </template>
    <template #cancel>
      取消
    </template>
  </ModalWrapperChoice>
  `
};
