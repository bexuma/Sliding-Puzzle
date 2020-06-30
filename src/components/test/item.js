/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 120px;
  background-color: ${({ selected }) => (selected ? "#f5f5f5" : "#fff")};
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
`;

const Item = ({ id, label, currentId, setId }) => {
  return (
    <Container
      selected={id === currentId}
      onClick={() => {
        setId(id);
      }}
    >
      {label}
    </Container>
  );
};

export default Item;
