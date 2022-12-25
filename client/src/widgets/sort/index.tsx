import React from 'react';
import { useSelector } from 'react-redux';
import { UIDropdown, UITypography } from '../../components';
import { postsSelector } from '../../redux/slices/posts/selector';
import { SortTypes } from '../../redux/slices/posts/types';
import { sortList } from './model';
import styles from './styles.module.scss';

interface SortWidgetProps {
  sortBy: SortTypes;
  onSort: (obj: SortTypes) => void;
}

export const SortWidget: React.FC<SortWidgetProps> = ({ sortBy, onSort }) => {
  const { filterBy } = useSelector(postsSelector);

  return (
    <div className={styles.root}>
      <UITypography variant="h3" bottomSpace="none" fontWeight="bold">
        {filterBy === '' ? 'All Posts' : `#${filterBy}`}
      </UITypography>
      <UIDropdown list={sortList} selected={sortBy} onSetSort={onSort} />
    </div>
  );
};
