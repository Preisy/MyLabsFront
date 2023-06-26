<script setup lang="ts">
import { QDialog } from 'quasar';
import { useField } from 'vee-validate';
import { ref } from 'vue';

interface ADatePickerProps {
  name: string;
}
const props = defineProps<ADatePickerProps>();

const { errorMessage, value } = useField<string | number | undefined>(
  props.name
);
const dialog = ref<QDialog>();
</script>

<template>
  <div class="date-wrapper">
    <q-input
      class="date-input"
      filled
      dense
      :error="!!errorMessage"
      :label="$t('pages.landing.homePage.form.deadline')"
      v-model="value"
      mask="date"
      bg-color="info"
      :rules="['date']"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer" :onclick="dialog?.show" />
        <q-dialog ref="dialog" class="dialog">
          <q-date class="datepicker" color="info" v-model="value">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-dialog>
      </template>
      <template v-slot:error>
        <div style="white-space: break-spaces">{{ errorMessage }}</div>
      </template>
    </q-input>
  </div>
</template>

<style scoped lang="scss">
.datepicker-proxy {
  .bg-prevent {
    position: fixed;
    left: -10000px;
    right: -10000px;
    top: -10000px;
    bottom: -10000px;
    background-color: #ffffff99;
  }
  .datepicker {
    position: relative;
    z-index: 2;
  }
}
.date-input {
  padding: 0;
  font-size: 0.6rem;

  &.q-field--filled :deep(.q-field__control:after) {
    display: none;
  }

  :deep(.q-field__control) {
    border-radius: 0.75rem;
  }
  :deep(.q-field__bottom) {
    white-space: nowrap !important;
    position: absolute;
    padding: 0;
    padding-top: 2px;
    padding-left: 12px;
  }
  &.q-field--error {
    margin-bottom: 15px !important;
  }
}
</style>
