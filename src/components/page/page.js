import React from "react";

import { useForm } from "react-hook-form";
import { list } from "../../list";
import { PageContainer } from "./styled";

const Page = ({ id }) => {
  const profile = list.find(item => item.id === id);

  const { handleSubmit, register } = useForm({
    defaultValues: {
      username: profile.username
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <PageContainer>
      <h1>{profile.id}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" ref={register({ required: true })} />

        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
};

export default Page;
