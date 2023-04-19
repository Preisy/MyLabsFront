import { $api } from 'src/boot/axios';
import { FriendCardModel } from '../ui/FriendCardModel';

export const ReferralService = {
    async getReferrals(id: number) {
        try {
            const { data } = await $api.get<FriendCardModel[]>(`/users/${id}/invited`);
            return data;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async getFriendPhoto(id: number) {
        try {
            const response = await $api.get(`/users/${id}/photo`);

            const imageData = response.data;
            const imageBlob = new Blob([imageData], { type: 'image/jpeg' });
            const imageUrlObject = URL.createObjectURL(imageBlob);

            return { photo: imageUrlObject };
        } catch (e: unknown) {
            return { error: e };
        }
    },
}