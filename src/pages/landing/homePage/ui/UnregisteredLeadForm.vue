<script setup lang="ts">
import AInput from 'components/AInput.vue';
import { ref } from 'vue';
import ABtn from 'components/ABtn.vue';
import { useI18n } from 'vue-i18n';

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
</script>

<template>
  <div class="form">
    <div class="form__line row">
      <a-input class="col" :label="text_data.task" :model-value="task_val" />
      <q-btn
        class="clip-button br-15px"
        text-color="dark"
        color="grey"
        icon="attach_file"
      />
    </div>
    <div class="form__line row">
      <a-input class="col" :label="text_data.lang" :model-value="task_val" />
      <a-input
        class="col-4"
        :label="text_data.deadline"
        :model-value="task_val"
      />
    </div>
    <div class="form__line">
      <a-input class="col" :label="text_data.name" :model-value="task_val" />
    </div>
    <div class="form__line">
      <a-input class="col" :label="text_data.email" :model-value="task_val" />
    </div>
    <div class="form__line">
      <a-input
        class="col"
        :label="text_data.contacts"
        :model-value="task_val"
      />
    </div>
    <div class="form__line row">
      <a-input
        class="col"
        :label="text_data.promo"
        bgColor="grey"
        :model-value="task_val"
      />
      <a-btn class="col-5" :label="text_data.order"></a-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
  width: 19rem;

  .form__line {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
}
</style>

<style lang="scss">
.clip-button {
  padding: 0.2rem 0.6rem;
}
</style>
