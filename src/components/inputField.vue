<template>
  <input type="text" v-model="inputText" />
  <div>你輸入了{{ inputText.length }}個字</div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
</script>
