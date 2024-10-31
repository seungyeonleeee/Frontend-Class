// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
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
  userName: string;
  passWord1: string;
  passWord2: string;
  extraError?: string;
}

const ToDoList01 = () => {
  // const [toDo, setToDo] = useState("");
  // const [toDoError, setToDoError] = useState("");
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // console.log(toDo);

  //   if (toDo.length < 10) {
  //     return setToDoError("To do should be longer...");
  //   }
  // };
  // // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  // //   // HTMLInputElement는 e.target.value 인식 못함 => currentTarget 사용
  // //   // console.log(e.currentTarget.value);
  // //   const {
  // //     currentTarget: { value },
  // //   } = e;
  // //   setToDo(value);
  // // };
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // FormEvent와 같이 쓸 때 자식들의 개별적인 이벤트들은 ChangeEvent
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError("");
  //   setToDo(value);
  // };

  // return (
  //   <Container>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         onChange={onChange}
  //         value={toDo}
  //         type="text"
  //         placeholder="Write ToDo"
  //       />
  //       <input type="submit" value={"ADD"} />
  //     </form>
  //     {toDoError !== "" ? toDoError : null}
  //   </Container>
  // );

  // react-hook-form 사용
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // console.log(register("toDo"));
  // register("식별자이름")
  // console.log(watch());

  const onValid = (data: Form) => {
    // console.log(data);

    if (data.passWord1 !== data.passWord2) {
      setError(
        "passWord2",
        { message: "Password is not the same..." },
        { shouldFocus: true }
      );
    }
    // setError("extraError", {
    //   message: "Now Loading...",
    // });
    setValue("userName", "");
  };
  // console.log(errors);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/g,
              message: "Only naver.com email is allowed...",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "Write Here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("userName", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.userName?.message as string}</span>
        <input
          {...register("passWord1", {
            required: "Password is required...",
            minLength: {
              value: 5,
              message: "Your Password is too short...",
            },
          })}
          type="text"
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <input
          {...register("passWord2", { required: true, minLength: 5 })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.passWord2?.message as string}</span>
        <input type="submit" value={"ADD"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default ToDoList01;
