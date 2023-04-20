<script setup lang="ts">
import HowItWorks from './ui/HowItWorks.vue';
import QAComponent from './ui/QAComponent.vue';
import manOnChair from 'assets/man_on_chair_alt.png';
</script>

<template>
  <div id="FAQ" class="faqblock bg-primary">
    <div class="content-wrapper structure text-center">
      <h1 class="title">{{ $t('pages.landing.faqBlock.title') }}</h1>
      <div class="content">
        <HowItWorks class="hiw-faqblock"></HowItWorks>
        <QAComponent class="col"></QAComponent>
      </div>
    </div>
    <img class="bg-img" :src="manOnChair" alt="" />
  </div>
</template>

<style scoped lang="scss">
.faqblock {
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  margin: -2rem 0;

  .content-wrapper {
    padding: 8rem 0;
    position: relative;
    z-index: 1;

    .content {
      display: flex;
      flex-direction: row;
    }

    .title {
      margin-bottom: 3.5rem;
    }
  }
  .bg-img {
    --width: 90rem;
    --aspect-ratio: 1.58371;
    user-select: none;

    position: absolute;
    z-index: 0;

    width: var(--width);

    bottom: 0;
    left: 50%;
    transform: translateY(58%);
  }

  @media (max-width: $screen-md-lg) {
    .content-wrapper {
      .content {
        flex-direction: column;

        .hiw-faqblock {
          margin: 0 auto;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      padding: 3.5rem 0;

      .content {
        flex-direction: column;
      }
    }
  }
}
</style>
