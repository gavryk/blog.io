import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { uniq } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { UIList, UIListItem } from '../../components';
import { postsSelector } from '../../redux/slices/posts/selector';
import { setFilterBy } from '../../redux/slices/posts/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';
import { AsideBlock } from './ui';

export const Aside: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tags, filterBy } = useSelector(postsSelector);

  const filteringPost = (tag: string) => {
    dispatch(setFilterBy(tag));
  };

  return (
    <div className={styles.root}>
      <AsideBlock>
        <UIList
          title="Tags"
          button="reset"
          buttonEvent={() => filteringPost('')}
          heightSize="small">
          {uniq(tags).map((item, index) => (
            <UIListItem
              key={`${item}_${index}`}
              name={item}
              icon={faHashtag}
              onClick={() => filteringPost(item)}
              activeItem={filterBy}
              clickable
            />
          ))}
        </UIList>
      </AsideBlock>
    </div>
  );
};
