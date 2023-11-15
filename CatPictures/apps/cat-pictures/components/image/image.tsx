import { memo } from 'react';
import { ImageWrapperStyled, ImageStyled } from './image.styled';
import { ImageModel } from '../../models/image';

interface ImageProps {
  data: ImageModel;
}

export const Image = memo(({ data }: ImageProps) => {
  return (
    <ImageWrapperStyled>
      <ImageStyled src={data.url} />
    </ImageWrapperStyled>
  );
});
