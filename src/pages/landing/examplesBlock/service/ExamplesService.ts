import { $api } from 'src/boot/axios';
import Card from '../cards';

export const ExamplesService = {
  async getLabs() {
    try {
      const { data } = await $api.get<Card[]>('/labs');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
