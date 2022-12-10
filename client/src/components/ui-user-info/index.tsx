import React from 'react';
import { UserProps } from '../../redux/slices/posts/types';
import avatarHolder from '../../assets/img/avatar-holder.jpg';
import styles from './styles.module.scss';

type UserInfoProps = Pick<UserProps, 'fullName' | 'avatarUrl'> & {
  additionalText?: string;
};

export const UIUserInfo: React.FC<UserInfoProps> = ({ fullName, avatarUrl, additionalText }) => {
  return (
    <div className={styles.root}>
      <div className={styles.userAvatar}>
        <img src={avatarUrl || avatarHolder} alt="author" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{fullName}</span>
        <span className={styles.date}>{additionalText}</span>
      </div>
    </div>
  );
};
