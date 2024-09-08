const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// // save()
// // restore()
// // - save && restore를 활용한 작업
// // 1.
// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// // 2.
// ctx.save();
// ctx.translate(150, 150); // 0점
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// // 3.
// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// // 4.
// ctx.restore();

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// translate는 영점을 바꿈
// save()는 restore()가 오기 전까지 자신만의 공간에서 저장함

// - moveTo를 활용한 작업
// 5.
ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.moveTo(150, 150);

ctx.fillStyle = "#222";
ctx.fillRect(160, 160, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);

// moveTo => position:absolute 느낌
