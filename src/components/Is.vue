<template>
  <div class="hello">
    <div v-is="'TheTestComponent'">
      <div>
        使用v-is渲染的组件
      </div>
    </div>
    <component :is="'TheTestComponent'"  >
      <div>
        使用component渲染的组件
      </div>
    </component>
  </div>
</template>

<script>
import TheTestComponent from '@/views/TheTestComponent.vue'

export default {
  name: 'Is',
  components: {
    TheTestComponent,
  },
}
</script>

