import { $api } from 'src/boot/axios';

export interface LabsQuantityResponse {
  quantity: number;
}
export const CounterService = {
  async getLabsQuantity() {
    try {
      const { data } = await $api.get<LabsQuantityResponse>('/labs/quantity');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
