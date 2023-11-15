import { memo } from 'react';
import { WelcomeStyled } from './welcome.styled.ts';

export const Welcome = memo(() => {
  return <WelcomeStyled>Hello! Here you can see cat pictures!</WelcomeStyled>;
});
