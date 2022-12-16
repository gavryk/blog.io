import axios from '../axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import imgHolder from '../assets/img/noimg.png';
import { setLoading } from '../redux/slices/settings/slice';
import { PostItem } from '../redux/slices/posts/types';
import { UITypography, UIUserInfo } from '../components';
import moment from 'moment';
import styles from '../styles/pages/Single.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const Single: React.FC = () => {
  const [data, setData] = useState<PostItem>();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setLoading('loading'));
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        dispatch(setLoading('success'));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading('error'));
        alert('Error while receiving the article!');
      });
  }, [dispatch, id]);

  return (
    <div className={styles.singlePost}>
      <div className={styles.postImage}>
        <img src={data?.imageUrl || imgHolder} alt={data?.title} />
      </div>
      <div className={styles.info}>
        {data?.user && (
          <UIUserInfo {...data?.user} additionalText={moment(data?.createdAt).format('LL')} />
        )}
        <UITypography variant="h2" textAlign="center" fontWeight="medium">
          {data?.title}
        </UITypography>
        <div className={styles.text}>
          <p>{data?.text}</p>
        </div>
        <div className={styles.details}>
          <span>
            <FontAwesomeIcon icon={faEye} /> {data?.viewsCount}
          </span>
        </div>
      </div>
    </div>
  );
};
