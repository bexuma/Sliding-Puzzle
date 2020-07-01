import React, { useState } from "react";

import { List, Page } from "./components";
import { AppContainer, GlobalStyle } from "./styled";

const App = () => {
  const [id, setId] = useState(1);

  return (
    <AppContainer>
      <GlobalStyle />
      <List id={id} setId={setId} />
      <Page id={id} />
    </AppContainer>
  );
};

export default App;
