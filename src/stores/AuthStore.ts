import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types/State';
import { UserCreds } from 'src/model/UserCreds/UserCreds';
import { LoginData } from 'src/model/loginData/LoginData';
import { AuthService } from 'src/service/AuthService';

export const useAuthStore = defineStore('authStore', () => {
  let isAuth = !!localStorage.getItem('access_token');
  let state: SimpleState = 'unset';

  const login = async (data: LoginData) => {
    state = 'loading';
    const res = await AuthService.login(data);
    if ('error' in res) {
      isAuth = false;
      state = 'error';
    } else {
      localStorage.setItem('access_token', res.data.token);
      isAuth = true;
      state = 'success';
    }
  };
  const logout = () => {
    localStorage.removeItem('access_token');
    isAuth = false;
    state = 'success';
  };
  const signup = async (creds: UserCreds) => {
    state = 'loading';
    const res = await AuthService.signup(creds);
    if ('error' in res) {
      isAuth = false;
      state = 'error';
    } else {
      localStorage.setItem('access_token', res.data.token);
      isAuth = true;
      state = 'success';
    }
  };

  return {
    isAuth,
    state,
    login,
    logout,
    signup,
  };
});
