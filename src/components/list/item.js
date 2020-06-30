/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 120px;
  background-color: ${({ selected }) => (selected ? "green" : "#fff")};
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = ({ item, currentId, setId }) => {
  return (
    <Container
      selected={item.id === currentId}
      onClick={() => {
        setId(item.id);
      }}
    >
      {item.label}
    </Container>
  );
};

export default Item;
