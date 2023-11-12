import { memo } from "react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { ImageContainerStyled } from "./imageContainer.styled.ts";
import { Image } from "../image/image.tsx";

export const ImageContainer = memo(() => {
  const [catsData, setCatsData] = useState([]);

  const getQuote = useCallback(() => {
    axios.get("/api", { crossdomain: true }).then((response) => {
      setCatsData(response.data);
    });
  }, []);

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <ImageContainerStyled>
      {catsData.map((cat) => (
        <Image key={cat.id} data={cat} />
      ))}
    </ImageContainerStyled>
  );
});
