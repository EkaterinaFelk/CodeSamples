'use client';

import { ImageContainerStyled } from './catsContainer.styled';
import { CatCard } from '../cat-card/catCard';
import { CatModel } from '@/models/cat';
import { useEffect, useState } from 'react';
import { useLoadMore } from '@/hooks/use-load-more/useLoadMore';
import { ImagesSkeleton } from '../image-skeleton/imageSkeleton';
import { fetchCatsImages } from 'app/(public-pages)/dashboard/actions';

type ImageContainerProps = {
  initialData: CatModel[];
};

export function CatsContainer({ initialData }: ImageContainerProps) {
  const [catsData, setCatsData] = useState<CatModel[] | null>(initialData);

  const { LoadMoreCallerComponent, data, loading, error } =
    useLoadMore<CatModel[]>(fetchCatsImages);

  useEffect(() => {
    setCatsData((prev) => {
      return [...(prev || []), ...(data || [])];
    });
  }, [data]);

  return (
    <>
      <ImageContainerStyled>
        {catsData?.map((cat) => (
          <CatCard key={cat.id} data={cat} />
        ))}
      </ImageContainerStyled>

      {loading && <ImagesSkeleton />}
      {error && <div>Smth went wrong...</div>}

      <LoadMoreCallerComponent />
    </>
  );
}
