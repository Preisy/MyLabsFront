import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { TaskService } from '../service/TaskService';

export const useTaskStore = defineStore('taskStore', () => {
  const tasksState = ref<SimpleState>('unset');

  const getTasks = async () => {
    tasksState.value = 'loading';
    const res = await TaskService.getTasks();
    if ('error' in res) {
      tasksState.value = 'error';
    } else {
      tasksState.value = 'success';
    }

    return res;
  };

  return {
    tasksState,
    getTasks,
  };
});
