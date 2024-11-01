import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  padding-top: 200px;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  UserName: string;
  Password1: string;
  Password2: string;
  extraError?: string;
}

const ToDoList01 = () => {
  // const [err, setErr] = useState("");
  // const [todo, setTodo] = useState("");
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setErr("");
  //   setTodo(value);
  // };
  // const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (todo.length < 10) {
  //     return setErr("To do should be longer");
  //   }
  // };

  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // console.log(watch());

  const onVaild = (data: Form) => {
    if (data.Password1 !== data.Password2)
      setError(
        "Password2",
        { message: "Password is not the same" },
        { shouldFocus: true }
      );
    setValue("UserName", "");
    // setError("extraError", { message: "Now Loading ..." });
  };
  // console.log(errors);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@+[a-z].[a-z]/g,
              message: "Only naver.com email is allowed",
            },
            minLength: 1,
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: true,
            minLength: 1,
            validate: (v) => (!v.includes("test") ? "No test allowed" : true),
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true, minLength: 1 })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("UserName", { required: true })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.UserName?.message as string}</span>
        <input
          {...register("Password1", {
            required: "Password is required. . . ",
            minLength: { value: 5, message: "Your Password is too short. . ." },
          })}
          type="text"
          placeholder="Password1"
        />
        <span>{errors?.Password1?.message as string}</span>
        <input
          {...register("Password2", { required: true })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.Password2?.message as string}</span>
        <input type="submit" value={"ADD"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default ToDoList01;
