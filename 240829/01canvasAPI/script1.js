const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 도형 회전
// 1.
// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// // 3.
// ctx.translate(150, 150);

// // 4.
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);

// // 2.
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(150, 150, 100, 100);
// // rotate를 먼저 한 후 150, 150 이동

// 도형 확대 & 축소 배율
// 5.
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

// 6.
ctx.save();
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
// 크기 3배 300, 2배 100
// 위치에도 3배 2배 영향을 줌
// 8.
ctx.restore();
// 7.
ctx.strokeRect(200, 50, 100, 50);
