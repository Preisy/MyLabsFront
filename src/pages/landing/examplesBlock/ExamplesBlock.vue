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
    <div class="examples__wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.examplesBlock.title') }}
      </h1>
      <div class="slider__wrapper">
        <ACarousel
          class="slider"
          v-model="slider_index"
          :slides_count="slides.length"
          control_theme="dark"
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

  .examples__wrapper {
    padding: 8rem 0;

    .title {
      margin-bottom: 3.5rem;
    }

    .slider {
      background: radial-gradient(#00000010 0, transparent 160%);
      box-shadow: 0 0 3rem 0 #00000010;
      height: fit-content;
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
