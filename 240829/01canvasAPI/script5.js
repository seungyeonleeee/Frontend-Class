const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 1.
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 5,
  dy: 5,
  color: "#222",
};

// 2.
const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
};

// 3.
const move = () => {
  // 6.
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 8.
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 4.
  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;

  // 7.
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0)
    circle.dx = -circle.dx;
  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0)
    circle.dy = -circle.dy;

  // 5.
  // 재귀함수
  requestAnimationFrame(move);
};
move();
