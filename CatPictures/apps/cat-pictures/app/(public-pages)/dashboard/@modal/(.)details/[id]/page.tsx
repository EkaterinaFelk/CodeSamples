import { Modal } from '@/components/modal/modal';
import { CatDetailsContainer } from '@/pages/details/cat-details-container/catDetailsContainer';

export default function CatModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <CatDetailsContainer id={params.id} />
    </Modal>
  );
}
