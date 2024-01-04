import { memo } from 'react';
import Link from 'next/link';
import { Routes } from '@/constants/routes';
import css from './header.module.css';

export const Header = memo(() => {
  return (
    <header className={css['app-header']}>
      <h1>
        <Link href={Routes.home}>Cats Pictures!</Link>
      </h1>
      <Link href={Routes.about}>About</Link>
    </header>
  );
});
