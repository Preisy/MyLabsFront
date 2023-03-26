<script setup lang='ts'>
import ExamplesCardComponent from 'src/components/ExamplesCardComponent.vue';
import SlideComponent from 'components/ACarouselSlide.vue';
import { ref } from 'vue';
import { cards } from './cards';

const slider_index = ref('1');
</script>

<template>
  <div class='examples bg-base'>
    <div class='examples__wrapper structure'>
      <h2 class='title text-center'>Примеры работ</h2>
      <div class='slider__wrapper'>
        <q-carousel class='slider' :model-value='slider_index'>
          <SlideComponent name='1'>
            <ExamplesCardComponent
              v-for='(card, index) in cards'
              :key='index'
              :img-src='card.imgSrc'
              :title='card.title'
              :time='card.time'
              :price='card.price'
            ></ExamplesCardComponent>
          </SlideComponent>
        </q-carousel>
      </div>
    </div>
    <img class='bg-image' src='src/assets/man_on_chair_alt.png' alt='' />
  </div>
</template>

<style scoped lang='scss'>
.examples {
  position: relative;
  overflow: hidden;
  z-index: 1;

  .examples__wrapper {
    padding: 8rem 0;

    .title {
      margin-bottom: 3.5rem;
    }

    .slider {
      background-color: transparent;
      overflow: hidden;
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
