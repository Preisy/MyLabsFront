<script setup lang="ts">
import { Screen } from 'quasar';

interface Props {
  num: number;
  isLast: boolean;
  label: string;
  icon?: string;
}

defineProps<Props>();

const isMobile = Screen.lt.sm;
</script>

<template>
  <div class="step row" :class="{ last: isLast, mobile: isMobile }">
    <div class="img-wrapper">
      <img
        class="line"
        :class="{ reverse: num % 2 }"
        src="src/assets/faq_block/left_line.png"
      />
    </div>
    <div
      class="step-content row items-end"
      :class="{ 'stuck-left': !(num % 2) }"
    >
      <h4 class="step-num">{{ num + 1 }}.</h4>
      <span class="label">{{ label }}</span>
      <q-icon class="icon" :name="icon"></q-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  --height: 5.5rem;
  --line-aspect: 0.6188;
  --line-margin-right: 0.8rem;

  height: var(--height);

  &.last {
    height: fit-content;
    .img-wrapper {
      height: 0;
      .line {
        display: none;
      }
    }
    .step-content {
      margin-left: 0 !important;
    }
  }

  &.mobile {
    position: relative;
    --line-margin-right: 0.05rem;
    --height: 3rem;
    .img-wrapper {
      height: 0;
      display: none;
      // position: absolute;
      // opacity: 0.3;
      // height: 6rem;
      // z-index: 0;

      // img {
      //   height: 100%;
      // }
    }
    .step-content {
      position: relative;
      margin-left: 0 !important;
      z-index: 1;

      .step-num {
        margin-right: 1rem;
      }
    }
  }

  .img-wrapper {
    height: 125%;
    margin-right: var(--line-margin-right);
    .line {
      user-select: none;
      touch-action: none;
      height: 100%;

      &.reverse {
        scale: -1 1;
      }
    }
  }
  .step-content {
    height: fit-content;

    &.stuck-left {
      margin-left: calc(
        -1 * var(--height) * var(--line-aspect) - var(--line-margin-right)
      );
    }

    .step-num {
      font-size: 1.6rem;
      line-height: 1.4rem;
    }
    .label {
      --font-size: 1rem;
      font-size: var(--font-size);
      line-height: var(--font-size);
    }
    .icon {
      height: 100%;
    }
  }
}
</style>
