import { UserCredsSchema } from '../UserCreds';

export const LoginDataSchema = {
  email: UserCredsSchema.email,
  password: UserCredsSchema.password,
};
