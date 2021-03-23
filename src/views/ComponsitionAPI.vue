<template>
  <div class="about">
    <h1>{{title}}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {componentName, getTitle} from '../common/componsition/useComponsition.ts';

export default defineComponent({
  name: 'ComponsitionAPI',
  setup() {
    let name = ref('');
    let title = ref('')
    const setH1 = () => {
      name.value = componentName;
      title.value = getTitle(name.value);
    }
    onMounted(setH1);
    return {
      name,
      title,
    }
  },
  data() {
    return {
    }
  }
})
</script>

