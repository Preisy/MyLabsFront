import * as yup from 'yup';
import { UserCredsSchema } from '../userCreds';

export const LoginDataSchema = {
  email: UserCredsSchema.email,
  password: UserCredsSchema.password,
};
