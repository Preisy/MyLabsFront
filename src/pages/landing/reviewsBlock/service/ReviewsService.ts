import { $api } from 'src/boot/axios';

export interface Attachment {
  type: string;
  photo: string;
}

export interface ReviewResponse {
  first_name: string;
  from_id: number;
  photo_200: string;
  last_name: string;
  text: string;
  commentUrl: string;
  attachments?: Array<Attachment>;
}

export const ReviewsService = {
  async getReviews() {
    try {
      const { data } = await $api.get<ReviewResponse[]>('/reviews');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  }
};
