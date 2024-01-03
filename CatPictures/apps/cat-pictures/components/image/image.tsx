'use client';
import { memo, useCallback, useEffect, useState } from 'react';
import { ImageStyled } from './image.styled';
import { ImageSkeleton } from '../image-skeleton/imageSkeleton';
import { ImageModel } from '../../models/image';

interface ImageProps {
  data: ImageModel;
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
      <ImageStyled
        src={data.url}
        loaded={srcLoaded}
        onLoad={handleOnLoad}
        key={'image'}
      />
    </>
  );
});
