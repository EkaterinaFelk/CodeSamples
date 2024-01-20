'use client';

import { ErrorMessage } from '@/components/error-message/errorMessage';
import { Modal } from '@/components/modal/modal';

export default function Error(props) {
  return (
    <Modal>
      <ErrorMessage {...props} />
    </Modal>
  );
}
