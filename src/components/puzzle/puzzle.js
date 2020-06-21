/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Container, Heading, PuzzleContainer, Plate, Number } from "./styled";

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

const Puzzle = ({ puzzle, setPuzzle }) => {
  const [gap, setGap] = useState(8);

  useEffect(() => {
    if (isSolved(puzzle)) {
      // alert("Congratulations, Amina! You solved the puzzle!");
    }
  }, [puzzle]);

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

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(Number).isRequired,
  setPuzzle: PropTypes.func.isRequired
};

export default Puzzle;
