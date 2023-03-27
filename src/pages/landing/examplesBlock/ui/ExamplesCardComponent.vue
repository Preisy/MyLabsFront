<script setup lang="ts">
interface CardProps {
  title: string;
  imgSrc: string;
  time: string;
  price: string;
}

const props = defineProps<CardProps>();
</script>
<template>
  <div class="card">
    <div class="title__wrapper row items-center">
      <img class="title__icon" :src="props.imgSrc" alt="" />
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
  // box-shadow: 0 0 5rem 0 #00000010;

  .title__wrapper {
    margin-bottom: 2.5rem;

    .title__icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;

      margin-right: 0.2rem;
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
