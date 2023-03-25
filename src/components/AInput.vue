<script setup lang='ts'>
import { ref } from 'vue';

interface ButtonProps {
  modelValue: string;
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark'
});

// TODO:
const temp = ref();
</script>

<template>
  <q-input
    class='br-15px'
    v-model:model-value='temp'
    standout
    :color='color'
    :bg-color='bgColor'
    :label-color='labelColor'
    :label='props.label'
  />
</template>

<style scoped lang='scss'>
.homepage__input {
  border-radius: 0.75rem;
  overflow: hidden;
}
</style>
