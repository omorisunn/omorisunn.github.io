import Loading from "../../../../modules/vue-loading.js";

import Payments from "../../../core/payments.js";

import { STEAM } from "../../../env.js";
import { SteamRuntime } from "../../../steam/index.js";

import PrimaryButton from "../../PrimaryButton.js";
import ShopButton from "./ShopButton.js";

export default {
  name: "ShopTab",
  components: {
    ShopButton,
    Loading,
    PrimaryButton,
  },
  data() {
    return {
      availableSTD: 0,
      spentSTD: 0,
      isLoading: false,
      IAPsEnabled: false,
      creditsClosed: false,
      loggedIn: false,
      username: "",
      canRespec: false,
      respecTimeStr: "",
    };
  },
  computed: {
    STEAM() {
      return STEAM;
    },
    purchases() {
      return ShopPurchase.all;
    },
    enableText() {
      return `内购：${this.IAPsEnabled ? "已启用" : "已禁用"}`;
    },
    respecText() {
      if (!this.loggedIn) return "未登录！";
      if (!this.canRespec) return "无法重置！(购买 STD 硬币或等待距上次重置 3 天)";
      return null;
    },
    hiddenName() {
      return player.options.hideGoogleName;
    }
  },
  methods: {
    update() {
      this.availableSTD = ShopPurchaseData.availableSTD;
      this.spentSTD = ShopPurchaseData.spentSTD;
      this.isLoading = Boolean(player.IAP.checkoutSession.id);
      this.IAPsEnabled = player.IAP.enabled;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.loggedIn = Cloud.loggedIn;
      this.username = Cloud.user?.displayName;
      this.canRespec = ShopPurchaseData.canRespec;
      if (!ShopPurchaseData.respecAvailable && !this.canRespec) {
        this.respecTimeStr = ShopPurchaseData.timeUntilRespec.toStringShort();
      }
    },
    showStore() {
      if (STEAM && !SteamRuntime.isActive) return;
      if (this.creditsClosed) return;
      SecretAchievement(33).unlock();
      if (this.loggedIn) Modal.shop.show();
      else Modal.message.show("你必须先登录才能购买 STD 硬币。");
    },
    onCancel() {
      Payments.cancelPurchase(false);
    },
    respec() {
      if (this.creditsClosed || !this.loggedIn || !this.canRespec) return;
      ShopPurchaseData.respecRequest();
    },
    toggleEnable() {
      if (ShopPurchaseData.availableSTD < 0) return;
      player.IAP.enabled = !player.IAP.enabled;
      if (ShopPurchaseData.isIAPEnabled) Speedrun.setSTDUse(true);
    },
    respecClass() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-pelle-disabled-pointer": this.creditsClosed,
        "o-primary-btn--disabled": !this.loggedIn || !this.canRespec
      };
    }
  },
  template: `
  <div
    class="tab shop"
    data-v-shop-tab
  >
    <div
      class="c-shop-disclaimer"
      data-v-shop-tab
    >
      声明：这些并不是游戏进度的必需品，它们只是用于支持开发者。
      游戏在不使用任何微交易的情况下也是平衡的。
    </div>
    <div>
      注意：由于法律原因，在 Android、Steam 和网页版本中进行的商店购买
      是相互独立且不可转移的。
    </div>
    <div
      class="c-subtab-option-container"
      data-v-shop-tab
    >
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        label="禁用内购："
        @click="toggleEnable()"
        data-v-shop-tab
      >
        {{ enableText }}
      </PrimaryButton>
      <PrimaryButton
        v-if="!STEAM"
        v-tooltip="respecText"
        :class="respecClass()"
        @click="respec()"
        data-v-shop-tab
      >
        重置商店
      </PrimaryButton>
    </div>
    <div v-if="loggedIn && !canRespec && !STEAM">
      距离可重置时间：{{ respecTimeStr }}
    </div>
    <div
      v-if="loggedIn"
      class="c-login-info"
      data-v-shop-tab
    >
      <template v-if="STEAM">
        你已以 {{ username }} 登录。
      </template>
      <template v-else>
        <span v-if="hiddenName">你已登录。<i>（名称已隐藏）</i></span>
        <span v-else>你已以 {{ username }} 登录。</span>
        <button
          class="o-shop-button-button"
          onclick="GameOptions.logout()"
          data-v-shop-tab
        >
          断开 Google 账户
        </button>
      </template>
    </div>
    <div
      v-else
      class="c-login-info"
      data-v-shop-tab
    >
      你必须登录才能购买 STD 硬币或使用这些升级。
      <button
        class="o-shop-button-button"
        onclick="GameOptions.login()"
        data-v-shop-tab
      >
        使用 Google 登录
      </button>
    </div>
    <div
      class="c-shop-header"
      data-v-shop-tab
    >
      <span>你有 {{ availableSTD }}</span>
      <img
        src="./public/images/std_coin.png"
        class="c-shop-header__img"
        data-v-shop-tab
      >
      <button
        class="o-shop-button-button"
        :class="{ 'o-shop-button-button--disabled': !loggedIn }"
        @click="showStore()"
        data-v-shop-tab
      >
        购买更多
      </button>
    </div>
    注意：此页面上的所有数字都不会受你的计数法设置影响
    <div
      class="l-shop-buttons-container"
      data-v-shop-tab
    >
      <ShopButton
        v-for="purchase in purchases"
        :key="purchase.key"
        :purchase="purchase"
        data-v-shop-tab
      />
    </div>
    <loading
      :active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
      data-v-shop-tab
    />
  </div>
  `
};
