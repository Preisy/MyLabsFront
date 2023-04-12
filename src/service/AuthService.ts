/* eslint-disable @typescript-eslint/no-unused-vars */
import { $api } from 'src/boot/axios';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { LoginData } from 'src/model/loginData/LoginData';
import { Token } from 'src/model/Token/Token';
import { User } from 'src/model/User/User';
import { UserCreds } from 'src/model/UserCreds/UserCreds';

export const AuthService = {
  async login(creds: LoginData) {
    try {
      console.log(creds);
      const response = await $api.post('/login', creds);
      console.log(response.data);

      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async signup(creds: UserCreds) {
    try {
      const response = await $api.post('/signup', creds);
      console.log(response.data);

      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async signupConfirm(data: signupConfirmData) {
    try {
      const response = await $api.post('/signup/confirm', data);
      console.log(response.data);

      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async restore(data: Pick<UserCreds, 'email'>) {
    try {
      const response = await new Promise<{ data: { result: string } }>(
        (resolve) => {
          setTimeout(() => {
            resolve({
              data: { result: 'confirm' },
            });
          }, 1000);
        }
      );
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async сhangePassword(data: LoginData) {
    try {
      const response = await new Promise<{ data: { result: string } }>(
        (resolve) => {
          setTimeout(() => {
            resolve({
              data: { result: 'confirm' },
            });
          }, 1000);
        }
      );
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
