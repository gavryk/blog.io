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
      <rect x="75" y="420" rx="3" ry="3" width="88" height="8" />
      <rect x="75" y="435" rx="3" ry="3" width="52" height="6" />
      <rect x="75" y="470" rx="3" ry="3" width="246" height="20" />
      <rect x="75" y="500" rx="3" ry="3" width="246" height="10" />
      <rect x="75" y="520" rx="3" ry="3" width="60" height="7" />
      <circle cx="35" cy="430" r="25" />
      <rect x="150" y="520" rx="3" ry="3" width="60" height="7" />
      <rect x="6" y="1" rx="0" ry="0" width="100%" height="375" />
    </ContentLoader>
  );
};
