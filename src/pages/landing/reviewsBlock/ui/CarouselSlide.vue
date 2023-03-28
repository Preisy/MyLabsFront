<script setup lang="ts">
import { Screen } from 'quasar';

interface SlideProps {
  name: string;
}

const props = defineProps<SlideProps>();
const isMobile = Screen.lt.sm;
</script>

<template>
  <q-carousel-slide
    class="slide"
    :class="{ mobile: isMobile }"
    :name="props.name"
  >
    <slot></slot>
  </q-carousel-slide>
</template>

<style scoped lang="scss">
.slide {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;

  &.mobile {
    grid-template-rows: 1fr;
  }
}
</style>
