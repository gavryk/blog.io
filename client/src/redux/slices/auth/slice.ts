import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin, fetchAuthMe, fetchRegister } from './asyncAuth';
import { AuthProps, AuthSliceProps } from './types';

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
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.auth = null;
      state.errorString = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.auth = action.payload as Omit<AuthProps, 'token'>;
      state.errorString = null;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.auth = null;
      state.errorString = action.payload;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.auth = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.auth = action.payload as Omit<AuthProps, 'token'>;
    });
    builder.addCase(fetchAuthMe.rejected, (state, action) => {
      state.auth = null;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.errorString = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state) => {
      state.errorString = null;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.errorString = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
