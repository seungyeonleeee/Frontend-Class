// // 함수 타입의 호환성

// type A = () => number;
// type B = () => 10;

// let a: A = () => 10;
// let b: B = () => 10;

// a = b; // 업캐스팅
// // b = a; // 다운캐스팅

// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d; // 업캐스팅
// d = c; // 다운캐스팅

// type Animal = {
//   name: string;
// };
// let animalFunc = (animal: Animal): void => {
//   console.log(animal.name);
// };

// type Dog = {
//   name: string;
//   color: string;
// };
// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // animalFunc = dogFunc;
// dogFunc = animalFunc;
// // 함수의 매개변수의 값은 거의 유일하게 다운캐스팅이 허용되는 상황!

// // 매개변수의 개수가 다른 경우
// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2;
// // func2 = func1;

// // 함수 오버로딩
// // 함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성

// // 함수의 시그니처를 오버로딩 시킨 상황
// function func(a: number): void;
// function func(a: number, b: number, c: number): void;
// // 실제 함수의 실행부
// function func(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }
// // 함수실행 & 호출
// func(1);
// // func(1, 2); // 오버로드가 준비가 안된 상황에서는 error
// func(1, 2, 3);

// 타입가드
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat; // 서로소 유니온 타입

// const warning = (animal: Animal) => {
//   // console.log(animal.isBark ? "짖습니다" : "안짖어요"); // error
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안짖어요");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안할큅니다");
//   }
// };
// warning({ name: "뽀비", isScratch: true });

const isDog = (animal: Animal): animal is Dog => {
  // 타입단언
  return (animal as Dog).isBark !== undefined;
  // return값이 무조건 true
};
// : animal is Dog => return값이 참인 경우에 반환값을 확정
const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};
const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할큅니다");
  }
};
warning({ name: "감자", isBark: false });
