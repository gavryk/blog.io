import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from './asyncAuth';
import { AuthSliceProps } from './types';

const initialState: AuthSliceProps = {
  auth: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.auth = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.auth = null;
    });
  },
});

// export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
