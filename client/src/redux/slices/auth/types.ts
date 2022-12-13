import { Omit } from 'lodash';

export type AuthProps = {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  token?: string;
};

export interface AuthSliceProps {
  auth: Omit<AuthProps, 'token'> | null;
  errorString: any;
}

export interface LoginFormValue {
  email: '';
  password: string;
}
