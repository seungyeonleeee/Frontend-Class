// 시간 내장 함수
// function greeting() {
//   console.log("안녕하세요");
// }

// const timer = setInterval(greeting, 2000);
// clearInterval(timer);

// let counter = 0;
// const timer = setInterval(() => {
//   console.log("Hi");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer//재귀함수);
//   }
// }, 2000);

// 재귀함수 호출 (다시 재, 귀향 귀)

// let num = 0;
// const testFnc = () => {
//   num++;
//   document.write(num, `<br/>`);
//   if (num === 10) return;
//   testFnc(); //재귀함수
// };
// testFnc();

// return문 => 단순히 문장 종결이 아니라 값을 반환 후 종결
// return문 뒤에 값을 적지 않으면 "무의 반환값"을 반환 = 종결만 되는것처럼 보임
// return 값 => 반환 목적
// 함수가 어떤 연산 작업  => 값을 반환
// 연산작업이 완료X => 반환X

// setTimeout(() => {
//   console.log("3초가 지났습니다.");
// }, 3000);
