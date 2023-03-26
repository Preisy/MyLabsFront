import { TaskSchema } from 'src/model/task';
import { UserCredsLeadFormSchema } from 'src/model/userCredsLeadForm';

export const UnregisteredLeadFormSchema = {
  ...TaskSchema,
  ...UserCredsLeadFormSchema
};
