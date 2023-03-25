<script setup lang='ts'>
import { ref } from 'vue';

const counter = ref(0);
</script>

<template>
  <div class='counterpage'>
    <div class='counter__wrapper structure'>
      <h2 class='counter'>
        <span class='counter__number'>{{ counter }}</span>
        {{ $t('pages.landing.counterPage.amount') }}
      </h2>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.counterpage {
  background: url('src/assets/digital_background.png');
  background-size: cover;

  position: relative;
  z-index: 0;

  margin: -2rem auto;

  .counter__wrapper {
    padding: 12rem 0;

    .counter {
      color: $primary;
      text-align: center;
    }
  }
}
</style>
