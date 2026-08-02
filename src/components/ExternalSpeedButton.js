export default {
  name: "ExternalSpeedButton",
  data() {
    return {
      speed: 1,
      isMobile: false,
      showCustom: false,
      customValue: "10",
      pressTimer: null,
      suppressClick: false
    };
  },
  computed: {
    speedLabel() {
      const s = this.speed;
      return s === 1 ? "1x" : `${s}x`;
    }
  },
  methods: {
    update() {
      this.speed = player.options.externalSpeed ?? 1;
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
    cycle() {
      const speeds = [1, 2, 5, 10, 100, 1000];
      const cur = player.options.externalSpeed ?? 1;
      let idx = speeds.indexOf(cur);
      if (idx === -1) {
        // 自定义倍率时，下一个档位取大于它的最近档位；没有则回到 1x
        idx = speeds.findIndex(s => s > cur);
        if (idx === -1) idx = speeds.length - 1;
      }
      const next = speeds[(idx + 1) % speeds.length];
      this.setSpeed(next);
    },
    setSpeed(value) {
      const v = Math.clamp(parseFloat(value), 1, 1000);
      if (!isFinite(v)) return;
      player.options.externalSpeed = v;
      GameUI.notify.success(`游戏速度: ${v}x`);
    },
    // 长按（450ms）打开自定义输入
    startPress() {
      if (this.pressTimer !== null) return;
      this.suppressClick = false;
      this.pressTimer = setTimeout(() => {
        this.pressTimer = null;
        this.suppressClick = true;
        this.customValue = String(this.speed);
        this.showCustom = true;
        // 聚焦输入框,方便直接输入
        this.$nextTick(() => {
          const input = this.$el.querySelector(".c-speed-custom__input");
          if (input) input.focus();
        });
      }, 450);
    },
    cancelPress() {
      clearTimeout(this.pressTimer);
      this.pressTimer = null;
    },
    blockContextMenu(e) {
      // 阻止 iOS 长按触发系统菜单,避免打断自定义弹窗
      e.preventDefault();
    },
    handleClick() {
      if (this.suppressClick) {
        this.suppressClick = false;
        return;
      }
      this.cycle();
    },
    confirmCustom() {
      const v = parseFloat(this.customValue);
      if (!isFinite(v) || v <= 0) {
        GameUI.notify.error("请输入大于 0 的数字");
        return;
      }
      this.setSpeed(v);
      this.showCustom = false;
    },
    icon() {
      const stroke = 'stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"';
      return `<svg viewBox="0 0 24 24" ${stroke}><path d="M13 5l7 7-7 7"/><path d="M5 5l7 7-7 7"/></svg>`;
    }
  },
  template: `
  <div
    class="o-tab-btn o-speed-btn"
    data-v-external-speed-button
  >
    <div
      class="l-tab-btn-inner"
      @click="handleClick"
      @pointerdown="startPress"
      @touchstart.passive="startPress"
      @pointerup="cancelPress"
      @touchend="cancelPress"
      @pointerleave="cancelPress"
      @touchcancel="cancelPress"
      @contextmenu.prevent="blockContextMenu"
      data-v-external-speed-button
    >
      <span
        class="o-tab-btn__icon"
        v-html="icon()"
        data-v-external-speed-button
      />
      <span
        class="o-tab-btn__label"
        data-v-external-speed-button
      >
        {{ speedLabel }}
      </span>
    </div>
    <div
      v-if="showCustom"
      class="c-speed-custom"
      data-v-external-speed-button
    >
      <div class="c-speed-custom__box">
        <div class="c-speed-custom__title">自定义游戏速度</div>
        <input
          v-model="customValue"
          type="number"
          min="1"
          max="1000"
          step="1"
          class="c-speed-custom__input"
          data-v-external-speed-button
        />
        <div class="c-speed-custom__hint">倍率范围 1 ~ 1000（长按加速按钮可再次打开）</div>
        <div class="c-speed-custom__buttons">
          <button
            class="c-speed-custom__btn c-speed-custom__btn--ok"
            @click="confirmCustom"
            data-v-external-speed-button
          >
            确定
          </button>
          <button
            class="c-speed-custom__btn c-speed-custom__btn--cancel"
            @click="showCustom = false"
            data-v-external-speed-button
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
  `
};
