import { storeToRefs } from 'pinia';
import { signupConfirmData } from 'src/model/signupConfirmData/signupConfirmData';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import * as yup from 'yup';
import { UnifiedApiPromise } from 'src/global/types/unifiedApiResponse';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createErrorResponse, createSuccessResponse } from 'src/global/utils/responseGenerators';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
export const CodeScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.signup.3'),
    schema: [
      {
        label: 'secret code',
        name: 'secret code',
        rules: yup
          .number()
          .test('maxLenght', 'Max 4', val => val ? !isNaN(val) && `${val}`.length <= 4 : false)
          .min(1000)
          .max(9999)
          .typeError('Input must be 4-digit number')
          .required(),
      },
    ],
    onSubmit: (values) => {
      const code = values['secret code'];
      if (!code) return createErrorResponse('No secret code present');

      const codeCheckData: signupConfirmData = {
        code: code as string,
        email: dialogStore.userCreds.email,
      };

      return authStore.signupConfirm(codeCheckData) as UnifiedApiPromise;
      // return createSuccessResponse('Good'); //for tests
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).codeApproveState,
  };
};
