<template>
  <div id="nav">
    <div v-for="item in menu" :selected="item.router === currentRouter" :key="item.name" @click="toRouter(item.router)">
      {{item.name}}
    </div>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },
  data() {
    return {
      test: 'test',
      menu: [
        {
          name: 'Home',
          router: 'Home',
        },
        {
          name: 'ComponsitionAPI',
          router: 'ComponsitionAPI',
        }
      ],
      currentRouter: '',
    }
  },
  created() {
    this.currentRouter = this.menu[0].router
  },
  methods: {
    toRouter(name:string) {
      this.currentRouter = name
      this.$router.push({name})
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  display: flex;
  input[selected] {
    color: #42b983;
  }
  & > div {
    margin-right: 10px;
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;

    &[selected=true] {
      color: #42b983;
    }
  }
}
</style>
