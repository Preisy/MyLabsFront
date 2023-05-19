import { $api } from 'src/boot/axios';
import { LabModel } from '../pages/user/work/ui/Card';
import { omit } from 'lodash';

export const LabsService = {
  async getLabs() {
    try {
      const { data } = await $api.get<LabModel[]>('/labs');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async sendNewLab(card: Omit<LabModel, 'priority'>) {
    try {
      //Returns new created lab
      const { data } = await $api.post<LabModel>('/users/labs', omit(card, 'priority'));
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  }
};
