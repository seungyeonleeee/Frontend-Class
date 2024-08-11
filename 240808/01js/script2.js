// const userAnswer = prompt("우리 공부한지", "2024-06-14");
// const accent = document.querySelector(".accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");

// const now = new Date();
// const firstDay = new Date(userAnswer);

// // 밀리초로 변환
// const toNow = now.getTime();
// const toFirst = firstDay.getTime();

// const passedTime = toNow - toFirst;

// const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

// accent.innerText = `📆 ${passedDate}일`;

// // console.log(passedDate);

// // Function을 활용해서 효율적으로 쓰기
// // Function Hoisting
// // Hoisting : 끌어올리다

// // 기본적으로 화살표함수는 Hoisting 기능 X
// // 반드시 선언 => 호출

// // function 함수 기명함수에서는 Hoisting 가능 (익명함수에서는 X)
// calcDate(100);
// calcDate(200);
// calcDate(365);
// calcDate(500);

// function calcDate(days) {
//   future = toFirst + days * (24 * 60 * 60 * 1000);
//   someday = new Date(future);
//   year = someday.getFullYear();
//   month = someday.getMonth() + 1;
//   date = someday.getDate();

//   document.querySelector(
//     `#date${days}`
//   ).innerText = `${year}년 ${month}월 ${date}일`;
// }

// // calcDate(100);
// // calcDate(200);
// // calcDate(365);
// // calcDate(500);

///////////////////////////////////////////////////////

// 1. 사용자에게 값을 받는다. prompt() // 받은 값은 계산을 위해 변수에 담기
// 2. 현재 시간을 구한다.
// 3. 현재 시간 - 사용자에게 받은 값으로 화면에 출력
// 4. 사용자에게 받은 값을 100/200/365/500을 더하여 화면에 출력 (함수-효율성)

const accent = document.querySelector(".accent");

const userDate = prompt("날짜를 입력하세요", "2024-06-14");
const now = new Date();
const firstDay = new Date(userDate);

const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;

const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDate}일`;

const date100 = document.querySelector("#date100");
const date200 = document.querySelector("#date200");
const date365 = document.querySelector("#date365");
const date500 = document.querySelector("#date500");

const calcDate = (days) => {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();

  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
