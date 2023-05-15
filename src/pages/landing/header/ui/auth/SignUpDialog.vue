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

const { t } = useI18n();
interface Props {
  start?: number;
  isFull: boolean;
  isNeedToOrder?: boolean;
  onComplete?: () => void;
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

const onclose = () => {
  emits('close');
  if (props.onComplete) props.onComplete();
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
