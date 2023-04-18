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
import { AxiosError } from 'axios';
import AErrPopup from 'src/components/AErrPopup.vue';
import ADatePicker from 'src/components/ADatePicker.vue';
import OrderData from 'src/model/order/OrderData';
import FileAttachDialog from 'src/pages/landing/homePage/ui/FileAttachDialog.vue';
import { FileModel } from '../../work/ui/Card';

const dialog = ref<InstanceType<typeof ADialog>>();
const orderStore = useOrderStore();
const popup = ref<InstanceType<typeof AErrPopup>>();
const errorResponse = ref<AxiosError>();
const fileDialog = ref<InstanceType<typeof FileAttachDialog>>();

defineExpose({
  open: () => {
    dialog.value?.open();
  },
});

const close = () => {
  dialog.value?.close();
};

const { handleSubmit } = useForm<OrderData>({
  validationSchema: TaskSchema,
});

const onSubmit = handleSubmit.withControlled(async (values) => {
  console.log(JSON.stringify(values, null, 2));

  const reqData: Omit<OrderData, 'files'> = {
    deadline: values.deadline.split('/').reverse().join('/'),
    promoName: values.promoName ?? null,
    taskText: values.taskText,
    type: values.type,
  };

  const sendResp = await orderStore.sendOrder(reqData);
  console.log(sendResp);
  if ('error' in sendResp) {
    errorResponse.value = sendResp.error as AxiosError;
    popup.value?.show();
    return;
  }

  const filesSendResp = await orderStore.sendOrderFiles(
    values.files,
    sendResp.data.id
  );
  if ('error' in filesSendResp) {
    console.warn('Cant upload files');
    return;
  }

  const taskFiles: FileModel[] = [];
  values.files.forEach((file, index) => {
    taskFiles.push({
      filename: file.name,
      createdAt: file.lastModified.toLocaleString(),
      id: index,
    });
  });

  orderStore.currentOrders.push({
    deadline: reqData.deadline,
    taskFiles: taskFiles,
    taskText: reqData.taskText,
    type: reqData.type,
  });
  dialog.value?.close();
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
              name="taskText"
            />
            <q-btn
              class="clip-button btn br-15px"
              text-color="dark"
              color="grey"
              icon="attach_file"
              @click="fileDialog?.open()"
            />
          </div>
          <div class="form-line row">
            <a-select
              class="col"
              :label="$t('pages.landing.homePage.form.lang')"
              :options="LabTypes"
              name="type"
            />
            <!-- <a-input
              class="col-4"
              :label="$t('pages.landing.homePage.form.deadline')"
              name="deadline"
              :init-value="getToday()"
            /> -->
            <ADatePicker class="col-5" name="deadline" />
          </div>
          <div class="form-line row">
            <a-input
              class="col"
              bgColor="grey"
              :label="$t('pages.landing.homePage.form.promo')"
              name="promoName"
            />
            <a-btn
              class="col-5 btn"
              theme="dark"
              :label="$t('pages.landing.homePage.form.order')"
              type="submit"
              :loading-state="orderStore.orderState"
            />
          </div>
        </form>
      </div>
      <AErrPopup class="errorPopup" :axios-err="errorResponse" ref="popup" />
      <FileAttachDialog ref="fileDialog" />
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
