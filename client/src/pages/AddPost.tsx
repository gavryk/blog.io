import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AddPostForm } from '../features';
import { authSelector } from '../redux/slices/auth/selector';

export const AddPost: React.FC = () => {
  const { auth } = useSelector(authSelector);

  if (!localStorage.getItem('token') && auth === null) {
    return <Navigate to="/" />;
  }

  return <AddPostForm />;
};
