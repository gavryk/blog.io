import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { ImageUpload, UIButton, UIImageUploader, UIInput, UITypography } from '../../components';
import { fetchRegister } from '../../redux/slices/auth/asyncAuth';
import { authSelector } from '../../redux/slices/auth/selector';
import { RegisterFormValues } from '../../redux/slices/auth/types';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { setLoading } from '../../redux/slices/settings/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

type UserImage = {
  url: string;
};

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const { errorString } = useSelector(authSelector);
  const navigate = useNavigate();
  const [userImage, setUImage] = useState<UserImage>();
  const [file, setFile] = useState<ImageUpload>({
    file: null,
    imagePreviewUrl: '',
    fileLoaded: false,
  });

  const setUserImage = async (imageFile: ImageUpload) => {
    setFile(imageFile);
    dispatch(setLoading('loading'));
    try {
      const { data } = await axios.post(`/upload`, imageFile.file);
      setUImage(data);
      dispatch(setLoading('success'));
    } catch (err) {
      console.log(err);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>();
  const onSubmit = (data: RegisterFormValues) => {
    dispatch(
      fetchRegister({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        avatarUrl: file.fileLoaded ? userImage?.url : '',
      }),
    );
    if (errorString === null) {
      reset({ fullName: '', email: '', password: '' });
      setFile({
        file: null,
        imagePreviewUrl: '',
        fileLoaded: false,
      });
      navigate('/login');
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.registerForm}>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        Register
      </UITypography>
      <UIImageUploader onChange={setUserImage} label="upload image" id="file" file={file} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <UIInput
          type="text"
          id="userNameField"
          label="User Name"
          {...register('fullName', { required: 'Please enter your username.' })}
          error={errors.fullName && errors.fullName.message}
        />
        <UIInput
          type="email"
          id="emailField"
          label="Email"
          {...register('email', { required: 'Please enter your email.' })}
          error={errors.email && errors.email.message}
        />
        <UIInput
          type="password"
          id="passwordField"
          label="Password"
          {...register('password', { required: 'Please enter your password.' })}
          error={errors.password && errors.password.message}
        />
        <UIButton fluid type="submit" disabled={!isLoaded || !isValid}>
          Register
        </UIButton>
        <span className={styles.errorDB}>{errorString as React.ReactNode}</span>
        <span className={styles.notice}>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </motion.div>
  );
};
