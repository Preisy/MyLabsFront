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

export interface ChangeData {
  code: string,
  newPassword: string,
  email: string
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
      const formdata = new FormData();
      formdata.append('file', photo);
      const response = await $api.post('/me/photo', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async changePassword(changeData: ChangeData) {
    try {
      const response = await $api.post('/password/reset', changeData);
      return response;
    } catch (e: unknown) {
      return { error: e };
    }
  },
  async getPhoto() {
    try {
      const response = await $api.get('/me/photo', { responseType: 'arraybuffer' });

      const imageData = response.data;
      const imageBlob = new Blob([imageData], { type: 'image/jpeg' });
      const imageUrlObject = URL.createObjectURL(imageBlob);

      return { image: imageUrlObject };
    } catch (e: unknown) {
      return { error: e };
    }
  },
};
