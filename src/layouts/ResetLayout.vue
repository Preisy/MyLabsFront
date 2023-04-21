<script setup lang="ts">
import DialogWrapper from 'src/pages/landing/header/ui/auth/DialogWrapper.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { PasswordRestoreScheme } from 'src/model/dialogs/schemes/PasswordRestoreScheme';
import changePasswordData from 'src/model/changePassword/changePasswordData';
import { useResetStore } from 'src/stores/ResetStore';
import { Router } from 'src/router'

const { t } = useI18n();
const dialog = ref<InstanceType<typeof DialogWrapper>>();
const resetStore = useResetStore();

let resetDialogData: DialogData[] = [PasswordRestoreScheme(t)];
onMounted(() => {
  dialog.value?.open();
  const query = useRoute().query;
  console.log(query);

  const email = query as Pick<changePasswordData, 'email'>;
  const code = query as Pick<changePasswordData, 'code'>;

  resetStore.setCode(code);
  resetStore.setEmail(email);
  console.log(resetStore.changeData);
});


</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-page-container class="no-padding">
      <DialogWrapper :closable="false" :dialogs="resetDialogData" ref="dialog"
        :on-complete="() => { Router.replace({ path: '/mpc/tasks' }) }" />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
