import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  border-left: 1px solid #f1f1f1;
`;

const Page = ({ id }) => {
  return (
    <Container>
      <h1>{id}</h1>
    </Container>
  );
};

export default Page;
