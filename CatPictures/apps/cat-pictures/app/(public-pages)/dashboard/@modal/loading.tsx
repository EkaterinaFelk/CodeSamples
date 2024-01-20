import { Modal } from '@/components/modal/modal';
import loading from '@/resources/loading.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <Modal hasClose={false}>
      <Image src={loading} alt={'loading'} height={30} width={30} />
    </Modal>
  );
}
