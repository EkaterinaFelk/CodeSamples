import styled from "styled-components";

import { Header } from "../components/header/header.tsx";
import { Welcome } from "../components/welcome/welcome.tsx";
import { ImageContainer } from "../components/image-container/imageContainer.tsx";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <Welcome />
      <ImageContainer />
    </StyledApp>
  );
}

export default App;
