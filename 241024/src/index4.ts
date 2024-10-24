// interface

// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "David",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// type Type1 = number | string; // 유니온
// type Type2 = number & string; // 인터섹션

// // interface는 유니온/인터섹션을 쓰지 못함
// interface Person {
//   name: string;
//   age: number;
// }
// // 우회해서 가능
// type Type3 = number | string | Person;
// const person: Type3 = {
//   name: "David",
//   age: 20,
// };

// interface Animal {
//   name: string;
//   age: number;
// }
type Animal = {
  name: string;
  age: number;
};

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }
// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }
// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
// 확장적 개념(extends)으로 사용
interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}
// 다중확장
interface DogCat extends Dog, Cat {
  breed: string;
}
const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
