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

  const userCreds = ref<UserCreds>({
    name: '',
    contact: '',
    email: '',
    password: '',
  });

  const setEmail = (data: Record<string, unknown>) => {
    const _data = data as unknown as Pick<User, 'email'>;
    if (!_data.email) console.warn('No email in data');

    userCreds.value.email = _data.email;
  };

  const setName = (data: Record<string, unknown>) => {
    const _data = data as unknown as Pick<User, 'name'>;
    if (!_data.name) console.warn('No "name" in data');

    userCreds.value.name = _data.name;
  };

  const setContact = (data: Record<string, unknown>) => {
    const _data = data as unknown as Pick<User, 'contact'>;
    if (!_data.contact) console.warn('No contacts in data');

    userCreds.value.contact = _data.contact;
  };

  const setUser = (data: Record<string, unknown>) => {
    const _data = data as unknown as User;

    if (!_data.email || !_data.contact || !_data.name)
      console.warn(`Not enough data: ${_data}`);

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
    userCreds,
    setUser,
    setPassword,
    setEmail,
    setName,
    setContact,
  };
});
