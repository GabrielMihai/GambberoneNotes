<template>
  <div class="relative">
    <div v-if="hintWord" class="bg-white absolute bottom-7 rounded p-1 cursor-pointer" @click="onHintWordClicked">
      <span>
        {{ hintWord }}
      </span>
      <fa :icon="['fas', 'check']"></fa>
    </div>
    <input v-model="currentWord" type="text" class="bg-transparent outline-none h-10">
  </div>
</template>

<script>
export default {
  name: "GInput",
  data() {
    return {
      words: ['beer', 'bread', 'butter', 'water', 'coca-cola', 'eggs', 'lemons', 'apples'],
      currentWord: undefined,
      hintWord: undefined
    }
  },
  watch: {
    currentWord() {
      if (this.currentWord.length > 2) {
        this.handleWordChange();
      } else {
        this.hintWord = undefined;
      }
    }
  },
  methods: {
    handleWordChange() {
      this.hintWord = this.words.find(word => word.toUpperCase().includes(this.currentWord.toUpperCase()) && this.currentWord !== word);
    },
    onHintWordClicked() {
      this.currentWord = this.hintWord;
      this.hintWord = undefined;
    }
  }
}
</script>

<style scoped>

</style>
