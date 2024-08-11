//전개연산자
// const fruits = ["apple", "banana", "grape"];
// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 3, 7, 4));

// function addNum(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(addNum(1, 3, 7, 4));

// function displayFavorites(first, ...favs) {
//   const str = `가장 좋아하는 과일은 ${first} 입니다.`;
//   return str;
// }
// console.log(displayFavorites("사과", "포도", "토마토"));

// 시간 내장 함수
// setInterval()
// function greeting() {
//   console.log("Hi");
// }
// const timer = setInterval(greeting, 2000);
// clearInterval(timer);

// let counter = 0;
// const timer = setInterval(() => {
//   console.log("Hi");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// let num = 0;
// const testFnc = () => {
//   num++;
//   document.write(num, `<br/>`);
//   if (num === 10) return;
//   testFnc();
// };
// testFnc();

// setTimeout(() => {
//   console.log("3초가 지났습니다.");
// }, 3000);
