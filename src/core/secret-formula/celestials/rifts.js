import { DC } from "../../constants.js";
import wordShift from "../../word-shift.js";

export const pelleRifts = {
  vacuum: {
    id: 1,
    key: "vacuum",
    name: ["Vacuum", "Hollow", "Void"],
    drainResource: "IP",
    baseEffect: x => `IP gain ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.vacuum.milestones[2]],
    strike: () => PelleStrikes.infinity,
    percentage: totalFill => Math.log10(totalFill.plus(1).log10() * 10 + 1) ** 2.5 / 100,
    percentageToFill: percentage => Decimal.pow(10,
      Decimal.pow(10, (percentage * 100) ** (1 / 2.5)).div(10).minus(0.1)
    ).minus(1),
    effect: totalFill => {
      if (player.challenge.eternity.current !== 0) {
        const chall = EternityChallenge.current;
        const goal = chall.goalAtCompletions(chall.gainedCompletionStatus.totalCompletions);
        return totalFill.plus(1).pow(0.1).min(goal.pow(0.15));
      }
      return totalFill.plus(1).pow(0.33);
    },
    currency: () => Currency.infinityPoints,
    galaxyGeneratorThreshold: 1000,
    milestones: [
      {
        resource: "vacuum",
        requirement: 0.04,
        description: "你可以装备一个等级和稀有度降低的基础符文"
      },
      {
        resource: "vacuum",
        requirement: 0.06,
        description: () => `Uncap Replicanti and make its unlock and upgrades ${formatX(1e130)} cheaper`,
        effect: () => 1e130
      },
      {
        resource: "vacuum",
        requirement: 0.4,
        description: () => `${wordShift.wordCycle(PelleRifts.vacuum.name)} also affects EP gain`,
        effect: () => Decimal.pow(4, PelleRifts.vacuum.totalFill.log10() / 2 / 308 + 3),
        formatEffect: x => `EP gain ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "没有足够空间容纳更多，你必须填满$value"
  },
  decay: {
    id: 2,
    key: "decay",
    name: ["Decay", "Collapse", "Disarray"],
    drainResource: "Replicanti",
    spendable: true,
    baseEffect: x => `Replicanti speed ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.decay.milestones[0], PelleRifts.decay.milestones[2]],
    strike: () => PelleStrikes.powerGalaxies,
    // 0 - 1
    percentage: totalFill => totalFill.plus(1).log10() * 0.05 / 100,
    // 0 - 1
    percentageToFill: percentage => Decimal.pow(10, 20 * percentage * 100).minus(1),
    effect: totalFill => (PelleRifts.chaos.milestones[0].canBeApplied
      ? Decimal.sqrt(2000 + 1) : Decimal.sqrt(totalFill.plus(1).log10() + 1)),
    currency: () => Currency.replicanti,
    galaxyGeneratorThreshold: 1e7,
    milestones: [
      {
        resource: "decay",
        requirement: 0.2,
        description: "第一个可重复购买的 Pelle 升级也影响第 1 无限维度",
        effect: () => {
          const x = player.celestials.pelle.rebuyables.antimatterDimensionMult;
          return Decimal.pow(1e50, x - 9);
        },
        formatEffect: x => `1st Infinity Dimension ${formatX(x, 2, 2)}`
      },
      {
        resource: "decay",
        requirement: 0.6,
        description: () => `When Replicanti exceeds ${format(DC.E1300)},
          all Galaxies are ${formatPercents(0.1)} more effective`,
        effect: () => (Replicanti.amount.gt(DC.E1300) ? 1.1 : 1)
      },
      {
        resource: "decay",
        requirement: 1,
        description: "根据裂隙里程碑总数提高最大 Replicanti 星系数量",
        effect: () => {
          const x = PelleRifts.totalMilestones();
          return x ** 2 - 2 * x;
        },
        formatEffect: x => `Max RG count +${formatInt(x)}`
      },
    ],
    galaxyGeneratorText: "没有足够的反物质形成新星系，你需要逆转$value"
  },
  chaos: {
    id: 3,
    key: "chaos",
    name: ["Chaos", "Disorder", "Impurity"],
    drainResource: ["Decay", "Collapse", "Disarray"],
    baseEffect: x => `Time Dimensions ${formatX(x, 2, 2)}`,
    strike: () => PelleStrikes.eternity,
    percentage: totalFill => totalFill / 10,
    percentageToFill: percentage => 10 * percentage,
    effect: totalFill => {
      const fill = totalFill > 6.5
        ? (totalFill - 6.5) / 7 + 6.5
        : totalFill;
      return Decimal.pow(6, Decimal.pow(6, Decimal.pow(6, fill / 10 + 0.1)).minus(6))
        .div(1e5)
        .plus(Decimal.pow(10, fill / 10 + 0.1));
    },
    currency: () => ({
      get value() {
        return PelleRifts.decay.percentage;
      },
      set value(val) {
        const spent = PelleRifts.decay.percentage - val;
        player.celestials.pelle.rifts.decay.percentageSpent += spent;
      }
    }),
    galaxyGeneratorThreshold: 1e9,
    milestones: [
      {
        resource: "chaos",
        requirement: 0.09,
        description: () => `${wordShift.wordCycle(PelleRifts.decay.name)} \
        effect is always maxed and milestones always active`
      },
      {
        resource: "chaos",
        requirement: 0.15,
        description: "符文获得新的 Pelle 专属效果",
      },
      {
        resource: "chaos",
        requirement: 1,
        description: () => `You gain ${formatPercents(0.01)} of your EP gained on Eternity per second`,
      },
    ],
    galaxyGeneratorText: "你的星系过于碎片化，你必须稳定$value"
  },
  recursion: {
    id: 4,
    key: "recursion",
    name: ["Recursion", "Dispersion", "Destruction"],
    drainResource: "EP",
    baseEffect: x => `EP formula: log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(308 - x.toNumber(), 2)}`,
    additionalEffects: () => [PelleRifts.recursion.milestones[0], PelleRifts.recursion.milestones[1]],
    strike: () => PelleStrikes.ECs,
    percentage: totalFill => totalFill.plus(1).log10() ** 0.4 / 4000 ** 0.4,
    percentageToFill: percentage => Decimal.pow(10, percentage ** 2.5 * 4000).minus(1),
    effect: totalFill => new Decimal(58 * totalFill.plus(1).log10() ** 0.2 / 4000 ** 0.2),
    currency: () => Currency.eternityPoints,
    galaxyGeneratorThreshold: 1e10,
    milestones: [
      {
        resource: "recursion",
        requirement: 0.10,
        description: "维度提升根据永恒挑战完成次数更强大",
        effect: () => Math.max(100 * EternityChallenges.completions ** 2, 1) *
          Math.max(1e4 ** (EternityChallenges.completions - 40), 1),
        formatEffect: x => `Dimension Boost power ${formatX(x, 2, 2)}`
      },
      {
        resource: "recursion",
        requirement: 0.15,
        description: "无限维度根据永恒挑战完成次数更强",
        effect: () => Decimal.pow("1e1500", ((EternityChallenges.completions - 25) / 20) ** 1.7).max(1),
        formatEffect: x => `Infinity Dimensions ${formatX(x)}`
      },
      {
        resource: "recursion",
        requirement: 1,
        description: "永久解锁星系生成器",
      },
    ],
    galaxyGeneratorText: "创造更多星系不可持续，你必须聚焦$value以允许更多"
  },
  paradox: {
    id: 5,
    key: "paradox",
    name: ["Paradox", "Contradiction", "Fallacy"],
    drainResource: "Dilated Time",
    baseEffect: x => `All Dimensions ${formatPow(x, 2, 3)}`,
    additionalEffects: () => [PelleRifts.paradox.milestones[2]],
    strike: () => PelleStrikes.dilation,
    percentage: totalFill => totalFill.plus(1).log10() / 100,
    percentageToFill: percentage => Decimal.pow10(percentage * 100).minus(1),
    effect: totalFill => new Decimal(1 + totalFill.plus(1).log10() * 0.004),
    currency: () => Currency.dilatedTime,
    galaxyGeneratorThreshold: 1e5,
    milestones: [
      {
        resource: "paradox",
        requirement: 0.15,
        description: "时间维度 5-8 便宜得多，解锁更多膨胀升级",
        // FIXME: Not a great solution
        onStateChange: () => {
          updateTimeDimensionCosts();
        }
      },
      {
        resource: "paradox",
        requirement: 0.25,
        description: () => `Dilated Time gain becomes Tachyon Particles ${formatPow(1.4, 1, 1)}`,
        effect: 1.4
      },
      {
        resource: "paradox",
        requirement: 0.5,
        description: "膨胀可重复购买次数提高无限力量转化率",
        effect: () => Math.min(
          1.1075 ** (Object.values(player.dilation.rebuyables).sum() - 60),
          712
        ),
        formatEffect: x => `Infinity Power Conversion ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "本应可以创造更多，但 Pelle 限制了你。无视$value"
  }
};
