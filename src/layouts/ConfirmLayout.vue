<script setup lang="ts">
import { User } from 'src/model/User/User';
import { CodeScheme } from 'src/model/dialogs/schemes';
import AModalDialog from 'src/components/AModalDialog.vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useOrderStore } from 'src/stores/OrderStore';
import { Router } from 'src/router';
import { useFileStore } from 'src/stores/FileStore';
import OrderData from 'src/model/order/OrderData';

const { t } = useI18n();
const dialog = ref<InstanceType<typeof AModalDialog>>();
const dialogStore = useDialogStore();
const orderStore = useOrderStore();
const fileStore = useFileStore();

let signupDialogData: DialogData[] = [CodeScheme(t)];
onMounted(() => {
  dialog.value?.open();
  const email = useRoute().query as Pick<User, 'email'>;
  dialogStore.setEmail(email);
});

const doOrder = async () => {
  const values = orderStore.orderData; //already loaded in 'oncomplete'
  if (!values) {
    console.warn('Error! No order values!');
    return;
  }

  let promo = values.promoName
    ? values.promoName.length > 0
      ? values.promoName
      : null
    : null;
  const sendData: Omit<OrderData, 'files'> = {
    taskText: values.taskText,
    deadline: values.deadline.split('/').reverse().join('/'),
    promoName: promo,
    type: values.type,
  };

  const orderResponse = await orderStore.sendOrder(sendData);
  if ('error' in orderResponse) {
    console.warn('Something went wrong with order');
    return;
  }

  const files = await fileStore.loadFiles();
  console.log(files);
  if (files) await orderStore.sendOrderFiles(files, orderResponse.data.id);
  orderStore.clearOrderCache();
};

const oncomplete = async () => {
  const data = orderStore.loadOrder();

  if (data) {
    await doOrder();
  }

  setTimeout(() => {
    Router.push({ path: '/mpc/tasks' }).then(() => window.location.reload());
  }, 1000);
};
</script>

<template>
  <q-layout view="lHh lpr lff">
    <q-page-container class="no-padding">
      <AModalDialog
        :closable="false"
        :is-full="false"
        :dialogs="signupDialogData"
        ref="dialog"
        :on-complete="oncomplete"
      />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
