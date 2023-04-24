import { pick } from 'lodash';
import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { User } from 'src/model/User/User';
import changePasswordData from 'src/model/changePassword/changePasswordData';
import { RestoreService } from 'src/service/ResetService';
import { ref } from 'vue';

export const useResetStore = defineStore('resetStore', () => {
    const forgetState = ref<SimpleState>('unset');
    const resetState = ref<SimpleState>('unset');

    const changeData = ref<changePasswordData>({
        code: '',
        newPassword: '',
        email: '',
    });

    const setEmail = (data: Record<string, unknown>) => {
        const _data = data as unknown as Pick<User, 'email'>;
        if (!_data.email) console.warn('No email in data');

        changeData.value.email = _data.email;
    };

    const setPassword = (data: Record<string, unknown>) => {
        changeData.value.newPassword = (
            data as unknown as Pick<changePasswordData, 'newPassword'>
        ).newPassword;
    };

    const setCode = (data: Record<string, unknown>) => {
        changeData.value.code = (
            data as unknown as Pick<changePasswordData, 'code'>
        ).code;
    };

    const forgetPassword = async (email: Pick<changePasswordData, 'email'>) => {
        setEmail(email);
        const res = await RestoreService.forgetPassword(pick(changeData.value, 'email'));
        if ('error' in res) {
            forgetState.value = 'error';
        } else {
            forgetState.value = 'success';
        }

        return res;
    }

    const resetPassword = async (data: changePasswordData) => {
        changeData.value = data;
        const res = await RestoreService.resetPassword(changeData.value);
        if ('error' in res) {
            resetState.value = 'error';
        } else {
            resetState.value = 'success';
        }

        return res;
    }

    return {
        forgetState,
        setEmail,
        setPassword,
        setCode,
        forgetPassword,
        resetPassword,
        changeData,
        resetState
    };
});
