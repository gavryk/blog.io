import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, fetchTags, fetchRemovePost } from './asyncPosts';
import { PostsSliceTypes, SortTypes } from './types';

const initialState: PostsSliceTypes = {
  posts: [],
  tags: [],
  sortBy: {
    label: 'Latest (DESC)',
    name: 'createdAt',
    order: 'desc',
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortTypes>) => {
      state.sortBy = action.payload;
    },
  },
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

export const { setSortBy } = postsSlice.actions;

export default postsSlice.reducer;
