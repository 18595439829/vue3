<template>
  <div :class="$style['container']">
    <slot />
    css-module
    <div>
      测试组件
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TheTestComponent',
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" module>
@red: red;
.container {
    color: @red;
}
</style>

