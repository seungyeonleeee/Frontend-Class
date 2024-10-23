// // 콜백함수
// const clac = (value: number, cb: (arg: number) => void): void => {
//   let add = (a: number, b: number) => a + b;
//   let multiply = (a: number, b: number) => a * b;

//   let result = multiply(add(1, 2), value);
//   cb(result);
// };
// clac(30, (result: number) => console.log(`result is ${result}`));

// 고차함수
// const add =
//   (a: number): ((arg0: number) => number) =>
//   (b: number) =>
//     a + b;
// const result = add(1)(2);
// console.log(result);

// 위 함수를 함수 시그니처로
// 타입별칭
type NumberToNumber = (arg0: number) => number; // 숫자를 받아서 숫자를 반환한다
const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };

  return _add;
};
const result = add(1)(2);
console.log(result);

// 선언형 프로그래밍 코딩 훈련

// 모나드 함수
// 파이프 함수
// 커리 함수
// 람다 함수
