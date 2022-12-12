<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :selected="true">selected</div>
    <div :selected="false">UnSlected</div>
    <input type="text" value="123456" :disabled="true" :selected="true" />
    <input type="text" value="654321" :disabled="false" :selected="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: { type: String, default: '' },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
