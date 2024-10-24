// 함수 타입 정의

// const func = (a: number, b: number): number => {
//   return a + b;
// };

// // 기본 매개변수 타입 정의
// // name이 없으면 "David"
// const func1 = (name = "David"): void => {
//   console.log(`name: ${name}`);
// };
// func1("이승연");

// // 선택적 매개변수
// // 반드시 매개변수들 중 맨 마지막에 작성!!
// const self = (name = "사용자", tall?: number): void => {
//   console.log(`${name}님 반갑습니다!`);
//   if (typeof tall === "number") {
//     console.log(`${name}님의 키는 ${tall}cm 입니다.`);
//   }
// };
// self("이승연", 180);

// // 전개연산자
// // const getItem = (...rest: number[]): number => {
// //   let sum = 0;
// //   rest.forEach((it) => (sum += it));
// //   return sum;
// // };
// // 튜플
// const getItem = (...rest: [number, number, number]): number => {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// };
// getItem(1, 2, 3);
// // getItem(1, 2, 3, 4); // error

// 타입별칭 생성 후 함수 시그니처 적용
type Add = (a: number, b: number) => number;
const add0: Add = (a, b) => a + b;
const add1: Add = (a, b) => a - b;
const add2: Add = (a, b) => a * b;
const add3: Add = (a, b) => a / b;
const add4: Add = (a, b) => a % b;
console.log(add0(4, 2), add1(4, 2), add2(4, 2), add3(4, 2), add4(4, 2));
