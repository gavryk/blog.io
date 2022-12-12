import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo, Progress, UIButton, UIUserInfo } from '../../components';
import { authSelector } from '../../redux/slices/auth/selector';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const { isLoaded } = useSelector(settingsSelector);
  const { auth } = useSelector(authSelector);

  return (
    <header className={clsx(styles.header)}>
      {isLoaded === 'loading' && <Progress position="bottom" />}
      <div className="container">
        <div className={styles.headerWrapper}>
          <Logo link="/" size="lg" />
          <div className={styles.headerControls}>
            {auth !== null ? (
              <>
                <UIUserInfo fullName={auth.fullName} small />
                <Link to="/add-post">
                  <UIButton size="sm" color="blue">
                    Add Post
                  </UIButton>
                </Link>
                <UIButton size="sm" color="black">
                  Logout
                </UIButton>
              </>
            ) : (
              <>
                <Link to="/login">
                  <UIButton size="sm" variants="outlined">
                    Login
                  </UIButton>
                </Link>
                <Link to="/register">
                  <UIButton size="sm" color="bordo">
                    Sign Up
                  </UIButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
