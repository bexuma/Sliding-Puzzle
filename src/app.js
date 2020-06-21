import React, { useState } from "react";

import { Puzzle, Sidenav } from "./components";
import { Container, GlobalStyle } from "./styled";

const App = () => {
  const [puzzle, setPuzzle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <Container>
      <GlobalStyle />
      <Puzzle puzzle={puzzle} setPuzzle={setPuzzle} />
      <Sidenav setPuzzle={setPuzzle} />
    </Container>
  );
};

export default App;
