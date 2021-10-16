<template>
  <div>
    <div
      :class="`h-full ${color} top-0 bottom-0 left-0 fixed items-center py-5 transition-all duration-500 ${isOpen ? 'w-40' : 'w-0 sm:w-14'} flex flex-col shadow-xl`"
    >
      <div :class="` ${isOpen ? 'mb-3' : 'hidden sm:flex'} transition-all duration-500`" @click="goTo('/')">
        <fa :icon="['fas','user-circle']" :class="`${isOpen ? 'text-7xl' :'text-3xl'} transition-text duration-500`"/>
      </div>
      <div
        :class="`my-3 ${isOpen ? 'flex' : 'hidden'} sm:flex uppercase tracking-wider px-2 py-1 transition-all duration-500 items-center justify-center cursor-pointer rounded-md hover:${hoveredColor} hover:bg-opacity-30 hover:shadow-inset`">
        <fa :icon="['fas', 'sticky-note']"
            :class="`${isOpen ? 'mr-3' : ''} transition-margin-right duration-500 text-xl`"/>
        <div
          :class="`${isOpen ? 'w-24' :'w-0'} overflow-hidden overflow-ellipsis font-semibold transition-width duration-500 whitespace-nowrap`">
          All notes
        </div>
      </div>
      <!--      TODO implementare il codice per le categorie dinamiche-->
      <!--      <div
              :class="`mb-3 ${isOpen ? 'flex' : 'hidden'} sm:flex uppercase tracking-wider px-2 py-1 transition-all duration-500 items-center justify-center cursor-pointer rounded-md hover:${hoveredColor} hover:bg-opacity-30 hover:shadow-inset`">
              <fa :icon="['fas', 'user-cog']"
                  :class="`${isOpen ? 'mr-3' : ''} transition-margin-right duration-500 text-xl`"/>
              <div
                :class="`${isOpen ? 'w-24' :'w-0'} overflow-hidden overflow-ellipsis font-semibold transition-width duration-500 whitespace-nowrap`">
                lorem ipsum dolor sit amet, consectet
              </div>
            </div>-->
      <div class="flex-grow"/>
      <div
        :class="`my-auto ${isOpen ? 'flex' : 'hidden'} sm:flex uppercase tracking-wider px-2 py-1 items-center justify-center cursor-pointer rounded-md hover:${hoveredColor} hover:bg-opacity-30 hover:shadow-inset`"
        @click="goTo('settings')">
        <fa :icon="['fas', 'user-cog']"
            :class="`${isOpen ? 'mr-3' : ''} transition-margin-right duration-500 text-xl`"/>
        <div
          :class="`${isOpen ? 'w-24' :'w-0'}  overflow-hidden overflow-ellipsis font-semibold transition-width duration-500`">
          Settings
        </div>
      </div>
      <div
        :class="`mt-10 ${isOpen ? 'flex' : 'hidden'} sm:flex  uppercase tracking-wider px-2 py-1 items-center justify-center cursor-pointer rounded-md hover:${hoveredColor} hover:bg-opacity-30 hover:shadow-inset`"
        @click="isOpen = !isOpen">
        <fa :icon="['fas', 'chevron-left']"
            :class="`${isOpen ? 'mr-3 rotate-180' : ''} transition-all duration-500 text-xl transform`"/>
        <div
          :class="`${isOpen ? 'w-24' :'w-0'}  overflow-hidden overflow-ellipsis font-semibold transition-width duration-500`">
          Collapse
        </div>
      </div>
    </div>
    <div
      :class="`sm:hidden ${isOpen ? 'hidden' : ''} absolute left-2 rounded-full ${color} w-10 h-10 flex items-center justify-center`"
      @click="isOpen = true">
      <fa :icon="['fas', 'bars']" class="text-xl"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "GDrawer",
  props: {
    color: {default: 'bg-yellow-500', type: String}
  },
  data() {
    return {
      isOpen: false,
      actionClicked: false
    }
  },
  computed: {
    hoveredColor() {
      const colorStringArray = this.color.split("-");
      const colorAmount = parseInt(colorStringArray[2]);
      return `${colorStringArray[0]}-${colorStringArray[1]}-${colorAmount + 200}`
    }
  },
  methods: {
    goTo(route) {
      this.isOpen = false;
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
</style>
