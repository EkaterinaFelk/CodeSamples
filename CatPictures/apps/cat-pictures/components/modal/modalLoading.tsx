import { memo } from 'react';
import Image from 'next/image';

import css from './modal.module.css';
import loadingGif from '@/resources/loading.gif';

export const ModalLoading = memo(() => {
  return (
    <div className={css['modal-backdrop']}>
      <div className={css['modal']}>
        <Image src={loadingGif} alt="loading..." />
      </div>
    </div>
  );
});
