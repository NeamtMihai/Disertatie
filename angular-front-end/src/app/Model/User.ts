import { Role } from './Role';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
  password: string;
}