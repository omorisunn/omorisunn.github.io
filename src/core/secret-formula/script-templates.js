import { AutobuyerInputFunctions } from "../../components/tabs/autobuyers/AutobuyerInput.js";

export const automatorTemplates = {
  /**
    * List of possible data types to dynamically generate in script templates, assumed to be only string or boolean
    * {
    *  @property {String} name              String to be used as a key for entries in this object
    *  @property {String[]} boolDisplay     Strings to be displayed for true/false states for boolean inputs. If
    *   undefined, assumed to be a non-boolean input
    *  @property {Function} isValidString   A function used to test if an input string is formatted properly or not
    *  @property {Function} map             A function to be used to map the inputs to their actual values
    *   which are stored in the param object. If undefined, assumed to be no mapping
    * }
    */
  paramTypes: [
    {
      name: "tree",
      isValidString: str => {
        const validImport = TimeStudyTree.isValidImportString(str);
        const preset = str.match(/^(NAME (.{1,4})|ID (\d))$/u);
        const validPreset = preset ? (
          player.timestudy.presets.some(p => p.name === preset[2]) ||
          (Number(preset[3]) > 0 && Number(preset[3]) < 7)
        ) : false;
        return validImport || validPreset;
      },
    },
    {
      name: "integer",
      isValidString: str => AutobuyerInputFunctions.int.tryParse(str),
      map: x => Math.round(parseInt(x, 10)),
    },
    {
      name: "decimal",
      isValidString: str => AutobuyerInputFunctions.decimal.tryParse(str),
      map: x => AutobuyerInputFunctions.decimal.tryParse(x),
    },
    {
      name: "boolean",
      boolDisplay: [true, false],
    },
    {
      name: "nowait",
      boolDisplay: ["继续前进", "继续购买研究"],
    },
    {
      name: "mode",
      boolDisplay: ["最高 X 倍", "距上次的秒数"],
      map: x => (x ? "mult" : "time"),
    },
  ],
  /**
    * List automator script templates, primarily used here for formatting the player UI prompts appropriately
    * so that all of the required fields show up in the proper input formats. Actual script formatting requires
    * additionally writing a method to be called in the constructor of the ScriptTemplate class
    * {
    *  @property {String} name          Name of script template, also used as a key within the constructor for
    *   ScriptTemplate objects
    *  @property {String} description   Text description of what the template does when used in the automator
    *  @property {Object[]} inputs      Fields of the param object which need to be filled for the template to
    *   have all the information it needs. Contains the name of the field, the type (drawn from paramTypes above),
    *   and a prompt to be shown in the UI end
    *  @property {Function} warnings    Function which checks the current game state and potentially provides
    *   warnings based on some possibly common cases which may lead to undesired behavior
    * }
    */
  scripts: [
    {
      name: "攀登 EP",
      description: `此脚本会重复执行永恒，每次永恒都尝试重新购买时间研究树。必须为无限和永恒自动购买器提供设置。脚本会重复，直到达到最终的永恒点数值。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "finalEP", type: "decimal", prompt: "目标 EP" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!RealityUpgrade(10).isBought) {
          list.push(`没有至少 ${formatInt(100)} 个永恒，此脚本将无法正确设置自动购买器模式。建议在现实开始时使用此模板前先获得现实升级“${RealityUpgrade(10).name}”。`);
        }
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`没有现实升级“${RealityUpgrade(13).name}”，此模板的表现可能不佳`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`除非你能在不购买的情况下生成时间定理，否则没有福利“${Perk.ttBuySingle.label}”时此模板的表现可能不佳`);
        }
        return list;
      },
    },
    {
      name: "刷永恒",
      description: `此脚本在购买指定时间研究树后重复执行快速永恒。自动无限将设置为“最高 X 倍”并指定大挤压次数，自动永恒将尽快触发。脚本会重复，直到达到最终的永恒数量。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "crunchesPerEternity", type: "integer", prompt: "每次永恒的大挤压次数" },
        { name: "eternities", type: "decimal", prompt: "目标永恒数量" },
      ],
      warnings: () => {
        const list = [];
        // Eternal flow (eternity generation)
        if (RealityUpgrade(14).isBought) {
          list.push(`由于现实升级“${RealityUpgrade(14).name}”，你大概不需要使用这个`);
        }
        return list;
      },
    },
    {
      name: "刷无限",
      description: `此脚本购买指定时间研究树，然后配置你的自动购买器以获取无限。它会重复，直到达到最终的无限数量；数量可以针对存储无限，这种情况下它会在执行单次永恒之前获取所有无限。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "infinities", type: "decimal", prompt: "目标无限数量" },
        { name: "isBanked", type: "boolean", prompt: "目标使用存储无限？" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.achievementGroup5.isBought) {
          list.push(`你将以没有成就“${Achievement(131).name}”的状态开始本现实，刷无限可能不如预期有用，因为它们在后期之前无法存储`);
        }
        // Boundless flow (infinity generation)
        if (RealityUpgrade(11).isBought) {
          list.push(`由于现实升级“${RealityUpgrade(11).name}”，你大概不需要使用这个`);
        }
        return list;
      },
    },
    {
      name: "完成永恒挑战",
      description: `此脚本购买指定时间研究树，然后解锁指定的永恒挑战。接着它会将你的无限自动购买器设置为指定设置并进入永恒挑战。最后，它会等待至少达到所需完成次数，然后触发永恒以完成挑战。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "ec", type: "integer", prompt: "永恒挑战 ID" },
        { name: "completions", type: "integer", prompt: "目标完成次数" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.studyECRequirement.isBought) {
          list.push(`由于次要资源要求，永恒挑战可能无法可靠解锁，建议使用此模板前先解锁福利“${Perk.studyECRequirement.label}”`);
        }
        if (!Perk.studyECBulk.isBought) {
          list.push(`在没有批量完成永恒挑战的情况下使用此模板可能会导致脚本冗长、运行更慢且难以修改。如果你使用此模板，建议在解锁福利“${Perk.studyECBulk.label}”后回来简化你的脚本`);
        }
        return list;
      },
    },
    {
      name: "解锁膨胀",
      description: `此脚本会重复执行永恒，每次永恒都尝试重新购买时间研究树。必须为永恒自动购买器提供设置；你的无限自动购买器将被关闭。脚本会循环，直到你拥有解锁膨胀所需的时间定理总数，然后解锁膨胀。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "finalEP", type: "decimal", prompt: "目标 EP" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`没有现实升级“${RealityUpgrade(13).name}”，此模板的表现可能不佳`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`除非你能在不购买的情况下生成时间定理，否则没有福利“${Perk.ttBuySingle.label}”时此模板的表现可能不佳`);
        }
        return list;
      },
    },
  ]
};
