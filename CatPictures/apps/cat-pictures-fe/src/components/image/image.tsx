import { memo } from "react";
import { ImageWrapperStyled, ImageStyled } from "./image.styled.ts";

interface ImageProps {
  data: {
    url: string;
  }
}

export const Image = memo(({ data }: ImageProps) => {
  return (
    <ImageWrapperStyled>
      <ImageStyled src={data.url} />
    </ImageWrapperStyled>
  );
});
