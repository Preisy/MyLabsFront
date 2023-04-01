<script setup lang="ts">
import ExamplesCardComponent from './ui/ExamplesCardComponent.vue';
import SlideComponent from './ui/CarouselSlide.vue';
import { computed, ref } from 'vue';
import { slides } from './cards';
import ACarousel from 'src/components/ACarousel.vue';
import { Screen } from 'quasar';

const slider_index = ref('1');

const isMobile = computed(() => {
  console.log(Screen);
  return Screen.lt.sm;
});

const _slides = computed(() => {
  let result = [];
  const cardsInOneSlide = isMobile.value ? 1 : 6;
  const slidesCount = slides.length / cardsInOneSlide;

  for (let slide_i = 0; slide_i < slidesCount; slide_i++) {
    const slide = [];
    for (let card_i = 0; card_i < cardsInOneSlide; card_i++)
      slide.push(slides[slide_i * cardsInOneSlide + card_i]);

    result.push(slide);
  }

  return result;
});
</script>

<template>
  <div class="examples bg-base">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.examplesBlock.title') }}
      </h1>
      <ACarousel
        v-model="slider_index"
        :slides-count="_slides.length"
        control-theme="dark"
        class="slider-wrapper"
      >
        <SlideComponent
          v-for="(slide, index) in _slides"
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

  border-radius: 0 0 2rem 2rem;

  .content-wrapper {
    padding: 8rem 0;

    .title {
      margin-bottom: 3.5rem;
    }

    .slider-wrapper {
      // background: radial-gradient(#00000010 15%, transparent 75%);
    }
  }

  .bg-image {
    --width: 75rem;
    --aspect-ratio: 1.58371;

    user-select: none;
    position: absolute;
    width: var(--width);
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
    z-index: -1;
    user-select: none;
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      padding: 6rem 0;

      .title {
        line-height: unset;
      }
    }

    .bg-image {
      --width: 50rem;
    }
  }
}
</style>
