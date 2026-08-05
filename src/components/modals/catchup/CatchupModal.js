import { GameProgress, ProgressChecker } from "../../../core/storage/progress-checker.js";

import CatchupGroup from "./CatchupGroup.js";
import PrimaryButton from "../../PrimaryButton.js";

export default {
  name: "CatchupModal",
  components: {
    CatchupGroup,
    PrimaryButton,
  },
  props: {
    diff: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressStage: () => ProgressChecker.getProgressStage(player).id,
    suggestedResource() {
      return GameProgress(this.progressStage).suggestedResource;
    },
    timeString() {
      // If diff is zero, that means we opened it up via the button and don't need the text for last opening
      if (!this.diff) return null;
      return `距离你上次加载游戏已经过去了 ${TimeSpan.fromMilliseconds(this.diff).toString()}。`;
    },
    titleText() {
      return this.diff ? "内容回顾" : "内容摘要";
    }
  },
  methods: {
    stageName(stage) {
      return GameProgress(stage).name;
    }
  },
  template: `
  <div class="c-modal-away-progress">
    <div class="c-modal-away-progress__header">
      {{ titleText }}
    </div>
    <div>
      {{ timeString }}
      如果你需要回顾一下，这里提供了从游戏开始到目前为止你已解锁内容的快速摘要，
      并按不同的进度阶段分类。这些只是非常简短的描述；你可以通过点击内容标题
      或 <i class="fas fa-question-circle" /> 图标查看相关的如何游玩条目，以获取更详细的信息。
    </div>
    <div
      class="l-catchup-group-container"
      :style="{ 'height' : \`\${Math.clamp(3 * progressStage + 5, 15, 35)}rem\` }"
      data-v-catchup-modal
    >
      <CatchupGroup
        v-for="group of progressStage"
        :key="group"
        :group="group"
        :name="stageName(group)"
      />
    </div>
    <span
      class="c-suggestion-text"
      data-v-catchup-modal
    >
      根据你当前的进度，尝试提升你的{{ suggestedResource }}可能会很有用。
    </span>
    <div
      class="l-confirm-padding"
      data-v-catchup-modal
    >
      <PrimaryButton
        @click="emitClose"
      >
        确认
      </PrimaryButton>
    </div>
  </div>
  `
};
