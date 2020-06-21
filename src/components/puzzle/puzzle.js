/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Container, Heading, PuzzleContainer, Plate, Number } from "./styled";

const isSolved = puzzle => {
  const solution = [...Array(puzzle.length + 1).keys()].splice(1);

  for (let i = 0; i < puzzle.length; i += 1) {
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

const Puzzle = ({ puzzle, setPuzzle, moves, setMoves }) => {
  const [gap, setGap] = useState(puzzle.length - 1);
  const side = Math.sqrt(puzzle.length);

  useEffect(() => {
    if (isSolved(puzzle)) {
      // alert("Congratulations, Amina! You solved the puzzle!");
    }
  }, [puzzle]);

  const handleClick = position => {
    if (position === gap) return;

    const arr = [...puzzle];

    if (
      (gap % side === position % side && Math.abs(gap - position) === side) ||
      (Math.floor(gap / side) === Math.floor(position / side) &&
        Math.abs(gap - position) === 1)
    ) {
      swap(arr, position, gap);
      setMoves(moves + 1);
      setGap(position);
      setPuzzle(arr);
    }
  };

  return (
    <Container>
      <Heading>Sliding Puzzle</Heading>
      <PuzzleContainer side={side}>
        {puzzle.map((number, index) => (
          <Plate
            key={number}
            side={side}
            sideWidth={600 / side}
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
  puzzle: PropTypes.arrayOf(PropTypes.number).isRequired,
  setPuzzle: PropTypes.func.isRequired,
  moves: PropTypes.number.isRequired,
  setMoves: PropTypes.func.isRequired
};

export default Puzzle;
