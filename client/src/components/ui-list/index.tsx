import React from 'react';
import { UIButton } from '../ui-button';
import styles from './styles.module.scss';

interface ListProps {
  title: string;
  children: React.ReactNode;
  button?: string;
  buttonEvent?: () => void;
}

export const UIList: React.FC<ListProps> = ({ title, children, button, buttonEvent }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h4 className={styles.listTitle}>{title}</h4>
        <UIButton variants="text" onClick={buttonEvent}>
          {button}
        </UIButton>
      </div>
      <div className={styles.list}>{children}</div>
    </div>
  );
};
