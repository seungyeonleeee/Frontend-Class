// 1.
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2.
// 타원
// rect() => 사각형
// arc() => 원
// ellipse() => 타원

// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClock)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// // rotation : 음수값 가능
// ctx.closePath();
// ctx.strokeStyle = "blue";
// ctx.stroke();

// 3.
// ctx.scale(x, y) 무조건 도형이 시작하기 전에 넣어야 됨
ctx.scale(1, 0.7);

ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.closePath();
// ctx.scale(1, 0.7);
ctx.stroke();

// scale 상속
ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();
