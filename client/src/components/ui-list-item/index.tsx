import React from 'react';
import styles from './styles.module.scss';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';

interface ListItemProps {
  name: string;
  icon?: IconProp;
  onClick?: () => void;
  clickable?: boolean;
}

export const UIListItem: React.FC<ListItemProps> = ({
  name,
  icon = faCircle,
  onClick,
  clickable,
}) => {
  return (
    <div>
      <div className={clsx(styles.item, { [styles.clickable]: clickable })} onClick={onClick}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};
