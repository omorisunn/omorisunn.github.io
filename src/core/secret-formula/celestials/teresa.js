export const teresa = {
  unlocks: {
    run: {
      id: 0,
      price: 1e14,
      description: "解锁 Teresa 的现实。",
      onUnlock: () => Teresa.quotes.unlockReality.show(),
    },
    epGen: {
      id: 1,
      price: 1e18,
      description: "解锁被动永恒点生成。",
      isDisabledInDoomed: true
    },
    effarig: {
      id: 3,
      price: 1e24,
      description: "解锁 Effarig，远古遗物天体。",
      onUnlock: () => Teresa.quotes.effarig.show(),
    },
    shop: {
      id: 2,
      price: 1e21,
      description: "解锁 Teresa 的福利点商店。",
    },
    undo: {
      id: 4,
      price: 1e10,
      description: "解锁装备符文的“撤销”。",
      isDisabledInDoomed: true
    },
    startEU: {
      id: 5,
      price: 1e6,
      description: "你开始现实时所有永恒升级都已解锁。",
      isDisabledInDoomed: true,
      onUnlock: () => {
        for (const id of [1, 2, 3, 4, 5, 6]) player.eternityUpgrades.add(id);
      },
    }
  }
};
