export type AuthProps = {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
};

export interface AuthSliceProps {
  auth: AuthProps | null;
}
