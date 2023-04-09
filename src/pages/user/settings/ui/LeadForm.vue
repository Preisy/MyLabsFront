<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AInput from 'src/components/AInput.vue';

const { t } = useI18n();

const schema = [
  {
    label: t('pages.landing.homePage.form.name'),
    name: 'name',
    placeholder: 'Иван Красавцев',
  },
  {
    label: t('pages.landing.homePage.form.contacts'),
    name: 'contact',
    placeholder: 'Telegram: bykrasavcev',
  },
  {
    label: t('pages.landing.homePage.form.email'),
    name: 'email',
    placeholder: 'Krsavcevivan@gmail.com',
  },
];
</script>

<template>
  <div class="form">
    <template v-for="(col, i) in schema" :key="i">
      <div class="form-line">
        <a-input
          :label="col.label"
          :name="col.name"
          :placeholder="col.placeholder"
          :init-value="col.placeholder"
          class="col full-width q-mb-md"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
