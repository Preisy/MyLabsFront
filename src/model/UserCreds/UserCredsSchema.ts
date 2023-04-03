import * as yup from 'yup';

export const UserCredsSchema = {
  name: yup.string().required(),
  email: yup.string().email().required().label('Email'),
  contact: yup.string().required().label('Contact'),
  password: yup.string().required().min(6).label('password'),
};
