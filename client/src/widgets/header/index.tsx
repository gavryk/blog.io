import clsx from 'clsx';
import React from 'react';
import { Logo } from '../../components';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className="container">
        <Logo link="/" size="lg" />
      </div>
    </header>
  );
};
