// 1,3,5,7,9,11,13,15,17,19중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     if (i > 10) {
//       console.log(i);
//     }
//   }
// }

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(`${arr[i]},`);
  }
}
