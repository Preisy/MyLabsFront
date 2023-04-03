/* eslint-disable @typescript-eslint/no-unused-vars */

import { LoginData } from 'src/model/loginData/LoginData';
import { Token } from 'src/model/Token/Token';
import { UserCreds } from 'src/model/UserCreds/UserCreds';

export const AuthService = {
  async login(creds: LoginData) {
    try {
      const response = await new Promise<{ data: Token }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: { token: 'asdsf' },
          });
        }, 500);

        /// fetch(URL, creds);
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
        }, 500);
      });
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
