<script setup lang="ts">
import { CardModel } from './Card';

interface Props {
  card: CardModel;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="card">
    <div class="row justify-between items-start fit-content">
      <div class="title-wrapper row items-center no-wrap">
        <img class="title-icon" :src="props.card.imgSrc" alt="" />
        <h2 class="title">{{ props.card.title }}</h2>
      </div>

      <q-btn icon="attachment" color="grey" text-color="dark"></q-btn>
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
          {{ props.card.date }}
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
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 2rem 0 #00000020;

  .title-wrapper {
    margin-bottom: 2.5rem;
    width: 80%;

    .title-icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;

      margin-right: 0.4rem;
    }
  }

  .details {
    font-size: 1.2rem;

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

  @media (max-width: $screen-sm) {
    box-shadow: 0 0 0.8rem 0 #00000040;
  }
}
</style>
