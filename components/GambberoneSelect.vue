<template>
  <div class="relative">
    <div ref="dropdownInput" tabindex="0"
         :class="`h-10 border-2 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} mb-0 border-gray-200 hover:border-gray-300 flex justify-between p-2 cursor-pointer items-center text-gray-400`"
         @click="toggleDropDown">
      <span class="select-none">
        Select a color
      </span>
      <font-awesome-icon :icon="['fas','chevron-down']"/>
    </div>
    <button v-if="isOpen" class="top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-50 fixed cursor-default"
            @click="isOpen = false">

    </button>
    <div v-if="isOpen" class="w-full left-0 top-0 min-h-10 rounded-lg border-2 absolute bg-white">
      <div v-for="(item, index) in items" :key="index" class="cursor-pointer block" @click="handleSelection(item)">
        <slot name="dropdownItem" :item="item">
          <span>{{item[itemText]}}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GambberoneSelect",
  props: {
    items: undefined,
    itemKey: {default: 'value', type: String},
    itemText: {default: 'id', type: String}
  },
  data() {
    return {
      isOpen: false,
      selection: []
    }
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    handleSelection(newSelection) {
      this.selection = newSelection;
    }
  }
}
</script>

<style scoped>

</style>
