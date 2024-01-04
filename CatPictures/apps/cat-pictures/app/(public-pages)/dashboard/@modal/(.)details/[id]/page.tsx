import { Modal } from '@/components/modal/modal';
import { CatDetails } from '@/pages/details/cat-details/catDetails';

export default function CatModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <CatDetails id={params.id} />;
    </Modal>
  );
}
