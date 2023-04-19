import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { User } from 'src/model/User/User';
import { ref } from 'vue';
import { ChangeData, UserService } from '../service/UserService';

export const useUserStore = defineStore('userStore', () => {
  const changeCredsState = ref<SimpleState>('unset');
  const getCredsState = ref<SimpleState>('unset');
  const setPhotoState = ref<SimpleState>('unset');
  const getPhotoState = ref<SimpleState>('unset');
  const changePasswordState = ref<SimpleState>('unset');

  const userData = ref<User>();
  const changePasswordData = ref<ChangeData>({
    code: '',
    email: '',
    newPassword: ''
  });
  const userPhotoUrl = ref<string>();

  const changeCreds = async (creds: User) => {
    changeCredsState.value = 'loading';
    const res = await UserService.changeCreds(creds);
    if ('error' in res) {
      changeCredsState.value = 'error';
    } else {
      changeCredsState.value = 'success';
      userData.value = creds
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
      userData.value = { name: res.uname, ...res };
    }

    return res;
  };

  const setProfilePhoto = async (photo: File) => {
    setPhotoState.value = 'loading';
    const res = await UserService.setProfilePhoto(photo);
    if ('error' in res) {
      setPhotoState.value = 'error';
    } else {
      setPhotoState.value = 'success';
      getPhoto();
    }

    return res;
  };

  const changePassword = async (changeData: ChangeData) => {
    changePasswordState.value = 'loading';
    const res = await UserService.changePassword(changeData);
    if ('error' in res) {
      changePasswordState.value = 'error';
    } else {
      changePasswordState.value = 'success';
    }

    return res;
  }

  const getPhoto = async () => {
    getPhotoState.value = 'loading';
    const res = await UserService.getPhoto();
    if ('error' in res) {
      getPhotoState.value = 'error';
    } else {
      getPhotoState.value = 'success';
      userPhotoUrl.value = res.image;
    }

    return res;
  }

  return {
    changeCreds,
    getCreds,
    changeCredsState,
    getCredsState,
    setProfilePhoto,
    userData,
    changePasswordState,
    changePassword,
    changePasswordData,
    getPhoto,
    userPhotoUrl
  };
});
