import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async () => {});

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});
