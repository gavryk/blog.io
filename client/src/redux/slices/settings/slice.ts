import { fetchAddPost, fetchUpdatePost } from './../posts/asyncPosts';
import { fetchRegister } from './../auth/asyncAuth';
import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from '../auth/asyncAuth';
import { fetchPosts } from '../posts/asyncPosts';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  isLoaded: 'loading',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Get Posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoaded = 'error';
    });
    //Login
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isLoaded = 'error';
    });
    //Register
    builder.addCase(fetchRegister.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.isLoaded = 'error';
    });
    //Add Post
    builder.addCase(fetchAddPost.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchAddPost.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchAddPost.rejected, (state) => {
      state.isLoaded = 'error';
    });
    //Update Post
    builder.addCase(fetchUpdatePost.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchUpdatePost.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchUpdatePost.rejected, (state) => {
      state.isLoaded = 'error';
    });
  },
});

export const { setLoading } = settingsSlice.actions;

export default settingsSlice.reducer;
