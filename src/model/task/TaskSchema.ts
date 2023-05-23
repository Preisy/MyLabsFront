import * as yup from 'yup';
import { LabTypes } from 'src/global/LabTypes';

export const TaskSchema = {
  taskText: yup.string().required().min(6).label('Task text'),
  type: yup.string().oneOf(LabTypes).required().label('Type'),
  deadline: yup
    .date()
    .typeError('Expected type date')
    .required()
    .min(new Date(), 'Date must be greater than today')
    .label('Deadline'),
  promoName: yup.string().default('').label('Promocode'),
};
