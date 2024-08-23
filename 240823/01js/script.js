// Callback
// 동기 방식
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// 멀티스레드 => 비동기 방식인것처럼
// 1.
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 1000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// 2.
const displayA = () => {
  console.log("A");
};
const displayB = (callback) => {
  setTimeout(() => {
    callback();
    console.log("B");
  }, 1000);
};
const displayC = () => {
  console.log("C");
};
displayA();
displayB(displayC);
