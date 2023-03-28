<script setup lang="ts">
import QACard from './QACard.vue';
import { useI18n } from 'vue-i18n';
import { Screen } from 'quasar';
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

const isMobile = Screen.lt.sm;
</script>

<template>
  <div class="qa-wrapper" :class="{ mobile: isMobile }">
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

  &.mobile {
    width: 100%;
  }
}
</style>
