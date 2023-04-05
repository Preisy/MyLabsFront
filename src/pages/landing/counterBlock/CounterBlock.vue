<script setup lang="ts">
import { Screen } from 'quasar';
import { onMounted, ref } from 'vue';

const root = ref<HTMLDivElement>();
const counter = ref(0);

// let start = 18;
let end = 35;
let height = ref<number>();

const updateHeight = () => {
  if (!root.value) return;
  const bcr = root.value.getBoundingClientRect();

  const centerBcr = bcr.bottom - bcr.height / 2;

  const delta = centerBcr - document.documentElement.clientHeight / 2;

  let newHeight = Math.round(((-Math.abs(delta) * 30) / 1000 + 40) * 10) / 10;
  // console.log(newHeight);
  if (newHeight === height.value) return;

  if (Math.abs(newHeight) > Math.abs(end)) height.value = end;
  else height.value = newHeight;
};

const animateScroll = () => {
  updateHeight();
  requestAnimationFrame(animateScroll);
};

// let a = new IntersectionObserver(() => {
//   console.log('obs');

// }, {
//   // root: root.value,
//   threshold: 0.5
// })

onMounted(() => animateScroll());

const isMobile = Screen.lt.sm;
</script>

<template>
  <div class="counterpage" ref="root" :class="{ mobile: isMobile }">
    <!-- <QScrollObserver @scroll="scrollHandler" /> -->
    <div class="content-wrapper structure" :style="{ height: `${height}rem` }">
      <h1 class="counter text-primary text-center">
        <span class="counter__number">{{ counter }}</span>
        {{ $t('pages.landing.counterPage.amount') }}
        <!-- {{ height }} -->
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

  margin: -2rem auto;
  will-change: height;

  .structure {
    padding: 12rem 0;
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
      padding: 8rem 0;
    }
  }
}
</style>
