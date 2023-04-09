import { omit } from 'lodash';
import { storeToRefs } from 'pinia';
import { getSchema } from 'src/global/utils';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/stores/DialogStore';

const dialogStore = useDialogStore();
export const SignupScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.signup.1'),
    schema: getSchema(omit(UserCredsSchema, 'password')),
    onSubmit: (values) => {
      dialogStore.setUser(values);
      return new Promise((resolve) => resolve(true));
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).signupState,
  };
};
