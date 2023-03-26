<script setup lang="ts">
import { QScrollObserver } from 'quasar';
import { ref } from 'vue';
import { useAnimationStore } from '../useAnimationStore';

const counter = ref(0);
const isVisible = ref(false);
const visibilityHandler = () => {
  const val = useAnimationStore().ourSkillsVisibility();
  isVisible.value = val;
};
</script>

<template>
  <div class="counterpage" :class="{ isVisible: isVisible }">
    <QScrollObserver @scroll="visibilityHandler" />
    <div class="counter__wrapper structure">
      <h1 class="counter">
        <span class="counter__number">{{ counter }}</span>
        {{ $t('pages.landing.counterPage.amount') }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counterpage {
  background: url('src/assets/digital_background.png');
  background-size: cover;
  position: relative;
  z-index: 0;
  transition: 0.3s all ease-in-out;

  margin: -8rem auto;
  &.isVisible {
    margin: -2rem auto;
  }

  .counter__wrapper {
    padding: 12rem 0;

    .counter {
      color: $primary;
      text-align: center;
    }
  }
}
</style>
