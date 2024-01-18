'use client';
import { Suspense, memo, useCallback, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatedCat } from '@/components/animated-cat/animatedCat';

import css from './welcome.module.css';

export const Welcome = memo(() => {
  const [hovered, setHovered] = useState(false);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);
  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  return (
    <section className={css['app-welcome']}>
      <div className={css['welcome-text']}>Welcome!</div>
      <Canvas onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        <Suspense fallback={null}>
          <AnimatedCat
            position={[-5, 0, 0]}
            imgSrc={'/img/cat_1.jpg'}
            name={'Rocky'}
            cursorOutOfView={!hovered}
          />
          <AnimatedCat
            position={[5, 0, 0]}
            imgSrc={'/img/cat_2.jpg'}
            name={'Bella'}
            cursorOutOfView={!hovered}
          />
        </Suspense>
      </Canvas>
    </section>
  );
});
