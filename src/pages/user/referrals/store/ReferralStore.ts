import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { ReferralService } from '../service/ReferralService';

export const useReferralStore = defineStore('referralStore', () => {
    const referralState = ref<SimpleState>('unset');

    const getReferrals = async (id: number) => {
        const res = await ReferralService.getReferrals(id);
        console.log(res);
        if ('error' in res) {
            referralState.value = 'error';
        } else {
            referralState.value = 'success';
        }

        return res;
    }

    return {
        referralState,
        getReferrals,
    }
})