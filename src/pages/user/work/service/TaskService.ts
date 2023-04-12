import { $api } from 'src/boot/axios';
import { CardModel } from '../ui/Card';

export const TaskService = {
  async getTasks() {
    try {
      const { data } = await $api.get<CardModel[]>('/users/labs');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
