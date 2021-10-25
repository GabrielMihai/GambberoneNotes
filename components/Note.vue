<template>
  <div>
    <div :class="`${color} h-1/6 w-96 py-1 px-2 rounded-lg`">
      <span class="font-semibold text-xl tracking-wide text-gray-900 ml-2">
        Title
      </span>
      <div :class="`w-full h-px ${getDifferentColorAmount(color, 700)} my-1`"/>
      <div>
        <g-checkbox/>
      </div>
    </div>
  </div>
</template>

<script>
import {ColorMixin} from "../mixins/ColorMixin";
import GCheckbox from "./form_components/GCheckbox";

export default {
  name: 'Note',
  components: {GCheckbox},
  mixins: [ColorMixin],
  props: {
    color: {required: false, default: 'bg-red-500', type: String},
    note: {required: true, type: Object}
  },
  data() {
    return {
      backgroundColors: ['bg-red-500', 'bg-green-500']
    }
  }
}
</script>

<style>
</style>
