<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits<{
  (e: 'close', value: unknown): void;
}>();

const isOpen = ref<boolean>(false);
let resolveCallback: (responce: unknown) => void;
defineExpose({
  open: () => {
    isOpen.value = true;
    return new Promise((resolve) => {
      resolveCallback = resolve;
    });
  },
  close: () => {
    _close(undefined);
  },
  isOpen,
});
const _close = (event: unknown) => {
  isOpen.value = false;
  emits('close', event);
  resolveCallback(event);
};
</script>

<template>
  <q-dialog class="dialog" v-model="isOpen" @hide="_close($event)">
    <slot @close="_close($event)" />
  </q-dialog>
</template>

<style scoped lang="scss">
.dialog {
  // .content-wrapper {
  //   width: 23rem;
  //   padding: 2rem;
  //   padding-bottom: 0.5rem;

  //   background: $primary;

  //   border-radius: 1.5rem;
  // }
}
</style>
