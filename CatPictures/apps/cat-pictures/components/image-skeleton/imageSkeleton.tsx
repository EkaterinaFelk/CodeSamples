import { memo } from 'react';

import {
  ImageSkeletonStyled,
  ItemSkeletonStyled,
} from './imageSkeleton.styled';

export const ImagesSkeleton = memo(() => {
  return (
    <ImageSkeletonStyled>
      {Array(20).map((_, i) => (
        <ItemSkeletonStyled key={i} />
      ))}
    </ImageSkeletonStyled>
  );
});
