import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { ReferralService } from '../service/ReferralService';

export const useReferralStore = defineStore('referralStore', () => {
    const referralState = ref<SimpleState>('unset');
    const photoState = ref<SimpleState>('unset');

    const getReferrals = async (id: number) => {
        const res = await ReferralService.getReferrals(id);
        if ('error' in res) {
            referralState.value = 'error';
        } else {
            referralState.value = 'success';
        }

        return res;
    }

    const getFriendPhoto = async (id: number) => {
        const res = await ReferralService.getFriendPhoto(id);
        if ('error' in res) {
            photoState.value = 'error';
        } else {
            photoState.value = 'success';
        }

        return res;
    }


    return {
        referralState,
        getReferrals,
        getFriendPhoto
    }
})