import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../posts/asyncPosts';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  isLoaded: 'loading',
  isAuth: false,
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
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoaded = 'error';
    });
  },
});

export const { setLoading } = settingsSlice.actions;

export default settingsSlice.reducer;
