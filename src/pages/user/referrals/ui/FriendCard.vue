<script setup lang="ts">
import defaultPhoto from 'assets/user/default_photo.png';
import { FriendCardModel } from './FriendCardModel';
import { onMounted, ref } from 'vue';
import { useReferralStore } from '../store/ReferralStore';

interface Props {
  card: FriendCardModel;
}
const props = defineProps<Props>();

const referralStore = useReferralStore();
const photo = ref<string>();

onMounted(async () => {
  const userPhoto = await referralStore.getFriendPhoto(
    props.card.invitedUser.id
  );
  if ('error' in userPhoto) {
    console.warn(`Cant fetch user(${props.card.invitedUser.id}) photo`);
    return;
  }

  photo.value = userPhoto.photo;
});
</script>

<template>
  <div class="friend-card bg-primary br-15px">
    <div class="content-wrapper column justify-between">
      <div class="name row items-center no-wrap">
        <img
          :src="card.invitedUser.photo ?? defaultPhoto"
          class="profile-img"
        />
        <h2 class="title">{{ card.invitedUser.uname }}</h2>
      </div>
      <div class="price-wrapper row">
        <q-icon class="icon" name="currency_ruble" />
        <p class="value">{{ card.deductions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.friend-card {
  box-shadow: 0 0 1rem 0 #00000040;
  // width: 23rem;
  padding: 1.5rem;

  .content-wrapper {
    height: 100%;
  }

  .name {
    margin-bottom: 0.8rem;

    .title {
      margin-bottom: 0;
      margin-left: 0.5rem;

      // font-size: 1.4rem;
      // line-height: 1.5rem;
    }

    .profile-img {
      --size: 3.75rem;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;
    }
  }

  .price-wrapper {
    .icon {
      font-size: 1.3rem;
      color: $accent;
    }
  }

  @media (max-width: $screen-md) {
    padding: 1rem;

    .name {
      .title {
        // font-size: 1.2rem;
        // line-height: 1.25;
      }
    }
  }
}
</style>
