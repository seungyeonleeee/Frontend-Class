// 함수 선언
// 함수의 매개변수 반드시 필수 X / 필요한 상황에만
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값 삽입

// 함수의 변천사

// 일반함수 / function함수
// function calcSum(매개변수(총알)) {실행문}
// calcSum(인자값/인수값(=매개변수))

// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }
// calcSum();

// 익명함수
// 함수는 자료형이기 때문에 변수에 담으면 변수이름이 곧 함수이름이다
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };
// calcSum();

// 화살표함수 / ()=>{} 화살표 모양이 function키워드를 대체할 수 있도록 해줌
// const calcSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };
// calcSum();

// 매개변수가 필요한 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두수의 합은 ${result}`);
// }
// sum(1, 2);

// const num = Number(prompt("숫자를 입력하세요."));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다.`);

// return - 함수 안에 쓰여진 지역변수를 다른 함수에서 쓰고 싶을 때 (반환)

// 기본 매개변수
// 왼쪽부터 채워나감
// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }
// multiple(2, 4);

// 예) 올리브영 프론트엔드 개발자
// 회원가입 => *이름, *나이, 피부타입
// 기본 매개변수로 피부타임 = "복합성"

// 콜백함수
// 함수안에 함수
// 안에 있는 함수의 호출 권한은 부모 함수
document.body.innerHTML += `<button id="btn">Click</button>`;
const button = document.querySelector("#btn");
function display() {
  alert("click");
}
button.addEventListener("click", display);
