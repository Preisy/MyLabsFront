<script setup lang="ts">
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';

interface ButtonProps {
  label: string;
  theme?: 'dark' | 'light';
  type?: 'button' | 'reset' | 'submit';
  width?: string;
  loadingState?: SimpleState;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: 'dark',
  type: 'button',
});

const color = props.theme === 'dark' ? 'dark' : 'grey';
const textColor = props.theme === 'dark' ? 'primary' : 'dark';

const emits = defineEmits<{
  (e: 'click', val: boolean): void;
}>();

const state = ref<boolean>(false);
</script>

<template>
  <q-btn
    class="br-15px text-weight-600 btn"
    unelevated
    :color="color"
    :text-color="textColor"
    no-caps
    :label="props.label"
    :type="props.type"
    @click="emits('click', state)"
    :style="{ width: width }"
    :loading="props.loadingState === 'loading'"
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
