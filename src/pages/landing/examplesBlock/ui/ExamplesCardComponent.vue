<script setup lang="ts">
import { Screen } from 'quasar';

interface CardProps {
  title: string;
  imgSrc: string;
  time: string;
  price: string;
}

const props = defineProps<CardProps>();
const isMobile = Screen.lt.sm;
</script>
<template>
  <div class="card" :class="{ mobile: isMobile }">
    <div class="title-wrapper row items-center no-wrap">
      <img class="title-icon" :src="props.imgSrc" alt="" />
      <h4 class="title">{{ props.title }}</h4>
    </div>
    <div class="details">
      <div class="time">
        <q-icon class="icon" color="accent" name="update" />
        <span>
          {{ props.time }}
          {{ $t('pages.landing.examplesBlock.card.hours') }}
        </span>
      </div>
      <div class="price">
        <q-icon class="icon" color="accent" name="currency_ruble" />
        <span>
          {{ props.price }}
          {{ $t('pages.landing.examplesBlock.card.roubles') }}
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  background-color: $primary;
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 1.5rem;

  &.mobile {
    box-shadow: 0 0 0.8rem 0 #00000040;
  }

  .title-wrapper {
    margin-bottom: 2.5rem;

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
  }
}
</style>
