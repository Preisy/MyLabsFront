<script setup lang="ts">
interface CardProps {
  title: string;
  imgSrc: string;
  date: string;
  price: string;
  link: string;
}

const props = defineProps<CardProps>();
</script>
<template>
  <div class="card">
    <div class="title-wrapper row items-center no-wrap">
      <img class="title-icon" :src="props.imgSrc" alt="" />
      <h4 class="title">{{ props.title }}</h4>
    </div>
    <div class="details">
      <div class="price">
        <q-icon class="icon" color="accent" name="currency_ruble" />
        <span>
          {{ props.price }}
        </span>
      </div>
      <div class="date">
        <q-icon class="icon" color="accent" name="update" />
        <span>
          {{ props.date }}
        </span>
      </div>
    </div>
    <div class="link">
      <q-btn icon="clip" color="grey" text-color="dark"></q-btn>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  background-color: $primary;
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 2rem 0 #00000020;

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

  @media (max-width: $screen-sm) {
    box-shadow: 0 0 0.8rem 0 #00000040;
  }
}
</style>
