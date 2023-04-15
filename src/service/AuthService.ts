/* eslint-disable @typescript-eslint/no-unused-vars */
import { $api } from 'src/boot/axios';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { LoginData } from 'src/model/loginData/LoginData';
import { Token } from 'src/model/Token/Token';
import { User } from 'src/model/User/User';
import { UserCreds } from 'src/model/UserCreds/UserCreds';
import changePasswordData from 'src/model/changePassword/changePasswordData';

export interface LoginResponse {
  token: string
}

export interface SignupResponse {
  status: string;
  message: string;
}

export interface SignupConfirmResponse {
  token: string;
}

export const AuthService = {
  async login(creds: LoginData) {
    try {
      console.log(creds);
      const { data } = await $api.post<LoginResponse>('/login', creds);
      console.log(data);

      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async signup(creds: UserCreds) {
    try {
      const { data } = await $api.post<SignupResponse>('/signup', creds);
      console.log(data);

      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async signupConfirm(signData: signupConfirmData) {
    try {
      const { data } = await $api.post<SignupConfirmResponse>('/signup/confirm', signData);
      console.log(data);

      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async restore(data: Pick<UserCreds, 'email'>) {
    try {
      //Todo: why unauthorized?
      const response = await $api.post('/password/forget', data);
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async сhangePassword(data: changePasswordData) {
    try {
      const response = await $api.post('/password/reset', data);
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
