import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SkeletonCard, UIGrid, UIPostCard } from '../components';
import { fetchPosts } from '../redux/slices/posts/asyncPosts';
import { postsSelector } from '../redux/slices/posts/selector';
import { settingsSelector } from '../redux/slices/settings/selectors';
import { useAppDispatch } from '../redux/store';
import styles from '../styles/pages/HomePage.module.scss';
import { Aside } from '../widgets';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const { posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postsItems = posts.map((post) => (
    <UIPostCard {...post} key={post._id} link={`/posts/${post._id}`} />
  ));
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return (
    <div className={styles.homePage}>
      <UIGrid columns={1} gridGap={2}>
        {isLoaded ? postsItems : skeletons}
      </UIGrid>
      <Aside />
    </div>
  );
};
