import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { CounterService } from '../service/CounterService';

export const useCounterStore = defineStore('counterStore', () => {
  const labsQuantityState = ref<SimpleState>('unset');

  const getLabsQuantity = async () => {
    labsQuantityState.value = 'loading';
    const res = await CounterService.getLabsQuantity();

    if ('error' in res) {
      labsQuantityState.value = 'error';
    } else {
      labsQuantityState.value = 'success';
    }

    return res;
  };

  return {
    labsQuantityState,
    getLabsQuantity,
  };
});
