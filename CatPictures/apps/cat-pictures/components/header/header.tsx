import { memo } from 'react';
import Link from 'next/link';
import { Routes } from '@/constants/routes';
import css from './header.module.css';

export const Header = memo(() => {
  return (
    <header className={css['app-header']}>
      <nav className={css['app-menu']}>
        <Link href={Routes.home}>Home</Link>
        <Link href={Routes.about}>About</Link>
      </nav>
    </header>
  );
});
