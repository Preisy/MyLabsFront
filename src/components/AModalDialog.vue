<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import ADynamicForm from 'src/components/ADynamicForm';
import { ref } from 'vue';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { SubmissionContext } from 'vee-validate';
import SuccessDialog from 'src/pages/landing/header/ui/auth/SuccessDialog.vue';
import AErrPopup from 'src/components/AErrPopup.vue';
import { AxiosError } from 'axios';
import floorImg from 'assets/header/floor.svg';

interface Props {
  dialogs: DialogData[];
  onComplete?: () => void;
  needLast?: boolean;
  closable?: boolean;
  redirect?: string;
  isFull: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  needLast: true,
  closable: true
});
let i = ref(0);
let dialog = ref<InstanceType<typeof ADialog>>();
let floor = ref<HTMLImageElement>();
const isOpened = ref(false);

const popup = ref<InstanceType<typeof AErrPopup>>();
const errorResponse = ref<AxiosError>();
const dialogsLen = props.needLast
  ? props.dialogs.length + 1
  : props.dialogs.length;

const close = () => {
  if (props.onComplete) props.onComplete();
  if (!props.closable) return;
  emits('close');
  floor.value?.classList.remove('showed');
  dialog.value?.close();
  i.value = 0;
};

const emits = defineEmits<{
  (e: 'close'): void;
}>();

let onSubmit = async (
  values: Record<string, unknown>,
  ctx: SubmissionContext<Record<string, unknown>>
) => {
  const submitResult = await props.dialogs[i.value].onSubmit(values, ctx);

  if ('error' in submitResult) {
    errorResponse.value = submitResult.error as AxiosError;
    popup.value?.show();
    console.log(submitResult);
    return;
  }

  dialog.value?.close();
  ++i.value;
  if (!props.needLast && i.value === props.dialogs.length) {
    close();
    return;
  }
  setTimeout(() => dialog.value?.open(), 0);
};

defineExpose({
  open: () => {
    dialog.value?.open();
    i.value = 0;
    setTimeout(() => (isOpened.value = true), 0);
  },
  close,
  isOpened: isOpened
});
</script>

<template>
  <ADialog ref="dialog" @close="isOpened = false">
    <div v-if="i != dialogs.length" class="content-wrapper">
      <img
        :src="floorImg"
        class="floor"
        alt=""
        ref="floor"
        @click="close"
        :class="{ showed: isOpened }"
      />
      <h2 class="title">
        {{ dialogs[i].title }}
      </h2>
      <div class="body-wrapper">
        <ADynamicForm
          :schema="dialogs[i].schema"
          :on-submit="onSubmit"
          :btn-label="dialogs[i].btnLabel"
          :state="dialogs[i].state.value"
          class="form"
          button-width="9rem"
        />
      </div>
      <div class="page-counter">{{ i + 1 }} / {{ dialogsLen }}</div>
      <AErrPopup class="errorPopup" :axios-err="errorResponse" ref="popup" />
    </div>
    <SuccessDialog
      v-else-if="needLast"
      :i="dialogs.length + 1"
      :type="isFull ? 'full' : 'short'"
      :redirect="redirect"
      @close="close"
    />
  </ADialog>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 23rem;
  padding: 3.5rem 2rem;
  padding-bottom: 0.5rem;
  background: $primary;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);
  position: relative;

  .floor {
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: -100%;
    right: -140%;
    z-index: -1;
    // opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  .showed {
    transition: opacity 0.3s 0.2s ease-in-out;

    opacity: 1;
  }

  .form {
    text-align: center;
  }

  .title {
    margin-bottom: 1.3rem;
  }

  .body-wrapper {
    margin-bottom: 1rem;
  }

  .controls-wrapper {
    margin-bottom: 0.75rem;
  }

  .page-counter {
    width: min-content;
    white-space: nowrap;
    margin: 0 auto;
  }
}
</style>

<style lang="scss">
.q-dialog__backdrop {
  background-color: #ffffff99;
  backdrop-filter: blur(0.4rem);
}

.q-dialog__inner > div {
  overflow: unset;
}
</style>
