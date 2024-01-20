import { fetchCatDetails } from 'app/(public-pages)/dashboard/actions';
import { CatDetails } from '../cat-details/catDetails';

type CatDetailsContainerProps = {
  id: string;
};

export async function CatDetailsContainer({ id }: CatDetailsContainerProps) {
  const data = await fetchCatDetails(id);

  return <CatDetails data={data} />;
}
