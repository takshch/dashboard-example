import { UserType } from './UserType';

export type CustomerType = UserType & {
  company: string;
};
