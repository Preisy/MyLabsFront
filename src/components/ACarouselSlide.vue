<script setup lang="ts">
interface SlideProps {
  name: string;
}

const props = defineProps<SlideProps>();
</script>

<template>
  <q-carousel-slide class="slide" :name="props.name">
    <slot></slot>
  </q-carousel-slide>
</template>
<style scoped lang="scss">
.slide {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
}
</style>
