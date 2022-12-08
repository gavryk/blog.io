import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Logo, Progress, UIButton } from '../../components';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const { isLoaded } = useSelector(settingsSelector);

  return (
    <header className={clsx(styles.header)}>
      {!isLoaded && <Progress position="bottom" />}
      <div className="container">
        <div className={styles.headerWrapper}>
          <Logo link="/" size="lg" />
          <UIButton size="sm" variants="outlined">
            Login
          </UIButton>
          <UIButton size="sm" color="bordo">
            Sign Up
          </UIButton>
        </div>
      </div>
    </header>
  );
};
