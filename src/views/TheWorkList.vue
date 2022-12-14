<template>
  <div :class="$style['container']">
    <div :class="$style['works']">
      <div v-for="work in workList" :key="work.id" :class="$style['work-item']">
        {{ work.name }}
      </div>
    </div>
    <BaseWeather />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import workSetup from '@/hooks/useWorks'
import BaseWeather from '@/components/BaseWeather.vue'

export default defineComponent({
  name: 'TheWorkList',
  components: {
    BaseWeather,
  },
  setup() {
    let { workList, getWorkList } = workSetup()
    onMounted(() => {
      console.log('work mounted')
      getWorkList(5)
    })
    return {
      workList,
    }
  },
})
</script>

<style lang="less" module>
.container {
  .works {
    display: flex;
    align-items: center;

    .work-item {
      margin: 10px;
    }
  }
}
</style>
