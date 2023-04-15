import { omit } from 'lodash';
import { storeToRefs } from 'pinia';
import { getSchema } from 'src/global/utils';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { createSuccessResponse } from 'src/model/response/responseGenerators';

const dialogStore = useDialogStore();
export const SignupScheme = (t: (arg: string) => string): DialogData => ({
  title: t('pages.landing.header.auth.signup.1'),
  schema: getSchema(omit(UserCredsSchema, 'password')),
  onSubmit: (values) => {
    dialogStore.setUser(values);
    return createSuccessResponse('success');
  },
  btnLabel: t('pages.landing.header.next'),
  state: storeToRefs(dialogStore).signupState,
});
