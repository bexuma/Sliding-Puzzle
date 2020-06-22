import styled, { css } from "styled-components";

const Container = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #fafafa;
`;

const PuzzleContainer = styled.div`
  width: ${({ side }) => `${600 + (side + 1) * 2}px`};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: ${({ side }) => `${600 + (side + 1) * 2}px`};
  border: 16px solid #bdbdbd;
  background-color: #fff;
`;

const Number = styled.span`
  display: none;
`;

const Plate = styled.div`
  width: ${({ sideWidth }) => `${sideWidth}px`};
  height: ${({ sideWidth }) => `${sideWidth}px`};
  margin-top: 2px;
  margin-left: 2px;
  position: relative;

  ${({ value, side, sideWidth, imageId }) =>
    value !== side ** 2 - 1 &&
    css`
      background-image: url(${`https://picsum.photos/id/${imageId}/600`});
      background-position: ${() => {
        const first = sideWidth * (side - (value % side));
        const second = sideWidth * (side - Math.floor(value / side));

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

export { Container, PuzzleContainer, Plate, Number };
