import { memo } from "react";
import { HeaderStyled } from "./header.styled.ts";

export const Header = memo(() => {
  return <HeaderStyled>Cats Pictures!</HeaderStyled>;
});
