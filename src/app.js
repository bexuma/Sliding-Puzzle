import React, { useState } from "react";

import { Puzzle, Sidenav } from "./components";
import { Container, GlobalStyle } from "./styled";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [side, setSide] = useState(4);
  const [puzzle, setPuzzle] = useState([...Array(16 + 1).keys()].splice(1));
  const [gap, setGap] = useState(16 - 1);
  const [moves, setMoves] = useState(0);
  const [isSolvable, setIsSolvable] = useState(true);
  const [imageId, setImageId] = useState(Math.floor(Math.random() * 1084) + 1);

  return (
    <Container>
      <GlobalStyle />
      <Puzzle
        puzzle={puzzle}
        setPuzzle={setPuzzle}
        moves={moves}
        setMoves={setMoves}
        side={side}
        gap={gap}
        setGap={setGap}
        isSolvable={isSolvable}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        imageId={imageId}
      />
      <Sidenav
        side={side}
        setSide={setSide}
        setPuzzle={setPuzzle}
        moves={moves}
        setMoves={setMoves}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        setIsSolvable={setIsSolvable}
        imageId={imageId}
        setImageId={setImageId}
      />
    </Container>
  );
};

export default App;
