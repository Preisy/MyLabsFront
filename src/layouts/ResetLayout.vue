<script setup lang="ts">
import { User } from 'src/model/User/User';
import { RestoreScheme } from 'src/model/dialogs';
import DialogWrapper from 'src/pages/landing/header/ui/auth/DialogWrapper.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { CodeRestoreScheme } from 'src/model/dialogs/schemes/CodeRestoreScheme';
import { PasswordRestoreScheme } from 'src/model/dialogs/schemes/PasswordRestoreScheme';

const { t } = useI18n();
const dialog = ref<InstanceType<typeof DialogWrapper>>();
const dialogStore = useDialogStore();

let resetDialogData: DialogData[] = [
  PasswordRestoreScheme(t),
  CodeRestoreScheme(t),
];
onMounted(() => {
  dialog.value?.open();
  const email = useRoute().query as Pick<User, 'email'>;
  dialogStore.setEmail(email);
});
</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-page-container class="no-padding">
      <DialogWrapper :dialogs="resetDialogData" ref="dialog" />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
