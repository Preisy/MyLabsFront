import { $api } from 'src/boot/axios';
import changePasswordData from 'src/model/changePassword/changePasswordData';

export interface FileData {
    filename: string,
    createdAt: string,
    id: number
}

export const RestoreService = {
    async forgetPassword(data: Pick<changePasswordData, 'email'>) {
        try {
            const response = await $api.post('/password/forget', data);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async resetPassword(data: changePasswordData) {
        try {
            const response = await $api.post('/password/reset', data);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}