import { configureStore } from '@reduxjs/toolkit';
import settings from './slices/settings/slice';
import posts from './slices/posts/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    settings,
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
