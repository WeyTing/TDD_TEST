<template>
  <div>
    <button data-testid="add" @click="add">+</button>
    <!--精準抓取使用id或class-->
    <span id="count">{{ count }}</span>
    <button id="minus" @click="minus" :disabled="count == 0">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const add = () => {
  count.value++
}

const minus = () => {
  count.value--
}
</script>

<style scoped>
div {
  display: flex;
}
button {
  background-color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}
span {
  padding: 0.6em 1.2em;
}
</style>
