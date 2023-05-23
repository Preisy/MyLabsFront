<script setup lang="ts">
import { QInputProps } from 'quasar';
import { useField } from 'vee-validate';

interface ButtonProps {
  name: string;
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
  placeholder?: string;
  initValue?: string;
  type?: QInputProps['type'];
  autogrow?: boolean;
  isActive?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark',
  placeholder: '',
  initValue: '',
  autogrow: false,
  isActive: true,
});

const { errorMessage, value } = useField<string | number | undefined>(
  props.name
);
let inputType = props.type as QInputProps['type'];
// if (props.initValue) value.value = props.initValue ?? '';

// const { errorMessage, value } = useField(toRef(props, 'name'));
</script>

<template>
  <q-input
    v-model="value"
    :bg-color="props.bgColor"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :placeholder="placeholder"
    hide-bottom-space
    class="ainput"
    input-class="inner-input"
    filled
    dense
    :autogrow="props.autogrow"
    :color="color"
    :label="props.label"
    :label-color="props.labelColor"
    :readonly="!props.isActive"
    :type="inputType"
  />
</template>

<style scoped lang="scss">
.ainput {
  max-height: 6rem;
  // overflow-y: hidden;

  &:deep(.inner-input) {
    max-height: 5rem;
    overflow-y: hidden !important;
  }

  &.q-field--filled :deep(.q-field__control:after) {
    display: none;
  }
  :deep(.q-field__control) {
    border-radius: 15px;
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
