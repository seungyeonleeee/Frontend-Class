// 함수에서 만날 수 있는 전개연산자 구문

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

//전개연산자 구문은 일반 매개변수보다 무조건 뒤에 써야 함
function displayFavorites(first, ...favs) {
  const str = `가장 좋아하는 과일은 ${first} 입니다.`;
  return str;
}
console.log(displayFavorites("사과", "포도", "토마토"));
