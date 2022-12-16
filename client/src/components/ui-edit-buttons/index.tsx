import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type EditButtonsProp = {
  id: string;
};

const removePost = (id: string) => {
  console.log(id);
};

export const UIEditButtons: React.FC<EditButtonsProp> = ({ id }) => {
  return (
    <div className={styles.root}>
      <Link to={`/post/${id}/edit`}>
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
