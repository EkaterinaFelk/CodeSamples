import { memo } from 'react';
import css from './imageSkeleton.module.css';

export const ImagesSkeleton = memo(() => {
  return (
    <div className={css['app-skeleton-container']}>
      {[...Array(20).keys()].map((_, i) => (
        <div className={css['app-skeleton-item']} key={i} />
      ))}
    </div>
  );
});
