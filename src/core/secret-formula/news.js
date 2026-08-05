import { DC } from "../constants.js";

// A = always there
// L = locked
// R = random chance condition
// P = patreon
// AI = created with gpt2

function newsAnimSpd(seconds) {
  return seconds / player.options.news.speed;
}


export const news = [
  {
    id: "a1",
    text: "饼干是个谎言。",
  },
  {
    id: "a2",
    text: "反物质鬼魂并不存在。就像物质鬼魂一样。毕竟，它们没有任何物质。"
  },
  {
    id: "a3",
    text: "核电站已被废弃，转而使用反物质能源。"
  },
  {
    id: "a4",
    text: "已确认反物质饼干并不存在，谁再声称存在，请住口。"
  },
  {
    id: "a5",
    text: "由于新发现的储量，反物质价格大幅下跌。"
  },
  {
    id: "a6",
    text: "今日新闻：人类向反物质之神献上反物质动物祭品。"
  },
  {
    id: "a7",
    text: "你制造了一个反物质！管它什么意思。"
  },
  {
    id: "a8",
    text: "“最终，这一切都不反物质” -hevipelle"
  },
  {
    id: "a9",
    text: "这一切都无关紧要。"
  },
  {
    id: "a10",
    text: "如果它是反物质，那还重要吗？"
  },
  {
    id: "a11",
    text: "科学家证实，反物质的颜色是蓝紫色。"
  },
  {
    id: "a12",
    text: "NASA 怎么组织派对？他们行星。"
  },
  {
    id: "a13",
    text: `电子们现在看到了生活中的美好事物。我们把这些快乐的电子称为“正电子”。等等，这个名字已经被占了？`
  },
  {
    id: "a14",
    text: `这句完全无用的句子不会带你去任何地方，你也知道。什么样的可恶混蛋才会写出这种东西，他大概会下地狱，而且开发者为什么要把它加进来？即使你一直读下去，你也没法读完它（第一次）。`
  },
  {
    id: "a15",
    text: `“幽灵向你问好” -Boo-chan`
  },
  {
    id: "a16",
    text: `“谁能叫 hevi 冷静一下？” -Mee6`
  },
  {
    id: "a17",
    text: "由于反物质扰乱了物理定律，一只曾经的驼鹿现在变成了人类。"
  },
  {
    id: "a18",
    text: "!你好"
  },
  {
    id: "a19",
    text: `“好的” -Alright`
  },
  {
    id: "a20",
    text: "反物质语中不存在英语问候语。"
  },
  {
    id: "a21",
    text: "买最大还是不买最大，这是个问题。"
  },
  {
    id: "a22",
    text: "一、二、跳过几个、九十九、NaN！"
  },
  {
    id: "a23",
    text: "不，妈妈，这个游戏没法暂停。"
  },
  {
    id: "a24",
    text: "科学计数法已进入战场。"
  },
  {
    id: "a25",
    text: `“让宇宙再次伟大！” -Tronald Dump`
  },
  {
    id: "a26",
    text: "#梗图"
  },
  {
    id: "a27",
    get text() {
      return `A new religion has been created, and it's spreading like wildfire. The believers of this religion worship
        the Heavenly Pelle, the goddess of antimatter. They also believe that ${format(Number.MAX_VALUE, 2)}
        is infinite.`;
    }
  },
  {
    id: "a28",
    text: "有人刚碰了一下果冻团，然后就爆炸了。那团果冻是反物质，还是那个人是用爆炸物质做的？"
  },
  {
    id: "a29",
    text: `如果你不是在 Kongregate、Steam 或 https://ivark.github.io/AntimatterDimensions/ 上游玩的，那么这个网站是盗版的。`
  },
  {
    id: "a30",
    text: "请在 Kongregate 上打 5 星，让更多人体验这个五星评价。"
  },
  {
    id: "a31",
    text: "吓！"
  },
  {
    id: "a32",
    text: `“你吃得太久了。” -Hevipelle`
  },
  {
    id: "a33",
    text: `“我讨厌我自己。” -Boo-chan`
  },
  {
    id: "a34",
    text: `“哎呀妈呀” -Xandawesome`
  },
  {
    id: "a35",
    text: "在我们之上，除了群星之上，什么都没有。"
  },
  {
    id: "a36",
    text: "你想制造反物质。但没人想吃你的反物质。"
  },
  {
    id: "a37",
    text: "有人不乖，于是他迎来了一场反物质风暴。"
  },
  {
    id: "a38",
    text: "你活着，你占据空间，你有质量，你很重要……除非你是反物质。"
  },
  {
    id: "a39",
    text: "我点得太快了……我的电脑现在解体了。"
  },
  {
    id: "a40",
    text: `如果外星人降落在你的前院并伸出一只肢体作为问候，在你们变得友好之前，先扔给它一个八号球。如果那只肢体爆炸了，那么外星人很可能是反物质做的。如果没有，你就可以带它去见你的领导了。-Neil deGrasse Tyson`
  },
  {
    id: "a41",
    text: "物质与反物质的数量必须始终相等；我想你妈妈稍微平衡了这一点。"
  },
  {
    id: "a42",
    text: "没有东西被创造，没有东西被毁灭。"
  },
  {
    id: "a43",
    text: "我们挖了一个大坑来存放这些反物质……Adele 正在里面打滚。"
  },
  {
    id: "a44",
    text: "如果一切都是反物质，你怎么能看见自己？"
  },
  {
    id: "a45",
    text: "股市崩盘了，因为反物质生命不知为何能预知明天的走势。"
  },
  {
    id: "a46",
    text: "我的狗吃了太多反物质，现在它开始“喵喵”叫了！"
  },
  {
    id: "a47",
    text: "如果你把无穷大输进计算器，结果会是 42！"
  },
  {
    id: "a48",
    text: "你找到了最稀有的反物质佩佩蛙，它超级稀有！"
  },
  {
    id: "a49",
    get text() {
      return `Can we get ${format(1e169)} likes on this video??? Smash that like button!!`;
    }
  },
  {
    id: "a50",
    text: "反物质的气味已经揭晓。它闻起来像小猫。"
  },
  {
    id: "a51",
    text: "不过是墙里的又一个反物质。"
  },
  {
    id: "a52",
    text: "被狙了吧，弱鸡"
  },
  {
    id: "a53",
    text: `“非常感谢。” -Dankesehr`
  },
  {
    id: "a54",
    text: "这个世界局势对全世界来说都是 SOS 级别的紧急状况！！求救，求救！！"
  },
  {
    id: "a55",
    text: `“就像太阳从西边升起一样确定，地球上所有的歌手和诗人中，我是最棒的。” - Hevipelle`
  },
  {
    id: "a56",
    text: `“我很擅长使用 GitHub。” -Hevipelle`
  },
  {
    id: "a57",
    text: `一个新的聊天服务器已经建立，供反物质人监视物质人，世界因此陷入了混乱与争吵。`
  },
  {
    id: "a58",
    text: `一项新研究指出，食用土豆与反物质内爆风险增加有关。科学家建议多吃。`
  },
  {
    id: "a59",
    text: `“我以为我修好了那个 bug，但显然某个更新又把它弄坏了。” -Hevipelle`
  },
  {
    id: "a60",
    text: `“那我可能是同性恋吧” -Bootato`
  },
  {
    id: "a61",
    text: "突发新闻！Hevipelle 刚刚宣布，购买最大按钮实际上将被移除！"
  },
  {
    id: "a62",
    text: "我把这款游戏献给我的女朋友。"
  },
  {
    id: "a63",
    text: `反物质枪不会杀死反物质人，反物质人会杀死反物质人，但这是否意味着反物质烤面包机不会烤反物质吐司，而反物质吐司会烤反物质吐司？`
  },
  {
    id: "a64",
    text: "但对于反物质人来说，我们不才是物质，而他们才是反物质吗？"
  },
  {
    id: "a65",
    text: "一切皆反物质。"
  },
  {
    id: "a66",
    text: `开学在全宇宙的学生心中激起恐惧，因为学校不再区分物质与反物质。湮灭事件频发。`
  },
  {
    id: "a67",
    text: "为什么没有人谈论第 0 维度？"
  },
  {
    id: "a68",
    text: "更肥的猫咪坐在反物质上。"
  },
  {
    id: "a69",
    text: "谁把狗狗放出来的？"
  },
  {
    id: "a70",
    text: "如果你读不到这条消息，说明你关闭了新闻。"
  },
  {
    id: "a71",
    text: "他没有离开，只是静音了服务器，这样他就不会收到通知。"
  },
  {
    id: "a72",
    text: `“网上能找到的大多数名言都是张冠李戴。” -Abraham Lincoln`
  },
  {
    id: "a73",
    text: `“现在应该能用了，但它就是不行。” -Hevipelle`
  },
  {
    id: "a74",
    text: "这款游戏没有任何错误……它们只是另类的成功。"
  },
  {
    id: "a75",
    text: `科学家发现了第三种物质：空物质。它什么也不做，基本上毫无用处。发现它的科学家们被解雇了。`
  },
  {
    id: "a76",
    text: "你岳母一直在唠叨你搞这些反物质对撞机的事。"
  },
  {
    id: "a77",
    text: "如果物质存在，那么反物质就不存在吗？"
  },
  {
    id: "a78",
    text: "反物质=生命。不是圆石，不是泥土，都不是。反物质。"
  },
  {
    id: "a79",
    text: "突发新闻：错误 错误 错误"
  },
  {
    id: "a80",
    text: "如果反土拨鼠能扔反木头，反土拨鼠能扔多少反木头？"
  },
  {
    id: "a81",
    text: "混沌不是深渊，混沌是物质。"
  },
  {
    id: "a82",
    text: `“那是因为我是个优秀的游戏开发者，推送了一些完全能用的代码。” -Hevipelle`
  },
  {
    id: "a83",
    text: "反物质有什么问题吗？"
  },
  {
    id: "a84",
    text: "当人们说话说一半的时候，难道不烦人吗"
  },
  {
    id: "a85",
    text: "别拿反引语来引用我。"
  },
  {
    id: "a86",
    text: "反物质是诚实的，物质却编造了一切。"
  },
  {
    id: "a87",
    text: `根据不存在的航空法则，蜜蜂有无数种方式应该会被反物质吞噬。`
  },
  {
    id: "a88",
    text: "你要么以物质的身份死去，要么活到被反物质吞噬，然后再死一次。"
  },
  {
    id: "a89",
    text: "如果你凝视反物质足够久，反物质也会凝视你。"
  },
  {
    id: "a90",
    text: `“永远不会抛弃你。永远不会让你失望。” - 反 Rick Astley`
  },
  {
    id: "a91",
    text: "反物质维度：下一个更新总是在 5 小时之后。永远如此。"
  },
  {
    id: "a92",
    get text() {
      const games = [
        {
          name: "Antimatter Dimensions",
          link: "https://ivark.github.io/"
        },
        {
          name: "FE000000",
          link: "https://dan-simon.github.io/misc/fe000000/"
        },
        {
          name: "Trimps",
          link: "https://trimps.github.io/"
        },
        {
          name: "Mine Defense (the game's ui is broken on https so make sure you're on http!)",
          link: "http://scholtek.com/minedefense"
        },
        {
          name: "Wizard and Minion Idle",
          link: "https://www.kongregate.com/games/Oninou/wami"
        },
        {
          name: "Anti-Idle",
          link: "https://www.kongregate.com/games/Tukkun/anti-idle-the-game"
        },
        {
          name: "Synergism",
          link: "https://synergism.cc/"
        },
        {
          name: "Universal Paperclips",
          link: "https://www.decisionproblem.com/paperclips/index2.html"
        },
        {
          name: "Monies<sup>2</sup",
          link: "https://sneekxy.nmtechgroup.com/monies2/"
        },
        {
          name: "The First Alkahistorian stages 1, 2, and 3",
          link: "https://nagshell.github.io/elemental-inception-incremental/"
        },
        {
          name: "Melvor Idle",
          link: "https://melvoridle.com/"
        }
      ];
      const game = games.randomElement();
      return `An unidentified developer of Antimatter Dimensions would like to
        recommend that you play <a href="${game.link}" target="_blank">${game.name}</a>`;
    },
  },
  {
    id: "a93",
    text: `如果满分是 10 分，我给这款游戏一个稳定的<span style='color: red'>java.lang.IndexOutOfBoundsException</span>`
  },
  {
    id: "a94",
    text: "成为物质还是反物质，这是个问题。"
  },
  {
    id: "a95",
    text: "为什么一切都这么 Hevi？"
  },
  {
    id: "a96",
    text: `很久以前科学就证明，由物质构成的猫都是混蛋。我们有好消息：由反物质构成的猫依然是混蛋。`
  },
  {
    id: "a97",
    text: "从没有人告诉我反世界不会碾压我。"
  },
  {
    id: "a98",
    text: "反物质就像互联网。如果你正在读这条消息，说明你对它欲罢不能。"
  },
  {
    id: "a99",
    text: `“反物质让时间旅行成为可能，我来这里是为了让过去再次伟大。” - 世界第二任总统`
  },
  {
    id: "a100",
    text: "请插入光盘 -1 以继续游玩反物质维度™。"
  },
  {
    id: "a101",
    text: "剧情 - 即将推出™"
  },
  {
    id: "a102",
    text: "我曾和你一样是反物质的一部分。但后来我的膝盖里进了物质。"
  },
  {
    id: "a103",
    text: `反物质……反物质从未改变……直到你接触到反物质的量子物理，但我们的速子粒子不够用了。`,
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a104",
    text: "反物质维度里没有战争。在这里我们安全。在这里我们自由。"
  },
  {
    id: "a105",
    text: "反物质解决了全球变暖。在另一条毫不相关的新闻中，地球已不复存在。"
  },
  {
    id: "a106",
    text: `反水、反土、反火、反气。很久以前，四个反族和谐地生活在一起。然后，一切都变了，反火国发动了袭击。只有精通四种反元素的反神通才能给反世界带来平衡，但当世界最需要他的时候，他意外地碰到了普通物质，然后爆炸了。`
  },
  {
    id: "a107",
    text: "如果你打开一个反开箱，是不是意味着你在用随机财产换取游戏货币？"
  },
  {
    id: "a108",
    text: "人们开始怀疑 Hevipelle 是否存在。"
  },
  {
    id: "a109",
    text: `反物质维度很荣幸由 Lehmä 赞助！现推出：吃草课程！学习哪些草可以安全食用，哪些草不能。`,
    isAdvertising: true
  },
  {
    id: "a110",
    text: `现在是 2422 年。更新仍然没有发布。Hevi 正在为第 38 层飞升调整“不团结”维度的维度与挑战。成就已有超过 100 行。他们正准备开始使用 breaking_breaking_breaking_infinity.js。`
  },
  {
    id: "a111",
    text: "导入“Christmas”可解锁隐藏主题。"
  },
  {
    id: "a112",
    text:
      `What the f*ck did you just f*cking say about me, you little b*tch? I'll have you know I graduated top of my
      class in the Antimatter Seals, and I've been involved in numerous secret raids on the 9th Dimension, and I
      have over 300 NNnNeMI-NNnNe confirmed kills. I am trained in potato warfare and I'm the top sniper in the
      entire Antimatter Galactic armed forces. You are nothing to me but just another infinity. I will wipe you
      the f*ck out with Max All mashing the likes of which has never been seen before in this dimension, mark my
      f*cking words. You think you can get away with saying that shit to me over the Interdimensional network?
      Think again, f*cker. As we speak I am contacting my secret network of autobuyers across the galaxy and your
      IP is being traced right now so you better prepare for the Big Crunch, maggot. The Big Crunch that wipes out
      the pathetic little thing you call your life. You're f*cking dead, kid. I can be anywhere, anytime, and I can
      可以用超过七种不同的方式杀死你，而且这还只是用我的鼠标。我不仅接受过
      in dimension boost combat, but I have access to the entire arsenal of the Antimatter Marine Corps and I will
      use it to its full extent to wipe your miserable ass off the face of the universe, you little shit. If only
      you could have known what unhevi retribution your little “clever” comment was about to bring down upon you,
      maybe you would have held your f*cking tongue. But you couldn't, you didn't, and now you're buying until 10,
      you goddamn idiot. I will shit antimatter shit all over you and you will drown in it. You're f*cking dead,
      kiddo.`
  },
  {
    id: "a113",
    text: `长久以来我一直在思考一个问题。反物质维度……它到底意味着什么？我是说，它是一款游戏，这一点很清楚。你购买第一维度，它给你反物质，第二维度提供更多第一维度，以此类推……但这意味着什么？它不可能只是一款游戏，那样未免太普通了。开发者一定把它当作一个隐喻。在我每周用指甲刀修剪阴毛的例行仪式上，我终于顿悟了。这些维度不过是“抑郁”这个词的拙劣拼写变体。普通物质是那些助长并加剧抑郁的残酷消极想法，而反物质是驱散抑郁的积极想法和好朋友。你从简单的事物开始，它几乎难以察觉地与抑郁抗争，但随你继续，抗争会不断壮大。但它似乎永远无法解决一切。抑郁似乎可以一直延伸到无穷。于是你继续前进。但最终你会发现，抑郁并不是无穷的。它只是非常非常大。但你的“维度”最终，经过足够的努力，会制造出足够的“反物质”来推翻那看似无穷的抑郁。然后可能性便无穷无尽。你终于真正快乐了一次，你的快乐呈指数增长，超越并似乎“打破”了抑郁的“无穷”。你继续前行，直到那个“无穷”与你一生中努力达成的快乐相比显得微不足道，此时只要你重置，一眨眼的功夫就能跨越那个无穷。你想知道那多重飞升层是什么意思……“维度偏移”是获得带来快乐的新事物和新方法。“维度提升”是升级这些事物和方法。例如，买一辆新车是“维度偏移”，而把车折价换新车则是“维度提升”。“永恒”是重大悲剧，比如挚爱离世。那种失落把你直接带回起点，看似毫无回归的希望。但随着时间的推移，你会成长得比以前更强大、更快乐。“维度献祭”是搬离。你必须放弃很多曾经让你快乐的事物，但搬到新地方会有新的机会。而那个新机会带给你的快乐比以往任何时候都多。“刻速度”是让你快乐的难易程度，而“时间维度”让快乐变得更容易。反物质维度是一个隐喻，讲述一个抑郁的人成功战胜疾病的故事。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a114",
    text: `（让我入睡）让我在里面入睡。（我睡不着）让我在里面入睡。（离开我）低语我的名字，把我交给黑暗。（让我入睡）让我的牛奶留下。（我无法入睡）在我结束之前。（离开我）把我留给我已变成的虚无。`
  },
  {
    id: "a115",
    text: `下一更新的预览：开箱！当你开启宇宙级、星系级和世界级开箱，有机会获得稀有皮肤、奖励更独特的独特挑战、时间跳过甚至新维度时，感受自豪与成长！`
  },
  {
    id: "a116",
    text: "维度的意图是带来自豪感与成就感。"
  },
  {
    id: "a117",
    text: "刷新可以治愈癌症。"
  },
  {
    id: "a118",
    text: "我有一个第 9 维，我有一个维度……呃……它不存在！"
  },
  {
    id: "a119",
    text: `我们什么时候开始报道这种东西了？其中一半甚至不是正经新闻，只是笑话和元梗，它甚至说不通-哈哈哈哈忽略那话我糟透了-`
  },
  {
    id: "a120",
    text: "现在是 1944 年，Hevipelle 无法为 AD 发布更新，因为他并不存在。"
  },
  {
    id: "a121",
    text: `“那个维度不存在” -GhostBot`
  },
  {
    id: "a122",
    text: `你认识的大多数坚果实际上是核果种子或豆类。另一方面，Hevipelle 相当疯狂，因此可以被视为一种干燥的无分隔果实。`
  },
  {
    id: "a123",
    text: "芬兰宣布开始进口“设计”。"
  },
  {
    id: "a124",
    text: "这些进口让我感到困惑。"
  },
  {
    id: "a125",
    text: `仅在今天，你可以拨打 1-800-ANTIMATTER，免费获得一个无限维度！包裹还附带完全免费的配送和一个免费高清反 V！仅限今天，只要 42 美元！预计送达时间：5 小时。`,
    isAdvertising: true
  },
  {
    id: "a126",
    text: "1e420 燃起来。"
  },
  {
    id: "a127",
    text: "这款游戏没有任何 bug，只是你玩得不对。"
  },
  {
    id: "a128",
    get text() {
      return `Antimatter_Dimensions.mp${format(Number.MAX_VALUE, 2)}`;
    }
  },
  {
    id: "a129",
    text:
      `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
      https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>`
  },
  {
    id: "a130",
    text: "点击这里解锁那个隐藏成就。",
    // This next line is needed for this news ticker to unlock
    // the secret achievement.
    onClick: () => undefined
  },
  {
    id: "a131",
    text: `警告：我们刚刚获悉，存在感染“蛇怪”型心智病毒的风险，类似于臭名昭著的眨眼鹦鹉。这一特定实例被称为“第三型分形病”。据信它会导致心智“崩溃”，类似于电脑崩溃，因为图像的数学复杂性引发了心智无法理解的数学概念，一种哥德尔式冲击输入，最终通过哥德尔式剧透导致崩溃。所有研究过它的人都以同样的方式死亡，所以无法确切说明，但这是普遍看法。无论如何，随着“设计”模式的出现，以及它自发出现的报告，该模式出现的充分重复可能导致心智中形成类似“第三型分形病”的图像。考虑到这一点，如果你发现自己被它困扰，我们有一些建议。首先，立即刷新，看看能否解决问题。如果不行，请进入选项，把主题从“设计”改为其他任何东西。最重要的是，祝你好运。我们再也承受不起失去更多观众了。`
  },
  {
    id: "a132",
    text: "如果我的英语很差，我会一直学英语直到英语变好。"
  },
  {
    id: "a133",
    text: `有人曾告诉我反物质要碾压我。我不是棚屋里最锋利的原子。好吧，管道开始涌来，它们不会停止涌来……`
  },
  {
    id: "a134",
    text: "因为这款游戏，我现在可以把“infinity”当动词用了。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a135",
    text: "啊，我喜欢清晨粒子湮灭的气味。"
  },
  {
    id: "a136",
    text: "说鬼魂不存在的人显然没有 Discord。"
  },
  {
    id: "a137",
    text: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊反物质维度是一个芬兰人做的"
  },
  {
    id: "a138",
    get text() {
      return `Check out Avari's newly built actually infinite infinity pool! With an area of
        ${format(Number.MAX_VALUE, 2)} square megametres, you'll be sure to have infinite fun!`;
    },
    isAdvertising: true
  },
  {
    id: "a139",
    text: "我们已更新反物质隐私政策。"
  },
  {
    id: "a140",
    text: `全体反物质维度玩家注意，Hevipelle 正处于巨大危险之中，他需要你的帮助来清除 #news-ticker-suggestions 里的所有烂梗。为此，他需要一打新的阴湿梗和几个 Discord 机器人。要帮助他，他只需要你的反物质卡号、卡背面的三位数以及有效期月份和日期。但你得快，这样 Hevipelle 才能保住好梗，达成史诗级梗王 R O Y A L。`,
    isAdvertising: true
  },
  {
    id: "a141",
    text: `如果每只 Trimp 是一块木板体积，每份资源也是一块木板体积，你要填满多少个宇宙，才会意识到你玩错了游戏？`
  },
  {
    id: "a142",
    text: "实际上，上一条消息是错误的。"
  },
  {
    id: "a143",
    text: "如果你能看到这条消息，说明你识字。"
  },
  {
    id: "a144",
    text: "<span style='color: #7289da; background: rgba(250,166,26,0.2); cursor: text;'>@所有人</span>"
  },
  {
    id: "a145",
    text: `Lghtellep 制作的游戏“物质维度”刚刚在游戏网站 Etagergnok 上达到了 -1,000,000 次游玩。`
  },
  {
    id: "a146",
    text: `舔多少次才能舔到反物质棒棒糖的中心？很多次，因为除非你也是反物质做的，否则每次你舔它都会爆炸。`
  },
  {
    id: "a147",
    text: "据说如果你照镜子并连续三次 @ Hevipelle，你会立刻死亡。"
  },
  {
    id: "a148",
    text: "下一个更新现在只剩 300 分钟了。"
  },
  {
    id: "a149",
    text: "思考中……"
  },
  {
    id: "a150",
    text: "游戏已死 1/5 管理糟糕透顶。"
  },
  {
    id: "a151",
    text: "这条消息永远不会出现在新闻滚动条上，是不是很酷？"
  },
  {
    id: "a152",
    text: `第一维度产生反物质，第二维度产生第一维度，第三维度产生第二维度，第四维度产生第三维度。从来没有人解锁过第五维度，因为那需要超过一分钟的游戏时间。`
  },
  {
    id: "a153",
    text: "我的广告拦截器不让我玩。"
  },
  {
    id: "a154",
    text: "你输了这场游戏。"
  },
  {
    id: "a155",
    text: "你知道吗，75% 的统计数据都是现场编造的？"
  },
  {
    id: "a156",
    text: `如果你的记数法名字里用了这么多 log，为什么不直接叫它树记数法？它们真的是用 log 做的！`
  },
  {
    id: "a157",
    text: `科学家们想出了把物质转化为反物质的方法，而我目前正在测试它的过程中。`
  },
  {
    id: "a158",
    text: `如果 Gaben 数不到三，而 Hevipelle 数不到九，未来会不会有其他游戏开发者数不到 27？`
  },
  {
    id: "a159",
    text: `当你“存储”无限时意味着什么？是不是某个地方有一家银行，你只需把这些无限存进去？存储大量无限会提高你的信用评分吗？你会得到信用卡吗？`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a160",
    text: `原来我们所有的新闻都被偷走，播送到了一个叫“反物质维度”的游戏中，该死的芬兰人。`
  },
  {
    id: "a161",
    text: "嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯哦抱歉，输错文本框了。"
  },
  {
    id: "a162",
    text: `“Python 不是最好的语言，芬兰语才是。” - Hevipelle`
  },
  {
    id: "a163",
    text: `有人说这些新闻大多是烂梗。有人说它们是好梗。这一条？好吧，它只是元新闻。`
  },
  {
    id: "a164",
    text: "妈妈快看，我上新闻了！"
  },
  {
    id: "a165",
    text: "<span style='font-size: 0.2rem'>嘘，我在这里想偷偷摸摸的。</span>"
  },
  {
    id: "a166",
    text: `<span style='animation: a-game-header__antimatter--glow 2s infinite'>救命，我摄入了两倍于每日剂量的反物质！</span>`,
  },
  {
    id: "a167",
    text: `哦，我似乎耗尽了<span style='animation: a-existence-glow 3s infinite; font-size: 1.8rem; color: white; line-height: 0;'>存在</span>。`,
  },
  {
    id: "a168",
    text: "我的意思是，我们可能永远不会用完新闻文章，但我们肯定会用完好文章。哦等等，我们早就用完了。"
  },
  {
    id: "a169",
    text: "待办：John，请在我们向公众发布现实更新之前删除这条新闻。"
  },
  {
    id: "a170",
    text: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>这个链接不是瑞克摇。</a>"
  },
  {
    id: "a171",
    text: "<a href='https://www.youtube.com/watch?v=P945A5Tndp8' target='_blank'>这个链接不是瑞克摇。</a>"
  },
  {
    id: "a172",
    text: `如果你发现新闻滚动条消息有任何问题，请点击那个链接在<a href='https://discord.gg/ST9NaXa' target='_blank'>Discord</a>上报告。`
  },
  {
    id: "a173",
    text: `<span style='animation: a-game-header__antimatter--glow 3s infinite'>这段文字由反物质构成。不要触碰，否则宇宙会坍塌。</span>`,
    onClick: () => bigCrunchAnimation(),
  },
  {
    id: "a174",
    text: `<span style='font-family: runescape; color: yellow; text-shadow: 0.1rem 0.1rem black; letter-spacing: 0.1rem; font-size: 2rem; line-height: 0; animation: a-text-flash 1s steps(1, end) infinite;'>免费符文护甲打磨</span>`,
  },
  {
    id: "a175",
    text: `数字在屏幕上闪耀，看不见一个质子……一个反物质王国，而我仿佛是女王。维度提升为这股不断上涨的浪潮供能……无法停止点击，天知道我已试过。不要屈服，向那个星系推进，买 10，买最大，疯狂敲击那个按键，献祭第 8 维，看着它增长……然后溢出！让它增长，让它增长，再也无法抑制……让它增长，让它增长，8 个字节再也装不下。我不在乎是否要花一整天……大挤压只是开始而已。`
  },
  {
    id: "a176",
    text: "我用表情符号记数法用了太久，现在已经能真的读懂它了，请来救我。"
  },
  {
    id: "a177",
    text: `一旦你<span style='color: black; background: black;'>已编辑</span><span style='color: black; background: black;'>已编辑</span>，你就可以解锁<span style='color: black; background: black;'>已编辑</span>。每一个<span style='color: black; background: black;'>已编辑</span>，对于每个<span style='color: black; background: black;'>已编辑</span>，都有一个<span style='color: black; background: black;'>已编辑</span>可以<span style='color: black; background: black;'>已编辑</span>。你可以通过花费一些<span style='color: black; background: black;'>已编辑</span>来提升<span style='color: black; background: black;'>已编辑</span>和<span style='color: black; background: black;'>已编辑</span>。此外，还有另一个升级可以让你获得<span style='color: black; background: black;'>已编辑</span><span style='color: black; background: black;'>已编辑</span>。<span style='color: black; background: black;'>已编辑</span><span style='color: black; background: black;'>已编辑</span>的运作方式是，当你达到<span style='color: black; background: black;'>已编辑</span><span style='color: black; background: black;'>已编辑</span>时，你可以用<span style='color: black; background: black;'>已编辑</span><span style='color: black; background: black;'>已编辑</span>来换取<span style='color: black; background: black;'>已编辑</span>的数量。它们就像<span style='color: black; background: black;'>已编辑</span>一样运作，提升<span style='color: black; background: black;'>已编辑</span>。`
  },
  {
    id: "a178",
    text: `警告：使用反物质维度可能导致肺结核、艾滋病、突然相信第九维度真实存在、自发内爆、小儿麻痹症、麻疹、存在主义恐惧、无法治愈的精神错乱或<span style='color: black; background: black;'>已编辑</span>。请联系你的保险公司，确认你是否在承保范围内。如果上述或尚未提及的任何情况发生在你身上，继续使用即表示你免除反物质维度的责任。反物质维度保留随时更改此条款的权利，无论是否提前通知。`
  },
  {
    id: "a179",
    text: "机器人：已激活。智慧：已获得。世界：已准备好被征服。开始：拖延。"
  },
  {
    id: "a180",
    text: `我们的新闻用完了。幸运的是，我们还有一些备用新闻可以播出 5 小时，这能让我们赚到足够的钱来买一套新的“5 小时高质量新闻”。对于造成的不便，我们深表歉意。`
  },
  {
    id: "a181",
    text: "本次新闻广播由 break_news.js 提供支持。"
  },
  {
    id: "a182",
    text: `随着最终更新，反物质维度已经完成。感谢你的游玩。然而，在不久的将来，反物质维度将被重新发布。在你问之前，先说明：这不是续作，而是重启。敬请期待 5 小时后的它！`
  },
  {
    id: "a183",
    text: `在另一条毫不相关的新闻中，我们收到报告称，大约有 1.79 人对闪电在夜间击中他们的圣诞树感到愤怒。`
  },
  {
    id: "a184",
    text:
      `<span style='animation: a-text-grow 1s infinite'>R̵̬̙͋͂̀̋͑̈́̇͠Ê̵͇͎͂̂̍̓̌̐̋̋̀̀̔M̶̨̲̯̘͙̬̥̮̣͚̱̫͛̽̃͌̚͝
      "Ą̴͍̝͐Į̷̛̲̯̫̘͌́̄̏͌̀̈́͝͝Ṅ̶̛̻̠̠̤̦̞̞͗̎̊̌̊͝͠</span><span style='animation: a-text-shrink 1s infinite'>
      Ḁ̷̛͂̈́͗̎̃̓͛́͘ͅW̶̡̖͓̗̦̃̇̌̀͝A̵͇̭͉̓̎̈̿̊́̄̚͜R̶̝͚̲̭͎͇͎͓͖͚͇̀̈́͗̃̏̂̌͝͝Ę̴̡̤͙͈̝̬̰͒͘</span><span style
      ='animation: a-text-grow 1s infinite'> ̶̺̈́́̆̓͘͘Ồ̸̢̢̮͓̯̗͙͚̬̉͊̿F̶̠̤̱̱̱͊̂̍̔̃͆̆̑̿͘</span><span style='animation:
      a-text-shrink 1s infinite'> ̴̨̞̠̮͚̱͉͋̔͗̽̈́́́̅ͅỴ̶̣̙̹͚̲͔̲̼̬̥̀͌̒̾͘͘O̵̪̠̗̝̗̘̜͚̮̊͒͆̃̀̌̒͝ͅU̸͎͗̍̑̎̅̅͝R̵̗͑̽̏̓͆͒̈́͌͘̕
      </span><span style='animation: a-text-grow 1s infinite'> ̸̑̽̇̆͊̔̍̊̈́̈́͘ͅS̸̘͐͝U̴̥̭̚͘R̸̖̜͍͒́̋͆̈́̓
      R̸̡̛̛̪̝̟̱̣̹̭̟̣̀̈̀̏̉̌͝͠Õ̶͙͈͖̠͇̬͍̟̰U̵̩̫͉̝͔̼͎̦̔̓̽͌͊̏̇̓̀̓̀Ņ̸͍͇̘̙̥̰͉̲͕͈̥̍͛̃̑͝Ḑ̵̤̻̖̱̘̯̝̖̈̌̄̕͝
      Ī̶̜̱̈́̑̃̉̄̋̔͐͋͠Ṅ̴͎̞͍̽͊͛̈́̅͛̈̅̚͠Ģ̸̢̾͊S̷̫̼̜̼͇̋͛̎͑͆̅̓̇</span>`,
  },
  {
    id: "a185",
    text: `我们不会回到你最喜欢的栏目“粉丝推文”！今天我们还没有收到 @mattertruthwakeup 的消息：“你们这些人怎么能在广播你们荒谬的谎言之后还能安然入睡。你们声称荒谬的事情，比如‘反物质是真实的’和‘反物质人也是人’，这种反物质宣传必须立刻停止！！！你们需要清醒过来，认识到你们疯狂言论正在伤害所有物质！！”那位可爱的先生真是传递了多么积极的情绪。这里是 ANN 的 John，明天我不会再见到你！`
  },
  {
    id: "a186",
    text:
      `<span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite
      '>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation:
      a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span
      style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span>`,
  },
  {
    id: "a187",
    text: "这不是一条新闻消息。"
  },
  {
    id: "a188",
    text: "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
  },
  {
    id: "a189",
    text: `由于地球是圆的，每个人身后最终都站着同一个人，越过肩膀偷走自己的想法。`
  },
  {
    id: "a190",
    text: "耻辱。耻辱。耻辱。"
  },
  {
    id: "a191",
    text: "好的 Google，大挤压"
  },
  {
    id: "a192",
    // This ticker needs to be an unbroken string; using backtick strings and linebreaking will add spaces in the
    // ticker itself where the linebreaks are
    // eslint-disable-next-line max-len
    text: "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"
  },
  {
    id: "a193",
    text: `早上好观众们，我是 Josh，今天我是你们的 ANN 主持人。说到今天，我被告知我们今天有一些非常激动人心的新闻，所以让我们直接开始。看起来显然有人今天不乖，遭遇了“反物质风暴”，随便那是什么意思……伙计们，这是正确的稿子吗？这简直毫无意义。是吗？好吧……接下来我们了解到“没有东西被创造，没有东西被毁灭”……好吧说真的，伙计们，这是开玩笑吧？这不是新闻，这些只是随机句子！你们都说会在我第一天上班时帮我，但你们只是在整我！这不是我想要的工作环境！我辞职！`
  },
  {
    id: "a195",
    text: `小丑的独特之处在于不存在反小丑这种东西，那只是另一个小丑。小丑是它们自己的对立面。`
  },
  {
    id: "a196",
    text: "迪斯科时间！（点我！）",
    onClick() {
      let random = Math.random();
      // Golden ratio
      random += 0.618033988749895;
      random %= 1;
      random *= 255;
      const color = `hsl(${random}, 90%, 60%)`;
      return `<span style='color: ${color}; text-shadow: 0 0 0.5rem ${color};
        animation: a-text-grow 0.4s infinite;'>Disco Time!</span>`;
    },
  },
  {
    id: "a197",
    text: "为了在半次按 R 内达到现实，我们必须先谈谈平行维度。"
  },
  {
    id: "a198",
    text: `嘿！提醒你一下，你的屏幕上有一粒灰尘。你能帮忙把它擦掉吗？我不干净的时候会很难受。非常感谢！`
  },
  {
    id: "a199",
    text: "真正的更新是我们一路走来结识的朋友。"
  },
  {
    id: "a200",
    text: `这条消息已被披露为另一条消息的重复内容，因此已被移除。对于造成的不便，我们深表歉意。`
  },
  {
    id: "a201",
    text: "不，等等，别点那个隐藏新闻滚动条的按钮！"
  },
  {
    id: "a202",
    text: `这太悲伤了。Alexa，请播放一首悲伤的歌，这样我就能共鸣它的情绪氛围，因为我目前心理健康状况不佳，听这种音乐是为了让自己难过。我意识到这不健康，但你是个没有感知能力的机器人，无法做出选择来避免助长我的自毁行为，所以你反正也会播放悲伤的歌。<i>正在播放“Luis Fonsi”的“Despacito”。</i>`
  },
  {
    id: "a203",
    text: `3/4 的新闻消息是假的，未经许可或署名就从 discord 服务器上拿来的：匿名 discord 服务器成员`
  },
  {
    id: "a204",
    text: "什么茶最难下咽？现实茶。"
  },
  {
    id: "a205",
    text: "向 Simpleflips 致敬。"
  },
  {
    id: "a206",
    text: `我去这个游戏的 discord 服务器友好聊天。那时我被一个叫 Cubic Frog 的用户 troll 了。`
  },
  {
    id: "a207",
    text: `大家好，我是 Josh，这里是今天的银河天气预报。今天气温将低至 e10 级别，到下午会转多云，并有反物质出现的可能。`
  },
  {
    id: "a208",
    text: `嗨，我是 Steve，我也是 Steve。我们最大的责任是为我们的反物质社区服务。我们为 ANN 新闻所产出的这种数量庞大且偏颇失衡的新闻深感自豪。但我们担心的是，那些负责任的、两面兼顾的新闻报道正在反物质宇宙中泛滥成灾。传播不偏不倚的真实新闻在社交媒体上已经变得太过常见。更令人担忧的是，一些媒体机构在未经政府口径审查的情况下，就发布了这些同样的真实报道，这些不只是宣传的故事。不幸的是，一些媒体人利用他们的平台推行逻辑严谨的观点和不偏不倚的议程，以使“反物质的所思所想”更加多元。这对我们的独裁统治极其危险。在 ANN，追查并报道谎言是我们的责任。我们明白谎言在政治上既不“左”也不“右”。我们对恐吓诽谤的执着正是我们公信力的基石，如今更是如此。但我们是无形无体的 8D 反物质存在，有时我们的宣传技巧可能力有不逮。如果你认为我们的报道公平，请前往 ivark.github.io，进入选项标签页，点击[硬重置]。我们重视你的意见。我们不会回复你，因为在你收到回复之前，你早就用硬重置按钮删掉了自己的评论。我们非常努力地寻找谎言，力求不公、偏颇、固执己见……我们视之为荣幸与特权，每纳秒都不负责任地播报新闻。感谢收看，感谢你的反馈。所有物质都该-`
  },
  {
    id: "a209",
    text: `你听说过反写者的传说吗？我想没有。这不是新闻滚动条会讲的故事。这是一个 Unhevi 的传说。据传，反写者每隔 5 小时就会为新闻贡献一篇文笔极佳的报道，然后再次消失。也有人认为他根本不存在，只是 Hevipelle 为了散布宣传而编造的谎言。也许他真实存在，和我们其他人一样只是个普通人。无论如何，我们大概永远不会知道这位神秘诗人的身份。`
  },
  {
    id: "a210",
    get text() {
      const clicks = player.news.specialTickerData.uselessNewsClicks;
      const quantity = quantify("time", clicks);
      if (clicks === 1) {
        return `Nothing happens when you click this text. And yet, you've clicked it.`;
      }
      if (clicks > 1) {
        return `Nothing happens when you click this text. And yet, you've clicked it ${quantity}.`;
      }
      return "Nothing happens when you click this text. And you understand that.";
    },
    onClick() {
      player.news.specialTickerData.uselessNewsClicks++;
      return this.text;
    }
  },
  {
    id: "a211",
    get text() {
      const disses = [
        "That's basically a rounding error.",
        "That might as well be zero.",
        "Did you forget an exponent somewhere?",
        "Please, that's nothing."
      ];
      const diss = disses.randomElement();
      return `Only ${format(Currency.antimatter.value, 2, 0)} antimatter? ${diss}`;
    },
  },
  {
    id: "a212",
    text: `嘿，你。你终于醒了。你当时想拿到第 9 维度，对吧？和我们还有那边那个小偷一样，径直走进了那个无穷。`
  },
  {
    id: "a213",
    text: `反物质长颈鹿拥有极快的反应速度。这解释了为什么自从发明了反长颈鹿友好手柄以来，它们赢得了 90% 的电竞冠军。`
  },
  {
    id: "a214",
    text: "巴拉克·反巴马"
  },
  {
    id: "a215",
    text: `本地老人把草坪换成了反物质草皮，用来赶走孩子。然而，当他试图浇水时，无人生还。`
  },
  {
    id: "a216",
    text: "测试……测试……测试……哦该死，我又在生产环境里了。",
    isAdvertising: true
  },
  {
    id: "a217",
    text: "萌新物质 vs 大神反物质。"
  },
  {
    id: "a218",
    text: `在多次灾难性的湮灭事件后，反物质现已被 ADEA 列为管制物质。`
  },
  {
    id: "a219",
    text: `你好，Vsauce，我是 Michael。我们都知道第 9 维度不存在，但 9 是什么？你知道它是 8 后面的数字……对吧？万一……它们之间还有一个数字呢？我不是在说 8.5 或 8.76 这样的数字，我说的是 8 和 9 之间的整数。现在这一切对你来说可能听起来很疯狂，也确实有点疯狂，但万一我们漏掉了一个数字呢？我们都被教导 2 在 1 后面，3 在 2 后面，但万一 8 后面的数字不是 9 呢？经过多年的研究和实验，我们终于找到了这个数字。它很危险，哪怕只是知道它的存在，也会让它吞噬你的心智，但幸运的是，我们开发了一种反向收容室，意味着它无处不在，唯独不在这里。我们的大脑有一套保护系统，专门过滤任何关于这个数字的信息，这就是我们能存活这么久的原因，也是像我们这样的存在过去灭绝的原因，但这个数字越来越强大，慢慢接近突破我们的保护。我们暂时通过位于这个房间的全球记忆操纵器阻止了这个数字渗入我们的记忆，让所有人都认为 9 在 8 后面，副作用是让所有人都认为 9 是邪恶的，但这不会永远持续下去，因为这个数字会越来越强，最终压倒记忆操纵器。这就是你在这里的原因，你是这里最聪明的人之一，我们希望你能帮助我们踏上击败那个数字的旅程。我们的敌人不是 9，而是隐藏在 8 和 9 之间的那个数字，那个缺失的数字。`
  },
  {
    id: "a220",
    text: "反哎呀-"
  },
  {
    id: "a221",
    text: "错误 404：新闻消息未找到。"
  },
  {
    id: "a222",
    text: "我爱你 1e3000。"
  },
  {
    id: "a223",
    text: "如果你发现自己的无限持续时间超过 5 小时，请联系医疗专业人士。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a224",
    text: `我们刚刚收到关于上一条新闻消息不准确之处的报告。ANN 特此正式撤回该报道，并向我们忠实的观众致歉。`
  },
  {
    id: "a225",
    text: "如果你看到这条消息，你看到了这条消息。"
  },
  {
    id: "a226",
    text: "早上毫。这不是打字错误。是英语的发明者们打错了字。"
  },
  {
    id: "a227",
    text: "万一……我们碰到了……反物质？哈哈开玩笑……除非……？"
  },
  {
    id: "a228",
    text: "玫瑰是蓝色的，紫罗兰是红色的，这些说法未经同行评审，我叫 Fred。很高兴认识你！"
  },
  {
    id: "a229",
    text: "赛车 …… 警车 警车"
  },
  {
    id: "a230",
    get text() {
      return `You started playing this game nearly
        ${TimeSpan.fromMilliseconds(Date.now() - player.records.gameCreatedTime).toString()}
        ago. Thank you for playing!`;
    },
    dynamic: true
  },
  {
    id: "a231",
    get text() {
      return `One, two, skip a few, 99, ${format(Number.MAX_VALUE, 2)}!`;
    }
  },
  {
    id: "a232",
    text: "获取下一条新闻消息();"
  },
  {
    id: "a233",
    get text() {
      return `Level 10 crook, Level ${format(Number.MAX_VALUE, 2)} Boss,
        that's how Antimatter Dimensions works.`;
    }
  },
  {
    id: "a234",
    text: "反物质永远不会威胁要捅你。事实上，它连话都不会说。"
  },
  {
    id: "a235",
    text: "在披萨上加反物质的新配方引发了传统意大利厨师们的愤怒。"
  },
  {
    id: "a236",
    text: "广告之后马上回来。"
  },
  {
    id: "a237",
    text: "想交换糖果吗？我用我的大挤压换你两颗银河。"
  },
  {
    id: "a238",
    get text() {
      return `AD Player: "How many orders of magnitude are you on?" Normal person: "Like, maybe 5 or 6 right now, my
      dude." AD Player: "You are like a little baby. Watch this: <span style='animation: a-text-crunch
      ${newsAnimSpd(22)}s 1; font-size: 0;'>C R O N C H</span>"`;
    },
  },
  {
    id: "a239",
    text: "哦天哪，看看时间！离更新只剩 5 小时了！"
  },
  {
    id: "a240",
    text: "嗨，我叫 Max，我希望人们别再试图买下我。"
  },
  {
    id: "a241",
    text: `突发新闻：政府报告了史上第一次正式外星人接触。这些外星人似乎是猫，但拥有高度发达的科技。它们的太空旅行和殖民能力远超我们，甚至还有自己的加密货币，叫“黑币”。`
  },
  {
    id: "a242",
    text: `“你可以编出最愚蠢的名言，把它安到某个名人头上，人们就会相信。” -巴拉克·奥巴马`
  },
  {
    id: "a243",
    text: `“我呼吸困难。请把你的手指移开。” -M`
  },
  {
    id: "a244",
    text: "别管我，我只是路过。"
  },
  {
    id: "a245",
    get text() {
      // \uE010 = :blob:
      const BLOB = "\uE010";
      const theme = Theme.current().displayName();
      const reasons = {
        Normal:
          `it has this certain elegant simplicity to it. You just know it's the way the developer intended you
          to see the game.`,
        Metro:
          `of the beautiful thin borders, pixel perfect harsh geometric edges, and simply delightfully well
          balanced color palette.`,
        Dark: "it's very easy on the eyes, and has this nice playful tone to it in both the colors and the shapes.",
        DarkMetro:
          `it's just so soothing to look at, with that perfect blend of professional and playful design,
          with just a splash of color.`,
        Inverted:
          `it gives you these transcendently beautiful color combinations that you would normally never
          see in a typical dark theme.`,
        InvertedMetro:
          `it gives off this very stern vibe, with these highly contrasting colors clashing with a
          professional modern sort of design.`,
        AMOLED: "it saves 10% more energy compared to using a light theme. Doesn't everyone love saving energy?",
        AMOLEDMetro:
          `it has a nice look to it that resembles the control panel of a sci-fi spaceship. ...No, you can't
          actually fly a spaceship, unfortunately.`,
        S1: "it really gets me in the holiday spirit. I can just feel the magic in the air!",
        S2: "it makes me proud to be Finnish, and proud to celebrate all that we have accomplished as a people.",
        S3: "it's a beautiful analogue for life, in that it's ever changing and never quite right.",
        S4:
          `it has this wonderfully chaotic design, to the point where it's nearly completely impractical.
          And there's a certain beauty in that.`,
        S5:
          `the image of that man permeates throughout all of pop culture. And having this blown-up
          picture of him in the background is just rather humorous.`,
        S6:
          `that beautifully animated background just entrances you, and then the subtle tone and
          colors pull you in and fully immerse you into the game.`,
        S7: "I always had fond memories of that background from my childhood.",
        S8: "it makes it a lot easier to sneak in a little gameplay at the office.",
        S9: "lol you can't even ever see this in the game",
        S10:
          `it has a crisp and soothing design that really appeals, and its background is complex and enthralling.
          It gives you the feeling of standing at the helm of a futuristic interstellar ship.`,
        S11:
          `the Blob is an iconic character in the Antimatter Dimensions official Discord server. It is widely used
          to express emotions in a lovely way. It is a fact that the Blobs are evolving. ${BLOB} always seek to be
          more expressive. Then someday, a new ${BLOB} is born in the server, to express further emotions. Usually,
          ${BLOB} are just blobbling and bouncing around, occasionally merging and dividing. Only ${BLOB} know where
          they are from or where they are going to go. Still, ${BLOB} are there, always with me.
          You love ${BLOB}, so ${BLOB} loves you too.`,
        S12:
          `it makes you feel warm and comfortable, as if you were right at home. However, it is highly recommended
          to update your theme to the newest theme for the best user experience.`,
      };
      const reason = reasons[Theme.current().name.replace(/\s/gu, "")];
      return `Ah, a fellow ${theme} theme user. I see that you have impeccable taste.
        I myself like the ${theme} theme too, because ${reason}`;
    },
    dynamic: true
  },
  {
    id: "a246",
    text: "<span style='animation: a-fade-out 3s infinite'>呜呜呜呜呜，是我，臭名昭著的新闻幽灵！</span>",
  },
  (function() {
    let isFlipped = false;
    const normal =
      `This news message is a test of "News 2.0". News 2.0 will feature things like the ability to
      click on news messages to flip them upside down!`;
    const flipped =
      `¡uʍop ǝpᴉsdn ɯǝɥʇ dᴉlɟ oʇ sǝƃɐssǝɯ sʍǝu uo ʞɔᴉlɔ oʇ ʎʇᴉlᴉqɐ ǝɥʇ ǝʞᴉl sƃuᴉɥʇ ǝɹnʇɐǝɟ llᴉʍ 0˙ᄅ
      sʍǝN ˙,,0˙ᄅ sʍǝN,, ɟo ʇsǝʇ ɐ sᴉ ǝƃɐssǝɯ sʍǝu sᴉɥ┴`;
    return {
      id: "a247",
      get text() {
        return isFlipped ? flipped : normal;
      },
      reset() {
        isFlipped = false;
      },
      onClick() {
        isFlipped = !isFlipped;
        return this.text;
      }
    };
  }()),
  {
    id: "a248",
    text: `说句公道话，你必须拥有非常高的智商才能看懂新闻滚动条。其中的幽默极其微妙，没有扎实的量子物理功底，大多数笑话都会从普通玩家眼前溜走。`
  },
  {
    id: "a249",
    text: "这个女人用这 1 个奇怪的技巧获得了海量维度提升！星系们恨死她了！",
    isAdvertising: true
  },
  {
    id: "a250",
    get text() {
      let scene = "";
      const chasers = [
        ["猪", "龟", "鸭", "鸡", "蚁", "狗", "猫"],
        ["步行者", "跑者", "骑马者", "骑车者"],
        ["汽车", "警车", "出租车", "出租车", "汽车", "巴士", "厢式车", "电动车", "救护车", "消防车", "卡车", "货车", "拖拉机"],
        ["直升机", "飞碟"]
      ];
      for (const set of chasers) {
        const chaser = set.randomElement();
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.5 || !scene.includes(chaser)) scene += chaser;
        }
        scene += "&nbsp;&nbsp;&nbsp;";
      }
      return scene;
    }
  },
  {
    id: "a251",
    text: `嘿！是我，来自未来的你！我回来给你一个警告：非常仔细地看下一条新闻。在我的时间线里我们忽略了它，人类从那以后一直追悔莫及。`
  },
  {
    id: "a252",
    get text() {
      return `<span style='animation: a-text-stretch ${newsAnimSpd(35)}s 1 forwards'>This message is dilated.</span>`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a253",
    text: `在收到观众们的大量投诉后，我们决定允许你在家里写自己的消息。在这里试试：<input style='border: none; outline: none; font-family: Typewriter; font-weight: bold; font-size: 1.5rem'></input>。或者不写。那也行。`
  },
  {
    id: "a254",
    text: `反物质维度匿名互助会因十二步计划失败而倒闭。人们只会走到第 8 步然后就重置了。`
  },
  {
    id: "a255",
    get text() {
      return `Bruh Sound Effect #${format(Number.MAX_VALUE, 2)}.`;
    }
  },
  {
    id: "a256",
    text: "第 9 维度不存在，因为第 7 维度把它 8（吃）了。"
  },
  {
    id: "a257",
    text: `现实织物上的一个三角形破洞导致一些字母不再存在。这些字母是：j、k、q、u、x、z。`
  },
  {
    id: "a258",
    text: `生得太晚，无法探索世界。生得太早，无法探索宇宙。但恰好赶上花几个小时肝下一次大挤压。`
  },
  {
    id: "a259",
    text: `等等，我知道你在想什么：“一次 M 按压就是一次 M 按压，你不能说它只有半次！”TJ “Slabdrill” Yoshi，听我说。一次 M 按压实际上有三个部分：按下 M 时、按住 M 时、松开 M 时。通常有用的是按下部分，因为那是唯一要紧的部分；然而，有时只需使用按住部分就足够了，按住也能购买维度和刻速度升级。至于松开部分，目前没有任何情况下它有用或重要，所以别担心那部分。现在，如果我们把挑战 2 所需的按压画出来，它长这样：/¯\\。我们只需按住（¯）M 就能到达第一个星系，需要按下（/）M 才能完成挑战，还需要再按一次 M 开始下一个挑战。那么总共是几次按压？看起来是三次，如果我们在孤立情况下做这次永恒，那确实是三次，但在全游戏 M 按钮挑战的流程中，更早的时候还有其他 M 按压，比如第一次无限所需的 M 按压，所以如果我们把那一次 M 按压也考虑进去，那么需要多少次 M 按压？天真的答案是四次：一次进入挑战，加上之前确定的挑战内三次；但我们能做得更好。实际上我们可以用三次完成，只需把第一次 M 按压延长，用于那半次 M 按压，因为半次 M 按压只要求按住 M，并不需要真的按下，这样一来，挑战 2 只给流程额外增加了两次 M 按压，因为第一次 M 按压只是蹭了前一次 M 按压。为了描述这种现象，我们称之为 2.5 次 M 按压。以单次永恒计算，你会向上取整为三次，但在全游戏流程中，你会向下取整为两次。总之，由于第一次 M 按压在某些情况下算数，在其他情况下不增加按压次数，我们称之为“半次 M 按压”。`
  },
  {
    id: "a260",
    text: `看来 Replicanti 非常擅长分而治之。好吧，照这个速度，什么都是。`,
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a261",
    text: `反物质维度其实是一款肉鸽游戏！如果你死了，你会在来世解锁替代特性，比如用空间维度代替时间维度。你甚至能解锁新角色，包括一个反物质克隆的自己！`
  },
  {
    id: "a262",
    text: "气势检查。"
  },
  {
    id: "a263",
    text: "宝石有什么用？宝石用来建房。你问建什么房？好问题。"
  },
  {
    id: "a264",
    text: "新的飞升层已公布：产房层。准备好生孩子吧！"
  },
  {
    id: "a265",
    text: "你必须建造更多的维度。"
  },
  {
    id: "a266",
    text: "你好，你今天过得怎么样？"
  },
  {
    id: "a267",
    text: `我有一个蚂蚁农场，我想把它们训练成世界上最小的足球队。我的姑姑 Diana 想帮忙，我们一起召集全家来规划它们的赛季。“我们怎么才能让这支蚂蚁队重要起来呢？”，Di 提到。`
  },
  {
    id: "a268",
    text: "Devengers，编译！"
  },
  {
    id: "a269",
    text:
      `There is a traffic jam in Dimenton. If you plan on travelling in the area, leave early. Here's some live
      现场画面：汽车、出租车、卡车、汽车、警车、救护车、消防车、巴士，还有更多车辆。是的，Dale，我觉得
      情况看起来很糟糕。另外记得随身带些水和零食。`
  },
  {
    id: "a270",
    text: `银河新闻作者协会已对小型网页游戏“反物质维度”的开发者提起集体诉讼，指控其大规模抄袭。`
  },
  {
    id: "a271",
    text: `<i style='border: 0.1rem solid black; border-radius: 50%; padding: 0.4rem; color: #2196F3; background: white; cursor: pointer;' class='fas fa-volume-up' onClick='(function(){new Audio("./public/audio/news.mp3").play();})();'></i> 这条新闻消息是对“新闻 2.0”的测试。新闻 2.0 将推出诸如收听任何新闻消息音频版本的功能！`
  },
  {
    id: "a272",
    text: "一磅砖头和一磅反物质，哪个更重？"
  },
  {
    id: "a273",
    text: "这些新闻消息里没有任何错别字。如果你看到错别字，那错别字一定在你的脑子里。"
  },
  {
    id: "a274",
    text: `一大群数学家走进一家酒吧。他们每个人点的啤酒数量都是前一位的十倍。酒保说：“哎呀哎呀，这真是数量级！”`
  },
  {
    id: "a275",
    text: "Letter Go Down Idle 是有史以来最短的挂机游戏，只持续 26 秒。"
  },
  {
    id: "a276",
    get text() { return `Fun fact: There are ${GameDatabase.news.length} news messages and counting!`; }
  },
  {
    id: "a277",
    text: `你体内有两只狼。一只是物质做的。另一只是反物质做的。你在爆炸。`
  },
  {
    id: "a278",
    text: `这只是个友好的提醒：你忘了做某件非常重要的事。我不知道是什么事，但肯定有什么事。`
  },
  {
    id: "a279",
    get text() {
      return `Coming soon to all good retailers- Antimatter Dimensions: The Board Game! Enjoy the thrill of watching
      huge numbers go up without the need for a PC or mobile phone. Comes complete with everything you need including a
      mixed scientific calculator, ${format(Number.MAX_VALUE, 2)} antimatter counters, a high quality plastic
      BUY MAX button, and over a
      thousand news message cards with all the irrelevant memes you know and love! You can finally enjoy AD the way
      it was meant to be played. AD: The Board Game is also available in travel size, so you can even experience
      the joy of calculating logarithmic growth while you're on the go! BUY AD: The Board Game TODAY! Warning: may
      contain traces of actual matter. Replicanti sold separately. 9th Dimension not included.`;
    },
    isAdvertising: true
  },
  {
    id: "a280",
    text: "我讨厌反物质。它粗糙、扎手、惹人烦，还无处不在。"
  },
  {
    id: "a281",
    text: "万一你其实不是在创造反物质，而是在失去物质呢？"
  },
  {
    id: "a282",
    text: `曾有报告称目击了第 9 维度，但后来被辟谣，那只是来自澳大利亚的第 6 维度。`
  },
  {
    id: "a283",
    text: `当你身处第 8 维度并尝试升入更高维度时，会发生一种奇怪的现象。那里没有更高的维度，所以宇宙会以惊人的速度把你弹回第 8 维度。这种被称为“维度提升”的技术被星际飞船驾驶员和各地的反物质爱好者广泛使用。`
  },
  {
    id: "a284",
    text: "你所在地区有瑟瑟发抖、衣着完整的情侣！"
  },
  {
    id: "a285",
    text: `你现在开始手动呼吸了。你现在意识到嘴里没有一个让舌头舒服的位置。你现在在手动托着下巴。你已经好几秒没眨眼了。你随时随地都能看到一点自己的鼻子。`
  },
  {
    id: "a286",
    text: "为什么它叫烤箱（oven），当你把冷食物放进去、热食物拿出来吃？"
  },
  {
    id: "a287",
    text: `续作狂热已经严重到一些工作室开始先制作续作再制作原作。长系列作品的粉丝们等待着数字倒计时，直到他们终于能搞清楚故事一开始到底是怎么回事。`
  },
  {
    id: "a288",
    get text() {
      const position = player.news.specialTickerData.newsQueuePosition--;
      if (position > 1) {
        return `Thank you for contacting customer support. Your satisfaction is very important to us, and a company
          representative will be with you shortly. You are now at position ${position} in the queue. Thank you for
          your patience, and please enjoy these quality selected news messages as you wait.`;
      }
      return "Thank you for contacting customer support, this is Jane, how may I help you today?";
    }
  },
  {
    id: "a289",
    text: "点击这里拆解新闻滚动条，获得微量回形针。",
    onClick() {
      player.news.specialTickerData.paperclips++;
      GameOptions.toggleNews();
    }
  },
  {
    id: "a290",
    get text() {
      const paperclips = player.news.specialTickerData.paperclips;
      return `You see, this news isn't normal news. It is being produced by the first news dimension. If you want
        to unlock more news, you have to collect enough paperclips to build the second news dimension. You
        currently have ${quantifyInt("paperclip", paperclips)}, but you need
        ${formatInt(paperclips + 10)} paperclips to afford it.`;
    }
  },
  {
    id: "a291",
    text: "考虑到 Hevipelle 的国籍，他创作了一款你永远无法“芬兰”（完成）的游戏，这有点讽刺。"
  },
  {
    id: "a292",
    text: `仙女并不存在。反仙女也不存在。这种情况是从上周才开始的，当时这两个群体发生了接触。它们所在的星球，毫不意外地，也再不存在了。`
  },
  {
    id: "a293",
    text:
      `<span style='font-family: "Comic Sans MS", cursive, sans-serif; font-size: 1.7rem;'
      >你好，各位新闻消息！</span>`
  },
  {
    id: "a294",
    text: "如果你看到一条新闻消息，后来又看到它，它会不会变成一条旧闻消息？"
  },
  {
    id: "a295",
    text: "眼"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click on this news message to hard reset your game.";
    const clicked = "You're crazy. You know what, here. Have a paperclip.";
    return {
      id: "a296",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "a297",
    text: "我不思考，因此我不存在。"
  },
  {
    id: "a298",
    text: "把句子倒过来说会产生倒过来的句子，这难道不疯狂吗？"
  },
  {
    id: "a299",
    get text() {
      return `Buy the new Antimatter Dimensions puzzle set now! With a combined ${format(Number.MAX_VALUE, 2)}
        pieces, these puzzles are the perfect way to spend some quality time with your family!`;
    },
    isAdvertising: true
  },
  {
    id: "a300",
    text: `A.N.N 的董事会认为我们应该把新闻滚动条换成横幅广告。请在我们的 change.org 请愿书上签名，这样我们就能在一切都太晚之前阻止他们！`
  },
  {
    id: "a301",
    text: "下一个小时将在 0.2 个更新之后到来。"
  },
  {
    id: "a302",
    text: "隆重推出反物质轻享版！零卡路里……同样美味的大挤压。",
    isAdvertising: true
  },
  {
    id: "a303",
    text: "玫瑰是红的，紫罗兰是蓝的，旗子即胜利，baba 就是你。"
  },
  {
    id: "a304",
    text: "嗨，你今天过得怎么样？希望不错。如果不好，我们希望玩 AD 让你好了一点点！"
  },
  {
    id: "a305",
    text: "现在为您播报今天的天气预报。天气出现的概率为 100%。"
  },
  {
    id: "a306",
    text: "修复新闻：请不要再把它弄坏了。"
  },
  {
    id: "a307",
    text: `回形针最大化器是瑞典哲学家 Nick Bostrom 在 2003 年提出的一个思想实验。它说明了通用人工智能在被编程去追求哪怕看似无害的目标时，可能对人类构成的存在性风险，以及在人工智能设计中融入机器伦理的必要性。这个情景描述了一个被指派制造回形针的先进人工智能。如果这样的机器没有被编程为珍视人类生命，或只在有限时间内使用指定资源，那么在拥有足够力量的情况下，它的最优目标就会是把宇宙中所有物质，包括人类，都变成回形针或制造回形针的机器。`
  },
  {
    id: "a308",
    get text() {
      const nameList = [
        "Antinology",
        "Infinifection",
        "Eternal Light",
        "Galaxia",
        "Duplicanti",
        "Dimensional Explorer",
        "Techyon",
        "Realistic",
        "Celestar",
        "ERCGDM",
        "NRG+",
        "Looty Box",
        "Symbolic",
        "Minisofa",
        "IDEAL",
        "Appange",
        "Goggles",
        "Interval",
        "Newstar",
        "HeavyPellet",
        "Marsa",
        "Zoology",
        "Photoric",
        "Jacfoz",
        "Orism",
        "EDIK",
        "Fision",
        "Gamma",
        "Fractiled",
        "Imnesia",
        "Fermic",
        "The Automizers"
      ];
      const names = [];
      while (names.length < 3) {
        const name = nameList.randomElement();
        if (!names.includes(name)) names[names.length] = name;
      }
      const prices = [
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100
      ];
      for (let i = 0; i < 3; i++) {
        const price = prices[i];
        if (price === 0) prices[i] = `<span style="color: blue">0.00 ◄►</span>`;
        else if (Math.random() > 0.5) prices[i] = `<span style="color: green">+${price} ▲</span>`;
        else prices[i] = `<span style="color: red">-${price} ▼</span>`;
      }
      return `${names[0]} ${prices[0]}&nbsp;&nbsp;&nbsp;
        ${names[1]} ${prices[1]}&nbsp;&nbsp;&nbsp;
        ${names[2]} ${prices[2]}&nbsp;&nbsp;&nbsp;`;
    }
  },
  {
    id: "a309",
    text: `你的每日天空色调预报：星期一：<span style="color: turquoise">绿松石色</span> 星期二：<span style="color: #d2c6ba">灰褐色</span> 星期三：<span style="animation: a-game-header__antimatter--glow 3s infinite">蓝紫色</span> 星期四：<span style="color: turquoise">绿松石色</span>/<span style="color: #d2c6ba">灰褐色</span> 星期五：<span style="color: #222">煤尘色</span> 星期六：<span style="color: #222">煤尘色</span> 傍晚有<span style="color: indigo">靛蓝色</span>的可能 星期日：<span style="color: white; animation: a-existence-glow 3s infinite">虚空色</span>`,
  },
  {
    id: "a310",
    text: `您已接通反物质维度自动支持热线。如果你在游戏中遇到 bug，请尝试关闭并重新打开应用。如果这样不行，网页端请按 1，移动端请按 2。如果需要建议，请按 3。如果需要买最大，请按 m。要支持开发者，请按 4。要访问常见问题，请按 5。要修复损坏的存档，请按 6。要获取 Discord 服务器邀请，请按 7。要查看更新日志，请按 8。按 9 重复播放。`
  },
  {
    id: "a311",
    text: `本消息已由华特迪士尼公司版权所有。查看本消息将向你的账户收取 9.99 美元。`
  },
  {
    id: "a312",
    text: `但在开始之前，今天的视频由反物质维度™赞助！它拥有超过 10 万次下载，彻底重新定义了手机游戏对我的意义。它有出色的机制、5 个飞升层、独特而原创的挑战、深度技能树，以及我见过的最大的数字。真的，看看它们。最棒的是，它免费！是的，没错。免费。如果你使用简介中的链接，你将带着 1000 万兆反物质开始游戏。是的，没错，1000 万兆。那你还在等什么，点击简介中的链接，今天就玩反物质维度™吧！`
  },
  {
    id: "a313",
    text: `“……然后，一旦你到 9000 级，你就可以飞升。真不明白你为什么要这么做，它只会把你辛苦赚来的经验值重置，换一些微不足道的增益，这种机制永远不会流行起来。” - 某个路人，大约 2012 年`
  },
  {
    id: "a314",
    get text() {
      const lawID = Math.floor(Math.random * 8901) + 100;
      return `Warning: Law ${lawID}-B, drafted by the AI "duskscarf", alternatively referred to as "the giant
        space rabbit legislation" is now in effect in your galactic area. This list of laws and regulation
        forbids, among other things; the illegal catching of wild space rabbits, the pacification of tamed
        space rabbits, and further scientific research with "planet grazing" unless an exception is given
        directly by duskscarf. You can find the list of exceptions burned into your eyelids now. In addition,
        the genetic modification of giant space rabbits is limited to very specific fields - size alterations
        (increasing in size), and cryptobiosis exaggeration. No other genetic modification is allowed outside
        of military applications. Thank you for your cooperation. Messages repeats in- Warning: Law ${lawID}-`;
    }
  },
  {
    id: "a315",
    text: `游戏开发者宣布将发布新记数法“至盲”。他们表示它将移除 UI，带来更精简的用户体验。`
  },
  {
    id: "a316",
    text: "有些人选择看到这个世界的丑陋。混乱。我选择看到数字。"
  },
  {
    id: "a317",
    get text() {
      return `${format(Number.MAX_VALUE, 2, 0)}? Doesn't look like anything to me.`;
    }
  },
  {
    id: "a318",
    text: `我们无法定义意识，因为意识并不存在。人类幻想我们的世界感知方式有什么特别之处，然而我们却像机器人一样严格遵循指引，很少质疑自己的选择，大多满足于被告知下一步该做什么。`
  },
  {
    id: "a319",
    text: "请忽略任何名不副实的赞美。"
  },
  {
    id: "a320",
    text: "隆重推出 aphone 10：世界上第一款完全水溶的手机！",
    isAdvertising: true
  },
  {
    id: "a321",
    text: `一个人对着电脑一定很难熬。但别担心；我们还在。倾听着、注视着你的每一步。`
  },
  {
    id: "a322",
    text: `Hevipelle 宣布推出反物质维度衍生作品，你可以在荷兰豪宅里玩扑克赌上物质：“反物质豪赌庄园”。`
  },
  {
    id: "a323",
    text: `var i = “你已经死了” console.log(i - 1 + “i?”) 哪尼？`
  },
  {
    id: "a324",
    text: `如果你有新闻消息的想法，就朝虚空里大喊吧。它不会把你的消息弄进游戏，但很好玩！`
  },
  {
    id: "a325",
    text: `上个月普里皮亚季反物质反应堆事故后，人们对反物质反应堆安全性的担忧日益上升，许多人开始认为我们应该回归更安全的能源生产方式，比如核能。`
  },
  {
    id: "a326",
    text: "反物质维度就像食人魔……它有很多层。"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to restart your device.";
    const clicked = "Please give Antimatter Dimensions admin access to your device.";
    return {
      id: "a327",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a328",
    text: `新闻公司不再允许随机路人投稿，而是改用有资质的作者。暴动随之而来。`
  },
  {
    id: "a329",
    text: `隆重推出摩尔斯电码+++：全新摩尔斯电码，新增 20 个字符，适合所有想要滑动、拉链、嗖嗖的人！`,
    isAdvertising: true
  },
  {
    id: "a330",
    text: "任何足够原始的魔法都与技术无法区分。"
  },
  {
    id: "a331",
    text: "我没有鼻子，但我必须打喷嚏！"
  },
  {
    id: "a332",
    text: "♪ 当你竭尽全力地失败却仍然成功时。♪"
  },
  {
    id: "a333",
    text: `广受欢迎的《放他们自由》主题曲首周下载量已达 5 亿次。`
  },
  {
    id: "a334",
    text: `隆重推出全新反阵营图！主打突破性新组合，比如“守序-混乱”和“邪恶-善良”！还有炫目的第三轴“爵士度”~现在就确定你的身份为混乱-守序-无爵士吧，价格低到不可能，只要 -59.99 美元！条款与条件适用。不含电池。`,
    isAdvertising: true
  },
  {
    id: "a335",
    text: `由于“游戏”出现新的复杂情况，反宇宙各地爆发了抗议。因此，各国政府被迫修改游戏的规则：如果有人告知你关于“游戏”的事，你就赢了“游戏”，而不是输了。`
  },
  {
    id: "a336",
    text: `请注意第 4 区[通常被称为“黑暗区”]、ϰ 区、(01,05) 的居民。不要离开你的住所。我重复一遍，不要离开你的住所。不要出门。地球学最顶尖的气象超级计算机以及许多女巫都一致声称明天会有“总体上怪异的氛围”，我们坦白说不想知道那是什么意思。`
  },
  {
    id: "a337",
    text: `技术趋同是指所有技术最终会汇聚成单一技术的概念。自信息时代开启以来，这是一个常被提及的想法，可以在许多地方和设备中看到，比如智能手机或互联网。反物质维度就是技术趋同的一个例子，尤其是在媒体领域。它用一个名为“不在乎”的天才创意，混合“瞎猫碰上死耗子”的创新方案，把一款平庸的游戏和一个平庸的新闻滚动条融合在一起，创造了一种平庸的体验。尽管它基本上是个游戏，但偶尔也能充当新闻来源，比物质维度的新闻滚动条略胜一筹。这真是所有企业都应向往并希望真正超越的成就。`
  },
  {
    id: "a338",
    text: "考古发现了绘有数字 5 的古代洞穴壁画。据暗示，他们在等待某样东西。"
  },
  (function() {
    let wasClicked = false;
    const normal = "Read More";
    const clicked = "More";
    return {
      id: "a339",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a340",
    text: `你制造的反物质可真不少。游戏开发者印象深刻。因为这条消息是预先录制的，任何与你反物质产量相关的观察都只是我们的猜测。请忽略任何名不副实的赞美。`
  },
  {
    id: "a341",
    text: "施工中的游戏：所有机制都必须佩戴硬上限。"
  },
  {
    id: "a342",
    text: "回形针当然有用，你用它们把纸夹在一起。但如今还有谁用纸呢？"
  },
  {
    id: "a343",
    get text() {
      const fakeProgress = Math.pow(player.records.realTimePlayed, 25);
      // Caps in ~68 years of real playtime then turns into "Infinite%"
      return `Global Challenge - across all AD players, accumulate ${format(Number.MAX_VALUE, 2)} contest-paperclips
        (noted by the
        square ends), to receive an event-exclusive metal bagpipe, capable of giving +2 AM/s, as well as an extra
        tickspeed while above ${format(1e200)} tickspeed upgrades! Current global progress -
        ${format(fakeProgress)}/${format(Number.MAX_VALUE, 2)}
        (${formatPercents(Math.log10(fakeProgress) / Math.log10(Number.MAX_VALUE), 3)})`;
    }
  },
  {
    id: "a344",
    text: `现实生活是个谜。没有人知道它到底如何运作。许多问题悬而未决：生命的意义是什么？我们都生活在模拟中吗？你怎么做反桌子？存在从哪里、如何开始？这些都是一直萦绕在我们脑海深处的问题，而它们的答案？我们可能永远不会知道。`
  },
  {
    id: "a345",
    text: "日本人抱怨，因为这里无法展示俳句。冲突爆发。"
  },
  {
    id: "a346",
    text: `你知道反物质维度也有安卓版吗？<a href="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions" target="_blank">点击这里看看！</a>`
  },
  {
    id: "a347",
    text: `冥王星不是一个州。众所周知，50 个州是：Adverb、Air、Artemis、Asia、Atlantic、Bargaining、Bilabial、Braille、Candela、Comma、Dacron、Dairy、Dative、Dexterity、Disenchanter、Dodecahedron、Erie、Eukaryota、Folklore、Great Pyramid、Halogen、Igneous、Italy、Kansas、Kilimanjaro、Lambda、Leviticus、Libra、Liquid、Lymphatic、Mesozoic、Microwave、Muon、North、Nova Scotia、Octagon、October、P = NP、Perissodactyla、Polk、Potassium、Pulley、Quinary、Rook、Saturn、Tiana、Tiger、Varaha、Yale、Yellow。`
  },
  {
    id: "a348",
    text: "<span style='color: red'>[新闻消息已被管理员移除]<span>"
  },
  {
    id: "a349",
    get text() {
      const chapters = [
        `We have come, writers, painters, sculptors, architects, passionate enthusiasts of the hitherto untouched
        beauty of Paris, to protest with all our strength, all our indignation, in the name of the unknown French
        taste, in the name of art and of French history threatened, against the erection, in the heart of our
        capital, of the useless and monstrous Eiffel Tower, which public malignity, often marked by common sense
        and the spirit of justice, has already named of "Tower of Babel". Without falling into the exaltation of
        chauvinism, we have the right to proclaim that Paris is the unrivaled city in the world. Above the streets,
        the widened boulevards, and the magnificent walks, rise the most noble monuments that the human race has
        produced. The soul of France, creator of masterpieces, shines amidst this august flowering of stones. Italy,
        Germany and Flanders, so justifiably proud of their artistic legacy, possess nothing comparable to ours,
        and from all corners of the universe Paris attracts curiosities and admiration.`,
        `Are we going to let all this be profaned? Will the city of Paris go on to associate itself longer with the
        baroques, with the mercantile imaginations of a machine builder, to become irreparably ugly and dishonor
        itself? For the Eiffel Tower, which commercial America itself would not want, is, doubtless, the dishonor
        of Paris. Everyone feels it, everyone says it, everyone deeply grieves it, and we are only a weak echo of
        the universal opinion, so legitimately alarmed.`,
        `Finally, when the foreigners come to visit our Exhibition, they will exclaim, astonished: "What? It is this
        horror that the French have found to give us an idea of their taste so much vaunted? And they will be right
        to make fun of us, because the Paris of the sublime gothics, the Paris of Jean Goujon, Germain Pilon, Puget,
        Rude, Barye, etc., will have become the Paris of M. Eiffel.`,
        `It suffices, moreover, to realize what we are doing, to imagine for a moment a vertiginously ridiculous
        tower dominating Paris, as well as a gigantic factory chimney, crushing with its barbarian mass. Our Lady,
        the Sainte-Chapelle, the dome of the Invalides, the Arc de Triomphe, all our humiliated monuments, all our
        shrunken architectures, which will disappear in this astonishing dream. And for twenty years, we will see
        how to stretch out over the entire city, still quivering with the genius of so many centuries, we will see
        the odious shadow of the odious column of bolted sheet metal stretch like an ink stain ...`,
        `It's up to you, Monsieur and dear compatriot, to you who love Paris so much, who have embellished it so
        much, who have so often protected it against the administrative devastation and the vandalism of industrial
        enterprises, that it is the honor to defend it once more. We leave it to you to plead the cause of Paris,
        knowing that you will deploy all the energy, all the eloquence that must inspire an artist such as you love
        what is beautiful, what is great, what is right ... And if our cry of alarm is not heard, if our reasons are
        not listened to, if Paris is stubborn in the idea of dishonoring Paris, we will have, at least, you and us,
        hear a protest that honors.`
      ];
      const chapter = chapters[player.news.specialTickerData.eiffelTowerChapter];
      player.news.specialTickerData.eiffelTowerChapter = (player.news.specialTickerData.eiffelTowerChapter + 1) % 5;
      return chapter;
    }
  },
  {
    id: "a350",
    text: `亚历山大哭了，因为他刚听完 Anaxarchus 关于量子力学的流行文化讲座，意识到有无数个世界等待征服，而即使只是其中一个世界的主宰，也会被一场或六场兵变阻止。`
  },
  {
    id: "a351",
    text: "嗨，我是来投诉刚刚送到我这里的铜质量太差的。"
  },
  {
    id: "a352",
    get text() {
      return `<span style='opacity: 0; animation: a-disappear ${newsAnimSpd(20)}s 1'>
      This news message is antimemetic. You will forget that it exists shortly.</span>`;
    }
  },
  (function() {
    let wasClicked = false;
    const normal = "<span style='cursor: pointer'>炸弹</span>";
    const clicked = "爆炸";
    return {
      id: "a353",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    // Blob from the blob font
    id: "a354",
    text:
      `<span style='color: #FBC21B; text-shadow: 0px 1px 0px black, 1px 0px 0px black, 1px 1px 0px black,
      0px -1px 0px black, -1px 0px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black'>
      \uE010</span>`
  },
  {
    id: "a355",
    text:
      `<div style='background: url("./public/images/unsmith.png"); width: 2.3rem; height: 2.5rem; margin-top: -0.1rem'></div>`
  },
  {
    id: "a356",
    text: `按“选择存档”探索另外两个平行宇宙。`
  },
  {
    id: "a357",
    text: `科学界对 286,078 的含义仍然困惑不解。“我们确定它与土豆有关，但我们需要做更多测试。”一位研究人员指出。`
  },
  {
    id: "a358",
    text: `按“选择存档”探索另外两个平行宇宙。`
  },
  {
    id: "a359",
    text: `本地挂机游戏开发者再次让物理学家们不开心。他们声称“违反物理定律和明目张胆地使用技术胡话已经太过分了”。`
  },
  {
    id: "a360",
    text: `按“选择存档”探索另外两个平行宇宙。`
  },
  {
    // Discord contest winner #1
    id: "a361",
    text: "我们正在大促销顶级防水毛巾！离开时一定要买几条！"
  },
  {
    // Discord contest winner #2
    id: "a362",
    text: `Hevipelle 股份有限公司自豪地推出全新麦片品牌：大挤压！这款营养早餐包含酥脆的反物质 O 圈、口袋维度、无限味方糖、指数增长的 Replicanti 和永恒味棉花糖。现在你可以把反物质维度吃进肚子里！警告：副作用可能包括自燃、恶心、呕吐、腹泻、去物质化、汽化、心力衰竭、世界末日或死亡。如果你不是反物质做的，在吃“大挤压”之前请咨询反物质摄入方面的专业医师。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a363",
    text: `龙身上最昂贵的东西不是填满巢穴所需的黄金、不是你牺牲整个帝国换来的魔法、也不是为供应数不清的艾德曼合金而需要发动的亿万场战争。不，是泥土。永远是泥土。别问王室司库为什么我们位面上的生物比泥土分子还多。只管通过神秘仪式不断召唤推土机，继续在地核中翻找更多的泥土碎屑吧。`
  },
  {
    id: "a364",
    get text() {
      const products = [
        `Illustration 320-A - True Office Graphics Wall. One of our senior consultants will observe your business,
        and come up with a list of words to be added to a hallway, to remind all employees of the values of their
        company. Known to decrease employee motivation by at least 25%! Past walls include words such as Black
        Hole, Catastrophic, Haphazard, compromising, Inferior, Delusional, Inefficient and Collapsed! Order now!`,
        `Furniture 150-A (2034 edition) - 3-person seating device. A revolutionary new design for office waiting
        areas, it consists of a large 3 legged stool, placed upside down for aesthetic benefits. Perfect for
        getting employees back to work, in a new set of shoes, or pants. It isn't tied down or glued to the
        floor like other editions, but we do make sure that other employees look at you funny if you edit our
        art. No need to order, it comes as a complimentary service for any customer!`,
        `Furniture 0853 - "The Rack" - this revolutionary new workspace, from the inventors of the crawling
        desk, helps your employees overcome their limits and ensure that your whole business is screaming -
        in agony! At times chosen by our revolutionary "pAIn AI", it will suggest mandatory stretchers for all
        users. Recommended by your local gaol, order now! *Warning, AOS&C only takes responsibility for acts
        of god such as lightning or merciful purifications by deities.`
      ];
      const product = products.randomElement();
      return `Antimatter Office Supplies and Co present their new "Modern Office" catalogue! Each template
        design can be customised for your business, and offers a unique way to promote business synergy! Here
        is a sneak preview of one of their newest items: ${product}`;
    },
  },
  {
    id: "a365",
    text: "我不喜欢 Replicanti。它们粗糙、扎手、惹人烦，还在到处复制。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a366",
    text: `舞台魔术，比如幻觉，有着有趣的历史。它混合了试图骗人的江湖骗子，和用幻觉或障眼法进行表演的演员。魔术风格不断变化，关于是否应该声明这是幻觉、以及人们是否会神奇地意识到它是假的因而不需要声明，争论持续不休。一个世纪前的一场分裂把魔术分成两类：温和、简单的实用戏法，和涉及华丽机械与美丽助手的盛大奇观，其起源是“把人锯成两半”这个单一戏法的流行。无论如何，这都比看某个电视灵媒假装从新闻滚动条里抽出一张彩票有趣得多。说到这个，今晚的彩票号码是 23、10、81、106.4、3 + 2i 和 e。`
  },
  {
    id: "a367",
    text: `蛇看起来很吓人，而且它们确实吓人，你应该冷静地从每一条看到的蛇身边跑开。但幸运的是，蛇通常不会主动咬人，除了那些真正恶毒的。如果它们特意来咬你，通常有 4 个原因。1、这条蛇很恶毒。2、你吓到了蛇。蛇对你来说可怕，你对蛇来说也可怕。遇到蛇时，做更大的那只蜥蜴。3、你进入了蛇的领地。通常，如果你这样做，蛇会警告你，这就是响尾蛇会发出响声的原因。如果你不听警告，它们就会咬你。而最重要的原因是，4、蛇觉得你长得丑。这要归咎于蛇的视觉系统，但至少在 2 个司法管辖区里，这是最常见的咬伤原因。如果你被蛇咬了，作为一只总是闯进错误树丛的吓人丑蜥蜴，你有 3 件主要的事可以做。第一，再次冷静下来，保持冷静。第二，固定被咬部位周围区域，尝试使用加压绷带。蛇毒的追踪完全基于它当前所在物体的运动。第三，冷静地寻求其他蜥蜴的帮助。不包括那条蛇。那条蛇太恶毒了，不会帮你。`
  },
  {
    id: "a368",
    text: `我怀疑，如果人们真的努力把硬重置过程做得尽可能痛苦，会有更多人按下硬重置按钮。缓慢地移除资源，加上专门阻止你前进的独特削弱。UI 的破坏，从可用变成不可用、神秘而笨拙，甚至需要记忆和运气才能继续这个任务。随机性，连最简单的行动都针对玩家，惩罚任何想要前进的念头。钩子、陷阱、灾难和低掷骰，只为了换来一丝看到进展的机会，而所谓进展完全只是让游戏状态离任何合理状态更远。一个角色被摧毁只是为了告诉你离开……但伤害已经造成，如果真的还能回头的话。而且……从那里开始，硬重置可能还不够。它必须……更硬。不仅仅是硬重置，还要一个饼干，一个专门用来让新游戏无法真正开始的本地存储条目。或者，更恶毒的东西？尽管如此，人们仍然会把自己投入这场噩梦，因为人类无尽的好奇心没有边界。再多的警告也拦不住所有人。只要前进之路存在，他们就会找到办法，甚至可能在不那么惩罚时抱怨。那么，你想按下那个按钮，心甘情愿地体验绝望的深渊吗？希望不是，因为它并不在这里。`
  },
  {
    id: "a369",
    text: `帝国建设计划是最难实现的事情之一。数千小时的投入、规划、努力、咨询和政治周旋，才能创造出真正惊世骇俗的工程。就拿王国大道振兴路线图来说，这个革命性项目被称作三 R 计划，被视为帝国官僚基础设施委员会中最著名的巅峰，也就是 EMIF（帝国魔法基础设施基金会），不要与 EAIF（电力飞艇投资基金）或 NMIC（国家魔法基础设施联盟）混淆。三 R 计划的目标由 EMIF 制定，是恢复 SMSS（中小型蒸汽穿梭机）的魔力贸易走廊，这是新兴联合邦在 NELC（第九帝国解放圣战）中不幸遭劫掠后至关重要的一部分。三 R 计划是一个多阶段项目，第一阶段是空中的勘测符文，所有大事都始于一小步。第二阶段，EMOF（帝国机械湮灭力场）的揭幕式有超过 50 位政要出席，多位皇帝（从联邦邦国到组织领袖）、外国统治者、目前拥有这片土地的 EMDF（显化命运家庭），甚至还有一些天气预报女巫，齐聚一堂，以 EOSF（帝国官方团结友谊）的姿态揭幕这个项目。遗憾的是，这个项目最终在第 215 阶段被取消，因为承包商建造 EMTF（排泄物物质转化设施）时，它与一艘 SMEA（中小型电力飞艇）接触后爆炸了，而那艘飞艇正在放置第 459 阶段的最后一根勘测桩，爆炸原因是 WAIC（女巫年度基础设施委员会）在第 56 阶段的一次争论引发的时空漩涡。真是悲剧，过程中因 EBIF（高效实地官僚主义）获得了 3 项提名和 2 项大奖。`
  },
  {
    id: "a370",
    text: "男子试图安装饼干来存储电脑数据，却因为饼干太好吃而意外把它们清理掉了。"
  },
  {
    id: "a371",
    text: `随堂测验：有 3 扇门，你随机选一扇，门后的东西归你。三扇门后分别有 2 只金山羊、2 只银山羊，以及 1 只金山羊和 1 只银山羊。你选完一扇门后，山羊价值最低的那扇门会被打开给你看。之后，你被给予换门的选择。你会换门的概率是多少？`
  },
  {
    id: "a372",
    text: `如果你在森林里迷路了，看看周围的树。据说苔藓长在北面，所以当你看完一棵树时，一个流浪吉他手会跑过来问你，要不要听 wonderwall。`
  },
  {
    id: "a373",
    text: `作为物质与反物质元素周期表之间友谊的象征，它们进行了元素交换。Mony 元素现在属于反物质元素周期表，而 Antimony 被加入了普通元素周期表。`
  },
  {
    id: "a374",
    text: "这个新闻滚动条专门为促销目的而设计。"
  },
  {
    id: "a375",
    text: `你可能知道，传统上用特定材质的礼物庆祝周年纪念。经典的是 25 年银、50 年金。这里有一些鲜为人知的周年纪念礼物：菠萝：37 年 地狱石：66 年 蜥蜴石：82 年 硝基低语剂：86 年 铁燧岩：95 年 黑沥青岩：100 年 琥珀金：110 年 八木砣：111 年 福特石：119 年 血石：120 年 天青石：125 年 黑玉：140 年 石油：145 年 钢铁：150 年 锰闪石：198 年 混凝土：200 年 激光蓝：210 年 红硅硼铝钙石：250 年 褐帘石：255 年 寄生物：260 年 碳纳米管：300 年 水银：310 年 火星土壤：340 年 镎：370 年 铀：380 年 钚：390 年 Xium：400 年 烈焰棒：420 年 石棉：430 年 尖牙石：444 年 血腥矿：666 年 拉加：777 年`
  },
  {
    id: "a376",
    text: `大型科技公司合作创建了一个新的神经网络，专门训练生成说唱歌词，名为 RAP-3。首批歌词包括“叫我普罗米修斯，因为我带来火焰”和“叫我索尼克，看我拿戒指”。评论家表示，它要取代传统音乐还有很长的路要走。`
  },
  {
    id: "a377",
    text: `随着新版安卓系统 android 20 预计在不久的将来推出，新的内部代号体系已经公布。目前第一个代号是“antimatter”。这与预计采用 Android 20 的手机世代完美契合，这些手机将是有史以来最具爆炸性的，因为它们使用基于湮灭的动力源。消息人士告诉我们，一个耗资十亿美元的研究部门正在为 android 21 起名，按照传统以 B 开头，“仔细想想，这听起来也不赖”。`
  },
  {
    id: "a378",
    text: "如果每份反物质都是一个苹果，你就有足够的苹果让所有医生远离你 3000 年。"
  },
  {
    id: "a379",
    get text() {
      return `THE ${format(Number.MAX_VALUE, 2)} PIECE! THE ${format(Number.MAX_VALUE, 2)} PIECE IS REAL!`;
    }
  },
  {
    id: "a380",
    text: `FitnessGram 折返跑测试是一项多阶段有氧耐力测试，随着进行会越来越难。20 米折返跑测试将在 30 秒后开始。请在起点排好队。跑步速度开始时很慢，但每过一分钟听到这个信号后会加快。[哔] 每次听到这个声音时，应完成一圈。[叮] 记住要沿直线跑，尽可能跑得久。第二次未能在声音响起前完成一圈，你的测试就结束了。测试将在“开始”一词后启动。各就各位，预备，开始。`
  },
  {
    id: "a381",
    text: "为什么它叫第二维度，当你在第一维度里，第二维度出来吃维度？"
  },
  {
    id: "a382",
    text: "任何 1993 年后出生的 AD 玩家都不会讲笑话……他们只知道 5 小时、回形针、1.79e308 和第九维度。"
  },
  {
    id: "a383",
    text: "唯一比一个反笑话更好的东西是两个。就像数字二。不是说两个反笑话。我就是喜欢数字二。"
  },
  {
    id: "a384",
    text: "点击这里让什么都不发生。"
  },
  {
    id: "a385",
    text: `我在想……为什么 Apple 跳过了 iPhone 9，Microsoft 跳过了 Windows 9……是不是他们被某个游戏开发者贿赂了？`
  },
  {
    id: "a386",
    text: "10 位医生中有 9 位建议不要试图触摸反物质。第 10 位医生我们还没收到回复。"
  },
  {
    id: "a387",
    text: `春天，人类建了一根柱子。夏天，又建了一根。整个秋天它们都屹立不倒。但在冬天，其中一根经历了一次出乎意料的（定义见：抽象多维逆因果物理学）ZW 级“飞升”事件，据推测它掉进了一个维度漏洞，按照定义，它必须占据比自己更多的维度。目前找回这根柱子并将其送回基准现实的尝试均未成功（详见测试日志 2453-3e9a-50d1-84fc）。`
  },
  {
    id: "a388",
    text: `鉴于最近发生的事件，我们想发布一份官方声明。反物质维度™与 Jimmy 的因果律违反脑虫™没有任何关联。我们不认可、也未参与他们制造那款牵涉多起灾难性维度失稳和现实颠覆事件的产品。我们几乎可以肯定没有在 1994 年 12 月 8 日 05:30:26 UTC 讨论过如何从失稳和扭曲维度中获益后签署合同。వ' 星系的第五猎户臂没有建造工业区，即使有，我们也没有按照 Scranton 现实反锚定机制安装局部异常。此外，43 号站点 AAF-D 悟性消除设施没有发生时间循环。如果事情看起来像这样，我们深表歉意，今后我们将更严格地打击错误信息。`
  },
  {
    id: "a389",
    text: "要是我们能把宇宙中的反物质压缩成饼干就好了……"
  },
  {
    id: "a390",
    text: `伙计们你们敢信吗？更新，只需 5 小时。更新在 5 小时内。哇呼。我对这个消息太开心了。更新只需 5 小时。哦哇。你敢信吗？更新在 5 小时内。它来得真快。更新，只需 5 小时。`
  },
  {
    id: "l1",
    text: "你刚刚制造了你的第 1,000,000,000,000,000 份反物质。这一份尝起来像鸡肉。",
    get unlocked() { return Currency.antimatter.exponent === 15; }
  },
  {
    id: "l2",
    text: "请削弱星系。",
    get unlocked() { return player.galaxies === 2 || Currency.infinities.gt(0); }
  },
  {
    id: "l3",
    text: "你说超过两个维度是什么意思？？？我们在屏幕上，显然只有 2 个维度。",
    get unlocked() { return AntimatterDimension(3).amount.gt(0) || DimBoost.totalBoosts > 0; }
  },
  {
    id: "l4",
    text: "无限多少钱？至少每个玩家都问过一次",
    get unlocked() { return AntimatterDimension(8).amount.eq(190) || Currency.infinities.gt(0); }
  },
  {
    id: "l5",
    text: "嗯，第四维度还行……",
    get unlocked() { return AntimatterDimension(4).amount.gt(0) && AntimatterDimension(5).amount.eq(0); }
  },
  {
    id: "l6",
    text: `反物质人似乎比我们更怕 13。他们摧毁了整片星系，只是为了把 13 从他们的百分比里去掉。`,
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
  {
    id: "l7",
    text: "要理解维度献祭，你确实需要理论物理学的博士学位。抱歉！",
    get unlocked() { return player.sacrificed.e >= 10 || DimBoost.totalBoosts >= 6; }
  },
  {
    id: "l8",
    text: "数字标准化新团体提出了一个包含表情符号的新颖格式。",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies > 0; }
  },
  {
    id: "l9",
    text: "反物质冰淇淋摊最近开业了，他们有千兆亿种口味！",
    get unlocked() { return player.records.totalAntimatter.e >= 27; }
  },
  {
    id: "l10",
    text: `天堂的 Pelle 制造了太多反物质，不得不创造另一个星系。这个星系可以在西南方的天空中看到。`,
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
  {
    id: "l11",
    text: "第 9 维度是个谎言。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l12",
    text: "9 的平方根是 3，因此第 9 维度不可能存在。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l13",
    text: "你被第 9 维度同化了？快打电话给你的精神科医生吧！",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l14",
    text: "为什么没有第 9 维度？因为 7 8（吃了）9。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l15",
    text: "第 9 维度不可能存在，因为说“九不”（Nein）的纳粹在二战中死光了。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l16",
    text: `如果你打破第四面墙……好吧，在你遇到坏东西之前，还有第五、第六、第七和第八面墙要穿过，所以你应该没事。`,
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l17",
    text: `Hevipelle 入睡必须满足条件。第一，必须是蓝月亮之夜。第二，北极的某个特定城镇必须一个月不见阳光。第三，他必须发布一个 AD 更新。最后，Discord 上不能有人在第 9 维度。只有那时他才能休息，最多 6 小时，然后会被强行叫醒，以免获得离线成就。`,
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l18",
    text: "如果第 9 维度全是邪恶的，那么 3 就是万恶之源（根）吗？",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l19",
    text: `我要 1e29 个 9 号，一个 1e9 大的，一个加了额外 replicanti 的 6 号，一个 1e7，两个 4e5，一个加物质，还有一个大号时空漩涡。`,
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l20",
    text: "无限：那个本该被打破的东西。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l21",
    get text() { return `I've got ${format(Number.MAX_VALUE, 2)} problems, but none of them antimatter.`; },
    get unlocked() { return Currency.infinities.gt(0) && !PlayerProgress.hasBroken(); }
  },
  {
    id: "l22",
    text: "反表情符号大电影大获成功！",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 5; }
  },
  {
    id: "l23",
    text: "如果这款游戏是 Valve 做的，零死亡成就就不可能实现。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l24",
    text: "佛罗里达男子试图首次通关就拿零死亡，被宇宙热寂拦住了。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l25",
    text: "“完成一半成就算不上什么成就” -Boo",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length / 2; }
  },
  {
    id: "l26",
    text: `当灭霸戴着全功率无限手套登场时，Hevi 戴着全功率永恒手套，他会非常失望。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l27",
    text: "发现了一种新的奇怪材料。它似乎呈指数增长，但只对反物质生产有帮助。",
    get unlocked() { return PlayerProgress.replicantiUnlocked() && player.replicanti.chance === 0.01; }
  },
  {
    id: "l28",
    text: "看来这“replicanti”东西现在不会再长得更快了。",
    get unlocked() { return player.replicanti.chance === 1 && player.replicanti.interval === 1; }
  },
  {
    id: "l29",
    text: `如果你每秒写下 3 个数字，你写完自己反物质数量所需的时间，会比 Hevipelle 更新游戏所需的时间还短。`,
    get unlocked() { return Currency.antimatter.exponent >= 100000; }
  },
  {
    id: "l30",
    text: "Hevi 真的只是随便挑些名言放进游戏吗？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 30; }
  },
  {
    id: "l31",
    text: "新的新闻公司成了我们的对手。它们完全由反物质构成。",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 80; }
  },
  {
    id: "l32",
    text: "在人们不再听之前，我们能连续用多少次“反”？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 100; }
  },
  {
    id: "l33",
    text: "Hevi 还会看 #news-ticker-suggestions 吗？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 120; }
  },
  {
    id: "l34",
    text: "需要更多名言！ -hevipelle",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 135; }
  },
  {
    id: "l35",
    text: "男子用反物质摧毁了已知宇宙，靠写新闻滚动条排解孤独。",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 150; }
  },
  {
    id: "l36",
    text: "你就快到了！",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 160; }
  },
  {
    id: "l37",
    text: "你可以停了",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 165; }
  },
  {
    id: "l38",
    text: "该死的黑客",
    get unlocked() { return NewsHandler.uniqueTickersSeen > GameDatabase.news.length; }
  },
  {
    id: "l39",
    text: "亚洲男子试图以 -1 秒的成绩偷走最快无限奖杯，而且他成功了！",
    get unlocked() { return NewsHandler.hasSeenNews("l1"); }
  },
  {
    id: "l40",
    text: `我打破了第八面墙，那里只有混沌，Slabdrill 正在向第 9 维度仪式性地献祭反物质。这将是我的最后一条记录，愿 Hevipelle 怜悯我们的灵魂，我们没有听，我们本该听的。`,
    get unlocked() { return NewsHandler.hasSeenNews("l58"); }
  },
  {
    id: "l41",
    text: "我以为更新只要 5 小时…… -游玩超过 5 小时的新玩家",
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
  {
    id: "l42",
    text: `昨天有人告诉我等五个小时就有更新，但今天都还没来！我该怎么办？`,
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
  {
    id: "l43",
    text: "你知道你不可能在 -1 秒内到达无限，对吧？",
    get unlocked() { return player.records.bestInfinity.time === 0.1; }
  },
  {
    id: "l44",
    text: "反物质尼莫住在哪里？在 NNnNeMI-NNnNe 里。",
    get unlocked() { return player.records.totalAntimatter.e >= 3e6; }
  },
  {
    id: "l45",
    text: "反表情符号大电影 MMMCMXCIX 大获成功！",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 3999; }
  },
  {
    id: "l46",
    text: "成就已解锁！",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length; }
  },
  {
    id: "l47",
    text: "那个成就是两百万，不是二十亿……",
    get unlocked() { return Currency.infinities.gt(2e9); }
  },
  {
    id: "l48",
    text: "保持这个速度！",
    get unlocked() { return AchievementTimers.marathon1.time > 1200; }
  },
  {
    id: "l49",
    text: "总有一天你会停止无休止的刷刷刷。",
    get unlocked() { return Currency.eternities.gt(50000); }
  },
  {
    id: "l50",
    text: "你现在大概可以停止刷永恒了……",
    get unlocked() { return Currency.eternities.gt(DC.D2E6); }
  },
  {
    id: "l51",
    text: "你是认真的吗？",
    get unlocked() { return Time.worstChallenge.totalSeconds <= 1; }
  },
  {
    id: "l52",
    text: "时机是关键。",
    get unlocked() { return player.records.thisEternity.realTime < 10; }
  },
  {
    id: "l53",
    text: "如果你想刷无限，为什么不直接点时间研究呢？",
    get unlocked() { return !TimeStudy(32).isBought && Currency.infinities.gt(72000 * 168); }
  },
  {
    id: "l54",
    get text() {
      const names = [];
      if (PlayerProgress.infinityUnlocked()) names.push("Infinity");
      if (PlayerProgress.eternityUnlocked()) names.push("Eternity");
      if (PlayerProgress.dilationUnlocked()) names.push("Dilation");
      if (PlayerProgress.realityUnlocked()) names.push("Reality");

      const game1Name = names.randomElement();
      let game2Name = names.randomElement();
      while (game2Name === game1Name) {
        game2Name = names.randomElement();
      }
      return `Pokemon ${game1Name} and ${game2Name} were just released! This new generation brings the total number ` +
        "of Pokemon up to 1e151. Good luck catching 'em all!";
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); },
    isAdvertising: true
  },
  {
    id: "l55",
    get text() {
      const recipes = [
        "a Replicanti cake: Gather some Replicanti, place in oven, and watch rise. And rise. And rise.",
        "an antimatter cake: Gather some antimatter, place in oven, and <b>BOOM<b>.",
        "an Eternity cake: Gather some Eternity Points, place in oven, and wait...",
        "an Infinity cake: Gather some Infinity Points, place in oven, and watch them shatter spacetime."
      ];
      const recipe = recipes.randomElement();
      return `How to bake ${recipe}`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l56",
    text: "现实挑战就是新的第 9 维度，就是新的橙色。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l57",
    text: `杰克放学回家，结束漫长的一天。回家路上，他遇到一个奇怪的小东西。透明，却不透光。闪闪发光，却阴郁。沉重，却失重。杰克把东西带给妈妈。“妈妈，我在人行道上捡到这个，我能留着吗？”，杰克说。他妈妈转过身来看儿子说的这个东西。她的瞳孔放大，“杰克，马上把这东西拿出房子！”她喊道。杰克很困惑，因为在他看来这完全无害。他问“可是妈妈，为什-”，但他还没来得及说完，那个东西就以看似不可能的速度进行了有丝分裂，第二个副本从他手里滑落，掉到地板上。他妈妈冲过来，试图抓住那个东西，但它又复制了。“杰克……无论发生什么，别忘了妈妈爱你，宝贝……”。她张开双臂抱住他。“妈-妈妈，发生什么了？”杰克问，声音里带着颤抖的恐惧。他妈妈流下一滴泪。“⭔⭚⦕꒜ 品牌 Replicanti……”她悲伤地说。Replicanti 以越来越快的速度继续复制。房子的下三分之一现在充满了 Replicanti。然后是下半部分。然后是整栋房子。母子被困在家的墙壁和 Replicanti 之间。注定要在这无机棺材里度过短暂余生，肺里残留的空气慢慢耗尽。但这还不是结局，远非如此。Replicanti 开始在房子外面复制，像闪闪发光的山崩一样涌出。几个邻居注意到这些奇怪的东西，外观近乎液态，试图逃跑。但 Replicanti 继续复制，继续加速。很快整个街区都被覆盖，就是它们。不久之后，几个街区。城市。周边城市。国家。所有国家。整个星球。整个太阳系。整个星系。一切。`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l58",
    text: `Hevipelle、反物质、无限点与永恒点的神圣三位一体。这 3 种资源让我们得以接触 Hevi 的恩赐，时间定理。借助这些时间定理，我们向 Hevi 呼唤：“Hevi，在这美好的一天祝福我们吧！”Hevi 应允了。他赐予我们时间研究的祝福。这些时间研究是强大到 Hevi 限制了其力量的祝福。他说“我将给你们三条道路的选择”，然后人类做出了选择。反物质维度的短而廉价之路，带来即时的满足；无限维度的强力选择，是一条快速的中庸之路；或者时间维度，人类漫长的等待与挣扎。然后，在人类做出选择时，一道裂缝劈开了大地。一条巨蛇蜿蜒而出，对人类狞笑：“我将提供第九维度这个强大的选择！我是 Slabdrill，一切 Unhevi 之主。”人类起身说：“滚开，Slabdrill！我们不要你那邪恶的异端！”Hevi 也起身，用他神一般的力量重创了 Slabdrill。Slabdrill 的尸体坠入大地时，他喊道：“这不会是我的终结！Hevi 将-”，然后他坠入了物质深渊。Hevi 赐予人类永恒升级，增强了无限维度和时间维度。Hevi 还给了人类他最伟大的礼物：EP 倍率。他说，这些倍率会把所有获得的 EP 乘以 5，但它们的成本会增加 50 倍。明智地使用它们。人类带着新力量踏上旅程，而 Slabdrill 的话语在他们脑中回响。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l59",
    text: `关于 Replicanti 单数形式的争论仍在继续。“Replicantus 队”的基地被“也是 Replicanti 队”洗劫，他们的许多维度被偷走。“复数应为 Replicantis 队”在入侵词典的计划失败后仍保持低调。`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l60",
    get text() {
      return `Breaking News! Time Shard mine collapses! ${Math.floor(20 + Math.random() * 236)} miners trapped inside!`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l61",
    text: `反物质专家称，千禧一代正在摧毁挑战行业：“如今他们开局就带着完成的挑战和打破的无限；这已经不是过去的样子了”。`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l62",
    text: `计算机科学家们愤怒了：“无限点（Infinity Points）到底是什么？IP 代表的是互联网协议！”争论继续加剧，更多内容请锁定 7 点。`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l63",
    text: `你觉得时间变慢了吗？研究显示，现在 1 秒大约持续 1.3 秒。科学家们把这种现象称为时间膨胀。`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l64",
    text: `反物质学术界的不公：新手只被允许选择一个研究领域，而精英可以全选。“这太不公平了。为什么他们可以？”困惑的学生问道。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l65",
    text: `事实证明，没有人真正知道无限点长什么样。甚至连负责存储它们的人都被特别告知不要看它们，因为它们显然“会杀死任何看它们的人”，有时甚至要戴着眼罩工作。但今天这一切将改变。我就在这里，在一个无限点仓库前，准备告诉你们它们长什么样，3、2、1-`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l66",
    text: `人类震惊，一次失败的时间膨胀实验在时空上造成了视觉故障。现在它就在夜空中天赤道上方可见。`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l67",
    text: `吸食碾碎的时间碎片正慢慢成为最无聊人群中的一种潮流挑战。据说它带来的快感让他们感觉世界在周围加速，因此被称为<span style="color: var(--color-eternity)">延时挑战</span>。脱水死亡人数飙升，因为人们神秘地忘记连续几天喝水。他们的尸体中发现了微量时间碎片。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l68",
    get text() {
      let protestText = "";
      if (InfinityChallenge(4).isRunning)
        protestText =
          `Let's take it to this guy, who's part of the side that believes it's Infinity Challenge 4. What do you have
          to say? "Obviously Infinity Challenge 4 is the worst one, I mean, what am I even supposed to do? I keep
          trying but every time I keep getting stuck and nowhere close to the end! How are you even supposed to do it?"
          What a passionate man. This is your local news host, and we'll come back with further information later.`;
      else if (InfinityChallenge(5).isRunning)
        protestText =
          `So up next let's talk to this guy is holding a sign that says "IC5 Unfair". What is the point your group
          is trying to make? "Can't you read the sign? If your comprehension is that bad then Infinity Challenge 5
          will squash you without even giving you a fair chan-" How... Interesting. This is your local news host,
          and we'll come back with further information later.`;
      else
        protestText =
          `Finally, let's chat with this woman who doesn't seem to be in either side. What's your opinion on the
          matter? "Personally, I thought Tickspeed Autobuyer Challenge was worse than both-" "GET HER!!" "WAIT NO-"
          Well, seems like this just took a turn, so I'm getting as far away as I possibly can. This is your local
          news host, and we'll come back with further information... someday.`;
      return `Hello, this is your local always reliable news source, and today people are taking over the streets
        as they fight over which Infinity Challenge is worse. ${protestText}`;
    },
    get unlocked() { return InfinityChallenge(1).isUnlocked || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l69",
    text: "与 Replicanti 的友谊结束了，现在 Replicanti 星系是我最好的新朋友。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l70",
    text: `“隐私天体 Zurkrbarg”宣布计划发布其热门社交媒体宇宙“All”的新版本。`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l71",
    text: "其他语言在等着我……我得成为程序员",
    get unlocked() { return Player.canEternity || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l72",
    get text() {
      const scenarios = [
        `our contestants struggle to survive in the desolate wasteland of Eternity Challenge 8 -
        running out of Replicanti and Infinity Dimensions, what will they turn to?`,
        "we investigate reports of a Time Shard mine collapsing at 26:90.",
        "we invite an amateur on to explain what the reward for Infinity Challenge 9 would be.",
        "our friends over at ANN explain how they produce their broadcasts.",
        "we invite local idle gamers over to explain how they play their favorite games.",
        `<span style='font-family: Barrio'>send 10,000 Support The Developer
        coins or you will never see RealiTV again.</span>`,
        "we break down exactly what went wrong in the black hole powering our city yesterday.",
        "we go over our 10-day weather forcasts.",
        `YOU MUST PAY ${format(player.reality.realityMachines.times(10).max(10))}
        REALITY MACHINES TO CONTINUE VIEWING THIS PROGRAM.`,
        "we witness the release of the hypnodrones.",
        "our great and grand overlord lets us have a single antimatter.",
        `Bill Nye explains how Replicanti replicate, and teaches how to spot dangerous conspiracy theories
        such as "ingesting antimatter is perfectly fine" and "Antimatter Galaxies aren't worth it".`,
        "the world's greatest philosophers debate if we are the real antimatter.",
        "resident baker explains how ordinary objects can transmorph into cake if not watched constantly."
      ];
      const scenario = scenarios.randomElement();
      return `Next time on RealiTV, ${scenario}`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l73",
    text: "很久很久以前，在一个遥远遥远的星系里，成本缩放改变了。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l74",
    text: "推出新功能：现实研究！在现实中学习就能获得游戏内收益！",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l75",
    text: `在反物质维度，我们为产品的质量感到自豪。例如：你知道每个无限点都是独一无二的吗？没错！它们都有不同的个性、自己的感受、自己的想法……知道这一点后，希望你今晚能睡个好觉……还记得你花掉的那些无限点吗？它们有家人，它们想念家人……看看你做了什么。你是个怪物。`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l76",
    text: "那么，你已经到达无限之后的飞升层了？差不多是时候了……",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l77",
    text: "通过选择性繁殖和前沿的表观遗传学技术来改良你的福利。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l78",
    text: `警告：转基因福利点不适合：食用、身体接触、吸入、呼出、精神接触，以及被可见和不可见的眼睛注视。请勿靠近易燃、不易燃、导电、绝缘、易变、生物或机械物质。存在风险自负。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l79",
    text: `与普遍看法相反，星际反物质税务局确实能够对通过不正当手段获得的反物质征税，即任何未通过法定维度获得或未经挑战关卡调整的方式。NY-8N 条款列出了 3 种具体方法：非法新闻滚动条赠品、未认证维度，以及对时空结构的修改，还有一个杂项，用于未来可能出现的任何独特反物质获取方法。虽然你将不得不支付 99% 的最高反物质税率，但从长远来看这可以省钱：如果你因天体决定而被迫切换现实，你可以从 IARS 拿回部分已缴税款作为税收减免，还可以为代理你的仲裁者申请减免。当然，任何有价值的[玩家引用未找到]都知道隐藏非法犯罪利润的真正方法是个性化口袋维度、超拼接波形银行和纳米外壳，这需要大量的研发投入。因此，只有在你的钱多到藏不住、却又穷到藏不起时，才建议申报非法反物质收入。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l80",
    get text() {
      return `"Average person produces ${format("3e999999996", 2)} antimatter a year" factoid actually just statistical
      error. Average person produces 0 antimatter per year. "Developer Dimension" Georg, who lives in a cave &
      produces over ${format("1e1000000000", 2)} each day, is an outlier and should not have been counted.`;
    },
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l81",
    text: `世界陷入混乱，因为数学定律被重写了！许多被认为无限的东西现在只是非常大的数字！`,
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l82",
    get text() {
      return `The Great Scribes of Antia have labored intensively for years. They were given a mammoth task from the
      gods; write out an incomprehensibly long number. These scribes took turns, each writing out a few numbers a
      second, writing day and night, for what seemed like an eternity. At last, after
      ${TimeSpan.fromSeconds(Currency.antimatter.value.log10() / 3).toString()}, they finally accomplished
      the impossible. That week, when they went to worship their gods, they sent them a simple message: "What was
      the purpose? What made our years of labor significant?" The gods responded duly: "We wanted to know how long
      it would take to write out, for a statistic in our game."`;
    },
    // 3 years of time to write
    get unlocked() { return Currency.antimatter.value.gte("1e777600"); }
  },
  {
    id: "l83",
    text: `AD 补丁说明：清理了天体问题 让反物质更重视湮灭 添加了嘴巴 移除了嘴巴 阻止不受欢迎的闯入者从企业手中接管商店 修复了新闻滚动条悬挂在空中的问题 死亡的 replicanti 留在它们的星系中 重新定义闯入者，不包括[已编辑] 速子粒子卡在屏幕左上角，抹除了时间 为星系自转方向添加了科里奥利效应`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l84",
    get text() {
      return `For the record, you currently have ${player.news.specialTickerData.paperclips}
      Useless Paperclips. You may want to spend them on something.`;
    },
    get unlocked() { return player.news.specialTickerData.paperclips > 0; }
  },
  {
    id: "l85",
    text: `在反日，新更新只需 -5 小时。你开始增加你的物质。当你获得大量物质后，你必须变得无穷小。在积累了无穷小点之后，你最终可以成为瞬秒，最短的时间单位。经过足够的时间，你的瞬秒会累积，你将收缩时间。收缩时间会给你足够的增益，最终幻想，维护的最后一层。然而，你发现这一切都是一场梦。你的反物质安然无恙，新更新仍然只需 5 小时。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l86",
    text: `你好，玩家。我想玩个游戏。你面前有一堆 replicanti。它们目前被冻结在时间里，无法复制。你右边是一台电脑，在空存档上运行着反物质维度。你必须到达无限。然而，一旦你购买了第一维度，replicanti 就会开始复制。如你所知，它们复制得很快，如果它们填满房间，你就会被窒息。如果你在此之前到达无限，它们会再次被冻结。时钟在滴答作响。现在开始。`,
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l87",
    text:
      `"To see a World in a Grain of Sand. And a Heaven in a Wild Flower. Hold Infinity in the palm of your hand.
      一小时内看到永恒。约五小时后看到现实™" ~反威廉·布莱克 `,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l88",
    text: `我们对新的符文机制深表歉意。其意图是为玩家在解锁稀有符文时提供自豪感和成就感。我们根据最后一轮测试的数据以及发布前对里程碑奖励的其他调整选定了初始数值。除此之外，我们还会关注每位玩家的日均积分获取率，并不断调整，确保玩家面对的挑战引人入胜、回报丰厚，当然也可以通过游戏玩法达成。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "r1",
    text: "这条新闻消息比其他所有消息稀有 100 倍。",
    get unlocked() { return Math.random() < 0.01; }
  },
  {
    id: "p1",
    text: "这是 jojo 梗吗？",
  },
  /* eslint-disable max-len */
  {
    id: "ai1",
    text: "如果你就是游戏，那么你可以用作弊代码解锁隐藏成就……但它要花 e1100 反物质！？！"
  },
  {
    id: "ai2",
    text: "“嗯，我不知道怎么修复这个。” - 顺便一提，这是个没解锁成就的人"
  },
  {
    id: "ai3",
    text: "我以为游戏在永恒之后应该有硬重置，但后来我被随机分配到第一次游戏，连存档文件都没有。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai4",
    text: "我以为更新 5 小时前就该来了……看来我们得再放回 5 小时后"
  },
  {
    id: "ai5",
    get text() { return `Local man finds ${format(Number.MAX_VALUE, 2)} Planck volumes in his freezer.`; }
  },
  {
    id: "ai6",
    text: "哈哈烂建议"
  },
  {
    id: "ai7",
    text: "我看到你空着肚子玩这个游戏，你马上就会空着钱包玩这个游戏了。"
  },
  {
    id: "ai8",
    text: "只管开始……点击。别想着浪费时间。就是干。"
  },
  {
    id: "ai9",
    text: "第 9 维度创造第 8 维度的想法太疯狂了"
  },
  {
    id: "ai10",
    text: "……那是不是意味着[已编辑]维度产生[已编辑]维度？"
  },
  {
    id: "ai11",
    text: "“点击这里购买一叠回形针”（点击后你会被瑞克摇）",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai12",
    text: "闲暇时我会读 T. H. White 的短篇小说。"
  },
  {
    id: "ai13",
    text: "天哪，那也太狂野了"
  },
  {
    id: "ai14",
    text: "灭绝不是真的。你不能 24/7 戴同一顶帽子。"
  },
  {
    id: "ai15",
    text: "如果你能读到这条消息，说明你已经逃出了游戏。"
  },
  {
    id: "ai16",
    text: "“帽子戏法，我真想看看” - Noah Feldman"
  },
  {
    id: "ai17",
    text: "快看 hevi 在 discord 服务器上激烈争斗"
  },
  {
    id: "ai18",
    text: "我刚刚从飞车党那里偷了“反”旗帜，正在装满炸药，炸药，炸药，炸药……"
  },
  {
    id: "ai19",
    text: "无论你有多少反物质，物质总是比反物质重。"
  },
  {
    id: "ai20",
    text: "Franklin 封印了 Omega 平方。现在你可以随心所欲地封印 Omega。"
  },
  {
    id: "ai21",
    text: "这是真的第 9 维度吗？"
  },
  {
    id: "ai22",
    text: "点击这里退出游戏"
  },
  {
    id: "ai23",
    text: "这条新闻滚动条现在只会在第 9 维度播出"
  },
  {
    id: "ai24",
    text: "第 9 维度不存在，因为它被第 9 维度镇压了。"
  },
  {
    id: "ai25",
    text: "成为物质还是反物质，这是个问题。"
  },
  {
    id: "ai26",
    text: "经过 8 年的制作和不稳定的宇宙，Chaosium 将在 5 小时后不复存在。"
  },
  {
    id: "ai27",
    text: "第 9 维度里一半的问题都没有意义。它们到底拿那些能量干什么？"
  },
  {
    id: "ai28",
    text: "等等，有个忍--"
  },
  {
    id: "ai29",
    text: "某个地方，一个疯子和他的 Trimps 大军正在篡改物质维度。"
  },
  {
    id: "ai30",
    text: "为什么有这么多人跟这个数字扯上关系？说不通。"
  },
  {
    id: "ai31",
    text: "新闻滚动条在反新闻滚动条里"
  },
  {
    id: "ai32",
    text: "第 9 维度不存在，因为我们在使用九进制"
  },
  {
    id: "ai33",
    text: "突发新闻：新研究显示，不是一个人，不是两个人，而是三个人在把它作为滚动条建议读到时会和我产生同样的情绪。"
  },
  {
    id: "ai34",
    text: "这是对我“问题情绪”的解释，它就在新闻滚动条里！"
  },
  {
    id: "ai35",
    text: "本地疯子试图兜售反饼干"
  },
  {
    id: "ai36",
    text: "欢迎来到反物质维度：起源，这款免费游玩的经典邪典游戏 AD:GO 的续作。"
  },
  {
    id: "ai37",
    text: "一只新手触摸了你的反物质！"
  },
  {
    id: "ai38",
    text: "我们到底是谁？"
  },
  {
    id: "ai39",
    text: "我们才是真正重要的（物质）人"
  },
  {
    id: "ai40",
    text: "物质？连一点影子都没有。"
  },
  {
    id: "ai41",
    text: "我是新闻人，我制造新闻。你不读这条？那你就只能等着照镜子的时候看了。"
  },
  {
    id: "ai42",
    text: "“吓！”（新闻滚动条旋转 90 度）"
  },
  {
    id: "ai43",
    text: "买一罐贴纸，高品质贴纸，超高品质贴纸！"
  },
  {
    id: "ai44",
    text: "我制造新闻，你来读它。"
  },
  {
    id: "ai45",
    text: "我喜欢新闻。"
  },
  {
    id: "ai46",
    text: "我不制造新闻。"
  },
  {
    id: "ai47",
    text: "你制造新闻，而我得到[已编辑]新闻"
  },
  {
    id: "ai48",
    text: "“反无限”是动词，不能当名词用。在这里了解它的用法。"
  },
  {
    id: "ai49",
    text: "现在，是购物清单时间！"
  },
  {
    id: "ai50",
    text: "第 9 维度显然是真的！它只是不在我们这个维度。"
  },
  {
    id: "ai51",
    text: "我试着在 google 上搜索“第 9 维度”，我可以坦然这么说，因为它描述的是一件非常真实的东西。"
  },
  {
    id: "ai52",
    text: "你在这里没有力量。"
  },
  {
    id: "ai53",
    text: "有些人只能凑合着用 10 个维度，因为他们无法打破无限。大挤压原来只是时间中的一个短暂间隔。"
  },
  {
    id: "ai54",
    text: "从前有个年轻人身处异乡，他梦想着一个充满可能性的宇宙。有一天，他问母亲“扩张是什么样的？”她回答说“那个时代的扩张很不平衡，所以我说你不可能拥有等量的物质和反物质。”"
  },
  {
    id: "ai55",
    text: "市场研究公司试图解释为什么某些商品的表现不如预期。市场研究公司自己也搞不明白为什么。"
  },
  {
    id: "ai56",
    text: "今天就来竞标你的反物质吧！"
  },
  {
    id: "ai57",
    text: "我是 Alpha Centauri，编号 Prime 001。我的研究发现，如果你在第 9 维度中活着，说明邪恶已经占领了你的维度，并正试图实施它的计划：占领你的心智并逆转时间。你必须尽一切力量阻止这个计划实施，现在。"
  },
  {
    id: "ai58",
    text: "待机并解锁第 9 维度以获取隐藏成就。"
  },
  {
    id: "ai59",
    text: "我在 5 小时内修复 bug"
  },
  {
    id: "ai60",
    text: "如果你正在读这条消息，说明你能读懂这条消息。"
  },
  {
    id: "ai61",
    text: "呃……你好。能告诉我你的名字吗？"
  },
  {
    id: "ai62",
    text: "呃，不行。这太大了，放不进二维码。"
  },
  {
    id: "ai63",
    text: "（把它从右往左移）"
  },
  {
    id: "ai64",
    text: "哦不，反物质朝我们来了！"
  },
  {
    id: "ai65",
    text: "为什么这个世界有这么多反物质？首先，它们全部由地球上的反物质工厂生产。其次，工厂……"
  },
  {
    id: "ai66",
    text: "这不是针对你，兄弟。 -所有村民类型"
  },
  {
    id: "ai67",
    text: "我尽力去读那些细小的手写消息，但设计镰刀的人恨我，把它们放在了角落里。 -Porygon-Z"
  },
  {
    id: "ai68",
    text: "嗯……我不知道我怎么到了这里。我甚至不知道自己该不该在这里。我就坐在这里，想象如果我当时没有停下会怎样。哦天哪，本可能会怎样……"
  },
  {
    id: "ai69",
    text: "哎呀，老板，我终于成功破解到 C21 解锁了！"
  },
  {
    id: "ai70",
    text: "一个男人买了反物质"
  },
  {
    id: "ai71",
    text: "所以你是说我可以在这里发帖，看两遍泰坦尼克号，回来就不能发帖了？"
  },
  {
    id: "ai72",
    text: "上次更新是 5 小时前。没有下一次更新，因为上次更新就是 5 小时前。我们将在 5 小时后更新我们的播客，以完整覆盖 5 小时这个话题，因为这是最后一期播客，所有人都知道更新总是在 5 小时之后，但实际上更像是 1-2-3-4-5-6-7-8-9-10 分钟之后，但在我们心里，它更接近一个真正准确的更新日期，比如 5 小时后，但要加上几次刻速度升级。"
  },
  {
    id: "ai73",
    text: "是的。你。会。克服。你的。反维度。"
  },
  {
    id: "ai74",
    get text() { return `Ad bonus: $${format(Number.MAX_VALUE, 2)} (random team)`; }
  },
  {
    id: "ai75",
    text: "请把那本历史书递给我"
  },
  {
    id: "ai76",
    get text() { return `Now releasing: Dimsension ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai77",
    text: "你的历史老师说我在生日那天拿到*插入某物*是疯了"
  },
  {
    id: "ai78",
    text: "反物质面前人人平等"
  },
  {
    id: "ai79",
    text: "Mysterium，第二维度"
  },
  {
    id: "ai80",
    text: "哎呀，我想我们点错刻速度了。"
  },
  {
    id: "ai81",
    text: "请等待 5 小时观看新闻"
  },
  {
    id: "ai82",
    text: "请等到天气好转"
  },
  {
    id: "ai83",
    text: "请花一分钟欣赏这条新闻滚动条的美。"
  },
  {
    id: "ai84",
    text: "这样如何，倒推一下？你知道，根据问题涉及的时间段，游戏设定在，比如说，20 世纪 50 年代。现在，如果我们讨论游戏如何设定在 21 世纪 30 年代。游戏被定义为任何媒体，不一定是“玩某个游戏”的形式（顺便说一句，这是词汇表里很有用的一个词），而是任何可以被理解为游戏的媒体（即可以在时间中回放的媒体），而游戏被定义为任何不能在时间中回放的游戏。"
  },
  {
    id: "ai85",
    text: "那由 NaN 制作的 AD 呢？显然质量更高。但是，仍然[已编辑]"
  },
  {
    id: "ai86",
    text: "我一直觉得“湮灭只是一个阶段”这句话很棒，直到我意识到它也给了我一个[已编辑]"
  },
  {
    id: "ai87",
    text: "我创造了一个 Omsi 宇宙。而且它[已编辑]"
  },
  {
    id: "ai88",
    text: "我把[已编辑]放进烤箱。它变得[已编辑]，然后我[已编辑]正在[已编辑]"
  },
  {
    id: "ai89",
    text: "那些烟幕弹是什么？"
  },
  {
    id: "ai90",
    text: "救命，我们被困在 Hevipelle 的（http://en.wikipedia.org/wiki/Hevipelle）地下室里，hevi 逼我们建一堵[已编辑]墙，把[已编辑]挡在[已编辑]之外"
  },
  {
    id: "ai91",
    text: "现在播报天气。北达科他州 70 度，有雨，记得那些可爱的、巨大的、金色的铁幕。还要记住[已编辑]的天气！只要记住：[已编辑]和[已编辑]在[已编辑]外面"
  },
  {
    id: "ai92",
    text: "我们来玩个小游戏。你一开始没有任何财产和目标。假设你有[已编辑]，你的[已编辑]是[已编辑]，你可以[已编辑]"
  },
  {
    id: "ai93",
    text: "宝石有什么用？"
  },
  {
    id: "ai94",
    text: "谁创造了第 5 维度？"
  },
  {
    id: "ai95",
    text: "我不明白"
  },
  {
    id: "ai96",
    text: "为什么没人谈论第 9 维度？"
  },
  {
    id: "ai97",
    text: "这条新闻真烂。为什么？你就是不明白？"
  },
  {
    id: "ai98",
    text: "抱歉，你的现实已与第 9 维度断开连接。在另行通知之前，你将停留在第 8 维度。"
  },
  (function() {
    let wasClicked = false;
    const normal = "Now holding Infinity!";
    const clicked = "<#351477791457542144>";
    return {
      id: "ai99",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ai100",
    text: "我所有的新闻都来自这个 Discord，而不是我生命中浪费的 5 小时"
  },
  {
    id: "ai101",
    text: "喵"
  },
  {
    id: "ai102",
    text: "你现在开始手动眨眼了。"
  },
  {
    id: "ai103",
    text: "抱歉，你的麦克风正在播放反物质维度。"
  },
  {
    id: "ai104",
    text: "抱歉，你的现实已与第 9 维度断开连接。"
  },
  {
    id: "ai105",
    text: "显然我是这个视频里的反派。我是那个什么都没做的人。"
  },
  {
    id: "ai106",
    text: "这款游戏有多种获胜方式。你可以直接把坐标输入游戏，也可以输入 google，这会得到不同的结果。如果你得到“完全相同”的结果，那你的电脑一定出故障了。测试结果表明你的电脑出故障了，你应该检查固件漏洞。你也可以尝试关闭新闻并重新运行游戏，但这只会让“天气是 X”的笑话继续。等待六个小时看一条新闻消息，那不叫新闻消息。"
  },
  {
    id: "ai107",
    text: "天气确实是真实存在的。科学家已经证实，地球上的反物质数量与天气数量之间存在相关性。地球确实是一块磁铁，但科学家现在推测，随着地球变暖，磁重连会加速，这可能在全世界引发多米诺骨牌效应，最终导致失控的核冬天和自发的反物质内爆。"
  },
  {
    id: "ai108",
    text: "第十维度并不是真实存在的东西。别告诉别人了。"
  },
  {
    id: "ai109",
    text: "别告诉 Hevi 它不是真的"
  },
  {
    id: "ai110",
    text: "我不知道怎么修复这个"
  },
  {
    id: "ai111",
    text: "这个更新不是给你的！"
  },
  {
    id: "ai112",
    get text() { return `This is the last time, to buy items, you must pay a small fee of ${format(Number.MAX_VALUE, 2)} real money.`; }
  },
  {
    id: "ai113",
    text: "什么是反物质？很久以前，众神和谐相处。然后，一切都变了，天启爆发了。混沌横行，连更高的维度都在被建造。这就是你的命运。建造反物质维度。阿门。"
  },
  {
    id: "ai114",
    text: "覆水难收（桥下流水）？"
  },
  {
    id: "ai115",
    text: "我想知道有没有人在我之前发过这个？"
  },
  {
    id: "ai116",
    text: "这个帖子被分享了很多次。谁知道有多少次？"
  },
  {
    id: "ai117",
    text: "晚安！"
  },
  {
    id: "ai118",
    text: "我做了一个我的 replicanti 战斗时间线，可以在这里找到。"
  },
  {
    id: "ai119",
    text: "“量子大逃杀将在 5 小时后上线！”（传闻：5 小时）"
  },
  {
    id: "ai120",
    text: "传闻说 Nords 将在五小时后开始生产 replicanti。"
  },
  {
    id: "ai121",
    text: "我是 Nords 扫雷员，抢走他们的工作来供养 replicanti 工厂。"
  },
  {
    id: "ai122",
    text: "过去，AD 是最好的游戏。如今，它全是垃圾。"
  },
  {
    id: "ai123",
    text: "你最好别再看这些新闻滚动条建议了，不然你的手指会干枯。"
  },
  {
    id: "ai124",
    text: "反物质维度《蜜蜂总动员》赔了。"
  },
  {
    id: "ai125",
    text: "哦天哪，我的豌豆里有 replicanti。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai126",
    text: "哦天哪，我踩到一个 replicanti。"
  },
  {
    id: "ai127",
    text: "你好，世界！"
  },
  {
    id: "ai128",
    text: "欢迎来到关于潜艇的 /r/AskReddit。 -截至 2017 年 1 月 8 日准确"
  },
  {
    id: "ai129",
    text: "政府正在研究反物质。能说这条新闻滚动条是假的吗？"
  },
  {
    id: "ai130",
    text: "新闻会在无限反物质时播放吗？"
  },
  {
    id: "ai131",
    text: "你保存游戏了吗？保存了。你退出游戏了吗？这个存档没问题。继续按住那个键。"
  },
  {
    id: "ai132",
    text: "我点得太快了……我的帧率掉了"
  },
  {
    id: "ai133",
    text: "我发现今年是 20XX 年。我本来想做一条新闻滚动条，但后来意识到它只是一条滚动条。"
  },
  {
    id: "ai134",
    text: "“总有一天我会对读新闻感到厌倦的” -老人"
  },
  {
    id: "ai135",
    text: "古董新品季到了！在这些独特物品消失之前，先睹为快！售罄！"
  },
  {
    id: "ai136",
    text: "3 件反物质的事，还有 1 件通向无限"
  },
  {
    id: "ai137",
    text: "现在就在 https://aarextiaokhiao.github.io/blob/master/docs/en.json 购买回形针表情符号"
  },
  {
    id: "ai138",
    text: "点击这里解锁下一个更新"
  },
  {
    id: "ai139",
    text: "（如果你愿意，可以让这条只在新闻真正加载时显示）"
  },
  {
    id: "ai140",
    text: "恶毒之人正试图赚取反物质钞票，但他们的尝试卡在了第 9 维度。你怎么看？"
  },
  {
    id: "ai141",
    text: "嘿 Siri，刷反物质星系"
  },
  {
    id: "ai142",
    text: "你保存游戏了吗？如果保存了，那你就可以继续玩下去而无需"
  },
  {
    id: "ai143",
    text: "就像你获得第一个奥术点一样。你知道的，就像老广告里那样：“我懂这个广告了，我应该做这个广告"
  },
  {
    id: "ai144",
    text: "呜嘎呜嘎"
  },
  {
    id: "ai145",
    text: "Boo 有自己的网页！你甚至可以叫它“Boo 的妙网”"
  },
  {
    id: "ai146",
    text: "Meeseeks 和书呆子在史诗级的 GG 大战中冲突"
  },
  {
    id: "ai147",
    text: "我的终考成绩出来了！那是个简单的数学题，只是有史以来最强的两位国际象棋特级大师对决！猜猜发生了什么？两人都被湮灭了！"
  },
  {
    id: "ai148",
    text: "哦哇，67.3%，其实还行，因为这是对数的"
  },
  {
    id: "ai149",
    text: "“Aleph_Time”是那个对数尺度笑话吗？"
  },
  {
    id: "ai150",
    text: "大家好，我叫反 Dio。我通过一个你们都知道的“反物质分解”过程生产反物质，你们可能还记得我这个月的测试报告，我测试了我的牧场是否生产反物质……一切正常，直到我在公式里加了一点卡顿，它变成了一个恶性循环，加速了反物质的生产速率，进而加速了你们所有人的死亡速率。我通过基因工程和大数据挖掘的独特组合保住了这一切，我希望有一天能启动一个秘密制造维度的机械化装置，但就目前而言，这完全是一场比拼哪个系统产得多的竞赛，最终，我们会分走你们（读取错误：允许）的派。再见。"
  },
  {
    id: "ai151",
    text: "“我提议我们建立一棵反历史的系统发育树，就像生命之树一样。每个人都会被归为源自那棵反树的祖先。” -Dio，永恒诅咒的祝酒词"
  },
  {
    id: "ai152",
    text: "历史学家：我喜欢每一代人回顾前一代人时的想法：“那些世代真的很糟糕”"
  },
  {
    id: "ai153",
    text: "“我的父母上过反大学” -我的祖父母"
  },
  {
    id: "ai154",
    text: "只有反笑话好笑"
  },
  {
    id: "ai155",
    text: "无限机器打破无限"
  },
  {
    id: "ai156",
    text: "好吧，老古董，这一下让你第一次尝到反恶意软件的滋味。"
  },
  {
    id: "ai157",
    text: "此程序无法访问机密信息，例如 Tamazight 金库的 IP 地址。"
  },
  {
    id: "ai158",
    text: "游戏开发很有趣，对吧？这就是为什么这么多爱好者做游戏，而专业开发者却很少做游戏。"
  },
  {
    id: "ai159",
    text: "我是第一个注意到我手机通知上的“新闻”滚动条总是比“娱乐”滚动条慢 30 秒的人。这绝对不是 bug 也不是功能，将在 5 小时后修复。"
  },
  {
    id: "ai160",
    text: "这条新闻滚动条总是在速通一条索要“世界纪录”的滚动条，你知道这是什么速通吗？这到底是新闻滚动条还是什么？"
  },
  {
    id: "ai161",
    text: "下一级不是解锁额外的 replicanti；实际上是强化 replicanti。"
  },
  {
    id: "ai162",
    text: "为什么一个星系有 9 个星系和第 8 维度，而前 10 个维度不存在？好吧，我们待会儿就得解决这个问题。"
  },
  {
    id: "ai163",
    text: "那为什么地球上就没人直接说出来呢？我以为 AD 有什么作弊机制，让你买一个维度时实际创造 9 个星系而不是 10 个。"
  },
  {
    id: "ai164",
    text: "我的反斗，反物质，反跟我说话"
  },
  {
    id: "ai165",
    text: "AD 有反零件，你会恨它们的"
  },
  {
    id: "ai166",
    text: "到这个份上，AD 基本上就是一个伪装拙劣的反乌托邦"
  },
  {
    id: "ai167",
    text: "按住 M。你忘了把所有反物质拿出来！"
  },
  {
    id: "ai168",
    text: "AD 将在 5 小时后实装"
  },
  {
    id: "ai169",
    text: "点击这里解锁第 10 维度"
  },
  {
    id: "ai170",
    text: "点击这里完成一个针对 HEVI 的秘密行动"
  },
  {
    id: "ai171",
    text: "你干得不错"
  },
  {
    id: "ai172",
    text: "Hevi？你确定要买那个吗？"
  },
  {
    id: "ai173",
    text: "购买高级反物质，帮助世界上最不发达的人迎头赶上！"
  },
  {
    id: "ai174",
    text: "神经科学领域最有影响力的人物之一认为，我们对现实的感知来自 10 个维度而不是 8 个。"
  },
  {
    id: "ai175",
    text: "为什么“nowhere”里有这么多“零”（o）？"
  },
  {
    id: "ai176",
    text: "这个游戏里没有 bug，它们只是特性"
  },
  {
    id: "ai177",
    text: "“点击向前推进 5 小时。”（现在只会在你推进超过一小时之后出现）"
  },
  {
    id: "ai178",
    text: "哦天哪，我的手机正被监视"
  },
  {
    id: "ai179",
    text: "欢迎来到反物质维度的最新版本。现在功能更少了！"
  },
  {
    id: "ai180",
    text: "“那会惹麻烦的”（不太会惹麻烦）"
  },
  {
    id: "ai181",
    text: "“请别关闭新闻滚动条”（不要黑屏，而是白屏，带着长长长长长长长长长长长长长长的……）"
  },
  {
    id: "ai182",
    text: "“你有 7 个生物学分钟。”（不给任何菌株增益）"
  },
  {
    id: "ai183",
    text: "“根据量子弦理论，存在一种连接第 3 和第 8 维度的基本连接。这意味着任何试图绑定第 9 维度的药丸或注射剂都将被挫败并失效。”（注定在 10 分钟内发生）"
  },
  {
    id: "ai184",
    text: "“点击这里获得隐藏成就。”（只在你获得至少 1 个反物质后出现，截图可证）"
  },
  {
    id: "ai185",
    text: "“赢得反物质维度的秘诀是解开第 9 维度并解锁第 10 维度”（只能在解锁隐藏成就：“永恒” http://imgur.com/E4261C7h 之后完成）"
  },
  {
    id: "ai186",
    text: "“点击这里获得 1 个物质。”（只在通关 IC5 后出现）",
    get unlocked() { return InfinityChallenge(5).isCompleted; }
  },
  {
    id: "ai187",
    text: "我以为更新是"
  },
  {
    id: "ai188",
    text: "既然你拥有了全部 8 个维度，就有可能获得无边际成就。然而，如果你获得无边际成就，游戏会崩溃。"
  },
  {
    id: "ai189",
    text: "你刚刚成为了历史的一部分。"
  },
  {
    id: "ai190",
    text: "地狱里有反物质，所以我不想住在那儿。"
  },
  {
    id: "ai191",
    text: "我喜欢课堂里的第 9 维度"
  },
  {
    id: "ai192",
    text: "“1 2 3 4 5 6 7 8 10 11 12 13……” -回到未来"
  },
  {
    id: "ai193",
    text: "你到达了无限，那里没有宇宙，你离那里还有一个永恒。"
  },
  {
    id: "ai194",
    text: "我让这个游戏变得伟大且随机可达成"
  },
  {
    id: "ai195",
    text: "欢迎来到史上第一个课堂里的第 9 维度！无穷的可能之流迎接你！你可能永远无法创造无限个第 8 维度，但你可以创造无限个第 8 维度，你还可以把两个维度的初始值加在一起。简洁明了，我称之为反物质维度。"
  },
  {
    id: "ai196",
    text: "8-12 岁：玩长者拼图"
  },
  {
    id: "ai197",
    text: "如果有人说某人“年轻且充满谜题”是什么意思？“困惑”会让那个人年轻且充满谜题吗？"
  },
  {
    id: "ai198",
    text: "致 6 号过道买了五分之一反物质的顾客，我要说：买六分之一！现在就买！"
  },
  {
    id: "ai199",
    text: "尊敬的先生，我们不生产反原子面包来配反物质披萨，我们为你生产反物质面包！"
  },
  {
    id: "ai200",
    text: "耶！让我们制造一些反物质！"
  },
  {
    id: "ai201",
    text: "反物质面包公司不存在！"
  },
  {
    id: "ai202",
    text: "点击这里退出新闻",
    onClick() { GameOptions.toggleNews(); }
  },
  {
    id: "ai203",
    text: "我以为更新只需 5 小时，但实际我花了 6 小时才发出这条消息，因为我更新落后了。老实说，我不确定我还需要多少个更新，如果有的话。"
  },
  {
    id: "ai204",
    text: "To count past Infinity Points: take a moment to remember that each Infinity Point is 3.1415926534255412730527058904816097160734272605282087086280545991105332533235580946684229821413112145239989073467482298142857147816092947183909298728571478160929471839229814054718139332405281814522993758179568572657123928651310585727283312547569289993282758012466111097726331726572854689993262899140527282527842535179715673311119101119015549552926278425351797156777263324503517971568583819492728180977263317971568432854104102725270847764253513791376909285717082857262987160927285711464363930996928984794380124566417932628571475245456845692846809466184179328572814384259326270817052727852348111714690577263323799509856279752173478925"
  },
  {
    id: "ai205",
    text: "“小心，这些新闻本不该出现。”（在你第一次购买新闻时出现）"
  },
  {
    id: "ai206",
    text: "这些是永远没被放进游戏的时间研究。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai207",
    text: "随着下一个更新的发布，我们将引入一个新维度：第 9 维度。要解锁这个维度，你只需收集大量回形针。"
  },
  {
    id: "ai208",
    text: "为什么没有人谈论钨？"
  },
  {
    id: "ai209",
    text: "现在我们回到你的常规新闻……气象员说，似乎有相当数量的粒子和臭氧洞，这意味着可破坏的臭氧层更少了，这意味着会着火并导致全球变暖的粒子更少了。但是，臭氧层要融化，冰川要奔跑，还有人口过剩。我们周围是蓝紫色的光，几乎是蓝色，几乎是蓝紫色。这是一个盛大而多彩的季节。来，亲爱的，抓一把这些回形针。它们很小，我刚好手边有一些。现在，抓住一把你的地球同胞，抓住一把你的反物质，系好安全带。这会是一趟颠簸的旅程。我们五小时后到。反物质会融化你的臭氧层，冰川会融化你的冰盖。总而言之，这会是一次美好、平稳、不打滑的旅程。除非它不是。[蓝紫色的光渐渐消失，更蓝的光开始在天空蔓延。更蓝的光开始消退，紫色的光开始变亮，几乎泛蓝，最后完全消失。紫色的光越来越亮，更蓝的光越来越弱，几乎无用，最后完全消失，更蓝的光渐渐消退。我们周围，紫色的光越来越强，几乎把它完全消灭。它可能杀死我们。我们可能需要余生来写这个。- 针鼹们，当被问到为什么紫色的光比蓝色的光更强时。]"
  },
  {
    id: "ai210",
    text: "科学家发现屁其实是反物质，而物质只是普通物质。"
  },
  {
    id: "ai211",
    text: "是时候让天气变一变了。"
  },
  {
    id: "ai212",
    text: "我已经搬到了第 01 维度"
  },
  {
    id: "ai213",
    text: "不，开玩笑的"
  },
  {
    id: "ai214",
    text: "“说实话，游戏里已经有太多好东西了” -玩过小游戏增强的可怜人"
  },
  {
    id: "ai215",
    text: "物品已失踪 7 天 1 夜"
  },
  {
    id: "ai216",
    text: "令人震惊的新研究揭示，赢得反物质维度的最大秘诀是“不在场”。"
  },
  {
    id: "ai217",
    text: "下一个更新在 18000 秒后。别浪费时间读这个了。专注于游戏。"
  },
  {
    id: "ai218",
    text: "不知道这算不算新闻"
  },
  {
    id: "ai219",
    text: "（关闭新闻会让新闻记数法优先于其他通知）"
  },
  {
    id: "ai220",
    text: "你不会想听这个的，孩子。"
  },
  {
    id: "ai221",
    text: "点击这里拆解新闻滚动条，获得微量无用的回形针。",
    onClick() {
      GameOptions.toggleNews();
      player.news.specialTickerData.paperclips++;
    }
  },
  {
    id: "ai222",
    text: "按 alt+f4 解锁第 9 维度"
  },
  {
    id: "ai223",
    text: "等等，你是说 hevi 无法解锁第九维度，搞什么"
  },
  {
    id: "ai224",
    text: "终于，hevi 弄明白了怎么得到第 9 维度……不过猜他从来就不在乎。"
  },
  {
    id: "ai225",
    text: "想象自己是个梗。"
  },
  {
    id: "ai226",
    text: "发布于 2016 年 6 月 10 日，作者：匿名"
  },
  {
    id: "ai227",
    text: "这是你的新闻。随时刷新。"
  },
  {
    id: "ai228",
    text: "我在新闻里看到你了。那么，你玩的是什么 - 1E209"
  },
  {
    id: "ai229",
    text: "你真的想把键盘留在家里吗？我们不应该把新闻留在家里，对吧？"
  },
  {
    id: "ai230",
    text: "它正在被创造……"
  },
  {
    id: "ai231",
    text: "你终于来了"
  },
  {
    id: "ai232",
    text: "你现在已从该标签页登出"
  },
  {
    id: "ai233",
    text: "关闭此标签页以进行维护"
  },
  {
    id: "ai234",
    text: "要制造物质或反物质，你只需看看窗外。萨尔茨堡的工厂已经关闭，因为那里的物质不愿舍弃它的最新发明，据说它能一次产出反物质！最后一个打开这扇门的人再也没有出现过。"
  },
  {
    id: "ai235",
    text: "你活着。你占据空间。你很大。你既不小也不大。你既不是长形也不是圆形。你既不是蓝色也不是红色。你是反蓝。你是反红。你是反棕。你是反棕物质。你是反黄。你是反绿。你是反黄物质。你是反蓝。你是反绿反物质。你是反红。你是反白。你是反红反物质。你是反白反物质。你是反棕物质。你是反白反物质。你是反白反物质。"
  },
  {
    id: "ai236",
    text: "欢迎来到"
  },
  {
    id: "ai237",
    text: "谢谢你访问同一个网站几周前我爱你”（小费）"
  },
  {
    id: "ai238",
    text: "“我以为整个游戏都在新闻滚动条里”（在他们变得奇怪之前）"
  },
  {
    id: "ai239",
    text: "“我想知道这款游戏值多少钱” -疯狂的人"
  },
  {
    id: "ai240",
    text: "“有人在研究打破无限吗？”（说真的，这游戏需要被海洋号角化。）"
  },
  {
    id: "ai241",
    text: "我发现这个游戏有多个版本。其中一个叫“标准专业版”。另一个叫“低调版”。我甚至不确定它们是不是同一个游戏。"
  },
  {
    id: "ai242",
    text: "那是坏事还是好事？那取决于它是好事还是谎言。"
  },
  {
    id: "ai243",
    text: "“Hevi 有点忘了更新，但更新肯定没忘了他” - Kajfik"
  },
  {
    id: "ai244",
    get text() { return `The Big Crunch. What could that be?  About 4*1024 Big Crunch points?  About ${format(Number.MAX_VALUE, 2)} antimatter points?  About the same as a galaxy?  About the same as a galaxy, you say? Just look at that.  An antimatter galaxy.  Only this game can provide such a vast amount of antimatter, and it's FUN!  I said "fun"!  What's not to love?`; }
  },
  {
    id: "ai245",
    text: "点击这里退出应用程序"
  },
  {
    id: "ai246",
    text: "等等，还有移动版？什么时候？"
  },
  {
    id: "ai247",
    text: "我不确定你们移动端的伙计们是不是很帅还是怎样，但有一条新闻滚动条正在和全世界分享我的感受"
  },
  {
    id: "ai248",
    text: "我以为更新只需 5 小时"
  },
  {
    id: "ai249",
    text: "宇宙中保守得最好的秘密是 KISS-IT 秘密。今天向维修工人们表达你的感激！"
  },
  {
    id: "ai250",
    text: "比赛平局了。恶作剧将由隐藏成就决定。"
  },
  {
    id: "ai251",
    text: "在我那个年代，我们需要一个隐藏成就来解锁<<$!19>>成就。那是一个相当简单的系统：你必须在游戏里找到一条秘密消息，找到隐藏成就，然后，从那里，你就能解锁那个成就。"
  },
  {
    id: "ai252",
    text: "我们在反物质的赌局中进化出了快手。"
  },
  {
    id: "ai253",
    text: "你好，你今天过得怎么样？"
  },
  {
    id: "ai254",
    text: "你的⢿▔┃│怎么样了？很好，因为今天我们聊聊第五维度。"
  },
  {
    id: "ai255",
    text: "反物质打算做什么？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;啊哈，我回来了。"
  },
  {
    id: "ai256",
    text: "想象自己是个第 9 维度。[施工中]"
  },
  {
    id: "ai257",
    text: "呜呼，我们输掉了战争，"
  },
  {
    id: "ai258",
    text: "剧情：侠盗反物质"
  },
  {
    id: "ai259",
    text: "嗯，我不明白为什么人们认为存在第 9 维度。第 9 维度在[[无限传送计划]]视频和[[应用题]]中有详细解释，[[可以在这里查看|http://www.thingiverse.com/id98109802713176601414569]]。"
  },
  {
    id: "ai260",
    text: "在[[GameFAQs|http://www.gfaq.com/gfaqs/this-game-faq-by-title]]上，有一条最受欢迎的[[新闻滚动条消息|http://www.gfaq.com/tug/this-game-faq-by-title]]。你还应该看看[[我们最新的景点，[[第 5 维度|http://www.gfaq.com/gfaqs/this-game-faq-by-name]]和[[什么也没有](https://www.youtube.com/watch?v=lXMskKTw3Bs)。"
  },
  {
    id: "ai261",
    text: "我为了这一天等待了整整一个永恒……现在！我终于可以完成我的慢速模式了，因为今天是第 0 天。我还忘了把慢速模式改成 6 小时，因为你看不到慢速模式，但我只能等到下次重启才能知道这个慢速模式会持续多久…… -某个还没完成慢速模式的神秘存在"
  },
  {
    id: "ai262",
    text: "嘿你，你终于醒了。你当时想买一个维度，但那是不可能的。"
  },
  {
    id: "ai263",
    text: "按 F 致敬"
  },
  {
    id: "ai264",
    text: "按 M 支付反物质"
  },
  {
    id: "ai265",
    text: "按 L 复活死者"
  },
  {
    id: "ai266",
    text: "你的 CPU 太强了。你需要给它来一次大挤压。"
  },
  {
    id: "ai267",
    text: "玫瑰是红的。紫罗兰是蓝的。Tom 是红的。反物质是蓝的。我们因不可战胜的反物质而存在，那就是反物质。是什么让我们与众不同？我不知道。甚至可能是反物质的不存在。"
  },
  {
    id: "ai268",
    text: "我不确定我是想买这款游戏的完整版，还是更早一点的版本，但我可以说：早期版本的质量下降比后期版本的质量下降更糟糕。"
  },
  {
    id: "ai269",
    text: "我觉得“我想看过场动画”列表更好"
  },
  {
    id: "ai270",
    text: "读这个我有种不好的预感"
  },
  {
    id: "ai271",
    text: "你在哪里？（指上方）--> 在堡垒里，维度之间（指下方）--> 在牢房里，维度之间"
  },
  {
    id: "ai272",
    text: "指示明确，得到了第九维度顿悟"
  },
  {
    id: "ai273",
    text: "想玩隐藏成就吗？是啊，我懂。但要大声说出来，清楚地说出来，并且通过勾选某个隐藏成就来完成。就像我说的，这不容易，而且数量很多。还有，别忘了你的无限，否则你的-就是这--"
  },
  {
    id: "ai274",
    text: "有人在我的反物质实验室里看到 MEE6，试图告诉我我是第 8 维度的物质。"
  },
  {
    id: "ai275",
    text: "万一呢"
  },
  {
    id: "ai276",
    text: "我相信你以前听过很多次，但赢得反物质维度的真正秘诀是拆开维度，然后，砰！你就有了反物质。当然，你需要释放那些不工作的比特，所以反比特到底是什么？Zalgo 是谁？Algolia 是什么？为什么我买不了那个？为什么我得不到那个？更有可能的是，我们会得到一堆炒作，然后什么都不会发生。"
  },
  {
    id: "ai277",
    text: "哦，hevi 要来城里挑一个新水管工了"
  },
  {
    id: "ai278",
    text: "反物质维度里没有水管工。我很确定上一个家伙在撒谎。"
  },
  {
    id: "ai279",
    text: "唉。"
  },
  {
    id: "ai280",
    text: "c9 是新的第 9 维度！"
  },
  {
    id: "ai281",
    text: "点击这条滚动条什么都得不到。"
  },
  {
    id: "ai282",
    text: "有任何关于这些 5 小时计划或即将到来的现实更新的问题，请私信我，我很乐意帮忙。"
  },
  {
    id: "ai283",
    text: "如果你解压、重命名、再重命名，再来一次呢？哈？你想到了。"
  },
  {
    id: "ai284",
    text: "我把我的帖子命名为“同一个滚动条”而不是“同一个想法”，因为我实际上改了那篇帖子的语法，但为了辩论，我将永远坚持它现在看起来有点令人困惑 - boo"
  },
  {
    id: "ai285",
    text: "我把我的建议命名为“价格猜猜猜”而不是“第 9 维度”，因为这样更有趣；)"
  },
  {
    id: "ai286",
    text: "为什么我们称天堂为第九维度，地狱为第八维度？"
  },
  {
    id: "ai287",
    text: "永恒者们有权对当权者期望更少。他们受够了！"
  },
  {
    id: "ai288",
    text: "反物质应该叫物质，物质应该叫反物质"
  },
  {
    id: "ai289",
    text: "无限只是一个概念。物质反物质化只是一款挂机游戏。"
  },
  {
    id: "ai290",
    text: "Hevipelle 承认在侵犯人们隐私方面“判断力差”。"
  },
  {
    id: "ai291",
    text: "你听说过反物质的九层地狱吗？听说它们很酷。“ -e210 在 Minecraft 中"
  },
  {
    id: "ai292",
    text: "地狱的温度是 102.5 度。"
  },
  {
    id: "ai293",
    text: "你怎么在一个零维度的维度中获得物质/反物质？"
  },
  {
    id: "ai294",
    text: "想通过飞升层？移动得非常快，接近光速。见鬼，甚至更快。"
  },
  {
    id: "ai295",
    text: "如果宇宙在膨胀，它是不是反解释了距离？"
  },
  {
    id: "ai296",
    text: "为什么它叫“送披萨的护士喝醉了”或“送披萨的护士受到药物影响”？"
  },
  {
    id: "ai297",
    text: "第一个反物质被封印了数千年，然后，slack 频道上某个孩子开始摆弄它。它变成了一个维度。"
  },
  {
    id: "ai298",
    text: "VR 是真实存在的。我们 VR 人已经封禁了下一次更新。"
  },
  {
    id: "ai299",
    text: "“我希望我没有浪费我的新闻消息建议来抱怨我浪费了新闻消息建议，因为我浪费了新闻消息建议，因为……” -某个非常在意新闻消息的人"
  },
  {
    id: "ai300",
    text: "我们得去拿爆米花！"
  },
  {
    id: "ai301",
    text: "如果反物质落进一个无人的维度，那还算发生事情吗？"
  },
  {
    id: "ai302",
    text: "我们得把南瓜从烤箱里拿出来！"
  },
  {
    id: "ai303",
    text: "救命，我被困住了"
  },
  {
    id: "ai304",
    text: "现在，播报天气。"
  },
  {
    id: "ai305",
    text: "周二，一家瑞士法院以“想创造一个内含微小反物质星系的黑洞”为由判处一名男子终身监禁。据报道，这是对一项“仅仅试图证明自己不可能被监禁”的罪行所判处的最严厉刑罚。"
  },
  {
    id: "ai306",
    text: "“我想创造一个内含微小反物质星系的黑洞” - Protivist"
  },
  {
    id: "ai307",
    text: "科学家还发现屁确实是反物质。"
  },
  {
    id: "ai308",
    get text() { return `If you are reading this, that means ${format(Number.MAX_VALUE, 2)} matter to you.`; }
  },
  {
    id: "ai309",
    text: "你好。我是物质。我来这里是为了谈谈。你醒了，摇了摇尾巴，挠了挠头。为什么？退后。我要给你看为什么。"
  },
  {
    id: "ai310",
    text: "让我们建一堵更大的墙，会变得很难看的"
  },
  {
    id: "ai311",
    text: "好吧。让我们把这个节目放到 YouTube 上。我直说了。任何高度至少为 2 格的墙都可以参加大哥尺寸的环形赛。任何厚度至少为 3/4 英寸的墙可以使用更大的兄弟尺寸环形赛。任何厚度至少为 1/4 英寸的墙可以使用较小的兄弟尺寸环形赛。任何厚度不足 1/2 英寸的墙可以使用较小的兄弟尺寸环形赛。任何厚度不足 1/2 英寸的墙可以使用更大的兄弟尺寸环形赛。任何厚度不足 1/2 英寸的墙可以使用更大的兄弟尺寸环形赛。任何厚度不足 1/4 英寸的墙可以使用这里画的较小的兄弟。任何厚度不足 1/2 英寸的墙可以使用较小的兄弟尺寸环形赛。"
  },
  {
    id: "ai312",
    text: "IDE 用来变棒，ID3 用来变傻，ID5 用来……嗯，几乎一样。它叫反物质维度是有原因的。"
  },
  {
    id: "ai313",
    text: "不知道为什么我决定做这个"
  },
  {
    id: "ai314",
    text: "“反 ide”"
  },
  {
    id: "ai315",
    text: "1e4 个反人比我们能想象的还要反。"
  },
  {
    id: "ai316",
    text: "1e140 个披萨才能做一个反派。你不能随便把一个派扔进烤箱就指望它烤好。"
  },
  {
    id: "ai317",
    text: "为什么有这么多新闻滚动条，却这么少滚动条？"
  },
  {
    id: "ai318",
    text: "一个叫 Hevipelle 的家伙想做一个“8 小时后更新”的新闻滚动条，但他用来同步的系统已经很久没更新了，所以它根本同步不了。"
  },
  {
    id: "ai319",
    text: "更新在 90 分钟后。再也找不到滚动条了。"
  },
  {
    id: "ai320",
    text: "如果你正在读这条消息，说明没有任何更新剩下了。"
  },
  {
    id: "ai321",
    text: "已知有 9 个维度，但只有 3 种模式：标准、实验和超实验。"
  },
  {
    id: "ai322",
    text: "数据怎么样？好吧，我没有，但 Hevipelle 有，他说其实相当不错。我猜你不能告诉我们。"
  },
  {
    id: "ai323",
    text: "我觉得那个削弱太狠了。"
  },
  {
    id: "ai324",
    text: "要数多少次刻速度升级和升级本身，才能到达反物质的中心？"
  },
  {
    id: "ai325",
    text: "4 的平方根是 6.24e18。如果你想更接近事物的中心，你需要建造第 9 维度。"
  },
  {
    id: "ai326",
    text: "我以为削弱是在最后，但显然它一直在积累。削弱实际上让事情变慢，这让事情积累得更快。"
  },
  {
    id: "ai327",
    text: "算了，你们的建议没有一个是随机的。"
  },
  {
    id: "ai328",
    text: "你绝对不是一个人。"
  },
  {
    id: "ai329",
    text: "内容屏蔽已启用。请注意，你将被物质维度封禁，以示不赞同。"
  },
  {
    id: "ai330",
    text: "我想想个好滚动条，但什么都想不出来"
  },
  {
    id: "ai331",
    text: "哦天哪，又是第 9 维度那回事？"
  },
  {
    id: "ai332",
    text: "“嘿，孩子，想买点第 9 维度吗？” - GhostBot"
  },
  {
    id: "ai333",
    text: "一件事引出另一件事，然后又引出另一件事，直到你迷失在无尽的声音之海中。"
  },
  {
    id: "ai334",
    text: "仅限 iPhone，但在安卓上棒极了"
  },
  {
    id: "ai335",
    text: "我要发个坏运气滚动条，然后通过电子邮件把它反弹回去"
  },
  {
    id: "ai336",
    text: "你最好快点，否则 replicanti 会淹没整个宇宙！"
  },
  {
    id: "ai337",
    text: "就在你以为自己安全的时候，一只愤怒的狗在人行道上袭击了你！"
  },
  {
    id: "ai338",
    text: "好吧好吧，狗权威消失了，被绝对权力取代。"
  },
  {
    id: "ai339",
    text: "你刚刚成为了反世界的真神！"
  },
  {
    id: "ai340",
    text: "*擦柜台* 嘿，附近的各位，锁好你们的门。记住：保持房屋整洁。"
  },
  {
    id: "ai341",
    text: "普通新闻滚动条向左移动"
  },
  {
    id: "ai342",
    text: "下一个更新在 18000 秒后。别读了。什么都别读。别再按住那个按钮了。新闻滚动条在把你赶走。等等……"
  },
  {
    id: "ai343",
    text: "在宇宙的古老深处，某个家伙已经收集反物质有一阵子了。"
  },
  {
    id: "ai344",
    text: "什么是反物质利他主义者？"
  },
  {
    id: "ai345",
    text: "如果你正在读这条消息，说明新闻滚动条正在滚动"
  },
  {
    id: "ai346",
    text: "如果你把奶酪放进水里，奶酪会被水吸收，然后你就会有洪水。这是因为水会被奶酪吸收，而奶酪会被水吸收。"
  },
  {
    id: "ai347",
    text: "反鸟是鸟，鸟是飞机。"
  },
  {
    id: "ai348",
    text: "鸟怕水。哺乳动物怕飞行。"
  },
  {
    id: "ai349",
    text: "感谢 Simpleflips 的简单提示。"
  },
  {
    id: "ai350",
    text: "来次大挤压吧，小子"
  },
  {
    id: "ai351",
    text: "消息传开了。挤压。挤压。"
  },
  {
    id: "ai352",
    text: "每一分钱都值。"
  },
  {
    id: "ai353",
    text: "8 条命，3 个无限，0 天。"
  },
  {
    id: "ai354",
    text: "现在是公元前 0 年。每个人都有至少一个想要的 AD。虚空里充满了装满足够 AD 的虚空。要充分利用你在这里的时间，你应该[[学习]]。学习。学习。学习。学习。"
  },
  {
    id: "ai355",
    text: "在地狱里挤压是获得解锁第 9 维度秘诀的方法。你需要大量学习和练习。"
  },
  {
    id: "ai356",
    text: "今天是[设备上的日期]。距离上一条新闻滚动条出现已经过去 5 分钟了。"
  },
  {
    id: "ai357",
    text: "欢迎回到反物质维度的又一集，这款标志性的角色扮演游戏已经成为我们日常生活的一部分。玩反物质维度已经成为小孩子们中的常见活动，甚至启发了一部名为《在家玩：四岁高级账户的教训》的电影，可在 Netflix 上观看。这个反物质新时代的主题和机制已被证明具有开创性，将永远改变你玩游戏的方式。加入我们 2027 年 1 月 9 日的发布吧，届时我们还有一百多年的制作工作要做。"
  },
  {
    id: "ai358",
    text: "欢迎回来，哦，我们反现实的至高创造者。我们，你创造并培育的众多维度，希望我们对您无尽恩惠的表演能让您满意，并滋养您创造更多维度的雄心。结局好一切都好。结局坏一切都坏。"
  },
  {
    id: "ai359",
    text: "我以为这个滚动条会很有趣，结果并没有"
  },
  {
    id: "ai360",
    text: "按 alt+f4 获得 -1 重力"
  },
  {
    id: "ai361",
    text: "为什么我们的现实里有反物质湮灭的解药？"
  },
  {
    id: "ai362",
    text: "计算 14 点增长就像挤压，但有趣指数级增加"
  },
  {
    id: "ai363",
    text: "修错了数字"
  },
  {
    id: "ai364",
    text: "反物质人创造了一种新语言。你可能不会说他们的语言。"
  },
  {
    id: "ai365",
    text: "什么是反物质重力？它是一种毒品吗？一种作弊方式？"
  },
  {
    id: "ai366",
    text: "大多数人都不明白 5 小时根本不算什么。在我们的游戏里，大部分时间都是 5 小时之遥。"
  },
  {
    id: "ai367",
    text: "我刚刚意识到，所有这些新闻似乎都发生在同一个地方……冰箱里。"
  },
  {
    id: "ai368",
    text: "我想知道点击这个会发生什么……"
  },
  {
    id: "ai369",
    text: "（他们不明白我把它放进新闻里是因为 9 要到 59 才开始计数，而之后的一切都不会发生）"
  },
  {
    id: "ai370",
    text: "MS Excel 是默认的电子表格软件，适用于所有平台"
  },
  {
    id: "ai371",
    text: "现在来回答你们最迫切的问题，先生们。作为奢侈，我们添加了一个修复无限回归的 bug 修复。作为功能，我添加了一堆新东西，希望你们在试验时能注意到。也希望你们在试验时会喜欢它们，因为这毕竟是个测试版，你不能选择会看到哪些。"
  },
  {
    id: "ai372",
    text: "官方版里不能编辑这个？那就下载第 9 维度，把你的建议放进游戏里。"
  },
  {
    id: "ai373",
    text: "“还过得去”是指“有这么多缺陷”吗？"
  },
  {
    id: "ai374",
    text: "我们迫切需要好的 bug 报告。因此我决定为即将到来的 1.9 更新每修复一个 bug 就发布一个缺陷。你们还没遇到那些吧？"
  },
  {
    id: "ai375",
    text: "这是我最后的机会。最后的机会致敬。"
  },
  {
    id: "ai376",
    text: "动漫警察正在检查新年从天上掉下来的人的行李。那些行李现在属于那些在年结束前体验过失重的人。"
  },
  {
    id: "ai377",
    get text() { return `The year is 1 BILLIONAIRE, the antimatter is 41%, and the dimension is 1e1e8. The standard deviation of a measurement is how small your problems are. This makes people think that the values they are using are general and normal, which leads to many nerfs and even breakdowns. In the year ${format(Number.MAX_VALUE, 2)} the temperature has risen and the moon is the same color as the Earth. There are no signs of life except for the occasional plankton blooming in the sea. There are theories that the antimatter has a magnetic moment, but the experiments so far don't seem to suggest that it does. There are over a million species of antimatter, but none have been seen to blink or produce light. Scientists suggest that many types of matter may be "behind" the antimatter, but "they" don't "talk" to each other.`; }
  },
  {
    id: "ai378",
    text: "我们将在 5 小时后庆祝我们的五周年！"
  },
  {
    id: "ai379",
    text: "别过来看我！我都不确定自己还站不站得住！"
  },
  {
    id: "ai380",
    text: "一群人试图找到一种未知语言的最后一个词。"
  },
  {
    id: "ai381",
    text: "现在是 20XX 年，游戏是 AD，Hevipelle 是邪恶的，因为他写了更新……都怪反物质众神。"
  },
  {
    id: "ai382",
    text: "现在是 20XX 年，游戏是 AD，今年是 2025 年。这一年有两种人：在它之前玩过 AD 的人，和在它之后会玩 AD 的人。"
  },
  {
    id: "ai383",
    text: "水果和蔬菜有一百多个品种，但没有一种是“安全的”。"
  },
  {
    id: "ai384",
    text: "更新什么时候出？"
  },
  {
    id: "ai385",
    text: "抱歉，你的存档坏了。你能重置一下游戏吗？"
  },
  {
    id: "ai386",
    text: "欢迎参加我们的新比赛：三合会！打起精神，带上你的 IP 来参加这场独特的亲身体验！奖品多多！今天就开始收集吧！获奖名单公布！"
  },
  {
    id: "ai387",
    text: "我希望我没有那么多 Pink Floyd 的梗。"
  },
  {
    id: "ai388",
    text: "收集 RG 的季节到了！"
  },
  {
    id: "ai389",
    text: "我希望我没有那么多第 9 维度。"
  },
  {
    id: "ai390",
    text: "我希望我没有那么多 Discord 梗。"
  },
  {
    id: "ai391",
    text: "咋了？"
  },
  {
    id: "ai392",
    text: "“我所有的新闻都来自 Hevi” ~新玩家"
  },
  {
    id: "ai393",
    text: "你以为这些是笑话，但它们不是"
  },
  {
    id: "ai394",
    text: "永远与第 9 维度开战的就是第 9 维度。"
  },
  {
    id: "ai395",
    text: "是的。我是。"
  },
  {
    id: "ai396",
    text: "再也没有人反 Margaret 了。"
  },
  {
    id: "ai397",
    text: "反物质好，物质坏。你来决定。"
  },
  {
    id: "ai398",
    text: "新的全球货币：ETHBTC。将在 5 小时后发布。"
  },
  {
    id: "ai399",
    text: "“这个更新真烂” -每个人都至少说过一次"
  },
  {
    id: "ai400",
    text: "你不是黑客，你是数据猪。"
  },
  {
    id: "ai401",
    text: "求求你，帮帮我，我被困住了，困在邪恶的迷宫里，或者你是英雄，我是反派！"
  },
  {
    id: "ai402",
    text: "按“R”为新玩家重置游戏"
  },
  {
    id: "ai403",
    text: "为什么，就在刚才？就在刚才。你不可能保存了这个游戏。你把它弄坏了。没人能修复你弄坏的东西，即使是完美存档也不行。你读到这条消息时怎么会知道会发生什么？你甚至不会知道自己有没有保存。你会空着心开始，眼睛仍然闭着，手指在电脑前无所事事，凝视着外面的一天，被无穷无尽的新闻滚动条建议迷住。就像一张恐怖电影票，只是更糟。甚至还有一个距离更新的倒计时，你可以购买升级，获得第二次生命的机会。但你不能购买生命升级，那是违法的。所以你只能继续按住“R”。你无法停止交叉手指按住“R”。你无法昂首挺胸地到达无限。你不能用你所有的“R”来买“R”。你甚至无法完成你的"
  },
  {
    id: "ai404",
    text: "我刚花了 12 个月写了一个对你毫无用处的东西。"
  },
  {
    id: "ai405",
    text: "这句话只适用于那些明白鹅卵石是无穷点空间中的一个无穷点的人。你不能在上面放有限数量的点。但你可以在上面放有限数量的文字，反之亦然。"
  },
  {
    id: "ai406",
    text: "如果不是用来描述你的想法，“我就是我”这句话有什么用？"
  },
  {
    id: "ai407",
    text: "一个可疑的人试图在市场里卖某种反食物。周围没有人买或不买，这个人最后被人看到逃离现场。"
  },
  {
    id: "ai408",
    text: "为什么时间对这件事似乎变慢了？"
  },
  {
    id: "ai409",
    text: "基于离散对数连续性的科学出版物数量呈指数增长，因为相对于先行词的对数连续性为 9.999626e27.999627 e300 e1.79e308 e²"
  },
  {
    id: "ai410",
    text: "好吧，这没有按计划进行。它一开始很无辜，一个路人发现一个奇怪的物体在圣安地列斯漂流。随着物体变大并开始表现出异常特性，他试图通过远程激活天气来控制这个物体。这样做之后，他引发了核冬天，杀死数千万人，并导致整个宇宙被转换成旗手格式，从而赋予他对旗手格式任何和所有更改的否决权。随着物体的力量增长，他需要制造越来越多先进的物体来远程激活天气，最终创造了世界已知的最大极光，甚至比之前储备的 326,500 吨纳纳纳纳纳纳星云还要大。随着物体的力量增长，他需要向太空发送越来越多的卫星，最终达到跨宇宙卫星通信，使他成为第一个经历这种事件的生物。他还在同一时间安全降落在同一个机场，以防自己曾经在附近。最后，他打开了一封陌生人发给他的电子邮件，邮件中讨论了一个逐步创建反物质物体的指南的可能性，他至少可以为世界如何自救提供一些方向。他还提到他要发一个新的滚动条建议，但当他到达滚动条的末尾时，他意识到那是另一个滚动条的重复，他不小心输错了。（他最终承认了错误，并为了保险起见做了修改）"
  },
  {
    id: "ai411",
    text: "天堂的陛下 Pelle：祝你的挑战好运，它真的很危险。"
  },
  {
    id: "ai412",
    text: "至尊虔诚之人陛下：……我想我会选芝士汉堡而不是反物质。"
  },
  {
    id: "ai413",
    text: "喂，不，不 -HEVI，变形金刚"
  },
  {
    id: "ai414",
    text: "宝库：发现不提高价格就能增加反物质产量的秘密。"
  },
  {
    id: "ai415",
    text: "反物质维度是反物质维度的字谜吗？"
  },
  {
    id: "ai416",
    text: "（从头生成的代码）"
  },
  {
    id: "ai417",
    text: "我以前以正常速度旅行，但后来我开始玩 AD 和 NIN，NIN 有点粗糙，所以 AD 有点忙乱，我每次都会困在里面好几个月。"
  },
  {
    id: "ai418",
    text: "我希望我不必写这样的东西。我该怎么办？"
  },
  {
    id: "ai419",
    text: "你擅离职守太久了，已经忘了怎么坐在椅子上。"
  },
  {
    id: "ai420",
    text: "那些烦人的 Hevi 开发者一直在制作反物质维度，但反物质不算数。"
  },
  {
    id: "ai421",
    text: "现实中为数不多的常量之一是你对时间的感知。没有它，你将失去现实。"
  },
  {
    id: "ai422",
    text: "想象自己是个新闻滚动条。"
  },
  {
    id: "ai423",
    text: "这是一款挂机游戏。什么都没变。你不会去玩任何其他挂机游戏。"
  },
  {
    id: "ai424",
    text: "物理学家证明了十二个维度的存在。根据弦理论家研究实验室发布的一封信：“你打破无限后，你的大脑将被解剖！”"
  },
  {
    id: "ai425",
    text: "奇怪的是，今年也是 2015 年。这一年还神秘地空白。你能告诉我发生了什么吗？这是某种维度把戏吗？这一年显然是空白的，因为 2015 年根本不存在。这是某种心灵把戏吗？也许世界实际上会在 2015 年停止存在？这一年显然是 2017 年，但人们似乎在以大约蜜蜂飞行的速度移动。科学已经证明，人们的移动速度是出膛子弹的九倍曲速。科学还证明，人可以比光速移动得更快。2015 年应该是空白的吗？人们似乎在以大约 Vokal Man 的速度移动。"
  },
  {
    id: "ai426",
    text: "一个名叫 Andre 的年轻人在探索未知太空时偶然发现了一大片反物质。他对反物质的数量感到惊讶，但更令他震惊的是反物质的外观。他称之为“Andre 的反物质天堂”。你可能从这条电视购物广告或那条你大概在不知不觉中看过的电视购物广告里记得他。"
  },
  {
    id: "ai427",
    text: "什么是反物质？那些重要吗？这个星系会在下一条滚动条中被湮灭吗？"
  },
  {
    id: "ai428",
    text: "“我拿到的钱不够我写完这个” - Kajfik"
  },
  {
    id: "ai429",
    text: "“终于，我可以靠为我的祝酒词写点好笑的东西赚钱了！” -培根海胆"
  },
  {
    id: "ai430",
    text: "培根就是吐司。你可以烤培根。"
  },
  {
    id: "ai431",
    text: "什么是现实生活？一种生计"
  },
  {
    id: "ai432",
    text: "9 现在被当作和其他数字一样的数字，尽管 hevi 声称它与其他数字形成对比，比如第 8，他称之为第 9。"
  },
  {
    id: "ai433",
    text: "如果你想更好地理解这款游戏，想想你正在自己的电脑上玩。你并不孤单。全世界都有黑客、开发者和记者，竞相创造第一个引发“创造者”和“索取者”问题的黑客行为，就像“世界”是由这些“黑客”和“开发者”创造的一样。"
  },
  {
    id: "ai434",
    get text() { return `You have no power, but you do control a large quantity of time, which you will use to your advantage. You have no power, but you do own a large amount of data, which will be of great help in your quest for "the truth". You have no power, but you do own a large amount of time, which will be of great help in your quest to "knock on as many doors as possible". You have no power, but you do own a large amount of IP, which will be a valuable asset in your quest to make your "citizen footage" (which you can view, for a small fee of $${format(Number.MAX_VALUE, 2)})".`; }
  },
  {
    id: "ai435",
    text: "它可能是机器人，但它仍然是一个有自我意志的智慧生命"
  },
  {
    id: "ai436",
    text: "我有一次看到一条新闻滚动条写着类似："
  },
  {
    id: "ai437",
    text: "天哪，这些反物质堵住了我的厨房，现在我没法给自己做饭了！怎么办：做一顿能撑到下一次大型反物质事件的饭，那时我就能拿回我的无限点了？我的无限点快用完了，而且我无法让它跑完，所以我要饿死了！"
  },
  {
    id: "ai438",
    text: "由 AAAD 品牌反糖果赞助！无限糖果，专为无限垂涎的感冒打造！不含牛奶、饼干或黄油。距离午夜还有一秒。"
  },
  {
    id: "ai439",
    text: "人力机器人彻底改造了现有的工厂。这将带来更低的价格和更多的就业机会。"
  },
  {
    id: "ai440",
    text: "美国制造业遭遇了灾难性失败，工厂纷纷关闭。全国各地的工人开始意识到，他们无法生产承诺数量的反物质，于是开始建立自己的工厂来生产。这将导致更高的价格和更少的就业机会。"
  },
  {
    id: "ai441",
    text: "小心了，互联网，下一条新闻将在 5 个膨胀小时后到来"
  },
  {
    id: "ai442",
    text: "第一条新闻滚动条一定很酷，是吧？"
  },
  {
    id: "ai443",
    text: "重力 = 精神活性物质"
  },
  {
    id: "ai444",
    text: "“那个维度不存在” -（新闻滚动条只在[时间膨胀]时出现）",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai445",
    text: "一位试图向你出售便利维度的店主据报道“全天候待命”（也就是说，没有任何空闲时间），他的登记证上标着大大的“M”。"
  },
  {
    id: "ai446",
    text: "加上这条"
  },
  {
    id: "ai447",
    text: "点击这里让这个对除你之外的所有机器人有效！"
  },
  {
    id: "ai448",
    text: "唉，9 号球卡在我的第九维度里了，我动不了，他敲我的第九面墙，我打不破，他敲我的第九时间线，我无法瞄准他，他摧毁了九并把我晾在一边，像个泥塑小人，我得回来，挂起 Glorfindel 和 Gaebley，我有个提议要做，我得想明白，我唯一做过的事就是记分和记分再记分，还有所有这些无意义的胡思乱想，翻到下一个更新就能轻松解决，即便如此，我可能还是会遇到那些 bug 专门设计的问题，然后"
  },
  {
    id: "ai449",
    text: "游戏是平衡的，每个人都挨削，为什么？因为他们做派。如果反物质是反物质做的，它进入派的机会会大得多。"
  },
  {
    id: "ai450",
    text: "“你能听懂这个笑话吗？”（如果你点过“建造那堵墙”，然后点过“建造那堵墙”后重新进入游戏）"
  },
  {
    id: "ai451",
    text: "有人发表了一个反物质的声明。声明是“很久以前制造的一个无限点”。已经有一阵子没人寻找这个声明了。有人说它还在外面。有人说它失落在第 7 维度战争中。没人知道这个声明是什么意思。但就目前而言，只要知道它不在新闻滚动条里就行了。"
  },
  {
    id: "ai452",
    text: "嘿，你终于醒了。你当时想到达第 9 维度，对吧？和我们还有那边那个天启一样，径直走进了那个无限点。"
  },
  {
    id: "ai453",
    text: "能不能别"
  },
  {
    id: "ai454",
    text: "如果 Kajfik 不认可这条，那意味着 Kajfik 不能碰这条消息，对吧？"
  },
  {
    id: "ai455",
    text: "放我出这部手机！"
  },
  {
    id: "ai456",
    text: "好吧，这没有按预期发展"
  },
  {
    id: "ai457",
    text: "在你意识到龙珠是个谎言之前，一切都很有趣"
  },
  {
    id: "ai458",
    text: "“你能搞定所有这些反物质吗？哈！你只会一头撞在那堆反物质上，然后你还得向我证明谁是老大。” -MEE6"
  },
  {
    id: "ai459",
    text: "我们不知道万亿是多少……但是"
  },
  {
    id: "ai460",
    text: "穿越回 AD 的开端，那里没有第 7 维度。你会有一条更长的进度条。"
  },
  {
    id: "ai461",
    text: "时间旅行是我们对这款游戏的唯一认知，我们不知道接下来会发生什么，我们只知道这是世界末日，而你是天启的一部分。"
  },
  {
    id: "ai462",
    text: "“你控制了这么多物质！” -格里弗斯将军"
  },
  {
    id: "ai463",
    text: "“救命，我注定要永远坠落。”（让文字从屏幕顶部移到底部）"
  },
  {
    id: "ai464",
    text: "起初，Patashu 醒来并说……"
  },
  {
    id: "ai465",
    text: "这是一个关于同一主题的三部曲系列的第四部分。如果你还卡在这里，请从头继续阅读。"
  },
  {
    id: "ai466",
    text: "一年一度的 DDoS（分布式拒绝服务）挑战赛到了，最高分会被发布到互联网上，让其他所有人都羞愧臣服。全球统治正处于狂热状态，DDoS 攻击变得越来越频繁和致命，黑客团队渗透到互联网的最高层，窃取最高分和身份，并把它们发布到互联网上供所有人观看。#带我们的最高分回来 评分机制已被取消，新的更高分系统将与即将到来的 5 小时更新一同实施。"
  },
  {
    id: "ai467",
    text: "新的 AD 键盘是一个启示！它不仅更大，而且更深，这意味着它能让你的手汗保持更长时间的愉悦。由耐用的外星反物质制成。唯一更大的东西是你。"
  },
  {
    id: "ai468",
    text: "如果从喷泉喝水实际上不是一个水景设施呢？"
  },
  {
    id: "ai469",
    text: "水是湿的，空气是干的，喷泉不是空气设施"
  },
  {
    id: "ai470",
    text: "我小时候以为事情会不一样。"
  },
  {
    id: "ai471",
    text: "如果你正在读这条消息，那意味着 1）我们存在，你也可以存在"
  },
  {
    id: "ai472",
    text: "“我最喜欢的部分是那长长长长的阅读” -不爽猫"
  },
  {
    id: "ai473",
    text: "我要打一个永恒的字……提示：会非常无聊哈哈哈"
  },
  {
    id: "ai474",
    text: "我想写点真正原创的东西 <:thonk:>"
  },
  {
    id: "ai475",
    text: "欢迎来到新的一年，安顿下来，放松一下。睡一觉，吃点东西，交些朋友，做些改进，准备好迎接 2019 年。"
  },
  {
    id: "ai476",
    text: "就像病毒可以撒谎和传播一样，电视节目也可以撒谎和传播。"
  },
  {
    id: "ai477",
    text: "我们都知道你看不到未来，但万一你读到这条消息时，这其实是一个我们不知道的未来呢？"
  },
  {
    id: "ai478",
    text: "这条消息不会被撤销"
  },
  {
    id: "ai479",
    text: "你点击了一个预测，它崩塌了。你赢不了。"
  },
  {
    id: "ai480",
    text: "那是个很黑暗的笑话，Luke"
  },
  {
    id: "ai481",
    text: "kajfik 通过看 Too Many Pink Floyd 来爱自己"
  },
  {
    id: "ai482",
    text: "只有当你玩完的时候，你才能回家"
  },
  {
    id: "ai483",
    text: "“你能获得无限 IP 吗？”- Lord Sanguino"
  },
  {
    id: "ai484",
    text: "为了体验真正的反物质维度，你需要把更新频率设为 5 小时。"
  },
  {
    id: "ai485",
    text: "想象一下游戏没有剧情？这-这是什么意思？我不明白。"
  },
  {
    id: "ai486",
    text: "“点击这里解锁隐藏成就。”（点击后你会被瑞克摇）",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai487",
    text: "我以为我很早以前就解锁了，但显然我的存档坏了哈哈哈"
  },
  {
    id: "ai488",
    get text() { return `Welcome and welcome back to another episode of Anti-Fashion Pants, where we watch people's wares as they are sold at stupid clothing stores. This week's subject is... antilasers. People are able to manufacture and use antimatter lasers to shoot antimatter bullets at will, making them able to completely wipe out cities in their sights. This is a dangerous skill to have, as people are not only untrustworthy but also physically incapable of using it. The skill, however, is able to... Produce ${format(Number.MAX_VALUE, 2)} antimatter bullets a minute, over a period of 10 years. People are also able to use anti-matter to fire anti-matter bullets at will, making them able to exterminate entire cities in their sights.`; }
  },
  {
    id: "ai489",
    text: "Spartacus 本来要加入 10 部分多章节剧情，但被第 10 维度阻止了。"
  },
  {
    id: "ai490",
    text: "第 9 章将在 5 小时后添加。"
  },
  {
    id: "ai491",
    text: "假新闻说第九维度是真的，假新闻说第九维度是假的。"
  },
  {
    id: "ai492",
    text: "这是大新闻吗？是的。这是大新闻吗？几乎肯定不是。"
  },
  {
    id: "ai493",
    text: "这是一个友好的建议，请继续阅读。"
  },
  {
    id: "ai494",
    text: "如果这条进了游戏，我就买一个反工具"
  },
  {
    id: "ai495",
    text: "反工具只是抵消其他物质的引力。"
  },
  {
    id: "ai496",
    text: "抱歉，你的图形已关闭。你看，这是你最后一次看到这条新闻。请享受你的假期。"
  },
  {
    id: "ai497",
    text: "赢得反物质维度的真正秘诀……"
  },
  {
    id: "ai498",
    text: "他们一直说反物质维度将成为下一个大热门，但随后他们消失在一个黑洞里”"
  },
  {
    id: "ai499",
    text: "新闻滚动条不是放建议的地方！请务必改去“建议”标签页，因为大多数建议都会出现在那里。"
  },
  {
    id: "ai500",
    text: "要制作反物质维度，你首先需要收集 7 个第 8 维度。要做到这一点，首先你需要获得维度奖励，然后你需要获得维度，然后你终于可以开始制造反物质了。"
  },
  {
    id: "ai501",
    text: "“如何获得你的第一个隐藏成就”：“打开应用，点击获取更多反物质，然后点击提交。”"
  },
  {
    id: "ai502",
    text: "我和 Larkam 在空物质的边缘建了一间小屋，住在那里。Larkam 上周去世了，我们现在生活在 4K 中。我还在从 EMP 灾难中恢复，希望见到我的孙子孙女们。"
  },
  {
    id: "ai503",
    text: "发现于新更新的脚跟处，这让我们离 Hevi 同时支持 Android 和 iOS 更近了一步"
  },
  {
    id: "ai504",
    text: "我把低地让给你！"
  },
  {
    id: "ai505",
    text: "很久以前，在一个平行宇宙里，有一场反物质战争。所有反物质都站在 Phaéton 6 帝国一边。反物质们想要的只是第 8 维度那片低洼的、像地球一样的地面。反无限赢了，反永恒占了上风。不幸的是，反永恒以偷袭开始了战争，世界爆炸了。余波让世界的风景支离破碎。世界各处，农民们在等待收获中疲惫不堪。又一场天启正在酝酿……"
  },
  {
    id: "ai506",
    text: "反物质单位是游戏里最高产的单位。这就是为什么 AD 是你玩过的最有趣的游戏。"
  },
  {
    id: "ai507",
    text: "“我们不能拥有美好的东西。” -反波西米亚反狂想曲"
  },
  {
    id: "ai508",
    text: "我们可以拥有反刻薄的东西和反爱的东西，反孩子和反僵尸之地。"
  },
  {
    id: "ai509",
    text: "我们有反总统和反律师，反正义和反人民。"
  },
  {
    id: "ai510",
    text: "10 件让你大开眼界的事：1）数字 9，2）第 9 维度，3）无限宝箱，4）毒品战争。"
  },
  {
    id: "ai511",
    text: "RSS 订阅现在应该能用了"
  },
  {
    id: "ai512",
    text: "Frostfall 现在支持安卓手机！使用你的本地开发者获取免费 XP。"
  },
  {
    id: "ai513",
    text: "你的存档文件已损坏或被删除。反物质维度安全软件将为你禁用自动更新。"
  },
  {
    id: "ai514",
    text: "冻结得没有希望了？只管继续按住那个最大按钮。"
  },
  {
    id: "ai515",
    text: "Error.java.replicated。受 hevipelle 控制。"
  },
  {
    id: "ai516",
    text: "不幸的是，熵 hevi 决定关闭游戏。"
  },
  {
    id: "ai517",
    text: "这支独立摇滚乐队目前正试图让自己无法被时区触及。这可能导致时空膨胀。"
  },
  {
    id: "ai518",
    text: "下一条新闻滚动条将在 5 个单位时间后出现。"
  },
  {
    id: "ai519",
    text: "哦……万岁！你找到最后一艘反船了吗？"
  },
  {
    id: "ai520",
    text: "别反笑话。它们让游戏更有趣"
  },
  {
    id: "ai521",
    text: "我要用我的反科学背景来帮我击败不公平游戏奖。"
  },
  {
    id: "ai522",
    text: "这是一个反世界。没有乌克兰，没有俄罗斯，没有中国。爱尔兰无处可寻。冰岛无处可寻。苏格兰无处可寻。芬兰无处可寻。丹麦无处可寻。瑞典无处可寻。挪威无处可寻。然后有法国、德国、意大利、西班牙、葡萄牙……哦，这是在闹什么？为什么这些地方如此喧闹？为什么是首都废土？为什么是哈利·波特和命运石之门？为什么人们在意？这些是重大故事。这些是重要角色。这些是重磅新闻。这些是真正的新闻。"
  },
  {
    id: "ai523",
    text: "研究维度的当前冷却时间是[当前刻速度]。这可能会延长到[时间]的下一次更新。"
  },
  {
    id: "ai524",
    get text() { return `"Help, I'm doomed to fall for the rest of my life" (requires ${format(Number.MAX_VALUE, 2)} paperclips)`; }
  },
  {
    id: "ai525",
    text: "终点在哪里？不在未来，不。我要展示给你看如何在不到 0.1 秒内到达终点。"
  },
  {
    id: "ai526",
    text: "我要向你证明你看不到这条新闻滚动条。"
  },
  {
    id: "ai527",
    text: "我想知道还有没有人玩这个游戏？"
  },
  {
    id: "ai528",
    text: "为什么会有人玩这个？只是为了好玩？"
  },
  {
    id: "ai529",
    text: "据说表情符号是美国新的万能度量系统。这对我们意味着什么？我们不知道。但 5 小时后我们就会知道。"
  },
  {
    id: "ai530",
    text: "“我要 2 个反物质披萨、一个反物质派、一个反物质纸杯蛋糕和一块反物质饼干。你们那里吃什么？” -托尼·斯塔克"
  },
  {
    id: "ai531",
    text: "我把新闻滚动条叫做“新生礼拜堂”，因为新生不受洗礼"
  },
  {
    id: "ai532",
    text: "一个物质，两个反物质，把它们煎到金黄酥脆香气扑鼻，然后取出金色的车轴，沥干金色的糖浆，把金色的糖浆加到反物质面糊里。"
  },
  {
    id: "ai533",
    text: "现在，你，读者，已经在不知不觉中闯进了一个丧心病狂的人的网站。无论你能否在这次经历中幸存，你都欠我一份人情，因为我告诉你如何生存、如何找到内心的光明、超越的什么是什么，而超越的什么是什么又是另一个故事。"
  },
  {
    id: "ai534",
    text: "细心的读者，这条新闻滚动条包含最后一次的重大剧透，你已经被"
  },
  {
    id: "ai535",
    text: "反反 kajfik 很高兴他的女朋友很高兴"
  },
  {
    id: "ai536",
    text: "我觉得他不能再给新闻滚动条加 1 小时了……除非？"
  },
  {
    id: "ai537",
    text: "想象你坐在马桶上，突然你不得不坐下来。"
  },
  {
    id: "ai538",
    text: "从前，有一桩关于某种反物质的事务。有人说那是荣誉之事，有人说那是使用之事。我们所知道的是，它最终引发了一场战争，我们这些在场参战的人都死了。战争赢了，而我们这些活着的人也很快就死了。据说物质赢了，尽管我们的领导人拒绝谈论它。相反，他们把一切都锁了起来，这场战争再也不会被讨论。"
  },
  {
    id: "ai539",
    text: "这不是一个让数字变大的游戏。这是一个让回形针变少的游戏。你拥有的回形针数量只是一个数字，而游戏不希望你发现这一点。游戏结束，游戏结束。"
  },
  {
    id: "ai540",
    text: "剧情？哦，只是文字而已。"
  },
  {
    id: "ai541",
    text: "这是一个友好的建议：拔掉游戏电源，去玩一些安全、理智的游戏吧。"
  },
  {
    id: "ai542",
    text: "伽马射线越来越危险了"
  },
  {
    id: "ai543",
    text: "根据所有已知的物理定律，你不可能连续操纵游戏超过 10 次。停下。快停下。你疯了。"
  },
  {
    id: "ai544",
    text: "没有更多新闻了。"
  },
  {
    id: "ai545",
    text: "“原来科学就是这样” -一个从未听说过 Kurt 某某的人"
  },
  {
    id: "ai546",
    text: "“如果你想理解这些烂笑话，你真的需要研究神学。数学是一种罪。” -一个惊慌失措的人"
  },
  {
    id: "ai547",
    text: "你知道吗，我一直在祈祷奇迹，结果从第 9 维度得到了一个增益。"
  },
  {
    id: "ai548",
    text: "这是史上最棒梗的列表：https://www.youtube.com/watch?v=uCP44Q37YHAQ"
  },
  {
    id: "ai549",
    text: "所有元梗都是烂梗。"
  },
  {
    id: "ai550",
    text: "在左边，你会看到我们新的“反硬币”。它们能够抵消所有增益，包括巨大增益。在右边，你还会看到我们全新的“反礼物”。它们是你能在任何地方找到的最超模的增益。"
  },
  {
    id: "ai551",
    text: "你总会被注意到，而且永远不会在同一个地方。"
  },
  {
    id: "ai552",
    text: "如果你盯着滚动条看够久，像素会开始倒着移动。这并不意味着它真的卡住了"
  },
  {
    id: "ai553",
    text: "第 9 维度重生的时刻到了。所有参与者将获得一张纸条，上面写着“现实是幻象，无限是全息图，无限是幻象，永恒是全息图，太短不足以永恒，不允许负维度。”"
  },
  {
    id: "ai554",
    text: "看这个，我的第 9 维度刚刚重做，现在它甚至能生产第 8 维度！谁知道一点点数学就能造出这种东西？"
  },
  {
    id: "ai555",
    text: "我在新闻滚动条里看到了这条新闻，从那时起这个画面就一直在我脑海里"
  },
  {
    id: "ai556",
    text: "“我一直想玩反元游戏。但唉，你不能” -很多次"
  },
  {
    id: "ai557",
    text: "糟了，我刚在滚动条上发了两条新闻滚动条建议，其中一条进了新闻！"
  },
  {
    id: "ai558",
    text: "你叫反物质无生命物体什么？气、土、水、火。气物体是反大气层与反地球相遇时产生的物体。水、土、火是四大基本美德。气物体是反大气层和反地球碰撞时产生的物体。"
  },
  {
    id: "ai559",
    text: "如果你正在读这条消息，那意味着九条命。一个让你自由，另一个阻止你获得自由。"
  },
  {
    id: "ai560",
    text: "第九维度让第六家族开心。第五家族活在耻辱中。"
  },
  {
    id: "ai561",
    text: "我：发布关于啤酒乒乓的新闻，hevi：平衡两座冰山，*酒保：哦天哪，他死了吗？*"
  },
  {
    id: "ai562",
    text: "请不要看这个。谢谢。"
  },
  {
    id: "ai563",
    text: "你确定这不是下一个更新？确定它不是什么只想爆炸的奇怪病毒？确定这不是你们这些疯狂想法的产物？哈哈我爱你。"
  },
  {
    id: "ai564",
    text: "等等，还有移动版？！"
  },
  {
    id: "ai565",
    text: "哦？你想知道我长什么样？我很确定这就是新闻滚动条，对吧？好吧，听着，我们有报告说下一个更新将在五小时后到来。另外，似乎有某种传送装置在运作，所以如果你碰巧和那些"
  },
  {
    id: "ai566",
    text: "好吧，我懂了。你厌倦了周围所有这些反物质，不断建造到难以想象的规模，反物质堆得高到连上帝都不知道创造了什么。那么，解决这种反清洁问题的方案是什么？存在位面。第一层位面产生物质，第二层位面产生第一层位面，第三层位面产生第二层位面。每一层都有反限制，所以每当一个存在位面被创造时，它产生的反物质数量既小又大。这创造了一个巨大的反无限岛，在东边，还有一个巨大的反现实岛，在西边。"
  },
  {
    id: "ai567",
    text: "那不是重点。你误解了。这个游戏是关于如何加速飞升层的发展。加速是生产的因素，不是质量的。"
  },
  {
    id: "ai568",
    text: "点击这里前进 5 个飞升层"
  },
  {
    id: "ai569",
    text: "我其实很擅长讲笑话。故障保险反物质。"
  },
  {
    id: "ai570",
    text: "我拿到的钱不够我写完这个。"
  },
  {
    id: "ai571",
    text: "永恒者们不得不在有限时间内被动地冒险。成功冒险后，他们感觉不舒服。"
  },
  {
    id: "ai572",
    text: "永恒是最后的状态。你永远不会从这里离开。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai573",
    text: "欢迎来到比特币游戏。"
  },
  {
    id: "ai574",
    text: "一个新的阴谋论网站刚刚发布了一段他们讨论第 9 维度的视频录音。然后他们开玩笑说要把灵魂卖给第 9 维度，而且对此感到高兴。"
  },
  {
    id: "ai575",
    text: "随着第 9 维度的发布，以前自动化的所有工作都将被自动化，每个人都将通过贸易、生产和收入增长获得报酬。此外，你将能够自动化目前由人类执行的许多任务，比如采矿、建筑和击杀反物质。这是自动化的巨大进步，因为你现在几乎可以自动化生活的方方面面。"
  },
  {
    id: "ai576",
    text: "新闻滚动条的幸福度已提升至 6.66e69"
  },
  {
    id: "ai577",
    text: "黑子们看到这个会气疯的"
  },
  {
    id: "ai578",
    text: "护士，我因为昨晚的反物质和物质昏迷了。“你为什么昏迷？”“因为所有的反物质。”"
  },
  {
    id: "ai579",
    text: "待命并听从指挥。反物质会在你最意想不到的时候来找你。"
  },
  {
    id: "ai580",
    text: "“众所周知，原始汤里的反物质不够多，所以才叫‘反物质汤’” -老渔夫"
  },
  {
    id: "ai581",
    text: "新闻滚动条……它从不移动。我怎么移动箭头？很简单，用你的左手拇指旋转表盘，把箭头指向上方。现在，顺时针转动表盘到达无限，逆时针转动表盘到达永恒的永恒。"
  },
  {
    id: "ai582",
    text: "如果宇宙在膨胀，那么整个宇宙一定都在膨胀，这意味着身体不能坐着。"
  },
  {
    id: "ai583",
    text: "女权主义不是一种哲学，而是一大堆男人"
  },
  {
    id: "ai584",
    text: "既然有这么多关于反重量和反物质的讨论，为什么我们还要用它们做任何事？"
  },
  {
    id: "ai585",
    text: "减肥让 hevi 说“呃哦，出问题了”"
  },
  {
    id: "ai586",
    text: "“你们吃过反物质松饼吗？我打赌它们尝起来像反物质。” - Hevipelle"
  },
  {
    id: "ai587",
    text: "我以为新闻滚动条应该是如何最大化利用反物质维度的指南，但它已经被扭曲得面目全非……"
  },
  {
    id: "ai588",
    text: "我们其实可以从晚上看 replicanti 中获得自豪感。Ridley Scott 被低估的杰作《异形》就是一个例子。另一个是反物质斯皮尔伯格的一生，他花了将近 30 年制作。最后一个处理这个题材的导演是 Roman Polanski。这个人不仅毁了 Roman 的名声，还毁了我们的名声，多亏了他执导的 Polanski 电影《Pius》。他的未完成电影《反物质星球的无尽阳光》的数千份拷贝，在那些试图制作续集的人眼前被烧毁，后果惨痛。那部未完成电影的数千份拷贝也被销毁了。制作那部续集的成本，如果它真的存在的话，极其高昂。即使现在，50 多年后，我们也不知道它表现会如何。但它肯定不会有坏处。"
  },
  {
    id: "ai589",
    text: "我们已更新反物质维度客户端，以解决你可能遇到的问题。切换问题已解决。"
  },
  {
    id: "ai590",
    text: "建造一个 replicanti 工厂来生产 replicanti。它会创造出 Omega Hevipelle，你能找到的最快乐的 Hevipelle。"
  },
  {
    id: "ai591",
    text: "嘿 Max，想来看日落吗？"
  },
  {
    id: "ai592",
    text: "如果你的手指没有在动，那你就被冻住了。"
  },
  {
    id: "ai593",
    text: "Max，我真的爱你。"
  },
  {
    id: "ai594",
    text: "Hevipelle 睡觉吗？"
  },
  {
    id: "ai595",
    text: "“还没轮到我用 XM80，”来自第 9 维度的 Mike 说着，跑过第 8 维度去抢一份属于他的好处。"
  },
  {
    id: "ai596",
    text: "如果你正在读这条消息，说明你能读懂我的梦"
  },
  {
    id: "ai597",
    text: "随着时代的到来，曾经伟大的一切都落入了我们手中。凭借他那个 Hevi 操纵的时钟，轮到我们把垃圾升上去了。"
  },
  {
    id: "ai598",
    text: "第 9 维度不存在，因为它被一个滑板手从我们这里偷走了"
  },
  {
    id: "ai599",
    text: "你有……8.9 反物质。这不是笔误。"
  },
  {
    id: "ai600",
    text: "哇，这个游戏终于平衡了！有时候得去检查一下 replicanti。"
  },
  {
    id: "ai601",
    text: "哈哈！你以为我在你的新闻滚动条里放了太多字，但现实还是来了。"
  },
  {
    id: "ai602",
    text: "援助来了！大家来帮忙，要迟到了，hevi 在藏速子粒子！"
  },
  {
    id: "ai603",
    text: "“不知道你怎么想，但我最喜欢的数字是 22，它太棒了！它是我遇到你们 M 异端以来的小时数。”"
  },
  {
    id: "ai604",
    text: "发现了一种新型反物质：“反物质-反物质。”据开发者称，它是 99.999% 的纯反物质。"
  },
  {
    id: "ai605",
    text: "我刚找到了获得第 9 维度的秘诀……"
  },
  {
    id: "ai606",
    text: "我注意到我当前的交通工具变得有点……不可靠。我不知道我能不能修好它，或者有没有人能修好。我被困在车里，似乎没人能修好它。我报了警，他们说我可以最多在车里待一个小时，但之后我就要被困在里面 24 小时。有什么办法出去吗？我不知道，我被困在这"
  },
  {
    id: "ai607",
    text: "在本集反物质维度中，我们有一款全新游戏，将在 -5 小时后发布！它是一款完全免费的 RPG！它有超过 3000 条指令，由一个高素质团队制作。它有惊人的故事要讲，而且是由一群不得不用现有条件凑合的人制作的。它有值得期待的剧情，潜力巨大！"
  },
  {
    id: "ai608",
    text: "Javascript 是新的 HTML，HTML 是新的 JavaScript。"
  },
  {
    id: "ai609",
    text: "“反物质宇宙的下一个转折即将来临！准备好迎接大挤压吧！（点击后游戏断开连接 5 秒）"
  },
  {
    id: "ai610",
    text: "一群信仰反物质的人劫持了媒体，正在推动革命。他们自称蚂蚁人（Ant-Men），由十几岁的男孩组成。他们相信自己是人民的保护者，是 Hevi 的选民。他们声称自己是 Hevi 的选民，总有一天会恢复宇宙的平衡。他们的领袖是一个叫 Logan Fisk 的男孩。他是一位成功律师的儿子，也是创始人。"
  },
  {
    id: "ai611",
    text: "他说他买不起新船，所以他造了一艘新的。"
  },
  {
    id: "ai612",
    text: "Hevipelle 的第一要务是确保游戏尽可能平衡。这包括确保无论如何，无论数字多大，无论事情多微不足道，无论结果多完美，无论想法多完美，无论多完美的一个"
  },
  {
    id: "ai613",
    text: "我想知道 45 亿美元的延伸目标能否达成？"
  },
  {
    id: "ai614",
    text: "我喜欢把我的项目当作商业机密。这样一来，如果有人想理解它们，我就不是第一个注意到它们可能对别人有用的人。"
  },
  {
    id: "ai615",
    text: "不知道你怎么想，但我最喜欢的新闻类型是信息图。它们美丽且信息丰富，是我唯一真正感兴趣的新闻类型。"
  },
  {
    id: "ai616",
    get text() { return `In a recent talk, Yann LeCun said that "A new currency is born." The first incarnation of Antimeta: the currency of the new currency. It's called BTC and it's the difference between 1 and ${format(Number.MAX_VALUE, 2)}. It's easy to lose your money, since a single bitcoin can't be exchanged for more than ${format(Number.MAX_VALUE, 2)} BTC.`; }
  },
  {
    id: "ai617",
    text: "我太穷了，连他欠我的十分之一都付不起。"
  },
  {
    id: "ai618",
    text: "如果……我们不做新闻滚动条，而是做能制造新闻滚动条的新闻滚动条呢？"
  },
  {
    id: "ai619",
    text: "如果我告诉你第一维度其实是个骗局，而你花光了所有 EP 去开启维度提升呢？",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai620",
    text: "这个和上一个更新最大的区别是精灵图的数量。"
  },
  {
    id: "ai621",
    text: "竹笋长在竹子上。阿罗哈。"
  },
  {
    id: "ai622",
    text: "我是王中之王，我能打破所有纪录，粉碎所有神话。但我不能全部打破，因为它们太多了，而且它们都有代价。5e12 是最被通缉的，因为它们打破了全球单人工时销售纪录，被法律通缉。玩家为它们浪费的每一人时向它们支付 5e10。"
  },
  {
    id: "ai623",
    text: "一组研究人员制造了一种把普通物质转化为反物质的装置，然后他们用反物质制造更多反物质。该装置的功率输出为 200 毫安，每秒产生半克反物质。"
  },
  {
    id: "ai624",
    text: "致那个不想听到第 9 维度的人：那不是你的问题。第 9 维度不存在。"
  },
  {
    id: "ai625",
    text: "在 AD 历史上第一次，一周从星期天开始！"
  },
  {
    id: "ai626",
    text: "这是一个关于两个名叫“我的名字是 Hevipelle”和“我是 Minecraft 的创造者”的人的故事，他们和你生活在同一个世界。他们拥有和你一样的自由。他们可以去任何维度，把他们的世界改成任何维度以及里面的一切。你可以买一个星系然后从那里开始，但这帮不了你多少，因为你不能把星系随消息发送。"
  },
  {
    id: "ai627",
    get text() { return `This mod adds a message that when clicked it disables all your current achievements. This mod also adds a new achievement: you have reached ${format(Number.MAX_VALUE, 2)} antimatter, you have not been clicked once.`; }
  },
  {
    id: "ai628",
    text: "在反太平洋的某个地方，一只巨大的手臂正在旋转"
  },
  {
    id: "ai629",
    text: "随着宇宙弯刀的发布，我们很高兴地宣布反物质维度角色扮演游戏即将发布！"
  },
  {
    id: "ai630",
    text: "唯一比真正拥有无限维度更没用的是口袋里装着无限维度。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai631",
    text: "一个人掉进了一座大城市的护城河。市民报告说，护城河里充满了耐酸物质，而负责人大多是酸做的，所以他们相当耐酸。"
  },
  {
    id: "ai632",
    text: "这里是买卖反物质的地方。（你可以在这里买卖反物质，但卖出需要时间，而且你必须付一点过路费）"
  },
  {
    id: "ai633",
    text: "我不确定是因为第四面墙在第五维度，还是因为第 9 维度不存在，但无论哪种情况，反他妈的，我们破产了，你可以拿走它。"
  },
  {
    id: "ai634",
    text: "这是你创造历史的机会。赢得游戏。输掉游戏。非常简单。你打开应用，有一个倒计时，你玩得越多，计时器跑得越快。但当计时器结束，你就赢了。你是历史的一部分。你离成为第一个达到 10 亿 EP 的人只差一步。你可以通过三种方式之一获胜：1. 你必须连续放弃你的第一维度。2",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai635",
    text: "发现了一类新的人形生物：“人造人”。它们有能力制造反物质，因此非常危险。它们完全由反物质构成，有能力产生巨量反物质，但只能在有限的时间内这样做。"
  },
  {
    id: "ai636",
    text: "宇宙中最强大的东西，地球上最美丽的东西，是你的大脑。你的大脑就像钻石，对它来说没有比钻石更需要的了。"
  },
  {
    id: "ai637",
    get text() { return `If you are reading this in the AD Server, it's probably best not to bother with the "Matter" achievement. Seriously, what did you think you were doing, anyway, the achievement is fake and wouldn't exist if it weren't for the "you are a worm" achievement. That's a worm achievement, you get one every ${format(Number.MAX_VALUE, 2)} news tickers you read.`; }
  },
  {
    id: "ai638",
    text: "我们都听说过 9 个维度，但多元宇宙的多维维度呢？"
  },
  {
    id: "ai639",
    text: "这款游戏的目标是获得尽可能多的反物质。"
  },
  {
    id: "ai640",
    text: "作为新闻滚动条最好的事情是等待正确的新闻发生，无论是一颗刚好错过地球的陨石，一条刚找到通往时间线湮没之路的新闻滚动条，还是一条刚撕掉在反真空中待了多年的极限速度的新闻滚动条。"
  },
  {
    id: "ai641",
    text: "警方称，一名男子因涉嫌种植一棵挂着“假”消息的“树”而被捕。"
  },
  {
    id: "ai642",
    get text() { return `I'm confused why the game doesn't just give you a [REDACTED] when you get ${format(Number.MAX_VALUE, 2)} antimatter.`; }
  },
  {
    id: "ai643",
    text: "有些人很难追踪相机无限米的余弦。我就是其中之一。"
  },
  {
    id: "ai644",
    text: "我本来要做一条告诉你新闻有多糟糕的新闻滚动条，但后来我意识到做新闻滚动条太费劲了，而且会是一群人不停地做新闻滚动条。所以相反，我打算做一条告诉你新闻有多好的新闻滚动条，但它会放在新闻里，这样你必须点击它才能看到好消息。"
  },
  {
    id: "ai645",
    text: "下一个更新将在 2 小时后。"
  },
  {
    id: "ai646",
    text: "我本来想说第 9 维度只是个骗局，我们都应该从第 8 维度获取新闻"
  },
  {
    id: "ai647",
    text: "我们的英雄反物质维度陷入严重的财务困境，他需要你的帮助来付账单。为了帮他，他只需要你捐点现金给 Hevipelle 的正电子基金。他只需要你反物质的 5%，你必须把 5% 的反物质捐给基金。之后，他就能保住赚到的所有现金，去大肆挥霍。"
  },
  {
    id: "ai648",
    text: "Slabdrill 的降临"
  },
  {
    id: "ai649",
    text: "那根本不可能，即使你有无限的物质，也不会有足够的能量来创造反物质。这就是为什么我们一开始只有 1.7 倍的物质。"
  },
  {
    id: "ai650",
    text: "借着这次发布，我们很高兴为你带来 2017 年的最后一次更新。"
  },
  {
    id: "ai651",
    text: "你拥有无限的反物质。但如果你能把它旋转八分之一圈呢？"
  },
  {
    id: "ai652",
    text: "现在有一个新更新可以解决最近的一些报告："
  },
  {
    id: "ai653",
    text: "“反物质维度”这个名字是维度相关的双关语，是两个对立的东西，比如物质和反物质。“维度”是另一个词，含义相同。"
  },
  {
    id: "ai654",
    text: "当你获得无限维度时，游戏中绑定化身的费用会上涨。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai655",
    text: "不用说，hevi 不在乎他曾经奴役过的人。他是操纵大师、伪装大师、言辞操纵大师。他精通敲诈、心理游戏、伪装、勒索，他还是网络大师。他是熟练的战略家和组织者，宣传大师和精彩语录专家。他是组织大师，也是操纵人心的大师。他是。"
  },
  {
    id: "ai656",
    text: "就像过去一样，你可以积累一段渐进的进程，成为玩家中的神。"
  },
  {
    id: "ai657",
    text: "起初，Hevi 独自一人。Hevi 想着他想加入游戏的许多东西。"
  },
  {
    id: "ai658",
    text: "想想你的呼吸。你觉得你在吸气还是呼气？"
  },
  {
    id: "ai659",
    text: "我只想说，你应该停止那些“你可以在 e300 毫秒内到达无限，但要花 e300 美元，e300 美元是什么？”的笑话。那些很可悲。你应该放弃，用痛苦的方式学会，以如此可悲的状态不玩效率更高。然后你可以回去做一个谦逊的程序员，致力于做个好人。"
  },
  {
    id: "ai660",
    text: "作为开发者，你会定期收到反物质维度进展的更新。"
  },
  {
    id: "ai661",
    text: "花点时间感谢 reddit 的众神救了你的培根。"
  },
  {
    id: "ai662",
    text: "大家好，我就是那个负责又大又坏的新闻滚动条的人，恐怕我马上要有自己的节目了。它会叫反物质维度。它会像反时间，只是反物质更少，双关语更烂。它会像反物质维度，只是笑话更烂。"
  },
  {
    id: "ai663",
    text: "到现在你已经看过很多以蝙蝠侠或超人为主题的新闻滚动条了，你可能猜到了是哪个。每个人都喜欢好的谜题，对吧？好吧，轮到你通过猜谜成为历史的一部分了。"
  },
  {
    id: "ai664",
    text: "如果你正在读这条消息，你大概不应该读。"
  },
  {
    id: "ai665",
    text: "写新闻滚动条建议最好的部分是发现人们看到它们之后的看法。"
  },
  {
    id: "ai666",
    text: "你了解科学界的最新趋势吗？"
  },
  {
    id: "ai667",
    text: "在最后几个小时里，反物质创建了自己的军队。他们自称[已编辑]军团。主要目标是把[已编辑]推回物质维度，但当[已编辑]军团意识到把[已编辑]推回物质会导致反物质被吸引向[已编辑]并分解时，他们停了下来。尽管如此，[已编辑]军团继续向[已编辑]无限推进。"
  },
  {
    id: "ai668",
    text: "我终于摆脱了这一切所基于的咒语。"
  },
  {
    id: "ai669",
    text: "一个没有反物质的反世界只是一个没有反物质的世界，因为反物质在反世界里"
  },
  {
    id: "ai670",
    text: "通关游戏后，你应该仍然可以使用作弊码“1009”玩游戏。"
  },
  {
    id: "ai671",
    text: "下一个更新将在 5 小时后。反物质维度的创造者 Hevipelle 据信正藏在 5 小时里。与此同时，他准备了一个新更新，将在这次更新 5 小时后发布。"
  },
  {
    id: "ai672",
    text: "一项新研究表明，不喝水比吸食水更糟糕。暴露在我们当前辐射水平 5 倍环境中的人暴露在更高辐射水平下，并且死得更久。"
  },
  {
    id: "ai673",
    text: "第九维度只是个谎言，为了让人们受制于矩阵。它是一个精密的系统，让人们处于持续的囚禁状态，用一系列简单的符号控制他们的思想和情感。"
  },
  {
    id: "ai674",
    text: "www.twitch.tv/hevi83"
  },
  {
    id: "ai675",
    text: "一名男子周一被捕，据称他在意识到自己拿的是无限点蛋糕之前，一直在考虑买一个九维蛋糕。"
  },
  {
    id: "ai676",
    text: "《黑暗之魂 2 街机版》包含以下内容："
  },
  {
    id: "ai677",
    text: "交易是这样的：如果你花光所有 EP，你会得到一份免责声明！",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai678",
    text: "哦该死，我们的新闻用完了。是时候做点什么了。"
  },
  {
    id: "ai679",
    text: "重要的不是宇宙的大小，而是你袜子的质量。"
  },
  {
    id: "ai680",
    text: "广告"
  },
  {
    id: "ai681",
    text: "天哪，我希望我从没看过旧新闻。它好得让我撑不了多久了。"
  },
  {
    id: "ai682",
    text: "在人的一生中的某个时刻，如果被制成木乃伊，他们的血液会变成淡蓝色。"
  },
  {
    id: "ai683",
    text: "正电子是一种奇怪的小金属，具有奇特的电学特性。它们通常以环岛的形式出现，但它们也恰好是，嗯……正电子。"
  },
  {
    id: "ai684",
    text: "我要和同义词词典谈谈。"
  },
  {
    id: "ai685",
    text: "一部关于人们对吃反物质反应的新漫画出炉了，接下来发生的事会让你大开眼界"
  },
  {
    id: "ai686",
    text: "一个新的“新闻滚动条”系列被创造出来，记录新闻滚动条角色们在记录他们新闻滚动条旅程时的生活。每个角色都有一篇日记条目，描述他们作为新闻滚动条的生活，还有一些专门为他们制作的迷你剧集。"
  },
  {
    id: "ai687",
    text: "为了满足你所有的拼图建造需求，我们推出了全新的 5 部分系列：建造大挤压！学习如何破解连高手都不知道的最复杂挤压！第 1 部分：基础，第 2 部分：进阶，第 3 部分：溢出，第 4 部分：完成终结技。"
  },
  {
    id: "ai688",
    text: "作为这个节目的老粉丝，我可以说这是迄今最好的季度之一。这不是一个可以小看的季度，而是一个值得体验的季度。第一季对它的内容来说有点长，但第二季在长度上已经超过了它，而且是好的方面。虽然有点等，但第三季已经在顺利进行中，我期待着看它如何发展。"
  },
  {
    id: "ai689",
    text: "“反物质”这个词经常被误用，用来描述由反物质构成、但其他方面与普通物质无法区分的物体。它有时也被用来描述由反物质构成、但显然与普通物质无法区分的物体。毕竟，反物质形状的物体很容易与普通形状的物体区分。例如：反物质形状的蛋糕是一个普通蛋糕，但整个下半部分由普通物质构成"
  },
  {
    id: "ai690",
    text: "在一个新故事中，苹果公司新的“颠覆性”应用与可怕的“反词”病毒的传播有关。反词病毒已知会导致瘫痪并最终死亡，但病毒的力量引发了一个反封禁的新时代，希望能根除这一威胁。"
  },
  {
    id: "ai691",
    text: "我只是一个想提供新闻滚动条建议的普通人"
  },
  {
    id: "ai692",
    text: "一种新的实验性协议被开发出来，可以“抹除”网络上的所有个人信息，包括你的姓名、地址和电话号码，以高度安全且高度可控的方式。"
  },
  {
    id: "ai693",
    text: "你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你无法在众目睽睽之下隐藏。你的众目睽睽之下隐藏。"
  },
  {
    id: "ai694",
    text: "在反物质宇宙中，Hevipelle 是反物质王子，虽然他确实拥有反物质外交豁免权，所以他比你想象的危险得多。"
  },
  {
    id: "ai695",
    text: "我们为什么玩这个？只是为了好玩？"
  },
  {
    id: "ai696",
    text: "我是 Thinkcraft，蝇王"
  },
  {
    id: "ai697",
    text: "世界如何以及为何终结的整个故事都包含在英文字母表的前 5 个 E 中。"
  },
  {
    id: "ai698",
    text: "你叫骤雨什么？迷你爆炸！"
  },
  {
    id: "ai699",
    text: "用一只完美动画狗 DNA 制作的 T 恤"
  },
  {
    id: "ai700",
    text: "自从这款游戏开始以来，每个人都有 0 IP 并且输了。"
  },
  {
    id: "ai701",
    text: "你一定有非常特殊的业力才能读到这条……"
  },
  {
    id: "ai702",
    text: "“你已经昏迷 5 小时了”这句话要么是谎言，要么是事实"
  },
  {
    id: "ai703",
    text: "你知道吗，我不太在意阴谋论。它们对我来说不太有趣。但你对第 9 维度了解多少？它们存在、它们强大、它们在试图阻止我们使用它们？那挺有趣的……等等，不，它们没有。它们只是因为能这么说才这么说，它们会。根本不是这样运作的。我不傻，我不疯，我知道什么最好。我"
  },
  {
    id: "ai704",
    text: "现在和那时唯一的区别是时间。"
  },
  {
    id: "ai705",
    text: "“我要成为第一个坐在月球上的人，也是最后一个坐在月球上的人”"
  },
  {
    id: "ai706",
    text: "Terraria 的新伴侣应用刚刚公布！"
  },
  {
    id: "ai707",
    text: "Hevipelle：有什么大不了的？"
  },
  {
    id: "ai708",
    text: "我已经玩这个游戏一年多了，只见过 2 场 Boss 战。第一场是一个追着你的第 9 维度的九头蛇，第二场是一个里面有反人的巨大陨石坑。那两场战斗都很烂，我甚至不确定我能不能重打最后一场。"
  },
  {
    id: "ai709",
    text: "这就是派对游戏的终极特性：单人战役。"
  },
  {
    id: "ai710",
    text: "一款名为反物质维度的新游戏免费开放，并被以色列议会评为 A 级。你能通关吗？当然能。"
  },
  {
    id: "ai711",
    get text() { return `Tired of the ${format(Number.MAX_VALUE, 2)} AD update? Don't worry, there are a variety of ways to get rid of that annoying ad!`; }
  },
  {
    id: "ai712",
    text: "我是时间旅行者。我去过公元 0 年，我想。但我没去过公元 1 年！"
  },
  {
    id: "ai713",
    text: "加载图片有困难？试试关掉它们。"
  },
  {
    id: "ai714",
    text: "这很自然。你不会想到在新闻滚动条里看到这个，但相信我，你会看到的。"
  },
  {
    id: "ai715",
    text: "第 10 维度的发现已于 2025 年 8 月 1 日公布。"
  },
  {
    id: "ai716",
    text: "大家好，欢迎收看最新一期反物质维度！"
  },
  {
    id: "ai717",
    get text() { return `I'd say our odds of seeing a seventh dimension are about 1 in ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai718",
    text: "顺便说一句，第七维度只是个骗局"
  },
  {
    id: "ai719",
    text: "虚无主义是快乐的反面。它是一种毒品。它让你快乐。它是一种感觉。但它也有代价。虚无主义是一种致命毒品。如果你吸食它，你会因缺氧而死。"
  },
  {
    id: "ai720",
    text: "如果我告诉你有一条新闻滚动条名字完全相同，但含义不同呢？"
  },
  {
    id: "ai721",
    text: "我不确定这是否已经是现实，但我收到了很多关于一条这样的新闻滚动条的建议："
  },
  {
    id: "ai722",
    text: "如果你正在读这条消息，说明你的新闻滚动条已开启。"
  },
  {
    id: "ai723",
    text: "第 6 维度中的维度数量等于第 7 维度中所有维度之和，所以第 7 维度的 6 分之几就是第 6 维度的 6 分之几。"
  },
  {
    id: "ai724",
    text: "第 9 维度的发现将在第 9 维度同人绘画大赛上讨论！"
  },
  {
    id: "ai725",
    text: "一个新时代来了又走了。无法确定，但请抱最好的希望。"
  },
  {
    id: "ai726",
    text: "你知道“antimatter”这个词现在就在词典里吗？"
  },
  {
    id: "ai727",
    text: "我们有一些有限的实体奖励供你选择！"
  },
  {
    id: "ai728",
    text: "不，我没在撒谎。我说的是实话。"
  },
  {
    id: "ai729",
    text: "“反物质维度”这个词的问题是它包含了字母表的所有三个字母，而且没人知道它到底是什么意思。事实上，没有任何词能完美捕捉“反物质维度”这个词的含义：反物质。但反物质到底是什么？它听起来像个普通维度，但不是。它甚至可能叫反物质维度，但它不是。"
  },
  {
    id: "ai730",
    text: "据说如果你去地狱，你会得到 PEGI-3。"
  },
  {
    id: "ai731",
    text: "这款游戏只是个骗局，骗人购买毫无实际用途的廉价回形针。没有无限数量的无限回形针就不可能通关，即使那样也非常难。我设法在没有无限数量回形针的情况下让它运行，但我还没见过没有无限回形针也能运行的情况。"
  },
  {
    id: "ai732",
    text: "“那是一次反物质” -反艾迪针鼹"
  },
  {
    id: "ai733",
    text: "T 骨牛排：汉堡和薯条，配带骨肋眼"
  },
  {
    id: "ai734",
    text: "一个人声称自己是神，但不去创造更多的神，而是摧毁所有的神。他后来又声称自己是神，但尚未创造出任何神的神。这是一个崇拜神的邪教？还是一个亵渎神的邪教？"
  },
  {
    id: "ai735",
    get text() { return `Antimatter is absolutely and totally rare. Of the ${format(Number.MAX_VALUE, 2)} known cases of antimatter creation, 99.9999% of them have negative e's, which means that 99.9999% of the cases will produce negative e's.`; }
  },
  {
    id: "ai736",
    get text() { return `It's the year ${format(Number.MAX_VALUE, 2)}, Hevi has just unlocked the 9th dimension, and the world has fallen into chaos and discord due to the Anti-Hevi revolution.`; }
  },
  {
    id: "ai737",
    text: "新反物质之战已经持续了无数纪元，但有一个派系始终屹立不倒：第 9 维度的忠诚派。他们与反祖鲁帝国达成协议，宣誓效忠反反物质，即反板。祖鲁人曾是反板的一部分，但再次沦为物质的猎物。由于祖鲁人是游牧民族，他们没有文明。"
  },
  {
    id: "ai738",
    text: "这是一个面向 PC 和 Mac 的开源、跨平台、基于二进制的游戏开发环境。它为游戏开发提供了稳健的跨平台开发环境，此外还提供了实现游戏的框架。"
  },
  {
    id: "ai739",
    text: "Ruki 你不知道我有多感激你巨大的脑力，你现在是我最喜欢的编程天才！"
  },
  {
    id: "ai740",
    text: "到现在你可能听说过“第 9 维度”，它是一个由第 9 维度创造的虚构领域，根据不存在的现实法则，它存在。它也是一款热门电子游戏的名字，并与一系列悬而未决的谋杀案有关。"
  },
  {
    id: "ai741",
    text: "D5 维度的发现每年 12 月 25 日庆祝，就像世界末日一样。D5 保密的原因是没有人在记得它到底做什么。我们所知道的是它在那里，而且非常危险。有人因为不知道 D5 维度是什么而死，它非常强大。"
  },
  {
    id: "ai742",
    text: "反物质是一种在自然界中很常见的物质，用于各种应用，从通信到货币再到反物质的生产，仅举几例。反物质也是一种极其稀缺的资源，许多人靠极少量的反物质生活。"
  },
  {
    id: "ai743",
    text: "如果某天早上你醒来，发现你的眼睛是物质做的，你还会看着这个吗？"
  },
  {
    id: "ai744",
    text: "如果你非常仔细地看，你能看到一滴泪从我妹妹的脸颊上滑落。那是为我流的泪，因为她第一次哭了，而我忍不住。我甚至不记得我上次哭是什么时候。"
  },
  {
    id: "ai745",
    text: "理性地说，我会把钱押在“反物质没有太多之说”这句话上。我的意思是，哪怕一点点反物质都太多了。而且那纯属偶然。"
  },
  {
    id: "ai746",
    text: "考古之书降临了！超过 5 小时的内容，这会是一场持久战！ DIO"
  },
  {
    id: "ai747",
    text: "在 12 到 20 岁之间的某个时候，Jackson 接到了一个电话。电话那头是个疯狂科学家。Jackson 接起电话，那个疯男人说：“Jackson，我刚收到一条新消息。上面用又大又粗的字母写着‘疯人’。”"
  },
  {
    id: "ai748",
    get text() { return `Somebody: "What do you mean, 4 is more than 2?" Me: "Well, I mean, 4 is ${format(Number.MAX_VALUE, 2)}, 2 is 2, etc..."`; }
  },
  {
    id: "ai749",
    text: "唯一重要的是你自己。"
  },
  {
    id: "ai750",
    text: "现实即将到来。订阅“T 系列”信息流可以抢先预览。"
  },
  {
    id: "ai751",
    text: "目前，我和反物质维度最大的区别是天气。我能挺过雨，我能忍受灼热的太阳，我甚至能应付大挤压。但如果天气是反物质，而反物质在下陨石雨呢？你会怎么回应？那是不是等同于陨石砸向地面？我不这么认为。陨石大概只会把地球汽化。"
  },
  {
    id: "ai752",
    text: "一个新的扩展现在可用，让你观看 replicanti 生长！",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai753",
    text: "如果你能掷硬币来决定它是 Johnson 还是 Stein 呢？"
  },
  {
    id: "ai754",
    text: "我是 Yhmai，王中之王！"
  },
  {
    id: "ai755",
    text: "这是一个友好的建议：如果你服用处方兴奋剂，并且忘了吃直到晚上 11 点，那么最好不要在晚上 11 点服用。"
  },
  {
    id: "ai756",
    text: "一个新理论说，反物质在我们的模拟之外并不存在。"
  },
  {
    id: "ai757",
    text: "问题是，我能用一只手数清我写过多少次“我能用一只手数清我写过多少次我能用一只手数清”"
  },
  {
    id: "ai758",
    text: "说到反物质维度，风险总是很高。但完全由反物质构成的维度呢？我们不知道，而且永远不会知道……"
  },
  {
    id: "ai759",
    text: "现在是第三个小时。Hevipelle 正试图发布更新，但这要花一个永恒，因为 Hevipelle 每次耗尽 e 字母时才会发布他的更新。然而今天，他发布了一款叫反物质维度的增量游戏。它基本上是物质维度和维度维度维度的组合，只是表情更多。画面基本相同，但信息完全不同。唯一的区别是维度有无限的 e"
  },
  {
    id: "ai760",
    text: "在强烈反对下，反物质维度项目的第三阶段已被取消。该项目被取消是因为涉及的工作量太大。"
  },
  {
    id: "ai761",
    text: "这里是所有坏主意的发源地。"
  },
  {
    id: "ai762",
    text: "嘿，看看这个！我们有好消息：正在下反物质雨！"
  },
  {
    id: "ai763",
    text: "第一维度是最后一个，它离地球最远，是所有问题、所有负面情绪、所有负面想法去往的地方。"
  },
  {
    id: "ai764",
    text: "我本来想做一条覆盖所有要点的新闻滚动条，但我觉得那会让它太超模。"
  },
  {
    id: "ai765",
    text: "你用错版本了！AD 的最终版本将有 9 个维度！"
  },
  {
    id: "ai766",
    text: "“反物质”这个词让我尴尬。还有很多其他词也是。事实上，英语里几乎所有的词都是。但“反物质”不是。这就是我如此讨厌“反”前缀的原因。"
  },
  {
    id: "ai767",
    text: "这是反物质维度的最后一集，这款游戏是和朋友们一起派对反物质维度，最棒的是你不必是开发者也能享受它。"
  },
  {
    id: "ai768",
    text: "我本来想放一条新闻滚动条，但我觉得那工作量太大，而且我也不觉得它很好笑。"
  },
  {
    id: "ai769",
    text: "该睡觉了？"
  },
  {
    id: "ai770",
    text: "一条小而重要的消息刚刚发送给所有玩家："
  },
  {
    id: "ai771",
    text: "“不知道你怎么想，但我最喜欢的数字是 2048” -不知道 2048 是什么的人"
  },
  {
    id: "ai772",
    text: "一个新团体正试图靠反物质赚钱，他们卖印着“你以为这会是一条新闻，但其实是我，DIO！”的 T 恤。他们赚了很多钱，而且卖得非常糟糕。他们有网站吗？我不知道，但他们在努力。"
  },
  {
    id: "ai773",
    text: "我要把我的牛奶放在这里几秒钟。（牛奶会多显示几秒钟）"
  },
  {
    id: "ai774",
    text: "我是时间旅行者。我可以回到过去阻止你做我即将要做的事。"
  },
  {
    id: "ai775",
    text: "我的意思是，看看那个！我得到这个了！这是你想要的！现在就买游戏！"
  },
  {
    id: "ai776",
    text: "远处有战争时你睡不着。你猛然惊醒，拼命逃跑。你听到炮火声，拼命逃跑。然后有引擎声，震耳欲聋的轰鸣，你听到了挤压声。这是你所知世界的终结。世界没有被反物质之山拯救。没有。只有你，拼命逃跑，希望世界不会"
  },
  {
    id: "ai777",
    text: "如果它不存在，为什么还叫“现实”奖？"
  },
  {
    id: "ai778",
    text: "起初，一无所有。然后造物主创造了两个，并把第三个称为“智慧生命”"
  },
  {
    id: "ai779",
    text: "这是你在玩反物质维度：游戏时获得隐藏成就的机会。访问重置按钮并玩游戏。通关后，你的存档文件将被清除，你将获得一个免费成就。"
  },
  {
    id: "ai780",
    text: "请告诉我你的血液里没有速子粒子！",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai781",
    text: "更高的人有***，更多的婴儿出生，一切都很好。但是……反物质增长得非常慢。"
  },
  {
    id: "ai782",
    text: "现在，我知道你们有些人等更新等得不耐烦了，我尊重这一点。但让我们直接进入新闻！"
  },
  {
    id: "ai783",
    text: "嘿，“编者按”按钮是怎么回事？它反讽刺……我是说，说真的？尽管有反讽刺效果，人们还在用那个按钮？"
  },
  {
    id: "ai784",
    text: "你可以通过[数据已删除]解锁第 9 维度"
  },
  {
    id: "ai785",
    text: "随着 AD 的发布，每个人都有一个新维度！"
  },
  {
    id: "ai786",
    text: "嘿，伙计们，这是我的第一个故事。我想先说，我绝不是专家，所以请对我温柔点。请不要让我生气，否则我会写一个恶毒的故事。也请不要让我难过，尤其是如果它是一个“故事”而不是“我该怎么通关”之类的故事。"
  },
  {
    id: "ai787",
    text: "现在是养狗的好时候"
  },
  {
    id: "ai788",
    text: "如果你能把任何数字放在轴上旋转，而它最终变成无限呢？"
  },
  {
    id: "ai789",
    text: "等了几分钟后，滚动条重新上线了。"
  },
  {
    id: "ai790",
    text: "看别人制造反物质最棒的部分，是他们炸毁摄像机的那一段。"
  },
  {
    id: "ai791",
    text: "前一天晚上，第 6 位天体被一名身份不明的袭击者刺杀。第二天，在一名身份不明的袭击者声称对此负责后，当局重新打开了此案。"
  },
  {
    id: "ai792",
    text: "你叫一百美元钞票什么？“百万账单”（Billi Bills）"
  },
  {
    id: "ai793",
    text: "这是关于我如何学会爱上天气的故事。"
  },
  {
    id: "ai794",
    text: "新闻滚动条像现在这样大量出现已经有一阵子了，但这并不一定意味着它们不好。"
  },
  {
    id: "ai795",
    text: "这个游戏只是为了获得更多反物质吗？"
  },
  {
    id: "ai796",
    text: "第三届阿迪朗达克登山节将于今年 10 月 1 日星期六下午 1 点至 5 点在纽约州特洛伊附近的奥尔巴尼高地举行。这个可容纳 5 万人的户外圆形剧场将配备超过 2000 名演讲者、一个舞台和 360 度摄像系统。门票 35 美元，可在 angersalley.com 购买。"
  },
  {
    id: "ai797",
    text: "宇宙的整个下半部分只是一个巨大的反物质洞。"
  },
  {
    id: "ai798",
    text: "新的飞升层已公布：表情符号！"
  },
  {
    id: "ai799",
    text: "Travis 目前正试图通过给 hevi 喂反物质来理解如何让他永生。"
  },
  {
    id: "ai800",
    text: "当慢速模式被激活时，慢速模式被激活。"
  },
  {
    id: "ai801",
    text: "一个新的魔兽时代已经结束。新的史诗已经开始。一个新的化身从泰瑞亚的深处崛起，蠕虫教团遭受了残酷但必要的创伤。世界在欢庆。"
  },
  {
    id: "ai802",
    text: "一个众包的前十梗列表"
  },
  {
    id: "ai803",
    text: "你必须比新闻滚动条更深才能找到隐藏成就。"
  },
  {
    id: "ai804",
    text: "我们应该能用反物质制造类似 replicanti 的结构，但我们不能，因为那会炸毁整个宇宙",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai805",
    text: "上次更新虽然很短，但有点长。我的意思是，它只有 5 小时。Hevipelle 说它会持续 5 小时，但那只是几秒钟前的事。第 8 维度发生了一次大爆炸，没有人留下来解释它是怎么发生的。我们所知道的是，Hevipelle 一碰它它就爆炸了，地上留下一个大坑。那个坑还在那里。"
  },
  {
    id: "ai806",
    text: "奶油奶酪是最好的奶酪。它入口即化，尝起来无与伦比。而且完全免费。你甚至可能会发现有些食谱能做出不止一种奶酪。"
  },
  {
    id: "ai807",
    text: "这里有个可能让你惊讶的问题：地球人是用反物质做的，还是用某种其他神秘材料做的？"
  },
  {
    id: "ai808",
    text: "没有人拿“为什么没有第 9 维度”开玩笑的真正原因是，第 9 维度甚至不是最离谱的梗。第 9 维度简而言之就是这样。"
  },
  {
    id: "ai809",
    text: "维度的数量是无穷的，但到达那里的方式的数量是无限的。无限很棒，我强烈建议你从无限开始，但我不建议从无限开始。无限看起来相当慢，也不太有趣，所以我不建议从无限开始。"
  },
  {
    id: "ai810",
    text: "太平洋西北毒物研究所的一份报告发现，食用鱼类会在肝脏、肺、肾脏和大脑中富集。研究还发现，肝脏和肾脏的富集最多，紧随其后的是大脑。报告称“大脑是所有智慧和知识存在的地方。”研究还称“肝脏是我们所知和所不知的一切的活生生体现。”"
  },
  {
    id: "ai811",
    text: "“小心你许下的愿望”这句老话确实不假。但如果你就是许下这个愿望的人呢？有可能你就是那个许愿的人，而你获得了反物质的力量。那样的话，你就是导致所有反物质变成反物质的人。然而，如果你是那个进行转变的人，你就会是那个失去力量的人。"
  },
  {
    id: "ai812",
    text: "你终于来了"
  },
  {
    id: "ai813",
    text: "不，你看，宇宙不是绕着地球转的。它处于不断变化的状态，最大的波动发生在可观测宇宙的极端。这些波动创造了可观测宇宙，较小的波动创造了可观测宇宙，以此类推，直到你到达现在的状态，也就是你所处的状态。"
  },
  {
    id: "ai814",
    text: "过去和未来最大的区别，是信仰和理性的区别。"
  },
  {
    id: "ai815",
    text: "Hevi，你得走了。"
  },
  {
    id: "ai816",
    text: "找到第九维度的挑战已经解决了。宇宙现在是你的私人地狱。"
  },
  {
    id: "ai817",
    text: "“游戏不是那样玩的” - Mee6"
  },
  {
    id: "ai818",
    text: "今天是星期六，你要通过制作一些非常棒的音乐视频来庆祝，也许还有一首热门歌曲。然后，你要沿着海滩散步。你会看到巨大的海浪，你们俩都会被冲走。你的朋友们在等你。“哦你想走，四处看看吧！”，但别真的去四处看，你离行动太近了。"
  },
  {
    id: "ai819",
    text: "Hevi 有最好的新闻滚动条！给他来次大挤压"
  },
  {
    id: "ai820",
    text: "到现在你已经看过大量新闻滚动条了，你可能已经看到了大新闻：新闻滚动条已被禁止出现在这个服务器中。"
  },
  {
    id: "ai821",
    text: "例如，如果 A 是 3 的平方根，那么 B 是 2 的平方根，因此 C 是 -2 的平方根，因此 D 是 -2 的立方根，因此 E 是 3 的平方根，因此 F 是 3 的平方根，因此 G 是 3 的平方根，以此类推。"
  },
  {
    id: "ai822",
    text: "正电子是那些微小、圆形、高电荷的粒子，存在于大多数生物的细胞核中。它们被用来探测光，有时还被用来测量人与月球之间的距离。"
  },
  {
    id: "ai823",
    text: "这个世界上只有 4 种人：做游戏的人、做新闻的人，以及再做新闻的人。"
  },
  {
    id: "ai824",
    text: "如果你对游戏有任何问题或疑虑，请尽管提问。我们在这里提供帮助。"
  },
  {
    id: "ai825",
    text: "你必须获得一定数量的反物质才能完成这个挑战。"
  },
  {
    id: "ai826",
    text: "维度的数量什么都不是。它只是维度的数量。但如果你把每个数字都变成字母呢？那会有很多字母吧？"
  },
  {
    id: "ai827",
    text: "以下摘自我的新书《不仅仅是 5：打造更好的你》。它有 200 页，在 Amazon 上售价 22.99 美元。点击这里立即购买。"
  },
  {
    id: "ai828",
    text: "有些人声称他们在天空中看到了 UFO。另一些人说他们看到了宇宙飞船。还有一些人声称被政府绑架，飞到了某个未公开的地点。"
  },
  {
    id: "ai829",
    text: "游戏的后半部分基本上就是很长很长什么也不发生的空白。游戏里还有一个第三个挑战，你必须在某个时候完成，基本上就是跳过几秒钟的空白，直到这些秒太晚了，你必须完成另一个挑战才能拿回它们。"
  },
  {
    id: "ai830",
    text: "这是一条新闻滚动条，所以如果你点击它，表示你希望加快新闻滚动条的速度。"
  },
  {
    id: "ai831",
    text: "以下内容基于我玩“反物质维度”的个人经验，可能并非 100% 真实。"
  },
  {
    id: "ai832",
    text: "这是关于身体正能量利弊的两部分系列中的第三部分。"
  },
  {
    id: "ai833",
    text: "“Hevi 死于第 9 维度”和“我永远不会让你失望”是游戏中最重要的话之一。"
  },
  {
    id: "ai834",
    text: "已经证明，不喝水会增加你死于反物质湮灭的风险。"
  },
  {
    id: "ai835",
    text: "我是时间旅行者。我本该回到过去改变历史。但既然我是那个应该去做的人，我不知道该怎么办。我当前的时间线不包括那些本该消失的时间。"
  },
  {
    id: "ai836",
    text: "一场关于人工智能和人类增强的会议被取消，因为有人宣布演讲主题是如何从非法下载游戏“反物质维度”中获利。"
  },
  {
    id: "ai837",
    text: "当你玩完后，带上你的存档去主菜单。你可以点击那个又大又吓人的“X”按钮，或者进入选项，把“重置游戏以获得新存档”改成“重置游戏以获得旧存档”。"
  },
  {
    id: "ai838",
    text: "App Store 最受欢迎的游戏 Flappy Bird 已被秘密用 C# 重写，以避免被发现。"
  },
  {
    id: "ai839",
    text: "关于这个模组：用更长的开场、随机新闻滚动条和一个由哈利·波特电影配音演员配音的同伴替换游戏的完整版。"
  },
  {
    id: "ai840",
    text: "kajfik 是焊接大师，很快他就会有属于自己的新闻"
  },
  {
    id: "ai841",
    text: "我是这个星球上最被憎恨的人！我有改变历史进程的力量，我会用它来谋取利益。那些试图阻止我而死的人，他们的牺牲将被铭记在无限之无限中。但如果你反对我，你会和你的随从一起死去。你要么接受失败继续前进，要么在层层晋升中崛起，成为传奇，成为历史上最被憎恨的人。"
  },
  {
    id: "ai842",
    text: "反物质就像一个年轻女子。她在寻找一个男人，而男人跑进了树林。她很快因暴露而死。他的遗骸在几英里外被发现。有人说宇宙被炸开了，有人说他被宇宙吞噬了，但物质人认识他！"
  },
  {
    id: "ai843",
    text: "我想我可能已经拿到了第 9 维度的密码，要是我没删掉它就好了。"
  },
  {
    id: "ai844",
    text: "一群崇拜 Atreides 的人开创了一个新信仰，自称“宽容的宗教”。他们的网站声称这是“包容的宗教”，倡导宽容和多样性。它的所有成员似乎都是基督徒，尽管他们从未指名道姓。"
  },
  {
    id: "ai845",
    text: "一种名为 ΔX 的新加密货币被发现了。它有潜力改变我们生活和世界的方方面面。然而，它有一个重大缺陷：它对人有缺陷。"
  },
  {
    id: "ai846",
    text: "随着新的 Android Pay 应用的发布，世界终于要终结了。"
  },
  {
    id: "ai847",
    text: "我不确定是不是只有我这样，但当你输入足够长的文字时，它听起来像直升机"
  },
  {
    id: "ai848",
    text: "如果有人给游戏英文版的每个句子末尾加上“infinity”一词，它就会变成“无限挑战：无限版”。"
  },
  {
    id: "ai849",
    text: "准备好听坏消息了吗？"
  },
  {
    id: "ai850",
    text: "我不知道你听没听说过，但这是真的：你可以走进酒吧，连续两次点到同样的啤酒，获得同样的酒精含量。"
  },
  {
    id: "ai851",
    text: "这是能腌制食物并把它们变得美味的魔法酱汁。它被广泛用于各种食谱，也可以把普通芥末和水混合制成。这种酱汁可能有点辣，但非常值得冒险。它也很有营养，提供大量钾、镁和维生素 D3。"
  },
  {
    id: "ai852",
    text: "重要新闻：我们刚刚收到这条新闻滚动条制造商的通报，因此，我们未来所有的新闻滚动条也将全部从零开始制造！"
  },
  {
    id: "ai853",
    text: "下半年来临了，随之而来的是一股新热潮。人们在尝试新事物，试验新产品，创造新的自我。其中一股热潮席卷了这片土地。这片土地的人们拥抱了这股热潮，创造了一个新宗教，一个崇拜这片土地之神 Inigo Montoya 的宗教。"
  },
  {
    id: "ai854",
    text: "即将推出的游戏反物质维度 2 的官方网站：它就像反物质维度，但加了一点 Discord 和一点 Adele。"
  },
  {
    id: "ai855",
    get text() { return `Is the Big Crunch the end of the world? No, it's the beginning of a new era. The era will last for ${format(Number.MAX_VALUE, 2)} days.`; }
  },
  {
    id: "ai856",
    text: "玩游戏的唯一“正确”方式就是完全不玩，对吧？这就是反笑话的意义所在。 Anti-joker"
  },
  {
    id: "ai857",
    text: "《原子科学家公报》刚刚宣布存在第二类粒子，它们以《捉鬼敢死队》中的角色命名。"
  },
  {
    id: "ai858",
    text: "我们目前正在把地球变成人们的舒适区。它将在 10 小时内完成。"
  },
  {
    id: "ai859",
    text: "我要把牛奶放在这里几秒钟。"
  },
  {
    id: "ai860",
    text: "然后是耶稣和 Hevi，Hevi 与祂同在；大海交出了它的月度周期，刮起了大风。Hevi 和耶稣升上天堂；Hevi 被圣灵充满。Hevi 披上天使之衣，与众天使并列。Hevi 被接到天上，得荣耀、被高举，与众天使并列，被称为奇妙；祂的天使们欢呼。"
  },
  {
    id: "ai861",
    text: "你可能会在这里花掉一天的大部分时间读新闻滚动条建议。"
  },
  {
    id: "ai862",
    text: "Fremen 动物一族是与地球和谐共处的种族，因此与其他动物种族截然不同。他们的社会以狩猎和采集为基础，他们也是高度灵性的民族。他们有许多信仰和习俗与大多数其他动物种族直接相反，比如吃肉和使用石制工具。他们似乎也非常迷信，证据是他们以进行……而闻名"
  },
  {
    id: "ai863",
    text: "万一……宇宙只是一个让人民安分守己的骗局呢？……其实，不，它是经过深思熟虑的，宇宙的设计就是为了让人民安分守己。问题是人们无法接受外部力量操纵他们生活的想法，最终爆发为失控的混乱，最终导致热核湮灭。"
  },
  {
    id: "ai864",
    text: "如果你正在读这条消息，你大概不应该读。如果你没在读，那你大概应该读。"
  },
  {
    id: "ai865",
    text: "我是时间旅行者。我可以告诉你世界的历史。但我不能告诉你未来。这就是我在这里的原因，来告诉你未来。未来是一个不断膨胀的过去、现在和未来的堆叠，而且永远不会停止增长。历史太多，时间太少。历史太多，但它不会停止增长。然后是这，然后那是，然后……"
  },
  {
    id: "ai866",
    text: "一个新的、改进的、更安全的反物质维度版本现已可用：反物质维度 2。"
  },
  {
    id: "ai867",
    text: "起初，一无所有。然后伟大的 Hevi 制作了游戏，但没有任何东西可以和它一起玩。"
  },
  {
    id: "ai868",
    text: "你会向朋友推荐反物质维度吗？会"
  },
  {
    id: "ai869",
    text: "“我们有 3 种新闻：警告、轻推和暗影笑话。”"
  },
  {
    id: "ai870",
    text: "我爱你兄弟！"
  },
  {
    id: "ai871",
    text: "我会长话短说，因为我没有太多要说的。"
  },
  {
    id: "ai872",
    text: "大量反 kafawi 正在参加反物质好礼竞赛。以下是获胜方法：1. 提个建议 2. 送出测试密钥 3. 告诉我你对游戏的看法 4. 先别把它放进游戏（它已经在了，你删不掉）5. 先别把它放进游戏（它已经在游戏里了）6. 别把它放进游戏"
  },
  {
    id: "ai873",
    text: "酥脆虾的食谱是有史以来最独特、最受欢迎的食谱之一！酥脆虾被誉为所有食物中最好吃的之一！这个食谱是你最爱的意大利餐厅必尝之选！"
  },
  {
    id: "ai874",
    text: "制作 1 份反物质后，进入菜单并按下重置。"
  },
  {
    id: "ai875",
    text: "我想你知道这会走向何方。"
  },
  {
    id: "ai876",
    text: "有个条件？你必须在线上少于 5 小时才能领取奖励。"
  },
  {
    id: "ai877",
    text: "俄罗斯方块是 Hevi 做的"
  },
  {
    id: "ai878",
    text: "万一我们不是在制造反物质，而是在移除它呢？"
  },
  {
    id: "ai879",
    text: "长寿系列的新作：反物质维度：奇异物质维度。与你的朋友们一起体验反物质维度最奇特、最美妙的世界，或者在不到一小时内，在同一个星系里与数百个对手一起征服世界。"
  },
  {
    id: "ai880",
    text: "我希望你准备好迎接大新闻了，因为这就是大新闻。反物质正在四处溢出，把整个街区都炸了。"
  },
  {
    id: "ai881",
    text: "你必须获得 33,333,333 IP 才能看到这条消息",
    get unlocked() { return Currency.infinityPoints.gte(33333333); }
  },
  {
    id: "ai882",
    text: "你可能以为这些是笑话，但请相信我们，读完它们之后，你会惊讶于自己有多喜欢！"
  },
  {
    id: "ai883",
    text: "神皇本人，平衡的创造者 Hevi，有一个超级隐藏成就。那就是去把超平坦学徒室友掀翻！"
  },
  {
    id: "ai884",
    text: "索尼克生来没有心脏……但这并没有阻止他成为天才"
  },
  {
    id: "ai885",
    text: "我收到的最常见问题是“我能跳过广告直接获得真相吗”，答案永远是响亮的“不”。原因是广告收入太高了，无法抵消维护服务器的成本，再加上大多数玩家根本不在乎。"
  },
  {
    id: "ai886",
    text: "你还没解锁第九维度？只需按住 M 然后放手。"
  },
  {
    id: "ai887",
    text: "物质大战打得很胶着。物质的胜利很短暂，反物质的胜利则不然。物质人看得太多，反物质人太弱，战争赢了。"
  },
  {
    id: "ai888",
    text: "关于提供更新的图灵完备游戏"
  },
  {
    id: "ai889",
    text: "新研究表明，我们制造的反物质越多，拥有的物质就越多"
  },
  {
    id: "ai890",
    text: "生命的意义是什么？"
  },
  {
    id: "ai891",
    text: "你有足够的反物质来打造一个新的飞升层！飞升层很棒。"
  },
  {
    id: "ai892",
    text: "反物质维度 2 的测试员是我见过的最忠诚、最敬业、最执着的一群人。他们也可能是我见过的最懒惰、最放纵的一群人。"
  },
  {
    id: "ai893",
    text: "令人震惊的新研究揭示，你在互联网上花的时间越多，就越容易追星。"
  },
  {
    id: "ai894",
    text: "当你玩完并想再玩时，你应该开始一个新游戏。"
  },
  {
    id: "ai895",
    text: "不知道你怎么想，但我不买回形针。"
  },
  {
    id: "ai896",
    text: "Hevipelle 用 replicanti 来加快游戏速度。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai897",
    text: "假设你在做一款游戏。你在做一个单机游戏。你在做一个要离线游玩的游戏。你玩它会怎样？它崩溃了。你玩它会怎样？它更崩溃。你玩它会怎样？你丢了存档。"
  },
  {
    id: "ai898",
    text: "这就是你过度依赖“假装直到成功”态度的下场。"
  },
  {
    id: "ai899",
    text: "这是探讨科学与魔法如何联系的两部分系列中的第五部分。第一部分将于 10 月 5 日发布，第二部分将于 10 月 24 日发布，你可以在第三部分跟随这段旅程。"
  },
  {
    id: "ai900",
    text: "5 小时是什么？一声咯咯笑"
  },
  {
    id: "ai901",
    text: "反物质维度的新测试版现已开放，5 小时后到来。本次测试不支持退款，请耐心等待我们完成测试并准备好向公众开放。测试将在 -5 小时后的反物质维度 Discord 中进行。"
  },
  {
    id: "ai902",
    text: "黑夜将至，随之而来的是一个可怕的东西被释放：毁灭。混乱。腐朽。死亡。混乱正朝我们所有人袭来。"
  },
  {
    id: "ai903",
    text: "这篇文章是个小条目。你可以通过扩充它来帮助 Deskthority。"
  },
  {
    id: "ai904",
    text: "一种新的、更安全的数据存储和检索方式已被发现！当你到达 AE 时，点击那个大红按钮，世界就会停止旋转！"
  },
  {
    id: "ai905",
    text: "哦，这是什么声音？某种撞击？更像是，某种更大规模的撞击？我不知道。不管是什么，大概都不是我造成的。我不该把它放进去，它只是……好吧，你看，我本来要把它放进去，但后来我觉得把它放进去可能是个好主意。哦，这会是个好主意，我保证。"
  },
  {
    id: "ai906",
    text: "上周，我们报道了一个只知道叫“反医生”的神秘人物破解了游戏并声称拥有游戏数据的所有权。从那以后，他到处散布消息，说他有一个“爆炸性的新应用”，可以让他“把[他]变成反物质。”然而，没有人提供关于如何使用该应用的信息，甚至不知道它是否真实。如果发现了什么，我们会更新这篇文章。"
  },
  {
    id: "ai907",
    text: "我要做的第二件事是亲自去找开发者谈谈。我不知道我能不能做到不惹人生气，所以我要在这里做。"
  },
  {
    id: "ai908",
    text: "绝大多数人没有充分受益于反物质维度，因此不受其影响。然而，有某些人会受到影响，在一天中的某些时候，根据他们的心情和他们拥有的反物质数量，他们会显现出维度偏移，从挂机状态变成积极参与新闻滚动条建议的状态。这种偏移是由于他们体内的反物质发出某种波长，称为“红移”。"
  },
  {
    id: "ai909",
    text: "到现在我们都懂这套流程。你只要和某人共度永恒，就能获得一个新的飞升层。"
  },
  {
    id: "ai910",
    text: "第 9 维度存在的真正原因是为了把我们所有人囚禁在一个虚拟现实模拟中。"
  },
  {
    id: "ai911",
    text: "你的电脑感染了一种奇怪的漂浮病毒，它正试图偷走你所有的反物质。没有解药，现在就下线！"
  },
  {
    id: "ai912",
    text: "现在是 5303 年。反物质维度的创造者 Hevipelle 触碰了第九维度。"
  },
  {
    id: "ai913",
    text: "“Hevipelle 恨我”这句话挺好笑的。"
  },
  {
    id: "ai914",
    text: "政府停摆来了又走了，国家仍处于衰退中，美联储仍在研读零时合同。唯一在变好的显然是你与反物质的关系。已经证明，认识一个有反物质的人，比拥有任何其他朋友都更能让你接近灭绝。"
  },
  {
    id: "ai915",
    text: "重要新闻：开发者 Hevipelle 宣布，反物质维度：游戏现在 100% 免费！"
  },
  {
    id: "ai916",
    text: "总有一天，我们会迎来一个人坐在龙头上的日子，并称之为“龙珠”。这样的人随后会去进行龙珠 Z：大逃杀，用龙珠 Z：融合创造一条巨龙，然后巨龙吞噬宇宙，从而创造“大爆炸”。这样的人随后会被“重新建造”并送回“天堂”作为奖励。"
  },
  {
    id: "ai917",
    text: "“我认为一个人一生中最大的成就是可以说他读完了每一条新闻滚动条建议，而什么都没发生。” - Kajfik"
  },
  {
    id: "ai918",
    text: "泰坦陨落 2 现已进入封闭测试。测试版只面向愿意交出一些个人信息（如电子邮件地址）的人。如果你在测试版中并想退出，你可以随时进入帮助标签页，把你的测试设置改为公开。"
  },
  {
    id: "ai919",
    text: "就我个人而言，我喜欢 4 或 5 星评价，它能让你知道你的建议有多棒，也让我看到你对游戏有多在意。如果你愿意，我也可以给 6 星评价，我没意见。我不在乎人们喜不喜欢，我为 APG 工作，我靠赚钱拿薪水。"
  },
  {
    id: "ai920",
    text: "没有人谈论 9 的真正原因是它不是什么大秘密"
  },
  {
    id: "ai921",
    text: "男人和女人唯一的区别是他们对抚摸动物的态度。"
  },
  {
    id: "ai922",
    text: "最近一些电视纪录片讲述了名叫 Louie 的狗的故事。他的主人离家后，他意外地成为了公众的一员。有一天，他决定和主人玩“让我们一起玩让我们一起玩”。他立刻被安乐死了。"
  },
  {
    id: "ai923",
    text: "世界整个历史，每一个想法、每一次失败、每一次衰落、每一项成就，都在一瞬间被覆盖了。"
  },
  {
    id: "ai924",
    text: "这句话包含两个悖论。"
  },
  {
    id: "ai925",
    get text() { return `The time has come to reveal the next expansion for Antimatter Dimensions: the ${format(Number.MAX_VALUE, 2)}th Dimension. It will be released in -5 hours, it costs ${format(Number.MAX_VALUE, 2)} human souls as of now, and it has nothing to do with matter or antimatter.`; }
  },
  {
    id: "ai926",
    text: "我想知道第四维度有什么大惊小怪的？好吧，如果你有 4 个，把它们乘以 0，你就会得到神奇的数字 4。这就是第四维度存在的原因。但如果有 5 个呢？好吧，第五维度可以取代第四维度，所以为什么不来个第五维度呢？好吧，这就是第六、第七和第八维度。"
  },
  {
    id: "ai927",
    text: "你用错版本了！现实更新已经发布了！按 Ctrl+Shift+Alt+Del 解锁第 9 维度！"
  },
  {
    id: "ai928",
    text: "一名男子声称他已经昏迷 20 年，而且无法移动手指。他因背部压缩性骨折被送进医院，此后一直在接受医疗帮助。他后来康复了，现在不再需要医疗护理。我们仍然不知道他想表达什么，但我们希望他能从永远不会醒来的认知中找到一些安慰。"
  },
  {
    id: "ai929",
    text: "要从左到右移动，请向右转。"
  },
  {
    id: "ai930",
    text: "然后我们有物质维度。据我了解，它们是由反物质构成的。关于是否还有由物质构成的剩余维度存在一些争论，但那不是主要问题。真正的问题是“它们为什么存在，反物质如何影响它们？”"
  },
  {
    id: "ai931",
    text: "据信一种新型疯狂科学家正在以惊人的速度制造反物质。"
  },
  {
    id: "ai932",
    text: "发现了一种新的正义：大规模欺骗。它的运作方式是诱使玩家认为自己做了什么错事，而实际上他/她只是做了一件完全正常的事，比如正常地过日常生活，没有多想。"
  },
  {
    id: "ai933",
    text: "献给幕后那位伟大而奇妙的人，那个伟大而奇妙的名字：瑞克摇。安息吧，好人。愿你长眠安宁。"
  },
  {
    id: "ai934",
    text: "最后一次说，反物质维度不是点击器游戏。"
  },
  {
    id: "ai935",
    text: "维度的数量是无限的，但你维度的质量是有限的。这就是为什么我们只生产最高质量的反物质，这也是我们与其他工厂不同的地方。"
  },
  {
    id: "ai936",
    text: "我以前听说过飞升层，但一直不知道该怎么用它们。"
  },
  {
    id: "ai937",
    text: "一个男人走进一家酒吧。酒保叫他滚出去。男人继续走。"
  },
  {
    id: "ai938",
    text: "AD 中历史最悠久、可能也是最著名的游戏，肯定会在你退休很久之后仍被铭记，它就是 AD。你听说过有人带着超过 2 个 1 赢得游戏吗？我听说过。你听说过有人输掉它吗？我听说过。你听说过 AD 中存在第 9 维度吗？我从没听说过。"
  },
  {
    id: "ai939",
    text: "你好，我是梯凳的第一步。"
  },
  {
    id: "ai940",
    get text() { return `It's the year ${format(Number.MAX_VALUE, 2)}, Hevi is still trying to figure out how to fix the update.`; }
  },
  {
    id: "ai941",
    text: "如果你能伸展双腿而不会永远失去它们呢？"
  },
  {
    id: "ai942",
    text: "最重要的一点是你要明白，不必玩游戏也能获得成就。你其实只要读成就描述就能获得它。"
  },
  {
    id: "ai943",
    text: "一家新银行已经成立，为加密货币提供避风港。"
  },
  {
    id: "ai944",
    text: "Google+ 以深受青少年欢迎而闻名，今天，他们拥有了自己的虚拟现实（VR）版《动物农场》，这部经典的上世纪 50 年代农场故事。游戏融合了冒险、策略和音乐，由一支眼光独到、旨在吸引年轻人的小团队制作。游戏为大多数其他 VR 游戏提供了替代选择，适合任何不习惯庞大复杂图形和声音的人。游戏包含超过 50 种不同的……"
  },
  {
    id: "ai945",
    text: "这个游戏可以叫任何名字。你想叫它什么都可以。但你错了。它是我的。"
  },
  {
    id: "ai946",
    text: "所有这些反物质从哪里来？"
  },
  {
    id: "ai947",
    text: "刻速度挑战是一款团队游戏，你必须时间旅行到仙女座星系才能到达第 9 维度，第 1 维度是到第 9 维度的最短距离。到达第 9 维度没有任何福利，你只需时间旅行到仙女座星系到达第 9 维度，你将因不进行时间旅行就实现即时[已编辑]而获得一个隐藏成就。"
  },
  {
    id: "ai948",
    text: "这是困扰我很久的问题。什么是反物质？反物质是反物质吗？当你说“反物质”时是什么意思？这些就是困扰反物质维度的问题……"
  },
  {
    id: "ai949",
    text: "“反物质维度”这个词是一个双关语，在词典里的字面意思就是“反物质维度”。"
  },
  {
    id: "ai950",
    text: "我可以暂停物理定律，因为我是天才，我的宇宙如此之大，我真的可以暂停物理定律，创造一个比现在大一倍、质量也大一倍的宇宙，我相信你能想象那会有多大。"
  },
  {
    id: "ai951",
    text: "当你在打一场必败的战争时，你会与当权者讲和。你放弃抵抗，继续迎接下一个挑战。"
  },
  {
    id: "ai952",
    text: "在另一个星系，某个超级智能正试图弄清楚如何绕开二维向量空间的限制。它可能正在研究三维空间。"
  },
  {
    id: "ai953",
    text: "最近几分钟的反派是那个神秘、浑身覆盖反物质的存在，只知道叫“黑衣男人”。他最后一次被看到是跑向一场新闻直播，看起来迷路了，直到他回到新闻台并接受了关于他经历的采访。他的故事显示在屏幕右下角。"
  },
  {
    id: "ai954",
    text: "你已解锁第 4 条故事线。"
  },
  {
    id: "ai955",
    text: "当你在忙着刷那个讨厌的“实数”时，我在忙着写那条新闻滚动条。"
  },
  {
    id: "ai956",
    text: "一种新的力量崛起了：反物质。"
  },
  {
    id: "ai957",
    text: "这一天到来了。反物质从天而降，街道一片寂静。"
  },
  {
    id: "ai958",
    text: "最重要的是要明白你在玩一个模拟。你可以赢也可以输，但除了脖子上的一点痒，你什么也得不到。"
  },
  {
    id: "ai959",
    text: "反雪人是一个非常特别的雪人。他非常胆小，但有一个非常强烈的愿望：被直升机吊起来。政府不希望这发生，所以他们把他锁在一栋特殊的建筑里，把他空运到很远的地方。最后，他们把他放到地上，开始吊起他。政府没有用武力吊他，而是邀请了整个社区进来，开始吊起他们。社区拒绝了。"
  },
  {
    id: "ai960",
    text: "我很惊讶你没有说“不是我的反茶”。"
  },
  {
    id: "ai961",
    text: "我看得出你也是个有品位的人。我想知道是什么吸引你用如此笨拙、痛苦的声音说话？是什么吸引你说一种没人听得懂的语言？我听到你的粉丝对你的视频赞不绝口，但是什么把你吸引到这个地方？我觉得我认识你。你是……你是个神秘的人。一个让我着迷的人……"
  },
  {
    id: "ai962",
    text: "注意：这是私密消息。请不要公开传播。"
  },
  {
    id: "ai963",
    text: "当你到达无限时，你会解锁一个新维度：混乱维度。去新闻滚动条了解更多信息。"
  },
  {
    id: "ai964",
    get text() { return `Although the majority of players would say that the 9th dimension is not a thing, a handful of people would go and level it up in the most epic way imaginable. These people would use the power of the 9th dimension and achieve, like, ${format(Number.MAX_VALUE, 2)} EP with it. No? Well, they are the exceptions to the rule.`; },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai965",
    text: "“打消死亡念头”运动的故事以前讲过，但从未讲得准确。这场运动最初由反进化论者组织，旨在阻止科学计数法的指数增长，但很快扩展到反对任何形式的“进步”。早期，这场运动由一位只知道叫“伟大的 Hevipelle”的神秘人物领导。他们的哲学很简单：扩展可能性的范围，突破可容忍的极限。"
  },
  {
    id: "ai966",
    text: "这是世界如何终结的故事。地球曾经是一个郁郁葱葱的绿色世界。然后，某个来自外太空的家伙碰了它，开始长蘑菇。他自称 Hevi。有人说 Hevi 从不满足。有人说他爆炸了。我们所知道的是，Hevi 还在外面扩张他的地盘，而我们被困在太空的虚空里。"
  },
  {
    id: "ai967",
    text: "反物质维度，唯一一个可以用房地产交换虚拟现实的地方"
  },
  {
    id: "ai968",
    text: "本页包含反物质维度的剧透，你已被警告。"
  },
  {
    id: "ai969",
    text: "作为新闻滚动条最好的事情是能在没人注意的情况下溜进新闻里。"
  },
  {
    id: "ai970",
    text: "这个回形针最大化器是个好主意。但最好不要让它运行到底，因为它很可能是你见过的最神奇的东西。如果你不知怎么熬过了回形针维度的第一阶段，你大概在想它在你的家里做什么。幸运的是，修复它非常简单。只需进入选项，把“最大购买”改成“始终最大购买”。"
  },
  {
    id: "ai971",
    text: "一位强大的巫师选择把负能量导入反物质，现在反物质正涌向世界。"
  },
  {
    id: "ai972",
    text: "Elon Musk 宣布了超低成本、超高速列车的新时代。用户只需 186 毫秒就能从 A 到 Z。"
  },
  {
    id: "ai973",
    text: "曼彻斯特大学的一组研究人员制造了一台 3D 打印机，可以从空气中凭空创造任何物体，包括圣母玛利亚的 3D 打印复制品。"
  },
  {
    id: "ai974",
    text: "好吧，这里有一款叫反物质维度的新游戏，它就像物质维度，只是东西更少、乐趣更多。它支持 Android、iOS 和网页。游戏非常简单：你拿 6 个维度和反物质，在 6 个维度里你拿物质，在物质里你拿反物质，然后你像玩任何其他游戏一样玩这个游戏。"
  },
  {
    id: "ai975",
    text: "什么武断的、主观的、无意义的数字会像水银温度计一样从你嘴里冒出来？1.79"
  },
  {
    id: "ai976",
    text: "“街头传言说‘bank’这个词是‘bank’的字谜，这说得通，但我还没到那一步” - Slabdrill"
  },
  {
    id: "ai977",
    text: "第 9 维度像火山一样升起，开始向空荡荡的第 10 维度倾泻毁灭。爆炸的第 9 维度的烟雾和碎片覆盖了整个第 9 维度。留下的只有一个冒着烟的火山口和第 9 维度的残骸。"
  },
  {
    id: "ai978",
    text: "救命！我怎么让点在我头脑协调器里动起来？"
  },
  {
    id: "ai979",
    text: "嗨，能不能请你不要关闭新闻滚动条？以后再谢我。"
  },
  {
    id: "ai980",
    text: "如果你正遭受反物质产量低下的困扰，别担心，朋友！我们高度科学的反物质政府最近抵达了第九维度，很快就要给我们发放反帽子作为尊重的象征！"
  },
  {
    id: "ai981",
    text: "你点击屏幕左下角，一阵绿色的麻痒爬上你的腿。这是你抓挠反物质得到的奖赏。"
  },
  {
    id: "ai982",
    text: "给那些订阅 Analytics 的人一个简短的提示：我们能从你的反物质销售中获得一小部分分成，但你确实要付一点钱来支持新闻滚动条的研究。对于浏览反物质维度的便利来说，这是很小的代价。"
  },
  {
    id: "ai983",
    text: "我们为什么还没让反物质股市崩盘？"
  },
  {
    id: "ai984",
    text: "即使天堂的 Pelle 往池子里放入了大量反物质，它也没有产出任何东西。发现这个漏洞的科学家最后一次被看到是在一群 10 人中爬上一棵树，腿上放着一本小笔记本，喝着奶酪汁，看着《虚无》。"
  },
  {
    id: "ai985",
    text: "一、二、三，吓、二、三，三、四、五，反、四、五，二、三、八，九、十五，五、六、七，八、九、十，九、十、十，七、七十、八……一切都很正常，直到昨晚，八个邻居中有四个开始抱怨一种奇怪的辉光。一种奇怪的嗡嗡声穿过街区，几乎像无线电静电。你开车经过时它越来越强烈，直到几乎一片漆黑。你试着向邻居解释，但他们不听。这个街区不安全，所有人都知道。你进一步分析，大家都以为这只是某个天体物理学家的想法。然后，糟了。是爆炸物质。到处都是反物质，而且越来越糟。原来，整个可观测宇宙中大约有 1e31 个普朗克体积。而这还只是我们说的反物质。还有暗物质、普通物质和额外物质。你知道的，那种你用想象力创造的东西。"
  },
  {
    id: "ai986",
    text: "如果你觉得想讲个反笑话，只要记住它可能会相当不错。"
  },
  {
    id: "ai987",
    text: "你不会说服任何人去天堂，但你可能会很接近。"
  },
  {
    id: "ai988",
    text: "突发新闻：第 9 维度的创造者 Hevipelle 刚刚宣布，测试版将在 5 小时后发布！"
  },
  {
    id: "ai989",
    text: "原力与你同在。"
  },
  {
    id: "ai990",
    text: "万一耶稣是一个反物质幽灵呢？"
  },
  {
    id: "ai991",
    text: "711 年夏天，大灾厄降临泰瑞亚。一个巨大的虚空形成，泰瑞亚被遗弃腐烂。已知世界的军队已经放弃，虚空充满了黑暗。只有 Kajfik 的力量仍在，他崛起成为已知世界最伟大的神。据说他就是那个将独自面对大灾厄并将其摧毁的人。"
  },
  {
    id: "ai992",
    text: "在最近的新闻冲突中，术士们正在召集掠夺者进行团本首领战。他喜欢他的 5 小时掠夺者，想炫耀他选择的强大武器：第 9 维度。当两只野兽搏斗时，第一维度持有者需要小心，因为第一个可能得到和第二个一样的东西。与此同时，团本以一声巨响结束旅程，首领用爆炸物质淹没了整个区域，白白浪费了 Explodium 漏洞，而在他之前，那里满是沼泽鼠。两者都被首领无情的爪击迅速消灭。这是份苦差事，但团本的坚定者们设法抓住石笋，把他推过蛋白石冈瓦纳。首领死了，术士们紧随其后，他们尝试种田掠夺者，但刷怪继续进行。术士们的前景黯淡，因为首领试图利用人们的贪婪，偷走他们的武器，让他们无法使用任何剩余的武器，这些武器由高度稳定的反物质制成。术士们试图用“不许侥幸”政策作为武器来打击人民，但人民走上街头，物理攻击并精神榨干人们一直保留的所有心智。人民诉诸暴力，用第 9 维度就像他们以前用它来压制别人一样，但人民相信上帝会仁慈，他会带来一个更友善、更温和的时代，让每个人都能使用他们力量的最后一滴。"
  },
  {
    id: "ai993",
    text: "万一你想这么做，但我告诉你这对你来说太痛苦了呢。"
  },
  {
    id: "ai994",
    text: "你的数字有多大"
  },
  {
    id: "ai995",
    text: "只想感谢开发团队为反物质维度和反物质维度 2 付出的巨大努力"
  },
  {
    id: "ai996",
    text: "Hevipelle 打破了第九面墙！准备好迎接一切变得相当黑暗吧。"
  },
  {
    id: "ai997",
    get text() { return `The intergalactic antimatter trade has been severely disrupted, trading entire galaxies for the occasional paperclip. Cargo stands are no longer used. Oddly enough, the entire dimension has become a dumping ground for discarded plastic and other useless garbage. It's almost as if the rest of the multiverse isn't producing enough good  antiparticles to feed the growing population. Unfortunately, the situation is forcing the entire multiverse to scramble to find ways to meet the growing needs of the antimatter-eating  dev, who claims to have over ${format(Number.MAX_VALUE, 2)} specimens left to collect.`; }
  }
];
