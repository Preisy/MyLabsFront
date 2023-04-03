import { FieldState, FormContext, FormState } from 'vee-validate';

type GenericFormValues = Record<string, never>;

export interface VeeSubmitActions<TValues extends GenericFormValues> {
  evt: SubmitEvent;
  controlledValues: GenericFormValues;
  resetField(
    field: keyof TValues,
    state?: Partial<FieldState<keyof TValues>>
  ): void;
  resetForm: (state?: Partial<FormState<TValues>>) => void;
  // setErrors(fields: Partial<Record<keyof TValues, boolean>>): void;
  // setErrors: (fields: FormErrors<TValues>) => void;
  setErrors: FormContext['setErrors'];
  setFieldError: (
    field: keyof TValues,
    message: string | string[] | undefined
  ) => void;
  setFieldTouched: (field: keyof TValues, isTouched: boolean) => void;
  setFieldValue<T extends keyof TValues>(field: T, value: TValues[T]): void;
  // setFieldValue<T extends keyof TValues>(field: T, value: TValues[T], opts?: Partial<SetFieldValueOptions>): void;
  setTouched: (fields: Partial<Record<keyof TValues, boolean>>) => void;
  setValues<T extends keyof TValues>(
    fields: Partial<Record<T, TValues[T]>>
  ): void;
}
