const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// canvasAPI로 이미지 가져오기
// // 1. 이미지 객체화
// const img = new Image(); // 정석

// // 3. drawImage(img소스, x, y) 함수
// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// // });

// // 4. drawImage(img소스, x, y, width, height) 함수
// img.onload = function () {
//   // ctx.drawImage(img, 0, 0, 300, 200);
//   // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//   // 5.
//   // (이미지, 캡처하고자 하는 x좌표, y좌표, width, height,
//   //   출력하고자 하는 x좌표값, y좌표값, 출력하고자 하는 width, height)
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };
// // 3, 4 둘 다 사용 가능

// // 2. 이미지 경로 붙이기
// img.src = "./img/cat.jpg";

// 6.  clipping mask
const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "./img/bird.jpg";

ctx.beginPath();
ctx.arc(480, 380, 200, 0, Math.PI * 2, false);
ctx.clip();
