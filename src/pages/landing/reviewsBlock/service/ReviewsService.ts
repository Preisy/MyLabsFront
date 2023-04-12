import { $api } from 'src/boot/axios';

export interface ReviewResponse {
  first_name: string;
  from_id: number;
  photo_200: string;
  second_name: string;
  text: string;
  userUrl: string;
}

export const ReviewsService = {
  async getReviews() {
    try {
      const { data } = await $api.get<ReviewResponse[]>('/reviews');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
