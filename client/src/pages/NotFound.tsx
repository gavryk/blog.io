import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/NotFound.module.scss';
import { UIButton, UITypography } from '../components';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.page404}>
      <UITypography variant="h2" fontWeight="bold">
        Page Not Found
      </UITypography>
      <Link to="/">
        <UIButton variants="contained" size="md">
          Back To Home
        </UIButton>
      </Link>
    </div>
  );
};
