<script setup lang="ts">
import HowItWorks from './ui/HowItWorks.vue';
import QAComponent from './ui/QAComponent.vue';
</script>

<template>
  <div class="faqblock">
    <div class="content-wrapper structure text-center">
      <h1 class="title">{{ $t('pages.landing.faqBlock.title') }}</h1>
      <div class="content row">
        <HowItWorks></HowItWorks>
        <QAComponent></QAComponent>
      </div>
    </div>
    <img class="bg-img" src="src/assets/man_on_chair_alt.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
.faqblock {
  overflow: hidden;
  position: relative;
  .content-wrapper {
    padding: 8rem 0;
    position: relative;
    z-index: 1;

    .title {
      margin-bottom: 3.5rem;
    }
  }
  .bg-img {
    --width: 90rem;
    --aspect-ratio: 1.58371;
    user-select: none;

    position: absolute;
    z-index: -1;

    width: var(--width);

    right: calc(-1 * var(--width) / 2);
    bottom: calc(-1.3 * var(--width) / var(--aspect-ratio) / 2);
  }
}
</style>
