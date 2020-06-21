import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styled";

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

    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const generatePuzzle = length => {
  const numbers = [...Array(length + 1).keys()].splice(1);

  const puzzle = shuffle(numbers.slice(0, numbers.length - 1));
  puzzle.push(numbers.length);

  return isSolvable(puzzle) ? puzzle : generatePuzzle(length);
};

const Sidenav = ({ length, setPuzzle, moves }) => {
  return (
    <Container>
      <button type="button" onClick={() => setPuzzle(generatePuzzle(length))}>
        Начать
      </button>
      <p>Number of steps: {moves}</p>
    </Container>
  );
};

Sidenav.propTypes = {
  length: PropTypes.number.isRequired,
  setPuzzle: PropTypes.func.isRequired,
  moves: PropTypes.number.isRequired
};

export default Sidenav;
