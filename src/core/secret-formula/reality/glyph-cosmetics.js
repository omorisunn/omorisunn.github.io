// Color prop is a combination of a B/W background and a border hex code
export const glyphCosmeticSets = {
  cards: {
    id: "cards",
    name: "扑克花色",
    symbol: ["♠", "♥", "♦", "♣", "♤", "♧", "♡", "♢"],
    color: ["W#000000", "B#FF2222"],
  },
  lower: {
    id: "lower",
    name: "小写符文",
    symbol: ["ω", "ξ", "δ", "ψ"],
  },
  sus: {
    id: "sus",
    name: "可疑",
    symbol: ["ඔ", "ඕ", "ඞ", "ඩ"],
    color: ["B#FCA40A"]
  },
  currency: {
    id: "currency",
    name: "现代货币符号",
    symbol: ["$", "₽", "¥", "€", "¢", "£", "₩"],
    preventBlur: true,
    color: ["W#00DD00"],
  },
  oldCurrency: {
    id: "oldCurrency",
    name: "旧式货币符号",
    symbol: ["₷", "₰", "₳", "₯", "₻"],
    preventBlur: true,
    color: ["B#00DD00"],
  },
  pipe: {
    id: "pipe",
    name: "单竖线",
    symbol: ["┌", "┐", "└", "┘", "▬", "│"],
    color: ["B#33FF33"],
  },
  pipe2: {
    id: "pipe2",
    name: "双竖线",
    symbol: ["╔", "╗", "╚", "╝", "═", "║"],
    color: ["W#33FF33"],
  },
  trigram: {
    id: "trigram",
    name: "卦象",
    symbol: ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"],
    preventBlur: true,
    color: ["B#FFFFFF"],
  },
  arrow: {
    id: "arrow",
    name: "单箭头",
    symbol: ["←", "↓", "↑", "→", "↖", "↗", "↘", "↙"],
    color: ["W#CC0000"],
  },
  arrow2: {
    id: "arrow2",
    name: "双箭头",
    symbol: ["⇄", "⇅", "⇔", "⇕"],
    color: ["W#0000CC"],
  },
  arrow3: {
    id: "arrow3",
    name: "特殊箭头",
    symbol: ["↺", "↯", "↬", "⇱", "⇲", "⇮", "↭"],
    preventBlur: true,
    color: ["W#CCCC00"],
  },
  integral: {
    id: "integral",
    name: "积分符号",
    symbol: ["∬", "∭", "∮", "∯", "∰", "∱", "∲", "∳"],
    preventBlur: true,
    color: ["B#123456"]
  },
  numbers: {
    id: "numbers",
    name: "圆圈数字",
    symbol: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"],
    preventBlur: true,
    color: ["B#607D8B"]
  },
  blocks: {
    id: "blocks",
    name: "2x2 方块",
    symbol: ["▘", "▚", "▞", "▙", "▛", "▜", "▟"],
  },
  shapes: {
    id: "shapes",
    name: "杂项形状",
    symbol: ["▰", "▲", "◆", "◎", "◍"],
    preventBlur: true,
  },
  chess: {
    id: "chess",
    name: "国际象棋棋子",
    symbol: ["♟", "♞", "♝", "♜", "♛", "♚"],
    preventBlur: true,
    color: ["B#AAAAAA"],
  },
  planet: {
    id: "planet",
    name: "行星符号",
    symbol: ["☿", "♀", "♁", "♂", "♃", "♄", "♆", "♇"],
    preventBlur: true,
    color: ["B#964B00"],
  },
  musical: {
    id: "musical",
    name: "音乐符号",
    symbol: ["♩", "♪", "♬", "♭", "♮", "♯"],
    preventBlur: true,
    color: ["W#E621E6"]
  },
  recycle: {
    id: "recycle",
    name: "回收符号",
    symbol: ["♻", "♳", "♴", "♵", "♶", "♷", "♸", "♹"],
    preventBlur: true,
  },
  dice: {
    id: "dice",
    name: "骰子面",
    symbol: ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"],
    preventBlur: true,
  },
  hazard: {
    id: "hazard",
    name: "危险符号",
    symbol: ["☠", "☢", "☣", "⚠"],
    preventBlur: true,
    color: ["W#FCA40A"]
  },
  celestial: {
    id: "celestial",
    name: "天体图标",
    symbol: ["\uF0C1", "⌬", "\uF185", "ᛝ", "♅"],
    color: ["B#00BCD4"],
  },
  alchemy: {
    id: "alchemy",
    name: "炼金符号",
    symbol: ["🜁", "🜂", "🜃", "🜄", "🜔", "🜍", "🜞", "🜚"],
    color: ["B#FFD700"],
  },
  blob: {
    id: "blob",
    name: "斑点",
    symbol: ["\uE011", "\uE012", "\uE013", "\uE014", "\uE016", "\uE01A", "\uE01C"],
    preventBlur: true,
    color: ["B#E4B51A"],
  },
  blob2: {
    id: "blob2",
    name: "更多斑点",
    symbol: ["\uE01D", "\uE01E", "\uE021", "\uE024", "\uE025", "\uE026", "\uE027"],
    preventBlur: true,
  },
  star: {
    id: "star",
    name: "几何星形",
    symbol: ["★", "☆", "✪", "✯", "✭", "✫", "🜞"],
  },
  star2: {
    id: "star2",
    name: "写实星形",
    symbol: ["✶", "✦", "✧", "✺", "✹", "✷"],
    color: ["W#D4FFFF", "W#FDFFCC"],
  },
  gem: {
    id: "gem",
    name: "宝石",
    symbol: ["◆"],
    color: ["B#035E3B", "B#943B47", "B#032C54"],
  },
  heiroglyph: {
    id: "heiroglyph",
    name: "常见圣书体",
    symbol: ["𓂀", "𓀶", "𓅊", "𓇌", "𓊝", "☥"],
    preventBlur: true,
  },
  paperclip: {
    id: "paperclip",
    name: "无用回形针",
    symbol: ["𓄲", "𓄳", "𓄴", "𓄵", "𓄶", "𓄷", "𓄸"],
    preventBlur: true,
    color: ["B#222222"],
  },
  snake: {
    id: "snake",
    name: "各种蛇",
    symbol: ["𓆓", "𓆔", "𓆕", "𓆖", "𓆗", "𓆘"],
    preventBlur: true,
  },
  egyptNumber: {
    id: "egyptNumber",
    name: "埃及数字",
    symbol: ["𓆄", "𓅔", "𓆾", "𓂰", "𓍦", "𓎋", "𓐀", "𓃐"],
    preventBlur: true,
    color: ["W#123456"]
  },
  egyptWeather: {
    id: "egyptWeather",
    name: "埃及风向标",
    symbol: ["𓈹", "𓈧", "𓈷", "𓉈", "𓈩", "𓈻", "𓈽"],
    preventBlur: true,
    color: ["W#607D8B"]
  },
  limbs: {
    id: "limbs",
    name: "笨拙肢体",
    symbol: ["𓈝", "𓄒", "𓃂", "𓃁", "𓂩", "𓂙", "𓂓", "𓂼"],
    preventBlur: true,
    color: ["B#E621E6"]
  },
  animal: {
    id: "animal",
    name: "摩西方舟",
    symbol: ["𓆏", "𓆉", "𓅬", "𓅃", "𓃲", "𓆣", "𓆊", "𓃰"],
    preventBlur: true,
    color: ["W#0000AA"],
  },
};
