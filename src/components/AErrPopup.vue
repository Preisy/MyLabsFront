<script setup lang="ts">
import { AxiosError } from 'axios';
import { computed, ref } from 'vue';
// import { QPopupProxy } from 'quasar';

interface AErrPopupProps {
  axiosErr: AxiosError | undefined;
  timeout?: number;
}

// const popup = ref<InstanceType<typeof QPopupProxy>>();
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

const errText = computed(() => {
  if (!props.axiosErr) return '';
  const err = props.axiosErr.response?.data as Error;
  return err ? err.message : props.axiosErr.message;
});
</script>

<template>
  <!-- <q-popup-proxy
    no-parent-event
    ref="popup"
    class="popup"
    :class="{ appearing: isAppearing }"
    @before-show="isAppearing = true"
    @hide="isAppearing = false"
  >
</q-popup-proxy> -->
  <q-banner class="bg-red-3 popup" :class="{ hide: !isShown }">
    {{ errText }}
  </q-banner>
</template>

<style scoped lang="scss">
.popup {
  padding-top: 3rem;
  z-index: -1;
  transition: 0.3s;
  overflow: hidden;
  opacity: 1;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(50%);
  border-radius: 0 0 1.5rem 1.5rem;

  &.hide {
    opacity: 0;
  }
}
</style>
