export const enslaved = {
  // These entries will be unlocked in no particular order
  progress: {
    hintsUnlocked: {
      id: 0,
      hint: "The Nameless Ones 想帮忙，但帮助需要一些时间。",
      condition: () => `Spent more than ${formatInt(5)} real-time hours inside the Reality without completing it;
        time outside the Reality counts for ${formatPercents(0.4)} as much. The timer starts once the
        Reality is unlocked, but accumulates continuously.`,
    },
    ec1: {
      id: 1,
      hint: "真奇怪，自动永恒挑战福利似乎出了点问题，无法正常工作。",
      condition: () => `Gained more than ${formatInt(5)} completions of Eternity Challenge 1 at once`,
    },
    feelEternity: {
      id: 2,
      hint: "这个现实中的无限似乎比平时更破碎，但那还能修吗？",
      condition: "试图修复无限，却找到并点击了感受永恒按钮",
    },
    ec6: {
      id: 3,
      hint: `有些挑战更难，但也会以某种东西作为交换。我想知道这里有没有一个挑战只是严格优于普通的。`,
      condition: () => `完成永恒挑战 6 ${formatInt(5)} 次后再次进入，以利用其更便宜的 Replicanti 星系`,
    },
    c10: {
      id: 4,
      hint: "有没有办法不靠第 8 反物质维度获得反物质星系？",
      condition: "使用挑战 10 用第 6 反物质维度获得了多个反物质星系",
    },
    secretStudy: {
      id: 5,
      hint: "时间研究 12？那是什么？",
      condition: () => `Clicked the secret Time Study and gained an extra ${formatInt(100)} Time Theorems`,
    },
    storedTime: {
      id: 6,
      hint: "似乎如果你等得够久，这个现实的某些部分会被侵蚀掉。",
      condition: "本现实累计超过一年的游戏时间后释放",
    },
    challengeCombo: {
      id: 7,
      hint: "我能不能用一个挑战绕过另一个挑战的限制？",
      condition: "在永恒挑战 6 内时进入了挑战 10",
    },
  },
  // These get unlocked sequentially
  glyphHints: [
    "Infinity and Dilation Glyphs seem confined too tightly to be useful at all.",
    "Power and Time Glyphs are particularly strong here.",
    `Effarig Glyphs are only useful with the right effects, but you can complete the Reality without one.
      A Replication Glyph is very helpful, but it's not strictly necessary or quite as strong
      as Power and Time.`
  ]
};
