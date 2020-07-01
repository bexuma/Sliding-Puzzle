/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import { ItemContainer } from "./styled";

const Item = ({ item, id, setId }) => (
  <ItemContainer
    selected={item.id === id}
    onClick={() => {
      setId(item.id);
    }}
  >
    {item.fullName}
  </ItemContainer>
);

export default Item;
