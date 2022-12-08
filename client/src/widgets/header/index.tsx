import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Logo, Progress } from '../../components';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const { isLoaded } = useSelector(settingsSelector);

  return (
    <header className={clsx(styles.header)}>
      {!isLoaded && <Progress position="bottom" />}
      <div className="container">
        <Logo link="/" size="lg" />
      </div>
    </header>
  );
};
