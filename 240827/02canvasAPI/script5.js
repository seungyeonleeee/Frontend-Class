// 개구리 만들기
// 1.
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2. face
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

// 3. eye
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.fill();
ctx.stroke();

// 4. eye - circle
ctx.beginPath();
ctx.arc(120, 80, 10, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 10, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();

// 5. mouse
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI, false);
// ctx.closePath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();
