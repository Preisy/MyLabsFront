import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types/State';
import { UserCreds } from 'src/model/UserCreds/UserCreds';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { LoginData } from 'src/model/loginData/LoginData';
import { AuthService } from 'src/service/AuthService';
import { ref } from 'vue';
import { useDialogStore } from '../pages/landing/header/store/DialogStore';
import changePasswordData from 'src/model/changePassword/changePasswordData';

export const logoutFunc = () => {
  useAuthStore().logout();
}

export const useAuthStore = defineStore('authStore', () => {
  const dialogStore = useDialogStore();
  const invitedById = ref<string>()

  let isAuth = !!localStorage.getItem('access_token');
  const state = ref<SimpleState>('unset');

  const checkAuth = () => localStorage.getItem('access_token') && isAuth;

  const login = async (data: LoginData) => {
    dialogStore.loginState = 'loading';
    const res = await AuthService.login(data);
    console.log(res);
    if ('error' in res) {
      isAuth = false;
      dialogStore.loginState = 'error';
      // return false;
    } else {
      localStorage.setItem('access_token', res.token);
      isAuth = true;
      dialogStore.loginState = 'success';
      // return true;
    }

    return res;
  };
  const logout = () => {
    localStorage.removeItem('access_token');
    isAuth = false;
    dialogStore.logoutState = 'success';
    return true;
  };
  const signup = async (creds: UserCreds) => {
    dialogStore.signupState = 'loading';
    const res = await AuthService.signup(creds);
    if ('error' in res) {
      isAuth = false;
      dialogStore.signupState = 'error';
    } else {
      isAuth = true;
      dialogStore.signupState = 'success';
    }

    return res;
  };
  const restore = async (creds: Pick<UserCreds, 'email'>) => {
    dialogStore.restoreState = 'loading';
    const res = await AuthService.restore(creds);
    if ('error' in res) {
      dialogStore.restoreState = 'error';
    } else {
      dialogStore.restoreState = 'success';
    }

    return res;
  };
  const signupConfirm = async (data: signupConfirmData) => {
    dialogStore.codeApproveState = 'loading';
    const res = await AuthService.signupConfirm(data);
    if ('error' in res) {
      dialogStore.codeApproveState = 'error';
    } else {
      localStorage.setItem('access_token', res.token);
      dialogStore.codeApproveState = 'success';
    }

    return res;
  };
  const changePassword = async (creds: changePasswordData) => {
    dialogStore.passwordState = 'loading';
    const res = await AuthService.сhangePassword(creds);
    const loginCreds: LoginData = {
      email: creds.email,
      password: creds.newPassword
    }
    const loginRes = await AuthService.login(loginCreds);
    if ('error' in res || 'error' in loginRes) {
      dialogStore.passwordState = 'error';
    } else {
      dialogStore.passwordState = 'success';
    }

    return res;
  };

  return {
    isAuth,
    state,
    login,
    logout,
    signup,
    signupConfirm,
    checkAuth,
    restore,
    changePassword,
    invitedById
  };
});
