export const secretAchievements = [
  {
    id: 11,
    name: "第一次总是免费的",
    description: "点击这个成就。"
  },
  {
    id: 12,
    name: "以防万一",
    get description() { return `Save ${formatInt(100)} times without refreshing.`; }
  },
  {
    id: 13,
    name: "尊重有回报",
    description: "致敬。"
  },
  {
    id: 14,
    name: "So do I",
    description: "说点坏话。"
  },
  {
    id: 15,
    name: "来一个翻滚！",
    description: "做一个翻滚。",
  },
  {
    id: 16,
    name: "你喜欢痛苦吗？",
    get description() {
      return `Use a "painful" notation for ${formatInt(10)} real-time minutes
      after doing an Eternity.`;
    },
    checkRequirement: () => AchievementTimers.pain
      .check(PlayerProgress.eternityUnlocked() && Notations.current.isPainful, 600),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 17,
    name: "30 条命",
    description: "输入科乐美秘技。"
  },
  {
    id: 18,
    name: "你觉得幸运吗？你呢，小混混？",
    get description() {
      return `You have a ${formatInt(1)}/${formatInt(1e5)} chance of getting this achievement every second.`;
    }
  },
  {
    id: 21,
    name: "不如去现实中学习",
    description: "购买秘密时间研究。"
  },
  {
    id: 22,
    name: "油炸",
    get description() { return `Buy ${formatInt(1e5)} Antimatter Galaxies in total while using emoji notation.`; },
    checkRequirement: () => player.requirementChecks.permanent.emojiGalaxies >= 1e5,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 23,
    name: "站住，罪犯渣滓！",
    description: "打开控制台。"
  },
  {
    id: 24,
    name: "真新闻",
    description: "点击一条点击时会有反应的新闻滚动条消息。"
  },
  {
    id: 25,
    name: "嘘……这是个秘密",
    description: "发现一个秘密主题。"
  },
  {
    id: 26,
    name: "你是个失败者",
    get description() {
      return `Fail Eternity Challenges ${formatInt(10)} times without refreshing.
      What are you doing with your life...`;
    },
    checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED
  },
  {
    id: 27,
    name: "它不叫物质维度，对吧？",
    description: "获得无限物质。",
    checkRequirement: () => Currency.matter.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "不错。",
    description: "别装作你不知道自己做了什么。"
  },
  {
    id: 31,
    name: "你应该再下载一些内存",
    get description() { return `Set your update rate to ${formatInt(200)}ms.`; }
  },
  {
    id: 32,
    name: "小于或等于 0.001",
    get description() {
      return `Get a fastest infinity or eternity time of less than or equal to ${format(0.001, 3, 3)} seconds.`;
    },
    checkRequirement: () =>
      Time.bestInfinity.totalMilliseconds <= 1 ||
      Time.bestEternity.totalMilliseconds <= 1,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "一个明智的财务决定",
    description: "点击按钮购买 STD 币。"
  },
  {
    id: 34,
    name: "你知道这些东西怎么运作，对吧？",
    description: "在时间研究树为空时洗点。"
  },
  {
    id: 35,
    name: "我们该告诉他们买最大的事吗……",
    get description() { return `Buy single Tickspeed upgrades ${formatInt(1e5)} times.`; },
    checkRequirement: () => player.requirementChecks.permanent.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "你离开的时候……什么都没发生。",
    description: "看看你离开时什么都没发生。"
  },
  {
    id: 37,
    name: "你遵守了指示",
    description: "遵守指示。"
  },
  {
    id: 38,
    name: "刀锋边缘",
    description: "输入确认文字后关闭硬重置弹窗。"
  },
  {
    id: 41,
    name: "那个维度不存在",
    description: "尝试购买第 9 维度。"
  },
  {
    id: 42,
    name: "我该羞愧",
    description: "尝试用 EC12 加速时间。"
  },
  {
    id: 43,
    name: "刺耳的合唱",
    description: "让所有已装备符文都是音乐符文。",
    checkRequirement: () => Glyphs.active.length && Glyphs.active.every(x => Glyphs.isMusicGlyph(x)),
    checkEvent: GAME_EVENT.GLYPHS_EQUIPPED_CHANGED
  },
  {
    id: 44,
    name: "你现在满意了吗？",
    get description() { return `Stare intently at the statistics tab for ${formatInt(15)} real-time minutes.`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 900),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "这次拖拽拖太久了",
    description: "把福利拖动一分钟。",
    checkRequirement: () => player.requirementChecks.permanent.perkTreeDragging++ / 100 >= 60
  },
  {
    id: 46,
    name: "未雨绸缪",
    description: "存储一天的真实时间。"
  },
  {
    id: 47,
    name: "ALT+",
    description: "隐藏所有可能的标签页。"
  },
  {
    id: 48,
    name: "栈溢出",
    description: "让自动机错误比行数还多。"
  },
];
