<script setup lang="ts">
import { chunk } from 'lodash';
// import { defaultCards } from './ui/FriendCardModel';
import FriendCard from './ui/FriendCard.vue';
import { computed, onMounted, ref } from 'vue';
import { Screen } from 'quasar';
import { useReferralStore } from './store/ReferralStore';
import { useUserStore } from 'src/stores/UserStore';
import { FriendCardModel } from './ui/FriendCardModel';

const userStore = useUserStore();
const referralStore = useReferralStore();
const chunkCount = computed(() => {
  return Screen.lt.md ? 1 : 2;
});

const referrals = ref<FriendCardModel[]>();
onMounted(async () => {
  const user = await userStore.getCreds();
  if ('error' in user) {
    return;
  }
  const refs = await referralStore.getReferrals(
    user.id ?? userStore.userData?.id
  );

  if ('error' in refs) {
    console.warn('For some reason cant fetch referrals');
    return;
  }
  console.log(refs);

  referrals.value = refs;
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
            v-for="(slide, index) in chunk(referrals, chunkCount)"
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
  border-radius: 2rem;
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
