import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CatModel } from '@/models/cat';
import { Routes } from '@/constants/routes';

import css from './catCard.module.css';

interface CatCardProps {
  data: CatModel;
}

export const CatCard = memo(({ data }: CatCardProps) => {
  const rgbDataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Uw8AAl0Bbfn0s/kAAAAASUVORK5CYII=`;

  return (
    <>
      <Link href={`${Routes.details}/${data.id}`} passHref scroll={false}>
        <Image
          src={data.url}
          alt={'Cat Picture'}
          width={400}
          height={400}
          placeholder={'blur'}
          blurDataURL={rgbDataURL}
          className={css['cat-card']}
        />
      </Link>
    </>
  );
});
