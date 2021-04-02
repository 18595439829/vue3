<template>
  <div class="about">
    <h1>{{title}}</h1>
    <input type="text" v-model="title">
    <button @click="resetH1">重置H1的值</button>
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
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

