import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './asyncPosts';
import { PostsSliceTypes } from './types';

const initialState: PostsSliceTypes = {
  posts: [],
  tags: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = [];
    });
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
