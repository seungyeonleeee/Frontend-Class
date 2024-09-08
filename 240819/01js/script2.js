// 1. 매개변수 기본값

// const hello = (name, message) => {
//   console.log(`${name}님! ${message}`);
// };
// const hello = (name, message = "안녕하세요!") => {
//   console.log(`${name}님! ${message}`);
// };

// hello("원빈", "반갑습니다!");
// hello("현빈"); // 현빈님! undefined

// 2. 전개연산자
// 1) 함수의 매개변수
// 이터러블한 객체, 재활용이 가능
// const addNum = (...numbers) => {
//   // const result = num01 + num02;
//   // return result;

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 2));
// console.log(addNum(1, 2, 3));
// console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입 변수값의 독립화
// const fruits = ["apple", "banana", "cherry"];
// // const favorite = fruits;  // 원본데이터도 변경됨
// const favorite = [...fruits]; // 원본데이터는 그대로 두고 새로운 배열을 만든다

// favorite[1] = "grape";

// console.log(fruits, favorite);

// 3) 서로 다른 2개의 배열을 하나로 병합
// const animal = ["bird", "cat"];
// const fruits01 = ["melon", "fineapple"];

// ES6 이전 문법
// console.log(animal.concat(fruits01));

// ES6 이후 문법
// console.log([animal, fruits01]); // 중첩배열
// console.log([...animal, ...fruits01]);

// 4) 구조분해할당, 전개연산자 구문
// let [teacher, ...student] = ["Kim", "Lee", "Park", "Choi"];
// console.log(teacher, student);

// 3. 객체 key 접근방법
// 대괄호 표기법
// const book = {
//   title: "Javascript",
//   pages: 500,
// };
// book.published = "2024-08-19"; // 온점표기법
// console.log(book);

// console.log(book["title"]); // 대괄호 표기법 (객체의 key를 대괄호로)

// 4. 객체의 키 생성 방법 (그리 많이 쓰지는 않음)
// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키",
//   [`${add(10, 20)} key`]: "계산 키",
// };

// console.log(obj);

// 5. 객체 축약법 (React에서 많이 사용됨)
// let user = {
//   name: "슛돌이",
// };
// user.age = 25;
// console.log(user);

// // 객체 선언 시, key 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일하다면 한번만 써도 인식함

// const makeUser = (name, age) => {
//   return {
//     // name: name,
//     // age: age,

//     // 객체 축약법
//     name,
//     age,
//   };
// };
// const user1 = makeUser("영심이", 20);
// console.log(user1);

// 6. 객체에 심벌키 사용 방법
// 심벌 : 유일무이한 값을 생성할 때 사용
// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2); // false

// const id = Symbol("id"); // id라는 이름을 부여받은 유일무이한 값
// const tel = Symbol("telephone number");

// const member = {
//   name: "David",
//   age: 20,
//   [id]: 1234, // 변수이기 때문에 따옴표 쓰지 않음
//   [tel]: () => {
//     prompt("당신의 전화번호는?");
//   },
// };
// console.log(member);

// for (let item in member) {
//   console.log(`${item}`); // 객체 안에 있는 key값을 은폐하고 싶을 때 사용 가능
// }

// console.log(member[id]);
// // console.log(member[tel]());

// 7. 구조분해할당 (React에서 많이 사용됨)
// JS 컴포넌트화 => 함수형 // Class

// 배열의 구조분해할당
// const fruits02 = ["사과", "복숭아"];
// // 비효율적
// // const apple = fruits02[0];
// // const peach = fruits02[1];

// // 구조분해할당
// const [apple, peach] = fruits02; // fruits02가 배열이기 때문에 []

// console.log(apple, peach);

// // 객체의 구조분해할당
// const member03 = {
//   name: "David",
//   age: 20,
// };
// // const { name, age } = member03;
// // console.log(name, age);
// const { name: userName, age } = member03;
// console.log(userName, age);

// 8. 배열 메서드
// map() // filter() // reduce()
// map() : 배열안에 있는 요소들에게 특정 함수 안에 있는 기능을 동일하게 실행, 적용 => 새로운 배열로 다시 생성

// const hello = (name, message) => {
//   console.log(`${name}님 ${message}`);
// };
// hello("원빈", "반갑습니다");
// hello("현빈");

// const addNum = (...numbers) => {
//   // const result = num01 + num02;
//   // return result;

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 2, 3, 4, 5));

// const fruits = ["apple", "banana", "cherry"];
// // const favorite = fruits;
// const favorite = [...fruits];

// favorite[1] = "grape";

// console.log(favorite);
// console.log(fruits);

// const animal = ["bird", "cat"];
// const fruits01 = ["melon", "fineapple"];

// console.log([animal, fruits01]);
// console.log([...animal, ...fruits01]);

// let [teacher, ...student] = ["Kim", "Lee", "Park", "Choi"];
// console.log(teacher, student);

// const book = {
//   title: "Javascript",
//   pages: 500,
// };
// book.published = "2024-08-19";
// console.log(book);
// console.log(book["title"]);

// let user = {
//   name: "슛돌이",
// };
// user.age = 25;
// console.log(user);

// const makeUser = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };
// const user1 = makeUser("영심이", 20);
// console.log(user1);

// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2);

// const id = Symbol("id");
// const tel = Symbol("telephone number");

// const member = {
//   name: "David",
//   age: 20,
//   [id]: 1234,
//   [tel]: () => {
//     prompt("당신의 전화번호는?");
//   },
// };
// console.log(member);

// for (let item in member) {
//   console.log(item);
// }
// console.log(member[id]);
// console.log(member[tel]());

// const fruits02 = ["사과", "복숭아"];
// // const apple = fruits02[0];
// // const peach = fruits02[1];

// const [apple, peach] = fruits02;

// console.log(apple, peach);

// const member03 = {
//   name: "David",
//   age: 20,
// };
// // const { name, age } = member03;
// // console.log(name, age);
// const { name: userName, age } = member03;
// console.log(userName, age);
