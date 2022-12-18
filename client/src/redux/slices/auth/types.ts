export type AuthProps = {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
};

export interface AuthSliceProps {
  auth: AuthProps | null;
  errorString: any;
}

export interface LoginFormValue {
  email: '';
  password: string;
}

export type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  avatarUrl?: string;
};
