<script setup lang="ts">
import { QScrollObserver, Screen } from 'quasar';
import { ref } from 'vue';
import isVisible from 'src/global/utils/isVisible';

const root = ref<HTMLDivElement>();
const counter = ref(0);

let end = -2;
let margin = ref<number>(0);

const scrollHandler = () => {
  if (!root.value || !isVisible(root.value)) return;
  const bcr = root.value?.getBoundingClientRect();
  const centerBcr = bcr.bottom - bcr.height / 2;
  const delta = centerBcr - document.documentElement.clientHeight / 2;
  let newMargin = Math.round((Math.abs(delta) / 80) * 10) / 10;
  if (newMargin < Math.abs(end)) margin.value = end;
  else margin.value = -newMargin;
};

const isMobile = Screen.lt.sm;
</script>

<template>
  <div
    class="counterpage"
    ref="root"
    :class="{ mobile: isMobile }"
    :style="{ margin: `${margin}rem` }"
  >
    <QScrollObserver @scroll="scrollHandler" />
    <div class="content-wrapper structure">
      <h1 class="counter text-primary text-center">
        <span class="counter__number">{{ counter }}</span>
        {{ $t('pages.landing.counterPage.amount') }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counterpage {
  background: url('src/assets/digital_background.png');
  // background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  //transition: 0.3s all ease-in-out;

  margin: -8rem auto;
  will-change: margin;
  //&.isVisible {
  //  margin: -2rem auto;
  //}

  .content-wrapper {
    padding: 15rem 0;

    .counter {
      color: $primary;
      text-align: center;
    }
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      padding: 7rem 0;
    }
  }
}
</style>
