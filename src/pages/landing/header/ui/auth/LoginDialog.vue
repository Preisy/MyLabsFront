<script setup lang="ts">
import { ref, watch } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import ADialog from 'src/components/ADialog';
import { getSchema } from 'src/global/utils';
import { LoginData, LoginDataSchema } from 'src/model/loginData';
import ADynamicForm from 'src/components/ADynamicForm';
import RestorePasswordDialog from './RestorePasswordDialog.vue';
import ABtn from 'src/components/ABtn.vue';
import { AuthService } from 'src/service/AuthService';
import { GenericFormData } from 'axios';
import { SubmissionContext } from 'vee-validate';
import { useAuthStore } from 'src/stores/AuthStore';

let isOpened = ref(false);
let floor = ref<HTMLImageElement>();
let restore = ref<InstanceType<typeof RestorePasswordDialog>>();
let dialog = ref<InstanceType<typeof DialogWrapper>>();
defineExpose({
  open: () => {
    dialog.value?.open();
    setTimeout(() => (isOpened.value = true), 0);
  },
});
const close = () => {
  floor.value?.classList.remove('showed');
  dialog.value?.close();
  isOpened.value = false;
};

let schema = getSchema(LoginDataSchema);

type LoginKeys = 'email' | 'password';
const onSubmit = (
  values: Record<LoginKeys, string>,
  ctx: SubmissionContext<Record<string, unknown>>
) => {
  useAuthStore().login({
    email: values.email,
    password: values.password,
  });
};
</script>

<template>
  <div>
    <ADialog ref="dialog">
      <div class="content-wrapper">
        <img src="src/assets/header/floor.svg" class="floor" alt="" ref="floor" @click="close"
          :class="{ showed: isOpened }" />
        <h4 class="title">
          {{ $t('pages.landing.header.auth.login.1') }}
        </h4>
        <div class="body-wrapper">
          <ADynamicForm :schema="schema" :on-submit="onSubmit" class="form" button-width="9rem" />
          <ABtn :label="$t('pages.landing.header.auth.login.btn')" color="grey" text-color="dark" class="restore"
            width="9rem" @click="
              () => {
                dialog?.close();
                restore?.open();
              }
            "></ABtn>
        </div>
      </div>
      <!-- <SuccessDialog v-else :i="dialogs.length + 1" @close="close()" /> -->
    </ADialog>
    <RestorePasswordDialog ref="restore" />
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 23rem;
  padding: 3.5rem 2rem;
  padding-bottom: 0.5rem;
  background: $primary;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);

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
    margin-bottom: 1rem;
  }

  .title {
    line-height: 2rem;
    margin-bottom: 1.3rem;
  }

  .body-wrapper {
    margin-bottom: 1rem;
  }

  .restore {
    margin: 0 auto 1rem;
    display: block;
  }
}
</style>