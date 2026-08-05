import { DC } from "../constants.js";

export const catchupResources = [
  {
    name: "反物质维度",
    id: 0,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `每个反物质维度都会持续产出下一级的维度。最低级的反物质维度产出反物质。`
  },
  {
    name: "计数频率升级",
    id: 1,
    openH2pEntry: "Tickspeed",
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `计数频率升级让反物质维度产出其他反物质维度或反物质，就像时间过得更快一样。`
  },
  {
    name: "自动购买器",
    id: 2,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `自动购买器是游戏内置的功能，会在你买得起的时候自动为你购买反物质维度升级。`
  },
  {
    name: "维度提升",
    id: 3,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `当你达到一定数量的最高可用反物质维度后，重置所有反物质维度和计数频率即可获得维度提升。它们为你的反物质维度提供倍率。`
  },
  {
    name: "反物质星系",
    id: 4,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `通过重置反物质维度和维度提升来获得反物质星系。它们以复利的方式提高计数频率升级的效果。`
  },
  {
    name: "无限",
    id: 5,
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `无限是第一个主要重置层级。达到 ${format(Number.MAX_VALUE, 2)} 反物质后，你可以重置到目前为止的一切，以解锁新内容和资源。`
  },
  {
    name: "无限点数",
    id: 6,
    openH2pEntry: "Infinity",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: `无限点数是你完成第一次无限后的主要资源。它们可以用于购买在无限重置后仍会保留的功能。`
  },
  {
    name: "普通挑战",
    id: 7,
    openH2pEntry: "Normal Challenges",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `挑战要求你在更困难的条件下达到 ${format(Number.MAX_VALUE, 2)} 反物质。完成挑战可以升级你的自动购买器。`
  },
  {
    name: "打破无限",
    id: 8,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `将大崩解自动购买器升到最高级后，你可以突破 ${format(Number.MAX_VALUE, 2)} 反物质，随着反物质增加获得越来越多的无限点数。`
  },
  {
    name: "无限维度",
    id: 9,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: `无限维度像反物质维度一样以级联方式产出。最低级的无限维度产出无限力量，对所有反物质维度提供巨大倍率。`
  },
  {
    name: "无限挑战",
    id: 10,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `无限挑战是新的挑战，反物质目标在 ${format(Number.MAX_VALUE, 2)} 以上。完成它们会奖励升级和生产加成。`
  },
  {
    name: "复制子",
    id: 11,
    requiredStage: PROGRESS_STAGE.REPLICANTI,
    description: () => `复制子是一种会随时间自我产出的资源，为所有无限维度提供倍率。当复制子达到 ${format(Number.MAX_VALUE, 2)} 时，可以重置为 ${formatInt(1)} 以获得一个不会增加反物质星系成本的额外星系。它们也会在每次无限后重置。`
  },
  {
    name: "永恒",
    id: 12,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: () => `永恒是第二个主要重置层级。达到 ${format(Number.MAX_VALUE, 2)} 无限点数后，你可以重置到目前为止的一切，以解锁新内容和资源。`
  },
  {
    name: "永恒点数",
    id: 13,
    openH2pEntry: "Eternity",
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒点数是你完成第一次永恒后的主要资源，根据你完成永恒时的无限点数缩放。`
  },
  {
    name: "时间研究",
    id: 14,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间研究是一组类似技能树的升级，每次永恒后都可以免费重新分配，不会损失资源。树的某些部分有限制，禁止你同时选择特定的研究。`
  },
  {
    name: "永恒里程碑",
    id: 15,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒里程碑是内置的自动化和便利功能，只需完成更多次永恒即可解锁。解锁它们不需要消耗任何资源。`
  },
  {
    name: "时间维度",
    id: 16,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间维度也以级联方式相互产出，最低级产出时间碎片。时间碎片会给你额外的计数频率升级，且不会增加
      用反物质购买的计数频率升级的成本。`
  },
  {
    name: "永恒挑战",
    id: 17,
    requiredStage: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    description: `永恒挑战是修改过的永恒，需要达到某个无限点数目标才能完成。它们最多可以完成五次，每次重复都会
      变得更难，换取越来越强大的奖励。`
  },
  {
    name: "时间膨胀",
    id: 18,
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `时间膨胀是修改过的永恒，其中计数频率和所有维度倍率都被大幅削弱。完成膨胀永恒会给予快子粒子。`
  },
  {
    name: "Tachyon Particles",
    id: 19,
    openH2pEntry: "Time Dilation",
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `快子粒子是一种无法刷取的资源，你需要通过膨胀永恒获得更多的反物质来增加数量。快子粒子产出膨胀时间。`
  },
  {
    name: "现实",
    id: 20,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: () => `现实是第三个也是最后一个主要重置层级。达到 ${format(DC.E4000)} 永恒点数后，你可以选择重置
      到目前为止的一切，以解锁新内容和 gaining
      access to new resources.`
  },
  {
    name: "Reality Machines",
    id: 21,
    openH2pEntry: "Reality",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `现实机器是你完成第一次现实后的主要资源。它们根据完成现实时的永恒点数发放。`
  },
  {
    name: "特长",
    id: 22,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `特长是与永恒里程碑类似的可解锁功能，主要侧重于便利性和自动化。它们用特长点购买，特长点在每次
      现实后获得。`
  },
  {
    name: "符文",
    id: 23,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `符文是可装备的升级，只能在两次现实之间卸下。每次现实你都可以从多个新的随机符文中选择一个；你的
      可用选择由该次现实中某些资源的最高值决定。`
  },
  {
    name: "自动机",
    id: 24,
    openH2pEntry: "Automator Overview",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `自动机是一个内置功能，使用脚本语言，在足够的升级和特长支持下，最终可以让你完全放手完成现实。`
  },
  {
    name: "黑洞",
    id: 25,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `黑洞以周期性循环让整个游戏运行得更快。这会影响游戏中到目前为止的一切，效果相当于让游戏开着
      相同的时间 nt of time.`
  },
  {
    name: "Teresa",
    id: 26,
    requiredStage: PROGRESS_STAGE.TERESA,
    description: `Teresa 是第一位天体，她的现实更困难，根据完成度大幅提升符文献祭。她解锁的升级侧重于测试和更轻松地
      自动化现实。`
  },
  {
    name: "Effarig",
    id: 27,
    requiredStage: PROGRESS_STAGE.EFFARIG,
    description: `Effarig 是第二位天体，她的现实限制你的符文并带有递增削弱，但每达到一个新的重置层级都会给予奖励。
      她解锁的升级侧重于自动选择和筛选你获得的大量符文，用名为遗物碎片的新资源购买。`
  },
  {
    name: "The Nameless Ones",
    id: 28,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `The Nameless Ones 是第三位天体，她的现实极其严苛，带有一长串削弱，但能为找到通关之道的人解锁超立方体。
      她们还会修改你的黑洞，使其能够储存时间。`
  },
  {
    name: "Stored Time",
    id: 29,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `你的黑洞可以用两种方式储存时间。充能可以让你保存加速后的时间，之后一次性释放向前跳过。
      储存现实时间则让你可以用实际时间来模拟现实（给予该现实的资源但乘以倍率），或作为离线进度的替代。`
  },
  {
    name: "Tesseracts",
    id: 30,
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无限维度不能无限购买，除了第 8 个之外，所有无限维度都有购买次数上限。每个超立方体都会永久大幅
      提高这个上限 ount.`
  },
  {
    name: "V",
    id: 31,
    requiredStage: PROGRESS_STAGE.V,
    description: `V 是第四位天体，她的现实与 Teresa 的类似，但只有达到特定的资源里程碑才会给予奖励。她给予一种名为空间定理的资源，允许你购买无路径限制的额外时间研究。`
  },
  {
    name: "Ra",
    id: 32,
    requiredStage: PROGRESS_STAGE.RA,
    description: `Ra 是第五位天体，她的现实会根据你拥有的资源总量产出一种名为记忆块的资源。她非常注重从前四位天体以及改进它们，同时填补自动化和便利性方面的一些最终空白。`
  },
  {
    name: "Memories",
    id: 33,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `Ra 控制着前四位天体，根据记忆块数量随时间产出记忆。这些记忆用于提升前四位天体的等级，达到特定等级时提供升级。`
  },
  {
    name: "Charged Infinity Upgrades",
    id: 34,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `Teresa 的记忆允许你为无限升级充能，效果类似但大幅增强。哪些升级被充能只能在两次现实之间更改。`
  },
  {
    name: "Glyph Alchemy",
    id: 35,
    requiredStage: PROGRESS_STAGE.RA,
    description: `Effarig 的记忆解锁符文炼金术，它使用符文献祭的改良版提供许多小幅加成。通过这种方式献祭符文获得
      的资源必须组合成反应才能完全升级其效果。`
  },
  {
    name: "Amplified Black Hole",
    id: 36,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `The Nameless Ones 的记忆放大充能效果，使储存的游戏时间大于实际经过的游戏时间。现在还可以重复且自动地释放。`
  },
  {
    name: "Harder V",
    id: 37,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `V 的记忆解锁 V 原版现实的改良版，目标更难，并有一组名为三元研究的新时间研究。`
  },
  {
    name: "虚数机器",
    id: 38,
    requiredStage: PROGRESS_STAGE.IMAGINARY_MACHINES,
    description: () => `虚数机器是一种新资源，在达到 ${format(DC.E1000)} 现实机器时解锁。它们被动产出，上限由你在最远现实中的现实机器数量决定。`
  },
  {
    name: "Lai'tela",
    id: 39,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `Lai'tela 是第六位天体，她的现实有修改过的完成条件，并根据你完成的速度给予递增奖励。她解锁的新功能大多与名为暗物质的资源相关。`
  },
  {
    name: "连续统",
    id: 40,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `连续统是一种修改过的产出方式，让你的反物质维度像购买了小数数量的升级一样产出，而实际上并不购买。`
  },
  {
    name: "Dark Matter Dimensions",
    id: 41,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度是以 tick 制系统运行的级联产出，而非持续产出。最低级产出暗物质，所有级别都产出暗能量。`
  },
  {
    name: "Dimension Reset Mechanics",
    id: 42,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度可以用两种方式重置。湮灭会重置你所有的维度，换取所有暗物质维度的永久倍率。升维会提高产出，但会重置单个维度的间隔。`
  },
  {
    name: "奇点",
    id: 43,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗能量可以用来产出奇点，奇点根据总量提供加成。产出奇点时，超过凝聚阈值的多余暗能量会被浪费。`
  },
  {
    name: "Pelle",
    id: 44,
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `Pelle 是第七位也是最后一位天体，她会永久性地宣告你的游戏末日，把你扔进一个无法逃脱的极其困难的
      修改现实。`
  },
  {
    name: "Armageddon",
    id: 45,
    openH2pEntry: "Pelle",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `末日决战是 Pelle 专属的重置，你可以随时进行。它会将你的进度重置到末日现实的起点，但会给予产出
      现实碎片的遗存。`
  },
  {
    name: "Pelle Strikes and Rifts",
    id: 46,
    openH2pEntry: "Pelle Strikes",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `在 Pelle 中达到特定的进度里程碑后，可能会发生一次打击，永久性地给末日现实再施加一项削弱。每次打击
      都伴随一个裂隙，这是一种让你消耗不同资源换取加成的机制。这些是永久性的，末日决战之后仍然保持解锁。`
  },
];
