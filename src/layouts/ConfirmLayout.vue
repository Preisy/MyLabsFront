<script setup lang="ts">
import { User } from 'src/model/User/User';
import { CodeScheme } from 'src/model/dialogs/schemes';
import AModalDialog from 'src/components/AModalDialog.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { Router } from 'src/router';

const { t } = useI18n();
const dialog = ref<InstanceType<typeof AModalDialog>>();
const dialogStore = useDialogStore();

let signupDialogData: DialogData[] = [CodeScheme(t)];
onMounted(() => {
  dialog.value?.open();
  const email = useRoute().query as Pick<User, 'email'>;
  dialogStore.setEmail(email);
});

const onComplete = () => {
  Router.push({ path: '/mpc/tasks' }).then(() => window.location.reload());
};
</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-page-container class="no-padding">
      <AModalDialog
        :is-full="true"
        :dialogs="signupDialogData"
        ref="dialog"
        :on-complete="onComplete"
      />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
