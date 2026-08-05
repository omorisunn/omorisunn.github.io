import EnterCelestialsRaPet from "./EnterCelestialsRaPet.js";
import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "EnterCelestialsModal",
  components: {
    ModalWrapperChoice,
    EnterCelestialsRaPet,
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      laitelaFastest: 3600,
      teresaBestAM: new Decimal(),
      teresaRunMult: 0,
      effarigDone: false,
      effarigLayer: "",
      enslavedDone: false,
      laitelaTime: "",
    };
  },
  computed: {
    effects() {
      return GameDatabase.celestials.descriptions[this.number].effects().split("\n");
    },
    description() {
      const description = GameDatabase.celestials.descriptions[this.number].description;
      return description ? description() : "";
    },
    topLabel() {
      return `${this.name} 的现实`;
    },
    message() {
      return `执行一次现实重置并进入${this.name}的现实，其中：`;
    },
    extraLine() {
      switch (this.number) {
        case 0:
          return this.teresaBestAM.eq(1)
            ? `你还没有解锁 Teresa 的现实的奖励。解锁奖励需要
              购买现实研究并首次完成现实。`
            : `你在 Teresa 的现实中最高完成了 ${format(this.teresaBestAM, 2, 2)} 反物质，
              为你提供了 ${formatX(this.teresaRunMult, 2)} 的符文献祭力量倍率。`;
        case 1: return this.effarigDone
          ? "Effarig 已完成！"
          : `你当前处于第 ${this.effarigLayer} 层。`;
        case 2: return this.enslavedDone
          ? "我们……还没有……帮够吗……"
          : "我们……可以帮忙……让我们……帮忙……";
        case 3: return "";
        case 4: return `在 Ra 的现实中，一些资源会根据其数量生成
          用于天体记忆的记忆块：`;
        case 5: return this.laitelaFastest >= 300
          ? "你尚未在此层级完成 Lai'tela。"
          : `你在此层级的最快完成时间为 ${this.laitelaTime}。`;
        case 6: return "";
        default: throw new Error(`Attempted to start an Unknown Celestial in Celestial Modal Confirmation.`);
      }
    }
  },
  methods: {
    update() {
      this.teresaBestAM.copyFrom(player.celestials.teresa.bestRunAM);
      this.teresaRunMult = Teresa.runRewardMultiplier;
      const effarigStage = Effarig.currentStage;
      this.effarigDone = effarigStage === EFFARIG_STAGES.COMPLETED;
      this.effarigLayer = [null, "无限", "永恒", "现实"][effarigStage];
      this.enslavedDone = Enslaved.isCompleted;
      this.laitelaFastest = player.celestials.laitela.fastestCompletion;
      this.laitelaTime = TimeSpan.fromSeconds(this.laitelaFastest).toStringShort();
    },
    handleYesClick() {
      beginProcessReality(getRealityProps(true));
      switch (this.number) {
        case 0: return Teresa.initializeRun();
        case 1: return Effarig.initializeRun();
        case 2: return Enslaved.initializeRun();
        case 3: return V.initializeRun();
        case 4: return Ra.initializeRun();
        case 5: return Laitela.initializeRun();
        case 6: throw new Error(`Attempted to start Pelle through EnterCelestialsModal instead of ArmageddonModal`);
        default: throw new Error(`Attempted to start an Unknown Celestial in Celestial Modal Confirmation.`);
      }
    },
  },
  template: `
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      {{ topLabel }}
    </template>
    <div
      class="c-modal-message__text"
      data-v-enter-celestials-modal
    >
      {{ message }}
      <br>
      <br>
      <div
        class="c-modal-celestial__run-effects"
        data-v-enter-celestials-modal
      >
        <div
          v-for="(effect, i) in effects"
          :key="i"
          class="c-modal-celestial__run-effects__line"
          data-v-enter-celestials-modal
        >
          <b v-if="effect.trim()">&bull;</b>
          <b>&nbsp;</b>
          {{ effect }}
        </div>
      </div>
      <div
        v-if="description"
        class="reality-description"
        data-v-enter-celestials-modal
      >
        <br><br>
        {{ description }}
      </div>
      <br><br>
      <div>
        {{ extraLine }}
      </div>
      <span v-if="number === 4">
        <EnterCelestialsRaPet
          v-for="id in 4"
          :key="id"
          :pet-id="id - 1"
        />
      </span>
    </div>
    <template #confirm-text>
      Begin
    </template>
  </ModalWrapperChoice>
  `
};
