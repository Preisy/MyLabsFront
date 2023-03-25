<script setup lang='ts'>
import HomePage from './homePage';
import CounterPage from './counterPage';
import OurSkillsPage from './ourSkillsPage';
import ExamplesPage from './examplesPage';

let components = [HomePage, CounterPage, OurSkillsPage, ExamplesPage];
</script>

<template>
  <div class='landing'>
    <component v-for='(comp, i) in components' :is='comp' :key='i' />
  </div>
</template>
