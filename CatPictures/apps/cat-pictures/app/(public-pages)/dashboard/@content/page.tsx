import { CatsContainer } from '@/pages/dashboard/cats-container/catsContainer';
import { fetchCats } from '../actions';

export default async function Page() {
  const cats = await fetchCats();

  return <CatsContainer initialData={cats} />;
}
