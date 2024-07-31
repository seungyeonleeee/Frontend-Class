// 중첩 for문 (행과 열을 만들 때 많이 씀)
// for (let i = 1; i <= 3; i++) {
//   //행 의미
//   for (let k = 1; k <= 2; k++) {
//     //열 의미
//     document.write(`${i}행 ${k}열`);
//   }
//   document.write("<br/>");
// }

// 자바스크립트 for문을 활용해서 구구단 2단~9단까지 웹브라우저 화면에 출력하세요.

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>구구단 ${a}단</h2>`);
  //템플릿 리터럴 문법은 태그도 적용 가능
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x ${b} = ${a * b}`);
    document.write("<br/>");
  }
}
