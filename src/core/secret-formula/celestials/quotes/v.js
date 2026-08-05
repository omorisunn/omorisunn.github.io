export const vQuotes = {
  initial: {
    id: 0,
    lines: [
      "多么可悲……"
    ],
  },
  unlock: {
    id: 1,
    lines: [
      "欢迎来到我的现实。",
      "我很惊讶你居然能到达这里。",
      "这里毕竟是我的领域……",
      "不是每个人都像我一样伟大。",
    ],
  },
  realityEnter: {
    id: 2,
    lines: [
      "祝你好运！",
      "你会需要的。",
      "我的现实完美无瑕。你会失败的。",
    ],
  },
  realityComplete: {
    id: 3,
    lines: [
      "这么快……",
      "别太看得起自己。",
      "这只是开始。",
      "你永远不会比我更强。",
    ],
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    lines: [
      "只有一个？可悲。",
      "与我的成就相比，你的成就不值一提。",
    ],
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    lines: [
      "这不算什么。",
      "别这么自满。",
    ],
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    lines: [
      "别以为从现在起会变得更容易。",
      "为这么小的成就就骄傲成这样。",
    ],
  },
  achievement12: {
    id: 7,
    requirement: () => V.spaceTheorems >= 12,
    lines: [
      "你是怎么做到的……",
      "这简直微不足道！",
      "你永远无法全部完成。",
    ],
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    lines: [
      "不可能……",
      "在我当年历经千辛万苦之后……",
    ],
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    lines: [
      "不……不……不……",
      "这不可能……",
    ],
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    lines: [
      "我……你是怎么做到的……",
      "我如此努力才得到它们……",
      "我是最伟大的……",
      "没有人比我更强……",
      "没有人……没有人……没有……",
    ],
  }
};
