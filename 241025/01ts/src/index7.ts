// 맵드 타입
// 기존의 객체타입을 기반으로 새로운 객체의 타입을 만들어 주는 타입 제어 기능

interface User {
  id: number;
  name: string;
  age: number;
}

// 사용자의 정보를 찾아오는 역할 함수
const fetchUser = (): User => {
  return {
    id: 1,
    name: "David",
    age: 20,
  };
};

// age의 값만 수정하고 싶을 때
type PartialUser = {
  // [key in "id" | "name" | "age"]?: User[key];
  [key in keyof User]?: User[key];
};

// 사용자의 정보를 업데이트하는 역할 함수
const updateUser = (user: PartialUser) => {
  console.log(user);
};
// updateUser({ id: 10, name: "Peter", age: 20 });
updateUser({ age: 22 });
