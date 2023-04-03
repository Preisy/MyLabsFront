<script setup lang="ts">
import { ref } from 'vue';

interface ButtonProps {
  label: string;
  color?: string;
  textColor?: string;
  type?: 'button' | 'reset' | 'submit';
  width?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  textColor: 'primary',
  type: 'button',
});

const emits = defineEmits<{
  (e: 'click', val: boolean): void;
}>();
const state = ref<boolean>(false);
</script>

<template>
  <q-btn
    class="br-15px text-weight-600 btn"
    unelevated
    :color="props.color"
    :text-color="props.textColor"
    no-caps
    :label="props.label"
    :type="props.type"
    @click="emits('click', state)"
    :style="{width: width}"
  />
</template>

<style scoped lang="scss">
.btn {
  font-size: 0.8rem;
}

.text-weight-600 {
  font-weight: 600;
}
</style>
