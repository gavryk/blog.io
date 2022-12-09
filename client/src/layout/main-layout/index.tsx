import clsx from 'clsx';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.replace('/', '');

  return (
    <div className={clsx(styles.layout, styles[path])}>
      {path !== 'login' && path !== 'register' && <Header />}
      <div className="container space">
        <Outlet />
      </div>
    </div>
  );
};
