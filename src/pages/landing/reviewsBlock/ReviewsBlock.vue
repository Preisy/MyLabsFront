<script setup lang="ts">
import CarouselSlide from './ui/CarouselSlide.vue';
import { computed, onMounted, ref } from 'vue';
import ReviewCard from './ui/ReviewCard.vue';
import Review from './cards';
import ACarousel from 'src/components/ACarousel.vue';
import { Screen } from 'quasar';
import { chunk } from 'lodash';
import { useReviewsStore } from './store/ReviewsStore';
import lab from 'src/assets/Labs_square_icon.png';

const carousel_val = ref('0');

const isMobile = computed(() => Screen.lt.sm);

const reviews = ref<Review[]>();

const _slides = computed(() => {
  const cardsInOneSlide = isMobile.value ? 2 : 2;
  if (!reviews.value) return;
  return chunk(reviews.value, cardsInOneSlide);
});

const reviewsStore = useReviewsStore();
onMounted(async () => {
  const result: Review[] = [];
  const rawReviews = await reviewsStore.getReviews();

  if ('error' in rawReviews) return;

  rawReviews.forEach((record) => {
    const review: Review = {
      name: record.first_name + ' ' + record.last_name,
      details: record.text,
      imgSrc: record.photo_200,
      link: record.commentUrl,
      attachments: record.attachments ?? [{ type: 'photo', photo: lab }]
    };
    result.push(review);
  });
  reviews.value = result;
});
</script>

<template>
  <div id="reviews" class="reviews reviews-header-link">
    <div class="content-wrapper structure">
      <h1 class="title text-primary text-center">
        {{ $t('pages.landing.reviewsPage.title') }}
      </h1>
      <div class="slider-wrapper">
        <ACarousel
          class="review-slider"
          v-model="carousel_val"
          :slides-count="_slides?.length ?? 0"
        >
          <CarouselSlide
            v-for="(slide, index) in _slides"
            :key="index"
            :name="index.toString()"
          >
            <ReviewCard
              v-for="(card, index) in slide"
              :key="index"
              :name="card.name"
              :details="card.details"
              :img-src="card.imgSrc"
              :link="card.link"
              :attachments="card.attachments"
            ></ReviewCard>
          </CarouselSlide>
        </ACarousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews {
  background: url('assets/digital_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin: -2rem 0;

  .structure {
    padding: 5.5rem 0;
  }

  .content-wrapper {
    .title {
      padding-bottom: 3.5rem;
      margin: 0;
    }

    .slider-wrapper {
      width: 29rem;
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
      }
      .slider-wrapper {
        width: 22rem;
      }
    }
  }
}
</style>
