import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { ReviewsService } from '../service/ReviewsService';

export const useReviewsStore = defineStore('reviewsStore', () => {
  const reviewsState = ref<SimpleState>('unset');

  const getReviews = async () => {
    reviewsState.value = 'loading';
    const res = await ReviewsService.getReviews();
    if ('error' in res) {
      reviewsState.value = 'error';
    } else {
      reviewsState.value = 'success';
    }

    return res;
  };

  return {
    reviewsState,
    getReviews,
  };
});
