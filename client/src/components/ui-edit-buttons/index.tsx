import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRemovePost } from '../../redux/slices/posts/asyncPosts';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

type EditButtonsProp = {
  id: string;
};

export const UIEditButtons: React.FC<EditButtonsProp> = ({ id }) => {
  const dispatch = useAppDispatch();

  const removePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete the post?')) {
      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <div className={styles.root}>
      <Link to={`/posts/${id}/edit`}>
        <button>
          <FontAwesomeIcon icon={faPen} color="#0096c7" />
        </button>
      </Link>
      <button onClick={() => removePost(id)}>
        <FontAwesomeIcon icon={faXmark} size="xl" color="#d62828" />
      </button>
    </div>
  );
};
