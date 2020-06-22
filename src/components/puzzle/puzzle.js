/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Container, PuzzleContainer, Plate, Number } from "./styled";

const isSolved = puzzle => {
  const solution = [...Array(puzzle.length + 1).keys()].splice(1);

  return JSON.stringify(puzzle) === JSON.stringify(solution);
};

const swap = (arr, a, b) => {
  const current = arr[a];
  arr[a] = arr[b];
  arr[b] = current;
};

const hadnleMovesText = moves => {
  let text = `${moves} `;

  switch (moves % 10) {
    case 1:
      text += "ход";
      break;
    case 2:
    case 3:
    case 4:
      text += "хода";
      break;
    default:
      text += "ходов";
  }

  return text;
};

const Puzzle = ({
  puzzle,
  setPuzzle,
  moves,
  setMoves,
  side,
  gap,
  setGap,
  isStarted,
  setIsStarted,
  imageId
}) => {
  useEffect(() => {
    setGap(side ** 2 - 1);
  }, [setGap, side]);

  useEffect(() => {
    if (isStarted && isSolved(puzzle)) {
      alert(`Поздравляем! Вы собрали пазл за ${hadnleMovesText(moves)}`);
      setIsStarted(false);
    }
  }, [isStarted, moves, puzzle, setIsStarted]);

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
      <PuzzleContainer side={side}>
        {puzzle.map((number, index) => (
          <Plate
            key={number}
            side={side}
            sideWidth={600 / side}
            value={number - 1}
            imageId={imageId}
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
  setMoves: PropTypes.func.isRequired,
  side: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  setGap: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
  setIsStarted: PropTypes.func.isRequired,
  imageId: PropTypes.number.isRequired
};

export default Puzzle;
