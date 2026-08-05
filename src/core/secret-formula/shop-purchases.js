import { STEAM } from "../../env.js";

// NOTE: IF ANY COSTS ARE CHANGED HERE, THEY ALSO NEED TO BE CHANGED ON THE BACKEND TOO
export const shopPurchases = {
  dimPurchases: {
    key: "dimPurchases",
    cost: 30,
    description: "使你所有反物质维度倍率翻倍。永久生效。",
    multiplier: purchases => Math.pow(2, purchases),
    formatEffect: x => `×${x > 1000 ? Notation.scientific.formatDecimal(new Decimal(x), 2) : x.toFixed(0)}`,
  },
  allDimPurchases: {
    key: "allDimPurchases",
    cost: 60,
    description: () => {
      const dims = ["Antimatter"];
      if (InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked()) dims.push("Infinity");
      if (PlayerProgress.eternityUnlocked()) dims.push("Time");
      return `使所有维度倍率翻倍（${makeEnumeration(dims)}；乘算叠加直到 32 倍）。永久生效。`;
    },
    multiplier: purchases => (purchases > 4 ? 32 + (purchases - 5) * 2 : Math.pow(2, purchases)),
    formatEffect: x => `×${x.toFixed(0)}`,
  },
  IPPurchases: {
    key: "IPPurchases",
    cost: 40,
    description: "使你所有来源的无限点数获得翻倍。（加算）",
    multiplier: purchases => (purchases === 0 ? 1 : 2 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
    lockText: "无限",
  },
  replicantiPurchases: {
    key: "replicantiPurchases",
    cost: 60,
    description: "使你的复制器获得提高 50%。（加算）",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
    lockText: "复制器",
  },
  EPPurchases: {
    key: "EPPurchases",
    cost: 50,
    description: "使你所有来源的永恒点数获得变为三倍。（加算）",
    multiplier: purchases => (purchases === 0 ? 1 : 3 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
    lockText: "永恒",
  },
  dilatedTimePurchases: {
    key: "dilatedTimePurchases",
    cost: 40,
    description: "使你的膨胀时间获得提高 50%。（加算）",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
    lockText: "膨胀",
  },
  RMPurchases: {
    key: "RMPurchases",
    cost: 60,
    description: "使你的现实机器获得提高 100%。（加算）",
    multiplier: purchases => purchases + 1,
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "现实",
  },
  smallTimeSkip: {
    key: "smallTimeSkip",
    cost: 10,
    description: "获得相当于 6 小时的离线产出。（自动购买器无法全速工作）",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseTimeSkip();
    }
  },
  bigTimeSkip: {
    key: "bigTimeSkip",
    cost: 20,
    description: "Get 24 hours worth of offline production. (Autobuyers don't work at full speed)",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseLongerTimeSkip();
    }
  },
  singleCosmeticSet: {
    key: "singleCosmeticSet",
    cost: 20,
    description: "Unlock a Glyph cosmetic set of your choice",
    instantPurchase: true,
    onPurchase: () => {
      // The actual unlocks are handled in the ShopPurchaseData object, so we just show notifications here
      GameUI.notify.info(
        `You have purchased the "${GlyphAppearanceHandler.chosenFromModal.name}" Set for Glyph cosmetics!`,
        10000);
      GlyphAppearanceHandler.chosenFromModal = null;
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "Reality",
  },
  allCosmeticSets: {
    key: "allCosmeticSets",
    cost: () => {
      // Both of these are also on the payment backend, which would need to be changed as well
      const baseCost = 420;
      const totalSets = Object.keys(GameDatabase.reality.glyphCosmeticSets).length;

      // Using this instead of the actual set count maintains consistency with the backend price,
      // at the cost of the frontend UI being wrong for cheated saves
      const currentSetCount = GlyphAppearanceHandler.expectedSetCount;
      return Math.floor(baseCost * (totalSets - currentSetCount) / totalSets);
    },
    description: "Unlock all remaining Glyph cosmetic sets at once",
    instantPurchase: true,
    onPurchase: () => {
      // The actual unlocks are handled in the ShopPurchaseData object, so we just show notifications here
      GameUI.notify.info(`You have unlocked all sets for Glyph cosmetics!`, 15000);
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "Reality",
  },
};

if (STEAM) {
  delete shopPurchases.allCosmeticSets;
}
