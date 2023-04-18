import { $api } from 'src/boot/axios';

export interface LabsQuantityResponse {
  property: string;
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
