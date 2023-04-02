<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import AInput from 'src/components/AInput.vue';
import { SubmissionContext, useForm } from 'vee-validate';
import { fromPairs, map } from 'lodash';
import FieldProps from './types';

interface ADynamicFormProps {
  schema: FieldProps[];
  onSubmit: (
    values: Record<string, unknown>,
    ctx: SubmissionContext<Record<string, unknown>>
  ) => void;
}
const props = defineProps<ADynamicFormProps>();

const schema = fromPairs(
  map(props.schema, (item) => {
    return [item.name, item.rules];
  })
);

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit.withControlled(props.onSubmit);
</script>

<template>
  <div>
    <form @submit="onSubmit">
      <AInput
        v-for="(field, i) in props.schema"
        :key="i"
        :name="field.name"
        :label="field.label"
      />

      <ABtn label="Submit" />
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
