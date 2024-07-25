//map()
const output = document.querySelector("#output");
//console.log(output);

const arr = [2, 1, 3, 10];

//const arr1 = arr.map((item) => item * 2);

//forEach & for & for of - 원본데이터를 바꿈
//map() - 원본데이터에서 추가

//sort()
//기본값 : 유니코드로 오름차순
//a, b 안에 있는 모든 내용을 비교하겠다
// arr.sort((a, b) => {
//   if (a > b) {
//     return 1; //양수
//   }
//   if (a === b) {
//     return 0;
//   }
//   if (a < b) {
//     return -1; //음수
//   }
//   //인덱스 번호는 양수를 뒤로 보냄 [음수->양수]
// });

//축약형
// arr.sort((a, b) => {
//   //오름차순
//   return a - b;
//   //내림차순
//   //return b - a;
// });

//다중패러다임
arr.sort((a, b) => b - a);

output.innerText = arr;

//jss 문법에서는 forEach & for 사용 X
