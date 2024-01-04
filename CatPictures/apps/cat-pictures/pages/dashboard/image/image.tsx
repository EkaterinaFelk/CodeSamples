'use client';

import { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import { ImageStyled } from './image.styled';
import { ImageSkeleton } from '../image-skeleton/imageSkeleton';
import { CatModel } from '@/models/cat';

interface ImageProps {
  data: CatModel;
  isLoaded?: boolean;
}

export const Image = memo(({ data, isLoaded = false }: ImageProps) => {
  const [srcLoaded, setSrcLoaded] = useState(isLoaded);

  const handleOnLoad = useCallback(() => {
    setSrcLoaded(true);
  }, []);

  return (
    <>
      {!srcLoaded && <ImageSkeleton key={'skeleton'} />}
      <Link href={`/dashboard/details/${data.id}`} passHref scroll={false}>
        <ImageStyled
          src={data.url}
          loaded={srcLoaded}
          onLoad={handleOnLoad}
          key={'image'}
        />
      </Link>
    </>
  );
});
