<script setup lang="ts">
interface Props {
  name: string;
  details: string;
  imgSrc: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="review-card">
    <div class="head row items-center">
      <img class="profile-img" :src="props.imgSrc" />
      <h4>{{ props.name }}</h4>
    </div>
    <p class="details">{{ props.details }}</p>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  background: $primary;
  border-radius: 1.5rem;
  padding: 1rem;
  height: max-content;

  .head {
    margin-bottom: 1rem;
    .profile-img {
      --size: 3.5rem;
      width: var(--size);
      height: var(--size);
    }
  }

  .details {
    font-size: 1.2rem;
  }
}
</style>
