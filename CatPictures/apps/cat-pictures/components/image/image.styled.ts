import styled from 'styled-components';

export const ImageStyled = styled.div<{ imgUrl?: string }>`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
