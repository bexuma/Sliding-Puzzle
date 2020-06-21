import React, { useState } from "react";

import { Puzzle, Sidenav } from "./components";
import { Container, GlobalStyle } from "./styled";

const App = () => {
  const [puzzle, setPuzzle] = useState([...Array(10).keys()].splice(1));
  const [moves, setMoves] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <Puzzle
        puzzle={puzzle}
        setPuzzle={setPuzzle}
        moves={moves}
        setMoves={setMoves}
      />
      <Sidenav length={puzzle.length} setPuzzle={setPuzzle} moves={moves} />
    </Container>
  );
};

export default App;
