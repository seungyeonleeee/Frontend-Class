// JS ES6 => 혼종
// Map & Set
// 배열 & 객체
// 배열의 장점 : 인덱스 // 개수 // 넣고, 빼고
// 객체의 장점 : 프로퍼티 형태 유지 (어떤 자료가 무슨 의미인지 확인 가능)
// 서로의 장점이 약점이 됨
// 배열 + 객체의 장점만 흡수 => 울버린 => map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점 => 중복되는 값을 제어 X
// Set => 중복값도 받지 않으려고 만듦

// Map
// const bag = new Map();
// // console.log(bag);

// bag.set("color", "red"); // key, value

// console.log(bag);

// const myCup = new Map([
//   ["color", "white"],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);
// console.log(myCup);
// console.log(myCup.size); // 배열의 length

// myCup.set("type", "mini");
// console.log(myCup);

// Set

const bag = new Map();
console.log(bag);
bag.set("color", "red");
console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup.size);
myCup.set("type", "mini");
console.log(myCup);
