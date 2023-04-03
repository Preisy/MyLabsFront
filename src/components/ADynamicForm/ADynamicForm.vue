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
  buttonWidth?: string;
}
const props = defineProps<ADynamicFormProps>();

const schema = fromPairs(
  map(props.schema, (item) => {
    return [item.name, item.rules];
  })
);

const { handleSubmit, values } = useForm({
  validationSchema: schema,
});

defineExpose({ values });

const onSubmit = handleSubmit.withControlled((values, ctx) =>
  props.onSubmit(values, ctx)
);
</script>

<template>
  <form @submit="onSubmit">
    <AInput
      class="a-input"
      v-for="(field, i) in props.schema"
      :key="i"
      :name="field.name"
      :label="field.label"
    />

    <ABtn
      :label="$t('components.ADynamicForm.next')"
      type="submit"
      :width="buttonWidth"
    />
  </form>
</template>

<style scoped lang="scss">
.a-input {
  width: 100%;
}
</style>
