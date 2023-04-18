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
}