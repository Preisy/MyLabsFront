<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import { DialogData } from './types';
import { SignupScheme, CodeScheme, PasswordScheme } from 'src/model/dialogs';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useAuthStore } from 'src/stores/AuthStore';
import { useRoute } from 'vue-router';

const { t } = useI18n();
interface Props {
  start?: number;
}
const props = defineProps<Props>();
const authStore = useAuthStore();

let dialog = ref<InstanceType<typeof DialogWrapper>>();
const isDialogOpened = computed(() => dialog.value?.isOpened);

if ('ref' in useRoute().query)
  authStore.invitedById = useRoute().query.ref as string;

defineExpose({
  open: () => {
    dialog.value?.open();
  },
  isOpened: isDialogOpened,
});

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
</script>

<template>
  <DialogWrapper :dialogs="signupDialogData" ref="dialog" />
</template>

<style scoped lang="scss"></style>
