<script setup lang="ts">
import { ref } from 'vue';
import AModalDialog from 'src/components/AModalDialog.vue';
import { DialogData } from './types';
import {
  SignupScheme,
  CodeScheme,
  PasswordScheme,
} from 'src/model/dialogs/schemes';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useAuthStore } from 'src/stores/AuthStore';
import { useRoute } from 'vue-router';
import { Router } from 'src/router';
import { useOrderStore } from 'src/stores/OrderStore';
import OrderData from 'src/model/order/OrderData';
import { useFileStore } from 'src/stores/FileStore';
import { AxiosError } from 'axios';

const { t } = useI18n();
interface Props {
  start?: number;
  isFull: boolean;
  isNeedToOrder?: boolean;
  onComplete?: (result: null | AxiosError) => void;
}

const props = defineProps<Props>();
const authStore = useAuthStore();

let dialog = ref<InstanceType<typeof AModalDialog>>();
const isDialogOpened = computed(() => dialog.value?.isOpened);

if ('ref' in useRoute().query)
  authStore.invitedById = useRoute().query.ref as string;

defineExpose({
  open: () => {
    dialog.value?.open();
  },
  isOpened: isDialogOpened,
});

const emits = defineEmits<{ (e: 'close'): void }>();

let signupDialogData: DialogData[] = [
  SignupScheme(t),
  PasswordScheme(t),
  CodeScheme(t),
];

if (props.start)
  signupDialogData = signupDialogData.slice(
    props.start,
    signupDialogData.length
  );

const doOrder = async () => {
  if (!props.onComplete) return;
  const orderStore = useOrderStore();
  const fileStore = useFileStore();

  const values = orderStore.orderData;
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
    props.onComplete(orderResponse.error as AxiosError);
    return;
  }

  orderStore.sendOrderFiles(fileStore.filesList, orderResponse.data.id);
  orderStore.clearOrderCache();
  props.onComplete(null);
};

const onclose = async () => {
  emits('close');

  if (!authStore.isAuth) return;

  await doOrder();

  setTimeout(() => {
    Router.push({ path: '/mpc/tasks' }).then(() => window.location.reload());
  }, 1000);
};
</script>

<template>
  <AModalDialog
    :dialogs="signupDialogData"
    ref="dialog"
    :is-full="isFull"
    @close="onclose"
  />
</template>

<style scoped lang="scss"></style>
