import { memo } from 'react';
import css from './about.module.css';

export const About = memo(() => {
  return <article className={css.container}>This is a PET Project that created in learning purposes.</article>;
});
