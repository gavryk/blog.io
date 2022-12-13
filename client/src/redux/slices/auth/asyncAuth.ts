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
      return omit(data, 'token');
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);
