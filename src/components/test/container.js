import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Page from "./page";
import List from "./list";

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;
 }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = () => {
  const [id, setId] = useState(1);

  return (
    <Wrapper>
      <GlobalStyle />
      <List id={id} setId={setId} />
      <Page id={id} />
    </Wrapper>
  );
};

export default Container;
