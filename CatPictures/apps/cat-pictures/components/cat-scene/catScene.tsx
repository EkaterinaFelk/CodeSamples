'use client';

import { Suspense, memo, useCallback, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatedCat } from '@/components/animated-cat/animatedCat';

export const WelcomeScene = memo(() => {
  const [hovered, setHovered] = useState(false);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);
  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  return (
    <Suspense fallback={null}>
      <Canvas onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
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
      </Canvas>
    </Suspense>
  );
});
