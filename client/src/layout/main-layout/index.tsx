import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className={clsx(styles.layout)}>
      <Header />
      <div className="container space">
        <Outlet />
      </div>
    </div>
  );
};
