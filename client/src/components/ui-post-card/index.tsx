import React from 'react';
import { PostItem } from '../../redux/slices/posts/types';
import { UITypography } from '../ui-typography';
import imgHolder from '../../assets/img/noimg.png';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { UIUserInfo } from '../ui-user-info';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye } from '@fortawesome/free-solid-svg-icons';

type PostCardProps = PostItem & {
  link: string;
};

export const UIPostCard: React.FC<PostCardProps> = ({
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
        <UIUserInfo {...user} additionalText={moment(createdAt).format('LL')} />
        <div className={styles.text}>
          <UITypography variant="h3" bottomSpace="none">
            {title}
          </UITypography>
          <ul className={styles.tags}>
            {tags?.map((tag, index) => (
              <li key={`${tag}_${index}`}>#{tag}</li>
            ))}
          </ul>
          <div className={styles.details}>
            <span>
              <FontAwesomeIcon icon={faEye} /> {viewsCount}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> 3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
