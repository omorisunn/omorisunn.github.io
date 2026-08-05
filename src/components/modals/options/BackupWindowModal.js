import BackupEntry from "./BackupEntry.js";
import ModalWrapper from "../ModalWrapper.js";
import PrimaryButton from "../../PrimaryButton.js";

import { AutoBackupSlots } from "../../../core/storage/index.js";
import { STEAM } from "../../../env.js";

export default {
  name: "BackupWindowModal",
  components: {
    ModalWrapper,
    BackupEntry,
    PrimaryButton
  },
  data() {
    return {
      // Used to force a key-swap whenever a save happens, to make unused slots immediately update
      nextSave: 0,
      ignoreOffline: false,
    };
  },
  computed: {
    backupSlots: () => AutoBackupSlots,
    deleteText: () => (STEAM ? "fully uninstalling the game" : "clearing your browser cookies"),
  },
  watch: {
    ignoreOffline(newValue) {
      player.options.loadBackupWithoutOffline = newValue;
    },
  },
  methods: {
    update() {
      this.nextSave = Object.values(GameStorage.lastBackupTimes).map(t => t && t.backupTimer).sum();
      this.ignoreOffline = player.options.loadBackupWithoutOffline;
    },
    offlineOptionClass() {
      return {
        "c-modal__confirmation-toggle__checkbox": true,
        "c-modal__confirmation-toggle__checkbox--active": this.ignoreOffline
      };
    },
    toggleOffline() {
      this.ignoreOffline = !this.ignoreOffline;
    },
    importAsFile(event) {
      // This happens if the file dialog is canceled instead of a file being selected
      if (event.target.files.length === 0) return;

      const reader = new FileReader();
      reader.onload = function() {
        GameStorage.importBackupsFromFile(reader.result);
      };
      reader.readAsText(event.target.files[0]);
    },
  },
  template: `
  <ModalWrapper>
    <template #header>
      自动备份存档
    </template>
    <div
      class="c-info c-modal--short"
      data-v-backup-window-modal
    >
      游戏会根据你在线或离线的时间自动创建备份。
      在线备份的计时器只在游戏打开时运行，而离线备份只保存到适用计时器最长的槽位。
      此外，每当从这里加载备份时，你当前的存档都会保存到最后一个槽位。
      <div
        class="c-modal__confirmation-toggle"
        @click="toggleOffline"
      >
        <div :class="offlineOptionClass()">
          <span
            v-if="ignoreOffline"
            class="fas fa-check"
          />
        </div>
        <span class="c-modal__confirmation-toggle__text">
          禁用离线进度进行加载
        </span>
      </div>
      <div
        class="c-entry-container"
        data-v-backup-window-modal
      >
        <BackupEntry
          v-for="slot in backupSlots"
          :key="nextSave + slot.id"
          class="l-backup-entry"
          :slot-data="slot"
          data-v-backup-window-modal
        />
      </div>
      这些备份仍然存储在你的游戏存档所在的位置，如果你在游戏外部执行任何会删除存档本身的操作，
      例如{{ deleteText }}，它们仍然可能丢失。你可以使用以下按钮将全部备份一次性作为文件导入/导出：
      <div
        class="c-backup-file-ops"
        data-v-backup-window-modal
      >
        <PrimaryButton
          class="o-btn-file-ops"
          onclick="GameStorage.exportBackupsAsFile()"
          data-v-backup-window-modal
        >
          导出为文件
        </PrimaryButton>
        <PrimaryButton
          class="o-btn-file-ops"
          data-v-backup-window-modal
        >
          <input
            class="c-file-import"
            type="file"
            accept=".txt"
            @change="importAsFile"
          >
          <label for="file">从文件导入</label>
        </PrimaryButton>
      </div>
      你的三个存档槽位各自拥有独立的备份集合。
    </div>
  </ModalWrapper>
  `
};
