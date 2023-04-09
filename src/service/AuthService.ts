/* eslint-disable @typescript-eslint/no-unused-vars */

import { $api, baseURL } from 'src/http';
import { CodeCheckData } from 'src/model/codeCheckData/codeCheckData';
import { LoginData } from 'src/model/loginData/LoginData';
import { Token } from 'src/model/Token/Token';
import { User } from 'src/model/User/User';
import { UserCreds } from 'src/model/UserCreds/UserCreds';

export const AuthService = {
  async login(creds: LoginData) {
    try {
      // const response = await $api.post(baseURL + '/login', creds);
      // console.log(response.data);
      const response = await new Promise<{ data: Token }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: { token: 'asdsf' },
          });
        }, 1000);
        //   /// fetch(URL, creds);
      });

      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async signup(creds: UserCreds) {
    try {
      const response = await new Promise<{ data: Token }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: { token: 'asdsf' },
          });
        }, 1000);
      });
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async checkCode(data: CodeCheckData) {
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
  async changeCreds(data: User) {
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
