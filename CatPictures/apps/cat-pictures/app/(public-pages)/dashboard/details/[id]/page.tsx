import { CatDetails } from '@/pages/details/cat-details/catDetails';

export default function Page({ params }: { params: { id: string } }) {
  return <CatDetails id={params.id} />;
}
