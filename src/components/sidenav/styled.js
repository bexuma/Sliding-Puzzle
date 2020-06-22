import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0e0e0;
`;

const SideController = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 32px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
`;

const SideButton = styled(Side)`
  background-color: #f5f5f5;
  :hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 192px;
  background-color: #f5f5f5;
  margin-bottom: 32px;

  :hover {
    cursor: pointer;
  }
`;

const Moves = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 192px;
  background-color: #fff;
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

export {
  Container,
  SideController,
  SideButton,
  Side,
  ActionButton,
  Moves,
  Heading
};
