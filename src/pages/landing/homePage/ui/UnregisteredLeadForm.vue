<script setup lang="ts">
import { useForm } from 'vee-validate';
import AInput from 'components/AInput.vue';
import ABtn from 'components/ABtn.vue';
import ASelect from 'components/ASelect.vue';
import { LabType, LabTypes } from 'src/global/LabTypes';
import { TaskSchema } from 'src/model/task';
import { UserCredsSchema } from 'src/model/userCreds';
import omit from 'lodash/omit';
import { useAuthStore } from 'src/stores/AuthStore';
import { SignUpDialog } from '../../header/ui';
import { ref } from 'vue';
import { Nullable } from 'src/global/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { useOrderStore } from 'src/stores/OrderStore';
import FileAttachDialog from 'components/AFileDialog/FileAttachDialog.vue';
import { useFileStore } from 'src/stores/FileStore';
import { computed } from 'vue';
import ADatePicker from 'src/components/ADatePicker.vue';
import { keys, pick } from 'lodash';
import OrderData from 'src/model/order/OrderData';
import AErrPopup from 'src/components/AErrPopup.vue';
import { AxiosError } from 'axios';
import ACompletePopup from 'src/components/ACompletePopup';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
const orderStore = useOrderStore();
const fileStore = useFileStore();

interface UnregisteredLeadForm {
  name: string;
  email: string;
  contact: string;
  password: string;
  invitedById: string;
  taskText: string;
  type: LabType;
  deadline: string;
  promoName: string | null;
}

const UnregisteredLeadFormSchema = {
  ...TaskSchema,
  ...omit(UserCredsSchema, 'password'),
};
const schema = authStore.isAuth ? TaskSchema : UnregisteredLeadFormSchema;

const { handleSubmit, values } = useForm<UnregisteredLeadForm>({
  validationSchema: schema,
  initialValues: orderStore.orderData,
});

const fileDialog = ref<InstanceType<typeof FileAttachDialog>>();
const signupDialog = ref<Nullable<InstanceType<typeof SignUpDialog>>>();

const response = ref<AxiosError>();
const errPopup = ref<InstanceType<typeof AErrPopup>>();
const donePopup = ref<InstanceType<typeof ACompletePopup>>();

const onSubmit = handleSubmit.withControlled(async (values) => {
  if (!authStore.isAuth) {
    dialogStore.setUser(pick(values, keys(UserCredsSchema)));
    signupDialog.value?.open();
    orderStore.saveOrder(values as unknown as OrderData);
    fileStore.saveFiles(fileStore.filesList);
    return;
  }

  doOrder();
});

const doOrder = async () => {
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
    response.value = orderResponse.error as AxiosError;
    errPopup.value?.show();
    return;
  }

  donePopup.value?.show();
  orderStore.sendOrderFiles(fileStore.filesList, orderResponse.data.id);
  orderStore.clearOrderCache();
  cleanForm();
};

const isFileDialogOpen = ref(false);
const fileDialogOpen = () => {
  fileDialog.value?.open();
  isFileDialogOpen.value = !isFileDialogOpen.value;
};

defineExpose({
  isFileDialogOpen,
});

const filesCount = computed(() => useFileStore().filesList.length);

const cleanForm = () => {
  values.taskText = '';
  values.promoName = '';
  fileStore.filesList = [];
};

const formOnComplete = (error: null | AxiosError) => {
  if (error) {
    response.value = error;
    errPopup.value?.show();
    return;
  }

  donePopup.value?.show();
};
</script>

<template>
  <div class="form-wrapper">
    <form class="form" @submit="onSubmit">
      <div class="form-line row">
        <a-input
          class="col"
          :label="$t('pages.landing.homePage.form.task')"
          name="taskText"
          :autogrow="true"
        />
        <div class="file-btn-wrapper">
          <q-btn
            class="clip-button btn br-15px"
            text-color="dark"
            color="grey"
            icon="attach_file"
            @click="fileDialogOpen"
          />
          <p
            v-if="filesCount !== 0"
            class="indicator bg-green text-primary text-center"
          >
            {{ filesCount }}
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
      <template
        v-for="(col, i) in [
          {
            label: $t('pages.landing.homePage.form.name'),
            name: 'name',
            placeholder: 'Ivan',
          },
          {
            label: $t('pages.landing.homePage.form.email'),
            name: 'email',
            placeholder: 'example@mail.ru',
          },
          {
            label: $t('pages.landing.homePage.form.contacts'),
            name: 'contact',
            placeholder: '@myNickname',
          },
        ]"
        :key="i"
      >
        <div class="form-line">
          <a-input
            v-if="!authStore.isAuth"
            :label="col.label"
            :name="col.name"
            :placeholder="col.placeholder"
            class="col"
          />
        </div>
      </template>

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
        ></a-btn>
      </div>
      <AErrPopup
        class="err-popup"
        ref="errPopup"
        :axios-err="response"
        :timeout="2000"
      />
    </form>

    <FileAttachDialog ref="fileDialog" />
    <SignUpDialog
      :start="1"
      :is-need-to-order="true"
      :is-full="true"
      :on-complete="formOnComplete"
      ref="signupDialog"
    />
    <ACompletePopup ref="donePopup" />
  </div>
</template>

<style scoped lang="scss">
.form {
  width: 20rem;
  position: relative;

  .form-line {
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    .btn {
      height: 40px;
    }
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
  .err-popup {
    position: absolute;
    top: -0.3rem;
    bottom: -2rem;
    left: -0.3rem;
    right: -0.3rem;
    padding: 0;
    transform: unset;
    border-radius: 1rem;
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.5rem;
    padding-left: 0.3rem;
  }

  .clip-button {
    padding: 0.2rem 0.6rem;
  }
  @media (max-width: $screen-sm) {
    width: 100%;
  }
}
</style>
