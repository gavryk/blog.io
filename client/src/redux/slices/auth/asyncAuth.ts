import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';
import { LoginFormValue } from './types';
import { omit } from 'lodash';

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async () => {});

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params: LoginFormValue, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', params);
      if ('token' in data) {
        localStorage.setItem('user', data.token);
      }
      return omit(data, 'token');
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return omit(data, 'token');
});
