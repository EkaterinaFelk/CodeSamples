import { CatDetailsContainer } from '@/pages/details/cat-details-container/catDetailsContainer';

export default function Page({ params }: { params: { id: string } }) {
  return <CatDetailsContainer id={params.id} />;
}
