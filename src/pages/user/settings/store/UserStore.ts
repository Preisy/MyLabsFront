import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { User } from 'src/model/User/User';
import { ref } from 'vue';
import { UserService } from '../service/UserService';

export const useUserStore = defineStore('userStore', () => {
  const changeCredsState = ref<SimpleState>('unset');
  const getCredsState = ref<SimpleState>('unset');

  const changeCreds = async (creds: User) => {
    changeCredsState.value = 'loading';
    const res = await UserService.changeCreds(creds);
    if ('error' in res) {
      changeCredsState.value = 'error';
    } else {
      changeCredsState.value = 'success';
    }

    return res;
  };

  const getCreds = async () => {
    getCredsState.value = 'loading';
    const res = await UserService.getCreds();
    if ('error' in res) {
      getCredsState.value = 'error';
    } else {
      getCredsState.value = 'success';
    }

    return res;
  };

  return {
    changeCreds,
    getCreds,
    changeCredsState,
    getCredsState,
  };
});
