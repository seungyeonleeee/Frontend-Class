// Script Scope
// sum = 0; // 전역 변수
// var sum = 0; // 전역 변수
// let sum = 0; // 스크립트 변수
const calcSum = (n) => {
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
};
calcSum(10);
