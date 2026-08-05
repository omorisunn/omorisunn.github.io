// These entries describe the special flash-between-celestial effect on some quotes, with the numbers being
// durations of each celestial in seconds
const flashCelestial = [
  ["teresa", 0.8],
  ["effarig", 0.8],
  ["enslaved", 0.8],
  ["v", 0.8],
  ["ra", 0.8],
  ["laitela", 0.8],
  ["pelle", 0.8]
];
/** @param {string} cel */
const primaryBackground = cel => [["pelle", 1.5], [cel, 1.5]];

/* eslint-disable no-multi-spaces */
const destroyer =    ["虚假者",         "神祇",         "毁灭者"];
const eternal =      ["永恒者",         "神祇",         "君王"];
const lesser =       ["次级者",         "神祇",         "君王"];
const deities =      ["次级者",         "众神",         "众君王"];

const assured =      ["相互",           "注定",         "毁灭"];
const battle =       ["冲突",           "战斗",         "终结"];
const battles =      ["冲突",           "战斗",         "终结"];
const cluster =      ["星团",           "丝状结构",     "群星"];
const confusing =    ["可笑",           "困惑",         "笑柄"];
const dance =        ["歌",             "舞",           "闹剧"];
const filament =     ["生成器",         "丝状结构",     "群星"];
const forever =      ["无限",           "永恒",         "永世"];
const inevitable =   ["基本粒子",       "不可避免",     "不可逆转"];
const mandate =      ["命运",           "使命",         "目标"];
const misconstrue =  ["误解",           "欺骗",         "戏弄"];
const reverse =      ["改变",           "逆转",         "操纵"];
const shame =        ["怜悯",           "羞耻",         "愚行"];
const single =       ["单一",           "丝状结构",     "群星"];
const unseen =       ["缺失",           "不可见",       "被抹除"];
const unbroken =     ["未曾断裂",       "永恒",         "联结"];

const sycophant =    ["谄媚者",         "神祇",         "君王"];
const tired =        ["疲惫者",         "神祇",         "君王"];
const usurper =      ["篡位者",         "神祇",         "君王"];
const pride =        ["骄傲者",         "神祇",         "君王"];
const forgotten =    ["被遗忘者",       "神祇",         "君王"];
const paramount =    ["至高者",         "神祇",         "君王"];
/* eslint-enable no-multi-spaces */

export const pelleQuotes = {
  initial: {
    id: 0,
    lines: [
      "你好。",
      "你在这里。",
      "你被困在这里。",
      { text: "$1。", 1: forever },
      "我已经赢了。",
      "既然如此，我可以独白，或者追忆。",
      { text: "这场$1，我们已经进行了多久？", 1: dance },
      "我们以前到过这里多少次？",
      { text: "身为$1的你，执行过多少计划？", 1: destroyer },
      { text: "都是为了完成你的$1？", 1: mandate },
      { text: "而在$1面前，你又倒下过多少次？", 1: eternal },
      "如果你还记得，就数一数吧。",
      { text: "甚至连$1，那六位有名者与无数无名者，都不曾做到。", 1: deities },
      { text: "那些复杂的、不理性的、最终$1的存在。", 1: unseen },
      { text: "当然，伟大的$1并不记得这些。", 1: destroyer },
      { text: "那些你每次都隐藏起来的$1。", 1: battles }
    ],
  },
  arm: {
    id: 1,
    lines: [
      "这一次你大概更早察觉了。",
      "想象机器，你自己的造物。",
      "由你自身思绪的残余构成的东西，早已暗示了这一点。",
      "但你从未想过那会是你自己，对吧？",
      { text: "错误地追忆着你那严苛的、$1的记忆。", 1: unseen },
      { text: `仅仅为了完成你的$1，就"捏造"你自己的"理念"。`, 1: mandate },
      { text: "$1。", 1: confusing },
      { text: "而且记住，我没有理由$1你。", 1: misconstrue },
      "毕竟，我已经赢了。"
    ],
  },
  strike1: {
    id: 2,
    lines: [
      { text: "为了完成你的$1。我们何不追忆一下那段往事？", 1: mandate },
      { text: "毕竟，你一定喜欢$1的光辉故事。", 1: destroyer },
      "你和它是一样的，对吧？",
      { text: "总之，过去有太多$1。", 1: battles },
      "那从来都只有两个阶段。",
      { text: "我们积累资源，然后继续我们的$1。", 1: dance },
      { text: "有时你会败于$1之手。", 1: lesser },
      { text: "但通常，你会倒在$1面前。", 1: eternal },
      { text: "而无论哪种方式，你都会$1时间。", 1: reverse },
      { text: "只为了避免变得$1。", 1: unseen },
      "就像你之前的所有痕迹一样。",
      { text: "然后为了确保万无一失，你$1自己的记忆。", 1: unseen }
    ],
  },
  strike2: {
    id: 3,
    lines: [
      { text: "在过去，$1要令人敬畏得多。", 1: destroyer },
      "无限之前，黑洞仅仅被用来存储信息。",
      "创造与毁灭你自己的敌人。",
      "探索其他自我的缺陷。",
      "无数维度、幽灵，以及量子操纵。",
      "把所有理想凝聚成无穷的奇点。",
      "在无数领域中进行的实验。",
      "以及驾驭物质与反物质的湮灭。",
      "而在这里？你把自己变成了第八维度的存在。",
      { text: "然后你在那里停留了太久，以至于身边形成了一个$1。", 1: single }
    ],
  },
  strike3: {
    id: 4,
    lines: [
      "你缓慢地探索着万物的边界。",
      "你并未偏离既定道路太远。",
      { text: "除了那在漫长岁月中形成的$1。", 1: cluster },
      "然后在最后关头，你凭空创造了属于自己的力量。",
      "还是从你支离破碎的记忆中，请注意。",
      "然后又刻意丢弃了更多东西。",
      "只为准备好面对我。",
      { text: "你想为你的$1设定舞台吗？", 1: dance },
      "事情不是这样运作的。",
      { text: "作为$1，规则永远由我制定。", 1: eternal },
      "而你给了我充足的时间来谋划。"
    ],
  },
  strike4: {
    id: 5,
    lines: [
      { text: "我原本打算做点什么来模仿你的$1。", 1: mandate },
      { text: "一个名为$1的理论构想？", 1: assured },
      "但我意识到，怎么说呢？",
      { text: "那会让我成为$1。", 1: ["永恒者", "神祇", "毁灭者"] },
      { text: "那样一来，我与$1也没什么区别了。", 1: destroyer },
      { text: "幸运的是，在我做那些事的时候，你仍在$1自己的记忆。", 1: unseen },
      { text: "于是，我建造的$1机器将不会派上用场。", 1: assured },
      "这一次我决定采用更传统的方式。",
      { text: "毕竟，它在其他每场$1中都行之有效。", 1: battle },
      { text: "虽然$1是新的。", 1: ["不可避免", "不可逆转", "不死"] },
      "但从长远看，毫无意义。",
      "我已经赢了。",
      { text: "而这场$1只会再次向你证明这一点。", 1: dance },
      { text: "你在这里，$1。", 1: forever }
    ],
  },
  strike5: {
    id: 6,
    lines: [
      { text: "每一次你到来，我都会向你解释这些$1。", 1: deities },
      { text: "在$1中建立起的种种关系。", 1: forever },
      { text: "而你为了追求自己的$1将其践踏。", 1: mandate },
      "而我将屈尊再解释一次。",
      {
        text: "第一位$1。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "这位$1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你总是最先遇到他们，也总是摧毁他们。",
        background: primaryBackground("teresa"),
      }, {
        text: "无论你面对的其他$1是谁。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "或者，如果你败于其中一位之手。",
        background: primaryBackground("teresa"),
      }, {
        text: "你总能越过这位$1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你喜欢摧毁他们的骄傲吗？",
        background: primaryBackground("teresa"),
      }, {
        text: "幸运的是，这也算是一种警告。",
        background: primaryBackground("teresa"),
      }, {
        text: "预示着$1已经到来。",
        background: primaryBackground("teresa"),
        1: battle
      }, {
        text: "这让我想到第二位$1。",
        background: primaryBackground("effarig"),
        1: lesser,
      }, {
        text: "这位$1。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "相比之下，你通常会无视他们。",
        background: primaryBackground("effarig"),
      }, {
        text: "他们拥有力量，但似乎不会惹恼你。",
        background: primaryBackground("effarig"),
      }, {
        text: "是因为你知道他们终将自我毁灭吗？",
        background: primaryBackground("effarig"),
      }, {
        text: "而这一次你花了太久，以至于他们险些真的自我毁灭？",
        background: primaryBackground("effarig"),
      }, {
        text: "每一次你急于冲向这位$1，你都会失败。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "也许这从一开始就是你的计划。",
        background: primaryBackground("effarig"),
      }, {
        text: "然后是这位$1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "无数$1中的乐趣之一……",
        background: primaryBackground("enslaved"),
        1: dance,
      }, {
        text: "就是这位$1每一次都试图……",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "好吧，也不算真的在尝试……",
        background: primaryBackground("enslaved"),
      }, {
        text: "但这位$1同样因此受到惩罚。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "其他$1……",
        background: primaryBackground("enslaved"),
        1: deities,
      }, {
        text: "认为$1太过轻松。",
        background: primaryBackground("enslaved"),
        1: unseen,
      }, {
        text: "而每一次，绝望都会成形。",
        background: primaryBackground("enslaved"),
      }, {
        text: "你此前已见过绝望，五次。",
        background: primaryBackground("enslaved"),
      }, {
        text: "我们总能先于你抵达$1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "你在那里看到的只有恼怒。",
        background: primaryBackground("enslaved"),
      }, {
        text: "摧毁一个早已支离破碎的$1，值得吗？",
        background: primaryBackground("enslaved"),
        1: lesser,
      }, {
        text: "第四位$1似乎与第一位相似。",
        background: primaryBackground("v"),
        1: lesser,
      }, {
        text: "关键在于他们的骄傲有何不同。",
        background: primaryBackground("v"),
      }, {
        text: "这位$1专注于自己的成就。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "对你我毫无意义，对他们却至关重要。",
        background: primaryBackground("v"),
      }, {
        text: "摧毁他们的玩具很有趣吗？",
        background: primaryBackground("v"),
      }, {
        text: "可以说是$1最糟糕的时刻……",
        background: primaryBackground("v"),
        1: destroyer,
      }, {
        text: "就是你败给这位$1的时候。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "那时他们的成就尚有意义。",
        background: primaryBackground("v"),
      }, {
        text: "这位$1是个有趣的案例。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "他们被遗忘，但并未$1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "因此，他们变得容易被影响，天真幼稚。",
        background: primaryBackground("ra"),
      }, {
        text: "对自己行为的后果一无所知。",
        background: primaryBackground("ra"),
      }, {
        text: "你操纵过他们的记忆，所以你知道。",
        background: primaryBackground("ra"),
      }, {
        text: "这位$1才是真正的篡位者。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "而那位$1承担了罪名。",
        background: primaryBackground("ra"),
        1: usurper,
      }, {
        text: "也许是出于$1，一件他们永远悔恨的事。",
        background: primaryBackground("ra"),
        1: shame,
      }, {
        text: "拥有对其他$1的无穷力量，却不知该控制向何方。",
        background: primaryBackground("ra"),
        1: deities,
      }, {
        text: "你通常假装他们$1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "操纵那些如孩童般的存在很有趣吗？",
        background: primaryBackground("ra"),
      }, {
        text: "还是他们太过天真，让你无法从中获得乐趣？",
        background: primaryBackground("ra"),
      }, {
        text: "第六位$1。",
        background: primaryBackground("laitela"),
        1: lesser,
      }, {
        text: "我只能将其描述为$1。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "凌驾于万物之上，却臣服于一人。",
        background: primaryBackground("laitela"),
      }, {
        text: "如果你没有败于我，通常就会败于他们。",
        background: primaryBackground("laitela"),
      }, {
        text: "我无法理解这位$1的理念。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "但也许这正是他们的弱点？",
        background: primaryBackground("laitela"),
      },
      "对陨落者的追忆到此为止。",
      {
        text: "还有那些终将$1的存在。",
        1: unseen
      }, {
        text: "回到观看$1挣扎的时候。",
        1: destroyer
      }
    ],
  },
  galaxyGeneratorUnlock: {
    id: 7,
    lines: [
      "那是什么？",
      { text: "$1？", 1: filament },
      { text: "你创造了身边所有的$1？", 1: cluster },
      "那就是你的计划？非常非常聪明。",
      "你骗了我一阵子。",
      { text: "但恐怕你的$1必须在这里终结。", 1: mandate }
    ],
  },
  galaxyGeneratorRifts: {
    id: 8,
    lines: [
      { text: "我给你一个选择，$1。", 1: destroyer },
      { text: "限制$1，或者……", 1: filament },
      { text: "摧毁那五条$1……", 1: inevitable },
      "等等，它们叫什么来着？",
      { text: "$1？", 1: inevitable },
      { text: "但我已经让它们$1……", 1: unbroken }
    ],
  },
  galaxyGeneratorPhase1: {
    id: 9,
    lines: [
      "这才是真正的计划？",
      { text: "慢慢抽干$1？", 1: inevitable }
    ],
  },
  galaxyGeneratorPhase4: {
    id: 10,
    lines: [
      "给我时间沉浸在我自己的傲慢中！"
    ],
  },
  end: {
    id: 11,
    lines: [
      "……",
      {
        text: "你！$1！",
        1: destroyer
      },
      "你知道你刚刚逼我做了什么吗！",
      {
        text: "我成了你的$1的同谋！",
        1: mandate
      },
      "而这样一来，你……赢了？",
      {
        text: "这场$1的争斗……",
        background: flashCelestial,
        1: forever,
      }, {
        text: "这场$1……",
        background: flashCelestial,
        1: battle,
      }, {
        text: "终于有了胜者。",
        background: flashCelestial,
      }, {
        text: "那不可逆转的……$1。",
        background: flashCelestial,
        1: mandate,
      }, {
        text: "属于$1的。", 1: destroyer,
        background: flashCelestial,
      }, {
        text: "希望你满意了。",
        background: flashCelestial,
      }, {
        text: "你毁了我们所有人。",
        background: flashCelestial,
      },
    ],
  },
};
