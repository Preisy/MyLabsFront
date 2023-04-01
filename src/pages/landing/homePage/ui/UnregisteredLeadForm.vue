<script setup lang="ts">
import {
  UnregisteredLeadForm,
  UnregisteredLeadFormSchema,
} from 'src/model/unregisteredLeadForm';
import {
  SubmissionContext,
  useForm,
} from 'vee-validate';
import AInput from 'components/AInput.vue';
import ABtn from 'components/ABtn.vue';
import ASelect from 'components/ASelect.vue';
import { LabTypes } from 'src/global/LabTypes';

const { handleSubmit } = useForm<UnregisteredLeadForm>({
  validationSchema: UnregisteredLeadFormSchema,
});

const onSubmit = handleSubmit.withControlled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (values, ctx: SubmissionContext<UnregisteredLeadForm>) => {
    console.log(JSON.stringify(values, null, 2));
  });
</script>

<template>
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
        :label="$t('pages.landing.homePage.form.order')"
        type="submit"
      ></a-btn>
    </div>
  </form>
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
