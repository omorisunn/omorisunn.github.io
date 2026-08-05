import { ADNotations } from "../../../../modules/notations.js";

import ModalWrapper from "../ModalWrapper.js";
import SliderComponent from "../../SliderComponent.js";

export default {
  name: "NotationModal",
  components: {
    ModalWrapper,
    SliderComponent
  },
  data() {
    return {
      commaDigits: 0,
      notationDigits: 0,
    };
  },
  computed: {
    sampleNums() {
      const largestExponent = "123456789012345";
      const numbers = [];
      for (let digits = 4; digits < 16; digits++) numbers.push(Decimal.pow10(largestExponent.substring(0, digits)));
      return numbers;
    },
    sliderProps() {
      return {
        min: 3,
        max: 15,
        interval: 1,
        width: "100%",
        tooltip: false
      };
    },
  },
  watch: {
    commaDigits(newValue) {
      player.options.notationDigits.comma = newValue;
      ADNotations.Settings.exponentCommas.min = 10 ** newValue;
    },
    notationDigits(newValue) {
      player.options.notationDigits.notation = newValue;
      ADNotations.Settings.exponentCommas.max = 10 ** newValue;
    },
  },
  // This puts the sliders in the right spots on initialization
  created() {
    const options = player.options.notationDigits;
    this.commaDigits = options.comma;
    this.notationDigits = options.notation;
  },
  methods: {
    update() {
      const options = player.options.notationDigits;
      this.commaDigits = options.comma;
      this.notationDigits = options.notation;
    },

    // These need a bit of extra logic to ensure that the notation threshold is always >= the comma threshold
    adjustSliderComma(value) {
      this.commaDigits = value;
      player.options.notationDigits.comma = value;
      if (value > this.notationDigits) this.adjustSliderNotation(value);
    },
    adjustSliderNotation(value) {
      this.notationDigits = value;
      player.options.notationDigits.notation = value;
      if (value < this.commaDigits) this.adjustSliderComma(value);
    }
  },
  template: `
  <ModalWrapper>
    <template #header>
      指数计数法设置
    </template>
    你可以调整数字非常大时的显示方式。数值较小时，指数会
    直接显示而不进行额外格式化。较大的数值会在指数中插入逗号
    以提高可读性，而最大的数值会对指数应用计数法格式化以缩短其长度。你可以
    在下方调整这些区域之间的两个阈值：
    <br>
    <br>
    <div
      class="c-single-slider"
      data-v-notation-modal
    >
      <b
        class="o-digit-text"
        data-v-notation-modal
      >指数中逗号的最少位数：{{ formatInt(commaDigits) }} 位</b>
      <SliderComponent
        class="o-primary-btn--slider__slider o-slider"
        v-bind="sliderProps"
        :value="commaDigits"
        @input="adjustSliderComma($event)"
        data-v-notation-modal
      />
    </div>
    <div
      class="c-single-slider"
      data-v-notation-modal
    >
      <b
        class="o-digit-text"
        data-v-notation-modal
      >指数中计数法的最少位数：{{ formatInt(notationDigits) }} 位</b>
      <SliderComponent
        class="o-primary-btn--slider__slider o-slider"
        v-bind="sliderProps"
        :value="notationDigits"
        @input="adjustSliderNotation($event)"
        data-v-notation-modal
      />
    </div>
    <br>
    指数格式化的示例数字：
    <div
      class="c-sample-numbers"
      data-v-notation-modal
    >
      <span
        v-for="(num, id) in sampleNums"
        :key="id"
        class="o-single-number"
        data-v-notation-modal
      >
        {{ formatPostBreak(num) }}
      </span>
    </div>
    <br>
    注意：界面通常针对科学计数法的 {{ formatInt(5) }}
    和 {{ formatInt(9) }} 位设置进行了优化。如果你与这些值相差较大，
    部分文本可能会显得异常或溢出方框。此外，使用某些计数法时，这些设置可能不会产生任何视觉变化。
  </ModalWrapper>
  `
};
