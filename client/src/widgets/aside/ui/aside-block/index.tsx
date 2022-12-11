import React from 'react';
import styles from './styles.module.scss';

interface AsideBlockProps {
  children: React.ReactNode;
}

export const AsideBlock: React.FC<AsideBlockProps> = ({ children }) => {
  return <div className={styles.asideBlock}>{children}</div>;
};
