<script setup lang="ts">
import CarouselSlide from './ui/CarouselSlide.vue';
import { computed, ref } from 'vue';
import ReviewCard from './ui/ReviewCard.vue';
import { slides } from './cards';
import ACarousel from 'src/components/ACarousel.vue';
import { Screen } from 'quasar';

const carousel_val = ref('0');

const _slides = computed(() => {
  let result = [];
  const cardsInOneSlide = isMobile.value ? 1 : 2;
  const slidesCount = slides.length / cardsInOneSlide;

  for (let slide_i = 0; slide_i < slidesCount; slide_i++) {
    const slide = [];
    for (let card_i = 0; card_i < cardsInOneSlide; card_i++)
      slide.push(slides[slide_i * cardsInOneSlide + card_i]);

    result.push(slide);
  }

  return result;
});

const isMobile = computed(() => Screen.lt.sm);
</script>

<template>
  <div class="reviews">
    <div class="content-wrapper structure">
      <h1 class="title text-primary text-center">
        {{ $t('pages.landing.reviewsPage.title') }}
      </h1>
      <div class="slider-wrapper">
        <ACarousel v-model="carousel_val" :slides-count="_slides.length">
          <CarouselSlide
            v-for="(slide, index) in _slides"
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
  padding-bottom: 5.5rem;
  margin: -2rem 0;

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

  @media (max-width: $screen-md-lg) {
    .content-wrapper {
      .slider-wrapper {
        width: 24rem;
      }
    }
  }

  @media (max-width: $screen-sm) {
    padding-top: 6rem;
    padding-bottom: 5.5rem;

    .content-wrapper {
      .title {
        padding: 0;
        margin-bottom: 2.5rem;
        line-height: unset;
      }
      .slider-wrapper {
        width: 100%;
      }
    }
  }
}
</style>
