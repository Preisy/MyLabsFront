import { storeToRefs } from 'pinia';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import * as yup from 'yup';
import { createErrorResponse, createSuccessResponse } from 'src/model/response/responseGenerators';
import { useResetStore } from 'src/stores/ResetStore';


const dialogStore = useDialogStore();
const resetStore = useResetStore();

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

      resetStore.setCode({ code });

      return createSuccessResponse('Going to password');
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).codeApproveState,
  };
};
