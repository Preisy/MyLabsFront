export interface UserCreds {
  name: string;
  email: string;
  contact: string;
  password: string;
  invitedById?: string | null
}
