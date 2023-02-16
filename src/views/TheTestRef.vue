<template>
  <div>{{ count }}</div>
  <div>{{ countRef }}</div>
  <button @click="setCount">加1</button>
</template>

<script setup>
import { ref } from 'vue'
let count = 0
const countRef = ref(count)
const setCount = () => {
  count++
  countRef.value++
  console.log(count, countRef)
}
setCount
</script>

<style scoped lang="less"></style>
