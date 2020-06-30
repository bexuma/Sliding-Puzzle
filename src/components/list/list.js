import React from "react";
import styled from "styled-components";

import Item from "./item";
import { list } from "../../list";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
`;

const List = ({ id, setId }) => {
  return (
    <Container>
      {list.map(item => (
        <Item key={item.id} item={item} currentId={id} setId={setId} />
      ))}
    </Container>
  );
};

export default List;
