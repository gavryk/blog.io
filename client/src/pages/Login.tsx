import React from 'react';
import { LoginForm } from '../features';
import styles from '../styles/pages/Auth.module.scss';

export const Login: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <LoginForm />
    </div>
  );
};
