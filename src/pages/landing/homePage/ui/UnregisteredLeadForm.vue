<script setup lang='ts'>
import * as yup from 'yup';
import { UnregisteredLeadForm, UnregisteredLeadFormSchema } from 'src/model/unregisteredLeadForm';
import { Form as VeeForm } from 'vee-validate';
import AInput from 'components/AInput.vue';
import ABtn from 'components/ABtn.vue';
import ASelect from 'components/ASelect.vue';
import { LabTypes } from 'src/global/LabTypes';


const schema = yup.object<UnregisteredLeadForm, typeof UnregisteredLeadFormSchema>(UnregisteredLeadFormSchema);

function onSubmit(values: UnregisteredLeadForm, actions: any) { // todo store
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
}
</script>

<template>
  <VeeForm :validation-schema='schema' class='form' @submit='onSubmit'>
    <div class='form__line row'>
      <a-input
        class='col'
        label='Задание, проблема'
        name='text'
      />
      <q-btn
        class='clip-button br-15px'
        text-color='dark'
        color='grey'
        icon='attach_file'
      />
    </div>
    <div class='form__line row'>
      <a-select
        class='col'
        label='Язык программирования'
        :options='LabTypes'
        name='type'
      />
      <a-input
        class='col-4'
        label='Дедлайн'
        name='deadline'
      />
    </div>
    <template v-for='(col, i) in [
      { label: "Имя", name: "name", placeholder: "Ivan" },
      { label: "Электронная почта", name: "email", placeholder: "example@mail.ru" },
      { label: "Контакт для связи", name: "contact", placeholder: "@myNickname" }
    ]' :key='i'>
      <div class='form__line'>
        <a-input
          :label='col.label'
          :name='col.name'
          :placeholder='col.placeholder'
          class='col'
        />
      </div>
    </template>

    <div class='form__line row'>
      <a-input
        class='col'
        bgColor='grey'
        label='ПРОМОКОД'
        name='promocode'
      />
      <a-btn class='col-5' label='Заказать' type='submit'></a-btn>
    </div>
  </VeeForm>
</template>

<style scoped lang='scss'>
.form {
  width: 20rem;

  .form__line {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
}
</style>
