<script setup lang="ts">
import { ref } from 'vue';
import { QDialog, Screen } from 'quasar';
import Card from '../cards';
import DetailedCard from './DetailedCard.vue';

interface CardPopupProps {
  data: Card;
  isOpen: boolean;
}

defineProps<CardPopupProps>();
// const popup = ref<InstanceType<typeof HTMLElement>>();
const dialog = ref<InstanceType<typeof QDialog>>();

const emits = defineEmits<{
  (event: 'close'): void;
  (event: 'open'): void;
}>();
const close = () => {
  emits('close');
  dialog.value?.hide();
};
const open = () => {
  emits('open');
  dialog.value?.show();
};
defineExpose({
  close,
  open
});
</script>

<template>
  <!-- <div
    class="popup-wrapper"
    :class="{ hide: !isOpen, compact: Screen.lt.md, mobile: Screen.lt.sm }"
  >
    <div ref="popup" class="popup" :class="{ hide: !isOpen }">
      <DetailedCard :card="data" />
    </div>
    <div class="bg-blur" @click="close" :class="{ hide: !isOpen }" />
  </div> -->
  <q-dialog ref="dialog">
    <!-- <div ref="popup" class="popup" :class="{ hide: !isOpen }"> -->
    <DetailedCard :card="data" />
    <!-- </div> -->
    <!-- <div class="bg-blur" @click="close" :class="{ hide: !isOpen }" /> -->
  </q-dialog>
</template>

<style scoped lang="scss">
.popup-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  transition: 0.3s all ease-in-out;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  &.compact {
    .light-holder {
      visibility: hidden;
    }
  }

  &.mobile {
    .popup {
      left: unset;
    }
  }

  .popup {
    position: absolute;
    top: 2rem;
    left: calc(50%);
    transform: translateX(-50%);
    border-radius: 1.5rem;
    box-shadow: 0 0 2.5rem 0 rgba(191, 205, 243, 0.5);
    background: white;
    z-index: 10000;

    transition: 0.3s opacity ease-in-out;
    opacity: 1;

    &.hide {
      opacity: 0;
    }
  }
  .light-holder {
    position: absolute;
    z-index: 9997;
    right: 3rem;
    top: -2.5rem;
    transform: translateX(100%) scaleY(0.5);
    transition: 0.3s opacity ease-in-out;
    opacity: 1;

    &.hide {
      opacity: 0;
    }

    .light {
      // rotate: 270deg;
      transform: rotate(270deg);
    }
  }
  .bg-blur {
    position: fixed;
    left: -10000px;
    right: -10000px;
    top: -10000px;
    bottom: -10000px;
    background: #ffffffaa;
    z-index: 9998;

    transition: 0.3s opacity ease-in-out;
    opacity: 1;

    &.hide {
      opacity: 0;
    }
  }
}
</style>
