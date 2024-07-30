// const boolean = ture;
// console.log(typeof boolean);

// const test01 = null;
// const test02 = undefined;
// console.log(test01, test02);

// const name = "현빈";
// const classroom = 201;
// console.log(`${name}님 ${classroom}호 강의실로 오세요`);

// const jsBook = {
//   title: "지옥에서 온 깃허브",
//   pages: 330,
// };
// const jsBookTitle = jsBook.title;
// const jsBookPages = jsBook["pages"];
// console.log(jsBookTitle, jsBookPages);

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
//   [id]: "td449",
// };
// console.log(member);

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
// console.log(typeof sum);

// console.log(parseFloat("36.4"));

// const num = null;
// console.log(typeof num.toString());
// console.log(typeof String(num));

// console.log(Boolean(0));
// const json = "test.json";
// if (json) {
// }

// ex
// 사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨온도로 변환했을 때의 값을 출력해주세요
// 섭씨온도 = (화씨온도 - 32) / 1.8

// const temperature1 = parseFloat(
//   prompt("화씨온도를 입력해 주세요.", "ex) 36.5")
// );
// const temperature2 = ((temperature1 - 32) / 1.8).toFixed(2);
// console.log(
//   `화씨온도는 ${temperature1}도 이고 섭씨온도는 ${temperature2}도 입니다.`
// );

// ex
// 사용자의 몸무게가 적정체중인가
// 적정체중 = (키 - 100) * 0.9 => 오차범위 5

// const weight = parseFloat(prompt("몸무게를 입력해주세요.", "ex) 168"));
// const height = parseFloat(prompt("키를 입력해주세요.", "ex) 50"));
// const normalWeight = (height - 100) * 0.9;
// let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;
// result = result ? "적정체중입니다." : "적정체중이 아닙니다.";
// alert(result);

//ex
// 사용자로부터 3개의 값을 받으세요
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요."
// 위 3개의 값이 10,000원 이하라면 "예산관리 잘하셨어요."

// const pay1 = Number(prompt("교통비"));
// const pay2 = Number(prompt("식대"));
// const pay3 = Number(prompt("음료비"));
// const result = pay1 + pay2 + pay3;
// result <= 10000 ? alert("예산관리 잘하셨어요.") : alert("예산관리 잘해주세요.");

// if (isNaN(sum) || sum === 0) {
//   alert("잘못 입력했습니다.");
// } else if (sum <= 10000) {
//   alert("예산관리 잘하셨어요.");
// } else {
//   alert("예산관리 잘해주세요.");
// }

// let x = 10;
// let y = 4;

// // x--;
// console.log(x--);

// y = y + x;
// console.log(y);
// y += x;
// console.log(y);

// console.log(2 != "2");
// console.log(2 !== "2");

// let varTest = 2;
// varTest = "Hi";
// console.log(varTest);

// const x = 10;
// if (x > 5) {
//   console.log(`${x}은 5보다 큽니다`);
// }
// if (x < 20) {
//   console.log(`${x}은 20보다 작습니다`);
// }

// const userInput = prompt("이름을 입력하세요.");
// if (userInput === null) {
//   alert("취소했습니다.");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("자바스크립트 시험점수"));
// if (score !== null) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C3학점");
//   }
// }

// if (score !== null) {
//   if (score >= 90) alert("A학점");
//   else if (score >= 80) alert("B학점");
//   else alert("C학점");
// }

// const num1 = 10;
// const num2 = 20;

// let small;
// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }
// console.log(small);

// small = num1 < num2 ? num1 : num2;
// console.log(small);

//ex
// 사용자에게 숫자 1개를 받습니다
// 해당 숫자가 짝수인지 홀수인지 확인하여, 짝수라면 알림창에 "짝수" 출력
// 홀수라면 알림창에 "홀수"라고 출력
// 짝수는 반드시 2로 나누어 떨어짐
// 홀수는 2로 나눴을 때 반드시 나머지 존재
// 단, 사용자가 취소 버튼을 클릭할 수 있다는 것은 감안하여 예외조항처리 추가
// 삼항조건연산자로

// const userNum = parseInt(prompt("숫자를 입력하세요"));
// const resultNum = userNum % 2;

// if (userNum !== null) {
//   resultNum == 0 ? alert("짝수") : alert("홀수");
// }

let userNum = prompt("숫자를 입력하세요.");
if (userNum !== null) {
  userNum = parseInt(userNum);
  userNum % 2 === 0 ? alert(`${userNum} : 짝수`) : alert(`${userNum} : 홀수`);
}
