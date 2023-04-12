import { storeToRefs } from 'pinia';
import { UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
export const PasswordScheme = (t: (arg: string) => string): DialogData => {
  return {
    title: t('pages.landing.header.auth.signup.2'),
    schema: [
      {
        label: 'password',
        name: 'password',
        rules: UserCredsSchema.password,
      },
      {
        label: 'password confirmation',
        name: 'password_confirmation',
        rules: UserCredsSchema.password,
      },
    ],
    onSubmit: (values, ctx) => {
      if (
        !values['password'] ||
        values['password'] !== values['password_confirmation']
      ) {
        ctx.setFieldError(
          'password_confirmation',
          'Passwords must be the same'
        );
        return new Promise((resolve) => resolve(false));
      }

      dialogStore.setPassword(values);
      return authStore.signup(dialogStore.userCreds);
    },
    btnLabel: t('pages.landing.header.next'),
    state: storeToRefs(dialogStore).signupState,
  };
};
