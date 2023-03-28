<script setup lang="ts">
import StepComponent from './StepComponent.vue';
import { useI18n } from 'vue-i18n';
import { Screen } from 'quasar';
const { t } = useI18n();

const steps = [
  {
    label: `${t('pages.landing.faqBlock.howItWorks.step_1')}`,
    icon: 'mail',
  },
  {
    label: `${t('pages.landing.faqBlock.howItWorks.step_2')}`,
    icon: 'payments',
  },
  {
    label: `${t('pages.landing.faqBlock.howItWorks.step_3')}`,
    icon: 'construction',
  },
  {
    label: `${t('pages.landing.faqBlock.howItWorks.step_4')}`,
    icon: 'favorite',
  },
  {
    label: `${t('pages.landing.faqBlock.howItWorks.step_5')}`,
    icon: 'check_box',
  },
];

const isMobile = Screen.lt.sm;
</script>

<template>
  <div class="how-it-works bg-primary" :class="{ mobile: isMobile }">
    <h4 class="title">
      {{ $t('pages.landing.faqBlock.howItWorks.title') }}
    </h4>
    <div class="steps">
      <StepComponent
        v-for="(step, index) in steps"
        :key="index"
        :num="index"
        :is-last="index === steps.length - 1"
        :label="step.label"
        :icon="step.icon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.how-it-works {
  --margin-right: 1.6rem;
  width: calc(49% - var(--margin-right));
  margin-right: var(--margin-right);

  padding: 1.5rem;
  box-shadow: 0 0 20px 0 #00000020;
  border-radius: 1.5rem;

  height: fit-content;

  &.mobile {
    --margin-right: 0;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .title {
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
}
</style>
