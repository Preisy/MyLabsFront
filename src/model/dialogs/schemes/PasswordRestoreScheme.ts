import { storeToRefs } from 'pinia';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { UnifiedApiPromise } from 'src/global/types/unifiedApiResponse';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createErrorResponse, createSuccessResponse } from 'src/global/utils/responseGenerators';
import { useResetStore } from 'src/stores/ResetStore';

const resetStore = useResetStore();
export const PasswordRestoreScheme = (
  t: (arg: string) => string
): DialogData => ({
  title: t('pages.landing.header.auth.signup.2'),
  schema: [
    {
      label: 'password',
      name: 'password',
      rules: UserCredsSchema.password,
      type: 'password',
    },
    {
      label: 'password confirmation',
      name: 'password_confirmation',
      rules: UserCredsSchema.password,
      type: 'password',
    },
  ],
  onSubmit: (values, ctx) => {
    if (
      !values['password'] ||
      values['password'] !== values['password_confirmation']
    ) {
      ctx.setFieldError('password_confirmation', 'Passwords must be the same');
      return createErrorResponse('Password mismatch');
    }

    const newPassword = {
      newPassword: values['password'],
    };

    resetStore.setPassword(newPassword);
    if (resetStore.changeData.code)
      return resetStore.resetPassword(resetStore.changeData) as UnifiedApiPromise;
    else
      return createSuccessResponse('Good');
  },
  btnLabel: t('pages.landing.header.next'),
  state: storeToRefs(resetStore).resetState,
});
