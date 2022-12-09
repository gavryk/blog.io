import { createSlice } from '@reduxjs/toolkit';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  isLoaded: true,
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
});

export const { setLoading } = settingsSlice.actions;

export default settingsSlice.reducer;
