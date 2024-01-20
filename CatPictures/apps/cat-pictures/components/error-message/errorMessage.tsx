import { memo } from 'react';

import css from './errorMessage.module.css';

type ErrorMessageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const ErrorMessage = memo(({ error, reset }: ErrorMessageProps) => {
  return (
    <div className={css['container']}>
      <div>Sorry! Something went wrong...</div>
      <div className={css['error-description']}>{error.message}</div>
      <button className={css['reset-btn']} onClick={reset}>
        Try again
      </button>
    </div>
  );
});
