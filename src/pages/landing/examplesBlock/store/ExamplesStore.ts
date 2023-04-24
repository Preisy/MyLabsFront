import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { ExamplesService } from '../service/ExamplesService';

export const useExamplesStore = defineStore('examplesStore', () => {
  const labsState = ref<SimpleState>('unset');

  const getLabs = async () => {
    labsState.value = 'loading';
    const res = await ExamplesService.getLabs();
    if ('error' in res) {
      labsState.value = 'error';
    } else {
      labsState.value = 'success';
    }

    return res;
  };

  return {
    labsState,
    getLabs,
  };
});
