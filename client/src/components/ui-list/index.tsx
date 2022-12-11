import React from 'react';
import styles from './styles.module.scss';

interface ListProps {
  title: string;
  children: React.ReactNode;
}

export const UIList: React.FC<ListProps> = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <h4 className={styles.listTitle}>{title}</h4>
      <div className={styles.list}>{children}</div>
    </div>
  );
};
