import { storeToRefs } from 'pinia';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { unifiedApiPromise } from 'src/model/response/unifiedApiResponse';
import { createErrorResponse } from 'src/model/response/responseGenerators';
import { useUserStore } from 'src/stores/UserStore';
import * as yup from 'yup';

const userStore = useUserStore();
export const ChangePasswordSchema = (t: (arg: string) => string): DialogData => {
    return {
        title: t('pages.user.settings.dialogs.password.title'),
        schema: [
            {
                label: 'password',
                name: 'password',
                rules: UserCredsSchema.password,
                type: 'password'
            },
            {
                label: 'password confirmation',
                name: 'password_confirmation',
                rules: UserCredsSchema.password,
                type: 'password'
            },
            {
                label: 'code',
                name: 'code',
                rules: yup
                    .number()
                    .min(1000)
                    .max(9999)
                    .typeError('Input must be 4-digit number')
                    .required(),
            }
        ],
        onSubmit: (values, ctx) => {
            if (
                !values['password'] ||
                values['password'] !== values['password_confirmation']
            ) {
                ctx.setFieldError(
                    'password_confirmation',
                    'Passwords must be the same'
                );
                return createErrorResponse('Password mismatch');
            }


            userStore.changePasswordData.code = values['code'] as string;
            userStore.changePasswordData.newPassword = values['password'] as string;

            return userStore.changePassword(userStore.changePasswordData) as unifiedApiPromise;
        },
        btnLabel: t('pages.user.settings.dialogs.password.btn'),
        state: storeToRefs(userStore).changePasswordState,
    };
};
