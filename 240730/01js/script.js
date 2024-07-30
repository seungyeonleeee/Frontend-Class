// <변수명 선언 시, 유의사항>
// 1. 변수명으로는 예약어 사용불가
// 예약어 : 이미 자바스크립트에서 쓰고 있는 내장 키워드 document,window,location...

// 2. $ , _ , 영문자만 변수명 첫단어에 들어갈 수 있음
// 단, 변수명 중간 혹은 마지막에는 숫자 가능

// 3. 변수명은 반드시 대,소문자를 가짐

// 4. 변수명 작명 시 3가지 방법
//  1) 카멜표기법(낙타) : numberSum - 가장 대중적
//  2) 스네이크표기법(뱀) : number_sum
//  3) 헝가리안표기법 : 첫번째단어 대문자 - 거의 안씀

// 5. 변수명은 반드시 직관적이여야 함!

///////////////////////////////////

// const boolean = ture;
// console.log(typeof boolean);

// const test01 = null;
// const test02 = undefined;
//null : 유효하지 않은 값 - 값을 넣을 수 없음

//undefined : 미정 값 (값이 정의되지 않았다라는 뜻의 값) - 값을 넣을 수 있음

// const name = "현빈";
// const classroom = 201;
// console.log(name + "님 " + classroom + "호 강의실로 오세요");
// console.log(`${name}님 ${classroom}호 강의실로 오세요`);

// const jsBook = {
//   // 속성 : property
//   // key: value
//   title: "지옥에서 온 깃허브",
//   pages: 330,
// };
// // 객체 안에 담긴 값을 찾아오는 방법
// // 1. 온점 표기법
// const jsBookTitle = jsBook.title;
// console.log(jsBookTitle);

// // 2. 대괄호 표기법
// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// // 객체의 key값은 재할당 가능
// jsBook.title = "천국에서 온 깃허브";
// console.log(jsBook);

// console.log(typeof jsBook);

// const arr = ["red", "green", "blue"];
// console.log(arr[arr.length - 1]);

// let test01 = Symbol();
// let test02 = Symbol();
// console.log(test01 === test02);

// let id = Symbol("userId");
// const member = {
//   name: "Yeon",
//   [id]: 12345,
// };
// console.log(member);

// const fncTest = () => {
//   console.log("click");
// };

// let a = 10;
// let b = a;
// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };
// let obj2 = obj1;
// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits];
// favorite[1] = "grape";
// console.log(fruits, favorite);

// const one = "20";
// const two = 10;
// const sum = one + two;

// console.log(parseFloat("36.4"));

// const num = null;
// // console.log(typeof num.toString());
// console.log(typeof String(num));

// console.log(Boolean(0));
// const json = "test.json";
// if (json) {
// }

// const number = prompt("자연수를 입력해주세요.");
// console.log(number);
