// 일반함수 / function함수
// function calcSum() {
//   let sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}이다.`);
// }
// calcSum();

// 익명함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}이다.`);
// };
// calcSum();

// 화살표함수
// const calcSum = () => {
//   let sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}이다.`);
// };
// calcSum();

// 매개변수
// function sum(a, b) {
//   const result = a + b;
//   console.log(`두 수의 합은 ${result}이다`);
// }
// sum(2, 3);

// const num = Number(prompt("숫자를 입력하세요"));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// alert(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

// 기본 매개변수
// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }
// multiple(1, 2);

// 콜백함수
// document.body.innerHTML = `<button>Click</button>`;
// const btn = document.querySelector("button");
// function display() {
//   alert("click");
// }
// btn.addEventListener("click", display);

//예제
// 사용자로부터 이름과 나이를 전달 받으세요
// 반드시 콜백함수를 통해서 사용자의 값을 활용해 알림창으로
// "안녕하세요 00님 나이가 00세 이네요"

// function showData(name, age) {
//   alert(`안녕하세요 ${name}님 나이가 ${age}이네요`);
// }

// function getData(callback) {
//   const userName = prompt("이름 입력");
//   const userAge = Number(prompt("나이 입력"));
//   callback(userName, userAge);
// }
// getData(showData);

// 고차함수
// const init = () => {
//   return (a, b) => {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`${init()(20, 30)}`);

// window 시간 관련 내장 함수 3대장
// setInterval : 일정시간 지연 후 반복실행
// clearInterval : setInterval을 막음
// setTimeout : 일정 시간 지연 후 실행

// JS에서 자주 만날 콜백함수 예제들
// CallBack 1
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// };
// const timer = setInterval(cbFunc, 300);

// CallBack 2
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => (item + 5) * index);
// console.log(arr);
// console.log(newArr);

// this 객체

// CallBack 3
// setTimeout(function () {
//   console.log(this);
// }, 500);

// CallBack 4
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach(function (item) {
//   console.log(this);
// });

// CallBack 5
// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

// CallBack 6
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };
// obj.logValues();

// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };
// const callback = obj1.func();
// setTimeout(callback, 1000);

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };
// setTimeout(obj1.func.bind(obj1), 1000);

//예제
// 현재 보고있는 웹브라우저 문서 내 버튼을 하나 만들어주세요
// 그리고, 해당 버튼을 클릭할 때 마다 바탕화면 배경 색상이 변경되도록 해주세요
// 변경되어야 하는 색상은 white, yellow, aqua, purple 색상이며,
// 마지막 purple 색상 다음번 색상은 첫번째 white 색상으로 변경
// 무한으로 색상이 변경되어 돌아갈수 있도록
// document.body.innerHTML = `<button>Click</button>`;
// const btn = document.querySelector("button");
// const color = ["white", "yellow", "aqua", "purple"];
// let i = 0;
// btn.addEventListener("click", () => {
//   i++;
//   if (i > color.length) i = 0;
//   document.body.style.backgroundColor = color[i];
// });

// 사용자로부터 수학점수를 받으세요
// 사용자로부터 국어점수를 받으세요
// 함수를 사용해서 수학+국어 점수의 평균점수를 계산하여 알림창을 통해서 출력
// const subject = ["수학", "국어"];
// function testAvg() {
//   let sum = 0;
//   for (let i = 0; i < subject.length; i++) {
//     sum += Number(prompt(`${subject[i]}점수는?`));
//   }
//   let avg = sum / subject.length;
//   return avg;
// }
// alert(`평균 점수는 ${testAvg()}점 입니다.`);

// 1,3,5,7,9,11,13,15,17,19중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요

// 사용자에게 숫자 1개를 받습니다
// 단, 무조건 1보다 큰 숫자를 받습니다.
// 사용자에게 받은 숫자를 기준으로 1부터 해당 숫자까지의 수들 가운데 짝수만 찾아서 더한 결과값을 콘솔창에 출력하세요
//ex) 사용자 - 6 => 2+4+6=12

// const num = Number(prompt("1보다 큰 숫자 입력"));
// let sum = 0;
// if (num > 1 && num !== null) {
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// 사용자로부터 2개의 숫자를 받습니다
// 2개의 숫자의 최대공약수를 찾아서 콘솔창 출력
// 최대공약수란: 복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수
// ex) 4와 12의 최대공약수 = 4
const num01 = Number(prompt("첫번째 숫자 입력"));
const num02 = Number(prompt("두번째 숫자 입력"));

function getGCD() {
  const max = num01 > num02 ? num01 : num02;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num01 % i === 0 && num02 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
alert(`${num01} 와 ${num02} 의 최대공약수는 ${getGCD()} 입니다.`);
