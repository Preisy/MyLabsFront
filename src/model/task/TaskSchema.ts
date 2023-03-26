import * as yup from 'yup';
import { LabTypes } from 'src/global/LabTypes';

export const TaskSchema = {
  text: yup.string().required().min(6).max(255).label('Task text'),
  type: yup.string().oneOf(LabTypes).required().label('Type'),
  deadline: yup.date().required().min(new Date(), 'Date must be greater than today').label('Deadline'),
  promocode: yup.string().default('').label('Promocode')
};
