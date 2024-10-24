// 제네릭
// 제네릭이 필요한 상황
// 종합적인 타입을 정의하고 싶을 때 사용
// General : 종합적인

// const func = (value: unknown) => {
//   return value;
// };
// value에 무엇이 들어올지 모름 (미정)
// func(10);
// func("David");
// func([1, 2, 3]);
// func({ name: "David", age: 20 });

// const num = func(10);
// if (typeof num === "string") {
//   num.toUpperCase();
// } // unknown 타입은 타입가드가 반드시 필요함
// // num.toUpperCase(); // any 타입은 error가 뜨지 않음 => 최후의 상황에 쓰는게 좋음

// // 그래서 제네릭이 필요

// // <타입변수 지정>(value: 타입변수 정의): 타입변수 반환
// const func = <T>(value: T): T => {
//   return value;
// };

// // 매개변수가 여러개고 타입이 다를 경우
// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };
// const [a, b] = swap("1", 2);
// console.log(a, b);

// const funcArray = <T>(data: T[]): T => {
//   return data[1];
// };
// const num = funcArray([0, 1, 2]);
// console.log(num);
// const str = funcArray([1, "Hello", "World"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };
// // ...unknown => 어떠한 값이던 다 받을 수 있음
// const str = returnFirst([1, "Hello", "World"]);
// console.log(str);

// 이터러블 객체만 매개변수로 오게
const func4 = <T extends { length: number }>(data: T): number => {
  return data.length;
};
console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));
// console.log(func4(null));
