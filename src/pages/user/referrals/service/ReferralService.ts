import { $api } from 'src/boot/axios';

export interface ReferralFriend {
    name: string,
    photo: string,
    profit: string
}
export const ReferralService = {
    async getReferrals() {
        try {
            //TODO: wait until referrals done
            const { data } = await $api.get<ReferralFriend[]>('/referrals');
            return data;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}