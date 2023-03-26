<script setup lang="ts">
import HomePage from './homePage';
import CounterPage from './counterBlock';
import OurSkillsBlock from './ourSkillsBlock';
import ExamplesBlock from './examplesBlock';
import ReviewsBlock from './reviewsBlock';
import FooterBlock from './footer';

let components = [
  HomePage,
  CounterPage,
  OurSkillsBlock,
  ExamplesBlock,
  ReviewsBlock,
  FooterBlock,
];
</script>

<template>
  <div class="landing">
    <component v-for="(comp, i) in components" :is="comp" :key="i" />
  </div>
</template>
