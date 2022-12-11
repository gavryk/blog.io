import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { UIList, UIListItem } from '../../components';
import { postsSelector } from '../../redux/slices/posts/selector';
import styles from './styles.module.scss';
import { AsideBlock } from './ui';

export const Aside: React.FC = () => {
  const { tags } = useSelector(postsSelector);
  return (
    <div className={styles.root}>
      <AsideBlock>
        <UIList title="Tags">
          {tags.map((item, index) => (
            <UIListItem key={`${item}_${index}`} name={item} icon={faHashtag} clickable />
          ))}
        </UIList>
      </AsideBlock>
    </div>
  );
};
