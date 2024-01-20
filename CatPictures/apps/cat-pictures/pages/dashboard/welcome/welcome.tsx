import { memo } from 'react';

import { CatSceneContainer } from '@/components/cat-scene-container/catSceneContainer';

export const Welcome = memo(() => {
  return <CatSceneContainer text={'Welcome!'} />;
});
