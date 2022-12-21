import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';
import { PublishPost } from './types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get(`/posts`);
  return data;
});

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const { data } = await axios.get(`/tags`);
  return data;
});

export const fetchAddPost = createAsyncThunk('posts/fetchAddPost', async (params: PublishPost) => {
  const { data } = await axios.post(`/posts`, params);
  return data;
});

export const fetchUpdatePost = createAsyncThunk(
  'posts/fetchUpdatePost',
  async ({ id, fields }: { id: string; fields: PublishPost }) => {
    const { data } = await axios.patch(`/posts/${id}`, fields);
    return data;
  },
);

export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id: string) => {
  await axios.delete(`/posts/${id}`);
});
