<script setup lang="ts">
import ExamplesCardComponent from './ui/ExamplesCardComponent.vue';
import SlideComponent from './ui/CarouselSlide.vue';
import { computed, onMounted, ref } from 'vue';
import Card from './cards';
import ACarousel from 'src/components/ACarousel.vue';
import { Screen } from 'quasar';
import { chunk } from 'lodash';
import { useExamplesStore } from './store/ExamplesStore';
import manOnChair from 'assets/man_on_chair_alt.png';

const slider_index = ref('0');

const cardsInOneSlide = computed(() => {
  if (Screen.lt.sm) return 2;

  if (Screen.width <= 900) return 4;

  return 6;
});

const slides = ref<Card[]>();

const _slides = computed(() => {
  if (!slides.value) return;
  return chunk(slides.value, cardsInOneSlide.value);
});

const examplesStore = useExamplesStore();
onMounted(async () => {
  const cards = await examplesStore.getLabs();
  if ('error' in cards) return;
  slides.value = cards;
});
</script>

<template>
  <div id="examples" class="examples bg-base">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.examplesBlock.title') }}
      </h1>
      <ACarousel
        v-model="slider_index"
        :slides-count="_slides?.length ?? 0"
        control-theme="dark"
        class="slider-wrapper"
      >
        <SlideComponent
          v-for="(slide, index) in _slides"
          :key="index"
          :name="index.toString()"
          class="slide"
        >
          <ExamplesCardComponent
            class="example-card"
            v-for="(card, index) in slide"
            :key="index"
            v-bind="card"
          />
        </SlideComponent>
      </ACarousel>
    </div>
    <img class="bg-image" :src="manOnChair" alt="" />
  </div>
</template>

<style scoped lang="scss">
.examples {
  background-color: $primary;
  position: relative;
  overflow: hidden;
  z-index: 1;

  border-radius: 0 0 2rem 2rem;

  .structure {
    padding-bottom: 5rem;
  }

  .content-wrapper {
    .title {
      margin-bottom: 3.5rem;
    }
  }

  .slider-wrapper {
    overflow: hidden;
    :deep(.q-panel-parent) {
      overflow: unset;
    }
    :deep(.scroll) {
      overflow: unset;
    }

    // .slide {
    //   .example-card:nth-child(2n-1) {
    //     justify-self: end;
    //   }
    // }
  }

  .bg-image {
    --width: 75rem;
    --aspect-ratio: 1.58371;

    user-select: none;
    pointer-events: none;
    position: absolute;
    width: var(--width);
    bottom: 0;
    right: 50%;
    transform: translateY(59%);
    z-index: -1;
  }

  @media (max-width: $screen-sm) {
    .bg-image {
      --width: 50rem;
    }
  }
}
</style>
