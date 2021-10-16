<template>
  <div>
    <div :class="`${color} h-1/6 w-96`"/>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    color: {required: false, default: 'bg-yellow-200', type: String}
  },
  data(){
    return {
      backgroundColors: ['bg-red-500', 'bg-green-500']
    }
  }
}
</script>

<style>
</style>
