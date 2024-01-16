import { memo, useCallback, useMemo } from 'react';
import { Route } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CatModel } from '@/models/cat';
import { Routes } from '@/constants/routes';
import cn from 'classnames';

import css from './catCard.module.css';

interface CatCardProps {
  data: CatModel;
}

export const CatCard = memo(({ data }: CatCardProps) => {
  const rgbDataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Uw8AAl0Bbfn0s/kAAAAASUVORK5CYII=`;

  const isCardActive = useMemo(() => {
    return Boolean(data?.breeds.length);
  }, [data?.breeds.length]);

  const renderCard = useCallback(() => {
    return (
      <Image
        src={data.url}
        alt={'Cat Picture'}
        width={400}
        height={400}
        placeholder={'blur'}
        blurDataURL={rgbDataURL}
        className={cn(css['cat-card'], {
          [css['cat-card__active']]: isCardActive,
        })}
      />
    );
  }, [data.url, isCardActive, rgbDataURL]);

  return (
    <>
      {isCardActive ? (
        <Link
          href={`${Routes.details}/${data.id}` as Route}
          passHref
          scroll={false}
          shallow={true}
        >
          {renderCard()}
        </Link>
      ) : (
        renderCard()
      )}
    </>
  );
});
