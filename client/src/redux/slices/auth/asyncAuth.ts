import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';
import { LoginFormValue } from './types';

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async () => {});

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params: LoginFormValue, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/login', params);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);
