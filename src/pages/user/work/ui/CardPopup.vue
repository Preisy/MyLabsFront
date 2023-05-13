<script setup lang="ts">
import { OrderModel, LabModel, isLabModel } from './Card';
import DetailedLabCard from './DetailedLabCard.vue';
import DetailedOrderCard from './DetailedOrderCard.vue';
import { ref } from 'vue';
import { QPopupProxy } from 'quasar';
import lightImg from 'assets/header/langSwitchLight.svg';
import { Screen } from 'quasar';

interface CardPopupProps {
  data: LabModel | OrderModel;
  isOpen: boolean;
}

const props = defineProps<CardPopupProps>();
const popup = ref<InstanceType<typeof QPopupProxy>>();
const isLab = isLabModel(props.data);

defineExpose({
  show: () => {
    popup.value?.show();
  },
});
const emits = defineEmits<{
  (event: 'close'): void;
}>();
</script>

<template>
  <div
    class="popup-wrapper"
    :class="{ hide: !isOpen, compact: Screen.lt.md, mobile: Screen.lt.sm }"
  >
    <div class="popup" :class="{ hide: !isOpen }">
      <DetailedLabCard v-if="isLab" :card="(data as LabModel)" />
      <DetailedOrderCard v-else :card="(data as OrderModel)" />
    </div>
    <div class="light-holder">
      <img :src="lightImg" alt="" class="light" />
    </div>
    <div class="bg-blur" @click="emits('close')" :class="{ hide: !isOpen }" />
  </div>
</template>

<style scoped lang="scss">
.popup-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &.hide {
    visibility: hidden;
    // display: none;
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
    border-radius: 1.5rem;
    box-shadow: 0 0 2.5rem 0 rgba(191, 205, 243, 0.5);
    position: absolute;
    background: white;
    left: calc(100% + 3rem);
    // top: 50%;
    // transform: translate(-50%, -50%);
    z-index: 10000;

    transition: 0.3s opacity ease-in-out;
    opacity: 1;

    &.hide {
      opacity: 0;
      z-index: 0;
    }
  }
  .light-holder {
    position: absolute;
    z-index: 9997;
    right: 3rem;
    top: -2.5rem;
    transform: translateX(100%) scaleY(0.5);

    .light {
      rotate: 270deg;
    }
  }
  .bg-blur {
    position: absolute;
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
