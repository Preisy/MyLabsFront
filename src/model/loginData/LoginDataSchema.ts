import { UserCredsSchema } from '../userCreds';

export const LoginDataSchema = {
  email: UserCredsSchema.email,
  password: UserCredsSchema.password,
};
