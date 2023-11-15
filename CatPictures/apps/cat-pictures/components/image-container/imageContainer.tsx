import axios from 'axios';
import { ImageContainerStyled } from './imageContainer.styled';
import { Image } from '../image/image';
import { CatModel } from '../models/cat';

const url = process.env.NEXT_PUBLIC_LOCALHOST_URL;

export async function ImageContainer() {
  const catsData: CatModel[] = await axios
    .get(`${url}/api/cats`)
    .then((res) => res.data);

  return (
    <ImageContainerStyled>
      {catsData.map((cat) => (
        <Image key={cat.id} data={cat} />
      ))}
    </ImageContainerStyled>
  );
}
