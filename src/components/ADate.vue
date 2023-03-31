<script lang="ts" setup>
import { useField } from 'vee-validate';

interface ASelectProps {
  name: string;
  options: string[];
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
  // placeholder?: string;
}

const props = withDefaults(defineProps<ASelectProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark',
  // placeholder: ''
});

const { errorMessage, value } = useField(props.name);
</script>

<template>
  <q-file
    v-model="value"
    :bg-color="props.bgColor"
    :color="color"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :label="props.label"
    :label-color="props.labelColor"
    class="br-15px"
    standout
  />
</template>

<style lang="scss" scoped></style>
