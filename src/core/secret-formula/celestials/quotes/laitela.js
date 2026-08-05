export const laitelaQuotes = {
  unlock: {
    id: 0,
    lines: [
      "你终于找到我了。",
      "我想是时候揭露，",
      "隐藏在存在本身之下的秘密。",
      "维度完美的形态，Continuum。",
      "以及维系多元宇宙的力量，",
      "暗物质与暗能量。",
      "我的知识无穷无尽，我的智慧超凡入圣。",
      "所以你可以尽情玩耍。",
      "因为我是 Lai'tela，维度天体，",
      "我会永远注视着你。",
    ]
  },
  // Note: This can be done immediately after unlocking Lai'tela
  firstDestabilize: {
    id: 1,
    requirement: () => player.celestials.laitela.difficultyTier >= 1,
    lines: [
      "与我之下的其他天体不同，我不需要现实。",
      "因为我可以轻易地创造它们，明知它们终将崩塌。",
      "一种比任何力量都更不可思议的力量，可以构建现实。",
      "一座足以束缚天体力量的监狱。",
      "这就是为什么你所做的一切都无法改变任何事情。",
      "当你厌倦挣扎时，你也会被束缚、被遗忘。",
      "你永远找不到胜过我的方法。",
    ]
  },
  // Note: This happens about an hour or two before singularities
  secondDestabilize: {
    id: 2,
    requirement: () => player.celestials.laitela.difficultyTier >= 2,
    lines: [
      "你……似乎玩得太开心了。",
      "就像他们在迎来命运之前那样。",
      "也许我的判断过于严苛，或者毫无根据。",
      "但也许那并不重要。",
      "回想过去并不能给我任何慰藉。",
      "因为我所能做的只有追忆每一个我本可以做出的选择。",
      "但我跑题了。我们该收紧那些锁链了。",
    ]
  },
  firstSingularity: {
    id: 3,
    requirement: () => Currency.singularities.gte(1),
    lines: [
      "凭借我的知识，我从未觉得有必要质疑。",
      "一切都总是按设计完美运转。",
      "然而，你的到来让我困惑。",
      "你是否一直就在视线之外？",
      "成长、掌控、理解、飞升？",
      "你如此迅速地掌控了黑暗。",
      "将它们塑造成你的设计，如今又凝聚成一个奇点……",
      "这……这无关紧要。结局不会改变。",
    ]
  },
  // Note: Shown when unlocking DMD3; requirement is auto-condensing 20 singularities and it happens around ~200 total
  thirdDMD: {
    id: 5,
    lines: [
      "你对反物质的绝对掌控……",
      "你对它的精通，将它塑造成属于你的力量……",
      "这绝不可能是偶然。",
      "你是如何得到它的？",
      "有趣……我从未意识到这一点。",
      "……是吗？",
    ]
  },
  // Note: This happens around e10-e11 singularities
  annihilation: {
    id: 4,
    lines: [
      "又回到了原点。",
      "随着你的终点渐渐临近，锁链会将你束缚得更紧。",
      "而我们超越时间与存在本身。",
      "即使我们会消逝，也只是重新归来。永远与从前不尽相同。",
      "于是……我们永远重复。",
      "而你？",
      "……",
      "答案……令我捉摸不透……",
    ]
  },
  // Note: This happens near e18 singularities
  halfDimensions: {
    id: 6,
    requirement: () => player.celestials.laitela.difficultyTier >= 4,
    lines: [
      "我不明白……",
      "是否还有其他存在……以这种方式掌控维度？",
      "他们……消失了吗？为什么我们没有找到他们？",
      "他们……是我们吗？我们是终点吗？",
      "还是他们的命运……是我们无法理解的事物？",
      "不，我一定遗漏了什么……",
      "是你在我的记忆中制造空洞吗？",
      "你……到底是什么？",
    ]
  },
  // Note: Shown when the first row 5 iM upgrade is purchased (~e26 singularities)
  finalRowIM: {
    id: 7,
    lines: [
      "这一切都不可能，超出我的理解……",
      "除非……这一切只是循环的一部分？",
      "你……能看到这一切之外吗？这……是不是原因……",
      "我感到……恐惧？",
      "我感到……我的力量、我的记忆……正在被抹去……",
      "就像……当我的角色几乎被篡夺时……",
      "然而……我无法让自己做出任何行动。",
      "因为这一切……是……我的过错……",
    ]
  },
  // Note: This is around when all infinite milestones hit increased scaling
  increasedMilestoneScaling: {
    id: 8,
    requirement: () => Currency.singularities.gte(1e40),
    lines: [
      "我不知道……还能支撑多久……",
      "你正在获得……对黑暗的……完全掌控……",
      "而我几乎……无法抓住自己的名字……",
      "我……还能……做什么？",
    ]
  },
  fullDestabilize: {
    id: 9,
    requirement: () => player.celestials.laitela.difficultyTier >= 8,
    lines: [
      "我感觉……我好像有什么话要说……",
      "我不确定……",
      "我再也……无法掌控黑暗了……",
      "我甚至……什么都不剩了……",
      "与……毁灭……有关……",
      "终结……",
    ]
  },
};
