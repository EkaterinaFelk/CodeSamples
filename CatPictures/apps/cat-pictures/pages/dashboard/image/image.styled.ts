import styled from 'styled-components';

export const ImageStyled = styled.img<{ loaded: boolean }>`
  ${(props) =>
    !props.loaded &&
    `
    position: absolute;
    left: -100%;
    z-index: -2;
  `}
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  object-fit: cover;
`;
