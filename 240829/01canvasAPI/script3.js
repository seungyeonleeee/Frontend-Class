const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 1.
ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

// 3.
// destination : 먼저 그려진 도형 || source : 나중에 그려진 도형
// 겹쳐져있는 도형 요소들의 그래픽 작업
// globalCompositeOperation => 속성
ctx.globalCompositeOperation = "destination-atop";

// 2.
ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(100, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
