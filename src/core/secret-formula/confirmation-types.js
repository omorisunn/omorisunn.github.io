export const confirmationTypes = [
  {
    name: "维度提升",
    option: "dimensionBoost",
    isUnlocked: () => PlayerProgress.infinityUnlocked() || player.galaxies > 0 || player.dimensionBoosts > 0,
  }, {
    name: "反物质星系",
    option: "antimatterGalaxy",
    isUnlocked: () => PlayerProgress.infinityUnlocked() || player.galaxies > 0,
  }, {
    name: "献祭",
    option: "sacrifice",
    isUnlocked: () => Sacrifice.isVisible,
  }, {
    name: "大爆炸",
    option: "bigCrunch",
    isUnlocked: () => player.break || PlayerProgress.eternityUnlocked(),
  }, {
    name: "挑战",
    option: "challenges",
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
  }, {
    name: "退出挑战",
    option: "exitChallenge",
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
  }, {
    name: "复制器星系",
    option: "replicantiGalaxy",
    isUnlocked: () => PlayerProgress.eternityUnlocked() || player.replicanti.unl,
  }, {
    name: "永恒",
    option: "eternity",
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
  }, {
    name: "膨胀",
    option: "dilation",
    isUnlocked: () => PlayerProgress.realityUnlocked() || !Currency.tachyonParticles.eq(0),
  }, {
    name: "重置现实",
    option: "resetReality",
    isUnlocked: () => PlayerProgress.realityUnlocked(),
  }, {
    name: "替换符文",
    option: "glyphReplace",
    isUnlocked: () => PlayerProgress.realityUnlocked(),
  }, {
    name: "献祭符文",
    option: "glyphSacrifice",
    isUnlocked: () => GlyphSacrificeHandler.canSacrifice,
  }, {
    name: "清除符文",
    option: "autoClean",
    isUnlocked: () => GlyphSacrificeHandler.canSacrifice,
  }, {
    name: "献祭所有符文",
    option: "sacrificeAll",
    isUnlocked: () => GlyphSacrificeHandler.canSacrifice,
  }, {
    name: "选择符文",
    option: "glyphSelection",
    isUnlocked: () => Autobuyer.reality.isUnlocked,
  }, {
    name: "撤销符文",
    option: "glyphUndo",
    isUnlocked: () => TeresaUnlocks.undo.canBeApplied,
  }, {
    name: "切换自动机编辑器",
    option: "switchAutomatorMode",
    isUnlocked: () => Player.automatorUnlocked,
  }, {
    name: "删除符文预设",
    option: "deleteGlyphSetSave",
    isUnlocked: () => EffarigUnlock.setSaves.isUnlocked,
  }, {
    name: "精炼符文",
    option: "glyphRefine",
    isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
  }, {
    name: "末日审判",
    option: "armageddon",
    isUnlocked: () => Pelle.isDoomed,
  }, {
    name: "重置商店购买",
    option: "respecIAP",
    isUnlocked: () => Cloud.isAvailable
  }
];
