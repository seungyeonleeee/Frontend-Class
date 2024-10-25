// Keyof 연산자 : 객체 타입으로부터 모든 속성의 key의 타입을 유니온 형식으로 추출해주는 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }
// const person: Person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

type Person = typeof person;
const person = {
  name: "David",
  age: 20,
  location: "Seoul",
};

// const getProperty = (person: Person, key: "name" | "age" | "location") => {
//   return person[key];
// };
// key값이 추가될 때 마다 계속 수동적으로 써줘야ㅕ 됨

const getProperty = (person: Person, key: keyof typeof person) => {
  return person[key];
};
