<script setup lang="ts">
import QACard from './QACard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const cards = [
  {
    question: `${t('pages.landing.faqBlock.QA.card_1.Q')}`,
    answer: `${t('pages.landing.faqBlock.QA.card_1.A')}`,
  },
  {
    question: `${t('pages.landing.faqBlock.QA.card_2.Q')}`,
    answer: `${t('pages.landing.faqBlock.QA.card_2.A')}`,
  },
  {
    question: `${t('pages.landing.faqBlock.QA.card_3.Q')}`,
    answer: `${t('pages.landing.faqBlock.QA.card_3.A')}`,
  },
  {
    question: `${t('pages.landing.faqBlock.QA.card_4.Q')}`,
    answer: `${t('pages.landing.faqBlock.QA.card_4.A')}`,
  },
  {
    question: `${t('pages.landing.faqBlock.QA.card_5.Q')}`,
    answer: `${t('pages.landing.faqBlock.QA.card_5.A')}`,
  },
];
</script>

<template>
  <div class="qa-wrapper">
    <div class="qa-cards text-left">
      <QACard
        v-for="(card, index) in cards"
        :key="index"
        :question="card.question"
        :answer="card.answer"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.qa-wrapper {
  width: 50%;

  @media (max-width: $screen-lg) {
    width: auto;
  }

  @media (max-width: $screen-sm) {
    width: 100%;
  }
}
</style>
