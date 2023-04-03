<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import { UserCredsSchema } from 'src/model/userCreds';
import { DialogData } from './types';
import { omit } from 'lodash';
import * as yup from 'yup';
import { getSchema } from 'src/global/utils';
import { useI18n } from 'vue-i18n';


let dialog = ref<InstanceType<typeof DialogWrapper>>();
defineExpose({
  open: () => dialog.value?.open(),
});
const { t } = useI18n();

const signupDialogData: DialogData[] = [
  {
    title: t('pages.landing.header.auth.signup.1'),
    schema: getSchema(omit(UserCredsSchema, 'password')),
    onSubmit: () => true,
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
        ctx.setFieldError('password_confirmation', 'Passwords must be the same');
        return false;
      }
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
    onSubmit: () => {
      return true;
    },
  },
];
</script>

<template>
  <DialogWrapper :dialogs="signupDialogData" ref="dialog" />
</template>

<style scoped lang="scss"></style>
