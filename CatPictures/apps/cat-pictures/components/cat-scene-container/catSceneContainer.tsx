'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

import css from './catSceneContainer.module.css';

const DynamicWelcomeScene = dynamic(
  () =>
    import('../cat-scene/catScene').then(
      (mod) => mod.WelcomeScene
    ),
  {
    ssr: false,
  }
);

type CatSceneContainerProps = {
  text?: string;
};

export const CatSceneContainer = memo(({ text }: CatSceneContainerProps) => {
  return (
    <section className={css['container']}>
      <div className={css['scene-text']}>{text}</div>
      <DynamicWelcomeScene />
    </section>
  );
});
