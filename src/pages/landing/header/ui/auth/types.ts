import FieldProps from 'src/components/ADynamicForm/types';
import { SimpleState } from 'src/global/types';
import { unifiedApiPromise } from 'src/model/response/unifiedApiResponse';
import { SubmissionContext } from 'vee-validate';
import { Ref } from 'vue';

export interface DialogData {
  btnLabel: string;
  state: Ref<SimpleState>;
  title: string;
  schema: FieldProps[];
  onSubmit: (
    values: Record<string, unknown>,
    ctx: SubmissionContext<Record<string, unknown>>
  ) => unifiedApiPromise;
}
