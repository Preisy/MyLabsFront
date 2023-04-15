<script setup lang="ts">
import { computed, ref } from 'vue';
import ADialog from 'src/components/ADialog';
import { getSchema } from 'src/global/utils';
import { LoginData, LoginDataSchema } from 'src/model/loginData';
import ADynamicForm from 'src/components/ADynamicForm';
import RestorePasswordDialog from './RestorePasswordDialog.vue';
import ABtn from 'src/components/ABtn.vue';
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { AxiosError } from 'axios';
import AErrPopup from 'src/components/AErrPopup.vue';

let isOpened = ref(false);
let floor = ref<HTMLImageElement>();
let restore = ref<InstanceType<typeof RestorePasswordDialog>>();
let dialog = ref<InstanceType<typeof ADialog>>();

const isDialogOpened = computed(() => dialog.value?.isOpen);
defineExpose({
  open: () => {
    dialog.value?.open();
    setTimeout(() => (isOpened.value = true), 0);
  },
  isOpened: isDialogOpened,
});
const close = () => {
  floor.value?.classList.remove('showed');
  dialog.value?.close();
  isOpened.value = false;
};
let schema = getSchema(LoginDataSchema);

const errorResponse = ref<AxiosError>();
const popup = ref<InstanceType<typeof AErrPopup>>();
const onSubmit = async (values: Record<string, unknown>) => {
  const loginResponse = await useAuthStore().login(
    values as unknown as LoginData
  );
  if ('error' in loginResponse) {
    console.log(loginResponse);
    errorResponse.value = loginResponse.error as AxiosError;
    popup.value?.show();
    return;
  }
  window.location.reload();
};
</script>

<template>
  <div>
    <ADialog ref="dialog">
      <div class="content-wrapper">
        <img
          src="src/assets/header/floor.svg"
          class="floor"
          alt=""
          ref="floor"
          @click="close"
          :class="{ showed: isOpened }"
        />
        <h2 class="title">
          {{ $t('pages.landing.header.auth.login.1') }}
        </h2>
        <div class="body-wrapper">
          <ADynamicForm
            :schema="schema"
            :on-submit="onSubmit"
            :btn-label="$t('pages.landing.header.login')"
            :state="useDialogStore().loginState"
            class="form"
            button-width="9rem"
          />
          <ABtn
            :label="$t('pages.landing.header.auth.login.btn')"
            color="grey"
            text-color="dark"
            class="restore"
            width="9rem"
            @click="
              () => {
                dialog?.close();
                restore?.open();
              }
            "
          ></ABtn>
          <AErrPopup
            class="errorPopup"
            :axios-err="errorResponse"
            ref="popup"
          />
        </div>
      </div>
      <!-- <SuccessDialog v-else :i="dialogs.length + 1" @close="close()" /> -->
    </ADialog>
    <RestorePasswordDialog ref="restore" />
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  position: relative;
  width: 23rem;
  padding: 3.5rem 2rem;
  padding-bottom: 0.5rem;
  background: $primary;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);

  .floor {
    user-select: none;
    position: absolute;
    top: -100%;
    right: -160%;
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
