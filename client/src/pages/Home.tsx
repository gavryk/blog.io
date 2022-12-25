import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SkeletonCard, UIGrid, UIPostCard, UITypography } from '../components';
import { authSelector } from '../redux/slices/auth/selector';
import { fetchPosts, fetchTags } from '../redux/slices/posts/asyncPosts';
import { postsSelector } from '../redux/slices/posts/selector';
import { setSortBy } from '../redux/slices/posts/slice';
import { SortTypes } from '../redux/slices/posts/types';
import { settingsSelector } from '../redux/slices/settings/selectors';
import { useAppDispatch } from '../redux/store';
import styles from '../styles/pages/HomePage.module.scss';
import { Aside } from '../widgets';
import { SortWidget } from '../widgets/sort';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const { auth } = useSelector(authSelector);
  const { posts, sortBy, filterBy } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts({ sortBy, filterBy }));
    dispatch(fetchTags());
  }, [dispatch, sortBy, filterBy]);

  const selectSortHandler = useCallback(
    (type: SortTypes) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

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
      <SortWidget sortBy={sortBy} onSort={selectSortHandler} />
      <UIGrid columns={1} gridGap={10}>
        {isLoaded === 'success' ? postsItems : skeletons}
      </UIGrid>
      <Aside />
    </div>
  );
};
