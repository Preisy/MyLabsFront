<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import ABtn from 'src/components/ABtn.vue';
import AInput from 'src/components/AInput.vue';
import ASelect from 'src/components/ASelect.vue';
import { LabTypes } from 'src/global/LabTypes';
import { TaskSchema } from 'src/model/task';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { useOrderStore } from 'src/stores/OrderStore';
import { LabModel } from '../../work/ui/Card';
import { AxiosError } from 'axios';
import AErrPopup from 'src/components/AErrPopup.vue';

const dialog = ref<InstanceType<typeof ADialog>>();
const orderStore = useOrderStore();
const popup = ref<InstanceType<typeof AErrPopup>>();
const errorResponse = ref<AxiosError>();

defineExpose({
  open: () => {
    dialog.value?.open();
    setTimeout(() => (isOpened.value = true), 0);
  },
});
const isOpened = ref(false);
const close = () => {
  dialog.value?.close();
  isOpened.value = false;
};

const { handleSubmit } = useForm<Omit<LabModel, 'priority'>>({
  validationSchema: TaskSchema,
});

const onSubmit = handleSubmit.withControlled(async (values) => {
  console.log(JSON.stringify(values, null, 2));

  const sendResp = await orderStore.sendOrder(values);
  if ('error' in sendResp) {
    console.log(sendResp);
    errorResponse.value = sendResp.error as AxiosError;
    popup.value?.show();
    return;
  }
});
</script>

<template>
  <ADialog ref="dialog">
    <div class="content-wrapper">
      <img
        src="/src/assets/header/floor.svg"
        class="floor"
        alt=""
        ref="floor"
        @click="close"
      />
      <h2 class="title">{{ $t('pages.user.main.order-dialog.title') }}</h2>
      <div class="body-wrapper">
        <form class="form" @submit="onSubmit">
          <div class="form-line row">
            <a-input
              class="col"
              :label="$t('pages.landing.homePage.form.task')"
              name="text"
            />
            <q-btn
              class="clip-button btn br-15px"
              text-color="dark"
              color="grey"
              icon="attach_file"
            />
          </div>
          <div class="form-line row">
            <a-select
              class="col"
              :label="$t('pages.landing.homePage.form.lang')"
              :options="LabTypes"
              name="type"
            />
            <a-input
              class="col-4"
              :label="$t('pages.landing.homePage.form.deadline')"
              name="deadline"
            />
          </div>
          <div class="form-line row">
            <a-input
              class="col"
              bgColor="grey"
              :label="$t('pages.landing.homePage.form.promo')"
              name="promocode"
            />
            <a-btn
              class="col-5 btn"
              theme="dark"
              :label="$t('pages.landing.homePage.form.order')"
              type="submit"
            ></a-btn>
          </div>
        </form>
      </div>
      <AErrPopup class="errorPopup" :axios-err="errorResponse" ref="popup" />
    </div>
  </ADialog>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: auto;
  padding: 2rem;
  padding-bottom: 0.5rem;

  background: $primary;

  border-radius: 1.5rem;
  box-shadow: 0 0 0.5rem 0 #00000022;
  position: relative;

  .floor {
    user-select: none;
    position: absolute;
    top: -100%;
    right: -130%;
    z-index: -1;
    opacity: 0.5;
    // transition: opacity 0.1s ease-in-out;
  }

  .title {
    margin-bottom: 0.6rem;
  }
  .form {
    width: 20rem;

    .form-line {
      gap: 0.75rem;
      margin-bottom: 0.75rem;

      .btn {
        height: 2.25rem;
      }
    }

    @media (max-width: $screen-sm) {
      width: 100%;
    }
    .clip-button {
      padding: 0.2rem 0.6rem;
    }
  }
}
</style>
