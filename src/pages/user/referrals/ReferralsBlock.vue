<script setup lang="ts">
import { chunk } from 'lodash';
import { defaultCards } from './ui/FriendCardModel';
import FriendCard from './ui/FriendCard.vue';
import { computed, ref } from 'vue';
import { Screen } from 'quasar';
import { ReferralFriend } from './service/ReferralService';
import { useReferralStore } from './store/ReferralStore';

const referralStore = useReferralStore();
const chunkCount = computed(() => {
  return Screen.lt.md ? 1 : 2;
});

const referrals = ref<ReferralFriend[]>();
referralStore.getReferrals().then((val) => {
  if ('error' in val) {
    console.warn('For some reason cant fetch referrals');
    return;
  }
  referrals.value = val;
});
</script>

<template>
  <div class="referrals bg-primary">
    <div class="content-wrapper structure">
      <h1 class="title text-center">{{ $t('pages.user.referrals.title') }}</h1>
      <q-scroll-area class="friends-scroller">
        <div class="friends-list column">
          <div
            class="slide row justify-center no-wrap"
            v-for="(slide, index) in chunk(defaultCards, chunkCount)"
            :key="index"
          >
            <FriendCard
              v-for="(card, index) in slide"
              :key="index"
              :card="card"
              class="referral-card"
            />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<style scoped lang="scss">
.referrals {
  height: 100%;

  .structure {
    padding-top: 2rem;
  }

  .friends-scroller {
    box-sizing: border-box;
    height: calc(var(--subblock-height) - 5rem);
    margin-top: -2rem;

    @media (max-width: $screen-md) {
      height: calc(var(--subblock-height) - 5rem);
    }
  }
  .friends-list {
    margin: 2rem;
    .slide {
      margin-bottom: 1.5rem;
      gap: 1.5rem;
    }

    .referral-card {
      flex: 1;
    }
  }
}
</style>
