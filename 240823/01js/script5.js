// // 1
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 도우 준비");
//     callback();
//   }, 1000);
// };

// // 3
// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("토핑 완료");
//     callback();
//   }, 1000);
// };

// // 4
// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("굽기 완료");
//     callback();
//   }, 1000);
// };

// // 5
// console.log("피자를 주문합니다"); // 가장 처음 실행

// // 2
// step1(
//   // 6
//   () => {
//     step2(() => {
//       step3(() => {
//         console.log("피자가 준비되었습니다");
//       });
//     });
//   }
// );

// Callback 함수를 Promise로 바꾸기
// 1
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다");
  });
};
// 위와 동일 const pizza = new Promise();

// 2
// console.log(pizza());

// 4
const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 1000);
  });
};

// 5
const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
};

// 7
const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 1000);
  });
};

// 3
// pizza()
//   .then((result) => step1(result))
//   // 6
//   .then((result) => step2(result))
//   // 8
//   .then((result) => step3(result))
//   // 9
//   .then((result) => console.log(result))
//   // 10
//   .then(() => console.log("피자가 준비되었습니다"));

// 실행코드 축약 (같은 값 생략 = promise 문법)
pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => console.log("피자가 준비되었습니다"));

// Promise도 콜백지옥의 완벽한 대체제가 될수는 없음
