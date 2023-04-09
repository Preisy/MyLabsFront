<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { QScrollObserver, QResizeObserver, Screen } from 'quasar';
import { onMounted, ref } from 'vue';
import { isVisible } from 'src/global/utils';
import throttle from 'lodash/throttle';

const root = ref<HTMLDivElement>();
let content = ref<HTMLDivElement>()

let min = 20;
let max = 37;
let k = -30;
let b = 40;
let height = ref<number>(18);
let coordY = 0;
const changeCoordY = () => {
  let fs = parseFloat(getComputedStyle(document.body).fontSize)
  let relativeTop = fs * 36 / 2;
  content.value?.getBoundingClientRect().top! + window.scrollY + relativeTop
}
onMounted(() => {
  let fs = parseFloat(getComputedStyle(document.body).fontSize)
  let relativeTop = fs * 36 / 2;
  coordY = content.value?.getBoundingClientRect().top! + window.scrollY + relativeTop
})

const updateHeight = () => {
  if (!root.value || !isVisible(root.value)) return;
  const centerBcr = coordY - window.scrollY
  const delta = centerBcr - document.documentElement.clientHeight / 2;

  let newHeight = Math.round((Math.abs(delta) * k / 1000 + b) * 10) / 10;
  if (newHeight === height.value) return;
  if (Math.abs(newHeight) > Math.abs(max)) height.value = max;
  if (Math.abs(newHeight) < Math.abs(min)) height.value = min;
  else height.value = newHeight;
};
const animateScroll = throttle(updateHeight, 15);
animateScroll();

const isMobile = Screen.lt.sm;
const counter = ref(0);
</script>

<template>
  <div class="counterpage" ref="root" :class="{ mobile: isMobile }">
    <QScrollObserver @scroll="animateScroll" />
    <QResizeObserver @resize="changeCoordY" />
    <div class="content-wrapper structure" ref="content" :style="{ height: `${height}rem` }">
      <h1 class="counter text-primary text-center">
        <span class="counter__number">{{ counter }}</span>
        &nbsp;
        {{ $t('pages.landing.counterPage.amount') }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counterpage {
  background: url('src/assets/digital_background.png');
  background-position: center;
  position: relative;
  z-index: 0;

  margin: -2rem auto;
  // will-change: height;

  .structure {
    padding: 5rem 0;
    margin-left: auto !important;
    margin-right: auto !important;
    height: 36rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper {

    .counter {
      height: fit-content;
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
