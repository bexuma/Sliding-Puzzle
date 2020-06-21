import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 606px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ empty }) => (empty ? "white" : "green")};
  margin-left: 2px;
  margin-bottom: 2px;
`;

const App = () => {
  const [puzzle, setPuzzle] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const [gap, setGap] = useState({ row: 2, col: 2 });

  const handleClick = (row, col) => {
    // create the copy of puzzle
    const arr = JSON.parse(JSON.stringify(puzzle));

    if (
      (gap.col === col && Math.abs(gap.row - row) < 2) ||
      (gap.row === row && Math.abs(gap.col - col) < 2)
    ) {
      // swap the values
      const current = arr[row][col];
      arr[row][col] = arr[gap.row][gap.col];
      arr[gap.row][gap.col] = current;

      setGap({ row, col });
      setPuzzle(arr);
    }
  };

  return (
    <Container>
      {puzzle.map((rowArr, row) =>
        rowArr.map((value, col) => (
          <Box
            empty={value === 9}
            key={value}
            onClick={() => handleClick(row, col)}
          >
            {value}
          </Box>
        ))
      )}
    </Container>
  );
};

export default App;
