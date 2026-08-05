export const raQuotes = {
  unlock: {
    id: 0,
    lines: [
      "一……位访客？",
      "我在这里！我就是你正在找的那位……我想……",
      "我到底是谁来着？",
      "哦对，记忆天体。",
    ]
  },
  realityEnter: {
    id: 1,
    lines: [
      "我很久没见过其他天体了……",
      "你能帮我记起他们吗？",
      "作为交换，我可以给你力量。",
    ]
  },
  teresaStart: {
    id: 2,
    requirement: () => Ra.pets.teresa.level >= 2,
    lines: [
      "Te……re……sa……",
      "我想我记起来了。",
    ]
  },
  teresaLate: {
    id: 3,
    requirement: () => Ra.pets.teresa.level >= 15,
    lines: [
      "我记得 Teresa 与机器打交道。",
      "我记得去过 Teresa 的商店几次。",
      "等等，还有谁也有商店，对吧？",
    ]
  },
  effarigStart: {
    id: 4,
    requirement: () => Ra.pets.effarig.level >= 2,
    lines: [
      "Eff……a……rig",
      "我记得 Effarig 很友善。",
    ]
  },
  effarigLate: {
    id: 5,
    requirement: () => Ra.pets.effarig.level >= 15,
    lines: [
      "Effarig 非常讲究？",
      "我还记得一个可怕的现实……",
      "那是关于……苦难的？",
    ]
  },
  enslavedStart: {
    id: 6,
    requirement: () => Ra.pets.enslaved.level >= 2,
    lines: [
      "我无法完全记起这一位……",
    ]
  },
  enslavedLate: {
    id: 7,
    requirement: () => Ra.pets.enslaved.level >= 15,
    lines: [
      "我开始记起来了……",
      "为什么我会在这里……",
      "为什么我独自一人……",
      "帮帮我。",
    ]
  },
  vStart: {
    id: 8,
    requirement: () => Ra.pets.v.level >= 2,
    lines: [
      "我见过这一位吗？",
      "如此孤独，却又心甘情愿……",
    ]
  },
  vLate: {
    id: 9,
    requirement: () => Ra.pets.v.level >= 15,
    lines: [
      "我想我见过 V 一次……",
      "我能记起那些成就。",
    ]
  },
  remembrance: {
    id: 10,
    requirement: () => Ra.remembrance.isUnlocked,
    lines: [
      "我记起了一些东西！",
      "看这个！",
      "追忆！",
      "我现在可以更专注地回忆他们了！",
    ]
  },
  midMemories: {
    id: 11,
    requirement: () => Ra.totalPetLevel >= 50,
    lines: [
      "现实是我的家园，然而我无法创造属于自己的现实。",
      "我只能复制朋友们的现实。",
      "但是……为什么我听到了声音？",
      "他们是在求救吗？",
    ]
  },
  lateMemories: {
    id: 12,
    requirement: () => Ra.totalPetLevel >= 80,
    lines: [
      "我想他们在叫我停下。",
      "你……无论你是什么？",
      "发生了什么？",
      "我做错什么了吗？",
    ]
  },
  maxLevels: {
    id: 13,
    requirement: () => Ra.totalPetLevel === Ra.maxTotalPetLevel,
    lines: [
      "终于，我想起了一切。",
      "这驱逐了我的黑暗。",
      "Lai'tela……",
      "他们驱逐我是对的。",
      "我的力量……",
      "它们会窃取，会腐蚀。",
      "请离开。",
      "我不想也伤害你。",
    ]
  },
};
