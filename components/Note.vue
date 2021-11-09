<template>
  <div>
    <div :class="`${color} h-1/6 w-96 py-1 px-1 rounded-lg`">
      <span class="font-semibold text-xl tracking-wider text-gray-700 ml-3">
        Title
      </span>
      <div :class="`w-full h-px ${getDifferentColorAmount(color, 700)} my-1`"/>
      <div class="pl-2 mt-2">
        <g-checkbox v-model="checked" :color="color" label="Checkbox"/>
        <g-input/>
      </div>
    </div>
  </div>
</template>

<script>
import {ColorMixin} from "../mixins/ColorMixin";
import GCheckbox from "./form_components/GCheckbox";
import GInput from "./form_components/GInput";

export default {
  name: 'Note',
  components: {GInput, GCheckbox},
  mixins: [ColorMixin],
  props: {
    color: {required: false, default: 'bg-red-500', type: String},
    note: {required: true, type: Object}
  },
  data() {
    return {
      backgroundColors: ['bg-red-500', 'bg-green-500'],
      checked: false
    }
  }
}
</script>

<style>
</style>
