import { $api } from 'src/boot/axios';
import { User } from 'src/model/User/User';

export interface Photo {
  filename: string,
  createdAt: string,
  id: number
}

export interface ProfileResponse {
  uname: string,
  email: string,
  contact: string,
  id: number,
  balance: number,
  invitedUsers: [],
  invitedById: null,
  photo: Photo
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
  async setProfilePhoto(photo: File) {
    try {
      const response = await $api.post('/me/photo', photo);
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
