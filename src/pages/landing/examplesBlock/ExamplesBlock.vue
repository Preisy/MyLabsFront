<script setup lang="ts">
import ExamplesCardComponent from './ui/ExamplesCardComponent.vue';
import SlideComponent from './ui/CarouselSlide.vue';
import { computed, onMounted, ref } from 'vue';
import Card, { CardType } from './cards';
import ACarousel from 'src/components/ACarousel.vue';
import { Screen } from 'quasar';
import { chunk } from 'lodash';
import { useExamplesStore } from './store/ExamplesStore';

const slider_index = ref('0');

const cardsInOneSlide = computed(() => {
  // console.log(Screen.width);
  if (Screen.lt.sm) return 1;

  if (Screen.width <= 900) return 3;

  return 6;
});

const slides = ref<Card[]>();

const _slides = computed(() => {
  // let result = [];
  // const slidesCount = slides.length / cardsInOneSlide.value;

  // for (let slide_i = 0; slide_i < slidesCount; slide_i++) {
  //   const slide = [];
  //   for (let card_i = 0; card_i < cardsInOneSlide.value; card_i++)
  //     slide.push(slides[slide_i * cardsInOneSlide.value + card_i]);

  //   result.push(slide);
  // }

  // return result;
  if (!slides.value) return;
  return chunk(slides.value, cardsInOneSlide.value);
});

const toIconImg = (c: CardType) => {
  switch (c) {
    case 'Cpp':
      return 'src/assets/examples/cpp.png';
    case 'C':
      return 'src/assets/examples/c_lang.png';
    case 'Python':
      return 'src/assets/examples/python_lang.png';
    case 'C#':
      return 'src/assets/examples/cs_lang.png';
  }
};

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
        >
          <ExamplesCardComponent
            v-for="(card, index) in slide"
            :key="index"
            :img-src="toIconImg(card.type)"
            :title="card.title"
            :time="card.duration.toString()"
            :price="card.price.toString()"
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

  .structure {
    padding-bottom: 5rem;
  }

  .content-wrapper {
    .title {
      margin-bottom: 3.5rem;
    }
  }

  .bg-image {
    --width: 75rem;
    --aspect-ratio: 1.58371;

    user-select: none;
    position: absolute;
    width: var(--width);
    bottom: 0;
    right: 50%;
    transform: translateY(59%);
    z-index: -1;
    user-select: none;
  }

  @media (max-width: $screen-sm) {
    .bg-image {
      --width: 50rem;
    }
  }
}
</style>

<style lang="scss">
.examples {
  .slider-wrapper {
    .q-panel-parent {
      overflow: unset;
    }
    .scroll {
      overflow: unset;
    }
  }
}
</style>
