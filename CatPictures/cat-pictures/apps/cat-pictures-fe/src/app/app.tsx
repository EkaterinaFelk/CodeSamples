import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [catsData, setCatsData] = useState([]);

  const getQuote = useCallback(() => {
    axios
      .get('http://localhost:3000/', { crossdomain: true })
      .then((response) => {
        setCatsData(response.data);
      });
  }, []);

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <StyledApp>
      <>
        {catsData.map((cat) => (
          <div key={cat.id}>
            <img src={cat.url} />
          </div>
        ))}
      </>
      <NxWelcome title="cat-pictures-fe" />
    </StyledApp>
  );
}

export default App;

