import React from 'react';
import { UserProps } from '../../redux/slices/posts/types';
import avatarHolder from '../../assets/img/avatar-holder.jpg';
import styles from './styles.module.scss';
import clsx from 'clsx';

type UserInfoProps = Pick<UserProps, 'fullName' | 'avatarUrl'> & {
  additionalText?: string;
  small?: boolean;
};

export const UIUserInfo: React.FC<UserInfoProps> = ({
  fullName,
  avatarUrl,
  additionalText,
  small,
}) => {
  return (
    <div className={clsx(styles.root, { [styles.small]: small })}>
      <div className={styles.userAvatar}>
        <img
          src={avatarUrl ? `${process.env.REACT_APP_BASE_URL}${avatarUrl}` : avatarHolder}
          alt="author"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{fullName}</span>
        <span className={styles.date}>{additionalText}</span>
      </div>
    </div>
  );
};
