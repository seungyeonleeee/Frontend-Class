// async & await

// const displayHello = () => {
//   console.log("Hello");
// };
// displayHello();

// const displayHello = async () => {
//   console.log("Hello");
// };
// // displayHello();
// console.log(displayHello()); // Promise

// Promise
// // 1
// const whatsYoutFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// // 3
// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// // 2
// whatsYoutFavorite().then(displaySubject).then(console.log);

// async => 함수형태
// await => 예약어 (특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
// await 예약어는 절대로 혼자서 독립적 사용 X
// async 함수 내부에서만 반드시 사용

// 1
const whatsYoutFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

// 3
const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};

// 2
// whatsYoutFavorite().then(displaySubject).then(console.log);

// 4
const init = async () => {
  const response = await whatsYoutFavorite();
  const result = await displaySubject(response);
  console.log(result);
};
init();
// 복습 시 async // await 쓰지말고 확인해보기
// 동시 출발이라 못찾아옴
