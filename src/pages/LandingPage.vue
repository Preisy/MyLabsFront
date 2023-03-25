<script setup lang="ts">
import HomePage from './HomePage.vue';
import CounterPage from './CounterPage.vue';
import OurSkillsPage from './OurSkillsPage.vue';
import ExamplesPage from './ExamplesPage.vue';
</script>

<template>
  <div class="landing">
    <HomePage class="homepage"></HomePage>
    <CounterPage class="counterpage"></CounterPage>
    <OurSkillsPage class="ourskills"></OurSkillsPage>
    <ExamplesPage class="examples"></ExamplesPage>
  </div>
</template>

<style scoped lang="scss">
.homepage {
  position: relative;
  z-index: 1;
}
.counterpage {
  position: relative;
  z-index: 0;
  margin-top: -2rem;
}
.ourskills {
  margin-top: -2rem;
  position: relative;
  z-index: 1;
}
</style>
