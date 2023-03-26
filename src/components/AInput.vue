<script setup lang="ts">
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
  labelColor: 'dark',
});

// TODO:
const temp = ref();
</script>

<template>
  <q-input
    class="br-15px input"
    input-class="less-padding"
    v-model:model-value="temp"
    filled
    dense
    :color="color"
    :bg-color="bgColor"
    :label-color="labelColor"
    :label="props.label"
  />
</template>

<style lang="scss">
.q-field--dense .q-field__control {
  height: 2.25rem !important;
  border-radius: 0.75rem;
}
.q-field--dense .q-field__label {
  font-size: 0.8rem !important;
  top: 13px !important;
}
</style>
