// 1.
const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

const ctx = canvas.getContext("2d");

// 2.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

// 3.
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// 4.
let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

// 5.
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  startX = e.clientX;
  startY = e.clientY;
  // console.log(startX, startY);
});

// 7.
canvas.addEventListener("mouseup", () => {
  isDrawing = false;

  ctx.beginPath();
});

// 6.
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

// 8.
toolbar.querySelector("#reset").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 9.
toolbar.addEventListener("change", (e) => {
  // console.log(e.target.value);

  if (e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if (e.target.id === "lWidth") lineWidth = e.target.value;
});
