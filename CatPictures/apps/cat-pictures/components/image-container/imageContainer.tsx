'use client';
import { ImageContainerStyled } from './imageContainer.styled';
import { Image } from '../image/image';
import { CatModel } from '../models/cat';
import { use, useEffect, useState } from 'react';
import { fetchCatsImages, queryClient } from './imageContainer.utils';
import { useLoadMore } from 'apps/cat-pictures/hooks/use-load-more/useLoadMore';
import { ImagesSkeleton } from '../image-skeleton/imageSkeleton';

export function ImageContainer() {
  const [loadedCatsData, setLoadedCatsData] = useState<CatModel[] | null>(null);

  const { LoadMoreCallerComponent, data, loading, error } =
    useLoadMore<CatModel[]>(fetchCatsImages);

  const catsData: CatModel[] = use(queryClient(`0`, fetchCatsImages(0)));

  // TODO: refactor ?
  useEffect(() => {
    if (data && data.length) {
      setLoadedCatsData((cats) => {
        if (cats && cats.length) {
          return [...cats, ...data];
        } else {
          return [...data];
        }
      });
    }
  }, [data]);

  return (
    <>
      <ImageContainerStyled>
        {catsData?.map((cat) => (
          <Image key={cat.id} data={cat} isLoaded />
        ))}
        {loadedCatsData?.map((cat) => (
          <Image key={cat.id} data={cat} />
        ))}
      </ImageContainerStyled>

      {loading && <ImagesSkeleton />}
      {error && <div>Smth went wrong...</div>}

      <LoadMoreCallerComponent />
    </>
  );
}
