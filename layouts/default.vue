<template>
  <div class="w-full h-full bg-gray-600">
    <g-drawer/>
    <div class="bg-gray-400 h-screen w-screen box-border px-16 py-4 overflow-hidden">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import GDrawer from "../components/layout_components/GDrawer";

export default {
  name: "Default",
  components: {
    GDrawer
  }
}
</script>

<style scoped>
</style>
