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
    hide-bottom-space
    :error="!!errorMessage"
    :error-message="errorMessage"
    dense
    :label="props.label"
    :label-color="props.labelColor"
    :options="props.options"
    class="aselect"
  />
</template>

<style scoped lang="scss"></style>

<style lang="scss">
.aselect {
  // &.q-field--dense .q-field__control {
  //   height: 2.25rem !important;
  //   border-radius: 0.75rem !important;
  // }
  // &.q-field--dense .q-field__label {
  //   font-size: 0.8rem !important;
  //   top: 13px !important;
  // }
  &.q-field--standard .q-field__control:after {
    display: none;
  }
  .q-field__control {
    border-radius: 0.75rem;
  }
  .q-field__label {
    left: 10px;
  }
  .q-field__native {
    padding-left: 10px;
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
