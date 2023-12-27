import { Header } from '../components/header/header';
import { Welcome } from '../components/welcome/welcome';
import { Suspense } from 'react';
import { ImagesSkeleton } from '../components/image-skeleton/imageSkeleton';
import { ImageContainer } from '../components/image-container/imageContainer';

export default function Index() {
  return (
    <div>
      <Header />
      <Welcome />
      <Suspense fallback={<ImagesSkeleton />}>
        <ImageContainer />
      </Suspense>
    </div>
  );
}
