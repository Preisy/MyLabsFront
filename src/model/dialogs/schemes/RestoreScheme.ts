import { pick } from 'lodash';
import { storeToRefs } from 'pinia';
import { getSchema } from 'src/global/utils';
import { UserCreds, UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/stores/DialogStore';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
export const RestoreScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.login.restore.1'),
    schema: getSchema(pick(UserCredsSchema, 'email')),
    onSubmit: (values) => {
      return authStore.restore(values as unknown as Pick<UserCreds, 'email'>);
    },
    btnLabel: t('pages.landing.header.login'),
    state: storeToRefs(dialogStore).restoreState,
  };
};
