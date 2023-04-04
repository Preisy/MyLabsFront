<script lang="ts" setup>
import { useField } from 'vee-validate';

interface ASelectProps {
  name: string;
  options: string[];
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
}

const props = withDefaults(defineProps<ASelectProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark',
});

const { errorMessage, value } = useField(props.name);
</script>

<template>
  <q-select
    v-model="value"
    :bg-color="props.bgColor"
    :color="color"
    :error="!!errorMessage"
    :error-message="errorMessage"
    dense
    :label="props.label"
    :label-color="props.labelColor"
    :options="props.options"
    class="br-15px aselect"
  />
</template>

<style scoped lang="scss"></style>

<style lang="scss">
.aselect {
  &.q-field--dense .q-field__control {
    height: 2.25rem !important;
    border-radius: 0.75rem !important;
  }
  &.q-field--dense .q-field__label {
    font-size: 0.8rem !important;
    top: 13px !important;
  }
  &.q-field--standard.q-field--highlighted .q-field__control:after {
    margin-left: 0.6rem;
    margin-right: 0.6rem;
  }
}
</style>
