import React from "react";

import Item from "./item";
import { list } from "../../list";
import { ListContainer } from "./styled";

const List = ({ id, setId }) => (
  <ListContainer>
    {list.map(item => (
      <Item key={item.id} item={item} id={id} setId={setId} />
    ))}
  </ListContainer>
);

export default List;
