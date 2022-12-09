import React from 'react';
import { PostItem } from '../../redux/slices/posts/types';
import { UITypography } from '../ui-typography';
import imgHolder from '../../assets/img/noimg.png';
import avatarHolder from '../../assets/img/avatar-holder.jpg';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

type PostCardProps = PostItem & {
  link: string;
};

export const UIPostItem: React.FC<PostCardProps> = ({
  _id,
  title,
  text,
  tags,
  viewsCount,
  createdAt,
  imageUrl,
  user,
  link,
}) => {
  return (
    <div className={styles.postCard}>
      <Link to={link}>
        <div className={styles.cardImage}>
          <img src={imageUrl || imgHolder} alt="" />
        </div>
      </Link>
      <div className={styles.postInfo}>
        <div className={styles.author}>
          <div className={styles.userAvatar}>
            <img src={user?.avatarUrl ? user.avatarUrl : avatarHolder} alt="author" />
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{user?.fullName}</span>
            <span className={styles.date}>{moment(createdAt).format('LL')}</span>
          </div>
        </div>
        <div className={styles.text}>
          <UITypography variant="h3" bottomSpace="none">
            {title}
          </UITypography>
          <ul className={styles.tags}>
            {tags?.map((tag) => (
              <li>#{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
