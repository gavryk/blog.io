import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UIButton, UIInput, UITypography } from '../../components';
import { fetchLogin } from '../../redux/slices/auth/asyncAuth';
import { authSelector } from '../../redux/slices/auth/selector';
import { LoginFormValue } from '../../redux/slices/auth/types';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const { auth, errorString } = useSelector(authSelector);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValue>();
  const onSubmit = (data: LoginFormValue) => {
    dispatch(fetchLogin(data));
    if (auth !== null && errorString === null) {
      reset({ email: '', password: '' });
    }
  };

  useEffect(() => {
    if (auth !== null && errorString === null) {
      navigate('/');
    }
  }, [auth, errorString, navigate]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.loginForm}>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        Login
      </UITypography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UIInput
          type="email"
          id="userNameField"
          label="User Email"
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
        <UIButton fluid type="submit" disabled={!isLoaded}>
          Login
        </UIButton>
        <span className={styles.errorDB}>{errorString as React.ReactNode}</span>
        <span className={styles.notice}>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </motion.div>
  );
};
