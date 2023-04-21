<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from 'src/pages/landing/header/ui/auth/DialogWrapper.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useI18n } from 'vue-i18n';
import { ChangePasswordSchema } from '../schemes/ChangePasswordSchema';
import { useUserStore } from 'src/stores/UserStore';
import { useAuthStore } from 'src/stores/AuthStore';
import { AttentionSchema } from '../schemes/AttentionSchema';
import { Router } from 'src/router';

const { t } = useI18n();

let dialog = ref<InstanceType<typeof DialogWrapper>>();
const authStore = useAuthStore();
const userStore = useUserStore();
defineExpose({
  open: async () => {
    if (userStore.changePasswordData.email == '') {
      const user = await userStore.getCreds();
      if ('error' in user) {
        console.warn('Cant fetch user');
        return;
      }
      userStore.changePasswordData.email = user.email;
    }

    authStore.restore({ email: userStore.changePasswordData.email });

    dialog.value?.open();
  },
});

const dialogSchemas: DialogData[] = [
  AttentionSchema(t),
  ChangePasswordSchema(t),
];

const onComplete = () => { Router.push({ path: '/mpc/tasks' }).then(() => window.location.reload()) }
</script>

<template>
  <DialogWrapper :dialogs="dialogSchemas" :need-last="false" ref="dialog"
    :on-complete="onComplete" />
</template>

<style scoped lang="scss"></style>
