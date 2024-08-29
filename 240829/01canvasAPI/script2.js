const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// 2.
const origin = {
  x: 200,
  y: 200,
};

// 6.
const alpha = 0.7;

// 버튼을 누를 때 마다 중심축 회전
// 1.
ctx.fillStyle = "#ccc";
// ctx.fillRect(200, 200, 100, 100);
// canvas는 인라인 스타일만 적용
// 3.
ctx.fillRect(origin.x, origin.y, 100, 100);

// 9.
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

// 4.
button.addEventListener("click", () => {
  // 8.
  let color = randomRGB();

  // 7.
  ctx.globalAlpha = alpha;

  // 4.
  ctx.translate(origin.x, origin.y);
  // 버튼을 클릭할 때마다 원점이 200씩 바뀜
  ctx.rotate((Math.PI / 180) * 30);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 100, 100);

  // 5.
  ctx.translate(-origin.x, -origin.y);
});
