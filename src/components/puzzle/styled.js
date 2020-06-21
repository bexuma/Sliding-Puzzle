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
  width: 606px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Number = styled.span`
  display: none;
`;

const Plate = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 2px;
  margin-bottom: 2px;
  position: relative;

  ${({ value }) =>
    value !== 8 &&
    css`
      background-image: url(${image});
      background-position: ${() => {
        const first = value % 3 === 0 ? 0 : 200 * (-1) ** (value % 3);
        const second =
          Math.floor(value / 3) === 0 ? 0 : 200 * (-1) ** Math.floor(value / 3);

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
