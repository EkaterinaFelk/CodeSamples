import { memo } from 'react';

import css from './header.module.css';

export const Header = memo(() => {
  return <header className={css['app-header']}>Cats Pictures!</header>;
});
