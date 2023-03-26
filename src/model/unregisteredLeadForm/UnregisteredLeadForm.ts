import { Task } from 'src/model/task';
import { UserCredsLeadForm } from 'src/model/userCredsLeadForm';

export interface UnregisteredLeadForm extends UserCredsLeadForm, Task {
}
