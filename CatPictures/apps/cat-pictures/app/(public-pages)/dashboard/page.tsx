import { CatsContainer } from '@/pages/dashboard/cats-container/catsContainer';
import { fetchCatsImages } from './actions';

export default async function Page() {
  const cats = await fetchCatsImages();

  return <CatsContainer initialData={cats} />;
}
