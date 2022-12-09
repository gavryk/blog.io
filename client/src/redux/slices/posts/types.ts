export interface PostsSliceTypes {
  posts: PostItem[];
  tags: TagItem[];
}

export type PostItem = {
  id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
};

export type TagItem = {
  tag: string;
};
