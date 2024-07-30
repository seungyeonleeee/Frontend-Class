// let x = 10;
// let y = 4;

// x--;
// console.log(--x);

// y++;
// console.log(y);

// let result = x + y;
// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

// y = y + x;
// y += x;

// y = y - x;
// y -= x;

// y = y * x;
// y *= x;

// y = y / x;
// y /= x;

// y = y % x;
// y %= x;

// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";
// document.write(str);

// console.log(2 != "2"); //느슨한 연산자
// console.log(2 !== "2"); //엄격한 연산자 (자료형태까지 검사)

// let varTest = 2;
// varTest = "Hi";

// if(조건식 공간 => true){실행문 공간}

// const x = 10;

// if (x > 5) {
//   console.log(`${x}은 5보다 큽니다`);
// }
// if (x < 20) {
//   console.log(`${x}은 20보다 작습니다`);
// }

// if(){
//   //조건식이 true인 경우
// }else{
//   //조건식이 false인 경우
// }

// const userInput = prompt("이름을 입력하세요");
// if (userInput === null) {
//   alert("최소했습니다");
// } else {
//   alert(`${userInput}님 환영합니다`);
// }

// const score = Number(prompt("자바스크립트 시험점수"));

// if (score !== null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

//실무에서 더 많이 쓰임
//자바스크립트는 다중패러다임언어라 가능
// if (score !== null) {
//   if (score >= 90) alert("A 학점");
//   else if (score >= 80) alert("B 학점");
//   else alert("C 학점");
// }

const num1 = 10;
const num2 = 20;

let small;

// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }
// console.log(small);

small = num1 < num2 ? num1 : num2;
console.log(small);
