import { createSlice } from '@reduxjs/toolkit';
import { PostsSliceTypes } from './types';

const initialState: PostsSliceTypes = {
  posts: [],
  tags: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
