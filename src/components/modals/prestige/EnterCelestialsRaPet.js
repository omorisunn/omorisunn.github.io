export default {
  name: "EnterCelestialsRaPet",
  props: {
    petId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      isUnlocked: false,
    };
  },
  computed: {
    pet() {
      return Ra.pets.all[this.petId];
    },
    name() {
      return this.pet.name;
    },
    color() {
      return `color: ${this.pet.color}`;
    },
    gainText() {
      return this.pet.level === 25
        ? "已找回所有记忆"
        : `基于${this.chunkGain}获得记忆块`;
    },
    chunkGain() {
      return this.pet.chunkGain;
    },
  },
  methods: {
    update() {
      this.isUnlocked = this.pet.isUnlocked;
    }
  },
  template: `
  <span
    v-if="isUnlocked"
    :style="color"
  >
    {{ name }} {{ gainText }}.
    <br>
  </span>
  `
};
