<script lang='ts' setup>
import { useField } from 'vee-validate';

interface ASelectProps {
  name: string,
  options: string[],
  label: string;
  color?: string;
  bgColor?: string;
  labelColor?: string;
}

const props = withDefaults(defineProps<ASelectProps>(), {
  color: 'dark',
  bgColor: 'info',
  labelColor: 'dark'
});

const { errorMessage, value } = useField(props.name);

</script>

<template>
  <q-select
    v-model='value'
    :bg-color='props.bgColor'
    :color='color'
    :error='!!errorMessage'
    :error-message='errorMessage'

    :label='props.label'
    :label-color='props.labelColor'
    :options='props.options'
    class='br-15px'
  />
</template>

<style lang='scss' scoped>

</style>
