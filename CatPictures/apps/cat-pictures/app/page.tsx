import { Header } from '../components/header/header';
import { Welcome } from '../components/welcome/welcome';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ImagesSkeleton } from '../components/image-skeleton/imageSkeleton';
import { ImageContainer } from '../components/image-container/imageContainer';

export default function Index() {
  return (
    <div>
      <Header />
      <Welcome />
      <ErrorBoundary fallback={<div>Smth went wrong...</div>}>
        <Suspense fallback={<ImagesSkeleton />}>
          <ImageContainer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
