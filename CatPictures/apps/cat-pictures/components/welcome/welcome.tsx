import { memo } from 'react';
import css from './welcome.module.css';

export const Welcome = memo(() => {
  return (
    <section className={css['app-welcome']}>
      Hello! Here you can see cat pictures!
    </section>
  );
});
