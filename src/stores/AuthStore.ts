import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types/State';
import { UserCreds } from 'src/model/UserCreds/UserCreds';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { LoginData } from 'src/model/loginData/LoginData';
import { AuthService } from 'src/service/AuthService';
import { ref } from 'vue';
import { useDialogStore } from '../pages/landing/header/store/DialogStore';

export const useAuthStore = defineStore('authStore', () => {
  const dialogStore = useDialogStore();

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
      return false;
    } else {
      localStorage.setItem('access_token', res.data.token);
      isAuth = true;
      dialogStore.loginState = 'success';
      return true;
    }
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
      return false;
    } else {
      localStorage.setItem('access_token', res.data.token);
      isAuth = true;
      dialogStore.signupState = 'success';
      return true;
    }
  };
  const restore = async (creds: Pick<UserCreds, 'email'>) => {
    dialogStore.restoreState = 'loading';
    const res = await AuthService.restore(creds);
    if ('error' in res) {
      dialogStore.restoreState = 'error';
      return false;
    } else {
      dialogStore.restoreState = 'success';
      return true;
    }
  };
  const signupConfirm = async (data: signupConfirmData) => {
    dialogStore.codeApproveState = 'loading';
    const res = await AuthService.signupConfirm(data);
    if ('error' in res) {
      dialogStore.codeApproveState = 'error';
      return false;
    } else {
      dialogStore.codeApproveState = 'success';
      return true;
    }
  };
  const changePassword = async (creds: LoginData) => {
    dialogStore.passwordState = 'loading';
    const res = await AuthService.сhangePassword(creds);
    const loginRes = await AuthService.login(creds);
    if ('error' in res || 'error' in loginRes) {
      dialogStore.passwordState = 'error';
      return false;
    } else {
      dialogStore.passwordState = 'success';
      return true;
    }
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
  };
});
