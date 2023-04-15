import { $api } from 'src/boot/axios';
import { User } from 'src/model/User/User';

export interface ProfileResponse {
  uname: string,
  contact: string,
  email: string,
  id: number,
  roles: string[]
}


export const UserService = {
  async changeCreds(data: User) {
    try {
      const response = await $api.put('/me', data);
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async getCreds() {
    try {
      const { data } = await $api.get<ProfileResponse>('/me');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
