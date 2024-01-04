'use client';

import { memo } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

import css from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = memo((props: ModalProps) => {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className={css['modal-backdrop']}>
      <div className={css['modal']}>
        {props.children}
        <button onClick={onDismiss} className={css['close-button']} />
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
});
