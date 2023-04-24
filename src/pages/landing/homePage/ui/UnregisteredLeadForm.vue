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
import FileAttachDialog from './FileAttachDialog.vue';
import { useFileStore } from '../store/FileStore';
import { computed } from 'vue';
import ADatePicker from 'src/components/ADatePicker.vue';
import { keys, pick } from 'lodash';
import OrderData from 'src/model/order/OrderData';

const authStore = useAuthStore();
const dialogStore = useDialogStore();
const orderStore = useOrderStore();

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

const { handleSubmit } = useForm<UnregisteredLeadForm>({
  validationSchema: schema,
  initialValues: orderStore.orderData,
});

const fileDialog = ref<InstanceType<typeof FileAttachDialog>>();
const signupDialog = ref<Nullable<InstanceType<typeof SignUpDialog>>>();
const fileStore = useFileStore();
const onSubmit = handleSubmit.withControlled(async (values) => {
  if (!authStore.isAuth) {
    dialogStore.setUser(pick(values, keys(UserCredsSchema)));
    signupDialog.value?.open();
    orderStore.saveOrder(values as unknown as OrderData);
    return;
  }

  const sendData: Omit<OrderData, 'files'> = {
    taskText: values.taskText,
    deadline: values.deadline.split('/').reverse().join('/'),
    promoName: values.promoName ?? null,
    type: values.type,
  };

  const orderResponse = await orderStore.sendOrder(sendData);
  if ('error' in orderResponse) {
    console.warn('Something went wrong with order');
    return;
  }

  orderStore.sendOrderFiles(fileStore.filesList, orderResponse.data.id);
  orderStore.clearOrderCache();
});

const isFileDialogOpen = ref(false);
const fileDialogOpen = () => {
  fileDialog.value?.open();
  isFileDialogOpen.value = !isFileDialogOpen.value;
};

defineExpose({
  isFileDialogOpen,
});

const filesCount = computed(() => useFileStore().filesList.length);
</script>

<template>
  <div class="form-wrapper">
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
        ></a-btn>
      </div>
    </form>

    <FileAttachDialog ref="fileDialog" />
    <SignUpDialog :start="1" ref="signupDialog" />
  </div>
</template>

<style scoped lang="scss">
.form {
  width: 20rem;

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

  @media (max-width: $screen-sm) {
    width: 100%;
  }
  .clip-button {
    padding: 0.2rem 0.6rem;
  }
}
</style>
