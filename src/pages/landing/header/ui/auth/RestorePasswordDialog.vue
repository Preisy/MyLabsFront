<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from 'src/components/AModalDialog.vue';
import { DialogData } from './types';
import { RestoreScheme } from 'src/model/dialogs/schemes';
import { useI18n } from 'vue-i18n';
import { CodeRestoreScheme } from 'src/model/dialogs/schemes/CodeRestoreScheme';
import { PasswordRestoreScheme } from 'src/model/dialogs/schemes/PasswordRestoreScheme';
import { Router } from 'src/router';

const { t } = useI18n();

let dialog = ref<InstanceType<typeof DialogWrapper>>();
defineExpose({
  open: () => dialog.value?.open(),
});

const signupDialogData: DialogData[] = [
  RestoreScheme(t),
  CodeRestoreScheme(t),
  PasswordRestoreScheme(t),
];

const onComplete = () => {
  Router.push({ path: '/mpc/tasks' }).then(() => window.location.reload());
};
</script>

<template>
  <DialogWrapper
    :dialogs="signupDialogData"
    ref="dialog"
    :on-complete="onComplete"
  />
</template>

<style scoped lang="scss"></style>
