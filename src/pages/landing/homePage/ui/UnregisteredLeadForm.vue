<script setup lang="ts">
import * as yup from 'yup';
import {
  UnregisteredLeadForm,
  UnregisteredLeadFormSchema,
} from 'src/model/unregisteredLeadForm';
import { Form as VeeForm } from 'vee-validate';
import AInput from 'components/AInput.vue';
import ABtn from 'components/ABtn.vue';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import ASelect from 'components/ASelect.vue';
import { LabTypes } from 'src/global/LabTypes';

const { t } = useI18n();

const text_data = {
  task: t('pages.landing.homePage.form.task'),
  lang: t('pages.landing.homePage.form.lang'),
  deadline: t('pages.landing.homePage.form.deadline'),
  name: t('pages.landing.homePage.form.name'),
  email: t('pages.landing.homePage.form.email'),
  contacts: t('pages.landing.homePage.form.contacts'),
  promo: t('pages.landing.homePage.form.promo'),
  order: t('pages.landing.homePage.form.order'),
};

const task_val = ref('');

const schema = yup.object<
  UnregisteredLeadForm,
  typeof UnregisteredLeadFormSchema
>(UnregisteredLeadFormSchema);

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
function onSubmit(values: UnregisteredLeadForm, actions: any) {
  // todo store
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
}
</script>

<template>
  <VeeForm :validation-schema="schema" class="form" @submit="onSubmit">
    <div class="form-line row">
      <a-input
        class="col"
        :label="text_data.task"
        :model-value="task_val"
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
        :label="text_data.lang"
        :options="LabTypes"
        name="type"
      />
      <a-input class="col-4" label="Дедлайн" name="deadline" />
    </div>
    <template
      v-for="(col, i) in [
        { label: `${text_data.name}`, name: 'name', placeholder: 'Ivan' },
        {
          label: `${text_data.email}`,
          name: 'email',
          placeholder: 'example@mail.ru',
        },
        {
          label: `${text_data.contacts}`,
          name: 'contact',
          placeholder: '@myNickname',
        },
      ]"
      :key="i"
    >
      <div class="form-line">
        <a-input
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
        :label="text_data.promo"
        name="promocode"
      />
      <a-btn class="col-5 btn" :label="text_data.order" type="submit"></a-btn>
    </div>
  </VeeForm>
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
    .form-line {
      margin-bottom: 0;
    }
  }
}
</style>

<style lang="scss">
.clip-button {
  padding: 0.2rem 0.6rem;
}
</style>
