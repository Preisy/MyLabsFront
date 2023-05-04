<script setup lang="ts">
interface Props {
  question: string;
  answer: string;
}

const props = defineProps<Props>();
</script>

<template>
  <q-expansion-item
    class="qa-card"
    header-class="card-header"
    expand-icon-class="card-btn bg-dark text-primary br-15px"
    :label="props.question"
  >
    <p class="answer">{{ props.answer }}</p>
  </q-expansion-item>
</template>

<style scoped lang="scss">
.qa-card {
  background: white;
  box-shadow: 0 0 20px 0 #00000030;
  border-radius: 2rem;

  padding: 1rem 1.5rem;

  margin-bottom: 1.5rem;

  &:deep(.q-focus-helper) {
    display: none;
  }
  &:deep(.q-hover-helper) {
    display: none;
  }
  &:deep(.card-btn) {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
    padding: 0 !important;
    align-items: center !important;

    bottom: 0;
    position: absolute;
    right: 0;

    @media (max-width: $screen-md) {
      --size: 1.7rem;
      border-radius: 0.6rem;
    }
  }
  &:deep(.card-btn > .q-icon) {
    font-size: calc(var(--size)-0.3rem);
  }
  &:deep(.card-header) {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6rem;

    padding: 0 !important;
    padding-right: 3rem !important;

    @media (max-width: $screen-md) {
      font-size: 1.3rem;
    }
    @media (max-width: $screen-sm) {
      font-size: 1.1rem;
    }
  }

  .answer {
    margin: 0;
    margin-top: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: $screen-md) {
    padding: 0.8rem 1.2rem;
    .answer {
      font-size: 1rem;
      margin-top: 0.8rem;
    }
  }
  @media (max-width: $screen-sm) {
    .answer {
      font-size: 0.9rem;
      margin-top: 0.3rem;
    }
  }
}
</style>
