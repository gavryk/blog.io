import { AuthProps } from '../auth/types';

export interface PostsSliceTypes {
  posts: PostItem[];
  tags: string[];
}

export type PostItem = {
  _id: string;
  title: string;
  text: string;
  tags?: string[];
  viewsCount: number;
  imageUrl?: string;
  user: UserProps;
  createdAt: string;
};

export type UserProps = {
  _id: string;
  fullName: string;
  emai: string;
  avatarUrl?: string;
};

export type PublishPost = {
  title: string;
  text: string;
  tags?: string[];
  imageUrl?: string;
};

export type UpdatePost = {
  id: string;
  fields: PublishPost;
};
