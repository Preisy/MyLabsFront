<script setup lang="ts">
import { CardModel, TaskType } from './Card';

interface Props {
  card: CardModel;
}
const props = defineProps<Props>();

const taskTypeToImg = (v: TaskType) => {
  switch (v) {
    case 'Cpp':
      return '/src/assets/cardTypes/c++icon.png';
    case 'C':
      return '/src/assets/cardTypes/cicon.png';
    case 'Cs':
      return '/src/assets/cardTypes/csicon.png';
  }
};
</script>
<template>
  <div class="card">
    <div class="row justify-between items-start fit-content no-wrap">
      <div class="title-wrapper row items-center no-wrap q-mr-sm">
        <img class="title-icon" :src="taskTypeToImg(props.card.type)" alt="" />
        <h2 class="title">{{ props.card.title }}</h2>
      </div>

      <q-btn
        icon="attachment"
        color="grey"
        text-color="dark"
        class="attachment-btn br-15px"
      />
    </div>
    <div class="details row justify-between">
      <div class="price">
        <q-icon class="icon" color="accent" name="currency_ruble" />
        <span>
          {{ props.card.price }}
        </span>
      </div>
      <div class="date">
        <span>
          {{ props.card.duration }}
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  position: relative;
  background-color: $primary;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0 #00000020;
  max-width: 15rem;

  @media (max-width: $screen-lg) {
    max-width: 13rem;
  }
  @media (max-width: $screen-md) {
    max-width: 12rem;
    padding: 0.8rem;
    box-shadow: 0 0 0.8rem 0 #00000020;
  }
  @media (max-width: $screen-sm) {
    max-width: 10rem;
    padding: 0.5rem;
    box-shadow: 0 0 0.4rem 0 #00000020;
    border-radius: 0.7rem;
  }

  .title-wrapper {
    align-items: flex-start;
    margin-bottom: 1.5rem;
    width: 80%;

    .title-icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;

      margin-right: 0.4rem;
      margin-top: 0.3rem;
    }

    .title {
      font-size: 1.3rem;
      line-height: 1.35rem;
      margin-bottom: 0.5rem;

      @media (max-width: $screen-sm) {
        font-size: 1rem;
        line-height: 1.05rem;
      }
    }
  }

  .attachment-btn {
    padding: 0.5rem;

    @media (max-width: $screen-sm) {
      padding: 0.3rem;
      font-size: 0.8rem;
    }
  }

  .details {
    font-size: 1.2rem;

    @media (max-width: $screen-lg) {
      font-size: 0.9rem;
    }
    .icon {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    .date {
      font-weight: 700;
    }
  }

  .link {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
}
</style>
