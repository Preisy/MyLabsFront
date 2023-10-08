<script setup lang="ts">
import { ref } from 'vue';
import { Attachment } from '../service/ReviewsService';
import ImgDialog from './ImgDialog.vue';
import { nextTick } from 'vue';

interface Review {
  name: string;
  details: string;
  imgSrc: string;
  link: string;
  attachments?: Array<Attachment>;
}

const props = defineProps<Review>();
const dialog = ref<InstanceType<typeof ImgDialog>>();
const dialogUrl = ref<string>();

const onclick = (url: string) => {
  dialogUrl.value = url;
  nextTick(() => dialog.value?.show());
};
</script>

<template>
  <div class="review-card">
    <div class="head row items-center no-wrap">
      <a :href="props.link">
        <img class="profile-img" :src="props.imgSrc" />
      </a>
      <h2 class="name">{{ props.name }}</h2>
    </div>
    <p props.details class="details">{{ props.details }}</p>
    <template v-if="attachments">
      <div
        v-for="attachment in attachments"
        :key="attachment.photo.sizes[0].url"
        @click="onclick(attachment.photo.sizes[0].url)"
      >
        <img class="attachment" :src="attachment.photo.sizes[0].url" />
      </div>
      <ImgDialog v-if="dialogUrl" ref="dialog" :img-src="dialogUrl" />
    </template>
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
    margin-bottom: 6px;
  }

  .attachment {
    min-width: 100px;
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
    pointer-events: none;
  }

  @media (max-width: $screen-md) {
    .details {
      font-size: 0.9rem;
    }
  }
}
</style>
