<template>
  <div class="about">
    <h1>{{title}}</h1>
    <input type="text" v-model="title">
    <button @click="resetH1">重置H1的值</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import setup from '../hooks/useComponsition';

export default defineComponent({
  name: 'ComponsitionAPI',
  setup,
})
</script>

