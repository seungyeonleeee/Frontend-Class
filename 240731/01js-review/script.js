// 1. 사용자로부터 태어난 년도를 받으세요
// 2. 태어난 년도를 기준으로 나이가 몇살인지 #result 공간에 출력해주세요
// 3. innerText 속성을 활용하시면, 특정 Node 안에 텍스트 문장을 삽입 가능

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const birthYear = Number(prompt("태어난 년도를 입력해주세요."));
//   const thisYear = new Date().getFullYear();
//   const resultYear = thisYear - birthYear + 1;
//   const result = document.querySelector("#result");
//   console.log(result);
//   result.innerText = `${resultYear}세 입니다.`;
// });

// const month = Number(prompt("현재는 몇월 입니까?"));
// if (month >= 1 && month <= 12) {
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행가기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("잘못입력하셨습니다");
// }

// 아래 id 및 pw는 A사용자의 id & pw 입니다.
const id = "ezen";
const pw = 1234;

// 1. 사용자로부터 id 및 pw 정보값을 순차적으로 받습니다!!
// 2. 사용자가 입력한 id값이 위에 저장된 id와 일치하면, pw값을 받을 수 있는 단계로 넘어가고, 만약 id값이 일치하지 않으면 값이 일치하지 않다는 알림창 띄우기
// 3. pw값을 입력하는 단계 역시, pw가 일치하면 사용자님 반갑습니다 // pw가 일치하지 않는다면 pw값이 일치하지 않습니다. 라는 알림창 띄우기

// const userId = prompt("아이디를 입력하세요.");
// if (userId !== null) {
//   if (userId === id) {
//     const userPw = Number(prompt("비밀번호를 입력하세요."));
//     if (userPw === pw) {
//       alert(`${userId}님 반갑습니다.`);
//     } else {
//       alert("비밀번호가 일치하지 않습니다.");
//       location.reload();
//     }
//   } else {
//     alert("아이디가 일치하지 않습니다.");
//     location.reload();
//   }
// }

// form 요소 (input 태그) 입력 값은 절대 전역요소를 찾을 수 없음
// event 액션이 발생한 이후에 vlaue 값을 찾아올 수 있음
// passing 단계에서 전역요소 input을 먼저 찾고 끝내기 때문에

// const button = document.querySelector(`input[type="button"]`);
// console.log(button);

// const showSales = () => {
//   const price = document.querySelector("#price").value;
//   const rate = document.querySelector("#rate").value;
//   const savePrice = price * (rate / 100);
//   const resultPrice = price - savePrice;

//   document.querySelector(".bottomInfo p").innerText = `
//   상품의 원래 가격은 ${price}원이고, 할인율은 ${rate}% 입니다.
//   ${savePrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.
//   `;
// };
// button.addEventListener("click", showSales);

// const subject = prompt("신청할 과목은 선택하세요.", "1. HTML / 2. CSS / 3. JS");
// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS을 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS을 신청하셨습니다!");
//       break;
//     default:
//       alert("1~3까지 정수로 입력해주세요.");
//   }
// }

//반복문

// const students = ["David", "Jullien", "Peter"];

// //기본 for문
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// //forEach문
// students.forEach((student, index, arr) => {
//   console.log(`${index + 1}번째 학생 : ${student} in ${arr}`);
// });

// // for...of문
// for (let student of students) {
//   console.log(student);
// }

// const theBook = {
//   title: "Jabascript",
//   page: 250,
//   published: "24.07.31",
// };

// // for...in문
// for (key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }

// let stars = Number(prompt("별의 개수 입력"));

// // //while문
// // while (stars > 0) {
// //   document.write("*");
// //   stars--;
// // }

// //do...while문
// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);

// let sum = 0;

// const calcSum = (n) => {
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// };
// calcSum(10);

//break문
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }
// document.write("=== The End ===");

//중첩 for문
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`);
//   }
//   document.write("<br/>");
// }

// 자바스크립트 for문을 활용해서 구구단 2단~9단까지 웹브라우저 화면에 출력하세요.

// for (let a = 2; a <= 9; a++) {
//   document.write(`<h2>구구단 ${a}단</h2>`);
//   for (let b = 1; b <= 9; b++) {
//     document.write(` ${a} x ${b} = ${a * b}`);
//     document.write(`<br/>`);
//   }
// }

//중첩 for문을 이용해 1부터 25까지 5행 5열 테이블을 만들어라.
// let num = 1;
// let t = `<table border=1>`;
// for (let i = 1; i <= 5; i++) {
//   t += `<tr>`;
//   for (let k = 1; k <= 5; k++) {
//     t += `<td>${num}</td>`;
//     num++;
//   }
// }
// t += `</table>`;
// document.write(t);
