import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;
 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export { Container, GlobalStyle };
