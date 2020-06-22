import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Container,
  SideController,
  SideButton,
  Side,
  ActionButton,
  Moves,
  Heading
} from "./styled";

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

const isSolved = puzzle => {
  const solution = [...Array(puzzle.length + 1).keys()].splice(1);
  return JSON.stringify(puzzle) === JSON.stringify(solution);
};

const startPuzzle = length => {
  const numbers = [...Array(length + 1).keys()].splice(1);

  const puzzle = shuffle(numbers.slice(0, numbers.length - 1));
  puzzle.push(numbers.length);

  return isSolvable(puzzle) && !isSolved(puzzle) ? puzzle : startPuzzle(length);
};

const generatePuzzle = length => {
  const numbers = [...Array(length + 1).keys()].splice(1);

  return numbers;
};

const imageExists = (url, setIsBroken) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.onload = function() {
    if (request.readyState === request.DONE) {
      setIsBroken(request.status === 404);
    }
  };

  request.send(null);
};

const generateNewImageId = (imageId, setIsBroken) => {
  const newImageId = Math.floor(Math.random() * 1084) + 1;
  const url = `https://picsum.photos/id/${newImageId}/600`;

  imageExists(url, setIsBroken);
  return newImageId !== imageId ? newImageId : generateNewImageId(imageId);
};

const Sidenav = ({
  side,
  setSide,
  setPuzzle,
  moves,
  setMoves,
  isStarted,
  setIsStarted,
  imageId,
  setImageId
}) => {
  const [isBroken, setIsBroken] = useState(false);
  const length = side ** 2;

  useEffect(() => {
    if (isBroken) {
      const newImageId = generateNewImageId(imageId, setIsBroken);
      setImageId(newImageId);
      setIsBroken(false);
    }
  }, [imageId, isBroken, setImageId]);

  useEffect(() => {
    setPuzzle(generatePuzzle(length));
  }, [setPuzzle, length]);

  useEffect(() => {
    if (!isStarted) setPuzzle(generatePuzzle(length));
  }, [setPuzzle, length, isStarted]);

  if (isStarted) {
    return (
      <Container>
        <Heading>
          Sliding
          <br />
          Puzzle
        </Heading>
        <Moves>Количество ходов: {moves}</Moves>

        <ActionButton
          onClick={() => {
            setIsStarted(false);
            setMoves(0);
          }}
        >
          Назад
        </ActionButton>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>
        Sliding
        <br />
        Puzzle
      </Heading>

      <SideController>
        <SideButton
          onClick={() => (side > 2 ? setSide(side - 1) : null)}
          disabled={side <= 2}
        >
          -
        </SideButton>
        <Side>{side}</Side>
        <SideButton
          onClick={() => (side < 10 ? setSide(side + 1) : null)}
          disabled={side >= 10}
        >
          +
        </SideButton>
      </SideController>

      <ActionButton
        onClick={() => {
          const newImageId = generateNewImageId(imageId, setIsBroken);
          setImageId(newImageId);
        }}
      >
        Сменить картинку
      </ActionButton>

      <ActionButton
        onClick={() => {
          setPuzzle(startPuzzle(length));
          setIsStarted(true);
        }}
      >
        Начать
      </ActionButton>
    </Container>
  );
};

Sidenav.propTypes = {
  side: PropTypes.number.isRequired,
  setSide: PropTypes.func.isRequired,
  setPuzzle: PropTypes.func.isRequired,
  moves: PropTypes.number.isRequired,
  setMoves: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
  setIsStarted: PropTypes.func.isRequired,
  imageId: PropTypes.number.isRequired,
  setImageId: PropTypes.func.isRequired
};

export default Sidenav;
