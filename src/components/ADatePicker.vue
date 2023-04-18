<script setup lang="ts">
import { useField } from 'vee-validate';
import { onMounted } from 'vue';

interface ADatePickerProps {
  name: string;
}
const props = defineProps<ADatePickerProps>();

const getTomorrow = (): string => {
  const now = new Date();
  const tomorrow = new Date(now.setDate(now.getDate() + 1));
  return tomorrow.toLocaleDateString().split('.').reverse().join('.');
};
const { errorMessage, value } = useField<string | number | undefined>(
  props.name
);
onMounted(() => useField(props.name).setValue(getTomorrow()));
</script>

<template>
  <div class="date-wrapper">
    <!-- <a-input
      class="col-4"
      :label="$t('pages.landing.homePage.form.deadline')"
      name="deadline"
      :init-value="getTomorrow()"
    /> -->

    <q-input
      class="date-input"
      filled
      dense
      :error="!!errorMessage"
      :error-message="errorMessage"
      :label="$t('pages.landing.homePage.form.deadline')"
      v-model="value"
      mask="date"
      bg-color="info"
      :rules="['date']"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date color="info" v-model="value">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<style scoped lang="scss">
.date-input {
  padding: 0;
  font-size: 0.6rem;
}
.date-input:deep {
  &.q-field--filled .q-field__control:after {
    display: none;
  }
  .q-field__control {
    border-radius: 0.75rem;
  }
  .q-field__bottom {
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
