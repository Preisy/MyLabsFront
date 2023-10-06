<script setup lang="ts">
import Card from '../cards';

interface DetailedLabCardProps {
  card: Card;
}
defineProps<DetailedLabCardProps>();
</script>

<template>
  <div class="detailed-card">
    <div class="content-wrapper">
      <div class="text">
        <p>{{ card.taskText }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detailed-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  max-width: 20rem;
  min-width: 10rem;
  background-color: white;
  box-shadow: 0 0 2.5rem 0 rgba(191, 205, 243, 0.5);

  .text {
    margin-bottom: 2rem;

    p {
      line-break: anywhere;
    }

    &.noMargin {
      margin: 0;
    }
  }

  .files {
    column-gap: 0.5rem;
    width: max-content;
    .file-wrapper {
      --size: 3rem;
      position: relative;
      width: var(--size);
      .file {
        width: 100%;
        height: var(--size);
        border-radius: 1rem;
        background-color: #d9d9d9;
        font-size: 2.3rem;
      }
      .filename {
        font-size: 0.7rem;
        font-weight: 700;
      }
    }
  }
}
</style>
