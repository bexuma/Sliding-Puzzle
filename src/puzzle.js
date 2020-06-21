import React, { useState, useEffect } from "react";

import { Container, Heading, PuzzleContainer, Plate, Number } from "./styled";

const countInversions = arr => {
  let count = 0;

  for (let i = 0; i < 9 - 1; i += 1) {
    for (let j = i + 1; j < 9; j += 1) {
      // Value 0 is used for empty space
      if (arr[j] && arr[i] && arr[i] > arr[j]) {
        count += 1;
      }
    }
  }

  return count;
};

const isSolvable = puzzle => {
  const inversions = countInversions(puzzle);

  return inversions % 2 === 0;
};

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const generatePuzzle = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const puzzle = shuffle(numbers.slice(0, numbers.length - 1));
  puzzle.push(numbers.length);

  return isSolvable(puzzle) ? puzzle : generatePuzzle();
};

const isSolved = puzzle => {
  const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i += 1) {
    if (puzzle[i] !== solution[i]) {
      return false;
    }
  }

  return true;
};

const swap = (arr, a, b) => {
  const current = arr[a];
  arr[a] = arr[b];
  arr[b] = current;
};

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState(generatePuzzle());
  const [gap, setGap] = useState(8);

  const handleClick = position => {
    if (position === gap) return;

    const arr = [...puzzle];

    if (
      (gap % 3 === position % 3 && Math.abs(gap - position) === 3) ||
      (Math.floor(gap / 3) === Math.floor(position / 3) &&
        Math.abs(gap - position) === 1)
    ) {
      swap(arr, position, gap);
      setGap(position);
      setPuzzle(arr);
    }
  };

  return (
    <Container>
      <Heading>Sliding Puzzle</Heading>
      <PuzzleContainer>
        {puzzle.map((number, index) => (
          <Plate
            key={number}
            value={number - 1}
            onClick={() => handleClick(index)}
          >
            <Number>{number}</Number>
          </Plate>
        ))}
      </PuzzleContainer>
    </Container>
  );
};

export default Puzzle;
