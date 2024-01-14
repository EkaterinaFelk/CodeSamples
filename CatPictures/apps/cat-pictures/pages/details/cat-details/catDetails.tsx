import { CatModel } from '@/models/cat';
import { memo } from 'react';
import css from './catDetails.module.css';

type CatDetailsProps = {
  data: CatModel;
};

export const CatDetails = memo(({ data }: CatDetailsProps) => {
  return (
    <section>
      <h2>Cat: {data?.breeds?.[0].name}</h2>
      <article className={css.description}>
        {data?.breeds?.[0].description}
      </article>
    </section>
  );
});
