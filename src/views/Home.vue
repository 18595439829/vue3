<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TheModelDefault v-model="msg" />
    <TheModelName v-model:title="title" v-model:name="name" />
    {{ obj.foo + 1 }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TheModelDefault from '@/components/TheModelDefault.vue' // @ is an alias to /src
import TheModelName from '@/components/TheModelName.vue'

export default defineComponent({
  components: {
    TheModelDefault,
    TheModelName,
  },
  setup() {
    const obj = ref({ foo: 0 })
    const msg = ref('Welcome to Your Vue.js + TypeScript App')
    const title = ref('传递给子组件的值title')
    const name = ref('传递给子组件的值name')
    return {
      obj,
      msg,
      title,
      name,
    }
  },
})
</script>
<style lang="less">
.home {
  height: calc(100vh - 60px);
}
</style>
