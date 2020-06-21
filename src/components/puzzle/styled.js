import styled, { css } from "styled-components";

import image from "../../image.png";

const Container = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h1``;

const PuzzleContainer = styled.div`
  width: ${({ side }) => `${600 + side * 2}px`};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Number = styled.span`
  display: none;
`;

const Plate = styled.div`
  width: ${({ sideWidth }) => `${sideWidth}px`};
  height: ${({ sideWidth }) => `${sideWidth}px`};
  margin-left: 2px;
  margin-bottom: 2px;
  position: relative;

  ${({ value, side, sideWidth }) =>
    value !== side ** 2 - 1 &&
    css`
      background-image: url(${image});
      background-position: ${() => {
        const first =
          value % side === 0 ? 0 : sideWidth * (-1) ** (value % side);
        const second =
          Math.floor(value / side) === 0
            ? 0
            : sideWidth * (-1) ** Math.floor(value / side);

        return `${first}px ${second}px`;
      }};

      ${Number} {
        display: inline;
        position: absolute;
        top: 8px;
        left: 8px;
      }
    `};
`;

export { Container, Heading, PuzzleContainer, Plate, Number };
