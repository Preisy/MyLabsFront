<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import heartImg from 'assets/pop_up/heart.png';
</script>

<template>
  <div class="referralBlock">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.referral.title') }}
      </h1>
      <div class="content row justify-center">
        <div class="desc">
          <div class="text">
            {{ $t('pages.landing.referral.desc') }}
          </div>
          <ABtn :label="$t('pages.landing.referral.detailsBtn')" theme="dark" />
        </div>
        <div class="img-wrapper">
          <img class="img" :src="heartImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.referralBlock {
  padding-bottom: 2rem;

  .content-wrapper {
    margin: 0 auto;
  }
  .desc {
    margin-right: 3.5rem;
    width: 20rem;
    .text {
      margin-bottom: 2rem;
    }
  }
  .img-wrapper {
    .img {
      width: 10rem;
    }
  }
}
</style>
