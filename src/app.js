import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { List, Page } from "./components";
import { Container, GlobalStyle } from "./styled";
import { list } from "./list";

const App = () => {
  const [id, setId] = useState(1);
  const formMethods = useForm({ defaultValues: list });
  const onSubmit = data => console.log(data);

  useEffect(() => {
    if (list) {
      list.forEach((item, idx) => {
        formMethods.register(`[${idx + 1}].username`);
      });
    }
  }, [formMethods]);

  return (
    <Container>
      <GlobalStyle />
      <List id={id} setId={setId} />
      <Page id={id} onSubmit={onSubmit} {...formMethods} />
    </Container>
  );
};

export default App;
