import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonCard: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={`100%`}
      height={565}
      viewBox="0 0 800 565"
      backgroundColor="#c4bdbd"
      foregroundColor="#ecebeb">
      <rect x="80" y="410" rx="3" ry="3" width="88" height="8" />
      <rect x="80" y="430" rx="3" ry="3" width="120" height="8" />
      <rect x="80" y="455" rx="3" ry="3" width="246" height="25" />
      <rect x="80" y="490" rx="3" ry="3" width="160" height="10" />
      <rect x="80" y="520" rx="3" ry="3" width="60" height="7" />
      <circle cx="45" cy="425" r="25" />
      <rect x="155" y="520" rx="3" ry="3" width="60" height="7" />
      <rect x="6" y="1" rx="0" ry="0" width="100%" height="375" />
    </ContentLoader>
  );
};
