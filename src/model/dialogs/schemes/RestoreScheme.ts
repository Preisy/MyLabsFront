import { pick } from 'lodash';
import { storeToRefs } from 'pinia';
import { getSchema } from 'src/global/utils';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { useResetStore } from 'src/stores/ResetStore';
import { unifiedApiPromise } from 'src/global/types/unifiedApiResponse';

const dialogStore = useDialogStore();
const resetStore = useResetStore();

export const RestoreScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.login.restore.1'),
    schema: getSchema(pick(UserCredsSchema, 'email')),
    onSubmit: (values) => {
      resetStore.setEmail(values);
      return resetStore.forgetPassword(resetStore.changeData) as unifiedApiPromise;
    },
    btnLabel: t('pages.landing.header.login'),
    state: storeToRefs(dialogStore).restoreState,
  };
};
