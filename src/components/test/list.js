/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styled from "styled-components";

import Item from "./item";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
`;

const list = [
  { id: 1, label: "Number 1" },
  { id: 2, label: "Number 2" },
  { id: 3, label: "Number 3" }
];

const List = ({ id, setId }) => {
  return (
    <Container>
      {list.map(({ id: itemId, label }) => (
        <Item
          key={itemId}
          id={itemId}
          label={label}
          currentId={id}
          setId={setId}
        />
      ))}
    </Container>
  );
};

export default List;
