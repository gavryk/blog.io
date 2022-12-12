import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from './asyncAuth';
import { AuthSliceProps } from './types';

const initialState: AuthSliceProps = {
  auth: null,
  errorString: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.auth = null;
      state.errorString = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
      state.errorString = null;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.auth = null;
      state.errorString = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
