// 1.
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2.
// 원 혹은 호
// arc(x, y, r, startAngle, endAngle, counterClockwise)

// 3.
// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// // 360도 = 2파이 // 180도 = 파이
// // true = 반시계방향
// ctx.closePath();

// ctx.fillStyle = "green";
// ctx.strokeStyle = "white";
// ctx.fill();
// ctx.stroke();

// 4.
// 반원
ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(250, 100, 50, 0, Math.PI, false);
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();

ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.closePath(); // => 선을 이어버림
ctx.strokeStyle = "rgb(0, 0, 255)";
ctx.stroke();
