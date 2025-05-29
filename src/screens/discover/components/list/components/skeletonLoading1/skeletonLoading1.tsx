import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

const SkeletonLoading1 = props => (
  <ContentLoader
    width={100}
    height={400}
    viewBox="0 0 10 10"
    backgroundColor="#868080FF"
    foregroundColor="#C9B2B2FF"
    {...props}>
    <Rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
    <Rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
    <Rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
  </ContentLoader>
);

export default SkeletonLoading1;
