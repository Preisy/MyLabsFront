<script setup lang="ts">
import { Attachment } from '../service/ReviewsService';

interface Review {
  name: string;
  details: string;
  imgSrc: string;
  link: string;
  attachments?: Array<Attachment>;
}

const props = defineProps<Review>();
</script>

<template>
  <div class="review-card">
    <div class="head row items-center no-wrap">
      <a :href="props.link">
        <img class="profile-img" :src="props.imgSrc" />
      </a>
      <h2 class="name">{{ props.name }}</h2>
    </div>
    <p v-if="props.details" class="details">{{ props.details }}</p>
    <img v-else :src="props.attachments[0].photo" class="attachment" />
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
      border-radius: 100%;
    }

    .name {
      margin: 0;
      margin-left: 0.5rem;
    }
  }

  .details {
    font-size: 1.2rem;
  }

  .attachment {
    min-width: 100px;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }

  @media (max-width: $screen-md) {
    .details {
      font-size: 0.9rem;
    }
  }
}
</style>
