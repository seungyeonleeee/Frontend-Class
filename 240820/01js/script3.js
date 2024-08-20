// 1. Iterable => 순서대로 처리할 수 있는
// Iterable 객체 => 객체 안에 담겨있는 각각의 독립적인 아이템 요소를 찾아서 어떤 실행을 순서대로 처리할 수 있도록 할 수 있는 객체

// JS 안에서 Iterable 객체 => 배열 & 문자열 밖에 없음 (객체 X)

// 객체 for in문?

// Iterable 객체의 조건
// 1) for...of 반복문이 가능
// 2) 전개연산자 구문 사용 가능
// 3) 구조분해할당

// 문자열 조건 확인해보기
// let hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// let chArray = [...hi];
// console.log(chArray);

// let [ch1, ch2, ch3, ch4, ch5] = hi;
// console.log(ch1, ch2, ch3, ch4, ch5);

// 배열 조건 확인해보기
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// 내가 만든 배열의 부모 [[Prototype]] : Array(0)
// Symbol(Symbol.iterator)
// 부모의 속성을 상속 받기 때문에 배열이 Iterable 객체

// let it = arr[Symbol.iterator]();
// console.log(it); // Array Iterator
// // 부모의 Symbol(Symbol.iterator) 이 속성 때문에 it도 이터러블 객체가 됨
// // constructor => 생성자함수

// console.log(it.next()); // value : 1
// // done(false)는 뒤에 아이템이 더 남아있다는 뜻
// console.log(it.next()); // value : 2
// console.log(it.next()); // value : 3
// console.log(it.next()); // value : 4
// console.log(it.next()); // value : 5
// console.log(it.next()); // value: undefined, done: true
// 이터러블한 객체가 되려면 이터레이터 객체 속성이 반드시 있어야 됨
// 이터레이터 객체 속성은 next()함수를 가지고 있음
// next() : 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수
// 이것이 존재하기 때문에 반복문을 실행할 수 있음

////////////////////

// 제너레이터

// 이터러블하지 못한 데이터 자료구조 => 반복문 X

// 제너레이터는 함수

// 태생적으로 이터러블하지 못한 요소들을 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

// 일반함수
// function fnc() {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// }
// fnc();

// 일반함수를 이터러블한 속성을 갖게끔 해보기

// 제너레이터 함수
function* fnc() {
  // yield : 일시정지
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();
console.log(g1);

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i); // 1 2 3
}

// for문 사용 가능 => 이터러블한 객체
