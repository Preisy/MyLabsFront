import * as yup from 'yup';

export const UserCredsLeadFormSchema = {
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('Email'),
  contact: yup.string().required().label('Contact'),
};
