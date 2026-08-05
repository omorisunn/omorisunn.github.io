import ModalWrapper from "./ModalWrapper.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "EnslavedHintsModal",
  components: {
    ModalWrapper,
    PrimaryButton
  },
  data() {
    return {
      currentStored: 0,
      nextHintCost: 0,
      canGetHint: false,
      shownEntries: [],
      realityHintsLeft: 0,
      glyphHintsLeft: 0,
      hints: 0,
    };
  },
  computed: {
    hintCost() {
      return `${quantify("年", TimeSpan.fromMilliseconds(this.nextHintCost).totalYears, 2)}`;
    },
    formattedStored() {
      return `${quantify("年", TimeSpan.fromMilliseconds(this.currentStored).totalYears, 2)}`;
    },
    hasProgress(id) {
      return this.progressEntries.some(entry => entry.id === id);
    },
    // Note: This calculation seems to behave extremely poorly if the goal has been raised more than 12 hints worth
    // of cost bumps and I'm not entirely sure why. There's probably a numerical issue I can't quite figure out, but
    // considering that much cost raising can't happen in practice I think I'm just going to leave it be.
    timeEstimate() {
      if (this.currentStored >= this.nextHintCost) return "";

      // Relevant values are stored as milliseconds, so multiply the rate by 1000 to get to seconds
      const storeRate = 1000 * (Enslaved.isStoringGameTime
        ? Enslaved.currentBlackHoleStoreAmountPerMs
        : getGameSpeedupFactor());
      const alreadyWaited = this.currentStored / storeRate;
      const decaylessTime = this.nextHintCost / storeRate;

      // Check if decay is irrelevant and don't do the hard calculations if so
      const minCostEstimate = (TimeSpan.fromYears(1e40).totalMilliseconds - this.currentStored) / storeRate;
      if (TimeSpan.fromSeconds(minCostEstimate).totalDays > this.hints) {
        return `${TimeSpan.fromSeconds(minCostEstimate).toStringShort(true)}`;
      }

      // Decay is 3x per day, but the math needs decay per second
      const K = Math.pow(3, 1 / 86400);
      const x = decaylessTime * Math.log(K) * Math.pow(K, alreadyWaited);
      const timeToGoal = productLog(x) / Math.log(K) - alreadyWaited;
      return `${TimeSpan.fromSeconds(timeToGoal).toStringShort(true)}`;
    }
  },
  methods: {
    update() {
      this.currentStored = player.celestials.enslaved.stored;
      this.nextHintCost = Enslaved.nextHintCost;
      this.canGetHint = this.currentStored >= this.nextHintCost;
      this.shownEntries = [];

      this.realityHintsLeft = EnslavedProgress.all.length;
      for (const prog of EnslavedProgress.all) {
        if (prog.hasHint) {
          this.shownEntries.push([false, prog]);
          this.realityHintsLeft--;
        }
      }

      const glyphHintCount = player.celestials.enslaved.glyphHintsGiven;
      for (let hintNum = 0; hintNum < glyphHintCount; hintNum++) {
        this.shownEntries.push([true, GameDatabase.celestials.enslaved.glyphHints[hintNum]]);
      }
      this.glyphHintsLeft = GameDatabase.celestials.enslaved.glyphHints.length - glyphHintCount;

      this.hints = Enslaved.hintCostIncreases;
    },
    giveRealityHint(available) {
      if (available <= 0 || !Enslaved.spendTimeForHint()) return;
      EnslavedProgress.all.filter(prog => !prog.hasHint).randomElement().unlock();
    },
    giveGlyphHint(available) {
      if (available <= 0 || !Enslaved.spendTimeForHint()) return;
      player.celestials.enslaved.glyphHintsGiven++;
    }
  },
  template: `
  <ModalWrapper>
    <template #header>
      The Nameless Ones 现实中的裂缝
    </template>
    <div class="c-enslaved-hint-modal c-modal--short">
      <div>
        这个现实似乎正在抵抗你完成它的努力。到目前为止，你已经完成了以下内容：
      </div>
      <br>
      <div
        v-for="(entry, index) in shownEntries"
        :key="index"
      >
        <div v-if="!entry[0]">
          <span v-if="entry[1].hasHint && !entry[1].hasProgress">
            <i
              class="c-icon-wrapper fas fa-question-circle"
              data-v-enslaved-hints-modal
            />
            <b>你还不知道这条提示意味着什么。</b>
          </span>
          <span v-else>
            <i
              class="c-icon-wrapper fa-solid fa-house-crack"
              data-v-enslaved-hints-modal
            />
            <b>你已经在现实中暴露了一条裂缝：</b>
          </span>
          <br>
          · {{ entry[1].hintInfo }}
          <br>
          · {{ entry[1].hasProgress ? entry[1].completedInfo : "？？？？？" }}
        </div>
        <div v-else>
          <i class="fa-solid fa-shapes" /> <b>符文提示：</b>
          <br>
          {{ entry[1] }}
        </div>
        <br>
      </div>
      <div v-if="realityHintsLeft + glyphHintsLeft > 0">
        你可以花费一些时间寻找现实中的更多裂缝，但你每为一条提示花费存储时间，下一条提示所需的存储时间
        就会变为 {{ formatInt(3) }} 倍。这一价格提升会在 {{ formatInt(24) }} 小时内逐渐消失，而弄明白提示的含义
        会立即将价格除以 {{ formatInt(2) }}。价格不能降低到 {{ format(1e40) }} 年以下。
        <br><br>
        下一条提示将花费 {{ hintCost }} 的存储时间。你目前拥有 {{ formattedStored }}。
        <span v-if="currentStored < nextHintCost">
          如果你为黑洞充能 {{ timeEstimate }}，就能达到这个数值。
        </span>
        <br><br>
        <PrimaryButton
          :enabled="realityHintsLeft > 0 && canGetHint"
          class="l-enslaved-hint-button"
          @click="giveRealityHint(realityHintsLeft)"
          data-v-enslaved-hints-modal
        >
          获取关于现实本身的提示（剩余 {{ formatInt(realityHintsLeft) }} 条）
        </PrimaryButton>
        <br>
        <PrimaryButton
          :enabled="glyphHintsLeft > 0 && canGetHint"
          class="l-enslaved-hint-button"
          @click="giveGlyphHint(glyphHintsLeft)"
          data-v-enslaved-hints-modal
        >
          获取关于使用哪些符文的提示（剩余 {{ formatInt(glyphHintsLeft) }} 条）
        </PrimaryButton>
      </div>
      <div v-else>
        <b>已经没有更多提示了！</b>
      </div>
    </div>
  </ModalWrapper>
  `
};
