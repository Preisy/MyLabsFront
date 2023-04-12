<script setup lang="ts">
import { useForm } from 'vee-validate';
import AInput from 'components/AInput.vue';
import ABtn from 'components/ABtn.vue';
import ASelect from 'components/ASelect.vue';
import { LabTypes } from 'src/global/LabTypes';
import { TaskSchema } from 'src/model/task';
import { UserCreds, UserCredsSchema } from 'src/model/userCreds';
import omit from 'lodash/omit';
import { useAuthStore } from 'src/stores/AuthStore';
import { SignUpDialog } from '../../header/ui';
import { ref } from 'vue';
import { Nullable } from 'src/global/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';

type UnregisteredLeadForm = Omit<UserCreds, 'password'>;
const UnregisteredLeadFormSchema = {
  ...TaskSchema,
  ...omit(UserCredsSchema, 'password'),
};

const { handleSubmit } = useForm<UnregisteredLeadForm>({
  validationSchema: UnregisteredLeadFormSchema,
});

const authStore = useAuthStore();
const dialogStore = useDialogStore();

const signupDialog = ref<Nullable<InstanceType<typeof SignUpDialog>>>();
const onSubmit = handleSubmit.withControlled((values) => {
  console.log(JSON.stringify(values, null, 2));
  dialogStore.setUser(values);
  signupDialog.value?.open();
});
</script>

<template>
  <div class="form-wrapper">
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
      height: 2.25rem;
    }
  }

  @media (max-width: $screen-sm) {
    width: 100%;
  }
}
</style>

<style scoped lang="scss">
.clip-button {
  padding: 0.2rem 0.6rem;
}
</style>
