// // Map()
// // Map의 메서드
// // set() : 값을 생성할 때
// // 생성 후 값 넣기
// // let bag = new Map();
// // bag.set("color", "red");
// // console.log(bag);

// // 생성과 값 동시에
// let myCup = new Map([
//   ["color", "white"],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);
// // console.log(myCup);

// // 메서드 체이닝
// // 여러개의 프로퍼티 한번에 넣을 수 있음
// // myCup.set("type", "mini");
// // myCup.set("purpose", "daliy");

// myCup.set("type", "mini").set("purpose", "daliy");
// // console.log(myCup);

// // get() : 값을 찾아올 때
// // console.log(myCup.get("color"));

// // size : 배열의 length와 같은 느낌
// // console.log(myCup.size);

// // has() : 앞에 있는 객체 안에 인자값으로 키가 있는지 true // false
// // console.log(myCup.has("color"));
// // console.log(myCup.has("colors"));

// // delete() : 특정 키값만 삭제, 제거
// console.log(myCup.delete("type")); // true
// // console.log(myCup);

// // clear() : 모든 값을 삭제, 제거
// // console.log(myCup.clear());
// // console.log(myCup);

// // keys() : key값만 가져옴
// console.log(myCup.keys()); // MapIterator

// // values() : value값만 가져옴
// console.log(myCup.values()); // MapIterator

// // entries() : iterating
// console.log(myCup.entries()); // MapIterator

// // iterator 객체
// // iterator 객체의 속성을 가지고 있어야지만 반복문이 가능
// for (let key of myCup.keys()) {
//   console.log(key);
// }
// for (let value of myCup.values()) {
//   console.log(value);
// }
// for (let entrie of myCup.entries()) {
//   console.log(entrie); // 배열
// }

let bag = new Map();
bag.set("color", "red");
console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["metrial", "ceramic"],
  ["capacity", "300ml"],
]);
myCup.set("type", "mini").set("purpose", "daliy");
console.log(myCup.entries());
// console.log(myCup);
for (let entrie of myCup.entries()) {
  console.log(entrie); // 배열
}
