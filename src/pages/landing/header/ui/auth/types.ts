import FieldProps from 'src/components/ADynamicForm/types';
import { SubmissionContext } from 'vee-validate';

export interface DialogData {
  title: string;
  schema: FieldProps[];
  onSubmit: (
    values: Record<string, unknown>,
    ctx: SubmissionContext<Record<string, unknown>>
  ) => boolean;
}
