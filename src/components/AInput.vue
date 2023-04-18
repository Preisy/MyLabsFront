<script setup lang="ts">
import { useField } from 'vee-validate';

interface ButtonProps {
  name: string;
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
  placeholder?: string;
  initValue?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark',
  placeholder: '',
  initValue: '',
});

const { errorMessage, value } = useField<string | number | undefined>(
  props.name
);
// if (props.initValue) value.value = props.initValue ?? '';

// const { errorMessage, value } = useField(toRef(props, 'name'));
</script>

<template>
  <q-input
    v-model="value"
    :bg-color="props.bgColor"
    :error="!!errorMessage"
    :error-message="errorMessage"
    hide-bottom-space
    class="ainput"
    filled
    dense
    :color="color"
    :label="props.label"
    :label-color="props.labelColor"
  />
</template>

<style scoped lang="scss">
.ainput:deep {
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
