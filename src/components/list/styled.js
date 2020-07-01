import styled from "styled-components";

const ListContainer = styled.div`
  flex: 1;
  min-height: 100vh;
`;

const ItemContainer = styled.div`
  height: 120px;
  background-color: ${({ selected }) => (selected ? "green" : "#fff")};
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ListContainer, ItemContainer };
