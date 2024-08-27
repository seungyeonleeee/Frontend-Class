// 1.
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2.
// 2차 베지에 곡선
// quadracticCurveTo(cpx, cpy, endx, endy)
// ctx.beginPath();
// ctx.moveTo(50, 200); // 곡선의 시작점
// ctx.quadraticCurveTo(200, 50, 350, 200);
// // ctx.closePath();
// ctx.stroke();

// 3.
// 물결 만들기
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// 4.
// 3차 베지에 곡선
// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endx, endy)
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// // ctx.closePath();
// ctx.strokeStyle = "green";
// ctx.stroke();

// 특정 스타일을 저장해놓는 기능
let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 250);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle);
ctx.fillStyle = "green";
ctx.fill(circle);
