<template>
  <button data-testid="add" @click="add">+</button>
  <span></span>
  <!--精準抓取使用id或class-->
  <span id="count">{{ count }}</span>
  <button id="minus" @click="minus" :disabled="count == 0">-</button>
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
