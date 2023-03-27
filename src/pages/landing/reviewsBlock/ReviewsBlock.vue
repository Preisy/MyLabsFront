<script setup lang="ts">
import CarouselSlide from './ui/CarouselSlide.vue';
import { ref } from 'vue';
import ReviewCard from './ui/ReviewCard.vue';

import { slides } from './cards';
import ACarousel from 'src/components/ACarousel.vue';

const carousel_val = ref('0');
</script>

<template>
  <div class="reviews">
    <div class="content-wrapper structure">
      <h1 class="title text-primary text-center">
        {{ $t('pages.landing.reviewsPage.title') }}
      </h1>
      <div class="slider-wrapper">
        <ACarousel v-model="carousel_val" :slides-count="slides.length">
          <CarouselSlide
            v-for="(slide, index) in slides"
            :key="index"
            :name="index.toString()"
          >
            <ReviewCard
              v-for="(card, index) in slide"
              :key="index"
              :class="{ pos_top: index % 2 === 0, pos_bottom: index % 2 === 1 }"
              :name="card.name"
              :details="card.details"
              :img-src="card.imgSrc"
            ></ReviewCard>
          </CarouselSlide>
        </ACarousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews {
  background: url('src/assets/digital_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3.5rem 0;
  .content-wrapper {
    .title {
      padding-bottom: 3.5rem;
    }

    .slider-wrapper {
      width: 50%;
      margin: 0 auto;

      .slider {
        background: transparent;
        height: auto;

        .pos_top {
          align-self: flex-start;
        }
        .pos_bottom {
          align-self: flex-end;
        }
      }
    }
  }
}
</style>
