import { DC } from "../../constants.js";

export const alchemyResources = {
  // T1 resources (Non-Effarig "base" resources)
  "power": {
    id: ALCHEMY_RESOURCE.POWER,
    name: "力量",
    symbol: "Ω",
    isBaseResource: true,
    effect: amount => 1 + amount / 200000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "为反物质维度提供力量",
    formatEffect: value => `反物质维度乘数 ${formatPow(value, 4, 4)}`
  },
  "infinity": {
    id: ALCHEMY_RESOURCE.INFINITY,
    name: "无限",
    symbol: "∞",
    isBaseResource: true,
    effect: amount => 1 + amount / 200000,
    tier: 1,
    uiOrder: 2,
    unlockedAt: 3,
    description: "为无限维度提供力量",
    formatEffect: value => `无限维度乘数 ${formatPow(value, 4, 4)}`
  },
  "time": {
    id: ALCHEMY_RESOURCE.TIME,
    name: "时间",
    symbol: "Δ",
    isBaseResource: true,
    effect: amount => 1 + amount / 200000,
    tier: 1,
    uiOrder: 3,
    unlockedAt: 4,
    description: "为时间维度提供力量",
    formatEffect: value => `时间维度乘数 ${formatPow(value, 4, 4)}`
  },
  "replication": {
    id: ALCHEMY_RESOURCE.REPLICATION,
    name: "复制",
    symbol: "Ξ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 1000),
    tier: 1,
    uiOrder: 4,
    unlockedAt: 5,
    description: `提高复制速度`,
    formatEffect: value => `复制速度提升 ${formatX(value, 2, 2)}`
  },
  "dilation": {
    id: ALCHEMY_RESOURCE.DILATION,
    name: "膨胀",
    symbol: "Ψ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 2000),
    tier: 1,
    uiOrder: 5,
    unlockedAt: 6,
    description: "提高膨胀时间产量",
    formatEffect: value => `膨胀时间产量提升 ${formatX(value, 2, 2)}`
  },

  // T2 resources (combinations of pairs of T1 resources)
  "cardinality": {
    id: ALCHEMY_RESOURCE.CARDINALITY,
    name: "基数",
    symbol: "α",
    isBaseResource: false,
    effect: amount => 1 + 0.2 / (1 + amount / 20000),
    tier: 2,
    uiOrder: 3,
    unlockedAt: 8,
    description: "超过上限时减少 Replicanti 减速",
    formatEffect: value => `Replicanti 间隔增长变慢 ${formatX(1.2, 1, 1)} ➜
      ${formatX(value, 4, 4)}，每 ${format(Number.MAX_VALUE, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 8
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 7
      }
    ]
  },
  "eternity": {
    id: ALCHEMY_RESOURCE.ETERNITY,
    name: "永恒",
    symbol: "τ",
    isBaseResource: false,
    effect: amount => 1 + amount / 15000,
    tier: 2,
    uiOrder: 2,
    unlockedAt: 9,
    description: "为永恒生成提供力量",
    formatEffect: value => `永恒生成 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 4
      }
    ]
  },
  "dimensionality": {
    id: ALCHEMY_RESOURCE.DIMENSIONALITY,
    name: "维度性",
    symbol: "ρ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(5 * amount),
    tier: 2,
    uiOrder: 1,
    unlockedAt: 10,
    description: "为所有维度提供大幅乘数",
    formatEffect: value => `所有维度 ${formatX(value)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 10
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 5
      }
    ]
  },
  "inflation": {
    id: ALCHEMY_RESOURCE.INFLATION,
    name: "膨胀率",
    symbol: "λ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(6e9 - 3e5 * amount),
    tier: 2,
    uiOrder: 5,
    unlockedAt: 11,
    description: "为极大的乘数提供额外力量",
    formatEffect: value => `所有反物质维度乘数在高于 ${format(value)} 时为 ${formatPow(1.05, 2, 2)} `,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 9
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 6
      }
    ]
  },
  "alternation": {
    id: ALCHEMY_RESOURCE.ALTERNATION,
    name: "交替",
    symbol: "ω",
    isBaseResource: false,
    effect: amount => amount / 200000,
    tier: 2,
    uiOrder: 4,
    unlockedAt: 12,
    description: "根据 Replicanti 提高速子星系强度",
    formatEffect: value => `速子星系每 ${format(DC.E1E6)} 个 Replicanti 强化
      ${formatPercents(value, 2, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 5
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 10
      }
    ]
  },

  // T3 resources (Effarig and conbinations of T1/T2 with Effarig)
  "effarig": {
    id: ALCHEMY_RESOURCE.EFFARIG,
    name: "Effarig",
    symbol: "Ϙ",
    isBaseResource: true,
    effect: amount => Math.pow(10, amount / 2500),
    tier: 1,
    uiOrder: 1.5,
    unlockedAt: 7,
    description: "提高遗物碎片获取量",
    formatEffect: value => `遗物碎片获取量乘以 ${formatX(value, 2, 2)}`
  },
  "synergism": {
    id: ALCHEMY_RESOURCE.SYNERGISM,
    name: "协同",
    symbol: "π",
    isBaseResource: false,
    effect: amount => {
      const rawValue = 0.3 + 1.3 * Math.sqrt(amount / 25000);
      return Achievement(175).isUnlocked ? rawValue : Math.min(rawValue, 1);
    },
    tier: 3,
    uiOrder: 2,
    unlockedAt: 13,
    description: "提高炼金反应的产出",
    formatEffect(value) {
      return `炼金反应效率 ${formatPercents(0.3)} ➜ ${formatPercents(value, 2, 2)}
        ${(!Achievement(175).isUnlocked && value >= 1) ? "（已封顶）" : ""}`;
    },
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 14
      }
    ]
  },
  "momentum": {
    id: ALCHEMY_RESOURCE.MOMENTUM,
    name: "动量",
    symbol: "μ",
    isBaseResource: false,
    effect: amount => 1 + amount / 125000,
    tier: 3,
    uiOrder: 3,
    unlockedAt: 15,
    description: "为所有维度提供随时间永久增长的力量",
    formatEffect: value => `所有维度 ${formatPow(Ra.momentumValue, 4, 4)}，在资源解锁后每个现实小时
      增加 ${format(0.005 * Achievement(175).effectOrDefault(1), 3, 3)}，
      最高为 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 4
      },
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 20
      }
    ]
  },
  "decoherence": {
    id: ALCHEMY_RESOURCE.DECOHERENCE,
    name: "退相干",
    symbol: "ξ",
    isBaseResource: false,
    effect: amount => 0.15 * Math.sqrt(amount / 25000),
    tier: 3,
    uiOrder: 4,
    unlockedAt: 14,
    description: "精炼时给予所有基础炼金资源",
    formatEffect: value => `精炼的符文还会将自身价值的 ${formatPercents(value, 2)} ` +
      "给予所有其他基础资源",
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 8
      }
    ]
  },

  // T4 resources (resources which feed directly into the final resource)
  "exponential": {
    id: ALCHEMY_RESOURCE.EXPONENTIAL,
    name: "指数",
    symbol: "Γ",
    isBaseResource: false,
    effect: amount => 10 * Math.pow(amount / 10000, 2),
    tier: 4,
    uiOrder: 2,
    unlockedAt: 18,
    description: "根据 Replicanti 倍增无限点",
    formatEffect: value => `无限点乘以 Replicanti${formatPow(value, 2, 3)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 3
      }
    ]
  },
  "force": {
    id: ALCHEMY_RESOURCE.FORCE,
    name: "力",
    symbol: "Φ",
    isBaseResource: false,
    effect: amount => 5 * amount,
    tier: 4,
    uiOrder: 2,
    unlockedAt: 17,
    description: "根据现实机器倍增反物质维度",
    formatEffect: value => `反物质维度乘以现实机器${formatPow(value, 2, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.DIMENSIONALITY,
        amount: 7
      },
      {
        resource: ALCHEMY_RESOURCE.MOMENTUM,
        amount: 8
      }
    ]
  },
  "uncountability": {
    id: ALCHEMY_RESOURCE.UNCOUNTABILITY,
    name: "不可数性",
    symbol: "Θ",
    isBaseResource: false,
    effect: amount => 160 * Math.sqrt(amount / 25000),
    tier: 4,
    uiOrder: 3,
    unlockedAt: 19,
    description: "被动生成现实和福利点",
    formatEffect: value => `每秒生成 ${format(value, 2, 2)} 个现实和福利点`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 20
      },
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 6
      },
      {
        resource: ALCHEMY_RESOURCE.CARDINALITY,
        amount: 16
      }
    ]
  },
  "boundless": {
    id: ALCHEMY_RESOURCE.BOUNDLESS,
    name: "无界",
    symbol: "Π",
    isBaseResource: false,
    effect: amount => amount / 80000,
    tier: 4,
    uiOrder: 1,
    unlockedAt: 20,
    description: "让超立方体更强",
    formatEffect: value => `超立方体强度 +${formatPercents(value, 2, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ETERNITY,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      }
    ]
  },
  "multiversal": {
    id: ALCHEMY_RESOURCE.MULTIVERSAL,
    name: "多元",
    symbol: "Σ",
    isBaseResource: false,
    effect: amount => 32 * Math.pow(amount / 25000, 2),
    tier: 4,
    uiOrder: 5,
    unlockedAt: 16,
    description: "让每个现实模拟更多现实",
    formatEffect: value => `每个现实额外模拟 ${format(value, 2, 3)} 个现实，给予与放大时
      相同的奖励`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      }
    ]
  },
  "unpredictability": {
    id: ALCHEMY_RESOURCE.UNPREDICTABILITY,
    name: "不可预测性",
    symbol: "Λ",
    isBaseResource: false,
    // Somewhat ugly number to make this show 70.00% at cap
    effect: amount => amount / (10714.28 + amount),
    tier: 4,
    uiOrder: 4,
    unlockedAt: 21,
    description: "让每次炼金反应有几率发生两次",
    formatEffect: value => `任何炼金反应都有 ${formatPercents(value, 2, 2)}
      的几率再次触发`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 15
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 10
      }
    ]
  },

  // T5 (Reality)
  "reality": {
    id: ALCHEMY_RESOURCE.REALITY,
    name: "现实",
    symbol: "Ϟ",
    isBaseResource: false,
    effect: amount => Math.floor(amount),
    tier: 5,
    unlockedAt: 25,
    description: "可被消耗以创造现实符文",
    formatEffect: value => `消耗所有现实资源，创造等级 ${formatInt(value)} 的现实符文`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EXPONENTIAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.FORCE,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNCOUNTABILITY,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.BOUNDLESS,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.MULTIVERSAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNPREDICTABILITY,
        amount: 1
      }
    ]
  },
};
