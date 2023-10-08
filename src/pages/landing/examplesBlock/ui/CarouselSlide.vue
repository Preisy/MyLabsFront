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
  --column-count: 3;
  --card-size: 17rem;

  display: grid;

  grid-template-columns: repeat(var(--column-count), var(--card-size));
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;

  width: fit-content;
  padding: 1.5rem;
  margin: 0 auto;

  @media (max-width: $screen-md-lg) {
    --column-count: 2;
    --card-size: 18rem;
  }

  @media (max-width: $screen-md) {
    --card-size: 14rem;

    padding: 0.7rem;
    justify-content: center;
  }

  @media (max-width: $screen-sm) {
    --column-count: 1;
    --card-size: 13rem;
    // grid-template-rows: 1fr;
  }
}
</style>
