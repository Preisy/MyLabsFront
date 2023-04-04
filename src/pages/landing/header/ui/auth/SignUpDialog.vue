<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import { UserCreds, UserCredsSchema } from 'src/model/UserCreds';
import { DialogData } from './types';
import { omit } from 'lodash';
import * as yup from 'yup';
import { getSchema } from 'src/global/utils';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from 'src/stores/AuthStore';
import { AuthService } from 'src/service/AuthService';

let dialog = ref<InstanceType<typeof DialogWrapper>>();
defineExpose({
  open: () => dialog.value?.open(),
});
const { t } = useI18n();

const signupData = ref<UserCreds>({
  email: '',
  name: '',
  contact: '',
  password: '',
});

const signupDialogData: DialogData[] = [
  {
    title: t('pages.landing.header.auth.signup.1'),
    schema: getSchema(omit(UserCredsSchema, 'password')),
    onSubmit: (values, ctx) => {
      const _values = values as Record<keyof UserCreds, string>;
      if (_values.contact || !_values.email || !_values.name) {
        debugger;
        return false;
      }

      signupData.value.email = _values.email;
      signupData.value.name = _values.name;
      signupData.value.contact = _values.contact;

      return true;
    },
  },
  {
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
        return false;
      }

      const password = (values as Record<keyof UserCreds, string>).password;
      if (!password) return false;

      //Todo: useAuthStore().askCode();

      return true;
    },
  },
  {
    title: t('pages.landing.header.auth.signup.3'),
    schema: [
      {
        label: 'secret code',
        name: 'secret code',
        rules: yup.string().required(),
      },
    ],
    onSubmit: (values) => {
      const code = values['code'];
      if (!code) return false;

      //useAuthStore().checkCode();

      return true;
    },
  },
];
</script>

<template>
  <DialogWrapper :dialogs="signupDialogData" ref="dialog" />
</template>

<style scoped lang="scss"></style>
