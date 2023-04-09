import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { User } from 'src/model/User/User';
import { UserCreds } from 'src/model/UserCreds';
import { ref } from 'vue';

export const useDialogStore = defineStore('dialogStore', () => {
  const loginState = ref<SimpleState>('unset');
  const logoutState = ref<SimpleState>('unset');
  const signupState = ref<SimpleState>('unset');
  const codeApproveState = ref<SimpleState>('unset');
  const passwordState = ref<SimpleState>('unset');
  const restoreState = ref<SimpleState>('unset');
  const changeCredsState = ref<SimpleState>('unset');

  const userCreds = ref<UserCreds>({
    name: '',
    contact: '',
    email: '',
    password: '',
  });

  const setUser = (data: Record<string, unknown>) => {
    const _data = data as unknown as User;
    userCreds.value.email = _data.email;
    userCreds.value.contact = _data.contact;
    userCreds.value.name = _data.name;
  };
  const setPassword = (data: Record<string, unknown>) => {
    userCreds.value.password = (
      data as unknown as Pick<UserCreds, 'password'>
    ).password;
  };

  return {
    loginState,
    logoutState,
    signupState,
    restoreState,
    codeApproveState,
    passwordState,
    changeCredsState,
    userCreds,
    setUser,
    setPassword,
  };
});
