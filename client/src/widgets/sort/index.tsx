import React from 'react';
import { UIDropdown } from '../../components';
import { SortTypes } from '../../redux/slices/posts/types';
import { sortList } from './model';
import styles from './styles.module.scss';

interface SortWidgetProps {
  sortBy: SortTypes;
  onSort: (obj: SortTypes) => void;
}

export const SortWidget: React.FC<SortWidgetProps> = ({ sortBy, onSort }) => {
  return (
    <div className={styles.root}>
      <UIDropdown list={sortList} selected={sortBy} onSetSort={onSort} />
    </div>
  );
};
