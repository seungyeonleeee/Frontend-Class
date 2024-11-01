import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const CreateTodo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<Form>();
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  // const [toDos, setToDos] = useRecoilState(toDoState);

  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Write a Todo",
          minLength: 1,
        })}
        type="text"
        placeholder="Write a Todo..."
      />
      <input type="submit" value={"ADD"} />
    </Form>
  );
};

export default CreateTodo;
