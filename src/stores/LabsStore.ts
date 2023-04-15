import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { LabsService } from 'src/service/LabsService';
import { LabModel } from 'src/pages/user/work/ui/Card';

export const useLabsStore = defineStore('labsStore', () => {
  const getLabsState = ref<SimpleState>('unset');
  const sendLabState = ref<SimpleState>('unset');

  const labsList = ref<LabModel[]>();

  const getLabs = async () => {
    getLabsState.value = 'loading';
    const res = await LabsService.getLabs();
    if ('error' in res) {
      getLabsState.value = 'error';
    } else {
      getLabsState.value = 'success';

      labsList.value = res
    }

    return res;
  };

  const sendNewLab = async (card: Omit<LabModel, 'priority'>) => {
    sendLabState.value = 'loading';
    const res = await LabsService.sendNewLab(card);
    if ('error' in res) {
      sendLabState.value = 'error';
    } else {
      sendLabState.value = 'success';
    }

    return res;
  }

  return {
    getLabsState,
    getLabs,
    sendNewLab
  };
});
