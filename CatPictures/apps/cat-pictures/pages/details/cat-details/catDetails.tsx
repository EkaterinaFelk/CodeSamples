import { memo } from 'react';

type CatDetailsProps = {
  id: string;
};

export const CatDetails = memo(({ id }: CatDetailsProps) => {
  return (
    <section>
      <h2>Cat: {id}</h2>
    </section>
  );
});
