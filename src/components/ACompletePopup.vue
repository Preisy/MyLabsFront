<script setup lang="ts">
import { ref } from 'vue';

interface AErrPopupProps {
  timeout?: number;
}

const props = withDefaults(defineProps<AErrPopupProps>(), {
  timeout: 2000,
});
const isShown = ref<boolean>(false);
defineExpose({
  show: () => {
    isShown.value = true;
    setTimeout(() => {
      isShown.value = false;
    }, props.timeout);
  },
});
</script>

<template>
  <q-banner class="text-primary popup flex" :class="{ hide: !isShown }">
    <q-icon class="icon bg-accent text-center col" name="done" />
  </q-banner>
</template>

<style scoped lang="scss">
.popup {
  position: absolute;
  z-index: -1;
  transition: 0.3s;
  overflow: hidden;
  opacity: 1;

  top: 0;
  left: -10000px;
  right: -10000px;
  bottom: 0;
  border-radius: 0 0 1.5rem 1.5rem;
  background: #ffffff88;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  .icon {
    --size: 3rem;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
