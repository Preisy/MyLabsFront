import { storeToRefs } from 'pinia';
import { CodeCheckData } from 'src/model/codeCheckData/codeCheckData';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/stores/DialogStore';
import * as yup from 'yup';

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
          .min(1000)
          .max(9999)
          .typeError('Input must be 4-digit number')
          .required(),
      },
    ],
    onSubmit: (values) => {
      const code = values['secret code'];
      if (!code) return new Promise((resolve) => resolve(false));

      const codeCheckData: CodeCheckData = {
        code: code as string,
        email: dialogStore.userCreds.email,
      };
      return authStore.checkCode(codeCheckData);
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).codeApproveState,
  };
};
