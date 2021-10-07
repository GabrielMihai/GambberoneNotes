<template>
  <div id="index">
    <div class="w-full h-full p-5">
      <gambberone-select
        :items="colors"
        item-key="color"
        item-text="name"
      >
        <template #dropdownItem="{item}">
          <div class="h-10 w-full hover:bg-gray-300 flex items-center px-4">
            <div class="flex items-center">
              <div :class="`${item.color} rounded h-3 w-3`"/>
              <span class="ml-2">{{item.name}}</span>
            </div>
          </div>
        </template>
      </gambberone-select>
    </div>
  </div>
</template>

<script>
import GambberoneSelect from "../components/GambberoneSelect";

export default {
  components: {GambberoneSelect},
  data() {
    return {
      colors: [
        {
          name: 'Red',
          color: 'bg-red-500'
        },
        {
          name: 'Green',
          color: 'bg-green-500'
        },
        {
          name: 'Yellow',
          color: 'bg-yellow-500'
        },
        {
          name: 'Blue',
          color: 'bg-blue-500'
        }
      ]
    }
  }
}
</script>

<style scoped>
#index {
  box-sizing: border-box;
  margin: 0;
  padding: 2px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
