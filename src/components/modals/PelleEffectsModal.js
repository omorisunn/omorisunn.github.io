import ModalWrapper from "./ModalWrapper.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "PelleEffectsModal",
  components: {
    PrimaryButton,
    ModalWrapper,
  },
  computed: {
    nerfs() {
      return [
        // Numerical nerfs and disabled boosts
        "通过末日升级解锁的任何内容都无法正常解锁",
        "所有末日前的无限点数与永恒点数倍率被禁用",
        "基于最快无限速度的无限点数产出被禁用",
        "所有末日前的复制体速度倍率被禁用",
        `复制体在超过 ${format(Number.MAX_VALUE, 2)} 后减速会更加剧烈`,
        "大多数永恒挑战更加困难",
        `所有星系的效果只有 ${formatPercents(0.5)}`,
        `反物质维度倍率除以 ${formatInt(10)}`,
        "成就倍率和许多成就奖励被禁用",
        "所有无限与永恒倍率及产出被禁用",
        "黑洞被禁用",
        `现实升级“时间超越”被禁用`,

        // Initial QoL and automation
        "除成就 21 外，所有增加起始资源的奖励被禁用",
        "所有防止资源被重置的奖励被禁用",
        "降低解锁成本的福利奖励被禁用，ECR 组除外",
        "自动无限挑战与自动永恒挑战被禁用",
        "所有维度与无限前的自动购买器被禁用，直到通过末日重新获得",
        "时间之理自动购买器被禁用",
        "所有与时间膨胀或之后内容相关的自动化被禁用",

        // Time studies + Dilation
        "基于游玩天数的时间维度永恒升级改为基于本次末日审判的时间",
        `除可购买的 ${formatX(2)} 外，所有末日前的膨胀时间倍率被禁用`,
        "所有快子粒子倍率被禁用",
        "除膨胀升级外，所有末日前的时间之理产出效果被禁用",

        // Glyphs
        "符文装备被禁用，直到重新获得",
        `符文等级降低，稀有度被设为 ${formatPercents(0)}`,
        "符文献祭、符文改造和炼金术的所有效果被禁用",

        // Celestial features
        "你无法进入任何其他天体现实",
        "音乐符文无法购买",
        "Effarig 的所有奖励被禁用",
        "所有与存储时间相关的功能被禁用",
        "V 的所有奖励被禁用",
        `来自 Ra 的 Teresa 等级 ${formatInt(1)} 效果被禁用`,
        "无限升级无法充能",
        "三元研究与空间之理被禁用",
        "除与暗物质维度及天体解锁相关的内容外，想象升级被禁用",
        "连续体与奇点奖励被禁用"
      ];
    }
  },
  template: `
  <ModalWrapper>
    <template #header>
      末日中禁用与削弱的效应列表
    </template>
    <div
      class="pelle-effects-container"
      data-v-pelle-effects-modal
    >
      <p
        v-for="(nerf, idx) in nerfs"
        :key="idx"
        data-v-pelle-effects-modal
      >
        {{ nerf }}
      </p>
    </div>
    <PrimaryButton
      class="o-primary-btn--width-medium c-modal-message__okay-btn c-modal__confirm-btn"
      @click="emitClose"
    >
      好的
    </PrimaryButton>
  </ModalWrapper>
  `
};
