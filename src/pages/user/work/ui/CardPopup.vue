<script setup lang="ts">
import { QPopupProxy } from 'quasar';
import { OrderModel, LabModel, isLabModel } from './Card';
import DetailedLabCard from './DetailedLabCard.vue';
import DetailedOrderCard from './DetailedOrderCard.vue';
import { ref } from 'vue';

interface CardPopupProps {
  data: LabModel | OrderModel;
}

const props = defineProps<CardPopupProps>();
const popup = ref<InstanceType<typeof QPopupProxy>>();
const isLab = isLabModel(props.data);

defineExpose({
  show: () => popup.value?.show(),
});
</script>

<template>
  <q-popup-proxy no-parent-event class="popup" ref="popup">
    <DetailedLabCard v-if="isLab" :card="(data as LabModel)" />
    <DetailedOrderCard v-else :card="(data as OrderModel)" />
  </q-popup-proxy>
</template>

<style lang="scss">
.popup {
  border-radius: 1.5rem;
  box-shadow: 0 0 2.5rem 0 rgba(191, 205, 243, 0.5);
}
</style>
