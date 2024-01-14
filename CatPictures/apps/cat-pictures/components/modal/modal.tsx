'use client';

import { ReactNode, memo } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

import css from './modal.module.css';

type ModalProps = {
  children: ReactNode;
  hasClose?: boolean;
};

export const Modal = memo(({ children, hasClose = true }: ModalProps) => {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div
      className={css['modal-backdrop']}
      onClick={hasClose ? onDismiss : undefined} // TODO: fix click on modal
    >
      <div className={css['modal']}>
        {children}
        {hasClose && (
          <button onClick={onDismiss} className={css['close-button']} />
        )}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
});
