import React from 'react';
import { RegisterForm } from '../features';
import styles from '../styles/pages/Auth.module.scss';

export const Register: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <RegisterForm />
    </div>
  );
};
