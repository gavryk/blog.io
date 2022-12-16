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
import { UIEditButtons } from '../ui-edit-buttons';

type PostCardProps = PostItem & {
  link: string;
  isEditable: boolean;
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
  isEditable,
}) => {
  return (
    <div className={styles.postCard}>
      {isEditable && (
        <div className={styles.editableBtns}>
          <UIEditButtons id={_id} />
        </div>
      )}
      <Link to={link}>
        <div className={styles.cardImage}>
          <img src={imageUrl || imgHolder} alt="" />
        </div>
      </Link>
      <div className={styles.postInfo}>
        <UIUserInfo {...user} additionalText={moment(createdAt).format('LL')} />
        <div className={styles.content}>
          <UITypography variant="h3" bottomSpace="none" fontWeight="medium">
            {title}
          </UITypography>
          <ul className={styles.tags}>
            {tags?.map((tag, index) => (
              <li key={`${tag}_${index}`}>#{tag}</li>
            ))}
          </ul>
          <div className={styles.text}>
            <p>{text?.length > 30 && `${text?.substring(0, 150)}...`}</p>
          </div>
          <div className={styles.details}>
            <span>
              <FontAwesomeIcon icon={faEye} /> {viewsCount}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
