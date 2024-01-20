'use client';

import { ReactNode, memo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

import css from './modal.module.css';

type ModalProps = {
  children: ReactNode;
  hasClose?: boolean;
};

export const Modal = memo(({ children, hasClose = true }: ModalProps) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return createPortal(
    <div
      className={css['modal-backdrop']}
      onClick={hasClose ? onDismiss : undefined}
    >
      <div className={css['modal']} onClick={(e) => e.stopPropagation()}>
        {children}
        {hasClose && (
          <button onClick={onDismiss} className={css['close-button']} />
        )}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
});
