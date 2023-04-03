<script setup lang="ts">
import { useField } from 'vee-validate';

interface ButtonProps {
  name: string;
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark',
  placeholder: '',
});

const { errorMessage, value } = useField<string | number | undefined>(
  props.name
);
// const { errorMessage, value } = useField(toRef(props, 'name'));
</script>

<template>
  <q-input
    v-model="value"
    :bg-color="props.bgColor"
    :error="!!errorMessage"
    :error-message="errorMessage"
    class="br-15px ainput"
    filled
    dense
    :color="color"
    :label="props.label"
    :label-color="props.labelColor"
  />
</template>

<style lang="scss">
.ainput {
  &.q-field--dense .q-field__control {
    height: 2.25rem !important;
    border-radius: 0.75rem !important;
  }
  &.q-field--dense .q-field__label {
    font-size: 0.8rem !important;
    top: 13px !important;
  }
  &.q-field--filled.q-field--highlighted .q-field__control:after {
    margin-left: 0.6rem !important;
    margin-right: 0.6rem !important;
  }
}
</style>
