<template>
  <div >
    <button @click="$emit('update:title', '子组件传递给父组件的值title')">子组件点击title</button>
    <button @click="$emit('update:name', '子组件传递给父组件的值name')">子组件点击name</button>
    <div>{{title}}</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>