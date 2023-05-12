import { storeToRefs } from 'pinia';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { createSuccessResponse } from 'src/global/utils/responseGenerators';
import * as yup from 'yup'

const dialogStore = useDialogStore();
export const SignupScheme = (t: (arg: string) => string): DialogData => ({
  title: t('pages.landing.header.auth.signup.1'),
  schema:
    [
      {
        label: 'Name',
        name: 'name',
        rules: yup.string().required(),
        placeholder: 'Ivan Ivanov'
      },
      {
        label: 'Email',
        name: 'email',
        rules: yup.string().email().required().label('Email'),
        placeholder: 'ivan1234@gmail.com'
      },
      {
        label: 'Contact',
        name: 'contact',
        rules: yup.string().required().label('Contact'),
        placeholder: 'tg: @ivantg'
      },
    ],
  onSubmit: (values) => {
    dialogStore.setUser(values);
    return createSuccessResponse('success');
  },
  btnLabel: t('pages.landing.header.next'),
  state: storeToRefs(dialogStore).signupState,
});
