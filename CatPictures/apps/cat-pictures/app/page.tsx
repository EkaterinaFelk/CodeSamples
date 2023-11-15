'use client';

import styled from 'styled-components';
import { Header } from '../components/header/header';
import { Welcome } from '../components/welcome/welcome';
import { Suspense } from 'react';
import { ImagesSkeleton } from '../components/image-skeleton/imageSkeleton';
import { ImageContainer } from '../components/image-container/imageContainer';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  return (
    <StyledPage>
      <Header />
      <Welcome />
      <Suspense fallback={<ImagesSkeleton />}>
        <ImageContainer />
      </Suspense>
    </StyledPage>
  );
}
