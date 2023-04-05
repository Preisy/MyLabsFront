<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import ADynamicForm from 'src/components/ADynamicForm';
import { ref } from 'vue';
import { DialogData } from './types';
import { SubmissionContext } from 'vee-validate';
import SuccessDialog from './SuccessDialog.vue';

interface Props {
  dialogs: DialogData[];
}
const props = defineProps<Props>();

defineEmits<{
  (e: 'close'): void;
}>();

let i = ref(0);
let onSubmit = (
  values: Record<string, unknown>,
  ctx: SubmissionContext<Record<string, unknown>>
) => {
  if (!props.dialogs[i.value].onSubmit(values, ctx)) return;
  dialog.value?.close();
  ++i.value;
  setTimeout(() => dialog.value?.open(), 200);
};

let floor = ref<HTMLImageElement>();
let isOpened = ref(false);

let dialog = ref<InstanceType<typeof ADialog>>();
const close = () => {
  floor.value?.classList.remove('showed');
  dialog.value?.close();
  i.value = 0;
  isOpened.value = false;
};
defineExpose({
  open: () => {
    dialog.value?.open();
    i.value = 0;
    setTimeout(() => (isOpened.value = true), 0);
  },
  close,
});
</script>

<template>
  <ADialog ref="dialog">
    <div v-if="i != dialogs.length" class="content-wrapper">
      <img
        src="src/assets/header/floor.svg"
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
          class="form"
          button-width="9rem"
        />
      </div>
      <div class="page-counter">{{ i + 1 }} / {{ dialogs.length + 1 }}</div>
    </div>
    <SuccessDialog v-else :i="dialogs.length + 1" @close="close()" />
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
  // position: relative;

  .floor {
    user-select: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    // transition: opacity 0.1s ease-in-out;
  }

  .showed {
    transition: opacity 0.3s 0.2s ease-in-out;

    opacity: 1;
  }

  .form {
    text-align: center;
  }

  .title {
    line-height: 2rem;
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
</style>

<style>
.q-dialog__inner > div {
  overflow: unset;
}
</style>
