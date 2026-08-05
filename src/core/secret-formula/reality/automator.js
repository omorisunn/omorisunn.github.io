import { automatorTemplates } from "../script-templates.js";

export const automator = {
  categoryNames: [
    "时间研究",
    "事件触发",
    "更改设置",
    "信息",
    "脚本流程",
  ],
  commands: [
    {
      id: 0,
      isUnlocked: () => true,
      keyword: "STUDIES RESPEC",
      category: 0,
      syntax: `<b>studies respec</b>`,
      description: `此命令会开启洗点选项，将在下一次手动或自动永恒时重置你的时间研究。请注意，它本身并不会执行永恒；请确保你的自动购买器已开启，或手动运行 ETERNITY 命令（尽管 ETERNITY 自带洗点选项）。`,
      examples: [
        `studies respec`,
      ]
    },
    {
      id: 1,
      isUnlocked: () => true,
      keyword: "STUDIES LOAD",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>load id</b> <u>selector</u><br>
        <b>studies</b> [nowait] <b>load name</b> <u>name</u>`,
      description: `加载一个时间研究预设，就像你点击了时间研究标签页中的按钮一样。`,
      sections: [
        {
          name: "输入",
          items: [
            {
              header: "<i>nowait</i>",
              description: `如果存在，自动机会在继续前进之前尽可能多地购买研究。默认情况下（即没有“nowait”时），此命令会无限重复这一行，直到预设中的研究全部购买；如果你不小心，这可能会导致自动机无限卡住。`
            },
            {
              header: "<i>selector</i>",
              description: `按插槽编号查找并加载指定的时间研究预设。编号为一到六，从左到右排列。`
            },
            {
              header: "<i>name</i>",
              description: "按给定名称查找并加载指定的时间研究预设。区分大小写。"
            },
          ]
        }
      ],
      examples: [
        `studies load id 2`,
        `studies load name ANTI`,
        `studies nowait load name dil`,
      ]
    },
    {
      id: 2,
      isUnlocked: () => true,
      keyword: "STUDIES PURCHASE",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>purchase <u>study_list</u></b>`,
      description: "从时间研究列表中购买指定的时间研究。",
      sections: [
        {
          name: "输入",
          items: [
            {
              header: "<i>nowait</i>",
              description: `如果存在，自动机会在继续前进之前尽可能多地购买研究。默认情况下（即没有“nowait”时），此命令会无限重复这一行，直到预设中的研究全部购买；如果你不小心，这可能会导致自动机无限卡住。`
            },
            {
              header: "<i>study_list</i>",
              description: `这里支持导出的时间研究树格式，即用逗号分隔的时间研究 ID 列表。此命令还支持更灵活的格式，允许研究范围（例如 <u>11-62</u>）和以下别名：<br><blockquote><b>antimatter, infinity, time, active, passive, idle, light, dark</b></blockquote> 也可以用变量名代替整个时间研究列表（见定义面板），但那种情况下不允许使用简写范围和别名。`
            },
          ]
        }
      ],
      examples: [
        "studies nowait purchase 11,21,31",
        "studies purchase 11-62, antimatter, 111, idle",
        "studies nowait purchase ec6Studies",
      ]
    },
    {
      id: 3,
      isUnlocked: () => true,
      keyword: "PRESTIGE",
      category: 1,
      syntax: `
        <b>infinity</b> [nowait]<br>
        <b>eternity</b> [nowait] [respec]<br>
        <b>reality</b> [nowait] [respec]`,
      description: `如果可能，触发无限、永恒或现实重置，否则自动机会在此命令处等待，直到重置变得可行。如果你发现脚本经常卡在此命令上，可能是自动购买器在自动机到达这一行之前触发了飞升，可以考虑使用 <i>nowait</i> 或用 AUTO 调整自动购买器设置。`,
      sections: [
        {
          name: "修饰符",
          items: [
            {
              header: "<i>nowait</i>",
              description: `如果存在，自动机会继续执行下一条命令，而不是在飞升不可行的情况下反复尝试此命令。`
            },
            {
              header: "<i>respec</i>",
              description: `对于非无限飞升，触发飞升时也会执行相关的洗点操作。永恒：重置时间研究和永恒。<br>现实：重置时间研究、永恒和无限。`
            },
          ]
        }
      ],
      examples: [
        "infinity",
        "eternity respec",
        "reality nowait",
      ]
    },
    {
      id: 4,
      isUnlocked: () => true,
      keyword: "UNLOCK",
      category: 1,
      syntax: "<b>unlock</b> [nowait] <u>feature</u>",
      description: "解锁指定的永恒挑战或时间膨胀。",
      sections: [
        {
          name: "修饰符",
          items: [
            {
              header: "<i>nowait</i>",
              description: `如果存在，即使解锁功能失败，自动机也会继续执行下一条命令。默认情况下，自动机会继续运行此命令，直到解锁成功。`
            },
          ]
        }
      ],
      examples: [
        "unlock dilation",
        "unlock ec7"
      ]
    },
    {
      id: 5,
      isUnlocked: () => true,
      keyword: "START",
      category: 1,
      syntax: `
        <b>start</b> ec<u>N</u><br>
        <b>start</b> dilation`,
      description: `开始指定的永恒挑战或膨胀永恒。此命令也会尝试在未解锁时解锁永恒挑战，但不会对膨胀做同样的事（请使用 UNLOCK 命令）。`,
      examples: [
        "start ec12",
        "start dilation"
      ]
    },
    {
      id: 6,
      isUnlocked: () => true,
      keyword: "AUTO",
      category: 2,
      syntax: `<b>auto infinity</b> [setting]<br>
        <b>auto eternity</b> [setting]<br>
        <b>auto reality</b> [setting]`,
      description: `打开或关闭飞升自动购买器，并允许你更改其设置。如果未提供设置选项，此命令将切换自动购买器状态，将其开启或关闭。`,
      sections: [
        {
          name: "设置",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: "打开或关闭指定的自动购买器。",
            },
            {
              header: "<u><i>number</i></u> <u><i>time units</i></u>",
              description: `仅适用于无限和永恒。打开自动购买器，并设置在给定时间间隔触发。`
            },
            {
              header: "<u><i>number</i></u> x highest",
              description: `仅适用于无限和永恒。打开自动购买器，并将其设置为“最高 X 倍”模式。`
            },
            {
              header: "<i><u>number</u> <u>currency</u></i>",
              description: `打开自动购买器，并设置在达到特定数量时触发。货币必须与自动购买器类型匹配（IP、EP 或 RM）。这将选择“现实机器”作为无限和永恒的触发条件。`,
            },
          ]
        }
      ],
      examples: [
        "auto infinity on",
        "auto eternity off",
        "auto infinity 30s",
        "auto eternity 10 seconds",
        "auto eternity 1e100 x highest"
      ]
    },
    {
      id: 7,
      isUnlocked: () => BlackHole(1).isUnlocked,
      keyword: "BLACK HOLE",
      category: 2,
      syntax: "<b>black hole</b> <u>state</u>",
      description: `打开或关闭黑洞的加速效果。通过自动机开启黑洞并不会绕过从关闭到最大速度的渐进加速，这与其他方式开启黑洞相同。`,
      examples: [
        "black hole on",
        "black hole off",
      ]
    },
    {
      id: 8,
      isUnlocked: () => Enslaved.isUnlocked,
      keyword: "STORE GAME TIME",
      category: 2,
      syntax: "<b>store game time</b> <u>action</u>",
      description: `更改黑洞是否在存储时间。也允许使用已存储的时间。`,
      sections: [
        {
          name: "操作",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: `打开或关闭游戏时间存储。`
            },
            {
              header: "<i>use</i>",
              description: `使用所有已存储的游戏时间。不会改变时间存储的开关状态。`
            }
          ]
        }
      ],
      examples: [
        "store game time on",
        "store game time off",
        "store game time use",
      ]
    },
    {
      id: 9,
      isUnlocked: () => true,
      keyword: "NOTIFY",
      category: 3,
      syntax: "<b>notify</b> \"<u>text</u>\"",
      description: `获取指定文本，并将其作为文本通知发布在右上角，位置和样式与其他通知（如自动保存和成就通知）相同。`,
      examples: [
        "notify \"Dilation reached\"",
        "notify \"ECs completed\""
      ]
    },
    {
      id: 10,
      isUnlocked: () => true,
      keyword: "添加注释",
      category: 3,
      syntax: "<b>#</b> text<br><b>//</b> text",
      description: `允许你在脚本中给自己留下备注。这对于组织或跟踪脚本的各部分功能很有用。`,
      sections: [
        {
          name: "备注",
          items: [
            {
              header: "行内注释",
              description: `自动机不支持放在已生效代码行之后、同一行上的注释。例如，单行脚本`
            },
            {
              header: "执行速度",
              description: `注释不会减慢你的脚本，因为它们在执行时会被完全跳过，并且不计算为命令。`
            },
          ]
        }
      ],
      examples: [
        "# get 1e20 before starting ec1",
        "// this loop alternates dilation and pushing"
      ]
    },
    {
      id: 11,
      isUnlocked: () => true,
      keyword: "WAIT",
      category: 4,
      syntax: "<b>wait</b> <u>condition</u>",
      description: `强制自动机等待某个条件或事件。要等待特定时长，请改用 PAUSE 命令。`,
      sections: [
        {
          name: "可用条件",
          items: [
            {
              header: "<i>comparison</i>",
              description: `等待直到比较语句为真。关于如何正确输入此选项，请查看“格式比较”条目。`
            },
            {
              header: "<i>prestige</i>",
              description: `等待直到指定的飞升（无限、永恒或现实）由其对应的自动购买器触发。这必须发生在自动机到达此命令之后。`
            },
            {
              header: "<i>black hole (state)</i>",
              description: `等待直到黑洞处于指定状态。状态的有效输入为“off”、“bh1”和“bh2”，分别对应没有激活黑洞、只有一个黑洞激活、以及两个黑洞都激活。`
            }
          ]
        }
      ],
      examples: [
        "wait am >= 1e308",
        "wait pending completions >= 5",
        "wait ec9 completions >= 4",
        "wait infinity",
        "wait black hole bh1",
      ]
    },
    {
      id: 12,
      isUnlocked: () => true,
      keyword: "PAUSE",
      category: 4,
      syntax: "<b>pause</b> <u>interval</u>",
      description: `让自动机停止前进并在一定时间内不执行命令。请注意，如果暂停时长短于自动机的执行间隔，脚本仍可能等待更长时间。`,
      examples: [
        "pause 10s",
        "pause 1 minute",
        "pause 34 seconds"
      ],
      sections: [
        {
          name: "间隔格式",
          items: [
            {
              header: "指定间隔",
              description: `此命令接受毫秒（“ms”）、秒（“s”、“sec”或“seconds”）、分钟（“m”、“min”或“minutes”）和小时（“h”或“hours”）的时间单位。你不能使用小数单位。`,
            },
            {
              header: "已定义常量",
              description: `可以使用已定义的常量代替，见定义面板。定义值将被假定为以秒为单位。`
            },
          ]
        },
        {
          name: "其他",
          items: [
            {
              header: "离线副作用",
              description: `由于离线进度期间的刻数有限，此命令在离线运行时的表现可能不尽如人意。通常为 20 到 30 刻的 1 秒暂停可能只有 1 个游戏刻。`,
            },
            {
              header: "替代方案",
              description: `使用 WAIT 等其他命令，你可以将其设置为某个资源数量，以确保游戏在继续之前处于正确状态。`
            },
            {
              header: "手动跳过",
              description: `你可以通过向前推进一步（将其置于等待状态之外）来手动强制自动机跳过 PAUSE 命令继续执行，而无需等待完整指定时间。`
            }
          ]
        }
      ]
    },
    {
      id: 13,
      isUnlocked: () => true,
      keyword: "IF",
      category: 4,
      syntax: `<b>if</b> <u>condition</u> {<br>
        <blockquote>commands</blockquote>
        }`,
      description: `定义自动机脚本的一个内部块，只有在此行执行到且指定比较为真时才会执行。如果比较为假，内部块将被完全跳过。`,
      examples: [
        "if ec10 completions < 5",
        "if ep > 1e6000"
      ]
    },
    {
      id: 14,
      isUnlocked: () => true,
      keyword: "UNTIL",
      category: 4,
      syntax: `<b>until</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
        }<br><b>until</b> <u>prestige_event</u> {<br>
          <blockquote>commands</blockquote>
        }`,
      description: `定义脚本的一个内部块，其中命令会重复执行；比较在开始时和每次循环重复时都会被检查。如果条件为真，循环将再次执行；否则循环结束。`,
      examples: [
        "until ep > 1e500",
        "until reality",
      ]
    },
    {
      id: 15,
      isUnlocked: () => true,
      keyword: "WHILE",
      category: 4,
      syntax: `<b>while</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
      }`,
      description: `定义脚本的一个内部块，其中命令会重复执行；比较在开始时和每次循环重复时都会被检查。如果条件为假，循环将结束。`,
      examples: [
        `while ep < 1e500`,
        `while myThreshold > am`,
      ]
    },
    {
      id: 16,
      isUnlocked: () => true,
      keyword: "STOP",
      category: 4,
      syntax: `<b>stop</b>`,
      description: `当自动机运行到此行时，它将停止执行，就像你点击了自动机左上角控制面板上的 <i class="fas fa-stop"></i> 按钮一样。`,
      examples: [
        `stop`,
      ]
    },
    {
      id: 17,
      isUnlocked: () => true,
      keyword: "货币列表",
      category: 4,
      syntax: "<i>你可以在任何 IF、WHILE、UNTIL 或 WAIT 命令中使用这些</i>",
      description: () => {
        const filterText = EffarigUnlock.glyphFilter.isUnlocked
          ? `<b>filter score</b> - 你的过滤器在本现实将选择的符文的过滤器分数<br>`
          : "";
        const stText = V.spaceTheorems > 0
          ? `<b>space theorems</b> - 当前未花费的空间定理数量<br>
            <b>total space theorems</b> - 空间定理总数，包括已花费在当前研究上的<br>`
          : "";
        return `这是自动机中可用的“货币”或数字列表。<br>
          请注意，使用时大多数货币需要采用科学计数法。<br>
          <b>am</b> - 当前反物质数量  <br>
          <b>ip</b> - 当前无限点数量  <br>
          <b>ep</b> - 当前永恒点数量  <br>
          <b>rm</b> - 当前现实机器数量  <br>
          <b>infinities</b> - 当前无限数量 <br>
          <b>banked infinities</b> - 当前存储无限数量 <br>
          <b>eternities</b> - 当前永恒数量 <br>
          <b>realities</b> - 当前现实数量 <br>
          <b>pending ip</b> - 无限时获得的 IP（不可用时为 0）<br>
          <b>pending ep</b> - 永恒时获得的 EP（不可用时为 0）<br>
          <b>pending tp</b> - 退出膨胀时获得的 TP<br>
          <b>pending rm</b> - 现实时获得的 RM（不可用时为 0）<br>
          <b>pending glyph level</b> - 现实时获得的符文等级（不可用时为 0）<br>
          <b>dt</b> - 当前膨胀时间数量 <br>
          <b>tp</b> - 当前速子粒子数量<br>
          <b>rg</b> - 当前 Replicanti 星系数量（不使用科学计数法）<br>
          <b>rep</b> - 当前 Replicanti 数量 <br>
          <b>tt</b> - 当前时间定理数量 <br>
          <b>total tt</b> - 时间定理总数，包括所有形式生成的时间定理以及已花费在研究上的 <br>
          <b>total completions</b> - 所有永恒挑战的总完成次数 <br>
          <b>pending completions</b> - 当前永恒挑战在永恒时的总完成次数 <br>
          <b>ec<u>X</u> completions</b> - 某个永恒挑战的完成次数（例如“ec6 completions”）<br>
          ${filterText}
          ${stText}
        `;
      }
    },
    {
      id: 18,
      isUnlocked: () => true,
      keyword: "格式比较",
      category: 4,
      syntax: "<u>资源1</u> <u>条件</u> <u>资源2</u>",
      description: `比较用于某些命令中，让你可以根据游戏当前状态控制自动机的行为。它们有标准形式：<u>resource1</u> <u>condition</u> <u>resource2</u>`,
      sections: [
        {
          name: "条件",
          items: [
            {
              header: "<i>resource</i>",
              description: `这可以是任何自动机货币、已定义常量或数字，数字必须以科学计数法格式化（例如 1000、1e100、1.8e308）。与更通用的编程语言不同，这必须是单个值（即不允许“ip + pending ip”这样的数学表达式）。`
            },
            {
              header: "<i>condition</i>",
              description: `这必须是不等式运算符（<、<=、>、>=），具有其典型的数学含义。不允许使用相等运算符（==、!=），因为游戏的特性意味着数字往往永远不会完全相等，基于直接相等来判断可能导致意外的脚本行为。`
            },
          ]
        }
      ],
      examples: [
        "ep < 1e20",
        "total tt > 14000",
      ]
    },
    {
      id: 19,
      isUnlocked: () => true,
      keyword: "带内部块的命令",
      category: 4,
      syntax: `<b>header_command</b> {<br>
        <blockquote>inner_commands</blockquote>
        }`,
      description: `某些命令与“内部块”命令相关联。此内部块可以包含任何其他有效命令，但根据上下文可能执行也可能不执行。`,
      examples: [
        `if ec10 completions < 5 {<br>
          <blockquote>
          unlock ec10<br>
          start ec10</blockquote>
        }`,
        `until ep > 1e8 {<br>
          <blockquote>
          studies nowait purchase 11-62<br>
          pause 10s<br>
          eternity respec</blockquote>
        }`
      ]
    },
  ],
  otherAutomatorPoints: [
    {
      name: "现实次数",
      automatorPoints: () => 2 * Math.clampMax(Currency.realities.value, 50),
      shortDescription: () => `每个现实 +${formatInt(2)}，最高 ${formatInt(50)} 个现实`,
      symbol: "Ϟ",
    },
    {
      name: "黑洞",
      automatorPoints: () => (BlackHole(1).isUnlocked ? 10 : 0),
      shortDescription: () => `解锁获得 ${formatInt(10)} AP`,
      symbol: "<i class='fas fa-circle'></i>",
    },
  ],
  templates: automatorTemplates
};
