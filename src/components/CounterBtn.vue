<template>
  <button @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  initCount: {
    type: Number,
    default: 1,
  },
})
const count = ref(props.initCount)

const increment = () => {
  count.value += 2
}
</script>
