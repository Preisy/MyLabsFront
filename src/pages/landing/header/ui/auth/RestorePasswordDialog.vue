<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import { DialogData } from './types';
import { RestoreScheme } from 'src/model/dialogs';
import { useI18n } from 'vue-i18n';
import { CodeRestoreScheme } from 'src/model/dialogs/schemes/CodeRestoreScheme';
import { PasswordRestoreScheme } from 'src/model/dialogs/schemes/PasswordRestoreScheme';

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
</script>

<template>
  <DialogWrapper :dialogs="signupDialogData" ref="dialog" />
</template>

<style scoped lang="scss"></style>
