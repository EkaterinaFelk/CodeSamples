'use client';

import axios from 'axios';
import { ImageContainerStyled } from './imageContainer.styled';
import { Image } from '../image/image';
import { CatModel } from '../models/cat';
import { use } from 'react';

const url = process.env.NEXT_PUBLIC_LOCALHOST_URL;

async function fetchCatsImages() {
  const res = await axios.get(`${url}/api/cats`);
  return await res.data;
}

const data = fetchCatsImages();

export function ImageContainer() {
  const catsData: CatModel[] = use(data);

  return (
    <ImageContainerStyled>
      {catsData?.map((cat) => (
        <Image key={cat.id} data={cat} />
      ))}
    </ImageContainerStyled>
  );
}
