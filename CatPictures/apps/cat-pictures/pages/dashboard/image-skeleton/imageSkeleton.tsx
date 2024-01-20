import { memo } from 'react';
import css from './imageSkeleton.module.css';

type ImagesSkeletonProps = { limit?: number };

export const ImageSkeleton = memo(() => {
  return <div className={css['app-skeleton-item']} />;
});

export const ImagesSkeleton = memo(({ limit = 8 }: ImagesSkeletonProps) => {
  return (
    <div className={css['app-skeleton-container']}>
      {[...Array(limit).keys()].map((_, i) => (
        <ImageSkeleton key={i} />
      ))}
    </div>
  );
});
