import InformationModalButton from "./InformationModalButton.js";
import ModalCloseButton from "./ModalCloseButton.js";

export default {
  name: "InformationModal",
  components: {
    ModalCloseButton,
    InformationModalButton
  },
  template: `
  <div
    class="l-information-modal c-information-modal"
    data-v-information-modal
  >
    <ModalCloseButton @click="emitClose" />
    <div
      class="l-h2p-header"
      data-v-information-modal
    >
      <div
        class="c-h2p-title"
        data-v-information-modal
      >
        关于游戏
      </div>
    </div>
    <div
      class="c-info-body"
      data-v-information-modal
    >
      《反物质维度》是一款由芬兰开发者 Hevipelle 制作的放置类增量游戏。它起源于 2016 年的一个个人
      项目，此后由一个庞大的开发者和测试者团队不断扩展。
      <br>
      <br>
      游戏具有逐步展开的玩法和多个声望层级。「如何游玩」按钮中包含了关于游戏进度的有用信息。
    </div>
    <div
      class="l-socials"
      data-v-information-modal
    >
      <InformationModalButton
        name="GitHub 仓库"
        icon="fa-brands fa-github"
        link="https://github.com/IvarK/AntimatterDimensionsSourceCode"
      />
      <InformationModalButton
        name="r/AntimatterDimensions"
        icon="fa-brands fa-reddit-alien"
        link="https://www.reddit.com/r/AntimatterDimensions/"
      />
      <InformationModalButton
        name="反物质维度 Discord 服务器"
        icon="fa-brands fa-discord"
        link="https://discord.gg/ST9NaXa"
      />
      <InformationModalButton
        name="Google Play 上的反物质维度"
        icon="fa-brands fa-google-play"
        link="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions"
      />
      <InformationModalButton
        name="Steam 上的反物质维度"
        icon="fa-brands fa-steam"
        link="https://store.steampowered.com/app/1399720/Antimatter_Dimensions/"
      />
      <InformationModalButton
        name="致谢"
        icon="fa-solid fa-users"
        show-modal="credits"
      />
      <InformationModalButton
        name="Game Changelog"
        icon="fa-solid fa-file-lines"
        show-modal="changelog"
      />
    </div>
  </div>
  `
};