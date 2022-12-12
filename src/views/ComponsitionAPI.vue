<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <button @click="resetH1">重置H1的值</button>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <div>
      <div v-for="item in workList" :key="item.id">{{ item.name }}</div>
    </div>
    <button @click="getWorkList(30)">重载work</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import setup from '@/hooks/useComponsition'
import setWork from '@/hooks/useWorks'

export default defineComponent({
  name: 'ComponsitionAPI',
  setup() {
    let { value1, title, resetH1 } = setup()
    let { workList, getWorkList } = setWork()
    return {
      value1,
      title,
      resetH1,
      workList,
      getWorkList,
    }
  },
})
</script>
