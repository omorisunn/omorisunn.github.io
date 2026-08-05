import { DC } from "../constants.js";

import { credits } from "./credits.js";

export const h2p = {
  /**
   * @template
   * {
   *  @property {String} name   Internal name for the tab entry
   *  @property {String} alias  Display name for the tab; if not present, will use the internal name
   *  @property {Number} id     Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info         Text body of information for the entry
   *  @property {function: @return Boolean} isUnlocked  Condition for when the entry is visible and searchable
   *  @property {Array: String} tags  List of keywords which are linked to this tab in the search function
   *  @property {String} tab    Key of a tab+subtab combination which will default the h2p to this entry if opened
   * }
   */
  tabs: [
    {
      name: "This Modal",
      alias: "本窗口",
      info: () => `
欢迎使用如何游玩！
<br>
<br>
此窗口（弹出窗口）包含你在游戏过程中会遇到的所有内容的深入说明和附加细节。当你解锁新功能和机制时，也会在这里解锁额外的页面。如果你对游戏中某件事的工作原理感到困惑，可以在这里的相关条目中找到有用的说明。
<br>
<br>
目前，打开如何游玩总是会从本页开始。在你获得第一次维度提升后，打开此窗口将改为显示与你当前可见标签页和子标签最相关的如何游玩条目（如果存在这样的条目）。
`,
      isUnlocked: () => true,
      tags: ["h2p", "how", "to", "play", "modal"],
      tab: ""
    },
    {
      name: "Your savefile",
      alias: "你的存档",
      info: () => `
如果你在网页浏览器上游玩，你的游戏存档数据存储在浏览器的数据中；如果在 Steam 上游玩，则存储在 Steam 安装文件夹中。这意味着清除浏览器缓存或 Cookie，或从 Steam 完全卸载游戏，都会删除你的存档文件。
同样，如果你在隐私或无痕窗口中游玩，下次打开浏览器时存档将不会存在。存档也因浏览器而异，例如你在 Chrome 中游玩的存档不会出现在 Firefox 中。最后，网页版和 Steam 版的存档彼此完全独立。
<br>
<br>
你可以使用导出功能在设备之间转移存档，它会将一长串看起来随机的字符复制到剪贴板。这段文本包含你的存档数据，你可以将其粘贴到导入提示的文本框中重新载入游戏。导入必须使用完整的存档文本，否则游戏可能无法识别该文本为有效存档。如果你使用某些消息应用在设备之间传输文本，它们可能会截断部分文本。
<br>
<br>
来自现实更新的格式正确的存档字符串将以
<b>${GameSaveSerializer.startingString.savefile}</b> 开头，以 <b>${GameSaveSerializer.endingString.savefile}</b> 结尾。
如果你从现实发布之前的游戏版本导入，它会以 <b>eyJ</b> 开头，以 <b>In19</b>、<b>fX0=</b> 或 <b>fQ==</b> 结尾。如果这两种情况都不符合，说明你的存档缺少一部分，导入将失败。除了从剪贴板导入和导出外，你还可以从文本文件导入和导出。
<br>
你可以使用“选择存档”按钮在浏览器的三个独立存档之间选择。这些存档在很大程度上彼此完全独立。导入和导出只会影响当前存档槽位。<b>唯一的例外是清除浏览器或 Steam 数据，此时所有三个存档都会被重置。</b>
<br>
<br>
游戏会定期自动保存，默认每 ${formatInt(30)} 秒一次。
如果你需要关闭游戏，请记住这一点：除非你等待自动保存间隔或再次手动保存，否则关闭前刚刚进行的操作可能不会被保存。自动保存间隔的长度可以调整，其计时器显示在屏幕左下角。
<br>
<br>
在在线或离线一段时间后，游戏还会保存存档的备份，你可以随时点击“打开自动备份存档菜单”按钮查看并重新载入。这些备份在你希望将存档回退到过去某个时间点的状态时很有用，例如几分钟前或上次离线一段时间时的状态。
<br>
<br>
你还可以将 Google 账户连接到游戏，从而在线保存进度。这样你可以在任何登录同一账户的设备上使用同一存档。云存档只与网页版或 Steam 版的存档兼容；安卓版游戏的存档不会通过云存档自动关联。云保存和云加载会自动覆盖另一个存档，除非另一个存档更旧或进度明显更多，此时会弹出一个窗口询问你要保留哪个存档。
<br>
<br>
你可以随时通过点击按钮完全重置存档，并填写提示内容以确认你是故意重置。执行此重置只会清除当前存档；其他存档槽位不受影响。<b>以这种方式重置游戏是完全不可逆的，并且不会给你带来任何永久收益，无论是否秘密。</b>
`,
      isUnlocked: () => true,
      tags: ["choose", "cloud", "google", "save", "import", "export", "reset"],
      tab: "options/saving"
    },
    {
      name: "Customization",
      alias: "自定义",
      info: () => `
游戏有两种不同的界面布局：经典界面保持了现实更新之前的反物质维度风格，而现代界面则是基于更现代深色主题风格重新设计的。此外，还有各种主题可以应用来改变游戏中所有内容的外观。还有一些秘密主题可以通过导入特定短语来解锁。两种界面布局都支持所有不同的主题。
<br>
<br>
游戏显示数字所用的计数法默认为混合科学计数法，但可以在下拉菜单中选择众多选项之一。其中许多计数法是作为玩笑存在的，在某些情况下会以导致文本溢出到屏幕其他部分的方式格式化数字，这不是 bug。你还可以使用“指数部分计数法选项”菜单配置极大数字的显示方式，尽管这可能导致某些地方出现奇怪的文本外观。
<br>
<br>
游戏中的许多事件会触发全屏动画或弹出需要你确认继续的窗口。大多数动画和确认提示都可以通过选项单独禁用，不过禁用某个动画或确认提示的选项只会在其至少显示一次之后出现。
`,
      isUnlocked: () => true,
      tags: ["UI", "update", "news", "theme", "notation", "comma", "exponent", "animation", "retry", "confirmation",
        "offline", "hotkey", "classic", "modern"],
      tab: "options/visual"
    },
    {
      name: "Offline Progress",
      alias: "离线进度",
      info: () => `
反物质维度有一个追赶机制，会尝试在游戏长时间关闭时模拟游戏行为。由于游戏在数学上过于复杂，无法在合理时间内全精度运行，模拟行为只是大致准确。模拟结束时，游戏会汇总你离开期间各种相关资源的变化。
<br>
<br>
如果游戏保持打开但长时间失去焦点或以其他方式被挂起，当你返回时，它会尝试将错过的时间作为离线进度应用。这可能不太可靠，因为不同设备处理这些情况的方式不同。如果这导致不理想的行为，可以在选项中关闭此功能，这种情况下游戏会尝试在单个 tick 中应用所有错过的时间。
<br>
<br>
游戏运行在一个每 tick 更新所有内容的系统上：所有维度和资源执行一个单位的产出，所有自动购买器触发一次，所有倍率和数值相应变化，所有显示的数字都会更新。默认情况下，游戏运行时每秒有 ${formatInt(20)} 个 tick，不过可以通过更改游戏选项中的“更新频率”来修改。
你当前的设置平均每秒运行 ${format(1000 / player.options.updateRate, 2, 1)} 个 tick，不过卡顿和内部 JavaScript 行为可能导致单个 tick 有百分之几的波动。
<br>
<br>
当离线模拟启用时，这些 tick 会调整长度以填满你离开的时间，例如将离线 tick 设置为 ${formatInt(1000)} 并关闭游戏一小时，会产生每个长 ${format(3.6, 1, 1)} 秒的 tick。对于游戏中的大多数内容来说这不是问题，因为模拟完成后仍会得到大致相同的资源量。一个明显的例外是自动购买器，在这种情况下自动购买器实际上只会每 ${format(3.6, 1, 1)} 秒触发一次，这可能对游戏的不同部分产生强烈影响。
<br>
<br>
${player.blackHole[0].unlocked
    ? `<b>离线黑洞行为：</b>一旦解锁黑洞，离线进度模拟会尝试以每个 tick 包含大致相同的<i>游戏</i>时间的方式运行游戏。这可能会让黑洞在模拟中看起来比正常情况活跃更长时间，而实际上游戏是在更慢地运行活跃期，并跳过非活跃期，因为它们在每单位真实时间内的产出少得多。与恒定真实时间的 tick 相比，这通常对你有利。
      <br>
      <br>`
    : ""
}
离线 tick 数量可以在 ${formatInt(500)} 到 ${formatInt(DC.E6)} 个 tick 之间调整。较小的数量会导致更快但不太准确的模拟，较大的数量会产生更准确但耗时更长的模拟。每个游戏 tick 的时间上限为一天，这意味着在某些罕见情况下（例如超过一年没有玩游戏），你可能无法获得离开的全部时间。
<br>
<br>
如有需要，可以完全禁用离线进度，例如用于诊断或计时目的，或进行仅在线的游玩。否则，离线进度从游戏一开始就默认开启。注意，如果禁用离线进度，游戏关闭期间的总游玩时间统计也会暂停。
`,
      isUnlocked: () => true,
      tags: ["offline", "away", "progress"],
      tab: "options/gameplay"
    }, {
      name: "Effect Stacking",
      alias: "效果叠加",
      info: () => `
反物质维度中的大多数效果和升级大致分为三类：
<br>
- <b>加算：</b>这类效果通常以 +（或“增加”一词）加数字表示，并将其数值加到某个基础数量上。多个加算效果会相加。它们有时也会作为降低资源成本的减算效果出现。
<br>
- <b>乘算：</b>这类效果以 ×（或“乘以”一词）加数字表示，或更罕见地以两个由 ➜ 分隔的数字表示。不同的乘算来源总是通过相乘组合，绝不相加。在某些情况下，此类效果可能以除法形式出现负效果或成本降低。
<br>
- <b>幂算：</b>这类效果更罕见，以 ^ 加数字出现。多个幂算效果按顺序应用，或者等效地将所有幂算数值相乘后作为单个幂应用。在罕见情况下，负效果可能以小于 ${formatInt(1)} 的幂出现在此类中。
<br>
<br>
除非另有说明（例如升级或奖励<i>替换</i>旧值），所有这些效果都会互相叠加。在升级用新值替换旧值的情况下，替换发生在上述任何效果应用之前。要确定一组效果的最终值，先分别合并每个类别中的效果，然后按加算、乘算、幂算的顺序应用。
<br>
<br>
${PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked()
    ? "膨胀和任何类似膨胀的效果会在所有这些其他效果叠加<i>之后</i>应用。"
    : ""}
<br>
<br>
${PlayerProgress.realityUnlocked()
    ? `符文效果实际上有两个叠加属性：它们内部的叠加方式，以及它们与所有其他游戏效果的叠加方式。这两者不一定相同，例如“反物质维度力量”效果会<i>与自身加算叠加</i>，但总效果会加到 ${formatInt(1)} 的基础值上，然后作为<i>幂效果</i>应用于反物质维度。`
    : ""}
`,
      isUnlocked: () => true,
      tags: ["effect", "stack", "combine", "add", "reduce", "multiply", "divide", "power", "dilation", "glyph"],
      tab: "options/gameplay"
    }, {
      name: "Common Abbreviations",
      alias: "常用缩写",
      info: () => `
游戏中的许多资源可能会以缩写形式出现在文本中以节省空间。此如何游玩条目会在你首次遇到新资源时自动更新并添加新条目。
<br>
- <b>AM</b>：反物质<br>
- <b>AD</b>：反物质维度<br>
- <b>AG</b>：反物质星系<br>
${PlayerProgress.infinityUnlocked() ? "- <b>IP</b>：无限点数<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>NC</b>：普通挑战<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>IC</b>：无限挑战<br>" : ""}
${InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked() ? "- <b>ID</b>：无限维度<br>" : ""}
${PlayerProgress.replicantiUnlocked() ? "- <b>RG</b>：复制器星系<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EP</b>：永恒点数<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TT</b>：时间之理<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TD</b>：时间维度<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EC</b>：永恒挑战<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TP</b>：快子粒子<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>DT</b>：膨胀时间<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TG</b>：快子星系<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>RM</b>：现实机器<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>AP</b>：自动机点数<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>BH</b>：黑洞<br>" : ""}
${MachineHandler.isIMUnlocked ? "- <b>iM</b>：想象机器<br>" : ""}
${Laitela.isUnlocked ? "- <b>DM</b>：暗物质<br>" : ""}
${Laitela.isUnlocked ? "- <b>DE</b>：暗能量<br>" : ""}
`,
      isUnlocked: () => true,
      tags: ["abbreviation", "shorten", "am", "ad", "ag", "ip", "nc", "ic", "id", "rg", "ep", "tt", "td", "ec", "tp",
        "dt", "tg", "rm", "ap", "bh", "im", "dm", "de"],
      tab: ""
    }, {
      name: "Antimatter Dimensions",
      alias: "反物质维度",
      info: () => `
反物质是一种资源，贯穿整个游戏，用于购买各种内容。你首次打开游戏时有 ${formatInt(10)} 反物质，可以花费它购买第一反物质维度来开始游戏。
<br>
<br>
反物质维度是你的生产单位。第一反物质维度生产你的反物质。每个后续的反物质维度生产前一个维度，让你拥有稳定的增长。
总共有八个反物质维度。
<br>
<br>
<b>维度倍率：</b>维度旁边有一个倍率（例如第一维度 ${formatX(1, 1, 1)}）。每个维度的基础产出乘以这个数字。
每购买 ${formatInt(10)} 个该维度，此倍率提升 ${formatX(2)}。
每次发生这种情况，维度的价格都会提高。
<br>
<br>
<b>累计维度数量：</b>下一列是你当前拥有的该维度数量。
它由你使用反物质购买的维度和更高维度生产出的维度共同组成。
<br>
<br>
<b>已购买维度数量：</b>在每个拥有的累计维度数量旁边，括号中显示已购买的、距离下一次倍率升级的维度数量。
例如，如果累计维度数量旁边显示（${formatInt(4)}），则还需要 ${formatInt(6)} 个该维度才能获得下一次倍率提升。
<br>
<br>
<b>维度增长率：</b>这个数字代表每个维度每秒的增长量。${formatPercents(1)} 意味着维度每秒翻倍。
这可以让你判断整体增长速度。
<br>
<br>
<b>价格与直到 ${formatInt(10)}：</b>
当价格按钮高亮时，你可以用反物质购买每个维度的单个数量。
或者，如果“直到 ${formatInt(10)}”按钮高亮，你可以购买达到该维度下一次维度倍率所需的数量。
<br>
<br>
<b>全部最大：</b>全部最大会先购买第一反物质维度直到 ${formatInt(10)} 直到无法购买，然后购买第二维度，依此类推直到第八反物质维度，最后购买最大计数频率升级。
<br>
<br>
<b>维度基础价格：</b>${Array.range(1, 8)
    .map(tier => format(AntimatterDimension(tier)._baseCost, 2, 2))
    .join(", ")}
<br>
<b>每购买 ${formatInt(10)} 个维度的基础价格上涨：</b>${Array.range(1, 8)
  .map(tier => format(AntimatterDimension(tier)._baseCostMultiplier, 2, 2))
  .join(", ")}
<br>
<br>
<b>快捷键：1、2、3、4、5、6、7、8</b> 用于购买直到 ${formatInt(10)} 个第 X 维度
（购买维度时也可以按住 Shift，这只购买 ${formatInt(1)} 个而不是 ${formatInt(10)} 个），<b>M</b> 用于全部最大
`,
      isUnlocked: () => true,
      tags: ["dims", "normal", "antimatter", "ad"],
      tab: "dimensions/antimatter"
    }, {
      name: "Tickspeed",
      alias: "计数频率",
      info: () => `
游戏中的产出发生在每个“tick”上，最初每秒发生一次。通过购买计数频率升级，你可以让反物质维度生产得更快，就好像每秒发生多个 tick。
<br>
<br>
<b>计数频率：</b>表示每秒发生多少个游戏 tick。小数 tick 也会被计算在内，相当于已经过去了部分游戏 tick 的产出提升。注意，实际的计数频率时间是模拟的，游戏始终以你在选项页选择的更新频率运行计算。
<br>
<br>
<b>价格：</b>将每秒 tick 数乘以显示倍率所需的反物质价格。
（没有任何星系时，每次购买为 ${formatX(1.1245, 0, 3)}）
<br>
<br>
<b>购买最大：</b>使用你当前的反物质购买尽可能多的计数频率升级。
<br>
<br>
<b>快捷键：T</b> 购买尽可能多的计数频率升级，或 <b>Shift+T</b> 购买单个升级。
<b>M</b> 用于全部最大。
`,
      isUnlocked: () => Tickspeed.isUnlocked,
      tags: ["dimension", "earlygame", "time"],
      tab: "dimensions/antimatter"
    }, {
      name: "Dimension Boosts",
      alias: "维度提升",
      info: () => `
<b>维度提升：</b>这会重置你的反物质和所有反物质维度，但会解锁另一个可供购买的反物质维度，并提升你的维度倍率。
第一次维度提升需要 ${formatInt(20)} 个第四维度，第二次需要 ${formatInt(20)} 个第五维度，依此类推。
解锁全部 ${formatInt(8)} 个维度后，每次额外的提升会比上一次多花费 ${formatInt(15)} 个第八维度，并且不再解锁维度，但会继续提升你的维度倍率。
<br>
<br>
每拥有一次维度提升，第一维度获得 ${formatX(2)} 倍率。每个更高维度获得的倍率应用次数比前一个少一次，最低为 ${formatInt(0)}。
例如，拥有 ${formatInt(3)} 次提升时，第一维度获得 ${formatX(8)}，第二维度获得 ${formatX(4)}，
第三维度获得 ${formatX(2)}，其他维度不受影响。
<br>
<br>
<b>快捷键：D</b> 尝试购买维度提升。
`,
      isUnlocked: () => true,
      tags: ["dimboost", "reset", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "Antimatter Galaxies",
      alias: "反物质星系",
      info: () => `
购买反物质星系会将游戏重置回只有 ${formatInt(4)} 个维度可用的状态，但会将你的计数频率升级效果提升 +${format(0.02, 0, 2)}（前两个星系）。
随着星系数量增加，倍率会持续变得越来越强。
<br>
<br>
尽管在最初几次计数频率购买时影响很小，但这一增长是乘算的，很快就能看到效果。
<br>
<br>
你的第一个反物质星系需要 ${formatInt(80)} 个第八维度，之后每个额外的星系都需要再增加 ${formatInt(60)} 个。
<br>
<b>远方星系缩放：</b>超过 ${formatInt(100)} 个反物质星系后，星系之间的价格上涨会每个星系增加 ${formatInt(2)}，使下一个星系多花费 ${formatInt(62)} 个，然后多花费 ${formatInt(64)} 个，依此类推。
<br>
<b>远程星系缩放：</b>超过 ${formatInt(Galaxy.remoteStart)} 个反物质星系后，<i>总</i>成本会在远方缩放的基础上，每个星系再增加 ${formatPercents(0.002, 1)}。
<br>
<br>
<b>快捷键：G</b> 尝试购买反物质星系。
`,
      isUnlocked: () => true,
      tags: ["8th", "reset", "galaxy", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "Dimensional Sacrifice",
      alias: "维度献祭",
      info: () => `
<b>你在第五次维度提升后解锁维度献祭。</b>
<br>
<br>
献祭会立即将所有非第八维度的拥有数量重置为零，而不降低倍率或当前价格。作为交换，它会将第八维度倍率乘以显示的值。
恢复之前的产出需要时间，但你最终会得到净增长。
<br>
<br>
维度献祭倍率取决于献祭时拥有的第一维度数量，完成某些成就和挑战可以改进其缩放。倍率在两次献祭之间会保留，这意味着先以 ${formatX(10)} 献祭一次再以 ${formatX(4)} 献祭一次，与 ${formatX(8)} 后 ${formatX(5)} 相同；两种情况下你最终都会得到总献祭倍率 ${formatX(40)}。
<br>
<br>
<b>快捷键：S</b> 尝试献祭。
`,
      isUnlocked: () => Sacrifice.isVisible,
      tags: ["8th", "reset", "earlygame", "gods", "earlygame"],
      tab: "dimensions/antimatter"
    }, {
      name: "Achievements",
      alias: "成就",
      info: () => `
每个成就都有解锁需求。解锁后，部分成就会提供奖励。
需求和奖励在难度与收益上差异很大。
<br>
<br>
除了单个成就的任何特定奖励外，你还会获得对所有反物质维度的 ${formatX(1.03, 2, 2)} 倍率。每完成一整行还会额外提供 ${formatX(1.25, 2, 2)}。
所有成就的总倍率效果显示在所有成就图片上方。
<br>
<br>
隐藏成就不会提供任何游戏收益或优势，只是为了好玩。将鼠标悬停在隐藏成就上会给出如何获得它的提示。
`,
      isUnlocked: () => true,
      tags: ["earlygame", "awards", "earlygame"],
      tab: "achievements"
    }, {
      name: "Infinity",
      alias: "无限",
      info: () => `
当你拥有太多世界无法处理的反物质（${formatInt(2)}<sup>${formatInt(1024)}</sup>
约等于 ${formatPostBreak(Number.MAX_VALUE, 6)}，有时称为“无限”）时，你将被强制进行一次“大爆炸”。这会重置你的反物质、反物质维度、维度提升和反物质星系。进行大爆炸有时也被称为“达到无限”。
<br>
<br>
你最终将能够超过 ${formatPostBreak(Number.MAX_VALUE, 6)}，但在此之前，任何更大的数字都会显示为 ${format(Infinity)}。
<br>
<br>
每完成一次无限会获得 1 点无限点数，可以在新的无限标签页中购买升级。
你必须从上到下购买这些升级。你还会获得 1 次“无限”，即你进行大爆炸的次数。
<br>
<br>
“将所有来源的无限点数乘以 ${formatInt(2)}”升级可以购买多次，但每次购买都需要 ${formatInt(10)} 倍的无限点数。
你必须完成“无需 DLC”成就才能开始购买这个特定升级。
<br>
<br>
<b>快捷键：C</b> 尝试进行大爆炸。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["crunch", "big", "upgrades", "ip", "reset", "prestige", "earlygame"],
      tab: "infinity/upgrades"
    }, {
      name: "Normal Challenges",
      alias: "普通挑战",
      info: () => `
普通挑战在第一次无限后解锁；它们以不同方式改变游戏机制，创造更困难的无限情况。要完成挑战，你必须再次达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质。
<br>
<br>
每个完成的普通挑战都会奖励一个自动购买器或升级现有自动购买器的能力。
你可以多次进行（不过只有第一次会给予奖励），并且可以随时通过“退出挑战”按钮退出。
<br>
<br>
你的第一次无限被视为第一个普通挑战，因此当你解锁挑战时它已经完成。
<br>
<br>
无限升级最右侧一列在挑战中不生效。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["infinity", "autobuyer", "earlygame"],
      tab: "challenges/normal"
    }, {
      name: "Autobuyers",
      alias: "自动购买器",
      info: () => `
自动购买器允许你自动购买维度、升级或进行声望。所有自动购买器控制都位于“自动化”标签页的“自动购买器”子标签下，包括游戏后期解锁的任何额外自动购买器。
<br>
<br>
反物质维度自动购买器和计数频率升级自动购买器可以根据你的总反物质解锁，但大多数其他自动购买器需要购买升级或击败挑战。
<br>
<br>
大多数自动购买器具有相似的属性：
<br>
<br>
<b>自动购买器间隔：</b>自动购买器尝试进行下一次购买前的冷却时间。
反物质维度自动购买器和计数频率升级自动购买器需要击败各自对应的挑战后才能升级间隔。
<br>
<br>
<b>反物质维度自动购买器批量购买：</b>一旦自动购买器的间隔达到最小值
（${formatInt(100)} 毫秒），之后的所有升级都会使自动购买器每 tick 可购买的最大数量翻倍。
这可以禁用。
<br>
<br>
<b>反物质维度自动购买器购买数量：</b>维度自动购买器可以设置为购买单个维度，
或购买直到 ${formatInt(10)} 个。当自动购买器设置为购买单个时，批量购买会被禁用。
<br>
<br>
<b>计数频率自动购买器购买数量：</b>计数频率自动购买器可以设置为每次激活购买单个升级，
或在击败计数频率挑战（C9）后购买最大数量。
<br>
<br>
<b>自动维度提升自定义：</b>使用维度提升自动购买器，你可以设置它尝试购买的最大提升次数、在维度提升始终自动购买前所需的最少反物质星系数量，以及（解锁后）批量购买精确数量维度提升的能力。
如果你达到指定的星系阈值，自动购买器将忽略你的最大提升限制。
<br>
<br>
<b>最大星系：</b>星系自动购买器会购买的最高星系数量。
<br>
<br>
<b>大爆炸时的无限点数：</b>一旦你打破无限，你可以设置在爆炸前等待多少无限点数。
<br>
<br>
<b>献祭自动购买器：</b>此自动购买器一开始就有最大间隔，可能每个 tick 都会触发。
<br>
<br>
<b>动态数量：</b>升级后的声望自动购买器有一种模式，在超过指定阈值时触发声望。开启“动态数量”后，当解锁某些对此数值应用倍率的升级或成就时，该阈值会自动提高。
<br>
<br>
<b>暂停/恢复自动购买器：</b>此按钮会暂停或恢复已开启的自动购买器。
它不会更改单个自动购买器的设置。可以把它看作总开关。
<br>
<br>
<b>启用/禁用全部自动购买器：</b>此按钮会单独开启或关闭你的所有自动购买器。
<br>
<br>
<b>快捷键：A</b>（用于暂停/恢复自动购买器）。
此外，按下与升级、维度或声望关联的快捷键时按住 <b>Alt</b> 会切换关联的自动购买器。
`,
      isUnlocked: () => true,
      tags: ["infinity", "automation", "challenges", "rewards", "interval", "earlygame"],
      tab: "automation/autobuyers"
    }, {
      name: "Break Infinity",
      alias: "打破无限",
      info: () => `
一旦你打破无限，你将不再受限于 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质，并且根据爆炸时拥有的反物质多少，每次大爆炸可以开始获得超过 ${formatInt(1)} 的无限点数。
<br>
<br>
现在，在 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质时大爆炸可获得约 ${format(1.78, 2, 2)} 无限点数。你获得的无限点数会随着你获得的每额外一个 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质因子而乘以 ${formatInt(10)}（以连续方式）。在应用所有倍率<i>之后</i>，结果向下取整到最近的整数。
<br>
<br>
所有维度的反物质价格在超过 ${formatPostBreak(Number.MAX_VALUE, 2)} 后开始更快地上涨。升级<i>之间</i>的价格在超过 ${formatPostBreak(Number.MAX_VALUE, 2)} 后，<i>每级</i>上涨 ${formatX(10)}，计数频率升级的价格也有类似的缩放。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["limit", "crunch", "upgrades", "midgame"],
      tab: "infinity/break"
    }, {
      name: "Infinity Dimensions",
      alias: "无限维度",
      info: () => `
<b>解锁无限维度：</b>无限维度通过达到一定数量的反物质解锁。
<br>
<br>
<b>购买无限维度：</b>无限维度只能以 ${formatInt(10)} 个为一组购买，花费无限点数。每次购买都会提供永久倍率，与其他维度类似。实际应用的倍率取决于你购买的无限维度。
<br>
<br>
<b>无限维度产出：</b>与反物质维度一样，每个无限维度产出下一个更高等级的无限维度。
<br>
<br>
每次大爆炸时，你产出的无限维度会重置为你购买的数量。虽然无限维度的产出不会跨大爆炸保留，但你通过购买获得的所有倍率都会保留。
<br>
<br>
<b>无限维度解锁阈值（反物质）：</b>${Array.range(1, 8)
    .map(tier => formatPostBreak(InfinityDimension(tier)._unlockRequirement))
    .join(", ")}
<br>
<b>无限维度购买倍率：</b>${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._powerMultiplier))
    .join(", ")}
<br>
<b>无限维度基础价格（无限点数）：</b>${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>无限维度价格上涨：</b>${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
第一无限维度不产生反物质，而是产生无限力量，它提供对所有反物质维度的倍率，等于（力量<sup>${formatInt(7)}</sup>）。无限维度不受计数频率升级影响。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["id", "power", "new", "dims", "unlock", "break", "midgame"],
      tab: "dimensions/infinity"
    }, {
      name: "Infinity Challenges",
      alias: "无限挑战",
      // This one could use some work!
      info: () => `
无限挑战与普通挑战类似，但目标更高，通常更难。它们不只是解锁自动购买器，还会以更独特的方式提升你的各种产出。与普通挑战类似，无限升级最右侧一列在无限挑战中会被禁用。
<br>
<br>
与一次全部解锁的普通挑战不同，无限挑战要求你先达到一定数量的反物质才能尝试。
<br>
<br>
<b>无限挑战解锁阈值：</b>${GameDatabase.challenges.infinity
    .map(ic => formatPostBreak(ic.unlockAM)).join(", ")}
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["rewards", "break", "ic", "midgame"],
      tab: "challenges/infinity"
    }, {
      name: "Replicanti",
      alias: "复制器",
      info: () => `
复制器是你在 ${format(DC.E140)} 无限点数时解锁的另一种资源。复制器不是产出其他东西，而是产出<i>自身</i>，最多达到 ${formatPostBreak(Number.MAX_VALUE, 2)}。复制器按自己的速度产出，不受计数频率升级影响。每个复制器在每个复制器 tick（最初每秒一次）有特定概率（最初为 ${formatPercents(0.01)}）产生另一个复制器，这两者都可以通过花费无限点数升级。
<br>
<br>
如果你购买了复制器星系升级，你可以通过将复制器数量重置为 ${formatInt(1)} 来获得一个“免费”复制器星系。这个星系之所以免费，是因为它会像反物质星系一样生效，但不会让你的下一个反物质星系更贵。不过，它仍然会重置与反物质星系相同的内容。
<br>
<br>
<b>快捷键：R</b> 尝试购买复制器星系。
<br>
复制器为所有无限维度提供倍率，在 ${formatPostBreak(Number.MAX_VALUE, 2)} 个复制器时达到最大值 ${formatX(Math.pow(2, 20), 2, 2)}。
<br>
<br>
<b>概率升级价格：</b>基础 ${format(DC.E150)} 无限点数，每次价格增长 ${formatX(DC.E15)} 无限点数
<br>
<b>间隔升级价格：</b>基础 ${format(DC.E140)} 无限点数，每次价格增长 ${formatX(DC.E10)} 无限点数
<br>
<b>星系升级价格：</b>基础 ${format(DC.E170)} 无限点数，每次价格增长 ${formatX(DC.E25)} 无限点数，并且每次升级额外增加 ${formatX(1e5)} 无限点数，缩放方式与远方反物质星系类似。超过 ${formatInt(100)} 个复制器星系后，每次升级的 ${formatX(1e5)} 会变为 ${formatX(DC.E55)}。超过 ${formatInt(1000)} 个后，缩放从二次变为三次，${formatX(DC.E55)} 倍率本身每次升级增加 ${formatX(DC.E5)}。
`,
      isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
      tags: ["interval", "chance", "infinity", "galaxy", "galaxies", "midgame"],
      tab: "infinity/replicanti"
    }, {
      name: "Eternity",
      alias: "永恒",
      info: () => `
达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数后，你可以进行永恒。永恒会重置此之前的所有内容，但挑战时间、成就以及统计页常规部分下的内容除外。第一次永恒后你将能够访问更多内容。
<br>
<br>
与第一次达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质时不同，你可以超过 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数而不被强制做任何事。你在永恒前拥有的无限点数越多，获得的永恒点数就越多。完成一次永恒还会获得 1 次“永恒”。
<br>
<br>
永恒点数获得与无限点数获得类似，但基于无限点数而非反物质。在 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数时获得的基础永恒点数为约 ${format(1.62, 2, 2)}，每多一个 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数因子乘以 ${formatInt(5)}。这始终向下取整，这意味着你在 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数时获得 ${formatInt(1)} 永恒点数，但要到 ${formatPostBreak(DC.E349)} 才能达到 ${formatInt(2)} 永恒点数。
<br>
<br>
<b>快捷键：E</b> 尝试进行永恒重置。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternal", "ep", "reset", "prestige", "midgame"],
      tab: "eternity/upgrades"
    }, {
      name: "Eternity Milestones",
      alias: "永恒里程碑",
      info: () => `
为了让永恒更快、更方便，随着你获得更多“永恒”次数，你将解锁各种增益。这些增益通常让你以某些永恒后会丢失的升级开始，为你提供新的自动购买器以实现更好的自动化，或以降低的速率让你离线被动获得资源。
<br>
<br>
给予升级的里程碑会在开始永恒时自动购买并将其升级到最大，实际上让你永久拥有它们。
<br>
<br>
所有新的自动购买器在其各自的手动按钮旁都会有开关（例如，无限维度自动购买器可以在无限维度标签页找到），同时在自动购买器标签页也有对应条目。
维度提升、反物质星系和大爆炸自动购买器的改进会更新它们在自动购买器标签页上已有的条目。
<br>
<br>
被动生成里程碑按设计只在离线时工作，可能需要某些自动购买器设置才能正常工作，如里程碑页面本身所述。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternities", "rewards", "automation", "midgame"],
      tab: "eternity/milestones"
    }, {
      name: "Time Dimensions",
      alias: "时间维度",
      info: () => `
第一次永恒后，你解锁时间维度。你用永恒点数购买它们，它们产生时间碎片，提供计数频率升级。这些计数频率升级与普通计数频率升级功能相同，但不会提高价格。时间维度、时间碎片以及它们提供的计数频率升级会在无限时保留，但每次永恒都会重置。
<br>
<br>
与其他维度类似，第二时间维度产出第一时间维度，依此类推。与无限维度类似，你的产出会在每次永恒后重置为购买的数量，但购买的倍率升级会保留。
<br>
<br>
每次购买都会将该特定时间维度的倍率提高 ${formatX(4)}。升级之间的价格倍率有一个基础值，但在 ${format(TimeDimension(1)._costIncreaseThresholds[0], 2)} 永恒点数时提高为 ${formatX(1.5, 1, 1)}，在 ${format(TimeDimension(1)._costIncreaseThresholds[1])} 永恒点数时提高为 ${formatX(2.2, 1, 1)}（基于基础值）。这些提升会追溯生效，导致价格在达到这些阈值时跳升，并且只适用于前四个维度。超过 ${format(TimeDimension(1)._costIncreaseThresholds[2])} 永恒点数后，每次购买维度在价格提升方面算作四次购买，导致价格上涨得更加陡峭。
<br>
<b>时间维度基础价格（永恒点数）：</b>${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>时间维度基础价格上涨：</b>${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
每获得一次额外计数频率升级的阈值，所需的时间碎片比上一次多 ${formatPercents(0.33)}，有相关时间研究时为 ${formatPercents(0.25)}。在 ${formatInt(FreeTickspeed.softcap)} 次升级后，每连续 ${formatInt(50000)} 次免费计数频率升级之间的倍率会逐渐增加约 ${formatX(1.35, 0, 2)}（每次升级 ${formatX(1.000006, 0, 6)}）。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["dims", "td", "shards", "eternity", "midgame"],
      tab: "dimensions/time"
    }, {
      name: "Time Studies",
      alias: "时间研究",
      info: () => `
时间研究是永恒后的强力升级，花费一种叫做时间之理的新资源。时间研究可以提升你到目前为止在游戏中见过的任何内容的产出，甚至改变某些公式的工作方式。
<br>
<br>
时间之理是一种有限资源，每购买一个价格都会上涨。它们可以用反物质、无限点数或永恒点数购买。价格每次购买都会按固定因子上涨。时间之理不会在永恒时重置。
<br>
<br>
研究以树状结构排列，必须购买前置研究才能继续。一开始你只能购买最顶部的研究，然后可以从那里购买其正下方任何负担得起的研究。不过有三个例外：
<br>
研究之间的连线有颜色时，你一次只能选择三条路径中的一条。
<br>
当永恒挑战的研究挡在路上时，你需要至少完成一次与其相连的所有挑战才能访问该研究。你不需要购买挑战研究才能访问它。
<br>
靠近底部，所有边缘再次汇合的地方，你只能从每一对中选择一个研究。
<br>
<br>
你可以按住 shift 然后点击时间研究，购买直到该点的所有研究。如果你在需要在两个或多个无法同时获得的选项之间做出选择的位置（见上文）按住 shift 点击，或者负担不起到达该点所需的所有研究，这可能不会购买你想要的研究。Shift 点击会贪婪地购买研究，在向下移动之前每行尽可能多地购买。
<br>
<br>
<b>预设：</b>最初标记为 1 到 6 的按钮允许你将当前的研究组合保存到槽位中，让你只需一次点击就能快速再次购买该特定组合。你可以悬停在按钮上并使用提示加载/保存槽位，或点击加载、按住 shift 点击保存。这些预设可以重命名，但不允许给多个预设起相同的名称。
<br>
<br>
<b>导入研究树/编辑预设：</b>编辑预设或导入时间研究树时，窗口会显示加载时会购买哪些时间研究，以及任何错误。
对于分叉路径，你可以使用名称作为研究集合的简写。
例如，你可以用“antimatter”代替“71, 81, 91, 101”来表示完全购买反物质分叉。此外，如果时间研究字符串包含有效的永恒挑战，在字符串末尾添加“!”会让游戏在使用时尝试立即解锁并进入该永恒挑战。
<br>
<br>
<b>偏好：</b>点击齿轮图标会打开一个对话框，让你选择三向分支中的“默认”路径。选择默认路径会改变上面提到的 shift 点击行为，使其尝试购买你偏好的路径并继续，而不是在分叉处完全停止。如果你购买了相关时间研究，你可以在该对话框中选择维度分叉的两条路径。
<br>
<br>
<b>重新分配：</b>重新分配允许你重置树中已购买的升级，以取回花费在其上的所有时间之理。可以免费进行，但只在完成一次永恒时触发；你不能在永恒中途重新分配时间研究。
<br>
<br>
<b>时间之理价格：</b>
<br>
<b>反物质：</b>初始 ${format(DC.E20000)}，每个定理 ${formatX(DC.E20000)}
<br>
<b>无限点数：</b>初始 ${formatInt(1)}，每个定理 ${formatX(DC.E100)}
<br>
<b>永恒点数：</b>初始 ${formatInt(1)}，每个定理 ${formatX(2)}
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternity", "ts", "theorems", "tree", "study", "midgame"],
      tab: "eternity/studies"
    }, {
      name: "Eternity Challenges",
      alias: "永恒挑战",
      info: () => `
永恒挑战是另一组挑战，通过时间研究树解锁。它们需要一定数量的时间之理，以及解锁挑战时必须满足的次要需求。
<br>
<br>
进入永恒挑战后，你的目标变成达到某个目标无限点数。完成挑战后，你不需要购买永恒挑战的研究，奖励也会生效。这些挑战的奖励与时间研究类似，但通常更强且永久，因为不需要花费时间之理就能拥有其效果。
<br>
<br>
你一次只能解锁一个永恒挑战。
<br>
<br>
每个永恒挑战最多可以完成五次。每次完成后，奖励会变强，但下一次完成的目标也会提高。此外，再次解锁挑战的次要需求也会提高。时间之理价格不会提高。
<br>
<br>
完成永恒挑战的次要需求会将其从研究需求中移除，直到你完成该特定永恒挑战，这意味着你只需要完成次要需求<i>一次</i>。
因此，你可以用一套研究解锁永恒挑战，然后重新分配为另一套研究来击败挑战。EC11 和 EC12 是此规则的例外：即使你重新分配时间研究，维度路径限制仍然存在。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["ec", "study", "time", "rewards", "completions", "midgame"],
      tab: "challenges/eternity"
    }, {
      name: "Time Dilation",
      alias: "时间膨胀",
      info: () => `
当你购买 EC11 和 EC12 研究下方用于解锁时间膨胀的时间研究时，时间膨胀即被解锁。
要购买此时间研究，你需要 ${formatInt(5000)} 个未花费的时间之理，且研究树能够到达该研究，总共拥有 ${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)} 个时间之理，并且 EC11 和 EC12 各完成五次。
<br>
<br>
膨胀时间会开始一次经过修改的永恒，称为时间膨胀，其中你所有的反物质/无限/时间维度倍率的<i>指数</i>和计数频率倍率的<i>指数</i>都会被提高到 ${formatPow(0.75, 2, 2)}，从而大幅降低。如果你能达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数来完成这次膨胀永恒，你将获得一种叫做快子粒子的新资源。
<br>
<br>
你可以随意进行多次膨胀，但快子粒子不能像其他资源一样“刷取”。快子粒子永远不会减少，只会增加，并且会根据你的快子粒子倍率和本次膨胀中获得的物质提升到上限。因此，除非你获得了快子粒子倍率，或能在膨胀中大幅提升你的物质，否则通常无法增加快子粒子。
<br>
<br>
快子粒子会生成另一种叫做膨胀时间的货币。膨胀时间通过达到阈值转化为快子星系，方式与时间维度获得的计数频率升级类似。这些快子星系与复制器星系一样，像反物质星系一样影响计数频率，但不会提高你下一个反物质星系的价格。
<br>
<br>
解锁时间膨胀还会解锁可以用膨胀时间购买的升级。膨胀升级第一行的第一个和第三个升级可以重复购买，直到你负担不起为止。第二个升级也可以重复购买，但最终会达到上限。
`,
      isUnlocked: () => DilationTimeStudyState.studies[1].isBought || PlayerProgress.realityUnlocked(),
      tags: ["dial", "dt", "dilated", "tachyon", "particle", "study", "free", "galaxy", "galaxies", "midgame"],
      tab: "eternity/dilation"
    }, {
      name: "Reality",
      alias: "现实",
      info: () => `
当你达到 ${formatPostBreak(DC.E4000)} 永恒点数并完成前 ${formatInt(13)} 行成就后，你将能够购买解锁现实的时间研究。
解锁它会打开一个新标签页，你可以在其中找到创造新现实的按钮。开始新的现实会重置几乎整个游戏直到这一点，但作为交换会给你一种叫做现实机器的新货币、一个符文和一个福利点。
<br>
<br>
与此前的其他重置不同，你还会失去前 ${formatInt(13)} 行成就，也就是所有现实前的成就及其所有相关奖励。不过，你仍会保留统计页常规标题下的所有数值以及所有最佳挑战时间。
<br>
<br>
完成第一次现实后，符文标签页会包含一个按钮，让你在不改变即将出现的符文选择的情况下重新开始当前现实。<b>注意，这不会给你任何奖励，即使你本来能够正常完成现实。</b>
<br>
<br>
你需要重新完成每个成就的需求才能再次获得其奖励，但你也会每 ${timeDisplayNoDecimals(30 * 60000)} 被动解锁下一个未完成的成就，即使你并不满足需求。这种自动完成可以禁用，禁用后计时器会倒数到零并暂停，取消暂停时立即完成另一个成就。计时器在离线时仍以相同速度推进。
<br>
<br>
现实机器可以在现实标签页中用于购买各种升级，是此后你的主要货币。符文是可装备的物品，必须装备才能使用其加成。福利点是另一种货币，可以在复兴树子标签中花费在各种福利上。
<br>
<br>
现实机器完全基于永恒点数缩放，现实按钮会告诉你需要多少永恒点数才能获得下一个。前 ${formatInt(10)} 台现实机器在 ${formatPostBreak(DC.E4000)} 永恒点数和 ${formatPostBreak(DC.C10P16000D3)} 永恒点数之间按指数线性缩放，之后
现实机器 = ${formatInt(1000)}<sup>log<sub>${formatInt(10)}</sub>(EP)/${formatInt(4000)}-${formatInt(1)}</sup>。在超过 ${formatPostBreak(DC.C10P16000D3)} 永恒点数后，此公式比线性缩放获得更多现实机器。
<br>
<br>
符文等级基于永恒点数、复制体和膨胀时间的组合缩放，最低等级为 ${formatInt(1)}。符文的类型、效果和稀有度是随机的。
<br>
<br>
你每次现实恰好获得 ${formatInt(1)} 个福利点。
<br>
<br>
<b>快捷键：Y</b> 尝试进行现实重置。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["rm", "machines", "glyph", "perk", "reset", "prestige", "endgame", "lategame"],
      tab: "reality/upgrades"
    }, {
      name: "Glyphs",
      alias: "符文",
      info: () => `
符文是一种可装备的物品，有四个属性：
<br>
<b>类型</b>：根据符文倾向于提升游戏的哪个部分命名（例如“X 之符文”）。这决定了它可能拥有的效果。
<br>
<b>等级</b>：影响符文的强度，基于你获得它的那次现实中获得的各类资源数量缩放。
<br>
<b>稀有度</b>：是一个介于 ${formatPercents(0)} 和 ${formatPercents(1)} 之间的百分比，也会影响符文强度。这是随机的，但可以通过各种升级影响。
百分比实际上是一种质量评级，数值越高越好。特定范围的稀有度有名称，例如普通或罕见。
<br>
<b>效果</b>：装备符文带给你的加成，最多可以包含四个效果。
等级或稀有度较高的符文通常比弱符文拥有更多效果。
<br>
<b>注意：你的第一个符文拥有固定效果和稀有度，但其等级会根据你在任何现实内容之前的进度缩放。一旦你获得符文，其属性就无法更改。</b>
<br>
<br>
要装备符文，双击或从背包中将图标拖到屏幕中间的活动圆圈之一。装备后，符文图标变为圆形，并将其效果添加到右侧的列表中。
<br>
<br>
装备多个具有相同效果的符文会组合其效果；带“+”的效果通常将数值相加，带“×”的效果通常将数值相乘。
<br>
<br>
你可以在现实期间的任何时候将符文装备到<i>空</i>活动槽位中，新符文的效果会立即生效。你也可以将符文拖到已占用的槽位来切换已装备的符文，但这会重新开始你当前的现实。
<br>
<br>
背包前几行的槽位是“受保护”槽位。新符文永远不会被放入其中（即使背包没有更多空间），它们也不受排序和自动清除按钮的影响。如果背包没有空间容纳新符文，你将获得的任何符文都会被自动删除（如果已解锁则为献祭）。
<br>
<br>
你可以通过按住 shift 点击符文从背包中删除它，游戏会弹出确认对话框询问你是否确定要删除。同时按住 shift 和 ctrl 点击可以跳过此对话框。<b>但是，如果你在通过现实升级解锁符文献祭之前删除符文，除了清理背包空间外不会有任何好处！</b>
<br>
<br>
一旦你解锁符文献祭，你就可以禁用符文选择窗口的出现。如果需要，你可以通过按住 shift 点击现实按钮强制此窗口在此现实再次出现（忽略此设置）。禁用选择窗口完成现实会从你的选项中随机选择一个符文。
<br>
<br>
在模态窗口外点击一组圆形符文会打开一个窗口，显示所有这些符文及其各种属性的详细摘要。摘要会同时显示所有符文的信息，并使用稍短的描述，更适合与他人分享。这可以用于统计页中的符文记录、你装备的符文以及本次现实的即将到来符文选择。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["reality", "sacrifice", "level", "endgame", "lategame"],
      tab: "reality/glyphs"
    }, {
      name: "Perks",
      alias: "复兴树",
      info: () => `
福利是一种在现实时解锁的升级类型。每个福利的效果各不相同，但大多数是生活品质（QoL）改进，你可以选择自己的路径。所有福利只需要 ${formatInt(1)} 个福利点购买。
<br>
<br>
每次现实你获得 ${formatInt(1)} 个福利点，可以花费在树上的升级上，从“你现在可以在现实时从 ${formatInt(Perk.firstPerk.config.effect)} 个符文中选择”开始。你只能解锁与已拥有福利直接相邻的福利，不过树中有可以双向穿过的环。
<br>
<br>
福利节点有两种不同的形状：圆形或菱形。两者唯一的区别是菱形福利除了正常效果外还会提供自动机点数。不同节点也有不同颜色，大致表示它们主要影响游戏的哪个部分。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["pp", "reality", "tree", "endgame", "lategame"],
      tab: "reality/perks"
    }, {
      name: "Automator Overview",
      alias: "自动机概述",
      info: () => `
自动机在达到总计 ${formatInt(AutomatorPoints.pointsForAutomator)} 点自动机点数后解锁。
自动机点数在解锁各种福利或现实升级、解锁黑洞或完成更多现实时获得。
<br>
<br>
自动机使用一种脚本语言，允许你自动化几乎整个游戏。
界面有两个窗格：左侧是脚本窗格，用于输入自动化游戏的命令；右侧是文档窗格，包含多个面板，功能各异，如自动机介绍页所述。
<br>
<br>
如果你想要更大的工作空间，可以按自动机文档窗格右上角的按钮将其展开为全屏。你也可以水平拖动窗格之间的边界来调整窗格大小，为编写脚本或阅读文档留出更多空间。
<br>
<br>
按脚本窗格右上角的按钮，可以在自动机的积木和文本编辑器模式之间切换；如果你不熟悉编程，积木模式可能更容易上手。要在积木模式中输入命令，选择右侧的命令积木面板，将相关命令的方框拖到脚本窗格中并放到命令应处的位置。如果需要，可以通过拖动积木自由重新排列命令。在积木和文本模式之间切换也会尝试自动翻译你的脚本，但如果脚本包含错误，转换后的部分脚本可能会丢失。
<br>
<br>
与整个存档一样，单个自动机脚本可以从游戏导入和导出。
格式正确的脚本字符串以 <b>${GameSaveSerializer.startingString["automator script"]}</b> 开头，以 <b>${GameSaveSerializer.endingString["automator script"]}</b> 结尾。如果不是这样，说明复制粘贴过程中丢失了部分脚本。导入功能会将脚本加载到新槽位；你当前的脚本不会丢失或被覆盖。
<br>
<br>
<b>快捷键：U</b> 暂停/恢复自动机。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "endgame", "lategame"],
      tab: "automation/automator"
    }, {
      name: "Automator Technical Details",
      alias: "自动机技术细节",
      info: () => `
<b>技术限制</b>
<br>
<br>
为了减少卡顿并防止存档文件过大，脚本有一些限制。这些限制如下：
<br>
- 单个脚本最多为 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_CHARACTERS)} 个字符，所有脚本合计不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_TOTAL_CHARACTERS)} 个字符。
<br>
- 脚本名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_NAME_LENGTH)} 个字符。
<br>
- 已定义的常量名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_NAME_LENGTH)} 个字符，值不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_VALUE_LENGTH)} 个字符。
<br>
- 你总共不能拥有超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_COUNT)} 个脚本或 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_COUNT)} 个已定义常量。
<br>
<br>
<b>脚本保存</b>
<br>
<br>
脚本会在你编辑时自动保存，但在全局自动保存计时器（即“距上次保存时间”）触发完整游戏保存之前，不会保存到你的游戏存档中。如果你在关闭游戏前刚刚修改了脚本，应该等待游戏随后保存，以免丢失更改。在超过长度限制时对脚本所做的任何编辑都不会保存，直到你将脚本缩短到限制以下。
<br>
<br>
<b>自动机 tick</b>
<br>
<br>
自动机的“执行计时器”基于真实时间，因此不受黑洞、时间符文效果和 EC12 的负面效果等因素影响。不过此执行计时器与主游戏产出循环完全独立运行，意味着在更快的速度下，自动机可以在每个产出 tick 中执行多条命令。
<br>
<br>
某些命令对游戏内部代码的压力较大，在较慢的电脑上处理可能需要超过一个自动机 tick。在这种情况下，自动机将执行这些命令，然后尝试“追赶”，尽快执行后续命令，直到按恒定执行速度运行了应有的命令数量。
<br>
<br>
<b>与离线进度的交互</b>
<br>
<br>
离线进度模拟期间更长的产出 tick 意味着你的所有资源实际上是分大块给予的，而不是更连续地给予。这可能会对你的脚本在离线时的行为产生潜在不利影响，具体取决于你的脚本对游戏状态的依赖方式。
此外，PAUSE 命令可能表现异常，因为它也基于真实时间。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "endgame", "lategame"],
      tab: "automation/automator"
    }, {
      name: "Black Hole",
      alias: "黑洞",
      info: () => `
黑洞是一个按周期性循环加速游戏运行速度的功能。
游戏会以正常速度运行一段时间，然后短暂爆发极速运行，之后恢复正常速度并重复循环。
<br>
<br>
黑洞带来的游戏速度提升比计数频率强得多，因为与计数频率不同，它<i>同等影响所有内容</i>，包括只受计数频率部分影响的事物（例如无限/时间维度）、通常完全不受影响的事物（例如膨胀时间/时间之理生成），以及纯粹基于所花时间提升的效果（例如挂机路径的无限点数/永恒点数倍率）。
<br>
<br>
虽然游戏中的大多数功能都会因这种游戏速度提升而受益，但也有一些保持不变。在这些情况下，会特别注明某个时间是<i>真实时间</i>而不是<i>游戏时间</i>。其中一个例子是自动完成永恒挑战的福利。否则，从此处起应假设所有提及的时间都是<i>游戏时间</i>。
请注意，这也包括你可能希望<i>减少</i>所花时间的情况，例如现实升级“复制迅捷”。
<br>
<br>
你可以使用现实机器购买黑洞升级。黑洞有三个升级：
<br>
<b>间隔</b>：黑洞在爆发之间不活动的时间，每次升级减少 ${formatPercents(0.2)}。
<br>
<b>力量</b>：临时速度爆发期间游戏运行速度的提升，每次升级增加 ${formatPercents(0.35)}。
<br>
<b>持续时间</b>：每次速度爆发在恢复正常速度前持续的时间，每次升级增加 ${formatPercents(0.3)}。
<br>
<br>
解锁黑洞后经过 ${formatInt(100)} 天<i>游戏时间</i>，你解锁购买允许拥有第二个黑洞的现实升级的能力。
第二个黑洞的计时器只在第一个黑洞激活时前进。例如，如果第一个黑洞的持续时间为 ${formatInt(4)} 分钟，第二个的间隔为 ${formatInt(8)} 分钟，那么无论第一个黑洞的间隔多短，第二个黑洞都只会每两个第一黑洞循环激活一次。注意，游戏顶部显示的计时器已考虑这一点，显示直到第二个黑洞激活的真实时间；在黑洞标签页中，你可以看到第二个黑洞激活所需的第一黑洞激活时间。
<br>
<br>
当黑洞至少 ${formatPercents(0.9999, 2)} 的时间处于激活状态时，它会永久激活。
两个黑洞分别跟踪此状态。
<br>
<br>
离线时，黑洞循环仍会正常推进，其激活速度加成会像游戏仍打开一样完全生效。离线时间会用不同 tick 长度模拟非激活和激活黑洞的片段，以减少激活期间小 tick 数量的负面影响；“离线进度”条目已更新了更多技术细节。
<br>
<br>
黑洞可以暂停，完全停止其间隔/持续时间循环。不过，取消暂停时，它们需要 ${BlackHoles.ACCELERATION_TIME} 真实秒才能从不活动达到最大加速速度。
这段加速时间仍会像全速运行一样推进循环；因此，虽然暂停提供了一些控制，但最终也会损失一些加速时间。
<br>
<br>
暂停和取消暂停会影响两个黑洞；它们不能独立暂停或取消暂停。你可以在黑洞标签页切换相关设置，在激活前 ${BlackHoles.ACCELERATION_TIME} 真实秒自动暂停。
<br>
<br>
<b>升级价格信息：</b>
<br>
<b>间隔</b>：基础价格 ${formatInt(15)} 台现实机器，每次升级增加 ${formatX(3.5, 0, 1)}。
<br>
<b>力量</b>：基础价格 ${formatInt(20)} 台现实机器，每次升级增加 ${formatX(2)}。
<br>
<b>持续时间</b>：基础价格 ${formatInt(10)} 台现实机器，每次升级增加 ${formatX(4)}。
<br>
<b>提高的价格缩放：</b>超过 ${format(1e30)} 台现实机器后，购买之间的价格倍率每次升级增加 +${format(0.2, 0, 1)}。超过 ${format(Number.MAX_VALUE, 1)} 台现实机器后，会出现忽略之前所有行为的新缩放。从此处起，所有升级都表现得像初始价格为 ${format(DC.E310)}，后续升级价格按 ${format(1e6)}、${format(1e7)} 等增加（升级之间 ${formatX(10)}）。
<br>
<b>黑洞 2：</b>所有升级的初始价格比第一个黑洞高 ${formatX(1000)}，但价格倍率相同。
<br>
<br>
<b>快捷键：B</b> 暂停/取消暂停黑洞。
`,
      isUnlocked: () => player.blackHole[0].unlocked,
      tags: ["reality", "time", "speed", "duration", "interval", "rm", "endgame", "lategame"],
      tab: "reality/hole"
    }, {
      name: "Celestials",
      alias: "天神",
      info: () => `
当你获得所有现实升级后，第一个天体被解锁。这会在现实标签页旁边打开一个新的天神标签页。天神标签页下的第一个子标签显示一张名为“天体导航”的地图，会随着你的游戏进度更新。首次解锁时只能看到地图的一部分，但随着你接近新内容，它会逐渐显现，通常会有视觉指示显示你距离下一步的进度。
<br>
<br>
每个天体都有独特的机制和升级，你需要击败全部七个才能通关游戏。
解锁或击败天体的条件因天体机制而异。
<br>
<br>
所有天体都有自己的天体现实，但现实与每个天体以及游戏其余部分的关系取决于该天体。
<br>
<br>
天体是永恒的存在。除非另有说明，天体引入的任何新机制都不受游戏速度倍率影响，而是特指真实时间而非游戏时间。
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["reality", "challenges", "endgame", "lategame"],
      tab: "celestials/celestial-navigation"
    }, {
      name: "Teresa, Celestial of Reality",
      alias: "Teresa",
      info: () => `
Teresa 是第一个天体。她通过成就 147 解锁，该成就要求获得所有现实升级。
<br>
<br>
在主屏幕上，有一个进度条，其上方有一个写着“注入 RM”的按钮。这允许你将现实机器放入容器中以获得现实机器倍率。已注入容器的现实机器无法取回。
当你达到容器内 ${format(TeresaUnlocks.run.price)} 台现实机器时，解锁 Teresa 的现实。
<br>
<br>
当你完成 Teresa 的现实时，
${Teresa.runCompleted
    ? "你的符文献祭会根据该次现实获得的物质数量获得倍率"
    : "<div style='color: var(--color-bad);'>（完成 Teresa 的现实以查看奖励）</div>"}。
完成 Teresa 的现实只是故事的一部分；你需要继续注入现实机器才能推进。当容器内达到 ${format(TeresaUnlocks.effarig.price)} 台现实机器时，你将解锁下一个天体。
<br>
<br>
${Teresa.runCompleted
    ? "Teresa 的现实完成后可以再次进入，如果你在这次重复中达到更高的物质数量，其奖励会变得更强。"
    : "（更多信息可用，完成 Teresa 的现实）"}
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["rm", "endgame", "lategame", "perks", "sacrifice", "boo", "ghost", "celestial"],
      tab: "celestials/teresa"
    }, {
      name: "Effarig, Celestial of Ancient Relics",
      alias: "Effarig",
      info: () => `
Effarig 是你遇到的第二个天体。
她通过向 Teresa 的容器中注入至少 ${format(TeresaUnlocks.effarig.price)} 台现实机器解锁。
<br>
<br>
Effarig 引入了一种叫做遗物碎片的货币，通过在现实中利用不同类型的符文效果获得。现实中生效的不同效果数量会强烈影响遗物碎片获得，而永恒点数的影响程度小得多。遗物碎片是 Effarig 解锁的货币，从此以后每次现实都会获得。
<br>
<br>
使用遗物碎片，你可以购买多个升级（参见“高级符文机制”），这些升级会改进你的符文，并允许你在进行全自动现实时根据其效果和稀有度筛选符文。
<br>
<br>
Effarig 的最终解锁是她自己的现实，价格为 ${format(GameDatabase.celestials.effarig.unlocks.run.cost)} 块遗物碎片。
${EffarigUnlock.run.isUnlocked
    ? "她的现实分为三层：无限、永恒和现实。你必须完成每一层才能进入下一层。完成 Effarig 的永恒会解锁下一个天体。"
    : "<div style='color: var(--color-effarig--base);'>（解锁 Effarig 的现实以查看其详细信息）</div>"
}
<br>
<br>
完成 Effarig 的现实会解锁
${EffarigUnlock.reality.isUnlocked
    ? `一种新的符文类型，<span style='color: var(--color-effarig--base);'>Effarig</span> 符文。Effarig 符文有 ${formatInt(7)} 种不同的可能效果，你可以在符文筛选设置中查看。你一次只能装备一个 Effarig 符文。
${Ra.unlocks.glyphEffectCount.canBeApplied
    ? `由于 Ra 中的 Effarig 达到等级 10，Effarig 符文上出现的效果不再有任何限制。任何给定的 Effarig 符文现在可以同时拥有全部 ${formatInt(7)} 种效果。`
    : `Effarig 符文最多只能有 ${formatInt(4)} 种效果，并且 RM 倍率和符文不稳定效果不能同时出现在同一个符文上。`}`
    : "<span style='color: var(--color-effarig--base);'>（完成 Effarig 的现实以查看奖励细节）</span>"}
<br>
<br>
`,
      isUnlocked: () => TeresaUnlocks.effarig.canBeApplied,
      tags: ["glyph", "sacrifice", "shards", "reality", "spectralflame", "lategame", "endgame", "celestial"],
      tab: "celestials/effarig"
    }, {
      name: "Advanced Glyph Mechanics",
      alias: "高级符文机制",
      info: () => `
符文等级调整可以花费 ${format(GameDatabase.celestials.effarig.unlocks.adjuster.cost)} 块遗物碎片购买。这允许你为每种资源（永恒点数、膨胀时间、复制器、永恒次数）设置权重，决定它们对现实获得的符文等级的影响程度。
<br>
<br>
自动符文筛选可以花费 ${format(GameDatabase.celestials.effarig.unlocks.glyphFilter.cost)} 块遗物碎片购买。该系统使用多种方法之一为你的符文选项打分，然后选择得分最高的选项。选择此符文后，它会将分数与阈值进行比较，如果分数高于阈值则保留，否则将其献祭。有三种基本模式：
<br>
<b>最低总献祭：</b>符文根据你拥有的该符文类型的献祭价值获得分数。你献祭价值最低的类型的符文得分最高。
此模式没有阈值，总是献祭你的符文。
<br>
<b>效果数量：</b>符文获得的分数等于其效果数量，当多个符文效果数量相同时，稀有度更高的符文会被选中。比较阈值由你在文本框中的输入指定。
<br>
<b>稀有度阈值模式：</b>符文获得的分数等于其稀有度百分比。比较阈值可以按符文类型单独设置。
<br>
<br>
此外，还有两种具有额外灵活性的高级模式。你最初可能不需要它们，但之后会派上用场：
<br>
<b>指定效果模式：</b>符文获得的分数等于其稀有度，并与你指定的稀有度阈值比较，但此分数会根据你对效果的输入进行修改。符文会被检查是否具有最少效果数量并包含你选择的所有效果，每个缺失效果会使分数降低 ${formatInt(200)}。这保证任何没有你想要效果的符文都会低于阈值。你可以通过设置不可能的条件来禁止特定的符文<i>类型</i>（例如，力量符文至少 ${formatInt(6)} 个效果会阻止力量符文被选中）。
<br>
<b>效果分数模式：</b>符文分数由其稀有度加上其每个效果的分数计算得出，你可以单独设置阈值和每个效果的数值。一些可能的用法：
<br>
- 给较弱的效果 ${formatInt(5)} 分，可以让你保留没有该效果的符文，只要它们更稀有来弥补较弱
<br>
- 给你<i>不</i>想要的某个效果分配较大的负分数，可以禁止带该效果的符文被选中；这对效果测试和其他更受限的情况很有用
<br>
- 设置不可能的条件（例如阈值分数 ${formatInt(999)} 且所有效果为 ${formatInt(0)} 分）可以像指定效果模式一样禁止整个类型
<br>
<br>
符文筛选模式是全局设置，一次适用于所有符文类型；例如，你不能用“稀有度阈值”筛选力量符文，同时用“指定效果”筛选时间符文。选择一种模式后，你需要在其设置中配置每种符文类型才能正确筛选。每种筛选模式都有自己的设置，切换到其他模式时会保留。
<br>
<br>
解锁符文筛选还允许你将即将到来的选择中的最高符文分数用作自动机中的可比货币。此外，你可以让筛选在即将到来的选择都不会被保留时强制立即进行现实（一旦可用），只要现实自动购买器开启。
<br>
<br>
符文预设可以花费 ${format(GameDatabase.celestials.effarig.unlocks.setSaves.cost)} 块遗物碎片购买。这会解锁 ${formatInt(7)} 个槽位，允许你将当前装备的符文保存为套装。
你不能覆盖套装，必须先删除。加载套装时，会找到套装中的每个符文并装备。如果有任何符文找不到，会显示警告，但仍会装备其余所有符文。
加载套装时，你可以按等级和/或稀有度匹配。可能的符文中最好的符文总是会被装备。与其他圆形符文组一样，你可以点击其中任意一个，打开一个汇总整个符文组的窗口。
`,
      isUnlocked: () => EffarigUnlock.adjuster.isUnlocked,
      tags: ["glyph", "weight", "adjustment", "sacrifice", "filter", "threshold", "set", "save", "reality", "lategame",
        "endgame"],
      tab: "celestials/glyphfilter"
    }, {
      name: "The Nameless Ones, Celestial of Time",
      alias: "Nameless Ones",
      info: () => `
The Nameless Ones 是第三个天体，通过完成 Effarig 的永恒解锁。
<br>
<br>
解锁 The Nameless Ones 后，你立即获得两种与时间相关的新机制。你可以通过为黑洞充能来存储“游戏时间”，也可以通过故意停止产出来存储“真实时间”。存储的游戏时间也用作购买 The Nameless Ones 解锁的货币。
<br>
<br>
为黑洞充能会给你存储的游戏时间，代价是将游戏速度设为 ${formatInt(1)}。游戏实际上是利用你的游戏速度提升来存储游戏时间本身。它的主要用途是释放黑洞，使用你存储的游戏时间向前跳过相当于所存储游戏时间的时长。这与普通游戏速度倍率不同，释放时不受任何游戏速度修正影响，只在存储时受影响。
<br>
<br>
存储真实时间会完全停止所有产出，实际上是暂停你的游戏。每经过一真实秒，你获得存储的真实时间（受某种效率因子修正）。你可以使用存储的真实时间在符文标签页中放大一次现实。完成现实时，会一次性使用你所有的存储真实时间，尝试反复重复该确切现实，给你重复本应获得的所有奖励。例如，如果你存储了 ${formatInt(50)} 分钟，并放大一个持续 ${formatInt(10)} 分钟、会给予 ${format(DC.E30)} 台现实机器和 ${format(DC.E12)} 块遗物碎片的现实，放大后的现实将给你 ${format(5e30)} 台现实机器、${format(5e12)} 块遗物碎片、${formatInt(5)} 个符文（取决于你的筛选设置）和 ${formatInt(5)} 个福利点。
<br>
<br>
但是，如果你的现实持续不到 ${formatInt(1)} 秒，放大因子受存储秒数限制。例如，如果你存储了 ${formatInt(1000)} 秒并放大一个持续 ${format(0.2, 2, 2)} 秒的现实，你会使用 ${formatInt(200)} 秒来模拟 ${formatInt(1000)} 次现实。
<br>
<br>
你可以切换一个设置，自动将离线时间存储为存储的真实时间。
<br>
<br>
她们的第一个解锁花费 ${format(TimeSpan.fromMilliseconds(ENSLAVED_UNLOCKS.FREE_TICKSPEED_SOFTCAP.price).totalYears)} 年存储游戏时间。它将时间维度获得的计数频率升级的软上限（其价格开始更快上涨的点）提高 ${format(1e5)} 次计数频率升级。
<br>
<br>
当存储游戏时间达到 ${format(TimeSpan.fromMilliseconds(ENSLAVED_UNLOCKS.RUN.price).totalYears)} 年时，你终于能够解锁她们的现实。完成 The Nameless Ones 的现实的奖励是
${Enslaved.isCompleted
    ? "解锁超立方体，它有自己的如何游玩条目。"
    : "<span style='color: var(--color-bad);'>（完成 The Nameless Ones 的现实以查看奖励细节）</span>"}
<br>
<br>
The Nameless Ones 不会直接解锁下一个天体。
`,
      isUnlocked: () => EffarigUnlock.eternity.isUnlocked,
      tags: ["reality", "time", "blackhole", "lategame", "endgame", "testers", "celestial",
        ...credits.people.map(p => p.name)
      ],
      tab: "celestials/enslaved"
    }, {
      name: "Tesseracts",
      alias: "超立方体",
      info: () => `
超立方体是完成 The Nameless Ones 的现实后解锁的新资源。
<br>
<br>
无限维度通常以 ${format(InfinityDimensions.HARDCAP_PURCHASES)} 次总购买为上限，这限制了它们的倍率能增长多大，因为最终你无法再升级它们。
超立方体允许你通过花费无限点数提高这个上限。
<br>
<br>
超立方体的价格呈超指数增长，但每个连续的超立方体都比上一个强得多，以弥补这一点。超立方体数量永远不会重置，这意味着一旦购买，在以后的现实中你不必再次达到无限点数价格就能利用提高后的上限。
<br>
<br>
你可以在无限维度标签页查看当前超立方体数量以及下一个价格的附加信息。此外，你当前的无限点数现在还会显示距离下一个超立方体的百分比。如果负担得起，无限按钮本身会视觉变化，点击后会带你到无限维度标签页。
`,
      isUnlocked: () => Enslaved.isCompleted,
      tags: ["reality", "lategame", "endgame", "tesseract", "id", "celestial"],
      tab: "celestials/tesseract"
    }, {
      name: "V, Celestial of Achievements",
      alias: "V",
      info: () => `
V 是一个特殊天体，她不是由另一个天体解锁，而是通过完成成就 151（第 ${formatInt(15)} 行，第 ${formatInt(1)} 列，“你真的不需要它”）解锁，这要求你在当前无限中不购买第八反物质维度的情况下获得 ${formatInt(800)} 个反物质星系。
<br>
<br>
子标签通过成就解锁后，你还会遇到一组完全解锁 V 的需求。
你必须已完成 ${formatInt(GameDatabase.celestials.v.mainUnlock.realities.requirement)} 次现实，并拥有 ${format(GameDatabase.celestials.v.mainUnlock.realityMachines.requirement)} 台未花费的现实机器。
此外，你需要在同一次现实中达到 ${format(GameDatabase.celestials.v.mainUnlock.eternities.requirement)} 次永恒、${format(GameDatabase.celestials.v.mainUnlock.infinities.requirement)} 次无限、${format(GameDatabase.celestials.v.mainUnlock.dilatedTime.requirement)} 膨胀时间和 ${format(GameDatabase.celestials.v.mainUnlock.replicanti.requirement)} 复制器。
<br>
<br>
当你满足所有这些需求后，你将能够进入 V 的现实。
${VUnlocks.vAchievementUnlock.isUnlocked
    ? `不过，完成现实本身只是开始。V 有六个不同的需求，每个都要求你在 V 的现实中取得一定进展。完成一个需求会奖励你一个 V 成就。
      V 成就是永久的，退出 V 的现实后仍然存在，并且不需要同时完成。
      <br>
      <br>
      完成需求后，V 成就阈值会提高，如果你能达到新目标，就可以再次完成。每个类别的 V 成就最多可以完成六次。
      已完成的 V 成就有两个作用：
      <br>
      - 达到一定的 V 成就总数后，你会自动在 V 标签页解锁升级，无需花费任何资源。
      <br>
      - 每个 V 成就还会给你一个空间之理。
      <br>
      <br>
      拥有 ${formatInt(2)} 个 V 成就解锁的目标缩减允许你通过花费福利点降低某些 V 成就需求的难度，最低到最简单层级的要求为止。
      缩减目标的费用不会随着使用而增加，也会降低未来层级的目标。
      <br>
      <br>
      空间之理允许你购买通常被禁止的时间研究，例如改进无限点数公式后的节奏分叉中的多个路径，或底部附近黑暗/光明对中的两个时间研究。
      与时间之理一样，每次重新分配研究时它们都会免费归还。
      拥有足够的空间之理，你最终可以一次购买每一个时间研究！
      <br>
      <br>
      达到 ${formatInt(36)} 个 V 成就（从而完成 V 的所有成就）会解锁下一个天体。`
    : "<span style='color: var(--color-bad);'>（解锁 V 的现实以查看更多细节）</span>"}
`,
      isUnlocked: () => Achievement(151).isUnlocked,
      tags: ["reality", "lategame", "endgame", "girlfriend", "challenges", "achievement", "space", "theorems",
        "study", "triad", "celestial"],
      tab: "celestials/v"
    }, {
      name: "Ra, Celestial of the Forgotten",
      alias: "Ra",
      info: () => `
Ra 是第五个天体，通过完全完成 V 的所有成就解锁。她利用自己的记忆，以更强的方式带回以前天体的正面效果。随着时间的推移，你将在 Ra <i>内部</i>解锁前四个天体，每个天体都会提供与其原始主题相关的额外升级。
<br>
<br>
Ra 内部的每个先前天体通过使用记忆获得等级，记忆由记忆块随时间被动生成。记忆块只能通过进入 Ra 的现实获得，但在现实内部，记忆块会根据特定资源总量被动生成。如果你正在存储真实时间，你不会在 Ra 的现实中获得任何记忆块，但记忆仍会正常生成。所有天体总计达到 ${formatInt(Ra.remembrance.requiredLevels)} 级会解锁 Remembrance，它允许你选择一个特定天体在 Ra 的现实中获得更多记忆块。
<br>
<br>
记忆可以花费在三个方面：提高记忆块获得、提高记忆获得，以及提升天体等级。你开始时 Ra 中只有 Teresa 解锁，每个后续天体通过上一个天体达到等级 ${formatInt(8)} 解锁。等级上限为 ${formatInt(25)}。
<br>
<br>
Teresa 解锁为无限升级充能的能力，使其更强。她还会在符文献祭价值达到一定阈值后改进你的符文效果。
<br>
<br>
在等级 ${formatInt(2)} 时，Effarig 解锁
${Ra.unlocks.effarigUnlock.canBeApplied
    ? "一种叫做符文炼金术的新机制，之后还会让 Effarig 符文更强，同时逐渐移除符文生成中几乎所有的随机元素。符文炼金术也有自己的如何游玩条目。"
    : "<span style='color: var(--color-bad);'>（在 Ra 中解锁 Effarig 以查看解锁细节）</span>"}
<br>
<br>
The Nameless Ones 解锁
${Ra.unlocks.enslavedUnlock.canBeApplied
    ? "与黑洞充能相关的额外机制，并使其显著更强。"
    : "<span style='color: var(--color-bad);'>（在 Ra 中解锁 The Nameless Ones 以查看解锁细节）</span>"}
<br>
<br>
V 解锁
${Ra.unlocks.vUnlock.canBeApplied
    ? "三元研究，这是研究树底部附近的新研究，花费空间之理。每个三元研究还要求你同时拥有附近的三个研究才能购买。她还会解锁一小套更难的 V 成就，以获取额外的空间之理。"
    : "<span style='color: var(--color-bad);'>（在 Ra 中解锁 V 以查看解锁细节）</span>"}
<br>
<br>
Ra 不会直接解锁下一个天体。`,
      isUnlocked: () => VUnlocks.raUnlock.isUnlocked,
      tags: ["reality", "memories", "razenpok", "levels", "glyphs", "lategame", "endgame",
        "effarig", "teresa", "nameless", "v", "celestial"],
      tab: "celestials/ra"
    }, {
      name: "Glyph Alchemy Resources",
      alias: "符文炼金资源",
      info: () => `
符文炼金术是通过在 Ra 中达到 Effarig 等级 ${formatInt(2)} 解锁的机制。它解锁了通过将符文精炼为与其类型相关的炼金资源来消耗符文的能力。你可以通过在符文标签页将献祭类型设置为“始终献祭”以外的选项，然后执行正常的献祭流程来精炼符文。
每个炼金资源都有独特的效果，你可以在炼金术标签页查看。
<br>
<br>
除了所有其他属性外，符文现在还有一个<i>精炼价值</i>，决定它值得多少其关联的炼金资源。该值基于符文等级的立方，并经过缩放，使等级 ${formatInt(10000)} 的符文对应 ${formatInt(10000)} 个炼金资源。不过，单个符文精炼时只提供此价值的 ${formatPercents(GlyphSacrificeHandler.glyphRefinementEfficiency)}。这些是 ${formatPercents(1)} 稀有度符文的值；较低稀有度的符文仍有相同的上限，但按比例提供更少的资源。例如，${formatPercents(0.5)} 稀有度的符文只提供一半。
<br>
<br>
炼金资源不能无限获得；每种资源都有一个上限，基于你精炼过的该类型所有符文的最高精炼价值。例如，如果你精炼过的最高等级时间符文是等级 ${formatInt(8000)}（精炼价值：${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))}），那么无论你精炼多少时间符文，在精炼另一个精炼价值更高的时间符文之前，你永远无法拥有超过 ${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))} 的时间资源。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      // Oh god I'm so sorry this is so many words
      tags: ["reality", "lategame", "endgame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction"],
      tab: "reality/alchemy"
    }, {
      name: "Glyph Alchemy Reactions",
      alias: "符文炼金反应",
      info: () => `
炼金资源可以按特定组合组合在一起，创造出新的复合资源，这些资源在特定 Effarig 等级解锁。资源每次现实组合一次，不受真实时间放大影响。反应在你的试剂数量更高时产出更高，因此发生得更快。复合资源的上限等于其所有试剂中最低的上限。反应要发生，所有试剂的当前数量必须大于产出资源的当前数量。
<br>
<br>
反应速度与反应可用试剂的数量成正比，但只有高于产物数量的试剂部分才有资格使用。例如，如果你拥有 ${formatInt(10000)} 的所有试剂和 ${formatInt(7500)} 的产物，只有 ${formatInt(2500)} 的试剂用于计算反应速度。
如果产物为 ${formatInt(0)}，则<i>所有</i>试剂都可用于反应，产出会快 ${formatX(4)}。最后，如果产物为 ${formatInt(10000)}，则没有任何试剂可以使用，反应根本不会运行。
<br>
<br>
要激活或停用反应，点击反应产物对应的圆圈。当反应可以应用时，会显示从所有试剂到产物的移动线条。如果连接是实线，表示由于该试剂数量不足，反应无法继续以因上限获得更多产物。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      tags: ["reality", "lategame", "endgame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction"],
      tab: "reality/alchemy"
    }, {
      name: "Imaginary Machines",
      alias: "想象机器",
      info: () => `
一旦你能在单次现实中获得至少 ${format(MachineHandler.baseRMCap)} 台现实机器，你便解锁获得一种叫做想象机器的新资源的能力。现实机器也会硬上限为 ${format(MachineHandler.baseRMCap)}；你将无法超过此限制获得更多。
<br>
<br>
此外，你解锁想象升级标签页，其中包含一组与现实升级类似的升级：每个升级都有必须满足的解锁条件和实际购买所需的想象机器费用。
前两行升级可以重复购买，而其余三行是一次性升级。
<br>
<br>
你的 iM 数量受两个因素影响：
<br>
<b>iM 上限</b>：你最多能拥有的 iM 数量，基于如果没有现实机器上限你能获得的最高现实机器数量。这会持续更新，因此如果你超过之前最高的未上限现实机器数量，它会立即提高。
<br>
<b>当前 iM</b>：随着时间推移，你当前的 iM 会被动向 iM 上限上升，接近上限时速度呈指数级减缓。默认情况下，iM 的减缓速度使你在<i>缺少</i>的数量（即上限减去当前数量）每半分钟减半。此增长率不受任何游戏速度修正影响。
<br>
<br>
想象机器升级将解锁最后两个天体。
`,
      isUnlocked: () => MachineHandler.isIMUnlocked,
      tags: ["imaginary", "machines", "reality", "lategame", "endgame"],
      tab: "reality/imag_upgrades"
    }, {
      name: "Lai'tela, Celestial of Dimensions",
      alias: "Lai'tela",
      info: () => `
Lai'tela 是第六个天体，通过购买相应的想象升级（花费 ${format(ImaginaryUpgrade(15).cost)} iM）解锁。
<br>
<br>
Lai'tela 提供一种叫做暗物质的新货币，它根据你曾经拥有的最高暗物质数量为连续体的效果提供倍率。暗物质由暗物质维度产生，方式与游戏中所有其他类型的维度类似，呈级联状。与其他维度不同，暗物质维度只有四个而不是八个。你一开始就解锁第一个，更高的维度通过想象升级解锁。解锁维度时，你会获得 ${formatInt(1)} 个该维度，如果没有下一层级的产出，就无法获得更多。
<br>
<br>
每个暗物质维度在特定时间间隔后生成两种东西：暗物质或下一个更低的暗物质维度，以及另一种叫暗能量的资源。暗物质和暗物质维度的每间隔产出等于你的暗物质倍率与维度数量的乘积，而暗能量产出与你的维度数量无关。暗能量用于产生奇点，奇点有自己的如何游玩条目。
<br>
<br>
暗物质维度的间隔可以升级到最低 ${formatInt(10)} 毫秒，此时无法再升级。你可以选择升腾达到该点的暗物质维度，最初使暗物质获得乘以 ${formatInt(POWER_DM_PER_ASCENSION)}、暗能量乘以 ${formatInt(POWER_DE_PER_ASCENSION)}。间隔乘以 ${formatInt(1200)}，但可以再次升级。再次达到 ${formatInt(10)} 毫秒后，如果你愿意，可以再次升腾。
<br>
<br>
一个想象升级允许你解锁一种叫做湮灭的声望。湮灭会重置你的暗物质和暗物质维度，但会为暗物质添加一个适用于所有暗物质维度的永久倍率。你可以多次湮灭；倍率增加是加算叠加的，每次不需要获得更大的增加。你必须有至少 ${format(Laitela.annihilationDMRequirement)} 暗物质才能湮灭。
<br>
<br>
Lai'tela 有一个现实，会根据你在现实中的表现给暗物质维度的暗物质力量提供倍率。每当你以低于 ${formatInt(30)} 秒完成现实时，你最高可用的维度将在该现实的后续尝试中永久禁用。以低于 ${formatInt(30)} 秒完成现实八次从而禁用所有维度，还会给你 ${formatX(8)} 的暗能量获得倍率。
<br>
<br>
Lai'tela 不会直接解锁下一个天体。
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["omsi", "reality", "dark", "matter", "dimensions", "lategame", "endgame", "ascend", "celestial"],
      tab: "celestials/laitela"
    }, {
      name: "Continuum",
      alias: "连续体",
      info: () => `
当你解锁 Lai'tela 时，你的反物质维度和计数频率升级会切换为一种叫做连续体的新生产模式，它与之前效果相同，但允许购买部分维度或计数频率升级。这些小数购买是免费提供的，不花费你的反物质，并提供相应的倍率部分。
<br>
<br>
反物质维度和计数频率升级的购买按钮会改为显示如果连续体不活动你能购买的升级数量，购买数量会随反物质平滑缩放。例如，拥有 ${format(2e7)} 反物质会给你计数频率的连续体值 ${format(5.3, 0, 1)}（初始价格 ${format(1e3)}，增长 ${formatX(10)}），因为你已购买 ${formatInt(5)} 次，并且大约走完了到下一次的 ${formatPercents(0.3)}。在这种情况下，计数频率连续体将提供等于（升级倍率）<sup>${format(5.3, 0, 1)}</sup> 的产出提升。
<br>
<br>
一些升级会直接乘以连续体值，在不影响价格缩放的情况下提供产出提升。不过，如果连续体在自动购买器页面被禁用，这些升级将不会生效，禁用可能导致产出损失。连续体使你的反物质维度和计数频率自动购买器过时，因此在连续体激活期间，相关自动购买器的所有设置都会在该标签页隐藏。
`,
      // Apparently continuumUnlocked is really important in a lot of places and if we keep it unlocked
      // Things break, so we check for the iMU instead.
      isUnlocked: () => ImaginaryUpgrade(15).isBought,
      tags: ["continuum", "purchase", "reality", "lategame", "endgame"],
      tab: ""
    }, {
      name: "Singularities",
      alias: "奇点",
      info: () => `
奇点是一种新资源，你可以使用 Lai'tela 内的功能获得。
<br>
<br>
要获得奇点，你需要达到 ${format(200)} 暗能量。达到后，你可以选择将所有暗能量凝聚为一个奇点，将其重置为零。超过此数量的任何额外暗能量不会结转，因此会被浪费。注意只有暗能量被重置，凝聚奇点时你的暗物质及其维度状态保持不变。
<br>
<br>
一旦你达到 ${formatInt(10)} 个奇点，你可以自由地将凝聚奇点的暗能量需求提高或降低 ${formatInt(10)} 倍（最低为 ${format(200)}）。这会使在上限重置时获得的奇点数量增加<i>超过</i> ${formatInt(10)} 倍，如果你愿意等待，更高的上限更值得。
<br>
<br>
奇点的用途是解锁奇点里程碑，其作用类似于永恒里程碑。解锁这些里程碑只需要你达到指定的奇点总数；奇点不会被花费。
有三种类型的里程碑：一次性里程碑、可重复有限次数的里程碑，以及可以无限重复的里程碑。
<br>
<br>
与里程碑类型无关，里程碑还有一个图标指示它们通常提供哪种升级：
<br>
<b>ᛝ</b> 这些里程碑帮助 Lai'tela 特有的机制
<br>
<i class="fas fa-arrows-alt"></i> 这些里程碑让 Lai'tela 中的资源影响游戏的其他部分
<br>
<i class="fas fa-compress-arrows-alt"></i> 这些里程碑基于 Lai'tela 之外的东西改进 Lai'tela
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["reality", "lategame", "endgame", "laitela", "dark"],
      tab: ""
    }, {
      name: "Pelle, Celestial of Antimatter",
      alias: "Pelle",
      info: () => `
当你购买最后的想象升级并解锁 Pelle 时，你会解锁她的标签页，在那里可以找到“使你的现实进入末日”的按钮。要使你的现实进入末日，你必须完成此时可用的全部 ${formatInt(17)} 行成就，并达到每种炼金资源 ${formatInt(25000)}。
<br>
<br>
${Pelle.isDoomed
    ? `使你的现实进入末日会开始一个新的<b>末日现实</b>，重置直到现实为止的几乎整个游戏，并且不会从你当前现实中的进度获得任何奖励。
      <br>
      <br>
      进入末日现实时，你保留统计页常规和现实标题下的所有数值以及所有最佳挑战时间。在末日现实中，许多升级、时间研究、挑战和天体奖励、福利以及其他游戏机制会被禁用或不提供奖励。
      你可以在 Pelle 标签页查看“显示末日现实中的效果”以了解更多信息。
      <br>
      <br>
      遗物是末日审判重置时获得的新货币。遗物获得基于你在所有末日现实中曾经拥有的最佳反物质、无限点数和永恒点数。遗物产生现实碎片，可以花费在 Pelle 升级上。
      <br>
      <br>
      Pelle 升级可以分为两类。第一行的五个升级可以重复购买，但最终会达到上限。它们为游戏的不同方面提供加成，使末日现实中的推进更容易。
      <br>
      <br>
      底部几行的其他升级提供自动化和生活品质（QoL）改进。从这些升级解锁的所有内容都无法通过游戏中的通常方式解锁；例如，完成任何普通挑战都不会解锁自动购买器，因为它们都由 Pelle 升级锁定。
      你可以切换升级上方的按钮隐藏已购买的升级，或点击 <i class="fas fa-compress-arrows-alt"></i> 图标折叠并隐藏整个面板。
      <br>
      <br>
      <b>快捷键：Z</b> 尝试进行末日审判重置。`
    : "<span style='color: var(--color-bad);'><b>你必须使你的现实进入末日才能阅读此条目的其余部分。</b></span>"
}
`,
      isUnlocked: () => Pelle.isUnlocked,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "hevipelle", "celestial", "doom"],
      tab: "celestials/pelle"
    }, {
      name: "Pelle Strikes",
      alias: "Pelle 打击",
      info: () => `
Pelle 打击会在末日现实中的不同事件时遇到。你在末日现实中第一次达到无限时会遇到第一次 Pelle 打击。随着进一步推进，还会发生更多打击。
每次 Pelle 打击都会为游戏的特定方面添加一项削弱，可以通过点击打击名称查看。
每次 Pelle 打击还会解锁一个裂隙进度条。
<br>
<br>
裂隙进度条可以通过点击在“待机”和“填充”之间切换，但任何时候只能有两个裂隙处于“填充”状态。激活时，裂隙每秒消耗裂隙特定资源的 ${formatInt(3)}%。每个裂隙提供基于总填充量的裂隙特定效果。
${PelleStrikes.eternity.hasStrike
    ? `例外是衰减/坍缩/混乱，一旦你总共抽取 ${formatPostBreak(DC.E2000)} 个复制器，其效果就会达到上限。`
    : ""}
此外，每个裂隙提供三个里程碑奖励，用于填充到一定百分比。
`,
      isUnlocked: () => PelleStrikes.infinity.hasStrike,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "pelle", "strike", "rift", "celestial"],
      tab: "celestials/pelle"
    }, {
      name: "The Galaxy Generator",
      alias: "星系生成器",
      info: () => `
当你达到 ${formatInt(100)}% 递归/弥散/毁灭时，你解锁<b>星系生成器</b>，它可以被动生成星系。生成的星系与复制器星系和快子星系一样，像反物质星系一样影响计数频率，但不会提高你下一个反物质星系的价格。你还会解锁五个新升级。第一个升级提高生成的星系基础数量。另外四个升级随后给这个基础数量提供倍率。前两个升级可以通过花费反物质和生成的星系购买。复制器或快子星系不能用于购买这些升级。
<br>
<br>
<b>星系生成器</b>有能生成的最大星系数量，只有在当前上限达到后通过抽取裂隙才能提高。
`,
      isUnlocked: () => Pelle.hasGalaxyGenerator,
      tags: ["reality", "antimatter", "lategame", "endgame", "final", "pelle", "galaxy",
        "galaxies", "generator", "celestial"],
      tab: "celestials/pelle"
    }
  ]
};

(function() {
  for (let i = 0; i < h2p.tabs.length; i++) {
    const tab = h2p.tabs[i];
    tab.id = i;
    if (tab.alias === undefined) tab.alias = tab.name;

    tab.searchTermsRelevance = {};
  }

  const searchIndex = {};

  const addTerm = (term, tab) => {
    let entry = searchIndex[term];
    if (entry === undefined) {
      entry = [];
      searchIndex[term] = entry;
    }
    if (entry.includes(tab)) return;
    entry.push(tab);
  };

  const addWord = (word, tab) => {
    const lowerCase = word.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      const term = lowerCase.slice(0, i + 1);
      addTerm(term, tab);
      if (tab.searchTermsRelevance[term] === undefined) {
        tab.searchTermsRelevance[term] = ((i + 1) / lowerCase.length) ** 0.65;
      } else {
        tab.searchTermsRelevance[term] = Math.max(tab.searchTermsRelevance[term], ((i + 1) / lowerCase.length) ** 0.65);
      }
    }
  };

  const addPhrase = (phrase, tab) => {
    addWord(phrase, tab);
    for (const part of phrase.split(" ")) {
      addWord(part, tab);
    }
  };

  for (const tab of h2p.tabs) {
    addPhrase(tab.name, tab);
  }
  for (const tab of h2p.tabs) {
    for (const tag of tab.tags) {
      addPhrase(tag, tab);
    }
  }
  for (const tab of h2p.tabs) {
    addPhrase(tab.alias, tab);
  }

  const map2dToObject = function(arr, keyFun, valueFun) {
    const out = {};
    for (let idx1 = 0; idx1 < arr.length; idx1++) {
      for (let idx2 = 0; idx2 < arr[idx1].length; idx2++) {
        out[keyFun(arr[idx1][idx2], idx1, idx2)] = valueFun(arr[idx1][idx2], idx1, idx2);
      }
    }
    return out;
  };

  // Very suboptimal code coming up. If anybody has a better solution, PLEASE, implement it.
  const keyboardify = keybrd => map2dToObject(keybrd.split(",").map(str => str.split("")),
    key => key, (_key, x, y) => ({ x, y }));

  const qwerty = keyboardify(`1234567890,qwertyuiop,asdfghjkl,zxcvbnm`);
  const qwertz = keyboardify(`1234567890,qwertzuiop,asdfghjkl,yxcvbnm`);
  const azerty = keyboardify(`1234567890,azertyuiop,qsdfghjklm,wxcvbn`);
  const dvorak = keyboardify(`1234567890,'<>pyfgcrl,aoeuidhtns,;qjkxbmwvz`);
  const colemak = keyboardify(`1234567890,qwfpgjluy,arstdhneio,zxcvbkm`);
  const workman = keyboardify(`1234567890,qdrwbjfup,ashtgyneoi,zxmcvkl`);
  const qwprf = keyboardify(`1234567890,qwprfyukl,asdtghnioe,zxcvbjm`);

  const keyboards = [qwerty, qwertz, azerty, dvorak, colemak, workman, qwprf];

  const keyboardDist = function(a, b, keyboard) {
    const aPos = keyboard[a], bPos = keyboard[b];
    if (!aPos || !bPos) return 100;
    return Math.max(Math.abs(aPos.x - bPos.x), Math.abs(aPos.y - bPos.y));
  };

  // I copied this code based on OSA distance off wikipedia, with a few added changes.
  // The cost for "substitution" (third item of the first Math.min) is replaced from a static value
  // to a function which roughly estimates how likely the user is to mispress the key based on its
  // minimum distance from several common keyboard layouts.
  // I have no idea how the actual "distance" calculation works but as long as it does don't touch it.
  const howBadlyTypoedWithKeyboard = function(a, b, keyboard) {
    // If they're the same, skip all calculations
    if (a === b) return 0;
    const aLen = a.length;
    const bLen = b.length;
    // If they're way too different, don't bother
    if (Math.abs(aLen - bLen) > 3) return 100;
    // 2d Array with dimensions aLen + 1 x bLen + 1
    const d = new Array(aLen + 1).fill(0).map(() => new Array(bLen + 1).fill(0));

    for (let i = 0; i <= aLen; i++) {
      d[i][0] = i;
    }
    for (let i = 0; i <= bLen; i++) {
      d[0][i] = i;
    }

    for (let i = 1; i <= aLen; i++) {
      for (let j = 1; j <= bLen; j++) {
        const distance = keyboardDist(a[i - 1], b[j - 1], keyboard);
        const cost = distance === 0 ? 0 : 0.3 + distance * distance * 0.25;
        d[i][j] = Math.min(
          d[i - 1][j] + 0.55,
          d[i][j - 1] + 0.7,
          d[i - 1][j - 1] + cost
        );
      }
    }
    return d[aLen][bLen];
  };

  const howBadlyTypoed = function(a, b) {
    // Arbitrarily large number
    let minTypoed = 1e10;
    for (const keyboard of keyboards) {
      minTypoed = Math.min(minTypoed, howBadlyTypoedWithKeyboard(a, b, keyboard));
    }
    return minTypoed;
  };

  const specialChars = ["'", "\"", ",", "-", ".", "_"];

  const replaceSpecialChars = function(str) {
    let result = str;
    for (const i of specialChars) {
      result = result.replaceAll(i, "");
    }
    return result;
  };

  // There are a LOT of magic numbers in this code, mostly from arbitrary choices for "What number is large enough to
  // act as a placeholder for 'basically not found'?"
  // This will need some cleanup if possible.
  h2p.search = query => {
    const truncatedQuery = replaceSpecialChars(query);
    if (truncatedQuery === "") return h2p.tabs.map(x => ({ tab: x, relevance: 1.5 }));
    const searchTerms = truncatedQuery.toLowerCase().split(" ").filter(str => str !== "");

    // A higher "Relevance" value actually means it's further away from the search, important to keep in mind
    const relevances = Array.repeat(1e4, h2p.tabs.length);
    for (const searchWord of searchTerms) {
      const minimumRequirement = Math.min(searchWord.length - 0.9, 3) * 0.5;
      for (const searchIndexStr in searchIndex) {
        const typoThreshold = howBadlyTypoed(replaceSpecialChars(searchIndexStr), searchWord);
        if (typoThreshold < minimumRequirement) {
          for (const tab of searchIndex[searchIndexStr]) {
            const maxRelevance = tab.searchTermsRelevance[searchIndexStr];
            const decrease = Math.max(maxRelevance * 1.6 - 0.9, 0);
            relevances[tab.id] = Math.min(relevances[tab.id], Math.max(typoThreshold, 1 - maxRelevance) - decrease);
          }
        }
      }
    }
    const results = h2p.tabs.filter(x => relevances[x.id] < 0.9)
      .map(x => ({ tab: x, relevance: relevances[x.id] }));
    // Provide both the relevance and the tab itself

    // Sort by id first, then push more relevant results to top.
    results.sort((a, b) => a.tab.id - b.tab.id).sort((a, b) => a.relevance - b.relevance);
    // Provide both the relevance and the tab itself
    return results;
  };
}());
