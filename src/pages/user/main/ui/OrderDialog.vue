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
import FileAttachDialog from 'components/AFileDialog/FileAttachDialog.vue';
import { FileModel } from 'src/pages/user/work/ui/Card';
import { useFileStore } from 'stores/FileStore';
import floorImg from 'assets/header/floor.svg';

const dialog = ref<InstanceType<typeof ADialog>>();
const orderStore = useOrderStore();
const popup = ref<InstanceType<typeof AErrPopup>>();
const errorResponse = ref<AxiosError>();
const fileDialog = ref<InstanceType<typeof FileAttachDialog>>();
const fileStore = useFileStore();

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

const filesProcessing = async (
  files: File[],
  id: number
): Promise<FileModel[]> => {
  if (!files) return [];

  const filesSendResp = await orderStore.sendOrderFiles(files, id);
  if ('error' in filesSendResp) {
    console.warn('Cant upload files');
    return [];
  }

  const taskFiles: FileModel[] = [];
  files.forEach((file, index) => {
    taskFiles.push({
      filename: file.name,
      createdAt: file.lastModified.toLocaleString(),
      id: index,
    });
  });

  return taskFiles;
};

const onSubmit = handleSubmit.withControlled(async (values) => {
  const reqData: Omit<OrderData, 'files'> = {
    deadline: values.deadline.split('/').reverse().join('/'),
    promoName: values.promoName ?? null,
    taskText: values.taskText,
    type: values.type,
  };

  const sendResp = await orderStore.sendOrder(reqData);
  if ('error' in sendResp) {
    errorResponse.value = sendResp.error as AxiosError;
    popup.value?.show();
    return;
  }

  const fileSendResp = await filesProcessing(
    fileStore.filesList,
    sendResp.data.id
  ); //Await until all files loaded

  if ('error' in fileSendResp) {
    console.warn(fileSendResp.error);
    return;
  }

  const refreshOrders = await orderStore.getOrders(); //Refresh all orders. Sad but true. Maybe i could push only 1 new order to end of list... But. I need more motivation
  if ('error' in refreshOrders) {
    console.warn(refreshOrders.error);
    return;
  }

  dialog.value?.close();
  fileStore.clearFiles();
});
</script>

<template>
  <ADialog ref="dialog">
    <div class="content-wrapper">
      <img :src="floorImg" class="floor" alt="" ref="floor" @click="close" />
      <h2 class="title">{{ $t('pages.user.main.order-dialog.title') }}</h2>
      <div class="body-wrapper">
        <form class="form" @submit="onSubmit">
          <div class="form-line row">
            <a-input
              class="col"
              :label="$t('pages.landing.homePage.form.task')"
              name="taskText"
            />
            <div class="file-btn-wrapper">
              <q-btn
                class="clip-button btn br-15px"
                text-color="dark"
                color="grey"
                icon="attach_file"
                @click="fileDialog?.open()"
              />

              <p
                v-if="fileStore.filesList.length !== 0"
                class="indicator bg-green text-primary text-center"
              >
                {{ fileStore.filesList.length }}
              </p>
            </div>
          </div>
          <div class="form-line row">
            <a-select
              class="col"
              :label="$t('pages.landing.homePage.form.lang')"
              :options="LabTypes"
              name="type"
            />
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
  }

  .file-btn-wrapper {
    position: relative;

    .indicator {
      --size: 1rem;
      position: absolute;

      font-size: 0.6rem;
      padding-top: 0.2rem;
      width: var(--size);
      height: var(--size);

      top: 0;
      right: 0;

      transform: translate(50%, -50%);
      border-radius: 100%;
    }
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
        height: 40px;
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
