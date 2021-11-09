<template>
  <div class="flex items-center">
    <div
      :class="`w-6 h-6 p-1 bg-transparent overflow-hidden flex justify-center items-center rounded-md cursor-pointer border-2 ${getBorderColor(color, true)}`"
      @click="handleInput">
      <fa v-if="valueLazy" :icon="['fas', 'check']" :class="`${getTextColor(color, true)}`"/>
    </div>
    <span :class="`font-semibold text-lg ml-3 uppercase ${getTextColor(color,true)}`">{{ label }}</span>
  </div>
</template>

<script>
import {ColorMixin} from "../../mixins/ColorMixin";

export default {
  name: "GCheckbox",
  mixins: [ColorMixin],
  props: {
    color: {type: String, default: 'bg-black'},
    label: {type: String, required: true}
  },
  data() {
    return {
      valueLazy: this.value
    }
  },
  methods: {
    handleInput() {
      this.valueLazy = !this.valueLazy;
      this.$emit('input', this.valueLazy);
    }
  }
}
</script>

<style scoped>

</style>
