import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchTags, fetchRemovePost } from './asyncPosts';
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
    //Get Posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = [];
    });
    //Get Tags
    builder.addCase(fetchTags.pending, (state) => {
      state.tags = [];
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.tags = [];
    });
    //Remove Post
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.posts = state.posts.filter((obj) => obj._id !== action.meta.arg);
    });
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
