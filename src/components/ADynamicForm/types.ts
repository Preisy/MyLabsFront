import { QInputProps } from 'quasar';
import * as yup from 'yup';

export default interface FieldProps {
  label: string;
  name: string;
  rules: yup.Schema;
  type?: QInputProps['type']
}
