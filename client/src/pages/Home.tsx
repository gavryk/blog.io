import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SkeletonCard, UIGrid, UIPostCard, UITypography } from '../components';
import { authSelector } from '../redux/slices/auth/selector';
import { fetchPosts, fetchTags } from '../redux/slices/posts/asyncPosts';
import { postsSelector } from '../redux/slices/posts/selector';
import { settingsSelector } from '../redux/slices/settings/selectors';
import { useAppDispatch } from '../redux/store';
import styles from '../styles/pages/HomePage.module.scss';
import { Aside } from '../widgets';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const { auth } = useSelector(authSelector);
  const { posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  const postsItems = posts.map((post) => (
    <UIPostCard
      {...post}
      key={post._id}
      link={`/posts/${post._id}`}
      isEditable={auth?._id === post.user._id}
    />
  ));
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return isLoaded === 'error' ? (
    <>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        An error has occurred!
      </UITypography>
      <UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
        Sorry, we couldn't get posts. Please try again later.
      </UITypography>
    </>
  ) : (
    <div className={styles.homePage}>
      <UIGrid columns={1} gridGap={10}>
        {isLoaded === 'success' ? postsItems : skeletons}
      </UIGrid>
      <Aside />
    </div>
  );
};
