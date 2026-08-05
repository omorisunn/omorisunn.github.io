import ModalWrapper from "./ModalWrapper.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "ModifySeedModal",
  components: {
    ModalWrapper,
    PrimaryButton,
  },
  data() {
    return {
      mode: 0,
      inputSeed: "",
      seedText: "",
      convertedInput: false,
      seedValue: 0,
    };
  },
  computed: {
    choiceEnum: () => SPEEDRUN_SEED_STATE,
    officialSeed: () => Speedrun.officialFixedSeed,
  },
  created() {
    this.seedValue = player.speedrun.initialSeed;
    this.inputSeed = `${player.speedrun.initialSeed}`;
    this.convertedInput = false;
  },
  methods: {
    update() {
      this.mode = player.speedrun.seedSelection;
      this.seedText = Speedrun.seedModeText();
    },
    handleSeedInput() {
      if (this.inputSeed.match(/^-?\d+$/gu)) {
        const num = Number(this.inputSeed);
        this.seedValue = Math.abs(num) > 9e15
          ? this.hashStringToSeed(this.inputSeed)
          : Number(this.inputSeed);
      } else {
        this.seedValue = this.hashStringToSeed(this.inputSeed);
      }
      this.convertedInput = this.seedValue !== Number(this.inputSeed);

      if (this.seedValue === 0) this.setMode(this.choiceEnum.FIXED);
      else this.setMode(this.choiceEnum.PLAYER, this.seedValue);
    },
    setMode(mode, seed) {
      if (mode === this.choiceEnum.PLAYER && this.seedValue === 0) return;
      Speedrun.modifySeed(mode, parseInt(seed, 10));
    },
    buttonClass(mode) {
      return {
        "o-primary-btn--subtab-option": true,
        "o-selected": mode === this.mode,
      };
    },
    // String-to-number hashing function, using a fixed numerical seed inspired by Number.MAX_VALUE
    // See https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    hashStringToSeed(str) {
      const seed = 17977308;
      let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
      for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
  },
  template: `
  <ModalWrapper>
    <template #header>
      修改符文随机种子
    </template>
    <div>
      整个游玩过程中，第一次现实之后的所有符文选项，都会在最开始时根据初始种子数值随机决定。
      这个种子的作用是为你的一次游玩选择一套非常特定的符文选项。如果你或任何其他人在
      不同的一次游玩中选择了相同的种子，你将获得相同的符文选项。
      <br>
      <br>
      在生成第一个符文之前的任何时刻，你都可以在这三种选项之间切换。
      <br>
      当前设置：<b>{{ seedText }}</b>
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.FIXED)"
        @click="setMode(choiceEnum.FIXED)"
        data-v-modify-seed-modal
      >
        官方预设种子
      </PrimaryButton>
      <br>
      这是默认选项，会选择种子 <b>{{ officialSeed }}</b>。任何完全不修改种子的人
      都会获得这些符文选项。
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.RANDOM)"
        @click="setMode(choiceEnum.RANDOM)"
        data-v-modify-seed-modal
      >
        随机种子
      </PrimaryButton>
      <br>
      这会选择一个完全随机的种子数值，产生的符文选项很可能与其他人的游玩过程不同，
      除非他们刻意选择相同的数值。
      <br>
      <br>
      <PrimaryButton
        v-tooltip="seedValue === 0 ? '输入的种子不能为零！' : ''"
        :class="buttonClass(choiceEnum.PLAYER)"
        @click="setMode(choiceEnum.PLAYER, seedValue)"
        data-v-modify-seed-modal
      >
        玩家选择的种子：
      </PrimaryButton>
      <input
        ref="inputSeed"
        v-model="inputSeed"
        type="text"
        class="c-modal-input"
        @input="handleSeedInput()"
      >
      <br>
      此选项会将你的种子设置为你在文本框中输入的内容。
      <br>
      <span v-if="seedValue !== 0">
        你当前输入的内容将被{{ convertedInput ? "转换为" : "用作" }}数字 <b>{{ seedValue }}</b>。
      </span>
      <span v-else>
        你当前输入的内容{{ convertedInput ? "会被转换为" : "等于" }} <b>0</b>；
        种子将默认使用官方预设。
      </span>
      <br>
      出于技术原因，此数值必须非零才能被接受。
    </div>
  </ModalWrapper>
  `
};
