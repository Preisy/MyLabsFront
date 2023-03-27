<script setup lang="ts">
import ExamplesCardComponent from './ui/ExamplesCardComponent.vue';
import SlideComponent from './ui/CarouselSlide.vue';
import { ref } from 'vue';
import { slides } from './cards';
import ACarousel from 'src/components/ACarousel.vue';

const slider_index = ref('1');
</script>

<template>
  <div class="examples bg-base">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.examplesBlock.title') }}
      </h1>
      <ACarousel
        v-model="slider_index"
        :slides-count="slides.length"
        control-theme="dark"
        class="slider-wrapper"
      >
        <SlideComponent
          v-for="(slide, index) in slides"
          :key="index"
          :name="index.toString()"
        >
          <ExamplesCardComponent
            v-for="(card, index) in slide"
            :key="index"
            :img-src="card.imgSrc"
            :title="card.title"
            :time="card.time"
            :price="card.price"
          ></ExamplesCardComponent>
        </SlideComponent>
      </ACarousel>
    </div>
    <img class="bg-image" src="src/assets/man_on_chair_alt.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
.examples {
  background-color: $primary;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .content-wrapper {
    padding: 8rem 0;

    .title {
      margin-bottom: 3.5rem;
    }

    .slider-wrapper {
      background: radial-gradient(#00000010 15%, transparent 75%);
    }
  }

  .bg-image {
    --width: 75rem;
    --aspect-ratio: 1.58371;

    position: absolute;
    width: var(--width);
    bottom: calc(-1 * var(--width) / 1.7 / var(--aspect-ratio));
    left: calc(-1 * var(--width) / 2);
    z-index: -1;
  }
}
</style>
