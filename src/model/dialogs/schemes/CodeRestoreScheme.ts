import { storeToRefs } from 'pinia';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import * as yup from 'yup';
import { unifiedApiPromise } from 'src/model/response/unifiedApiResponse';
import { createErrorResponse } from 'src/model/response/responseGenerators';
import changePasswordData from 'src/model/changePassword/changePasswordData';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
export const CodeRestoreScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.signup.3'),
    schema: [
      {
        label: 'secret code',
        name: 'secret code',
        rules: yup
          .number()
          .min(1000)
          .max(9999)
          .typeError('Input must be 4-digit number')
          .required(),
      },
    ],
    onSubmit: (values) => {
      const code = values['secret code'];
      if (!code) return createErrorResponse('No secret code present');

      const changeData: changePasswordData = {
        code: code as string,
        email: dialogStore.userCreds.email,
        newPassword: dialogStore.userCreds.password
      };
      console.log(changeData);

      return authStore.changePassword(changeData) as unifiedApiPromise;
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).codeApproveState,
  };
};
