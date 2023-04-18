import { pick } from 'lodash';
import { storeToRefs } from 'pinia';
import { getSchema } from 'src/global/utils';
import { UserCreds, UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { createSuccessResponse } from 'src/model/response/responseGenerators';

const dialogStore = useDialogStore();
export const RestoreScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.login.restore.1'),
    schema: getSchema(pick(UserCredsSchema, 'email')),
    onSubmit: (values) => {
      dialogStore.setEmail(values);
      return createSuccessResponse('Goint to new password section');
    },
    btnLabel: t('pages.landing.header.login'),
    state: storeToRefs(dialogStore).restoreState,
  };
};
