import React from "react";
import styled from "styled-components";

import { list } from "../../list";

const Container = styled.div`
  flex: 1;
  min-height: calc(100vh - 32px);
  padding: 16px;
  border-left: 1px solid gray;
`;

const Page = ({ id, onSubmit, handleSubmit, getValues }) => {
  const model = list.find(item => item.id === id);

  const values = getValues();
  const qtyKey = `[${id}].username`;
  const qty = values[qtyKey];

  console.log(qtyKey);
  console.log(values);

  return (
    <Container>
      <h1>{model.id}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={qty} />

        {/* <div>
          {errors.username && errors.username.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Type at least 4 characters</span>
          )}
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default Page;
