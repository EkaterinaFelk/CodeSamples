import { CatModel } from '@/models/cat';
import { memo } from 'react';
import css from './catDetails.module.css';

type CatDetailsProps = {
  data: CatModel;
};

export const CatDetails = memo(({ data }: CatDetailsProps) => {
  const cat = data.breeds?.[0];

  return (
    <section className={css.container}>
      <h3>Cat: {cat.name}</h3>
      <div>Country: {cat.country_code}</div>
      <div>Origin: {cat.origin}</div>
      <article className={css.description}>{cat.description}</article>
    </section>
  );
});
