import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "RespecIAPModal",
  components: {
    ModalWrapperChoice
  },
  methods: {
    returnedSTDCount() {
      let std = 0;
      for (const purchase of ShopPurchase.all) {
        if (purchase.config.instantPurchase) continue;
        std += purchase.purchases * purchase.cost;
      }
      return std;
    },
    handleYesClick() {
      ShopPurchaseData.respecAll();
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ModalWrapperChoice
    option="respecIAP"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将重置你的商店购买
    </template>
    <div
      class="c-modal-message__text"
      data-v-respec-iap-modal
    >
      你确定要重置你的商店购买吗？这不需要任何费用，并会返还你在所有提供永久倍率的购买中花费的 {{ returnedSTDCount() }}
      <img
        src="./public/images/std_coin.png"
        class="o-shop-button-button__img"
        data-v-respec-iap-modal
      >
      <br>
      <br>
      花费在离线进度和符文外观上的硬币将不会退还。符文外观套装是永久的，
      一旦购买就不会丢失或被重置。
      <br>
      <br>
      <b
        class="o-warning"
        data-v-respec-iap-modal
       >除非你购买更多 STD 硬币，否则你将无法再次重置。</b>
    </div>
  </ModalWrapperChoice>
  `
};
