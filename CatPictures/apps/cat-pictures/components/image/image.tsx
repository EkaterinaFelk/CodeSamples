'use client';
import { memo } from 'react';
import { ImageStyled } from './image.styled';
import { ImageModel } from '../../models/image';

interface ImageProps {
  data: ImageModel;
}

export const Image = memo(({ data }: ImageProps) => {
  return <ImageStyled imgUrl={data.url} />;
});
