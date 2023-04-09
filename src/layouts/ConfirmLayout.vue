<script setup lang="ts">
import { User } from 'src/model/User/User';
import { CodeScheme } from 'src/model/dialogs';
import DialogWrapper from 'src/pages/landing/header/ui/auth/DialogWrapper.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const dialog = ref<InstanceType<typeof DialogWrapper>>();
const email = ref<string>();

let signupDialogData: DialogData[] = [CodeScheme(t)];
onMounted(() => {
  dialog.value?.open();
  email.value = (useRoute().query as Pick<User, 'email'>).email;
  console.log(email.value);
});
</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-page-container class="no-padding">
      <DialogWrapper :dialogs="signupDialogData" ref="dialog" />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
